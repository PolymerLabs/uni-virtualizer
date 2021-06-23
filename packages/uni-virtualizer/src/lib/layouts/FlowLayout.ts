import {BaseLayout, BaseLayoutConfig, dim1/*, pos1*/} from './BaseLayout.js';
import {ItemBox, Positions, Size, Margins, margin, ScrollDirection, offsetAxis} from './Layout.js';

type ItemBounds = {
  pos: number,
  size: number
};

type FlowLayoutConstructor = {
  prototype: FlowLayout,
  new(config?: BaseLayoutConfig): FlowLayout
}

type FlowLayoutSpecifier = BaseLayoutConfig & {
  type: FlowLayoutConstructor
}

type FlowLayoutSpecifierFactory = (config?: BaseLayoutConfig) => FlowLayoutSpecifier;

export const flow: FlowLayoutSpecifierFactory = (config?: BaseLayoutConfig) => Object.assign({
  type: FlowLayout
}, config);

function leadingMargin(direction: ScrollDirection): margin {
  return direction === 'horizontal' ? 'marginLeft' : 'marginTop';
}

function trailingMargin(direction: ScrollDirection): margin {
  return direction === 'horizontal' ? 'marginRight' : 'marginBottom';
}

function offset(direction: ScrollDirection): offsetAxis {
  return direction === 'horizontal' ? 'xOffset' : 'yOffset';
}

class SizeCache {
  private _map: Map<number, number> = new Map();
  totalSize: number = 0;

  set(index: number, value: number): void {
    const prev = this._map.get(index) || 0;
    this._map.set(index, value);
    this.totalSize += value - prev;
  }

  get averageSize(): number {
    return this._map.size === 0 ? 0 : Math.round(this.totalSize / this._map.size);
  }

  getSize(index: number) {
    return this._map.get(index);
  }

  clear() {
    this._map.clear();
    this.totalSize = 0;
  }
}

function collapseMargins(a: number, b: number): number {
  const m = [a, b].sort();
  return m[1] <= 0
  ? Math.min(...m)
  : m[0] >= 0
    ? Math.max(...m)
    : m[0] + m[1];
}

class MetricsCache {
  private _childSizeCache = new SizeCache();
  private _marginSizeCache = new SizeCache();
  private _metricsCache: Map<number, Size & Margins> = new Map();

  update(metrics: {[key: number]: Size & Margins}, direction: ScrollDirection) {
    const marginsToUpdate: Set<number> = new Set();
    Object.keys(metrics).forEach((key) => {
      const k = Number(key);
      this._metricsCache.set(k, metrics[k]);
      this._childSizeCache.set(k, metrics[k][dim1(direction)]);
      marginsToUpdate.add(k);
      marginsToUpdate.add(k + 1);
    });
    for (const k of marginsToUpdate) {
      const a = this._metricsCache.get(k)?.[leadingMargin(direction)] || 0;
      const b = this._metricsCache.get(k - 1)?.[trailingMargin(direction)] || 0;
      this._marginSizeCache.set(k, collapseMargins(a, b))
    }
  }

  get averageChildSize(): number {
    return this._childSizeCache.averageSize;
  }

  get totalChildSize(): number {
    return this._childSizeCache.totalSize;
  }

  get averageMarginSize(): number {
    return this._marginSizeCache.averageSize;
  }

  get totalMarginSize(): number {
    return this._marginSizeCache.totalSize;
  }

  getLeadingMarginValue(index: number, direction: ScrollDirection) {
    return this._metricsCache.get(index)?.[leadingMargin(direction)] || 0;
  }

  getChildSize(index: number) {
    return this._childSizeCache.getSize(index);
  }

  getMarginSize(index: number) {
    return this._marginSizeCache.getSize(index);
  }

  clear() {
    this._childSizeCache.clear();
    this._marginSizeCache.clear();
    this._metricsCache.clear();
  }
}

export class FlowLayout extends BaseLayout<BaseLayoutConfig> {
  /**
   * Indices of children mapped to their (position and length) in the scrolling
   * direction. Used to keep track of children that are in range.
   */
  _physicalItems: Map<number, ItemBounds> = new Map();

  /**
   * Used in tandem with _physicalItems to track children in range across
   * reflows.
   */
  _newPhysicalItems: Map<number, ItemBounds> = new Map();

  /**
   * Width and height of children by their index.
   */
  _metricsCache = new MetricsCache();

  /**
   * anchorIdx is the anchor around which we reflow. It is designed to allow
   * jumping to any point of the scroll size. We choose it once and stick with
   * it until stable. _first and _last are deduced around it.
   */
  _anchorIdx: number | null = null;

  /**
   * Position in the scrolling direction of the anchor child.
   */
  _anchorPos: number | null = null;

  /**
   * Whether all children in range were in range during the previous reflow.
   */
  _stable = true;

  /**
   * Whether to remeasure children during the next reflow.
   */
  _needsRemeasure = false;

  private _measureChildren = true;

  _estimate = true;

  // protected _defaultConfig: BaseLayoutConfig = Object.assign({}, super._defaultConfig, {

  // })

  // constructor(config: Layout1dConfig) {
  //   super(config);
  // }

  get measureChildren() {
    return this._measureChildren;
  }

  /**
   * Determine the average size of all children represented in the sizes
   * argument.
   */
  updateItemSizes(sizes: {[key: number]: ItemBox}) {
    this._metricsCache.update(sizes as Size & Margins, this.direction);
    // if (this._nMeasured) {
      this._updateItemSize();
      this._scheduleReflow();
    // }
  }

  /**
   * Set the average item size based on the total length and number of children
   * in range.
   */
  _updateItemSize() {
    // Keep integer values.
    this._itemSize[this._sizeDim] = this._metricsCache.averageChildSize;
  }

  _getPhysicalItem(idx: number): ItemBounds | undefined {
    return this._newPhysicalItems.get(idx) ?? this._physicalItems.get(idx);
  }

  _getSize(idx: number): number | undefined {
    const item = this._getPhysicalItem(idx);
    return item && this._metricsCache.getChildSize(idx);
  }

  /**
   * Returns the position in the scrolling direction of the item at idx.
   * Estimates it if the item at idx is not in the DOM.
   */
  _getPosition(idx: number): number {
    const item = this._getPhysicalItem(idx);
    const { averageMarginSize } = this._metricsCache;
    return idx === 0
      ? this._metricsCache.getMarginSize(0) ?? averageMarginSize
      : item
        ? item.pos
        : averageMarginSize + idx * (averageMarginSize + this._itemSize[this._sizeDim]);
  }

  _calculateAnchor(lower: number, upper: number): number {
    if (lower === 0) {
      return 0;
    }
    if (upper > this._scrollSize - this._viewDim1) {
      return this._totalItems - 1;
    }
    return Math.max(
        0,
        Math.min(
            this._totalItems - 1,
            Math.floor(((lower + upper) / 2) / this._delta)));
  }

  _getAnchor(lower: number, upper: number): number {
    if (this._physicalItems.size === 0) {
      return this._calculateAnchor(lower, upper);
    }
    if (this._first < 0) {
      console.error('_getAnchor: negative _first');
      return this._calculateAnchor(lower, upper);
    }
    if (this._last < 0) {
      console.error('_getAnchor: negative _last');
      return this._calculateAnchor(lower, upper);
    }

    const firstItem = this._getPhysicalItem(this._first),
          lastItem = this._getPhysicalItem(this._last),
          firstMin = firstItem!.pos, firstMax = firstMin + this._metricsCache.getChildSize(this._first)!,
          lastMin = lastItem!.pos, lastMax = lastMin + this._metricsCache.getChildSize(this._last)!;

    if (lastMax < lower) {
      // Window is entirely past physical items, calculate new anchor
      return this._calculateAnchor(lower, upper);
    }
    if (firstMin > upper) {
      // Window is entirely before physical items, calculate new anchor
      return this._calculateAnchor(lower, upper);
    }
    if (firstMin >= lower || firstMax >= lower) {
      // First physical item overlaps window, choose it
      return this._first;
    }
    if (lastMax <= upper || lastMin <= upper) {
      // Last physical overlaps window, choose it
      return this._last;
    }
    // Window contains a physical item, but not the first or last
    let maxIdx = this._last, minIdx = this._first;

    while (true) {
      const candidateIdx = Math.round((maxIdx + minIdx) / 2),
            candidate = this._physicalItems.get(candidateIdx),
            cMin = candidate!.pos, cMax = cMin + this._metricsCache.getChildSize(candidateIdx)!;

      if ((cMin >= lower && cMin <= upper) ||
          (cMax >= lower && cMax <= upper)) {
        return candidateIdx;
      } else if (cMax < lower) {
        minIdx = candidateIdx + 1;
      } else if (cMin > upper) {
        maxIdx = candidateIdx - 1;
      }
    }
  }

  /**
   * Updates _first and _last based on items that should be in the current
   * viewed range.
   */
  _getActiveItems() {
    if (this._viewDim1 === 0 || this._totalItems === 0) {
      this._clearItems();
    } else {
      this._getItems();
    }
  }

  /**
   * Sets the range to empty.
   */
  _clearItems() {
    this._first = -1;
    this._last = -1;
    this._physicalMin = 0;
    this._physicalMax = 0;
    const items = this._newPhysicalItems;
    this._newPhysicalItems = this._physicalItems;
    this._newPhysicalItems.clear();
    this._physicalItems = items;
    this._stable = true;
  }

  /*
   * Updates _first and _last based on items that should be in the given range.
   */
  _getItems() {
    const items = this._newPhysicalItems;
    this._stable = true;
    let lower, upper;

    // The anchorIdx is the anchor around which we reflow. It is designed to
    // allow jumping to any point of the scroll size. We choose it once and
    // stick with it until stable. first and last are deduced around it.

    if (this._scrollToIndex >= 0) {
      // If we have a scrollToIndex, we anchor on the given
      // index and set the scroll position accordingly
      this._anchorIdx = Math.min(this._scrollToIndex, this._totalItems - 1);
      this._anchorPos = this._getPosition(this._anchorIdx);
      this._scrollIfNeeded();
      lower = Math.max(0, this._scrollPosition - this._overhang);
      upper = Math.min(this._scrollSize, this._scrollPosition + this._viewDim1 + this._overhang);
    }
    else {
      // Otherwise, we find an appropriate index to anchor on
      // given the current scroll position
      upper = Math.min(
        this._scrollSize,
        this._scrollPosition + this._viewDim1 + this._overhang
      );
      lower = Math.max(0, upper - this._viewDim1 - (2 * this._overhang));

      // Since it can take multiple passes to stabilize, we may already
      // have an anchor. If so, keep it; if not, establish it.
      if (this._anchorIdx === null || this._anchorPos === null) {
        this._anchorIdx = this._getAnchor(lower, upper);
        this._anchorPos = this._getPosition(this._anchorIdx);    
      }
    }

    let anchorSize = this._getSize(this._anchorIdx);
    if (anchorSize === undefined) {
      this._stable = false;
      anchorSize = this._itemDim1;
    }

    let anchorLeadingMargin = this._metricsCache.getMarginSize(this._anchorIdx) ?? this._metricsCache.averageMarginSize;
    let anchorTrailingMargin = this._metricsCache.getMarginSize(this._anchorIdx + 1) ?? this._metricsCache.averageMarginSize;

    if (this._anchorIdx === 0) {
      this._anchorPos = anchorLeadingMargin;
    }

    if (this._anchorIdx === this._totalItems - 1) {
      this._anchorPos = this._scrollSize - anchorTrailingMargin - anchorSize;
    }

    // Anchor might be outside bounds, so prefer correcting the error and keep
    // that anchorIdx.
    let anchorErr = 0;

    if (this._anchorPos + anchorSize + anchorTrailingMargin < lower) {
      anchorErr = lower - (this._anchorPos + anchorSize + anchorTrailingMargin);
    }

    if (this._anchorPos > upper) {
      anchorErr = upper - this._anchorPos;
    }

    if (anchorErr) {
      this._scrollPosition -= anchorErr;
      lower -= anchorErr;
      upper -= anchorErr;
      this._scrollError += anchorErr;
    }

    items.set(this._anchorIdx, {pos: this._anchorPos, size: anchorSize});

    this._first = (this._last = this._anchorIdx);
    this._physicalMin = this._anchorPos;
    this._physicalMax = this._anchorPos + anchorSize;

    while (this._physicalMin > lower && this._first > 0) {
      let size = this._getSize(--this._first);
      if (size === undefined) {
        this._stable = false;
        size = this._itemDim1;
      }
      let margin = this._metricsCache.getMarginSize(this._first + 1);
      if (margin === undefined) {
        this._stable = false;
        margin = this._metricsCache.averageMarginSize;
      }
      this._physicalMin -= size + margin;
      const pos = this._physicalMin;
      items.set(this._first, {pos, size});
      if (this._stable === false && this._estimate === false) {
        break;
      }
    }

    while (this._physicalMax < upper && this._last < this._totalItems - 1) {
      let margin = this._metricsCache.getMarginSize(++this._last);
      if (margin === undefined) {
        this._stable = false;
        margin = this._metricsCache.averageMarginSize;
      }
      let size = this._getSize(this._last);
      if (size === undefined) {
        this._stable = false;
        size = this._itemDim1;
      }
      const pos = this._physicalMax + margin;
      items.set(this._last, {pos, size});
      this._physicalMax += margin + size;
      if (this._stable === false && this._estimate === false) {
        break;
      }
    }

    // This handles the cases where we were relying on estimated sizes.
    const extentErr = this._calculateError();
    if (extentErr) {
      this._physicalMin -= extentErr;
      this._physicalMax -= extentErr;
      this._anchorPos -= extentErr;
      this._scrollPosition -= extentErr;
      items.forEach((item) => item.pos -= extentErr);
      this._scrollError += extentErr;
    }

    if (this._stable) {
      this._newPhysicalItems = this._physicalItems;
      this._newPhysicalItems.clear();
      this._physicalItems = items;
    }
  }

  _calculateError(): number {
    const { averageMarginSize } = this._metricsCache;
    if (this._first === 0) {
      return this._physicalMin - (this._metricsCache.getMarginSize(0) ?? averageMarginSize);
    } else if (this._physicalMin <= 0) {
      return this._physicalMin - (this._first * this._delta);
    } else if (this._last === this._totalItems - 1) {
      return (this._physicalMax + (this._metricsCache.getMarginSize(this._totalItems) ?? averageMarginSize)) - this._scrollSize;
    } else if (this._physicalMax >= this._scrollSize) {
      return (
          (this._physicalMax - this._scrollSize) +
          ((this._totalItems - 1 - this._last) * this._delta));
    }
    return 0;
  }

  // TODO: Can this be made to inherit from base, with proper hooks?
  _reflow() {
    const {_first, _last, _scrollSize} = this;

    this._updateScrollSize();
    this._getActiveItems();

    if (this._scrollSize !== _scrollSize) {
      this._emitScrollSize();
    }

    this._updateVisibleIndices();
    this._emitRange();
    if (this._first === -1 && this._last === -1) {
      this._resetReflowState();
    } else if (
        this._first !== _first || this._last !== _last ||
        this._needsRemeasure) {
      this._emitChildPositions();
      this._emitScrollError();
    } else {
      this._emitChildPositions();
      this._emitScrollError();
      this._resetReflowState();
    }
  }

  _resetReflowState() {
    this._anchorIdx = null;
    this._anchorPos = null;
    this._stable = true;
  }

  _updateScrollSize() {
    const { averageMarginSize } = this._metricsCache;
    this._scrollSize = Math.max(1, this._totalItems * (averageMarginSize + this._itemSize[this._sizeDim]) + averageMarginSize);
  }

  protected get _delta(): number {
    const { averageMarginSize } = this._metricsCache;
    return this._itemSize[this._sizeDim] + averageMarginSize;
  }

  /**
   * Returns the top and left positioning of the item at idx.
   */
  _getItemPosition(idx: number): Positions {
    return {
      [this._positionDim]: this._getPosition(idx),
      [this._secondaryPositionDim]: 0,
      [offset(this.direction)]: -(this._metricsCache.getLeadingMarginValue(idx, this.direction) ?? this._metricsCache.averageMarginSize)
    } as Positions;
  }

  /**
   * Returns the height and width of the item at idx.
   */
  _getItemSize(idx: number): Size {
    return {
      [this._sizeDim]: (this._getSize(idx) || this._itemDim1) + (this._metricsCache.getMarginSize(idx + 1) ?? this._metricsCache.averageMarginSize),
      [this._secondarySizeDim]: this._itemDim2,
    } as Size;
  }

  _viewDim2Changed() {
    this._needsRemeasure = true;
    this._scheduleReflow();
  }

  _emitRange() {
    const remeasure = this._needsRemeasure;
    const stable = this._stable;
    this._needsRemeasure = false;
    super._emitRange({remeasure, stable});
  }
}