import EventTarget from '../polyfillLoaders/EventTarget.js';

export interface Coordinates {
  left: number,
  top: number
}
export type Dimensions = {
  [key in dimension]: number
}
type dimension = 'height' | 'width';
type position = 'left' | 'top';
type direction = 'vertical' | 'horizontal';

export abstract class Layout1dBase {
  _physicalMin: number = 0;
  _physicalMax: number = 0;
  _first: number = -1;
  _last: number = -1;
  protected _latestCoords: Coordinates = {left: 0, top: 0};
  protected _itemSize: Dimensions = {width: 100, height: 100};
  protected _spacing: number = 0;
  _sizeDim: dimension = 'height';
  _secondarySizeDim: dimension = 'width';
  _positionDim: position = 'top';
  _secondaryPositionDim: position = 'left';
  protected _direction: direction = 'vertical';
  _scrollPosition: number = 0;
  _scrollError: number = 0;
  protected _viewportSize: Dimensions = {width: 0, height: 0};
  protected _totalItems: number = 0;
  _scrollSize: number = 1;
  /**
   * Number of pixels beyond the visible size of the container to still include in the
   * active range of items.
   */
  _overhang: number = 150;
  _pendingReflow: boolean = false;
  _scrollToIndex: number = -1;
  _scrollToAnchor: number = 0;
  _eventTargetPromise: Promise<any> = (EventTarget().then(Ctor => this._eventTarget = new Ctor()));

  // Not directly on this class
  _eventTarget;
  _spacingChanged;

  constructor(config) {
    Object.assign(this, config);
  }

  // public properties

  get totalItems(): number {
    return this._totalItems;
  }
  set totalItems(num) {
    if (num !== this._totalItems) {
      this._totalItems = num;
      this._scheduleReflow();
    }
  }

  get direction(): direction {
    return this._direction;
  }
  set direction(dir) {
    // Force it to be either horizontal or vertical.
    dir = (dir === 'horizontal') ? dir : 'vertical';
    if (dir !== this._direction) {
      this._direction = dir;
      this._sizeDim = (dir === 'horizontal') ? 'width' : 'height';
      this._secondarySizeDim = (dir === 'horizontal') ? 'height' : 'width';
      this._positionDim = (dir === 'horizontal') ? 'left' : 'top';
      this._secondaryPositionDim = (dir === 'horizontal') ? 'top' : 'left';
      this._scheduleReflow();
    }
  }

  get itemSize(): Dimensions {
    return this._itemSize;
  }
  set itemSize(dims) {
    const {_itemDim1, _itemDim2} = this;
    Object.assign(this._itemSize, dims);
    if (_itemDim1 !== this._itemDim1 || _itemDim2 !== this._itemDim2) {
      if (_itemDim2 !== this._itemDim2) {
        this._itemDim2Changed();
      } else {
        this._scheduleReflow();
      }
    }
  }

  /**
   * The amount of space in between items.
   */
  get spacing(): number {
    return this._spacing;
  }
  set spacing(px) {
    if (px !== this._spacing) {
      this._spacing = px;
      this._scheduleReflow();
    }
  }

  get viewportSize(): Dimensions {
    return this._viewportSize;
  }
  set viewportSize(dims) {
    const {_viewDim1, _viewDim2} = this;
    Object.assign(this._viewportSize, dims);
    if (_viewDim2 !== this._viewDim2) {
      this._viewDim2Changed();
    } else if (_viewDim1 !== this._viewDim1) {
      this._checkThresholds();
    }
  }

  get viewportScroll(): Coordinates {
    return this._latestCoords;
  }
  set viewportScroll(coords) {
    Object.assign(this._latestCoords, coords);
    const oldPos = this._scrollPosition;
    this._scrollPosition = this._latestCoords[this._positionDim];
    if (oldPos !== this._scrollPosition) {
      this._scrollPositionChanged(oldPos, this._scrollPosition);
    }
    this._checkThresholds();
  }

  // private properties

  /**
   * The size of an item in the scrolling direction + space between items.
   * @private
   */
  protected get _delta(): number {
    return this._itemDim1 + this._spacing;
  }

  /**
   * The height or width of an item, whichever corresponds to the scrolling direction.
   * @private
   */
  protected get _itemDim1(): number {
    return this._itemSize[this._sizeDim];
  }

  /**
   * The height or width of an item, whichever does NOT correspond to the scrolling direction.
   * @private
   */
  protected get _itemDim2(): number {
    return this._itemSize[this._secondarySizeDim];
  }

  /**
   * The height or width of the viewport, whichever corresponds to the scrolling direction.
   * @private
   */
  protected get _viewDim1(): number {
    return this._viewportSize[this._sizeDim];
  }

  /**
   * The height or width of the viewport, whichever does NOT correspond to the scrolling direction.
   * @private
   */
  protected get _viewDim2(): number {
    return this._viewportSize[this._secondarySizeDim];
  }

  /**
   * Number of items to display.
   * @private
   */
  private get _num(): number {
    if (this._first === -1 || this._last === -1) {
      return 0;
    }
    return this._last - this._first + 1;
  }

  // public methods

  reflowIfNeeded(): void {
    if (this._pendingReflow) {
      this._pendingReflow = false;
      this._reflow();
    }
  }

  scrollToIndex(index, position = 'start'): void {
    if (!Number.isFinite(index))
      return;
    index = Math.min(this.totalItems, Math.max(0, index));
    this._scrollToIndex = index;
    if (position === 'nearest') {
      position = index > this._first + this._num / 2 ? 'end' : 'start';
    }
    switch (position) {
      case 'start':
        this._scrollToAnchor = 0;
        break;
      case 'center':
        this._scrollToAnchor = 0.5;
        break;
      case 'end':
        this._scrollToAnchor = 1;
        break;
      default:
        throw new TypeError(
            'position must be one of: start, center, end, nearest');
    }
    this._scheduleReflow();
    this.reflowIfNeeded();
  }

  ///

    async dispatchEvent(...args) {
      await this._eventTargetPromise;
      this._eventTarget.dispatchEvent(...args);
    }

    async addEventListener(...args) {
      await this._eventTargetPromise;
      this._eventTarget.addEventListener(...args);
    }

    async removeEventListener(...args) {
      await this._eventTargetPromise;
      this._eventTarget.removeEventListener(...args);
    }

  ///

  protected _scheduleReflow(): void {
    this._pendingReflow = true;
  }

  protected _reflow(): void {
    const {_first, _last, _scrollSize} = this;

    this._updateScrollSize();
    this._getActiveItems();
    this._scrollIfNeeded();

    if (this._scrollSize !== _scrollSize) {
      this._emitScrollSize();
    }

    if (this._first === -1 && this._last === -1) {
      // TODO: have default empty object for emitRange instead
      this._emitRange();
    } else if (
        this._first !== _first || this._last !== _last ||
        this._spacingChanged) {
      // TODO: have default empty object for emitRange instead
      this._emitRange();
      this._emitChildPositions();
    }
    this._emitScrollError();
  }

  /**
   * Estimates the total length of all items in the scrolling direction, including spacing.
   */
  protected _updateScrollSize(): void {
    // Ensure we have at least 1px - this allows getting at least 1 item to be
    // rendered.
    this._scrollSize = Math.max(1, this._totalItems * this._delta);
  }

  private _checkThresholds(): void {
    if (this._viewDim1 === 0 && this._num > 0) {
      this._scheduleReflow();
    } else {
      const min = Math.max(0, this._scrollPosition - this._overhang);
      const max = Math.min(
          this._scrollSize,
          this._scrollPosition + this._viewDim1 + this._overhang);
      if (this._physicalMin > min || this._physicalMax < max) {
        this._scheduleReflow();
      }
    }
  }

  protected _scrollIfNeeded(): void {
    if (this._scrollToIndex === -1) {
      return;
    }
    const index = this._scrollToIndex;
    const anchor = this._scrollToAnchor;
    const pos = this._getItemPosition(index)[this._positionDim];
    const size = this._getItemSize(index)[this._sizeDim];

    const curAnchorPos = this._scrollPosition + this._viewDim1 * anchor;
    const newAnchorPos = pos + size * anchor;
    // Ensure scroll position is an integer within scroll bounds.
    const scrollPosition = Math.floor(Math.min(
        this._scrollSize - this._viewDim1,
        Math.max(0, this._scrollPosition - curAnchorPos + newAnchorPos)));
    this._scrollError += this._scrollPosition - scrollPosition;
    this._scrollPosition = scrollPosition;
  }

  protected _emitRange(inProps = undefined): void {
    const detail = Object.assign(
        {
          first: this._first,
          last: this._last,
          num: this._num,
          stable: true,
        },
        inProps);
    this.dispatchEvent(new CustomEvent('rangechange', {detail}));
  }

  protected _emitScrollSize(): void {
    const detail = {
      [this._sizeDim]: this._scrollSize,
    };
    this.dispatchEvent(new CustomEvent('scrollsizechange', {detail}));
  }

  protected _emitScrollError(): void {
    if (this._scrollError) {
      const detail = {
        [this._positionDim]: this._scrollError,
        [this._secondaryPositionDim]: 0,
      };
      this.dispatchEvent(new CustomEvent('scrollerrorchange', {detail}));
      this._scrollError = 0;
    }
  }

  /**
   * Get or estimate the top and left positions of items in the current range.
   * Emit an itempositionchange event with these positions.
   */
  protected _emitChildPositions(): void {
    const detail = {};
    for (let idx = this._first; idx <= this._last; idx++) {
      detail[idx] = this._getItemPosition(idx);
    }
    this.dispatchEvent(new CustomEvent('itempositionchange', {detail}));
  }

  protected _itemDim2Changed() {
    // Override
  }

  protected _viewDim2Changed() {
    // Override
  }

  private _scrollPositionChanged(oldPos, newPos) {
    // When both values are bigger than the max scroll position, keep the
    // current _scrollToIndex, otherwise invalidate it.
    const maxPos = this._scrollSize - this._viewDim1;
    if (oldPos < maxPos || newPos < maxPos) {
      this._scrollToIndex = -1;
    }
  }

  abstract _getActiveItems(): void;

  /**
   * Returns the top and left positioning of the item at idx.
   */
  abstract _getItemPosition(idx: number): Coordinates;

  protected _getItemSize(idx: number): Dimensions {
    // Override.
    return {
      [this._sizeDim]: this._itemDim1,
      [this._secondarySizeDim]: this._itemDim2,
    } as unknown as Dimensions;
  }
}
