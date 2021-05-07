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
                  new _RO(function () {});
                  _context2.next = 17;
                  break;

                case 11:
                  _context2.prev = 11;
                  _context2.t0 = _context2["catch"](7);
                  _RO = module.import('./ResizeObserver-05d73b41.js');
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
                  return module.import('./event-target-shim-3fc897ce.js');

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

      /**
       * TODO @straversi: document and test this Layout.
       */

      var Layout1dGrid = /*#__PURE__*/function (_Layout1dBase) {
        _inherits(Layout1dGrid, _Layout1dBase);

        var _super = _createSuper(Layout1dGrid);

        function Layout1dGrid(config) {
          var _this;

          _classCallCheck(this, Layout1dGrid);

          _this = _super.call(this, config);
          _this._rolumns = 1;
          return _this;
        }

        _createClass(Layout1dGrid, [{
          key: "_viewDim2Changed",
          value: function _viewDim2Changed() {
            this._scheduleLayoutUpdate();
          }
        }, {
          key: "_itemDim2Changed",
          value: function _itemDim2Changed() {
            this._scheduleLayoutUpdate();
          }
        }, {
          key: "_getActiveItems",
          value: function _getActiveItems() {
            var min = Math.max(0, this._scrollPosition - this._overhang);
            var max = Math.min(this._scrollSize, this._scrollPosition + this._viewDim1 + this._overhang);
            var firstCow = Math.floor(min / this._delta);
            var lastCow = Math.ceil(max / this._delta) - 1;
            this._first = firstCow * this._rolumns;
            this._last = Math.min((lastCow + 1) * this._rolumns - 1, this._totalItems - 1);
            this._physicalMin = this._delta * firstCow;
            this._physicalMax = this._delta * (lastCow + 1);
          }
        }, {
          key: "_getItemPosition",
          value: function _getItemPosition(idx) {
            var _ref;

            return _ref = {}, _defineProperty(_ref, this._positionDim, this._spacing + Math.floor(idx / this._rolumns) * this._delta), _defineProperty(_ref, this._secondaryPositionDim, this._spacing + idx % this._rolumns * (this._spacing + this._itemDim2)), _ref;
          }
        }, {
          key: "_updateScrollSize",
          value: function _updateScrollSize() {
            this._scrollSize = Math.max(1, Math.ceil(this._totalItems / this._rolumns) * this._delta + this._spacing);
          }
        }]);

        return Layout1dGrid;
      }(Layout1dBase);

      /*! *****************************************************************************
      Copyright (c) Microsoft Corporation. All rights reserved.
      Licensed under the Apache License, Version 2.0 (the "License"); you may not use
      this file except in compliance with the License. You may obtain a copy of the
      License at http://www.apache.org/licenses/LICENSE-2.0

      THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
      KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
      WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
      MERCHANTABLITY OR NON-INFRINGEMENT.

      See the Apache Version 2.0 License for specific language governing permissions
      and limitations under the License.
      ***************************************************************************** */

      /* global Reflect, Promise */
      var _extendStatics = function extendStatics(d, b) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function (d, b) {
          d.__proto__ = b;
        } || function (d, b) {
          for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
          }
        };

        return _extendStatics(d, b);
      };

      function __extends(d, b) {
        _extendStatics(d, b);

        function __() {
          this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      }

      var _assign = function __assign() {
        _assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];

            for (var p in s) {
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
          }

          return t;
        };

        return _assign.apply(this, arguments);
      };
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

      var Layout1dSquareGrid = /*#__PURE__*/function (_Layout1dGrid) {
        _inherits(Layout1dSquareGrid, _Layout1dGrid);

        var _super = _createSuper(Layout1dSquareGrid);

        function Layout1dSquareGrid(config) {
          var _this;

          _classCallCheck(this, Layout1dSquareGrid);

          _this = _super.call(this, config);

          if (config.idealSize === undefined) {
            _this._idealSize = 200;
          }

          return _this;
        }

        _createClass(Layout1dSquareGrid, [{
          key: "idealSize",
          set: function set(px) {
            if (px !== this._idealSize) {
              this._idealSize = px;

              this._scheduleLayoutUpdate();
            }
          }
        }, {
          key: "_getItemPosition",
          value: function _getItemPosition(idx) {
            return Object.assign(_get(_getPrototypeOf(Layout1dSquareGrid.prototype), "_getItemPosition", this).call(this, idx), this._itemSize);
          }
        }, {
          key: "_updateLayout",
          value: function _updateLayout() {
            var frolumns = this._viewDim2 / this._idealSize;
            this._rolumns = frolumns % 1 < 0.5 ? Math.floor(frolumns) : Math.ceil(frolumns);
            var adjSize = (this._viewDim2 - (this._rolumns + 1) * this._spacing) / this._rolumns;

            if (adjSize !== this._itemSize.width) {
              this._itemSize = {
                width: adjSize,
                height: adjSize
              };
              this._spacingChanged = true;
            }
          }
        }]);

        return Layout1dSquareGrid;
      }(Layout1dGrid);

      /**
       * TODO @straversi: document and test this Layout.
       */

      var Layout1dFlex = /*#__PURE__*/function (_Layout1dBase) {
        _inherits(Layout1dFlex, _Layout1dBase);

        var _super = _createSuper(Layout1dFlex);

        function Layout1dFlex() {
          var _this;

          _classCallCheck(this, Layout1dFlex);

          _this = _super.apply(this, arguments);
          _this._itemSizes = [];
          _this._chunks = [];
          _this._aspectRatios = {};
          _this._numberOfAspectRatiosMeasured = 0;
          _this._config = {};
          _this.listenForChildLoadEvents = true;

          _this.measureChildren = function (e, i) {
            return {
              width: i['o_width'] || e.naturalWidth || undefined,
              height: i['o_height'] || e.naturalHeight || undefined
            };
          };

          return _this;
        }

        _createClass(Layout1dFlex, [{
          key: "idealSize",
          get: function get() {
            return this._idealSize;
          },
          set: function set(px) {
            var _px = Number(px);

            if (_px !== this._idealSize) {
              this._idealSize = _px;

              this._scheduleLayoutUpdate();
            }
          }
        }, {
          key: "updateItemSizes",
          value: function updateItemSizes(sizes) {
            var _this2 = this;

            var dirty;
            Object.keys(sizes).forEach(function (key) {
              var chunk = _this2._getChunk(key);

              var dims = sizes[key];
              var prevDims = _this2._itemSizes[key];

              if (dims.width && dims.height) {
                if (!prevDims || prevDims.width !== dims.width || prevDims.height !== dims.height) {
                  chunk._dirty = true;
                  dirty = true;
                  _this2._itemSizes[Number(key)] = sizes[key];

                  _this2._recordAspectRatio(sizes[key]);
                }
              }
            });

            if (dirty) {
              this._scheduleLayoutUpdate();
            }
          }
        }, {
          key: "_newChunk",
          value: function _newChunk() {
            var _ref;

            return _ref = {}, _defineProperty(_ref, '_rolumns', []), _defineProperty(_ref, "_itemPositions", []), _defineProperty(_ref, "_size", 0), _defineProperty(_ref, "_dirty", false), _ref;
          }
        }, {
          key: "_getChunk",
          value: function _getChunk(idx) {
            return this._chunks[Math.floor(Number(idx) / this._chunkSize)] || this._newChunk();
          }
        }, {
          key: "_recordAspectRatio",
          value: function _recordAspectRatio(dims) {
            if (dims.width && dims.height) {
              var bucket = Math.round(dims.width / dims.height * 10) / 10;

              if (this._aspectRatios[bucket]) {
                this._aspectRatios[bucket]++;
              } else {
                this._aspectRatios[bucket] = 1;
              }

              this._numberOfAspectRatiosMeasured++;
            }
          }
        }, {
          key: "_getRandomAspectRatio",
          value: function _getRandomAspectRatio() {
            if (this._numberOfAspectRatiosMeasured === 0) {
              return {
                width: 1,
                height: 1
              };
            }

            var n = Math.random() * this._numberOfAspectRatiosMeasured;

            var buckets = Object.keys(this._aspectRatios);
            var i = -1,
                m = 0;

            while (m < n && i < buckets.length) {
              m += this._aspectRatios[buckets[++i]];
            }

            return {
              width: Number(buckets[i]),
              height: 1
            };
          }
        }, {
          key: "_viewDim2Changed",
          value: function _viewDim2Changed() {
            this._scheduleLayoutUpdate();
          }
        }, {
          key: "_getActiveItems",
          value: function _getActiveItems() {
            var chunk = this._getChunk(0);

            if (chunk._rolumns.length === 0) return;
            var scrollPos = Math.max(0, Math.min(this._scrollPosition, this._scrollSize - this._viewDim1));
            var min = Math.max(0, scrollPos - this._overhang);
            var max = Math.min(this._scrollSize, scrollPos + this._viewDim1 + this._overhang);
            var mid = (min + max) / 2;
            var estMidRolumn = Math.round(mid / this._scrollSize * chunk._rolumns.length);
            var idx = estMidRolumn;

            while (chunk._rolumns[idx]._startPos < min) {
              idx++;
            }

            while (chunk._rolumns[idx]._startPos > min) {
              idx--;
            }

            this._first = chunk._rolumns[idx]._startIdx;
            this._physicalMin = chunk._rolumns[idx]._startPos;
            var rolumnMax;

            while ((rolumnMax = chunk._rolumns[idx]._startPos + chunk._rolumns[idx]._size + this._spacing * 2) < max) {
              idx++;
            }

            this._last = chunk._rolumns[idx]._endIdx;
            this._physicalMax = rolumnMax;
          }
        }, {
          key: "_getItemPosition",
          value: function _getItemPosition(idx) {
            var chunk = this._getChunk(0);

            return chunk._itemPositions[idx];
          }
        }, {
          key: "_getItemSize",
          value: function _getItemSize(idx) {
            var chunk = this._getChunk(0);

            var _chunk$_itemPositions = chunk._itemPositions[idx],
                width = _chunk$_itemPositions.width,
                height = _chunk$_itemPositions.height;
            return {
              width: width,
              height: height
            };
          }
        }, {
          key: "_getNaturalItemDims",
          value: function _getNaturalItemDims(idx) {
            var itemDims = this._itemSizes[idx];

            if (itemDims === undefined || itemDims.width === undefined || itemDims.height === undefined) {
              itemDims = this._getRandomAspectRatio();
            }

            return itemDims;
          }
        }, {
          key: "_layOutChunk",
          value: function _layOutChunk(startIdx) {
            var _this3 = this;

            var chunk = this._newChunk();

            var startPos = this._spacing;
            var idx = 0;
            var rolumnSize2 = 0;
            var lastRatio = Infinity;

            var finishRolumn = function finishRolumn(lastIdx) {
              var rolumn = {
                _startIdx: startIdx,
                _endIdx: lastIdx,
                _startPos: startPos - _this3._spacing,
                _size: 0
              };

              chunk._rolumns.push(rolumn);

              var itemStartPos = _this3._spacing;

              for (var i = startIdx; i <= lastIdx; i++) {
                var pos = chunk._itemPositions[i];
                pos.width = pos.width * lastRatio;
                pos.height = pos.height * lastRatio;
                pos.left = _this3._positionDim === 'left' ? startPos : itemStartPos;
                pos.top = _this3._positionDim === 'top' ? startPos : itemStartPos;
                itemStartPos += pos[_this3._secondarySizeDim] + _this3._spacing;
              }

              rolumn._size = chunk._itemPositions[lastIdx][_this3._sizeDim];
            };

            while (idx < this._chunkSize) {
              var itemDims = this._getNaturalItemDims(idx);

              var availableSpace = this._viewDim2 - this._spacing * (idx - startIdx + 2);
              var itemSize = itemDims[this._sizeDim];
              var itemSize2 = itemDims[this._secondarySizeDim];
              var idealScaleFactor = this._idealSize / itemSize;
              var adjItemSize = idealScaleFactor * itemSize;
              var adjItemSize2 = idealScaleFactor * itemSize2;
              chunk._itemPositions[idx] = {
                left: 0,
                top: 0,
                width: this._sizeDim === 'width' ? adjItemSize : adjItemSize2,
                height: this._sizeDim === 'height' ? adjItemSize : adjItemSize2
              };
              var ratio = availableSpace / (rolumnSize2 + adjItemSize2);

              if (Math.abs(1 - ratio) > Math.abs(1 - lastRatio)) {
                // rolumn is better without adding this item
                finishRolumn(idx - 1);
                startIdx = idx;
                startPos += this._idealSize * lastRatio + this._spacing;
                lastRatio = (this._viewDim2 - 2 * this._spacing) / adjItemSize2;
                rolumnSize2 = adjItemSize2;
              } else {
                // add this item and continue
                rolumnSize2 += adjItemSize2;
                lastRatio = ratio;
              }

              if (idx === this._chunkSize - 1) {
                finishRolumn(idx);
              }

              idx++;
            }

            var lastRolumn = chunk._rolumns[chunk._rolumns.length - 1];
            chunk._size = lastRolumn._startPos + lastRolumn._size;
            return chunk;
          }
        }, {
          key: "_updateLayout",
          value: function _updateLayout() {
            if (
            /*this._rolumnStartIdx === undefined ||*/
            this._viewDim2 === 0) return;
            this._chunkSize = Math.ceil(2 * (this._viewDim1 * this._viewDim2) / (this._idealSize * this._idealSize));
            console.log('chunkSize', this._chunkSize); // TODO: An odd place to do this, need to think through the logistics of getting size info to the layout
            // in all cases
            // this._itemSizes.length = 100;//this._totalItems;

            this._chunks[0] = this._layOutChunk(0); // TODO (graynorton): This is a hack to force reflow

            this._spacingChanged = true;
          }
        }, {
          key: "_updateScrollSize",
          value: function _updateScrollSize() {
            var chunk = this._chunks[0];
            this._scrollSize = !chunk || chunk._rolumns.length === 0 ? 1 : chunk._size + 2 * this._spacing; // chunk._rolumns[chunk._rolumns.length - 1]._startPos +
            // chunk._itemPositions[chunk._rolumns.length - 1][this._sizeDim] +
            // (this._spacing * 2);
          }
        }]);

        return Layout1dFlex;
      }(Layout1dBase);
      Layout1dFlex._defaultConfig = {
        direction: 'vertical',
        spacing: 0,
        idealSize: 200
      };

      /**
       * MIT license
       */
      // Callback index.
      var count = 0;
      /**
       * JSONP handler
       *
       * Options:
       * - prefix {String} callback prefix (defaults to `__jp`)
       * - param {String} qs parameter (defaults to `callback`)
       * - timeout {Number} how long after the request until a timeout error
       *   is emitted (defaults to `15000`)
       *
       * @param {String} url
       * @param {Object} options optional options
       * @return {Object} Returns a response promise and a cancel handler.
       */

      function jsonp(url, options) {
        options = options || {};
        var prefix = options.prefix || '__jp';
        var param = options.param || 'callback';
        var timeout = options.timeout ? options.timeout : 15000;
        var target = document.getElementsByTagName('script')[0] || document.head;
        var script;
        var timer;
        var cleanup;
        var cancel;
        var promise;

        var noop = function noop() {}; // Generate a unique id for the request.


        var id = prefix + count++;

        cleanup = function cleanup() {
          // Remove the script tag.
          if (script && script.parentNode) {
            script.parentNode.removeChild(script);
          }

          window[id] = noop;

          if (timer) {
            clearTimeout(timer);
          }
        };

        promise = new Promise(function (resolve, reject) {
          if (timeout) {
            timer = setTimeout(function () {
              cleanup();
              reject(new Error('Timeout'));
            }, timeout);
          }

          window[id] = function (data) {
            cleanup();
            resolve(data);
          }; // Add querystring component


          url += (~url.indexOf('?') ? '&' : '?') + param + '=' + encodeURIComponent(id);
          url = url.replace('?&', '?'); // Create script.

          script = document.createElement('script');
          script.src = url;
          target.parentNode.insertBefore(script, target);

          cancel = function cancel() {
            if (window[id]) {
              cleanup();
              reject(new Error('Canceled'));
            }
          };
        });
        return {
          promise: promise,
          cancel: cancel
        };
      }

      var apiKey = '241fe87a3ad5e19014a2ed498f4afcb5';
      function searchFlickr(_x) {
        return _searchFlickr.apply(this, arguments);
      }

      function _searchFlickr() {
        _searchFlickr = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query) {
          var pageSize,
              pageNum,
              mock,
              _query,
              ret,
              _args = arguments;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  pageSize = _args.length > 1 && _args[1] !== undefined ? _args[1] : 100;
                  pageNum = _args.length > 2 && _args[2] !== undefined ? _args[2] : 1;
                  mock = _args.length > 3 && _args[3] !== undefined ? _args[3] : false;

                  if (!mock) {
                    _context.next = 10;
                    break;
                  }

                  _query = ['fog', 'chocolate'].indexOf(query) !== -1 ? query : 'fog';
                  _context.next = 7;
                  return fetch("./flickr-mock-data-".concat(_query, ".json"));

                case 7:
                  _context.next = 9;
                  return _context.sent.json();

                case 9:
                  return _context.abrupt("return", _context.sent);

                case 10:
                  _context.next = 12;
                  return jsonp("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(apiKey, "&text=").concat(query, "&per_page=").concat(pageSize, "&page=").concat(pageNum, "&sort=interestingness-desc&extras=o_dims%2C+url_o&format=json"), {
                    param: 'jsoncallback'
                  }).promise;

                case 12:
                  ret = _context.sent;
                  return _context.abrupt("return", ret.photos);

                case 14:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));
        return _searchFlickr.apply(this, arguments);
      }
      function getUrl(photo) {
        var farm = photo.farm,
            server = photo.server,
            id = photo.id,
            secret = photo.secret;
        var size = 'm';
        return  "https://farm".concat(farm, ".staticflickr.com/").concat(server, "/").concat(id, "_").concat(secret, "_").concat(size, ".jpg") ;
      }

      function makeProxy(virtualArray) {
        return new Proxy(virtualArray.array, {
          get: function get(target, property, receiver) {
            if (property === 'length') {
              return virtualArray.length;
            }

            var n = Number(property);

            if (!isNaN(n) && Math.round(n) === n) {
              return target[n] || virtualArray.requestFetch(n);
            }

            return target[property];
          }
        });
      }

      var VirtualArray = /*#__PURE__*/function () {
        function VirtualArray(config) {
          _classCallCheck(this, VirtualArray);
          Object.assign(this, config); // {pageSize, fetchPage, placeholder, callback} = config;

          this.length = 10;
          this.array = new Array(this.length);
          this.pages = new Object();
          return makeProxy(this);
        }

        _createClass(VirtualArray, [{
          key: "requestFetch",
          value: function requestFetch(n) {
            var _this = this;

            var pageSize = this.pageSize,
                pages = this.pages,
                array = this.array,
                placeholder = this.placeholder,
                fetchPage = this.fetchPage,
                callback = this.callback;
            var pageNum = Math.ceil((n + 1) / this.pageSize);

            if (!pages[pageNum]) {
              pages[pageNum] = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res, i;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return fetchPage(pageSize, pageNum);

                      case 2:
                        res = _context.sent;

                        if (res.totalItems !== undefined) {
                          _this.length = Number(res.totalItems);
                        }

                        for (i = 0; i < res.items.length; i++) {
                          _this.array[pageSize * (pageNum - 1) + i] = res.items[i];
                        }

                        callback(makeProxy(_this));

                      case 6:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }))();
            }

            return array[n] = placeholder(n);
          }
        }]);

        return VirtualArray;
      }();
      window.VirtualArray = VirtualArray;

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
      // This line will be used in regexes to search for lit-html usage.
      // TODO(justinfagnani): inject version number at build time

      if (typeof window !== 'undefined') {
        (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.4.0');
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
       * A property decorator that converts a class property into a getter that
       * executes a querySelector on the element's renderRoot.
       *
       * @param selector A DOMString containing one or more selectors to match.
       * @param cache An optional boolean which when true performs the DOM query only
       * once and caches the result.
       *
       * See: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
       *
       * @example
       *
       * ```ts
       * class MyElement {
       *   @query('#first')
       *   first;
       *
       *   render() {
       *     return html`
       *       <div id="first"></div>
       *       <div id="second"></div>
       *     `;
       *   }
       * }
       * ```
       * @category Decorator
       */

      function query(selector, cache) {
        return function (protoOrDescriptor, // tslint:disable-next-line:no-any decorator
        name) {
          var descriptor = {
            get: function get() {
              return this.renderRoot.querySelector(selector);
            },
            enumerable: true,
            configurable: true
          };

          if (cache) {
            var prop = name !== undefined ? name : protoOrDescriptor.key;
            var key = _typeof(prop) === 'symbol' ? Symbol() : "__".concat(prop);

            descriptor.get = function () {
              if (this[key] === undefined) {
                this[key] = this.renderRoot.querySelector(selector);
              }

              return this[key];
            };
          }

          return name !== undefined ? legacyQuery(descriptor, protoOrDescriptor, name) : standardQuery(descriptor, protoOrDescriptor);
        };
      } // Note, in the future, we may extend this decorator to support the use case

      var legacyQuery = function legacyQuery(descriptor, proto, name) {
        Object.defineProperty(proto, name, descriptor);
      };

      var standardQuery = function standardQuery(descriptor, element) {
        return {
          kind: 'method',
          placement: 'prototype',
          key: element.key,
          descriptor: descriptor
        };
      };

      var standardEventOptions = function standardEventOptions(options, element) {
        return Object.assign(Object.assign({}, element), {
          finisher: function finisher(clazz) {
            Object.assign(clazz.prototype[element.key], options);
          }
        });
      };

      var legacyEventOptions = // tslint:disable-next-line:no-any legacy decorator
      function legacyEventOptions(options, proto, name) {
        Object.assign(proto[name], options);
      };
      /**
       * Adds event listener options to a method used as an event listener in a
       * lit-html template.
       *
       * @param options An object that specifies event listener options as accepted by
       * `EventTarget#addEventListener` and `EventTarget#removeEventListener`.
       *
       * Current browsers support the `capture`, `passive`, and `once` options. See:
       * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Parameters
       *
       * @example
       * ```ts
       * class MyElement {
       *   clicked = false;
       *
       *   render() {
       *     return html`
       *       <div @click=${this._onClick}`>
       *         <button></button>
       *       </div>
       *     `;
       *   }
       *
       *   @eventOptions({capture: true})
       *   _onClick(e) {
       *     this.clicked = true;
       *   }
       * }
       * ```
       * @category Decorator
       */


      function eventOptions(options) {
        // Return value typed as any to prevent TypeScript from complaining that
        // standard decorator function signature does not match TypeScript decorator
        // signature
        // TODO(kschaaf): unclear why it was only failing on this decorator and not
        // the others
        return function (protoOrDescriptor, name) {
          return name !== undefined ? legacyEventOptions(options, protoOrDescriptor, name) : standardEventOptions(options, protoOrDescriptor);
        };
      } // x-browser support for matches

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

      var textFromCSSResult = function textFromCSSResult(value) {
        if (value instanceof CSSResult) {
          return value.cssText;
        } else if (typeof value === 'number') {
          return value;
        } else {
          throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(value, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
        }
      };
      /**
       * Template tag which which can be used with LitElement's [[LitElement.styles |
       * `styles`]] property to set element styles. For security reasons, only literal
       * string values may be used. To incorporate non-literal values [[`unsafeCSS`]]
       * may be used inside a template string part.
       */


      var css = function css(strings) {
        for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          values[_key - 1] = arguments[_key];
        }

        var cssText = values.reduce(function (acc, v, idx) {
          return acc + textFromCSSResult(v) + strings[idx + 1];
        }, strings[0]);
        return new CSSResult(cssText, constructionToken);
      };

      // This line will be used in regexes to search for LitElement usage.
      // TODO(justinfagnani): inject version number at build time

      (window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.5.0');
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

      /**
       * @license
       * Copyright 2016 Google Inc. All rights reserved.
       *
       * Licensed under the Apache License, Version 2.0 (the "License");
       * you may not use this file except in compliance with the License.
       * You may obtain a copy of the License at
       *
       *     http://www.apache.org/licenses/LICENSE-2.0
       *
       * Unless required by applicable law or agreed to in writing, software
       * distributed under the License is distributed on an "AS IS" BASIS,
       * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
       * See the License for the specific language governing permissions and
       * limitations under the License.
       */
      (function () {
        var _a, _b, _c;
        /* Symbols for private properties */


        var _blockingElements = Symbol();

        var _alreadyInertElements = Symbol();

        var _topElParents = Symbol();

        var _siblingsToRestore = Symbol();

        var _parentMO = Symbol();
        /* Symbols for private static methods */


        var _topChanged = Symbol();

        var _swapInertedSibling = Symbol();

        var _inertSiblings = Symbol();

        var _restoreInertedSiblings = Symbol();

        var _getParents = Symbol();

        var _getDistributedChildren = Symbol();

        var _isInertable = Symbol();

        var _handleMutations = Symbol();

        var BlockingElementsImpl = /*#__PURE__*/function () {
          function BlockingElementsImpl() {
            _classCallCheck(this, BlockingElementsImpl);

            /**
             * The blocking elements.
             */
            this[_a] = [];
            /**
             * Used to keep track of the parents of the top element, from the element
             * itself up to body. When top changes, the old top might have been removed
             * from the document, so we need to memoize the inerted parents' siblings
             * in order to restore their inerteness when top changes.
             */

            this[_b] = [];
            /**
             * Elements that are already inert before the first blocking element is
             * pushed.
             */

            this[_c] = new Set();
          }

          _createClass(BlockingElementsImpl, [{
            key: "destructor",
            value: function destructor() {
              // Restore original inertness.
              this[_restoreInertedSiblings](this[_topElParents]); // Note we don't want to make these properties nullable on the class,
              // since then we'd need non-null casts in many places. Calling a method on
              // a BlockingElements instance after calling destructor will result in an
              // exception.


              var nullable = this;
              nullable[_blockingElements] = null;
              nullable[_topElParents] = null;
              nullable[_alreadyInertElements] = null;
            }
          }, {
            key: "top",
            get: function get() {
              var elems = this[_blockingElements];
              return elems[elems.length - 1] || null;
            }
          }, {
            key: "push",
            value: function push(element) {
              if (!element || element === this.top) {
                return;
              } // Remove it from the stack, we'll bring it to the top.


              this.remove(element);

              this[_topChanged](element);

              this[_blockingElements].push(element);
            }
          }, {
            key: "remove",
            value: function remove(element) {
              var i = this[_blockingElements].indexOf(element);

              if (i === -1) {
                return false;
              }

              this[_blockingElements].splice(i, 1); // Top changed only if the removed element was the top element.


              if (i === this[_blockingElements].length) {
                this[_topChanged](this.top);
              }

              return true;
            }
          }, {
            key: "pop",
            value: function pop() {
              var top = this.top;
              top && this.remove(top);
              return top;
            }
          }, {
            key: "has",
            value: function has(element) {
              return this[_blockingElements].indexOf(element) !== -1;
            }
            /**
             * Sets `inert` to all document elements except the new top element, its
             * parents, and its distributed content.
             */

          }, {
            key: (_a = _blockingElements, _b = _topElParents, _c = _alreadyInertElements, _topChanged),
            value: function value(newTop) {
              var toKeepInert = this[_alreadyInertElements];
              var oldParents = this[_topElParents]; // No new top, reset old top if any.

              if (!newTop) {
                this[_restoreInertedSiblings](oldParents);

                toKeepInert.clear();
                this[_topElParents] = [];
                return;
              }

              var newParents = this[_getParents](newTop); // New top is not contained in the main document!


              if (newParents[newParents.length - 1].parentNode !== document.body) {
                throw Error('Non-connected element cannot be a blocking element');
              } // Cast here because we know we'll call _inertSiblings on newParents
              // below.


              this[_topElParents] = newParents;

              var toSkip = this[_getDistributedChildren](newTop); // No previous top element.


              if (!oldParents.length) {
                this[_inertSiblings](newParents, toSkip, toKeepInert);

                return;
              }

              var i = oldParents.length - 1;
              var j = newParents.length - 1; // Find common parent. Index 0 is the element itself (so stop before it).

              while (i > 0 && j > 0 && oldParents[i] === newParents[j]) {
                i--;
                j--;
              } // If up the parents tree there are 2 elements that are siblings, swap
              // the inerted sibling.


              if (oldParents[i] !== newParents[j]) {
                this[_swapInertedSibling](oldParents[i], newParents[j]);
              } // Restore old parents siblings inertness.


              i > 0 && this[_restoreInertedSiblings](oldParents.slice(0, i)); // Make new parents siblings inert.

              j > 0 && this[_inertSiblings](newParents.slice(0, j), toSkip, null);
            }
            /**
             * Swaps inertness between two sibling elements.
             * Sets the property `inert` over the attribute since the inert spec
             * doesn't specify if it should be reflected.
             * https://html.spec.whatwg.org/multipage/interaction.html#inert
             */

          }, {
            key: _swapInertedSibling,
            value: function value(oldInert, newInert) {
              var siblingsToRestore = oldInert[_siblingsToRestore]; // oldInert is not contained in siblings to restore, so we have to check
              // if it's inertable and if already inert.

              if (this[_isInertable](oldInert) && !oldInert.inert) {
                oldInert.inert = true;
                siblingsToRestore.add(oldInert);
              } // If newInert was already between the siblings to restore, it means it is
              // inertable and must be restored.


              if (siblingsToRestore.has(newInert)) {
                newInert.inert = false;
                siblingsToRestore.delete(newInert);
              }

              newInert[_parentMO] = oldInert[_parentMO];
              newInert[_siblingsToRestore] = siblingsToRestore;
              oldInert[_parentMO] = undefined;
              oldInert[_siblingsToRestore] = undefined;
            }
            /**
             * Restores original inertness to the siblings of the elements.
             * Sets the property `inert` over the attribute since the inert spec
             * doesn't specify if it should be reflected.
             * https://html.spec.whatwg.org/multipage/interaction.html#inert
             */

          }, {
            key: _restoreInertedSiblings,
            value: function value(elements) {
              var _iterator = _createForOfIteratorHelper(elements),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var element = _step.value;
                  var mo = element[_parentMO];
                  mo.disconnect();
                  element[_parentMO] = undefined;
                  var siblings = element[_siblingsToRestore];

                  var _iterator2 = _createForOfIteratorHelper(siblings),
                      _step2;

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      var sibling = _step2.value;
                      sibling.inert = false;
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }

                  element[_siblingsToRestore] = undefined;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
            /**
             * Inerts the siblings of the elements except the elements to skip. Stores
             * the inerted siblings into the element's symbol `_siblingsToRestore`.
             * Pass `toKeepInert` to collect the already inert elements.
             * Sets the property `inert` over the attribute since the inert spec
             * doesn't specify if it should be reflected.
             * https://html.spec.whatwg.org/multipage/interaction.html#inert
             */

          }, {
            key: _inertSiblings,
            value: function value(elements, toSkip, toKeepInert) {
              var _iterator3 = _createForOfIteratorHelper(elements),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var element = _step3.value;
                  // Assume element is not a Document, so it must have a parentNode.
                  var parent = element.parentNode;
                  var children = parent.children;
                  var inertedSiblings = new Set();

                  for (var j = 0; j < children.length; j++) {
                    var sibling = children[j]; // Skip the input element, if not inertable or to be skipped.

                    if (sibling === element || !this[_isInertable](sibling) || toSkip && toSkip.has(sibling)) {
                      continue;
                    } // Should be collected since already inerted.


                    if (toKeepInert && sibling.inert) {
                      toKeepInert.add(sibling);
                    } else {
                      sibling.inert = true;
                      inertedSiblings.add(sibling);
                    }
                  } // Store the siblings that were inerted.


                  element[_siblingsToRestore] = inertedSiblings; // Observe only immediate children mutations on the parent.

                  var mo = new MutationObserver(this[_handleMutations].bind(this));
                  element[_parentMO] = mo;
                  var parentToObserve = parent; // If we're using the ShadyDOM polyfill, then our parent could be a
                  // shady root, which is an object that acts like a ShadowRoot, but isn't
                  // actually a node in the real DOM. Observe the real DOM parent instead.

                  var maybeShadyRoot = parentToObserve;

                  if (maybeShadyRoot.__shady && maybeShadyRoot.host) {
                    parentToObserve = maybeShadyRoot.host;
                  }

                  mo.observe(parentToObserve, {
                    childList: true
                  });
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
            /**
             * Handles newly added/removed nodes by toggling their inertness.
             * It also checks if the current top Blocking Element has been removed,
             * notifying and removing it.
             */

          }, {
            key: _handleMutations,
            value: function value(mutations) {
              var parents = this[_topElParents];
              var toKeepInert = this[_alreadyInertElements];

              var _iterator4 = _createForOfIteratorHelper(mutations),
                  _step4;

              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var mutation = _step4.value;
                  // If the target is a shadowRoot, get its host as we skip shadowRoots when
                  // computing _topElParents.
                  var target = mutation.target.host || mutation.target;
                  var idx = target === document.body ? parents.length : parents.indexOf(target);
                  var inertedChild = parents[idx - 1];
                  var inertedSiblings = inertedChild[_siblingsToRestore]; // To restore.

                  for (var i = 0; i < mutation.removedNodes.length; i++) {
                    var sibling = mutation.removedNodes[i];

                    if (sibling === inertedChild) {
                      console.info('Detected removal of the top Blocking Element.');
                      this.pop();
                      return;
                    }

                    if (inertedSiblings.has(sibling)) {
                      sibling.inert = false;
                      inertedSiblings.delete(sibling);
                    }
                  } // To inert.


                  for (var _i = 0; _i < mutation.addedNodes.length; _i++) {
                    var _sibling = mutation.addedNodes[_i];

                    if (!this[_isInertable](_sibling)) {
                      continue;
                    }

                    if (toKeepInert && _sibling.inert) {
                      toKeepInert.add(_sibling);
                    } else {
                      _sibling.inert = true;
                      inertedSiblings.add(_sibling);
                    }
                  }
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }
            /**
             * Returns if the element is inertable.
             */

          }, {
            key: _isInertable,
            value: function value(element) {
              return false === /^(style|template|script)$/.test(element.localName);
            }
            /**
             * Returns the list of newParents of an element, starting from element
             * (included) up to `document.body` (excluded).
             */

          }, {
            key: _getParents,
            value: function value(element) {
              var parents = [];
              var current = element; // Stop to body.

              while (current && current !== document.body) {
                // Skip shadow roots.
                if (current.nodeType === Node.ELEMENT_NODE) {
                  parents.push(current);
                } // ShadowDom v1


                if (current.assignedSlot) {
                  // Collect slots from deepest slot to top.
                  while (current = current.assignedSlot) {
                    parents.push(current);
                  } // Continue the search on the top slot.


                  current = parents.pop();
                  continue;
                }

                current = current.parentNode || current.host;
              }

              return parents;
            }
            /**
             * Returns the distributed children of the element's shadow root.
             * Returns null if the element doesn't have a shadow root.
             */

          }, {
            key: _getDistributedChildren,
            value: function value(element) {
              var shadowRoot = element.shadowRoot;

              if (!shadowRoot) {
                return null;
              }

              var result = new Set();
              var i;
              var j;
              var nodes;
              var slots = shadowRoot.querySelectorAll('slot');

              if (slots.length && slots[0].assignedNodes) {
                for (i = 0; i < slots.length; i++) {
                  nodes = slots[i].assignedNodes({
                    flatten: true
                  });

                  for (j = 0; j < nodes.length; j++) {
                    if (nodes[j].nodeType === Node.ELEMENT_NODE) {
                      result.add(nodes[j]);
                    }
                  }
                } // No need to search for <content>.

              }

              return result;
            }
          }]);

          return BlockingElementsImpl;
        }();

        document.$blockingElements = new BlockingElementsImpl();
      })();

      var _createClass$1 = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      function _classCallCheck$1(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      /**
       * This work is licensed under the W3C Software and Document License
       * (http://www.w3.org/Consortium/Legal/2015/copyright-software-and-document).
       */


      (function () {
        // Return early if we're not running inside of the browser.
        if (typeof window === 'undefined') {
          return;
        } // Convenience function for converting NodeLists.

        /** @type {typeof Array.prototype.slice} */


        var slice = Array.prototype.slice;
        /**
         * IE has a non-standard name for "matches".
         * @type {typeof Element.prototype.matches}
         */

        var matches = Element.prototype.matches || Element.prototype.msMatchesSelector;
        /** @type {string} */

        var _focusableElementsString = ['a[href]', 'area[href]', 'input:not([disabled])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'details', 'summary', 'iframe', 'object', 'embed', '[contenteditable]'].join(',');
        /**
         * `InertRoot` manages a single inert subtree, i.e. a DOM subtree whose root element has an `inert`
         * attribute.
         *
         * Its main functions are:
         *
         * - to create and maintain a set of managed `InertNode`s, including when mutations occur in the
         *   subtree. The `makeSubtreeUnfocusable()` method handles collecting `InertNode`s via registering
         *   each focusable node in the subtree with the singleton `InertManager` which manages all known
         *   focusable nodes within inert subtrees. `InertManager` ensures that a single `InertNode`
         *   instance exists for each focusable node which has at least one inert root as an ancestor.
         *
         * - to notify all managed `InertNode`s when this subtree stops being inert (i.e. when the `inert`
         *   attribute is removed from the root node). This is handled in the destructor, which calls the
         *   `deregister` method on `InertManager` for each managed inert node.
         */


        var InertRoot = function () {
          /**
           * @param {!Element} rootElement The Element at the root of the inert subtree.
           * @param {!InertManager} inertManager The global singleton InertManager object.
           */
          function InertRoot(rootElement, inertManager) {
            _classCallCheck$1(this, InertRoot);
            /** @type {!InertManager} */


            this._inertManager = inertManager;
            /** @type {!Element} */

            this._rootElement = rootElement;
            /**
             * @type {!Set<!InertNode>}
             * All managed focusable nodes in this InertRoot's subtree.
             */

            this._managedNodes = new Set(); // Make the subtree hidden from assistive technology

            if (this._rootElement.hasAttribute('aria-hidden')) {
              /** @type {?string} */
              this._savedAriaHidden = this._rootElement.getAttribute('aria-hidden');
            } else {
              this._savedAriaHidden = null;
            }

            this._rootElement.setAttribute('aria-hidden', 'true'); // Make all focusable elements in the subtree unfocusable and add them to _managedNodes


            this._makeSubtreeUnfocusable(this._rootElement); // Watch for:
            // - any additions in the subtree: make them unfocusable too
            // - any removals from the subtree: remove them from this inert root's managed nodes
            // - attribute changes: if `tabindex` is added, or removed from an intrinsically focusable
            //   element, make that node a managed node.


            this._observer = new MutationObserver(this._onMutation.bind(this));

            this._observer.observe(this._rootElement, {
              attributes: true,
              childList: true,
              subtree: true
            });
          }
          /**
           * Call this whenever this object is about to become obsolete.  This unwinds all of the state
           * stored in this object and updates the state of all of the managed nodes.
           */


          _createClass$1(InertRoot, [{
            key: 'destructor',
            value: function destructor() {
              this._observer.disconnect();

              if (this._rootElement) {
                if (this._savedAriaHidden !== null) {
                  this._rootElement.setAttribute('aria-hidden', this._savedAriaHidden);
                } else {
                  this._rootElement.removeAttribute('aria-hidden');
                }
              }

              this._managedNodes.forEach(function (inertNode) {
                this._unmanageNode(inertNode.node);
              }, this); // Note we cast the nulls to the ANY type here because:
              // 1) We want the class properties to be declared as non-null, or else we
              //    need even more casts throughout this code. All bets are off if an
              //    instance has been destroyed and a method is called.
              // 2) We don't want to cast "this", because we want type-aware optimizations
              //    to know which properties we're setting.


              this._observer =
              /** @type {?} */
              null;
              this._rootElement =
              /** @type {?} */
              null;
              this._managedNodes =
              /** @type {?} */
              null;
              this._inertManager =
              /** @type {?} */
              null;
            }
            /**
             * @return {!Set<!InertNode>} A copy of this InertRoot's managed nodes set.
             */

          }, {
            key: '_makeSubtreeUnfocusable',

            /**
             * @param {!Node} startNode
             */
            value: function _makeSubtreeUnfocusable(startNode) {
              var _this2 = this;

              composedTreeWalk(startNode, function (node) {
                return _this2._visitNode(node);
              });
              var activeElement = document.activeElement;

              if (!document.body.contains(startNode)) {
                // startNode may be in shadow DOM, so find its nearest shadowRoot to get the activeElement.
                var node = startNode;
                /** @type {!ShadowRoot|undefined} */

                var root = undefined;

                while (node) {
                  if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                    root =
                    /** @type {!ShadowRoot} */
                    node;
                    break;
                  }

                  node = node.parentNode;
                }

                if (root) {
                  activeElement = root.activeElement;
                }
              }

              if (startNode.contains(activeElement)) {
                activeElement.blur(); // In IE11, if an element is already focused, and then set to tabindex=-1
                // calling blur() will not actually move the focus.
                // To work around this we call focus() on the body instead.

                if (activeElement === document.activeElement) {
                  document.body.focus();
                }
              }
            }
            /**
             * @param {!Node} node
             */

          }, {
            key: '_visitNode',
            value: function _visitNode(node) {
              if (node.nodeType !== Node.ELEMENT_NODE) {
                return;
              }

              var element =
              /** @type {!Element} */
              node; // If a descendant inert root becomes un-inert, its descendants will still be inert because of
              // this inert root, so all of its managed nodes need to be adopted by this InertRoot.

              if (element !== this._rootElement && element.hasAttribute('inert')) {
                this._adoptInertRoot(element);
              }

              if (matches.call(element, _focusableElementsString) || element.hasAttribute('tabindex')) {
                this._manageNode(element);
              }
            }
            /**
             * Register the given node with this InertRoot and with InertManager.
             * @param {!Node} node
             */

          }, {
            key: '_manageNode',
            value: function _manageNode(node) {
              var inertNode = this._inertManager.register(node, this);

              this._managedNodes.add(inertNode);
            }
            /**
             * Unregister the given node with this InertRoot and with InertManager.
             * @param {!Node} node
             */

          }, {
            key: '_unmanageNode',
            value: function _unmanageNode(node) {
              var inertNode = this._inertManager.deregister(node, this);

              if (inertNode) {
                this._managedNodes['delete'](inertNode);
              }
            }
            /**
             * Unregister the entire subtree starting at `startNode`.
             * @param {!Node} startNode
             */

          }, {
            key: '_unmanageSubtree',
            value: function _unmanageSubtree(startNode) {
              var _this3 = this;

              composedTreeWalk(startNode, function (node) {
                return _this3._unmanageNode(node);
              });
            }
            /**
             * If a descendant node is found with an `inert` attribute, adopt its managed nodes.
             * @param {!Element} node
             */

          }, {
            key: '_adoptInertRoot',
            value: function _adoptInertRoot(node) {
              var inertSubroot = this._inertManager.getInertRoot(node); // During initialisation this inert root may not have been registered yet,
              // so register it now if need be.


              if (!inertSubroot) {
                this._inertManager.setInert(node, true);

                inertSubroot = this._inertManager.getInertRoot(node);
              }

              inertSubroot.managedNodes.forEach(function (savedInertNode) {
                this._manageNode(savedInertNode.node);
              }, this);
            }
            /**
             * Callback used when mutation observer detects subtree additions, removals, or attribute changes.
             * @param {!Array<!MutationRecord>} records
             * @param {!MutationObserver} self
             */

          }, {
            key: '_onMutation',
            value: function _onMutation(records, self) {
              records.forEach(function (record) {
                var target =
                /** @type {!Element} */
                record.target;

                if (record.type === 'childList') {
                  // Manage added nodes
                  slice.call(record.addedNodes).forEach(function (node) {
                    this._makeSubtreeUnfocusable(node);
                  }, this); // Un-manage removed nodes

                  slice.call(record.removedNodes).forEach(function (node) {
                    this._unmanageSubtree(node);
                  }, this);
                } else if (record.type === 'attributes') {
                  if (record.attributeName === 'tabindex') {
                    // Re-initialise inert node if tabindex changes
                    this._manageNode(target);
                  } else if (target !== this._rootElement && record.attributeName === 'inert' && target.hasAttribute('inert')) {
                    // If a new inert root is added, adopt its managed nodes and make sure it knows about the
                    // already managed nodes from this inert subroot.
                    this._adoptInertRoot(target);

                    var inertSubroot = this._inertManager.getInertRoot(target);

                    this._managedNodes.forEach(function (managedNode) {
                      if (target.contains(managedNode.node)) {
                        inertSubroot._manageNode(managedNode.node);
                      }
                    });
                  }
                }
              }, this);
            }
          }, {
            key: 'managedNodes',
            get: function get() {
              return new Set(this._managedNodes);
            }
            /** @return {boolean} */

          }, {
            key: 'hasSavedAriaHidden',
            get: function get() {
              return this._savedAriaHidden !== null;
            }
            /** @param {?string} ariaHidden */

          }, {
            key: 'savedAriaHidden',
            set: function set(ariaHidden) {
              this._savedAriaHidden = ariaHidden;
            }
            /** @return {?string} */
            ,
            get: function get() {
              return this._savedAriaHidden;
            }
          }]);

          return InertRoot;
        }();
        /**
         * `InertNode` initialises and manages a single inert node.
         * A node is inert if it is a descendant of one or more inert root elements.
         *
         * On construction, `InertNode` saves the existing `tabindex` value for the node, if any, and
         * either removes the `tabindex` attribute or sets it to `-1`, depending on whether the element
         * is intrinsically focusable or not.
         *
         * `InertNode` maintains a set of `InertRoot`s which are descendants of this `InertNode`. When an
         * `InertRoot` is destroyed, and calls `InertManager.deregister()`, the `InertManager` notifies the
         * `InertNode` via `removeInertRoot()`, which in turn destroys the `InertNode` if no `InertRoot`s
         * remain in the set. On destruction, `InertNode` reinstates the stored `tabindex` if one exists,
         * or removes the `tabindex` attribute if the element is intrinsically focusable.
         */


        var InertNode = function () {
          /**
           * @param {!Node} node A focusable element to be made inert.
           * @param {!InertRoot} inertRoot The inert root element associated with this inert node.
           */
          function InertNode(node, inertRoot) {
            _classCallCheck$1(this, InertNode);
            /** @type {!Node} */


            this._node = node;
            /** @type {boolean} */

            this._overrodeFocusMethod = false;
            /**
             * @type {!Set<!InertRoot>} The set of descendant inert roots.
             *    If and only if this set becomes empty, this node is no longer inert.
             */

            this._inertRoots = new Set([inertRoot]);
            /** @type {?number} */

            this._savedTabIndex = null;
            /** @type {boolean} */

            this._destroyed = false; // Save any prior tabindex info and make this node untabbable

            this.ensureUntabbable();
          }
          /**
           * Call this whenever this object is about to become obsolete.
           * This makes the managed node focusable again and deletes all of the previously stored state.
           */


          _createClass$1(InertNode, [{
            key: 'destructor',
            value: function destructor() {
              this._throwIfDestroyed();

              if (this._node && this._node.nodeType === Node.ELEMENT_NODE) {
                var element =
                /** @type {!Element} */
                this._node;

                if (this._savedTabIndex !== null) {
                  element.setAttribute('tabindex', this._savedTabIndex);
                } else {
                  element.removeAttribute('tabindex');
                } // Use `delete` to restore native focus method.


                if (this._overrodeFocusMethod) {
                  delete element.focus;
                }
              } // See note in InertRoot.destructor for why we cast these nulls to ANY.


              this._node =
              /** @type {?} */
              null;
              this._inertRoots =
              /** @type {?} */
              null;
              this._destroyed = true;
            }
            /**
             * @type {boolean} Whether this object is obsolete because the managed node is no longer inert.
             * If the object has been destroyed, any attempt to access it will cause an exception.
             */

          }, {
            key: '_throwIfDestroyed',

            /**
             * Throw if user tries to access destroyed InertNode.
             */
            value: function _throwIfDestroyed() {
              if (this.destroyed) {
                throw new Error('Trying to access destroyed InertNode');
              }
            }
            /** @return {boolean} */

          }, {
            key: 'ensureUntabbable',

            /** Save the existing tabindex value and make the node untabbable and unfocusable */
            value: function ensureUntabbable() {
              if (this.node.nodeType !== Node.ELEMENT_NODE) {
                return;
              }

              var element =
              /** @type {!Element} */
              this.node;

              if (matches.call(element, _focusableElementsString)) {
                if (
                /** @type {!HTMLElement} */
                element.tabIndex === -1 && this.hasSavedTabIndex) {
                  return;
                }

                if (element.hasAttribute('tabindex')) {
                  this._savedTabIndex =
                  /** @type {!HTMLElement} */
                  element.tabIndex;
                }

                element.setAttribute('tabindex', '-1');

                if (element.nodeType === Node.ELEMENT_NODE) {
                  element.focus = function () {};

                  this._overrodeFocusMethod = true;
                }
              } else if (element.hasAttribute('tabindex')) {
                this._savedTabIndex =
                /** @type {!HTMLElement} */
                element.tabIndex;
                element.removeAttribute('tabindex');
              }
            }
            /**
             * Add another inert root to this inert node's set of managing inert roots.
             * @param {!InertRoot} inertRoot
             */

          }, {
            key: 'addInertRoot',
            value: function addInertRoot(inertRoot) {
              this._throwIfDestroyed();

              this._inertRoots.add(inertRoot);
            }
            /**
             * Remove the given inert root from this inert node's set of managing inert roots.
             * If the set of managing inert roots becomes empty, this node is no longer inert,
             * so the object should be destroyed.
             * @param {!InertRoot} inertRoot
             */

          }, {
            key: 'removeInertRoot',
            value: function removeInertRoot(inertRoot) {
              this._throwIfDestroyed();

              this._inertRoots['delete'](inertRoot);

              if (this._inertRoots.size === 0) {
                this.destructor();
              }
            }
          }, {
            key: 'destroyed',
            get: function get() {
              return (
                /** @type {!InertNode} */
                this._destroyed
              );
            }
          }, {
            key: 'hasSavedTabIndex',
            get: function get() {
              return this._savedTabIndex !== null;
            }
            /** @return {!Node} */

          }, {
            key: 'node',
            get: function get() {
              this._throwIfDestroyed();

              return this._node;
            }
            /** @param {?number} tabIndex */

          }, {
            key: 'savedTabIndex',
            set: function set(tabIndex) {
              this._throwIfDestroyed();

              this._savedTabIndex = tabIndex;
            }
            /** @return {?number} */
            ,
            get: function get() {
              this._throwIfDestroyed();

              return this._savedTabIndex;
            }
          }]);

          return InertNode;
        }();
        /**
         * InertManager is a per-document singleton object which manages all inert roots and nodes.
         *
         * When an element becomes an inert root by having an `inert` attribute set and/or its `inert`
         * property set to `true`, the `setInert` method creates an `InertRoot` object for the element.
         * The `InertRoot` in turn registers itself as managing all of the element's focusable descendant
         * nodes via the `register()` method. The `InertManager` ensures that a single `InertNode` instance
         * is created for each such node, via the `_managedNodes` map.
         */


        var InertManager = function () {
          /**
           * @param {!Document} document
           */
          function InertManager(document) {
            _classCallCheck$1(this, InertManager);

            if (!document) {
              throw new Error('Missing required argument; InertManager needs to wrap a document.');
            }
            /** @type {!Document} */


            this._document = document;
            /**
             * All managed nodes known to this InertManager. In a map to allow looking up by Node.
             * @type {!Map<!Node, !InertNode>}
             */

            this._managedNodes = new Map();
            /**
             * All inert roots known to this InertManager. In a map to allow looking up by Node.
             * @type {!Map<!Node, !InertRoot>}
             */

            this._inertRoots = new Map();
            /**
             * Observer for mutations on `document.body`.
             * @type {!MutationObserver}
             */

            this._observer = new MutationObserver(this._watchForInert.bind(this)); // Add inert style.

            addInertStyle(document.head || document.body || document.documentElement); // Wait for document to be loaded.

            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', this._onDocumentLoaded.bind(this));
            } else {
              this._onDocumentLoaded();
            }
          }
          /**
           * Set whether the given element should be an inert root or not.
           * @param {!Element} root
           * @param {boolean} inert
           */


          _createClass$1(InertManager, [{
            key: 'setInert',
            value: function setInert(root, inert) {
              if (inert) {
                if (this._inertRoots.has(root)) {
                  // element is already inert
                  return;
                }

                var inertRoot = new InertRoot(root, this);
                root.setAttribute('inert', '');

                this._inertRoots.set(root, inertRoot); // If not contained in the document, it must be in a shadowRoot.
                // Ensure inert styles are added there.


                if (!this._document.body.contains(root)) {
                  var parent = root.parentNode;

                  while (parent) {
                    if (parent.nodeType === 11) {
                      addInertStyle(parent);
                    }

                    parent = parent.parentNode;
                  }
                }
              } else {
                if (!this._inertRoots.has(root)) {
                  // element is already non-inert
                  return;
                }

                var _inertRoot = this._inertRoots.get(root);

                _inertRoot.destructor();

                this._inertRoots['delete'](root);

                root.removeAttribute('inert');
              }
            }
            /**
             * Get the InertRoot object corresponding to the given inert root element, if any.
             * @param {!Node} element
             * @return {!InertRoot|undefined}
             */

          }, {
            key: 'getInertRoot',
            value: function getInertRoot(element) {
              return this._inertRoots.get(element);
            }
            /**
             * Register the given InertRoot as managing the given node.
             * In the case where the node has a previously existing inert root, this inert root will
             * be added to its set of inert roots.
             * @param {!Node} node
             * @param {!InertRoot} inertRoot
             * @return {!InertNode} inertNode
             */

          }, {
            key: 'register',
            value: function register(node, inertRoot) {
              var inertNode = this._managedNodes.get(node);

              if (inertNode !== undefined) {
                // node was already in an inert subtree
                inertNode.addInertRoot(inertRoot);
              } else {
                inertNode = new InertNode(node, inertRoot);
              }

              this._managedNodes.set(node, inertNode);

              return inertNode;
            }
            /**
             * De-register the given InertRoot as managing the given inert node.
             * Removes the inert root from the InertNode's set of managing inert roots, and remove the inert
             * node from the InertManager's set of managed nodes if it is destroyed.
             * If the node is not currently managed, this is essentially a no-op.
             * @param {!Node} node
             * @param {!InertRoot} inertRoot
             * @return {?InertNode} The potentially destroyed InertNode associated with this node, if any.
             */

          }, {
            key: 'deregister',
            value: function deregister(node, inertRoot) {
              var inertNode = this._managedNodes.get(node);

              if (!inertNode) {
                return null;
              }

              inertNode.removeInertRoot(inertRoot);

              if (inertNode.destroyed) {
                this._managedNodes['delete'](node);
              }

              return inertNode;
            }
            /**
             * Callback used when document has finished loading.
             */

          }, {
            key: '_onDocumentLoaded',
            value: function _onDocumentLoaded() {
              // Find all inert roots in document and make them actually inert.
              var inertElements = slice.call(this._document.querySelectorAll('[inert]'));
              inertElements.forEach(function (inertElement) {
                this.setInert(inertElement, true);
              }, this); // Comment this out to use programmatic API only.

              this._observer.observe(this._document.body || this._document.documentElement, {
                attributes: true,
                subtree: true,
                childList: true
              });
            }
            /**
             * Callback used when mutation observer detects attribute changes.
             * @param {!Array<!MutationRecord>} records
             * @param {!MutationObserver} self
             */

          }, {
            key: '_watchForInert',
            value: function _watchForInert(records, self) {
              var _this = this;

              records.forEach(function (record) {
                switch (record.type) {
                  case 'childList':
                    slice.call(record.addedNodes).forEach(function (node) {
                      if (node.nodeType !== Node.ELEMENT_NODE) {
                        return;
                      }

                      var inertElements = slice.call(node.querySelectorAll('[inert]'));

                      if (matches.call(node, '[inert]')) {
                        inertElements.unshift(node);
                      }

                      inertElements.forEach(function (inertElement) {
                        this.setInert(inertElement, true);
                      }, _this);
                    }, _this);
                    break;

                  case 'attributes':
                    if (record.attributeName !== 'inert') {
                      return;
                    }

                    var target =
                    /** @type {!Element} */
                    record.target;
                    var inert = target.hasAttribute('inert');

                    _this.setInert(target, inert);

                    break;
                }
              }, this);
            }
          }]);

          return InertManager;
        }();
        /**
         * Recursively walk the composed tree from |node|.
         * @param {!Node} node
         * @param {(function (!Element))=} callback Callback to be called for each element traversed,
         *     before descending into child nodes.
         * @param {?ShadowRoot=} shadowRootAncestor The nearest ShadowRoot ancestor, if any.
         */


        function composedTreeWalk(node, callback, shadowRootAncestor) {
          if (node.nodeType == Node.ELEMENT_NODE) {
            var element =
            /** @type {!Element} */
            node;

            if (callback) {
              callback(element);
            } // Descend into node:
            // If it has a ShadowRoot, ignore all child elements - these will be picked
            // up by the <content> or <shadow> elements. Descend straight into the
            // ShadowRoot.


            var shadowRoot =
            /** @type {!HTMLElement} */
            element.shadowRoot;

            if (shadowRoot) {
              composedTreeWalk(shadowRoot, callback);
              return;
            } // If it is a <content> element, descend into distributed elements - these
            // are elements from outside the shadow root which are rendered inside the
            // shadow DOM.


            if (element.localName == 'content') {
              var content =
              /** @type {!HTMLContentElement} */
              element; // Verifies if ShadowDom v0 is supported.

              var distributedNodes = content.getDistributedNodes ? content.getDistributedNodes() : [];

              for (var i = 0; i < distributedNodes.length; i++) {
                composedTreeWalk(distributedNodes[i], callback);
              }

              return;
            } // If it is a <slot> element, descend into assigned nodes - these
            // are elements from outside the shadow root which are rendered inside the
            // shadow DOM.


            if (element.localName == 'slot') {
              var slot =
              /** @type {!HTMLSlotElement} */
              element; // Verify if ShadowDom v1 is supported.

              var _distributedNodes = slot.assignedNodes ? slot.assignedNodes({
                flatten: true
              }) : [];

              for (var _i = 0; _i < _distributedNodes.length; _i++) {
                composedTreeWalk(_distributedNodes[_i], callback);
              }

              return;
            }
          } // If it is neither the parent of a ShadowRoot, a <content> element, a <slot>
          // element, nor a <shadow> element recurse normally.


          var child = node.firstChild;

          while (child != null) {
            composedTreeWalk(child, callback);
            child = child.nextSibling;
          }
        }
        /**
         * Adds a style element to the node containing the inert specific styles
         * @param {!Node} node
         */


        function addInertStyle(node) {
          if (node.querySelector('style#inert-style, link#inert-style')) {
            return;
          }

          var style = document.createElement('style');
          style.setAttribute('id', 'inert-style');
          style.textContent = '\n' + '[inert] {\n' + '  pointer-events: none;\n' + '  cursor: default;\n' + '}\n' + '\n' + '[inert], [inert] * {\n' + '  -webkit-user-select: none;\n' + '  -moz-user-select: none;\n' + '  -ms-user-select: none;\n' + '  user-select: none;\n' + '}\n';
          node.appendChild(style);
        }

        if (!Element.prototype.hasOwnProperty('inert')) {
          /** @type {!InertManager} */
          var inertManager = new InertManager(document);
          Object.defineProperty(Element.prototype, 'inert', {
            enumerable: true,

            /** @this {!Element} */
            get: function get() {
              return this.hasAttribute('inert');
            },

            /** @this {!Element} */
            set: function set(inert) {
              inertManager.setInert(this, inert);
            }
          });
        }
      })();

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      var cssClasses = {
        ANIMATE: 'mdc-drawer--animate',
        CLOSING: 'mdc-drawer--closing',
        DISMISSIBLE: 'mdc-drawer--dismissible',
        MODAL: 'mdc-drawer--modal',
        OPEN: 'mdc-drawer--open',
        OPENING: 'mdc-drawer--opening',
        ROOT: 'mdc-drawer'
      };
      var strings = {
        APP_CONTENT_SELECTOR: '.mdc-drawer-app-content',
        CLOSE_EVENT: 'MDCDrawer:closed',
        OPEN_EVENT: 'MDCDrawer:opened',
        SCRIM_SELECTOR: '.mdc-drawer-scrim'
      };

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      var MDCFoundation =
      /** @class */
      function () {
        function MDCFoundation(adapter) {
          if (adapter === void 0) {
            adapter = {};
          }

          this.adapter_ = adapter;
        }

        Object.defineProperty(MDCFoundation, "cssClasses", {
          get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports every
            // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
            return {};
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCFoundation, "strings", {
          get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
            return {};
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCFoundation, "numbers", {
          get: function get() {
            // Classes extending MDCFoundation should implement this method to return an object which exports all
            // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
            return {};
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCFoundation, "defaultAdapter", {
          get: function get() {
            // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
            // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
            // validation.
            return {};
          },
          enumerable: true,
          configurable: true
        });

        MDCFoundation.prototype.init = function () {// Subclasses should override this method to perform initialization routines (registering events, etc.)
        };

        MDCFoundation.prototype.destroy = function () {// Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
        };

        return MDCFoundation;
      }();

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      var MDCDismissibleDrawerFoundation =
      /** @class */
      function (_super) {
        __extends(MDCDismissibleDrawerFoundation, _super);

        function MDCDismissibleDrawerFoundation(adapter) {
          var _this = _super.call(this, _assign({}, MDCDismissibleDrawerFoundation.defaultAdapter, adapter)) || this;

          _this.animationFrame_ = 0;
          _this.animationTimer_ = 0;
          return _this;
        }

        Object.defineProperty(MDCDismissibleDrawerFoundation, "strings", {
          get: function get() {
            return strings;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCDismissibleDrawerFoundation, "cssClasses", {
          get: function get() {
            return cssClasses;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCDismissibleDrawerFoundation, "defaultAdapter", {
          get: function get() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
              addClass: function addClass() {
                return undefined;
              },
              removeClass: function removeClass() {
                return undefined;
              },
              hasClass: function hasClass() {
                return false;
              },
              elementHasClass: function elementHasClass() {
                return false;
              },
              notifyClose: function notifyClose() {
                return undefined;
              },
              notifyOpen: function notifyOpen() {
                return undefined;
              },
              saveFocus: function saveFocus() {
                return undefined;
              },
              restoreFocus: function restoreFocus() {
                return undefined;
              },
              focusActiveNavigationItem: function focusActiveNavigationItem() {
                return undefined;
              },
              trapFocus: function trapFocus() {
                return undefined;
              },
              releaseFocus: function releaseFocus() {
                return undefined;
              }
            }; // tslint:enable:object-literal-sort-keys
          },
          enumerable: true,
          configurable: true
        });

        MDCDismissibleDrawerFoundation.prototype.destroy = function () {
          if (this.animationFrame_) {
            cancelAnimationFrame(this.animationFrame_);
          }

          if (this.animationTimer_) {
            clearTimeout(this.animationTimer_);
          }
        };
        /**
         * Opens the drawer from the closed state.
         */


        MDCDismissibleDrawerFoundation.prototype.open = function () {
          var _this = this;

          if (this.isOpen() || this.isOpening() || this.isClosing()) {
            return;
          }

          this.adapter_.addClass(cssClasses.OPEN);
          this.adapter_.addClass(cssClasses.ANIMATE); // Wait a frame once display is no longer "none", to establish basis for animation

          this.runNextAnimationFrame_(function () {
            _this.adapter_.addClass(cssClasses.OPENING);
          });
          this.adapter_.saveFocus();
        };
        /**
         * Closes the drawer from the open state.
         */


        MDCDismissibleDrawerFoundation.prototype.close = function () {
          if (!this.isOpen() || this.isOpening() || this.isClosing()) {
            return;
          }

          this.adapter_.addClass(cssClasses.CLOSING);
        };
        /**
         * Returns true if the drawer is in the open position.
         * @return true if drawer is in open state.
         */


        MDCDismissibleDrawerFoundation.prototype.isOpen = function () {
          return this.adapter_.hasClass(cssClasses.OPEN);
        };
        /**
         * Returns true if the drawer is animating open.
         * @return true if drawer is animating open.
         */


        MDCDismissibleDrawerFoundation.prototype.isOpening = function () {
          return this.adapter_.hasClass(cssClasses.OPENING) || this.adapter_.hasClass(cssClasses.ANIMATE);
        };
        /**
         * Returns true if the drawer is animating closed.
         * @return true if drawer is animating closed.
         */


        MDCDismissibleDrawerFoundation.prototype.isClosing = function () {
          return this.adapter_.hasClass(cssClasses.CLOSING);
        };
        /**
         * Keydown handler to close drawer when key is escape.
         */


        MDCDismissibleDrawerFoundation.prototype.handleKeydown = function (evt) {
          var keyCode = evt.keyCode,
              key = evt.key;
          var isEscape = key === 'Escape' || keyCode === 27;

          if (isEscape) {
            this.close();
          }
        };
        /**
         * Handles the `transitionend` event when the drawer finishes opening/closing.
         */


        MDCDismissibleDrawerFoundation.prototype.handleTransitionEnd = function (evt) {
          var OPENING = cssClasses.OPENING,
              CLOSING = cssClasses.CLOSING,
              OPEN = cssClasses.OPEN,
              ANIMATE = cssClasses.ANIMATE,
              ROOT = cssClasses.ROOT; // In Edge, transitionend on ripple pseudo-elements yields a target without classList, so check for Element first.

          var isRootElement = this.isElement_(evt.target) && this.adapter_.elementHasClass(evt.target, ROOT);

          if (!isRootElement) {
            return;
          }

          if (this.isClosing()) {
            this.adapter_.removeClass(OPEN);
            this.closed_();
            this.adapter_.restoreFocus();
            this.adapter_.notifyClose();
          } else {
            this.adapter_.focusActiveNavigationItem();
            this.opened_();
            this.adapter_.notifyOpen();
          }

          this.adapter_.removeClass(ANIMATE);
          this.adapter_.removeClass(OPENING);
          this.adapter_.removeClass(CLOSING);
        };
        /**
         * Extension point for when drawer finishes open animation.
         */


        MDCDismissibleDrawerFoundation.prototype.opened_ = function () {}; // tslint:disable-line:no-empty

        /**
         * Extension point for when drawer finishes close animation.
         */


        MDCDismissibleDrawerFoundation.prototype.closed_ = function () {}; // tslint:disable-line:no-empty

        /**
         * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
         */


        MDCDismissibleDrawerFoundation.prototype.runNextAnimationFrame_ = function (callback) {
          var _this = this;

          cancelAnimationFrame(this.animationFrame_);
          this.animationFrame_ = requestAnimationFrame(function () {
            _this.animationFrame_ = 0;
            clearTimeout(_this.animationTimer_);
            _this.animationTimer_ = setTimeout(callback, 0);
          });
        };

        MDCDismissibleDrawerFoundation.prototype.isElement_ = function (element) {
          // In Edge, transitionend on ripple pseudo-elements yields a target without classList.
          return Boolean(element.classList);
        };

        return MDCDismissibleDrawerFoundation;
      }(MDCFoundation);

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      /* istanbul ignore next: subclass is not a branch statement */

      var MDCModalDrawerFoundation =
      /** @class */
      function (_super) {
        __extends(MDCModalDrawerFoundation, _super);

        function MDCModalDrawerFoundation() {
          return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Handles click event on scrim.
         */


        MDCModalDrawerFoundation.prototype.handleScrimClick = function () {
          this.close();
        };
        /**
         * Called when drawer finishes open animation.
         */


        MDCModalDrawerFoundation.prototype.opened_ = function () {
          this.adapter_.trapFocus();
        };
        /**
         * Called when drawer finishes close animation.
         */


        MDCModalDrawerFoundation.prototype.closed_ = function () {
          this.adapter_.releaseFocus();
        };

        return MDCModalDrawerFoundation;
      }(MDCDismissibleDrawerFoundation);

      var observer = function observer(_observer) {
        return (// eslint-disable-next-line @typescript-eslint/no-explicit-any
          function (proto, propName) {
            // if we haven't wrapped `updated` in this class, do so
            if (!proto.constructor._observers) {
              proto.constructor._observers = new Map();
              var userUpdated = proto.updated;

              proto.updated = function (changedProperties) {
                var _this = this;

                userUpdated.call(this, changedProperties);
                changedProperties.forEach(function (v, k) {
                  var observer = _this.constructor._observers.get(k);

                  if (observer !== undefined) {
                    observer.call(_this, _this[k], v);
                  }
                });
              }; // clone any existing observers (superclasses)

            } else if (!proto.constructor.hasOwnProperty('_observers')) {
              var observers = proto.constructor._observers;
              proto.constructor._observers = new Map();
              observers.forEach( // eslint-disable-next-line @typescript-eslint/no-explicit-any
              function (v, k) {
                return proto.constructor._observers.set(k, v);
              });
            } // set this method


            proto.constructor._observers.set(propName, _observer);
          }
        );
      };

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      function matches(element, selector) {
        var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
        return nativeMatches.call(element, selector);
      }

      function findAssignedElement(slot, selector) {
        var _iterator = _createForOfIteratorHelper(slot.assignedNodes({
          flatten: true
        })),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var node = _step.value;

            if (node.nodeType === Node.ELEMENT_NODE) {
              var el = node;

              if (matches(el, selector)) {
                return el;
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return null;
      }
      function addHasRemoveClass(element) {
        return {
          addClass: function addClass(className) {
            element.classList.add(className);
          },
          removeClass: function removeClass(className) {
            element.classList.remove(className);
          },
          hasClass: function hasClass(className) {
            return element.classList.contains(className);
          }
        };
      }
      var supportsPassive = false;

      var fn = function fn() {};

      var optionsBlock = {
        get passive() {
          supportsPassive = true;
          return false;
        }

      };
      document.addEventListener('x', fn, optionsBlock);
      document.removeEventListener('x', fn);
      /**
       * Do event listeners suport the `passive` option?
       */

      var supportsPassiveEventListener = supportsPassive;

      var BaseElement = /*#__PURE__*/function (_LitElement) {
        _inherits(BaseElement, _LitElement);

        var _super = _createSuper(BaseElement);

        function BaseElement() {
          _classCallCheck(this, BaseElement);

          return _super.apply(this, arguments);
        }

        _createClass(BaseElement, [{
          key: "createFoundation",
          value:
          /**
           * Create and attach the MDC Foundation to the instance
           */
          function createFoundation() {
            if (this.mdcFoundation !== undefined) {
              this.mdcFoundation.destroy();
            }

            this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter());
            this.mdcFoundation.init();
          }
        }, {
          key: "firstUpdated",
          value: function firstUpdated() {
            this.createFoundation();
          }
        }]);

        return BaseElement;
      }(LitElement);

      var ClassList = /*#__PURE__*/function () {
        function ClassList(element) {
          _classCallCheck(this, ClassList);

          this.classes = new Set();
          this.changed = false;
          this.element = element;
          var classList = (element.getAttribute('class') || '').split(/\s+/);

          var _iterator = _createForOfIteratorHelper(classList),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var cls = _step.value;
              this.classes.add(cls);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        _createClass(ClassList, [{
          key: "add",
          value: function add(cls) {
            this.classes.add(cls);
            this.changed = true;
          }
        }, {
          key: "remove",
          value: function remove(cls) {
            this.classes.delete(cls);
            this.changed = true;
          }
        }, {
          key: "commit",
          value: function commit() {
            if (this.changed) {
              var classString = '';
              this.classes.forEach(function (cls) {
                return classString += cls + ' ';
              });
              this.element.setAttribute('class', classString);
            }
          }
        }]);

        return ClassList;
      }();
      /**
       * Stores the ClassInfo object applied to a given AttributePart.
       * Used to unset existing values when a new ClassInfo object is applied.
       */


      var previousClassesCache = new WeakMap();
      /**
       * A directive that applies CSS classes. This must be used in the `class`
       * attribute and must be the only part used in the attribute. It takes each
       * property in the `classInfo` argument and adds the property name to the
       * element's `class` if the property value is truthy; if the property value is
       * falsey, the property name is removed from the element's `class`. For example
       * `{foo: bar}` applies the class `foo` if the value of `bar` is truthy.
       * @param classInfo {ClassInfo}
       */

      var classMap = directive(function (classInfo) {
        return function (part) {
          if (!(part instanceof AttributePart) || part instanceof PropertyPart || part.committer.name !== 'class' || part.committer.parts.length > 1) {
            throw new Error('The `classMap` directive must be used in the `class` attribute ' + 'and must be the only part in the attribute.');
          }

          var committer = part.committer;
          var element = committer.element;
          var previousClasses = previousClassesCache.get(part);

          if (previousClasses === undefined) {
            // Write static classes once
            // Use setAttribute() because className isn't a string on SVG elements
            element.setAttribute('class', committer.strings.join(' '));
            previousClassesCache.set(part, previousClasses = new Set());
          }

          var classList = element.classList || new ClassList(element); // Remove old classes that no longer apply
          // We use forEach() instead of for-of so that re don't require down-level
          // iteration.

          previousClasses.forEach(function (name) {
            if (!(name in classInfo)) {
              classList.remove(name);
              previousClasses.delete(name);
            }
          }); // Add or remove classes based on their classMap value

          for (var name in classInfo) {
            var value = classInfo[name];

            if (value != previousClasses.has(name)) {
              // We explicitly want a loose truthy check of `value` because it seems
              // more convenient that '' and 0 are skipped.
              if (value) {
                classList.add(name);
                previousClasses.add(name);
              } else {
                classList.remove(name);
                previousClasses.delete(name);
              }
            }
          }

          if (typeof classList.commit === 'function') {
            classList.commit();
          }
        };
      });

      var _templateObject$1, _templateObject2, _templateObject3;
      var blockingElements = document.$blockingElements;
      var DrawerBase = /*#__PURE__*/function (_BaseElement) {
        _inherits(DrawerBase, _BaseElement);

        var _super = _createSuper(DrawerBase);

        function DrawerBase() {
          var _this;

          _classCallCheck(this, DrawerBase);

          _this = _super.apply(this, arguments);
          _this._previousFocus = null;
          _this.open = false;
          _this.hasHeader = false;
          _this.type = '';
          return _this;
        }

        _createClass(DrawerBase, [{
          key: "mdcFoundationClass",
          get: function get() {
            return this.type === 'modal' ? MDCModalDrawerFoundation : MDCDismissibleDrawerFoundation;
          }
        }, {
          key: "createAdapter",
          value: function createAdapter() {
            var _this2 = this;

            return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), {
              elementHasClass: function elementHasClass(element, className) {
                return element.classList.contains(className);
              },
              saveFocus: function saveFocus() {
                // Note, casting to avoid cumbersome runtime check.
                _this2._previousFocus = _this2.getRootNode().activeElement;
              },
              restoreFocus: function restoreFocus() {
                var previousFocus = _this2._previousFocus && _this2._previousFocus.focus;

                if (previousFocus) {
                  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                  _this2._previousFocus.focus();
                }
              },
              notifyClose: function notifyClose() {
                _this2.open = false;

                _this2.dispatchEvent(new Event(strings.CLOSE_EVENT, {
                  bubbles: true,
                  cancelable: true
                }));
              },
              notifyOpen: function notifyOpen() {
                _this2.open = true;

                _this2.dispatchEvent(new Event(strings.OPEN_EVENT, {
                  bubbles: true,
                  cancelable: true
                }));
              },
              // TODO(sorvell): Implement list focusing integration.
              focusActiveNavigationItem: function focusActiveNavigationItem() {},
              trapFocus: function trapFocus() {
                blockingElements.push(_this2);
                _this2.appContent.inert = true;
              },
              releaseFocus: function releaseFocus() {
                blockingElements.remove(_this2);
                _this2.appContent.inert = false;
              }
            });
          }
        }, {
          key: "_handleScrimClick",
          value: function _handleScrimClick() {
            if (this.mdcFoundation instanceof MDCModalDrawerFoundation) {
              this.mdcFoundation.handleScrimClick();
            }
          }
        }, {
          key: "render",
          value: function render() {
            var dismissible = this.type === 'dismissible' || this.type === 'modal';
            var modal = this.type === 'modal';
            var header = this.hasHeader ? html(_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["<div class=\"mdc-drawer__header\"><h3 class=\"mdc-drawer__title\"><slot name=\"title\"></slot></h3><h6 class=\"mdc-drawer__subtitle\"><slot name=\"subtitle\"></slot></h6><slot name=\"header\"></slot></div>"]))) : '';
            return html(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<aside class=\"mdc-drawer ", "\">", "<div class=\"mdc-drawer__content\"><slot></slot></div></aside>", "<div class=\"mdc-drawer-app-content\"><slot name=\"appContent\"></slot></div>"])), classMap({
              'mdc-drawer--dismissible': dismissible,
              'mdc-drawer--modal': modal
            }), header, modal ? html(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["<div class=\"mdc-drawer-scrim\" @click=\"", "\"></div>"])), this._handleScrimClick) : '');
          } // note, we avoid calling `super.firstUpdated()` to control when
          // `createFoundation()` is called.

        }, {
          key: "firstUpdated",
          value: function firstUpdated() {
            var _this3 = this;

            this.mdcRoot.addEventListener('keydown', function (e) {
              return _this3.mdcFoundation.handleKeydown(e);
            });
            this.mdcRoot.addEventListener('transitionend', function (e) {
              return _this3.mdcFoundation.handleTransitionEnd(e);
            });
          }
        }, {
          key: "updated",
          value: function updated(changedProperties) {
            if (changedProperties.has('type')) {
              this.createFoundation();
            }
          }
        }]);

        return DrawerBase;
      }(BaseElement);

      __decorate([query('.mdc-drawer')], DrawerBase.prototype, "mdcRoot", void 0);

      __decorate([query('.mdc-drawer-app-content')], DrawerBase.prototype, "appContent", void 0);

      __decorate([observer(function (value) {
        if (this.type === '') {
          return;
        }

        if (value) {
          this.mdcFoundation.open();
        } else {
          this.mdcFoundation.close();
        }
      }), property({
        type: Boolean,
        reflect: true
      })], DrawerBase.prototype, "open", void 0);

      __decorate([property({
        type: Boolean
      })], DrawerBase.prototype, "hasHeader", void 0);

      __decorate([property({
        reflect: true
      })], DrawerBase.prototype, "type", void 0);

      var _templateObject$2;
      var style = css(_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral([".mdc-drawer{border-color:rgba(0,0,0,.12);background-color:#fff;border-radius:0;z-index:6;width:256px;display:flex;flex-direction:column;flex-shrink:0;box-sizing:border-box;height:100%;border-right-width:1px;border-right-style:solid;overflow:hidden;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-drawer .mdc-drawer__title{color:rgba(0,0,0,.87)}.mdc-drawer .mdc-list-group__subheader{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-drawer__subtitle{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-list-item__graphic{color:rgba(0,0,0,.6)}.mdc-drawer .mdc-list-item{color:rgba(0,0,0,.87)}.mdc-drawer .mdc-list-item--activated .mdc-list-item__graphic{color:#6200ee}.mdc-drawer .mdc-list-item--activated{color:rgba(98,0,238,.87)}.mdc-drawer[dir=rtl],[dir=rtl] .mdc-drawer{border-radius:0}.mdc-drawer .mdc-list-item{border-radius:4px}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:256px;margin-right:0}.mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content[dir=rtl],[dir=rtl] .mdc-drawer.mdc-drawer--open:not(.mdc-drawer--closing)+.mdc-drawer-app-content{margin-left:0;margin-right:256px}.mdc-drawer[dir=rtl],[dir=rtl] .mdc-drawer{border-right-width:0;border-left-width:1px;border-right-style:none;border-left-style:solid}.mdc-drawer .mdc-list-item{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.375rem;font-weight:500;letter-spacing:.0071428571em;text-decoration:inherit;text-transform:inherit;height:calc(48px - 2 * 4px);margin:8px 8px;padding:0 8px}.mdc-drawer .mdc-list-item:nth-child(1){margin-top:2px}.mdc-drawer .mdc-list-item:nth-last-child(1){margin-bottom:0}.mdc-drawer .mdc-list-group__subheader{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin:0;padding:0 16px}.mdc-drawer .mdc-list-group__subheader::before{display:inline-block;width:0;height:24px;content:\"\";vertical-align:0}.mdc-drawer .mdc-list-divider{margin:3px 0 4px 0}.mdc-drawer .mdc-list-item__graphic,.mdc-drawer .mdc-list-item__text{pointer-events:none}.mdc-drawer--animate{transform:translateX(-100%)}.mdc-drawer--animate[dir=rtl],[dir=rtl] .mdc-drawer--animate{transform:translateX(100%)}.mdc-drawer--opening{transform:translateX(0);transition-duration:250ms}.mdc-drawer--opening[dir=rtl],[dir=rtl] .mdc-drawer--opening{transform:translateX(0)}.mdc-drawer--closing{transform:translateX(-100%);transition-duration:.2s}.mdc-drawer--closing[dir=rtl],[dir=rtl] .mdc-drawer--closing{transform:translateX(100%)}.mdc-drawer__header{flex-shrink:0;box-sizing:border-box;min-height:64px;padding:0 16px 4px}.mdc-drawer__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-drawer__title::before{display:inline-block;width:0;height:36px;content:\"\";vertical-align:0}.mdc-drawer__title::after{display:inline-block;width:0;height:20px;content:\"\";vertical-align:-20px}.mdc-drawer__subtitle{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin-bottom:0}.mdc-drawer__subtitle::before{display:inline-block;width:0;height:20px;content:\"\";vertical-align:0}.mdc-drawer__content{height:100%;overflow-y:auto;-webkit-overflow-scrolling:touch}.mdc-drawer--dismissible{left:0;right:initial;display:none;position:absolute}.mdc-drawer--dismissible[dir=rtl],[dir=rtl] .mdc-drawer--dismissible{left:initial;right:0}.mdc-drawer--dismissible.mdc-drawer--open{display:flex}.mdc-drawer-app-content{margin-left:0;margin-right:0;position:relative}.mdc-drawer-app-content[dir=rtl],[dir=rtl] .mdc-drawer-app-content{margin-left:0;margin-right:0}.mdc-drawer--modal{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);left:0;right:initial;display:none;position:fixed}.mdc-drawer--modal+.mdc-drawer-scrim{background-color:rgba(0,0,0,.32)}.mdc-drawer--modal[dir=rtl],[dir=rtl] .mdc-drawer--modal{left:initial;right:0}.mdc-drawer--modal.mdc-drawer--open{display:flex}.mdc-drawer-scrim{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:5;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.mdc-drawer--open+.mdc-drawer-scrim{display:block}.mdc-drawer--animate+.mdc-drawer-scrim{opacity:0}.mdc-drawer--opening+.mdc-drawer-scrim{transition-duration:250ms;opacity:1}.mdc-drawer--closing+.mdc-drawer-scrim{transition-duration:.2s;opacity:0}.mdc-drawer-app-content{overflow:auto}:host{display:flex;height:100%}"])));

      var Drawer = /*#__PURE__*/function (_DrawerBase) {
        _inherits(Drawer, _DrawerBase);

        var _super = _createSuper(Drawer);

        function Drawer() {
          _classCallCheck(this, Drawer);

          return _super.apply(this, arguments);
        }

        return Drawer;
      }(DrawerBase);

      Drawer.styles = style;
      Drawer = __decorate([customElement('mwc-drawer')], Drawer);

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      var cssClasses$1 = {
        FIXED_CLASS: 'mdc-top-app-bar--fixed',
        FIXED_SCROLLED_CLASS: 'mdc-top-app-bar--fixed-scrolled',
        SHORT_CLASS: 'mdc-top-app-bar--short',
        SHORT_COLLAPSED_CLASS: 'mdc-top-app-bar--short-collapsed',
        SHORT_HAS_ACTION_ITEM_CLASS: 'mdc-top-app-bar--short-has-action-item'
      };
      var numbers = {
        DEBOUNCE_THROTTLE_RESIZE_TIME_MS: 100,
        MAX_TOP_APP_BAR_HEIGHT: 128
      };
      var strings$1 = {
        ACTION_ITEM_SELECTOR: '.mdc-top-app-bar__action-item',
        NAVIGATION_EVENT: 'MDCTopAppBar:nav',
        NAVIGATION_ICON_SELECTOR: '.mdc-top-app-bar__navigation-icon',
        ROOT_SELECTOR: '.mdc-top-app-bar',
        TITLE_SELECTOR: '.mdc-top-app-bar__title'
      };

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      var MDCTopAppBarBaseFoundation =
      /** @class */
      function (_super) {
        __extends(MDCTopAppBarBaseFoundation, _super);
        /* istanbul ignore next: optional argument is not a branch statement */


        function MDCTopAppBarBaseFoundation(adapter) {
          return _super.call(this, _assign({}, MDCTopAppBarBaseFoundation.defaultAdapter, adapter)) || this;
        }

        Object.defineProperty(MDCTopAppBarBaseFoundation, "strings", {
          get: function get() {
            return strings$1;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCTopAppBarBaseFoundation, "cssClasses", {
          get: function get() {
            return cssClasses$1;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCTopAppBarBaseFoundation, "numbers", {
          get: function get() {
            return numbers;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCTopAppBarBaseFoundation, "defaultAdapter", {
          /**
           * See {@link MDCTopAppBarAdapter} for typing information on parameters and return types.
           */
          get: function get() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
              addClass: function addClass() {
                return undefined;
              },
              removeClass: function removeClass() {
                return undefined;
              },
              hasClass: function hasClass() {
                return false;
              },
              setStyle: function setStyle() {
                return undefined;
              },
              getTopAppBarHeight: function getTopAppBarHeight() {
                return 0;
              },
              notifyNavigationIconClicked: function notifyNavigationIconClicked() {
                return undefined;
              },
              getViewportScrollY: function getViewportScrollY() {
                return 0;
              },
              getTotalActionItems: function getTotalActionItems() {
                return 0;
              }
            }; // tslint:enable:object-literal-sort-keys
          },
          enumerable: true,
          configurable: true
        });
        /** Other variants of TopAppBar foundation overrides this method */

        MDCTopAppBarBaseFoundation.prototype.handleTargetScroll = function () {}; // tslint:disable-line:no-empty

        /** Other variants of TopAppBar foundation overrides this method */


        MDCTopAppBarBaseFoundation.prototype.handleWindowResize = function () {}; // tslint:disable-line:no-empty


        MDCTopAppBarBaseFoundation.prototype.handleNavigationClick = function () {
          this.adapter_.notifyNavigationIconClicked();
        };

        return MDCTopAppBarBaseFoundation;
      }(MDCFoundation);

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      var INITIAL_VALUE = 0;

      var MDCTopAppBarFoundation =
      /** @class */
      function (_super) {
        __extends(MDCTopAppBarFoundation, _super);
        /* istanbul ignore next: optional argument is not a branch statement */


        function MDCTopAppBarFoundation(adapter) {
          var _this = _super.call(this, adapter) || this;
          /**
           * Indicates if the top app bar was docked in the previous scroll handler iteration.
           */


          _this.wasDocked_ = true;
          /**
           * Indicates if the top app bar is docked in the fully shown position.
           */

          _this.isDockedShowing_ = true;
          /**
           * Variable for current scroll position of the top app bar
           */

          _this.currentAppBarOffsetTop_ = 0;
          /**
           * Used to prevent the top app bar from being scrolled out of view during resize events
           */

          _this.isCurrentlyBeingResized_ = false;
          /**
           * The timeout that's used to throttle the resize events
           */

          _this.resizeThrottleId_ = INITIAL_VALUE;
          /**
           * The timeout that's used to debounce toggling the isCurrentlyBeingResized_ variable after a resize
           */

          _this.resizeDebounceId_ = INITIAL_VALUE;
          _this.lastScrollPosition_ = _this.adapter_.getViewportScrollY();
          _this.topAppBarHeight_ = _this.adapter_.getTopAppBarHeight();
          return _this;
        }

        MDCTopAppBarFoundation.prototype.destroy = function () {
          _super.prototype.destroy.call(this);

          this.adapter_.setStyle('top', '');
        };
        /**
         * Scroll handler for the default scroll behavior of the top app bar.
         * @override
         */


        MDCTopAppBarFoundation.prototype.handleTargetScroll = function () {
          var currentScrollPosition = Math.max(this.adapter_.getViewportScrollY(), 0);
          var diff = currentScrollPosition - this.lastScrollPosition_;
          this.lastScrollPosition_ = currentScrollPosition; // If the window is being resized the lastScrollPosition_ needs to be updated but the
          // current scroll of the top app bar should stay in the same position.

          if (!this.isCurrentlyBeingResized_) {
            this.currentAppBarOffsetTop_ -= diff;

            if (this.currentAppBarOffsetTop_ > 0) {
              this.currentAppBarOffsetTop_ = 0;
            } else if (Math.abs(this.currentAppBarOffsetTop_) > this.topAppBarHeight_) {
              this.currentAppBarOffsetTop_ = -this.topAppBarHeight_;
            }

            this.moveTopAppBar_();
          }
        };
        /**
         * Top app bar resize handler that throttle/debounce functions that execute updates.
         * @override
         */


        MDCTopAppBarFoundation.prototype.handleWindowResize = function () {
          var _this = this; // Throttle resize events 10 p/s


          if (!this.resizeThrottleId_) {
            this.resizeThrottleId_ = setTimeout(function () {
              _this.resizeThrottleId_ = INITIAL_VALUE;

              _this.throttledResizeHandler_();
            }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
          }

          this.isCurrentlyBeingResized_ = true;

          if (this.resizeDebounceId_) {
            clearTimeout(this.resizeDebounceId_);
          }

          this.resizeDebounceId_ = setTimeout(function () {
            _this.handleTargetScroll();

            _this.isCurrentlyBeingResized_ = false;
            _this.resizeDebounceId_ = INITIAL_VALUE;
          }, numbers.DEBOUNCE_THROTTLE_RESIZE_TIME_MS);
        };
        /**
         * Function to determine if the DOM needs to update.
         */


        MDCTopAppBarFoundation.prototype.checkForUpdate_ = function () {
          var offscreenBoundaryTop = -this.topAppBarHeight_;
          var hasAnyPixelsOffscreen = this.currentAppBarOffsetTop_ < 0;
          var hasAnyPixelsOnscreen = this.currentAppBarOffsetTop_ > offscreenBoundaryTop;
          var partiallyShowing = hasAnyPixelsOffscreen && hasAnyPixelsOnscreen; // If it's partially showing, it can't be docked.

          if (partiallyShowing) {
            this.wasDocked_ = false;
          } else {
            // Not previously docked and not partially showing, it's now docked.
            if (!this.wasDocked_) {
              this.wasDocked_ = true;
              return true;
            } else if (this.isDockedShowing_ !== hasAnyPixelsOnscreen) {
              this.isDockedShowing_ = hasAnyPixelsOnscreen;
              return true;
            }
          }

          return partiallyShowing;
        };
        /**
         * Function to move the top app bar if needed.
         */


        MDCTopAppBarFoundation.prototype.moveTopAppBar_ = function () {
          if (this.checkForUpdate_()) {
            // Once the top app bar is fully hidden we use the max potential top app bar height as our offset
            // so the top app bar doesn't show if the window resizes and the new height > the old height.
            var offset = this.currentAppBarOffsetTop_;

            if (Math.abs(offset) >= this.topAppBarHeight_) {
              offset = -numbers.MAX_TOP_APP_BAR_HEIGHT;
            }

            this.adapter_.setStyle('top', offset + 'px');
          }
        };
        /**
         * Throttled function that updates the top app bar scrolled values if the
         * top app bar height changes.
         */


        MDCTopAppBarFoundation.prototype.throttledResizeHandler_ = function () {
          var currentHeight = this.adapter_.getTopAppBarHeight();

          if (this.topAppBarHeight_ !== currentHeight) {
            this.wasDocked_ = false; // Since the top app bar has a different height depending on the screen width, this
            // will ensure that the top app bar remains in the correct location if
            // completely hidden and a resize makes the top app bar a different height.

            this.currentAppBarOffsetTop_ -= this.topAppBarHeight_ - currentHeight;
            this.topAppBarHeight_ = currentHeight;
          }

          this.handleTargetScroll();
        };

        return MDCTopAppBarFoundation;
      }(MDCTopAppBarBaseFoundation);

      var _templateObject$3, _templateObject2$1, _templateObject3$1;
      var passiveEventOptionsIfSupported = supportsPassiveEventListener ? {
        passive: true
      } : undefined;
      var TopAppBarBaseBase = /*#__PURE__*/function (_BaseElement) {
        _inherits(TopAppBarBaseBase, _BaseElement);

        var _super = _createSuper(TopAppBarBaseBase);

        function TopAppBarBaseBase() {
          var _this;

          _classCallCheck(this, TopAppBarBaseBase);

          _this = _super.apply(this, arguments);
          _this.mdcFoundationClass = MDCTopAppBarBaseFoundation;
          _this.centerTitle = false;

          _this.handleTargetScroll = function () {
            _this.mdcFoundation.handleTargetScroll();
          };

          _this.handleNavigationClick = function () {
            _this.mdcFoundation.handleNavigationClick();
          };

          return _this;
        }

        _createClass(TopAppBarBaseBase, [{
          key: "scrollTarget",
          get: function get() {
            return this._scrollTarget || window;
          },
          set: function set(value) {
            var old = this.scrollTarget;
            this._scrollTarget = value;
            this.updateRootPosition();
            this.requestUpdate('scrollTarget', old);
          }
        }, {
          key: "updateRootPosition",
          value: function updateRootPosition() {
            if (this.mdcRoot) {
              var windowScroller = this.scrollTarget === window; // we add support for top-app-bar's tied to an element scroller.

              this.mdcRoot.style.position = windowScroller ? '' : 'absolute';
            }
          }
        }, {
          key: "render",
          value: function render() {
            // clang-format off
            var title = html(_templateObject$3 || (_templateObject$3 = _taggedTemplateLiteral(["<span class=\"mdc-top-app-bar__title\"><slot name=\"title\"></slot></span>"])));

            if (this.centerTitle) {
              title = html(_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["<section class=\"mdc-top-app-bar__section mdc-top-app-bar__section--align-center\">", "</section>"])), title);
            } // clang-format on


            return html(_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["<header class=\"mdc-top-app-bar ", "\"><div class=\"mdc-top-app-bar__row\"><section class=\"mdc-top-app-bar__section mdc-top-app-bar__section--align-start\" id=\"navigation\"><slot name=\"navigationIcon\" @click=\"", "\"></slot>", "</section>", "<section class=\"mdc-top-app-bar__section mdc-top-app-bar__section--align-end\" id=\"actions\" role=\"toolbar\"><slot name=\"actionItems\"></slot></section></div></header><div class=\"", "\"><slot></slot></div>"])), classMap(this.barClasses()), this.handleNavigationClick, this.centerTitle ? null : title, this.centerTitle ? title : null, classMap(this.contentClasses()));
          }
        }, {
          key: "createAdapter",
          value: function createAdapter() {
            var _this2 = this;

            return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), {
              setStyle: function setStyle(property, value) {
                return _this2.mdcRoot.style.setProperty(property, value);
              },
              getTopAppBarHeight: function getTopAppBarHeight() {
                return _this2.mdcRoot.clientHeight;
              },
              notifyNavigationIconClicked: function notifyNavigationIconClicked() {
                _this2.dispatchEvent(new Event(strings$1.NAVIGATION_EVENT, {
                  bubbles: true,
                  cancelable: true
                }));
              },
              getViewportScrollY: function getViewportScrollY() {
                return _this2.scrollTarget instanceof Window ? _this2.scrollTarget.pageYOffset : _this2.scrollTarget.scrollTop;
              },
              getTotalActionItems: function getTotalActionItems() {
                return _this2._actionItemsSlot.assignedNodes({
                  flatten: true
                }).length;
              }
            });
          }
        }, {
          key: "registerListeners",
          value: function registerListeners() {
            this.scrollTarget.addEventListener('scroll', this.handleTargetScroll, passiveEventOptionsIfSupported);
          }
        }, {
          key: "unregisterListeners",
          value: function unregisterListeners() {
            this.scrollTarget.removeEventListener('scroll', this.handleTargetScroll);
          }
        }, {
          key: "firstUpdated",
          value: function firstUpdated() {
            _get(_getPrototypeOf(TopAppBarBaseBase.prototype), "firstUpdated", this).call(this);

            this.updateRootPosition();
            this.registerListeners();
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            _get(_getPrototypeOf(TopAppBarBaseBase.prototype), "disconnectedCallback", this).call(this);

            this.unregisterListeners();
          }
        }]);

        return TopAppBarBaseBase;
      }(BaseElement);

      __decorate([query('.mdc-top-app-bar')], TopAppBarBaseBase.prototype, "mdcRoot", void 0);

      __decorate([query('slot[name="actionItems"]')], TopAppBarBaseBase.prototype, "_actionItemsSlot", void 0);

      __decorate([property({
        type: Boolean
      })], TopAppBarBaseBase.prototype, "centerTitle", void 0);

      __decorate([property()], TopAppBarBaseBase.prototype, "scrollTarget", null);

      var TopAppBarBase = /*#__PURE__*/function (_TopAppBarBaseBase) {
        _inherits(TopAppBarBase, _TopAppBarBaseBase);

        var _super = _createSuper(TopAppBarBase);

        function TopAppBarBase() {
          var _this;

          _classCallCheck(this, TopAppBarBase);

          _this = _super.apply(this, arguments);
          _this.mdcFoundationClass = MDCTopAppBarFoundation;
          _this.prominent = false;
          _this.dense = false;

          _this.handleResize = function () {
            _this.mdcFoundation.handleWindowResize();
          };

          return _this;
        }

        _createClass(TopAppBarBase, [{
          key: "barClasses",
          value: function barClasses() {
            return {
              'mdc-top-app-bar--dense': this.dense,
              'mdc-top-app-bar--prominent': this.prominent,
              'center-title': this.centerTitle
            };
          }
        }, {
          key: "contentClasses",
          value: function contentClasses() {
            return {
              'mdc-top-app-bar--fixed-adjust': !this.dense && !this.prominent,
              'mdc-top-app-bar--dense-fixed-adjust': this.dense && !this.prominent,
              'mdc-top-app-bar--prominent-fixed-adjust': !this.dense && this.prominent,
              'mdc-top-app-bar--dense-prominent-fixed-adjust': this.dense && this.prominent
            };
          }
        }, {
          key: "registerListeners",
          value: function registerListeners() {
            _get(_getPrototypeOf(TopAppBarBase.prototype), "registerListeners", this).call(this);

            window.addEventListener('resize', this.handleResize, passiveEventOptionsIfSupported);
          }
        }, {
          key: "unregisterListeners",
          value: function unregisterListeners() {
            _get(_getPrototypeOf(TopAppBarBase.prototype), "unregisterListeners", this).call(this);

            window.removeEventListener('resize', this.handleResize);
          }
        }]);

        return TopAppBarBase;
      }(TopAppBarBaseBase);

      __decorate([property({
        type: Boolean,
        reflect: true
      })], TopAppBarBase.prototype, "prominent", void 0);

      __decorate([property({
        type: Boolean,
        reflect: true
      })], TopAppBarBase.prototype, "dense", void 0);

      var _templateObject$4;
      var style$1 = css(_templateObject$4 || (_templateObject$4 = _taggedTemplateLiteral([".mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee);color:#fff;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before{background-color:#fff}@supports not (-ms-ime-align:auto){.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before{background-color:var(--mdc-theme-on-primary,#fff)}}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before{opacity:.08}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.24}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1.25rem;line-height:2rem;font-weight:500;letter-spacing:.0125em;text-decoration:inherit;text-transform:inherit;padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}.mdc-top-app-bar__title[dir=rtl],[dir=rtl] .mdc-top-app-bar__title{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-radius:0 0 24px 0}.mdc-top-app-bar--short-collapsed[dir=rtl],[dir=rtl] .mdc-top-app-bar--short-collapsed{border-radius:0 0 0 24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short[dir=rtl],[dir=rtl] .mdc-top-app-bar--short{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity .2s cubic-bezier(.4,0,.2,1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);width:56px;transition:width .3s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl],[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl],[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow .2s linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);transition:box-shadow .2s linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl],[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width:599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width .2s cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl],[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-top-app-bar--prominent #actions ::slotted(*),.mdc-top-app-bar--prominent #navigation ::slotted(*){align-self:flex-start}#actions ::slotted(*),#navigation ::slotted(*){--mdc-icon-button-ripple-opacity:0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(.4,0,.2,1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-end,.center-title .mdc-top-app-bar__section--align-start{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}"])));

      var TopAppBar = /*#__PURE__*/function (_TopAppBarBase) {
        _inherits(TopAppBar, _TopAppBarBase);

        var _super = _createSuper(TopAppBar);

        function TopAppBar() {
          _classCallCheck(this, TopAppBar);

          return _super.apply(this, arguments);
        }

        return TopAppBar;
      }(TopAppBarBase);

      TopAppBar.styles = style$1;
      TopAppBar = __decorate([customElement('mwc-top-app-bar')], TopAppBar);

      /**
       * @license
       * Copyright 2019 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * Stores result from applyPassive to avoid redundant processing to detect
       * passive event listener support.
       */
      var supportsPassive_;
      /**
       * Determine whether the current browser supports passive event listeners, and
       * if so, use them.
       */

      function applyPassive(globalObj, forceRefresh) {
        if (globalObj === void 0) {
          globalObj = window;
        }

        if (forceRefresh === void 0) {
          forceRefresh = false;
        }

        if (supportsPassive_ === undefined || forceRefresh) {
          var isSupported_1 = false;

          try {
            globalObj.document.addEventListener('test', function () {
              return undefined;
            }, {
              get passive() {
                isSupported_1 = true;
                return isSupported_1;
              }

            });
          } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.


          supportsPassive_ = isSupported_1;
        }

        return supportsPassive_ ? {
          passive: true
        } : false;
      }

      var FormElement = /*#__PURE__*/function (_BaseElement) {
        _inherits(FormElement, _BaseElement);

        var _super = _createSuper(FormElement);

        function FormElement() {
          _classCallCheck(this, FormElement);

          return _super.apply(this, arguments);
        }

        _createClass(FormElement, [{
          key: "createRenderRoot",
          value: function createRenderRoot() {
            return this.attachShadow({
              mode: 'open',
              delegatesFocus: true
            });
          }
        }, {
          key: "click",
          value: function click() {
            if (this.formElement) {
              this.formElement.focus();
              this.formElement.click();
            }
          }
        }, {
          key: "setAriaLabel",
          value: function setAriaLabel(label) {
            if (this.formElement) {
              this.formElement.setAttribute('aria-label', label);
            }
          }
        }, {
          key: "firstUpdated",
          value: function firstUpdated() {
            var _this = this;

            _get(_getPrototypeOf(FormElement.prototype), "firstUpdated", this).call(this);

            this.mdcRoot.addEventListener('change', function (e) {
              _this.dispatchEvent(new Event('change', e));
            });
          }
        }]);

        return FormElement;
      }(BaseElement);

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      var cssPropertyNameMap = {
        animation: {
          prefixed: '-webkit-animation',
          standard: 'animation'
        },
        transform: {
          prefixed: '-webkit-transform',
          standard: 'transform'
        },
        transition: {
          prefixed: '-webkit-transition',
          standard: 'transition'
        }
      };
      var jsEventTypeMap = {
        animationend: {
          cssProperty: 'animation',
          prefixed: 'webkitAnimationEnd',
          standard: 'animationend'
        },
        animationiteration: {
          cssProperty: 'animation',
          prefixed: 'webkitAnimationIteration',
          standard: 'animationiteration'
        },
        animationstart: {
          cssProperty: 'animation',
          prefixed: 'webkitAnimationStart',
          standard: 'animationstart'
        },
        transitionend: {
          cssProperty: 'transition',
          prefixed: 'webkitTransitionEnd',
          standard: 'transitionend'
        }
      };

      function isWindow(windowObj) {
        return Boolean(windowObj.document) && typeof windowObj.document.createElement === 'function';
      }

      function getCorrectPropertyName(windowObj, cssProperty) {
        if (isWindow(windowObj) && cssProperty in cssPropertyNameMap) {
          var el = windowObj.document.createElement('div');
          var _a = cssPropertyNameMap[cssProperty],
              standard = _a.standard,
              prefixed = _a.prefixed;
          var isStandard = (standard in el.style);
          return isStandard ? standard : prefixed;
        }

        return cssProperty;
      }
      function getCorrectEventName(windowObj, eventType) {
        if (isWindow(windowObj) && eventType in jsEventTypeMap) {
          var el = windowObj.document.createElement('div');
          var _a = jsEventTypeMap[eventType],
              standard = _a.standard,
              prefixed = _a.prefixed,
              cssProperty = _a.cssProperty;
          var isStandard = (cssProperty in el.style);
          return isStandard ? standard : prefixed;
        }

        return eventType;
      }

      /**
       * @license
       * Copyright 2017 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      var cssClasses$2 = {
        ACTIVE: 'mdc-slider--active',
        DISABLED: 'mdc-slider--disabled',
        DISCRETE: 'mdc-slider--discrete',
        FOCUS: 'mdc-slider--focus',
        HAS_TRACK_MARKER: 'mdc-slider--display-markers',
        IN_TRANSIT: 'mdc-slider--in-transit',
        IS_DISCRETE: 'mdc-slider--discrete'
      };
      var strings$2 = {
        ARIA_DISABLED: 'aria-disabled',
        ARIA_VALUEMAX: 'aria-valuemax',
        ARIA_VALUEMIN: 'aria-valuemin',
        ARIA_VALUENOW: 'aria-valuenow',
        CHANGE_EVENT: 'MDCSlider:change',
        INPUT_EVENT: 'MDCSlider:input',
        PIN_VALUE_MARKER_SELECTOR: '.mdc-slider__pin-value-marker',
        STEP_DATA_ATTR: 'data-step',
        THUMB_CONTAINER_SELECTOR: '.mdc-slider__thumb-container',
        TRACK_MARKER_CONTAINER_SELECTOR: '.mdc-slider__track-marker-container',
        TRACK_SELECTOR: '.mdc-slider__track'
      };
      var numbers$1 = {
        PAGE_FACTOR: 4
      };

      /**
       * @license
       * Copyright 2017 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      var DOWN_EVENTS = ['mousedown', 'pointerdown', 'touchstart'];
      var UP_EVENTS = ['mouseup', 'pointerup', 'touchend'];
      var MOVE_EVENT_MAP = {
        mousedown: 'mousemove',
        pointerdown: 'pointermove',
        touchstart: 'touchmove'
      };
      var KEY_IDS = {
        ARROW_DOWN: 'ArrowDown',
        ARROW_LEFT: 'ArrowLeft',
        ARROW_RIGHT: 'ArrowRight',
        ARROW_UP: 'ArrowUp',
        END: 'End',
        HOME: 'Home',
        PAGE_DOWN: 'PageDown',
        PAGE_UP: 'PageUp'
      };

      var MDCSliderFoundation =
      /** @class */
      function (_super) {
        __extends(MDCSliderFoundation, _super);

        function MDCSliderFoundation(adapter) {
          var _this = _super.call(this, _assign({}, MDCSliderFoundation.defaultAdapter, adapter)) || this;
          /**
           * We set this to NaN since we want it to be a number, but we can't use '0' or '-1'
           * because those could be valid tabindices set by the client code.
           */


          _this.savedTabIndex_ = NaN;
          _this.active_ = false;
          _this.inTransit_ = false;
          _this.isDiscrete_ = false;
          _this.hasTrackMarker_ = false;
          _this.handlingThumbTargetEvt_ = false;
          _this.min_ = 0;
          _this.max_ = 100;
          _this.step_ = 0;
          _this.value_ = 0;
          _this.disabled_ = false;
          _this.preventFocusState_ = false;

          _this.thumbContainerPointerHandler_ = function () {
            return _this.handlingThumbTargetEvt_ = true;
          };

          _this.interactionStartHandler_ = function (evt) {
            return _this.handleDown_(evt);
          };

          _this.keydownHandler_ = function (evt) {
            return _this.handleKeydown_(evt);
          };

          _this.focusHandler_ = function () {
            return _this.handleFocus_();
          };

          _this.blurHandler_ = function () {
            return _this.handleBlur_();
          };

          _this.resizeHandler_ = function () {
            return _this.layout();
          };

          return _this;
        }

        Object.defineProperty(MDCSliderFoundation, "cssClasses", {
          get: function get() {
            return cssClasses$2;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCSliderFoundation, "strings", {
          get: function get() {
            return strings$2;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCSliderFoundation, "numbers", {
          get: function get() {
            return numbers$1;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCSliderFoundation, "defaultAdapter", {
          get: function get() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
              hasClass: function hasClass() {
                return false;
              },
              addClass: function addClass() {
                return undefined;
              },
              removeClass: function removeClass() {
                return undefined;
              },
              getAttribute: function getAttribute() {
                return null;
              },
              setAttribute: function setAttribute() {
                return undefined;
              },
              removeAttribute: function removeAttribute() {
                return undefined;
              },
              computeBoundingRect: function computeBoundingRect() {
                return {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: 0
                };
              },
              getTabIndex: function getTabIndex() {
                return 0;
              },
              registerInteractionHandler: function registerInteractionHandler() {
                return undefined;
              },
              deregisterInteractionHandler: function deregisterInteractionHandler() {
                return undefined;
              },
              registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler() {
                return undefined;
              },
              deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler() {
                return undefined;
              },
              registerBodyInteractionHandler: function registerBodyInteractionHandler() {
                return undefined;
              },
              deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler() {
                return undefined;
              },
              registerResizeHandler: function registerResizeHandler() {
                return undefined;
              },
              deregisterResizeHandler: function deregisterResizeHandler() {
                return undefined;
              },
              notifyInput: function notifyInput() {
                return undefined;
              },
              notifyChange: function notifyChange() {
                return undefined;
              },
              setThumbContainerStyleProperty: function setThumbContainerStyleProperty() {
                return undefined;
              },
              setTrackStyleProperty: function setTrackStyleProperty() {
                return undefined;
              },
              setMarkerValue: function setMarkerValue() {
                return undefined;
              },
              setTrackMarkers: function setTrackMarkers() {
                return undefined;
              },
              isRTL: function isRTL() {
                return false;
              }
            }; // tslint:enable:object-literal-sort-keys
          },
          enumerable: true,
          configurable: true
        });

        MDCSliderFoundation.prototype.init = function () {
          var _this = this;

          this.isDiscrete_ = this.adapter_.hasClass(cssClasses$2.IS_DISCRETE);
          this.hasTrackMarker_ = this.adapter_.hasClass(cssClasses$2.HAS_TRACK_MARKER);
          DOWN_EVENTS.forEach(function (evtName) {
            _this.adapter_.registerInteractionHandler(evtName, _this.interactionStartHandler_);

            _this.adapter_.registerThumbContainerInteractionHandler(evtName, _this.thumbContainerPointerHandler_);
          });
          this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
          this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
          this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
          this.adapter_.registerResizeHandler(this.resizeHandler_);
          this.layout(); // At last step, provide a reasonable default value to discrete slider

          if (this.isDiscrete_ && this.getStep() === 0) {
            this.step_ = 1;
          }
        };

        MDCSliderFoundation.prototype.destroy = function () {
          var _this = this;

          DOWN_EVENTS.forEach(function (evtName) {
            _this.adapter_.deregisterInteractionHandler(evtName, _this.interactionStartHandler_);

            _this.adapter_.deregisterThumbContainerInteractionHandler(evtName, _this.thumbContainerPointerHandler_);
          });
          this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
          this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
          this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);
          this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        };

        MDCSliderFoundation.prototype.setupTrackMarker = function () {
          if (this.isDiscrete_ && this.hasTrackMarker_ && this.getStep() !== 0) {
            this.adapter_.setTrackMarkers(this.getStep(), this.getMax(), this.getMin());
          }
        };

        MDCSliderFoundation.prototype.layout = function () {
          this.rect_ = this.adapter_.computeBoundingRect();
          this.updateUIForCurrentValue_();
        };

        MDCSliderFoundation.prototype.getValue = function () {
          return this.value_;
        };

        MDCSliderFoundation.prototype.setValue = function (value) {
          this.setValue_(value, false);
        };

        MDCSliderFoundation.prototype.getMax = function () {
          return this.max_;
        };

        MDCSliderFoundation.prototype.setMax = function (max) {
          if (max < this.min_) {
            throw new Error('Cannot set max to be less than the slider\'s minimum value');
          }

          this.max_ = max;
          this.setValue_(this.value_, false, true);
          this.adapter_.setAttribute(strings$2.ARIA_VALUEMAX, String(this.max_));
          this.setupTrackMarker();
        };

        MDCSliderFoundation.prototype.getMin = function () {
          return this.min_;
        };

        MDCSliderFoundation.prototype.setMin = function (min) {
          if (min > this.max_) {
            throw new Error('Cannot set min to be greater than the slider\'s maximum value');
          }

          this.min_ = min;
          this.setValue_(this.value_, false, true);
          this.adapter_.setAttribute(strings$2.ARIA_VALUEMIN, String(this.min_));
          this.setupTrackMarker();
        };

        MDCSliderFoundation.prototype.getStep = function () {
          return this.step_;
        };

        MDCSliderFoundation.prototype.setStep = function (step) {
          if (step < 0) {
            throw new Error('Step cannot be set to a negative number');
          }

          if (this.isDiscrete_ && (typeof step !== 'number' || step < 1)) {
            step = 1;
          }

          this.step_ = step;
          this.setValue_(this.value_, false, true);
          this.setupTrackMarker();
        };

        MDCSliderFoundation.prototype.isDisabled = function () {
          return this.disabled_;
        };

        MDCSliderFoundation.prototype.setDisabled = function (disabled) {
          this.disabled_ = disabled;
          this.toggleClass_(cssClasses$2.DISABLED, this.disabled_);

          if (this.disabled_) {
            this.savedTabIndex_ = this.adapter_.getTabIndex();
            this.adapter_.setAttribute(strings$2.ARIA_DISABLED, 'true');
            this.adapter_.removeAttribute('tabindex');
          } else {
            this.adapter_.removeAttribute(strings$2.ARIA_DISABLED);

            if (!isNaN(this.savedTabIndex_)) {
              this.adapter_.setAttribute('tabindex', String(this.savedTabIndex_));
            }
          }
        };
        /**
         * Called when the user starts interacting with the slider
         */


        MDCSliderFoundation.prototype.handleDown_ = function (downEvent) {
          var _this = this;

          if (this.disabled_) {
            return;
          }

          this.preventFocusState_ = true;
          this.setInTransit_(!this.handlingThumbTargetEvt_);
          this.handlingThumbTargetEvt_ = false;
          this.setActive_(true);

          var moveHandler = function moveHandler(moveEvent) {
            _this.handleMove_(moveEvent);
          };

          var moveEventType = MOVE_EVENT_MAP[downEvent.type]; // Note: upHandler is [de]registered on ALL potential pointer-related release event types, since some browsers
          // do not always fire these consistently in pairs.
          // (See https://github.com/material-components/material-components-web/issues/1192)

          var upHandler = function upHandler() {
            _this.handleUp_();

            _this.adapter_.deregisterBodyInteractionHandler(moveEventType, moveHandler);

            UP_EVENTS.forEach(function (evtName) {
              return _this.adapter_.deregisterBodyInteractionHandler(evtName, upHandler);
            });
          };

          this.adapter_.registerBodyInteractionHandler(moveEventType, moveHandler);
          UP_EVENTS.forEach(function (evtName) {
            return _this.adapter_.registerBodyInteractionHandler(evtName, upHandler);
          });
          this.setValueFromEvt_(downEvent);
        };
        /**
         * Called when the user moves the slider
         */


        MDCSliderFoundation.prototype.handleMove_ = function (evt) {
          evt.preventDefault();
          this.setValueFromEvt_(evt);
        };
        /**
         * Called when the user's interaction with the slider ends
         */


        MDCSliderFoundation.prototype.handleUp_ = function () {
          this.setActive_(false);
          this.adapter_.notifyChange();
        };
        /**
         * Returns the pageX of the event
         */


        MDCSliderFoundation.prototype.getPageX_ = function (evt) {
          if (evt.targetTouches && evt.targetTouches.length > 0) {
            return evt.targetTouches[0].pageX;
          }

          return evt.pageX;
        };
        /**
         * Sets the slider value from an event
         */


        MDCSliderFoundation.prototype.setValueFromEvt_ = function (evt) {
          var pageX = this.getPageX_(evt);
          var value = this.computeValueFromPageX_(pageX);
          this.setValue_(value, true);
        };
        /**
         * Computes the new value from the pageX position
         */


        MDCSliderFoundation.prototype.computeValueFromPageX_ = function (pageX) {
          var _a = this,
              max = _a.max_,
              min = _a.min_;

          var xPos = pageX - this.rect_.left;
          var pctComplete = xPos / this.rect_.width;

          if (this.adapter_.isRTL()) {
            pctComplete = 1 - pctComplete;
          } // Fit the percentage complete between the range [min,max]
          // by remapping from [0, 1] to [min, min+(max-min)].


          return min + pctComplete * (max - min);
        };
        /**
         * Handles keydown events
         */


        MDCSliderFoundation.prototype.handleKeydown_ = function (evt) {
          var keyId = this.getKeyId_(evt);
          var value = this.getValueForKeyId_(keyId);

          if (isNaN(value)) {
            return;
          } // Prevent page from scrolling due to key presses that would normally scroll the page


          evt.preventDefault();
          this.adapter_.addClass(cssClasses$2.FOCUS);
          this.setValue_(value, true);
          this.adapter_.notifyChange();
        };
        /**
         * Returns the computed name of the event
         */


        MDCSliderFoundation.prototype.getKeyId_ = function (kbdEvt) {
          if (kbdEvt.key === KEY_IDS.ARROW_LEFT || kbdEvt.keyCode === 37) {
            return KEY_IDS.ARROW_LEFT;
          }

          if (kbdEvt.key === KEY_IDS.ARROW_RIGHT || kbdEvt.keyCode === 39) {
            return KEY_IDS.ARROW_RIGHT;
          }

          if (kbdEvt.key === KEY_IDS.ARROW_UP || kbdEvt.keyCode === 38) {
            return KEY_IDS.ARROW_UP;
          }

          if (kbdEvt.key === KEY_IDS.ARROW_DOWN || kbdEvt.keyCode === 40) {
            return KEY_IDS.ARROW_DOWN;
          }

          if (kbdEvt.key === KEY_IDS.HOME || kbdEvt.keyCode === 36) {
            return KEY_IDS.HOME;
          }

          if (kbdEvt.key === KEY_IDS.END || kbdEvt.keyCode === 35) {
            return KEY_IDS.END;
          }

          if (kbdEvt.key === KEY_IDS.PAGE_UP || kbdEvt.keyCode === 33) {
            return KEY_IDS.PAGE_UP;
          }

          if (kbdEvt.key === KEY_IDS.PAGE_DOWN || kbdEvt.keyCode === 34) {
            return KEY_IDS.PAGE_DOWN;
          }

          return '';
        };
        /**
         * Computes the value given a keyboard key ID
         */


        MDCSliderFoundation.prototype.getValueForKeyId_ = function (keyId) {
          var _a = this,
              max = _a.max_,
              min = _a.min_,
              step = _a.step_;

          var delta = step || (max - min) / 100;
          var valueNeedsToBeFlipped = this.adapter_.isRTL() && (keyId === KEY_IDS.ARROW_LEFT || keyId === KEY_IDS.ARROW_RIGHT);

          if (valueNeedsToBeFlipped) {
            delta = -delta;
          }

          switch (keyId) {
            case KEY_IDS.ARROW_LEFT:
            case KEY_IDS.ARROW_DOWN:
              return this.value_ - delta;

            case KEY_IDS.ARROW_RIGHT:
            case KEY_IDS.ARROW_UP:
              return this.value_ + delta;

            case KEY_IDS.HOME:
              return this.min_;

            case KEY_IDS.END:
              return this.max_;

            case KEY_IDS.PAGE_UP:
              return this.value_ + delta * numbers$1.PAGE_FACTOR;

            case KEY_IDS.PAGE_DOWN:
              return this.value_ - delta * numbers$1.PAGE_FACTOR;

            default:
              return NaN;
          }
        };

        MDCSliderFoundation.prototype.handleFocus_ = function () {
          if (this.preventFocusState_) {
            return;
          }

          this.adapter_.addClass(cssClasses$2.FOCUS);
        };

        MDCSliderFoundation.prototype.handleBlur_ = function () {
          this.preventFocusState_ = false;
          this.adapter_.removeClass(cssClasses$2.FOCUS);
        };
        /**
         * Sets the value of the slider
         */


        MDCSliderFoundation.prototype.setValue_ = function (value, shouldFireInput, force) {
          if (force === void 0) {
            force = false;
          }

          if (value === this.value_ && !force) {
            return;
          }

          var _a = this,
              min = _a.min_,
              max = _a.max_;

          var valueSetToBoundary = value === min || value === max;

          if (this.step_ && !valueSetToBoundary) {
            value = this.quantize_(value);
          }

          if (value < min) {
            value = min;
          } else if (value > max) {
            value = max;
          }

          this.value_ = value;
          this.adapter_.setAttribute(strings$2.ARIA_VALUENOW, String(this.value_));
          this.updateUIForCurrentValue_();

          if (shouldFireInput) {
            this.adapter_.notifyInput();

            if (this.isDiscrete_) {
              this.adapter_.setMarkerValue(value);
            }
          }
        };
        /**
         * Calculates the quantized value
         */


        MDCSliderFoundation.prototype.quantize_ = function (value) {
          var numSteps = Math.round(value / this.step_);
          return numSteps * this.step_;
        };

        MDCSliderFoundation.prototype.updateUIForCurrentValue_ = function () {
          var _this = this;

          var _a = this,
              max = _a.max_,
              min = _a.min_,
              value = _a.value_;

          var pctComplete = (value - min) / (max - min);
          var translatePx = pctComplete * this.rect_.width;

          if (this.adapter_.isRTL()) {
            translatePx = this.rect_.width - translatePx;
          }

          var transformProp = getCorrectPropertyName(window, 'transform');
          var transitionendEvtName = getCorrectEventName(window, 'transitionend');

          if (this.inTransit_) {
            var onTransitionEnd_1 = function onTransitionEnd_1() {
              _this.setInTransit_(false);

              _this.adapter_.deregisterThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd_1);
            };

            this.adapter_.registerThumbContainerInteractionHandler(transitionendEvtName, onTransitionEnd_1);
          }

          requestAnimationFrame(function () {
            // NOTE(traviskaufman): It would be nice to use calc() here,
            // but IE cannot handle calcs in transforms correctly.
            // See: https://goo.gl/NC2itk
            // Also note that the -50% offset is used to center the slider thumb.
            _this.adapter_.setThumbContainerStyleProperty(transformProp, "translateX(" + translatePx + "px) translateX(-50%)");

            _this.adapter_.setTrackStyleProperty(transformProp, "scaleX(" + pctComplete + ")");
          });
        };
        /**
         * Toggles the active state of the slider
         */


        MDCSliderFoundation.prototype.setActive_ = function (active) {
          this.active_ = active;
          this.toggleClass_(cssClasses$2.ACTIVE, this.active_);
        };
        /**
         * Toggles the inTransit state of the slider
         */


        MDCSliderFoundation.prototype.setInTransit_ = function (inTransit) {
          this.inTransit_ = inTransit;
          this.toggleClass_(cssClasses$2.IN_TRANSIT, this.inTransit_);
        };
        /**
         * Conditionally adds or removes a class based on shouldBePresent
         */


        MDCSliderFoundation.prototype.toggleClass_ = function (className, shouldBePresent) {
          if (shouldBePresent) {
            this.adapter_.addClass(className);
          } else {
            this.adapter_.removeClass(className);
          }
        };

        return MDCSliderFoundation;
      }(MDCFoundation);

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
       * Stores the StyleInfo object applied to a given AttributePart.
       * Used to unset existing values when a new StyleInfo object is applied.
       */

      var previousStylePropertyCache = new WeakMap();
      /**
       * A directive that applies CSS properties to an element.
       *
       * `styleMap` can only be used in the `style` attribute and must be the only
       * expression in the attribute. It takes the property names in the `styleInfo`
       * object and adds the property values as CSS properties. Property names with
       * dashes (`-`) are assumed to be valid CSS property names and set on the
       * element's style object using `setProperty()`. Names without dashes are
       * assumed to be camelCased JavaScript property names and set on the element's
       * style object using property assignment, allowing the style object to
       * translate JavaScript-style names to CSS property names.
       *
       * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
       * '0'})` sets the `background-color`, `border-top` and `--size` properties.
       *
       * @param styleInfo {StyleInfo}
       */

      var styleMap = directive(function (styleInfo) {
        return function (part) {
          if (!(part instanceof AttributePart) || part instanceof PropertyPart || part.committer.name !== 'style' || part.committer.parts.length > 1) {
            throw new Error('The `styleMap` directive must be used in the style attribute ' + 'and must be the only part in the attribute.');
          }

          var committer = part.committer;
          var style = committer.element.style;
          var previousStyleProperties = previousStylePropertyCache.get(part);

          if (previousStyleProperties === undefined) {
            // Write static styles once
            style.cssText = committer.strings.join(' ');
            previousStylePropertyCache.set(part, previousStyleProperties = new Set());
          } // Remove old properties that no longer exist in styleInfo
          // We use forEach() instead of for-of so that re don't require down-level
          // iteration.


          previousStyleProperties.forEach(function (name) {
            if (!(name in styleInfo)) {
              previousStyleProperties.delete(name);

              if (name.indexOf('-') === -1) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                style[name] = null;
              } else {
                style.removeProperty(name);
              }
            }
          }); // Add or update properties

          for (var name in styleInfo) {
            previousStyleProperties.add(name);

            if (name.indexOf('-') === -1) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              style[name] = styleInfo[name];
            } else {
              style.setProperty(name, styleInfo[name]);
            }
          }
        };
      });

      var _templateObject$5, _templateObject2$2, _templateObject3$2;
      var _MDCSliderFoundation$ = MDCSliderFoundation.strings,
          INPUT_EVENT = _MDCSliderFoundation$.INPUT_EVENT,
          CHANGE_EVENT = _MDCSliderFoundation$.CHANGE_EVENT;
      var SliderBase = /*#__PURE__*/function (_FormElement) {
        _inherits(SliderBase, _FormElement);

        var _super = _createSuper(SliderBase);

        function SliderBase() {
          var _this;

          _classCallCheck(this, SliderBase);

          _this = _super.apply(this, arguments);
          _this.mdcFoundationClass = MDCSliderFoundation;
          _this.value = 0;
          _this.min = 0;
          _this.max = 100;
          _this.step = 0;
          _this.disabled = false;
          _this.discrete = false;
          _this.markers = false;
          _this.pinMarkerText = '';
          _this.trackMarkerContainerStyles = {};
          _this.thumbContainerStyles = {};
          _this.trackStyles = {};
          _this.isFoundationDestroyed = false;
          return _this;
        } // TODO(sorvell) #css: needs a default width


        _createClass(SliderBase, [{
          key: "render",
          value: function render() {
            var hostClassInfo = {
              'mdc-slider--discrete': this.discrete,
              'mdc-slider--display-markers': this.markers && this.discrete
            };
            var markersTemplate = '';

            if (this.discrete && this.markers) {
              markersTemplate = html(_templateObject$5 || (_templateObject$5 = _taggedTemplateLiteral(["<div class=\"mdc-slider__track-marker-container\" style=\"", "\"></div>"])), styleMap(this.trackMarkerContainerStyles));
            }

            var pin = '';

            if (this.discrete) {
              pin = html(_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["<div class=\"mdc-slider__pin\"><span class=\"mdc-slider__pin-value-marker\">", "</span></div>"])), this.pinMarkerText);
            }

            return html(_templateObject3$2 || (_templateObject3$2 = _taggedTemplateLiteral(["<div class=\"mdc-slider ", "\" tabindex=\"0\" role=\"slider\" aria-valuemin=\"", "\" aria-valuemax=\"", "\" aria-valuenow=\"", "\" aria-disabled=\"", "\" data-step=\"", "\"><div class=\"mdc-slider__track-container\"><div class=\"mdc-slider__track\" style=\"", "\"></div>", "</div><div class=\"mdc-slider__thumb-container\" style=\"", "\">", " <svg class=\"mdc-slider__thumb\" width=\"21\" height=\"21\"><circle cx=\"10.5\" cy=\"10.5\" r=\"7.875\"></circle></svg><div class=\"mdc-slider__focus-ring\"></div></div></div>"])), classMap(hostClassInfo), this.min, this.max, this.value, this.disabled, this.step, styleMap(this.trackStyles), markersTemplate, styleMap(this.thumbContainerStyles), pin);
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            _get(_getPrototypeOf(SliderBase.prototype), "connectedCallback", this).call(this);

            if (this.mdcRoot && this.isFoundationDestroyed) {
              this.isFoundationDestroyed = false;
              this.mdcFoundation.init();
            }
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            _get(_getPrototypeOf(SliderBase.prototype), "disconnectedCallback", this).call(this);

            this.isFoundationDestroyed = true;
            this.mdcFoundation.destroy();
          }
        }, {
          key: "createAdapter",
          value: function createAdapter() {
            var _this2 = this;

            return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), {
              getAttribute: function getAttribute(name) {
                return _this2.mdcRoot.getAttribute(name);
              },
              setAttribute: function setAttribute(name, value) {
                return _this2.mdcRoot.setAttribute(name, value);
              },
              removeAttribute: function removeAttribute(name) {
                return _this2.mdcRoot.removeAttribute(name);
              },
              computeBoundingRect: function computeBoundingRect() {
                return _this2.mdcRoot.getBoundingClientRect();
              },
              getTabIndex: function getTabIndex() {
                return _this2.mdcRoot.tabIndex;
              },
              registerInteractionHandler: function registerInteractionHandler(type, handler) {
                var init = type === 'touchstart' ? applyPassive() : undefined;

                _this2.mdcRoot.addEventListener(type, handler, init);
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
                return _this2.mdcRoot.removeEventListener(type, handler);
              },
              registerThumbContainerInteractionHandler: function registerThumbContainerInteractionHandler(type, handler) {
                var init = type === 'touchstart' ? applyPassive() : undefined;

                _this2.thumbContainer.addEventListener(type, handler, init);
              },
              deregisterThumbContainerInteractionHandler: function deregisterThumbContainerInteractionHandler(type, handler) {
                return _this2.thumbContainer.removeEventListener(type, handler);
              },
              registerBodyInteractionHandler: function registerBodyInteractionHandler(type, handler) {
                return document.body.addEventListener(type, handler);
              },
              deregisterBodyInteractionHandler: function deregisterBodyInteractionHandler(type, handler) {
                return document.body.removeEventListener(type, handler);
              },
              registerResizeHandler: function registerResizeHandler(handler) {
                return window.addEventListener('resize', handler, applyPassive());
              },
              deregisterResizeHandler: function deregisterResizeHandler(handler) {
                return window.removeEventListener('resize', handler);
              },
              notifyInput: function notifyInput() {
                var value = _this2.mdcFoundation.getValue();

                if (value !== _this2.value) {
                  _this2.value = value;

                  _this2.dispatchEvent(new CustomEvent(INPUT_EVENT, {
                    detail: _this2,
                    bubbles: true,
                    cancelable: true
                  }));
                }
              },
              notifyChange: function notifyChange() {
                _this2.dispatchEvent(new CustomEvent(CHANGE_EVENT, {
                  detail: _this2,
                  bubbles: true,
                  cancelable: true
                }));
              },
              setThumbContainerStyleProperty: function setThumbContainerStyleProperty(propertyName, value) {
                _this2.thumbContainerStyles[propertyName] = value;

                _this2.requestUpdate();
              },
              setTrackStyleProperty: function setTrackStyleProperty(propertyName, value) {
                _this2.trackStyles[propertyName] = value;

                _this2.requestUpdate();
              },
              setMarkerValue: function setMarkerValue(value) {
                return _this2.pinMarkerText = value.toString();
              },
              setTrackMarkers: function setTrackMarkers(step, max, min) {
                // calculates the CSS for the notches on the slider. Taken from
                // https://github.com/material-components/material-components-web/blob/8f851d9ed2f75dc8b8956d15b3bb2619e59fa8a9/packages/mdc-slider/component.ts#L122
                var stepStr = step.toLocaleString();
                var maxStr = max.toLocaleString();
                var minStr = min.toLocaleString(); // keep calculation in css for better rounding/subpixel behavior

                var markerAmount = "((".concat(maxStr, " - ").concat(minStr, ") / ").concat(stepStr, ")");
                var markerWidth = '2px';
                var markerBkgdImage = "linear-gradient(to right, currentColor ".concat(markerWidth, ", transparent 0)");
                var markerBkgdLayout = "0 center / calc((100% - ".concat(markerWidth, ") / ").concat(markerAmount, ") 100% repeat-x");
                var markerBkgdShorthand = "".concat(markerBkgdImage, " ").concat(markerBkgdLayout);
                _this2.trackMarkerContainerStyles['background'] = markerBkgdShorthand;

                _this2.requestUpdate();
              },
              isRTL: function isRTL() {
                return getComputedStyle(_this2.mdcRoot).direction === 'rtl';
              }
            });
          }
        }, {
          key: "layout",
          value: function layout() {
            this.mdcFoundation.layout();
          }
        }]);

        return SliderBase;
      }(FormElement);

      __decorate([query('.mdc-slider')], SliderBase.prototype, "mdcRoot", void 0);

      __decorate([query('.mdc-slider')], SliderBase.prototype, "formElement", void 0);

      __decorate([query('.mdc-slider__thumb-container')], SliderBase.prototype, "thumbContainer", void 0);

      __decorate([query('.mdc-slider__pin-value-marker')], SliderBase.prototype, "pinMarker", void 0);

      __decorate([property({
        type: Number
      }), observer(function (value) {
        this.mdcFoundation.setValue(value);
      })], SliderBase.prototype, "value", void 0);

      __decorate([property({
        type: Number
      }), observer(function (value) {
        this.mdcFoundation.setMin(value);
      })], SliderBase.prototype, "min", void 0);

      __decorate([property({
        type: Number
      }), observer(function (value) {
        this.mdcFoundation.setMax(value);
      })], SliderBase.prototype, "max", void 0);

      __decorate([property({
        type: Number
      }), observer(function (value) {
        this.mdcFoundation.setStep(value);
      })], SliderBase.prototype, "step", void 0);

      __decorate([property({
        type: Boolean,
        reflect: true
      }), observer(function (value) {
        this.mdcFoundation.setDisabled(value);
      })], SliderBase.prototype, "disabled", void 0);

      __decorate([property({
        type: Boolean,
        reflect: true
      })], SliderBase.prototype, "discrete", void 0);

      __decorate([property({
        type: Boolean,
        reflect: true
      }), observer(function () {
        this.mdcFoundation.setupTrackMarker();
      })], SliderBase.prototype, "markers", void 0);

      __decorate([property({
        type: String
      })], SliderBase.prototype, "pinMarkerText", void 0);

      __decorate([property({
        type: Object
      })], SliderBase.prototype, "trackMarkerContainerStyles", void 0);

      __decorate([property({
        type: Object
      })], SliderBase.prototype, "thumbContainerStyles", void 0);

      __decorate([property({
        type: Object
      })], SliderBase.prototype, "trackStyles", void 0);

      var _templateObject$6;
      var style$2 = css(_templateObject$6 || (_templateObject$6 = _taggedTemplateLiteral(["@keyframes mdc-slider-emphasize{0%{animation-timing-function:ease-out}50%{animation-timing-function:ease-in;transform:scale(.85)}100%{transform:scale(.571)}}.mdc-slider{position:relative;width:100%;height:48px;cursor:pointer;touch-action:pan-x;-webkit-tap-highlight-color:transparent}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track{background-color:#018786;background-color:var(--mdc-theme-secondary,#018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-container{background-color:rgba(1,135,134,.26)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__track-marker-container{background-color:#018786;background-color:var(--mdc-theme-secondary,#018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__thumb{fill:#018786;fill:var(--mdc-theme-secondary,#018786);stroke:#018786;stroke:var(--mdc-theme-secondary,#018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__focus-ring{background-color:#018786;background-color:var(--mdc-theme-secondary,#018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{background-color:#018786;background-color:var(--mdc-theme-secondary,#018786)}.mdc-slider:not(.mdc-slider--disabled) .mdc-slider__pin{color:#fff;color:var(--mdc-theme-text-primary-on-dark,#fff)}.mdc-slider--disabled{cursor:auto}.mdc-slider--disabled .mdc-slider__track{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__track-container{background-color:rgba(154,154,154,.26)}.mdc-slider--disabled .mdc-slider__track-marker-container{background-color:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{fill:#9a9a9a;stroke:#9a9a9a}.mdc-slider--disabled .mdc-slider__thumb{stroke:#fff;stroke:var(--mdc-slider-bg-color-behind-component,#fff)}.mdc-slider:focus{outline:0}.mdc-slider__track-container{position:absolute;top:50%;width:100%;height:2px;overflow:hidden}.mdc-slider__track{position:absolute;width:100%;height:100%;transform-origin:left top;will-change:transform}.mdc-slider[dir=rtl] .mdc-slider__track,[dir=rtl] .mdc-slider .mdc-slider__track{transform-origin:right top}.mdc-slider__track-marker-container{display:flex;margin-right:0;margin-left:-1px;visibility:hidden}.mdc-slider[dir=rtl] .mdc-slider__track-marker-container,[dir=rtl] .mdc-slider .mdc-slider__track-marker-container{margin-right:-1px;margin-left:0}.mdc-slider__track-marker-container::after{display:block;width:2px;height:2px;content:\"\"}.mdc-slider__track-marker{flex:1}.mdc-slider__track-marker::after{display:block;width:2px;height:2px;content:\"\"}.mdc-slider__track-marker:first-child::after{width:3px}.mdc-slider__thumb-container{position:absolute;top:15px;left:0;width:21px;height:100%;user-select:none;will-change:transform}.mdc-slider__thumb{position:absolute;top:0;left:0;transform:scale(.571);stroke-width:3.5;transition:transform .1s ease-out,fill .1s ease-out,stroke .1s ease-out}.mdc-slider__focus-ring{width:21px;height:21px;border-radius:50%;opacity:0;transition:transform .266s ease-out,opacity .266s ease-out,background-color .266s ease-out}.mdc-slider__pin{display:flex;position:absolute;top:0;left:0;align-items:center;justify-content:center;width:26px;height:26px;margin-top:-2px;margin-left:-2px;transform:rotate(-45deg) scale(0) translate(0,0);border-radius:50% 50% 50% 0;z-index:1;transition:transform .1s ease-out}.mdc-slider__pin-value-marker{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;transform:rotate(45deg)}.mdc-slider--active .mdc-slider__thumb{transform:scale3d(1,1,1)}.mdc-slider--focus .mdc-slider__thumb{animation:mdc-slider-emphasize .266s linear}.mdc-slider--focus .mdc-slider__focus-ring{transform:scale3d(1.55,1.55,1.55);opacity:.25}.mdc-slider--in-transit .mdc-slider__thumb{transition-delay:140ms}.mdc-slider--in-transit .mdc-slider__thumb-container,.mdc-slider--in-transit .mdc-slider__track,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__thumb-container,.mdc-slider:focus:not(.mdc-slider--active) .mdc-slider__track{transition:transform 80ms ease}.mdc-slider--discrete.mdc-slider--active .mdc-slider__thumb{transform:scale(calc(12 / 21))}.mdc-slider--discrete.mdc-slider--active .mdc-slider__pin{transform:rotate(-45deg) scale(1) translate(19px,-20px)}.mdc-slider--discrete.mdc-slider--focus .mdc-slider__thumb{animation:none}.mdc-slider--discrete.mdc-slider--display-markers .mdc-slider__track-marker-container{visibility:visible}:host{display:inline-block;min-width:120px;outline:0}"])));

      var Slider = /*#__PURE__*/function (_SliderBase) {
        _inherits(Slider, _SliderBase);

        var _super = _createSuper(Slider);

        function Slider() {
          _classCallCheck(this, Slider);

          return _super.apply(this, arguments);
        }

        return Slider;
      }(SliderBase);

      Slider.styles = style$2;
      Slider = __decorate([customElement('mwc-slider')], Slider);

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      var strings$3 = {
        NOTCH_ELEMENT_SELECTOR: '.mdc-notched-outline__notch'
      };
      var numbers$2 = {
        // This should stay in sync with $mdc-notched-outline-padding * 2.
        NOTCH_ELEMENT_PADDING: 8
      };
      var cssClasses$3 = {
        NO_LABEL: 'mdc-notched-outline--no-label',
        OUTLINE_NOTCHED: 'mdc-notched-outline--notched',
        OUTLINE_UPGRADED: 'mdc-notched-outline--upgraded'
      };

      /**
       * @license
       * Copyright 2017 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      var MDCNotchedOutlineFoundation =
      /** @class */
      function (_super) {
        __extends(MDCNotchedOutlineFoundation, _super);

        function MDCNotchedOutlineFoundation(adapter) {
          return _super.call(this, _assign({}, MDCNotchedOutlineFoundation.defaultAdapter, adapter)) || this;
        }

        Object.defineProperty(MDCNotchedOutlineFoundation, "strings", {
          get: function get() {
            return strings$3;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCNotchedOutlineFoundation, "cssClasses", {
          get: function get() {
            return cssClasses$3;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCNotchedOutlineFoundation, "numbers", {
          get: function get() {
            return numbers$2;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCNotchedOutlineFoundation, "defaultAdapter", {
          /**
           * See {@link MDCNotchedOutlineAdapter} for typing information on parameters and return types.
           */
          get: function get() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
              addClass: function addClass() {
                return undefined;
              },
              removeClass: function removeClass() {
                return undefined;
              },
              setNotchWidthProperty: function setNotchWidthProperty() {
                return undefined;
              },
              removeNotchWidthProperty: function removeNotchWidthProperty() {
                return undefined;
              }
            }; // tslint:enable:object-literal-sort-keys
          },
          enumerable: true,
          configurable: true
        });
        /**
         * Adds the outline notched selector and updates the notch width calculated based off of notchWidth.
         */

        MDCNotchedOutlineFoundation.prototype.notch = function (notchWidth) {
          var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

          if (notchWidth > 0) {
            notchWidth += numbers$2.NOTCH_ELEMENT_PADDING; // Add padding from left/right.
          }

          this.adapter_.setNotchWidthProperty(notchWidth);
          this.adapter_.addClass(OUTLINE_NOTCHED);
        };
        /**
         * Removes notched outline selector to close the notch in the outline.
         */


        MDCNotchedOutlineFoundation.prototype.closeNotch = function () {
          var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;
          this.adapter_.removeClass(OUTLINE_NOTCHED);
          this.adapter_.removeNotchWidthProperty();
        };

        return MDCNotchedOutlineFoundation;
      }(MDCFoundation);

      var _templateObject$7;
      var NotchedOutlineBase = /*#__PURE__*/function (_BaseElement) {
        _inherits(NotchedOutlineBase, _BaseElement);

        var _super = _createSuper(NotchedOutlineBase);

        function NotchedOutlineBase() {
          var _this;

          _classCallCheck(this, NotchedOutlineBase);

          _this = _super.apply(this, arguments);
          _this.mdcFoundationClass = MDCNotchedOutlineFoundation;
          _this.width = 0;
          _this.open = false;
          _this.lastOpen = _this.open;
          return _this;
        }

        _createClass(NotchedOutlineBase, [{
          key: "createAdapter",
          value: function createAdapter() {
            var _this2 = this;

            return {
              addClass: function addClass(className) {
                return _this2.mdcRoot.classList.add(className);
              },
              removeClass: function removeClass(className) {
                return _this2.mdcRoot.classList.remove(className);
              },
              setNotchWidthProperty: function setNotchWidthProperty(width) {
                return _this2.notchElement.style.setProperty('width', "".concat(width, "px"));
              },
              removeNotchWidthProperty: function removeNotchWidthProperty() {
                return _this2.notchElement.style.removeProperty('width');
              }
            };
          }
        }, {
          key: "openOrClose",
          value: function openOrClose(shouldOpen, width) {
            if (!this.mdcFoundation) {
              return;
            }

            if (shouldOpen && width !== undefined) {
              this.mdcFoundation.notch(width);
            } else {
              this.mdcFoundation.closeNotch();
            }
          }
        }, {
          key: "render",
          value: function render() {
            this.openOrClose(this.open, this.width);
            return html(_templateObject$7 || (_templateObject$7 = _taggedTemplateLiteral(["<div class=\"mdc-notched-outline\"><div class=\"mdc-notched-outline__leading\"></div><div class=\"mdc-notched-outline__notch\"><slot></slot></div><div class=\"mdc-notched-outline__trailing\"></div></div>"])));
          }
        }]);

        return NotchedOutlineBase;
      }(BaseElement);

      __decorate([query('.mdc-notched-outline')], NotchedOutlineBase.prototype, "mdcRoot", void 0);

      __decorate([property({
        type: Number
      })], NotchedOutlineBase.prototype, "width", void 0);

      __decorate([property({
        type: Boolean,
        reflect: true
      })], NotchedOutlineBase.prototype, "open", void 0);

      __decorate([query('.mdc-notched-outline__notch')], NotchedOutlineBase.prototype, "notchElement", void 0);

      var _templateObject$8;
      var style$3 = css(_templateObject$8 || (_templateObject$8 = _taggedTemplateLiteral([".mdc-notched-outline{display:flex;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}.mdc-notched-outline[dir=rtl],[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}.mdc-notched-outline__leading[dir=rtl],[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}.mdc-notched-outline__trailing[dir=rtl],[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / .75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl],[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}:host{display:block;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}:host[dir=rtl],[dir=rtl] :host{text-align:right}::slotted(.mdc-floating-label){display:inline-block;position:relative;top:17px;bottom:auto;max-width:100%}::slotted(.mdc-floating-label--float-above){text-overflow:clip}.mdc-notched-outline--upgraded ::slotted(.mdc-floating-label--float-above){max-width:calc(100% / .75)}.mdc-notched-outline__leading{width:12px;width:var(--mdc-notched-outline-leading-width,12px);border-radius:4px 0 0 4px;border-radius:var(--mdc-notched-outline-leading-border-radius,4px 0 0 4px)}.mdc-notched-outline__trailing{border-radius:0 4px 4px 0;border-radius:var(--mdc-notched-outline-trailing-border-radius,0 4px 4px 0)}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{border-color:var(--mdc-notched-outline-border-color,var(--mdc-theme-primary,#6200ee));border-width:1px;border-width:var(--mdc-notched-outline-stroke-width,1px)}"])));

      var NotchedOutline = /*#__PURE__*/function (_NotchedOutlineBase) {
        _inherits(NotchedOutline, _NotchedOutlineBase);

        var _super = _createSuper(NotchedOutline);

        function NotchedOutline() {
          _classCallCheck(this, NotchedOutline);

          return _super.apply(this, arguments);
        }

        return NotchedOutline;
      }(NotchedOutlineBase);

      NotchedOutline.styles = style$3;
      NotchedOutline = __decorate([customElement('mwc-notched-outline')], NotchedOutline);

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      var cssClasses$4 = {
        LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
        LABEL_SHAKE: 'mdc-floating-label--shake',
        ROOT: 'mdc-floating-label'
      };

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      var MDCFloatingLabelFoundation =
      /** @class */
      function (_super) {
        __extends(MDCFloatingLabelFoundation, _super);

        function MDCFloatingLabelFoundation(adapter) {
          var _this = _super.call(this, _assign({}, MDCFloatingLabelFoundation.defaultAdapter, adapter)) || this;

          _this.shakeAnimationEndHandler_ = function () {
            return _this.handleShakeAnimationEnd_();
          };

          return _this;
        }

        Object.defineProperty(MDCFloatingLabelFoundation, "cssClasses", {
          get: function get() {
            return cssClasses$4;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCFloatingLabelFoundation, "defaultAdapter", {
          /**
           * See {@link MDCFloatingLabelAdapter} for typing information on parameters and return types.
           */
          get: function get() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
              addClass: function addClass() {
                return undefined;
              },
              removeClass: function removeClass() {
                return undefined;
              },
              getWidth: function getWidth() {
                return 0;
              },
              registerInteractionHandler: function registerInteractionHandler() {
                return undefined;
              },
              deregisterInteractionHandler: function deregisterInteractionHandler() {
                return undefined;
              }
            }; // tslint:enable:object-literal-sort-keys
          },
          enumerable: true,
          configurable: true
        });

        MDCFloatingLabelFoundation.prototype.init = function () {
          this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
        };

        MDCFloatingLabelFoundation.prototype.destroy = function () {
          this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
        };
        /**
         * Returns the width of the label element.
         */


        MDCFloatingLabelFoundation.prototype.getWidth = function () {
          return this.adapter_.getWidth();
        };
        /**
         * Styles the label to produce a shake animation to indicate an error.
         * @param shouldShake If true, adds the shake CSS class; otherwise, removes shake class.
         */


        MDCFloatingLabelFoundation.prototype.shake = function (shouldShake) {
          var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

          if (shouldShake) {
            this.adapter_.addClass(LABEL_SHAKE);
          } else {
            this.adapter_.removeClass(LABEL_SHAKE);
          }
        };
        /**
         * Styles the label to float or dock.
         * @param shouldFloat If true, adds the float CSS class; otherwise, removes float and shake classes to dock the label.
         */


        MDCFloatingLabelFoundation.prototype.float = function (shouldFloat) {
          var _a = MDCFloatingLabelFoundation.cssClasses,
              LABEL_FLOAT_ABOVE = _a.LABEL_FLOAT_ABOVE,
              LABEL_SHAKE = _a.LABEL_SHAKE;

          if (shouldFloat) {
            this.adapter_.addClass(LABEL_FLOAT_ABOVE);
          } else {
            this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
            this.adapter_.removeClass(LABEL_SHAKE);
          }
        };

        MDCFloatingLabelFoundation.prototype.handleShakeAnimationEnd_ = function () {
          var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;
          this.adapter_.removeClass(LABEL_SHAKE);
        };

        return MDCFloatingLabelFoundation;
      }(MDCFoundation);

      var createAdapter = function createAdapter(labelElement) {
        return {
          addClass: function addClass(className) {
            return labelElement.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return labelElement.classList.remove(className);
          },
          getWidth: function getWidth() {
            return labelElement.scrollWidth;
          },
          registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
            labelElement.addEventListener(evtType, handler);
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
            labelElement.removeEventListener(evtType, handler);
          }
        };
      };

      var partToFoundationMap = new WeakMap();
      var floatingLabel = directive(function (label) {
        return function (part) {
          var lastFoundation = partToFoundationMap.get(part);

          if (!lastFoundation) {
            var labelElement = part.committer.element;
            labelElement.classList.add('mdc-floating-label');
            var adapter = createAdapter(labelElement);
            var foundation = new MDCFloatingLabelFoundation(adapter);
            foundation.init();
            part.setValue(foundation);
            partToFoundationMap.set(part, {
              label: label,
              foundation: foundation
            });
          } else if (lastFoundation.label !== label) {
            var _labelElement = part.committer.element;
            var labelChangeEvent = new Event('labelchange');

            _labelElement.dispatchEvent(labelChangeEvent);
          }
        };
      });

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      var cssClasses$5 = {
        LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
        LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
      };

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      var MDCLineRippleFoundation =
      /** @class */
      function (_super) {
        __extends(MDCLineRippleFoundation, _super);

        function MDCLineRippleFoundation(adapter) {
          var _this = _super.call(this, _assign({}, MDCLineRippleFoundation.defaultAdapter, adapter)) || this;

          _this.transitionEndHandler_ = function (evt) {
            return _this.handleTransitionEnd(evt);
          };

          return _this;
        }

        Object.defineProperty(MDCLineRippleFoundation, "cssClasses", {
          get: function get() {
            return cssClasses$5;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCLineRippleFoundation, "defaultAdapter", {
          /**
           * See {@link MDCLineRippleAdapter} for typing information on parameters and return types.
           */
          get: function get() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
              addClass: function addClass() {
                return undefined;
              },
              removeClass: function removeClass() {
                return undefined;
              },
              hasClass: function hasClass() {
                return false;
              },
              setStyle: function setStyle() {
                return undefined;
              },
              registerEventHandler: function registerEventHandler() {
                return undefined;
              },
              deregisterEventHandler: function deregisterEventHandler() {
                return undefined;
              }
            }; // tslint:enable:object-literal-sort-keys
          },
          enumerable: true,
          configurable: true
        });

        MDCLineRippleFoundation.prototype.init = function () {
          this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
        };

        MDCLineRippleFoundation.prototype.destroy = function () {
          this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
        };

        MDCLineRippleFoundation.prototype.activate = function () {
          this.adapter_.removeClass(cssClasses$5.LINE_RIPPLE_DEACTIVATING);
          this.adapter_.addClass(cssClasses$5.LINE_RIPPLE_ACTIVE);
        };

        MDCLineRippleFoundation.prototype.setRippleCenter = function (xCoordinate) {
          this.adapter_.setStyle('transform-origin', xCoordinate + "px center");
        };

        MDCLineRippleFoundation.prototype.deactivate = function () {
          this.adapter_.addClass(cssClasses$5.LINE_RIPPLE_DEACTIVATING);
        };

        MDCLineRippleFoundation.prototype.handleTransitionEnd = function (evt) {
          // Wait for the line ripple to be either transparent or opaque
          // before emitting the animation end event
          var isDeactivating = this.adapter_.hasClass(cssClasses$5.LINE_RIPPLE_DEACTIVATING);

          if (evt.propertyName === 'opacity') {
            if (isDeactivating) {
              this.adapter_.removeClass(cssClasses$5.LINE_RIPPLE_ACTIVE);
              this.adapter_.removeClass(cssClasses$5.LINE_RIPPLE_DEACTIVATING);
            }
          }
        };

        return MDCLineRippleFoundation;
      }(MDCFoundation);

      var createAdapter$1 = function createAdapter(lineElement) {
        return {
          addClass: function addClass(className) {
            return lineElement.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return lineElement.classList.remove(className);
          },
          hasClass: function hasClass(className) {
            return lineElement.classList.contains(className);
          },
          setStyle: function setStyle(propertyName, value) {
            return lineElement.style.setProperty(propertyName, value);
          },
          registerEventHandler: function registerEventHandler(evtType, handler) {
            lineElement.addEventListener(evtType, handler);
          },
          deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
            lineElement.removeEventListener(evtType, handler);
          }
        };
      };

      var partToFoundationMap$1 = new WeakMap();
      var lineRipple = directive(function () {
        return function (part) {
          var lastFoundation = partToFoundationMap$1.get(part);

          if (!lastFoundation) {
            var lineElement = part.committer.element;
            lineElement.classList.add('mdc-line-ripple');
            var adapter = createAdapter$1(lineElement);
            var foundation = new MDCLineRippleFoundation(adapter);
            foundation.init();
            part.setValue(foundation);
            partToFoundationMap$1.set(part, foundation);
          }
        };
      });

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      var strings$4 = {
        ARIA_CONTROLS: 'aria-controls',
        ICON_SELECTOR: '.mdc-text-field__icon',
        INPUT_SELECTOR: '.mdc-text-field__input',
        LABEL_SELECTOR: '.mdc-floating-label',
        LINE_RIPPLE_SELECTOR: '.mdc-line-ripple',
        OUTLINE_SELECTOR: '.mdc-notched-outline'
      };
      var cssClasses$6 = {
        DENSE: 'mdc-text-field--dense',
        DISABLED: 'mdc-text-field--disabled',
        FOCUSED: 'mdc-text-field--focused',
        FULLWIDTH: 'mdc-text-field--fullwidth',
        HELPER_LINE: 'mdc-text-field-helper-line',
        INVALID: 'mdc-text-field--invalid',
        NO_LABEL: 'mdc-text-field--no-label',
        OUTLINED: 'mdc-text-field--outlined',
        ROOT: 'mdc-text-field',
        TEXTAREA: 'mdc-text-field--textarea',
        WITH_LEADING_ICON: 'mdc-text-field--with-leading-icon',
        WITH_TRAILING_ICON: 'mdc-text-field--with-trailing-icon'
      };
      var numbers$3 = {
        DENSE_LABEL_SCALE: 0.923,
        LABEL_SCALE: 0.75
      };
      /**
       * Whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
       * under the "Validation-related attributes" section.
       */

      var VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength'];
      /**
       * Label should always float for these types as they show some UI even if value is empty.
       */

      var ALWAYS_FLOAT_TYPES = ['color', 'date', 'datetime-local', 'month', 'range', 'time', 'week'];

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      var POINTERDOWN_EVENTS = ['mousedown', 'touchstart'];
      var INTERACTION_EVENTS = ['click', 'keydown'];

      var MDCTextFieldFoundation =
      /** @class */
      function (_super) {
        __extends(MDCTextFieldFoundation, _super);
        /**
         * @param adapter
         * @param foundationMap Map from subcomponent names to their subfoundations.
         */


        function MDCTextFieldFoundation(adapter, foundationMap) {
          if (foundationMap === void 0) {
            foundationMap = {};
          }

          var _this = _super.call(this, _assign({}, MDCTextFieldFoundation.defaultAdapter, adapter)) || this;

          _this.isFocused_ = false;
          _this.receivedUserInput_ = false;
          _this.isValid_ = true;
          _this.useNativeValidation_ = true;
          _this.helperText_ = foundationMap.helperText;
          _this.characterCounter_ = foundationMap.characterCounter;
          _this.leadingIcon_ = foundationMap.leadingIcon;
          _this.trailingIcon_ = foundationMap.trailingIcon;

          _this.inputFocusHandler_ = function () {
            return _this.activateFocus();
          };

          _this.inputBlurHandler_ = function () {
            return _this.deactivateFocus();
          };

          _this.inputInputHandler_ = function () {
            return _this.handleInput();
          };

          _this.setPointerXOffset_ = function (evt) {
            return _this.setTransformOrigin(evt);
          };

          _this.textFieldInteractionHandler_ = function () {
            return _this.handleTextFieldInteraction();
          };

          _this.validationAttributeChangeHandler_ = function (attributesList) {
            return _this.handleValidationAttributeChange(attributesList);
          };

          return _this;
        }

        Object.defineProperty(MDCTextFieldFoundation, "cssClasses", {
          get: function get() {
            return cssClasses$6;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCTextFieldFoundation, "strings", {
          get: function get() {
            return strings$4;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCTextFieldFoundation, "numbers", {
          get: function get() {
            return numbers$3;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldAlwaysFloat_", {
          get: function get() {
            var type = this.getNativeInput_().type;
            return ALWAYS_FLOAT_TYPES.indexOf(type) >= 0;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldFloat", {
          get: function get() {
            return this.shouldAlwaysFloat_ || this.isFocused_ || Boolean(this.getValue()) || this.isBadInput_();
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCTextFieldFoundation.prototype, "shouldShake", {
          get: function get() {
            return !this.isFocused_ && !this.isValid() && Boolean(this.getValue());
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCTextFieldFoundation, "defaultAdapter", {
          /**
           * See {@link MDCTextFieldAdapter} for typing information on parameters and return types.
           */
          get: function get() {
            // tslint:disable:object-literal-sort-keys Methods should be in the same order as the adapter interface.
            return {
              addClass: function addClass() {
                return undefined;
              },
              removeClass: function removeClass() {
                return undefined;
              },
              hasClass: function hasClass() {
                return true;
              },
              registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler() {
                return undefined;
              },
              deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler() {
                return undefined;
              },
              registerInputInteractionHandler: function registerInputInteractionHandler() {
                return undefined;
              },
              deregisterInputInteractionHandler: function deregisterInputInteractionHandler() {
                return undefined;
              },
              registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler() {
                return new MutationObserver(function () {
                  return undefined;
                });
              },
              deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler() {
                return undefined;
              },
              getNativeInput: function getNativeInput() {
                return null;
              },
              isFocused: function isFocused() {
                return false;
              },
              activateLineRipple: function activateLineRipple() {
                return undefined;
              },
              deactivateLineRipple: function deactivateLineRipple() {
                return undefined;
              },
              setLineRippleTransformOrigin: function setLineRippleTransformOrigin() {
                return undefined;
              },
              shakeLabel: function shakeLabel() {
                return undefined;
              },
              floatLabel: function floatLabel() {
                return undefined;
              },
              hasLabel: function hasLabel() {
                return false;
              },
              getLabelWidth: function getLabelWidth() {
                return 0;
              },
              hasOutline: function hasOutline() {
                return false;
              },
              notchOutline: function notchOutline() {
                return undefined;
              },
              closeOutline: function closeOutline() {
                return undefined;
              }
            }; // tslint:enable:object-literal-sort-keys
          },
          enumerable: true,
          configurable: true
        });

        MDCTextFieldFoundation.prototype.init = function () {
          var _this = this;

          if (this.adapter_.isFocused()) {
            this.inputFocusHandler_();
          } else if (this.adapter_.hasLabel() && this.shouldFloat) {
            this.notchOutline(true);
            this.adapter_.floatLabel(true);
          }

          this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
          this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
          this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
          POINTERDOWN_EVENTS.forEach(function (evtType) {
            _this.adapter_.registerInputInteractionHandler(evtType, _this.setPointerXOffset_);
          });
          INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.registerTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
          });
          this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
          this.setCharacterCounter_(this.getValue().length);
        };

        MDCTextFieldFoundation.prototype.destroy = function () {
          var _this = this;

          this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
          this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
          this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
          POINTERDOWN_EVENTS.forEach(function (evtType) {
            _this.adapter_.deregisterInputInteractionHandler(evtType, _this.setPointerXOffset_);
          });
          INTERACTION_EVENTS.forEach(function (evtType) {
            _this.adapter_.deregisterTextFieldInteractionHandler(evtType, _this.textFieldInteractionHandler_);
          });
          this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
        };
        /**
         * Handles user interactions with the Text Field.
         */


        MDCTextFieldFoundation.prototype.handleTextFieldInteraction = function () {
          var nativeInput = this.adapter_.getNativeInput();

          if (nativeInput && nativeInput.disabled) {
            return;
          }

          this.receivedUserInput_ = true;
        };
        /**
         * Handles validation attribute changes
         */


        MDCTextFieldFoundation.prototype.handleValidationAttributeChange = function (attributesList) {
          var _this = this;

          attributesList.some(function (attributeName) {
            if (VALIDATION_ATTR_WHITELIST.indexOf(attributeName) > -1) {
              _this.styleValidity_(true);

              return true;
            }

            return false;
          });

          if (attributesList.indexOf('maxlength') > -1) {
            this.setCharacterCounter_(this.getValue().length);
          }
        };
        /**
         * Opens/closes the notched outline.
         */


        MDCTextFieldFoundation.prototype.notchOutline = function (openNotch) {
          if (!this.adapter_.hasOutline()) {
            return;
          }

          if (openNotch) {
            var isDense = this.adapter_.hasClass(cssClasses$6.DENSE);
            var labelScale = isDense ? numbers$3.DENSE_LABEL_SCALE : numbers$3.LABEL_SCALE;
            var labelWidth = this.adapter_.getLabelWidth() * labelScale;
            this.adapter_.notchOutline(labelWidth);
          } else {
            this.adapter_.closeOutline();
          }
        };
        /**
         * Activates the text field focus state.
         */


        MDCTextFieldFoundation.prototype.activateFocus = function () {
          this.isFocused_ = true;
          this.styleFocused_(this.isFocused_);
          this.adapter_.activateLineRipple();

          if (this.adapter_.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter_.floatLabel(this.shouldFloat);
            this.adapter_.shakeLabel(this.shouldShake);
          }

          if (this.helperText_) {
            this.helperText_.showToScreenReader();
          }
        };
        /**
         * Sets the line ripple's transform origin, so that the line ripple activate
         * animation will animate out from the user's click location.
         */


        MDCTextFieldFoundation.prototype.setTransformOrigin = function (evt) {
          var touches = evt.touches;
          var targetEvent = touches ? touches[0] : evt;
          var targetClientRect = targetEvent.target.getBoundingClientRect();
          var normalizedX = targetEvent.clientX - targetClientRect.left;
          this.adapter_.setLineRippleTransformOrigin(normalizedX);
        };
        /**
         * Handles input change of text input and text area.
         */


        MDCTextFieldFoundation.prototype.handleInput = function () {
          this.autoCompleteFocus();
          this.setCharacterCounter_(this.getValue().length);
        };
        /**
         * Activates the Text Field's focus state in cases when the input value
         * changes without user input (e.g. programmatically).
         */


        MDCTextFieldFoundation.prototype.autoCompleteFocus = function () {
          if (!this.receivedUserInput_) {
            this.activateFocus();
          }
        };
        /**
         * Deactivates the Text Field's focus state.
         */


        MDCTextFieldFoundation.prototype.deactivateFocus = function () {
          this.isFocused_ = false;
          this.adapter_.deactivateLineRipple();
          var isValid = this.isValid();
          this.styleValidity_(isValid);
          this.styleFocused_(this.isFocused_);

          if (this.adapter_.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter_.floatLabel(this.shouldFloat);
            this.adapter_.shakeLabel(this.shouldShake);
          }

          if (!this.shouldFloat) {
            this.receivedUserInput_ = false;
          }
        };

        MDCTextFieldFoundation.prototype.getValue = function () {
          return this.getNativeInput_().value;
        };
        /**
         * @param value The value to set on the input Element.
         */


        MDCTextFieldFoundation.prototype.setValue = function (value) {
          // Prevent Safari from moving the caret to the end of the input when the value has not changed.
          if (this.getValue() !== value) {
            this.getNativeInput_().value = value;
          }

          this.setCharacterCounter_(value.length);
          var isValid = this.isValid();
          this.styleValidity_(isValid);

          if (this.adapter_.hasLabel()) {
            this.notchOutline(this.shouldFloat);
            this.adapter_.floatLabel(this.shouldFloat);
            this.adapter_.shakeLabel(this.shouldShake);
          }
        };
        /**
         * @return The custom validity state, if set; otherwise, the result of a native validity check.
         */


        MDCTextFieldFoundation.prototype.isValid = function () {
          return this.useNativeValidation_ ? this.isNativeInputValid_() : this.isValid_;
        };
        /**
         * @param isValid Sets the custom validity state of the Text Field.
         */


        MDCTextFieldFoundation.prototype.setValid = function (isValid) {
          this.isValid_ = isValid;
          this.styleValidity_(isValid);
          var shouldShake = !isValid && !this.isFocused_;

          if (this.adapter_.hasLabel()) {
            this.adapter_.shakeLabel(shouldShake);
          }
        };
        /**
         * Enables or disables the use of native validation. Use this for custom validation.
         * @param useNativeValidation Set this to false to ignore native input validation.
         */


        MDCTextFieldFoundation.prototype.setUseNativeValidation = function (useNativeValidation) {
          this.useNativeValidation_ = useNativeValidation;
        };

        MDCTextFieldFoundation.prototype.isDisabled = function () {
          return this.getNativeInput_().disabled;
        };
        /**
         * @param disabled Sets the text-field disabled or enabled.
         */


        MDCTextFieldFoundation.prototype.setDisabled = function (disabled) {
          this.getNativeInput_().disabled = disabled;
          this.styleDisabled_(disabled);
        };
        /**
         * @param content Sets the content of the helper text.
         */


        MDCTextFieldFoundation.prototype.setHelperTextContent = function (content) {
          if (this.helperText_) {
            this.helperText_.setContent(content);
          }
        };
        /**
         * Sets the aria label of the leading icon.
         */


        MDCTextFieldFoundation.prototype.setLeadingIconAriaLabel = function (label) {
          if (this.leadingIcon_) {
            this.leadingIcon_.setAriaLabel(label);
          }
        };
        /**
         * Sets the text content of the leading icon.
         */


        MDCTextFieldFoundation.prototype.setLeadingIconContent = function (content) {
          if (this.leadingIcon_) {
            this.leadingIcon_.setContent(content);
          }
        };
        /**
         * Sets the aria label of the trailing icon.
         */


        MDCTextFieldFoundation.prototype.setTrailingIconAriaLabel = function (label) {
          if (this.trailingIcon_) {
            this.trailingIcon_.setAriaLabel(label);
          }
        };
        /**
         * Sets the text content of the trailing icon.
         */


        MDCTextFieldFoundation.prototype.setTrailingIconContent = function (content) {
          if (this.trailingIcon_) {
            this.trailingIcon_.setContent(content);
          }
        };
        /**
         * Sets character counter values that shows characters used and the total character limit.
         */


        MDCTextFieldFoundation.prototype.setCharacterCounter_ = function (currentLength) {
          if (!this.characterCounter_) {
            return;
          }

          var maxLength = this.getNativeInput_().maxLength;

          if (maxLength === -1) {
            throw new Error('MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.');
          }

          this.characterCounter_.setCounterValue(currentLength, maxLength);
        };
        /**
         * @return True if the Text Field input fails in converting the user-supplied value.
         */


        MDCTextFieldFoundation.prototype.isBadInput_ = function () {
          // The badInput property is not supported in IE 11 💩.
          return this.getNativeInput_().validity.badInput || false;
        };
        /**
         * @return The result of native validity checking (ValidityState.valid).
         */


        MDCTextFieldFoundation.prototype.isNativeInputValid_ = function () {
          return this.getNativeInput_().validity.valid;
        };
        /**
         * Styles the component based on the validity state.
         */


        MDCTextFieldFoundation.prototype.styleValidity_ = function (isValid) {
          var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;

          if (isValid) {
            this.adapter_.removeClass(INVALID);
          } else {
            this.adapter_.addClass(INVALID);
          }

          if (this.helperText_) {
            this.helperText_.setValidity(isValid);
          }
        };
        /**
         * Styles the component based on the focused state.
         */


        MDCTextFieldFoundation.prototype.styleFocused_ = function (isFocused) {
          var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;

          if (isFocused) {
            this.adapter_.addClass(FOCUSED);
          } else {
            this.adapter_.removeClass(FOCUSED);
          }
        };
        /**
         * Styles the component based on the disabled state.
         */


        MDCTextFieldFoundation.prototype.styleDisabled_ = function (isDisabled) {
          var _a = MDCTextFieldFoundation.cssClasses,
              DISABLED = _a.DISABLED,
              INVALID = _a.INVALID;

          if (isDisabled) {
            this.adapter_.addClass(DISABLED);
            this.adapter_.removeClass(INVALID);
          } else {
            this.adapter_.removeClass(DISABLED);
          }

          if (this.leadingIcon_) {
            this.leadingIcon_.setDisabled(isDisabled);
          }

          if (this.trailingIcon_) {
            this.trailingIcon_.setDisabled(isDisabled);
          }
        };
        /**
         * @return The native text input element from the host environment, or an object with the same shape for unit tests.
         */


        MDCTextFieldFoundation.prototype.getNativeInput_ = function () {
          // this.adapter_ may be undefined in foundation unit tests. This happens when testdouble is creating a mock object
          // and invokes the shouldShake/shouldFloat getters (which in turn call getValue(), which calls this method) before
          // init() has been called from the MDCTextField constructor. To work around that issue, we return a dummy object.
          var nativeInput = this.adapter_ ? this.adapter_.getNativeInput() : null;
          return nativeInput || {
            disabled: false,
            maxLength: -1,
            type: 'input',
            validity: {
              badInput: false,
              valid: true
            },
            value: ''
          };
        };

        return MDCTextFieldFoundation;
      }(MDCFoundation);

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
      var previousValues = new WeakMap();
      /**
       * For AttributeParts, sets the attribute if the value is defined and removes
       * the attribute if the value is undefined.
       *
       * For other part types, this directive is a no-op.
       */

      var ifDefined = directive(function (value) {
        return function (part) {
          var previousValue = previousValues.get(part);

          if (value === undefined && part instanceof AttributePart) {
            // If the value is undefined, remove the attribute, but only if the value
            // was previously defined.
            if (previousValue !== undefined || !previousValues.has(part)) {
              var name = part.committer.name;
              part.committer.element.removeAttribute(name);
            }
          } else if (value !== previousValue) {
            part.setValue(value);
          }

          previousValues.set(part, value);
        };
      });

      /**
       * @license
       * Copyright 2019 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      var cssClasses$7 = {
        ROOT: 'mdc-text-field-character-counter'
      };
      var strings$5 = {
        ROOT_SELECTOR: "." + cssClasses$7.ROOT
      };

      /**
       * @license
       * Copyright 2019 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      var MDCTextFieldCharacterCounterFoundation =
      /** @class */
      function (_super) {
        __extends(MDCTextFieldCharacterCounterFoundation, _super);

        function MDCTextFieldCharacterCounterFoundation(adapter) {
          return _super.call(this, _assign({}, MDCTextFieldCharacterCounterFoundation.defaultAdapter, adapter)) || this;
        }

        Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "cssClasses", {
          get: function get() {
            return cssClasses$7;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "strings", {
          get: function get() {
            return strings$5;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCTextFieldCharacterCounterFoundation, "defaultAdapter", {
          /**
           * See {@link MDCTextFieldCharacterCounterAdapter} for typing information on parameters and return types.
           */
          get: function get() {
            return {
              setContent: function setContent() {
                return undefined;
              }
            };
          },
          enumerable: true,
          configurable: true
        });

        MDCTextFieldCharacterCounterFoundation.prototype.setCounterValue = function (currentLength, maxLength) {
          currentLength = Math.min(currentLength, maxLength);
          this.adapter_.setContent(currentLength + " / " + maxLength);
        };

        return MDCTextFieldCharacterCounterFoundation;
      }(MDCFoundation);

      var createAdapter$2 = function createAdapter(hostElement) {
        return {
          setContent: function setContent(content) {
            return hostElement.textContent = content;
          }
        };
      };

      var partToFoundationMap$2 = new WeakMap();
      var characterCounter = directive(function () {
        return function (part) {
          var lastFoundation = partToFoundationMap$2.get(part);

          if (!lastFoundation) {
            var hostElement = part.committer.element;
            hostElement.classList.add('mdc-text-field-character-counter');
            var adapter = createAdapter$2(hostElement);
            var foundation = new MDCTextFieldCharacterCounterFoundation(adapter);
            foundation.init();
            part.setValue(foundation);
            partToFoundationMap$2.set(part, foundation);
          }
        };
      });

      var _templateObject$9, _templateObject2$3, _templateObject3$3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9;
      var passiveEvents = ['touchstart', 'touchmove', 'scroll', 'mousewheel'];

      var createValidityObj = function createValidityObj() {
        var customValidity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        /*
         * We need to make ValidityState an object because it is readonly and
         * we cannot use the spread operator. Also, we don't export
         * `CustomValidityState` because it is a leaky implementation and the user
         * already has access to `ValidityState` in lib.dom.ts. Also an interface
         * {a: Type} can be casted to {readonly a: Type} so passing any object
         * should be fine.
         */
        var objectifiedCustomValidity = {}; // eslint-disable-next-line guard-for-in

        for (var propName in customValidity) {
          /*
           * Casting is needed because ValidityState's props are all readonly and
           * thus cannot be set on `onjectifiedCustomValidity`. In the end, the
           * interface is the same as ValidityState (but not readonly), but the
           * function signature casts the output to ValidityState (thus readonly).
           */
          objectifiedCustomValidity[propName] = customValidity[propName];
        }

        return Object.assign({
          badInput: false,
          customError: false,
          patternMismatch: false,
          rangeOverflow: false,
          rangeUnderflow: false,
          stepMismatch: false,
          tooLong: false,
          tooShort: false,
          typeMismatch: false,
          valid: true,
          valueMissing: false
        }, objectifiedCustomValidity);
      };

      var TextFieldBase = /*#__PURE__*/function (_FormElement) {
        _inherits(TextFieldBase, _FormElement);

        var _super = _createSuper(TextFieldBase);

        function TextFieldBase() {
          var _this;

          _classCallCheck(this, TextFieldBase);

          _this = _super.apply(this, arguments);
          _this.mdcFoundationClass = MDCTextFieldFoundation;
          _this.value = '';
          _this.type = 'text';
          _this.placeholder = '';
          _this.label = '';
          _this.icon = '';
          _this.iconTrailing = '';
          _this.disabled = false;
          _this.required = false;
          _this.maxLength = -1;
          _this.outlined = false;
          _this.fullWidth = false;
          _this.helper = '';
          _this.validateOnInitialRender = false;
          _this.validationMessage = '';
          _this.pattern = '';
          _this.min = '';
          _this.max = '';
          _this.step = null;
          _this.helperPersistent = false;
          _this.charCounter = false;
          _this.outlineOpen = false;
          _this.outlineWidth = 0;
          _this.isUiValid = true;
          _this._validity = createValidityObj();
          _this.validityTransform = null;
          return _this;
        }

        _createClass(TextFieldBase, [{
          key: "validity",
          get: function get() {
            this._checkValidity(this.value);

            return this._validity;
          }
        }, {
          key: "willValidate",
          get: function get() {
            return this.formElement.willValidate;
          }
        }, {
          key: "selectionStart",
          get: function get() {
            return this.formElement.selectionStart;
          }
        }, {
          key: "selectionEnd",
          get: function get() {
            return this.formElement.selectionEnd;
          }
        }, {
          key: "shouldRenderHelperText",
          get: function get() {
            return !!this.helper || !!this.validationMessage || this.charCounterVisible;
          }
        }, {
          key: "charCounterVisible",
          get: function get() {
            return this.charCounter && this.maxLength !== -1;
          }
        }, {
          key: "focus",
          value: function focus() {
            var focusEvt = new CustomEvent('focus');
            this.formElement.dispatchEvent(focusEvt);
            this.formElement.focus();
          }
        }, {
          key: "blur",
          value: function blur() {
            var blurEvt = new CustomEvent('blur');
            this.formElement.dispatchEvent(blurEvt);
            this.formElement.blur();
          }
        }, {
          key: "select",
          value: function select() {
            this.formElement.select();
          }
        }, {
          key: "setSelectionRange",
          value: function setSelectionRange(selectionStart, selectionEnd, selectionDirection) {
            this.formElement.setSelectionRange(selectionStart, selectionEnd, selectionDirection);
          }
        }, {
          key: "render",
          value: function render() {
            var classes = {
              'mdc-text-field--disabled': this.disabled,
              'mdc-text-field--no-label': !this.label,
              'mdc-text-field--outlined': this.outlined,
              'mdc-text-field--fullwidth': this.fullWidth,
              'mdc-text-field--with-leading-icon': this.icon,
              'mdc-text-field--with-trailing-icon': this.iconTrailing
            };
            return html(_templateObject$9 || (_templateObject$9 = _taggedTemplateLiteral(["<div class=\"mdc-text-field ", "\">", " ", " ", " ", "</div>", ""])), classMap(classes), this.icon ? this.renderIcon(this.icon) : '', this.renderInput(), this.iconTrailing ? this.renderIcon(this.iconTrailing) : '', this.outlined ? this.renderOutlined() : this.renderLabelText(), this.renderHelperText(this.renderCharCounter()));
          }
        }, {
          key: "updated",
          value: function updated(changedProperties) {
            var maxLength = changedProperties.get('maxLength');
            var maxLengthBecameDefined = maxLength === -1 && this.maxLength !== -1;
            var maxLengthBecameUndefined = maxLength !== undefined && maxLength !== -1 && this.maxLength === -1;
            /* We want to recreate the foundation if maxLength changes to defined or
             * undefined, because the textfield foundation needs to be instantiated with
             * the char counter's foundation, and the char counter's foundation needs
             * to have maxLength defined to be instantiated. Additionally, there is no
             * exposed API on the MdcTextFieldFoundation to dynamically add a char
             * counter foundation, so we must recreate it.
             */

            if (maxLengthBecameDefined || maxLengthBecameUndefined) {
              this.createFoundation();
            }

            if (changedProperties.has('value') && changedProperties.get('value') !== undefined) {
              this.mdcFoundation.setValue(this.value);
            }
          }
        }, {
          key: "renderInput",
          value: function renderInput() {
            var maxOrUndef = this.maxLength === -1 ? undefined : this.maxLength;
            return html(_templateObject2$3 || (_templateObject2$3 = _taggedTemplateLiteral(["<input id=\"text-field\" class=\"mdc-text-field__input\" type=\"", "\" .value=\"", "\" ?disabled=\"", "\" placeholder=\"", "\" ?required=\"", "\" maxlength=\"", "\" pattern=\"", "\" min=\"", "\" max=\"", "\" step=\"", "\" @input=\"", "\" @blur=\"", "\">"])), this.type, this.value, this.disabled, this.placeholder, this.required, ifDefined(maxOrUndef), ifDefined(this.pattern ? this.pattern : undefined), ifDefined(this.min === '' ? undefined : this.min), ifDefined(this.max === '' ? undefined : this.max), ifDefined(this.step === null ? undefined : this.step), this.handleInputChange, this.onInputBlur);
          }
        }, {
          key: "renderIcon",
          value: function renderIcon(icon) {
            return html(_templateObject3$3 || (_templateObject3$3 = _taggedTemplateLiteral(["<i class=\"material-icons mdc-text-field__icon\">", "</i>"])), icon);
          }
        }, {
          key: "renderOutlined",
          value: function renderOutlined() {
            var labelTemplate = '';

            if (this.label) {
              labelTemplate = html(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["<label .floatingLabelFoundation=\"", "\" @labelchange=\"", "\" for=\"text-field\">", "</label>"])), floatingLabel(this.label), this.onLabelChange, this.label);
            }

            return html(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["<mwc-notched-outline .width=\"", "\" .open=\"", "\" class=\"mdc-notched-outline\">", "</mwc-notched-outline>"])), this.outlineWidth, this.outlineOpen, labelTemplate);
          }
        }, {
          key: "renderLabelText",
          value: function renderLabelText() {
            var labelTemplate = '';

            if (this.label && !this.fullWidth) {
              labelTemplate = html(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["<label .floatingLabelFoundation=\"", "\" for=\"text-field\">", "</label>"])), floatingLabel(this.label), this.label);
            }

            return html(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["", "<div .lineRippleFoundation=\"", "\"></div>"])), labelTemplate, lineRipple());
          }
        }, {
          key: "renderHelperText",
          value: function renderHelperText(charCounterTemplate) {
            var showValidationMessage = this.validationMessage && !this.isUiValid;
            var classes = {
              'mdc-text-field-helper-text--persistent': this.helperPersistent,
              'mdc-text-field-helper-text--validation-msg': showValidationMessage
            };
            var rootClasses = {
              hidden: !this.shouldRenderHelperText
            };
            return html(_templateObject8 || (_templateObject8 = _taggedTemplateLiteral(["<div class=\"mdc-text-field-helper-line ", "\"><div class=\"mdc-text-field-helper-text ", "\">", "</div>", "</div>"])), classMap(rootClasses), classMap(classes), showValidationMessage ? this.validationMessage : this.helper, charCounterTemplate);
          }
        }, {
          key: "renderCharCounter",
          value: function renderCharCounter() {
            var counterClasses = {
              hidden: !this.charCounterVisible
            };
            return html(_templateObject9 || (_templateObject9 = _taggedTemplateLiteral(["<div class=\"", "\" .charCounterFoundation=\"", "\"></div>"])), classMap(counterClasses), characterCounter());
          }
        }, {
          key: "onInputBlur",
          value: function onInputBlur() {
            this.reportValidity();
          }
        }, {
          key: "checkValidity",
          value: function checkValidity() {
            var isValid = this._checkValidity(this.value);

            if (!isValid) {
              var invalidEvent = new Event('invalid', {
                bubbles: false,
                cancelable: true
              });
              this.dispatchEvent(invalidEvent);
            }

            return isValid;
          }
        }, {
          key: "reportValidity",
          value: function reportValidity() {
            var isValid = this.checkValidity();
            this.mdcFoundation.setValid(isValid);
            this.isUiValid = isValid;
            return isValid;
          }
        }, {
          key: "_checkValidity",
          value: function _checkValidity(value) {
            var nativeValidity = this.formElement.validity;
            var validity = createValidityObj(nativeValidity);

            if (this.validityTransform) {
              var customValidity = this.validityTransform(value, validity);
              validity = Object.assign(Object.assign({}, validity), customValidity);
              this.mdcFoundation.setUseNativeValidation(false);
            } else {
              this.mdcFoundation.setUseNativeValidation(true);
            }

            this._validity = validity;
            return this._validity.valid;
          }
        }, {
          key: "setCustomValidity",
          value: function setCustomValidity(message) {
            this.validationMessage = message;
            this.formElement.setCustomValidity(message);
          }
        }, {
          key: "handleInputChange",
          value: function handleInputChange() {
            this.value = this.formElement.value;
          }
        }, {
          key: "createFoundation",
          value: function createFoundation() {
            if (this.mdcFoundation !== undefined) {
              this.mdcFoundation.destroy();
            }

            this.mdcFoundation = new this.mdcFoundationClass(this.createAdapter(), {
              characterCounter: this.maxLength !== -1 ? this.charCounterElement.charCounterFoundation : undefined
            });
            this.mdcFoundation.init();
          }
        }, {
          key: "createAdapter",
          value: function createAdapter() {
            return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, this.getRootAdapterMethods()), this.getInputAdapterMethods()), this.getLabelAdapterMethods()), this.getLineRippleAdapterMethods()), this.getOutlineAdapterMethods());
          }
        }, {
          key: "getRootAdapterMethods",
          value: function getRootAdapterMethods() {
            var _this2 = this;

            return Object.assign({
              registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
                return _this2.addEventListener(evtType, handler);
              },
              deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
                return _this2.removeEventListener(evtType, handler);
              },
              registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler() {
                var getAttributesList = function getAttributesList(mutationsList) {
                  return mutationsList.map(function (mutation) {
                    return mutation.attributeName;
                  }).filter(function (attributeName) {
                    return attributeName;
                  });
                };

                var observer = new MutationObserver(function (mutationsList) {
                  var attributes = getAttributesList(mutationsList);

                  if (attributes.indexOf('maxlength') !== -1 && _this2.maxLength !== -1) {
                    _this2.charCounterElement.charCounterFoundation.setCounterValue(_this2.value.length, _this2.maxLength);
                  }
                });
                var config = {
                  attributes: true
                };
                observer.observe(_this2.formElement, config);
                return observer;
              },
              deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(observer) {
                return observer.disconnect();
              }
            }, addHasRemoveClass(this.mdcRoot));
          }
        }, {
          key: "getInputAdapterMethods",
          value: function getInputAdapterMethods() {
            var _this3 = this;

            return {
              getNativeInput: function getNativeInput() {
                return _this3.formElement;
              },
              isFocused: function isFocused() {
                return _this3.shadowRoot ? _this3.shadowRoot.activeElement === _this3.formElement : false;
              },
              registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
                return _this3.formElement.addEventListener(evtType, handler, {
                  passive: evtType in passiveEvents
                });
              },
              deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
                return _this3.formElement.removeEventListener(evtType, handler);
              }
            };
          }
        }, {
          key: "getLabelAdapterMethods",
          value: function getLabelAdapterMethods() {
            var _this4 = this;

            return {
              floatLabel: function floatLabel(shouldFloat) {
                return _this4.labelElement && _this4.labelElement.floatingLabelFoundation.float(shouldFloat);
              },
              getLabelWidth: function getLabelWidth() {
                return _this4.labelElement ? _this4.labelElement.floatingLabelFoundation.getWidth() : 0;
              },
              hasLabel: function hasLabel() {
                return Boolean(_this4.labelElement);
              },
              shakeLabel: function shakeLabel(shouldShake) {
                return _this4.labelElement && _this4.labelElement.floatingLabelFoundation.shake(shouldShake);
              }
            };
          }
        }, {
          key: "getLineRippleAdapterMethods",
          value: function getLineRippleAdapterMethods() {
            var _this5 = this;

            return {
              activateLineRipple: function activateLineRipple() {
                if (_this5.lineRippleElement) {
                  _this5.lineRippleElement.lineRippleFoundation.activate();
                }
              },
              deactivateLineRipple: function deactivateLineRipple() {
                if (_this5.lineRippleElement) {
                  _this5.lineRippleElement.lineRippleFoundation.deactivate();
                }
              },
              setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
                if (_this5.lineRippleElement) {
                  _this5.lineRippleElement.lineRippleFoundation.setRippleCenter(normalizedX);
                }
              }
            };
          }
        }, {
          key: "firstUpdated",
          value: function () {
            var _firstUpdated = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var outlineElement;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      outlineElement = this.outlineElement;

                      if (!outlineElement) {
                        _context.next = 4;
                        break;
                      }

                      _context.next = 4;
                      return outlineElement.updateComplete;

                    case 4:
                      _get(_getPrototypeOf(TextFieldBase.prototype), "firstUpdated", this).call(this);

                      if (this.validateOnInitialRender) {
                        this.reportValidity();
                      }

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            function firstUpdated() {
              return _firstUpdated.apply(this, arguments);
            }

            return firstUpdated;
          }()
        }, {
          key: "getOutlineAdapterMethods",
          value: function getOutlineAdapterMethods() {
            var _this6 = this;

            return {
              closeOutline: function closeOutline() {
                return _this6.outlineElement && (_this6.outlineOpen = false);
              },
              hasOutline: function hasOutline() {
                return Boolean(_this6.outlineElement);
              },
              notchOutline: function notchOutline(labelWidth) {
                var outlineElement = _this6.outlineElement;

                if (outlineElement && !_this6.outlineOpen) {
                  _this6.outlineWidth = labelWidth;
                  _this6.outlineOpen = true;
                }
              }
            };
          }
        }, {
          key: "onLabelChange",
          value: function () {
            var _onLabelChange = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!this.label) {
                        _context2.next = 3;
                        break;
                      }

                      _context2.next = 3;
                      return this.layout();

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));

            function onLabelChange() {
              return _onLabelChange.apply(this, arguments);
            }

            return onLabelChange;
          }()
        }, {
          key: "layout",
          value: function () {
            var _layout = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var labelWidth;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.updateComplete;

                    case 2:
                      if (this.labelElement && this.outlineElement) {
                        /* When the textfield automatically notches due to a value and label
                         * being defined, the textfield may be set to `display: none` by the user.
                         * this means that the notch is of size 0px. We provide this function so
                         * that the user may manually resize the notch to the floated label's
                         * width.
                         */
                        labelWidth = this.labelElement.floatingLabelFoundation.getWidth();

                        if (this.outlineOpen) {
                          this.outlineWidth = labelWidth;
                        }
                      }

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            function layout() {
              return _layout.apply(this, arguments);
            }

            return layout;
          }()
        }]);

        return TextFieldBase;
      }(FormElement);

      __decorate([query('.mdc-text-field')], TextFieldBase.prototype, "mdcRoot", void 0);

      __decorate([query('input')], TextFieldBase.prototype, "formElement", void 0);

      __decorate([query('.mdc-floating-label')], TextFieldBase.prototype, "labelElement", void 0);

      __decorate([query('.mdc-line-ripple')], TextFieldBase.prototype, "lineRippleElement", void 0);

      __decorate([query('mwc-notched-outline')], TextFieldBase.prototype, "outlineElement", void 0);

      __decorate([query('.mdc-notched-outline__notch')], TextFieldBase.prototype, "notchElement", void 0);

      __decorate([query('.mdc-text-field-character-counter')], TextFieldBase.prototype, "charCounterElement", void 0);

      __decorate([property({
        type: String
      })], TextFieldBase.prototype, "value", void 0);

      __decorate([property({
        type: String
      })], TextFieldBase.prototype, "type", void 0);

      __decorate([property({
        type: String
      })], TextFieldBase.prototype, "placeholder", void 0);

      __decorate([property({
        type: String
      })], TextFieldBase.prototype, "label", void 0);

      __decorate([property({
        type: String
      })], TextFieldBase.prototype, "icon", void 0);

      __decorate([property({
        type: String
      })], TextFieldBase.prototype, "iconTrailing", void 0);

      __decorate([property({
        type: Boolean,
        reflect: true
      })], TextFieldBase.prototype, "disabled", void 0);

      __decorate([property({
        type: Boolean
      })], TextFieldBase.prototype, "required", void 0);

      __decorate([property({
        type: Number
      })], TextFieldBase.prototype, "maxLength", void 0);

      __decorate([property({
        type: Boolean,
        reflect: true
      })], TextFieldBase.prototype, "outlined", void 0);

      __decorate([property({
        type: Boolean,
        reflect: true
      })], TextFieldBase.prototype, "fullWidth", void 0);

      __decorate([property({
        type: String
      })], TextFieldBase.prototype, "helper", void 0);

      __decorate([property({
        type: Boolean
      })], TextFieldBase.prototype, "validateOnInitialRender", void 0);

      __decorate([property({
        type: String
      })], TextFieldBase.prototype, "validationMessage", void 0);

      __decorate([property({
        type: String
      })], TextFieldBase.prototype, "pattern", void 0);

      __decorate([property({
        type: Number
      })], TextFieldBase.prototype, "min", void 0);

      __decorate([property({
        type: Number
      })], TextFieldBase.prototype, "max", void 0);

      __decorate([property({
        type: Number
      })], TextFieldBase.prototype, "step", void 0);

      __decorate([property({
        type: Boolean
      })], TextFieldBase.prototype, "helperPersistent", void 0);

      __decorate([property({
        type: Boolean
      })], TextFieldBase.prototype, "charCounter", void 0);

      __decorate([property({
        type: Boolean
      })], TextFieldBase.prototype, "outlineOpen", void 0);

      __decorate([property({
        type: Number
      })], TextFieldBase.prototype, "outlineWidth", void 0);

      __decorate([property({
        type: Boolean
      })], TextFieldBase.prototype, "isUiValid", void 0);

      __decorate([eventOptions({
        passive: true
      })], TextFieldBase.prototype, "handleInputChange", null);

      var _templateObject$a;
      var style$4 = css(_templateObject$a || (_templateObject$a = _taggedTemplateLiteral([".mdc-floating-label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.009375em;text-decoration:inherit;text-transform:inherit;position:absolute;left:0;transform-origin:left top;transition:transform 150ms cubic-bezier(.4,0,.2,1),color 150ms cubic-bezier(.4,0,.2,1);line-height:1.15rem;text-align:left;text-overflow:ellipsis;white-space:nowrap;cursor:text;overflow:hidden;will-change:transform}.mdc-floating-label[dir=rtl],[dir=rtl] .mdc-floating-label{right:0;left:auto;transform-origin:right top;text-align:right}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--float-above{transform:translateY(-106%) scale(.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0)) translateY(-106%) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - 0)) translateY(-106%) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - 0)) translateY(-106%) scale(.75)}100%{transform:translateX(calc(0 - 0)) translateY(-106%) scale(.75)}}.mdc-line-ripple{position:absolute;bottom:0;left:0;width:100%;height:2px;transform:scaleX(0);transition:transform 180ms cubic-bezier(.4,0,.2,1),opacity 180ms cubic-bezier(.4,0,.2,1);opacity:0;z-index:2}.mdc-line-ripple--active{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating{opacity:0}.mdc-notched-outline{display:flex;position:absolute;right:0;left:0;box-sizing:border-box;width:100%;max-width:100%;height:100%;text-align:left;pointer-events:none}.mdc-notched-outline[dir=rtl],[dir=rtl] .mdc-notched-outline{text-align:right}.mdc-notched-outline__leading,.mdc-notched-outline__notch,.mdc-notched-outline__trailing{box-sizing:border-box;height:100%;border-top:1px solid;border-bottom:1px solid;pointer-events:none}.mdc-notched-outline__leading{border-left:1px solid;border-right:none;width:12px}.mdc-notched-outline__leading[dir=rtl],[dir=rtl] .mdc-notched-outline__leading{border-left:none;border-right:1px solid}.mdc-notched-outline__trailing{border-left:none;border-right:1px solid;flex-grow:1}.mdc-notched-outline__trailing[dir=rtl],[dir=rtl] .mdc-notched-outline__trailing{border-left:1px solid;border-right:none}.mdc-notched-outline__notch{flex:0 0 auto;width:auto;max-width:calc(100% - 12px * 2)}.mdc-notched-outline .mdc-floating-label{display:inline-block;position:relative;max-width:100%}.mdc-notched-outline .mdc-floating-label--float-above{text-overflow:clip}.mdc-notched-outline--upgraded .mdc-floating-label--float-above{max-width:calc(100% / .75)}.mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:0;padding-right:8px;border-top:none}.mdc-notched-outline--notched .mdc-notched-outline__notch[dir=rtl],[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-left:8px;padding-right:0}.mdc-notched-outline--no-label .mdc-notched-outline__notch{padding:0}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-text-field-helper-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.0333333333em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin:0;transition:opacity 150ms cubic-bezier(.4,0,.2,1);opacity:0;will-change:opacity}.mdc-text-field-helper-text::before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field-character-counter{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.0333333333em;text-decoration:inherit;text-transform:inherit;display:block;margin-top:0;line-height:normal;margin-left:auto;margin-right:0;padding-left:16px;padding-right:0;white-space:nowrap}.mdc-text-field-character-counter::before{display:inline-block;width:0;height:16px;content:\"\";vertical-align:0}.mdc-text-field-character-counter[dir=rtl],[dir=rtl] .mdc-text-field-character-counter{margin-left:0;margin-right:auto}.mdc-text-field-character-counter[dir=rtl],[dir=rtl] .mdc-text-field-character-counter{padding-left:0;padding-right:16px}.mdc-text-field--with-leading-icon .mdc-text-field__icon,.mdc-text-field--with-trailing-icon .mdc-text-field__icon{position:absolute;bottom:16px;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex=\"-1\"]{cursor:default;pointer-events:none}.mdc-text-field{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:transparent;height:56px;border-radius:4px 4px 0 0;display:inline-flex;position:relative;box-sizing:border-box;overflow:hidden;will-change:opacity,transform,color}.mdc-text-field::after,.mdc-text-field::before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-text-field::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-text-field.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-text-field.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-text-field.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-text-field.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-text-field::after,.mdc-text-field::before{background-color:rgba(0,0,0,.87)}.mdc-text-field:hover::before{opacity:.04}.mdc-text-field.mdc-ripple-upgraded--background-focused::before,.mdc-text-field:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.12}.mdc-text-field::after,.mdc-text-field::before{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0,0,0,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0,0,0,.87)}.mdc-text-field .mdc-text-field__input{caret-color:#6200ee;caret-color:var(--mdc-theme-primary,#6200ee)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{border-bottom-color:rgba(0,0,0,.42)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover{border-bottom-color:rgba(0,0,0,.87)}.mdc-text-field .mdc-line-ripple{background-color:#6200ee;background-color:var(--mdc-theme-primary,#6200ee)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea){border-bottom-color:rgba(0,0,0,.12)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0,0,0,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field-character-counter,.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0,0,0,.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:rgba(0,0,0,.54)}.mdc-text-field:not(.mdc-text-field--disabled){background-color:#f5f5f5}.mdc-text-field .mdc-floating-label{left:16px;right:initial;top:50%;transform:translateY(-50%);pointer-events:none}.mdc-text-field .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field .mdc-floating-label{left:initial;right:16px}.mdc-text-field .mdc-floating-label--float-above{transform:translateY(-106%) scale(.75)}.mdc-text-field--textarea .mdc-floating-label{left:4px;right:initial}.mdc-text-field--textarea .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--textarea .mdc-floating-label{left:initial;right:4px}.mdc-text-field--outlined .mdc-floating-label{left:4px;right:initial}.mdc-text-field--outlined .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--outlined .mdc-floating-label{left:initial;right:4px}.mdc-text-field--outlined--with-leading-icon .mdc-floating-label{left:36px;right:initial}.mdc-text-field--outlined--with-leading-icon .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--outlined--with-leading-icon .mdc-floating-label{left:initial;right:36px}.mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above{left:40px;right:initial}.mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--outlined--with-leading-icon .mdc-floating-label--float-above{left:initial;right:40px}.mdc-text-field__input{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;font-weight:400;letter-spacing:.009375em;text-decoration:inherit;text-transform:inherit;align-self:flex-end;box-sizing:border-box;width:100%;height:100%;padding:20px 16px 6px;transition:opacity 150ms cubic-bezier(.4,0,.2,1);border:none;border-bottom:1px solid;border-radius:0;background:0 0;appearance:none}.mdc-text-field__input::placeholder{transition:opacity 67ms cubic-bezier(.4,0,.2,1);opacity:0;color:rgba(0,0,0,.54)}.mdc-text-field__input:-ms-input-placeholder{color:rgba(0,0,0,.54)!important}.mdc-text-field--focused .mdc-text-field__input::placeholder,.mdc-text-field--fullwidth .mdc-text-field__input::placeholder,.mdc-text-field--no-label .mdc-text-field__input::placeholder{transition-delay:40ms;transition-duration:110ms;opacity:1}.mdc-text-field__input:focus{outline:0}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input:-webkit-autofill{z-index:auto!important}.mdc-text-field--no-label:not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{padding-top:16px;padding-bottom:16px}.mdc-text-field__input:-webkit-autofill+.mdc-floating-label{transform:translateY(-50%) scale(.75);cursor:auto}.mdc-text-field--outlined{border:none;overflow:visible}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.38)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee)}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:4px 0 0 4px}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl],[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading{border-radius:0 4px 4px 0}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 4px 4px 0}.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl],[dir=rtl] .mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:4px 0 0 4px}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) scale(1)}.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) scale(.75)}.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:0}.mdc-text-field--outlined::after,.mdc-text-field--outlined::before{content:none}.mdc-text-field--outlined:not(.mdc-text-field--disabled){background-color:transparent}.mdc-text-field--outlined .mdc-text-field__input{display:flex;padding:12px 16px 14px;border:none!important;background-color:transparent;z-index:1}.mdc-text-field--outlined .mdc-text-field__icon{z-index:2}.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline--notched .mdc-notched-outline__notch{padding-top:1px}.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--outlined.mdc-text-field--disabled{background-color:transparent}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.06)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{border-bottom:none}.mdc-text-field--outlined.mdc-text-field--dense{height:48px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-134%) scale(1)}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{font-size:.8rem}.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-120%) scale(.8)}.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-dense 250ms 1}.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__input{padding:12px 12px 7px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label{top:14px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__icon{top:12px}.mdc-text-field--with-leading-icon .mdc-text-field__icon{left:16px;right:initial}.mdc-text-field--with-leading-icon .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon .mdc-text-field__icon{left:initial;right:16px}.mdc-text-field--with-leading-icon .mdc-text-field__input{padding-left:48px;padding-right:16px}.mdc-text-field--with-leading-icon .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon .mdc-text-field__input{padding-left:16px;padding-right:48px}.mdc-text-field--with-leading-icon .mdc-floating-label{left:48px;right:initial}.mdc-text-field--with-leading-icon .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon .mdc-floating-label{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon{left:16px;right:initial}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__icon{left:initial;right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input{padding-left:48px;padding-right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-text-field__input{padding-left:16px;padding-right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(-32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-37.25px) translateX(32px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(-32px) scale(.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-34.75px) translateX(32px) scale(.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir=rtl] .mdc-floating-label--shake,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl 250ms 1}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:36px;right:initial}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label{left:initial;right:36px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-134%) translateX(-21px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-134%) translateX(21px) scale(1)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{font-size:.8rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-120%) translateX(-21px) scale(.8)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-120%) translateX(21px) scale(.8)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense.mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense 250ms 1}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense[dir=rtl] .mdc-floating-label--shake,[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl 250ms 1}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label{left:32px;right:initial}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label{left:initial;right:32px}.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:initial;right:12px}.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:12px;right:initial}.mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:16px;padding-right:48px}.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:48px;padding-right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon{left:initial;right:16px}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__icon{left:16px;right:initial}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input{padding-left:16px;padding-right:48px}.mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--outlined .mdc-text-field__input{padding-left:48px;padding-right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:16px;right:auto}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:auto;right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon~.mdc-text-field__icon{right:12px;left:auto}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon~.mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__icon~.mdc-text-field__icon{right:auto;left:12px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:48px;padding-right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:48px;padding-right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{bottom:16px;transform:scale(.8)}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon{left:12px;right:initial}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon{left:initial;right:12px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:44px;padding-right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:16px;padding-right:44px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label{left:44px;right:initial}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label{left:initial;right:44px}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:initial;right:12px}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:12px;right:initial}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:16px;padding-right:44px}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:44px;padding-right:16px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:12px;right:auto}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:auto;right:12px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon~.mdc-text-field__icon{right:12px;left:auto}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon~.mdc-text-field__icon[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon~.mdc-text-field__icon{right:auto;left:12px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:44px;padding-right:44px}.mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir=rtl],[dir=rtl] .mdc-text-field--with-leading-icon.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:44px;padding-right:44px}.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-70%) scale(.8)}.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-dense 250ms 1}.mdc-text-field--dense .mdc-text-field__input{padding:12px 12px 0}.mdc-text-field--dense .mdc-floating-label{font-size:.813rem}.mdc-text-field--dense .mdc-floating-label--float-above{font-size:.813rem}.mdc-text-field__input:required~.mdc-floating-label::after,.mdc-text-field__input:required~.mdc-notched-outline .mdc-floating-label::after{margin-left:1px;content:\"*\"}.mdc-text-field--textarea{display:inline-flex;width:auto;height:auto;transition:none;overflow:visible}.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.38)}.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--textarea:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.87)}.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--textarea:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee)}.mdc-text-field--textarea .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea 250ms 1}.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading{border-radius:4px 0 0 4px}.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading[dir=rtl],[dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__leading{border-radius:0 4px 4px 0}.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:0 4px 4px 0}.mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing[dir=rtl],[dir=rtl] .mdc-text-field--textarea .mdc-notched-outline .mdc-notched-outline__trailing{border-radius:4px 0 0 4px}.mdc-text-field--textarea::after,.mdc-text-field--textarea::before{content:none}.mdc-text-field--textarea:not(.mdc-text-field--disabled){background-color:transparent}.mdc-text-field--textarea .mdc-floating-label--float-above{transform:translateY(-144%) scale(1)}.mdc-text-field--textarea .mdc-floating-label--float-above{font-size:.75rem}.mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above{transform:translateY(-130%) scale(.75)}.mdc-text-field--textarea .mdc-notched-outline--upgraded .mdc-floating-label--float-above,.mdc-text-field--textarea.mdc-notched-outline--upgraded .mdc-floating-label--float-above{font-size:1rem}.mdc-text-field--textarea .mdc-text-field-character-counter{left:initial;right:16px;position:absolute;bottom:13px}.mdc-text-field--textarea .mdc-text-field-character-counter[dir=rtl],[dir=rtl] .mdc-text-field--textarea .mdc-text-field-character-counter{left:16px;right:initial}.mdc-text-field--textarea .mdc-text-field__input{align-self:auto;box-sizing:border-box;height:auto;margin:8px 1px 1px 0;padding:0 16px 16px;border:none;line-height:1.75rem}.mdc-text-field--textarea .mdc-text-field-character-counter+.mdc-text-field__input{margin-bottom:28px;padding-bottom:0}.mdc-text-field--textarea .mdc-floating-label{top:17px;width:auto;pointer-events:none}.mdc-text-field--textarea .mdc-floating-label:not(.mdc-floating-label--float-above){transform:none}.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--focused .mdc-notched-outline__trailing{border-width:2px}.mdc-text-field--fullwidth{width:100%}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea){display:block}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea)::after,.mdc-text-field--fullwidth:not(.mdc-text-field--textarea)::before{content:none}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea):not(.mdc-text-field--disabled){background-color:transparent}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__input{padding:0}.mdc-text-field--fullwidth.mdc-text-field--textarea .mdc-text-field__input{resize:vertical}.mdc-text-field--fullwidth.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea){border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error,#b00020)}.mdc-text-field-helper-line{display:flex;justify-content:space-between;box-sizing:border-box}.mdc-text-field--dense+.mdc-text-field-helper-line{margin-bottom:4px}.mdc-text-field+.mdc-text-field-helper-line{padding-right:16px;padding-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98,0,238,.87)}.mdc-text-field--focused .mdc-text-field__input:required~.mdc-floating-label::after,.mdc-text-field--focused .mdc-text-field__input:required~.mdc-notched-outline .mdc-floating-label::after{color:rgba(98,0,238,.87)}.mdc-text-field--focused+.mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover{border-bottom-color:#b00020;border-bottom-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple{background-color:#b00020;background-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#b00020;color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{color:#b00020;color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid .mdc-text-field__input{caret-color:#b00020;caret-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input:required~.mdc-floating-label::after,.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input:required~.mdc-notched-outline .mdc-floating-label::after{color:#b00020;color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid.mdc-text-field--with-trailing-icon:not(.mdc-text-field--with-leading-icon):not(.mdc-text-field--disabled) .mdc-text-field__icon{color:#b00020;color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid.mdc-text-field--with-trailing-icon.mdc-text-field--with-leading-icon:not(.mdc-text-field--disabled) .mdc-text-field__icon~.mdc-text-field__icon{color:#b00020;color:var(--mdc-theme-error,#b00020)}.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover~.mdc-notched-outline .mdc-notched-outline__trailing,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover~.mdc-notched-outline .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__leading,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__notch,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__trailing{border-color:#b00020;border-color:var(--mdc-theme-error,#b00020)}.mdc-text-field--disabled{background-color:#fafafa;border-bottom:none;pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{border-bottom-color:rgba(0,0,0,.06)}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0,0,0,.37)}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0,0,0,.37)}.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-helper-text{color:rgba(0,0,0,.37)}.mdc-text-field--disabled .mdc-text-field-character-counter,.mdc-text-field--disabled+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:rgba(0,0,0,.37)}.mdc-text-field--disabled .mdc-text-field__icon{color:rgba(0,0,0,.3)}.mdc-text-field--disabled:not(.mdc-text-field--textarea){border-bottom-color:rgba(0,0,0,.12)}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--textarea.mdc-text-field--disabled{background-color:transparent;background-color:#f9f9f9}.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__leading,.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__notch,.mdc-text-field--textarea.mdc-text-field--disabled .mdc-notched-outline__trailing{border-color:rgba(0,0,0,.06)}.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input{border-bottom:none}@keyframes mdc-floating-label-shake-float-above-text-field-dense{0%{transform:translateX(calc(0 - 0)) translateY(-70%) scale(.8)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - 0)) translateY(-70%) scale(.8)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - 0)) translateY(-70%) scale(.8)}100%{transform:translateX(calc(0 - 0)) translateY(-70%) scale(.8)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - 0)) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - 0)) translateY(-34.75px) scale(.75)}100%{transform:translateX(calc(0 - 0)) translateY(-34.75px) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-dense{0%{transform:translateX(calc(0 - 0)) translateY(-120%) scale(.8)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - 0)) translateY(-120%) scale(.8)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - 0)) translateY(-120%) scale(.8)}100%{transform:translateX(calc(0 - 0)) translateY(-120%) scale(.8)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 0)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - 0)) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - 0)) translateY(-34.75px) scale(.75)}100%{transform:translateX(calc(0 - 0)) translateY(-34.75px) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense{0%{transform:translateX(calc(0 - 21px)) translateY(-120%) scale(.8)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - 21px)) translateY(-120%) scale(.8)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - 21px)) translateY(-120%) scale(.8)}100%{transform:translateX(calc(0 - 21px)) translateY(-120%) scale(.8)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - 0)) translateY(-34.75px) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - 0)) translateY(-34.75px) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - 0)) translateY(-34.75px) scale(.75)}100%{transform:translateX(calc(0 - 0)) translateY(-34.75px) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl{0%{transform:translateX(calc(0 - -21px)) translateY(-120%) scale(.8)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - -21px)) translateY(-120%) scale(.8)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - -21px)) translateY(-120%) scale(.8)}100%{transform:translateX(calc(0 - -21px)) translateY(-120%) scale(.8)}}@keyframes mdc-floating-label-shake-float-above-textarea{0%{transform:translateX(calc(0 - 0)) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(.5,0,.701732,.495819);transform:translateX(calc(4% - 0)) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(.302435,.381352,.55,.956352);transform:translateX(calc(-4% - 0)) translateY(-130%) scale(.75)}100%{transform:translateX(calc(0 - 0)) translateY(-130%) scale(.75)}}.material-icons{font-family:var(--mdc-icon-font, \"Material Icons\");font-weight:400;font-style:normal;font-size:var(--mdc-icon-size,24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\"}.hidden,.hidden::after,.hidden::before{display:none}:host{display:inline-block;outline:0}:host([fullwidth]){display:block}.mdc-text-field{display:flex;width:100%;border-radius:4px 4px 0 0;border-radius:var(--mdc-text-field-filled-border-radius,4px 4px 0 0)}mwc-notched-outline{--mdc-notched-outline-border-color:var(--mdc-text-field-outlined-idle-border-color, rgba(0, 0, 0, 0.38))}:host(:not([disabled]):hover) :not(.mdc-text-field--invalid):not(.mdc-text-field--focused) mwc-notched-outline{--mdc-notched-outline-border-color:var(--mdc-text-field-outlined-hover-border-color, rgba(0, 0, 0, 0.87))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-fill-color,#f5f5f5)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid mwc-notched-outline{--mdc-notched-outline-border-color:var(--mdc-text-field-error-color, var(--mdc-theme-error, #b00020))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid .mdc-text-field__icon,:host(:not([disabled])) .mdc-text-field.mdc-text-field--invalid+.mdc-text-field-helper-line .mdc-text-field-character-counter{color:var(--mdc-text-field-error-color,var(--mdc-theme-error,#b00020))}:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host(:not([disabled])) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused mwc-notched-outline{--mdc-notched-outline-stroke-width:2px}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) mwc-notched-outline{--mdc-notched-outline-border-color:var(--mdc-text-field-focused-label-color, var(--mdc-theme-primary, rgba(98, 0, 238, 0.87)))}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-floating-label{color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-text-field__input:required~.mdc-floating-label::after,:host(:not([disabled])) .mdc-text-field.mdc-text-field--focused:not(.mdc-text-field--invalid) .mdc-text-field__input:required~.mdc-notched-outline .mdc-floating-label::after{color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input{color:var(--mdc-text-field-ink-color,rgba(0,0,0,.87))}:host(:not([disabled])) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6))}:host(:not([disabled])) .mdc-text-field-helper-line .mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg),:host(:not([disabled])) .mdc-text-field-helper-line:not(.mdc-text-field--invalid) .mdc-text-field-character-counter{color:var(--mdc-text-field-label-ink-color,rgba(0,0,0,.6))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--outlined){background-color:var(--mdc-text-field-disabled-fill-color,#fafafa)}:host([disabled]) .mdc-text-field.mdc-text-field--outlined mwc-notched-outline{--mdc-notched-outline-border-color:var(--mdc-text-field-outlined-disabled-border-color, rgba(0, 0, 0, 0.06))}:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label,:host([disabled]) .mdc-text-field:not(.mdc-text-field--invalid):not(.mdc-text-field--focused) .mdc-floating-label::after{color:var(--mdc-text-field-disabled-ink-color,rgba(0,0,0,.37))}:host([disabled]) .mdc-text-field .mdc-text-field__input,:host([disabled]) .mdc-text-field .mdc-text-field__input::placeholder{color:var(--mdc-text-field-disabled-ink-color,rgba(0,0,0,.37))}:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-character-counter,:host([disabled]) .mdc-text-field-helper-line .mdc-text-field-helper-text{color:var(--mdc-text-field-disabled-ink-color,rgba(0,0,0,.37))}"])));

      var TextField = /*#__PURE__*/function (_TextFieldBase) {
        _inherits(TextField, _TextFieldBase);

        var _super = _createSuper(TextField);

        function TextField() {
          _classCallCheck(this, TextField);

          return _super.apply(this, arguments);
        }

        return TextField;
      }(TextFieldBase);

      TextField.styles = style$4;
      TextField = __decorate([customElement('mwc-textfield')], TextField);

      /**
       * @license
       * Copyright 2017 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      var cssClasses$8 = {
        ROOT: 'mdc-form-field'
      };
      var strings$6 = {
        LABEL_SELECTOR: '.mdc-form-field > label'
      };

      /**
       * @license
       * Copyright 2017 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      var MDCFormFieldFoundation =
      /** @class */
      function (_super) {
        __extends(MDCFormFieldFoundation, _super);

        function MDCFormFieldFoundation(adapter) {
          var _this = _super.call(this, _assign({}, MDCFormFieldFoundation.defaultAdapter, adapter)) || this;

          _this.clickHandler_ = function () {
            return _this.handleClick_();
          };

          return _this;
        }

        Object.defineProperty(MDCFormFieldFoundation, "cssClasses", {
          get: function get() {
            return cssClasses$8;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCFormFieldFoundation, "strings", {
          get: function get() {
            return strings$6;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCFormFieldFoundation, "defaultAdapter", {
          get: function get() {
            return {
              activateInputRipple: function activateInputRipple() {
                return undefined;
              },
              deactivateInputRipple: function deactivateInputRipple() {
                return undefined;
              },
              deregisterInteractionHandler: function deregisterInteractionHandler() {
                return undefined;
              },
              registerInteractionHandler: function registerInteractionHandler() {
                return undefined;
              }
            };
          },
          enumerable: true,
          configurable: true
        });

        MDCFormFieldFoundation.prototype.init = function () {
          this.adapter_.registerInteractionHandler('click', this.clickHandler_);
        };

        MDCFormFieldFoundation.prototype.destroy = function () {
          this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
        };

        MDCFormFieldFoundation.prototype.handleClick_ = function () {
          var _this = this;

          this.adapter_.activateInputRipple();
          requestAnimationFrame(function () {
            return _this.adapter_.deactivateInputRipple();
          });
        };

        return MDCFormFieldFoundation;
      }(MDCFoundation);

      var _templateObject$b;
      var FormfieldBase = /*#__PURE__*/function (_BaseElement) {
        _inherits(FormfieldBase, _BaseElement);

        var _super = _createSuper(FormfieldBase);

        function FormfieldBase() {
          var _this;

          _classCallCheck(this, FormfieldBase);

          _this = _super.apply(this, arguments);
          _this.alignEnd = false;
          _this.label = '';
          _this.mdcFoundationClass = MDCFormFieldFoundation;
          return _this;
        }

        _createClass(FormfieldBase, [{
          key: "createAdapter",
          value: function createAdapter() {
            var _this2 = this;

            return {
              registerInteractionHandler: function registerInteractionHandler(type, handler) {
                _this2.labelEl.addEventListener(type, handler);
              },
              deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
                _this2.labelEl.removeEventListener(type, handler);
              },
              activateInputRipple: function activateInputRipple() {
                var input = _this2.input;

                if (input instanceof FormElement && input.ripple) {
                  input.ripple.activate();
                }
              },
              deactivateInputRipple: function deactivateInputRipple() {
                var input = _this2.input;

                if (input instanceof FormElement && input.ripple) {
                  input.ripple.deactivate();
                }
              }
            };
          }
        }, {
          key: "input",
          get: function get() {
            return findAssignedElement(this.slotEl, '*');
          }
        }, {
          key: "render",
          value: function render() {
            return html(_templateObject$b || (_templateObject$b = _taggedTemplateLiteral(["<div class=\"mdc-form-field ", "\"><slot></slot><label class=\"mdc-label\" @click=\"", "\">", "</label></div>"])), classMap({
              'mdc-form-field--align-end': this.alignEnd
            }), this._labelClick, this.label);
          }
        }, {
          key: "_labelClick",
          value: function _labelClick() {
            var input = this.input;

            if (input) {
              input.focus();
              input.click();
            }
          }
        }]);

        return FormfieldBase;
      }(BaseElement);

      __decorate([property({
        type: Boolean
      })], FormfieldBase.prototype, "alignEnd", void 0);

      __decorate([property({
        type: String
      }), observer( /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(label) {
          var input;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  input = this.input;

                  if (!input) {
                    _context.next = 10;
                    break;
                  }

                  if (!(input.localName === 'input')) {
                    _context.next = 6;
                    break;
                  }

                  input.setAttribute('aria-label', label);
                  _context.next = 10;
                  break;

                case 6:
                  if (!(input instanceof FormElement)) {
                    _context.next = 10;
                    break;
                  }

                  _context.next = 9;
                  return input.updateComplete;

                case 9:
                  input.setAriaLabel(label);

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }())], FormfieldBase.prototype, "label", void 0);

      __decorate([query('.mdc-form-field')], FormfieldBase.prototype, "mdcRoot", void 0);

      __decorate([query('slot')], FormfieldBase.prototype, "slotEl", void 0);

      __decorate([query('label')], FormfieldBase.prototype, "labelEl", void 0);

      var _templateObject$c;
      var style$5 = css(_templateObject$c || (_templateObject$c = _taggedTemplateLiteral([".mdc-form-field{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87));display:inline-flex;align-items:center;vertical-align:middle}.mdc-form-field>label{order:0;margin-right:auto;padding-left:4px}.mdc-form-field[dir=rtl]>label,[dir=rtl] .mdc-form-field>label{margin-left:auto;padding-right:4px}.mdc-form-field--align-end>label{order:-1;margin-left:auto;padding-right:4px}.mdc-form-field--align-end[dir=rtl]>label,[dir=rtl] .mdc-form-field--align-end>label{margin-right:auto;padding-left:4px}.mdc-form-field{align-items:center}::slotted(*){font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:1.25rem;font-weight:400;letter-spacing:.0178571429em;text-decoration:inherit;text-transform:inherit;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background,rgba(0,0,0,.87))}::slotted(mwc-switch){margin-right:10px}::slotted(mwc-switch)[dir=rtl],[dir=rtl] ::slotted(mwc-switch){margin-left:10px}"])));

      var Formfield = /*#__PURE__*/function (_FormfieldBase) {
        _inherits(Formfield, _FormfieldBase);

        var _super = _createSuper(Formfield);

        function Formfield() {
          _classCallCheck(this, Formfield);

          return _super.apply(this, arguments);
        }

        return Formfield;
      }(FormfieldBase);

      Formfield.styles = style$5;
      Formfield = __decorate([customElement('mwc-formfield')], Formfield);

      /**
       * @license
       * Copyright 2019 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      /**
       * Stores result from applyPassive to avoid redundant processing to detect
       * passive event listener support.
       */
      var supportsPassive_$1;
      /**
       * Determine whether the current browser supports passive event listeners, and
       * if so, use them.
       */

      function applyPassive$1(globalObj, forceRefresh) {
        if (globalObj === void 0) {
          globalObj = window;
        }

        if (forceRefresh === void 0) {
          forceRefresh = false;
        }

        if (supportsPassive_$1 === undefined || forceRefresh) {
          var isSupported_1 = false;

          try {
            globalObj.document.addEventListener('test', function () {
              return undefined;
            }, {
              get passive() {
                isSupported_1 = true;
                return isSupported_1;
              }

            });
          } catch (e) {} // tslint:disable-line:no-empty cannot throw error due to tests. tslint also disables console.log.


          supportsPassive_$1 = isSupported_1;
        }

        return supportsPassive_$1 ? {
          passive: true
        } : false;
      }

      /**
       * @license
       * Copyright 2018 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      function matches$1(element, selector) {
        var nativeMatches = element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
        return nativeMatches.call(element, selector);
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      var cssClasses$9 = {
        // Ripple is a special case where the "root" component is really a "mixin" of sorts,
        // given that it's an 'upgrade' to an existing component. That being said it is the root
        // CSS class that all other CSS classes derive from.
        BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
        FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
        FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation',
        ROOT: 'mdc-ripple-upgraded',
        UNBOUNDED: 'mdc-ripple-upgraded--unbounded'
      };
      var strings$7 = {
        VAR_FG_SCALE: '--mdc-ripple-fg-scale',
        VAR_FG_SIZE: '--mdc-ripple-fg-size',
        VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end',
        VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
        VAR_LEFT: '--mdc-ripple-left',
        VAR_TOP: '--mdc-ripple-top'
      };
      var numbers$4 = {
        DEACTIVATION_TIMEOUT_MS: 225,
        FG_DEACTIVATION_MS: 150,
        INITIAL_ORIGIN_SCALE: 0.6,
        PADDING: 10,
        TAP_DELAY_MS: 300
      };

      /**
       * Stores result from supportsCssVariables to avoid redundant processing to
       * detect CSS custom variable support.
       */
      var supportsCssVariables_;

      function detectEdgePseudoVarBug(windowObj) {
        // Detect versions of Edge with buggy var() support
        // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
        var document = windowObj.document;
        var node = document.createElement('div');
        node.className = 'mdc-ripple-surface--test-edge-var-bug'; // Append to head instead of body because this script might be invoked in the
        // head, in which case the body doesn't exist yet. The probe works either way.

        document.head.appendChild(node); // The bug exists if ::before style ends up propagating to the parent element.
        // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
        // but Firefox is known to support CSS custom properties correctly.
        // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397

        var computedStyle = windowObj.getComputedStyle(node);
        var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';

        if (node.parentNode) {
          node.parentNode.removeChild(node);
        }

        return hasPseudoVarBug;
      }

      function supportsCssVariables(windowObj, forceRefresh) {
        if (forceRefresh === void 0) {
          forceRefresh = false;
        }

        var CSS = windowObj.CSS;
        var supportsCssVars = supportsCssVariables_;

        if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
          return supportsCssVariables_;
        }

        var supportsFunctionPresent = CSS && typeof CSS.supports === 'function';

        if (!supportsFunctionPresent) {
          return false;
        }

        var explicitlySupportsCssVars = CSS.supports('--css-vars', 'yes'); // See: https://bugs.webkit.org/show_bug.cgi?id=154669
        // See: README section on Safari

        var weAreFeatureDetectingSafari10plus = CSS.supports('(--css-vars: yes)') && CSS.supports('color', '#00000000');

        if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
          supportsCssVars = !detectEdgePseudoVarBug(windowObj);
        } else {
          supportsCssVars = false;
        }

        if (!forceRefresh) {
          supportsCssVariables_ = supportsCssVars;
        }

        return supportsCssVars;
      }
      function getNormalizedEventCoords(evt, pageOffset, clientRect) {
        if (!evt) {
          return {
            x: 0,
            y: 0
          };
        }

        var x = pageOffset.x,
            y = pageOffset.y;
        var documentX = x + clientRect.left;
        var documentY = y + clientRect.top;
        var normalizedX;
        var normalizedY; // Determine touch point relative to the ripple container.

        if (evt.type === 'touchstart') {
          var touchEvent = evt;
          normalizedX = touchEvent.changedTouches[0].pageX - documentX;
          normalizedY = touchEvent.changedTouches[0].pageY - documentY;
        } else {
          var mouseEvent = evt;
          normalizedX = mouseEvent.pageX - documentX;
          normalizedY = mouseEvent.pageY - documentY;
        }

        return {
          x: normalizedX,
          y: normalizedY
        };
      }

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown']; // Deactivation events registered on documentElement when a pointer-related down event occurs

      var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup', 'contextmenu']; // simultaneous nested activations

      var activatedTargets = [];

      var MDCRippleFoundation =
      /** @class */
      function (_super) {
        __extends(MDCRippleFoundation, _super);

        function MDCRippleFoundation(adapter) {
          var _this = _super.call(this, _assign({}, MDCRippleFoundation.defaultAdapter, adapter)) || this;

          _this.activationAnimationHasEnded_ = false;
          _this.activationTimer_ = 0;
          _this.fgDeactivationRemovalTimer_ = 0;
          _this.fgScale_ = '0';
          _this.frame_ = {
            width: 0,
            height: 0
          };
          _this.initialSize_ = 0;
          _this.layoutFrame_ = 0;
          _this.maxRadius_ = 0;
          _this.unboundedCoords_ = {
            left: 0,
            top: 0
          };
          _this.activationState_ = _this.defaultActivationState_();

          _this.activationTimerCallback_ = function () {
            _this.activationAnimationHasEnded_ = true;

            _this.runDeactivationUXLogicIfReady_();
          };

          _this.activateHandler_ = function (e) {
            return _this.activate_(e);
          };

          _this.deactivateHandler_ = function () {
            return _this.deactivate_();
          };

          _this.focusHandler_ = function () {
            return _this.handleFocus();
          };

          _this.blurHandler_ = function () {
            return _this.handleBlur();
          };

          _this.resizeHandler_ = function () {
            return _this.layout();
          };

          return _this;
        }

        Object.defineProperty(MDCRippleFoundation, "cssClasses", {
          get: function get() {
            return cssClasses$9;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCRippleFoundation, "strings", {
          get: function get() {
            return strings$7;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCRippleFoundation, "numbers", {
          get: function get() {
            return numbers$4;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCRippleFoundation, "defaultAdapter", {
          get: function get() {
            return {
              addClass: function addClass() {
                return undefined;
              },
              browserSupportsCssVars: function browserSupportsCssVars() {
                return true;
              },
              computeBoundingRect: function computeBoundingRect() {
                return {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: 0
                };
              },
              containsEventTarget: function containsEventTarget() {
                return true;
              },
              deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() {
                return undefined;
              },
              deregisterInteractionHandler: function deregisterInteractionHandler() {
                return undefined;
              },
              deregisterResizeHandler: function deregisterResizeHandler() {
                return undefined;
              },
              getWindowPageOffset: function getWindowPageOffset() {
                return {
                  x: 0,
                  y: 0
                };
              },
              isSurfaceActive: function isSurfaceActive() {
                return true;
              },
              isSurfaceDisabled: function isSurfaceDisabled() {
                return true;
              },
              isUnbounded: function isUnbounded() {
                return true;
              },
              registerDocumentInteractionHandler: function registerDocumentInteractionHandler() {
                return undefined;
              },
              registerInteractionHandler: function registerInteractionHandler() {
                return undefined;
              },
              registerResizeHandler: function registerResizeHandler() {
                return undefined;
              },
              removeClass: function removeClass() {
                return undefined;
              },
              updateCssVariable: function updateCssVariable() {
                return undefined;
              }
            };
          },
          enumerable: true,
          configurable: true
        });

        MDCRippleFoundation.prototype.init = function () {
          var _this = this;

          var supportsPressRipple = this.supportsPressRipple_();
          this.registerRootHandlers_(supportsPressRipple);

          if (supportsPressRipple) {
            var _a = MDCRippleFoundation.cssClasses,
                ROOT_1 = _a.ROOT,
                UNBOUNDED_1 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
              _this.adapter_.addClass(ROOT_1);

              if (_this.adapter_.isUnbounded()) {
                _this.adapter_.addClass(UNBOUNDED_1); // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple


                _this.layoutInternal_();
              }
            });
          }
        };

        MDCRippleFoundation.prototype.destroy = function () {
          var _this = this;

          if (this.supportsPressRipple_()) {
            if (this.activationTimer_) {
              clearTimeout(this.activationTimer_);
              this.activationTimer_ = 0;
              this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_ACTIVATION);
            }

            if (this.fgDeactivationRemovalTimer_) {
              clearTimeout(this.fgDeactivationRemovalTimer_);
              this.fgDeactivationRemovalTimer_ = 0;
              this.adapter_.removeClass(MDCRippleFoundation.cssClasses.FG_DEACTIVATION);
            }

            var _a = MDCRippleFoundation.cssClasses,
                ROOT_2 = _a.ROOT,
                UNBOUNDED_2 = _a.UNBOUNDED;
            requestAnimationFrame(function () {
              _this.adapter_.removeClass(ROOT_2);

              _this.adapter_.removeClass(UNBOUNDED_2);

              _this.removeCssVars_();
            });
          }

          this.deregisterRootHandlers_();
          this.deregisterDeactivationHandlers_();
        };
        /**
         * @param evt Optional event containing position information.
         */


        MDCRippleFoundation.prototype.activate = function (evt) {
          this.activate_(evt);
        };

        MDCRippleFoundation.prototype.deactivate = function () {
          this.deactivate_();
        };

        MDCRippleFoundation.prototype.layout = function () {
          var _this = this;

          if (this.layoutFrame_) {
            cancelAnimationFrame(this.layoutFrame_);
          }

          this.layoutFrame_ = requestAnimationFrame(function () {
            _this.layoutInternal_();

            _this.layoutFrame_ = 0;
          });
        };

        MDCRippleFoundation.prototype.setUnbounded = function (unbounded) {
          var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

          if (unbounded) {
            this.adapter_.addClass(UNBOUNDED);
          } else {
            this.adapter_.removeClass(UNBOUNDED);
          }
        };

        MDCRippleFoundation.prototype.handleFocus = function () {
          var _this = this;

          requestAnimationFrame(function () {
            return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
          });
        };

        MDCRippleFoundation.prototype.handleBlur = function () {
          var _this = this;

          requestAnimationFrame(function () {
            return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
          });
        };
        /**
         * We compute this property so that we are not querying information about the client
         * until the point in time where the foundation requests it. This prevents scenarios where
         * client-side feature-detection may happen too early, such as when components are rendered on the server
         * and then initialized at mount time on the client.
         */


        MDCRippleFoundation.prototype.supportsPressRipple_ = function () {
          return this.adapter_.browserSupportsCssVars();
        };

        MDCRippleFoundation.prototype.defaultActivationState_ = function () {
          return {
            activationEvent: undefined,
            hasDeactivationUXRun: false,
            isActivated: false,
            isProgrammatic: false,
            wasActivatedByPointer: false,
            wasElementMadeActive: false
          };
        };
        /**
         * supportsPressRipple Passed from init to save a redundant function call
         */


        MDCRippleFoundation.prototype.registerRootHandlers_ = function (supportsPressRipple) {
          var _this = this;

          if (supportsPressRipple) {
            ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
              _this.adapter_.registerInteractionHandler(evtType, _this.activateHandler_);
            });

            if (this.adapter_.isUnbounded()) {
              this.adapter_.registerResizeHandler(this.resizeHandler_);
            }
          }

          this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
          this.adapter_.registerInteractionHandler('blur', this.blurHandler_);
        };

        MDCRippleFoundation.prototype.registerDeactivationHandlers_ = function (evt) {
          var _this = this;

          if (evt.type === 'keydown') {
            this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
          } else {
            POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
              _this.adapter_.registerDocumentInteractionHandler(evtType, _this.deactivateHandler_);
            });
          }
        };

        MDCRippleFoundation.prototype.deregisterRootHandlers_ = function () {
          var _this = this;

          ACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterInteractionHandler(evtType, _this.activateHandler_);
          });
          this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
          this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

          if (this.adapter_.isUnbounded()) {
            this.adapter_.deregisterResizeHandler(this.resizeHandler_);
          }
        };

        MDCRippleFoundation.prototype.deregisterDeactivationHandlers_ = function () {
          var _this = this;

          this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
          POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (evtType) {
            _this.adapter_.deregisterDocumentInteractionHandler(evtType, _this.deactivateHandler_);
          });
        };

        MDCRippleFoundation.prototype.removeCssVars_ = function () {
          var _this = this;

          var rippleStrings = MDCRippleFoundation.strings;
          var keys = Object.keys(rippleStrings);
          keys.forEach(function (key) {
            if (key.indexOf('VAR_') === 0) {
              _this.adapter_.updateCssVariable(rippleStrings[key], null);
            }
          });
        };

        MDCRippleFoundation.prototype.activate_ = function (evt) {
          var _this = this;

          if (this.adapter_.isSurfaceDisabled()) {
            return;
          }

          var activationState = this.activationState_;

          if (activationState.isActivated) {
            return;
          } // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction


          var previousActivationEvent = this.previousActivationEvent_;
          var isSameInteraction = previousActivationEvent && evt !== undefined && previousActivationEvent.type !== evt.type;

          if (isSameInteraction) {
            return;
          }

          activationState.isActivated = true;
          activationState.isProgrammatic = evt === undefined;
          activationState.activationEvent = evt;
          activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== undefined && (evt.type === 'mousedown' || evt.type === 'touchstart' || evt.type === 'pointerdown');
          var hasActivatedChild = evt !== undefined && activatedTargets.length > 0 && activatedTargets.some(function (target) {
            return _this.adapter_.containsEventTarget(target);
          });

          if (hasActivatedChild) {
            // Immediately reset activation state, while preserving logic that prevents touch follow-on events
            this.resetActivationState_();
            return;
          }

          if (evt !== undefined) {
            activatedTargets.push(evt.target);
            this.registerDeactivationHandlers_(evt);
          }

          activationState.wasElementMadeActive = this.checkElementMadeActive_(evt);

          if (activationState.wasElementMadeActive) {
            this.animateActivation_();
          }

          requestAnimationFrame(function () {
            // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
            activatedTargets = [];

            if (!activationState.wasElementMadeActive && evt !== undefined && (evt.key === ' ' || evt.keyCode === 32)) {
              // If space was pressed, try again within an rAF call to detect :active, because different UAs report
              // active states inconsistently when they're called within event handling code:
              // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
              // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
              // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
              // variable is set within a rAF callback for a submit button interaction (#2241).
              activationState.wasElementMadeActive = _this.checkElementMadeActive_(evt);

              if (activationState.wasElementMadeActive) {
                _this.animateActivation_();
              }
            }

            if (!activationState.wasElementMadeActive) {
              // Reset activation state immediately if element was not made active.
              _this.activationState_ = _this.defaultActivationState_();
            }
          });
        };

        MDCRippleFoundation.prototype.checkElementMadeActive_ = function (evt) {
          return evt !== undefined && evt.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
        };

        MDCRippleFoundation.prototype.animateActivation_ = function () {
          var _this = this;

          var _a = MDCRippleFoundation.strings,
              VAR_FG_TRANSLATE_START = _a.VAR_FG_TRANSLATE_START,
              VAR_FG_TRANSLATE_END = _a.VAR_FG_TRANSLATE_END;
          var _b = MDCRippleFoundation.cssClasses,
              FG_DEACTIVATION = _b.FG_DEACTIVATION,
              FG_ACTIVATION = _b.FG_ACTIVATION;
          var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;
          this.layoutInternal_();
          var translateStart = '';
          var translateEnd = '';

          if (!this.adapter_.isUnbounded()) {
            var _c = this.getFgTranslationCoordinates_(),
                startPoint = _c.startPoint,
                endPoint = _c.endPoint;

            translateStart = startPoint.x + "px, " + startPoint.y + "px";
            translateEnd = endPoint.x + "px, " + endPoint.y + "px";
          }

          this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
          this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd); // Cancel any ongoing activation/deactivation animations

          clearTimeout(this.activationTimer_);
          clearTimeout(this.fgDeactivationRemovalTimer_);
          this.rmBoundedActivationClasses_();
          this.adapter_.removeClass(FG_DEACTIVATION); // Force layout in order to re-trigger the animation.

          this.adapter_.computeBoundingRect();
          this.adapter_.addClass(FG_ACTIVATION);
          this.activationTimer_ = setTimeout(function () {
            return _this.activationTimerCallback_();
          }, DEACTIVATION_TIMEOUT_MS);
        };

        MDCRippleFoundation.prototype.getFgTranslationCoordinates_ = function () {
          var _a = this.activationState_,
              activationEvent = _a.activationEvent,
              wasActivatedByPointer = _a.wasActivatedByPointer;
          var startPoint;

          if (wasActivatedByPointer) {
            startPoint = getNormalizedEventCoords(activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
          } else {
            startPoint = {
              x: this.frame_.width / 2,
              y: this.frame_.height / 2
            };
          } // Center the element around the start point.


          startPoint = {
            x: startPoint.x - this.initialSize_ / 2,
            y: startPoint.y - this.initialSize_ / 2
          };
          var endPoint = {
            x: this.frame_.width / 2 - this.initialSize_ / 2,
            y: this.frame_.height / 2 - this.initialSize_ / 2
          };
          return {
            startPoint: startPoint,
            endPoint: endPoint
          };
        };

        MDCRippleFoundation.prototype.runDeactivationUXLogicIfReady_ = function () {
          var _this = this; // This method is called both when a pointing device is released, and when the activation animation ends.
          // The deactivation animation should only run after both of those occur.


          var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
          var _a = this.activationState_,
              hasDeactivationUXRun = _a.hasDeactivationUXRun,
              isActivated = _a.isActivated;
          var activationHasEnded = hasDeactivationUXRun || !isActivated;

          if (activationHasEnded && this.activationAnimationHasEnded_) {
            this.rmBoundedActivationClasses_();
            this.adapter_.addClass(FG_DEACTIVATION);
            this.fgDeactivationRemovalTimer_ = setTimeout(function () {
              _this.adapter_.removeClass(FG_DEACTIVATION);
            }, numbers$4.FG_DEACTIVATION_MS);
          }
        };

        MDCRippleFoundation.prototype.rmBoundedActivationClasses_ = function () {
          var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;
          this.adapter_.removeClass(FG_ACTIVATION);
          this.activationAnimationHasEnded_ = false;
          this.adapter_.computeBoundingRect();
        };

        MDCRippleFoundation.prototype.resetActivationState_ = function () {
          var _this = this;

          this.previousActivationEvent_ = this.activationState_.activationEvent;
          this.activationState_ = this.defaultActivationState_(); // Touch devices may fire additional events for the same interaction within a short time.
          // Store the previous event until it's safe to assume that subsequent events are for new interactions.

          setTimeout(function () {
            return _this.previousActivationEvent_ = undefined;
          }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
        };

        MDCRippleFoundation.prototype.deactivate_ = function () {
          var _this = this;

          var activationState = this.activationState_; // This can happen in scenarios such as when you have a keyup event that blurs the element.

          if (!activationState.isActivated) {
            return;
          }

          var state = _assign({}, activationState);

          if (activationState.isProgrammatic) {
            requestAnimationFrame(function () {
              return _this.animateDeactivation_(state);
            });
            this.resetActivationState_();
          } else {
            this.deregisterDeactivationHandlers_();
            requestAnimationFrame(function () {
              _this.activationState_.hasDeactivationUXRun = true;

              _this.animateDeactivation_(state);

              _this.resetActivationState_();
            });
          }
        };

        MDCRippleFoundation.prototype.animateDeactivation_ = function (_a) {
          var wasActivatedByPointer = _a.wasActivatedByPointer,
              wasElementMadeActive = _a.wasElementMadeActive;

          if (wasActivatedByPointer || wasElementMadeActive) {
            this.runDeactivationUXLogicIfReady_();
          }
        };

        MDCRippleFoundation.prototype.layoutInternal_ = function () {
          var _this = this;

          this.frame_ = this.adapter_.computeBoundingRect();
          var maxDim = Math.max(this.frame_.height, this.frame_.width); // Surface diameter is treated differently for unbounded vs. bounded ripples.
          // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
          // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
          // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
          // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
          // `overflow: hidden`.

          var getBoundedRadius = function getBoundedRadius() {
            var hypotenuse = Math.sqrt(Math.pow(_this.frame_.width, 2) + Math.pow(_this.frame_.height, 2));
            return hypotenuse + MDCRippleFoundation.numbers.PADDING;
          };

          this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius(); // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform

          this.initialSize_ = Math.floor(maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE);
          this.fgScale_ = "" + this.maxRadius_ / this.initialSize_;
          this.updateLayoutCssVars_();
        };

        MDCRippleFoundation.prototype.updateLayoutCssVars_ = function () {
          var _a = MDCRippleFoundation.strings,
              VAR_FG_SIZE = _a.VAR_FG_SIZE,
              VAR_LEFT = _a.VAR_LEFT,
              VAR_TOP = _a.VAR_TOP,
              VAR_FG_SCALE = _a.VAR_FG_SCALE;
          this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + "px");
          this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

          if (this.adapter_.isUnbounded()) {
            this.unboundedCoords_ = {
              left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
              top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
            };
            this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + "px");
            this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + "px");
          }
        };

        return MDCRippleFoundation;
      }(MDCFoundation);

      var _templateObject$d;
      var style$6 = css(_templateObject$d || (_templateObject$d = _taggedTemplateLiteral(["@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}"])));

      /**
      @license
      Copyright 2018 Google Inc. All Rights Reserved.

      Licensed under the Apache License, Version 2.0 (the "License");
      you may not use this file except in compliance with the License.
      You may obtain a copy of the License at

          http://www.apache.org/licenses/LICENSE-2.0

      Unless required by applicable law or agreed to in writing, software
      distributed under the License is distributed on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      See the License for the specific language governing permissions and
      limitations under the License.
      */
      var supportsCssVariablesWin = supportsCssVariables(window); // NOTE: This is a workaround for
      // https://bugs.webkit.org/show_bug.cgi?id=173027. Since keyframes on
      // pseudo-elements (:after) are not supported in Shadow DOM, we put the keyframe
      // style into the <head> element.

      var isSafari = navigator.userAgent.match(/Safari/);
      var didApplyRippleStyle = false;

      var applyRippleStyle = function applyRippleStyle() {
        didApplyRippleStyle = true;
        var part = new NodePart({
          templateFactory: templateFactory
        }); // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        part.appendInto(document.head);
        part.setValue(style$6);
        part.commit();
      };
      /**
       * Applied a ripple to the node specified by {surfaceNode}.
       * @param options {RippleNodeOptions}
       */


      var rippleNode = function rippleNode(options) {
        if (isSafari && !didApplyRippleStyle) {
          applyRippleStyle();
        } // TODO(sorvell): This directive requires bringing css yourself. We probably
        // need to do this because of ShadyCSS, but on Safari, the keyframes styling
        // must be global. Perhaps this directive could fix that.


        var surfaceNode = options.surfaceNode;
        var interactionNode = options.interactionNode || surfaceNode; // only style interaction node if not in the same root

        if (interactionNode.getRootNode() !== surfaceNode.getRootNode()) {
          if (interactionNode.style.position === '') {
            interactionNode.style.position = 'relative';
          }
        }

        var adapter = {
          browserSupportsCssVars: function browserSupportsCssVars() {
            return supportsCssVariablesWin;
          },
          isUnbounded: function isUnbounded() {
            return options.unbounded === undefined ? true : options.unbounded;
          },
          isSurfaceActive: function isSurfaceActive() {
            return matches$1(interactionNode, ':active');
          },
          isSurfaceDisabled: function isSurfaceDisabled() {
            return Boolean(options.disabled);
          },
          addClass: function addClass(className) {
            return surfaceNode.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return surfaceNode.classList.remove(className);
          },
          containsEventTarget: function containsEventTarget(target) {
            return interactionNode.contains(target);
          },
          registerInteractionHandler: function registerInteractionHandler(type, handler) {
            return interactionNode.addEventListener(type, handler, applyPassive$1());
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
            return interactionNode.removeEventListener(type, handler, applyPassive$1());
          },
          registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
            return (// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              document.documentElement.addEventListener(evtType, handler, applyPassive$1())
            );
          },
          deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
            return (// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              document.documentElement.removeEventListener(evtType, handler, applyPassive$1())
            );
          },
          registerResizeHandler: function registerResizeHandler(handler) {
            return window.addEventListener('resize', handler);
          },
          deregisterResizeHandler: function deregisterResizeHandler(handler) {
            return window.removeEventListener('resize', handler);
          },
          updateCssVariable: function updateCssVariable(varName, value) {
            return surfaceNode.style.setProperty(varName, value);
          },
          computeBoundingRect: function computeBoundingRect() {
            return surfaceNode.getBoundingClientRect();
          },
          getWindowPageOffset: function getWindowPageOffset() {
            return {
              x: window.pageXOffset,
              y: window.pageYOffset
            };
          }
        };
        var rippleFoundation = new MDCRippleFoundation(adapter);
        rippleFoundation.init();
        return rippleFoundation;
      };
      var rippleInteractionNodes = new WeakMap();
      /**
       * A directive that applies a Material ripple to a part node. The directive
       * should be applied to a PropertyPart.
       * @param options {RippleOptions}
       */

      var ripple = directive(function () {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return function (part) {
          var surfaceNode = part.committer.element;
          var interactionNode = options.interactionNode || surfaceNode;
          var rippleFoundation = part.value; // if the interaction node changes, destroy and invalidate the foundation.

          var existingInteractionNode = rippleInteractionNodes.get(rippleFoundation);

          if (existingInteractionNode !== undefined && existingInteractionNode !== interactionNode) {
            rippleFoundation.destroy();
            rippleFoundation = noChange;
          } // make the ripple, if needed


          if (rippleFoundation === noChange) {
            rippleFoundation = rippleNode(Object.assign({}, options, {
              surfaceNode: surfaceNode
            }));
            rippleInteractionNodes.set(rippleFoundation, interactionNode);
            part.setValue(rippleFoundation); // otherwise update settings as needed.
          } else {
            if (options.unbounded !== undefined) {
              rippleFoundation.setUnbounded(options.unbounded);
            }

            if (options.disabled !== undefined) {
              rippleFoundation.setUnbounded(options.disabled);
            }
          }

          if (options.active === true) {
            rippleFoundation.activate();
          } else if (options.active === false) {
            rippleFoundation.deactivate();
          }
        };
      });

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */
      var strings$8 = {
        NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control'
      };
      var cssClasses$a = {
        DISABLED: 'mdc-radio--disabled',
        ROOT: 'mdc-radio'
      };

      /**
       * @license
       * Copyright 2016 Google Inc.
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in
       * all copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
       * THE SOFTWARE.
       */

      var MDCRadioFoundation =
      /** @class */
      function (_super) {
        __extends(MDCRadioFoundation, _super);

        function MDCRadioFoundation(adapter) {
          return _super.call(this, _assign({}, MDCRadioFoundation.defaultAdapter, adapter)) || this;
        }

        Object.defineProperty(MDCRadioFoundation, "cssClasses", {
          get: function get() {
            return cssClasses$a;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCRadioFoundation, "strings", {
          get: function get() {
            return strings$8;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(MDCRadioFoundation, "defaultAdapter", {
          get: function get() {
            return {
              addClass: function addClass() {
                return undefined;
              },
              removeClass: function removeClass() {
                return undefined;
              },
              setNativeControlDisabled: function setNativeControlDisabled() {
                return undefined;
              }
            };
          },
          enumerable: true,
          configurable: true
        });

        MDCRadioFoundation.prototype.setDisabled = function (disabled) {
          var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;
          this.adapter_.setNativeControlDisabled(disabled);

          if (disabled) {
            this.adapter_.addClass(DISABLED);
          } else {
            this.adapter_.removeClass(DISABLED);
          }
        };

        return MDCRadioFoundation;
      }(MDCFoundation);

      var _templateObject$e;
      var RadioBase = /*#__PURE__*/function (_FormElement) {
        _inherits(RadioBase, _FormElement);

        var _super = _createSuper(RadioBase);

        function RadioBase() {
          var _this;

          _classCallCheck(this, RadioBase);

          _this = _super.apply(this, arguments);
          _this._checked = false;
          _this.disabled = false;
          _this.value = '';
          _this.name = '';
          _this.mdcFoundationClass = MDCRadioFoundation;
          return _this;
        }

        _createClass(RadioBase, [{
          key: "checked",
          get: function get() {
            return this._checked;
          }
          /**
           * We define our own getter/setter for `checked` because we need to track
           * changes to it synchronously.
           *
           * The order in which the `checked` property is set across radio buttons
           * within the same group is very important. However, we can't rely on
           * UpdatingElement's `updated` callback to observe these changes (which is
           * also what the `@observer` decorator uses), because it batches changes to
           * all properties.
           *
           * Consider:
           *
           *   radio1.disabled = true;
           *   radio2.checked = true;
           *   radio1.checked = true;
           *
           * In this case we'd first see all changes for radio1, and then for radio2,
           * and we couldn't tell that radio1 was the most recently checked.
           */
          ,
          set: function set(checked) {
            var oldValue = this._checked;

            if (!!checked === !!oldValue) {
              return;
            }

            this._checked = checked;

            if (this.formElement) {
              this.formElement.checked = checked;
            }

            if (this._selectionController !== undefined) {
              this._selectionController.update(this);
            }

            this.requestUpdate('checked', oldValue);
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            _get(_getPrototypeOf(RadioBase.prototype), "connectedCallback", this).call(this); // Note that we must defer creating the selection controller until the
            // element has connected, because selection controllers are keyed by the
            // radio's shadow root. For example, if we're stamping in a lit-html map
            // or repeat, then we'll be constructed before we're added to a root node.
            //
            // Also note if we aren't using native shadow DOM, then we don't technically
            // need a SelectionController, because our inputs will share document-scoped
            // native selection groups. However, it simplifies implementation and
            // testing to use one in all cases. In particular, it means we correctly
            // manage groups before the first update stamps the native input.
            //
            // eslint-disable-next-line @typescript-eslint/no-use-before-define


            this._selectionController = SelectionController.getController(this);

            this._selectionController.register(this); // With native <input type="radio">, when a checked radio is added to the
            // root, then it wins. Immediately update to emulate this behavior.


            this._selectionController.update(this);
          }
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {
            // The controller is initialized in connectedCallback, so if we are in
            // disconnectedCallback then it must be initialized.
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this._selectionController.unregister(this);

            this._selectionController = undefined;
          }
        }, {
          key: "focusNative",
          value: function focusNative() {
            this.formElement.focus();
          }
        }, {
          key: "ripple",
          get: function get() {
            return this.rippleElement.ripple;
          }
        }, {
          key: "createAdapter",
          value: function createAdapter() {
            var _this2 = this;

            return Object.assign(Object.assign({}, addHasRemoveClass(this.mdcRoot)), {
              setNativeControlDisabled: function setNativeControlDisabled(disabled) {
                _this2.formElement.disabled = disabled;
              }
            });
          }
        }, {
          key: "_changeHandler",
          value: function _changeHandler() {
            this.checked = this.formElement.checked;
          }
        }, {
          key: "_focusHandler",
          value: function _focusHandler() {
            if (this._selectionController !== undefined) {
              this._selectionController.focus(this);
            }
          }
        }, {
          key: "_clickHandler",
          value: function _clickHandler() {
            // Firefox has weird behavior with radios if they are not focused
            this.formElement.focus();
          }
        }, {
          key: "render",
          value: function render() {
            return html(_templateObject$e || (_templateObject$e = _taggedTemplateLiteral(["<div class=\"mdc-radio\" .ripple=\"", "\"><input class=\"mdc-radio__native-control\" type=\"radio\" name=\"", "\" .checked=\"", "\" .value=\"", "\" @change=\"", "\" @focus=\"", "\" @click=\"", "\"><div class=\"mdc-radio__background\"><div class=\"mdc-radio__outer-circle\"></div><div class=\"mdc-radio__inner-circle\"></div></div><div class=\"mdc-radio__ripple\"></div></div>"])), ripple(), this.name, this.checked, this.value, this._changeHandler, this._focusHandler, this._clickHandler);
          }
        }, {
          key: "firstUpdated",
          value: function firstUpdated() {
            _get(_getPrototypeOf(RadioBase.prototype), "firstUpdated", this).call(this); // We might not have been able to synchronize this from the checked setter
            // earlier, if checked was set before the input was stamped.


            this.formElement.checked = this.checked;

            if (this._selectionController !== undefined) {
              this._selectionController.update(this);
            }
          }
        }]);

        return RadioBase;
      }(FormElement);

      __decorate([query('.mdc-radio')], RadioBase.prototype, "mdcRoot", void 0);

      __decorate([query('input')], RadioBase.prototype, "formElement", void 0);

      __decorate([query('.mdc-radio__ripple')], RadioBase.prototype, "rippleElement", void 0);

      __decorate([property({
        type: Boolean,
        reflect: true
      })], RadioBase.prototype, "checked", null);

      __decorate([property({
        type: Boolean
      }), observer(function (disabled) {
        this.mdcFoundation.setDisabled(disabled);
      })], RadioBase.prototype, "disabled", void 0);

      __decorate([property({
        type: String
      }), observer(function (value) {
        this.formElement.value = value;
      })], RadioBase.prototype, "value", void 0);

      __decorate([property({
        type: String
      })], RadioBase.prototype, "name", void 0);
      /**
       * Unique symbol for marking roots
       */


      var selectionController = Symbol('selection controller');

      var SelectionSet = function SelectionSet() {
        _classCallCheck(this, SelectionSet);

        this.selected = null;
        this.ordered = null;
        this.set = new Set();
      };
      /**
       * Only one <input type="radio" name="group"> per group name can be checked at
       * once. However, the scope of "name" is the document/shadow root, so built-in
       * de-selection does not occur when two radio buttons are in different shadow
       * roots. This class bridges the checked state of radio buttons with the same
       * group name across different shadow roots.
       */


      var SelectionController = /*#__PURE__*/function () {
        function SelectionController(element) {
          var _this3 = this;

          _classCallCheck(this, SelectionController);

          this.sets = {};
          this.focusedSet = null;
          this.mouseIsDown = false;
          this.updating = false;
          element.addEventListener('keydown', function (e) {
            return _this3.keyDownHandler(e);
          });
          element.addEventListener('mousedown', function () {
            return _this3.mousedownHandler();
          });
          element.addEventListener('mouseup', function () {
            return _this3.mouseupHandler();
          });
        }

        _createClass(SelectionController, [{
          key: "keyDownHandler",
          value: function keyDownHandler(e) {
            if (!(e.target instanceof RadioBase)) {
              return;
            }

            var element = e.target;

            if (!this.has(element)) {
              return;
            }

            if (e.key == 'ArrowRight' || e.key == 'ArrowDown') {
              this.next(element);
            } else if (e.key == 'ArrowLeft' || e.key == 'ArrowUp') {
              this.previous(element);
            }
          }
        }, {
          key: "mousedownHandler",
          value: function mousedownHandler() {
            this.mouseIsDown = true;
          }
        }, {
          key: "mouseupHandler",
          value: function mouseupHandler() {
            this.mouseIsDown = false;
          }
        }, {
          key: "has",
          value: function has(element) {
            var set = this.getSet(element.name);
            return set.set.has(element);
          }
        }, {
          key: "previous",
          value: function previous(element) {
            var order = this.getOrdered(element);
            var i = order.indexOf(element);
            this.select(order[i - 1] || order[order.length - 1]);
          }
        }, {
          key: "next",
          value: function next(element) {
            var order = this.getOrdered(element);
            var i = order.indexOf(element);
            this.select(order[i + 1] || order[0]);
          }
        }, {
          key: "select",
          value: function select(element) {
            element.click();
          }
          /**
           * Helps to track the focused selection group and if it changes, focuses
           * the selected item in the group. This matches native radio button behavior.
           */

        }, {
          key: "focus",
          value: function focus(element) {
            // Only manage focus state when using keyboard
            if (this.mouseIsDown) {
              return;
            }

            var set = this.getSet(element.name);
            var currentFocusedSet = this.focusedSet;
            this.focusedSet = set;

            if (currentFocusedSet != set && set.selected && set.selected != element) {
              // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
              set.selected.focusNative();
            }
          }
        }, {
          key: "getOrdered",
          value: function getOrdered(element) {
            var set = this.getSet(element.name);

            if (!set.ordered) {
              set.ordered = Array.from(set.set);
              set.ordered.sort(function (a, b) {
                return a.compareDocumentPosition(b) == Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
              });
            }

            return set.ordered;
          }
        }, {
          key: "getSet",
          value: function getSet(name) {
            if (!this.sets[name]) {
              this.sets[name] = new SelectionSet();
            }

            return this.sets[name];
          }
        }, {
          key: "register",
          value: function register(element) {
            var set = this.getSet(element.name);
            set.set.add(element);
            set.ordered = null;
          }
        }, {
          key: "unregister",
          value: function unregister(element) {
            var set = this.getSet(element.name);
            set.set.delete(element);
            set.ordered = null;

            if (set.selected == element) {
              set.selected = null;
            }
          }
        }, {
          key: "update",
          value: function update(element) {
            if (this.updating) {
              return;
            }

            this.updating = true;

            if (element.checked) {
              var set = this.getSet(element.name);

              var _iterator = _createForOfIteratorHelper(set.set),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var e = _step.value;
                  e.checked = e == element;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              set.selected = element;
            }

            this.updating = false;
          }
        }], [{
          key: "getController",
          value: function getController(element) {
            var root = element.getRootNode();
            var controller = root[selectionController];

            if (controller === undefined) {
              controller = new SelectionController(root);
              root[selectionController] = controller;
            }

            return controller;
          }
        }]);

        return SelectionController;
      }();

      var _templateObject$f;
      var style$7 = css(_templateObject$f || (_templateObject$f = _taggedTemplateLiteral([".mdc-radio__native-control{top:0;right:0;left:0;width:40px;height:40px}.mdc-radio{display:inline-block;position:relative;flex:0 0 auto;box-sizing:border-box;width:40px;height:40px;padding:10px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary,#018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary,#018786)}.mdc-radio .mdc-radio__background::before{background-color:#018786}@supports not (-ms-ime-align:auto){.mdc-radio .mdc-radio__background::before{background-color:var(--mdc-theme-secondary,#018786)}}.mdc-radio__background{display:inline-block;position:absolute;left:10px;box-sizing:border-box;width:50%;height:50%}.mdc-radio__background::before{position:absolute;top:0;left:0;width:100%;height:100%;transform:scale(0,0);border-radius:50%;opacity:0;pointer-events:none;content:\"\";transition:opacity 120ms 0s cubic-bezier(.4,0,.6,1),transform 120ms 0s cubic-bezier(.4,0,.6,1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0s cubic-bezier(.4,0,.6,1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0,0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0s cubic-bezier(.4,0,.6,1),border-color 120ms 0s cubic-bezier(.4,0,.6,1)}.mdc-radio__native-control{position:absolute;width:100%;height:100%;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:0;margin-bottom:0;margin-right:0;margin-left:0}.mdc-radio--touch .mdc-radio__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0s cubic-bezier(0,0,.2,1),transform 120ms 0s cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0s cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0s cubic-bezier(0,0,.2,1),border-color 120ms 0s cubic-bezier(0,0,.2,1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(.5);transition:transform 120ms 0s cubic-bezier(0,0,.2,1),border-color 120ms 0s cubic-bezier(0,0,.2,1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,.26)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0,0,0,.26)}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(2,2);opacity:.12;transition:opacity 120ms 0s cubic-bezier(0,0,.2,1),transform 120ms 0s cubic-bezier(0,0,.2,1)}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(.4,0,.2,1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-radio{--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:transparent}.mdc-radio .mdc-radio__ripple::after,.mdc-radio .mdc-radio__ripple::before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-radio .mdc-radio__ripple::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before{transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-radio.mdc-ripple-upgraded--unbounded .mdc-radio__ripple::after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-radio.mdc-ripple-upgraded--foreground-activation .mdc-radio__ripple::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}.mdc-radio.mdc-ripple-upgraded--foreground-deactivation .mdc-radio__ripple::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-radio .mdc-radio__ripple::after,.mdc-radio .mdc-radio__ripple::before{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after,.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::before{top:var(--mdc-ripple-top,calc(50% - 50%));left:var(--mdc-ripple-left,calc(50% - 50%));width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-radio.mdc-ripple-upgraded .mdc-radio__ripple::after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-radio .mdc-radio__ripple::after,.mdc-radio .mdc-radio__ripple::before{background-color:#018786}@supports not (-ms-ime-align:auto){.mdc-radio .mdc-radio__ripple::after,.mdc-radio .mdc-radio__ripple::before{background-color:var(--mdc-theme-secondary,#018786)}}.mdc-radio:hover .mdc-radio__ripple::before{opacity:.04}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__ripple::before,.mdc-radio:not(.mdc-ripple-upgraded):focus .mdc-radio__ripple::before{transition-duration:75ms;opacity:.12}.mdc-radio:not(.mdc-ripple-upgraded) .mdc-radio__ripple::after{transition:opacity 150ms linear}.mdc-radio:not(.mdc-ripple-upgraded):active .mdc-radio__ripple::after{transition-duration:75ms;opacity:.12}.mdc-radio.mdc-ripple-upgraded{--mdc-ripple-fg-opacity:0.12}.mdc-radio.mdc-ripple-upgraded--background-focused .mdc-radio__background::before{content:none}.mdc-radio__ripple{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}:host{display:inline-block;outline:0}"])));

      var Radio = /*#__PURE__*/function (_RadioBase) {
        _inherits(Radio, _RadioBase);

        var _super = _createSuper(Radio);

        function Radio() {
          _classCallCheck(this, Radio);

          return _super.apply(this, arguments);
        }

        return Radio;
      }(RadioBase);

      Radio.styles = style$7;
      Radio = __decorate([customElement('mwc-radio')], Radio);

      var _templateObject$g, _templateObject3$4, _templateObject4$1;

      var renderPhoto = function renderPhoto(photo) {
        if (photo) {
          // const {width, height} = getDims(photo);
          // return html`<div style="--ratio: ${width / height}"><img src=${getUrl(photo)} /></div>`;
          // return html`<img src=${getUrl(photo)} />`;
          var url = photo.id === 'TEMP' ? '' : getUrl(photo); // if (photo.id === 'TEMP') {
          //     return html`<div class="box"></div>`;
          // }

          return T(_templateObject$g || (_templateObject$g = _taggedTemplateLiteral(["<img src=\"", "\" style=\"width:200px;height:200px\">"])), url);
        }
      };

      function getPhotos(_x) {
        return _getPhotos.apply(this, arguments);
      } ///


      function _getPhotos() {
        _getPhotos = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(query) {
          var mock,
              _args2 = arguments;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  mock = _args2.length > 1 && _args2[1] !== undefined ? _args2[1] : false;
                  return _context2.abrupt("return", new VirtualArray({
                    pageSize: 5,
                    fetchPage: function () {
                      var _fetchPage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(pageSize, pageNum) {
                        var resp;
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return searchFlickr(query, pageSize, pageNum, mock);

                              case 2:
                                resp = _context.sent;
                                return _context.abrupt("return", {
                                  // items: resp.photo.map(p => Object.assign({}, {width_o: 1920, height_o: 1080}, p)),
                                  items: resp.photo,
                                  totalItems: resp.total
                                });

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee);
                      }));

                      function fetchPage(_x3, _x4) {
                        return _fetchPage.apply(this, arguments);
                      }

                      return fetchPage;
                    }(),
                    placeholder: function placeholder() {
                      // return {"id":"TEMP","height_o":769,"width_o":1024};
                      return {
                        id: "TEMP"
                      };
                    },
                    callback: function callback(items) {
                      setState({
                        items: items
                      });
                    }
                  }));

                case 2:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
        return _getPhotos.apply(this, arguments);
      }


      var state = {
        open: false,
        showRange: false,
        items: [],
        direction: 'vertical',
        idealSize: 300,
        spacing: 8,
        query: 'sunset',
        Layout: Layout1dFlex,
        layout: null,
        first: 0,
        last: 0,
        firstVisible: 0,
        lastVisible: 0
      };

      function setState(changes) {
        var changed;

        for (var prop in changes) {
          if (changes[prop] !== state[prop]) {
            changed = true;
            break;
          }
        }

        if (changed) {
          Object.assign(state, changes);
          V(renderExample(), document.body);
        } // especially hacky


        if (changes.Layout) {
          updateItemSizes(state.items);
        }
      }

      function renderExample() {
        var open = state.open,
            showRange = state.showRange,
            items = state.items,
            direction = state.direction,
            idealSize = state.idealSize,
            spacing = state.spacing,
            query = state.query,
            Layout = state.Layout,
            first = state.first,
            last = state.last,
            firstVisible = state.firstVisible,
            lastVisible = state.lastVisible; // if (!(layout instanceof Layout)) {
        //     layout = (state.layout = new Layout({idealSize, spacing, direction}));
        //     updateItemSizes(items);
        // }
        // else {
        //     Object.assign(layout, {idealSize, spacing, direction, totalItems: items.length});
        // }

        return T(_templateObject3$4 || (_templateObject3$4 = _taggedTemplateLiteral(["<style>body{margin:0;height:100vh}.appLayout{height:100%;display:flex;flex-direction:column}.appBody{flex:1;display:flex}.sheet{width:0;border-right:1px solid #ddd;transition:width .25s ease-out}.controls{display:flex;flex-direction:column;width:256px;transform:translateX(-256px);transition:transform .25s ease-out}.controls>*{display:block;margin:8px}.scroller{height:unset;flex:1}.open .controls{transform:translateX(0)}.open .sheet{width:256px}.scroller>*{transition:all .25s}.box{background:#ddd}.sheet{font-family:Roboto,sans-serif;font-size:.75rem;font-weight:400;color:rgba(0,0,0,.6)}mwc-formfield{display:block}</style><div class=\"appLayout", "\"><mwc-top-app-bar><mwc-icon-button slot=\"navigationIcon\" @click=\"", "\"><svg slot=\"icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"white\"><use xlink:href=\"#settings\"></use></svg></mwc-icon-button><div slot=\"title\">lit-virtualizer grid layouts</div></mwc-top-app-bar><div class=\"appBody\"><div class=\"sheet\"><div class=\"controls\"><mwc-textfield label=\"Ideal Size\" type=\"number\" min=\"50\" max=\"500\" step=\"5\" .value=\"", "\" @input=\"", "\"></mwc-textfield><mwc-textfield label=\"Gap\" type=\"number\" min=\"0\" max=\"100\" step=\"1\" .value=\"", "\" @input=\"", "\"></mwc-textfield><mwc-textfield label=\"Search Query\" .value=\"", "\" @change=\"", "\"></mwc-textfield><fieldset @change=\"", "\"><legend>Direction</legend><mwc-formfield label=\"vertical\"><mwc-radio name=\"direction\" value=\"vertical\" ?checked=\"", "\"></mwc-radio></mwc-formfield><mwc-formfield label=\"horizontal\"><mwc-radio name=\"direction\" value=\"horizontal\" ?checked=\"", "\"></mwc-radio></mwc-formfield></fieldset><fieldset @change=\"", "\"><legend>Layout</legend><mwc-formfield label=\"Square grid\"><mwc-radio name=\"layout\" .value=\"", "\" ?checked=\"", "\"></mwc-radio></mwc-formfield><mwc-formfield label=\"Flex wrap\"><mwc-radio name=\"layout\" .value=\"", "\" ?checked=\"", "\"></mwc-radio></mwc-formfield></fieldset><details ?open=\"", "\" @toggle=\"", "\"><summary>Range</summary>", "</details></div></div><div class=\"scroller\" @rangechange=\"", "\">", "</div></div></div><svg width=\"0\" height=\"0\" class=\"screen-reader\"><defs><path id=\"settings\" d=\"M19.14 12.936c.036-.3.06-.612.06-.936s-.024-.636-.072-.936l2.028-1.584a.496.496 0 0 0 .12-.612l-1.92-3.324c-.12-.216-.372-.288-.588-.216l-2.388.96a7.03 7.03 0 0 0-1.62-.936l-.36-2.544a.48.48 0 0 0-.48-.408h-3.84a.467.467 0 0 0-.468.408l-.36 2.544a7.219 7.219 0 0 0-1.62.936l-2.388-.96a.475.475 0 0 0-.588.216l-1.92 3.324a.465.465 0 0 0 .12.612l2.028 1.584c-.048.3-.084.624-.084.936s.024.636.072.936L2.844 14.52a.496.496 0 0 0-.12.612l1.92 3.324c.12.216.372.288.588.216l2.388-.96a7.03 7.03 0 0 0 1.62.936l.36 2.544c.048.24.24.408.48.408h3.84c.24 0 .444-.168.468-.408l.36-2.544a7.219 7.219 0 0 0 1.62-.936l2.388.96c.216.084.468 0 .588-.216l1.92-3.324a.465.465 0 0 0-.12-.612l-2.004-1.584zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6s-1.62 3.6-3.6 3.6z\"/></defs></svg>"])), open ? ' open' : '', function () {
          return setState({
            open: !open
          });
        }, idealSize, function (e) {
          return setState({
            idealSize: e.target.value
          });
        }, spacing, function (e) {
          return setState({
            spacing: e.target.value
          });
        }, query, function (e) {
          return search(e.target.value);
        }, function (e) {
          return setState({
            direction: e.target.value
          });
        }, direction === 'vertical', direction === 'horizontal', function (e) {
          return setState({
            Layout: e.target.value
          });
        }, Layout1dSquareGrid, Layout === Layout1dSquareGrid, Layout1dFlex, Layout === Layout1dFlex, showRange, function (e) {
          return setState({
            showRange: e.target.open
          });
        }, showRange ? T(_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["<p>Physical: ", " to ", "</p><p>Visible: ", " to ", "</p>"])), first, last, firstVisible, lastVisible) : '', function (e) {
          if (showRange) {
            var _first = e.first,
                _last = e.last,
                _firstVisible = e.firstVisible,
                _lastVisible = e.lastVisible;
            setState({
              first: _first,
              last: _last,
              firstVisible: _firstVisible,
              lastVisible: _lastVisible
            });
          }
        }, scroll({
          items: items,
          renderItem: renderItem,
          layout: {
            type: Layout,
            idealSize: idealSize,
            spacing: spacing,
            direction: direction
          }
        }));
      }

      var offline = false;
      var mock = offline;
      var renderItem =  renderPhoto;

      function itemSizes(items) {
        return items.reduce(function (obj, item, idx) {
          obj[idx] = {
            width: item.width_o,
            height: item.height_o
          };
          return obj;
        }, {});
      }

      function updateItemSizes(items) {
        var layout = document.querySelector('.scroller')[scrollerRef].layout;

        if (layout && typeof layout.updateItemSizes === 'function') {
          layout.updateItemSizes(itemSizes(items));
        }
      }

      function search(_x2) {
        return _search.apply(this, arguments);
      }

      function _search() {
        _search = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(query) {
          var items;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return getPhotos(query, mock);

                case 2:
                  items = _context3.sent;
                  // for (let i = 0; i < items.length; i++) {
                  //     console.log(items[i]);
                  // }
                  setState({
                    items: items
                  }); // updateItemSizes(items);

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3);
        }));
        return _search.apply(this, arguments);
      }

      V(renderExample(), document.body);
      search(state.query); // <!-- ${renderPhotos(items)} -->
      // <!-- ${renderBoxes(items)} -->
      // <!-- ${renderGridStyles()} -->
      // <!-- ${renderFlexWrapStyles()} -->

    }
  };
});
