System.register([], function (exports, module) {
  'use strict';
  return {
    execute: function () {

      exports('_', _typeof);

      function _typeof(obj) {
        "@babel/helpers - typeof";

        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
          _typeof = exports('_', function (obj) {
            return typeof obj;
          });
        } else {
          _typeof = exports('_', function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
          });
        }

        return _typeof(obj);
      }

      function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          Promise.resolve(value).then(_next, _throw);
        }
      }

      function _asyncToGenerator(fn) {
        return function () {
          var self = this,
              args = arguments;
          return new Promise(function (resolve, reject) {
            var gen = fn.apply(self, args);

            function _next(value) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }

            function _throw(err) {
              asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }

            _next(undefined);
          });
        };
      }

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }

      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps) _defineProperties(Constructor.prototype, protoProps);
        if (staticProps) _defineProperties(Constructor, staticProps);
        return Constructor;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function");
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
          constructor: {
            value: subClass,
            writable: true,
            configurable: true
          }
        });
        if (superClass) _setPrototypeOf(subClass, superClass);
      }

      function _getPrototypeOf(o) {
        _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
          return o.__proto__ || Object.getPrototypeOf(o);
        };
        return _getPrototypeOf(o);
      }

      function _setPrototypeOf(o, p) {
        _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

        return _setPrototypeOf(o, p);
      }

      function _isNativeReflectConstruct() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return false;
        if (Reflect.construct.sham) return false;
        if (typeof Proxy === "function") return true;

        try {
          Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
          return true;
        } catch (e) {
          return false;
        }
      }

      function _construct(Parent, args, Class) {
        if (_isNativeReflectConstruct()) {
          _construct = Reflect.construct;
        } else {
          _construct = function _construct(Parent, args, Class) {
            var a = [null];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
          };
        }

        return _construct.apply(null, arguments);
      }

      function _isNativeFunction(fn) {
        return Function.toString.call(fn).indexOf("[native code]") !== -1;
      }

      function _wrapNativeSuper(Class) {
        var _cache = typeof Map === "function" ? new Map() : undefined;

        _wrapNativeSuper = function _wrapNativeSuper(Class) {
          if (Class === null || !_isNativeFunction(Class)) return Class;

          if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
          }

          if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);

            _cache.set(Class, Wrapper);
          }

          function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
          }

          Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
              value: Wrapper,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
          return _setPrototypeOf(Wrapper, Class);
        };

        return _wrapNativeSuper(Class);
      }

      function _assertThisInitialized(self) {
        if (self === void 0) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return self;
      }

      function _possibleConstructorReturn(self, call) {
        if (call && (typeof call === "object" || typeof call === "function")) {
          return call;
        }

        return _assertThisInitialized(self);
      }

      function _createSuper(Derived) {
        var hasNativeReflectConstruct = _isNativeReflectConstruct();

        return function _createSuperInternal() {
          var Super = _getPrototypeOf(Derived),
              result;

          if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;

            result = Reflect.construct(Super, arguments, NewTarget);
          } else {
            result = Super.apply(this, arguments);
          }

          return _possibleConstructorReturn(this, result);
        };
      }

      function _superPropBase(object, property) {
        while (!Object.prototype.hasOwnProperty.call(object, property)) {
          object = _getPrototypeOf(object);
          if (object === null) break;
        }

        return object;
      }

      function _get(target, property, receiver) {
        if (typeof Reflect !== "undefined" && Reflect.get) {
          _get = Reflect.get;
        } else {
          _get = function _get(target, property, receiver) {
            var base = _superPropBase(target, property);

            if (!base) return;
            var desc = Object.getOwnPropertyDescriptor(base, property);

            if (desc.get) {
              return desc.get.call(receiver);
            }

            return desc.value;
          };
        }

        return _get(target, property, receiver || target);
      }

      function _taggedTemplateLiteral(strings, raw) {
        if (!raw) {
          raw = strings.slice(0);
        }

        return Object.freeze(Object.defineProperties(strings, {
          raw: {
            value: Object.freeze(raw)
          }
        }));
      }

      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }

      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }

      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
      }

      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;

        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

        return arr2;
      }

      function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }

      function _createForOfIteratorHelper(o, allowArrayLike) {
        var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

        if (!it) {
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;

            var F = function () {};

            return {
              s: F,
              n: function () {
                if (i >= o.length) return {
                  done: true
                };
                return {
                  done: false,
                  value: o[i++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: F
            };
          }

          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        var normalCompletion = true,
            didErr = false,
            err;
        return {
          s: function () {
            it = it.call(o);
          },
          n: function () {
            var step = it.next();
            normalCompletion = step.done;
            return step;
          },
          e: function (e) {
            didErr = true;
            err = e;
          },
          f: function () {
            try {
              if (!normalCompletion && it.return != null) it.return();
            } finally {
              if (didErr) throw err;
            }
          }
        };
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
      var directives = new WeakMap();
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

      var directive = function directive(f) {
        return function () {
          var d = f.apply(void 0, arguments);
          directives.set(d, true);
          return d;
        };
      };
      var isDirective = function isDirective(o) {
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
      var isCEPolyfill = typeof window !== 'undefined' && window.customElements != null && window.customElements.polyfillWrapFlushCallback !== undefined;
      /**
       * Reparents nodes, starting from `start` (inclusive) to `end` (exclusive),
       * into another container (could be the same container), before `before`. If
       * `before` is null, it appends the nodes to the container.
       */

      var reparentNodes = function reparentNodes(container, start) {
        var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        while (start !== end) {
          var n = start.nextSibling;
          container.insertBefore(start, before);
          start = n;
        }
      };
      /**
       * Removes nodes, starting from `start` (inclusive) to `end` (exclusive), from
       * `container`.
       */

      var removeNodes = function removeNodes(container, start) {
        var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

        while (start !== end) {
          var n = start.nextSibling;
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
      var noChange = {};
      /**
       * A sentinel value that signals a NodePart to fully clear its content.
       */

      var nothing = {};

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
      var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
      /**
       * An expression marker used text-positions, multi-binding attributes, and
       * attributes with markup-like text values.
       */

      var nodeMarker = "<!--".concat(marker, "-->");
      var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
      /**
       * Suffix appended to all bound attribute names.
       */

      var boundAttributeSuffix = '$lit$';
      /**
       * An updatable Template that tracks the location of dynamic parts.
       */

      var Template = function Template(result, element) {
        _classCallCheck(this, Template);

        this.parts = [];
        this.element = element;
        var nodesToRemove = [];
        var stack = []; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

        var walker = document.createTreeWalker(element.content, 133
        /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
        , null, false); // Keeps track of the last index associated with a part. We try to delete
        // unnecessary nodes, but we never want to associate two different parts
        // to the same index. They must have a constant node between.

        var lastPartIndex = 0;
        var index = -1;
        var partIndex = 0;
        var strings = result.strings,
            length = result.values.length;

        while (partIndex < length) {
          var node = walker.nextNode();

          if (node === null) {
            // We've exhausted the content inside a nested template element.
            // Because we still have parts (the outer for-loop), we know:
            // - There is a template in the stack
            // - The walker will find a nextNode outside the template
            walker.currentNode = stack.pop();
            continue;
          }

          index++;

          if (node.nodeType === 1
          /* Node.ELEMENT_NODE */
          ) {
              if (node.hasAttributes()) {
                var attributes = node.attributes;
                var _length = attributes.length; // Per
                // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                // attributes are not guaranteed to be returned in document order.
                // In particular, Edge/IE can return them out of order, so we cannot
                // assume a correspondence between part index and attribute index.

                var count = 0;

                for (var i = 0; i < _length; i++) {
                  if (endsWith(attributes[i].name, boundAttributeSuffix)) {
                    count++;
                  }
                }

                while (count-- > 0) {
                  // Get the template literal section leading up to the first
                  // expression in this attribute
                  var stringForPart = strings[partIndex]; // Find the attribute name

                  var name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
                  // All bound attributes have had a suffix added in
                  // TemplateResult#getHTML to opt out of special attribute
                  // handling. To look up the attribute value we also need to add
                  // the suffix.

                  var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
                  var attributeValue = node.getAttribute(attributeLookupName);
                  node.removeAttribute(attributeLookupName);
                  var statics = attributeValue.split(markerRegex);
                  this.parts.push({
                    type: 'attribute',
                    index: index,
                    name: name,
                    strings: statics
                  });
                  partIndex += statics.length - 1;
                }
              }

              if (node.tagName === 'TEMPLATE') {
                stack.push(node);
                walker.currentNode = node.content;
              }
            } else if (node.nodeType === 3
          /* Node.TEXT_NODE */
          ) {
              var data = node.data;

              if (data.indexOf(marker) >= 0) {
                var parent = node.parentNode;

                var _strings = data.split(markerRegex);

                var lastIndex = _strings.length - 1; // Generate a new text node for each literal section
                // These nodes are also used as the markers for node parts

                for (var _i = 0; _i < lastIndex; _i++) {
                  var insert = void 0;
                  var s = _strings[_i];

                  if (s === '') {
                    insert = createMarker();
                  } else {
                    var match = lastAttributeNameRegex.exec(s);

                    if (match !== null && endsWith(match[2], boundAttributeSuffix)) {
                      s = s.slice(0, match.index) + match[1] + match[2].slice(0, -boundAttributeSuffix.length) + match[3];
                    }

                    insert = document.createTextNode(s);
                  }

                  parent.insertBefore(insert, node);
                  this.parts.push({
                    type: 'node',
                    index: ++index
                  });
                } // If there's no text, we must insert a comment to mark our place.
                // Else, we can trust it will stick around after cloning.


                if (_strings[lastIndex] === '') {
                  parent.insertBefore(createMarker(), node);
                  nodesToRemove.push(node);
                } else {
                  node.data = _strings[lastIndex];
                } // We have a part for each match found


                partIndex += lastIndex;
              }
            } else if (node.nodeType === 8
          /* Node.COMMENT_NODE */
          ) {
              if (node.data === marker) {
                var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
                // the following are true:
                //  * We don't have a previousSibling
                //  * The previousSibling is already the start of a previous part

                if (node.previousSibling === null || index === lastPartIndex) {
                  index++;

                  _parent.insertBefore(createMarker(), node);
                }

                lastPartIndex = index;
                this.parts.push({
                  type: 'node',
                  index: index
                }); // If we don't have a nextSibling, keep this node so we have an end.
                // Else, we can remove it to save future costs.

                if (node.nextSibling === null) {
                  node.data = '';
                } else {
                  nodesToRemove.push(node);
                  index--;
                }

                partIndex++;
              } else {
                var _i2 = -1;

                while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
                  // Comment node has a binding marker inside, make an inactive part
                  // The binding won't work, but subsequent bindings will
                  // TODO (justinfagnani): consider whether it's even worth it to
                  // make bindings in comments work
                  this.parts.push({
                    type: 'node',
                    index: -1
                  });
                  partIndex++;
                }
              }
            }
        } // Remove text binding nodes after the walk to not disturb the TreeWalker


        for (var _i3 = 0, _nodesToRemove = nodesToRemove; _i3 < _nodesToRemove.length; _i3++) {
          var n = _nodesToRemove[_i3];
          n.parentNode.removeChild(n);
        }
      };

      var endsWith = function endsWith(str, suffix) {
        var index = str.length - suffix.length;
        return index >= 0 && str.slice(index) === suffix;
      };

      var isTemplatePartActive = function isTemplatePartActive(part) {
        return part.index !== -1;
      }; // Allows `document.createComment('')` to be renamed for a
      // small manual size-savings.

      var createMarker = function createMarker() {
        return document.createComment('');
      };
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

      var lastAttributeNameRegex = // eslint-disable-next-line no-control-regex
      /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;

      /**
       * An instance of a `Template` that can be attached to the DOM and updated
       * with new values.
       */

      var TemplateInstance = /*#__PURE__*/function () {
        function TemplateInstance(template, processor, options) {
          _classCallCheck(this, TemplateInstance);

          this.__parts = [];
          this.template = template;
          this.processor = processor;
          this.options = options;
        }

        _createClass(TemplateInstance, [{
          key: "update",
          value: function update(values) {
            var i = 0;

            var _iterator = _createForOfIteratorHelper(this.__parts),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var part = _step.value;

                if (part !== undefined) {
                  part.setValue(values[i]);
                }

                i++;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var _iterator2 = _createForOfIteratorHelper(this.__parts),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _part = _step2.value;

                if (_part !== undefined) {
                  _part.commit();
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }, {
          key: "_clone",
          value: function _clone() {
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
            // But Safari does not implement CustomElementRegistry#upgrade, so we
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
            var fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
            var stack = [];
            var parts = this.template.parts; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

            var walker = document.createTreeWalker(fragment, 133
            /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
            , null, false);
            var partIndex = 0;
            var nodeIndex = 0;
            var part;
            var node = walker.nextNode(); // Loop through all the nodes and parts of a template

            while (partIndex < parts.length) {
              part = parts[partIndex];

              if (!isTemplatePartActive(part)) {
                this.__parts.push(undefined);

                partIndex++;
                continue;
              } // Progress the tree walker until we find our next part's node.
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
              } // We've arrived at our part's node.


              if (part.type === 'node') {
                var _part2 = this.processor.handleTextExpression(this.options);

                _part2.insertAfterNode(node.previousSibling);

                this.__parts.push(_part2);
              } else {
                var _this$__parts;

                (_this$__parts = this.__parts).push.apply(_this$__parts, _toConsumableArray(this.processor.handleAttributeExpressions(node, part.name, part.strings, this.options)));
              }

              partIndex++;
            }

            if (isCEPolyfill) {
              document.adoptNode(fragment);
              customElements.upgrade(fragment);
            }

            return fragment;
          }
        }]);

        return TemplateInstance;
      }();

      /**
       * Our TrustedTypePolicy for HTML which is declared using the html template
       * tag function.
       *
       * That HTML is a developer-authored constant, and is parsed with innerHTML
       * before any untrusted expressions have been mixed in. Therefor it is
       * considered safe by construction.
       */

      var policy = window.trustedTypes && trustedTypes.createPolicy('lit-html', {
        createHTML: function createHTML(s) {
          return s;
        }
      });
      var commentMarker = " ".concat(marker, " ");
      /**
       * The return type of `html`, which holds a Template and the values from
       * interpolated expressions.
       */

      var TemplateResult = /*#__PURE__*/function () {
        function TemplateResult(strings, values, type, processor) {
          _classCallCheck(this, TemplateResult);

          this.strings = strings;
          this.values = values;
          this.type = type;
          this.processor = processor;
        }
        /**
         * Returns a string of HTML used to create a `<template>` element.
         */


        _createClass(TemplateResult, [{
          key: "getHTML",
          value: function getHTML() {
            var l = this.strings.length - 1;
            var html = '';
            var isCommentBinding = false;

            for (var i = 0; i < l; i++) {
              var s = this.strings[i]; // For each binding we want to determine the kind of marker to insert
              // into the template source before it's parsed by the browser's HTML
              // parser. The marker type is based on whether the expression is in an
              // attribute, text, or comment position.
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

              var commentOpen = s.lastIndexOf('<!--'); // We're in comment position if we have a comment open with no following
              // comment close. Because <-- can appear in an attribute value there can
              // be false positives.

              isCommentBinding = (commentOpen > -1 || isCommentBinding) && s.indexOf('-->', commentOpen + 1) === -1; // Check to see if we have an attribute-like sequence preceding the
              // expression. This can match "name=value" like structures in text,
              // comments, and attribute values, so there can be false-positives.

              var attributeMatch = lastAttributeNameRegex.exec(s);

              if (attributeMatch === null) {
                // We're only in this branch if we don't have a attribute-like
                // preceding sequence. For comments, this guards against unusual
                // attribute values like <div foo="<!--${'bar'}">. Cases like
                // <!-- foo=${'bar'}--> are handled correctly in the attribute branch
                // below.
                html += s + (isCommentBinding ? commentMarker : nodeMarker);
              } else {
                // For attributes we use just a marker sentinel, and also append a
                // $lit$ suffix to the name to opt-out of attribute-specific parsing
                // that IE and Edge do for style and certain SVG attributes.
                html += s.substr(0, attributeMatch.index) + attributeMatch[1] + attributeMatch[2] + boundAttributeSuffix + attributeMatch[3] + marker;
              }
            }

            html += this.strings[l];
            return html;
          }
        }, {
          key: "getTemplateElement",
          value: function getTemplateElement() {
            var template = document.createElement('template');
            var value = this.getHTML();

            if (policy !== undefined) {
              // this is secure because `this.strings` is a TemplateStringsArray.
              // TODO: validate this when
              // https://github.com/tc39/proposal-array-is-template-object is
              // implemented.
              value = policy.createHTML(value);
            }

            template.innerHTML = value;
            return template;
          }
        }]);

        return TemplateResult;
      }();

      var isPrimitive = function isPrimitive(value) {
        return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
      };
      var isIterable = function isIterable(value) {
        return Array.isArray(value) || // eslint-disable-next-line @typescript-eslint/no-explicit-any
        !!(value && value[Symbol.iterator]);
      };
      /**
       * Writes attribute values to the DOM for a group of AttributeParts bound to a
       * single attribute. The value is only set once even if there are multiple parts
       * for an attribute.
       */

      var AttributeCommitter = /*#__PURE__*/function () {
        function AttributeCommitter(element, name, strings) {
          _classCallCheck(this, AttributeCommitter);

          this.dirty = true;
          this.element = element;
          this.name = name;
          this.strings = strings;
          this.parts = [];

          for (var i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
          }
        }
        /**
         * Creates a single part. Override this to create a differnt type of part.
         */


        _createClass(AttributeCommitter, [{
          key: "_createPart",
          value: function _createPart() {
            return new AttributePart(this);
          }
        }, {
          key: "_getValue",
          value: function _getValue() {
            var strings = this.strings;
            var l = strings.length - 1;
            var parts = this.parts; // If we're assigning an attribute via syntax like:
            //    attr="${foo}"  or  attr=${foo}
            // but not
            //    attr="${foo} ${bar}" or attr="${foo} baz"
            // then we don't want to coerce the attribute value into one long
            // string. Instead we want to just return the value itself directly,
            // so that sanitizeDOMValue can get the actual value rather than
            // String(value)
            // The exception is if v is an array, in which case we do want to smash
            // it together into a string without calling String() on the array.
            //
            // This also allows trusted values (when using TrustedTypes) being
            // assigned to DOM sinks without being stringified in the process.

            if (l === 1 && strings[0] === '' && strings[1] === '') {
              var v = parts[0].value;

              if (_typeof(v) === 'symbol') {
                return String(v);
              }

              if (typeof v === 'string' || !isIterable(v)) {
                return v;
              }
            }

            var text = '';

            for (var i = 0; i < l; i++) {
              text += strings[i];
              var part = parts[i];

              if (part !== undefined) {
                var _v = part.value;

                if (isPrimitive(_v) || !isIterable(_v)) {
                  text += typeof _v === 'string' ? _v : String(_v);
                } else {
                  var _iterator = _createForOfIteratorHelper(_v),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var t = _step.value;
                      text += typeof t === 'string' ? t : String(t);
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }
                }
              }
            }

            text += strings[l];
            return text;
          }
        }, {
          key: "commit",
          value: function commit() {
            if (this.dirty) {
              this.dirty = false;
              this.element.setAttribute(this.name, this._getValue());
            }
          }
        }]);

        return AttributeCommitter;
      }();
      /**
       * A Part that controls all or part of an attribute value.
       */

      var AttributePart = /*#__PURE__*/function () {
        function AttributePart(committer) {
          _classCallCheck(this, AttributePart);

          this.value = undefined;
          this.committer = committer;
        }

        _createClass(AttributePart, [{
          key: "setValue",
          value: function setValue(value) {
            if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
              this.value = value; // If the value is a not a directive, dirty the committer so that it'll
              // call setAttribute. If the value is a directive, it'll dirty the
              // committer if it calls setValue().

              if (!isDirective(value)) {
                this.committer.dirty = true;
              }
            }
          }
        }, {
          key: "commit",
          value: function commit() {
            while (isDirective(this.value)) {
              var directive = this.value;
              this.value = noChange;
              directive(this);
            }

            if (this.value === noChange) {
              return;
            }

            this.committer.commit();
          }
        }]);

        return AttributePart;
      }();
      /**
       * A Part that controls a location within a Node tree. Like a Range, NodePart
       * has start and end locations and can set and update the Nodes between those
       * locations.
       *
       * NodeParts support several value types: primitives, Nodes, TemplateResults,
       * as well as arrays and iterables of those types.
       */

      var NodePart = /*#__PURE__*/function () {
        function NodePart(options) {
          _classCallCheck(this, NodePart);

          this.value = undefined;
          this.__pendingValue = undefined;
          this.options = options;
        }
        /**
         * Appends this part into a container.
         *
         * This part must be empty, as its contents are not automatically moved.
         */


        _createClass(NodePart, [{
          key: "appendInto",
          value: function appendInto(container) {
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

        }, {
          key: "insertAfterNode",
          value: function insertAfterNode(ref) {
            this.startNode = ref;
            this.endNode = ref.nextSibling;
          }
          /**
           * Appends this part into a parent part.
           *
           * This part must be empty, as its contents are not automatically moved.
           */

        }, {
          key: "appendIntoPart",
          value: function appendIntoPart(part) {
            part.__insert(this.startNode = createMarker());

            part.__insert(this.endNode = createMarker());
          }
          /**
           * Inserts this part after the `ref` part.
           *
           * This part must be empty, as its contents are not automatically moved.
           */

        }, {
          key: "insertAfterPart",
          value: function insertAfterPart(ref) {
            ref.__insert(this.startNode = createMarker());

            this.endNode = ref.endNode;
            ref.endNode = this.startNode;
          }
        }, {
          key: "setValue",
          value: function setValue(value) {
            this.__pendingValue = value;
          }
        }, {
          key: "commit",
          value: function commit() {
            if (this.startNode.parentNode === null) {
              return;
            }

            while (isDirective(this.__pendingValue)) {
              var directive = this.__pendingValue;
              this.__pendingValue = noChange;
              directive(this);
            }

            var value = this.__pendingValue;

            if (value === noChange) {
              return;
            }

            if (isPrimitive(value)) {
              if (value !== this.value) {
                this.__commitText(value);
              }
            } else if (value instanceof TemplateResult) {
              this.__commitTemplateResult(value);
            } else if (value instanceof Node) {
              this.__commitNode(value);
            } else if (isIterable(value)) {
              this.__commitIterable(value);
            } else if (value === nothing) {
              this.value = nothing;
              this.clear();
            } else {
              // Fallback, will render the string representation
              this.__commitText(value);
            }
          }
        }, {
          key: "__insert",
          value: function __insert(node) {
            this.endNode.parentNode.insertBefore(node, this.endNode);
          }
        }, {
          key: "__commitNode",
          value: function __commitNode(value) {
            if (this.value === value) {
              return;
            }

            this.clear();

            this.__insert(value);

            this.value = value;
          }
        }, {
          key: "__commitText",
          value: function __commitText(value) {
            var node = this.startNode.nextSibling;
            value = value == null ? '' : value; // If `value` isn't already a string, we explicitly convert it here in case
            // it can't be implicitly converted - i.e. it's a symbol.

            var valueAsString = typeof value === 'string' ? value : String(value);

            if (node === this.endNode.previousSibling && node.nodeType === 3
            /* Node.TEXT_NODE */
            ) {
                // If we only have a single text node between the markers, we can just
                // set its value, rather than replacing it.
                // TODO(justinfagnani): Can we just check if this.value is primitive?
                node.data = valueAsString;
              } else {
              this.__commitNode(document.createTextNode(valueAsString));
            }

            this.value = value;
          }
        }, {
          key: "__commitTemplateResult",
          value: function __commitTemplateResult(value) {
            var template = this.options.templateFactory(value);

            if (this.value instanceof TemplateInstance && this.value.template === template) {
              this.value.update(value.values);
            } else {
              // Make sure we propagate the template processor from the TemplateResult
              // so that we use its syntax extension, etc. The template factory comes
              // from the render function options so that it can control template
              // caching and preprocessing.
              var instance = new TemplateInstance(template, value.processor, this.options);

              var fragment = instance._clone();

              instance.update(value.values);

              this.__commitNode(fragment);

              this.value = instance;
            }
          }
        }, {
          key: "__commitIterable",
          value: function __commitIterable(value) {
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
            } // Lets us keep track of how many items we stamped so we can clear leftover
            // items from a previous render


            var itemParts = this.value;
            var partIndex = 0;
            var itemPart;

            var _iterator2 = _createForOfIteratorHelper(value),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var item = _step2.value;
                // Try to reuse an existing part
                itemPart = itemParts[partIndex]; // If no existing part, create a new one

                if (itemPart === undefined) {
                  itemPart = new NodePart(this.options);
                  itemParts.push(itemPart);

                  if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                  } else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                  }
                }

                itemPart.setValue(item);
                itemPart.commit();
                partIndex++;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (partIndex < itemParts.length) {
              // Truncate the parts array so _value reflects the current state
              itemParts.length = partIndex;
              this.clear(itemPart && itemPart.endNode);
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
            removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
          }
        }]);

        return NodePart;
      }();
      /**
       * Implements a boolean attribute, roughly as defined in the HTML
       * specification.
       *
       * If the value is truthy, then the attribute is present with a value of
       * ''. If the value is falsey, the attribute is removed.
       */

      var BooleanAttributePart = /*#__PURE__*/function () {
        function BooleanAttributePart(element, name, strings) {
          _classCallCheck(this, BooleanAttributePart);

          this.value = undefined;
          this.__pendingValue = undefined;

          if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
          }

          this.element = element;
          this.name = name;
          this.strings = strings;
        }

        _createClass(BooleanAttributePart, [{
          key: "setValue",
          value: function setValue(value) {
            this.__pendingValue = value;
          }
        }, {
          key: "commit",
          value: function commit() {
            while (isDirective(this.__pendingValue)) {
              var directive = this.__pendingValue;
              this.__pendingValue = noChange;
              directive(this);
            }

            if (this.__pendingValue === noChange) {
              return;
            }

            var value = !!this.__pendingValue;

            if (this.value !== value) {
              if (value) {
                this.element.setAttribute(this.name, '');
              } else {
                this.element.removeAttribute(this.name);
              }

              this.value = value;
            }

            this.__pendingValue = noChange;
          }
        }]);

        return BooleanAttributePart;
      }();
      /**
       * Sets attribute values for PropertyParts, so that the value is only set once
       * even if there are multiple parts for a property.
       *
       * If an expression controls the whole property value, then the value is simply
       * assigned to the property under control. If there are string literals or
       * multiple expressions, then the strings are expressions are interpolated into
       * a string first.
       */

      var PropertyCommitter = /*#__PURE__*/function (_AttributeCommitter) {
        _inherits(PropertyCommitter, _AttributeCommitter);

        var _super = _createSuper(PropertyCommitter);

        function PropertyCommitter(element, name, strings) {
          var _this;

          _classCallCheck(this, PropertyCommitter);

          _this = _super.call(this, element, name, strings);
          _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
          return _this;
        }

        _createClass(PropertyCommitter, [{
          key: "_createPart",
          value: function _createPart() {
            return new PropertyPart(this);
          }
        }, {
          key: "_getValue",
          value: function _getValue() {
            if (this.single) {
              return this.parts[0].value;
            }

            return _get(_getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
          }
        }, {
          key: "commit",
          value: function commit() {
            if (this.dirty) {
              this.dirty = false; // eslint-disable-next-line @typescript-eslint/no-explicit-any

              this.element[this.name] = this._getValue();
            }
          }
        }]);

        return PropertyCommitter;
      }(AttributeCommitter);
      var PropertyPart = /*#__PURE__*/function (_AttributePart) {
        _inherits(PropertyPart, _AttributePart);

        var _super2 = _createSuper(PropertyPart);

        function PropertyPart() {
          _classCallCheck(this, PropertyPart);

          return _super2.apply(this, arguments);
        }

        return PropertyPart;
      }(AttributePart); // Detect event listener options support. If the `capture` property is read
      // from the options object, then options are supported. If not, then the third
      // argument to add/removeEventListener is interpreted as the boolean capture
      // value so we should only pass the `capture` property.

      var eventOptionsSupported = false; // Wrap into an IIFE because MS Edge <= v41 does not support having try/catch
      // blocks right into the body of a module

      (function () {
        try {
          var options = {
            get capture() {
              eventOptionsSupported = true;
              return false;
            }

          }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

          window.addEventListener('test', options, options); // eslint-disable-next-line @typescript-eslint/no-explicit-any

          window.removeEventListener('test', options, options);
        } catch (_e) {// event options not supported
        }
      })();

      var EventPart = /*#__PURE__*/function () {
        function EventPart(element, eventName, eventContext) {
          var _this2 = this;

          _classCallCheck(this, EventPart);

          this.value = undefined;
          this.__pendingValue = undefined;
          this.element = element;
          this.eventName = eventName;
          this.eventContext = eventContext;

          this.__boundHandleEvent = function (e) {
            return _this2.handleEvent(e);
          };
        }

        _createClass(EventPart, [{
          key: "setValue",
          value: function setValue(value) {
            this.__pendingValue = value;
          }
        }, {
          key: "commit",
          value: function commit() {
            while (isDirective(this.__pendingValue)) {
              var directive = this.__pendingValue;
              this.__pendingValue = noChange;
              directive(this);
            }

            if (this.__pendingValue === noChange) {
              return;
            }

            var newListener = this.__pendingValue;
            var oldListener = this.value;
            var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
            var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);

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
        }, {
          key: "handleEvent",
          value: function handleEvent(event) {
            if (typeof this.value === 'function') {
              this.value.call(this.eventContext || this.element, event);
            } else {
              this.value.handleEvent(event);
            }
          }
        }]);

        return EventPart;
      }(); // We copy options because of the inconsistent behavior of browsers when reading
      // the third argument of add/removeEventListener. IE11 doesn't support options
      // at all. Chrome 41 only reads `capture` if the argument is an object.

      var getOptions = function getOptions(o) {
        return o && (eventOptionsSupported ? {
          capture: o.capture,
          passive: o.passive,
          once: o.once
        } : o.capture);
      };

      /**
       * Creates Parts when a template is instantiated.
       */

      var DefaultTemplateProcessor = /*#__PURE__*/function () {
        function DefaultTemplateProcessor() {
          _classCallCheck(this, DefaultTemplateProcessor);
        }

        _createClass(DefaultTemplateProcessor, [{
          key: "handleAttributeExpressions",
          value:
          /**
           * Create parts for an attribute-position binding, given the event, attribute
           * name, and string literals.
           *
           * @param element The element containing the binding
           * @param name  The attribute name
           * @param strings The string literals. There are always at least two strings,
           *   event for fully-controlled bindings with a single expression.
           */
          function handleAttributeExpressions(element, name, strings, options) {
            var prefix = name[0];

            if (prefix === '.') {
              var _committer = new PropertyCommitter(element, name.slice(1), strings);

              return _committer.parts;
            }

            if (prefix === '@') {
              return [new EventPart(element, name.slice(1), options.eventContext)];
            }

            if (prefix === '?') {
              return [new BooleanAttributePart(element, name.slice(1), strings)];
            }

            var committer = new AttributeCommitter(element, name, strings);
            return committer.parts;
          }
          /**
           * Create parts for a text-position binding.
           * @param templateFactory
           */

        }, {
          key: "handleTextExpression",
          value: function handleTextExpression(options) {
            return new NodePart(options);
          }
        }]);

        return DefaultTemplateProcessor;
      }();
      var defaultTemplateProcessor = new DefaultTemplateProcessor();

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
        var templateCache = templateCaches.get(result.type);

        if (templateCache === undefined) {
          templateCache = {
            stringsArray: new WeakMap(),
            keyString: new Map()
          };
          templateCaches.set(result.type, templateCache);
        }

        var template = templateCache.stringsArray.get(result.strings);

        if (template !== undefined) {
          return template;
        } // If the TemplateStringsArray is new, generate a key from the strings
        // This key is shared between all templates with identical content


        var key = result.strings.join(marker); // Check if we already have a Template for this key

        template = templateCache.keyString.get(key);

        if (template === undefined) {
          // If we have not seen this key before, create a new Template
          template = new Template(result, result.getTemplateElement()); // Cache the Template for this key

          templateCache.keyString.set(key, template);
        } // Cache all future queries for this TemplateStringsArray


        templateCache.stringsArray.set(result.strings, template);
        return template;
      }
      var templateCaches = new Map();

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
      var parts = new WeakMap();
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

      var render = function render(result, container, options) {
        var part = parts.get(container);

        if (part === undefined) {
          removeNodes(container, container.firstChild);
          parts.set(container, part = new NodePart(Object.assign({
            templateFactory: templateFactory
          }, options)));
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
      // This line will be used in regexes to search for lit-html usage.
      // TODO(justinfagnani): inject version number at build time

      if (typeof window !== 'undefined') {
        (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.1');
      }
      /**
       * Interprets a template literal as an HTML template that can efficiently
       * render to and update a container.
       */


      var html = function html(strings) {
        for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          values[_key - 1] = arguments[_key];
        }

        return new TemplateResult(strings, values, 'html', defaultTemplateProcessor);
      };

      // TODO(kschaaf): Refactor into Part API?

      var createAndInsertPart = function createAndInsertPart(containerPart, beforePart) {
        var container = containerPart.startNode.parentNode;
        var beforeNode = beforePart === undefined ? containerPart.endNode : beforePart.startNode;
        var startNode = container.insertBefore(createMarker(), beforeNode);
        container.insertBefore(createMarker(), beforeNode);
        var newPart = new NodePart(containerPart.options);
        newPart.insertAfterNode(startNode);
        return newPart;
      };

      var updatePart = function updatePart(part, value) {
        part.setValue(value);
        part.commit();
        return part;
      };

      var insertPartBefore = function insertPartBefore(containerPart, part, ref) {
        var container = containerPart.startNode.parentNode;
        var beforeNode = ref ? ref.startNode : containerPart.endNode;
        var endNode = part.endNode.nextSibling;

        if (endNode !== beforeNode) {
          reparentNodes(container, part.startNode, endNode, beforeNode);
        }
      };

      var removePart = function removePart(part) {
        removeNodes(part.startNode.parentNode, part.startNode, part.endNode.nextSibling);
      }; // Helper for generating a map of array item to its index over a subset
      // of an array (used to lazily generate `newKeyToIndexMap` and
      // `oldKeyToIndexMap`)


      var generateMap = function generateMap(list, start, end) {
        var map = new Map();

        for (var i = start; i <= end; i++) {
          map.set(list[i], i);
        }

        return map;
      }; // Stores previous ordered list of parts and map of key to index


      var partListCache = new WeakMap();
      var keyListCache = new WeakMap();
      /**
       * A directive that repeats a series of values (usually `TemplateResults`)
       * generated from an iterable, and updates those items efficiently when the
       * iterable changes based on user-provided `keys` associated with each item.
       *
       * Note that if a `keyFn` is provided, strict key-to-DOM mapping is maintained,
       * meaning previous DOM for a given key is moved into the new position if
       * needed, and DOM will never be reused with values for different keys (new DOM
       * will always be created for new keys). This is generally the most efficient
       * way to use `repeat` since it performs minimum unnecessary work for insertions
       * and removals.
       *
       * IMPORTANT: If providing a `keyFn`, keys *must* be unique for all items in a
       * given call to `repeat`. The behavior when two or more items have the same key
       * is undefined.
       *
       * If no `keyFn` is provided, this directive will perform similar to mapping
       * items to values, and DOM will be reused against potentially different items.
       */

      var repeat = directive(function (items, keyFnOrTemplate, template) {
        var keyFn;

        if (template === undefined) {
          template = keyFnOrTemplate;
        } else if (keyFnOrTemplate !== undefined) {
          keyFn = keyFnOrTemplate;
        }

        return function (containerPart) {
          if (!(containerPart instanceof NodePart)) {
            throw new Error('repeat can only be used in text bindings');
          } // Old part & key lists are retrieved from the last update
          // (associated with the part for this instance of the directive)


          var oldParts = partListCache.get(containerPart) || [];
          var oldKeys = keyListCache.get(containerPart) || []; // New part list will be built up as we go (either reused from
          // old parts or created for new keys in this update). This is
          // saved in the above cache at the end of the update.

          var newParts = []; // New value list is eagerly generated from items along with a
          // parallel array indicating its key.

          var newValues = [];
          var newKeys = [];
          var index = 0;

          var _iterator = _createForOfIteratorHelper(items),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var item = _step.value;
              newKeys[index] = keyFn ? keyFn(item, index) : index;
              newValues[index] = template(item, index);
              index++;
            } // Maps from key to index for current and previous update; these
            // are generated lazily only when needed as a performance
            // optimization, since they are only required for multiple
            // non-contiguous changes in the list, which are less common.

          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var newKeyToIndexMap;
          var oldKeyToIndexMap; // Head and tail pointers to old parts and new values

          var oldHead = 0;
          var oldTail = oldParts.length - 1;
          var newHead = 0;
          var newTail = newValues.length - 1; // Overview of O(n) reconciliation algorithm (general approach
          // based on ideas found in ivi, vue, snabbdom, etc.):
          //
          // * We start with the list of old parts and new values (and
          //   arrays of their respective keys), head/tail pointers into
          //   each, and we build up the new list of parts by updating
          //   (and when needed, moving) old parts or creating new ones.
          //   The initial scenario might look like this (for brevity of
          //   the diagrams, the numbers in the array reflect keys
          //   associated with the old parts or new values, although keys
          //   and parts/values are actually stored in parallel arrays
          //   indexed using the same head/tail pointers):
          //
          //      oldHead v                 v oldTail
          //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
          //   newParts: [ ,  ,  ,  ,  ,  ,  ]
          //   newKeys:  [0, 2, 1, 4, 3, 7, 6] <- reflects the user's new
          //                                      item order
          //      newHead ^                 ^ newTail
          //
          // * Iterate old & new lists from both sides, updating,
          //   swapping, or removing parts at the head/tail locations
          //   until neither head nor tail can move.
          //
          // * Example below: keys at head pointers match, so update old
          //   part 0 in-place (no need to move it) and record part 0 in
          //   the `newParts` list. The last thing we do is advance the
          //   `oldHead` and `newHead` pointers (will be reflected in the
          //   next diagram).
          //
          //      oldHead v                 v oldTail
          //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
          //   newParts: [0,  ,  ,  ,  ,  ,  ] <- heads matched: update 0
          //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
          //                                      & newHead
          //      newHead ^                 ^ newTail
          //
          // * Example below: head pointers don't match, but tail
          //   pointers do, so update part 6 in place (no need to move
          //   it), and record part 6 in the `newParts` list. Last,
          //   advance the `oldTail` and `oldHead` pointers.
          //
          //         oldHead v              v oldTail
          //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
          //   newParts: [0,  ,  ,  ,  ,  , 6] <- tails matched: update 6
          //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldTail
          //                                      & newTail
          //         newHead ^              ^ newTail
          //
          // * If neither head nor tail match; next check if one of the
          //   old head/tail items was removed. We first need to generate
          //   the reverse map of new keys to index (`newKeyToIndexMap`),
          //   which is done once lazily as a performance optimization,
          //   since we only hit this case if multiple non-contiguous
          //   changes were made. Note that for contiguous removal
          //   anywhere in the list, the head and tails would advance
          //   from either end and pass each other before we get to this
          //   case and removals would be handled in the final while loop
          //   without needing to generate the map.
          //
          // * Example below: The key at `oldTail` was removed (no longer
          //   in the `newKeyToIndexMap`), so remove that part from the
          //   DOM and advance just the `oldTail` pointer.
          //
          //         oldHead v           v oldTail
          //   oldKeys:  [0, 1, 2, 3, 4, 5, 6]
          //   newParts: [0,  ,  ,  ,  ,  , 6] <- 5 not in new map: remove
          //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    5 and advance oldTail
          //         newHead ^           ^ newTail
          //
          // * Once head and tail cannot move, any mismatches are due to
          //   either new or moved items; if a new key is in the previous
          //   "old key to old index" map, move the old part to the new
          //   location, otherwise create and insert a new part. Note
          //   that when moving an old part we null its position in the
          //   oldParts array if it lies between the head and tail so we
          //   know to skip it when the pointers get there.
          //
          // * Example below: neither head nor tail match, and neither
          //   were removed; so find the `newHead` key in the
          //   `oldKeyToIndexMap`, and move that old part's DOM into the
          //   next head position (before `oldParts[oldHead]`). Last,
          //   null the part in the `oldPart` array since it was
          //   somewhere in the remaining oldParts still to be scanned
          //   (between the head and tail pointers) so that we know to
          //   skip that old part on future iterations.
          //
          //         oldHead v        v oldTail
          //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
          //   newParts: [0, 2,  ,  ,  ,  , 6] <- stuck: update & move 2
          //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    into place and advance
          //                                      newHead
          //         newHead ^           ^ newTail
          //
          // * Note that for moves/insertions like the one above, a part
          //   inserted at the head pointer is inserted before the
          //   current `oldParts[oldHead]`, and a part inserted at the
          //   tail pointer is inserted before `newParts[newTail+1]`. The
          //   seeming asymmetry lies in the fact that new parts are
          //   moved into place outside in, so to the right of the head
          //   pointer are old parts, and to the right of the tail
          //   pointer are new parts.
          //
          // * We always restart back from the top of the algorithm,
          //   allowing matching and simple updates in place to
          //   continue...
          //
          // * Example below: the head pointers once again match, so
          //   simply update part 1 and record it in the `newParts`
          //   array.  Last, advance both head pointers.
          //
          //         oldHead v        v oldTail
          //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
          //   newParts: [0, 2, 1,  ,  ,  , 6] <- heads matched: update 1
          //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance both oldHead
          //                                      & newHead
          //            newHead ^        ^ newTail
          //
          // * As mentioned above, items that were moved as a result of
          //   being stuck (the final else clause in the code below) are
          //   marked with null, so we always advance old pointers over
          //   these so we're comparing the next actual old value on
          //   either end.
          //
          // * Example below: `oldHead` is null (already placed in
          //   newParts), so advance `oldHead`.
          //
          //            oldHead v     v oldTail
          //   oldKeys:  [0, 1, -, 3, 4, 5, 6] <- old head already used:
          //   newParts: [0, 2, 1,  ,  ,  , 6]    advance oldHead
          //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
          //               newHead ^     ^ newTail
          //
          // * Note it's not critical to mark old parts as null when they
          //   are moved from head to tail or tail to head, since they
          //   will be outside the pointer range and never visited again.
          //
          // * Example below: Here the old tail key matches the new head
          //   key, so the part at the `oldTail` position and move its
          //   DOM to the new head position (before `oldParts[oldHead]`).
          //   Last, advance `oldTail` and `newHead` pointers.
          //
          //               oldHead v  v oldTail
          //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
          //   newParts: [0, 2, 1, 4,  ,  , 6] <- old tail matches new
          //   newKeys:  [0, 2, 1, 4, 3, 7, 6]   head: update & move 4,
          //                                     advance oldTail & newHead
          //               newHead ^     ^ newTail
          //
          // * Example below: Old and new head keys match, so update the
          //   old head part in place, and advance the `oldHead` and
          //   `newHead` pointers.
          //
          //               oldHead v oldTail
          //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
          //   newParts: [0, 2, 1, 4, 3,   ,6] <- heads match: update 3
          //   newKeys:  [0, 2, 1, 4, 3, 7, 6]    and advance oldHead &
          //                                      newHead
          //                  newHead ^  ^ newTail
          //
          // * Once the new or old pointers move past each other then all
          //   we have left is additions (if old list exhausted) or
          //   removals (if new list exhausted). Those are handled in the
          //   final while loops at the end.
          //
          // * Example below: `oldHead` exceeded `oldTail`, so we're done
          //   with the main loop.  Create the remaining part and insert
          //   it at the new head position, and the update is complete.
          //
          //                   (oldHead > oldTail)
          //   oldKeys:  [0, 1, -, 3, 4, 5, 6]
          //   newParts: [0, 2, 1, 4, 3, 7 ,6] <- create and insert 7
          //   newKeys:  [0, 2, 1, 4, 3, 7, 6]
          //                     newHead ^ newTail
          //
          // * Note that the order of the if/else clauses is not
          //   important to the algorithm, as long as the null checks
          //   come first (to ensure we're always working on valid old
          //   parts) and that the final else clause comes last (since
          //   that's where the expensive moves occur). The order of
          //   remaining clauses is is just a simple guess at which cases
          //   will be most common.
          //
          // * TODO(kschaaf) Note, we could calculate the longest
          //   increasing subsequence (LIS) of old items in new position,
          //   and only move those not in the LIS set. However that costs
          //   O(nlogn) time and adds a bit more code, and only helps
          //   make rare types of mutations require fewer moves. The
          //   above handles removes, adds, reversal, swaps, and single
          //   moves of contiguous items in linear time, in the minimum
          //   number of moves. As the number of multiple moves where LIS
          //   might help approaches a random shuffle, the LIS
          //   optimization becomes less helpful, so it seems not worth
          //   the code at this point. Could reconsider if a compelling
          //   case arises.

          while (oldHead <= oldTail && newHead <= newTail) {
            if (oldParts[oldHead] === null) {
              // `null` means old part at head has already been used
              // below; skip
              oldHead++;
            } else if (oldParts[oldTail] === null) {
              // `null` means old part at tail has already been used
              // below; skip
              oldTail--;
            } else if (oldKeys[oldHead] === newKeys[newHead]) {
              // Old head matches new head; update in place
              newParts[newHead] = updatePart(oldParts[oldHead], newValues[newHead]);
              oldHead++;
              newHead++;
            } else if (oldKeys[oldTail] === newKeys[newTail]) {
              // Old tail matches new tail; update in place
              newParts[newTail] = updatePart(oldParts[oldTail], newValues[newTail]);
              oldTail--;
              newTail--;
            } else if (oldKeys[oldHead] === newKeys[newTail]) {
              // Old head matches new tail; update and move to new tail
              newParts[newTail] = updatePart(oldParts[oldHead], newValues[newTail]);
              insertPartBefore(containerPart, oldParts[oldHead], newParts[newTail + 1]);
              oldHead++;
              newTail--;
            } else if (oldKeys[oldTail] === newKeys[newHead]) {
              // Old tail matches new head; update and move to new head
              newParts[newHead] = updatePart(oldParts[oldTail], newValues[newHead]);
              insertPartBefore(containerPart, oldParts[oldTail], oldParts[oldHead]);
              oldTail--;
              newHead++;
            } else {
              if (newKeyToIndexMap === undefined) {
                // Lazily generate key-to-index maps, used for removals &
                // moves below
                newKeyToIndexMap = generateMap(newKeys, newHead, newTail);
                oldKeyToIndexMap = generateMap(oldKeys, oldHead, oldTail);
              }

              if (!newKeyToIndexMap.has(oldKeys[oldHead])) {
                // Old head is no longer in new list; remove
                removePart(oldParts[oldHead]);
                oldHead++;
              } else if (!newKeyToIndexMap.has(oldKeys[oldTail])) {
                // Old tail is no longer in new list; remove
                removePart(oldParts[oldTail]);
                oldTail--;
              } else {
                // Any mismatches at this point are due to additions or
                // moves; see if we have an old part we can reuse and move
                // into place
                var oldIndex = oldKeyToIndexMap.get(newKeys[newHead]);
                var oldPart = oldIndex !== undefined ? oldParts[oldIndex] : null;

                if (oldPart === null) {
                  // No old part for this value; create a new one and
                  // insert it
                  var newPart = createAndInsertPart(containerPart, oldParts[oldHead]);
                  updatePart(newPart, newValues[newHead]);
                  newParts[newHead] = newPart;
                } else {
                  // Reuse old part
                  newParts[newHead] = updatePart(oldPart, newValues[newHead]);
                  insertPartBefore(containerPart, oldPart, oldParts[oldHead]); // This marks the old part as having been used, so that
                  // it will be skipped in the first two checks above

                  oldParts[oldIndex] = null;
                }

                newHead++;
              }
            }
          } // Add parts for any remaining new values


          while (newHead <= newTail) {
            // For all remaining additions, we insert before last new
            // tail, since old pointers are no longer valid
            var _newPart = createAndInsertPart(containerPart, newParts[newTail + 1]);

            updatePart(_newPart, newValues[newHead]);
            newParts[newHead++] = _newPart;
          } // Remove any remaining unused old parts


          while (oldHead <= oldTail) {
            var _oldPart = oldParts[oldHead++];

            if (_oldPart !== null) {
              removePart(_oldPart);
            }
          } // Save order of new parts for next round


          partListCache.set(containerPart, newParts);
          keyListCache.set(containerPart, newKeys);
        };
      });

      var _RO, RO;

      function ResizeObserver() {
        return _ResizeObserver.apply(this, arguments);
      }

      function _ResizeObserver() {
        _ResizeObserver = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", RO || init());

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _ResizeObserver.apply(this, arguments);
      }

      function init() {
        return _init.apply(this, arguments);
      }

      function _init() {
        _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!_RO) {
                    _context2.next = 6;
                    break;
                  }

                  _context2.next = 3;
                  return _RO;

                case 3:
                  return _context2.abrupt("return", _context2.sent.default);

                case 6:
                  _RO = window.ResizeObserver;
                  _context2.prev = 7;
                  new _RO(function () {});
                  _context2.next = 17;
                  break;

                case 11:
                  _context2.prev = 11;
                  _context2.t0 = _context2["catch"](7);
                  _RO = module.import('./ResizeObserver.es-4deffedd.js');
                  _context2.next = 16;
                  return _RO;

                case 16:
                  _RO = _context2.sent.default;

                case 17:
                  return _context2.abrupt("return", RO = _RO);

                case 18:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[7, 11]]);
        }));
        return _init.apply(this, arguments);
      }

      var scrollerRef = Symbol('scrollerRef');
      var nativeShadowDOM = 'attachShadow' in Element.prototype && (!('ShadyDOM' in window) || !window['ShadyDOM'].inUse);
      var HOST_CLASSNAME = 'uni-virtualizer-host';
      var globalContainerStylesheet = null;

      function containerStyles(hostSel, childSel) {
        return "\n    ".concat(hostSel, " {\n      display: block;\n      position: relative;\n      contain: strict;\n      height: 150px;\n      overflow: auto;\n    }\n    ").concat(childSel, " {\n      box-sizing: border-box;\n    }");
      }

      function attachGlobalContainerStylesheet() {
        if (!globalContainerStylesheet) {
          globalContainerStylesheet = document.createElement('style');
          globalContainerStylesheet.textContent = containerStyles(".".concat(HOST_CLASSNAME), ".".concat(HOST_CLASSNAME, " > *"));
          document.head.appendChild(globalContainerStylesheet);
        }
      }
      /**
       * Provides virtual scrolling boilerplate.
       *
       * Extensions of this class must set container, layout, and scrollTarget.
       *
       * Extensions of this class must also override VirtualRepeater's DOM
       * manipulation methods.
       */


      var VirtualScroller = /*#__PURE__*/function () {
        function VirtualScroller(config) {
          _classCallCheck(this, VirtualScroller);

          this._benchmarkStart = null;
          /**
           * Whether the layout should receive an updated viewport size on the next
           * render.
           */
          // private _needsUpdateView: boolean = false;

          this._layout = null;
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

          this._childrenPos = null; // TODO: (graynorton): type

          this._childMeasurements = null;
          this._toBeMeasured = new Map();
          this._rangeChanged = true;
          this._itemsChanged = true;
          this._visibilityChanged = true;
          /**
           * Containing element. Set by container.
           */

          this._container = null;
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
          this._mutationObserver = null;
          this._mutationPromise = null;
          this._mutationPromiseResolver = null;
          this._mutationsObserved = false; // TODO (graynorton): Rethink, per longer comment below

          this._loadListener = this._childLoaded.bind(this);
          /**
           * Index and position of item to scroll to.
           */

          this._scrollToIndex = null;
          /**
           * Items to render. Set by items.
           */

          this._items = [];
          /**
           * Total number of items to render. Set by totalItems.
           */

          this._totalItems = null;
          /**
           * Index of the first child in the range, not necessarily the first visible child.
           * TODO @straversi: Consider renaming these.
           */

          this._first = 0;
          /**
           * Index of the last child in the range.
           */

          this._last = 0;
          this._scheduled = new WeakSet();
          /**
           * Invoked at the end of each render cycle: children in the range are
           * measured, and their dimensions passed to this callback. Use it to layout
           * children as needed.
           */

          this._measureCallback = null;
          this._measureChildOverride = null;
          this._first = -1;
          this._last = -1;

          if (config) {
            Object.assign(this, config);
          }
        }

        _createClass(VirtualScroller, [{
          key: "items",
          set: function set(items) {
            if (items !== this._items) {
              this._itemsChanged = true;
              this._items = items;

              this._schedule(this._updateLayout);
            }
          }
          /**
           * The total number of items, regardless of the range, that can be rendered
           * as child nodes.
           */

        }, {
          key: "totalItems",
          get: function get() {
            return this._totalItems === null ? this._items.length : this._totalItems;
          },
          set: function set(num) {
            if (typeof num !== 'number' && num !== null) {
              throw new Error('New value must be a number.');
            } // TODO(valdrin) should we check if it is a finite number?
            // Technically, Infinity would break Layout, not VirtualRepeater.


            if (num !== this._totalItems) {
              this._totalItems = num;

              this._schedule(this._updateLayout);
            }
          }
          /**
           * The parent of all child nodes to be rendered.
           */

        }, {
          key: "container",
          get: function get() {
            return this._container;
          },
          set: function set(container) {
            var _this = this;

            if (container === this._container) {
              return;
            }

            if (this._container) {
              // Remove children from old container.
              // TODO (graynorton): Decide whether we'd rather fire an event to clear
              // the range and let the renderer take care of removing the DOM children
              this._children.forEach(function (child) {
                return child.parentNode.removeChild(child);
              });
            }

            this._container = container;

            this._schedule(this._updateLayout);

            this._initResizeObservers().then(function () {
              var oldEl = _this._containerElement; // Consider document fragments as shadowRoots.

              var newEl = container && container.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? container.host : container;

              if (oldEl === newEl) {
                return;
              }

              _this._containerRO.disconnect();

              _this._containerSize = null;

              if (oldEl) {
                if (_this._containerInlineStyle) {
                  oldEl.setAttribute('style', _this._containerInlineStyle);
                } else {
                  oldEl.removeAttribute('style');
                }

                _this._containerInlineStyle = null;

                if (oldEl === _this._scrollTarget) {
                  oldEl.removeEventListener('scroll', _this, {
                    passive: true
                  });
                  _this._sizer && _this._sizer.remove();
                }

                oldEl.removeEventListener('load', _this._loadListener, true);

                _this._mutationObserver.disconnect();
              } else {
                // First time container was setup, add listeners only now.
                addEventListener('scroll', _this, {
                  passive: true
                });
              }

              _this._containerElement = newEl;

              if (newEl) {
                _this._containerInlineStyle = newEl.getAttribute('style') || null;

                _this._applyContainerStyles();

                if (newEl === _this._scrollTarget) {
                  _this._sizer = _this._sizer || _this._createContainerSizer();

                  _this._container.insertBefore(_this._sizer, _this._container.firstChild);
                }

                _this._schedule(_this._updateLayout);

                _this._containerRO.observe(newEl);

                _this._mutationObserver.observe(newEl, {
                  childList: true
                });

                _this._mutationPromise = new Promise(function (resolve) {
                  return _this._mutationPromiseResolver = resolve;
                });

                if (_this._layout && _this._layout.listenForChildLoadEvents) {
                  newEl.addEventListener('load', _this._loadListener, true);
                }
              }
            });
          } // This will always actually return a layout instance,
          // but TypeScript wants the getter and setter types to be the same

        }, {
          key: "layout",
          get: function get() {
            return this._layout;
          },
          set: function set(layout) {
            if (this._layout === layout) {
              return;
            }

            var _layout, _config;

            if (_typeof(layout) === 'object') {
              if (layout.type !== undefined) {
                _layout = layout.type;
                delete layout.type;
              }

              _config = layout;
            } else {
              _layout = layout;
            }

            if (typeof _layout === 'function') {
              if (this._layout instanceof _layout) {
                if (_config) {
                  this._layout.config = _config;
                }

                return;
              } else {
                _layout = new _layout(_config);
              }
            }

            if (this._layout) {
              this._measureCallback = null;
              this._measureChildOverride = null;

              this._layout.removeEventListener('scrollsizechange', this);

              this._layout.removeEventListener('scrollerrorchange', this);

              this._layout.removeEventListener('itempositionchange', this);

              this._layout.removeEventListener('rangechange', this);

              delete this.container[scrollerRef];
              this.container.removeEventListener('load', this._loadListener, true); // Reset container size so layout can get correct viewport size.

              if (this._containerElement) {
                this._sizeContainer(undefined);
              }
            }

            this._layout = _layout;

            if (this._layout) {
              if (this._layout.measureChildren && typeof this._layout.updateItemSizes === 'function') {
                if (typeof this._layout.measureChildren === 'function') {
                  this._measureChildOverride = this._layout.measureChildren;
                }

                this._measureCallback = this._layout.updateItemSizes.bind(this._layout);
              }

              this._layout.addEventListener('scrollsizechange', this);

              this._layout.addEventListener('scrollerrorchange', this);

              this._layout.addEventListener('itempositionchange', this);

              this._layout.addEventListener('rangechange', this);

              this._container[scrollerRef] = this;

              if (this._layout.listenForChildLoadEvents) {
                this._container.addEventListener('load', this._loadListener, true);
              }

              this._schedule(this._updateLayout);
            }
          } // TODO (graynorton): Rework benchmarking so that it has no API and
          // instead is always on except in production builds

        }, {
          key: "startBenchmarking",
          value: function startBenchmarking() {
            if (this._benchmarkStart === null) {
              this._benchmarkStart = window.performance.now();
            }
          }
        }, {
          key: "stopBenchmarking",
          value: function stopBenchmarking() {
            var _this2 = this;

            if (this._benchmarkStart !== null) {
              var now = window.performance.now();
              var timeElapsed = now - this._benchmarkStart;
              var entries = performance.getEntriesByName('uv-virtualizing', 'measure');
              var virtualizationTime = entries.filter(function (e) {
                return e.startTime >= _this2._benchmarkStart && e.startTime < now;
              }).reduce(function (t, m) {
                return t + m.duration;
              }, 0);
              this._benchmarkStart = null;
              return {
                timeElapsed: timeElapsed,
                virtualizationTime: virtualizationTime
              };
            }

            return null;
          }
        }, {
          key: "_measureChildren",
          value: function _measureChildren() {
            var mm = {};
            var children = this._children;
            var fn = this._measureChildOverride || this._measureChild;

            for (var i = 0; i < children.length; i++) {
              var child = children[i];
              var idx = this._first + i;

              if (this._itemsChanged || this._toBeMeasured.has(child)) {
                mm[idx] = fn.call(this, child, this._items[idx]);
              }
            }

            this._childMeasurements = mm;

            this._schedule(this._updateLayout);

            this._toBeMeasured.clear();
          }
          /**
           * Returns the width, height, and margins of the given child.
           */

        }, {
          key: "_measureChild",
          value: function _measureChild(element) {
            // offsetWidth doesn't take transforms in consideration, so we use
            // getBoundingClientRect which does.
            var _element$getBoundingC = element.getBoundingClientRect(),
                width = _element$getBoundingC.width,
                height = _element$getBoundingC.height;

            return Object.assign({
              width: width,
              height: height
            }, getMargins(element));
          }
          /**
           * The element that generates scroll events and defines the container
           * viewport. The value `null` (default) corresponds to `window` as scroll
           * target.
           */

        }, {
          key: "scrollTarget",
          get: function get() {
            return this._scrollTarget;
          },
          set: function set(target) {
            // Consider window as null.
            if (target === window) {
              target = null;
            }

            if (this._scrollTarget === target) {
              return;
            }

            this._sizeContainer(undefined);

            if (this._scrollTarget) {
              this._scrollTarget.removeEventListener('scroll', this, {
                passive: true
              });

              if (this._sizer && this._scrollTarget === this._containerElement) {
                this._sizer.remove();
              }
            }

            this._scrollTarget = target;

            if (target) {
              target.addEventListener('scroll', this, {
                passive: true
              });

              if (target === this._containerElement) {
                this._sizer = this._sizer || this._createContainerSizer();

                this._container.insertBefore(this._sizer, this._container.firstChild);
              }
            }
          }
          /**
           * Index and position of item to scroll to. The scroller will fix to that point
           * until the user scrolls.
           */

        }, {
          key: "scrollToIndex",
          set: function set(newValue) {
            this._scrollToIndex = newValue;

            this._schedule(this._updateLayout);
          }
        }, {
          key: "_schedule",
          value: function () {
            var _schedule2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(method) {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (this._scheduled.has(method)) {
                        _context.next = 6;
                        break;
                      }

                      this._scheduled.add(method);

                      _context.next = 4;
                      return Promise.resolve();

                    case 4:
                      this._scheduled.delete(method);

                      method.call(this);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function _schedule(_x) {
              return _schedule2.apply(this, arguments);
            }

            return _schedule;
          }()
        }, {
          key: "_updateDOM",
          value: function () {
            var _updateDOM2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this3 = this;

              var _rangeChanged, _itemsChanged;

              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _rangeChanged = this._rangeChanged, _itemsChanged = this._itemsChanged;

                      if (this._visibilityChanged) {
                        this._notifyVisibility();

                        this._visibilityChanged = false;
                      }

                      if (!(_rangeChanged || _itemsChanged)) {
                        _context2.next = 8;
                        break;
                      }

                      this._notifyRange();

                      this._rangeChanged = false;
                      this._itemsChanged = false;
                      _context2.next = 8;
                      return this._mutationPromise;

                    case 8:
                      if (this._layout.measureChildren) {
                        this._children.forEach(function (child) {
                          return _this3._childrenRO.observe(child);
                        });
                      }

                      this._positionChildren(this._childrenPos);

                      this._sizeContainer(this._scrollSize);

                      if (this._scrollErr) {
                        this._correctScrollError(this._scrollErr);

                        this._scrollErr = null;
                      }

                      if (this._benchmarkStart && 'mark' in window.performance) {
                        window.performance.mark('uv-end');
                      }

                    case 13:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function _updateDOM() {
              return _updateDOM2.apply(this, arguments);
            }

            return _updateDOM;
          }()
        }, {
          key: "_updateLayout",
          value: function _updateLayout() {
            this._layout.totalItems = this._totalItems;

            if (this._scrollToIndex !== null) {
              this._layout.scrollToIndex(this._scrollToIndex.index, this._scrollToIndex.position);

              this._scrollToIndex = null;
            }

            this._updateView();

            if (this._childMeasurements !== null) {
              // If the layout has been changed, we may have measurements but no callback
              if (this._measureCallback) {
                this._measureCallback(this._childMeasurements);
              }

              this._childMeasurements = null;
            }

            this._layout.reflowIfNeeded(this._itemsChanged);

            if (this._benchmarkStart && 'mark' in window.performance) {
              window.performance.mark('uv-end');
            }
          }
        }, {
          key: "_handleScrollEvent",
          value: function _handleScrollEvent() {
            if (this._benchmarkStart && 'mark' in window.performance) {
              try {
                window.performance.measure('uv-virtualizing', 'uv-start', 'uv-end');
              } catch (e) {}

              window.performance.mark('uv-start');
            }

            this._schedule(this._updateLayout);
          }
        }, {
          key: "handleEvent",
          value: function handleEvent(event) {
            switch (event.type) {
              case 'scroll':
                if (!this._scrollTarget || event.target === this._scrollTarget) {
                  this._handleScrollEvent();
                }

                break;

              case 'scrollsizechange':
                this._scrollSize = event.detail;

                this._schedule(this._updateDOM);

                break;

              case 'scrollerrorchange':
                this._scrollErr = event.detail;

                this._schedule(this._updateDOM);

                break;

              case 'itempositionchange':
                this._childrenPos = event.detail;

                this._schedule(this._updateDOM);

                break;

              case 'rangechange':
                this._adjustRange(event.detail);

                this._schedule(this._updateDOM);

                break;

              default:
                console.warn('event not handled', event);
            }
          }
        }, {
          key: "_initResizeObservers",
          value: function () {
            var _initResizeObservers2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this4 = this;

              var ResizeObserver$1;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(this._containerRO === null)) {
                        _context3.next = 7;
                        break;
                      }

                      _context3.next = 3;
                      return ResizeObserver();

                    case 3:
                      ResizeObserver$1 = _context3.sent;
                      this._containerRO = new ResizeObserver$1(function (entries) {
                        return _this4._containerSizeChanged(entries[0].contentRect);
                      });
                      this._childrenRO = new ResizeObserver$1(this._childrenSizeChanged.bind(this));
                      this._mutationObserver = new MutationObserver(this._observeMutations.bind(this));

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function _initResizeObservers() {
              return _initResizeObservers2.apply(this, arguments);
            }

            return _initResizeObservers;
          }()
        }, {
          key: "_applyContainerStyles",
          value: function _applyContainerStyles() {
            if (nativeShadowDOM) {
              if (this._containerStylesheet === null) {
                var sheet = this._containerStylesheet = document.createElement('style');
                sheet.textContent = containerStyles(':host', '::slotted(*)');
              }

              var root = this._containerElement.shadowRoot || this._containerElement.attachShadow({
                mode: 'open'
              });

              var slot = root.querySelector('slot:not([name])');
              root.appendChild(this._containerStylesheet);

              if (!slot) {
                root.appendChild(document.createElement('slot'));
              }
            } else {
              attachGlobalContainerStylesheet();

              if (this._containerElement) {
                this._containerElement.classList.add(HOST_CLASSNAME);
              }
            }
          }
        }, {
          key: "_createContainerSizer",
          value: function _createContainerSizer() {
            var sizer = document.createElement('div'); // When the scrollHeight is large, the height of this element might be
            // ignored. Setting content and font-size ensures the element has a size.

            Object.assign(sizer.style, {
              position: 'absolute',
              margin: '-2px 0 0 0',
              padding: 0,
              visibility: 'hidden',
              fontSize: '2px'
            });
            sizer.innerHTML = '&nbsp;';
            sizer.id = 'uni-virtualizer-spacer';
            return sizer;
          }
        }, {
          key: "_children",
          get: function get() {
            var arr = [];
            var next = this.container.firstElementChild;

            while (next) {
              // Skip our spacer. TODO (graynorton): Feels a bit hacky. Anything better?
              if (next.id !== 'uni-virtualizer-spacer') {
                arr.push(next);
              }

              next = next.nextElementSibling;
            }

            return arr;
          }
        }, {
          key: "_updateView",
          value: function _updateView() {
            if (!this.container || !this._containerElement || !this._layout) {
              return;
            }

            var width, height, top, left;

            if (this._scrollTarget === this._containerElement && this._containerSize !== null) {
              width = this._containerSize.width;
              height = this._containerSize.height;
              left = this._containerElement.scrollLeft;
              top = this._containerElement.scrollTop;
            } else {
              var containerBounds = this._containerElement.getBoundingClientRect();

              var scrollBounds = this._scrollTarget ? this._scrollTarget.getBoundingClientRect() : {
                top: containerBounds.top + window.pageYOffset,
                left: containerBounds.left + window.pageXOffset,
                width: innerWidth,
                height: innerHeight
              };
              var scrollerWidth = scrollBounds.width;
              var scrollerHeight = scrollBounds.height;
              var xMin = Math.max(0, Math.min(scrollerWidth, containerBounds.left - scrollBounds.left));
              var yMin = Math.max(0, Math.min(scrollerHeight, containerBounds.top - scrollBounds.top)); // TODO (graynorton): Direction is intended to be a layout-level concept, not a scroller-level concept,
              // so this feels like a factoring problem

              var xMax = this._layout.direction === 'vertical' ? Math.max(0, Math.min(scrollerWidth, containerBounds.right - scrollBounds.left)) : scrollerWidth;
              var yMax = this._layout.direction === 'vertical' ? scrollerHeight : Math.max(0, Math.min(scrollerHeight, containerBounds.bottom - scrollBounds.top));
              width = xMax - xMin;
              height = yMax - yMin;
              left = Math.max(0, -(containerBounds.left - scrollBounds.left));
              top = Math.max(0, -(containerBounds.top - scrollBounds.top));
            }

            this._layout.viewportSize = {
              width: width,
              height: height
            };
            this._layout.viewportScroll = {
              top: top,
              left: left
            };
          }
          /**
           * Styles the _sizer element or the container so that its size reflects the
           * total size of all items.
           */

        }, {
          key: "_sizeContainer",
          value: function _sizeContainer(size) {
            if (this._scrollTarget === this._containerElement) {
              var left = size && size.width ? size.width - 1 : 0;
              var top = size && size.height ? size.height - 1 : 0;

              if (this._sizer) {
                this._sizer.style.transform = "translate(".concat(left, "px, ").concat(top, "px)");
              }
            } else {
              if (this._containerElement) {
                var style = this._containerElement.style;
                style.minWidth = size && size.width ? size.width + 'px' : null;
                style.minHeight = size && size.height ? size.height + 'px' : null;
              }
            }
          }
          /**
           * Sets the top and left transform style of the children from the values in
           * pos.
           */

        }, {
          key: "_positionChildren",
          value: function _positionChildren(pos) {
            var _this5 = this;

            if (pos) {
              var children = this._children;
              Object.keys(pos).forEach(function (key) {
                var idx = key - _this5._first;
                var child = children[idx];

                if (child) {
                  var _pos$key = pos[key],
                      top = _pos$key.top,
                      left = _pos$key.left,
                      width = _pos$key.width,
                      height = _pos$key.height;
                  child.style.position = 'absolute';
                  child.style.transform = "translate(".concat(left, "px, ").concat(top, "px)");

                  if (width !== undefined) {
                    child.style.width = width + 'px';
                  }

                  if (height !== undefined) {
                    child.style.height = height + 'px';
                  }
                }
              });
            }
          }
        }, {
          key: "_adjustRange",
          value: function () {
            var _adjustRange2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(range) {
              var _first, _last, _firstVisible, _lastVisible;

              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _first = this._first, _last = this._last, _firstVisible = this._firstVisible, _lastVisible = this._lastVisible;
                      this._first = range.first;
                      this._last = range.last;
                      this._firstVisible = range.firstVisible;
                      this._lastVisible = range.lastVisible;
                      this._rangeChanged = this._rangeChanged || this._first !== _first || this._last !== _last;
                      this._visibilityChanged = this._visibilityChanged || this._firstVisible !== _firstVisible || this._lastVisible !== _lastVisible;

                    case 7:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));

            function _adjustRange(_x2) {
              return _adjustRange2.apply(this, arguments);
            }

            return _adjustRange;
          }()
        }, {
          key: "_correctScrollError",
          value: function _correctScrollError(err) {
            if (this._scrollTarget) {
              this._scrollTarget.scrollTop -= err.top;
              this._scrollTarget.scrollLeft -= err.left;
            } else {
              window.scroll(window.pageXOffset - err.left, window.pageYOffset - err.top);
            }
          }
          /**
           * Emits a rangechange event with the current first, last, firstVisible, and
           * lastVisible.
           */

        }, {
          key: "_notifyRange",
          value: function _notifyRange() {
            // TODO (graynorton): Including visibility here for backward compat, but 
            // may decide to remove at some point. The rationale for separating is that
            // range change events are mainly intended for "internal" consumption by the
            // renderer, whereas visibility change events are mainly intended for "external"
            // consumption by application code.
            this._container.dispatchEvent(new CustomEvent('rangeChanged', {
              detail: {
                first: this._first,
                last: this._last,
                firstVisible: this._firstVisible,
                lastVisible: this._lastVisible
              }
            }));
          }
        }, {
          key: "_notifyVisibility",
          value: function _notifyVisibility() {
            this._container.dispatchEvent(new CustomEvent('visibilityChanged', {
              detail: {
                first: this._first,
                last: this._last,
                firstVisible: this._firstVisible,
                lastVisible: this._lastVisible
              }
            }));
          }
          /**
           * Render and update the view at the next opportunity with the given
           * container size.
           */

        }, {
          key: "_containerSizeChanged",
          value: function _containerSizeChanged(size) {
            var width = size.width,
                height = size.height;
            this._containerSize = {
              width: width,
              height: height
            };

            this._schedule(this._updateLayout);
          }
        }, {
          key: "_observeMutations",
          value: function () {
            var _observeMutations2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this6 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!this._mutationsObserved) {
                        this._mutationsObserved = true;

                        this._mutationPromiseResolver();

                        this._mutationPromise = new Promise(function (resolve) {
                          return _this6._mutationPromiseResolver = resolve;
                        });
                        this._mutationsObserved = false;
                      }

                    case 1:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));

            function _observeMutations() {
              return _observeMutations2.apply(this, arguments);
            }

            return _observeMutations;
          }() // TODO (graynorton): Rethink how this works. Probably child loading is too specific
          // to have dedicated support for; might want some more generic lifecycle hooks for
          // layouts to use. Possibly handle measurement this way, too, or maybe that remains
          // a first-class feature?

        }, {
          key: "_childLoaded",
          value: function _childLoaded() {// this.requestRemeasure();
          }
        }, {
          key: "_childrenSizeChanged",
          value: function _childrenSizeChanged(changes) {
            var _iterator = _createForOfIteratorHelper(changes),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var change = _step.value;

                this._toBeMeasured.set(change.target, change.contentRect);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this._measureChildren();

            this._schedule(this._updateLayout);
          }
        }]);

        return VirtualScroller;
      }();

      function getMargins(el) {
        var style = window.getComputedStyle(el);
        return {
          marginTop: getMarginValue(style.marginTop),
          marginRight: getMarginValue(style.marginRight),
          marginBottom: getMarginValue(style.marginBottom),
          marginLeft: getMarginValue(style.marginLeft)
        };
      }

      function getMarginValue(value) {
        var float = value ? parseFloat(value) : NaN;
        return Number.isNaN(float) ? 0 : float;
      }

      var partToState = new WeakMap();

      function renderItems(_ref) {
        var renderItem = _ref.renderItem,
            keyFunction = _ref.keyFunction,
            first = _ref.first,
            last = _ref.last,
            items = _ref.items;

        if (!keyFunction) {
          keyFunction = function keyFunction(item) {
            return item;
          };
        }

        var itemsToRender = [];

        if (first >= 0 && last >= first) {
          for (var i = first; i < last + 1; i++) {
            itemsToRender.push(items[i]);
          }
        }

        return repeat(itemsToRender, keyFunction, renderItem);
      }
      /**
       * A lit-html directive that turns its parent node into a virtual scroller.
       *
       * See ScrollConfig interface for configuration options.
       */


      var scroll = directive(function (config) {
        return /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(part) {
            var items, renderItem, keyFunction, state, container, scrollTarget, _state, scroller, _i, _arr, prop;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Retain the scroller so that re-rendering the directive's parent won't
                    // create another one.
                    items = config.items, renderItem = config.renderItem, keyFunction = config.keyFunction;
                    state = partToState.get(part);

                    if (state) {
                      _context.next = 11;
                      break;
                    }

                    if (part.startNode.isConnected) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 6;
                    return Promise.resolve();

                  case 6:
                    container = part.startNode.parentNode;
                    scrollTarget = config.scrollTarget || container;
                    state = {
                      scroller: new VirtualScroller({
                        container: container,
                        scrollTarget: scrollTarget
                      }),
                      first: 0,
                      last: -1,
                      renderItem: renderItem,
                      keyFunction: keyFunction,
                      items: items
                    };
                    partToState.set(part, state);
                    container.addEventListener('rangeChanged', function (e) {
                      state.first = e.detail.first;
                      state.last = e.detail.last;
                      part.setValue(renderItems(state));
                      part.commit();
                    });

                  case 11:
                    _state = state, scroller = _state.scroller;
                    Object.assign(state, {
                      items: items,
                      renderItem: renderItem,
                      keyFunction: keyFunction
                    });

                    if (config.items !== undefined) {
                      scroller.items = items;
                      scroller.totalItems = config.items.length;
                    }

                    for (_i = 0, _arr = ['totalItems', 'layout', 'scrollToIndex']; _i < _arr.length; _i++) {
                      prop = _arr[_i];

                      if (config[prop] !== undefined) {
                        scroller[prop] = config[prop];
                      }
                    }

                    part.setValue(renderItems(state));

                  case 16:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }();
      });

      var _ET, ET;

      function EventTarget() {
        return _EventTarget.apply(this, arguments);
      }

      function _EventTarget() {
        _EventTarget = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", ET || init$1());

                case 1:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _EventTarget.apply(this, arguments);
      }

      function init$1() {
        return _init$1.apply(this, arguments);
      }

      function _init$1() {
        _init$1 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _ET = window.EventTarget;
                  _context2.prev = 1;
                  new _ET();
                  _context2.next = 10;
                  break;

                case 5:
                  _context2.prev = 5;
                  _context2.t0 = _context2["catch"](1);
                  _context2.next = 9;
                  return module.import('./event-target-shim-732c410d.js');

                case 9:
                  _ET = _context2.sent.EventTarget;

                case 10:
                  return _context2.abrupt("return", ET = _ET);

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[1, 5]]);
        }));
        return _init$1.apply(this, arguments);
      }

      var Layout1dBase = /*#__PURE__*/function () {
        function Layout1dBase(config) {
          var _this = this;

          _classCallCheck(this, Layout1dBase);

          /**
           * The last set viewport scroll position.
           */
          this._latestCoords = {
            left: 0,
            top: 0
          };
          /**
           * Scrolling direction.
           */

          this._direction = 'vertical';
          /**
           * Dimensions of the viewport.
           */

          this._viewportSize = {
            width: 0,
            height: 0
          };
          /**
           * Flag for debouncing asynchnronous reflow requests.
           */

          this._pendingReflow = false;
          this._pendingLayoutUpdate = false;
          /**
           * Index of the item that has been scrolled to via the public API. When the
           * container is otherwise scrolled, this value is set back to -1.
           */

          this._scrollToIndex = -1;
          /**
           * When a child is scrolled to, the offset from the top of the child and the
           * top of the viewport. Value is a proportion of the item size.
           */

          this._scrollToAnchor = 0;
          this._eventTargetPromise = EventTarget().then(function (Ctor) {
            _this._eventTarget = new Ctor();
          });
          /**
           * Pixel offset in the scroll direction of the first child.
           */

          this._physicalMin = 0;
          /**
           * Pixel offset in the scroll direction of the last child.
           */

          this._physicalMax = 0;
          /**
           * Index of the first child.
           */

          this._first = -1;
          /**
           * Index of the last child.
           */

          this._last = -1;
          /**
           * The _estimated_ size of a child.
           */

          this._itemSize = {
            width: 100,
            height: 100
          };
          /**
           * Space in pixels between children.
           */

          this._spacing = 0;
          /**
           * Length in the scrolling direction.
           */

          this._sizeDim = 'height';
          /**
           * Length in the non-scrolling direction.
           */

          this._secondarySizeDim = 'width';
          /**
           * Position in the scrolling direction.
           */

          this._positionDim = 'top';
          /**
           * Position in the non-scrolling direction.
           */

          this._secondaryPositionDim = 'left';
          /**
           * Current scroll offset in pixels.
           */

          this._scrollPosition = 0;
          /**
           * Difference between current scroll offset and scroll offset calculated due
           * to a reflow.
           */

          this._scrollError = 0;
          /**
           * Total number of items that could possibly be displayed. Used to help
           * calculate the scroll size.
           */

          this._totalItems = 0;
          /**
           * The total (estimated) length of all items in the scrolling direction.
           */

          this._scrollSize = 1;
          /**
           * Number of pixels beyond the visible size of the container to still include
           * in the active range of items.
           */
          // TODO (graynorton): Probably want to make this something we calculate based
          // on viewport size, item size, other factors, possibly still with a dial of some kind

          this._overhang = 1000;

          if (config) {
            this.config = config;
          }
        }

        _createClass(Layout1dBase, [{
          key: "config",
          get: function get() {
            var config = {};

            for (var key in this.constructor._defaultConfig) {
              config[key] = this[key];
            }

            return config;
          }
          /**
           * Maximum index of children + 1, to help estimate total height of the scroll
           * space.
           */
          ,
          set: function set(config) {
            Object.assign(this, Object.assign({}, this.constructor._defaultConfig, config));
          }
        }, {
          key: "totalItems",
          get: function get() {
            return this._totalItems;
          },
          set: function set(num) {
            var _num = Number(num);

            if (_num !== this._totalItems) {
              this._totalItems = _num;

              this._scheduleReflow();
            }
          }
          /**
           * Primary scrolling direction.
           */

        }, {
          key: "direction",
          get: function get() {
            return this._direction;
          },
          set: function set(dir) {
            // Force it to be either horizontal or vertical.
            dir = dir === 'horizontal' ? dir : 'vertical';

            if (dir !== this._direction) {
              this._direction = dir;
              this._sizeDim = dir === 'horizontal' ? 'width' : 'height';
              this._secondarySizeDim = dir === 'horizontal' ? 'height' : 'width';
              this._positionDim = dir === 'horizontal' ? 'left' : 'top';
              this._secondaryPositionDim = dir === 'horizontal' ? 'top' : 'left';

              this._scheduleLayoutUpdate();
            }
          }
          /**
           * Estimate of the dimensions of a single child.
           */

        }, {
          key: "itemSize",
          get: function get() {
            return this._itemSize;
          },
          set: function set(dims) {
            var _itemDim1 = this._itemDim1,
                _itemDim2 = this._itemDim2;
            Object.assign(this._itemSize, dims);

            if (_itemDim1 !== this._itemDim1 || _itemDim2 !== this._itemDim2) {
              if (_itemDim2 !== this._itemDim2) {
                this._itemDim2Changed();
              } else {
                this._scheduleLayoutUpdate();
              }
            }
          }
          /**
           * Amount of space in between items.
           */

        }, {
          key: "spacing",
          get: function get() {
            return this._spacing;
          },
          set: function set(px) {
            var _px = Number(px);

            if (_px !== this._spacing) {
              this._spacing = _px;

              this._scheduleLayoutUpdate();
            }
          }
          /**
           * Height and width of the viewport.
           */

        }, {
          key: "viewportSize",
          get: function get() {
            return this._viewportSize;
          },
          set: function set(dims) {
            var _viewDim1 = this._viewDim1,
                _viewDim2 = this._viewDim2;
            Object.assign(this._viewportSize, dims);

            if (_viewDim2 !== this._viewDim2) {
              this._viewDim2Changed();
            } else if (_viewDim1 !== this._viewDim1) {
              this._checkThresholds();
            }
          }
          /**
           * Scroll offset of the viewport.
           */

        }, {
          key: "viewportScroll",
          get: function get() {
            return this._latestCoords;
          },
          set: function set(coords) {
            Object.assign(this._latestCoords, coords);
            var oldPos = this._scrollPosition;
            this._scrollPosition = this._latestCoords[this._positionDim];

            if (oldPos !== this._scrollPosition) {
              this._scrollPositionChanged(oldPos, this._scrollPosition);

              this._updateVisibleIndices({
                emit: true
              });
            }

            this._checkThresholds();
          }
          /**
           * Perform a reflow if one has been scheduled.
           */

        }, {
          key: "reflowIfNeeded",
          value: function reflowIfNeeded(force) {
            if (force || this._pendingReflow) {
              this._pendingReflow = false;

              this._reflow();
            }
          }
          /**
           * Scroll to the child at the given index, and the given position within that
           * child.
           */

        }, {
          key: "scrollToIndex",
          value: function scrollToIndex(index) {
            var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'start';
            if (!Number.isFinite(index)) return;
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
          }
        }, {
          key: "dispatchEvent",
          value: function () {
            var _dispatchEvent = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this$_eventTarget;

              var _args = arguments;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this._eventTargetPromise;

                    case 2:
                      (_this$_eventTarget = this._eventTarget).dispatchEvent.apply(_this$_eventTarget, _args);

                    case 3:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function dispatchEvent() {
              return _dispatchEvent.apply(this, arguments);
            }

            return dispatchEvent;
          }()
        }, {
          key: "addEventListener",
          value: function () {
            var _addEventListener = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this$_eventTarget2;

              var _args2 = arguments;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this._eventTargetPromise;

                    case 2:
                      (_this$_eventTarget2 = this._eventTarget).addEventListener.apply(_this$_eventTarget2, _args2);

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function addEventListener() {
              return _addEventListener.apply(this, arguments);
            }

            return addEventListener;
          }()
        }, {
          key: "removeEventListener",
          value: function () {
            var _removeEventListener = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this$_eventTarget3;

              var _args3 = arguments;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this._eventTargetPromise;

                    case 2:
                      (_this$_eventTarget3 = this._eventTarget).removeEventListener.apply(_this$_eventTarget3, _args3);

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function removeEventListener() {
              return _removeEventListener.apply(this, arguments);
            }

            return removeEventListener;
          }()
        }, {
          key: "_itemDim2Changed",
          value: function _itemDim2Changed() {// Override
          }
        }, {
          key: "_viewDim2Changed",
          value: function _viewDim2Changed() {// Override
          }
        }, {
          key: "_updateLayout",
          value: function _updateLayout() {// Override
          }
        }, {
          key: "_getItemSize",
          value: function _getItemSize(_idx) {
            var _ref;

            return _ref = {}, _defineProperty(_ref, this._sizeDim, this._itemDim1), _defineProperty(_ref, this._secondarySizeDim, this._itemDim2), _ref;
          }
          /**
           * The size of an item in the scrolling direction + space between items.
           */

        }, {
          key: "_delta",
          get: function get() {
            return this._itemDim1 + this._spacing;
          }
          /**
           * The height or width of an item, whichever corresponds to the scrolling direction.
           */

        }, {
          key: "_itemDim1",
          get: function get() {
            return this._itemSize[this._sizeDim];
          }
          /**
           * The height or width of an item, whichever does NOT correspond to the scrolling direction.
           */

        }, {
          key: "_itemDim2",
          get: function get() {
            return this._itemSize[this._secondarySizeDim];
          }
          /**
           * The height or width of the viewport, whichever corresponds to the scrolling direction.
           */

        }, {
          key: "_viewDim1",
          get: function get() {
            return this._viewportSize[this._sizeDim];
          }
          /**
           * The height or width of the viewport, whichever does NOT correspond to the scrolling direction.
           */

        }, {
          key: "_viewDim2",
          get: function get() {
            return this._viewportSize[this._secondarySizeDim];
          }
        }, {
          key: "_scheduleReflow",
          value: function _scheduleReflow() {
            this._pendingReflow = true;
          }
        }, {
          key: "_scheduleLayoutUpdate",
          value: function _scheduleLayoutUpdate() {
            this._pendingLayoutUpdate = true;

            this._scheduleReflow();
          }
        }, {
          key: "_reflow",
          value: function _reflow() {
            var _first = this._first,
                _last = this._last,
                _scrollSize = this._scrollSize;

            if (this._pendingLayoutUpdate) {
              this._updateLayout();

              this._pendingLayoutUpdate = false;
            }

            this._updateScrollSize();

            this._getActiveItems();

            this._scrollIfNeeded();

            this._updateVisibleIndices();

            if (this._scrollSize !== _scrollSize) {
              this._emitScrollSize();
            }

            if (this._first === -1 && this._last === -1) {
              // TODO: have default empty object for emitRange instead
              this._emitRange();
            } else if (this._first !== _first || this._last !== _last || this._spacingChanged) {
              // TODO: have default empty object for emitRange instead
              this._emitRange();

              this._emitChildPositions();
            }

            this._emitScrollError();
          }
          /**
           * Estimates the total length of all items in the scrolling direction, including spacing.
           */

        }, {
          key: "_updateScrollSize",
          value: function _updateScrollSize() {
            // Ensure we have at least 1px - this allows getting at least 1 item to be
            // rendered.
            this._scrollSize = Math.max(1, this._totalItems * this._delta);
          }
        }, {
          key: "_scrollIfNeeded",
          value: function _scrollIfNeeded() {
            if (this._scrollToIndex === -1) {
              return;
            }

            var index = this._scrollToIndex;
            var anchor = this._scrollToAnchor;

            var pos = this._getItemPosition(index)[this._positionDim];

            var size = this._getItemSize(index)[this._sizeDim];

            var curAnchorPos = this._scrollPosition + this._viewDim1 * anchor;
            var newAnchorPos = pos + size * anchor; // Ensure scroll position is an integer within scroll bounds.

            var scrollPosition = Math.floor(Math.min(this._scrollSize - this._viewDim1, Math.max(0, this._scrollPosition - curAnchorPos + newAnchorPos)));
            this._scrollError += this._scrollPosition - scrollPosition;
            this._scrollPosition = scrollPosition;
          }
        }, {
          key: "_emitRange",
          value: function _emitRange() {
            var inProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            var detail = Object.assign({
              first: this._first,
              last: this._last,
              num: this._num,
              stable: true,
              firstVisible: this._firstVisible,
              lastVisible: this._lastVisible
            }, inProps);
            this.dispatchEvent(new CustomEvent('rangechange', {
              detail: detail
            }));
          }
        }, {
          key: "_emitScrollSize",
          value: function _emitScrollSize() {
            var detail = _defineProperty({}, this._sizeDim, this._scrollSize);

            this.dispatchEvent(new CustomEvent('scrollsizechange', {
              detail: detail
            }));
          }
        }, {
          key: "_emitScrollError",
          value: function _emitScrollError() {
            if (this._scrollError) {
              var _detail2;

              var detail = (_detail2 = {}, _defineProperty(_detail2, this._positionDim, this._scrollError), _defineProperty(_detail2, this._secondaryPositionDim, 0), _detail2);
              this.dispatchEvent(new CustomEvent('scrollerrorchange', {
                detail: detail
              }));
              this._scrollError = 0;
            }
          }
          /**
           * Get or estimate the top and left positions of items in the current range.
           * Emit an itempositionchange event with these positions.
           */

        }, {
          key: "_emitChildPositions",
          value: function _emitChildPositions() {
            var detail = {};

            for (var idx = this._first; idx <= this._last; idx++) {
              detail[idx] = this._getItemPosition(idx);
            }

            this.dispatchEvent(new CustomEvent('itempositionchange', {
              detail: detail
            }));
          }
          /**
           * Number of items to display.
           */

        }, {
          key: "_num",
          get: function get() {
            if (this._first === -1 || this._last === -1) {
              return 0;
            }

            return this._last - this._first + 1;
          }
        }, {
          key: "_checkThresholds",
          value: function _checkThresholds() {
            if (this._viewDim1 === 0 && this._num > 0) {
              this._scheduleReflow();
            } else {
              var min = Math.max(0, this._scrollPosition - this._overhang);
              var max = Math.min(this._scrollSize, this._scrollPosition + this._viewDim1 + this._overhang);

              if (this._physicalMin > min || this._physicalMax < max) {
                this._scheduleReflow();
              }
            }
          }
          /**
           * Find the indices of the first and last items to intersect the viewport.
           * Emit a visibleindiceschange event when either index changes.
           */

        }, {
          key: "_updateVisibleIndices",
          value: function _updateVisibleIndices(options) {
            if (this._first === -1 || this._last === -1) return;
            var firstVisible = this._first;

            while (Math.round(this._getItemPosition(firstVisible)[this._positionDim] + this._getItemSize(firstVisible)[this._sizeDim]) <= Math.round(this._scrollPosition)) {
              firstVisible++;
            }

            var lastVisible = this._last;

            while (Math.round(this._getItemPosition(lastVisible)[this._positionDim]) >= Math.round(this._scrollPosition + this._viewDim1)) {
              lastVisible--;
            }

            if (firstVisible !== this._firstVisible || lastVisible !== this._lastVisible) {
              this._firstVisible = firstVisible;
              this._lastVisible = lastVisible;

              if (options && options.emit) {
                this._emitRange();
              }
            }
          }
        }, {
          key: "_scrollPositionChanged",
          value: function _scrollPositionChanged(oldPos, newPos) {
            // When both values are bigger than the max scroll position, keep the
            // current _scrollToIndex, otherwise invalidate it.
            var maxPos = this._scrollSize - this._viewDim1;

            if (oldPos < maxPos || newPos < maxPos) {
              this._scrollToIndex = -1;
            }
          }
        }]);

        return Layout1dBase;
      }();
      Layout1dBase._defaultConfig = {};

      var Layout1d = /*#__PURE__*/function (_Layout1dBase) {
        _inherits(Layout1d, _Layout1dBase);

        var _super = _createSuper(Layout1d);

        function Layout1d(config) {
          var _this;

          _classCallCheck(this, Layout1d);

          _this = _super.call(this, config);
          /**
           * Indices of children mapped to their (position and length) in the scrolling
           * direction. Used to keep track of children that are in range.
           */

          _this._physicalItems = new Map();
          /**
           * Used in tandem with _physicalItems to track children in range across
           * reflows.
           */

          _this._newPhysicalItems = new Map();
          /**
           * Width and height of children by their index.
           */

          _this._metrics = new Map();
          /**
           * anchorIdx is the anchor around which we reflow. It is designed to allow
           * jumping to any point of the scroll size. We choose it once and stick with
           * it until stable. _first and _last are deduced around it.
           */

          _this._anchorIdx = null;
          /**
           * Position in the scrolling direction of the anchor child.
           */

          _this._anchorPos = null;
          /**
           * Whether all children in range were in range during the previous reflow.
           */

          _this._stable = true;
          /**
           * Whether to remeasure children during the next reflow.
           */

          _this._needsRemeasure = false;
          /**
           * Number of children to lay out.
           */

          _this._nMeasured = 0;
          /**
           * Total length in the scrolling direction of the laid out children.
           */

          _this._tMeasured = 0;
          _this._measureChildren = true;
          _this._estimate = true;
          return _this;
        }

        _createClass(Layout1d, [{
          key: "measureChildren",
          get: function get() {
            return this._measureChildren;
          }
          /**
           * Determine the average size of all children represented in the sizes
           * argument.
           */

        }, {
          key: "updateItemSizes",
          value: function updateItemSizes(sizes) {
            var _this2 = this;

            Object.keys(sizes).forEach(function (key) {
              var metrics = sizes[key],
                  mi = _this2._getMetrics(Number(key)),
                  prevSize = mi[_this2._sizeDim]; // TODO(valdrin) Handle margin collapsing.
              // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing


              mi.width = metrics.width + (metrics.marginLeft || 0) + (metrics.marginRight || 0);
              mi.height = metrics.height + (metrics.marginTop || 0) + (metrics.marginBottom || 0);
              var size = mi[_this2._sizeDim];

              var item = _this2._getPhysicalItem(Number(key));

              if (item) {
                var delta;

                if (size !== undefined) {
                  item.size = size;

                  if (prevSize === undefined) {
                    delta = size;
                    _this2._nMeasured++;
                  } else {
                    delta = size - prevSize;
                  }
                }

                _this2._tMeasured = _this2._tMeasured + delta;
              }
            });

            if (this._nMeasured) {
              this._updateItemSize();

              this._scheduleReflow();
            }
          }
          /**
           * Set the average item size based on the total length and number of children
           * in range.
           */

        }, {
          key: "_updateItemSize",
          value: function _updateItemSize() {
            // Keep integer values.
            this._itemSize[this._sizeDim] = Math.round(this._tMeasured / this._nMeasured);
          }
        }, {
          key: "_getMetrics",
          value: function _getMetrics(idx) {
            return this._metrics[idx] = this._metrics[idx] || {};
          }
        }, {
          key: "_getPhysicalItem",
          value: function _getPhysicalItem(idx) {
            return this._newPhysicalItems.get(idx) || this._physicalItems.get(idx);
          }
        }, {
          key: "_getSize",
          value: function _getSize(idx) {
            var item = this._getPhysicalItem(idx);

            return item && item.size;
          }
          /**
           * Returns the position in the scrolling direction of the item at idx.
           * Estimates it if the item at idx is not in the DOM.
           */

        }, {
          key: "_getPosition",
          value: function _getPosition(idx) {
            var item = this._getPhysicalItem(idx);

            return item ? item.pos : idx * this._delta + this._spacing;
          }
        }, {
          key: "_calculateAnchor",
          value: function _calculateAnchor(lower, upper) {
            if (lower === 0) {
              return 0;
            }

            if (upper > this._scrollSize - this._viewDim1) {
              return this._totalItems - 1;
            }

            return Math.max(0, Math.min(this._totalItems - 1, Math.floor((lower + upper) / 2 / this._delta)));
          }
        }, {
          key: "_getAnchor",
          value: function _getAnchor(lower, upper) {
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

            var firstItem = this._getPhysicalItem(this._first),
                lastItem = this._getPhysicalItem(this._last),
                firstMin = firstItem.pos,
                firstMax = firstMin + firstItem.size,
                lastMin = lastItem.pos,
                lastMax = lastMin + lastItem.size;

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
            } // Window contains a physical item, but not the first or last


            var maxIdx = this._last,
                minIdx = this._first;

            while (true) {
              var candidateIdx = Math.round((maxIdx + minIdx) / 2),
                  candidate = this._physicalItems.get(candidateIdx),
                  cMin = candidate.pos,
                  cMax = cMin + candidate.size;

              if (cMin >= lower && cMin <= upper || cMax >= lower && cMax <= upper) {
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

        }, {
          key: "_getActiveItems",
          value: function _getActiveItems() {
            if (this._viewDim1 === 0 || this._totalItems === 0) {
              this._clearItems();
            } else {
              this._getItems();
            }
          }
          /**
           * Sets the range to empty.
           */

        }, {
          key: "_clearItems",
          value: function _clearItems() {
            this._first = -1;
            this._last = -1;
            this._physicalMin = 0;
            this._physicalMax = 0;
            var items = this._newPhysicalItems;
            this._newPhysicalItems = this._physicalItems;

            this._newPhysicalItems.clear();

            this._physicalItems = items;
            this._stable = true;
          }
          /*
           * Updates _first and _last based on items that should be in the given range.
           */

        }, {
          key: "_getItems",
          value: function _getItems() {
            var items = this._newPhysicalItems;
            var lower, upper; // The anchorIdx is the anchor around which we reflow. It is designed to
            // allow jumping to any point of the scroll size. We choose it once and
            // stick with it until stable. first and last are deduced around it.

            if (this._scrollToIndex >= 0) {
              // If we have a scrollToIndex, we anchor on the given
              // index and set the scroll position accordingly
              this._anchorIdx = this._scrollToIndex;
              this._anchorPos = this._getPosition(this._anchorIdx);

              this._scrollIfNeeded();

              lower = Math.max(0, this._scrollPosition - this._overhang);
              upper = Math.min(this._scrollSize, this._scrollPosition + this._viewDim1 + this._overhang);
            } else {
              // Otherwise, we find an appropriate index to anchor on
              // given the current scroll position
              upper = Math.min(this._scrollSize, this._scrollPosition + this._viewDim1 + this._overhang);
              lower = Math.max(0, upper - this._viewDim1 - 2 * this._overhang);

              if (this._anchorIdx === null || this._anchorPos === null) {
                this._anchorIdx = this._getAnchor(lower, upper);
                this._anchorPos = this._getPosition(this._anchorIdx);
              }
            }

            var anchorSize = this._getSize(this._anchorIdx);

            if (anchorSize === undefined) {
              anchorSize = this._itemDim1;
            } // Anchor might be outside bounds, so prefer correcting the error and keep
            // that anchorIdx.


            var anchorErr = 0;

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
            } // TODO @straversi: If size is always itemDim1, then why keep track of it?


            items.set(this._anchorIdx, {
              pos: this._anchorPos,
              size: anchorSize
            });
            this._first = this._last = this._anchorIdx;
            this._physicalMin = this._physicalMax = this._anchorPos;
            this._stable = true;

            while (this._physicalMin > lower && this._first > 0) {
              var size = this._getSize(--this._first);

              if (size === undefined) {
                this._stable = false;
                size = this._itemDim1;
              }

              var pos = this._physicalMin -= size + this._spacing;
              items.set(this._first, {
                pos: pos,
                size: size
              });

              if (this._stable === false && this._estimate === false) {
                break;
              }
            }

            while (this._physicalMax < upper && this._last < this._totalItems) {
              var _size = this._getSize(this._last);

              if (_size === undefined) {
                this._stable = false;
                _size = this._itemDim1;
              }

              items.set(this._last++, {
                pos: this._physicalMax,
                size: _size
              });

              if (this._stable === false && this._estimate === false) {
                break;
              } else {
                this._physicalMax += _size + this._spacing;
              }
            }

            this._last--; // This handles the cases where we were relying on estimated sizes.

            var extentErr = this._calculateError();

            if (extentErr) {
              this._physicalMin -= extentErr;
              this._physicalMax -= extentErr;
              this._anchorPos -= extentErr;
              this._scrollPosition -= extentErr;
              items.forEach(function (item) {
                return item.pos -= extentErr;
              });
              this._scrollError += extentErr;
            }

            if (this._stable) {
              this._newPhysicalItems = this._physicalItems;

              this._newPhysicalItems.clear();

              this._physicalItems = items;
            }
          }
        }, {
          key: "_calculateError",
          value: function _calculateError() {
            if (this._first === 0) {
              return this._physicalMin;
            } else if (this._physicalMin <= 0) {
              return this._physicalMin - this._first * this._delta;
            } else if (this._last === this._totalItems - 1) {
              return this._physicalMax - this._scrollSize;
            } else if (this._physicalMax >= this._scrollSize) {
              return this._physicalMax - this._scrollSize + (this._totalItems - 1 - this._last) * this._delta;
            }

            return 0;
          }
        }, {
          key: "_updateScrollSize",
          value: function _updateScrollSize() {
            // Reuse previously calculated physical max, as it might be higher than the
            // estimated size.
            _get(_getPrototypeOf(Layout1d.prototype), "_updateScrollSize", this).call(this);

            this._scrollSize = Math.max(this._physicalMax, this._scrollSize);
          } // TODO: Can this be made to inherit from base, with proper hooks?

        }, {
          key: "_reflow",
          value: function _reflow() {
            var _first = this._first,
                _last = this._last,
                _scrollSize = this._scrollSize;

            this._updateScrollSize();

            this._getActiveItems();

            if (this._scrollSize !== _scrollSize) {
              this._emitScrollSize();
            }

            this._updateVisibleIndices();

            this._emitRange();

            if (this._first === -1 && this._last === -1) {
              this._resetReflowState();
            } else if (this._first !== _first || this._last !== _last || this._needsRemeasure) {
              this._emitChildPositions();

              this._emitScrollError();
            } else {
              this._emitChildPositions();

              this._emitScrollError();

              this._resetReflowState();
            }
          }
        }, {
          key: "_resetReflowState",
          value: function _resetReflowState() {
            this._anchorIdx = null;
            this._anchorPos = null;
            this._stable = true;
          }
          /**
           * Returns the top and left positioning of the item at idx.
           */

        }, {
          key: "_getItemPosition",
          value: function _getItemPosition(idx) {
            var _ref;

            return _ref = {}, _defineProperty(_ref, this._positionDim, this._getPosition(idx)), _defineProperty(_ref, this._secondaryPositionDim, 0), _ref;
          }
          /**
           * Returns the height and width of the item at idx.
           */

        }, {
          key: "_getItemSize",
          value: function _getItemSize(idx) {
            var _ref2;

            return _ref2 = {}, _defineProperty(_ref2, this._sizeDim, this._getSize(idx) || this._itemDim1), _defineProperty(_ref2, this._secondarySizeDim, this._itemDim2), _ref2;
          }
        }, {
          key: "_viewDim2Changed",
          value: function _viewDim2Changed() {
            this._needsRemeasure = true;

            this._scheduleReflow();
          }
        }, {
          key: "_emitRange",
          value: function _emitRange() {
            var remeasure = this._needsRemeasure;
            var stable = this._stable;
            this._needsRemeasure = false;

            _get(_getPrototypeOf(Layout1d.prototype), "_emitRange", this).call(this, {
              remeasure: remeasure,
              stable: stable
            });
          }
        }]);

        return Layout1d;
      }(Layout1dBase);

      function __decorate(decorators, target, key, desc) {
        var c = arguments.length,
            r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
            d;
        if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
          if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        }
        return c > 3 && r && Object.defineProperty(target, key, r), r;
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
      var walkerNodeFilter = 133
      /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
      ;
      /**
       * Removes the list of nodes from a Template safely. In addition to removing
       * nodes from the Template, the Template part indices are updated to match
       * the mutated Template DOM.
       *
       * As the template is walked the removal state is tracked and
       * part indices are adjusted as needed.
       *
       * div
       *   div#1 (remove) <-- start removing (removing node is div#1)
       *     div
       *       div#2 (remove)  <-- continue removing (removing node is still div#1)
       *         div
       * div <-- stop removing since previous sibling is the removing node (div#1,
       * removed 4 nodes)
       */

      function removeNodesFromTemplate(template, nodesToRemove) {
        var content = template.element.content,
            parts = template.parts;
        var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
        var partIndex = nextActiveIndexInTemplateParts(parts);
        var part = parts[partIndex];
        var nodeIndex = -1;
        var removeCount = 0;
        var nodesToRemoveInTemplate = [];
        var currentRemovingNode = null;

        while (walker.nextNode()) {
          nodeIndex++;
          var node = walker.currentNode; // End removal if stepped past the removing node

          if (node.previousSibling === currentRemovingNode) {
            currentRemovingNode = null;
          } // A node to remove was found in the template


          if (nodesToRemove.has(node)) {
            nodesToRemoveInTemplate.push(node); // Track node we're removing

            if (currentRemovingNode === null) {
              currentRemovingNode = node;
            }
          } // When removing, increment count by which to adjust subsequent part indices


          if (currentRemovingNode !== null) {
            removeCount++;
          }

          while (part !== undefined && part.index === nodeIndex) {
            // If part is in a removed node deactivate it by setting index to -1 or
            // adjust the index as needed.
            part.index = currentRemovingNode !== null ? -1 : part.index - removeCount; // go to the next active part.

            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
            part = parts[partIndex];
          }
        }

        nodesToRemoveInTemplate.forEach(function (n) {
          return n.parentNode.removeChild(n);
        });
      }

      var countNodes = function countNodes(node) {
        var count = node.nodeType === 11
        /* Node.DOCUMENT_FRAGMENT_NODE */
        ? 0 : 1;
        var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);

        while (walker.nextNode()) {
          count++;
        }

        return count;
      };

      var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
        var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

        for (var i = startIndex + 1; i < parts.length; i++) {
          var part = parts[i];

          if (isTemplatePartActive(part)) {
            return i;
          }
        }

        return -1;
      };
      /**
       * Inserts the given node into the Template, optionally before the given
       * refNode. In addition to inserting the node into the Template, the Template
       * part indices are updated to match the mutated Template DOM.
       */


      function insertNodeIntoTemplate(template, node) {
        var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var content = template.element.content,
            parts = template.parts; // If there's no refNode, then put node at end of template.
        // No part indices need to be shifted in this case.

        if (refNode === null || refNode === undefined) {
          content.appendChild(node);
          return;
        }

        var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
        var partIndex = nextActiveIndexInTemplateParts(parts);
        var insertCount = 0;
        var walkerIndex = -1;

        while (walker.nextNode()) {
          walkerIndex++;
          var walkerNode = walker.currentNode;

          if (walkerNode === refNode) {
            insertCount = countNodes(node);
            refNode.parentNode.insertBefore(node, refNode);
          }

          while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
            // If we've inserted the node, simply adjust all subsequent parts
            if (insertCount > 0) {
              while (partIndex !== -1) {
                parts[partIndex].index += insertCount;
                partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
              }

              return;
            }

            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
          }
        }
      }

      var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
        return "".concat(type, "--").concat(scopeName);
      };

      var compatibleShadyCSSVersion = true;

      if (typeof window.ShadyCSS === 'undefined') {
        compatibleShadyCSSVersion = false;
      } else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
        console.warn("Incompatible ShadyCSS version detected. " + "Please update to at least @webcomponents/webcomponentsjs@2.0.2 and " + "@webcomponents/shadycss@1.3.1.");
        compatibleShadyCSSVersion = false;
      }
      /**
       * Template factory which scopes template DOM using ShadyCSS.
       * @param scopeName {string}
       */


      var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
        return function (result) {
          var cacheKey = getTemplateCacheKey(result.type, scopeName);
          var templateCache = templateCaches.get(cacheKey);

          if (templateCache === undefined) {
            templateCache = {
              stringsArray: new WeakMap(),
              keyString: new Map()
            };
            templateCaches.set(cacheKey, templateCache);
          }

          var template = templateCache.stringsArray.get(result.strings);

          if (template !== undefined) {
            return template;
          }

          var key = result.strings.join(marker);
          template = templateCache.keyString.get(key);

          if (template === undefined) {
            var element = result.getTemplateElement();

            if (compatibleShadyCSSVersion) {
              window.ShadyCSS.prepareTemplateDom(element, scopeName);
            }

            template = new Template(result, element);
            templateCache.keyString.set(key, template);
          }

          templateCache.stringsArray.set(result.strings, template);
          return template;
        };
      };
      var TEMPLATE_TYPES = ['html', 'svg'];
      /**
       * Removes all style elements from Templates for the given scopeName.
       */

      var removeStylesFromLitTemplates = function removeStylesFromLitTemplates(scopeName) {
        TEMPLATE_TYPES.forEach(function (type) {
          var templates = templateCaches.get(getTemplateCacheKey(type, scopeName));

          if (templates !== undefined) {
            templates.keyString.forEach(function (template) {
              var content = template.element.content; // IE 11 doesn't support the iterable param Set constructor

              var styles = new Set();
              Array.from(content.querySelectorAll('style')).forEach(function (s) {
                styles.add(s);
              });
              removeNodesFromTemplate(template, styles);
            });
          }
        });
      };

      var shadyRenderSet = new Set();
      /**
       * For the given scope name, ensures that ShadyCSS style scoping is performed.
       * This is done just once per scope name so the fragment and template cannot
       * be modified.
       * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
       * to be scoped and appended to the document
       * (2) removes style elements from all lit-html Templates for this scope name.
       *
       * Note, <style> elements can only be placed into templates for the
       * initial rendering of the scope. If <style> elements are included in templates
       * dynamically rendered to the scope (after the first scope render), they will
       * not be scoped and the <style> will be left in the template and rendered
       * output.
       */

      var prepareTemplateStyles = function prepareTemplateStyles(scopeName, renderedDOM, template) {
        shadyRenderSet.add(scopeName); // If `renderedDOM` is stamped from a Template, then we need to edit that
        // Template's underlying template element. Otherwise, we create one here
        // to give to ShadyCSS, which still requires one while scoping.

        var templateElement = !!template ? template.element : document.createElement('template'); // Move styles out of rendered DOM and store.

        var styles = renderedDOM.querySelectorAll('style');
        var length = styles.length; // If there are no styles, skip unnecessary work

        if (length === 0) {
          // Ensure prepareTemplateStyles is called to support adding
          // styles via `prepareAdoptedCssText` since that requires that
          // `prepareTemplateStyles` is called.
          //
          // ShadyCSS will only update styles containing @apply in the template
          // given to `prepareTemplateStyles`. If no lit Template was given,
          // ShadyCSS will not be able to update uses of @apply in any relevant
          // template. However, this is not a problem because we only create the
          // template for the purpose of supporting `prepareAdoptedCssText`,
          // which doesn't support @apply at all.
          window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
          return;
        }

        var condensedStyle = document.createElement('style'); // Collect styles into a single style. This helps us make sure ShadyCSS
        // manipulations will not prevent us from being able to fix up template
        // part indices.
        // NOTE: collecting styles is inefficient for browsers but ShadyCSS
        // currently does this anyway. When it does not, this should be changed.

        for (var i = 0; i < length; i++) {
          var _style = styles[i];

          _style.parentNode.removeChild(_style);

          condensedStyle.textContent += _style.textContent;
        } // Remove styles from nested templates in this scope.


        removeStylesFromLitTemplates(scopeName); // And then put the condensed style into the "root" template passed in as
        // `template`.

        var content = templateElement.content;

        if (!!template) {
          insertNodeIntoTemplate(template, condensedStyle, content.firstChild);
        } else {
          content.insertBefore(condensedStyle, content.firstChild);
        } // Note, it's important that ShadyCSS gets the template that `lit-html`
        // will actually render so that it can update the style inside when
        // needed (e.g. @apply native Shadow DOM case).


        window.ShadyCSS.prepareTemplateStyles(templateElement, scopeName);
        var style = content.querySelector('style');

        if (window.ShadyCSS.nativeShadow && style !== null) {
          // When in native Shadow DOM, ensure the style created by ShadyCSS is
          // included in initially rendered output (`renderedDOM`).
          renderedDOM.insertBefore(style.cloneNode(true), renderedDOM.firstChild);
        } else if (!!template) {
          // When no style is left in the template, parts will be broken as a
          // result. To fix this, we put back the style node ShadyCSS removed
          // and then tell lit to remove that node from the template.
          // There can be no style in the template in 2 cases (1) when Shady DOM
          // is in use, ShadyCSS removes all styles, (2) when native Shadow DOM
          // is in use ShadyCSS removes the style if it contains no content.
          // NOTE, ShadyCSS creates its own style so we can safely add/remove
          // `condensedStyle` here.
          content.insertBefore(condensedStyle, content.firstChild);
          var removes = new Set();
          removes.add(condensedStyle);
          removeNodesFromTemplate(template, removes);
        }
      };
      /**
       * Extension to the standard `render` method which supports rendering
       * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
       * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
       * or when the webcomponentsjs
       * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
       *
       * Adds a `scopeName` option which is used to scope element DOM and stylesheets
       * when native ShadowDOM is unavailable. The `scopeName` will be added to
       * the class attribute of all rendered DOM. In addition, any style elements will
       * be automatically re-written with this `scopeName` selector and moved out
       * of the rendered DOM and into the document `<head>`.
       *
       * It is common to use this render method in conjunction with a custom element
       * which renders a shadowRoot. When this is done, typically the element's
       * `localName` should be used as the `scopeName`.
       *
       * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
       * custom properties (needed only on older browsers like IE11) and a shim for
       * a deprecated feature called `@apply` that supports applying a set of css
       * custom properties to a given location.
       *
       * Usage considerations:
       *
       * * Part values in `<style>` elements are only applied the first time a given
       * `scopeName` renders. Subsequent changes to parts in style elements will have
       * no effect. Because of this, parts in style elements should only be used for
       * values that will never change, for example parts that set scope-wide theme
       * values or parts which render shared style elements.
       *
       * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
       * custom element's `constructor` is not supported. Instead rendering should
       * either done asynchronously, for example at microtask timing (for example
       * `Promise.resolve()`), or be deferred until the first time the element's
       * `connectedCallback` runs.
       *
       * Usage considerations when using shimmed custom properties or `@apply`:
       *
       * * Whenever any dynamic changes are made which affect
       * css custom properties, `ShadyCSS.styleElement(element)` must be called
       * to update the element. There are two cases when this is needed:
       * (1) the element is connected to a new parent, (2) a class is added to the
       * element that causes it to match different custom properties.
       * To address the first case when rendering a custom element, `styleElement`
       * should be called in the element's `connectedCallback`.
       *
       * * Shimmed custom properties may only be defined either for an entire
       * shadowRoot (for example, in a `:host` rule) or via a rule that directly
       * matches an element with a shadowRoot. In other words, instead of flowing from
       * parent to child as do native css custom properties, shimmed custom properties
       * flow only from shadowRoots to nested shadowRoots.
       *
       * * When using `@apply` mixing css shorthand property names with
       * non-shorthand names (for example `border` and `border-width`) is not
       * supported.
       */


      var render$1 = function render$1(result, container, options) {
        if (!options || _typeof(options) !== 'object' || !options.scopeName) {
          throw new Error('The `scopeName` option is required.');
        }

        var scopeName = options.scopeName;
        var hasRendered = parts.has(container);
        var needsScoping = compatibleShadyCSSVersion && container.nodeType === 11
        /* Node.DOCUMENT_FRAGMENT_NODE */
        && !!container.host; // Handle first render to a scope specially...

        var firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName); // On first scope render, render into a fragment; this cannot be a single
        // fragment that is reused since nested renders can occur synchronously.

        var renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
        render(result, renderContainer, Object.assign({
          templateFactory: shadyTemplateFactory(scopeName)
        }, options)); // When performing first scope render,
        // (1) We've rendered into a fragment so that there's a chance to
        // `prepareTemplateStyles` before sub-elements hit the DOM
        // (which might cause them to render based on a common pattern of
        // rendering in a custom element's `connectedCallback`);
        // (2) Scope the template with ShadyCSS one time only for this scope.
        // (3) Render the fragment into the container and make sure the
        // container knows its `part` is the one we just rendered. This ensures
        // DOM will be re-used on subsequent renders.

        if (firstScopeRender) {
          var part = parts.get(renderContainer);
          parts.delete(renderContainer); // ShadyCSS might have style sheets (e.g. from `prepareAdoptedCssText`)
          // that should apply to `renderContainer` even if the rendered value is
          // not a TemplateInstance. However, it will only insert scoped styles
          // into the document if `prepareTemplateStyles` has already been called
          // for the given scope name.

          var template = part.value instanceof TemplateInstance ? part.value.template : undefined;
          prepareTemplateStyles(scopeName, renderContainer, template);
          removeNodes(container, container.firstChild);
          container.appendChild(renderContainer);
          parts.set(container, part);
        } // After elements have hit the DOM, update styling if this is the
        // initial render to this container.
        // This is needed whenever dynamic changes are made so it would be
        // safest to do every render; however, this would regress performance
        // so we leave it up to the user to call `ShadyCSS.styleElement`
        // for dynamic changes.


        if (!hasRendered && needsScoping) {
          window.ShadyCSS.styleElement(container.host);
        }
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
      var _a;
      /**
       * Use this module if you want to create your own base class extending
       * [[UpdatingElement]].
       * @packageDocumentation
       */

      /*
       * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
       * replaced at compile time by the munged name for object[property]. We cannot
       * alias this function, so we have to use a small shim that has the same
       * behavior when not compiling.
       */


      window.JSCompiler_renameProperty = function (prop, _obj) {
        return prop;
      };

      var defaultConverter = {
        toAttribute: function toAttribute(value, type) {
          switch (type) {
            case Boolean:
              return value ? '' : null;

            case Object:
            case Array:
              // if the value is `null` or `undefined` pass this through
              // to allow removing/no change behavior.
              return value == null ? value : JSON.stringify(value);
          }

          return value;
        },
        fromAttribute: function fromAttribute(value, type) {
          switch (type) {
            case Boolean:
              return value !== null;

            case Number:
              return value === null ? null : Number(value);

            case Object:
            case Array:
              // Type assert to adhere to Bazel's "must type assert JSON parse" rule.
              return JSON.parse(value);
          }

          return value;
        }
      };
      /**
       * Change function that returns true if `value` is different from `oldValue`.
       * This method is used as the default for a property's `hasChanged` function.
       */

      var notEqual = function notEqual(value, old) {
        // This ensures (old==NaN, value==NaN) always returns false
        return old !== value && (old === old || value === value);
      };
      var defaultPropertyDeclaration = {
        attribute: true,
        type: String,
        converter: defaultConverter,
        reflect: false,
        hasChanged: notEqual
      };
      var STATE_HAS_UPDATED = 1;
      var STATE_UPDATE_REQUESTED = 1 << 2;
      var STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
      var STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
      /**
       * The Closure JS Compiler doesn't currently have good support for static
       * property semantics where "this" is dynamic (e.g.
       * https://github.com/google/closure-compiler/issues/3177 and others) so we use
       * this hack to bypass any rewriting by the compiler.
       */

      var finalized = 'finalized';
      /**
       * Base element class which manages element properties and attributes. When
       * properties change, the `update` method is asynchronously called. This method
       * should be supplied by subclassers to render updates as desired.
       * @noInheritDoc
       */

      var UpdatingElement = /*#__PURE__*/function (_HTMLElement) {
        _inherits(UpdatingElement, _HTMLElement);

        var _super = _createSuper(UpdatingElement);

        function UpdatingElement() {
          var _this;

          _classCallCheck(this, UpdatingElement);

          _this = _super.call(this);

          _this.initialize();

          return _this;
        }
        /**
         * Returns a list of attributes corresponding to the registered properties.
         * @nocollapse
         */


        _createClass(UpdatingElement, [{
          key: "initialize",
          value:
          /**
           * Performs element initialization. By default captures any pre-set values for
           * registered properties.
           */
          function initialize() {
            var _this2 = this;

            this._updateState = 0;
            this._updatePromise = new Promise(function (res) {
              return _this2._enableUpdatingResolver = res;
            });
            this._changedProperties = new Map();

            this._saveInstanceProperties(); // ensures first update will be caught by an early access of
            // `updateComplete`


            this.requestUpdateInternal();
          }
          /**
           * Fixes any properties set on the instance before upgrade time.
           * Otherwise these would shadow the accessor and break these properties.
           * The properties are stored in a Map which is played back after the
           * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
           * (<=41), properties created for native platform properties like (`id` or
           * `name`) may not have default values set in the element constructor. On
           * these browsers native properties appear on instances and therefore their
           * default value will overwrite any element default (e.g. if the element sets
           * this.id = 'id' in the constructor, the 'id' will become '' since this is
           * the native platform default).
           */

        }, {
          key: "_saveInstanceProperties",
          value: function _saveInstanceProperties() {
            var _this3 = this;

            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            this.constructor._classProperties.forEach(function (_v, p) {
              if (_this3.hasOwnProperty(p)) {
                var value = _this3[p];
                delete _this3[p];

                if (!_this3._instanceProperties) {
                  _this3._instanceProperties = new Map();
                }

                _this3._instanceProperties.set(p, value);
              }
            });
          }
          /**
           * Applies previously saved instance properties.
           */

        }, {
          key: "_applyInstanceProperties",
          value: function _applyInstanceProperties() {
            var _this4 = this;

            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            // tslint:disable-next-line:no-any
            this._instanceProperties.forEach(function (v, p) {
              return _this4[p] = v;
            });

            this._instanceProperties = undefined;
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            // Ensure first connection completes an update. Updates cannot complete
            // before connection.
            this.enableUpdating();
          }
        }, {
          key: "enableUpdating",
          value: function enableUpdating() {
            if (this._enableUpdatingResolver !== undefined) {
              this._enableUpdatingResolver();

              this._enableUpdatingResolver = undefined;
            }
          }
          /**
           * Allows for `super.disconnectedCallback()` in extensions while
           * reserving the possibility of making non-breaking feature additions
           * when disconnecting at some point in the future.
           */

        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {}
          /**
           * Synchronizes property values when attributes change.
           */

        }, {
          key: "attributeChangedCallback",
          value: function attributeChangedCallback(name, old, value) {
            if (old !== value) {
              this._attributeToProperty(name, value);
            }
          }
        }, {
          key: "_propertyToAttribute",
          value: function _propertyToAttribute(name, value) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPropertyDeclaration;
            var ctor = this.constructor;

            var attr = ctor._attributeNameForProperty(name, options);

            if (attr !== undefined) {
              var attrValue = ctor._propertyValueToAttribute(value, options); // an undefined value does not change the attribute.


              if (attrValue === undefined) {
                return;
              } // Track if the property is being reflected to avoid
              // setting the property again via `attributeChangedCallback`. Note:
              // 1. this takes advantage of the fact that the callback is synchronous.
              // 2. will behave incorrectly if multiple attributes are in the reaction
              // stack at time of calling. However, since we process attributes
              // in `update` this should not be possible (or an extreme corner case
              // that we'd like to discover).
              // mark state reflecting


              this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;

              if (attrValue == null) {
                this.removeAttribute(attr);
              } else {
                this.setAttribute(attr, attrValue);
              } // mark state not reflecting


              this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
            }
          }
        }, {
          key: "_attributeToProperty",
          value: function _attributeToProperty(name, value) {
            // Use tracking info to avoid deserializing attribute value if it was
            // just set from a property setter.
            if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
              return;
            }

            var ctor = this.constructor; // Note, hint this as an `AttributeMap` so closure clearly understands
            // the type; it has issues with tracking types through statics
            // tslint:disable-next-line:no-unnecessary-type-assertion

            var propName = ctor._attributeToPropertyMap.get(name);

            if (propName !== undefined) {
              var options = ctor.getPropertyOptions(propName); // mark state reflecting

              this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
              this[propName] = // tslint:disable-next-line:no-any
              ctor._propertyValueFromAttribute(value, options); // mark state not reflecting

              this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
            }
          }
          /**
           * This protected version of `requestUpdate` does not access or return the
           * `updateComplete` promise. This promise can be overridden and is therefore
           * not free to access.
           */

        }, {
          key: "requestUpdateInternal",
          value: function requestUpdateInternal(name, oldValue, options) {
            var shouldRequestUpdate = true; // If we have a property key, perform property update steps.

            if (name !== undefined) {
              var ctor = this.constructor;
              options = options || ctor.getPropertyOptions(name);

              if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                if (!this._changedProperties.has(name)) {
                  this._changedProperties.set(name, oldValue);
                } // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.


                if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                  if (this._reflectingProperties === undefined) {
                    this._reflectingProperties = new Map();
                  }

                  this._reflectingProperties.set(name, options);
                }
              } else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
              }
            }

            if (!this._hasRequestedUpdate && shouldRequestUpdate) {
              this._updatePromise = this._enqueueUpdate();
            }
          }
          /**
           * Requests an update which is processed asynchronously. This should
           * be called when an element should update based on some state not triggered
           * by setting a property. In this case, pass no arguments. It should also be
           * called when manually implementing a property setter. In this case, pass the
           * property `name` and `oldValue` to ensure that any configured property
           * options are honored. Returns the `updateComplete` Promise which is resolved
           * when the update completes.
           *
           * @param name {PropertyKey} (optional) name of requesting property
           * @param oldValue {any} (optional) old value of requesting property
           * @returns {Promise} A Promise that is resolved when the update completes.
           */

        }, {
          key: "requestUpdate",
          value: function requestUpdate(name, oldValue) {
            this.requestUpdateInternal(name, oldValue);
            return this.updateComplete;
          }
          /**
           * Sets up the element to asynchronously update.
           */

        }, {
          key: "_enqueueUpdate",
          value: function () {
            var _enqueueUpdate2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var result;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
                      _context.prev = 1;
                      _context.next = 4;
                      return this._updatePromise;

                    case 4:
                      _context.next = 8;
                      break;

                    case 6:
                      _context.prev = 6;
                      _context.t0 = _context["catch"](1);

                    case 8:
                      result = this.performUpdate(); // If `performUpdate` returns a Promise, we await it. This is done to
                      // enable coordinating updates with a scheduler. Note, the result is
                      // checked to avoid delaying an additional microtask unless we need to.

                      if (!(result != null)) {
                        _context.next = 12;
                        break;
                      }

                      _context.next = 12;
                      return result;

                    case 12:
                      return _context.abrupt("return", !this._hasRequestedUpdate);

                    case 13:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[1, 6]]);
            }));

            function _enqueueUpdate() {
              return _enqueueUpdate2.apply(this, arguments);
            }

            return _enqueueUpdate;
          }()
        }, {
          key: "_hasRequestedUpdate",
          get: function get() {
            return this._updateState & STATE_UPDATE_REQUESTED;
          }
        }, {
          key: "hasUpdated",
          get: function get() {
            return this._updateState & STATE_HAS_UPDATED;
          }
          /**
           * Performs an element update. Note, if an exception is thrown during the
           * update, `firstUpdated` and `updated` will not be called.
           *
           * You can override this method to change the timing of updates. If this
           * method is overridden, `super.performUpdate()` must be called.
           *
           * For instance, to schedule updates to occur just before the next frame:
           *
           * ```
           * protected async performUpdate(): Promise<unknown> {
           *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
           *   super.performUpdate();
           * }
           * ```
           */

        }, {
          key: "performUpdate",
          value: function performUpdate() {
            // Abort any update if one is not pending when this is called.
            // This can happen if `performUpdate` is called early to "flush"
            // the update.
            if (!this._hasRequestedUpdate) {
              return;
            } // Mixin instance properties once, if they exist.


            if (this._instanceProperties) {
              this._applyInstanceProperties();
            }

            var shouldUpdate = false;
            var changedProperties = this._changedProperties;

            try {
              shouldUpdate = this.shouldUpdate(changedProperties);

              if (shouldUpdate) {
                this.update(changedProperties);
              } else {
                this._markUpdated();
              }
            } catch (e) {
              // Prevent `firstUpdated` and `updated` from running when there's an
              // update exception.
              shouldUpdate = false; // Ensure element can accept additional updates after an exception.

              this._markUpdated();

              throw e;
            }

            if (shouldUpdate) {
              if (!(this._updateState & STATE_HAS_UPDATED)) {
                this._updateState = this._updateState | STATE_HAS_UPDATED;
                this.firstUpdated(changedProperties);
              }

              this.updated(changedProperties);
            }
          }
        }, {
          key: "_markUpdated",
          value: function _markUpdated() {
            this._changedProperties = new Map();
            this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
          }
          /**
           * Returns a Promise that resolves when the element has completed updating.
           * The Promise value is a boolean that is `true` if the element completed the
           * update without triggering another update. The Promise result is `false` if
           * a property was set inside `updated()`. If the Promise is rejected, an
           * exception was thrown during the update.
           *
           * To await additional asynchronous work, override the `_getUpdateComplete`
           * method. For example, it is sometimes useful to await a rendered element
           * before fulfilling this Promise. To do this, first await
           * `super._getUpdateComplete()`, then any subsequent state.
           *
           * @returns {Promise} The Promise returns a boolean that indicates if the
           * update resolved without triggering another update.
           */

        }, {
          key: "updateComplete",
          get: function get() {
            return this._getUpdateComplete();
          }
          /**
           * Override point for the `updateComplete` promise.
           *
           * It is not safe to override the `updateComplete` getter directly due to a
           * limitation in TypeScript which means it is not possible to call a
           * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
           * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
           * This method should be overridden instead. For example:
           *
           *   class MyElement extends LitElement {
           *     async _getUpdateComplete() {
           *       await super._getUpdateComplete();
           *       await this._myChild.updateComplete;
           *     }
           *   }
           * @deprecated Override `getUpdateComplete()` instead for forward
           *     compatibility with `lit-element` 3.0 / `@lit/reactive-element`.
           */

        }, {
          key: "_getUpdateComplete",
          value: function _getUpdateComplete() {
            return this.getUpdateComplete();
          }
          /**
           * Override point for the `updateComplete` promise.
           *
           * It is not safe to override the `updateComplete` getter directly due to a
           * limitation in TypeScript which means it is not possible to call a
           * superclass getter (e.g. `super.updateComplete.then(...)`) when the target
           * language is ES5 (https://github.com/microsoft/TypeScript/issues/338).
           * This method should be overridden instead. For example:
           *
           *   class MyElement extends LitElement {
           *     async getUpdateComplete() {
           *       await super.getUpdateComplete();
           *       await this._myChild.updateComplete;
           *     }
           *   }
           */

        }, {
          key: "getUpdateComplete",
          value: function getUpdateComplete() {
            return this._updatePromise;
          }
          /**
           * Controls whether or not `update` should be called when the element requests
           * an update. By default, this method always returns `true`, but this can be
           * customized to control when to update.
           *
           * @param _changedProperties Map of changed properties with old values
           */

        }, {
          key: "shouldUpdate",
          value: function shouldUpdate(_changedProperties) {
            return true;
          }
          /**
           * Updates the element. This method reflects property values to attributes.
           * It can be overridden to render and keep updated element DOM.
           * Setting properties inside this method will *not* trigger
           * another update.
           *
           * @param _changedProperties Map of changed properties with old values
           */

        }, {
          key: "update",
          value: function update(_changedProperties) {
            var _this5 = this;

            if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
              // Use forEach so this works even if for/of loops are compiled to for
              // loops expecting arrays
              this._reflectingProperties.forEach(function (v, k) {
                return _this5._propertyToAttribute(k, _this5[k], v);
              });

              this._reflectingProperties = undefined;
            }

            this._markUpdated();
          }
          /**
           * Invoked whenever the element is updated. Implement to perform
           * post-updating tasks via DOM APIs, for example, focusing an element.
           *
           * Setting properties inside this method will trigger the element to update
           * again after this update cycle completes.
           *
           * @param _changedProperties Map of changed properties with old values
           */

        }, {
          key: "updated",
          value: function updated(_changedProperties) {}
          /**
           * Invoked when the element is first updated. Implement to perform one time
           * work on the element after update.
           *
           * Setting properties inside this method will trigger the element to update
           * again after this update cycle completes.
           *
           * @param _changedProperties Map of changed properties with old values
           */

        }, {
          key: "firstUpdated",
          value: function firstUpdated(_changedProperties) {}
        }], [{
          key: "observedAttributes",
          get: function get() {
            var _this6 = this;

            // note: piggy backing on this to ensure we're finalized.
            this.finalize();
            var attributes = []; // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays

            this._classProperties.forEach(function (v, p) {
              var attr = _this6._attributeNameForProperty(p, v);

              if (attr !== undefined) {
                _this6._attributeToPropertyMap.set(attr, p);

                attributes.push(attr);
              }
            });

            return attributes;
          }
          /**
           * Ensures the private `_classProperties` property metadata is created.
           * In addition to `finalize` this is also called in `createProperty` to
           * ensure the `@property` decorator can add property metadata.
           */

          /** @nocollapse */

        }, {
          key: "_ensureClassProperties",
          value: function _ensureClassProperties() {
            var _this7 = this;

            // ensure private storage for property declarations.
            if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
              this._classProperties = new Map(); // NOTE: Workaround IE11 not supporting Map constructor argument.

              var superProperties = Object.getPrototypeOf(this)._classProperties;

              if (superProperties !== undefined) {
                superProperties.forEach(function (v, k) {
                  return _this7._classProperties.set(k, v);
                });
              }
            }
          }
          /**
           * Creates a property accessor on the element prototype if one does not exist
           * and stores a PropertyDeclaration for the property with the given options.
           * The property setter calls the property's `hasChanged` property option
           * or uses a strict identity check to determine whether or not to request
           * an update.
           *
           * This method may be overridden to customize properties; however,
           * when doing so, it's important to call `super.createProperty` to ensure
           * the property is setup correctly. This method calls
           * `getPropertyDescriptor` internally to get a descriptor to install.
           * To customize what properties do when they are get or set, override
           * `getPropertyDescriptor`. To customize the options for a property,
           * implement `createProperty` like this:
           *
           * static createProperty(name, options) {
           *   options = Object.assign(options, {myOption: true});
           *   super.createProperty(name, options);
           * }
           *
           * @nocollapse
           */

        }, {
          key: "createProperty",
          value: function createProperty(name) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPropertyDeclaration;

            // Note, since this can be called by the `@property` decorator which
            // is called before `finalize`, we ensure storage exists for property
            // metadata.
            this._ensureClassProperties();

            this._classProperties.set(name, options); // Do not generate an accessor if the prototype already has one, since
            // it would be lost otherwise and that would never be the user's intention;
            // Instead, we expect users to call `requestUpdate` themselves from
            // user-defined accessors. Note that if the super has an accessor we will
            // still overwrite it


            if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
              return;
            }

            var key = _typeof(name) === 'symbol' ? Symbol() : "__".concat(name);
            var descriptor = this.getPropertyDescriptor(name, key, options);

            if (descriptor !== undefined) {
              Object.defineProperty(this.prototype, name, descriptor);
            }
          }
          /**
           * Returns a property descriptor to be defined on the given named property.
           * If no descriptor is returned, the property will not become an accessor.
           * For example,
           *
           *   class MyElement extends LitElement {
           *     static getPropertyDescriptor(name, key, options) {
           *       const defaultDescriptor =
           *           super.getPropertyDescriptor(name, key, options);
           *       const setter = defaultDescriptor.set;
           *       return {
           *         get: defaultDescriptor.get,
           *         set(value) {
           *           setter.call(this, value);
           *           // custom action.
           *         },
           *         configurable: true,
           *         enumerable: true
           *       }
           *     }
           *   }
           *
           * @nocollapse
           */

        }, {
          key: "getPropertyDescriptor",
          value: function getPropertyDescriptor(name, key, options) {
            return {
              // tslint:disable-next-line:no-any no symbol in index
              get: function get() {
                return this[key];
              },
              set: function set(value) {
                var oldValue = this[name];
                this[key] = value;
                this.requestUpdateInternal(name, oldValue, options);
              },
              configurable: true,
              enumerable: true
            };
          }
          /**
           * Returns the property options associated with the given property.
           * These options are defined with a PropertyDeclaration via the `properties`
           * object or the `@property` decorator and are registered in
           * `createProperty(...)`.
           *
           * Note, this method should be considered "final" and not overridden. To
           * customize the options for a given property, override `createProperty`.
           *
           * @nocollapse
           * @final
           */

        }, {
          key: "getPropertyOptions",
          value: function getPropertyOptions(name) {
            return this._classProperties && this._classProperties.get(name) || defaultPropertyDeclaration;
          }
          /**
           * Creates property accessors for registered properties and ensures
           * any superclasses are also finalized.
           * @nocollapse
           */

        }, {
          key: "finalize",
          value: function finalize() {
            // finalize any superclasses
            var superCtor = Object.getPrototypeOf(this);

            if (!superCtor.hasOwnProperty(finalized)) {
              superCtor.finalize();
            }

            this[finalized] = true;

            this._ensureClassProperties(); // initialize Map populated in observedAttributes


            this._attributeToPropertyMap = new Map(); // make any properties
            // Note, only process "own" properties since this element will inherit
            // any properties defined on the superClass, and finalization ensures
            // the entire prototype chain is finalized.

            if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
              var props = this.properties; // support symbols in properties (IE11 does not support this)

              var propKeys = [].concat(_toConsumableArray(Object.getOwnPropertyNames(props)), _toConsumableArray(typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : [])); // This for/of is ok because propKeys is an array

              var _iterator = _createForOfIteratorHelper(propKeys),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var p = _step.value;
                  // note, use of `any` is due to TypeSript lack of support for symbol in
                  // index types
                  // tslint:disable-next-line:no-any no symbol in index
                  this.createProperty(p, props[p]);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
          /**
           * Returns the property name for the given attribute `name`.
           * @nocollapse
           */

        }, {
          key: "_attributeNameForProperty",
          value: function _attributeNameForProperty(name, options) {
            var attribute = options.attribute;
            return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
          }
          /**
           * Returns true if a property should request an update.
           * Called when a property value is set and uses the `hasChanged`
           * option for the property if present or a strict identity check.
           * @nocollapse
           */

        }, {
          key: "_valueHasChanged",
          value: function _valueHasChanged(value, old) {
            var hasChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : notEqual;
            return hasChanged(value, old);
          }
          /**
           * Returns the property value for the given attribute value.
           * Called via the `attributeChangedCallback` and uses the property's
           * `converter` or `converter.fromAttribute` property option.
           * @nocollapse
           */

        }, {
          key: "_propertyValueFromAttribute",
          value: function _propertyValueFromAttribute(value, options) {
            var type = options.type;
            var converter = options.converter || defaultConverter;
            var fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
            return fromAttribute ? fromAttribute(value, type) : value;
          }
          /**
           * Returns the attribute value for the given property value. If this
           * returns undefined, the property will *not* be reflected to an attribute.
           * If this returns null, the attribute will be removed, otherwise the
           * attribute will be set to the value.
           * This uses the property's `reflect` and `type.toAttribute` property options.
           * @nocollapse
           */

        }, {
          key: "_propertyValueToAttribute",
          value: function _propertyValueToAttribute(value, options) {
            if (options.reflect === undefined) {
              return;
            }

            var type = options.type;
            var converter = options.converter;
            var toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
            return toAttribute(value, type);
          }
        }]);

        return UpdatingElement;
      }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));
      _a = finalized;
      /**
       * Marks class as having finished creating properties.
       */

      UpdatingElement[_a] = true;

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
      var legacyCustomElement = function legacyCustomElement(tagName, clazz) {
        window.customElements.define(tagName, clazz); // Cast as any because TS doesn't recognize the return type as being a
        // subtype of the decorated class when clazz is typed as
        // `Constructor<HTMLElement>` for some reason.
        // `Constructor<HTMLElement>` is helpful to make sure the decorator is
        // applied to elements however.
        // tslint:disable-next-line:no-any

        return clazz;
      };

      var standardCustomElement = function standardCustomElement(tagName, descriptor) {
        var kind = descriptor.kind,
            elements = descriptor.elements;
        return {
          kind: kind,
          elements: elements,
          // This callback is called once the class is otherwise fully defined
          finisher: function finisher(clazz) {
            window.customElements.define(tagName, clazz);
          }
        };
      };
      /**
       * Class decorator factory that defines the decorated class as a custom element.
       *
       * ```
       * @customElement('my-element')
       * class MyElement {
       *   render() {
       *     return html``;
       *   }
       * }
       * ```
       * @category Decorator
       * @param tagName The name of the custom element to define.
       */


      var customElement = function customElement(tagName) {
        return function (classOrDescriptor) {
          return typeof classOrDescriptor === 'function' ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
        };
      };

      var standardProperty = function standardProperty(options, element) {
        // When decorating an accessor, pass it through and add property metadata.
        // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
        // stomp over the user's accessor.
        if (element.kind === 'method' && element.descriptor && !('value' in element.descriptor)) {
          return Object.assign(Object.assign({}, element), {
            finisher: function finisher(clazz) {
              clazz.createProperty(element.key, options);
            }
          });
        } else {
          // createProperty() takes care of defining the property, but we still
          // must return some kind of descriptor, so return a descriptor for an
          // unused prototype field. The finisher calls createProperty().
          return {
            kind: 'field',
            key: Symbol(),
            placement: 'own',
            descriptor: {},
            // When @babel/plugin-proposal-decorators implements initializers,
            // do this instead of the initializer below. See:
            // https://github.com/babel/babel/issues/9260 extras: [
            //   {
            //     kind: 'initializer',
            //     placement: 'own',
            //     initializer: descriptor.initializer,
            //   }
            // ],
            initializer: function initializer() {
              if (typeof element.initializer === 'function') {
                this[element.key] = element.initializer.call(this);
              }
            },
            finisher: function finisher(clazz) {
              clazz.createProperty(element.key, options);
            }
          };
        }
      };

      var legacyProperty = function legacyProperty(options, proto, name) {
        proto.constructor.createProperty(name, options);
      };
      /**
       * A property decorator which creates a LitElement property which reflects a
       * corresponding attribute value. A [[`PropertyDeclaration`]] may optionally be
       * supplied to configure property features.
       *
       * This decorator should only be used for public fields. Private or protected
       * fields should use the [[`internalProperty`]] decorator.
       *
       * @example
       * ```ts
       * class MyElement {
       *   @property({ type: Boolean })
       *   clicked = false;
       * }
       * ```
       * @category Decorator
       * @ExportDecoratedItems
       */


      function property(options) {
        // tslint:disable-next-line:no-any decorator
        return function (protoOrDescriptor, name) {
          return name !== undefined ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
        };
      }

      /**
      @license
      Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at
      http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
      http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
      found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
      part of the polymer project is also subject to an additional IP rights grant
      found at http://polymer.github.io/PATENTS.txt
      */

      /**
       * Whether the current browser supports `adoptedStyleSheets`.
       */
      var supportsAdoptingStyleSheets = window.ShadowRoot && (window.ShadyCSS === undefined || window.ShadyCSS.nativeShadow) && 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
      var constructionToken = Symbol();
      var CSSResult = /*#__PURE__*/function () {
        function CSSResult(cssText, safeToken) {
          _classCallCheck(this, CSSResult);

          if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
          }

          this.cssText = cssText;
        } // Note, this is a getter so that it's lazy. In practice, this means
        // stylesheets are not created until the first element instance is made.


        _createClass(CSSResult, [{
          key: "styleSheet",
          get: function get() {
            if (this._styleSheet === undefined) {
              // Note, if `supportsAdoptingStyleSheets` is true then we assume
              // CSSStyleSheet is constructable.
              if (supportsAdoptingStyleSheets) {
                this._styleSheet = new CSSStyleSheet();

                this._styleSheet.replaceSync(this.cssText);
              } else {
                this._styleSheet = null;
              }
            }

            return this._styleSheet;
          }
        }, {
          key: "toString",
          value: function toString() {
            return this.cssText;
          }
        }]);

        return CSSResult;
      }();
      /**
       * Wrap a value for interpolation in a [[`css`]] tagged template literal.
       *
       * This is unsafe because untrusted CSS text can be used to phone home
       * or exfiltrate data to an attacker controlled site. Take care to only use
       * this with trusted input.
       */

      var unsafeCSS = function unsafeCSS(value) {
        return new CSSResult(String(value), constructionToken);
      };

      // This line will be used in regexes to search for LitElement usage.
      // TODO(justinfagnani): inject version number at build time

      (window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.5.1');
      /**
       * Sentinal value used to avoid calling lit-html's render function when
       * subclasses do not implement `render`
       */

      var renderNotImplemented = {};
      /**
       * Base element class that manages element properties and attributes, and
       * renders a lit-html template.
       *
       * To define a component, subclass `LitElement` and implement a
       * `render` method to provide the component's template. Define properties
       * using the [[`properties`]] property or the [[`property`]] decorator.
       */

      var LitElement = /*#__PURE__*/function (_UpdatingElement) {
        _inherits(LitElement, _UpdatingElement);

        var _super = _createSuper(LitElement);

        function LitElement() {
          _classCallCheck(this, LitElement);

          return _super.apply(this, arguments);
        }

        _createClass(LitElement, [{
          key: "initialize",
          value:
          /**
           * Performs element initialization. By default this calls
           * [[`createRenderRoot`]] to create the element [[`renderRoot`]] node and
           * captures any pre-set values for registered properties.
           */
          function initialize() {
            _get(_getPrototypeOf(LitElement.prototype), "initialize", this).call(this);

            this.constructor._getUniqueStyles();

            this.renderRoot = this.createRenderRoot(); // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
            // element's getRootNode(). While this could be done, we're choosing not to
            // support this now since it would require different logic around de-duping.

            if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
              this.adoptStyles();
            }
          }
          /**
           * Returns the node into which the element should render and by default
           * creates and returns an open shadowRoot. Implement to customize where the
           * element's DOM is rendered. For example, to render into the element's
           * childNodes, return `this`.
           * @returns {Element|DocumentFragment} Returns a node into which to render.
           */

        }, {
          key: "createRenderRoot",
          value: function createRenderRoot() {
            return this.attachShadow(this.constructor.shadowRootOptions);
          }
          /**
           * Applies styling to the element shadowRoot using the [[`styles`]]
           * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
           * available and will fallback otherwise. When Shadow DOM is polyfilled,
           * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
           * is available but `adoptedStyleSheets` is not, styles are appended to the
           * end of the `shadowRoot` to [mimic spec
           * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
           */

        }, {
          key: "adoptStyles",
          value: function adoptStyles() {
            var styles = this.constructor._styles;

            if (styles.length === 0) {
              return;
            } // There are three separate cases here based on Shadow DOM support.
            // (1) shadowRoot polyfilled: use ShadyCSS
            // (2) shadowRoot.adoptedStyleSheets available: use it
            // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
            // rendering


            if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
              window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function (s) {
                return s.cssText;
              }), this.localName);
            } else if (supportsAdoptingStyleSheets) {
              this.renderRoot.adoptedStyleSheets = styles.map(function (s) {
                return s instanceof CSSStyleSheet ? s : s.styleSheet;
              });
            } else {
              // This must be done after rendering so the actual style insertion is done
              // in `update`.
              this._needsShimAdoptedStyleSheets = true;
            }
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            _get(_getPrototypeOf(LitElement.prototype), "connectedCallback", this).call(this); // Note, first update/render handles styleElement so we only call this if
            // connected after first update.


            if (this.hasUpdated && window.ShadyCSS !== undefined) {
              window.ShadyCSS.styleElement(this);
            }
          }
          /**
           * Updates the element. This method reflects property values to attributes
           * and calls `render` to render DOM via lit-html. Setting properties inside
           * this method will *not* trigger another update.
           * @param _changedProperties Map of changed properties with old values
           */

        }, {
          key: "update",
          value: function update(changedProperties) {
            var _this = this;

            // Setting properties in `render` should not trigger an update. Since
            // updates are allowed after super.update, it's important to call `render`
            // before that.
            var templateResult = this.render();

            _get(_getPrototypeOf(LitElement.prototype), "update", this).call(this, changedProperties); // If render is not implemented by the component, don't call lit-html render


            if (templateResult !== renderNotImplemented) {
              this.constructor.render(templateResult, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
              });
            } // When native Shadow DOM is used but adoptedStyles are not supported,
            // insert styling after rendering to ensure adoptedStyles have highest
            // priority.


            if (this._needsShimAdoptedStyleSheets) {
              this._needsShimAdoptedStyleSheets = false;

              this.constructor._styles.forEach(function (s) {
                var style = document.createElement('style');
                style.textContent = s.cssText;

                _this.renderRoot.appendChild(style);
              });
            }
          }
          /**
           * Invoked on each update to perform rendering tasks. This method may return
           * any value renderable by lit-html's `NodePart` - typically a
           * `TemplateResult`. Setting properties inside this method will *not* trigger
           * the element to update.
           */

        }, {
          key: "render",
          value: function render() {
            return renderNotImplemented;
          }
        }], [{
          key: "getStyles",
          value:
          /**
           * Return the array of styles to apply to the element.
           * Override this method to integrate into a style management system.
           *
           * @nocollapse
           */
          function getStyles() {
            return this.styles;
          }
          /** @nocollapse */

        }, {
          key: "_getUniqueStyles",
          value: function _getUniqueStyles() {
            // Only gather styles once per class
            if (this.hasOwnProperty(JSCompiler_renameProperty('_styles', this))) {
              return;
            } // Take care not to call `this.getStyles()` multiple times since this
            // generates new CSSResults each time.
            // TODO(sorvell): Since we do not cache CSSResults by input, any
            // shared styles will generate new stylesheet objects, which is wasteful.
            // This should be addressed when a browser ships constructable
            // stylesheets.


            var userStyles = this.getStyles();

            if (Array.isArray(userStyles)) {
              // De-duplicate styles preserving the _last_ instance in the set.
              // This is a performance optimization to avoid duplicated styles that can
              // occur especially when composing via subclassing.
              // The last item is kept to try to preserve the cascade order with the
              // assumption that it's most important that last added styles override
              // previous styles.
              var addStyles = function addStyles(styles, set) {
                return styles.reduceRight(function (set, s) {
                  return (// Note: On IE set.add() does not return the set
                    Array.isArray(s) ? addStyles(s, set) : (set.add(s), set)
                  );
                }, set);
              }; // Array.from does not work on Set in IE, otherwise return
              // Array.from(addStyles(userStyles, new Set<CSSResult>())).reverse()


              var set = addStyles(userStyles, new Set());
              var styles = [];
              set.forEach(function (v) {
                return styles.unshift(v);
              });
              this._styles = styles;
            } else {
              this._styles = userStyles === undefined ? [] : [userStyles];
            } // Ensure that there are no invalid CSSStyleSheet instances here. They are
            // invalid in two conditions.
            // (1) the sheet is non-constructible (`sheet` of a HTMLStyleElement), but
            //     this is impossible to check except via .replaceSync or use
            // (2) the ShadyCSS polyfill is enabled (:. supportsAdoptingStyleSheets is
            //     false)


            this._styles = this._styles.map(function (s) {
              if (s instanceof CSSStyleSheet && !supportsAdoptingStyleSheets) {
                // Flatten the cssText from the passed constructible stylesheet (or
                // undetectable non-constructible stylesheet). The user might have
                // expected to update their stylesheets over time, but the alternative
                // is a crash.
                var cssText = Array.prototype.slice.call(s.cssRules).reduce(function (css, rule) {
                  return css + rule.cssText;
                }, '');
                return unsafeCSS(cssText);
              }

              return s;
            });
          }
        }]);

        return LitElement;
      }(UpdatingElement);
      /**
       * Ensure this class is marked as `finalized` as an optimization ensuring
       * it will not needlessly try to `finalize`.
       *
       * Note this property name is a string to prevent breaking Closure JS Compiler
       * optimizations. See updating-element.ts for more information.
       */

      LitElement['finalized'] = true;
      /**
       * Reference to the underlying library method used to render the element's
       * DOM. By default, points to the `render` method from lit-html's shady-render
       * module.
       *
       * **Most users will never need to touch this property.**
       *
       * This  property should not be confused with the `render` instance method,
       * which should be overridden to define a template for the element.
       *
       * Advanced users creating a new base class based on LitElement can override
       * this property to point to a custom render method with a signature that
       * matches [shady-render's `render`
       * method](https://lit-html.polymer-project.org/api/modules/shady_render.html#render).
       *
       * @nocollapse
       */

      LitElement.render = render$1;
      /** @nocollapse */

      LitElement.shadowRootOptions = {
        mode: 'open'
      };

      var _templateObject;
      /**
       * A LitElement wrapper of the scroll directive.
       *
       * Import this module to declare the lit-virtualizer custom element.
       * Pass an items array, renderItem method, and scroll target as properties
       * to the <lit-virtualizer> element.
       */

      var LitVirtualizer = /*#__PURE__*/function (_LitElement) {
        _inherits(LitVirtualizer, _LitElement);

        var _super = _createSuper(LitVirtualizer);

        // @property()
        // private _layout: Layout | Type<Layout> | LayoutConfig
        // private _scrollToIndex: {index: number, position: string};
        function LitVirtualizer() {
          var _this;

          _classCallCheck(this, LitVirtualizer);

          _this = _super.call(this);
          _this._first = 0;
          _this._last = -1;
          _this._scroller = null;
          _this.scrollTarget = _assertThisInitialized(_this);
          _this._scroller = new VirtualScroller();

          _this.addEventListener('rangeChanged', function (e) {
            _this._first = e.detail.first;
            _this._last = e.detail.last;
          });

          return _this;
        }

        _createClass(LitVirtualizer, [{
          key: "connectedCallback",
          value: function connectedCallback() {
            _get(_getPrototypeOf(LitVirtualizer.prototype), "connectedCallback", this).call(this);

            this._scroller.container = this;
            this._scroller.scrollTarget = this.scrollTarget;
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            _get(_getPrototypeOf(LitVirtualizer.prototype), "disconnectedCallback", this).call(this);

            this._scroller.container = null;
          }
        }, {
          key: "createRenderRoot",
          value: function createRenderRoot() {
            return this;
          }
        }, {
          key: "items",
          get: function get() {
            return this._items;
          },
          set: function set(items) {
            this._items = items;
            this._scroller.totalItems = items.length;
          }
          /**
           * The method used for rendering each item.
           */

        }, {
          key: "renderItem",
          get: function get() {
            return this._renderItem;
          },
          set: function set(renderItem) {
            if (renderItem !== this.renderItem) {
              this._renderItem = renderItem;
              this.requestUpdate();
            }
          }
        }, {
          key: "layout",
          get: function get() {
            return this._scroller.layout;
          }
          /**
           * Scroll to the specified index, placing that item at the given position
           * in the scroll view.
           */
          ,
          set: function set(layout) {
            // TODO (graynorton): Shouldn't have to set this here
            this._scroller.container = this;
            this._scroller.scrollTarget = this.scrollTarget;
            this._scroller.layout = layout;
          }
        }, {
          key: "scrollToIndex",
          value: function () {
            var _scrollToIndex = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(index) {
              var position,
                  _args = arguments;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      position = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'start';
                      this._scroller.scrollToIndex = {
                        index: index,
                        position: position
                      }; // this._scrollToIndex = {index, position};
                      // this.requestUpdate();
                      // await this.updateComplete;
                      // this._scrollToIndex = null;

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function scrollToIndex(_x) {
              return _scrollToIndex.apply(this, arguments);
            }

            return scrollToIndex;
          }()
        }, {
          key: "render",
          value: function render() {
            var items = this.items,
                _first = this._first,
                _last = this._last,
                renderItem = this.renderItem,
                keyFunction = this.keyFunction;

            if (!keyFunction) {
              keyFunction = function keyFunction(item) {
                return item;
              };
            }

            var itemsToRender = [];

            for (var i = _first; i < _last + 1; i++) {
              itemsToRender.push(items[i]);
            }

            return html(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), repeat(itemsToRender, keyFunction, renderItem));
          }
        }]);

        return LitVirtualizer;
      }(LitElement);

      __decorate([property()], LitVirtualizer.prototype, "_renderItem", void 0);

      __decorate([property({
        type: Number
      })], LitVirtualizer.prototype, "_first", void 0);

      __decorate([property({
        type: Number
      })], LitVirtualizer.prototype, "_last", void 0);

      __decorate([property({
        attribute: false
      })], LitVirtualizer.prototype, "_items", void 0);

      __decorate([property({
        attribute: false
      })], LitVirtualizer.prototype, "scrollTarget", void 0);

      __decorate([property()], LitVirtualizer.prototype, "keyFunction", void 0);

      LitVirtualizer = __decorate([customElement('lit-virtualizer')], LitVirtualizer);

      var targetFPS = 60;
      var t = 1000 / targetFPS;
      function runBenchmark(scrollerNodeOrQuery) {
        var distance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10000;
        var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
        var delay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1000;
        var scroller, target, scrolled, scrollTo, start;
        var frames = 0;

        function onFrame() {
          frames++;
          var stamp = window.performance.now();

          if (start === undefined) {
            start = stamp;
          }

          var elapsed = stamp - start;

          if (scrolled() < distance || elapsed < duration) {
            scrollTo(Math.min(distance, Math.ceil(elapsed / duration * distance)));
            setTimeout(onFrame, t);
          } else {
            var fps = Math.floor(1000 / ((stamp - start) / frames));

            var _scroller$stopBenchma = scroller.stopBenchmarking(),
                timeElapsed = _scroller$stopBenchma.timeElapsed,
                virtualizationTime = _scroller$stopBenchma.virtualizationTime;

            var normalized = virtualizationTime / timeElapsed * duration;
            console.log(JSON.stringify({
              fps: fps,
              timeElapsed: timeElapsed,
              virtualizationTime: virtualizationTime,
              normalized: normalized
            }, null, 2));
            window.tachometerResult = normalized;
          }
        }

        setTimeout(function () {
          scroller = getScroller(scrollerNodeOrQuery); // TODO (graynorton): support horizontal?

          if (scroller.scrollTarget) {
            target = scroller.scrollTarget;

            scrolled = function scrolled() {
              return target.scrollTop;
            };

            scrollTo = function scrollTo(y) {
              return target.scrollTop = y;
            };
          } else {
            target = window;

            scrolled = function scrolled() {
              return target.pageYOffset;
            };

            scrollTo = function scrollTo(y) {
              return target.scrollTo(0, y);
            };
          }

          scroller.startBenchmarking();
          setTimeout(onFrame, t);
        }, delay);
      }

      function getSearchParams() {
        var params = {};

        if (window.location.search) {
          var paramsArray = window.location.search.substr(1).split('&');
          paramsArray.forEach(function (param) {
            var parts = param.split('=');
            params[parts[0]] = parts[1] || true;
          });
        }

        return params;
      }

      function runBenchmarkIfRequested(scrollerNodeOrQuery) {
        setTimeout(function () {
          var _getSearchParams = getSearchParams(),
              benchmark = _getSearchParams.benchmark,
              distance = _getSearchParams.distance,
              duration = _getSearchParams.duration,
              delay = _getSearchParams.delay;

          registerScroller(scrollerNodeOrQuery);

          if (benchmark) {
            runBenchmark(scrollerNodeOrQuery, distance, duration, delay);
          }
        }, 0);
      }

      function getScroller(nodeOrQuery) {
        var node = nodeOrQuery instanceof HTMLElement ? nodeOrQuery : document.querySelector(nodeOrQuery);

        if (!node) {
          throw new Error("Scroller not found: ".concat(scrollerNodeOrQuery));
        }

        return node[scrollerRef];
      }

      function registerScroller(scrollerNodeOrQuery) {
        var scroller = getScroller(scrollerNodeOrQuery);

        if (scroller) {
          var scrollers = window.scrollers || (window.scrollers = []);

          if (!scrollers.find(function (s) {
            return s === scroller;
          })) {
            scrollers.push(scroller);
          }
        }
      }

      var _templateObject$1, _templateObject2;
      var firstVisibleResult = document.querySelector("#first-visible");
      var lastVisibleResult = document.querySelector("#last-visible");

      var handleVisibilityChange = function handleVisibilityChange(e) {
        firstVisibleResult.innerHTML = e.detail.firstVisible;
        lastVisibleResult.innerHTML = e.detail.lastVisible;
      };

      var example = function example(contacts) {
        return html(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["<section @visibilityChanged=\"", "\" style=\"height:100%\">", "</section>"])), handleVisibilityChange, scroll({
          items: contacts,
          layout: Layout1d,
          renderItem: function renderItem(_ref) {
            var mediumText = _ref.mediumText,
                index = _ref.index;
            return html(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<div style=\"border-top:3px solid #00f;border-bottom:3px dashed red;width:100%\">", ") ", "</div>"])), index, mediumText);
          },
          useShadowDOM: true
        }));
      };

      (function () {
        var _go = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var contacts, container;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return fetch('../shared/contacts.json');

                case 2:
                  _context.next = 4;
                  return _context.sent.json();

                case 4:
                  contacts = _context.sent;
                  container = document.querySelector("#container");
                  render(example(contacts), container);
                  runBenchmarkIfRequested(container.querySelector('section'));

                case 8:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function go() {
          return _go.apply(this, arguments);
        }

        return go;
      })()();

    }
  };
});
