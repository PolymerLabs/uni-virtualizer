import { directive, NodePart, createMarker, TemplateResult } from 'lit-html';
import { VirtualRepeater } from './uni-virtualizer/lib/VirtualRepeater.js';

/**
 * Mixin for VirtualRepeater and VirtualScroller. This mixin overrides the generic
 * methods in those classes to provide lit-specific implementations of element
 * creation and manipulation.
 * 
 * This mixin implements child recycling, so children can be reused after removal
 * from the DOM.
 */
export const LitMixin = Superclass => class extends Superclass {
  // NodeParts that are available for reuse
  _pool: Array<NodePart>;

  // Function for generating each item's DOM
  _template: (item: any, index?: number) => TemplateResult;

  _hostPart: NodePart;
  
  constructor(config) {
    const {part, template, useShadowDOM, layout} = config;
    let container = part.startNode.parentNode;
    let scrollTarget = config.scrollTarget || container;
    super({container, scrollTarget, useShadowDOM, layout});

    this._pool = [];
    this._template = template;
    this._hostPart = part;
  }

  createElement(): NodePart {
    return this._pool.pop() || new NodePart(this._hostPart.options);
  }

  updateElement(part: NodePart, item, idx: number) {
    part.setValue(this._template(item, idx));
    part.commit();
  }

  recycleElement(part: NodePart) {
    this._pool.push(part);
  }

  // Lit-specific overrides for node manipulation
  get _kids(): Array<Node> {
    return this._ordered.map(p => p.startNode.nextElementSibling);
  }

  _node(part: NodePart): Node {
    return part.startNode;
  }

  _nextSibling(part: NodePart): Node {
    return part.endNode.nextSibling;
  }

  _insertBefore(part: NodePart, referenceNode: Node) {
    if (referenceNode === null) {
      referenceNode = this._hostPart.endNode;
    }
    if (!this._childIsAttached(part)) {
      // Inserting new part
      part.startNode = createMarker();
      part.endNode = createMarker();
      super._insertBefore(part.startNode, referenceNode);
      super._insertBefore(part.endNode, referenceNode);
    } else {
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

  _hideChild(part: NodePart) {
    let node = part.startNode;
    while (node && node !== part.endNode) {
      super._hideChild(node);
      node = node.nextSibling;
    }
  }

  _showChild(part: NodePart) {
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

export const LitRepeater = LitMixin(VirtualRepeater);

const partToRepeater = new WeakMap();
export const repeat = directive((config = {}) => async part => {
  let repeater = partToRepeater.get(part);
  if (!repeater) {
    if (!part.startNode.isConnected) {
      await Promise.resolve();
    }
    repeater = new LitRepeater({part, template: config.template});
    partToRepeater.set(part, repeater);
  }
  const {first, num, totalItems} = config;
  Object.assign(repeater, {first, num, totalItems});
});
