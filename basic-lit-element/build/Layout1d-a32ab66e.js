let ET;
async function EventTarget() {
    return ET || init();
}
async function init() {
    ET = window.EventTarget;
    try {
        new ET();
    }
    catch (_a) {
        ET = (await import('./event-target-shim-0654e80f.js')).EventTarget;
    }
    return ET;
}

class Layout1dBase {
    constructor(config) {
        // The last set viewport scroll position.
        this._latestCoords = { left: 0, top: 0 };
        // Scrolling direction
        this._direction = 'vertical';
        // Dimensions of the viewport.
        this._viewportSize = { width: 0, height: 0 };
        // Flag for debouncing asynchnronous reflow requests.
        this._pendingReflow = false;
        // Index of the item that has been scrolled to via the public API. When the
        // container is otherwise scrolled, this value is set back to -1.
        this._scrollToIndex = -1;
        // When a child is scrolled to, the offset from the top of the child and the
        // top of the viewport. Value is a proportion of the item size.
        this._scrollToAnchor = 0;
        this._eventTargetPromise = (EventTarget().then(Ctor => this._eventTarget = new Ctor()));
        // Pixel offset in the scroll direction of the first child.
        this._physicalMin = 0;
        // Pixel offset in the scroll direction of the last child.
        this._physicalMax = 0;
        // Index of the first child.
        this._first = -1;
        // Index of the last child.
        this._last = -1;
        // The _estimated_ size of a child.
        this._itemSize = { width: 100, height: 100 };
        // Space in pixels between children.
        this._spacing = 0;
        // Length in the scrolling direction.
        this._sizeDim = 'height';
        // Length in the non-scrolling direction.
        this._secondarySizeDim = 'width';
        // Position in the scrolling direction.
        this._positionDim = 'top';
        // Position in the non-scrolling direction.
        this._secondaryPositionDim = 'left';
        // Current scroll offset in pixels.
        this._scrollPosition = 0;
        // Difference between current scroll offset and scroll offset calculated
        // due to a reflow.
        this._scrollError = 0;
        // Total number of items that could possibly be displayed. Used to help
        // calculate the scroll size.
        this._totalItems = 0;
        // The total (estimated) length of all items in the scrolling direction.
        this._scrollSize = 1;
        // Number of pixels beyond the visible size of the container to still include
        // in the active range of items.
        this._overhang = 150;
        Object.assign(this, config);
    }
    /**
     * Maximum index of children + 1, to help estimate total height of the scroll
     * space.
     */
    get totalItems() {
        return this._totalItems;
    }
    set totalItems(num) {
        if (num !== this._totalItems) {
            this._totalItems = num;
            this._scheduleReflow();
        }
    }
    /**
     * Primary scrolling direction.
     */
    get direction() {
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
    /**
     * Estimate of the dimensions of a single child.
     */
    get itemSize() {
        return this._itemSize;
    }
    set itemSize(dims) {
        const { _itemDim1, _itemDim2 } = this;
        Object.assign(this._itemSize, dims);
        if (_itemDim1 !== this._itemDim1 || _itemDim2 !== this._itemDim2) {
            if (_itemDim2 !== this._itemDim2) {
                this._itemDim2Changed();
            }
            else {
                this._scheduleReflow();
            }
        }
    }
    /**
     * Amount of space in between items.
     */
    get spacing() {
        return this._spacing;
    }
    set spacing(px) {
        if (px !== this._spacing) {
            this._spacing = px;
            this._scheduleReflow();
        }
    }
    /**
     * Height and width of the viewport.
     */
    get viewportSize() {
        return this._viewportSize;
    }
    set viewportSize(dims) {
        const { _viewDim1, _viewDim2 } = this;
        Object.assign(this._viewportSize, dims);
        if (_viewDim2 !== this._viewDim2) {
            this._viewDim2Changed();
        }
        else if (_viewDim1 !== this._viewDim1) {
            this._checkThresholds();
        }
    }
    /**
     * Scroll offset of the viewport.
     */
    get viewportScroll() {
        return this._latestCoords;
    }
    set viewportScroll(coords) {
        console.log("setting viewport scroll, which calls _scrollPositionChanged");
        Object.assign(this._latestCoords, coords);
        const oldPos = this._scrollPosition;
        this._scrollPosition = this._latestCoords[this._positionDim];
        if (window.DEBUG) {
            debugger;
        }
        // THIS IS TRUE
        if (oldPos !== this._scrollPosition) {
            console.log("HAH");
            this._scrollPositionChanged(oldPos, this._scrollPosition);
        }
        this._checkThresholds();
    }
    /**
     * Perform a reflow if one has been scheduled.
     */
    reflowIfNeeded() {
        if (this._pendingReflow) {
            this._pendingReflow = false;
            this._reflow();
        }
    }
    /**
     * Scroll to the child at the given index, and the given position within that
     * child.
     */
    scrollToIndex(index, position = 'start') {
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
                throw new TypeError('position must be one of: start, center, end, nearest');
        }
        this._scheduleReflow();
        this.reflowIfNeeded();
    }
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
    updateItemSizes(sizes) {
        // Override
    }
    _itemDim2Changed() {
        // Override
    }
    _viewDim2Changed() {
        // Override
    }
    _getItemSize(idx) {
        return {
            [this._sizeDim]: this._itemDim1,
            [this._secondarySizeDim]: this._itemDim2,
        };
    }
    /**
     * The size of an item in the scrolling direction + space between items.
     */
    get _delta() {
        return this._itemDim1 + this._spacing;
    }
    /**
     * The height or width of an item, whichever corresponds to the scrolling direction.
     */
    get _itemDim1() {
        return this._itemSize[this._sizeDim];
    }
    /**
     * The height or width of an item, whichever does NOT correspond to the scrolling direction.
     */
    get _itemDim2() {
        return this._itemSize[this._secondarySizeDim];
    }
    /**
     * The height or width of the viewport, whichever corresponds to the scrolling direction.
     */
    get _viewDim1() {
        return this._viewportSize[this._sizeDim];
    }
    /**
     * The height or width of the viewport, whichever does NOT correspond to the scrolling direction.
     */
    get _viewDim2() {
        return this._viewportSize[this._secondarySizeDim];
    }
    _scheduleReflow() {
        this._pendingReflow = true;
    }
    _reflow() {
        const { _first, _last, _scrollSize } = this;
        this._updateScrollSize();
        this._getActiveItems();
        this._scrollIfNeeded();
        if (this._scrollSize !== _scrollSize) {
            this._emitScrollSize();
        }
        if (this._first === -1 && this._last === -1) {
            // TODO: have default empty object for emitRange instead
            this._emitRange();
        }
        else if (this._first !== _first || this._last !== _last ||
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
    _updateScrollSize() {
        // Ensure we have at least 1px - this allows getting at least 1 item to be
        // rendered.
        this._scrollSize = Math.max(1, this._totalItems * this._delta);
    }
    _scrollIfNeeded() {
        if (this._scrollToIndex === -1) {
            return;
        }
        console.log("scroll to index is not -1, it's", this._scrollToIndex);
        const index = this._scrollToIndex;
        const anchor = this._scrollToAnchor;
        const pos = this._getItemPosition(index)[this._positionDim];
        const size = this._getItemSize(index)[this._sizeDim];
        const curAnchorPos = this._scrollPosition + this._viewDim1 * anchor;
        const newAnchorPos = pos + size * anchor;
        // Ensure scroll position is an integer within scroll bounds.
        const scrollPosition = Math.floor(Math.min(this._scrollSize - this._viewDim1, Math.max(0, this._scrollPosition - curAnchorPos + newAnchorPos)));
        this._scrollError += this._scrollPosition - scrollPosition;
        console.log("SCROLL ERR:", this._scrollError);
        this._scrollPosition = scrollPosition;
    }
    _emitRange(inProps = undefined) {
        const detail = Object.assign({
            first: this._first,
            last: this._last,
            num: this._num,
            stable: true,
        }, inProps);
        this.dispatchEvent(new CustomEvent('rangechange', { detail }));
    }
    _emitScrollSize() {
        const detail = {
            [this._sizeDim]: this._scrollSize,
        };
        this.dispatchEvent(new CustomEvent('scrollsizechange', { detail }));
    }
    _emitScrollError() {
        if (this._scrollError) {
            const detail = {
                [this._positionDim]: this._scrollError,
                [this._secondaryPositionDim]: 0,
            };
            this.dispatchEvent(new CustomEvent('scrollerrorchange', { detail }));
            this._scrollError = 0;
        }
    }
    /**
     * Get or estimate the top and left positions of items in the current range.
     * Emit an itempositionchange event with these positions.
     */
    _emitChildPositions() {
        const detail = {};
        for (let idx = this._first; idx <= this._last; idx++) {
            detail[idx] = this._getItemPosition(idx);
        }
        this.dispatchEvent(new CustomEvent('itempositionchange', { detail }));
    }
    /**
     * Number of items to display.
     */
    get _num() {
        if (this._first === -1 || this._last === -1) {
            return 0;
        }
        return this._last - this._first + 1;
    }
    _checkThresholds() {
        if (this._viewDim1 === 0 && this._num > 0) {
            this._scheduleReflow();
        }
        else {
            const min = Math.max(0, this._scrollPosition - this._overhang);
            const max = Math.min(this._scrollSize, this._scrollPosition + this._viewDim1 + this._overhang);
            if (this._physicalMin > min || this._physicalMax < max) {
                this._scheduleReflow();
            }
        }
    }
    _scrollPositionChanged(oldPos, newPos) {
        // When both values are bigger than the max scroll position, keep the
        // current _scrollToIndex, otherwise invalidate it.
        const maxPos = this._scrollSize - this._viewDim1;
        if (oldPos < maxPos || newPos < maxPos) {
            console.log("resetting _scrollToIndex to -1.");
            this._scrollToIndex = -1;
        }
    }
}

class Layout1d extends Layout1dBase {
    constructor(config) {
        super(config);
        // Indices of children mapped to their (position and length) in the scrolling
        // direction. Used to keep track of children that are in range.
        this._physicalItems = new Map();
        // Used in tandem with _physicalItems to track children in range across
        // reflows.
        this._newPhysicalItems = new Map();
        // Width and height of children by their index.
        this._metrics = new Map();
        // anchorIdx is the anchor around which we reflow. It is designed to allow
        // jumping to any point of the scroll size. We choose it once and stick with
        // it until stable. _first and _last are deduced around it.
        this._anchorIdx = null;
        // Position in the scrolling direction of the anchor child.
        this._anchorPos = null;
        // Whether all children in range were in range during the previous reflow.
        this._stable = true;
        // Whether to remeasure children during the next reflow.
        // TODO @straversi: Currently only set by viewDim2Changed.
        this._needsRemeasure = false;
        // Number of children to lay out.
        // TODO @straversi: These shouldn't be properties?
        this._nMeasured = 0;
        // Total length in the scrolling direction of the layed out children.
        this._tMeasured = 0;
        // TODO @straversi: This value never changes.
        this._estimate = true;
    }
    /**
     * Determine the average size of all children represented in the sizes
     * argument.
     */
    updateItemSizes(sizes) {
        Object.keys(sizes).forEach((key) => {
            const metrics = sizes[key], mi = this._getMetrics(Number(key)), prevSize = mi[this._sizeDim];
            // TODO(valdrin) Handle margin collapsing.
            // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing
            mi.width = metrics.width + (metrics.marginLeft || 0) +
                (metrics.marginRight || 0);
            mi.height = metrics.height + (metrics.marginTop || 0) +
                (metrics.marginBottom || 0);
            const size = mi[this._sizeDim];
            const item = this._getPhysicalItem(Number(key));
            if (item) {
                let delta;
                if (size !== undefined) {
                    item.size = size;
                    if (prevSize === undefined) {
                        delta = size;
                        this._nMeasured++;
                    }
                    else {
                        delta = size - prevSize;
                    }
                }
                this._tMeasured = this._tMeasured + delta;
            }
        });
        if (!this._nMeasured) {
            console.warn(`No items measured yet.`);
        }
        else {
            this._updateItemSize();
            this._scheduleReflow();
        }
    }
    /**
     * Set the average item size based on the total length and number of children
     * in range.
     */
    _updateItemSize() {
        // Keep integer values.
        this._itemSize[this._sizeDim] =
            Math.round(this._tMeasured / this._nMeasured);
    }
    _getMetrics(idx) {
        return (this._metrics[idx] = this._metrics[idx] || {});
    }
    _getPhysicalItem(idx) {
        return this._newPhysicalItems.get(idx) || this._physicalItems.get(idx);
    }
    _getSize(idx) {
        const item = this._getPhysicalItem(idx);
        return item && item.size;
    }
    /**
     * Returns the position in the scrolling direction of the item at idx.
     * Estimates it if the item at idx is not in the DOM.
     */
    _getPosition(idx) {
        const item = this._physicalItems.get(idx);
        return item ? item.pos : (idx * (this._delta)) + this._spacing;
    }
    _calculateAnchor(lower, upper) {
        if (lower === 0) {
            return 0;
        }
        if (upper > this._scrollSize - this._viewDim1) {
            return this._totalItems - 1;
        }
        return Math.max(0, Math.min(this._totalItems - 1, Math.floor(((lower + upper) / 2) / this._delta)));
    }
    _getAnchor(lower, upper) {
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
        const firstItem = this._getPhysicalItem(this._first), lastItem = this._getPhysicalItem(this._last), firstMin = firstItem.pos, firstMax = firstMin + firstItem.size, lastMin = lastItem.pos, lastMax = lastMin + lastItem.size;
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
            let candidateIdx = Math.round((maxIdx + minIdx) / 2), candidate = this._physicalItems.get(candidateIdx), cMin = candidate.pos, cMax = cMin + candidate.size;
            if ((cMin >= lower && cMin <= upper) ||
                (cMax >= lower && cMax <= upper)) {
                return candidateIdx;
            }
            else if (cMax < lower) {
                minIdx = candidateIdx + 1;
            }
            else if (cMin > upper) {
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
        }
        else {
            const upper = Math.min(this._scrollSize, this._scrollPosition + this._viewDim1 + this._overhang), lower = Math.max(0, upper - this._viewDim1 - (2 * this._overhang));
            this._getItems(lower, upper);
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
    _getItems(lower, upper) {
        const items = this._newPhysicalItems;
        // The anchorIdx is the anchor around which we reflow. It is designed to
        // allow jumping to any point of the scroll size. We choose it once and
        // stick with it until stable. first and last are deduced around it.
        if (this._anchorIdx === null || this._anchorPos === null) {
            this._anchorIdx = this._getAnchor(lower, upper);
            this._anchorPos = this._getPosition(this._anchorIdx);
        }
        let anchorSize = this._getSize(this._anchorIdx);
        if (anchorSize === undefined) {
            anchorSize = this._itemDim1;
        }
        // Anchor might be outside bounds, so prefer correcting the error and keep
        // that anchorIdx.
        let anchorErr = 0;
        if (this._anchorPos + anchorSize + this._spacing < lower) {
            anchorErr = lower - (this._anchorPos + anchorSize + this._spacing);
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
        // TODO @straversi: If size is always itemDim1, then why keep track of it?
        items.set(this._anchorIdx, { pos: this._anchorPos, size: anchorSize });
        this._first = (this._last = this._anchorIdx);
        this._physicalMin = (this._physicalMax = this._anchorPos);
        this._stable = true;
        while (this._physicalMin > lower && this._first > 0) {
            let size = this._getSize(--this._first);
            if (size === undefined) {
                this._stable = false;
                size = this._itemDim1;
            }
            const pos = (this._physicalMin -= size + this._spacing);
            items.set(this._first, { pos, size });
            if (this._stable === false && this._estimate === false) {
                break;
            }
        }
        while (this._physicalMax < upper && this._last < this._totalItems) {
            let size = this._getSize(this._last);
            if (size === undefined) {
                this._stable = false;
                size = this._itemDim1;
            }
            items.set(this._last++, { pos: this._physicalMax, size });
            if (this._stable === false && this._estimate === false) {
                break;
            }
            else {
                this._physicalMax += size + this._spacing;
            }
        }
        this._last--;
        // This handles the cases where we were relying on estimated sizes.
        const extentErr = this._calculateError();
        if (extentErr) {
            this._physicalMin -= extentErr;
            this._physicalMax -= extentErr;
            this._anchorPos -= extentErr;
            this._scrollPosition -= extentErr;
            items.forEach(item => item.pos -= extentErr);
            this._scrollError += extentErr;
        }
        if (this._stable) {
            this._newPhysicalItems = this._physicalItems;
            this._newPhysicalItems.clear();
            this._physicalItems = items;
        }
    }
    _calculateError() {
        if (this._first === 0) {
            return this._physicalMin;
        }
        else if (this._physicalMin <= 0) {
            return this._physicalMin - (this._first * this._delta);
        }
        else if (this._last === this._totalItems - 1) {
            return this._physicalMax - this._scrollSize;
        }
        else if (this._physicalMax >= this._scrollSize) {
            return ((this._physicalMax - this._scrollSize) +
                ((this._totalItems - 1 - this._last) * this._delta));
        }
        return 0;
    }
    _updateScrollSize() {
        // Reuse previously calculated physical max, as it might be higher than the
        // estimated size.
        super._updateScrollSize();
        this._scrollSize = Math.max(this._physicalMax, this._scrollSize);
    }
    // TODO: Can this be made to inherit from base, with proper hooks?
    _reflow() {
        const { _first, _last, _scrollSize } = this;
        this._updateScrollSize();
        this._getActiveItems();
        this._scrollIfNeeded();
        if (this._scrollSize !== _scrollSize) {
            this._emitScrollSize();
        }
        this._emitRange();
        if (this._first === -1 && this._last === -1) {
            this._resetReflowState();
        }
        else if (this._first !== _first || this._last !== _last ||
            this._needsRemeasure) {
            this._emitChildPositions();
            this._emitScrollError();
        }
        else {
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
    /**
     * Returns the top and left positioning of the item at idx.
     */
    _getItemPosition(idx) {
        return {
            [this._positionDim]: this._getPosition(idx),
            [this._secondaryPositionDim]: 0,
        };
    }
    /**
     * Returns the height and width of the item at idx.
     */
    _getItemSize(idx) {
        return {
            [this._sizeDim]: this._getSize(idx) || this._itemDim1,
            [this._secondarySizeDim]: this._itemDim2,
        };
    }
    _viewDim2Changed() {
        this._needsRemeasure = true;
        this._scheduleReflow();
    }
    _emitRange() {
        const remeasure = this._needsRemeasure;
        const stable = this._stable;
        this._needsRemeasure = false;
        super._emitRange({ remeasure, stable });
    }
}

export { Layout1d };
