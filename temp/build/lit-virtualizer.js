import { N as NodePart, l as createMarker, d as directive } from './chunk-608fdc3d.js';
import { html } from './lit-html.js';
import { LitElement, property, customElement } from './lit-element.js';

class VirtualRepeater {
    constructor(config) {
        /**
         * Invoked when a new (not recycled) child needs to be displayed.
         * Set by createElement.
         */
        this._createElementFn = null;
        /**
         * Invoked on new (including recycled) children after the range changes.
         * Set by updateElement.
         */
        this._updateElementFn = null;
        /**
         * Invoked on outgoing children after the range changes. Set by recycleElement.
         */
        this._recycleElementFn = null;
        /**
         * Used for generating a key for storing references to children. Set by elementKey.
         */
        this._elementKeyFn = null;
        /**
         * Items to render. Set by items.
         */
        this._items = [];
        /**
         * Total number of items to render. Set by totalItems.
         */
        this._totalItems = null;
        /**
         * Flag for asynchnronous reset requests. Resetting clears and reinserts
         * children in the range.
         */
        this._needsReset = false;
        /**
         * Flag for asynchnronous remeasure requests. Signals that all children
         * should be remeasured.
         */
        this._needsRemeasure = false;
        /**
         * Used to keep track of children that can be cleaned up after a range update.
         */
        this._active = new Map();
        this._prevActive = new Map();
        /**
         * Used for recycling purposes.
         */
        this._keyToChild = new Map();
        this._childToKey = new WeakMap();
        /**
         * Used to keep track of measures by index.
         */
        this._indexToMeasure = {};
        this.__incremental = false;
        /**
         * Invoked at the end of each render cycle: children in the range are
         * measured, and their dimensions passed to this callback. Use it to layout
         * children as needed.
         */
        this._measureCallback = null;
        /**
         * Number of children in the range. Set by num.
         * TODO @straversi: Consider renaming this. count? visibleElements?
         */
        this._num = Infinity;
        /**
         * Index of the first child in the range, not necessarily the first visible child.
         * TODO @straversi: Consider renaming these.
         */
        this._first = 0;
        /**
         * Index of the last child in the range.
         */
        this._last = 0;
        /**
         * Previous first rendered index. Used to avoid unnecessary updates.
         */
        this._prevFirst = 0;
        /**
         * Previous last rendered index. Used to avoid unnecessary updates.
         */
        this._prevLast = 0;
        /**
         * Flag for asynchnronous render requests. Renders can be requested several
         * times before a render actually happens.
         */
        this._pendingRender = null;
        /**
         * Containing element. Set by container.
         */
        this._container = null;
        /**
         * Children in the rendered order.
         */
        this._ordered = [];
        if (config) {
            Object.assign(this, config);
        }
    }
    // API
    /**
     * The parent of all child nodes to be rendered.
     */
    get container() {
        return this._container;
    }
    set container(container) {
        if (container === this._container) {
            return;
        }
        if (this._container) {
            // Remove children from old container.
            this._ordered.forEach((child) => this._removeChild(child));
        }
        this._container = container;
        if (container) {
            // Insert children in new container.
            this._ordered.forEach((child) => this._insertBefore(child, null));
        }
        else {
            this._ordered.length = 0;
            this._active.clear();
            this._prevActive.clear();
        }
        this.requestReset();
    }
    /**
     * Invoked to create a child.
     * Override or set directly to control element creation.
     */
    get createElement() {
        return this._createElementFn;
    }
    set createElement(fn) {
        if (fn !== this._createElementFn) {
            this._createElementFn = fn;
            this._keyToChild.clear();
            this.requestReset();
        }
    }
    /**
     * Invoked to update a child.
     * Override or set directly to control element updates.
     */
    get updateElement() {
        return this._updateElementFn;
    }
    set updateElement(fn) {
        if (fn !== this._updateElementFn) {
            this._updateElementFn = fn;
            this.requestReset();
        }
    }
    /**
     * Invoked in place of removing a child from the DOM, so that it can be reused.
     * Override or set directly to prepare children for reuse.
     */
    get recycleElement() {
        return this._recycleElementFn;
    }
    set recycleElement(fn) {
        if (fn !== this._recycleElementFn) {
            this._recycleElementFn = fn;
            this.requestReset();
        }
    }
    /**
     * Invoked to generate a key for an element.
     * Override or set directly to control how keys are generated for children.
     */
    get elementKey() {
        return this._elementKeyFn;
    }
    set elementKey(fn) {
        if (fn !== this._elementKeyFn) {
            this._elementKeyFn = fn;
            this._keyToChild.clear();
            this.requestReset();
        }
    }
    /**
     * The index of the first child in the range.
     */
    get first() {
        return this._first;
    }
    set first(idx) {
        if (typeof idx !== 'number') {
            throw new Error('New value must be a number.');
        }
        const newFirst = Math.max(0, Math.min(idx, this.totalItems - this._num));
        if (newFirst !== this._first) {
            this._first = newFirst;
            this._scheduleRender();
        }
    }
    /**
     * The number of children in the range.
     */
    get num() {
        return this._num;
    }
    set num(n) {
        if (typeof n !== 'number') {
            throw new Error('New value must be a number.');
        }
        if (n !== this._num) {
            this._num = n;
            this.first = this._first;
            this._scheduleRender();
        }
    }
    /**
     * An array of data to be used to render child nodes.
     */
    get items() {
        return this._items;
    }
    set items(items) {
        if (items !== this._items && Array.isArray(items)) {
            this._items = items;
            this.requestReset();
        }
    }
    /**
     * The total number of items, regardless of the range, that can be rendered
     * as child nodes.
     */
    get totalItems() {
        return (this._totalItems === null ? this._items.length : this._totalItems);
    }
    set totalItems(num) {
        if (typeof num !== 'number' && num !== null) {
            throw new Error('New value must be a number.');
        }
        // TODO(valdrin) should we check if it is a finite number?
        // Technically, Infinity would break Layout, not VirtualRepeater.
        if (num !== this._totalItems) {
            this._totalItems = num;
            this.first = this._first;
            this.requestReset();
        }
    }
    /**
     * TODO @straversi: Document this.
     */
    get _incremental() {
        return this.__incremental;
    }
    set _incremental(inc) {
        if (inc !== this.__incremental) {
            this.__incremental = inc;
            this._scheduleRender();
        }
    }
    /**
     * Invoke to request that all elements in the range be measured.
     */
    requestRemeasure() {
        this._needsRemeasure = true;
        this._scheduleRender();
    }
    // Core functionality
    _shouldRender() {
        return Boolean(this.container && this.createElement);
    }
    /**
     * Render at the next opportunity.
     */
    async _scheduleRender() {
        if (!this._pendingRender) {
            this._pendingRender = true;
            await Promise.resolve();
            this._pendingRender = false;
            if (this._shouldRender()) {
                this._render();
            }
            // this._pendingRender = requestAnimationFrame(() => {
            //   this._pendingRender = null;
            //   if (this._shouldRender()) {
            //     this._render();
            //   }
            // });
        }
    }
    /**
     * Invoke to request that all elements in the range be updated.
     */
    requestReset() {
        this._needsReset = true;
        this._scheduleRender();
    }
    /**
     * Returns those children that are about to be displayed and that require to
     * be positioned. If reset or remeasure has been triggered, all children are
     * returned.
     */
    get _toMeasure() {
        return this._ordered.reduce((toMeasure, c, i) => {
            const idx = this._first + i;
            if (this._needsReset || this._needsRemeasure || idx < this._prevFirst ||
                idx > this._prevLast) {
                toMeasure.indices.push(idx);
                toMeasure.children.push(c);
            }
            return toMeasure;
        }, { indices: [], children: [] });
    }
    /**
     * Measures each child bounds and builds a map of index/bounds to be passed
     * to the `_measureCallback`
     */
    async _measureChildren({ indices, children }) {
        await (new Promise((resolve) => {
            requestAnimationFrame(resolve);
        }));
        const pm = children.map((c) => this._measureChild(c));
        const mm = /** @type {{number: {width: number, height: number}}} */ (pm.reduce((out, cur, i) => {
            out[indices[i]] = this._indexToMeasure[indices[i]] = cur;
            return out;
        }, {}));
        this._measureCallback(mm);
    }
    /**
     * Render items within the current range to the DOM.
     */
    async _render() {
        const rangeChanged = this._first !== this._prevFirst || this._num !== this._prevNum;
        // Create/update/recycle DOM.
        if (rangeChanged || this._needsReset) {
            this._last =
                this._first + Math.min(this._num, this.totalItems - this._first) - 1;
            if (this._num || this._prevNum) {
                if (this._needsReset) {
                    this._reset(this._first, this._last);
                }
                else {
                    // Remove old children and insert new children without touching
                    // shared children.
                    this._discardHead();
                    this._discardTail();
                    this._addHead();
                    this._addTail();
                }
            }
        }
        if (this._needsRemeasure || this._needsReset) {
            this._indexToMeasure = {};
        }
        // Retrieve DOM to be measured.
        // Do it right before cleanup and reset of properties.
        const shouldMeasure = this._num > 0 && this._measureCallback &&
            (rangeChanged || this._needsRemeasure || this._needsReset);
        const toMeasure = shouldMeasure ? this._toMeasure : null;
        // Cleanup.
        if (!this._incremental) {
            this._prevActive.forEach((idx, child) => this._unassignChild(child, idx));
            this._prevActive.clear();
        }
        // Reset internal properties.
        this._prevFirst = this._first;
        this._prevLast = this._last;
        this._prevNum = this._num;
        this._needsReset = false;
        this._needsRemeasure = false;
        // Notify render completed.
        this._didRender();
        // Measure DOM.
        if (toMeasure) {
            await this._measureChildren(toMeasure);
        }
    }
    /**
     * Invoked after DOM is updated, and before it gets measured.
     */
    _didRender() {
    }
    /**
     * Unassigns any children at indices lower than the start of the current
     * range.
     */
    _discardHead() {
        const o = this._ordered;
        for (let idx = this._prevFirst; o.length && idx < this._first; idx++) {
            this._unassignChild(o.shift(), idx);
        }
    }
    /**
     * Unassigns any children at indices higher than the end of the current
     * range.
     */
    _discardTail() {
        const o = this._ordered;
        for (let idx = this._prevLast; o.length && idx > this._last; idx--) {
            this._unassignChild(o.pop(), idx);
        }
    }
    /**
     * Assigns and inserts non-existent children from the current range with
     * indices lower than the start of the previous range.
     */
    _addHead() {
        const start = this._first;
        const end = Math.min(this._last, this._prevFirst - 1);
        for (let idx = end; idx >= start; idx--) {
            const child = this._assignChild(idx);
            // Maintain dom order.
            this._insertBefore(child, this._firstChild);
            if (this.updateElement) {
                this.updateElement(child, this._items[idx], idx);
            }
            this._ordered.unshift(child);
        }
    }
    /**
     * Assigns and appends non-existent children from the current range with
     * indices higher than the end of the previous range.
     */
    _addTail() {
        const start = Math.max(this._first, this._prevLast + 1);
        const end = this._last;
        for (let idx = start; idx <= end; idx++) {
            const child = this._assignChild(idx);
            // Maintain dom order.
            this._insertBefore(child, null);
            if (this.updateElement) {
                this.updateElement(child, this._items[idx], idx);
            }
            this._ordered.push(child);
        }
    }
    /**
     * Re-insert and update children in the given range.
     */
    _reset(first, last) {
        // Swapping prevActive with active affects _assignChild.
        // Upon resetting, the current active children become potentially inactive.
        // _assignChild will remove a child from _prevActive if it is still active.
        const prevActive = this._active;
        this._active = this._prevActive;
        this._prevActive = prevActive;
        this._ordered.length = 0;
        let currentMarker = this._firstChild;
        for (let i = first; i <= last; i++) {
            const child = this._assignChild(i);
            this._ordered.push(child);
            if (currentMarker) {
                if (currentMarker === this._node(child)) {
                    currentMarker = this._nextSibling(child);
                }
                else {
                    this._insertBefore(child, currentMarker);
                }
            }
            else if (!this._childIsAttached(child)) {
                this._insertBefore(child, null);
            }
            if (this.updateElement) {
                this.updateElement(child, this._items[i], i);
            }
        }
    }
    /**
     * Instantiates, tracks, and returns the child at idx.
     * Prevents cleanup of children that already exist.
     * Returns the new child at idx.
     */
    _assignChild(idx) {
        const key = this.elementKey ? this.elementKey(idx) : idx;
        let child;
        if (child = this._keyToChild.get(key)) {
            this._prevActive.delete(child);
        }
        else {
            child = this.createElement(this._items[idx], idx);
            this._keyToChild.set(key, child);
            this._childToKey.set(child, key);
        }
        this._showChild(child);
        this._active.set(child, idx);
        return child;
    }
    /**
     * Removes the child at idx, recycling it if possible.
     */
    _unassignChild(child, idx) {
        this._hideChild(child);
        if (this._incremental) {
            this._active.delete(child);
            this._prevActive.set(child, idx);
        }
        else {
            const key = this._childToKey.get(child);
            this._childToKey.delete(child);
            this._keyToChild.delete(key);
            this._active.delete(child);
            if (this.recycleElement) {
                this.recycleElement(child, idx);
            }
            else if (this._node(child).parentNode) {
                this._removeChild(child);
            }
        }
    }
    /**
     * Returns the node for the first child in the current range, if the node is
     * in the DOM.
     * TODO: Is this the right name?
     */
    get _firstChild() {
        return this._ordered.length && this._childIsAttached(this._ordered[0]) ?
            this._node(this._ordered[0]) :
            null;
    }
    /**
     * Overridable abstractions for child manipulation
     */
    /**
     * Return the node for child.
     * Override if child !== child's node.
     */
    _node(child) {
        return child;
    }
    /**
     * Returns the next node sibling of a child node.
     */
    _nextSibling(child) {
        return child.nextSibling;
    }
    /**
     * Inserts child before referenceNode in the container.
     * Override to control child insertion.
     */
    _insertBefore(child, referenceNode) {
        this._container.insertBefore(child, referenceNode);
    }
    /**
     * Removes child from the DOM.
     * TODO @straversi: this will not work (_node should be called on child), but
     * is not currently being used or tested.
     */
    _removeChild(child) {
        child.parentNode.removeChild(child);
    }
    /**
     * Returns whether the child's node is a child of the container
     * element.
     */
    _childIsAttached(child) {
        const node = this._node(child);
        return node && node.parentNode === this._container;
    }
    /**
     * Sets the display style of the given node to 'none'.
     */
    _hideChild(child) {
        if (child instanceof HTMLElement) {
            child.style.display = 'none';
        }
    }
    /**
     * Sets the display style of the given node to null.
     */
    _showChild(child) {
        if (child instanceof HTMLElement) {
            child.style.display = null;
        }
    }
    /**
     * Returns the width, height, and margins of the given child.
     * Override if child !== child's node.
     */
    _measureChild(child) {
        // offsetWidth doesn't take transforms in consideration, so we use
        // getBoundingClientRect which does.
        const { width, height } = child.getBoundingClientRect();
        return Object.assign({ width, height }, getMargins(child));
    }
}
function getMargins(el) {
    const style = window.getComputedStyle(el);
    return {
        marginTop: getMarginValue(style.marginTop),
        marginRight: getMarginValue(style.marginRight),
        marginBottom: getMarginValue(style.marginBottom),
        marginLeft: getMarginValue(style.marginLeft),
    };
}
function getMarginValue(value) {
    const float = value ? parseFloat(value) : NaN;
    return Number.isNaN(float) ? 0 : float;
}

let RO;
async function ResizeObserver() {
    return RO || init();
}
async function init() {
    RO = window.ResizeObserver;
    try {
        new RO(function () { });
    }
    catch (e) {
        RO = (await import('./ResizeObserver.es-33afab78.js')).default;
    }
    return RO;
}

const HOST_CLASSNAME = 'uni-virtualizer-host';
let globalContainerStylesheet = null;
function containerStyles(hostSel, childSel) {
    return `
    ${hostSel} {
      display: block;
      position: relative;
      contain: strict;
      height: 150px;
      overflow: auto;
    }
    ${childSel} {
      box-sizing: border-box;
    }`;
}
function attachGlobalContainerStylesheet() {
    if (!globalContainerStylesheet) {
        globalContainerStylesheet = document.createElement('style');
        globalContainerStylesheet.textContent = containerStyles(`.${HOST_CLASSNAME}`, `.${HOST_CLASSNAME} > *`);
        document.head.appendChild(globalContainerStylesheet);
    }
}
class RangeChangeEvent extends Event {
    constructor(type, init) {
        super(type, init);
        this._first = Math.floor(init.first || 0);
        this._last = Math.floor(init.last || 0);
        this._firstVisible = Math.floor(init.firstVisible || 0);
        this._lastVisible = Math.floor(init.lastVisible || 0);
    }
    get first() {
        return this._first;
    }
    get last() {
        return this._last;
    }
    get firstVisible() {
        return this._firstVisible;
    }
    get lastVisible() {
        return this._lastVisible;
    }
}
/**
 * Provides virtual scrolling boilerplate.
 *
 * Extensions of this class must set container, layout, scrollTarget, and
 * useShadowDOM.
 *
 * Extensions of this class must also override VirtualRepeater's DOM
 * manipulation methods.
 */
class VirtualScroller extends VirtualRepeater {
    constructor(config) {
        super({});
        /**
         * Whether the layout should receive an updated viewport size on the next
         * render.
         */
        this._needsUpdateView = false;
        this._layout = null;
        /**
         * Whether to import the default (1d) layout on first render.
         */
        this._lazyLoadDefaultLayout = true;
        /**
         * The element that generates scroll events and defines the container
         * viewport. Set by scrollTarget.
         */
        this._scrollTarget = null;
        /**
         * A sentinel element that sizes the container when it is a scrolling
         * element. This ensures the scroll bar accurately reflects the total
         * size of the list.
         */
        this._sizer = null;
        /**
         * Layout provides these values, we set them on _render().
         * TODO @straversi: Can we find an XOR type, usable for the key here?
         */
        this._scrollSize = null;
        /**
         * Difference between scroll target's current and required scroll offsets.
         * Provided by layout.
         */
        this._scrollErr = null;
        /**
         * A list of the positions (top, left) of the children in the current range.
         */
        this._childrenPos = null;
        /**
         * The parent of all child nodes to be rendered. Set by container.
         */
        this._containerElement = null;
        /**
         * Keep track of original inline style of the container, so it can be
         * restored when container is changed.
         */
        this._containerInlineStyle = null;
        /**
         * Keep track of original container stylesheet, so it can be restored
         * when container is changed.
         */
        this._containerStylesheet = null;
        /**
         * Whether to build the virtual scroller within a shadow DOM.
         */
        this._useShadowDOM = true;
        /**
         * Size of the container.
         */
        this._containerSize = null;
        /**
         * Resize observer attached to container.
         */
        this._containerRO = null;
        /**
         * Resize observer attached to children.
         */
        this._childrenRO = null;
        /**
         * Flag for skipping a children measurement if that computation was just
         * completed.
         */
        this._skipNextChildrenSizeChanged = false;
        /**
         * Index and position of item to scroll to.
         */
        this._scrollToIndex = null;
        this._num = 0;
        this._first = -1;
        this._last = -1;
        this._prevFirst = -1;
        this._prevLast = -1;
        if (config) {
            Object.assign(this, config);
        }
    }
    get container() {
        return super.container;
    }
    set container(container) {
        super.container = container;
        this._initResizeObservers().then(() => {
            const oldEl = this._containerElement;
            // Consider document fragments as shadowRoots.
            const newEl = (container && container.nodeType === Node.DOCUMENT_FRAGMENT_NODE) ?
                container.host :
                container;
            if (oldEl === newEl) {
                return;
            }
            this._containerRO.disconnect();
            this._containerSize = null;
            if (oldEl) {
                if (this._containerInlineStyle) {
                    oldEl.setAttribute('style', this._containerInlineStyle);
                }
                else {
                    oldEl.removeAttribute('style');
                }
                this._containerInlineStyle = null;
                if (oldEl === this._scrollTarget) {
                    oldEl.removeEventListener('scroll', this, { passive: true });
                    this._sizer && this._sizer.remove();
                }
            }
            else {
                // First time container was setup, add listeners only now.
                addEventListener('scroll', this, { passive: true });
            }
            this._containerElement = newEl;
            if (newEl) {
                this._containerInlineStyle = newEl.getAttribute('style') || null;
                this._applyContainerStyles();
                if (newEl === this._scrollTarget) {
                    this._sizer = this._sizer || this._createContainerSizer();
                    this._container.prepend(this._sizer);
                }
                this._scheduleUpdateView();
                this._containerRO.observe(newEl);
            }
        });
    }
    get layout() {
        return this._layout;
    }
    set layout(layout) {
        if (layout === this._layout) {
            return;
        }
        if (this._layout) {
            this._measureCallback = null;
            this._layout.removeEventListener('scrollsizechange', this);
            this._layout.removeEventListener('scrollerrorchange', this);
            this._layout.removeEventListener('itempositionchange', this);
            this._layout.removeEventListener('rangechange', this);
            // Reset container size so layout can get correct viewport size.
            if (this._containerElement) {
                this._sizeContainer(undefined);
            }
        }
        this._layout = layout;
        if (this._layout) {
            if (typeof this._layout.updateItemSizes === 'function') {
                this._measureCallback = this._layout.updateItemSizes.bind(this._layout);
                this.requestRemeasure();
            }
            this._layout.addEventListener('scrollsizechange', this);
            this._layout.addEventListener('scrollerrorchange', this);
            this._layout.addEventListener('itempositionchange', this);
            this._layout.addEventListener('rangechange', this);
            this._scheduleUpdateView();
        }
    }
    /**
     * The element that generates scroll events and defines the container
     * viewport. The value `null` (default) corresponds to `window` as scroll
     * target.
     */
    get scrollTarget() {
        return this._scrollTarget;
    }
    set scrollTarget(target) {
        // Consider window as null.
        if (target === window) {
            target = null;
        }
        if (this._scrollTarget === target) {
            return;
        }
        if (this._scrollTarget) {
            this._scrollTarget.removeEventListener('scroll', this, { passive: true });
            if (this._sizer && this._scrollTarget === this._containerElement) {
                this._sizer.remove();
            }
        }
        this._scrollTarget = target;
        if (target) {
            target.addEventListener('scroll', this, { passive: true });
            if (target === this._containerElement) {
                this._sizer = this._sizer || this._createContainerSizer();
                this._container.prepend(this._sizer);
            }
        }
    }
    get useShadowDOM() {
        return this._useShadowDOM;
    }
    set useShadowDOM(newVal) {
        if (this._useShadowDOM !== newVal) {
            this._useShadowDOM = Boolean(newVal);
            if (this._containerStylesheet) {
                this._containerStylesheet.parentElement.removeChild(this._containerStylesheet);
                this._containerStylesheet = null;
            }
            this._applyContainerStyles();
        }
    }
    /**
     * Index and position of item to scroll to. The scroller will fix to that point
     * until the user scrolls.
     */
    set scrollToIndex(newValue) {
        this._scrollToIndex = newValue;
        this._scheduleUpdateView();
    }
    /**
     * Display the items in the current range.
     * Continue relayout of child positions until they have stabilized.
     */
    async _render() {
        if (this._lazyLoadDefaultLayout && !this._layout) {
            this._lazyLoadDefaultLayout = false;
            const { Layout1d } = await import('./Layout1d-12f31200.js');
            this.layout = new Layout1d({});
            return;
        }
        this._childrenRO.disconnect();
        // Update layout properties before rendering to have correct first, num,
        // scroll size, children positions.
        this._layout.totalItems = this.totalItems;
        if (this._needsUpdateView) {
            this._needsUpdateView = false;
            this._updateView();
        }
        if (this._scrollToIndex !== null) {
            this._layout.scrollToIndex(this._scrollToIndex.index, this._scrollToIndex.position);
            this._scrollToIndex = null;
        }
        this._layout.reflowIfNeeded();
        // Keep rendering until there is no more scheduled renders.
        while (true) {
            if (this._pendingRender) {
                // cancelAnimationFrame(this._pendingRender);
                this._pendingRender = false;
            }
            // Update scroll size and correct scroll error before rendering.
            this._sizeContainer(this._scrollSize);
            if (this._scrollErr) {
                // This triggers a 'scroll' event (async) which triggers another
                // _updateView().
                this._correctScrollError(this._scrollErr);
                this._scrollErr = null;
            }
            // Position children (_didRender()), and provide their measures to layout.
            await super._render();
            this._layout.reflowIfNeeded();
            // If layout reflow did not provoke another render, we're done.
            if (!this._pendingRender) {
                break;
            }
        }
        // We want to skip the first ResizeObserver callback call as we already
        // measured the children.
        this._skipNextChildrenSizeChanged = true;
        this._kids.forEach((child) => this._childrenRO.observe(child));
    }
    /**
     * Position children before they get measured. Measuring will force relayout,
     * so by positioning them first, we reduce computations.
     */
    _didRender() {
        if (this._childrenPos) {
            this._positionChildren(this._childrenPos);
            this._childrenPos = null;
        }
    }
    handleEvent(event) {
        switch (event.type) {
            case 'scroll':
                if (!this._scrollTarget || event.target === this._scrollTarget) {
                    this._scheduleUpdateView();
                }
                break;
            case 'scrollsizechange':
                this._scrollSize = event.detail;
                this._scheduleRender();
                break;
            case 'scrollerrorchange':
                this._scrollErr = event.detail;
                this._scheduleRender();
                break;
            case 'itempositionchange':
                this._childrenPos = event.detail;
                this._scheduleRender();
                break;
            case 'rangechange':
                this._adjustRange(event.detail);
                break;
            default:
                console.warn('event not handled', event);
        }
    }
    async _initResizeObservers() {
        if (this._containerRO === null) {
            const ResizeObserver$1 = await ResizeObserver();
            this._containerRO = new ResizeObserver$1((entries) => this._containerSizeChanged(entries[0].contentRect));
            this._childrenRO =
                new ResizeObserver$1(() => this._childrenSizeChanged());
        }
    }
    _applyContainerStyles() {
        if (this._useShadowDOM) {
            if (this._containerStylesheet === null) {
                const sheet = (this._containerStylesheet = document.createElement('style'));
                sheet.textContent = containerStyles(':host', '::slotted(*)');
            }
            const root = this._containerElement.shadowRoot || this._containerElement.attachShadow({ mode: 'open' });
            const slot = root.querySelector('slot:not([name])');
            root.appendChild(this._containerStylesheet);
            if (!slot) {
                root.appendChild(document.createElement('slot'));
            }
        }
        else {
            attachGlobalContainerStylesheet();
            if (this._containerElement) {
                this._containerElement.classList.add(HOST_CLASSNAME);
            }
        }
    }
    _createContainerSizer() {
        const sizer = document.createElement('div');
        // When the scrollHeight is large, the height of this element might be
        // ignored. Setting content and font-size ensures the element has a size.
        Object.assign(sizer.style, {
            position: 'absolute',
            margin: '-2px 0 0 0',
            padding: 0,
            visibility: 'hidden',
            fontSize: '2px',
        });
        sizer.innerHTML = '&nbsp;';
        return sizer;
    }
    /**
     * TODO: Rename _ordered to _kids?
     */
    get _kids() {
        return this._ordered;
    }
    /**
     * Render and update the view at the next opportunity.
     */
    _scheduleUpdateView() {
        this._needsUpdateView = true;
        this._scheduleRender();
    }
    _updateView() {
        let width, height, top, left;
        if (this._scrollTarget === this._containerElement) {
            width = this._containerSize.width;
            height = this._containerSize.height;
            left = this._containerElement.scrollLeft;
            top = this._containerElement.scrollTop;
        }
        else {
            const containerBounds = this._containerElement.getBoundingClientRect();
            const scrollBounds = this._scrollTarget ?
                this._scrollTarget.getBoundingClientRect() :
                {
                    top: containerBounds.top + scrollY,
                    left: containerBounds.left + scrollX,
                    width: innerWidth,
                    height: innerHeight
                };
            const scrollerWidth = scrollBounds.width;
            const scrollerHeight = scrollBounds.height;
            const xMin = Math.max(0, Math.min(scrollerWidth, containerBounds.left - scrollBounds.left));
            const yMin = Math.max(0, Math.min(scrollerHeight, containerBounds.top - scrollBounds.top));
            // TODO: Direction is intended to be a layout-level concept, not a scroller-level concept,
            // so this feels like a factoring problem
            const xMax = this._layout.direction === 'vertical' ?
                Math.max(0, Math.min(scrollerWidth, containerBounds.right - scrollBounds.left)) :
                scrollerWidth;
            const yMax = this._layout.direction === 'vertical' ?
                scrollerHeight :
                Math.max(0, Math.min(scrollerHeight, containerBounds.bottom - scrollBounds.top));
            width = xMax - xMin;
            height = yMax - yMin;
            left = Math.max(0, -(containerBounds.left - scrollBounds.left));
            top = Math.max(0, -(containerBounds.top - scrollBounds.top));
        }
        this._layout.viewportSize = { width, height };
        this._layout.viewportScroll = { top, left };
    }
    /**
     * Styles the _sizer element or the container so that its size reflects the
     * total size of all items.
     */
    _sizeContainer(size) {
        if (this._scrollTarget === this._containerElement) {
            const left = size && size.width ? size.width - 1 : 0;
            const top = size && size.height ? size.height - 1 : 0;
            this._sizer.style.transform = `translate(${left}px, ${top}px)`;
        }
        else {
            const style = this._containerElement.style;
            style.minWidth = size && size.width ? size.width + 'px' : null;
            style.minHeight = size && size.height ? size.height + 'px' : null;
        }
    }
    /**
     * Sets the top and left transform style of the children from the values in
     * pos.
     */
    _positionChildren(pos) {
        const kids = this._kids;
        Object.keys(pos).forEach((key) => {
            const idx = key - this._first;
            const child = kids[idx];
            if (child) {
                const { top, left } = pos[key];
                child.style.position = 'absolute';
                child.style.transform = `translate(${left}px, ${top}px)`;
            }
        });
    }
    _adjustRange(range) {
        this.num = range.num;
        this.first = range.first;
        const visiblityChanged = this._firstVisible !== range.firstVisible || this._lastVisible !== range.lastVisible;
        this._firstVisible = range.firstVisible;
        this._lastVisible = range.lastVisible;
        this._incremental = !(range.stable);
        if (range.remeasure) {
            this.requestRemeasure();
        }
        else if (range.stable || visiblityChanged) {
            this._notifyRange();
        }
    }
    _shouldRender() {
        if (!super._shouldRender() || !this._containerElement || (!this._layout && !this._lazyLoadDefaultLayout)) {
            return false;
        }
        // NOTE: we're about to render, but the ResizeObserver didn't execute yet.
        // Since we want to keep rAF timing, we compute _containerSize now. Would
        // be nice to have a way to flush ResizeObservers.
        if (this._containerSize === null) {
            const { width, height } = this._containerElement.getBoundingClientRect();
            this._containerSize = { width, height };
        }
        return this._containerSize.width > 0 || this._containerSize.height > 0;
    }
    _correctScrollError(err) {
        if (this._scrollTarget) {
            this._scrollTarget.scrollTop -= err.top;
            this._scrollTarget.scrollLeft -= err.left;
        }
        else {
            window.scroll(window.scrollX - err.left, window.scrollY - err.top);
        }
    }
    /**
     * Emits a rangechange event with the current first, last, firstVisible, and
     * lastVisible.
     */
    _notifyRange() {
        const { first, num } = this;
        const last = first + num - 1;
        this._container.dispatchEvent(new RangeChangeEvent('rangechange', {
            first,
            last,
            firstVisible: this._firstVisible,
            lastVisible: this._lastVisible,
        }));
    }
    /**
     * Render and update the view at the next opportunity with the given
     * container size.
     */
    _containerSizeChanged(size) {
        const { width, height } = size;
        this._containerSize = { width, height };
        this._scheduleUpdateView();
    }
    _childrenSizeChanged() {
        if (this._skipNextChildrenSizeChanged) {
            this._skipNextChildrenSizeChanged = false;
        }
        else {
            this.requestRemeasure();
        }
    }
}

/**
 * Mixin for VirtualRepeater and VirtualScroller. This mixin overrides the generic
 * methods in those classes to provide lit-specific implementations of element
 * creation and manipulation.
 *
 * This mixin implements child recycling, so children can be reused after removal
 * from the DOM.
 */
const LitMixin = (Superclass) => class extends Superclass {
    constructor(config) {
        const { part, renderItem, useShadowDOM, layout } = config;
        const container = part.startNode.parentNode;
        const scrollTarget = config.scrollTarget || container;
        super({ container, scrollTarget, useShadowDOM, layout });
        this._pool = [];
        this._renderItem = renderItem;
        this._hostPart = part;
    }
    createElement() {
        return this._pool.pop() || new NodePart(this._hostPart.options);
    }
    updateElement(part, item, idx) {
        part.setValue(this._renderItem(item, idx));
        part.commit();
    }
    recycleElement(part) {
        this._pool.push(part);
    }
    /*
     * Lit-specific overrides for node manipulation
     */
    get _kids() {
        return this._ordered.map((p) => p.startNode.nextElementSibling);
    }
    _node(part) {
        return part.startNode;
    }
    _nextSibling(part) {
        return part.endNode.nextSibling;
    }
    _insertBefore(part, referenceNode) {
        if (referenceNode === null) {
            referenceNode = this._hostPart.endNode;
        }
        if (!this._childIsAttached(part)) {
            // Inserting new part
            part.startNode = createMarker();
            part.endNode = createMarker();
            super._insertBefore(part.startNode, referenceNode);
            super._insertBefore(part.endNode, referenceNode);
        }
        else {
            // Inserting existing part
            const boundary = part.endNode.nextSibling;
            if (referenceNode !== part.startNode && referenceNode !== boundary) {
                // Part is not already in the right place
                for (let node = part.startNode; node !== boundary;) {
                    const n = node.nextSibling;
                    super._insertBefore(node, referenceNode);
                    node = n;
                }
            }
        }
    }
    _hideChild(part) {
        let node = part.startNode;
        while (node && node !== part.endNode) {
            super._hideChild(node);
            node = node.nextSibling;
        }
    }
    _showChild(part) {
        let node = part.startNode;
        while (node && node !== part.endNode) {
            super._showChild(node);
            node = node.nextSibling;
        }
    }
    _measureChild(part) {
        // Currently, we assume there's only one node in the part (between start and
        // end nodes)
        return super._measureChild(part.startNode.nextElementSibling);
    }
};

class LitScroller extends LitMixin(VirtualScroller) {
}
const partToScroller = new WeakMap();
/**
 * A lit-html directive that turns its parent node into a virtual scroller.
 *
 * See ScrollConfig interface for configuration options.
 */
const scroll = directive((config) => async (part) => {
    // Retain the scroller so that re-rendering the directive's parent won't
    // create another one.
    let scroller = partToScroller.get(part);
    if (!scroller) {
        if (!part.startNode.isConnected) {
            await Promise.resolve();
        }
        const { renderItem, layout, scrollTarget, useShadowDOM } = config;
        scroller = new LitScroller({ part, renderItem, layout, scrollTarget, useShadowDOM });
        partToScroller.set(part, scroller);
    }
    Object.assign(scroller, {
        items: config.items,
        totalItems: config.totalItems === undefined ? null : config.totalItems,
        scrollToIndex: config.scrollToIndex === undefined ? null : config.scrollToIndex,
    });
});

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * A LitElement wrapper of the scroll directive.
 *
 * Import this module to declare the lit-virtualizer custom element.
 * Pass an items array, renderItem method, and scroll target as properties
 * to the <lit-virtualizer> element.
 */
let LitVirtualizer = class LitVirtualizer extends LitElement {
    constructor() {
        super();
        this.renderRoot = this;
    }
    /**
     * The method used for rendering each item.
     */
    get renderItem() {
        return this._renderItem;
    }
    set renderItem(renderItem) {
        if (renderItem !== this.renderItem) {
            this._renderItem = renderItem;
            this.requestUpdate();
        }
    }
    /**
     * Scroll to the specified index, placing that item at the given position
     * in the scroll view.
     */
    async scrollToIndex(index, position = 'start') {
        this._scrollToIndex = { index, position };
        this.requestUpdate();
        await this.updateComplete;
        this._scrollToIndex = null;
    }
    render() {
        return html `${scroll({
            items: this.items,
            renderItem: this._renderItem,
            scrollTarget: this.scrollTarget,
            scrollToIndex: this._scrollToIndex,
            useShadowDOM: true
            // TODO: allow configuration of a layout.
        })}`;
    }
};
__decorate([
    property()
], LitVirtualizer.prototype, "_renderItem", void 0);
__decorate([
    property()
], LitVirtualizer.prototype, "items", void 0);
__decorate([
    property()
], LitVirtualizer.prototype, "scrollTarget", void 0);
LitVirtualizer = __decorate([
    customElement('lit-virtualizer')
], LitVirtualizer);

export { LitVirtualizer };
