System.register([], function (exports, module) {
  'use strict';
  return {
    execute: function () {

      exports('_', _typeof);

      function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);

        if (Object.getOwnPropertySymbols) {
          var symbols = Object.getOwnPropertySymbols(object);

          if (enumerableOnly) {
            symbols = symbols.filter(function (sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
          }

          keys.push.apply(keys, symbols);
        }

        return keys;
      }

      function _objectSpread2(target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {};

          if (i % 2) {
            ownKeys(Object(source), true).forEach(function (key) {
              _defineProperty(target, key, source[key]);
            });
          } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
          } else {
            ownKeys(Object(source)).forEach(function (key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
        }

        return target;
      }

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

      function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
      }

      function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
      }

      function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return _arrayLikeToArray(arr);
      }

      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }

      function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
      }

      function _iterableToArrayLimit(arr, i) {
        var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

        if (_i == null) return;
        var _arr = [];
        var _n = true;
        var _d = false;

        var _s, _e;

        try {
          for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
            _arr.push(_s.value);

            if (i && _arr.length === i) break;
          }
        } catch (err) {
          _d = true;
          _e = err;
        } finally {
          try {
            if (!_n && _i["return"] != null) _i["return"]();
          } finally {
            if (_d) throw _e;
          }
        }

        return _arr;
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

      function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
      var t, i, s, e;

      var o = globalThis.trustedTypes,
          l = o ? o.createPolicy("lit-html", {
        createHTML: function createHTML(t) {
          return t;
        }
      }) : void 0,
          n = "lit$".concat((Math.random() + "").slice(9), "$"),
          h = "?" + n,
          r = "<".concat(h, ">"),
          _u = document,
          c = function c() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return _u.createComment(t);
      },
          d = function d(t) {
        return null === t || "object" != _typeof(t) && "function" != typeof t;
      },
          v = Array.isArray,
          a = function a(t) {
        var i;
        return v(t) || "function" == typeof (null === (i = t) || void 0 === i ? void 0 : i[Symbol.iterator]);
      },
          f = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
          _ = /-->/g,
          m = />/g,
          p = />|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,
          $ = /'/g,
          g = /"/g,
          y = /^(?:script|style|textarea)$/i,
          b = function b(t) {
        return function (i) {
          for (var _len = arguments.length, s = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            s[_key - 1] = arguments[_key];
          }

          return {
            _$litType$: t,
            strings: i,
            values: s
          };
        };
      },
          T = b(1),
          w = Symbol.for("lit-noChange"),
          A = Symbol.for("lit-nothing"),
          P = new WeakMap(),
          V = function V(t, i, s) {
        var e, o;
        var l = null !== (e = null == s ? void 0 : s.renderBefore) && void 0 !== e ? e : i;
        var n = l._$litPart$;

        if (void 0 === n) {
          var _t = null !== (o = null == s ? void 0 : s.renderBefore) && void 0 !== o ? o : null;

          l._$litPart$ = n = new C(i.insertBefore(c(), _t), _t, void 0, s);
        }

        return n.I(t), n;
      },
          E = _u.createTreeWalker(_u, 129, null, !1),
          M = function M(t, i) {
        var s = t.length - 1,
            e = [];
        var o,
            h = 2 === i ? "<svg>" : "",
            u = f;

        for (var _i = 0; _i < s; _i++) {
          var _s = t[_i];

          var _l = void 0,
              _c = void 0,
              _d = -1,
              _v = 0;

          for (; _v < _s.length && (u.lastIndex = _v, _c = u.exec(_s), null !== _c);) {
            _v = u.lastIndex, u === f ? "!--" === _c[1] ? u = _ : void 0 !== _c[1] ? u = m : void 0 !== _c[2] ? (y.test(_c[2]) && (o = RegExp("</" + _c[2], "g")), u = p) : void 0 !== _c[3] && (u = p) : u === p ? ">" === _c[0] ? (u = null != o ? o : f, _d = -1) : void 0 === _c[1] ? _d = -2 : (_d = u.lastIndex - _c[2].length, _l = _c[1], u = void 0 === _c[3] ? p : '"' === _c[3] ? g : $) : u === g || u === $ ? u = p : u === _ || u === m ? u = f : (u = p, o = void 0);
          }

          var _a = u === p && t[_i + 1].startsWith("/>") ? " " : "";

          h += u === f ? _s + r : _d >= 0 ? (e.push(_l), _s.slice(0, _d) + "$lit$" + _s.slice(_d) + n + _a) : _s + n + (-2 === _d ? (e.push(void 0), _i) : _a);
        }

        var c = h + (t[s] || "<?>") + (2 === i ? "</svg>" : "");
        return [void 0 !== l ? l.createHTML(c) : c, e];
      };

      var N = /*#__PURE__*/function () {
        function N(_ref, s) {
          var t = _ref.strings,
              i = _ref._$litType$;

          _classCallCheck(this, N);

          var e;
          this.parts = [];
          var l = 0,
              r = 0;

          var u = t.length - 1,
              d = this.parts,
              _M = M(t, i),
              _M2 = _slicedToArray(_M, 2),
              v = _M2[0],
              a = _M2[1];

          if (this.el = N.createElement(v, s), E.currentNode = this.el.content, 2 === i) {
            var _t2 = this.el.content,
                _i2 = _t2.firstChild;
            _i2.remove(), _t2.append.apply(_t2, _toConsumableArray(_i2.childNodes));
          }

          for (; null !== (e = E.nextNode()) && d.length < u;) {
            if (1 === e.nodeType) {
              if (e.hasAttributes()) {
                var _t3 = [];

                var _iterator = _createForOfIteratorHelper(e.getAttributeNames()),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var _i5 = _step.value;

                    if (_i5.endsWith("$lit$") || _i5.startsWith(n)) {
                      var _s2 = a[r++];

                      if (_t3.push(_i5), void 0 !== _s2) {
                        var _t5 = e.getAttribute(_s2.toLowerCase() + "$lit$").split(n),
                            _i6 = /([.?@])?(.*)/.exec(_s2);

                        d.push({
                          type: 1,
                          index: l,
                          name: _i6[2],
                          strings: _t5,
                          ctor: "." === _i6[1] ? I : "?" === _i6[1] ? L : "@" === _i6[1] ? R : H
                        });
                      } else d.push({
                        type: 6,
                        index: l
                      });
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                for (var _i3 = 0, _t4 = _t3; _i3 < _t4.length; _i3++) {
                  var _i4 = _t4[_i3];
                  e.removeAttribute(_i4);
                }
              }

              if (y.test(e.tagName)) {
                var _t6 = e.textContent.split(n),
                    _i7 = _t6.length - 1;

                if (_i7 > 0) {
                  e.textContent = o ? o.emptyScript : "";

                  for (var _s3 = 0; _s3 < _i7; _s3++) {
                    e.append(_t6[_s3], c()), E.nextNode(), d.push({
                      type: 2,
                      index: ++l
                    });
                  }

                  e.append(_t6[_i7], c());
                }
              }
            } else if (8 === e.nodeType) if (e.data === h) d.push({
              type: 2,
              index: l
            });else {
              var _t7 = -1;

              for (; -1 !== (_t7 = e.data.indexOf(n, _t7 + 1));) {
                d.push({
                  type: 7,
                  index: l
                }), _t7 += n.length - 1;
              }
            }

            l++;
          }
        }

        _createClass(N, null, [{
          key: "createElement",
          value: function createElement(t, i) {
            var s = _u.createElement("template");

            return s.innerHTML = t, s;
          }
        }]);

        return N;
      }();

      function S(t, i) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : t;
        var e = arguments.length > 3 ? arguments[3] : undefined;
        var o, l, n, h;
        if (i === w) return i;
        var r = void 0 !== e ? null === (o = s.Σi) || void 0 === o ? void 0 : o[e] : s.Σo;
        var u = d(i) ? void 0 : i._$litDirective$;
        return (null == r ? void 0 : r.constructor) !== u && (null === (l = null == r ? void 0 : r.O) || void 0 === l || l.call(r, !1), void 0 === u ? r = void 0 : (r = new u(t), r.T(t, s, e)), void 0 !== e ? (null !== (n = (h = s).Σi) && void 0 !== n ? n : h.Σi = [])[e] = r : s.Σo = r), void 0 !== r && (i = S(t, r.S(t, i.values), r, e)), i;
      }

      var k = /*#__PURE__*/function () {
        function k(t, i) {
          _classCallCheck(this, k);

          this.l = [], this.N = void 0, this.D = t, this.M = i;
        }

        _createClass(k, [{
          key: "u",
          value: function u(t) {
            var i;
            var _this$D = this.D,
                s = _this$D.el.content,
                e = _this$D.parts,
                o = (null !== (i = null == t ? void 0 : t.creationScope) && void 0 !== i ? i : _u).importNode(s, !0);
            E.currentNode = o;
            var l = E.nextNode(),
                n = 0,
                h = 0,
                r = e[0];

            for (; void 0 !== r;) {
              if (n === r.index) {
                var _i8 = void 0;

                2 === r.type ? _i8 = new C(l, l.nextSibling, this, t) : 1 === r.type ? _i8 = new r.ctor(l, r.name, r.strings, this, t) : 6 === r.type && (_i8 = new z(l, this, t)), this.l.push(_i8), r = e[++h];
              }

              n !== (null == r ? void 0 : r.index) && (l = E.nextNode(), n++);
            }

            return o;
          }
        }, {
          key: "v",
          value: function v(t) {
            var i = 0;

            var _iterator2 = _createForOfIteratorHelper(this.l),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _s4 = _step2.value;
                void 0 !== _s4 && (void 0 !== _s4.strings ? (_s4.I(t, _s4, i), i += _s4.strings.length - 2) : _s4.I(t[i])), i++;
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }]);

        return k;
      }();

      var C = /*#__PURE__*/function () {
        function C(t, i, s, e) {
          _classCallCheck(this, C);

          this.type = 2, this.N = void 0, this.A = t, this.B = i, this.M = s, this.options = e;
        }

        _createClass(C, [{
          key: "setConnected",
          value: function setConnected(t) {
            var i;
            null === (i = this.P) || void 0 === i || i.call(this, t);
          }
        }, {
          key: "parentNode",
          get: function get() {
            return this.A.parentNode;
          }
        }, {
          key: "startNode",
          get: function get() {
            return this.A;
          }
        }, {
          key: "endNode",
          get: function get() {
            return this.B;
          }
        }, {
          key: "I",
          value: function I(t) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
            t = S(this, t, i), d(t) ? t === A || null == t || "" === t ? (this.H !== A && this.R(), this.H = A) : t !== this.H && t !== w && this.m(t) : void 0 !== t._$litType$ ? this._(t) : void 0 !== t.nodeType ? this.$(t) : a(t) ? this.g(t) : this.m(t);
          }
        }, {
          key: "k",
          value: function k(t) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.B;
            return this.A.parentNode.insertBefore(t, i);
          }
        }, {
          key: "$",
          value: function $(t) {
            this.H !== t && (this.R(), this.H = this.k(t));
          }
        }, {
          key: "m",
          value: function m(t) {
            var i = this.A.nextSibling;
            null !== i && 3 === i.nodeType && (null === this.B ? null === i.nextSibling : i === this.B.previousSibling) ? i.data = t : this.$(_u.createTextNode(t)), this.H = t;
          }
        }, {
          key: "_",
          value: function _(t) {
            var i;
            var s = t.values,
                e = t._$litType$,
                o = "number" == typeof e ? this.C(t) : (void 0 === e.el && (e.el = N.createElement(e.h, this.options)), e);
            if ((null === (i = this.H) || void 0 === i ? void 0 : i.D) === o) this.H.v(s);else {
              var _t8 = new k(o, this),
                  _i9 = _t8.u(this.options);

              _t8.v(s), this.$(_i9), this.H = _t8;
            }
          }
        }, {
          key: "C",
          value: function C(t) {
            var i = P.get(t.strings);
            return void 0 === i && P.set(t.strings, i = new N(t)), i;
          }
        }, {
          key: "g",
          value: function g(t) {
            v(this.H) || (this.H = [], this.R());
            var i = this.H;
            var s,
                e = 0;

            var _iterator3 = _createForOfIteratorHelper(t),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _o = _step3.value;
                e === i.length ? i.push(s = new C(this.k(c()), this.k(c()), this, this.options)) : s = i[e], s.I(_o), e++;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            e < i.length && (this.R(s && s.B.nextSibling, e), i.length = e);
          }
        }, {
          key: "R",
          value: function R() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.A.nextSibling;
            var i = arguments.length > 1 ? arguments[1] : undefined;
            var s;

            for (null === (s = this.P) || void 0 === s || s.call(this, !1, !0, i); t && t !== this.B;) {
              var _i10 = t.nextSibling;
              t.remove(), t = _i10;
            }
          }
        }]);

        return C;
      }();

      var H = /*#__PURE__*/function () {
        function H(t, i, s, e, o) {
          _classCallCheck(this, H);

          this.type = 1, this.H = A, this.N = void 0, this.V = void 0, this.element = t, this.name = i, this.M = e, this.options = o, s.length > 2 || "" !== s[0] || "" !== s[1] ? (this.H = Array(s.length - 1).fill(A), this.strings = s) : this.H = A;
        }

        _createClass(H, [{
          key: "tagName",
          get: function get() {
            return this.element.tagName;
          }
        }, {
          key: "I",
          value: function I(t) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
            var s = arguments.length > 2 ? arguments[2] : undefined;
            var e = arguments.length > 3 ? arguments[3] : undefined;
            var o = this.strings;
            var l = !1;
            if (void 0 === o) t = S(this, t, i, 0), l = !d(t) || t !== this.H && t !== w, l && (this.H = t);else {
              var _e = t;

              var _n, _h;

              for (t = o[0], _n = 0; _n < o.length - 1; _n++) {
                _h = S(this, _e[s + _n], i, _n), _h === w && (_h = this.H[_n]), l || (l = !d(_h) || _h !== this.H[_n]), _h === A ? t = A : t !== A && (t += (null != _h ? _h : "") + o[_n + 1]), this.H[_n] = _h;
              }
            }
            l && !e && this.W(t);
          }
        }, {
          key: "W",
          value: function W(t) {
            t === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, null != t ? t : "");
          }
        }]);

        return H;
      }();

      var I = /*#__PURE__*/function (_H) {
        _inherits(I, _H);

        var _super = _createSuper(I);

        function I() {
          var _this;

          _classCallCheck(this, I);

          _this = _super.apply(this, arguments), _this.type = 3;
          return _this;
        }

        _createClass(I, [{
          key: "W",
          value: function W(t) {
            this.element[this.name] = t === A ? void 0 : t;
          }
        }]);

        return I;
      }(H);

      var L = /*#__PURE__*/function (_H2) {
        _inherits(L, _H2);

        var _super2 = _createSuper(L);

        function L() {
          var _this2;

          _classCallCheck(this, L);

          _this2 = _super2.apply(this, arguments), _this2.type = 4;
          return _this2;
        }

        _createClass(L, [{
          key: "W",
          value: function W(t) {
            t && t !== A ? this.element.setAttribute(this.name, "") : this.element.removeAttribute(this.name);
          }
        }]);

        return L;
      }(H);

      var R = /*#__PURE__*/function (_H3) {
        _inherits(R, _H3);

        var _super3 = _createSuper(R);

        function R() {
          var _this3;

          _classCallCheck(this, R);

          _this3 = _super3.apply(this, arguments), _this3.type = 5;
          return _this3;
        }

        _createClass(R, [{
          key: "I",
          value: function I(t) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this;
            var s;
            if ((t = null !== (s = S(this, t, i, 0)) && void 0 !== s ? s : A) === w) return;
            var e = this.H,
                o = t === A && e !== A || t.capture !== e.capture || t.once !== e.once || t.passive !== e.passive,
                l = t !== A && (e === A || o);
            o && this.element.removeEventListener(this.name, this, e), l && this.element.addEventListener(this.name, this, t), this.H = t;
          }
        }, {
          key: "handleEvent",
          value: function handleEvent(t) {
            var i, s;
            "function" == typeof this.H ? this.H.call(null !== (s = null === (i = this.options) || void 0 === i ? void 0 : i.host) && void 0 !== s ? s : this.element, t) : this.H.handleEvent(t);
          }
        }]);

        return R;
      }(H);

      var z = /*#__PURE__*/function () {
        function z(t, i, s) {
          _classCallCheck(this, z);

          this.element = t, this.type = 6, this.N = void 0, this.V = void 0, this.M = i, this.options = s;
        }

        _createClass(z, [{
          key: "I",
          value: function I(t) {
            S(this, t);
          }
        }]);

        return z;
      }();

      var Z = {
        Z: "$lit$",
        U: n,
        Y: h,
        q: 1,
        X: M,
        tt: k,
        it: a,
        st: S,
        et: C,
        ot: H,
        nt: L,
        rt: R,
        lt: I,
        ht: z
      };
      null === (i = (t = globalThis).litHtmlPlatformSupport) || void 0 === i || i.call(t, N, C), (null !== (s = (e = globalThis).litHtmlVersions) && void 0 !== s ? s : e.litHtmlVersions = []).push("2.0.0-rc.2");

      /**
       * @license
       * Copyright 2019 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
      var t$1 = window.ShadowRoot && (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
          e$1 = Symbol();

      var n$1 = /*#__PURE__*/function () {
        function n(t, _n) {
          _classCallCheck(this, n);

          if (_n !== e$1) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
          this.cssText = t;
        }

        _createClass(n, [{
          key: "styleSheet",
          get: function get() {
            return t$1 && void 0 === this.t && (this.t = new CSSStyleSheet(), this.t.replaceSync(this.cssText)), this.t;
          }
        }, {
          key: "toString",
          value: function toString() {
            return this.cssText;
          }
        }]);

        return n;
      }();

      var s$1 = function s(t) {
        return new n$1(t + "", e$1);
      },
          i$1 = function i(e, n) {
        t$1 ? e.adoptedStyleSheets = n.map(function (t) {
          return t instanceof CSSStyleSheet ? t : t.styleSheet;
        }) : n.forEach(function (t) {
          var n = document.createElement("style");
          n.textContent = t.cssText, e.appendChild(n);
        });
      },
          S$1 = t$1 ? function (t) {
        return t;
      } : function (t) {
        return t instanceof CSSStyleSheet ? function (t) {
          var e = "";

          var _iterator = _createForOfIteratorHelper(t.cssRules),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _n2 = _step.value;
              e += _n2.cssText;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return s$1(e);
        }(t) : t;
      };

      /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */

      var s$2, e$2, h$1, r$1;

      var o$1 = {
        toAttribute: function toAttribute(t, i) {
          switch (i) {
            case Boolean:
              t = t ? "" : null;
              break;

            case Object:
            case Array:
              t = null == t ? t : JSON.stringify(t);
          }

          return t;
        },
        fromAttribute: function fromAttribute(t, i) {
          var s = t;

          switch (i) {
            case Boolean:
              s = null !== t;
              break;

            case Number:
              s = null === t ? null : Number(t);
              break;

            case Object:
            case Array:
              try {
                s = JSON.parse(t);
              } catch (t) {
                s = null;
              }

          }

          return s;
        }
      },
          n$2 = function n(t, i) {
        return i !== t && (i == i || t == t);
      },
          l$1 = {
        attribute: !0,
        type: String,
        converter: o$1,
        reflect: !1,
        hasChanged: n$2
      };

      var a$1 = /*#__PURE__*/function (_HTMLElement) {
        _inherits(a, _HTMLElement);

        var _super = _createSuper(a);

        function a() {
          var _this;

          _classCallCheck(this, a);

          _this = _super.call(this), _this.Πi = new Map(), _this.Πo = void 0, _this.Πl = void 0, _this.isUpdatePending = !1, _this.hasUpdated = !1, _this.Πh = null, _this.u();
          return _this;
        }

        _createClass(a, [{
          key: "u",
          value: function u() {
            var _this2 = this;

            var t;
            this.Πg = new Promise(function (t) {
              return _this2.enableUpdating = t;
            }), this.L = new Map(), this.Π_(), this.requestUpdate(), null === (t = this.constructor.v) || void 0 === t || t.forEach(function (t) {
              return t(_this2);
            });
          }
        }, {
          key: "addController",
          value: function addController(t) {
            var i, s;
            (null !== (i = this.ΠU) && void 0 !== i ? i : this.ΠU = []).push(t), void 0 !== this.renderRoot && this.isConnected && (null === (s = t.hostConnected) || void 0 === s || s.call(t));
          }
        }, {
          key: "removeController",
          value: function removeController(t) {
            var i;
            null === (i = this.ΠU) || void 0 === i || i.splice(this.ΠU.indexOf(t) >>> 0, 1);
          }
        }, {
          key: "\u03A0_",
          value: function Π_() {
            var _this3 = this;

            this.constructor.elementProperties.forEach(function (t, i) {
              _this3.hasOwnProperty(i) && (_this3.Πi.set(i, _this3[i]), delete _this3[i]);
            });
          }
        }, {
          key: "createRenderRoot",
          value: function createRenderRoot() {
            var t;
            var s = null !== (t = this.shadowRoot) && void 0 !== t ? t : this.attachShadow(this.constructor.shadowRootOptions);
            return i$1(s, this.constructor.elementStyles), s;
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            var t;
            void 0 === this.renderRoot && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), null === (t = this.ΠU) || void 0 === t || t.forEach(function (t) {
              var i;
              return null === (i = t.hostConnected) || void 0 === i ? void 0 : i.call(t);
            }), this.Πl && (this.Πl(), this.Πo = this.Πl = void 0);
          }
        }, {
          key: "enableUpdating",
          value: function enableUpdating(t) {}
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            var _this4 = this;

            var t;
            null === (t = this.ΠU) || void 0 === t || t.forEach(function (t) {
              var i;
              return null === (i = t.hostDisconnected) || void 0 === i ? void 0 : i.call(t);
            }), this.Πo = new Promise(function (t) {
              return _this4.Πl = t;
            });
          }
        }, {
          key: "attributeChangedCallback",
          value: function attributeChangedCallback(t, i, s) {
            this.K(t, s);
          }
        }, {
          key: "\u03A0j",
          value: function Πj(t, i) {
            var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : l$1;
            var e, h;
            var r = this.constructor.Πp(t, s);

            if (void 0 !== r && !0 === s.reflect) {
              var _n = (null !== (h = null === (e = s.converter) || void 0 === e ? void 0 : e.toAttribute) && void 0 !== h ? h : o$1.toAttribute)(i, s.type);

              this.Πh = t, null == _n ? this.removeAttribute(r) : this.setAttribute(r, _n), this.Πh = null;
            }
          }
        }, {
          key: "K",
          value: function K(t, i) {
            var s, e, h;
            var r = this.constructor,
                n = r.Πm.get(t);

            if (void 0 !== n && this.Πh !== n) {
              var _t = r.getPropertyOptions(n),
                  _l = _t.converter,
                  _a2 = null !== (h = null !== (e = null === (s = _l) || void 0 === s ? void 0 : s.fromAttribute) && void 0 !== e ? e : "function" == typeof _l ? _l : null) && void 0 !== h ? h : o$1.fromAttribute;

              this.Πh = n, this[n] = _a2(i, _t.type), this.Πh = null;
            }
          }
        }, {
          key: "requestUpdate",
          value: function requestUpdate(t, i, s) {
            var e = !0;
            void 0 !== t && (((s = s || this.constructor.getPropertyOptions(t)).hasChanged || n$2)(this[t], i) ? (this.L.has(t) || this.L.set(t, i), !0 === s.reflect && this.Πh !== t && (void 0 === this.Πk && (this.Πk = new Map()), this.Πk.set(t, s))) : e = !1), !this.isUpdatePending && e && (this.Πg = this.Πq());
          }
        }, {
          key: "\u03A0q",
          value: function () {
            var _Πq = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var t;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.isUpdatePending = !0;
                      _context.prev = 1;
                      _context.next = 4;
                      return this.Πg;

                    case 4:
                      if (!this.Πo) {
                        _context.next = 9;
                        break;
                      }

                      _context.next = 7;
                      return this.Πo;

                    case 7:
                      _context.next = 4;
                      break;

                    case 9:
                      _context.next = 14;
                      break;

                    case 11:
                      _context.prev = 11;
                      _context.t0 = _context["catch"](1);
                      Promise.reject(_context.t0);

                    case 14:
                      t = this.performUpdate();
                      _context.t1 = null != t;

                      if (!_context.t1) {
                        _context.next = 19;
                        break;
                      }

                      _context.next = 19;
                      return t;

                    case 19:
                      return _context.abrupt("return", !this.isUpdatePending);

                    case 20:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this, [[1, 11]]);
            }));

            function Πq() {
              return _Πq.apply(this, arguments);
            }

            return Πq;
          }()
        }, {
          key: "performUpdate",
          value: function performUpdate() {
            var _this5 = this;

            var t;
            if (!this.isUpdatePending) return;
            this.hasUpdated, this.Πi && (this.Πi.forEach(function (t, i) {
              return _this5[i] = t;
            }), this.Πi = void 0);
            var i = !1;
            var s = this.L;

            try {
              i = this.shouldUpdate(s), i ? (this.willUpdate(s), null === (t = this.ΠU) || void 0 === t || t.forEach(function (t) {
                var i;
                return null === (i = t.hostUpdate) || void 0 === i ? void 0 : i.call(t);
              }), this.update(s)) : this.Π$();
            } catch (t) {
              throw i = !1, this.Π$(), t;
            }

            i && this.E(s);
          }
        }, {
          key: "willUpdate",
          value: function willUpdate(t) {}
        }, {
          key: "E",
          value: function E(t) {
            var i;
            null === (i = this.ΠU) || void 0 === i || i.forEach(function (t) {
              var i;
              return null === (i = t.hostUpdated) || void 0 === i ? void 0 : i.call(t);
            }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
          }
        }, {
          key: "\u03A0$",
          value: function Π$() {
            this.L = new Map(), this.isUpdatePending = !1;
          }
        }, {
          key: "updateComplete",
          get: function get() {
            return this.getUpdateComplete();
          }
        }, {
          key: "getUpdateComplete",
          value: function getUpdateComplete() {
            return this.Πg;
          }
        }, {
          key: "shouldUpdate",
          value: function shouldUpdate(t) {
            return !0;
          }
        }, {
          key: "update",
          value: function update(t) {
            var _this6 = this;

            void 0 !== this.Πk && (this.Πk.forEach(function (t, i) {
              return _this6.Πj(i, _this6[i], t);
            }), this.Πk = void 0), this.Π$();
          }
        }, {
          key: "updated",
          value: function updated(t) {}
        }, {
          key: "firstUpdated",
          value: function firstUpdated(t) {}
        }], [{
          key: "addInitializer",
          value: function addInitializer(t) {
            var i;
            null !== (i = this.v) && void 0 !== i || (this.v = []), this.v.push(t);
          }
        }, {
          key: "observedAttributes",
          get: function get() {
            var _this7 = this;

            this.finalize();
            var t = [];
            return this.elementProperties.forEach(function (i, s) {
              var e = _this7.Πp(s, i);

              void 0 !== e && (_this7.Πm.set(e, s), t.push(e));
            }), t;
          }
        }, {
          key: "createProperty",
          value: function createProperty(t) {
            var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : l$1;

            if (i.state && (i.attribute = !1), this.finalize(), this.elementProperties.set(t, i), !i.noAccessor && !this.prototype.hasOwnProperty(t)) {
              var _s = "symbol" == _typeof(t) ? Symbol() : "__" + t,
                  _e = this.getPropertyDescriptor(t, _s, i);

              void 0 !== _e && Object.defineProperty(this.prototype, t, _e);
            }
          }
        }, {
          key: "getPropertyDescriptor",
          value: function getPropertyDescriptor(t, i, s) {
            return {
              get: function get() {
                return this[i];
              },
              set: function set(e) {
                var h = this[t];
                this[i] = e, this.requestUpdate(t, h, s);
              },
              configurable: !0,
              enumerable: !0
            };
          }
        }, {
          key: "getPropertyOptions",
          value: function getPropertyOptions(t) {
            return this.elementProperties.get(t) || l$1;
          }
        }, {
          key: "finalize",
          value: function finalize() {
            if (this.hasOwnProperty("finalized")) return !1;
            this.finalized = !0;
            var t = Object.getPrototypeOf(this);

            if (t.finalize(), this.elementProperties = new Map(t.elementProperties), this.Πm = new Map(), this.hasOwnProperty("properties")) {
              var _t2 = this.properties,
                  _i = [].concat(_toConsumableArray(Object.getOwnPropertyNames(_t2)), _toConsumableArray(Object.getOwnPropertySymbols(_t2)));

              var _iterator = _createForOfIteratorHelper(_i),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var _s2 = _step.value;
                  this.createProperty(_s2, _t2[_s2]);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }

            return this.elementStyles = this.finalizeStyles(this.styles), !0;
          }
        }, {
          key: "finalizeStyles",
          value: function finalizeStyles(i) {
            var s = [];

            if (Array.isArray(i)) {
              var _e2 = new Set(i.flat(1 / 0).reverse());

              var _iterator2 = _createForOfIteratorHelper(_e2),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _i2 = _step2.value;
                  s.unshift(S$1(_i2));
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            } else void 0 !== i && s.push(S$1(i));

            return s;
          }
        }, {
          key: "\u03A0p",
          value: function Πp(t, i) {
            var s = i.attribute;
            return !1 === s ? void 0 : "string" == typeof s ? s : "string" == typeof t ? t.toLowerCase() : void 0;
          }
        }]);

        return a;
      }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

      a$1.finalized = !0, a$1.shadowRootOptions = {
        mode: "open"
      }, null === (e$2 = (s$2 = globalThis).reactiveElementPlatformSupport) || void 0 === e$2 || e$2.call(s$2, {
        ReactiveElement: a$1
      }), (null !== (h$1 = (r$1 = globalThis).reactiveElementVersions) && void 0 !== h$1 ? h$1 : r$1.reactiveElementVersions = []).push("1.0.0-rc.1");

      /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */

      var i$2, l$2, o$2, s$3, n$3, a$2;
      (null !== (i$2 = (a$2 = globalThis).litElementVersions) && void 0 !== i$2 ? i$2 : a$2.litElementVersions = []).push("3.0.0-rc.1");

      var h$2 = /*#__PURE__*/function (_t) {
        _inherits(h, _t);

        var _super = _createSuper(h);

        function h() {
          var _this;

          _classCallCheck(this, h);

          _this = _super.apply(this, arguments), _this.renderOptions = {
            host: _assertThisInitialized(_this)
          }, _this.Φt = void 0;
          return _this;
        }

        _createClass(h, [{
          key: "createRenderRoot",
          value: function createRenderRoot() {
            var t, e;

            var r = _get(_getPrototypeOf(h.prototype), "createRenderRoot", this).call(this);

            return null !== (t = (e = this.renderOptions).renderBefore) && void 0 !== t || (e.renderBefore = r.firstChild), r;
          }
        }, {
          key: "update",
          value: function update(t) {
            var r = this.render();
            _get(_getPrototypeOf(h.prototype), "update", this).call(this, t), this.Φt = V(r, this.renderRoot, this.renderOptions);
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            var t;
            _get(_getPrototypeOf(h.prototype), "connectedCallback", this).call(this), null === (t = this.Φt) || void 0 === t || t.setConnected(!0);
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            var t;
            _get(_getPrototypeOf(h.prototype), "disconnectedCallback", this).call(this), null === (t = this.Φt) || void 0 === t || t.setConnected(!1);
          }
        }, {
          key: "render",
          value: function render() {
            return w;
          }
        }]);

        return h;
      }(a$1);

      h$2.finalized = !0, h$2._$litElement$ = !0, null === (o$2 = (l$2 = globalThis).litElementHydrateSupport) || void 0 === o$2 || o$2.call(l$2, {
        LitElement: h$2
      }), null === (n$3 = (s$3 = globalThis).litElementPlatformSupport) || void 0 === n$3 || n$3.call(s$3, {
        LitElement: h$2
      });

      /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
      var t$2 = {
        ATTRIBUTE: 1,
        CHILD: 2,
        PROPERTY: 3,
        BOOLEAN_ATTRIBUTE: 4,
        EVENT: 5,
        ELEMENT: 6
      },
          i$3 = function i(t) {
        return function () {
          for (var _len = arguments.length, i = new Array(_len), _key = 0; _key < _len; _key++) {
            i[_key] = arguments[_key];
          }

          return {
            _$litDirective$: t,
            values: i
          };
        };
      };

      var s$4 = /*#__PURE__*/function () {
        function s(t) {
          _classCallCheck(this, s);
        }

        _createClass(s, [{
          key: "T",
          value: function T(t, i, _s) {
            this.Σdt = t, this.M = i, this.Σct = _s;
          }
        }, {
          key: "S",
          value: function S(t, i) {
            return this.update(t, i);
          }
        }, {
          key: "update",
          value: function update(t, i) {
            return this.render.apply(this, _toConsumableArray(i));
          }
        }]);

        return s;
      }();

      /**
       * @license
       * Copyright 2020 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */

      var t$3 = Z.et,
          d$1 = function d(o) {
        return void 0 === o.strings;
      },
          e$3 = function e() {
        return document.createComment("");
      },
          u = function u(o, i, n) {
        var v;
        var l = o.A.parentNode,
            r = void 0 === i ? o.B : i.A;

        if (void 0 === n) {
          var _i = l.insertBefore(e$3(), r),
              _v = l.insertBefore(e$3(), r);

          n = new t$3(_i, _v, o, o.options);
        } else {
          var _t = n.B.nextSibling,
              _i2 = n.M !== o;

          if (_i2 && (null === (v = n.Q) || void 0 === v || v.call(n, o), n.M = o), _t !== r || _i2) {
            var _o = n.A;

            for (; _o !== _t;) {
              var _t2 = _o.nextSibling;
              l.insertBefore(_o, r), _o = _t2;
            }
          }
        }

        return n;
      },
          c$1 = function c(o, t) {
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : o;
        return o.I(t, i), o;
      },
          s$5 = {},
          f$1 = function f(o) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : s$5;
        return o.H = t;
      },
          a$3 = function a(o) {
        return o.H;
      },
          m$1 = function m(o) {
        var t;
        null === (t = o.P) || void 0 === t || t.call(o, !1, !0);
        var i = o.A;
        var n = o.B.nextSibling;

        for (; i !== n;) {
          var _o2 = i.nextSibling;
          i.remove(), i = _o2;
        }
      };

      /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */

      var r$2 = function r(i, t) {
        var s, e;
        var o = i.N;
        if (void 0 === o) return !1;

        var _iterator = _createForOfIteratorHelper(o),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _i = _step.value;
            null === (e = (s = _i).O) || void 0 === e || e.call(s, t, !1), r(_i, t);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return !0;
      },
          o$3 = function o(i) {
        var t, s;

        do {
          if (void 0 === (t = i.M)) break;
          s = t.N, s.delete(i), i = t;
        } while (0 === (null == s ? void 0 : s.size));
      },
          h$3 = function h(i) {
        for (var _t; _t = i.M; i = _t) {
          var _s = _t.N;
          if (void 0 === _s) _t.N = _s = new Set();else if (_s.has(i)) break;
          _s.add(i), d$2(_t);
        }
      };

      function n$4(i) {
        void 0 !== this.N ? (o$3(this), this.M = i, h$3(this)) : this.M = i;
      }

      function l$3(i) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var e = this.H,
            h = this.N;
        if (void 0 !== h && 0 !== h.size) if (t) {
          if (Array.isArray(e)) for (var _i2 = s; _i2 < e.length; _i2++) {
            r$2(e[_i2], !1), o$3(e[_i2]);
          } else null != e && (r$2(e, !1), o$3(e));
        } else r$2(this, i);
      }

      var d$2 = function d(i) {
        var t, e, r, o;
        i.type == t$2.CHILD && (null !== (t = (r = i).P) && void 0 !== t || (r.P = l$3), null !== (e = (o = i).Q) && void 0 !== e || (o.Q = n$4));
      };

      var c$2 = /*#__PURE__*/function (_t2) {
        _inherits(c, _t2);

        var _super = _createSuper(c);

        function c() {
          var _this;

          _classCallCheck(this, c);

          _this = _super.apply(this, arguments), _this.isConnected = !0, _this.ut = w, _this.N = void 0;
          return _this;
        }

        _createClass(c, [{
          key: "T",
          value: function T(i, t, s) {
            _get(_getPrototypeOf(c.prototype), "T", this).call(this, i, t, s), h$3(this);
          }
        }, {
          key: "O",
          value: function O(i) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
            this.at(i), t && (r$2(this, i), o$3(this));
          }
        }, {
          key: "at",
          value: function at(t) {
            var s, e;
            t !== this.isConnected && (t ? (this.isConnected = !0, this.ut !== w && (this.setValue(this.ut), this.ut = w), null === (s = this.reconnected) || void 0 === s || s.call(this)) : (this.isConnected = !1, null === (e = this.disconnected) || void 0 === e || e.call(this)));
          }
        }, {
          key: "S",
          value: function S(i, t) {
            if (!this.isConnected) throw Error("AsyncDirective ".concat(this.constructor.name, " was rendered while its tree was disconnected."));
            return _get(_getPrototypeOf(c.prototype), "S", this).call(this, i, t);
          }
        }, {
          key: "setValue",
          value: function setValue(i) {
            if (this.isConnected) {
              if (d$1(this.Σdt)) this.Σdt.I(i, this);else {
                var _t3 = _toConsumableArray(this.Σdt.H);

                _t3[this.Σct] = i, this.Σdt.I(_t3, this, 0);
              }
            } else this.ut = i;
          }
        }, {
          key: "disconnected",
          value: function disconnected() {}
        }, {
          key: "reconnected",
          value: function reconnected() {}
        }]);

        return c;
      }(s$4);

      /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */

      var u$1 = function u(e, s, t) {
        var r = new Map();

        for (var _l = s; _l <= t; _l++) {
          r.set(e[_l], _l);
        }

        return r;
      },
          c$3 = i$3( /*#__PURE__*/function (_t) {
        _inherits(_class, _t);

        var _super = _createSuper(_class);

        function _class(e) {
          var _this;

          _classCallCheck(this, _class);

          if (_this = _super.call(this, e), e.type !== t$2.CHILD) throw Error("repeat() can only be used in text expressions");
          return _possibleConstructorReturn(_this);
        }

        _createClass(_class, [{
          key: "Mt",
          value: function Mt(e, s, t) {
            var r;
            void 0 === t ? t = s : void 0 !== s && (r = s);
            var l = [],
                o = [];
            var i = 0;

            var _iterator = _createForOfIteratorHelper(e),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _s = _step.value;
                l[i] = r ? r(_s, i) : i, o[i] = t(_s, i), i++;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return {
              values: o,
              keys: l
            };
          }
        }, {
          key: "render",
          value: function render(e, s, t) {
            return this.Mt(e, s, t).values;
          }
        }, {
          key: "update",
          value: function update(s, _ref) {
            var _ref2 = _slicedToArray(_ref, 3),
                t = _ref2[0],
                r = _ref2[1],
                c = _ref2[2];

            var d;

            var p = a$3(s),
                _this$Mt = this.Mt(t, r, c),
                v = _this$Mt.values,
                a = _this$Mt.keys;

            if (!p) return this.Pt = a, v;
            var h = null !== (d = this.Pt) && void 0 !== d ? d : this.Pt = [],
                m = [];
            var x,
                y,
                j = 0,
                k = p.length - 1,
                w$1 = 0,
                b = v.length - 1;

            for (; j <= k && w$1 <= b;) {
              if (null === p[j]) j++;else if (null === p[k]) k--;else if (h[j] === a[w$1]) m[w$1] = c$1(p[j], v[w$1]), j++, w$1++;else if (h[k] === a[b]) m[b] = c$1(p[k], v[b]), k--, b--;else if (h[j] === a[b]) m[b] = c$1(p[j], v[b]), u(s, m[b + 1], p[j]), j++, b--;else if (h[k] === a[w$1]) m[w$1] = c$1(p[k], v[w$1]), u(s, p[j], p[k]), k--, w$1++;else if (void 0 === x && (x = u$1(a, w$1, b), y = u$1(h, j, k)), x.has(h[j])) {
                if (x.has(h[k])) {
                  var _e = y.get(a[w$1]),
                      _t2 = void 0 !== _e ? p[_e] : null;

                  if (null === _t2) {
                    var _e2 = u(s, p[j]);

                    c$1(_e2, v[w$1]), m[w$1] = _e2;
                  } else m[w$1] = c$1(_t2, v[w$1]), u(s, p[j], _t2), p[_e] = null;

                  w$1++;
                } else m$1(p[k]), k--;
              } else m$1(p[j]), j++;
            }

            for (; w$1 <= b;) {
              var _e3 = u(s, m[b + 1]);

              c$1(_e3, v[w$1]), m[w$1++] = _e3;
            }

            for (; j <= k;) {
              var _e4 = p[j++];
              null !== _e4 && m$1(_e4);
            }

            return this.Pt = a, f$1(s, m), w;
          }
        }]);

        return _class;
      }(s$4));

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
                  throw new Error('bad');

                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2["catch"](7);
                  _RO = module.import('./ResizeObserver-50b11edb.js');
                  _context2.next = 17;
                  return _RO;

                case 17:
                  _RO = _context2.sent.default;

                case 18:
                  return _context2.abrupt("return", RO = _RO);

                case 19:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[7, 12]]);
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

      var defaultKeyFunction = function defaultKeyFunction(item) {
        return item;
      };

      var ScrollDirective = /*#__PURE__*/function (_AsyncDirective) {
        _inherits(ScrollDirective, _AsyncDirective);

        var _super = _createSuper(ScrollDirective);

        function ScrollDirective(part) {
          var _this;

          _classCallCheck(this, ScrollDirective);

          _this = _super.call(this, part);
          _this.first = 0;
          _this.last = -1;

          if (part.type !== t$2.CHILD) {
            throw new Error('The scroll directive can only be used in child expressions');
          }

          return _this;
        }

        _createClass(ScrollDirective, [{
          key: "render",
          value: function render(config) {
            if (config) {
              this.renderItem = config.renderItem;
              this.keyFunction = config.keyFunction;
            }

            var itemsToRender = [];

            if (this.first >= 0 && this.last >= this.first) {
              for (var i = this.first; i < this.last + 1; i++) {
                itemsToRender.push(this.items[i]);
              }
            }

            return c$3(itemsToRender, this.keyFunction || defaultKeyFunction, this.renderItem);
          }
        }, {
          key: "update",
          value: function update(part, _ref) {
            var _ref2 = _slicedToArray(_ref, 1),
                config = _ref2[0];

            var _a;

            if (this.scroller || this._initialize(part, config)) {
              var scroller = this.scroller;
              this.items = scroller.items = config.items;
              scroller.totalItems = config.totalItems || ((_a = config.items) === null || _a === void 0 ? void 0 : _a.length) || 0;
              scroller.layout = config.layout;
              scroller.scrollTarget = config.scrollTarget || this.container;

              if (config.scrollToIndex) {
                scroller.scrollToIndex = config.scrollToIndex;
              }

              return this.render(config);
            }

            return A;
          }
        }, {
          key: "_initialize",
          value: function _initialize(part, config) {
            var _this2 = this;

            var container = this.container = part.parentNode;

            if (container && container.nodeType === 1) {
              this.scroller = new VirtualScroller({
                container: container
              });
              container.addEventListener('rangeChanged', function (e) {
                _this2.first = e.detail.first;
                _this2.last = e.detail.last;

                _this2.setValue(_this2.render());
              });
              return true;
            } // TODO (GN): This seems to be needed in the case where the `scroll`
            // directive is used within the `LitVirtualizer` element. Figure out why
            // and see if there's a cleaner solution.


            Promise.resolve().then(function () {
              return _this2.update(part, [config]);
            });
            return false;
          }
        }]);

        return ScrollDirective;
      }(c$2);

      var scroll = i$3(ScrollDirective);

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
                  return module.import('./event-target-shim-7ee5b94f.js');

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
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
      var n$5 = function n(_n) {
        return function (e) {
          return "function" == typeof e ? function (n, e) {
            return window.customElements.define(n, e), e;
          }(_n, e) : function (n, e) {
            var t = e.kind,
                i = e.elements;
            return {
              kind: t,
              elements: i,
              finisher: function finisher(e) {
                window.customElements.define(n, e);
              }
            };
          }(_n, e);
        };
      };

      /**
       * @license
       * Copyright 2017 Google LLC
       * SPDX-License-Identifier: BSD-3-Clause
       */
      var i$4 = function i(_i, e) {
        return "method" === e.kind && e.descriptor && !("value" in e.descriptor) ? _objectSpread2(_objectSpread2({}, e), {}, {
          finisher: function finisher(n) {
            n.createProperty(e.key, _i);
          }
        }) : {
          kind: "field",
          key: Symbol(),
          placement: "own",
          descriptor: {},
          originalKey: e.key,
          initializer: function initializer() {
            "function" == typeof e.initializer && (this[e.key] = e.initializer.call(this));
          },
          finisher: function finisher(n) {
            n.createProperty(e.key, _i);
          }
        };
      };

      function e$4(e) {
        return function (n, t) {
          return void 0 !== t ? function (i, e, n) {
            e.constructor.createProperty(n, i);
          }(e, n, t) : i$4(e, n);
        };
      }

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

        function LitVirtualizer() {
          var _this;

          _classCallCheck(this, LitVirtualizer);

          _this = _super.apply(this, arguments);
          _this.scrollTarget = _assertThisInitialized(_this);
          return _this;
        }

        _createClass(LitVirtualizer, [{
          key: "createRenderRoot",
          value: function createRenderRoot() {
            return this;
          } // get items() {
          //     return this._items;
          // }
          // set items(items) {
          //     this._items = items;
          //     this._scroller.totalItems = items.length;
          // }

          /**
           * The method used for rendering each item.
           */
          // get renderItem() {
          //     return this._renderItem;
          // }
          // set renderItem(renderItem) {
          //     if (renderItem !== this.renderItem) {
          //         this._renderItem = renderItem;
          //         this.requestUpdate();
          //     }
          // }

        }, {
          key: "layout",
          get: function get() {
            return this[scrollerRef].layout;
          }
          /**
           * Scroll to the specified index, placing that item at the given position
           * in the scroll view.
           */
          ,
          set: function set(layout) {
            // TODO (graynorton): Shouldn't have to set this here
            this._layout = layout;
            this.requestUpdate();
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
                      this._scrollToIndex = {
                        index: index,
                        position: position
                      };
                      this.requestUpdate();
                      _context.next = 5;
                      return this.updateComplete;

                    case 5:
                      this._scrollToIndex = null;

                    case 6:
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
                renderItem = this.renderItem,
                keyFunction = this.keyFunction,
                scrollTarget = this.scrollTarget;
            var layout = this._layout;
            return T(_templateObject || (_templateObject = _taggedTemplateLiteral(["", ""])), scroll({
              items: items,
              renderItem: renderItem,
              layout: layout,
              keyFunction: keyFunction,
              scrollTarget: scrollTarget,
              scrollToIndex: this._scrollToIndex
            }));
          }
        }]);

        return LitVirtualizer;
      }(h$2);

      __decorate([e$4()], LitVirtualizer.prototype, "renderItem", void 0);

      __decorate([e$4({
        attribute: false
      })], LitVirtualizer.prototype, "items", void 0);

      __decorate([e$4({
        attribute: false
      })], LitVirtualizer.prototype, "scrollTarget", void 0);

      __decorate([e$4()], LitVirtualizer.prototype, "keyFunction", void 0);

      __decorate([e$4({
        attribute: false
      })], LitVirtualizer.prototype, "layout", null);

      LitVirtualizer = __decorate([n$5('lit-virtualizer')], LitVirtualizer);

      var targetFPS = 60;
      var t$4 = 1000 / targetFPS;
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
            setTimeout(onFrame, t$4);
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
          setTimeout(onFrame, t$4);
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

      var example = function example(contacts) {
        return T(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["<section>", "</section>"])), scroll({
          items: contacts,
          renderItem: function renderItem(_ref) {
            var mediumText = _ref.mediumText;
            return T(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<p>", "</p>"])), mediumText);
          },
          layout: Layout1d,
          scrollTarget: window
        }));
      };

      (function () {
        var _go = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
          var contacts;
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
                  V(example(contacts), document.body);
                  runBenchmarkIfRequested('section');

                case 7:
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
