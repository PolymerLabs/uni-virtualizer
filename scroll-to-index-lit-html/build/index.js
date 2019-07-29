/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const directives = new WeakMap();
/**
 * Brands a function as a directive factory function so that lit-html will call
 * the function during template rendering, rather than passing as a value.
 *
 * A _directive_ is a function that takes a Part as an argument. It has the
 * signature: `(part: Part) => void`.
 *
 * A directive _factory_ is a function that takes arguments for data and
 * configuration and returns a directive. Users of directive usually refer to
 * the directive factory as the directive. For example, "The repeat directive".
 *
 * Usually a template author will invoke a directive factory in their template
 * with relevant arguments, which will then return a directive function.
 *
 * Here's an example of using the `repeat()` directive factory that takes an
 * array and a function to render an item:
 *
 * ```js
 * html`<ul><${repeat(items, (item) => html`<li>${item}</li>`)}</ul>`
 * ```
 *
 * When `repeat` is invoked, it returns a directive function that closes over
 * `items` and the template function. When the outer template is rendered, the
 * return directive function is called with the Part for the expression.
 * `repeat` then performs it's custom logic to render multiple items.
 *
 * @param f The directive factory function. Must be a function that returns a
 * function of the signature `(part: Part) => void`. The returned function will
 * be called with the part object.
 *
 * @example
 *
 * import {directive, html} from 'lit-html';
 *
 * const immutable = directive((v) => (part) => {
 *   if (part.value !== v) {
 *     part.setValue(v)
 *   }
 * });
 */
const directive = (f) => ((...args) => {
    const d = f(...args);
    directives.set(d, true);
    return d;
});
const isDirective = (o) => {
    return typeof o === 'function' && directives.has(o);
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * True if the custom elements polyfill is in use.
 */
const isCEPolyfill = window.customElements !== undefined &&
    window.customElements.polyfillWrapFlushCallback !==
        undefined;
/**
 * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
 * `container`.
 */
const removeNodes = (container, start, end = null) => {
    while (start !== end) {
        const n = start.nextSibling;
        container.removeChild(start);
        start = n;
    }
};

/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * A sentinel value that signals that a value was handled by a directive and
 * should not be written to the DOM.
 */
const noChange = {};
/**
 * A sentinel value that signals a NodePart to fully clear its content.
 */
const nothing = {};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An expression marker with embedded unique key to avoid collision with
 * possible text in templates.
 */
const marker = `{{lit-${String(Math.random()).slice(2)}}}`;
/**
 * An expression marker used text-positions, multi-binding attributes, and
 * attributes with markup-like text values.
 */
const nodeMarker = `<!--${marker}-->`;
const markerRegex = new RegExp(`${marker}|${nodeMarker}`);
/**
 * Suffix appended to all bound attribute names.
 */
const boundAttributeSuffix = '$lit$';
/**
 * An updateable Template that tracks the location of dynamic parts.
 */
class Template {
    constructor(result, element) {
        this.parts = [];
        this.element = element;
        const nodesToRemove = [];
        const stack = [];
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(element.content, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.
        let lastPartIndex = 0;
        let index = -1;
        let partIndex = 0;
        const { strings, values: { length } } = result;
        while (partIndex < length) {
            const node = walker.nextNode();
            if (node === null) {
                // We've exhausted the content inside a nested template element.
                // Because we still have parts (the outer for-loop), we know:
                // - There is a template in the stack
                // - The walker will find a nextNode outside the template
                walker.currentNode = stack.pop();
                continue;
            }
            index++;
            if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                if (node.hasAttributes()) {
                    const attributes = node.attributes;
                    const { length } = attributes;
                    // Per
                    // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                    // attributes are not guaranteed to be returned in document order.
                    // In particular, Edge/IE can return them out of order, so we cannot
                    // assume a correspondence between part index and attribute index.
                    let count = 0;
                    for (let i = 0; i < length; i++) {
                        if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                            count++;
                        }
                    }
                    while (count-- > 0) {
                        // Get the template literal section leading up to the first
                        // expression in this attribute
                        const stringForPart = strings[partIndex];
                        // Find the attribute name
                        const name = lastAttributeNameRegex.exec(stringForPart)[2];
                        // Find the corresponding attribute
                        // All bound attributes have had a suffix added in
                        // TemplateResult#getHTML to opt out of special attribute
                        // handling. To look up the attribute value we also need to add
                        // the suffix.
                        const attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                        const attributeValue = node.getAttribute(attributeLookupName);
                        node.removeAttribute(attributeLookupName);
                        const statics = attributeValue.split(markerRegex);
                        this.parts.push({ type: 'attribute', index, name, strings: statics });
                        partIndex += statics.length - 1;
                    }
                }
                if (node.tagName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
            }
            else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                const data = node.data;
                if (data.indexOf(marker) >= 0) {
                    const parent = node.parentNode;
                    const strings = data.split(markerRegex);
                    const lastIndex = strings.length - 1;
                    // Generate a new text node for each literal section
                    // These nodes are also used as the markers for node parts
                    for (let i = 0; i < lastIndex; i++) {
                        let insert;
                        let s = strings[i];
                        if (s === '') {
                            insert = createMarker();
                        }
                        else {
                            const match = lastAttributeNameRegex.exec(s);
                            if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                                s = s.slice(0, match.index) + match[1] +
                                    match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                            }
                            insert = document.createTextNode(s);
                        }
                        parent.insertBefore(insert, node);
                        this.parts.push({ type: 'node', index: ++index });
                    }
                    // If there's no text, we must insert a comment to mark our place.
                    // Else, we can trust it will stick around after cloning.
                    if (strings[lastIndex] === '') {
                        parent.insertBefore(createMarker(), node);
                        nodesToRemove.push(node);
                    }
                    else {
                        node.data = strings[lastIndex];
                    }
                    // We have a part for each match found
                    partIndex += lastIndex;
                }
            }
            else if (node.nodeType === 8 /* Node.COMMENT_NODE */) {
                if (node.data === marker) {
                    const parent = node.parentNode;
                    // Add a new marker node to be the startNode of the Part if any of
                    // the following are true:
                    //  * We don't have a previousSibling
                    //  * The previousSibling is already the start of a previous part
                    if (node.previousSibling === null || index === lastPartIndex) {
                        index++;
                        parent.insertBefore(createMarker(), node);
                    }
                    lastPartIndex = index;
                    this.parts.push({ type: 'node', index });
                    // If we don't have a nextSibling, keep this node so we have an end.
                    // Else, we can remove it to save future costs.
                    if (node.nextSibling === null) {
                        node.data = '';
                    }
                    else {
                        nodesToRemove.push(node);
                        index--;
                    }
                    partIndex++;
                }
                else {
                    let i = -1;
                    while ((i = node.data.indexOf(marker, i + 1)) !== -1) {
                        // Comment node has a binding marker inside, make an inactive part
                        // The binding won't work, but subsequent bindings will
                        // TODO (justinfagnani): consider whether it's even worth it to
                        // make bindings in comments work
                        this.parts.push({ type: 'node', index: -1 });
                        partIndex++;
                    }
                }
            }
        }
        // Remove text binding nodes after the walk to not disturb the TreeWalker
        for (const n of nodesToRemove) {
            n.parentNode.removeChild(n);
        }
    }
}
const endsWith = (str, suffix) => {
    const index = str.length - suffix.length;
    return index >= 0 && str.slice(index) === suffix;
};
const isTemplatePartActive = (part) => part.index !== -1;
// Allows `document.createComment('')` to be renamed for a
// small manual size-savings.
const createMarker = () => document.createComment('');
/**
 * This regex extracts the attribute name preceding an attribute-position
 * expression. It does this by matching the syntax allowed for attributes
 * against the string literal directly preceding the expression, assuming that
 * the expression is in an attribute-value position.
 *
 * See attributes in the HTML spec:
 * https://www.w3.org/TR/html5/syntax.html#elements-attributes
 *
 * " \x09\x0a\x0c\x0d" are HTML space characters:
 * https://www.w3.org/TR/html5/infrastructure.html#space-characters
 *
 * "\0-\x1F\x7F-\x9F" are Unicode control characters, which includes every
 * space character except " ".
 *
 * So an attribute is:
 *  * The name: any character except a control character, space character, ('),
 *    ("), ">", "=", or "/"
 *  * Followed by zero or more space characters
 *  * Followed by "="
 *  * Followed by zero or more space characters
 *  * Followed by:
 *    * Any character except space, ('), ("), "<", ">", "=", (`), or
 *    * (") then any non-("), or
 *    * (') then any non-(')
 */
const lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * An instance of a `Template` that can be attached to the DOM and updated
 * with new values.
 */
class TemplateInstance {
    constructor(template, processor, options) {
        this.__parts = [];
        this.template = template;
        this.processor = processor;
        this.options = options;
    }
    update(values) {
        let i = 0;
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.setValue(values[i]);
            }
            i++;
        }
        for (const part of this.__parts) {
            if (part !== undefined) {
                part.commit();
            }
        }
    }
    _clone() {
        // There are a number of steps in the lifecycle of a template instance's
        // DOM fragment:
        //  1. Clone - create the instance fragment
        //  2. Adopt - adopt into the main document
        //  3. Process - find part markers and create parts
        //  4. Upgrade - upgrade custom elements
        //  5. Update - set node, attribute, property, etc., values
        //  6. Connect - connect to the document. Optional and outside of this
        //     method.
        //
        // We have a few constraints on the ordering of these steps:
        //  * We need to upgrade before updating, so that property values will pass
        //    through any property setters.
        //  * We would like to process before upgrading so that we're sure that the
        //    cloned fragment is inert and not disturbed by self-modifying DOM.
        //  * We want custom elements to upgrade even in disconnected fragments.
        //
        // Given these constraints, with full custom elements support we would
        // prefer the order: Clone, Process, Adopt, Upgrade, Update, Connect
        //
        // But Safari dooes not implement CustomElementRegistry#upgrade, so we
        // can not implement that order and still have upgrade-before-update and
        // upgrade disconnected fragments. So we instead sacrifice the
        // process-before-upgrade constraint, since in Custom Elements v1 elements
        // must not modify their light DOM in the constructor. We still have issues
        // when co-existing with CEv0 elements like Polymer 1, and with polyfills
        // that don't strictly adhere to the no-modification rule because shadow
        // DOM, which may be created in the constructor, is emulated by being placed
        // in the light DOM.
        //
        // The resulting order is on native is: Clone, Adopt, Upgrade, Process,
        // Update, Connect. document.importNode() performs Clone, Adopt, and Upgrade
        // in one step.
        //
        // The Custom Elements v1 polyfill supports upgrade(), so the order when
        // polyfilled is the more ideal: Clone, Process, Adopt, Upgrade, Update,
        // Connect.
        const fragment = isCEPolyfill ?
            this.template.element.content.cloneNode(true) :
            document.importNode(this.template.element.content, true);
        const stack = [];
        const parts = this.template.parts;
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
        const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */, null, false);
        let partIndex = 0;
        let nodeIndex = 0;
        let part;
        let node = walker.nextNode();
        // Loop through all the nodes and parts of a template
        while (partIndex < parts.length) {
            part = parts[partIndex];
            if (!isTemplatePartActive(part)) {
                this.__parts.push(undefined);
                partIndex++;
                continue;
            }
            // Progress the tree walker until we find our next part's node.
            // Note that multiple parts may share the same node (attribute parts
            // on a single element), so this loop may not run at all.
            while (nodeIndex < part.index) {
                nodeIndex++;
                if (node.nodeName === 'TEMPLATE') {
                    stack.push(node);
                    walker.currentNode = node.content;
                }
                if ((node = walker.nextNode()) === null) {
                    // We've exhausted the content inside a nested template element.
                    // Because we still have parts (the outer for-loop), we know:
                    // - There is a template in the stack
                    // - The walker will find a nextNode outside the template
                    walker.currentNode = stack.pop();
                    node = walker.nextNode();
                }
            }
            // We've arrived at our part's node.
            if (part.type === 'node') {
                const part = this.processor.handleTextExpression(this.options);
                part.insertAfterNode(node.previousSibling);
                this.__parts.push(part);
            }
            else {
                this.__parts.push(...this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options));
            }
            partIndex++;
        }
        if (isCEPolyfill) {
            document.adoptNode(fragment);
            customElements.upgrade(fragment);
        }
        return fragment;
    }
}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * The return type of `html`, which holds a Template and the values from
 * interpolated expressions.
 */
class TemplateResult {
    constructor(strings, values, type, processor) {
        this.strings = strings;
        this.values = values;
        this.type = type;
        this.processor = processor;
    }
    /**
     * Returns a string of HTML used to create a `<template>` element.
     */
    getHTML() {
        const l = this.strings.length - 1;
        let html = '';
        let isCommentBinding = false;
        for (let i = 0; i < l; i++) {
            const s = this.strings[i];
            // For each binding we want to determine the kind of marker to insert
            // into the template source before it's parsed by the browser's HTML
            // parser. The marker type is based on whether the expression is in an
            // attribute, text, or comment poisition.
            //   * For node-position bindings we insert a comment with the marker
            //     sentinel as its text content, like <!--{{lit-guid}}-->.
            //   * For attribute bindings we insert just the marker sentinel for the
            //     first binding, so that we support unquoted attribute bindings.
            //     Subsequent bindings can use a comment marker because multi-binding
            //     attributes must be quoted.
            //   * For comment bindings we insert just the marker sentinel so we don't
            //     close the comment.
            //
            // The following code scans the template source, but is *not* an HTML
            // parser. We don't need to track the tree structure of the HTML, only
            // whether a binding is inside a comment, and if not, if it appears to be
            // the first binding in an attribute.
            const commentOpen = s.lastIndexOf('<!--');
            // We're in comment position if we have a comment open with no following
            // comment close. Because <-- can appear in an attribute value there can
            // be false positives.
            isCommentBinding = (commentOpen > -1 || isCommentBinding) &&
                s.indexOf('-->', commentOpen + 1) === -1;
            // Check to see if we have an attribute-like sequence preceeding the
            // expression. This can match "name=value" like structures in text,
            // comments, and attribute values, so there can be false-positives.
            const attributeMatch = lastAttributeNameRegex.exec(s);
            if (attributeMatch === null) {
                // We're only in this branch if we don't have a attribute-like
                // preceeding sequence. For comments, this guards against unusual
                // attribute values like <div foo="<!--${'bar'}">. Cases like
                // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                // below.
                html += s + (isCommentBinding ? marker : nodeMarker);
            }
            else {
                // For attributes we use just a marker sentinel, and also append a
                // $lit$ suffix to the name to opt-out of attribute-specific parsing
                // that IE and Edge do for style and certain SVG attributes.
                html += s.substr(0, attributeMatch.index) + attributeMatch[1] +
                    attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] +
                    marker;
            }
        }
        html += this.strings[l];
        return html;
    }
    getTemplateElement() {
        const template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
    }
}

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const isPrimitive = (value) => {
    return (value === null ||
        !(typeof value === 'object' || typeof value === 'function'));
};
const isIterable = (value) => {
    return Array.isArray(value) ||
        // tslint:disable-next-line:no-any
        !!(value && value[Symbol.iterator]);
};
/**
 * Writes attribute values to the DOM for a group of AttributeParts bound to a
 * single attibute. The value is only set once even if there are multiple parts
 * for an attribute.
 */
class AttributeCommitter {
    constructor(element, name, strings) {
        this.dirty = true;
        this.element = element;
        this.name = name;
        this.strings = strings;
        this.parts = [];
        for (let i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
        }
    }
    /**
     * Creates a single part. Override this to create a differnt type of part.
     */
    _createPart() {
        return new AttributePart(this);
    }
    _getValue() {
        const strings = this.strings;
        const l = strings.length - 1;
        let text = '';
        for (let i = 0; i < l; i++) {
            text += strings[i];
            const part = this.parts[i];
            if (part !== undefined) {
                const v = part.value;
                if (isPrimitive(v) || !isIterable(v)) {
                    text += typeof v === 'string' ? v : String(v);
                }
                else {
                    for (const t of v) {
                        text += typeof t === 'string' ? t : String(t);
                    }
                }
            }
        }
        text += strings[l];
        return text;
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            this.element.setAttribute(this.name, this._getValue());
        }
    }
}
/**
 * A Part that controls all or part of an attribute value.
 */
class AttributePart {
    constructor(committer) {
        this.value = undefined;
        this.committer = committer;
    }
    setValue(value) {
        if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
            this.value = value;
            // If the value is a not a directive, dirty the committer so that it'll
            // call setAttribute. If the value is a directive, it'll dirty the
            // committer if it calls setValue().
            if (!isDirective(value)) {
                this.committer.dirty = true;
            }
        }
    }
    commit() {
        while (isDirective(this.value)) {
            const directive = this.value;
            this.value = noChange;
            directive(this);
        }
        if (this.value === noChange) {
            return;
        }
        this.committer.commit();
    }
}
/**
 * A Part that controls a location within a Node tree. Like a Range, NodePart
 * has start and end locations and can set and update the Nodes between those
 * locations.
 *
 * NodeParts support several value types: primitives, Nodes, TemplateResults,
 * as well as arrays and iterables of those types.
 */
class NodePart {
    constructor(options) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.options = options;
    }
    /**
     * Appends this part into a container.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendInto(container) {
        this.startNode = container.appendChild(createMarker());
        this.endNode = container.appendChild(createMarker());
    }
    /**
     * Inserts this part after the `ref` node (between `ref` and `ref`'s next
     * sibling). Both `ref` and its next sibling must be static, unchanging nodes
     * such as those that appear in a literal section of a template.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterNode(ref) {
        this.startNode = ref;
        this.endNode = ref.nextSibling;
    }
    /**
     * Appends this part into a parent part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    appendIntoPart(part) {
        part.__insert(this.startNode = createMarker());
        part.__insert(this.endNode = createMarker());
    }
    /**
     * Inserts this part after the `ref` part.
     *
     * This part must be empty, as its contents are not automatically moved.
     */
    insertAfterPart(ref) {
        ref.__insert(this.startNode = createMarker());
        this.endNode = ref.endNode;
        ref.endNode = this.startNode;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (isDirective(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = noChange;
            directive(this);
        }
        const value = this.__pendingValue;
        if (value === noChange) {
            return;
        }
        if (isPrimitive(value)) {
            if (value !== this.value) {
                this.__commitText(value);
            }
        }
        else if (value instanceof TemplateResult) {
            this.__commitTemplateResult(value);
        }
        else if (value instanceof Node) {
            this.__commitNode(value);
        }
        else if (isIterable(value)) {
            this.__commitIterable(value);
        }
        else if (value === nothing) {
            this.value = nothing;
            this.clear();
        }
        else {
            // Fallback, will render the string representation
            this.__commitText(value);
        }
    }
    __insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    __commitNode(value) {
        if (this.value === value) {
            return;
        }
        this.clear();
        this.__insert(value);
        this.value = value;
    }
    __commitText(value) {
        const node = this.startNode.nextSibling;
        value = value == null ? '' : value;
        // If `value` isn't already a string, we explicitly convert it here in case
        // it can't be implicitly converted - i.e. it's a symbol.
        const valueAsString = typeof value === 'string' ? value : String(value);
        if (node === this.endNode.previousSibling &&
            node.nodeType === 3 /* Node.TEXT_NODE */) {
            // If we only have a single text node between the markers, we can just
            // set its value, rather than replacing it.
            // TODO(justinfagnani): Can we just check if this.value is primitive?
            node.data = valueAsString;
        }
        else {
            this.__commitNode(document.createTextNode(valueAsString));
        }
        this.value = value;
    }
    __commitTemplateResult(value) {
        const template = this.options.templateFactory(value);
        if (this.value instanceof TemplateInstance &&
            this.value.template === template) {
            this.value.update(value.values);
        }
        else {
            // Make sure we propagate the template processor from the TemplateResult
            // so that we use its syntax extension, etc. The template factory comes
            // from the render function options so that it can control template
            // caching and preprocessing.
            const instance = new TemplateInstance(template, value.processor, this.options);
            const fragment = instance._clone();
            instance.update(value.values);
            this.__commitNode(fragment);
            this.value = instance;
        }
    }
    __commitIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _value is an array, then the previous render was of an
        // iterable and _value will contain the NodeParts from the previous
        // render. If _value is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this.value)) {
            this.value = [];
            this.clear();
        }
        // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render
        const itemParts = this.value;
        let partIndex = 0;
        let itemPart;
        for (const item of value) {
            // Try to reuse an existing part
            itemPart = itemParts[partIndex];
            // If no existing part, create a new one
            if (itemPart === undefined) {
                itemPart = new NodePart(this.options);
                itemParts.push(itemPart);
                if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                }
                else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                }
            }
            itemPart.setValue(item);
            itemPart.commit();
            partIndex++;
        }
        if (partIndex < itemParts.length) {
            // Truncate the parts array so _value reflects the current state
            itemParts.length = partIndex;
            this.clear(itemPart && itemPart.endNode);
        }
    }
    clear(startNode = this.startNode) {
        removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
    }
}
/**
 * Implements a boolean attribute, roughly as defined in the HTML
 * specification.
 *
 * If the value is truthy, then the attribute is present with a value of
 * ''. If the value is falsey, the attribute is removed.
 */
class BooleanAttributePart {
    constructor(element, name, strings) {
        this.value = undefined;
        this.__pendingValue = undefined;
        if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
        }
        this.element = element;
        this.name = name;
        this.strings = strings;
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (isDirective(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = noChange;
            directive(this);
        }
        if (this.__pendingValue === noChange) {
            return;
        }
        const value = !!this.__pendingValue;
        if (this.value !== value) {
            if (value) {
                this.element.setAttribute(this.name, '');
            }
            else {
                this.element.removeAttribute(this.name);
            }
            this.value = value;
        }
        this.__pendingValue = noChange;
    }
}
/**
 * Sets attribute values for PropertyParts, so that the value is only set once
 * even if there are multiple parts for a property.
 *
 * If an expression controls the whole property value, then the value is simply
 * assigned to the property under control. If there are string literals or
 * multiple expressions, then the strings are expressions are interpolated into
 * a string first.
 */
class PropertyCommitter extends AttributeCommitter {
    constructor(element, name, strings) {
        super(element, name, strings);
        this.single =
            (strings.length === 2 && strings[0] === '' && strings[1] === '');
    }
    _createPart() {
        return new PropertyPart(this);
    }
    _getValue() {
        if (this.single) {
            return this.parts[0].value;
        }
        return super._getValue();
    }
    commit() {
        if (this.dirty) {
            this.dirty = false;
            // tslint:disable-next-line:no-any
            this.element[this.name] = this._getValue();
        }
    }
}
class PropertyPart extends AttributePart {
}
// Detect event listener options support. If the `capture` property is read
// from the options object, then options are supported. If not, then the thrid
// argument to add/removeEventListener is interpreted as the boolean capture
// value so we should only pass the `capture` property.
let eventOptionsSupported = false;
try {
    const options = {
        get capture() {
            eventOptionsSupported = true;
            return false;
        }
    };
    // tslint:disable-next-line:no-any
    window.addEventListener('test', options, options);
    // tslint:disable-next-line:no-any
    window.removeEventListener('test', options, options);
}
catch (_e) {
}
class EventPart {
    constructor(element, eventName, eventContext) {
        this.value = undefined;
        this.__pendingValue = undefined;
        this.element = element;
        this.eventName = eventName;
        this.eventContext = eventContext;
        this.__boundHandleEvent = (e) => this.handleEvent(e);
    }
    setValue(value) {
        this.__pendingValue = value;
    }
    commit() {
        while (isDirective(this.__pendingValue)) {
            const directive = this.__pendingValue;
            this.__pendingValue = noChange;
            directive(this);
        }
        if (this.__pendingValue === noChange) {
            return;
        }
        const newListener = this.__pendingValue;
        const oldListener = this.value;
        const shouldRemoveListener = newListener == null ||
            oldListener != null &&
                (newListener.capture !== oldListener.capture ||
                    newListener.once !== oldListener.once ||
                    newListener.passive !== oldListener.passive);
        const shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
        if (shouldRemoveListener) {
            this.element.removeEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        if (shouldAddListener) {
            this.__options = getOptions(newListener);
            this.element.addEventListener(this.eventName, this.__boundHandleEvent, this.__options);
        }
        this.value = newListener;
        this.__pendingValue = noChange;
    }
    handleEvent(event) {
        if (typeof this.value === 'function') {
            this.value.call(this.eventContext || this.element, event);
        }
        else {
            this.value.handleEvent(event);
        }
    }
}
// We copy options because of the inconsistent behavior of browsers when reading
// the third argument of add/removeEventListener. IE11 doesn't support options
// at all. Chrome 41 only reads `capture` if the argument is an object.
const getOptions = (o) => o &&
    (eventOptionsSupported ?
        { capture: o.capture, passive: o.passive, once: o.once } :
        o.capture);

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * Creates Parts when a template is instantiated.
 */
class DefaultTemplateProcessor {
    /**
     * Create parts for an attribute-position binding, given the event, attribute
     * name, and string literals.
     *
     * @param element The element containing the binding
     * @param name  The attribute name
     * @param strings The string literals. There are always at least two strings,
     *   event for fully-controlled bindings with a single expression.
     */
    handleAttributeExpressions(element, name, strings, options) {
        const prefix = name[0];
        if (prefix === '.') {
            const committer = new PropertyCommitter(element, name.slice(1), strings);
            return committer.parts;
        }
        if (prefix === '@') {
            return [new EventPart(element, name.slice(1), options.eventContext)];
        }
        if (prefix === '?') {
            return [new BooleanAttributePart(element, name.slice(1), strings)];
        }
        const committer = new AttributeCommitter(element, name, strings);
        return committer.parts;
    }
    /**
     * Create parts for a text-position binding.
     * @param templateFactory
     */
    handleTextExpression(options) {
        return new NodePart(options);
    }
}
const defaultTemplateProcessor = new DefaultTemplateProcessor();

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * The default TemplateFactory which caches Templates keyed on
 * result.type and result.strings.
 */
function templateFactory(result) {
    let templateCache = templateCaches.get(result.type);
    if (templateCache === undefined) {
        templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
        };
        templateCaches.set(result.type, templateCache);
    }
    let template = templateCache.stringsArray.get(result.strings);
    if (template !== undefined) {
        return template;
    }
    // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    const key = result.strings.join(marker);
    // Check if we already have a Template for this key
    template = templateCache.keyString.get(key);
    if (template === undefined) {
        // If we have not seen this key before, create a new Template
        template = new Template(result, result.getTemplateElement());
        // Cache the Template for this key
        templateCache.keyString.set(key, template);
    }
    // Cache all future queries for this TemplateStringsArray
    templateCache.stringsArray.set(result.strings, template);
    return template;
}
const templateCaches = new Map();

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const parts = new WeakMap();
/**
 * Renders a template result or other value to a container.
 *
 * To update a container with new values, reevaluate the template literal and
 * call `render` with the new result.
 *
 * @param result Any value renderable by NodePart - typically a TemplateResult
 *     created by evaluating a template tag like `html` or `svg`.
 * @param container A DOM parent to render to. The entire contents are either
 *     replaced, or efficiently updated if the same result type was previous
 *     rendered there.
 * @param options RenderOptions for the entire render tree rendered to this
 *     container. Render options must *not* change between renders to the same
 *     container, as those changes will not effect previously rendered DOM.
 */
const render = (result, container, options) => {
    let part = parts.get(container);
    if (part === undefined) {
        removeNodes(container, container.firstChild);
        parts.set(container, part = new NodePart(Object.assign({ templateFactory }, options)));
        part.appendInto(container);
    }
    part.setValue(result);
    part.commit();
};

/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
// IMPORTANT: do not change the property name or the assignment expression.
// This line will be used in regexes to search for lit-html usage.
// TODO(justinfagnani): inject version number at build time
(window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.1.1');
/**
 * Interprets a template literal as an HTML template that can efficiently
 * render to and update a container.
 */
const html = (strings, ...values) => new TemplateResult(strings, values, 'html', defaultTemplateProcessor);

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

const example = (contacts, scrollToIndex = null) => html`
    <section style="height: 100%;">
        ${scroll({
            items: contacts,
            renderItem: ({ longText }, i) => html`<p>${i}) ${longText}</p>`,
            scrollToIndex: scrollToIndex,
        })}
    </section>
`;

let contacts;

(async function go() {
    contacts = await(await fetch('../shared/contacts.json')).json();
    render(example(contacts), document.getElementById("container"));
})();

window.scrollToIndex = (index, position) => {
    render(example(contacts, {index, position}), document.getElementById("container"));
};
