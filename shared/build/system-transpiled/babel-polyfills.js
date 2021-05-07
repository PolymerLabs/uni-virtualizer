System.register([], function () {
	'use strict';
	return {
		execute: function () {

			var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

			function createCommonjsModule(fn, module) {
				return module = { exports: {} }, fn(module, module.exports), module.exports;
			}

			var check = function (it) {
			  return it && it.Math == Math && it;
			};

			// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
			var global_1 =
			  // eslint-disable-next-line es/no-global-this -- safe
			  check(typeof globalThis == 'object' && globalThis) ||
			  check(typeof window == 'object' && window) ||
			  // eslint-disable-next-line no-restricted-globals -- safe
			  check(typeof self == 'object' && self) ||
			  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
			  // eslint-disable-next-line no-new-func -- fallback
			  (function () { return this; })() || Function('return this')();

			var fails = function (exec) {
			  try {
			    return !!exec();
			  } catch (error) {
			    return true;
			  }
			};

			// Detect IE8's incomplete defineProperty implementation
			var descriptors = !fails(function () {
			  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
			  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
			});

			var $propertyIsEnumerable = {}.propertyIsEnumerable;
			// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
			var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

			// Nashorn ~ JDK8 bug
			var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

			// `Object.prototype.propertyIsEnumerable` method implementation
			// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
			var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
			  var descriptor = getOwnPropertyDescriptor(this, V);
			  return !!descriptor && descriptor.enumerable;
			} : $propertyIsEnumerable;

			var objectPropertyIsEnumerable = {
				f: f
			};

			var createPropertyDescriptor = function (bitmap, value) {
			  return {
			    enumerable: !(bitmap & 1),
			    configurable: !(bitmap & 2),
			    writable: !(bitmap & 4),
			    value: value
			  };
			};

			var toString = {}.toString;

			var classofRaw = function (it) {
			  return toString.call(it).slice(8, -1);
			};

			var split = ''.split;

			// fallback for non-array-like ES3 and non-enumerable old V8 strings
			var indexedObject = fails(function () {
			  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
			  // eslint-disable-next-line no-prototype-builtins -- safe
			  return !Object('z').propertyIsEnumerable(0);
			}) ? function (it) {
			  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
			} : Object;

			// `RequireObjectCoercible` abstract operation
			// https://tc39.es/ecma262/#sec-requireobjectcoercible
			var requireObjectCoercible = function (it) {
			  if (it == undefined) throw TypeError("Can't call method on " + it);
			  return it;
			};

			// toObject with fallback for non-array-like ES3 strings



			var toIndexedObject = function (it) {
			  return indexedObject(requireObjectCoercible(it));
			};

			var isObject = function (it) {
			  return typeof it === 'object' ? it !== null : typeof it === 'function';
			};

			// `ToPrimitive` abstract operation
			// https://tc39.es/ecma262/#sec-toprimitive
			// instead of the ES6 spec version, we didn't implement @@toPrimitive case
			// and the second argument - flag - preferred type is a string
			var toPrimitive = function (input, PREFERRED_STRING) {
			  if (!isObject(input)) return input;
			  var fn, val;
			  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
			  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
			  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
			  throw TypeError("Can't convert object to primitive value");
			};

			// `ToObject` abstract operation
			// https://tc39.es/ecma262/#sec-toobject
			var toObject = function (argument) {
			  return Object(requireObjectCoercible(argument));
			};

			var hasOwnProperty = {}.hasOwnProperty;

			var has = function hasOwn(it, key) {
			  return hasOwnProperty.call(toObject(it), key);
			};

			var document$1 = global_1.document;
			// typeof document.createElement is 'object' in old IE
			var EXISTS = isObject(document$1) && isObject(document$1.createElement);

			var documentCreateElement = function (it) {
			  return EXISTS ? document$1.createElement(it) : {};
			};

			// Thank's IE8 for his funny defineProperty
			var ie8DomDefine = !descriptors && !fails(function () {
			  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
			  return Object.defineProperty(documentCreateElement('div'), 'a', {
			    get: function () { return 7; }
			  }).a != 7;
			});

			// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
			var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

			// `Object.getOwnPropertyDescriptor` method
			// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
			var f$1 = descriptors ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
			  O = toIndexedObject(O);
			  P = toPrimitive(P, true);
			  if (ie8DomDefine) try {
			    return $getOwnPropertyDescriptor(O, P);
			  } catch (error) { /* empty */ }
			  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
			};

			var objectGetOwnPropertyDescriptor = {
				f: f$1
			};

			var anObject = function (it) {
			  if (!isObject(it)) {
			    throw TypeError(String(it) + ' is not an object');
			  } return it;
			};

			// eslint-disable-next-line es/no-object-defineproperty -- safe
			var $defineProperty = Object.defineProperty;

			// `Object.defineProperty` method
			// https://tc39.es/ecma262/#sec-object.defineproperty
			var f$2 = descriptors ? $defineProperty : function defineProperty(O, P, Attributes) {
			  anObject(O);
			  P = toPrimitive(P, true);
			  anObject(Attributes);
			  if (ie8DomDefine) try {
			    return $defineProperty(O, P, Attributes);
			  } catch (error) { /* empty */ }
			  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
			  if ('value' in Attributes) O[P] = Attributes.value;
			  return O;
			};

			var objectDefineProperty = {
				f: f$2
			};

			var createNonEnumerableProperty = descriptors ? function (object, key, value) {
			  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
			} : function (object, key, value) {
			  object[key] = value;
			  return object;
			};

			var setGlobal = function (key, value) {
			  try {
			    createNonEnumerableProperty(global_1, key, value);
			  } catch (error) {
			    global_1[key] = value;
			  } return value;
			};

			var SHARED = '__core-js_shared__';
			var store = global_1[SHARED] || setGlobal(SHARED, {});

			var sharedStore = store;

			var functionToString = Function.toString;

			// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
			if (typeof sharedStore.inspectSource != 'function') {
			  sharedStore.inspectSource = function (it) {
			    return functionToString.call(it);
			  };
			}

			var inspectSource = sharedStore.inspectSource;

			var WeakMap = global_1.WeakMap;

			var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));

			var isPure = false;

			var shared = createCommonjsModule(function (module) {
			(module.exports = function (key, value) {
			  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
			})('versions', []).push({
			  version: '3.12.0',
			  mode:  'global',
			  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
			});
			});

			var id = 0;
			var postfix = Math.random();

			var uid = function (key) {
			  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
			};

			var keys = shared('keys');

			var sharedKey = function (key) {
			  return keys[key] || (keys[key] = uid(key));
			};

			var hiddenKeys = {};

			var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
			var WeakMap$1 = global_1.WeakMap;
			var set, get, has$1;

			var enforce = function (it) {
			  return has$1(it) ? get(it) : set(it, {});
			};

			var getterFor = function (TYPE) {
			  return function (it) {
			    var state;
			    if (!isObject(it) || (state = get(it)).type !== TYPE) {
			      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
			    } return state;
			  };
			};

			if (nativeWeakMap) {
			  var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$1());
			  var wmget = store$1.get;
			  var wmhas = store$1.has;
			  var wmset = store$1.set;
			  set = function (it, metadata) {
			    if (wmhas.call(store$1, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
			    metadata.facade = it;
			    wmset.call(store$1, it, metadata);
			    return metadata;
			  };
			  get = function (it) {
			    return wmget.call(store$1, it) || {};
			  };
			  has$1 = function (it) {
			    return wmhas.call(store$1, it);
			  };
			} else {
			  var STATE = sharedKey('state');
			  hiddenKeys[STATE] = true;
			  set = function (it, metadata) {
			    if (has(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
			    metadata.facade = it;
			    createNonEnumerableProperty(it, STATE, metadata);
			    return metadata;
			  };
			  get = function (it) {
			    return has(it, STATE) ? it[STATE] : {};
			  };
			  has$1 = function (it) {
			    return has(it, STATE);
			  };
			}

			var internalState = {
			  set: set,
			  get: get,
			  has: has$1,
			  enforce: enforce,
			  getterFor: getterFor
			};

			var redefine = createCommonjsModule(function (module) {
			var getInternalState = internalState.get;
			var enforceInternalState = internalState.enforce;
			var TEMPLATE = String(String).split('String');

			(module.exports = function (O, key, value, options) {
			  var unsafe = options ? !!options.unsafe : false;
			  var simple = options ? !!options.enumerable : false;
			  var noTargetGet = options ? !!options.noTargetGet : false;
			  var state;
			  if (typeof value == 'function') {
			    if (typeof key == 'string' && !has(value, 'name')) {
			      createNonEnumerableProperty(value, 'name', key);
			    }
			    state = enforceInternalState(value);
			    if (!state.source) {
			      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
			    }
			  }
			  if (O === global_1) {
			    if (simple) O[key] = value;
			    else setGlobal(key, value);
			    return;
			  } else if (!unsafe) {
			    delete O[key];
			  } else if (!noTargetGet && O[key]) {
			    simple = true;
			  }
			  if (simple) O[key] = value;
			  else createNonEnumerableProperty(O, key, value);
			// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
			})(Function.prototype, 'toString', function toString() {
			  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
			});
			});

			var path = global_1;

			var aFunction = function (variable) {
			  return typeof variable == 'function' ? variable : undefined;
			};

			var getBuiltIn = function (namespace, method) {
			  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
			    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
			};

			var ceil = Math.ceil;
			var floor = Math.floor;

			// `ToInteger` abstract operation
			// https://tc39.es/ecma262/#sec-tointeger
			var toInteger = function (argument) {
			  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
			};

			var min = Math.min;

			// `ToLength` abstract operation
			// https://tc39.es/ecma262/#sec-tolength
			var toLength = function (argument) {
			  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
			};

			var max = Math.max;
			var min$1 = Math.min;

			// Helper for a popular repeating case of the spec:
			// Let integer be ? ToInteger(index).
			// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
			var toAbsoluteIndex = function (index, length) {
			  var integer = toInteger(index);
			  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
			};

			// `Array.prototype.{ indexOf, includes }` methods implementation
			var createMethod = function (IS_INCLUDES) {
			  return function ($this, el, fromIndex) {
			    var O = toIndexedObject($this);
			    var length = toLength(O.length);
			    var index = toAbsoluteIndex(fromIndex, length);
			    var value;
			    // Array#includes uses SameValueZero equality algorithm
			    // eslint-disable-next-line no-self-compare -- NaN check
			    if (IS_INCLUDES && el != el) while (length > index) {
			      value = O[index++];
			      // eslint-disable-next-line no-self-compare -- NaN check
			      if (value != value) return true;
			    // Array#indexOf ignores holes, Array#includes - not
			    } else for (;length > index; index++) {
			      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
			    } return !IS_INCLUDES && -1;
			  };
			};

			var arrayIncludes = {
			  // `Array.prototype.includes` method
			  // https://tc39.es/ecma262/#sec-array.prototype.includes
			  includes: createMethod(true),
			  // `Array.prototype.indexOf` method
			  // https://tc39.es/ecma262/#sec-array.prototype.indexof
			  indexOf: createMethod(false)
			};

			var indexOf = arrayIncludes.indexOf;


			var objectKeysInternal = function (object, names) {
			  var O = toIndexedObject(object);
			  var i = 0;
			  var result = [];
			  var key;
			  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
			  // Don't enum bug & hidden keys
			  while (names.length > i) if (has(O, key = names[i++])) {
			    ~indexOf(result, key) || result.push(key);
			  }
			  return result;
			};

			// IE8- don't enum bug keys
			var enumBugKeys = [
			  'constructor',
			  'hasOwnProperty',
			  'isPrototypeOf',
			  'propertyIsEnumerable',
			  'toLocaleString',
			  'toString',
			  'valueOf'
			];

			var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

			// `Object.getOwnPropertyNames` method
			// https://tc39.es/ecma262/#sec-object.getownpropertynames
			// eslint-disable-next-line es/no-object-getownpropertynames -- safe
			var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
			  return objectKeysInternal(O, hiddenKeys$1);
			};

			var objectGetOwnPropertyNames = {
				f: f$3
			};

			// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
			var f$4 = Object.getOwnPropertySymbols;

			var objectGetOwnPropertySymbols = {
				f: f$4
			};

			// all object keys, includes non-enumerable and symbols
			var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
			  var keys = objectGetOwnPropertyNames.f(anObject(it));
			  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
			  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
			};

			var copyConstructorProperties = function (target, source) {
			  var keys = ownKeys(source);
			  var defineProperty = objectDefineProperty.f;
			  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
			  for (var i = 0; i < keys.length; i++) {
			    var key = keys[i];
			    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
			  }
			};

			var replacement = /#|\.prototype\./;

			var isForced = function (feature, detection) {
			  var value = data[normalize(feature)];
			  return value == POLYFILL ? true
			    : value == NATIVE ? false
			    : typeof detection == 'function' ? fails(detection)
			    : !!detection;
			};

			var normalize = isForced.normalize = function (string) {
			  return String(string).replace(replacement, '.').toLowerCase();
			};

			var data = isForced.data = {};
			var NATIVE = isForced.NATIVE = 'N';
			var POLYFILL = isForced.POLYFILL = 'P';

			var isForced_1 = isForced;

			var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






			/*
			  options.target      - name of the target object
			  options.global      - target is the global object
			  options.stat        - export as static methods of target
			  options.proto       - export as prototype methods of target
			  options.real        - real prototype method for the `pure` version
			  options.forced      - export even if the native feature is available
			  options.bind        - bind methods to the target, required for the `pure` version
			  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
			  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
			  options.sham        - add a flag to not completely full polyfills
			  options.enumerable  - export as enumerable property
			  options.noTargetGet - prevent calling a getter on target
			*/
			var _export = function (options, source) {
			  var TARGET = options.target;
			  var GLOBAL = options.global;
			  var STATIC = options.stat;
			  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
			  if (GLOBAL) {
			    target = global_1;
			  } else if (STATIC) {
			    target = global_1[TARGET] || setGlobal(TARGET, {});
			  } else {
			    target = (global_1[TARGET] || {}).prototype;
			  }
			  if (target) for (key in source) {
			    sourceProperty = source[key];
			    if (options.noTargetGet) {
			      descriptor = getOwnPropertyDescriptor$1(target, key);
			      targetProperty = descriptor && descriptor.value;
			    } else targetProperty = target[key];
			    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
			    // contained in target
			    if (!FORCED && targetProperty !== undefined) {
			      if (typeof sourceProperty === typeof targetProperty) continue;
			      copyConstructorProperties(sourceProperty, targetProperty);
			    }
			    // add a flag to not completely full polyfills
			    if (options.sham || (targetProperty && targetProperty.sham)) {
			      createNonEnumerableProperty(sourceProperty, 'sham', true);
			    }
			    // extend global
			    redefine(target, key, sourceProperty, options);
			  }
			};

			var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

			var process = global_1.process;
			var versions = process && process.versions;
			var v8 = versions && versions.v8;
			var match, version;

			if (v8) {
			  match = v8.split('.');
			  version = match[0] < 4 ? 1 : match[0] + match[1];
			} else if (engineUserAgent) {
			  match = engineUserAgent.match(/Edge\/(\d+)/);
			  if (!match || match[1] >= 74) {
			    match = engineUserAgent.match(/Chrome\/(\d+)/);
			    if (match) version = match[1];
			  }
			}

			var engineV8Version = version && +version;

			/* eslint-disable es/no-symbol -- required for testing */



			// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
			var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
			  return !String(Symbol()) ||
			    // Chrome 38 Symbol has incorrect toString conversion
			    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
			    !Symbol.sham && engineV8Version && engineV8Version < 41;
			});

			/* eslint-disable es/no-symbol -- required for testing */


			var useSymbolAsUid = nativeSymbol
			  && !Symbol.sham
			  && typeof Symbol.iterator == 'symbol';

			// `IsArray` abstract operation
			// https://tc39.es/ecma262/#sec-isarray
			// eslint-disable-next-line es/no-array-isarray -- safe
			var isArray = Array.isArray || function isArray(arg) {
			  return classofRaw(arg) == 'Array';
			};

			// `Object.keys` method
			// https://tc39.es/ecma262/#sec-object.keys
			// eslint-disable-next-line es/no-object-keys -- safe
			var objectKeys = Object.keys || function keys(O) {
			  return objectKeysInternal(O, enumBugKeys);
			};

			// `Object.defineProperties` method
			// https://tc39.es/ecma262/#sec-object.defineproperties
			// eslint-disable-next-line es/no-object-defineproperties -- safe
			var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
			  anObject(O);
			  var keys = objectKeys(Properties);
			  var length = keys.length;
			  var index = 0;
			  var key;
			  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
			  return O;
			};

			var html = getBuiltIn('document', 'documentElement');

			var GT = '>';
			var LT = '<';
			var PROTOTYPE = 'prototype';
			var SCRIPT = 'script';
			var IE_PROTO = sharedKey('IE_PROTO');

			var EmptyConstructor = function () { /* empty */ };

			var scriptTag = function (content) {
			  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
			};

			// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
			var NullProtoObjectViaActiveX = function (activeXDocument) {
			  activeXDocument.write(scriptTag(''));
			  activeXDocument.close();
			  var temp = activeXDocument.parentWindow.Object;
			  activeXDocument = null; // avoid memory leak
			  return temp;
			};

			// Create object with fake `null` prototype: use iframe Object with cleared prototype
			var NullProtoObjectViaIFrame = function () {
			  // Thrash, waste and sodomy: IE GC bug
			  var iframe = documentCreateElement('iframe');
			  var JS = 'java' + SCRIPT + ':';
			  var iframeDocument;
			  iframe.style.display = 'none';
			  html.appendChild(iframe);
			  // https://github.com/zloirock/core-js/issues/475
			  iframe.src = String(JS);
			  iframeDocument = iframe.contentWindow.document;
			  iframeDocument.open();
			  iframeDocument.write(scriptTag('document.F=Object'));
			  iframeDocument.close();
			  return iframeDocument.F;
			};

			// Check for document.domain and active x support
			// No need to use active x approach when document.domain is not set
			// see https://github.com/es-shims/es5-shim/issues/150
			// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
			// avoid IE GC bug
			var activeXDocument;
			var NullProtoObject = function () {
			  try {
			    /* global ActiveXObject -- old IE */
			    activeXDocument = document.domain && new ActiveXObject('htmlfile');
			  } catch (error) { /* ignore */ }
			  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
			  var length = enumBugKeys.length;
			  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
			  return NullProtoObject();
			};

			hiddenKeys[IE_PROTO] = true;

			// `Object.create` method
			// https://tc39.es/ecma262/#sec-object.create
			var objectCreate = Object.create || function create(O, Properties) {
			  var result;
			  if (O !== null) {
			    EmptyConstructor[PROTOTYPE] = anObject(O);
			    result = new EmptyConstructor();
			    EmptyConstructor[PROTOTYPE] = null;
			    // add "__proto__" for Object.getPrototypeOf polyfill
			    result[IE_PROTO] = O;
			  } else result = NullProtoObject();
			  return Properties === undefined ? result : objectDefineProperties(result, Properties);
			};

			/* eslint-disable es/no-object-getownpropertynames -- safe */

			var $getOwnPropertyNames = objectGetOwnPropertyNames.f;

			var toString$1 = {}.toString;

			var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
			  ? Object.getOwnPropertyNames(window) : [];

			var getWindowNames = function (it) {
			  try {
			    return $getOwnPropertyNames(it);
			  } catch (error) {
			    return windowNames.slice();
			  }
			};

			// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
			var f$5 = function getOwnPropertyNames(it) {
			  return windowNames && toString$1.call(it) == '[object Window]'
			    ? getWindowNames(it)
			    : $getOwnPropertyNames(toIndexedObject(it));
			};

			var objectGetOwnPropertyNamesExternal = {
				f: f$5
			};

			var WellKnownSymbolsStore = shared('wks');
			var Symbol$1 = global_1.Symbol;
			var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;

			var wellKnownSymbol = function (name) {
			  if (!has(WellKnownSymbolsStore, name) || !(nativeSymbol || typeof WellKnownSymbolsStore[name] == 'string')) {
			    if (nativeSymbol && has(Symbol$1, name)) {
			      WellKnownSymbolsStore[name] = Symbol$1[name];
			    } else {
			      WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
			    }
			  } return WellKnownSymbolsStore[name];
			};

			var f$6 = wellKnownSymbol;

			var wellKnownSymbolWrapped = {
				f: f$6
			};

			var defineProperty = objectDefineProperty.f;

			var defineWellKnownSymbol = function (NAME) {
			  var Symbol = path.Symbol || (path.Symbol = {});
			  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
			    value: wellKnownSymbolWrapped.f(NAME)
			  });
			};

			var defineProperty$1 = objectDefineProperty.f;



			var TO_STRING_TAG = wellKnownSymbol('toStringTag');

			var setToStringTag = function (it, TAG, STATIC) {
			  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
			    defineProperty$1(it, TO_STRING_TAG, { configurable: true, value: TAG });
			  }
			};

			var aFunction$1 = function (it) {
			  if (typeof it != 'function') {
			    throw TypeError(String(it) + ' is not a function');
			  } return it;
			};

			// optional / simple context binding
			var functionBindContext = function (fn, that, length) {
			  aFunction$1(fn);
			  if (that === undefined) return fn;
			  switch (length) {
			    case 0: return function () {
			      return fn.call(that);
			    };
			    case 1: return function (a) {
			      return fn.call(that, a);
			    };
			    case 2: return function (a, b) {
			      return fn.call(that, a, b);
			    };
			    case 3: return function (a, b, c) {
			      return fn.call(that, a, b, c);
			    };
			  }
			  return function (/* ...args */) {
			    return fn.apply(that, arguments);
			  };
			};

			var SPECIES = wellKnownSymbol('species');

			// `ArraySpeciesCreate` abstract operation
			// https://tc39.es/ecma262/#sec-arrayspeciescreate
			var arraySpeciesCreate = function (originalArray, length) {
			  var C;
			  if (isArray(originalArray)) {
			    C = originalArray.constructor;
			    // cross-realm fallback
			    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
			    else if (isObject(C)) {
			      C = C[SPECIES];
			      if (C === null) C = undefined;
			    }
			  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
			};

			var push = [].push;

			// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
			var createMethod$1 = function (TYPE) {
			  var IS_MAP = TYPE == 1;
			  var IS_FILTER = TYPE == 2;
			  var IS_SOME = TYPE == 3;
			  var IS_EVERY = TYPE == 4;
			  var IS_FIND_INDEX = TYPE == 6;
			  var IS_FILTER_OUT = TYPE == 7;
			  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
			  return function ($this, callbackfn, that, specificCreate) {
			    var O = toObject($this);
			    var self = indexedObject(O);
			    var boundFunction = functionBindContext(callbackfn, that, 3);
			    var length = toLength(self.length);
			    var index = 0;
			    var create = specificCreate || arraySpeciesCreate;
			    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
			    var value, result;
			    for (;length > index; index++) if (NO_HOLES || index in self) {
			      value = self[index];
			      result = boundFunction(value, index, O);
			      if (TYPE) {
			        if (IS_MAP) target[index] = result; // map
			        else if (result) switch (TYPE) {
			          case 3: return true;              // some
			          case 5: return value;             // find
			          case 6: return index;             // findIndex
			          case 2: push.call(target, value); // filter
			        } else switch (TYPE) {
			          case 4: return false;             // every
			          case 7: push.call(target, value); // filterOut
			        }
			      }
			    }
			    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
			  };
			};

			var arrayIteration = {
			  // `Array.prototype.forEach` method
			  // https://tc39.es/ecma262/#sec-array.prototype.foreach
			  forEach: createMethod$1(0),
			  // `Array.prototype.map` method
			  // https://tc39.es/ecma262/#sec-array.prototype.map
			  map: createMethod$1(1),
			  // `Array.prototype.filter` method
			  // https://tc39.es/ecma262/#sec-array.prototype.filter
			  filter: createMethod$1(2),
			  // `Array.prototype.some` method
			  // https://tc39.es/ecma262/#sec-array.prototype.some
			  some: createMethod$1(3),
			  // `Array.prototype.every` method
			  // https://tc39.es/ecma262/#sec-array.prototype.every
			  every: createMethod$1(4),
			  // `Array.prototype.find` method
			  // https://tc39.es/ecma262/#sec-array.prototype.find
			  find: createMethod$1(5),
			  // `Array.prototype.findIndex` method
			  // https://tc39.es/ecma262/#sec-array.prototype.findIndex
			  findIndex: createMethod$1(6),
			  // `Array.prototype.filterOut` method
			  // https://github.com/tc39/proposal-array-filtering
			  filterOut: createMethod$1(7)
			};

			var $forEach = arrayIteration.forEach;

			var HIDDEN = sharedKey('hidden');
			var SYMBOL = 'Symbol';
			var PROTOTYPE$1 = 'prototype';
			var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
			var setInternalState = internalState.set;
			var getInternalState = internalState.getterFor(SYMBOL);
			var ObjectPrototype = Object[PROTOTYPE$1];
			var $Symbol = global_1.Symbol;
			var $stringify = getBuiltIn('JSON', 'stringify');
			var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
			var nativeDefineProperty = objectDefineProperty.f;
			var nativeGetOwnPropertyNames = objectGetOwnPropertyNamesExternal.f;
			var nativePropertyIsEnumerable = objectPropertyIsEnumerable.f;
			var AllSymbols = shared('symbols');
			var ObjectPrototypeSymbols = shared('op-symbols');
			var StringToSymbolRegistry = shared('string-to-symbol-registry');
			var SymbolToStringRegistry = shared('symbol-to-string-registry');
			var WellKnownSymbolsStore$1 = shared('wks');
			var QObject = global_1.QObject;
			// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
			var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

			// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
			var setSymbolDescriptor = descriptors && fails(function () {
			  return objectCreate(nativeDefineProperty({}, 'a', {
			    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
			  })).a != 7;
			}) ? function (O, P, Attributes) {
			  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
			  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
			  nativeDefineProperty(O, P, Attributes);
			  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
			    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
			  }
			} : nativeDefineProperty;

			var wrap = function (tag, description) {
			  var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
			  setInternalState(symbol, {
			    type: SYMBOL,
			    tag: tag,
			    description: description
			  });
			  if (!descriptors) symbol.description = description;
			  return symbol;
			};

			var isSymbol = useSymbolAsUid ? function (it) {
			  return typeof it == 'symbol';
			} : function (it) {
			  return Object(it) instanceof $Symbol;
			};

			var $defineProperty$1 = function defineProperty(O, P, Attributes) {
			  if (O === ObjectPrototype) $defineProperty$1(ObjectPrototypeSymbols, P, Attributes);
			  anObject(O);
			  var key = toPrimitive(P, true);
			  anObject(Attributes);
			  if (has(AllSymbols, key)) {
			    if (!Attributes.enumerable) {
			      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
			      O[HIDDEN][key] = true;
			    } else {
			      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
			      Attributes = objectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
			    } return setSymbolDescriptor(O, key, Attributes);
			  } return nativeDefineProperty(O, key, Attributes);
			};

			var $defineProperties = function defineProperties(O, Properties) {
			  anObject(O);
			  var properties = toIndexedObject(Properties);
			  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
			  $forEach(keys, function (key) {
			    if (!descriptors || $propertyIsEnumerable$1.call(properties, key)) $defineProperty$1(O, key, properties[key]);
			  });
			  return O;
			};

			var $create = function create(O, Properties) {
			  return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
			};

			var $propertyIsEnumerable$1 = function propertyIsEnumerable(V) {
			  var P = toPrimitive(V, true);
			  var enumerable = nativePropertyIsEnumerable.call(this, P);
			  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
			  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
			};

			var $getOwnPropertyDescriptor$1 = function getOwnPropertyDescriptor(O, P) {
			  var it = toIndexedObject(O);
			  var key = toPrimitive(P, true);
			  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
			  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
			  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
			    descriptor.enumerable = true;
			  }
			  return descriptor;
			};

			var $getOwnPropertyNames$1 = function getOwnPropertyNames(O) {
			  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
			  var result = [];
			  $forEach(names, function (key) {
			    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
			  });
			  return result;
			};

			var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
			  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
			  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
			  var result = [];
			  $forEach(names, function (key) {
			    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
			      result.push(AllSymbols[key]);
			    }
			  });
			  return result;
			};

			// `Symbol` constructor
			// https://tc39.es/ecma262/#sec-symbol-constructor
			if (!nativeSymbol) {
			  $Symbol = function Symbol() {
			    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
			    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
			    var tag = uid(description);
			    var setter = function (value) {
			      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
			      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
			      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
			    };
			    if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
			    return wrap(tag, description);
			  };

			  redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
			    return getInternalState(this).tag;
			  });

			  redefine($Symbol, 'withoutSetter', function (description) {
			    return wrap(uid(description), description);
			  });

			  objectPropertyIsEnumerable.f = $propertyIsEnumerable$1;
			  objectDefineProperty.f = $defineProperty$1;
			  objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor$1;
			  objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames$1;
			  objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

			  wellKnownSymbolWrapped.f = function (name) {
			    return wrap(wellKnownSymbol(name), name);
			  };

			  if (descriptors) {
			    // https://github.com/tc39/proposal-Symbol-description
			    nativeDefineProperty($Symbol[PROTOTYPE$1], 'description', {
			      configurable: true,
			      get: function description() {
			        return getInternalState(this).description;
			      }
			    });
			    {
			      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable$1, { unsafe: true });
			    }
			  }
			}

			_export({ global: true, wrap: true, forced: !nativeSymbol, sham: !nativeSymbol }, {
			  Symbol: $Symbol
			});

			$forEach(objectKeys(WellKnownSymbolsStore$1), function (name) {
			  defineWellKnownSymbol(name);
			});

			_export({ target: SYMBOL, stat: true, forced: !nativeSymbol }, {
			  // `Symbol.for` method
			  // https://tc39.es/ecma262/#sec-symbol.for
			  'for': function (key) {
			    var string = String(key);
			    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
			    var symbol = $Symbol(string);
			    StringToSymbolRegistry[string] = symbol;
			    SymbolToStringRegistry[symbol] = string;
			    return symbol;
			  },
			  // `Symbol.keyFor` method
			  // https://tc39.es/ecma262/#sec-symbol.keyfor
			  keyFor: function keyFor(sym) {
			    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
			    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
			  },
			  useSetter: function () { USE_SETTER = true; },
			  useSimple: function () { USE_SETTER = false; }
			});

			_export({ target: 'Object', stat: true, forced: !nativeSymbol, sham: !descriptors }, {
			  // `Object.create` method
			  // https://tc39.es/ecma262/#sec-object.create
			  create: $create,
			  // `Object.defineProperty` method
			  // https://tc39.es/ecma262/#sec-object.defineproperty
			  defineProperty: $defineProperty$1,
			  // `Object.defineProperties` method
			  // https://tc39.es/ecma262/#sec-object.defineproperties
			  defineProperties: $defineProperties,
			  // `Object.getOwnPropertyDescriptor` method
			  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
			  getOwnPropertyDescriptor: $getOwnPropertyDescriptor$1
			});

			_export({ target: 'Object', stat: true, forced: !nativeSymbol }, {
			  // `Object.getOwnPropertyNames` method
			  // https://tc39.es/ecma262/#sec-object.getownpropertynames
			  getOwnPropertyNames: $getOwnPropertyNames$1,
			  // `Object.getOwnPropertySymbols` method
			  // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
			  getOwnPropertySymbols: $getOwnPropertySymbols
			});

			// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
			// https://bugs.chromium.org/p/v8/issues/detail?id=3443
			_export({ target: 'Object', stat: true, forced: fails(function () { objectGetOwnPropertySymbols.f(1); }) }, {
			  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
			    return objectGetOwnPropertySymbols.f(toObject(it));
			  }
			});

			// `JSON.stringify` method behavior with symbols
			// https://tc39.es/ecma262/#sec-json.stringify
			if ($stringify) {
			  var FORCED_JSON_STRINGIFY = !nativeSymbol || fails(function () {
			    var symbol = $Symbol();
			    // MS Edge converts symbol values to JSON as {}
			    return $stringify([symbol]) != '[null]'
			      // WebKit converts symbol values to JSON as null
			      || $stringify({ a: symbol }) != '{}'
			      // V8 throws on boxed symbols
			      || $stringify(Object(symbol)) != '{}';
			  });

			  _export({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
			    // eslint-disable-next-line no-unused-vars -- required for `.length`
			    stringify: function stringify(it, replacer, space) {
			      var args = [it];
			      var index = 1;
			      var $replacer;
			      while (arguments.length > index) args.push(arguments[index++]);
			      $replacer = replacer;
			      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
			      if (!isArray(replacer)) replacer = function (key, value) {
			        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
			        if (!isSymbol(value)) return value;
			      };
			      args[1] = replacer;
			      return $stringify.apply(null, args);
			    }
			  });
			}

			// `Symbol.prototype[@@toPrimitive]` method
			// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
			if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) {
			  createNonEnumerableProperty($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf);
			}
			// `Symbol.prototype[@@toStringTag]` property
			// https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
			setToStringTag($Symbol, SYMBOL);

			hiddenKeys[HIDDEN] = true;

			var defineProperty$2 = objectDefineProperty.f;


			var NativeSymbol = global_1.Symbol;

			if (descriptors && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
			  // Safari 12 bug
			  NativeSymbol().description !== undefined
			)) {
			  var EmptyStringDescriptionStore = {};
			  // wrap Symbol constructor for correct work with undefined description
			  var SymbolWrapper = function Symbol() {
			    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
			    var result = this instanceof SymbolWrapper
			      ? new NativeSymbol(description)
			      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
			      : description === undefined ? NativeSymbol() : NativeSymbol(description);
			    if (description === '') EmptyStringDescriptionStore[result] = true;
			    return result;
			  };
			  copyConstructorProperties(SymbolWrapper, NativeSymbol);
			  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
			  symbolPrototype.constructor = SymbolWrapper;

			  var symbolToString = symbolPrototype.toString;
			  var native = String(NativeSymbol('test')) == 'Symbol(test)';
			  var regexp = /^Symbol\((.*)\)[^)]+$/;
			  defineProperty$2(symbolPrototype, 'description', {
			    configurable: true,
			    get: function description() {
			      var symbol = isObject(this) ? this.valueOf() : this;
			      var string = symbolToString.call(symbol);
			      if (has(EmptyStringDescriptionStore, symbol)) return '';
			      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
			      return desc === '' ? undefined : desc;
			    }
			  });

			  _export({ global: true, forced: true }, {
			    Symbol: SymbolWrapper
			  });
			}

			// `Symbol.asyncIterator` well-known symbol
			// https://tc39.es/ecma262/#sec-symbol.asynciterator
			defineWellKnownSymbol('asyncIterator');

			// `Symbol.hasInstance` well-known symbol
			// https://tc39.es/ecma262/#sec-symbol.hasinstance
			defineWellKnownSymbol('hasInstance');

			// `Symbol.isConcatSpreadable` well-known symbol
			// https://tc39.es/ecma262/#sec-symbol.isconcatspreadable
			defineWellKnownSymbol('isConcatSpreadable');

			// `Symbol.iterator` well-known symbol
			// https://tc39.es/ecma262/#sec-symbol.iterator
			defineWellKnownSymbol('iterator');

			// `Symbol.match` well-known symbol
			// https://tc39.es/ecma262/#sec-symbol.match
			defineWellKnownSymbol('match');

			// `Symbol.matchAll` well-known symbol
			// https://tc39.es/ecma262/#sec-symbol.matchall
			defineWellKnownSymbol('matchAll');

			// `Symbol.replace` well-known symbol
			// https://tc39.es/ecma262/#sec-symbol.replace
			defineWellKnownSymbol('replace');

			// `Symbol.search` well-known symbol
			// https://tc39.es/ecma262/#sec-symbol.search
			defineWellKnownSymbol('search');

			// `Symbol.species` well-known symbol
			// https://tc39.es/ecma262/#sec-symbol.species
			defineWellKnownSymbol('species');

			// `Symbol.split` well-known symbol
			// https://tc39.es/ecma262/#sec-symbol.split
			defineWellKnownSymbol('split');

			// `Symbol.toPrimitive` well-known symbol
			// https://tc39.es/ecma262/#sec-symbol.toprimitive
			defineWellKnownSymbol('toPrimitive');

			// `Symbol.toStringTag` well-known symbol
			// https://tc39.es/ecma262/#sec-symbol.tostringtag
			defineWellKnownSymbol('toStringTag');

			// `Symbol.unscopables` well-known symbol
			// https://tc39.es/ecma262/#sec-symbol.unscopables
			defineWellKnownSymbol('unscopables');

			var correctPrototypeGetter = !fails(function () {
			  function F() { /* empty */ }
			  F.prototype.constructor = null;
			  // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
			  return Object.getPrototypeOf(new F()) !== F.prototype;
			});

			var IE_PROTO$1 = sharedKey('IE_PROTO');
			var ObjectPrototype$1 = Object.prototype;

			// `Object.getPrototypeOf` method
			// https://tc39.es/ecma262/#sec-object.getprototypeof
			// eslint-disable-next-line es/no-object-getprototypeof -- safe
			var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
			  O = toObject(O);
			  if (has(O, IE_PROTO$1)) return O[IE_PROTO$1];
			  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
			    return O.constructor.prototype;
			  } return O instanceof Object ? ObjectPrototype$1 : null;
			};

			var aPossiblePrototype = function (it) {
			  if (!isObject(it) && it !== null) {
			    throw TypeError("Can't set " + String(it) + ' as a prototype');
			  } return it;
			};

			/* eslint-disable no-proto -- safe */



			// `Object.setPrototypeOf` method
			// https://tc39.es/ecma262/#sec-object.setprototypeof
			// Works with __proto__ only. Old v8 can't work with null proto objects.
			// eslint-disable-next-line es/no-object-setprototypeof -- safe
			var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
			  var CORRECT_SETTER = false;
			  var test = {};
			  var setter;
			  try {
			    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
			    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
			    setter.call(test, []);
			    CORRECT_SETTER = test instanceof Array;
			  } catch (error) { /* empty */ }
			  return function setPrototypeOf(O, proto) {
			    anObject(O);
			    aPossiblePrototype(proto);
			    if (CORRECT_SETTER) setter.call(O, proto);
			    else O.__proto__ = proto;
			    return O;
			  };
			}() : undefined);

			var iterators = {};

			var ITERATOR = wellKnownSymbol('iterator');
			var ArrayPrototype = Array.prototype;

			// check on default Array iterator
			var isArrayIteratorMethod = function (it) {
			  return it !== undefined && (iterators.Array === it || ArrayPrototype[ITERATOR] === it);
			};

			var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
			var test = {};

			test[TO_STRING_TAG$1] = 'z';

			var toStringTagSupport = String(test) === '[object z]';

			var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
			// ES3 wrong here
			var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

			// fallback for IE11 Script Access Denied error
			var tryGet = function (it, key) {
			  try {
			    return it[key];
			  } catch (error) { /* empty */ }
			};

			// getting tag from ES6+ `Object.prototype.toString`
			var classof = toStringTagSupport ? classofRaw : function (it) {
			  var O, tag, result;
			  return it === undefined ? 'Undefined' : it === null ? 'Null'
			    // @@toStringTag case
			    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$2)) == 'string' ? tag
			    // builtinTag case
			    : CORRECT_ARGUMENTS ? classofRaw(O)
			    // ES3 arguments fallback
			    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
			};

			var ITERATOR$1 = wellKnownSymbol('iterator');

			var getIteratorMethod = function (it) {
			  if (it != undefined) return it[ITERATOR$1]
			    || it['@@iterator']
			    || iterators[classof(it)];
			};

			var iteratorClose = function (iterator) {
			  var returnMethod = iterator['return'];
			  if (returnMethod !== undefined) {
			    return anObject(returnMethod.call(iterator)).value;
			  }
			};

			var Result = function (stopped, result) {
			  this.stopped = stopped;
			  this.result = result;
			};

			var iterate = function (iterable, unboundFunction, options) {
			  var that = options && options.that;
			  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
			  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
			  var INTERRUPTED = !!(options && options.INTERRUPTED);
			  var fn = functionBindContext(unboundFunction, that, 1 + AS_ENTRIES + INTERRUPTED);
			  var iterator, iterFn, index, length, result, next, step;

			  var stop = function (condition) {
			    if (iterator) iteratorClose(iterator);
			    return new Result(true, condition);
			  };

			  var callFn = function (value) {
			    if (AS_ENTRIES) {
			      anObject(value);
			      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
			    } return INTERRUPTED ? fn(value, stop) : fn(value);
			  };

			  if (IS_ITERATOR) {
			    iterator = iterable;
			  } else {
			    iterFn = getIteratorMethod(iterable);
			    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
			    // optimisation for array iterators
			    if (isArrayIteratorMethod(iterFn)) {
			      for (index = 0, length = toLength(iterable.length); length > index; index++) {
			        result = callFn(iterable[index]);
			        if (result && result instanceof Result) return result;
			      } return new Result(false);
			    }
			    iterator = iterFn.call(iterable);
			  }

			  next = iterator.next;
			  while (!(step = next.call(iterator)).done) {
			    try {
			      result = callFn(step.value);
			    } catch (error) {
			      iteratorClose(iterator);
			      throw error;
			    }
			    if (typeof result == 'object' && result && result instanceof Result) return result;
			  } return new Result(false);
			};

			var $AggregateError = function AggregateError(errors, message) {
			  var that = this;
			  if (!(that instanceof $AggregateError)) return new $AggregateError(errors, message);
			  if (objectSetPrototypeOf) {
			    // eslint-disable-next-line unicorn/error-message -- expected
			    that = objectSetPrototypeOf(new Error(undefined), objectGetPrototypeOf(that));
			  }
			  if (message !== undefined) createNonEnumerableProperty(that, 'message', String(message));
			  var errorsArray = [];
			  iterate(errors, errorsArray.push, { that: errorsArray });
			  createNonEnumerableProperty(that, 'errors', errorsArray);
			  return that;
			};

			$AggregateError.prototype = objectCreate(Error.prototype, {
			  constructor: createPropertyDescriptor(5, $AggregateError),
			  message: createPropertyDescriptor(5, ''),
			  name: createPropertyDescriptor(5, 'AggregateError')
			});

			// `AggregateError` constructor
			// https://tc39.es/ecma262/#sec-aggregate-error-constructor
			_export({ global: true }, {
			  AggregateError: $AggregateError
			});

			var createProperty = function (object, key, value) {
			  var propertyKey = toPrimitive(key);
			  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
			  else object[propertyKey] = value;
			};

			var SPECIES$1 = wellKnownSymbol('species');

			var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
			  // We can't use this feature detection in V8 since it causes
			  // deoptimization and serious performance degradation
			  // https://github.com/zloirock/core-js/issues/677
			  return engineV8Version >= 51 || !fails(function () {
			    var array = [];
			    var constructor = array.constructor = {};
			    constructor[SPECIES$1] = function () {
			      return { foo: 1 };
			    };
			    return array[METHOD_NAME](Boolean).foo !== 1;
			  });
			};

			var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
			var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
			var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

			// We can't use this feature detection in V8 since it causes
			// deoptimization and serious performance degradation
			// https://github.com/zloirock/core-js/issues/679
			var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
			  var array = [];
			  array[IS_CONCAT_SPREADABLE] = false;
			  return array.concat()[0] !== array;
			});

			var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

			var isConcatSpreadable = function (O) {
			  if (!isObject(O)) return false;
			  var spreadable = O[IS_CONCAT_SPREADABLE];
			  return spreadable !== undefined ? !!spreadable : isArray(O);
			};

			var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

			// `Array.prototype.concat` method
			// https://tc39.es/ecma262/#sec-array.prototype.concat
			// with adding support of @@isConcatSpreadable and @@species
			_export({ target: 'Array', proto: true, forced: FORCED }, {
			  // eslint-disable-next-line no-unused-vars -- required for `.length`
			  concat: function concat(arg) {
			    var O = toObject(this);
			    var A = arraySpeciesCreate(O, 0);
			    var n = 0;
			    var i, k, length, len, E;
			    for (i = -1, length = arguments.length; i < length; i++) {
			      E = i === -1 ? O : arguments[i];
			      if (isConcatSpreadable(E)) {
			        len = toLength(E.length);
			        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
			        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
			      } else {
			        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
			        createProperty(A, n++, E);
			      }
			    }
			    A.length = n;
			    return A;
			  }
			});

			var min$2 = Math.min;

			// `Array.prototype.copyWithin` method implementation
			// https://tc39.es/ecma262/#sec-array.prototype.copywithin
			// eslint-disable-next-line es/no-array-prototype-copywithin -- safe
			var arrayCopyWithin = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
			  var O = toObject(this);
			  var len = toLength(O.length);
			  var to = toAbsoluteIndex(target, len);
			  var from = toAbsoluteIndex(start, len);
			  var end = arguments.length > 2 ? arguments[2] : undefined;
			  var count = min$2((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
			  var inc = 1;
			  if (from < to && to < from + count) {
			    inc = -1;
			    from += count - 1;
			    to += count - 1;
			  }
			  while (count-- > 0) {
			    if (from in O) O[to] = O[from];
			    else delete O[to];
			    to += inc;
			    from += inc;
			  } return O;
			};

			var UNSCOPABLES = wellKnownSymbol('unscopables');
			var ArrayPrototype$1 = Array.prototype;

			// Array.prototype[@@unscopables]
			// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
			if (ArrayPrototype$1[UNSCOPABLES] == undefined) {
			  objectDefineProperty.f(ArrayPrototype$1, UNSCOPABLES, {
			    configurable: true,
			    value: objectCreate(null)
			  });
			}

			// add a key to Array.prototype[@@unscopables]
			var addToUnscopables = function (key) {
			  ArrayPrototype$1[UNSCOPABLES][key] = true;
			};

			// `Array.prototype.copyWithin` method
			// https://tc39.es/ecma262/#sec-array.prototype.copywithin
			_export({ target: 'Array', proto: true }, {
			  copyWithin: arrayCopyWithin
			});

			// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
			addToUnscopables('copyWithin');

			var arrayMethodIsStrict = function (METHOD_NAME, argument) {
			  var method = [][METHOD_NAME];
			  return !!method && fails(function () {
			    // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
			    method.call(null, argument || function () { throw 1; }, 1);
			  });
			};

			var $every = arrayIteration.every;


			var STRICT_METHOD = arrayMethodIsStrict('every');

			// `Array.prototype.every` method
			// https://tc39.es/ecma262/#sec-array.prototype.every
			_export({ target: 'Array', proto: true, forced: !STRICT_METHOD }, {
			  every: function every(callbackfn /* , thisArg */) {
			    return $every(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
			  }
			});

			// `Array.prototype.fill` method implementation
			// https://tc39.es/ecma262/#sec-array.prototype.fill
			var arrayFill = function fill(value /* , start = 0, end = @length */) {
			  var O = toObject(this);
			  var length = toLength(O.length);
			  var argumentsLength = arguments.length;
			  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
			  var end = argumentsLength > 2 ? arguments[2] : undefined;
			  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
			  while (endPos > index) O[index++] = value;
			  return O;
			};

			// `Array.prototype.fill` method
			// https://tc39.es/ecma262/#sec-array.prototype.fill
			_export({ target: 'Array', proto: true }, {
			  fill: arrayFill
			});

			// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
			addToUnscopables('fill');

			var $filter = arrayIteration.filter;


			var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

			// `Array.prototype.filter` method
			// https://tc39.es/ecma262/#sec-array.prototype.filter
			// with adding support of @@species
			_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
			  filter: function filter(callbackfn /* , thisArg */) {
			    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
			  }
			});

			var $find = arrayIteration.find;


			var FIND = 'find';
			var SKIPS_HOLES = true;

			// Shouldn't skip holes
			if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

			// `Array.prototype.find` method
			// https://tc39.es/ecma262/#sec-array.prototype.find
			_export({ target: 'Array', proto: true, forced: SKIPS_HOLES }, {
			  find: function find(callbackfn /* , that = undefined */) {
			    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
			  }
			});

			// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
			addToUnscopables(FIND);

			var $findIndex = arrayIteration.findIndex;


			var FIND_INDEX = 'findIndex';
			var SKIPS_HOLES$1 = true;

			// Shouldn't skip holes
			if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES$1 = false; });

			// `Array.prototype.findIndex` method
			// https://tc39.es/ecma262/#sec-array.prototype.findindex
			_export({ target: 'Array', proto: true, forced: SKIPS_HOLES$1 }, {
			  findIndex: function findIndex(callbackfn /* , that = undefined */) {
			    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
			  }
			});

			// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
			addToUnscopables(FIND_INDEX);

			// `FlattenIntoArray` abstract operation
			// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
			var flattenIntoArray = function (target, original, source, sourceLen, start, depth, mapper, thisArg) {
			  var targetIndex = start;
			  var sourceIndex = 0;
			  var mapFn = mapper ? functionBindContext(mapper, thisArg, 3) : false;
			  var element;

			  while (sourceIndex < sourceLen) {
			    if (sourceIndex in source) {
			      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

			      if (depth > 0 && isArray(element)) {
			        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
			      } else {
			        if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError('Exceed the acceptable array length');
			        target[targetIndex] = element;
			      }

			      targetIndex++;
			    }
			    sourceIndex++;
			  }
			  return targetIndex;
			};

			var flattenIntoArray_1 = flattenIntoArray;

			// `Array.prototype.flat` method
			// https://tc39.es/ecma262/#sec-array.prototype.flat
			_export({ target: 'Array', proto: true }, {
			  flat: function flat(/* depthArg = 1 */) {
			    var depthArg = arguments.length ? arguments[0] : undefined;
			    var O = toObject(this);
			    var sourceLen = toLength(O.length);
			    var A = arraySpeciesCreate(O, 0);
			    A.length = flattenIntoArray_1(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toInteger(depthArg));
			    return A;
			  }
			});

			// `Array.prototype.flatMap` method
			// https://tc39.es/ecma262/#sec-array.prototype.flatmap
			_export({ target: 'Array', proto: true }, {
			  flatMap: function flatMap(callbackfn /* , thisArg */) {
			    var O = toObject(this);
			    var sourceLen = toLength(O.length);
			    var A;
			    aFunction$1(callbackfn);
			    A = arraySpeciesCreate(O, 0);
			    A.length = flattenIntoArray_1(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
			    return A;
			  }
			});

			var $forEach$1 = arrayIteration.forEach;


			var STRICT_METHOD$1 = arrayMethodIsStrict('forEach');

			// `Array.prototype.forEach` method implementation
			// https://tc39.es/ecma262/#sec-array.prototype.foreach
			var arrayForEach = !STRICT_METHOD$1 ? function forEach(callbackfn /* , thisArg */) {
			  return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
			// eslint-disable-next-line es/no-array-prototype-foreach -- safe
			} : [].forEach;

			// `Array.prototype.forEach` method
			// https://tc39.es/ecma262/#sec-array.prototype.foreach
			// eslint-disable-next-line es/no-array-prototype-foreach -- safe
			_export({ target: 'Array', proto: true, forced: [].forEach != arrayForEach }, {
			  forEach: arrayForEach
			});

			// call something on iterator step with safe closing on error
			var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
			  try {
			    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
			  // 7.4.6 IteratorClose(iterator, completion)
			  } catch (error) {
			    iteratorClose(iterator);
			    throw error;
			  }
			};

			// `Array.from` method implementation
			// https://tc39.es/ecma262/#sec-array.from
			var arrayFrom = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
			  var O = toObject(arrayLike);
			  var C = typeof this == 'function' ? this : Array;
			  var argumentsLength = arguments.length;
			  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
			  var mapping = mapfn !== undefined;
			  var iteratorMethod = getIteratorMethod(O);
			  var index = 0;
			  var length, result, step, iterator, next, value;
			  if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
			  // if the target is not iterable or it's an array with the default iterator - use a simple case
			  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
			    iterator = iteratorMethod.call(O);
			    next = iterator.next;
			    result = new C();
			    for (;!(step = next.call(iterator)).done; index++) {
			      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
			      createProperty(result, index, value);
			    }
			  } else {
			    length = toLength(O.length);
			    result = new C(length);
			    for (;length > index; index++) {
			      value = mapping ? mapfn(O[index], index) : O[index];
			      createProperty(result, index, value);
			    }
			  }
			  result.length = index;
			  return result;
			};

			var ITERATOR$2 = wellKnownSymbol('iterator');
			var SAFE_CLOSING = false;

			try {
			  var called = 0;
			  var iteratorWithReturn = {
			    next: function () {
			      return { done: !!called++ };
			    },
			    'return': function () {
			      SAFE_CLOSING = true;
			    }
			  };
			  iteratorWithReturn[ITERATOR$2] = function () {
			    return this;
			  };
			  // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
			  Array.from(iteratorWithReturn, function () { throw 2; });
			} catch (error) { /* empty */ }

			var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
			  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
			  var ITERATION_SUPPORT = false;
			  try {
			    var object = {};
			    object[ITERATOR$2] = function () {
			      return {
			        next: function () {
			          return { done: ITERATION_SUPPORT = true };
			        }
			      };
			    };
			    exec(object);
			  } catch (error) { /* empty */ }
			  return ITERATION_SUPPORT;
			};

			var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
			  // eslint-disable-next-line es/no-array-from -- required for testing
			  Array.from(iterable);
			});

			// `Array.from` method
			// https://tc39.es/ecma262/#sec-array.from
			_export({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
			  from: arrayFrom
			});

			var $includes = arrayIncludes.includes;


			// `Array.prototype.includes` method
			// https://tc39.es/ecma262/#sec-array.prototype.includes
			_export({ target: 'Array', proto: true }, {
			  includes: function includes(el /* , fromIndex = 0 */) {
			    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
			  }
			});

			// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
			addToUnscopables('includes');

			/* eslint-disable es/no-array-prototype-indexof -- required for testing */

			var $indexOf = arrayIncludes.indexOf;


			var nativeIndexOf = [].indexOf;

			var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
			var STRICT_METHOD$2 = arrayMethodIsStrict('indexOf');

			// `Array.prototype.indexOf` method
			// https://tc39.es/ecma262/#sec-array.prototype.indexof
			_export({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || !STRICT_METHOD$2 }, {
			  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
			    return NEGATIVE_ZERO
			      // convert -0 to +0
			      ? nativeIndexOf.apply(this, arguments) || 0
			      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
			  }
			});

			// `Array.isArray` method
			// https://tc39.es/ecma262/#sec-array.isarray
			_export({ target: 'Array', stat: true }, {
			  isArray: isArray
			});

			var ITERATOR$3 = wellKnownSymbol('iterator');
			var BUGGY_SAFARI_ITERATORS = false;

			var returnThis = function () { return this; };

			// `%IteratorPrototype%` object
			// https://tc39.es/ecma262/#sec-%iteratorprototype%-object
			var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

			/* eslint-disable es/no-array-prototype-keys -- safe */
			if ([].keys) {
			  arrayIterator = [].keys();
			  // Safari 8 has buggy iterators w/o `next`
			  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
			  else {
			    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
			    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
			  }
			}

			var NEW_ITERATOR_PROTOTYPE = IteratorPrototype == undefined || fails(function () {
			  var test = {};
			  // FF44- legacy iterators case
			  return IteratorPrototype[ITERATOR$3].call(test) !== test;
			});

			if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype = {};

			// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
			if ( !has(IteratorPrototype, ITERATOR$3)) {
			  createNonEnumerableProperty(IteratorPrototype, ITERATOR$3, returnThis);
			}

			var iteratorsCore = {
			  IteratorPrototype: IteratorPrototype,
			  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
			};

			var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





			var returnThis$1 = function () { return this; };

			var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
			  var TO_STRING_TAG = NAME + ' Iterator';
			  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
			  setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
			  iterators[TO_STRING_TAG] = returnThis$1;
			  return IteratorConstructor;
			};

			var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
			var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
			var ITERATOR$4 = wellKnownSymbol('iterator');
			var KEYS = 'keys';
			var VALUES = 'values';
			var ENTRIES = 'entries';

			var returnThis$2 = function () { return this; };

			var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
			  createIteratorConstructor(IteratorConstructor, NAME, next);

			  var getIterationMethod = function (KIND) {
			    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
			    if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
			    switch (KIND) {
			      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
			      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
			      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
			    } return function () { return new IteratorConstructor(this); };
			  };

			  var TO_STRING_TAG = NAME + ' Iterator';
			  var INCORRECT_VALUES_NAME = false;
			  var IterablePrototype = Iterable.prototype;
			  var nativeIterator = IterablePrototype[ITERATOR$4]
			    || IterablePrototype['@@iterator']
			    || DEFAULT && IterablePrototype[DEFAULT];
			  var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
			  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
			  var CurrentIteratorPrototype, methods, KEY;

			  // fix native
			  if (anyNativeIterator) {
			    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
			    if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
			      if ( objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
			        if (objectSetPrototypeOf) {
			          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
			        } else if (typeof CurrentIteratorPrototype[ITERATOR$4] != 'function') {
			          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$4, returnThis$2);
			        }
			      }
			      // Set @@toStringTag to native iterators
			      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
			    }
			  }

			  // fix Array#{values, @@iterator}.name in V8 / FF
			  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
			    INCORRECT_VALUES_NAME = true;
			    defaultIterator = function values() { return nativeIterator.call(this); };
			  }

			  // define iterator
			  if ( IterablePrototype[ITERATOR$4] !== defaultIterator) {
			    createNonEnumerableProperty(IterablePrototype, ITERATOR$4, defaultIterator);
			  }
			  iterators[NAME] = defaultIterator;

			  // export additional methods
			  if (DEFAULT) {
			    methods = {
			      values: getIterationMethod(VALUES),
			      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
			      entries: getIterationMethod(ENTRIES)
			    };
			    if (FORCED) for (KEY in methods) {
			      if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
			        redefine(IterablePrototype, KEY, methods[KEY]);
			      }
			    } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
			  }

			  return methods;
			};

			var ARRAY_ITERATOR = 'Array Iterator';
			var setInternalState$1 = internalState.set;
			var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR);

			// `Array.prototype.entries` method
			// https://tc39.es/ecma262/#sec-array.prototype.entries
			// `Array.prototype.keys` method
			// https://tc39.es/ecma262/#sec-array.prototype.keys
			// `Array.prototype.values` method
			// https://tc39.es/ecma262/#sec-array.prototype.values
			// `Array.prototype[@@iterator]` method
			// https://tc39.es/ecma262/#sec-array.prototype-@@iterator
			// `CreateArrayIterator` internal method
			// https://tc39.es/ecma262/#sec-createarrayiterator
			var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
			  setInternalState$1(this, {
			    type: ARRAY_ITERATOR,
			    target: toIndexedObject(iterated), // target
			    index: 0,                          // next index
			    kind: kind                         // kind
			  });
			// `%ArrayIteratorPrototype%.next` method
			// https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
			}, function () {
			  var state = getInternalState$1(this);
			  var target = state.target;
			  var kind = state.kind;
			  var index = state.index++;
			  if (!target || index >= target.length) {
			    state.target = undefined;
			    return { value: undefined, done: true };
			  }
			  if (kind == 'keys') return { value: index, done: false };
			  if (kind == 'values') return { value: target[index], done: false };
			  return { value: [index, target[index]], done: false };
			}, 'values');

			// argumentsList[@@iterator] is %ArrayProto_values%
			// https://tc39.es/ecma262/#sec-createunmappedargumentsobject
			// https://tc39.es/ecma262/#sec-createmappedargumentsobject
			iterators.Arguments = iterators.Array;

			// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
			addToUnscopables('keys');
			addToUnscopables('values');
			addToUnscopables('entries');

			var nativeJoin = [].join;

			var ES3_STRINGS = indexedObject != Object;
			var STRICT_METHOD$3 = arrayMethodIsStrict('join', ',');

			// `Array.prototype.join` method
			// https://tc39.es/ecma262/#sec-array.prototype.join
			_export({ target: 'Array', proto: true, forced: ES3_STRINGS || !STRICT_METHOD$3 }, {
			  join: function join(separator) {
			    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
			  }
			});

			/* eslint-disable es/no-array-prototype-lastindexof -- safe */





			var min$3 = Math.min;
			var $lastIndexOf = [].lastIndexOf;
			var NEGATIVE_ZERO$1 = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
			var STRICT_METHOD$4 = arrayMethodIsStrict('lastIndexOf');
			var FORCED$1 = NEGATIVE_ZERO$1 || !STRICT_METHOD$4;

			// `Array.prototype.lastIndexOf` method implementation
			// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
			var arrayLastIndexOf = FORCED$1 ? function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
			  // convert -0 to +0
			  if (NEGATIVE_ZERO$1) return $lastIndexOf.apply(this, arguments) || 0;
			  var O = toIndexedObject(this);
			  var length = toLength(O.length);
			  var index = length - 1;
			  if (arguments.length > 1) index = min$3(index, toInteger(arguments[1]));
			  if (index < 0) index = length + index;
			  for (;index >= 0; index--) if (index in O && O[index] === searchElement) return index || 0;
			  return -1;
			} : $lastIndexOf;

			// `Array.prototype.lastIndexOf` method
			// https://tc39.es/ecma262/#sec-array.prototype.lastindexof
			// eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing
			_export({ target: 'Array', proto: true, forced: arrayLastIndexOf !== [].lastIndexOf }, {
			  lastIndexOf: arrayLastIndexOf
			});

			var $map = arrayIteration.map;


			var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('map');

			// `Array.prototype.map` method
			// https://tc39.es/ecma262/#sec-array.prototype.map
			// with adding support of @@species
			_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$1 }, {
			  map: function map(callbackfn /* , thisArg */) {
			    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
			  }
			});

			var ISNT_GENERIC = fails(function () {
			  function F() { /* empty */ }
			  // eslint-disable-next-line es/no-array-of -- required for testing
			  return !(Array.of.call(F) instanceof F);
			});

			// `Array.of` method
			// https://tc39.es/ecma262/#sec-array.of
			// WebKit Array.of isn't generic
			_export({ target: 'Array', stat: true, forced: ISNT_GENERIC }, {
			  of: function of(/* ...args */) {
			    var index = 0;
			    var argumentsLength = arguments.length;
			    var result = new (typeof this == 'function' ? this : Array)(argumentsLength);
			    while (argumentsLength > index) createProperty(result, index, arguments[index++]);
			    result.length = argumentsLength;
			    return result;
			  }
			});

			// `Array.prototype.{ reduce, reduceRight }` methods implementation
			var createMethod$2 = function (IS_RIGHT) {
			  return function (that, callbackfn, argumentsLength, memo) {
			    aFunction$1(callbackfn);
			    var O = toObject(that);
			    var self = indexedObject(O);
			    var length = toLength(O.length);
			    var index = IS_RIGHT ? length - 1 : 0;
			    var i = IS_RIGHT ? -1 : 1;
			    if (argumentsLength < 2) while (true) {
			      if (index in self) {
			        memo = self[index];
			        index += i;
			        break;
			      }
			      index += i;
			      if (IS_RIGHT ? index < 0 : length <= index) {
			        throw TypeError('Reduce of empty array with no initial value');
			      }
			    }
			    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
			      memo = callbackfn(memo, self[index], index, O);
			    }
			    return memo;
			  };
			};

			var arrayReduce = {
			  // `Array.prototype.reduce` method
			  // https://tc39.es/ecma262/#sec-array.prototype.reduce
			  left: createMethod$2(false),
			  // `Array.prototype.reduceRight` method
			  // https://tc39.es/ecma262/#sec-array.prototype.reduceright
			  right: createMethod$2(true)
			};

			var engineIsNode = classofRaw(global_1.process) == 'process';

			var $reduce = arrayReduce.left;




			var STRICT_METHOD$5 = arrayMethodIsStrict('reduce');
			// Chrome 80-82 has a critical bug
			// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
			var CHROME_BUG = !engineIsNode && engineV8Version > 79 && engineV8Version < 83;

			// `Array.prototype.reduce` method
			// https://tc39.es/ecma262/#sec-array.prototype.reduce
			_export({ target: 'Array', proto: true, forced: !STRICT_METHOD$5 || CHROME_BUG }, {
			  reduce: function reduce(callbackfn /* , initialValue */) {
			    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
			  }
			});

			var $reduceRight = arrayReduce.right;




			var STRICT_METHOD$6 = arrayMethodIsStrict('reduceRight');
			// Chrome 80-82 has a critical bug
			// https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
			var CHROME_BUG$1 = !engineIsNode && engineV8Version > 79 && engineV8Version < 83;

			// `Array.prototype.reduceRight` method
			// https://tc39.es/ecma262/#sec-array.prototype.reduceright
			_export({ target: 'Array', proto: true, forced: !STRICT_METHOD$6 || CHROME_BUG$1 }, {
			  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
			    return $reduceRight(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
			  }
			});

			var nativeReverse = [].reverse;
			var test$1 = [1, 2];

			// `Array.prototype.reverse` method
			// https://tc39.es/ecma262/#sec-array.prototype.reverse
			// fix for Safari 12.0 bug
			// https://bugs.webkit.org/show_bug.cgi?id=188794
			_export({ target: 'Array', proto: true, forced: String(test$1) === String(test$1.reverse()) }, {
			  reverse: function reverse() {
			    // eslint-disable-next-line no-self-assign -- dirty hack
			    if (isArray(this)) this.length = this.length;
			    return nativeReverse.call(this);
			  }
			});

			var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('slice');

			var SPECIES$2 = wellKnownSymbol('species');
			var nativeSlice = [].slice;
			var max$1 = Math.max;

			// `Array.prototype.slice` method
			// https://tc39.es/ecma262/#sec-array.prototype.slice
			// fallback for not array-like ES3 strings and DOM objects
			_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$2 }, {
			  slice: function slice(start, end) {
			    var O = toIndexedObject(this);
			    var length = toLength(O.length);
			    var k = toAbsoluteIndex(start, length);
			    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
			    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
			    var Constructor, result, n;
			    if (isArray(O)) {
			      Constructor = O.constructor;
			      // cross-realm fallback
			      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
			        Constructor = undefined;
			      } else if (isObject(Constructor)) {
			        Constructor = Constructor[SPECIES$2];
			        if (Constructor === null) Constructor = undefined;
			      }
			      if (Constructor === Array || Constructor === undefined) {
			        return nativeSlice.call(O, k, fin);
			      }
			    }
			    result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));
			    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
			    result.length = n;
			    return result;
			  }
			});

			var $some = arrayIteration.some;


			var STRICT_METHOD$7 = arrayMethodIsStrict('some');

			// `Array.prototype.some` method
			// https://tc39.es/ecma262/#sec-array.prototype.some
			_export({ target: 'Array', proto: true, forced: !STRICT_METHOD$7 }, {
			  some: function some(callbackfn /* , thisArg */) {
			    return $some(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
			  }
			});

			var test$2 = [];
			var nativeSort = test$2.sort;

			// IE8-
			var FAILS_ON_UNDEFINED = fails(function () {
			  test$2.sort(undefined);
			});
			// V8 bug
			var FAILS_ON_NULL = fails(function () {
			  test$2.sort(null);
			});
			// Old WebKit
			var STRICT_METHOD$8 = arrayMethodIsStrict('sort');

			var FORCED$2 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$8;

			// `Array.prototype.sort` method
			// https://tc39.es/ecma262/#sec-array.prototype.sort
			_export({ target: 'Array', proto: true, forced: FORCED$2 }, {
			  sort: function sort(comparefn) {
			    return comparefn === undefined
			      ? nativeSort.call(toObject(this))
			      : nativeSort.call(toObject(this), aFunction$1(comparefn));
			  }
			});

			var SPECIES$3 = wellKnownSymbol('species');

			var setSpecies = function (CONSTRUCTOR_NAME) {
			  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
			  var defineProperty = objectDefineProperty.f;

			  if (descriptors && Constructor && !Constructor[SPECIES$3]) {
			    defineProperty(Constructor, SPECIES$3, {
			      configurable: true,
			      get: function () { return this; }
			    });
			  }
			};

			// `Array[@@species]` getter
			// https://tc39.es/ecma262/#sec-get-array-@@species
			setSpecies('Array');

			var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport('splice');

			var max$2 = Math.max;
			var min$4 = Math.min;
			var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
			var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

			// `Array.prototype.splice` method
			// https://tc39.es/ecma262/#sec-array.prototype.splice
			// with adding support of @@species
			_export({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT$3 }, {
			  splice: function splice(start, deleteCount /* , ...items */) {
			    var O = toObject(this);
			    var len = toLength(O.length);
			    var actualStart = toAbsoluteIndex(start, len);
			    var argumentsLength = arguments.length;
			    var insertCount, actualDeleteCount, A, k, from, to;
			    if (argumentsLength === 0) {
			      insertCount = actualDeleteCount = 0;
			    } else if (argumentsLength === 1) {
			      insertCount = 0;
			      actualDeleteCount = len - actualStart;
			    } else {
			      insertCount = argumentsLength - 2;
			      actualDeleteCount = min$4(max$2(toInteger(deleteCount), 0), len - actualStart);
			    }
			    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER$1) {
			      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
			    }
			    A = arraySpeciesCreate(O, actualDeleteCount);
			    for (k = 0; k < actualDeleteCount; k++) {
			      from = actualStart + k;
			      if (from in O) createProperty(A, k, O[from]);
			    }
			    A.length = actualDeleteCount;
			    if (insertCount < actualDeleteCount) {
			      for (k = actualStart; k < len - actualDeleteCount; k++) {
			        from = k + actualDeleteCount;
			        to = k + insertCount;
			        if (from in O) O[to] = O[from];
			        else delete O[to];
			      }
			      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
			    } else if (insertCount > actualDeleteCount) {
			      for (k = len - actualDeleteCount; k > actualStart; k--) {
			        from = k + actualDeleteCount - 1;
			        to = k + insertCount - 1;
			        if (from in O) O[to] = O[from];
			        else delete O[to];
			      }
			    }
			    for (k = 0; k < insertCount; k++) {
			      O[k + actualStart] = arguments[k + 2];
			    }
			    O.length = len - actualDeleteCount + insertCount;
			    return A;
			  }
			});

			// this method was added to unscopables after implementation
			// in popular engines, so it's moved to a separate module


			// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
			addToUnscopables('flat');

			// this method was added to unscopables after implementation
			// in popular engines, so it's moved to a separate module


			// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
			addToUnscopables('flatMap');

			// eslint-disable-next-line es/no-typed-arrays -- safe
			var arrayBufferNative = typeof ArrayBuffer !== 'undefined' && typeof DataView !== 'undefined';

			var redefineAll = function (target, src, options) {
			  for (var key in src) redefine(target, key, src[key], options);
			  return target;
			};

			var anInstance = function (it, Constructor, name) {
			  if (!(it instanceof Constructor)) {
			    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
			  } return it;
			};

			// `ToIndex` abstract operation
			// https://tc39.es/ecma262/#sec-toindex
			var toIndex = function (it) {
			  if (it === undefined) return 0;
			  var number = toInteger(it);
			  var length = toLength(number);
			  if (number !== length) throw RangeError('Wrong length or index');
			  return length;
			};

			// IEEE754 conversions based on https://github.com/feross/ieee754
			var abs = Math.abs;
			var pow = Math.pow;
			var floor$1 = Math.floor;
			var log = Math.log;
			var LN2 = Math.LN2;

			var pack = function (number, mantissaLength, bytes) {
			  var buffer = new Array(bytes);
			  var exponentLength = bytes * 8 - mantissaLength - 1;
			  var eMax = (1 << exponentLength) - 1;
			  var eBias = eMax >> 1;
			  var rt = mantissaLength === 23 ? pow(2, -24) - pow(2, -77) : 0;
			  var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
			  var index = 0;
			  var exponent, mantissa, c;
			  number = abs(number);
			  // eslint-disable-next-line no-self-compare -- NaN check
			  if (number != number || number === Infinity) {
			    // eslint-disable-next-line no-self-compare -- NaN check
			    mantissa = number != number ? 1 : 0;
			    exponent = eMax;
			  } else {
			    exponent = floor$1(log(number) / LN2);
			    if (number * (c = pow(2, -exponent)) < 1) {
			      exponent--;
			      c *= 2;
			    }
			    if (exponent + eBias >= 1) {
			      number += rt / c;
			    } else {
			      number += rt * pow(2, 1 - eBias);
			    }
			    if (number * c >= 2) {
			      exponent++;
			      c /= 2;
			    }
			    if (exponent + eBias >= eMax) {
			      mantissa = 0;
			      exponent = eMax;
			    } else if (exponent + eBias >= 1) {
			      mantissa = (number * c - 1) * pow(2, mantissaLength);
			      exponent = exponent + eBias;
			    } else {
			      mantissa = number * pow(2, eBias - 1) * pow(2, mantissaLength);
			      exponent = 0;
			    }
			  }
			  for (; mantissaLength >= 8; buffer[index++] = mantissa & 255, mantissa /= 256, mantissaLength -= 8);
			  exponent = exponent << mantissaLength | mantissa;
			  exponentLength += mantissaLength;
			  for (; exponentLength > 0; buffer[index++] = exponent & 255, exponent /= 256, exponentLength -= 8);
			  buffer[--index] |= sign * 128;
			  return buffer;
			};

			var unpack = function (buffer, mantissaLength) {
			  var bytes = buffer.length;
			  var exponentLength = bytes * 8 - mantissaLength - 1;
			  var eMax = (1 << exponentLength) - 1;
			  var eBias = eMax >> 1;
			  var nBits = exponentLength - 7;
			  var index = bytes - 1;
			  var sign = buffer[index--];
			  var exponent = sign & 127;
			  var mantissa;
			  sign >>= 7;
			  for (; nBits > 0; exponent = exponent * 256 + buffer[index], index--, nBits -= 8);
			  mantissa = exponent & (1 << -nBits) - 1;
			  exponent >>= -nBits;
			  nBits += mantissaLength;
			  for (; nBits > 0; mantissa = mantissa * 256 + buffer[index], index--, nBits -= 8);
			  if (exponent === 0) {
			    exponent = 1 - eBias;
			  } else if (exponent === eMax) {
			    return mantissa ? NaN : sign ? -Infinity : Infinity;
			  } else {
			    mantissa = mantissa + pow(2, mantissaLength);
			    exponent = exponent - eBias;
			  } return (sign ? -1 : 1) * mantissa * pow(2, exponent - mantissaLength);
			};

			var ieee754 = {
			  pack: pack,
			  unpack: unpack
			};

			var getOwnPropertyNames = objectGetOwnPropertyNames.f;
			var defineProperty$3 = objectDefineProperty.f;




			var getInternalState$2 = internalState.get;
			var setInternalState$2 = internalState.set;
			var ARRAY_BUFFER = 'ArrayBuffer';
			var DATA_VIEW = 'DataView';
			var PROTOTYPE$2 = 'prototype';
			var WRONG_LENGTH = 'Wrong length';
			var WRONG_INDEX = 'Wrong index';
			var NativeArrayBuffer = global_1[ARRAY_BUFFER];
			var $ArrayBuffer = NativeArrayBuffer;
			var $DataView = global_1[DATA_VIEW];
			var $DataViewPrototype = $DataView && $DataView[PROTOTYPE$2];
			var ObjectPrototype$2 = Object.prototype;
			var RangeError$1 = global_1.RangeError;

			var packIEEE754 = ieee754.pack;
			var unpackIEEE754 = ieee754.unpack;

			var packInt8 = function (number) {
			  return [number & 0xFF];
			};

			var packInt16 = function (number) {
			  return [number & 0xFF, number >> 8 & 0xFF];
			};

			var packInt32 = function (number) {
			  return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
			};

			var unpackInt32 = function (buffer) {
			  return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
			};

			var packFloat32 = function (number) {
			  return packIEEE754(number, 23, 4);
			};

			var packFloat64 = function (number) {
			  return packIEEE754(number, 52, 8);
			};

			var addGetter = function (Constructor, key) {
			  defineProperty$3(Constructor[PROTOTYPE$2], key, { get: function () { return getInternalState$2(this)[key]; } });
			};

			var get$1 = function (view, count, index, isLittleEndian) {
			  var intIndex = toIndex(index);
			  var store = getInternalState$2(view);
			  if (intIndex + count > store.byteLength) throw RangeError$1(WRONG_INDEX);
			  var bytes = getInternalState$2(store.buffer).bytes;
			  var start = intIndex + store.byteOffset;
			  var pack = bytes.slice(start, start + count);
			  return isLittleEndian ? pack : pack.reverse();
			};

			var set$1 = function (view, count, index, conversion, value, isLittleEndian) {
			  var intIndex = toIndex(index);
			  var store = getInternalState$2(view);
			  if (intIndex + count > store.byteLength) throw RangeError$1(WRONG_INDEX);
			  var bytes = getInternalState$2(store.buffer).bytes;
			  var start = intIndex + store.byteOffset;
			  var pack = conversion(+value);
			  for (var i = 0; i < count; i++) bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
			};

			if (!arrayBufferNative) {
			  $ArrayBuffer = function ArrayBuffer(length) {
			    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
			    var byteLength = toIndex(length);
			    setInternalState$2(this, {
			      bytes: arrayFill.call(new Array(byteLength), 0),
			      byteLength: byteLength
			    });
			    if (!descriptors) this.byteLength = byteLength;
			  };

			  $DataView = function DataView(buffer, byteOffset, byteLength) {
			    anInstance(this, $DataView, DATA_VIEW);
			    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
			    var bufferLength = getInternalState$2(buffer).byteLength;
			    var offset = toInteger(byteOffset);
			    if (offset < 0 || offset > bufferLength) throw RangeError$1('Wrong offset');
			    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
			    if (offset + byteLength > bufferLength) throw RangeError$1(WRONG_LENGTH);
			    setInternalState$2(this, {
			      buffer: buffer,
			      byteLength: byteLength,
			      byteOffset: offset
			    });
			    if (!descriptors) {
			      this.buffer = buffer;
			      this.byteLength = byteLength;
			      this.byteOffset = offset;
			    }
			  };

			  if (descriptors) {
			    addGetter($ArrayBuffer, 'byteLength');
			    addGetter($DataView, 'buffer');
			    addGetter($DataView, 'byteLength');
			    addGetter($DataView, 'byteOffset');
			  }

			  redefineAll($DataView[PROTOTYPE$2], {
			    getInt8: function getInt8(byteOffset) {
			      return get$1(this, 1, byteOffset)[0] << 24 >> 24;
			    },
			    getUint8: function getUint8(byteOffset) {
			      return get$1(this, 1, byteOffset)[0];
			    },
			    getInt16: function getInt16(byteOffset /* , littleEndian */) {
			      var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
			      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
			    },
			    getUint16: function getUint16(byteOffset /* , littleEndian */) {
			      var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
			      return bytes[1] << 8 | bytes[0];
			    },
			    getInt32: function getInt32(byteOffset /* , littleEndian */) {
			      return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
			    },
			    getUint32: function getUint32(byteOffset /* , littleEndian */) {
			      return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
			    },
			    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
			      return unpackIEEE754(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
			    },
			    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
			      return unpackIEEE754(get$1(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
			    },
			    setInt8: function setInt8(byteOffset, value) {
			      set$1(this, 1, byteOffset, packInt8, value);
			    },
			    setUint8: function setUint8(byteOffset, value) {
			      set$1(this, 1, byteOffset, packInt8, value);
			    },
			    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
			      set$1(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
			    },
			    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
			      set$1(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
			    },
			    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
			      set$1(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
			    },
			    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
			      set$1(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
			    },
			    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
			      set$1(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
			    },
			    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
			      set$1(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
			    }
			  });
			} else {
			  /* eslint-disable no-new -- required for testing */
			  if (!fails(function () {
			    NativeArrayBuffer(1);
			  }) || !fails(function () {
			    new NativeArrayBuffer(-1);
			  }) || fails(function () {
			    new NativeArrayBuffer();
			    new NativeArrayBuffer(1.5);
			    new NativeArrayBuffer(NaN);
			    return NativeArrayBuffer.name != ARRAY_BUFFER;
			  })) {
			  /* eslint-enable no-new -- required for testing */
			    $ArrayBuffer = function ArrayBuffer(length) {
			      anInstance(this, $ArrayBuffer);
			      return new NativeArrayBuffer(toIndex(length));
			    };
			    var ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE$2] = NativeArrayBuffer[PROTOTYPE$2];
			    for (var keys$1 = getOwnPropertyNames(NativeArrayBuffer), j = 0, key; keys$1.length > j;) {
			      if (!((key = keys$1[j++]) in $ArrayBuffer)) {
			        createNonEnumerableProperty($ArrayBuffer, key, NativeArrayBuffer[key]);
			      }
			    }
			    ArrayBufferPrototype.constructor = $ArrayBuffer;
			  }

			  // WebKit bug - the same parent prototype for typed arrays and data view
			  if (objectSetPrototypeOf && objectGetPrototypeOf($DataViewPrototype) !== ObjectPrototype$2) {
			    objectSetPrototypeOf($DataViewPrototype, ObjectPrototype$2);
			  }

			  // iOS Safari 7.x bug
			  var testView = new $DataView(new $ArrayBuffer(2));
			  var $setInt8 = $DataViewPrototype.setInt8;
			  testView.setInt8(0, 2147483648);
			  testView.setInt8(1, 2147483649);
			  if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll($DataViewPrototype, {
			    setInt8: function setInt8(byteOffset, value) {
			      $setInt8.call(this, byteOffset, value << 24 >> 24);
			    },
			    setUint8: function setUint8(byteOffset, value) {
			      $setInt8.call(this, byteOffset, value << 24 >> 24);
			    }
			  }, { unsafe: true });
			}

			setToStringTag($ArrayBuffer, ARRAY_BUFFER);
			setToStringTag($DataView, DATA_VIEW);

			var arrayBuffer = {
			  ArrayBuffer: $ArrayBuffer,
			  DataView: $DataView
			};

			var ARRAY_BUFFER$1 = 'ArrayBuffer';
			var ArrayBuffer$1 = arrayBuffer[ARRAY_BUFFER$1];
			var NativeArrayBuffer$1 = global_1[ARRAY_BUFFER$1];

			// `ArrayBuffer` constructor
			// https://tc39.es/ecma262/#sec-arraybuffer-constructor
			_export({ global: true, forced: NativeArrayBuffer$1 !== ArrayBuffer$1 }, {
			  ArrayBuffer: ArrayBuffer$1
			});

			setSpecies(ARRAY_BUFFER$1);

			var defineProperty$4 = objectDefineProperty.f;





			var Int8Array$1 = global_1.Int8Array;
			var Int8ArrayPrototype = Int8Array$1 && Int8Array$1.prototype;
			var Uint8ClampedArray = global_1.Uint8ClampedArray;
			var Uint8ClampedArrayPrototype = Uint8ClampedArray && Uint8ClampedArray.prototype;
			var TypedArray = Int8Array$1 && objectGetPrototypeOf(Int8Array$1);
			var TypedArrayPrototype = Int8ArrayPrototype && objectGetPrototypeOf(Int8ArrayPrototype);
			var ObjectPrototype$3 = Object.prototype;
			var isPrototypeOf = ObjectPrototype$3.isPrototypeOf;

			var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
			var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
			// Fixing native typed arrays in Opera Presto crashes the browser, see #595
			var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferNative && !!objectSetPrototypeOf && classof(global_1.opera) !== 'Opera';
			var TYPED_ARRAY_TAG_REQIRED = false;
			var NAME;

			var TypedArrayConstructorsList = {
			  Int8Array: 1,
			  Uint8Array: 1,
			  Uint8ClampedArray: 1,
			  Int16Array: 2,
			  Uint16Array: 2,
			  Int32Array: 4,
			  Uint32Array: 4,
			  Float32Array: 4,
			  Float64Array: 8
			};

			var BigIntArrayConstructorsList = {
			  BigInt64Array: 8,
			  BigUint64Array: 8
			};

			var isView = function isView(it) {
			  if (!isObject(it)) return false;
			  var klass = classof(it);
			  return klass === 'DataView'
			    || has(TypedArrayConstructorsList, klass)
			    || has(BigIntArrayConstructorsList, klass);
			};

			var isTypedArray = function (it) {
			  if (!isObject(it)) return false;
			  var klass = classof(it);
			  return has(TypedArrayConstructorsList, klass)
			    || has(BigIntArrayConstructorsList, klass);
			};

			var aTypedArray = function (it) {
			  if (isTypedArray(it)) return it;
			  throw TypeError('Target is not a typed array');
			};

			var aTypedArrayConstructor = function (C) {
			  if (objectSetPrototypeOf) {
			    if (isPrototypeOf.call(TypedArray, C)) return C;
			  } else for (var ARRAY in TypedArrayConstructorsList) if (has(TypedArrayConstructorsList, NAME)) {
			    var TypedArrayConstructor = global_1[ARRAY];
			    if (TypedArrayConstructor && (C === TypedArrayConstructor || isPrototypeOf.call(TypedArrayConstructor, C))) {
			      return C;
			    }
			  } throw TypeError('Target is not a typed array constructor');
			};

			var exportTypedArrayMethod = function (KEY, property, forced) {
			  if (!descriptors) return;
			  if (forced) for (var ARRAY in TypedArrayConstructorsList) {
			    var TypedArrayConstructor = global_1[ARRAY];
			    if (TypedArrayConstructor && has(TypedArrayConstructor.prototype, KEY)) try {
			      delete TypedArrayConstructor.prototype[KEY];
			    } catch (error) { /* empty */ }
			  }
			  if (!TypedArrayPrototype[KEY] || forced) {
			    redefine(TypedArrayPrototype, KEY, forced ? property
			      : NATIVE_ARRAY_BUFFER_VIEWS && Int8ArrayPrototype[KEY] || property);
			  }
			};

			var exportTypedArrayStaticMethod = function (KEY, property, forced) {
			  var ARRAY, TypedArrayConstructor;
			  if (!descriptors) return;
			  if (objectSetPrototypeOf) {
			    if (forced) for (ARRAY in TypedArrayConstructorsList) {
			      TypedArrayConstructor = global_1[ARRAY];
			      if (TypedArrayConstructor && has(TypedArrayConstructor, KEY)) try {
			        delete TypedArrayConstructor[KEY];
			      } catch (error) { /* empty */ }
			    }
			    if (!TypedArray[KEY] || forced) {
			      // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
			      try {
			        return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS && TypedArray[KEY] || property);
			      } catch (error) { /* empty */ }
			    } else return;
			  }
			  for (ARRAY in TypedArrayConstructorsList) {
			    TypedArrayConstructor = global_1[ARRAY];
			    if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
			      redefine(TypedArrayConstructor, KEY, property);
			    }
			  }
			};

			for (NAME in TypedArrayConstructorsList) {
			  if (!global_1[NAME]) NATIVE_ARRAY_BUFFER_VIEWS = false;
			}

			// WebKit bug - typed arrays constructors prototype is Object.prototype
			if (!NATIVE_ARRAY_BUFFER_VIEWS || typeof TypedArray != 'function' || TypedArray === Function.prototype) {
			  // eslint-disable-next-line no-shadow -- safe
			  TypedArray = function TypedArray() {
			    throw TypeError('Incorrect invocation');
			  };
			  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
			    if (global_1[NAME]) objectSetPrototypeOf(global_1[NAME], TypedArray);
			  }
			}

			if (!NATIVE_ARRAY_BUFFER_VIEWS || !TypedArrayPrototype || TypedArrayPrototype === ObjectPrototype$3) {
			  TypedArrayPrototype = TypedArray.prototype;
			  if (NATIVE_ARRAY_BUFFER_VIEWS) for (NAME in TypedArrayConstructorsList) {
			    if (global_1[NAME]) objectSetPrototypeOf(global_1[NAME].prototype, TypedArrayPrototype);
			  }
			}

			// WebKit bug - one more object in Uint8ClampedArray prototype chain
			if (NATIVE_ARRAY_BUFFER_VIEWS && objectGetPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype) {
			  objectSetPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype);
			}

			if (descriptors && !has(TypedArrayPrototype, TO_STRING_TAG$3)) {
			  TYPED_ARRAY_TAG_REQIRED = true;
			  defineProperty$4(TypedArrayPrototype, TO_STRING_TAG$3, { get: function () {
			    return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
			  } });
			  for (NAME in TypedArrayConstructorsList) if (global_1[NAME]) {
			    createNonEnumerableProperty(global_1[NAME], TYPED_ARRAY_TAG, NAME);
			  }
			}

			var arrayBufferViewCore = {
			  NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS,
			  TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQIRED && TYPED_ARRAY_TAG,
			  aTypedArray: aTypedArray,
			  aTypedArrayConstructor: aTypedArrayConstructor,
			  exportTypedArrayMethod: exportTypedArrayMethod,
			  exportTypedArrayStaticMethod: exportTypedArrayStaticMethod,
			  isView: isView,
			  isTypedArray: isTypedArray,
			  TypedArray: TypedArray,
			  TypedArrayPrototype: TypedArrayPrototype
			};

			var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

			// `ArrayBuffer.isView` method
			// https://tc39.es/ecma262/#sec-arraybuffer.isview
			_export({ target: 'ArrayBuffer', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS$1 }, {
			  isView: arrayBufferViewCore.isView
			});

			var SPECIES$4 = wellKnownSymbol('species');

			// `SpeciesConstructor` abstract operation
			// https://tc39.es/ecma262/#sec-speciesconstructor
			var speciesConstructor = function (O, defaultConstructor) {
			  var C = anObject(O).constructor;
			  var S;
			  return C === undefined || (S = anObject(C)[SPECIES$4]) == undefined ? defaultConstructor : aFunction$1(S);
			};

			var ArrayBuffer$2 = arrayBuffer.ArrayBuffer;
			var DataView$1 = arrayBuffer.DataView;
			var nativeArrayBufferSlice = ArrayBuffer$2.prototype.slice;

			var INCORRECT_SLICE = fails(function () {
			  return !new ArrayBuffer$2(2).slice(1, undefined).byteLength;
			});

			// `ArrayBuffer.prototype.slice` method
			// https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice
			_export({ target: 'ArrayBuffer', proto: true, unsafe: true, forced: INCORRECT_SLICE }, {
			  slice: function slice(start, end) {
			    if (nativeArrayBufferSlice !== undefined && end === undefined) {
			      return nativeArrayBufferSlice.call(anObject(this), start); // FF fix
			    }
			    var length = anObject(this).byteLength;
			    var first = toAbsoluteIndex(start, length);
			    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
			    var result = new (speciesConstructor(this, ArrayBuffer$2))(toLength(fin - first));
			    var viewSource = new DataView$1(this);
			    var viewTarget = new DataView$1(result);
			    var index = 0;
			    while (first < fin) {
			      viewTarget.setUint8(index++, viewSource.getUint8(first++));
			    } return result;
			  }
			});

			// `DataView` constructor
			// https://tc39.es/ecma262/#sec-dataview-constructor
			_export({ global: true, forced: !arrayBufferNative }, {
			  DataView: arrayBuffer.DataView
			});

			// `Date.now` method
			// https://tc39.es/ecma262/#sec-date.now
			_export({ target: 'Date', stat: true }, {
			  now: function now() {
			    return new Date().getTime();
			  }
			});

			// `String.prototype.repeat` method implementation
			// https://tc39.es/ecma262/#sec-string.prototype.repeat
			var stringRepeat = function repeat(count) {
			  var str = String(requireObjectCoercible(this));
			  var result = '';
			  var n = toInteger(count);
			  if (n < 0 || n == Infinity) throw RangeError('Wrong number of repetitions');
			  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
			  return result;
			};

			// https://github.com/tc39/proposal-string-pad-start-end




			var ceil$1 = Math.ceil;

			// `String.prototype.{ padStart, padEnd }` methods implementation
			var createMethod$3 = function (IS_END) {
			  return function ($this, maxLength, fillString) {
			    var S = String(requireObjectCoercible($this));
			    var stringLength = S.length;
			    var fillStr = fillString === undefined ? ' ' : String(fillString);
			    var intMaxLength = toLength(maxLength);
			    var fillLen, stringFiller;
			    if (intMaxLength <= stringLength || fillStr == '') return S;
			    fillLen = intMaxLength - stringLength;
			    stringFiller = stringRepeat.call(fillStr, ceil$1(fillLen / fillStr.length));
			    if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
			    return IS_END ? S + stringFiller : stringFiller + S;
			  };
			};

			var stringPad = {
			  // `String.prototype.padStart` method
			  // https://tc39.es/ecma262/#sec-string.prototype.padstart
			  start: createMethod$3(false),
			  // `String.prototype.padEnd` method
			  // https://tc39.es/ecma262/#sec-string.prototype.padend
			  end: createMethod$3(true)
			};

			var padStart = stringPad.start;

			var abs$1 = Math.abs;
			var DatePrototype = Date.prototype;
			var getTime = DatePrototype.getTime;
			var nativeDateToISOString = DatePrototype.toISOString;

			// `Date.prototype.toISOString` method implementation
			// https://tc39.es/ecma262/#sec-date.prototype.toisostring
			// PhantomJS / old WebKit fails here:
			var dateToIsoString = (fails(function () {
			  return nativeDateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
			}) || !fails(function () {
			  nativeDateToISOString.call(new Date(NaN));
			})) ? function toISOString() {
			  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
			  var date = this;
			  var year = date.getUTCFullYear();
			  var milliseconds = date.getUTCMilliseconds();
			  var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
			  return sign + padStart(abs$1(year), sign ? 6 : 4, 0) +
			    '-' + padStart(date.getUTCMonth() + 1, 2, 0) +
			    '-' + padStart(date.getUTCDate(), 2, 0) +
			    'T' + padStart(date.getUTCHours(), 2, 0) +
			    ':' + padStart(date.getUTCMinutes(), 2, 0) +
			    ':' + padStart(date.getUTCSeconds(), 2, 0) +
			    '.' + padStart(milliseconds, 3, 0) +
			    'Z';
			} : nativeDateToISOString;

			// `Date.prototype.toISOString` method
			// https://tc39.es/ecma262/#sec-date.prototype.toisostring
			// PhantomJS / old WebKit has a broken implementations
			_export({ target: 'Date', proto: true, forced: Date.prototype.toISOString !== dateToIsoString }, {
			  toISOString: dateToIsoString
			});

			var FORCED$3 = fails(function () {
			  return new Date(NaN).toJSON() !== null
			    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
			});

			// `Date.prototype.toJSON` method
			// https://tc39.es/ecma262/#sec-date.prototype.tojson
			_export({ target: 'Date', proto: true, forced: FORCED$3 }, {
			  // eslint-disable-next-line no-unused-vars -- required for `.length`
			  toJSON: function toJSON(key) {
			    var O = toObject(this);
			    var pv = toPrimitive(O);
			    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
			  }
			});

			var dateToPrimitive = function (hint) {
			  if (hint !== 'string' && hint !== 'number' && hint !== 'default') {
			    throw TypeError('Incorrect hint');
			  } return toPrimitive(anObject(this), hint !== 'number');
			};

			var TO_PRIMITIVE$1 = wellKnownSymbol('toPrimitive');
			var DatePrototype$1 = Date.prototype;

			// `Date.prototype[@@toPrimitive]` method
			// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
			if (!(TO_PRIMITIVE$1 in DatePrototype$1)) {
			  createNonEnumerableProperty(DatePrototype$1, TO_PRIMITIVE$1, dateToPrimitive);
			}

			var DatePrototype$2 = Date.prototype;
			var INVALID_DATE = 'Invalid Date';
			var TO_STRING = 'toString';
			var nativeDateToString = DatePrototype$2[TO_STRING];
			var getTime$1 = DatePrototype$2.getTime;

			// `Date.prototype.toString` method
			// https://tc39.es/ecma262/#sec-date.prototype.tostring
			if (new Date(NaN) + '' != INVALID_DATE) {
			  redefine(DatePrototype$2, TO_STRING, function toString() {
			    var value = getTime$1.call(this);
			    // eslint-disable-next-line no-self-compare -- NaN check
			    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
			  });
			}

			var slice = [].slice;
			var factories = {};

			var construct = function (C, argsLength, args) {
			  if (!(argsLength in factories)) {
			    for (var list = [], i = 0; i < argsLength; i++) list[i] = 'a[' + i + ']';
			    // eslint-disable-next-line no-new-func -- we have no proper alternatives, IE8- only
			    factories[argsLength] = Function('C,a', 'return new C(' + list.join(',') + ')');
			  } return factories[argsLength](C, args);
			};

			// `Function.prototype.bind` method implementation
			// https://tc39.es/ecma262/#sec-function.prototype.bind
			var functionBind = Function.bind || function bind(that /* , ...args */) {
			  var fn = aFunction$1(this);
			  var partArgs = slice.call(arguments, 1);
			  var boundFunction = function bound(/* args... */) {
			    var args = partArgs.concat(slice.call(arguments));
			    return this instanceof boundFunction ? construct(fn, args.length, args) : fn.apply(that, args);
			  };
			  if (isObject(fn.prototype)) boundFunction.prototype = fn.prototype;
			  return boundFunction;
			};

			// `Function.prototype.bind` method
			// https://tc39.es/ecma262/#sec-function.prototype.bind
			_export({ target: 'Function', proto: true }, {
			  bind: functionBind
			});

			var HAS_INSTANCE = wellKnownSymbol('hasInstance');
			var FunctionPrototype = Function.prototype;

			// `Function.prototype[@@hasInstance]` method
			// https://tc39.es/ecma262/#sec-function.prototype-@@hasinstance
			if (!(HAS_INSTANCE in FunctionPrototype)) {
			  objectDefineProperty.f(FunctionPrototype, HAS_INSTANCE, { value: function (O) {
			    if (typeof this != 'function' || !isObject(O)) return false;
			    if (!isObject(this.prototype)) return O instanceof this;
			    // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
			    while (O = objectGetPrototypeOf(O)) if (this.prototype === O) return true;
			    return false;
			  } });
			}

			var defineProperty$5 = objectDefineProperty.f;

			var FunctionPrototype$1 = Function.prototype;
			var FunctionPrototypeToString = FunctionPrototype$1.toString;
			var nameRE = /^\s*function ([^ (]*)/;
			var NAME$1 = 'name';

			// Function instances `.name` property
			// https://tc39.es/ecma262/#sec-function-instances-name
			if (descriptors && !(NAME$1 in FunctionPrototype$1)) {
			  defineProperty$5(FunctionPrototype$1, NAME$1, {
			    configurable: true,
			    get: function () {
			      try {
			        return FunctionPrototypeToString.call(this).match(nameRE)[1];
			      } catch (error) {
			        return '';
			      }
			    }
			  });
			}

			// `globalThis` object
			// https://tc39.es/ecma262/#sec-globalthis
			_export({ global: true }, {
			  globalThis: global_1
			});

			var $stringify$1 = getBuiltIn('JSON', 'stringify');
			var re = /[\uD800-\uDFFF]/g;
			var low = /^[\uD800-\uDBFF]$/;
			var hi = /^[\uDC00-\uDFFF]$/;

			var fix = function (match, offset, string) {
			  var prev = string.charAt(offset - 1);
			  var next = string.charAt(offset + 1);
			  if ((low.test(match) && !hi.test(next)) || (hi.test(match) && !low.test(prev))) {
			    return '\\u' + match.charCodeAt(0).toString(16);
			  } return match;
			};

			var FORCED$4 = fails(function () {
			  return $stringify$1('\uDF06\uD834') !== '"\\udf06\\ud834"'
			    || $stringify$1('\uDEAD') !== '"\\udead"';
			});

			if ($stringify$1) {
			  // `JSON.stringify` method
			  // https://tc39.es/ecma262/#sec-json.stringify
			  // https://github.com/tc39/proposal-well-formed-stringify
			  _export({ target: 'JSON', stat: true, forced: FORCED$4 }, {
			    // eslint-disable-next-line no-unused-vars -- required for `.length`
			    stringify: function stringify(it, replacer, space) {
			      var result = $stringify$1.apply(null, arguments);
			      return typeof result == 'string' ? result.replace(re, fix) : result;
			    }
			  });
			}

			// JSON[@@toStringTag] property
			// https://tc39.es/ecma262/#sec-json-@@tostringtag
			setToStringTag(global_1.JSON, 'JSON', true);

			var freezing = !fails(function () {
			  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
			  return Object.isExtensible(Object.preventExtensions({}));
			});

			var internalMetadata = createCommonjsModule(function (module) {
			var defineProperty = objectDefineProperty.f;



			var METADATA = uid('meta');
			var id = 0;

			// eslint-disable-next-line es/no-object-isextensible -- safe
			var isExtensible = Object.isExtensible || function () {
			  return true;
			};

			var setMetadata = function (it) {
			  defineProperty(it, METADATA, { value: {
			    objectID: 'O' + ++id, // object ID
			    weakData: {}          // weak collections IDs
			  } });
			};

			var fastKey = function (it, create) {
			  // return a primitive with prefix
			  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
			  if (!has(it, METADATA)) {
			    // can't set metadata to uncaught frozen object
			    if (!isExtensible(it)) return 'F';
			    // not necessary to add metadata
			    if (!create) return 'E';
			    // add missing metadata
			    setMetadata(it);
			  // return object ID
			  } return it[METADATA].objectID;
			};

			var getWeakData = function (it, create) {
			  if (!has(it, METADATA)) {
			    // can't set metadata to uncaught frozen object
			    if (!isExtensible(it)) return true;
			    // not necessary to add metadata
			    if (!create) return false;
			    // add missing metadata
			    setMetadata(it);
			  // return the store of weak collections IDs
			  } return it[METADATA].weakData;
			};

			// add metadata on freeze-family methods calling
			var onFreeze = function (it) {
			  if (freezing && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
			  return it;
			};

			var meta = module.exports = {
			  REQUIRED: false,
			  fastKey: fastKey,
			  getWeakData: getWeakData,
			  onFreeze: onFreeze
			};

			hiddenKeys[METADATA] = true;
			});
			var internalMetadata_1 = internalMetadata.REQUIRED;
			var internalMetadata_2 = internalMetadata.fastKey;
			var internalMetadata_3 = internalMetadata.getWeakData;
			var internalMetadata_4 = internalMetadata.onFreeze;

			// makes subclassing work correct for wrapped built-ins
			var inheritIfRequired = function ($this, dummy, Wrapper) {
			  var NewTarget, NewTargetPrototype;
			  if (
			    // it can work only with native `setPrototypeOf`
			    objectSetPrototypeOf &&
			    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
			    typeof (NewTarget = dummy.constructor) == 'function' &&
			    NewTarget !== Wrapper &&
			    isObject(NewTargetPrototype = NewTarget.prototype) &&
			    NewTargetPrototype !== Wrapper.prototype
			  ) objectSetPrototypeOf($this, NewTargetPrototype);
			  return $this;
			};

			var collection = function (CONSTRUCTOR_NAME, wrapper, common) {
			  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
			  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
			  var ADDER = IS_MAP ? 'set' : 'add';
			  var NativeConstructor = global_1[CONSTRUCTOR_NAME];
			  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
			  var Constructor = NativeConstructor;
			  var exported = {};

			  var fixMethod = function (KEY) {
			    var nativeMethod = NativePrototype[KEY];
			    redefine(NativePrototype, KEY,
			      KEY == 'add' ? function add(value) {
			        nativeMethod.call(this, value === 0 ? 0 : value);
			        return this;
			      } : KEY == 'delete' ? function (key) {
			        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
			      } : KEY == 'get' ? function get(key) {
			        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
			      } : KEY == 'has' ? function has(key) {
			        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
			      } : function set(key, value) {
			        nativeMethod.call(this, key === 0 ? 0 : key, value);
			        return this;
			      }
			    );
			  };

			  var REPLACE = isForced_1(
			    CONSTRUCTOR_NAME,
			    typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
			      new NativeConstructor().entries().next();
			    }))
			  );

			  if (REPLACE) {
			    // create collection constructor
			    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
			    internalMetadata.REQUIRED = true;
			  } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
			    var instance = new Constructor();
			    // early implementations not supports chaining
			    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
			    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
			    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
			    // most early implementations doesn't supports iterables, most modern - not close it correctly
			    // eslint-disable-next-line no-new -- required for testing
			    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
			    // for early implementations -0 and +0 not the same
			    var BUGGY_ZERO = !IS_WEAK && fails(function () {
			      // V8 ~ Chromium 42- fails only with 5+ elements
			      var $instance = new NativeConstructor();
			      var index = 5;
			      while (index--) $instance[ADDER](index, index);
			      return !$instance.has(-0);
			    });

			    if (!ACCEPT_ITERABLES) {
			      Constructor = wrapper(function (dummy, iterable) {
			        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
			        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
			        if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
			        return that;
			      });
			      Constructor.prototype = NativePrototype;
			      NativePrototype.constructor = Constructor;
			    }

			    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
			      fixMethod('delete');
			      fixMethod('has');
			      IS_MAP && fixMethod('get');
			    }

			    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

			    // weak collections should not contains .clear method
			    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
			  }

			  exported[CONSTRUCTOR_NAME] = Constructor;
			  _export({ global: true, forced: Constructor != NativeConstructor }, exported);

			  setToStringTag(Constructor, CONSTRUCTOR_NAME);

			  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

			  return Constructor;
			};

			var defineProperty$6 = objectDefineProperty.f;








			var fastKey = internalMetadata.fastKey;


			var setInternalState$3 = internalState.set;
			var internalStateGetterFor = internalState.getterFor;

			var collectionStrong = {
			  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
			    var C = wrapper(function (that, iterable) {
			      anInstance(that, C, CONSTRUCTOR_NAME);
			      setInternalState$3(that, {
			        type: CONSTRUCTOR_NAME,
			        index: objectCreate(null),
			        first: undefined,
			        last: undefined,
			        size: 0
			      });
			      if (!descriptors) that.size = 0;
			      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
			    });

			    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

			    var define = function (that, key, value) {
			      var state = getInternalState(that);
			      var entry = getEntry(that, key);
			      var previous, index;
			      // change existing entry
			      if (entry) {
			        entry.value = value;
			      // create new entry
			      } else {
			        state.last = entry = {
			          index: index = fastKey(key, true),
			          key: key,
			          value: value,
			          previous: previous = state.last,
			          next: undefined,
			          removed: false
			        };
			        if (!state.first) state.first = entry;
			        if (previous) previous.next = entry;
			        if (descriptors) state.size++;
			        else that.size++;
			        // add to index
			        if (index !== 'F') state.index[index] = entry;
			      } return that;
			    };

			    var getEntry = function (that, key) {
			      var state = getInternalState(that);
			      // fast case
			      var index = fastKey(key);
			      var entry;
			      if (index !== 'F') return state.index[index];
			      // frozen object case
			      for (entry = state.first; entry; entry = entry.next) {
			        if (entry.key == key) return entry;
			      }
			    };

			    redefineAll(C.prototype, {
			      // 23.1.3.1 Map.prototype.clear()
			      // 23.2.3.2 Set.prototype.clear()
			      clear: function clear() {
			        var that = this;
			        var state = getInternalState(that);
			        var data = state.index;
			        var entry = state.first;
			        while (entry) {
			          entry.removed = true;
			          if (entry.previous) entry.previous = entry.previous.next = undefined;
			          delete data[entry.index];
			          entry = entry.next;
			        }
			        state.first = state.last = undefined;
			        if (descriptors) state.size = 0;
			        else that.size = 0;
			      },
			      // 23.1.3.3 Map.prototype.delete(key)
			      // 23.2.3.4 Set.prototype.delete(value)
			      'delete': function (key) {
			        var that = this;
			        var state = getInternalState(that);
			        var entry = getEntry(that, key);
			        if (entry) {
			          var next = entry.next;
			          var prev = entry.previous;
			          delete state.index[entry.index];
			          entry.removed = true;
			          if (prev) prev.next = next;
			          if (next) next.previous = prev;
			          if (state.first == entry) state.first = next;
			          if (state.last == entry) state.last = prev;
			          if (descriptors) state.size--;
			          else that.size--;
			        } return !!entry;
			      },
			      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
			      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
			      forEach: function forEach(callbackfn /* , that = undefined */) {
			        var state = getInternalState(this);
			        var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
			        var entry;
			        while (entry = entry ? entry.next : state.first) {
			          boundFunction(entry.value, entry.key, this);
			          // revert to the last existing entry
			          while (entry && entry.removed) entry = entry.previous;
			        }
			      },
			      // 23.1.3.7 Map.prototype.has(key)
			      // 23.2.3.7 Set.prototype.has(value)
			      has: function has(key) {
			        return !!getEntry(this, key);
			      }
			    });

			    redefineAll(C.prototype, IS_MAP ? {
			      // 23.1.3.6 Map.prototype.get(key)
			      get: function get(key) {
			        var entry = getEntry(this, key);
			        return entry && entry.value;
			      },
			      // 23.1.3.9 Map.prototype.set(key, value)
			      set: function set(key, value) {
			        return define(this, key === 0 ? 0 : key, value);
			      }
			    } : {
			      // 23.2.3.1 Set.prototype.add(value)
			      add: function add(value) {
			        return define(this, value = value === 0 ? 0 : value, value);
			      }
			    });
			    if (descriptors) defineProperty$6(C.prototype, 'size', {
			      get: function () {
			        return getInternalState(this).size;
			      }
			    });
			    return C;
			  },
			  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
			    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
			    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
			    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
			    // add .keys, .values, .entries, [@@iterator]
			    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
			    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
			      setInternalState$3(this, {
			        type: ITERATOR_NAME,
			        target: iterated,
			        state: getInternalCollectionState(iterated),
			        kind: kind,
			        last: undefined
			      });
			    }, function () {
			      var state = getInternalIteratorState(this);
			      var kind = state.kind;
			      var entry = state.last;
			      // revert to the last existing entry
			      while (entry && entry.removed) entry = entry.previous;
			      // get next entry
			      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
			        // or finish the iteration
			        state.target = undefined;
			        return { value: undefined, done: true };
			      }
			      // return step by kind
			      if (kind == 'keys') return { value: entry.key, done: false };
			      if (kind == 'values') return { value: entry.value, done: false };
			      return { value: [entry.key, entry.value], done: false };
			    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

			    // add [@@species], 23.1.2.2, 23.2.2.2
			    setSpecies(CONSTRUCTOR_NAME);
			  }
			};

			// `Map` constructor
			// https://tc39.es/ecma262/#sec-map-objects
			var es_map = collection('Map', function (init) {
			  return function Map() { return init(this, arguments.length ? arguments[0] : undefined); };
			}, collectionStrong);

			var log$1 = Math.log;

			// `Math.log1p` method implementation
			// https://tc39.es/ecma262/#sec-math.log1p
			// eslint-disable-next-line es/no-math-log1p -- safe
			var mathLog1p = Math.log1p || function log1p(x) {
			  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log$1(1 + x);
			};

			// eslint-disable-next-line es/no-math-acosh -- required for testing
			var $acosh = Math.acosh;
			var log$2 = Math.log;
			var sqrt = Math.sqrt;
			var LN2$1 = Math.LN2;

			var FORCED$5 = !$acosh
			  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
			  || Math.floor($acosh(Number.MAX_VALUE)) != 710
			  // Tor Browser bug: Math.acosh(Infinity) -> NaN
			  || $acosh(Infinity) != Infinity;

			// `Math.acosh` method
			// https://tc39.es/ecma262/#sec-math.acosh
			_export({ target: 'Math', stat: true, forced: FORCED$5 }, {
			  acosh: function acosh(x) {
			    return (x = +x) < 1 ? NaN : x > 94906265.62425156
			      ? log$2(x) + LN2$1
			      : mathLog1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
			  }
			});

			// eslint-disable-next-line es/no-math-asinh -- required for testing
			var $asinh = Math.asinh;
			var log$3 = Math.log;
			var sqrt$1 = Math.sqrt;

			function asinh(x) {
			  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log$3(x + sqrt$1(x * x + 1));
			}

			// `Math.asinh` method
			// https://tc39.es/ecma262/#sec-math.asinh
			// Tor Browser bug: Math.asinh(0) -> -0
			_export({ target: 'Math', stat: true, forced: !($asinh && 1 / $asinh(0) > 0) }, {
			  asinh: asinh
			});

			// eslint-disable-next-line es/no-math-atanh -- required for testing
			var $atanh = Math.atanh;
			var log$4 = Math.log;

			// `Math.atanh` method
			// https://tc39.es/ecma262/#sec-math.atanh
			// Tor Browser bug: Math.atanh(-0) -> 0
			_export({ target: 'Math', stat: true, forced: !($atanh && 1 / $atanh(-0) < 0) }, {
			  atanh: function atanh(x) {
			    return (x = +x) == 0 ? x : log$4((1 + x) / (1 - x)) / 2;
			  }
			});

			// `Math.sign` method implementation
			// https://tc39.es/ecma262/#sec-math.sign
			// eslint-disable-next-line es/no-math-sign -- safe
			var mathSign = Math.sign || function sign(x) {
			  // eslint-disable-next-line no-self-compare -- NaN check
			  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
			};

			var abs$2 = Math.abs;
			var pow$1 = Math.pow;

			// `Math.cbrt` method
			// https://tc39.es/ecma262/#sec-math.cbrt
			_export({ target: 'Math', stat: true }, {
			  cbrt: function cbrt(x) {
			    return mathSign(x = +x) * pow$1(abs$2(x), 1 / 3);
			  }
			});

			var floor$2 = Math.floor;
			var log$5 = Math.log;
			var LOG2E = Math.LOG2E;

			// `Math.clz32` method
			// https://tc39.es/ecma262/#sec-math.clz32
			_export({ target: 'Math', stat: true }, {
			  clz32: function clz32(x) {
			    return (x >>>= 0) ? 31 - floor$2(log$5(x + 0.5) * LOG2E) : 32;
			  }
			});

			// eslint-disable-next-line es/no-math-expm1 -- safe
			var $expm1 = Math.expm1;
			var exp = Math.exp;

			// `Math.expm1` method implementation
			// https://tc39.es/ecma262/#sec-math.expm1
			var mathExpm1 = (!$expm1
			  // Old FF bug
			  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
			  // Tor Browser bug
			  || $expm1(-2e-17) != -2e-17
			) ? function expm1(x) {
			  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp(x) - 1;
			} : $expm1;

			// eslint-disable-next-line es/no-math-cosh -- required for testing
			var $cosh = Math.cosh;
			var abs$3 = Math.abs;
			var E = Math.E;

			// `Math.cosh` method
			// https://tc39.es/ecma262/#sec-math.cosh
			_export({ target: 'Math', stat: true, forced: !$cosh || $cosh(710) === Infinity }, {
			  cosh: function cosh(x) {
			    var t = mathExpm1(abs$3(x) - 1) + 1;
			    return (t + 1 / (t * E * E)) * (E / 2);
			  }
			});

			// `Math.expm1` method
			// https://tc39.es/ecma262/#sec-math.expm1
			// eslint-disable-next-line es/no-math-expm1 -- required for testing
			_export({ target: 'Math', stat: true, forced: mathExpm1 != Math.expm1 }, { expm1: mathExpm1 });

			var abs$4 = Math.abs;
			var pow$2 = Math.pow;
			var EPSILON = pow$2(2, -52);
			var EPSILON32 = pow$2(2, -23);
			var MAX32 = pow$2(2, 127) * (2 - EPSILON32);
			var MIN32 = pow$2(2, -126);

			var roundTiesToEven = function (n) {
			  return n + 1 / EPSILON - 1 / EPSILON;
			};

			// `Math.fround` method implementation
			// https://tc39.es/ecma262/#sec-math.fround
			// eslint-disable-next-line es/no-math-fround -- safe
			var mathFround = Math.fround || function fround(x) {
			  var $abs = abs$4(x);
			  var $sign = mathSign(x);
			  var a, result;
			  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
			  a = (1 + EPSILON32 / EPSILON) * $abs;
			  result = a - (a - $abs);
			  // eslint-disable-next-line no-self-compare -- NaN check
			  if (result > MAX32 || result != result) return $sign * Infinity;
			  return $sign * result;
			};

			// `Math.fround` method
			// https://tc39.es/ecma262/#sec-math.fround
			_export({ target: 'Math', stat: true }, { fround: mathFround });

			// eslint-disable-next-line es/no-math-hypot -- required for testing
			var $hypot = Math.hypot;
			var abs$5 = Math.abs;
			var sqrt$2 = Math.sqrt;

			// Chrome 77 bug
			// https://bugs.chromium.org/p/v8/issues/detail?id=9546
			var BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity;

			// `Math.hypot` method
			// https://tc39.es/ecma262/#sec-math.hypot
			_export({ target: 'Math', stat: true, forced: BUGGY }, {
			  // eslint-disable-next-line no-unused-vars -- required for `.length`
			  hypot: function hypot(value1, value2) {
			    var sum = 0;
			    var i = 0;
			    var aLen = arguments.length;
			    var larg = 0;
			    var arg, div;
			    while (i < aLen) {
			      arg = abs$5(arguments[i++]);
			      if (larg < arg) {
			        div = larg / arg;
			        sum = sum * div * div + 1;
			        larg = arg;
			      } else if (arg > 0) {
			        div = arg / larg;
			        sum += div * div;
			      } else sum += arg;
			    }
			    return larg === Infinity ? Infinity : larg * sqrt$2(sum);
			  }
			});

			// eslint-disable-next-line es/no-math-imul -- required for testing
			var $imul = Math.imul;

			var FORCED$6 = fails(function () {
			  return $imul(0xFFFFFFFF, 5) != -5 || $imul.length != 2;
			});

			// `Math.imul` method
			// https://tc39.es/ecma262/#sec-math.imul
			// some WebKit versions fails with big numbers, some has wrong arity
			_export({ target: 'Math', stat: true, forced: FORCED$6 }, {
			  imul: function imul(x, y) {
			    var UINT16 = 0xFFFF;
			    var xn = +x;
			    var yn = +y;
			    var xl = UINT16 & xn;
			    var yl = UINT16 & yn;
			    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
			  }
			});

			var log$6 = Math.log;
			var LOG10E = Math.LOG10E;

			// `Math.log10` method
			// https://tc39.es/ecma262/#sec-math.log10
			_export({ target: 'Math', stat: true }, {
			  log10: function log10(x) {
			    return log$6(x) * LOG10E;
			  }
			});

			// `Math.log1p` method
			// https://tc39.es/ecma262/#sec-math.log1p
			_export({ target: 'Math', stat: true }, { log1p: mathLog1p });

			var log$7 = Math.log;
			var LN2$2 = Math.LN2;

			// `Math.log2` method
			// https://tc39.es/ecma262/#sec-math.log2
			_export({ target: 'Math', stat: true }, {
			  log2: function log2(x) {
			    return log$7(x) / LN2$2;
			  }
			});

			// `Math.sign` method
			// https://tc39.es/ecma262/#sec-math.sign
			_export({ target: 'Math', stat: true }, {
			  sign: mathSign
			});

			var abs$6 = Math.abs;
			var exp$1 = Math.exp;
			var E$1 = Math.E;

			var FORCED$7 = fails(function () {
			  // eslint-disable-next-line es/no-math-sinh -- required for testing
			  return Math.sinh(-2e-17) != -2e-17;
			});

			// `Math.sinh` method
			// https://tc39.es/ecma262/#sec-math.sinh
			// V8 near Chromium 38 has a problem with very small numbers
			_export({ target: 'Math', stat: true, forced: FORCED$7 }, {
			  sinh: function sinh(x) {
			    return abs$6(x = +x) < 1 ? (mathExpm1(x) - mathExpm1(-x)) / 2 : (exp$1(x - 1) - exp$1(-x - 1)) * (E$1 / 2);
			  }
			});

			var exp$2 = Math.exp;

			// `Math.tanh` method
			// https://tc39.es/ecma262/#sec-math.tanh
			_export({ target: 'Math', stat: true }, {
			  tanh: function tanh(x) {
			    var a = mathExpm1(x = +x);
			    var b = mathExpm1(-x);
			    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
			  }
			});

			// Math[@@toStringTag] property
			// https://tc39.es/ecma262/#sec-math-@@tostringtag
			setToStringTag(Math, 'Math', true);

			var ceil$2 = Math.ceil;
			var floor$3 = Math.floor;

			// `Math.trunc` method
			// https://tc39.es/ecma262/#sec-math.trunc
			_export({ target: 'Math', stat: true }, {
			  trunc: function trunc(it) {
			    return (it > 0 ? floor$3 : ceil$2)(it);
			  }
			});

			// a string of all valid unicode whitespaces
			var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' +
			  '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

			var whitespace = '[' + whitespaces + ']';
			var ltrim = RegExp('^' + whitespace + whitespace + '*');
			var rtrim = RegExp(whitespace + whitespace + '*$');

			// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
			var createMethod$4 = function (TYPE) {
			  return function ($this) {
			    var string = String(requireObjectCoercible($this));
			    if (TYPE & 1) string = string.replace(ltrim, '');
			    if (TYPE & 2) string = string.replace(rtrim, '');
			    return string;
			  };
			};

			var stringTrim = {
			  // `String.prototype.{ trimLeft, trimStart }` methods
			  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
			  start: createMethod$4(1),
			  // `String.prototype.{ trimRight, trimEnd }` methods
			  // https://tc39.es/ecma262/#sec-string.prototype.trimend
			  end: createMethod$4(2),
			  // `String.prototype.trim` method
			  // https://tc39.es/ecma262/#sec-string.prototype.trim
			  trim: createMethod$4(3)
			};

			var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
			var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
			var defineProperty$7 = objectDefineProperty.f;
			var trim = stringTrim.trim;

			var NUMBER = 'Number';
			var NativeNumber = global_1[NUMBER];
			var NumberPrototype = NativeNumber.prototype;

			// Opera ~12 has broken Object#toString
			var BROKEN_CLASSOF = classofRaw(objectCreate(NumberPrototype)) == NUMBER;

			// `ToNumber` abstract operation
			// https://tc39.es/ecma262/#sec-tonumber
			var toNumber = function (argument) {
			  var it = toPrimitive(argument, false);
			  var first, third, radix, maxCode, digits, length, index, code;
			  if (typeof it == 'string' && it.length > 2) {
			    it = trim(it);
			    first = it.charCodeAt(0);
			    if (first === 43 || first === 45) {
			      third = it.charCodeAt(2);
			      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
			    } else if (first === 48) {
			      switch (it.charCodeAt(1)) {
			        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
			        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
			        default: return +it;
			      }
			      digits = it.slice(2);
			      length = digits.length;
			      for (index = 0; index < length; index++) {
			        code = digits.charCodeAt(index);
			        // parseInt parses a string to a first unavailable symbol
			        // but ToNumber should return NaN if a string contains unavailable symbols
			        if (code < 48 || code > maxCode) return NaN;
			      } return parseInt(digits, radix);
			    }
			  } return +it;
			};

			// `Number` constructor
			// https://tc39.es/ecma262/#sec-number-constructor
			if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
			  var NumberWrapper = function Number(value) {
			    var it = arguments.length < 1 ? 0 : value;
			    var dummy = this;
			    return dummy instanceof NumberWrapper
			      // check on 1..constructor(foo) case
			      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classofRaw(dummy) != NUMBER)
			        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
			  };
			  for (var keys$2 = descriptors ? getOwnPropertyNames$1(NativeNumber) : (
			    // ES3:
			    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
			    // ES2015 (in case, if modules with ES2015 Number statics required before):
			    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
			    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,' +
			    // ESNext
			    'fromString,range'
			  ).split(','), j$1 = 0, key$1; keys$2.length > j$1; j$1++) {
			    if (has(NativeNumber, key$1 = keys$2[j$1]) && !has(NumberWrapper, key$1)) {
			      defineProperty$7(NumberWrapper, key$1, getOwnPropertyDescriptor$2(NativeNumber, key$1));
			    }
			  }
			  NumberWrapper.prototype = NumberPrototype;
			  NumberPrototype.constructor = NumberWrapper;
			  redefine(global_1, NUMBER, NumberWrapper);
			}

			// `Number.EPSILON` constant
			// https://tc39.es/ecma262/#sec-number.epsilon
			_export({ target: 'Number', stat: true }, {
			  EPSILON: Math.pow(2, -52)
			});

			var globalIsFinite = global_1.isFinite;

			// `Number.isFinite` method
			// https://tc39.es/ecma262/#sec-number.isfinite
			// eslint-disable-next-line es/no-number-isfinite -- safe
			var numberIsFinite = Number.isFinite || function isFinite(it) {
			  return typeof it == 'number' && globalIsFinite(it);
			};

			// `Number.isFinite` method
			// https://tc39.es/ecma262/#sec-number.isfinite
			_export({ target: 'Number', stat: true }, { isFinite: numberIsFinite });

			var floor$4 = Math.floor;

			// `Number.isInteger` method implementation
			// https://tc39.es/ecma262/#sec-number.isinteger
			var isInteger = function isInteger(it) {
			  return !isObject(it) && isFinite(it) && floor$4(it) === it;
			};

			// `Number.isInteger` method
			// https://tc39.es/ecma262/#sec-number.isinteger
			_export({ target: 'Number', stat: true }, {
			  isInteger: isInteger
			});

			// `Number.isNaN` method
			// https://tc39.es/ecma262/#sec-number.isnan
			_export({ target: 'Number', stat: true }, {
			  isNaN: function isNaN(number) {
			    // eslint-disable-next-line no-self-compare -- NaN check
			    return number != number;
			  }
			});

			var abs$7 = Math.abs;

			// `Number.isSafeInteger` method
			// https://tc39.es/ecma262/#sec-number.issafeinteger
			_export({ target: 'Number', stat: true }, {
			  isSafeInteger: function isSafeInteger(number) {
			    return isInteger(number) && abs$7(number) <= 0x1FFFFFFFFFFFFF;
			  }
			});

			// `Number.MAX_SAFE_INTEGER` constant
			// https://tc39.es/ecma262/#sec-number.max_safe_integer
			_export({ target: 'Number', stat: true }, {
			  MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
			});

			// `Number.MIN_SAFE_INTEGER` constant
			// https://tc39.es/ecma262/#sec-number.min_safe_integer
			_export({ target: 'Number', stat: true }, {
			  MIN_SAFE_INTEGER: -0x1FFFFFFFFFFFFF
			});

			var trim$1 = stringTrim.trim;


			var $parseFloat = global_1.parseFloat;
			var FORCED$8 = 1 / $parseFloat(whitespaces + '-0') !== -Infinity;

			// `parseFloat` method
			// https://tc39.es/ecma262/#sec-parsefloat-string
			var numberParseFloat = FORCED$8 ? function parseFloat(string) {
			  var trimmedString = trim$1(String(string));
			  var result = $parseFloat(trimmedString);
			  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
			} : $parseFloat;

			// `Number.parseFloat` method
			// https://tc39.es/ecma262/#sec-number.parseFloat
			// eslint-disable-next-line es/no-number-parsefloat -- required for testing
			_export({ target: 'Number', stat: true, forced: Number.parseFloat != numberParseFloat }, {
			  parseFloat: numberParseFloat
			});

			var trim$2 = stringTrim.trim;


			var $parseInt = global_1.parseInt;
			var hex = /^[+-]?0[Xx]/;
			var FORCED$9 = $parseInt(whitespaces + '08') !== 8 || $parseInt(whitespaces + '0x16') !== 22;

			// `parseInt` method
			// https://tc39.es/ecma262/#sec-parseint-string-radix
			var numberParseInt = FORCED$9 ? function parseInt(string, radix) {
			  var S = trim$2(String(string));
			  return $parseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
			} : $parseInt;

			// `Number.parseInt` method
			// https://tc39.es/ecma262/#sec-number.parseint
			// eslint-disable-next-line es/no-number-parseint -- required for testing
			_export({ target: 'Number', stat: true, forced: Number.parseInt != numberParseInt }, {
			  parseInt: numberParseInt
			});

			// `thisNumberValue` abstract operation
			// https://tc39.es/ecma262/#sec-thisnumbervalue
			var thisNumberValue = function (value) {
			  if (typeof value != 'number' && classofRaw(value) != 'Number') {
			    throw TypeError('Incorrect invocation');
			  }
			  return +value;
			};

			var nativeToFixed = 1.0.toFixed;
			var floor$5 = Math.floor;

			var pow$3 = function (x, n, acc) {
			  return n === 0 ? acc : n % 2 === 1 ? pow$3(x, n - 1, acc * x) : pow$3(x * x, n / 2, acc);
			};

			var log$8 = function (x) {
			  var n = 0;
			  var x2 = x;
			  while (x2 >= 4096) {
			    n += 12;
			    x2 /= 4096;
			  }
			  while (x2 >= 2) {
			    n += 1;
			    x2 /= 2;
			  } return n;
			};

			var multiply = function (data, n, c) {
			  var index = -1;
			  var c2 = c;
			  while (++index < 6) {
			    c2 += n * data[index];
			    data[index] = c2 % 1e7;
			    c2 = floor$5(c2 / 1e7);
			  }
			};

			var divide = function (data, n) {
			  var index = 6;
			  var c = 0;
			  while (--index >= 0) {
			    c += data[index];
			    data[index] = floor$5(c / n);
			    c = (c % n) * 1e7;
			  }
			};

			var dataToString = function (data) {
			  var index = 6;
			  var s = '';
			  while (--index >= 0) {
			    if (s !== '' || index === 0 || data[index] !== 0) {
			      var t = String(data[index]);
			      s = s === '' ? t : s + stringRepeat.call('0', 7 - t.length) + t;
			    }
			  } return s;
			};

			var FORCED$a = nativeToFixed && (
			  0.00008.toFixed(3) !== '0.000' ||
			  0.9.toFixed(0) !== '1' ||
			  1.255.toFixed(2) !== '1.25' ||
			  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
			) || !fails(function () {
			  // V8 ~ Android 4.3-
			  nativeToFixed.call({});
			});

			// `Number.prototype.toFixed` method
			// https://tc39.es/ecma262/#sec-number.prototype.tofixed
			_export({ target: 'Number', proto: true, forced: FORCED$a }, {
			  toFixed: function toFixed(fractionDigits) {
			    var number = thisNumberValue(this);
			    var fractDigits = toInteger(fractionDigits);
			    var data = [0, 0, 0, 0, 0, 0];
			    var sign = '';
			    var result = '0';
			    var e, z, j, k;

			    if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits');
			    // eslint-disable-next-line no-self-compare -- NaN check
			    if (number != number) return 'NaN';
			    if (number <= -1e21 || number >= 1e21) return String(number);
			    if (number < 0) {
			      sign = '-';
			      number = -number;
			    }
			    if (number > 1e-21) {
			      e = log$8(number * pow$3(2, 69, 1)) - 69;
			      z = e < 0 ? number * pow$3(2, -e, 1) : number / pow$3(2, e, 1);
			      z *= 0x10000000000000;
			      e = 52 - e;
			      if (e > 0) {
			        multiply(data, 0, z);
			        j = fractDigits;
			        while (j >= 7) {
			          multiply(data, 1e7, 0);
			          j -= 7;
			        }
			        multiply(data, pow$3(10, j, 1), 0);
			        j = e - 1;
			        while (j >= 23) {
			          divide(data, 1 << 23);
			          j -= 23;
			        }
			        divide(data, 1 << j);
			        multiply(data, 1, 1);
			        divide(data, 2);
			        result = dataToString(data);
			      } else {
			        multiply(data, 0, z);
			        multiply(data, 1 << -e, 0);
			        result = dataToString(data) + stringRepeat.call('0', fractDigits);
			      }
			    }
			    if (fractDigits > 0) {
			      k = result.length;
			      result = sign + (k <= fractDigits
			        ? '0.' + stringRepeat.call('0', fractDigits - k) + result
			        : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
			    } else {
			      result = sign + result;
			    } return result;
			  }
			});

			var nativeToPrecision = 1.0.toPrecision;

			var FORCED$b = fails(function () {
			  // IE7-
			  return nativeToPrecision.call(1, undefined) !== '1';
			}) || !fails(function () {
			  // V8 ~ Android 4.3-
			  nativeToPrecision.call({});
			});

			// `Number.prototype.toPrecision` method
			// https://tc39.es/ecma262/#sec-number.prototype.toprecision
			_export({ target: 'Number', proto: true, forced: FORCED$b }, {
			  toPrecision: function toPrecision(precision) {
			    return precision === undefined
			      ? nativeToPrecision.call(thisNumberValue(this))
			      : nativeToPrecision.call(thisNumberValue(this), precision);
			  }
			});

			// eslint-disable-next-line es/no-object-assign -- safe
			var $assign = Object.assign;
			// eslint-disable-next-line es/no-object-defineproperty -- required for testing
			var defineProperty$8 = Object.defineProperty;

			// `Object.assign` method
			// https://tc39.es/ecma262/#sec-object.assign
			var objectAssign = !$assign || fails(function () {
			  // should have correct order of operations (Edge bug)
			  if (descriptors && $assign({ b: 1 }, $assign(defineProperty$8({}, 'a', {
			    enumerable: true,
			    get: function () {
			      defineProperty$8(this, 'b', {
			        value: 3,
			        enumerable: false
			      });
			    }
			  }), { b: 2 })).b !== 1) return true;
			  // should work with symbols and should have deterministic property order (V8 bug)
			  var A = {};
			  var B = {};
			  // eslint-disable-next-line es/no-symbol -- safe
			  var symbol = Symbol();
			  var alphabet = 'abcdefghijklmnopqrst';
			  A[symbol] = 7;
			  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
			  return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
			}) ? function assign(target, source) { // eslint-disable-line no-unused-vars -- required for `.length`
			  var T = toObject(target);
			  var argumentsLength = arguments.length;
			  var index = 1;
			  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
			  var propertyIsEnumerable = objectPropertyIsEnumerable.f;
			  while (argumentsLength > index) {
			    var S = indexedObject(arguments[index++]);
			    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
			    var length = keys.length;
			    var j = 0;
			    var key;
			    while (length > j) {
			      key = keys[j++];
			      if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
			    }
			  } return T;
			} : $assign;

			// `Object.assign` method
			// https://tc39.es/ecma262/#sec-object.assign
			// eslint-disable-next-line es/no-object-assign -- required for testing
			_export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
			  assign: objectAssign
			});

			// `Object.create` method
			// https://tc39.es/ecma262/#sec-object.create
			_export({ target: 'Object', stat: true, sham: !descriptors }, {
			  create: objectCreate
			});

			// Forced replacement object prototype accessors methods
			var objectPrototypeAccessorsForced =  !fails(function () {
			  var key = Math.random();
			  // In FF throws only define methods
			  // eslint-disable-next-line no-undef, no-useless-call -- required for testing
			  __defineSetter__.call(null, key, function () { /* empty */ });
			  delete global_1[key];
			});

			// `Object.prototype.__defineGetter__` method
			// https://tc39.es/ecma262/#sec-object.prototype.__defineGetter__
			if (descriptors) {
			  _export({ target: 'Object', proto: true, forced: objectPrototypeAccessorsForced }, {
			    __defineGetter__: function __defineGetter__(P, getter) {
			      objectDefineProperty.f(toObject(this), P, { get: aFunction$1(getter), enumerable: true, configurable: true });
			    }
			  });
			}

			// `Object.defineProperties` method
			// https://tc39.es/ecma262/#sec-object.defineproperties
			_export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
			  defineProperties: objectDefineProperties
			});

			// `Object.defineProperty` method
			// https://tc39.es/ecma262/#sec-object.defineproperty
			_export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
			  defineProperty: objectDefineProperty.f
			});

			// `Object.prototype.__defineSetter__` method
			// https://tc39.es/ecma262/#sec-object.prototype.__defineSetter__
			if (descriptors) {
			  _export({ target: 'Object', proto: true, forced: objectPrototypeAccessorsForced }, {
			    __defineSetter__: function __defineSetter__(P, setter) {
			      objectDefineProperty.f(toObject(this), P, { set: aFunction$1(setter), enumerable: true, configurable: true });
			    }
			  });
			}

			var propertyIsEnumerable = objectPropertyIsEnumerable.f;

			// `Object.{ entries, values }` methods implementation
			var createMethod$5 = function (TO_ENTRIES) {
			  return function (it) {
			    var O = toIndexedObject(it);
			    var keys = objectKeys(O);
			    var length = keys.length;
			    var i = 0;
			    var result = [];
			    var key;
			    while (length > i) {
			      key = keys[i++];
			      if (!descriptors || propertyIsEnumerable.call(O, key)) {
			        result.push(TO_ENTRIES ? [key, O[key]] : O[key]);
			      }
			    }
			    return result;
			  };
			};

			var objectToArray = {
			  // `Object.entries` method
			  // https://tc39.es/ecma262/#sec-object.entries
			  entries: createMethod$5(true),
			  // `Object.values` method
			  // https://tc39.es/ecma262/#sec-object.values
			  values: createMethod$5(false)
			};

			var $entries = objectToArray.entries;

			// `Object.entries` method
			// https://tc39.es/ecma262/#sec-object.entries
			_export({ target: 'Object', stat: true }, {
			  entries: function entries(O) {
			    return $entries(O);
			  }
			});

			var onFreeze = internalMetadata.onFreeze;

			// eslint-disable-next-line es/no-object-freeze -- safe
			var $freeze = Object.freeze;
			var FAILS_ON_PRIMITIVES = fails(function () { $freeze(1); });

			// `Object.freeze` method
			// https://tc39.es/ecma262/#sec-object.freeze
			_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !freezing }, {
			  freeze: function freeze(it) {
			    return $freeze && isObject(it) ? $freeze(onFreeze(it)) : it;
			  }
			});

			// `Object.fromEntries` method
			// https://github.com/tc39/proposal-object-from-entries
			_export({ target: 'Object', stat: true }, {
			  fromEntries: function fromEntries(iterable) {
			    var obj = {};
			    iterate(iterable, function (k, v) {
			      createProperty(obj, k, v);
			    }, { AS_ENTRIES: true });
			    return obj;
			  }
			});

			var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;


			var FAILS_ON_PRIMITIVES$1 = fails(function () { nativeGetOwnPropertyDescriptor$1(1); });
			var FORCED$c = !descriptors || FAILS_ON_PRIMITIVES$1;

			// `Object.getOwnPropertyDescriptor` method
			// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
			_export({ target: 'Object', stat: true, forced: FORCED$c, sham: !descriptors }, {
			  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
			    return nativeGetOwnPropertyDescriptor$1(toIndexedObject(it), key);
			  }
			});

			// `Object.getOwnPropertyDescriptors` method
			// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
			_export({ target: 'Object', stat: true, sham: !descriptors }, {
			  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
			    var O = toIndexedObject(object);
			    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
			    var keys = ownKeys(O);
			    var result = {};
			    var index = 0;
			    var key, descriptor;
			    while (keys.length > index) {
			      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
			      if (descriptor !== undefined) createProperty(result, key, descriptor);
			    }
			    return result;
			  }
			});

			var getOwnPropertyNames$2 = objectGetOwnPropertyNamesExternal.f;

			// eslint-disable-next-line es/no-object-getownpropertynames -- required for testing
			var FAILS_ON_PRIMITIVES$2 = fails(function () { return !Object.getOwnPropertyNames(1); });

			// `Object.getOwnPropertyNames` method
			// https://tc39.es/ecma262/#sec-object.getownpropertynames
			_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$2 }, {
			  getOwnPropertyNames: getOwnPropertyNames$2
			});

			var FAILS_ON_PRIMITIVES$3 = fails(function () { objectGetPrototypeOf(1); });

			// `Object.getPrototypeOf` method
			// https://tc39.es/ecma262/#sec-object.getprototypeof
			_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$3, sham: !correctPrototypeGetter }, {
			  getPrototypeOf: function getPrototypeOf(it) {
			    return objectGetPrototypeOf(toObject(it));
			  }
			});

			// `SameValue` abstract operation
			// https://tc39.es/ecma262/#sec-samevalue
			// eslint-disable-next-line es/no-object-is -- safe
			var sameValue = Object.is || function is(x, y) {
			  // eslint-disable-next-line no-self-compare -- NaN check
			  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
			};

			// `Object.is` method
			// https://tc39.es/ecma262/#sec-object.is
			_export({ target: 'Object', stat: true }, {
			  is: sameValue
			});

			// eslint-disable-next-line es/no-object-isextensible -- safe
			var $isExtensible = Object.isExtensible;
			var FAILS_ON_PRIMITIVES$4 = fails(function () { $isExtensible(1); });

			// `Object.isExtensible` method
			// https://tc39.es/ecma262/#sec-object.isextensible
			_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$4 }, {
			  isExtensible: function isExtensible(it) {
			    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
			  }
			});

			// eslint-disable-next-line es/no-object-isfrozen -- safe
			var $isFrozen = Object.isFrozen;
			var FAILS_ON_PRIMITIVES$5 = fails(function () { $isFrozen(1); });

			// `Object.isFrozen` method
			// https://tc39.es/ecma262/#sec-object.isfrozen
			_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$5 }, {
			  isFrozen: function isFrozen(it) {
			    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
			  }
			});

			// eslint-disable-next-line es/no-object-issealed -- safe
			var $isSealed = Object.isSealed;
			var FAILS_ON_PRIMITIVES$6 = fails(function () { $isSealed(1); });

			// `Object.isSealed` method
			// https://tc39.es/ecma262/#sec-object.issealed
			_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$6 }, {
			  isSealed: function isSealed(it) {
			    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
			  }
			});

			var FAILS_ON_PRIMITIVES$7 = fails(function () { objectKeys(1); });

			// `Object.keys` method
			// https://tc39.es/ecma262/#sec-object.keys
			_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$7 }, {
			  keys: function keys(it) {
			    return objectKeys(toObject(it));
			  }
			});

			var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;

			// `Object.prototype.__lookupGetter__` method
			// https://tc39.es/ecma262/#sec-object.prototype.__lookupGetter__
			if (descriptors) {
			  _export({ target: 'Object', proto: true, forced: objectPrototypeAccessorsForced }, {
			    __lookupGetter__: function __lookupGetter__(P) {
			      var O = toObject(this);
			      var key = toPrimitive(P, true);
			      var desc;
			      do {
			        if (desc = getOwnPropertyDescriptor$3(O, key)) return desc.get;
			      } while (O = objectGetPrototypeOf(O));
			    }
			  });
			}

			var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor.f;

			// `Object.prototype.__lookupSetter__` method
			// https://tc39.es/ecma262/#sec-object.prototype.__lookupSetter__
			if (descriptors) {
			  _export({ target: 'Object', proto: true, forced: objectPrototypeAccessorsForced }, {
			    __lookupSetter__: function __lookupSetter__(P) {
			      var O = toObject(this);
			      var key = toPrimitive(P, true);
			      var desc;
			      do {
			        if (desc = getOwnPropertyDescriptor$4(O, key)) return desc.set;
			      } while (O = objectGetPrototypeOf(O));
			    }
			  });
			}

			var onFreeze$1 = internalMetadata.onFreeze;



			// eslint-disable-next-line es/no-object-preventextensions -- safe
			var $preventExtensions = Object.preventExtensions;
			var FAILS_ON_PRIMITIVES$8 = fails(function () { $preventExtensions(1); });

			// `Object.preventExtensions` method
			// https://tc39.es/ecma262/#sec-object.preventextensions
			_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$8, sham: !freezing }, {
			  preventExtensions: function preventExtensions(it) {
			    return $preventExtensions && isObject(it) ? $preventExtensions(onFreeze$1(it)) : it;
			  }
			});

			var onFreeze$2 = internalMetadata.onFreeze;



			// eslint-disable-next-line es/no-object-seal -- safe
			var $seal = Object.seal;
			var FAILS_ON_PRIMITIVES$9 = fails(function () { $seal(1); });

			// `Object.seal` method
			// https://tc39.es/ecma262/#sec-object.seal
			_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$9, sham: !freezing }, {
			  seal: function seal(it) {
			    return $seal && isObject(it) ? $seal(onFreeze$2(it)) : it;
			  }
			});

			// `Object.setPrototypeOf` method
			// https://tc39.es/ecma262/#sec-object.setprototypeof
			_export({ target: 'Object', stat: true }, {
			  setPrototypeOf: objectSetPrototypeOf
			});

			// `Object.prototype.toString` method implementation
			// https://tc39.es/ecma262/#sec-object.prototype.tostring
			var objectToString = toStringTagSupport ? {}.toString : function toString() {
			  return '[object ' + classof(this) + ']';
			};

			// `Object.prototype.toString` method
			// https://tc39.es/ecma262/#sec-object.prototype.tostring
			if (!toStringTagSupport) {
			  redefine(Object.prototype, 'toString', objectToString, { unsafe: true });
			}

			var $values = objectToArray.values;

			// `Object.values` method
			// https://tc39.es/ecma262/#sec-object.values
			_export({ target: 'Object', stat: true }, {
			  values: function values(O) {
			    return $values(O);
			  }
			});

			// `parseFloat` method
			// https://tc39.es/ecma262/#sec-parsefloat-string
			_export({ global: true, forced: parseFloat != numberParseFloat }, {
			  parseFloat: numberParseFloat
			});

			// `parseInt` method
			// https://tc39.es/ecma262/#sec-parseint-string-radix
			_export({ global: true, forced: parseInt != numberParseInt }, {
			  parseInt: numberParseInt
			});

			var nativePromiseConstructor = global_1.Promise;

			var engineIsIos = /(?:iphone|ipod|ipad).*applewebkit/i.test(engineUserAgent);

			var location = global_1.location;
			var set$2 = global_1.setImmediate;
			var clear = global_1.clearImmediate;
			var process$1 = global_1.process;
			var MessageChannel = global_1.MessageChannel;
			var Dispatch = global_1.Dispatch;
			var counter = 0;
			var queue = {};
			var ONREADYSTATECHANGE = 'onreadystatechange';
			var defer, channel, port;

			var run = function (id) {
			  // eslint-disable-next-line no-prototype-builtins -- safe
			  if (queue.hasOwnProperty(id)) {
			    var fn = queue[id];
			    delete queue[id];
			    fn();
			  }
			};

			var runner = function (id) {
			  return function () {
			    run(id);
			  };
			};

			var listener = function (event) {
			  run(event.data);
			};

			var post = function (id) {
			  // old engines have not location.origin
			  global_1.postMessage(id + '', location.protocol + '//' + location.host);
			};

			// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
			if (!set$2 || !clear) {
			  set$2 = function setImmediate(fn) {
			    var args = [];
			    var i = 1;
			    while (arguments.length > i) args.push(arguments[i++]);
			    queue[++counter] = function () {
			      // eslint-disable-next-line no-new-func -- spec requirement
			      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
			    };
			    defer(counter);
			    return counter;
			  };
			  clear = function clearImmediate(id) {
			    delete queue[id];
			  };
			  // Node.js 0.8-
			  if (engineIsNode) {
			    defer = function (id) {
			      process$1.nextTick(runner(id));
			    };
			  // Sphere (JS game engine) Dispatch API
			  } else if (Dispatch && Dispatch.now) {
			    defer = function (id) {
			      Dispatch.now(runner(id));
			    };
			  // Browsers with MessageChannel, includes WebWorkers
			  // except iOS - https://github.com/zloirock/core-js/issues/624
			  } else if (MessageChannel && !engineIsIos) {
			    channel = new MessageChannel();
			    port = channel.port2;
			    channel.port1.onmessage = listener;
			    defer = functionBindContext(port.postMessage, port, 1);
			  // Browsers with postMessage, skip WebWorkers
			  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
			  } else if (
			    global_1.addEventListener &&
			    typeof postMessage == 'function' &&
			    !global_1.importScripts &&
			    location && location.protocol !== 'file:' &&
			    !fails(post)
			  ) {
			    defer = post;
			    global_1.addEventListener('message', listener, false);
			  // IE8-
			  } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
			    defer = function (id) {
			      html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
			        html.removeChild(this);
			        run(id);
			      };
			    };
			  // Rest old browsers
			  } else {
			    defer = function (id) {
			      setTimeout(runner(id), 0);
			    };
			  }
			}

			var task = {
			  set: set$2,
			  clear: clear
			};

			var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(engineUserAgent);

			var getOwnPropertyDescriptor$5 = objectGetOwnPropertyDescriptor.f;
			var macrotask = task.set;




			var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
			var document$2 = global_1.document;
			var process$2 = global_1.process;
			var Promise$1 = global_1.Promise;
			// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
			var queueMicrotaskDescriptor = getOwnPropertyDescriptor$5(global_1, 'queueMicrotask');
			var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

			var flush, head, last, notify, toggle, node, promise, then;

			// modern engines have queueMicrotask method
			if (!queueMicrotask) {
			  flush = function () {
			    var parent, fn;
			    if (engineIsNode && (parent = process$2.domain)) parent.exit();
			    while (head) {
			      fn = head.fn;
			      head = head.next;
			      try {
			        fn();
			      } catch (error) {
			        if (head) notify();
			        else last = undefined;
			        throw error;
			      }
			    } last = undefined;
			    if (parent) parent.enter();
			  };

			  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
			  // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
			  if (!engineIsIos && !engineIsNode && !engineIsWebosWebkit && MutationObserver && document$2) {
			    toggle = true;
			    node = document$2.createTextNode('');
			    new MutationObserver(flush).observe(node, { characterData: true });
			    notify = function () {
			      node.data = toggle = !toggle;
			    };
			  // environments with maybe non-completely correct, but existent Promise
			  } else if (Promise$1 && Promise$1.resolve) {
			    // Promise.resolve without an argument throws an error in LG WebOS 2
			    promise = Promise$1.resolve(undefined);
			    // workaround of WebKit ~ iOS Safari 10.1 bug
			    promise.constructor = Promise$1;
			    then = promise.then;
			    notify = function () {
			      then.call(promise, flush);
			    };
			  // Node.js without promises
			  } else if (engineIsNode) {
			    notify = function () {
			      process$2.nextTick(flush);
			    };
			  // for other environments - macrotask based on:
			  // - setImmediate
			  // - MessageChannel
			  // - window.postMessag
			  // - onreadystatechange
			  // - setTimeout
			  } else {
			    notify = function () {
			      // strange IE + webpack dev server bug - use .call(global)
			      macrotask.call(global_1, flush);
			    };
			  }
			}

			var microtask = queueMicrotask || function (fn) {
			  var task = { fn: fn, next: undefined };
			  if (last) last.next = task;
			  if (!head) {
			    head = task;
			    notify();
			  } last = task;
			};

			var PromiseCapability = function (C) {
			  var resolve, reject;
			  this.promise = new C(function ($$resolve, $$reject) {
			    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
			    resolve = $$resolve;
			    reject = $$reject;
			  });
			  this.resolve = aFunction$1(resolve);
			  this.reject = aFunction$1(reject);
			};

			// 25.4.1.5 NewPromiseCapability(C)
			var f$7 = function (C) {
			  return new PromiseCapability(C);
			};

			var newPromiseCapability = {
				f: f$7
			};

			var promiseResolve = function (C, x) {
			  anObject(C);
			  if (isObject(x) && x.constructor === C) return x;
			  var promiseCapability = newPromiseCapability.f(C);
			  var resolve = promiseCapability.resolve;
			  resolve(x);
			  return promiseCapability.promise;
			};

			var hostReportErrors = function (a, b) {
			  var console = global_1.console;
			  if (console && console.error) {
			    arguments.length === 1 ? console.error(a) : console.error(a, b);
			  }
			};

			var perform = function (exec) {
			  try {
			    return { error: false, value: exec() };
			  } catch (error) {
			    return { error: true, value: error };
			  }
			};

			var engineIsBrowser = typeof window == 'object';

			var task$1 = task.set;












			var SPECIES$5 = wellKnownSymbol('species');
			var PROMISE = 'Promise';
			var getInternalState$3 = internalState.get;
			var setInternalState$4 = internalState.set;
			var getInternalPromiseState = internalState.getterFor(PROMISE);
			var NativePromisePrototype = nativePromiseConstructor && nativePromiseConstructor.prototype;
			var PromiseConstructor = nativePromiseConstructor;
			var PromiseConstructorPrototype = NativePromisePrototype;
			var TypeError$1 = global_1.TypeError;
			var document$3 = global_1.document;
			var process$3 = global_1.process;
			var newPromiseCapability$1 = newPromiseCapability.f;
			var newGenericPromiseCapability = newPromiseCapability$1;
			var DISPATCH_EVENT = !!(document$3 && document$3.createEvent && global_1.dispatchEvent);
			var NATIVE_REJECTION_EVENT = typeof PromiseRejectionEvent == 'function';
			var UNHANDLED_REJECTION = 'unhandledrejection';
			var REJECTION_HANDLED = 'rejectionhandled';
			var PENDING = 0;
			var FULFILLED = 1;
			var REJECTED = 2;
			var HANDLED = 1;
			var UNHANDLED = 2;
			var SUBCLASSING = false;
			var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

			var FORCED$d = isForced_1(PROMISE, function () {
			  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
			  // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
			  // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
			  // We can't detect it synchronously, so just check versions
			  if (!GLOBAL_CORE_JS_PROMISE && engineV8Version === 66) return true;
			  // We can't use @@species feature detection in V8 since it causes
			  // deoptimization and performance degradation
			  // https://github.com/zloirock/core-js/issues/679
			  if (engineV8Version >= 51 && /native code/.test(PromiseConstructor)) return false;
			  // Detect correctness of subclassing with @@species support
			  var promise = new PromiseConstructor(function (resolve) { resolve(1); });
			  var FakePromise = function (exec) {
			    exec(function () { /* empty */ }, function () { /* empty */ });
			  };
			  var constructor = promise.constructor = {};
			  constructor[SPECIES$5] = FakePromise;
			  SUBCLASSING = promise.then(function () { /* empty */ }) instanceof FakePromise;
			  if (!SUBCLASSING) return true;
			  // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
			  return !GLOBAL_CORE_JS_PROMISE && engineIsBrowser && !NATIVE_REJECTION_EVENT;
			});

			var INCORRECT_ITERATION$1 = FORCED$d || !checkCorrectnessOfIteration(function (iterable) {
			  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
			});

			// helpers
			var isThenable = function (it) {
			  var then;
			  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
			};

			var notify$1 = function (state, isReject) {
			  if (state.notified) return;
			  state.notified = true;
			  var chain = state.reactions;
			  microtask(function () {
			    var value = state.value;
			    var ok = state.state == FULFILLED;
			    var index = 0;
			    // variable length - can't use forEach
			    while (chain.length > index) {
			      var reaction = chain[index++];
			      var handler = ok ? reaction.ok : reaction.fail;
			      var resolve = reaction.resolve;
			      var reject = reaction.reject;
			      var domain = reaction.domain;
			      var result, then, exited;
			      try {
			        if (handler) {
			          if (!ok) {
			            if (state.rejection === UNHANDLED) onHandleUnhandled(state);
			            state.rejection = HANDLED;
			          }
			          if (handler === true) result = value;
			          else {
			            if (domain) domain.enter();
			            result = handler(value); // can throw
			            if (domain) {
			              domain.exit();
			              exited = true;
			            }
			          }
			          if (result === reaction.promise) {
			            reject(TypeError$1('Promise-chain cycle'));
			          } else if (then = isThenable(result)) {
			            then.call(result, resolve, reject);
			          } else resolve(result);
			        } else reject(value);
			      } catch (error) {
			        if (domain && !exited) domain.exit();
			        reject(error);
			      }
			    }
			    state.reactions = [];
			    state.notified = false;
			    if (isReject && !state.rejection) onUnhandled(state);
			  });
			};

			var dispatchEvent = function (name, promise, reason) {
			  var event, handler;
			  if (DISPATCH_EVENT) {
			    event = document$3.createEvent('Event');
			    event.promise = promise;
			    event.reason = reason;
			    event.initEvent(name, false, true);
			    global_1.dispatchEvent(event);
			  } else event = { promise: promise, reason: reason };
			  if (!NATIVE_REJECTION_EVENT && (handler = global_1['on' + name])) handler(event);
			  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
			};

			var onUnhandled = function (state) {
			  task$1.call(global_1, function () {
			    var promise = state.facade;
			    var value = state.value;
			    var IS_UNHANDLED = isUnhandled(state);
			    var result;
			    if (IS_UNHANDLED) {
			      result = perform(function () {
			        if (engineIsNode) {
			          process$3.emit('unhandledRejection', value, promise);
			        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
			      });
			      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
			      state.rejection = engineIsNode || isUnhandled(state) ? UNHANDLED : HANDLED;
			      if (result.error) throw result.value;
			    }
			  });
			};

			var isUnhandled = function (state) {
			  return state.rejection !== HANDLED && !state.parent;
			};

			var onHandleUnhandled = function (state) {
			  task$1.call(global_1, function () {
			    var promise = state.facade;
			    if (engineIsNode) {
			      process$3.emit('rejectionHandled', promise);
			    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
			  });
			};

			var bind = function (fn, state, unwrap) {
			  return function (value) {
			    fn(state, value, unwrap);
			  };
			};

			var internalReject = function (state, value, unwrap) {
			  if (state.done) return;
			  state.done = true;
			  if (unwrap) state = unwrap;
			  state.value = value;
			  state.state = REJECTED;
			  notify$1(state, true);
			};

			var internalResolve = function (state, value, unwrap) {
			  if (state.done) return;
			  state.done = true;
			  if (unwrap) state = unwrap;
			  try {
			    if (state.facade === value) throw TypeError$1("Promise can't be resolved itself");
			    var then = isThenable(value);
			    if (then) {
			      microtask(function () {
			        var wrapper = { done: false };
			        try {
			          then.call(value,
			            bind(internalResolve, wrapper, state),
			            bind(internalReject, wrapper, state)
			          );
			        } catch (error) {
			          internalReject(wrapper, error, state);
			        }
			      });
			    } else {
			      state.value = value;
			      state.state = FULFILLED;
			      notify$1(state, false);
			    }
			  } catch (error) {
			    internalReject({ done: false }, error, state);
			  }
			};

			// constructor polyfill
			if (FORCED$d) {
			  // 25.4.3.1 Promise(executor)
			  PromiseConstructor = function Promise(executor) {
			    anInstance(this, PromiseConstructor, PROMISE);
			    aFunction$1(executor);
			    Internal.call(this);
			    var state = getInternalState$3(this);
			    try {
			      executor(bind(internalResolve, state), bind(internalReject, state));
			    } catch (error) {
			      internalReject(state, error);
			    }
			  };
			  PromiseConstructorPrototype = PromiseConstructor.prototype;
			  // eslint-disable-next-line no-unused-vars -- required for `.length`
			  Internal = function Promise(executor) {
			    setInternalState$4(this, {
			      type: PROMISE,
			      done: false,
			      notified: false,
			      parent: false,
			      reactions: [],
			      rejection: false,
			      state: PENDING,
			      value: undefined
			    });
			  };
			  Internal.prototype = redefineAll(PromiseConstructorPrototype, {
			    // `Promise.prototype.then` method
			    // https://tc39.es/ecma262/#sec-promise.prototype.then
			    then: function then(onFulfilled, onRejected) {
			      var state = getInternalPromiseState(this);
			      var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
			      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
			      reaction.fail = typeof onRejected == 'function' && onRejected;
			      reaction.domain = engineIsNode ? process$3.domain : undefined;
			      state.parent = true;
			      state.reactions.push(reaction);
			      if (state.state != PENDING) notify$1(state, false);
			      return reaction.promise;
			    },
			    // `Promise.prototype.catch` method
			    // https://tc39.es/ecma262/#sec-promise.prototype.catch
			    'catch': function (onRejected) {
			      return this.then(undefined, onRejected);
			    }
			  });
			  OwnPromiseCapability = function () {
			    var promise = new Internal();
			    var state = getInternalState$3(promise);
			    this.promise = promise;
			    this.resolve = bind(internalResolve, state);
			    this.reject = bind(internalReject, state);
			  };
			  newPromiseCapability.f = newPromiseCapability$1 = function (C) {
			    return C === PromiseConstructor || C === PromiseWrapper
			      ? new OwnPromiseCapability(C)
			      : newGenericPromiseCapability(C);
			  };

			  if ( typeof nativePromiseConstructor == 'function' && NativePromisePrototype !== Object.prototype) {
			    nativeThen = NativePromisePrototype.then;

			    if (!SUBCLASSING) {
			      // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
			      redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
			        var that = this;
			        return new PromiseConstructor(function (resolve, reject) {
			          nativeThen.call(that, resolve, reject);
			        }).then(onFulfilled, onRejected);
			      // https://github.com/zloirock/core-js/issues/640
			      }, { unsafe: true });

			      // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
			      redefine(NativePromisePrototype, 'catch', PromiseConstructorPrototype['catch'], { unsafe: true });
			    }

			    // make `.constructor === Promise` work for native promise-based APIs
			    try {
			      delete NativePromisePrototype.constructor;
			    } catch (error) { /* empty */ }

			    // make `instanceof Promise` work for native promise-based APIs
			    if (objectSetPrototypeOf) {
			      objectSetPrototypeOf(NativePromisePrototype, PromiseConstructorPrototype);
			    }
			  }
			}

			_export({ global: true, wrap: true, forced: FORCED$d }, {
			  Promise: PromiseConstructor
			});

			setToStringTag(PromiseConstructor, PROMISE, false);
			setSpecies(PROMISE);

			PromiseWrapper = getBuiltIn(PROMISE);

			// statics
			_export({ target: PROMISE, stat: true, forced: FORCED$d }, {
			  // `Promise.reject` method
			  // https://tc39.es/ecma262/#sec-promise.reject
			  reject: function reject(r) {
			    var capability = newPromiseCapability$1(this);
			    capability.reject.call(undefined, r);
			    return capability.promise;
			  }
			});

			_export({ target: PROMISE, stat: true, forced:  FORCED$d }, {
			  // `Promise.resolve` method
			  // https://tc39.es/ecma262/#sec-promise.resolve
			  resolve: function resolve(x) {
			    return promiseResolve( this, x);
			  }
			});

			_export({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION$1 }, {
			  // `Promise.all` method
			  // https://tc39.es/ecma262/#sec-promise.all
			  all: function all(iterable) {
			    var C = this;
			    var capability = newPromiseCapability$1(C);
			    var resolve = capability.resolve;
			    var reject = capability.reject;
			    var result = perform(function () {
			      var $promiseResolve = aFunction$1(C.resolve);
			      var values = [];
			      var counter = 0;
			      var remaining = 1;
			      iterate(iterable, function (promise) {
			        var index = counter++;
			        var alreadyCalled = false;
			        values.push(undefined);
			        remaining++;
			        $promiseResolve.call(C, promise).then(function (value) {
			          if (alreadyCalled) return;
			          alreadyCalled = true;
			          values[index] = value;
			          --remaining || resolve(values);
			        }, reject);
			      });
			      --remaining || resolve(values);
			    });
			    if (result.error) reject(result.value);
			    return capability.promise;
			  },
			  // `Promise.race` method
			  // https://tc39.es/ecma262/#sec-promise.race
			  race: function race(iterable) {
			    var C = this;
			    var capability = newPromiseCapability$1(C);
			    var reject = capability.reject;
			    var result = perform(function () {
			      var $promiseResolve = aFunction$1(C.resolve);
			      iterate(iterable, function (promise) {
			        $promiseResolve.call(C, promise).then(capability.resolve, reject);
			      });
			    });
			    if (result.error) reject(result.value);
			    return capability.promise;
			  }
			});

			// `Promise.allSettled` method
			// https://tc39.es/ecma262/#sec-promise.allsettled
			_export({ target: 'Promise', stat: true }, {
			  allSettled: function allSettled(iterable) {
			    var C = this;
			    var capability = newPromiseCapability.f(C);
			    var resolve = capability.resolve;
			    var reject = capability.reject;
			    var result = perform(function () {
			      var promiseResolve = aFunction$1(C.resolve);
			      var values = [];
			      var counter = 0;
			      var remaining = 1;
			      iterate(iterable, function (promise) {
			        var index = counter++;
			        var alreadyCalled = false;
			        values.push(undefined);
			        remaining++;
			        promiseResolve.call(C, promise).then(function (value) {
			          if (alreadyCalled) return;
			          alreadyCalled = true;
			          values[index] = { status: 'fulfilled', value: value };
			          --remaining || resolve(values);
			        }, function (error) {
			          if (alreadyCalled) return;
			          alreadyCalled = true;
			          values[index] = { status: 'rejected', reason: error };
			          --remaining || resolve(values);
			        });
			      });
			      --remaining || resolve(values);
			    });
			    if (result.error) reject(result.value);
			    return capability.promise;
			  }
			});

			var PROMISE_ANY_ERROR = 'No one promise resolved';

			// `Promise.any` method
			// https://tc39.es/ecma262/#sec-promise.any
			_export({ target: 'Promise', stat: true }, {
			  any: function any(iterable) {
			    var C = this;
			    var capability = newPromiseCapability.f(C);
			    var resolve = capability.resolve;
			    var reject = capability.reject;
			    var result = perform(function () {
			      var promiseResolve = aFunction$1(C.resolve);
			      var errors = [];
			      var counter = 0;
			      var remaining = 1;
			      var alreadyResolved = false;
			      iterate(iterable, function (promise) {
			        var index = counter++;
			        var alreadyRejected = false;
			        errors.push(undefined);
			        remaining++;
			        promiseResolve.call(C, promise).then(function (value) {
			          if (alreadyRejected || alreadyResolved) return;
			          alreadyResolved = true;
			          resolve(value);
			        }, function (error) {
			          if (alreadyRejected || alreadyResolved) return;
			          alreadyRejected = true;
			          errors[index] = error;
			          --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
			        });
			      });
			      --remaining || reject(new (getBuiltIn('AggregateError'))(errors, PROMISE_ANY_ERROR));
			    });
			    if (result.error) reject(result.value);
			    return capability.promise;
			  }
			});

			// Safari bug https://bugs.webkit.org/show_bug.cgi?id=200829
			var NON_GENERIC = !!nativePromiseConstructor && fails(function () {
			  nativePromiseConstructor.prototype['finally'].call({ then: function () { /* empty */ } }, function () { /* empty */ });
			});

			// `Promise.prototype.finally` method
			// https://tc39.es/ecma262/#sec-promise.prototype.finally
			_export({ target: 'Promise', proto: true, real: true, forced: NON_GENERIC }, {
			  'finally': function (onFinally) {
			    var C = speciesConstructor(this, getBuiltIn('Promise'));
			    var isFunction = typeof onFinally == 'function';
			    return this.then(
			      isFunction ? function (x) {
			        return promiseResolve(C, onFinally()).then(function () { return x; });
			      } : onFinally,
			      isFunction ? function (e) {
			        return promiseResolve(C, onFinally()).then(function () { throw e; });
			      } : onFinally
			    );
			  }
			});

			// makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`
			if ( typeof nativePromiseConstructor == 'function') {
			  var method = getBuiltIn('Promise').prototype['finally'];
			  if (nativePromiseConstructor.prototype['finally'] !== method) {
			    redefine(nativePromiseConstructor.prototype, 'finally', method, { unsafe: true });
			  }
			}

			var nativeApply = getBuiltIn('Reflect', 'apply');
			var functionApply = Function.apply;

			// MS Edge argumentsList argument is optional
			var OPTIONAL_ARGUMENTS_LIST = !fails(function () {
			  nativeApply(function () { /* empty */ });
			});

			// `Reflect.apply` method
			// https://tc39.es/ecma262/#sec-reflect.apply
			_export({ target: 'Reflect', stat: true, forced: OPTIONAL_ARGUMENTS_LIST }, {
			  apply: function apply(target, thisArgument, argumentsList) {
			    aFunction$1(target);
			    anObject(argumentsList);
			    return nativeApply
			      ? nativeApply(target, thisArgument, argumentsList)
			      : functionApply.call(target, thisArgument, argumentsList);
			  }
			});

			var nativeConstruct = getBuiltIn('Reflect', 'construct');

			// `Reflect.construct` method
			// https://tc39.es/ecma262/#sec-reflect.construct
			// MS Edge supports only 2 arguments and argumentsList argument is optional
			// FF Nightly sets third argument as `new.target`, but does not create `this` from it
			var NEW_TARGET_BUG = fails(function () {
			  function F() { /* empty */ }
			  return !(nativeConstruct(function () { /* empty */ }, [], F) instanceof F);
			});
			var ARGS_BUG = !fails(function () {
			  nativeConstruct(function () { /* empty */ });
			});
			var FORCED$e = NEW_TARGET_BUG || ARGS_BUG;

			_export({ target: 'Reflect', stat: true, forced: FORCED$e, sham: FORCED$e }, {
			  construct: function construct(Target, args /* , newTarget */) {
			    aFunction$1(Target);
			    anObject(args);
			    var newTarget = arguments.length < 3 ? Target : aFunction$1(arguments[2]);
			    if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);
			    if (Target == newTarget) {
			      // w/o altered newTarget, optimization for 0-4 arguments
			      switch (args.length) {
			        case 0: return new Target();
			        case 1: return new Target(args[0]);
			        case 2: return new Target(args[0], args[1]);
			        case 3: return new Target(args[0], args[1], args[2]);
			        case 4: return new Target(args[0], args[1], args[2], args[3]);
			      }
			      // w/o altered newTarget, lot of arguments case
			      var $args = [null];
			      $args.push.apply($args, args);
			      return new (functionBind.apply(Target, $args))();
			    }
			    // with altered newTarget, not support built-in constructors
			    var proto = newTarget.prototype;
			    var instance = objectCreate(isObject(proto) ? proto : Object.prototype);
			    var result = Function.apply.call(Target, instance, args);
			    return isObject(result) ? result : instance;
			  }
			});

			// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
			var ERROR_INSTEAD_OF_FALSE = fails(function () {
			  // eslint-disable-next-line es/no-reflect -- required for testing
			  Reflect.defineProperty(objectDefineProperty.f({}, 1, { value: 1 }), 1, { value: 2 });
			});

			// `Reflect.defineProperty` method
			// https://tc39.es/ecma262/#sec-reflect.defineproperty
			_export({ target: 'Reflect', stat: true, forced: ERROR_INSTEAD_OF_FALSE, sham: !descriptors }, {
			  defineProperty: function defineProperty(target, propertyKey, attributes) {
			    anObject(target);
			    var key = toPrimitive(propertyKey, true);
			    anObject(attributes);
			    try {
			      objectDefineProperty.f(target, key, attributes);
			      return true;
			    } catch (error) {
			      return false;
			    }
			  }
			});

			var getOwnPropertyDescriptor$6 = objectGetOwnPropertyDescriptor.f;

			// `Reflect.deleteProperty` method
			// https://tc39.es/ecma262/#sec-reflect.deleteproperty
			_export({ target: 'Reflect', stat: true }, {
			  deleteProperty: function deleteProperty(target, propertyKey) {
			    var descriptor = getOwnPropertyDescriptor$6(anObject(target), propertyKey);
			    return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
			  }
			});

			// `Reflect.get` method
			// https://tc39.es/ecma262/#sec-reflect.get
			function get$2(target, propertyKey /* , receiver */) {
			  var receiver = arguments.length < 3 ? target : arguments[2];
			  var descriptor, prototype;
			  if (anObject(target) === receiver) return target[propertyKey];
			  if (descriptor = objectGetOwnPropertyDescriptor.f(target, propertyKey)) return has(descriptor, 'value')
			    ? descriptor.value
			    : descriptor.get === undefined
			      ? undefined
			      : descriptor.get.call(receiver);
			  if (isObject(prototype = objectGetPrototypeOf(target))) return get$2(prototype, propertyKey, receiver);
			}

			_export({ target: 'Reflect', stat: true }, {
			  get: get$2
			});

			// `Reflect.getOwnPropertyDescriptor` method
			// https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor
			_export({ target: 'Reflect', stat: true, sham: !descriptors }, {
			  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
			    return objectGetOwnPropertyDescriptor.f(anObject(target), propertyKey);
			  }
			});

			// `Reflect.getPrototypeOf` method
			// https://tc39.es/ecma262/#sec-reflect.getprototypeof
			_export({ target: 'Reflect', stat: true, sham: !correctPrototypeGetter }, {
			  getPrototypeOf: function getPrototypeOf(target) {
			    return objectGetPrototypeOf(anObject(target));
			  }
			});

			// `Reflect.has` method
			// https://tc39.es/ecma262/#sec-reflect.has
			_export({ target: 'Reflect', stat: true }, {
			  has: function has(target, propertyKey) {
			    return propertyKey in target;
			  }
			});

			// eslint-disable-next-line es/no-object-isextensible -- safe
			var objectIsExtensible = Object.isExtensible;

			// `Reflect.isExtensible` method
			// https://tc39.es/ecma262/#sec-reflect.isextensible
			_export({ target: 'Reflect', stat: true }, {
			  isExtensible: function isExtensible(target) {
			    anObject(target);
			    return objectIsExtensible ? objectIsExtensible(target) : true;
			  }
			});

			// `Reflect.ownKeys` method
			// https://tc39.es/ecma262/#sec-reflect.ownkeys
			_export({ target: 'Reflect', stat: true }, {
			  ownKeys: ownKeys
			});

			// `Reflect.preventExtensions` method
			// https://tc39.es/ecma262/#sec-reflect.preventextensions
			_export({ target: 'Reflect', stat: true, sham: !freezing }, {
			  preventExtensions: function preventExtensions(target) {
			    anObject(target);
			    try {
			      var objectPreventExtensions = getBuiltIn('Object', 'preventExtensions');
			      if (objectPreventExtensions) objectPreventExtensions(target);
			      return true;
			    } catch (error) {
			      return false;
			    }
			  }
			});

			// `Reflect.set` method
			// https://tc39.es/ecma262/#sec-reflect.set
			function set$3(target, propertyKey, V /* , receiver */) {
			  var receiver = arguments.length < 4 ? target : arguments[3];
			  var ownDescriptor = objectGetOwnPropertyDescriptor.f(anObject(target), propertyKey);
			  var existingDescriptor, prototype;
			  if (!ownDescriptor) {
			    if (isObject(prototype = objectGetPrototypeOf(target))) {
			      return set$3(prototype, propertyKey, V, receiver);
			    }
			    ownDescriptor = createPropertyDescriptor(0);
			  }
			  if (has(ownDescriptor, 'value')) {
			    if (ownDescriptor.writable === false || !isObject(receiver)) return false;
			    if (existingDescriptor = objectGetOwnPropertyDescriptor.f(receiver, propertyKey)) {
			      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
			      existingDescriptor.value = V;
			      objectDefineProperty.f(receiver, propertyKey, existingDescriptor);
			    } else objectDefineProperty.f(receiver, propertyKey, createPropertyDescriptor(0, V));
			    return true;
			  }
			  return ownDescriptor.set === undefined ? false : (ownDescriptor.set.call(receiver, V), true);
			}

			// MS Edge 17-18 Reflect.set allows setting the property to object
			// with non-writable property on the prototype
			var MS_EDGE_BUG = fails(function () {
			  var Constructor = function () { /* empty */ };
			  var object = objectDefineProperty.f(new Constructor(), 'a', { configurable: true });
			  // eslint-disable-next-line es/no-reflect -- required for testing
			  return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;
			});

			_export({ target: 'Reflect', stat: true, forced: MS_EDGE_BUG }, {
			  set: set$3
			});

			// `Reflect.setPrototypeOf` method
			// https://tc39.es/ecma262/#sec-reflect.setprototypeof
			if (objectSetPrototypeOf) _export({ target: 'Reflect', stat: true }, {
			  setPrototypeOf: function setPrototypeOf(target, proto) {
			    anObject(target);
			    aPossiblePrototype(proto);
			    try {
			      objectSetPrototypeOf(target, proto);
			      return true;
			    } catch (error) {
			      return false;
			    }
			  }
			});

			_export({ global: true }, { Reflect: {} });

			// Reflect[@@toStringTag] property
			// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
			setToStringTag(global_1.Reflect, 'Reflect', true);

			var MATCH = wellKnownSymbol('match');

			// `IsRegExp` abstract operation
			// https://tc39.es/ecma262/#sec-isregexp
			var isRegexp = function (it) {
			  var isRegExp;
			  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
			};

			// `RegExp.prototype.flags` getter implementation
			// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
			var regexpFlags = function () {
			  var that = anObject(this);
			  var result = '';
			  if (that.global) result += 'g';
			  if (that.ignoreCase) result += 'i';
			  if (that.multiline) result += 'm';
			  if (that.dotAll) result += 's';
			  if (that.unicode) result += 'u';
			  if (that.sticky) result += 'y';
			  return result;
			};

			// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
			// so we use an intermediate function.
			function RE(s, f) {
			  return RegExp(s, f);
			}

			var UNSUPPORTED_Y = fails(function () {
			  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
			  var re = RE('a', 'y');
			  re.lastIndex = 2;
			  return re.exec('abcd') != null;
			});

			var BROKEN_CARET = fails(function () {
			  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
			  var re = RE('^r', 'gy');
			  re.lastIndex = 2;
			  return re.exec('str') != null;
			});

			var regexpStickyHelpers = {
				UNSUPPORTED_Y: UNSUPPORTED_Y,
				BROKEN_CARET: BROKEN_CARET
			};

			var defineProperty$9 = objectDefineProperty.f;
			var getOwnPropertyNames$3 = objectGetOwnPropertyNames.f;





			var enforceInternalState = internalState.enforce;



			var MATCH$1 = wellKnownSymbol('match');
			var NativeRegExp = global_1.RegExp;
			var RegExpPrototype = NativeRegExp.prototype;
			var re1 = /a/g;
			var re2 = /a/g;

			// "new" should create a new object, old webkit bug
			var CORRECT_NEW = new NativeRegExp(re1) !== re1;

			var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y;

			var FORCED$f = descriptors && isForced_1('RegExp', (!CORRECT_NEW || UNSUPPORTED_Y$1 || fails(function () {
			  re2[MATCH$1] = false;
			  // RegExp constructor can alter flags and IsRegExp works correct with @@match
			  return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
			})));

			// `RegExp` constructor
			// https://tc39.es/ecma262/#sec-regexp-constructor
			if (FORCED$f) {
			  var RegExpWrapper = function RegExp(pattern, flags) {
			    var thisIsRegExp = this instanceof RegExpWrapper;
			    var patternIsRegExp = isRegexp(pattern);
			    var flagsAreUndefined = flags === undefined;
			    var sticky;

			    if (!thisIsRegExp && patternIsRegExp && pattern.constructor === RegExpWrapper && flagsAreUndefined) {
			      return pattern;
			    }

			    if (CORRECT_NEW) {
			      if (patternIsRegExp && !flagsAreUndefined) pattern = pattern.source;
			    } else if (pattern instanceof RegExpWrapper) {
			      if (flagsAreUndefined) flags = regexpFlags.call(pattern);
			      pattern = pattern.source;
			    }

			    if (UNSUPPORTED_Y$1) {
			      sticky = !!flags && flags.indexOf('y') > -1;
			      if (sticky) flags = flags.replace(/y/g, '');
			    }

			    var result = inheritIfRequired(
			      CORRECT_NEW ? new NativeRegExp(pattern, flags) : NativeRegExp(pattern, flags),
			      thisIsRegExp ? this : RegExpPrototype,
			      RegExpWrapper
			    );

			    if (UNSUPPORTED_Y$1 && sticky) {
			      var state = enforceInternalState(result);
			      state.sticky = true;
			    }

			    return result;
			  };
			  var proxy = function (key) {
			    key in RegExpWrapper || defineProperty$9(RegExpWrapper, key, {
			      configurable: true,
			      get: function () { return NativeRegExp[key]; },
			      set: function (it) { NativeRegExp[key] = it; }
			    });
			  };
			  var keys$3 = getOwnPropertyNames$3(NativeRegExp);
			  var index = 0;
			  while (keys$3.length > index) proxy(keys$3[index++]);
			  RegExpPrototype.constructor = RegExpWrapper;
			  RegExpWrapper.prototype = RegExpPrototype;
			  redefine(global_1, 'RegExp', RegExpWrapper);
			}

			// https://tc39.es/ecma262/#sec-get-regexp-@@species
			setSpecies('RegExp');

			var nativeExec = RegExp.prototype.exec;
			var nativeReplace = shared('native-string-replace', String.prototype.replace);

			var patchedExec = nativeExec;

			var UPDATES_LAST_INDEX_WRONG = (function () {
			  var re1 = /a/;
			  var re2 = /b*/g;
			  nativeExec.call(re1, 'a');
			  nativeExec.call(re2, 'a');
			  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
			})();

			var UNSUPPORTED_Y$2 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;

			// nonparticipating capturing group, copied from es5-shim's String#split patch.
			// eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing
			var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

			var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$2;

			if (PATCH) {
			  patchedExec = function exec(str) {
			    var re = this;
			    var lastIndex, reCopy, match, i;
			    var sticky = UNSUPPORTED_Y$2 && re.sticky;
			    var flags = regexpFlags.call(re);
			    var source = re.source;
			    var charsAdded = 0;
			    var strCopy = str;

			    if (sticky) {
			      flags = flags.replace('y', '');
			      if (flags.indexOf('g') === -1) {
			        flags += 'g';
			      }

			      strCopy = String(str).slice(re.lastIndex);
			      // Support anchored sticky behavior.
			      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
			        source = '(?: ' + source + ')';
			        strCopy = ' ' + strCopy;
			        charsAdded++;
			      }
			      // ^(? + rx + ) is needed, in combination with some str slicing, to
			      // simulate the 'y' flag.
			      reCopy = new RegExp('^(?:' + source + ')', flags);
			    }

			    if (NPCG_INCLUDED) {
			      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
			    }
			    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

			    match = nativeExec.call(sticky ? reCopy : re, strCopy);

			    if (sticky) {
			      if (match) {
			        match.input = match.input.slice(charsAdded);
			        match[0] = match[0].slice(charsAdded);
			        match.index = re.lastIndex;
			        re.lastIndex += match[0].length;
			      } else re.lastIndex = 0;
			    } else if (UPDATES_LAST_INDEX_WRONG && match) {
			      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
			    }
			    if (NPCG_INCLUDED && match && match.length > 1) {
			      // Fix browsers whose `exec` methods don't consistently return `undefined`
			      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
			      nativeReplace.call(match[0], reCopy, function () {
			        for (i = 1; i < arguments.length - 2; i++) {
			          if (arguments[i] === undefined) match[i] = undefined;
			        }
			      });
			    }

			    return match;
			  };
			}

			var regexpExec = patchedExec;

			// `RegExp.prototype.exec` method
			// https://tc39.es/ecma262/#sec-regexp.prototype.exec
			_export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
			  exec: regexpExec
			});

			var UNSUPPORTED_Y$3 = regexpStickyHelpers.UNSUPPORTED_Y;

			// `RegExp.prototype.flags` getter
			// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
			// eslint-disable-next-line es/no-regexp-prototype-flags -- required for testing
			if (descriptors && (/./g.flags != 'g' || UNSUPPORTED_Y$3)) {
			  objectDefineProperty.f(RegExp.prototype, 'flags', {
			    configurable: true,
			    get: regexpFlags
			  });
			}

			var UNSUPPORTED_Y$4 = regexpStickyHelpers.UNSUPPORTED_Y;
			var defineProperty$a = objectDefineProperty.f;
			var getInternalState$4 = internalState.get;
			var RegExpPrototype$1 = RegExp.prototype;

			// `RegExp.prototype.sticky` getter
			// https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky
			if (descriptors && UNSUPPORTED_Y$4) {
			  defineProperty$a(RegExp.prototype, 'sticky', {
			    configurable: true,
			    get: function () {
			      if (this === RegExpPrototype$1) return undefined;
			      // We can't use InternalStateModule.getterFor because
			      // we don't add metadata for regexps created by a literal.
			      if (this instanceof RegExp) {
			        return !!getInternalState$4(this).sticky;
			      }
			      throw TypeError('Incompatible receiver, RegExp required');
			    }
			  });
			}

			// TODO: Remove from `core-js@4` since it's moved to entry points




			var DELEGATES_TO_EXEC = function () {
			  var execCalled = false;
			  var re = /[ac]/;
			  re.exec = function () {
			    execCalled = true;
			    return /./.exec.apply(this, arguments);
			  };
			  return re.test('abc') === true && execCalled;
			}();

			var nativeTest = /./.test;

			// `RegExp.prototype.test` method
			// https://tc39.es/ecma262/#sec-regexp.prototype.test
			_export({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
			  test: function (str) {
			    if (typeof this.exec !== 'function') {
			      return nativeTest.call(this, str);
			    }
			    var result = this.exec(str);
			    if (result !== null && !isObject(result)) {
			      throw new Error('RegExp exec method returned something other than an Object or null');
			    }
			    return !!result;
			  }
			});

			var TO_STRING$1 = 'toString';
			var RegExpPrototype$2 = RegExp.prototype;
			var nativeToString = RegExpPrototype$2[TO_STRING$1];

			var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
			// FF44- RegExp#toString has a wrong name
			var INCORRECT_NAME = nativeToString.name != TO_STRING$1;

			// `RegExp.prototype.toString` method
			// https://tc39.es/ecma262/#sec-regexp.prototype.tostring
			if (NOT_GENERIC || INCORRECT_NAME) {
			  redefine(RegExp.prototype, TO_STRING$1, function toString() {
			    var R = anObject(this);
			    var p = String(R.source);
			    var rf = R.flags;
			    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype$2) ? regexpFlags.call(R) : rf);
			    return '/' + p + '/' + f;
			  }, { unsafe: true });
			}

			// `Set` constructor
			// https://tc39.es/ecma262/#sec-set-objects
			var es_set = collection('Set', function (init) {
			  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
			}, collectionStrong);

			// `String.prototype.{ codePointAt, at }` methods implementation
			var createMethod$6 = function (CONVERT_TO_STRING) {
			  return function ($this, pos) {
			    var S = String(requireObjectCoercible($this));
			    var position = toInteger(pos);
			    var size = S.length;
			    var first, second;
			    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
			    first = S.charCodeAt(position);
			    return first < 0xD800 || first > 0xDBFF || position + 1 === size
			      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
			        ? CONVERT_TO_STRING ? S.charAt(position) : first
			        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
			  };
			};

			var stringMultibyte = {
			  // `String.prototype.codePointAt` method
			  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
			  codeAt: createMethod$6(false),
			  // `String.prototype.at` method
			  // https://github.com/mathiasbynens/String.prototype.at
			  charAt: createMethod$6(true)
			};

			var codeAt = stringMultibyte.codeAt;

			// `String.prototype.codePointAt` method
			// https://tc39.es/ecma262/#sec-string.prototype.codepointat
			_export({ target: 'String', proto: true }, {
			  codePointAt: function codePointAt(pos) {
			    return codeAt(this, pos);
			  }
			});

			var notARegexp = function (it) {
			  if (isRegexp(it)) {
			    throw TypeError("The method doesn't accept regular expressions");
			  } return it;
			};

			var MATCH$2 = wellKnownSymbol('match');

			var correctIsRegexpLogic = function (METHOD_NAME) {
			  var regexp = /./;
			  try {
			    '/./'[METHOD_NAME](regexp);
			  } catch (error1) {
			    try {
			      regexp[MATCH$2] = false;
			      return '/./'[METHOD_NAME](regexp);
			    } catch (error2) { /* empty */ }
			  } return false;
			};

			var getOwnPropertyDescriptor$7 = objectGetOwnPropertyDescriptor.f;






			// eslint-disable-next-line es/no-string-prototype-endswith -- safe
			var $endsWith = ''.endsWith;
			var min$5 = Math.min;

			var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic('endsWith');
			// https://github.com/zloirock/core-js/pull/702
			var MDN_POLYFILL_BUG =  !CORRECT_IS_REGEXP_LOGIC && !!function () {
			  var descriptor = getOwnPropertyDescriptor$7(String.prototype, 'endsWith');
			  return descriptor && !descriptor.writable;
			}();

			// `String.prototype.endsWith` method
			// https://tc39.es/ecma262/#sec-string.prototype.endswith
			_export({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC }, {
			  endsWith: function endsWith(searchString /* , endPosition = @length */) {
			    var that = String(requireObjectCoercible(this));
			    notARegexp(searchString);
			    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
			    var len = toLength(that.length);
			    var end = endPosition === undefined ? len : min$5(toLength(endPosition), len);
			    var search = String(searchString);
			    return $endsWith
			      ? $endsWith.call(that, search, end)
			      : that.slice(end - search.length, end) === search;
			  }
			});

			var fromCharCode = String.fromCharCode;
			// eslint-disable-next-line es/no-string-fromcodepoint -- required for testing
			var $fromCodePoint = String.fromCodePoint;

			// length should be 1, old FF problem
			var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length != 1;

			// `String.fromCodePoint` method
			// https://tc39.es/ecma262/#sec-string.fromcodepoint
			_export({ target: 'String', stat: true, forced: INCORRECT_LENGTH }, {
			  // eslint-disable-next-line no-unused-vars -- required for `.length`
			  fromCodePoint: function fromCodePoint(x) {
			    var elements = [];
			    var length = arguments.length;
			    var i = 0;
			    var code;
			    while (length > i) {
			      code = +arguments[i++];
			      if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw RangeError(code + ' is not a valid code point');
			      elements.push(code < 0x10000
			        ? fromCharCode(code)
			        : fromCharCode(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00)
			      );
			    } return elements.join('');
			  }
			});

			// `String.prototype.includes` method
			// https://tc39.es/ecma262/#sec-string.prototype.includes
			_export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
			  includes: function includes(searchString /* , position = 0 */) {
			    return !!~String(requireObjectCoercible(this))
			      .indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
			  }
			});

			var charAt = stringMultibyte.charAt;



			var STRING_ITERATOR = 'String Iterator';
			var setInternalState$5 = internalState.set;
			var getInternalState$5 = internalState.getterFor(STRING_ITERATOR);

			// `String.prototype[@@iterator]` method
			// https://tc39.es/ecma262/#sec-string.prototype-@@iterator
			defineIterator(String, 'String', function (iterated) {
			  setInternalState$5(this, {
			    type: STRING_ITERATOR,
			    string: String(iterated),
			    index: 0
			  });
			// `%StringIteratorPrototype%.next` method
			// https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
			}, function next() {
			  var state = getInternalState$5(this);
			  var string = state.string;
			  var index = state.index;
			  var point;
			  if (index >= string.length) return { value: undefined, done: true };
			  point = charAt(string, index);
			  state.index += point.length;
			  return { value: point, done: false };
			});

			// TODO: Remove from `core-js@4` since it's moved to entry points






			var SPECIES$6 = wellKnownSymbol('species');

			var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
			  // #replace needs built-in support for named groups.
			  // #match works fine because it just return the exec results, even if it has
			  // a "grops" property.
			  var re = /./;
			  re.exec = function () {
			    var result = [];
			    result.groups = { a: '7' };
			    return result;
			  };
			  return ''.replace(re, '$<a>') !== '7';
			});

			// IE <= 11 replaces $0 with the whole match, as if it was $&
			// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
			var REPLACE_KEEPS_$0 = (function () {
			  // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
			  return 'a'.replace(/./, '$0') === '$0';
			})();

			var REPLACE = wellKnownSymbol('replace');
			// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
			var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
			  if (/./[REPLACE]) {
			    return /./[REPLACE]('a', '$0') === '';
			  }
			  return false;
			})();

			// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
			// Weex JS has frozen built-in prototypes, so use try / catch wrapper
			var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
			  // eslint-disable-next-line regexp/no-empty-group -- required for testing
			  var re = /(?:)/;
			  var originalExec = re.exec;
			  re.exec = function () { return originalExec.apply(this, arguments); };
			  var result = 'ab'.split(re);
			  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
			});

			var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
			  var SYMBOL = wellKnownSymbol(KEY);

			  var DELEGATES_TO_SYMBOL = !fails(function () {
			    // String methods call symbol-named RegEp methods
			    var O = {};
			    O[SYMBOL] = function () { return 7; };
			    return ''[KEY](O) != 7;
			  });

			  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
			    // Symbol-named RegExp methods call .exec
			    var execCalled = false;
			    var re = /a/;

			    if (KEY === 'split') {
			      // We can't use real regex here since it causes deoptimization
			      // and serious performance degradation in V8
			      // https://github.com/zloirock/core-js/issues/306
			      re = {};
			      // RegExp[@@split] doesn't call the regex's exec method, but first creates
			      // a new one. We need to return the patched regex when creating the new one.
			      re.constructor = {};
			      re.constructor[SPECIES$6] = function () { return re; };
			      re.flags = '';
			      re[SYMBOL] = /./[SYMBOL];
			    }

			    re.exec = function () { execCalled = true; return null; };

			    re[SYMBOL]('');
			    return !execCalled;
			  });

			  if (
			    !DELEGATES_TO_SYMBOL ||
			    !DELEGATES_TO_EXEC ||
			    (KEY === 'replace' && !(
			      REPLACE_SUPPORTS_NAMED_GROUPS &&
			      REPLACE_KEEPS_$0 &&
			      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
			    )) ||
			    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
			  ) {
			    var nativeRegExpMethod = /./[SYMBOL];
			    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
			      if (regexp.exec === RegExp.prototype.exec) {
			        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
			          // The native String method already delegates to @@method (this
			          // polyfilled function), leasing to infinite recursion.
			          // We avoid it by directly calling the native @@method method.
			          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
			        }
			        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
			      }
			      return { done: false };
			    }, {
			      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
			      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
			    });
			    var stringMethod = methods[0];
			    var regexMethod = methods[1];

			    redefine(String.prototype, KEY, stringMethod);
			    redefine(RegExp.prototype, SYMBOL, length == 2
			      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
			      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
			      ? function (string, arg) { return regexMethod.call(string, this, arg); }
			      // 21.2.5.6 RegExp.prototype[@@match](string)
			      // 21.2.5.9 RegExp.prototype[@@search](string)
			      : function (string) { return regexMethod.call(string, this); }
			    );
			  }

			  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
			};

			var charAt$1 = stringMultibyte.charAt;

			// `AdvanceStringIndex` abstract operation
			// https://tc39.es/ecma262/#sec-advancestringindex
			var advanceStringIndex = function (S, index, unicode) {
			  return index + (unicode ? charAt$1(S, index).length : 1);
			};

			// `RegExpExec` abstract operation
			// https://tc39.es/ecma262/#sec-regexpexec
			var regexpExecAbstract = function (R, S) {
			  var exec = R.exec;
			  if (typeof exec === 'function') {
			    var result = exec.call(R, S);
			    if (typeof result !== 'object') {
			      throw TypeError('RegExp exec method returned something other than an Object or null');
			    }
			    return result;
			  }

			  if (classofRaw(R) !== 'RegExp') {
			    throw TypeError('RegExp#exec called on incompatible receiver');
			  }

			  return regexpExec.call(R, S);
			};

			// @@match logic
			fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
			  return [
			    // `String.prototype.match` method
			    // https://tc39.es/ecma262/#sec-string.prototype.match
			    function match(regexp) {
			      var O = requireObjectCoercible(this);
			      var matcher = regexp == undefined ? undefined : regexp[MATCH];
			      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
			    },
			    // `RegExp.prototype[@@match]` method
			    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
			    function (regexp) {
			      var res = maybeCallNative(nativeMatch, regexp, this);
			      if (res.done) return res.value;

			      var rx = anObject(regexp);
			      var S = String(this);

			      if (!rx.global) return regexpExecAbstract(rx, S);

			      var fullUnicode = rx.unicode;
			      rx.lastIndex = 0;
			      var A = [];
			      var n = 0;
			      var result;
			      while ((result = regexpExecAbstract(rx, S)) !== null) {
			        var matchStr = String(result[0]);
			        A[n] = matchStr;
			        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
			        n++;
			      }
			      return n === 0 ? null : A;
			    }
			  ];
			});

			/* eslint-disable es/no-string-prototype-matchall -- safe */

















			var MATCH_ALL = wellKnownSymbol('matchAll');
			var REGEXP_STRING = 'RegExp String';
			var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
			var setInternalState$6 = internalState.set;
			var getInternalState$6 = internalState.getterFor(REGEXP_STRING_ITERATOR);
			var RegExpPrototype$3 = RegExp.prototype;
			var regExpBuiltinExec = RegExpPrototype$3.exec;
			var nativeMatchAll = ''.matchAll;

			var WORKS_WITH_NON_GLOBAL_REGEX = !!nativeMatchAll && !fails(function () {
			  'a'.matchAll(/./);
			});

			var regExpExec = function (R, S) {
			  var exec = R.exec;
			  var result;
			  if (typeof exec == 'function') {
			    result = exec.call(R, S);
			    if (typeof result != 'object') throw TypeError('Incorrect exec result');
			    return result;
			  } return regExpBuiltinExec.call(R, S);
			};

			// eslint-disable-next-line max-len -- ignore
			var $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator(regexp, string, global, fullUnicode) {
			  setInternalState$6(this, {
			    type: REGEXP_STRING_ITERATOR,
			    regexp: regexp,
			    string: string,
			    global: global,
			    unicode: fullUnicode,
			    done: false
			  });
			}, REGEXP_STRING, function next() {
			  var state = getInternalState$6(this);
			  if (state.done) return { value: undefined, done: true };
			  var R = state.regexp;
			  var S = state.string;
			  var match = regExpExec(R, S);
			  if (match === null) return { value: undefined, done: state.done = true };
			  if (state.global) {
			    if (String(match[0]) == '') R.lastIndex = advanceStringIndex(S, toLength(R.lastIndex), state.unicode);
			    return { value: match, done: false };
			  }
			  state.done = true;
			  return { value: match, done: false };
			});

			var $matchAll = function (string) {
			  var R = anObject(this);
			  var S = String(string);
			  var C, flagsValue, flags, matcher, global, fullUnicode;
			  C = speciesConstructor(R, RegExp);
			  flagsValue = R.flags;
			  if (flagsValue === undefined && R instanceof RegExp && !('flags' in RegExpPrototype$3)) {
			    flagsValue = regexpFlags.call(R);
			  }
			  flags = flagsValue === undefined ? '' : String(flagsValue);
			  matcher = new C(C === RegExp ? R.source : R, flags);
			  global = !!~flags.indexOf('g');
			  fullUnicode = !!~flags.indexOf('u');
			  matcher.lastIndex = toLength(R.lastIndex);
			  return new $RegExpStringIterator(matcher, S, global, fullUnicode);
			};

			// `String.prototype.matchAll` method
			// https://tc39.es/ecma262/#sec-string.prototype.matchall
			_export({ target: 'String', proto: true, forced: WORKS_WITH_NON_GLOBAL_REGEX }, {
			  matchAll: function matchAll(regexp) {
			    var O = requireObjectCoercible(this);
			    var flags, S, matcher, rx;
			    if (regexp != null) {
			      if (isRegexp(regexp)) {
			        flags = String(requireObjectCoercible('flags' in RegExpPrototype$3
			          ? regexp.flags
			          : regexpFlags.call(regexp)
			        ));
			        if (!~flags.indexOf('g')) throw TypeError('`.matchAll` does not allow non-global regexes');
			      }
			      if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll.apply(O, arguments);
			      matcher = regexp[MATCH_ALL];
			      if (matcher === undefined && isPure && classofRaw(regexp) == 'RegExp') matcher = $matchAll;
			      if (matcher != null) return aFunction$1(matcher).call(regexp, O);
			    } else if (WORKS_WITH_NON_GLOBAL_REGEX) return nativeMatchAll.apply(O, arguments);
			    S = String(O);
			    rx = new RegExp(regexp, 'g');
			    return  rx[MATCH_ALL](S);
			  }
			});

			 MATCH_ALL in RegExpPrototype$3 || createNonEnumerableProperty(RegExpPrototype$3, MATCH_ALL, $matchAll);

			// https://github.com/zloirock/core-js/issues/280


			// eslint-disable-next-line unicorn/no-unsafe-regex -- safe
			var stringPadWebkitBug = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(engineUserAgent);

			var $padEnd = stringPad.end;


			// `String.prototype.padEnd` method
			// https://tc39.es/ecma262/#sec-string.prototype.padend
			_export({ target: 'String', proto: true, forced: stringPadWebkitBug }, {
			  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
			    return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
			  }
			});

			var $padStart = stringPad.start;


			// `String.prototype.padStart` method
			// https://tc39.es/ecma262/#sec-string.prototype.padstart
			_export({ target: 'String', proto: true, forced: stringPadWebkitBug }, {
			  padStart: function padStart(maxLength /* , fillString = ' ' */) {
			    return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
			  }
			});

			// `String.raw` method
			// https://tc39.es/ecma262/#sec-string.raw
			_export({ target: 'String', stat: true }, {
			  raw: function raw(template) {
			    var rawTemplate = toIndexedObject(template.raw);
			    var literalSegments = toLength(rawTemplate.length);
			    var argumentsLength = arguments.length;
			    var elements = [];
			    var i = 0;
			    while (literalSegments > i) {
			      elements.push(String(rawTemplate[i++]));
			      if (i < argumentsLength) elements.push(String(arguments[i]));
			    } return elements.join('');
			  }
			});

			// `String.prototype.repeat` method
			// https://tc39.es/ecma262/#sec-string.prototype.repeat
			_export({ target: 'String', proto: true }, {
			  repeat: stringRepeat
			});

			var floor$6 = Math.floor;
			var replace = ''.replace;
			var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
			var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;

			// https://tc39.es/ecma262/#sec-getsubstitution
			var getSubstitution = function (matched, str, position, captures, namedCaptures, replacement) {
			  var tailPos = position + matched.length;
			  var m = captures.length;
			  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
			  if (namedCaptures !== undefined) {
			    namedCaptures = toObject(namedCaptures);
			    symbols = SUBSTITUTION_SYMBOLS;
			  }
			  return replace.call(replacement, symbols, function (match, ch) {
			    var capture;
			    switch (ch.charAt(0)) {
			      case '$': return '$';
			      case '&': return matched;
			      case '`': return str.slice(0, position);
			      case "'": return str.slice(tailPos);
			      case '<':
			        capture = namedCaptures[ch.slice(1, -1)];
			        break;
			      default: // \d\d?
			        var n = +ch;
			        if (n === 0) return match;
			        if (n > m) {
			          var f = floor$6(n / 10);
			          if (f === 0) return match;
			          if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
			          return match;
			        }
			        capture = captures[n - 1];
			    }
			    return capture === undefined ? '' : capture;
			  });
			};

			var max$3 = Math.max;
			var min$6 = Math.min;

			var maybeToString = function (it) {
			  return it === undefined ? it : String(it);
			};

			// @@replace logic
			fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
			  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
			  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
			  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

			  return [
			    // `String.prototype.replace` method
			    // https://tc39.es/ecma262/#sec-string.prototype.replace
			    function replace(searchValue, replaceValue) {
			      var O = requireObjectCoercible(this);
			      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
			      return replacer !== undefined
			        ? replacer.call(searchValue, O, replaceValue)
			        : nativeReplace.call(String(O), searchValue, replaceValue);
			    },
			    // `RegExp.prototype[@@replace]` method
			    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
			    function (regexp, replaceValue) {
			      if (
			        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
			        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
			      ) {
			        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
			        if (res.done) return res.value;
			      }

			      var rx = anObject(regexp);
			      var S = String(this);

			      var functionalReplace = typeof replaceValue === 'function';
			      if (!functionalReplace) replaceValue = String(replaceValue);

			      var global = rx.global;
			      if (global) {
			        var fullUnicode = rx.unicode;
			        rx.lastIndex = 0;
			      }
			      var results = [];
			      while (true) {
			        var result = regexpExecAbstract(rx, S);
			        if (result === null) break;

			        results.push(result);
			        if (!global) break;

			        var matchStr = String(result[0]);
			        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
			      }

			      var accumulatedResult = '';
			      var nextSourcePosition = 0;
			      for (var i = 0; i < results.length; i++) {
			        result = results[i];

			        var matched = String(result[0]);
			        var position = max$3(min$6(toInteger(result.index), S.length), 0);
			        var captures = [];
			        // NOTE: This is equivalent to
			        //   captures = result.slice(1).map(maybeToString)
			        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
			        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
			        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
			        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
			        var namedCaptures = result.groups;
			        if (functionalReplace) {
			          var replacerArgs = [matched].concat(captures, position, S);
			          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
			          var replacement = String(replaceValue.apply(undefined, replacerArgs));
			        } else {
			          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
			        }
			        if (position >= nextSourcePosition) {
			          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
			          nextSourcePosition = position + matched.length;
			        }
			      }
			      return accumulatedResult + S.slice(nextSourcePosition);
			    }
			  ];
			});

			var REPLACE$1 = wellKnownSymbol('replace');
			var RegExpPrototype$4 = RegExp.prototype;
			var max$4 = Math.max;

			var stringIndexOf = function (string, searchValue, fromIndex) {
			  if (fromIndex > string.length) return -1;
			  if (searchValue === '') return fromIndex;
			  return string.indexOf(searchValue, fromIndex);
			};

			// `String.prototype.replaceAll` method
			// https://tc39.es/ecma262/#sec-string.prototype.replaceall
			_export({ target: 'String', proto: true }, {
			  replaceAll: function replaceAll(searchValue, replaceValue) {
			    var O = requireObjectCoercible(this);
			    var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
			    var position = 0;
			    var endOfLastMatch = 0;
			    var result = '';
			    if (searchValue != null) {
			      IS_REG_EXP = isRegexp(searchValue);
			      if (IS_REG_EXP) {
			        flags = String(requireObjectCoercible('flags' in RegExpPrototype$4
			          ? searchValue.flags
			          : regexpFlags.call(searchValue)
			        ));
			        if (!~flags.indexOf('g')) throw TypeError('`.replaceAll` does not allow non-global regexes');
			      }
			      replacer = searchValue[REPLACE$1];
			      if (replacer !== undefined) {
			        return replacer.call(searchValue, O, replaceValue);
			      }
			    }
			    string = String(O);
			    searchString = String(searchValue);
			    functionalReplace = typeof replaceValue === 'function';
			    if (!functionalReplace) replaceValue = String(replaceValue);
			    searchLength = searchString.length;
			    advanceBy = max$4(1, searchLength);
			    position = stringIndexOf(string, searchString, 0);
			    while (position !== -1) {
			      if (functionalReplace) {
			        replacement = String(replaceValue(searchString, position, string));
			      } else {
			        replacement = getSubstitution(searchString, string, position, [], undefined, replaceValue);
			      }
			      result += string.slice(endOfLastMatch, position) + replacement;
			      endOfLastMatch = position + searchLength;
			      position = stringIndexOf(string, searchString, position + advanceBy);
			    }
			    if (endOfLastMatch < string.length) {
			      result += string.slice(endOfLastMatch);
			    }
			    return result;
			  }
			});

			// @@search logic
			fixRegexpWellKnownSymbolLogic('search', 1, function (SEARCH, nativeSearch, maybeCallNative) {
			  return [
			    // `String.prototype.search` method
			    // https://tc39.es/ecma262/#sec-string.prototype.search
			    function search(regexp) {
			      var O = requireObjectCoercible(this);
			      var searcher = regexp == undefined ? undefined : regexp[SEARCH];
			      return searcher !== undefined ? searcher.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
			    },
			    // `RegExp.prototype[@@search]` method
			    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
			    function (regexp) {
			      var res = maybeCallNative(nativeSearch, regexp, this);
			      if (res.done) return res.value;

			      var rx = anObject(regexp);
			      var S = String(this);

			      var previousLastIndex = rx.lastIndex;
			      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
			      var result = regexpExecAbstract(rx, S);
			      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
			      return result === null ? -1 : result.index;
			    }
			  ];
			});

			var UNSUPPORTED_Y$5 = regexpStickyHelpers.UNSUPPORTED_Y;
			var arrayPush = [].push;
			var min$7 = Math.min;
			var MAX_UINT32 = 0xFFFFFFFF;

			// @@split logic
			fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
			  var internalSplit;
			  if (
			    'abbc'.split(/(b)*/)[1] == 'c' ||
			    // eslint-disable-next-line regexp/no-empty-group -- required for testing
			    'test'.split(/(?:)/, -1).length != 4 ||
			    'ab'.split(/(?:ab)*/).length != 2 ||
			    '.'.split(/(.?)(.?)/).length != 4 ||
			    // eslint-disable-next-line regexp/no-assertion-capturing-group, regexp/no-empty-group -- required for testing
			    '.'.split(/()()/).length > 1 ||
			    ''.split(/.?/).length
			  ) {
			    // based on es5-shim implementation, need to rework it
			    internalSplit = function (separator, limit) {
			      var string = String(requireObjectCoercible(this));
			      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
			      if (lim === 0) return [];
			      if (separator === undefined) return [string];
			      // If `separator` is not a regex, use native split
			      if (!isRegexp(separator)) {
			        return nativeSplit.call(string, separator, lim);
			      }
			      var output = [];
			      var flags = (separator.ignoreCase ? 'i' : '') +
			                  (separator.multiline ? 'm' : '') +
			                  (separator.unicode ? 'u' : '') +
			                  (separator.sticky ? 'y' : '');
			      var lastLastIndex = 0;
			      // Make `global` and avoid `lastIndex` issues by working with a copy
			      var separatorCopy = new RegExp(separator.source, flags + 'g');
			      var match, lastIndex, lastLength;
			      while (match = regexpExec.call(separatorCopy, string)) {
			        lastIndex = separatorCopy.lastIndex;
			        if (lastIndex > lastLastIndex) {
			          output.push(string.slice(lastLastIndex, match.index));
			          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
			          lastLength = match[0].length;
			          lastLastIndex = lastIndex;
			          if (output.length >= lim) break;
			        }
			        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
			      }
			      if (lastLastIndex === string.length) {
			        if (lastLength || !separatorCopy.test('')) output.push('');
			      } else output.push(string.slice(lastLastIndex));
			      return output.length > lim ? output.slice(0, lim) : output;
			    };
			  // Chakra, V8
			  } else if ('0'.split(undefined, 0).length) {
			    internalSplit = function (separator, limit) {
			      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
			    };
			  } else internalSplit = nativeSplit;

			  return [
			    // `String.prototype.split` method
			    // https://tc39.es/ecma262/#sec-string.prototype.split
			    function split(separator, limit) {
			      var O = requireObjectCoercible(this);
			      var splitter = separator == undefined ? undefined : separator[SPLIT];
			      return splitter !== undefined
			        ? splitter.call(separator, O, limit)
			        : internalSplit.call(String(O), separator, limit);
			    },
			    // `RegExp.prototype[@@split]` method
			    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
			    //
			    // NOTE: This cannot be properly polyfilled in engines that don't support
			    // the 'y' flag.
			    function (regexp, limit) {
			      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
			      if (res.done) return res.value;

			      var rx = anObject(regexp);
			      var S = String(this);
			      var C = speciesConstructor(rx, RegExp);

			      var unicodeMatching = rx.unicode;
			      var flags = (rx.ignoreCase ? 'i' : '') +
			                  (rx.multiline ? 'm' : '') +
			                  (rx.unicode ? 'u' : '') +
			                  (UNSUPPORTED_Y$5 ? 'g' : 'y');

			      // ^(? + rx + ) is needed, in combination with some S slicing, to
			      // simulate the 'y' flag.
			      var splitter = new C(UNSUPPORTED_Y$5 ? '^(?:' + rx.source + ')' : rx, flags);
			      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
			      if (lim === 0) return [];
			      if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
			      var p = 0;
			      var q = 0;
			      var A = [];
			      while (q < S.length) {
			        splitter.lastIndex = UNSUPPORTED_Y$5 ? 0 : q;
			        var z = regexpExecAbstract(splitter, UNSUPPORTED_Y$5 ? S.slice(q) : S);
			        var e;
			        if (
			          z === null ||
			          (e = min$7(toLength(splitter.lastIndex + (UNSUPPORTED_Y$5 ? q : 0)), S.length)) === p
			        ) {
			          q = advanceStringIndex(S, q, unicodeMatching);
			        } else {
			          A.push(S.slice(p, q));
			          if (A.length === lim) return A;
			          for (var i = 1; i <= z.length - 1; i++) {
			            A.push(z[i]);
			            if (A.length === lim) return A;
			          }
			          q = p = e;
			        }
			      }
			      A.push(S.slice(p));
			      return A;
			    }
			  ];
			}, UNSUPPORTED_Y$5);

			var getOwnPropertyDescriptor$8 = objectGetOwnPropertyDescriptor.f;






			// eslint-disable-next-line es/no-string-prototype-startswith -- safe
			var $startsWith = ''.startsWith;
			var min$8 = Math.min;

			var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegexpLogic('startsWith');
			// https://github.com/zloirock/core-js/pull/702
			var MDN_POLYFILL_BUG$1 =  !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
			  var descriptor = getOwnPropertyDescriptor$8(String.prototype, 'startsWith');
			  return descriptor && !descriptor.writable;
			}();

			// `String.prototype.startsWith` method
			// https://tc39.es/ecma262/#sec-string.prototype.startswith
			_export({ target: 'String', proto: true, forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1 }, {
			  startsWith: function startsWith(searchString /* , position = 0 */) {
			    var that = String(requireObjectCoercible(this));
			    notARegexp(searchString);
			    var index = toLength(min$8(arguments.length > 1 ? arguments[1] : undefined, that.length));
			    var search = String(searchString);
			    return $startsWith
			      ? $startsWith.call(that, search, index)
			      : that.slice(index, index + search.length) === search;
			  }
			});

			var non = '\u200B\u0085\u180E';

			// check that a method works with the correct list
			// of whitespaces and has a correct name
			var stringTrimForced = function (METHOD_NAME) {
			  return fails(function () {
			    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
			  });
			};

			var $trim = stringTrim.trim;


			// `String.prototype.trim` method
			// https://tc39.es/ecma262/#sec-string.prototype.trim
			_export({ target: 'String', proto: true, forced: stringTrimForced('trim') }, {
			  trim: function trim() {
			    return $trim(this);
			  }
			});

			var $trimEnd = stringTrim.end;


			var FORCED$g = stringTrimForced('trimEnd');

			var trimEnd = FORCED$g ? function trimEnd() {
			  return $trimEnd(this);
			// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
			} : ''.trimEnd;

			// `String.prototype.{ trimEnd, trimRight }` methods
			// https://tc39.es/ecma262/#sec-string.prototype.trimend
			// https://tc39.es/ecma262/#String.prototype.trimright
			_export({ target: 'String', proto: true, forced: FORCED$g }, {
			  trimEnd: trimEnd,
			  trimRight: trimEnd
			});

			var $trimStart = stringTrim.start;


			var FORCED$h = stringTrimForced('trimStart');

			var trimStart = FORCED$h ? function trimStart() {
			  return $trimStart(this);
			// eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
			} : ''.trimStart;

			// `String.prototype.{ trimStart, trimLeft }` methods
			// https://tc39.es/ecma262/#sec-string.prototype.trimstart
			// https://tc39.es/ecma262/#String.prototype.trimleft
			_export({ target: 'String', proto: true, forced: FORCED$h }, {
			  trimStart: trimStart,
			  trimLeft: trimStart
			});

			var quot = /"/g;

			// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
			// https://tc39.es/ecma262/#sec-createhtml
			var createHtml = function (string, tag, attribute, value) {
			  var S = String(requireObjectCoercible(string));
			  var p1 = '<' + tag;
			  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
			  return p1 + '>' + S + '</' + tag + '>';
			};

			// check the existence of a method, lowercase
			// of a tag and escaping quotes in arguments
			var stringHtmlForced = function (METHOD_NAME) {
			  return fails(function () {
			    var test = ''[METHOD_NAME]('"');
			    return test !== test.toLowerCase() || test.split('"').length > 3;
			  });
			};

			// `String.prototype.anchor` method
			// https://tc39.es/ecma262/#sec-string.prototype.anchor
			_export({ target: 'String', proto: true, forced: stringHtmlForced('anchor') }, {
			  anchor: function anchor(name) {
			    return createHtml(this, 'a', 'name', name);
			  }
			});

			// `String.prototype.big` method
			// https://tc39.es/ecma262/#sec-string.prototype.big
			_export({ target: 'String', proto: true, forced: stringHtmlForced('big') }, {
			  big: function big() {
			    return createHtml(this, 'big', '', '');
			  }
			});

			// `String.prototype.blink` method
			// https://tc39.es/ecma262/#sec-string.prototype.blink
			_export({ target: 'String', proto: true, forced: stringHtmlForced('blink') }, {
			  blink: function blink() {
			    return createHtml(this, 'blink', '', '');
			  }
			});

			// `String.prototype.bold` method
			// https://tc39.es/ecma262/#sec-string.prototype.bold
			_export({ target: 'String', proto: true, forced: stringHtmlForced('bold') }, {
			  bold: function bold() {
			    return createHtml(this, 'b', '', '');
			  }
			});

			// `String.prototype.fixed` method
			// https://tc39.es/ecma262/#sec-string.prototype.fixed
			_export({ target: 'String', proto: true, forced: stringHtmlForced('fixed') }, {
			  fixed: function fixed() {
			    return createHtml(this, 'tt', '', '');
			  }
			});

			// `String.prototype.fontcolor` method
			// https://tc39.es/ecma262/#sec-string.prototype.fontcolor
			_export({ target: 'String', proto: true, forced: stringHtmlForced('fontcolor') }, {
			  fontcolor: function fontcolor(color) {
			    return createHtml(this, 'font', 'color', color);
			  }
			});

			// `String.prototype.fontsize` method
			// https://tc39.es/ecma262/#sec-string.prototype.fontsize
			_export({ target: 'String', proto: true, forced: stringHtmlForced('fontsize') }, {
			  fontsize: function fontsize(size) {
			    return createHtml(this, 'font', 'size', size);
			  }
			});

			// `String.prototype.italics` method
			// https://tc39.es/ecma262/#sec-string.prototype.italics
			_export({ target: 'String', proto: true, forced: stringHtmlForced('italics') }, {
			  italics: function italics() {
			    return createHtml(this, 'i', '', '');
			  }
			});

			// `String.prototype.link` method
			// https://tc39.es/ecma262/#sec-string.prototype.link
			_export({ target: 'String', proto: true, forced: stringHtmlForced('link') }, {
			  link: function link(url) {
			    return createHtml(this, 'a', 'href', url);
			  }
			});

			// `String.prototype.small` method
			// https://tc39.es/ecma262/#sec-string.prototype.small
			_export({ target: 'String', proto: true, forced: stringHtmlForced('small') }, {
			  small: function small() {
			    return createHtml(this, 'small', '', '');
			  }
			});

			// `String.prototype.strike` method
			// https://tc39.es/ecma262/#sec-string.prototype.strike
			_export({ target: 'String', proto: true, forced: stringHtmlForced('strike') }, {
			  strike: function strike() {
			    return createHtml(this, 'strike', '', '');
			  }
			});

			// `String.prototype.sub` method
			// https://tc39.es/ecma262/#sec-string.prototype.sub
			_export({ target: 'String', proto: true, forced: stringHtmlForced('sub') }, {
			  sub: function sub() {
			    return createHtml(this, 'sub', '', '');
			  }
			});

			// `String.prototype.sup` method
			// https://tc39.es/ecma262/#sec-string.prototype.sup
			_export({ target: 'String', proto: true, forced: stringHtmlForced('sup') }, {
			  sup: function sup() {
			    return createHtml(this, 'sup', '', '');
			  }
			});

			/* eslint-disable no-new -- required for testing */



			var NATIVE_ARRAY_BUFFER_VIEWS$2 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;

			var ArrayBuffer$3 = global_1.ArrayBuffer;
			var Int8Array$2 = global_1.Int8Array;

			var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS$2 || !fails(function () {
			  Int8Array$2(1);
			}) || !fails(function () {
			  new Int8Array$2(-1);
			}) || !checkCorrectnessOfIteration(function (iterable) {
			  new Int8Array$2();
			  new Int8Array$2(null);
			  new Int8Array$2(1.5);
			  new Int8Array$2(iterable);
			}, true) || fails(function () {
			  // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
			  return new Int8Array$2(new ArrayBuffer$3(2), 1, undefined).length !== 1;
			});

			var toPositiveInteger = function (it) {
			  var result = toInteger(it);
			  if (result < 0) throw RangeError("The argument can't be less than 0");
			  return result;
			};

			var toOffset = function (it, BYTES) {
			  var offset = toPositiveInteger(it);
			  if (offset % BYTES) throw RangeError('Wrong offset');
			  return offset;
			};

			var aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor;

			var typedArrayFrom = function from(source /* , mapfn, thisArg */) {
			  var O = toObject(source);
			  var argumentsLength = arguments.length;
			  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
			  var mapping = mapfn !== undefined;
			  var iteratorMethod = getIteratorMethod(O);
			  var i, length, result, step, iterator, next;
			  if (iteratorMethod != undefined && !isArrayIteratorMethod(iteratorMethod)) {
			    iterator = iteratorMethod.call(O);
			    next = iterator.next;
			    O = [];
			    while (!(step = next.call(iterator)).done) {
			      O.push(step.value);
			    }
			  }
			  if (mapping && argumentsLength > 2) {
			    mapfn = functionBindContext(mapfn, arguments[2], 2);
			  }
			  length = toLength(O.length);
			  result = new (aTypedArrayConstructor$1(this))(length);
			  for (i = 0; length > i; i++) {
			    result[i] = mapping ? mapfn(O[i], i) : O[i];
			  }
			  return result;
			};

			var typedArrayConstructor = createCommonjsModule(function (module) {


















			var getOwnPropertyNames = objectGetOwnPropertyNames.f;

			var forEach = arrayIteration.forEach;






			var getInternalState = internalState.get;
			var setInternalState = internalState.set;
			var nativeDefineProperty = objectDefineProperty.f;
			var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
			var round = Math.round;
			var RangeError = global_1.RangeError;
			var ArrayBuffer = arrayBuffer.ArrayBuffer;
			var DataView = arrayBuffer.DataView;
			var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
			var TYPED_ARRAY_TAG = arrayBufferViewCore.TYPED_ARRAY_TAG;
			var TypedArray = arrayBufferViewCore.TypedArray;
			var TypedArrayPrototype = arrayBufferViewCore.TypedArrayPrototype;
			var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;
			var isTypedArray = arrayBufferViewCore.isTypedArray;
			var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
			var WRONG_LENGTH = 'Wrong length';

			var fromList = function (C, list) {
			  var index = 0;
			  var length = list.length;
			  var result = new (aTypedArrayConstructor(C))(length);
			  while (length > index) result[index] = list[index++];
			  return result;
			};

			var addGetter = function (it, key) {
			  nativeDefineProperty(it, key, { get: function () {
			    return getInternalState(this)[key];
			  } });
			};

			var isArrayBuffer = function (it) {
			  var klass;
			  return it instanceof ArrayBuffer || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
			};

			var isTypedArrayIndex = function (target, key) {
			  return isTypedArray(target)
			    && typeof key != 'symbol'
			    && key in target
			    && String(+key) == String(key);
			};

			var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
			  return isTypedArrayIndex(target, key = toPrimitive(key, true))
			    ? createPropertyDescriptor(2, target[key])
			    : nativeGetOwnPropertyDescriptor(target, key);
			};

			var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
			  if (isTypedArrayIndex(target, key = toPrimitive(key, true))
			    && isObject(descriptor)
			    && has(descriptor, 'value')
			    && !has(descriptor, 'get')
			    && !has(descriptor, 'set')
			    // TODO: add validation descriptor w/o calling accessors
			    && !descriptor.configurable
			    && (!has(descriptor, 'writable') || descriptor.writable)
			    && (!has(descriptor, 'enumerable') || descriptor.enumerable)
			  ) {
			    target[key] = descriptor.value;
			    return target;
			  } return nativeDefineProperty(target, key, descriptor);
			};

			if (descriptors) {
			  if (!NATIVE_ARRAY_BUFFER_VIEWS) {
			    objectGetOwnPropertyDescriptor.f = wrappedGetOwnPropertyDescriptor;
			    objectDefineProperty.f = wrappedDefineProperty;
			    addGetter(TypedArrayPrototype, 'buffer');
			    addGetter(TypedArrayPrototype, 'byteOffset');
			    addGetter(TypedArrayPrototype, 'byteLength');
			    addGetter(TypedArrayPrototype, 'length');
			  }

			  _export({ target: 'Object', stat: true, forced: !NATIVE_ARRAY_BUFFER_VIEWS }, {
			    getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
			    defineProperty: wrappedDefineProperty
			  });

			  module.exports = function (TYPE, wrapper, CLAMPED) {
			    var BYTES = TYPE.match(/\d+$/)[0] / 8;
			    var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
			    var GETTER = 'get' + TYPE;
			    var SETTER = 'set' + TYPE;
			    var NativeTypedArrayConstructor = global_1[CONSTRUCTOR_NAME];
			    var TypedArrayConstructor = NativeTypedArrayConstructor;
			    var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
			    var exported = {};

			    var getter = function (that, index) {
			      var data = getInternalState(that);
			      return data.view[GETTER](index * BYTES + data.byteOffset, true);
			    };

			    var setter = function (that, index, value) {
			      var data = getInternalState(that);
			      if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
			      data.view[SETTER](index * BYTES + data.byteOffset, value, true);
			    };

			    var addElement = function (that, index) {
			      nativeDefineProperty(that, index, {
			        get: function () {
			          return getter(this, index);
			        },
			        set: function (value) {
			          return setter(this, index, value);
			        },
			        enumerable: true
			      });
			    };

			    if (!NATIVE_ARRAY_BUFFER_VIEWS) {
			      TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
			        anInstance(that, TypedArrayConstructor, CONSTRUCTOR_NAME);
			        var index = 0;
			        var byteOffset = 0;
			        var buffer, byteLength, length;
			        if (!isObject(data)) {
			          length = toIndex(data);
			          byteLength = length * BYTES;
			          buffer = new ArrayBuffer(byteLength);
			        } else if (isArrayBuffer(data)) {
			          buffer = data;
			          byteOffset = toOffset(offset, BYTES);
			          var $len = data.byteLength;
			          if ($length === undefined) {
			            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
			            byteLength = $len - byteOffset;
			            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
			          } else {
			            byteLength = toLength($length) * BYTES;
			            if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
			          }
			          length = byteLength / BYTES;
			        } else if (isTypedArray(data)) {
			          return fromList(TypedArrayConstructor, data);
			        } else {
			          return typedArrayFrom.call(TypedArrayConstructor, data);
			        }
			        setInternalState(that, {
			          buffer: buffer,
			          byteOffset: byteOffset,
			          byteLength: byteLength,
			          length: length,
			          view: new DataView(buffer)
			        });
			        while (index < length) addElement(that, index++);
			      });

			      if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
			      TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = objectCreate(TypedArrayPrototype);
			    } else if (typedArrayConstructorsRequireWrappers) {
			      TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
			        anInstance(dummy, TypedArrayConstructor, CONSTRUCTOR_NAME);
			        return inheritIfRequired(function () {
			          if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
			          if (isArrayBuffer(data)) return $length !== undefined
			            ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length)
			            : typedArrayOffset !== undefined
			              ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES))
			              : new NativeTypedArrayConstructor(data);
			          if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
			          return typedArrayFrom.call(TypedArrayConstructor, data);
			        }(), dummy, TypedArrayConstructor);
			      });

			      if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
			      forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
			        if (!(key in TypedArrayConstructor)) {
			          createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
			        }
			      });
			      TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
			    }

			    if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
			      createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
			    }

			    if (TYPED_ARRAY_TAG) {
			      createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
			    }

			    exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;

			    _export({
			      global: true, forced: TypedArrayConstructor != NativeTypedArrayConstructor, sham: !NATIVE_ARRAY_BUFFER_VIEWS
			    }, exported);

			    if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
			      createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
			    }

			    if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
			      createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
			    }

			    setSpecies(CONSTRUCTOR_NAME);
			  };
			} else module.exports = function () { /* empty */ };
			});

			// `Float32Array` constructor
			// https://tc39.es/ecma262/#sec-typedarray-objects
			typedArrayConstructor('Float32', function (init) {
			  return function Float32Array(data, byteOffset, length) {
			    return init(this, data, byteOffset, length);
			  };
			});

			// `Float64Array` constructor
			// https://tc39.es/ecma262/#sec-typedarray-objects
			typedArrayConstructor('Float64', function (init) {
			  return function Float64Array(data, byteOffset, length) {
			    return init(this, data, byteOffset, length);
			  };
			});

			// `Int8Array` constructor
			// https://tc39.es/ecma262/#sec-typedarray-objects
			typedArrayConstructor('Int8', function (init) {
			  return function Int8Array(data, byteOffset, length) {
			    return init(this, data, byteOffset, length);
			  };
			});

			// `Int16Array` constructor
			// https://tc39.es/ecma262/#sec-typedarray-objects
			typedArrayConstructor('Int16', function (init) {
			  return function Int16Array(data, byteOffset, length) {
			    return init(this, data, byteOffset, length);
			  };
			});

			// `Int32Array` constructor
			// https://tc39.es/ecma262/#sec-typedarray-objects
			typedArrayConstructor('Int32', function (init) {
			  return function Int32Array(data, byteOffset, length) {
			    return init(this, data, byteOffset, length);
			  };
			});

			// `Uint8Array` constructor
			// https://tc39.es/ecma262/#sec-typedarray-objects
			typedArrayConstructor('Uint8', function (init) {
			  return function Uint8Array(data, byteOffset, length) {
			    return init(this, data, byteOffset, length);
			  };
			});

			// `Uint8ClampedArray` constructor
			// https://tc39.es/ecma262/#sec-typedarray-objects
			typedArrayConstructor('Uint8', function (init) {
			  return function Uint8ClampedArray(data, byteOffset, length) {
			    return init(this, data, byteOffset, length);
			  };
			}, true);

			// `Uint16Array` constructor
			// https://tc39.es/ecma262/#sec-typedarray-objects
			typedArrayConstructor('Uint16', function (init) {
			  return function Uint16Array(data, byteOffset, length) {
			    return init(this, data, byteOffset, length);
			  };
			});

			// `Uint32Array` constructor
			// https://tc39.es/ecma262/#sec-typedarray-objects
			typedArrayConstructor('Uint32', function (init) {
			  return function Uint32Array(data, byteOffset, length) {
			    return init(this, data, byteOffset, length);
			  };
			});

			var aTypedArray$1 = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$1 = arrayBufferViewCore.exportTypedArrayMethod;

			// `%TypedArray%.prototype.copyWithin` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin
			exportTypedArrayMethod$1('copyWithin', function copyWithin(target, start /* , end */) {
			  return arrayCopyWithin.call(aTypedArray$1(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
			});

			var $every$1 = arrayIteration.every;

			var aTypedArray$2 = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$2 = arrayBufferViewCore.exportTypedArrayMethod;

			// `%TypedArray%.prototype.every` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.every
			exportTypedArrayMethod$2('every', function every(callbackfn /* , thisArg */) {
			  return $every$1(aTypedArray$2(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
			});

			var aTypedArray$3 = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$3 = arrayBufferViewCore.exportTypedArrayMethod;

			// `%TypedArray%.prototype.fill` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill
			// eslint-disable-next-line no-unused-vars -- required for `.length`
			exportTypedArrayMethod$3('fill', function fill(value /* , start, end */) {
			  return arrayFill.apply(aTypedArray$3(this), arguments);
			});

			var aTypedArrayConstructor$2 = arrayBufferViewCore.aTypedArrayConstructor;


			var typedArrayFromSpeciesAndList = function (instance, list) {
			  var C = speciesConstructor(instance, instance.constructor);
			  var index = 0;
			  var length = list.length;
			  var result = new (aTypedArrayConstructor$2(C))(length);
			  while (length > index) result[index] = list[index++];
			  return result;
			};

			var $filter$1 = arrayIteration.filter;


			var aTypedArray$4 = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$4 = arrayBufferViewCore.exportTypedArrayMethod;

			// `%TypedArray%.prototype.filter` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter
			exportTypedArrayMethod$4('filter', function filter(callbackfn /* , thisArg */) {
			  var list = $filter$1(aTypedArray$4(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
			  return typedArrayFromSpeciesAndList(this, list);
			});

			var $find$1 = arrayIteration.find;

			var aTypedArray$5 = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$5 = arrayBufferViewCore.exportTypedArrayMethod;

			// `%TypedArray%.prototype.find` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.find
			exportTypedArrayMethod$5('find', function find(predicate /* , thisArg */) {
			  return $find$1(aTypedArray$5(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
			});

			var $findIndex$1 = arrayIteration.findIndex;

			var aTypedArray$6 = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$6 = arrayBufferViewCore.exportTypedArrayMethod;

			// `%TypedArray%.prototype.findIndex` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex
			exportTypedArrayMethod$6('findIndex', function findIndex(predicate /* , thisArg */) {
			  return $findIndex$1(aTypedArray$6(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
			});

			var $forEach$2 = arrayIteration.forEach;

			var aTypedArray$7 = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$7 = arrayBufferViewCore.exportTypedArrayMethod;

			// `%TypedArray%.prototype.forEach` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach
			exportTypedArrayMethod$7('forEach', function forEach(callbackfn /* , thisArg */) {
			  $forEach$2(aTypedArray$7(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
			});

			var exportTypedArrayStaticMethod$1 = arrayBufferViewCore.exportTypedArrayStaticMethod;


			// `%TypedArray%.from` method
			// https://tc39.es/ecma262/#sec-%typedarray%.from
			exportTypedArrayStaticMethod$1('from', typedArrayFrom, typedArrayConstructorsRequireWrappers);

			var $includes$1 = arrayIncludes.includes;

			var aTypedArray$8 = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$8 = arrayBufferViewCore.exportTypedArrayMethod;

			// `%TypedArray%.prototype.includes` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes
			exportTypedArrayMethod$8('includes', function includes(searchElement /* , fromIndex */) {
			  return $includes$1(aTypedArray$8(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
			});

			var $indexOf$1 = arrayIncludes.indexOf;

			var aTypedArray$9 = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$9 = arrayBufferViewCore.exportTypedArrayMethod;

			// `%TypedArray%.prototype.indexOf` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof
			exportTypedArrayMethod$9('indexOf', function indexOf(searchElement /* , fromIndex */) {
			  return $indexOf$1(aTypedArray$9(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
			});

			var ITERATOR$5 = wellKnownSymbol('iterator');
			var Uint8Array = global_1.Uint8Array;
			var arrayValues = es_array_iterator.values;
			var arrayKeys = es_array_iterator.keys;
			var arrayEntries = es_array_iterator.entries;
			var aTypedArray$a = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$a = arrayBufferViewCore.exportTypedArrayMethod;
			var nativeTypedArrayIterator = Uint8Array && Uint8Array.prototype[ITERATOR$5];

			var CORRECT_ITER_NAME = !!nativeTypedArrayIterator
			  && (nativeTypedArrayIterator.name == 'values' || nativeTypedArrayIterator.name == undefined);

			var typedArrayValues = function values() {
			  return arrayValues.call(aTypedArray$a(this));
			};

			// `%TypedArray%.prototype.entries` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries
			exportTypedArrayMethod$a('entries', function entries() {
			  return arrayEntries.call(aTypedArray$a(this));
			});
			// `%TypedArray%.prototype.keys` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys
			exportTypedArrayMethod$a('keys', function keys() {
			  return arrayKeys.call(aTypedArray$a(this));
			});
			// `%TypedArray%.prototype.values` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.values
			exportTypedArrayMethod$a('values', typedArrayValues, !CORRECT_ITER_NAME);
			// `%TypedArray%.prototype[@@iterator]` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator
			exportTypedArrayMethod$a(ITERATOR$5, typedArrayValues, !CORRECT_ITER_NAME);

			var aTypedArray$b = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$b = arrayBufferViewCore.exportTypedArrayMethod;
			var $join = [].join;

			// `%TypedArray%.prototype.join` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.join
			// eslint-disable-next-line no-unused-vars -- required for `.length`
			exportTypedArrayMethod$b('join', function join(separator) {
			  return $join.apply(aTypedArray$b(this), arguments);
			});

			var aTypedArray$c = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$c = arrayBufferViewCore.exportTypedArrayMethod;

			// `%TypedArray%.prototype.lastIndexOf` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof
			// eslint-disable-next-line no-unused-vars -- required for `.length`
			exportTypedArrayMethod$c('lastIndexOf', function lastIndexOf(searchElement /* , fromIndex */) {
			  return arrayLastIndexOf.apply(aTypedArray$c(this), arguments);
			});

			var $map$1 = arrayIteration.map;


			var aTypedArray$d = arrayBufferViewCore.aTypedArray;
			var aTypedArrayConstructor$3 = arrayBufferViewCore.aTypedArrayConstructor;
			var exportTypedArrayMethod$d = arrayBufferViewCore.exportTypedArrayMethod;

			// `%TypedArray%.prototype.map` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.map
			exportTypedArrayMethod$d('map', function map(mapfn /* , thisArg */) {
			  return $map$1(aTypedArray$d(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
			    return new (aTypedArrayConstructor$3(speciesConstructor(O, O.constructor)))(length);
			  });
			});

			var aTypedArrayConstructor$4 = arrayBufferViewCore.aTypedArrayConstructor;
			var exportTypedArrayStaticMethod$2 = arrayBufferViewCore.exportTypedArrayStaticMethod;

			// `%TypedArray%.of` method
			// https://tc39.es/ecma262/#sec-%typedarray%.of
			exportTypedArrayStaticMethod$2('of', function of(/* ...items */) {
			  var index = 0;
			  var length = arguments.length;
			  var result = new (aTypedArrayConstructor$4(this))(length);
			  while (length > index) result[index] = arguments[index++];
			  return result;
			}, typedArrayConstructorsRequireWrappers);

			var $reduce$1 = arrayReduce.left;

			var aTypedArray$e = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$e = arrayBufferViewCore.exportTypedArrayMethod;

			// `%TypedArray%.prototype.reduce` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce
			exportTypedArrayMethod$e('reduce', function reduce(callbackfn /* , initialValue */) {
			  return $reduce$1(aTypedArray$e(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
			});

			var $reduceRight$1 = arrayReduce.right;

			var aTypedArray$f = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$f = arrayBufferViewCore.exportTypedArrayMethod;

			// `%TypedArray%.prototype.reduceRicht` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright
			exportTypedArrayMethod$f('reduceRight', function reduceRight(callbackfn /* , initialValue */) {
			  return $reduceRight$1(aTypedArray$f(this), callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
			});

			var aTypedArray$g = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$g = arrayBufferViewCore.exportTypedArrayMethod;
			var floor$7 = Math.floor;

			// `%TypedArray%.prototype.reverse` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse
			exportTypedArrayMethod$g('reverse', function reverse() {
			  var that = this;
			  var length = aTypedArray$g(that).length;
			  var middle = floor$7(length / 2);
			  var index = 0;
			  var value;
			  while (index < middle) {
			    value = that[index];
			    that[index++] = that[--length];
			    that[length] = value;
			  } return that;
			});

			var aTypedArray$h = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$h = arrayBufferViewCore.exportTypedArrayMethod;

			var FORCED$i = fails(function () {
			  // eslint-disable-next-line es/no-typed-arrays -- required for testing
			  new Int8Array(1).set({});
			});

			// `%TypedArray%.prototype.set` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
			exportTypedArrayMethod$h('set', function set(arrayLike /* , offset */) {
			  aTypedArray$h(this);
			  var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
			  var length = this.length;
			  var src = toObject(arrayLike);
			  var len = toLength(src.length);
			  var index = 0;
			  if (len + offset > length) throw RangeError('Wrong length');
			  while (index < len) this[offset + index] = src[index++];
			}, FORCED$i);

			var aTypedArray$i = arrayBufferViewCore.aTypedArray;
			var aTypedArrayConstructor$5 = arrayBufferViewCore.aTypedArrayConstructor;
			var exportTypedArrayMethod$i = arrayBufferViewCore.exportTypedArrayMethod;
			var $slice = [].slice;

			var FORCED$j = fails(function () {
			  // eslint-disable-next-line es/no-typed-arrays -- required for testing
			  new Int8Array(1).slice();
			});

			// `%TypedArray%.prototype.slice` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice
			exportTypedArrayMethod$i('slice', function slice(start, end) {
			  var list = $slice.call(aTypedArray$i(this), start, end);
			  var C = speciesConstructor(this, this.constructor);
			  var index = 0;
			  var length = list.length;
			  var result = new (aTypedArrayConstructor$5(C))(length);
			  while (length > index) result[index] = list[index++];
			  return result;
			}, FORCED$j);

			var $some$1 = arrayIteration.some;

			var aTypedArray$j = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$j = arrayBufferViewCore.exportTypedArrayMethod;

			// `%TypedArray%.prototype.some` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.some
			exportTypedArrayMethod$j('some', function some(callbackfn /* , thisArg */) {
			  return $some$1(aTypedArray$j(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
			});

			var aTypedArray$k = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$k = arrayBufferViewCore.exportTypedArrayMethod;
			var $sort = [].sort;

			// `%TypedArray%.prototype.sort` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort
			exportTypedArrayMethod$k('sort', function sort(comparefn) {
			  return $sort.call(aTypedArray$k(this), comparefn);
			});

			var aTypedArray$l = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$l = arrayBufferViewCore.exportTypedArrayMethod;

			// `%TypedArray%.prototype.subarray` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray
			exportTypedArrayMethod$l('subarray', function subarray(begin, end) {
			  var O = aTypedArray$l(this);
			  var length = O.length;
			  var beginIndex = toAbsoluteIndex(begin, length);
			  return new (speciesConstructor(O, O.constructor))(
			    O.buffer,
			    O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT,
			    toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex)
			  );
			});

			var Int8Array$3 = global_1.Int8Array;
			var aTypedArray$m = arrayBufferViewCore.aTypedArray;
			var exportTypedArrayMethod$m = arrayBufferViewCore.exportTypedArrayMethod;
			var $toLocaleString = [].toLocaleString;
			var $slice$1 = [].slice;

			// iOS Safari 6.x fails here
			var TO_LOCALE_STRING_BUG = !!Int8Array$3 && fails(function () {
			  $toLocaleString.call(new Int8Array$3(1));
			});

			var FORCED$k = fails(function () {
			  return [1, 2].toLocaleString() != new Int8Array$3([1, 2]).toLocaleString();
			}) || !fails(function () {
			  Int8Array$3.prototype.toLocaleString.call([1, 2]);
			});

			// `%TypedArray%.prototype.toLocaleString` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring
			exportTypedArrayMethod$m('toLocaleString', function toLocaleString() {
			  return $toLocaleString.apply(TO_LOCALE_STRING_BUG ? $slice$1.call(aTypedArray$m(this)) : aTypedArray$m(this), arguments);
			}, FORCED$k);

			var exportTypedArrayMethod$n = arrayBufferViewCore.exportTypedArrayMethod;



			var Uint8Array$1 = global_1.Uint8Array;
			var Uint8ArrayPrototype = Uint8Array$1 && Uint8Array$1.prototype || {};
			var arrayToString = [].toString;
			var arrayJoin = [].join;

			if (fails(function () { arrayToString.call({}); })) {
			  arrayToString = function toString() {
			    return arrayJoin.call(this);
			  };
			}

			var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString;

			// `%TypedArray%.prototype.toString` method
			// https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring
			exportTypedArrayMethod$n('toString', arrayToString, IS_NOT_ARRAY_METHOD);

			var getWeakData = internalMetadata.getWeakData;








			var setInternalState$7 = internalState.set;
			var internalStateGetterFor$1 = internalState.getterFor;
			var find = arrayIteration.find;
			var findIndex = arrayIteration.findIndex;
			var id$1 = 0;

			// fallback for uncaught frozen keys
			var uncaughtFrozenStore = function (store) {
			  return store.frozen || (store.frozen = new UncaughtFrozenStore());
			};

			var UncaughtFrozenStore = function () {
			  this.entries = [];
			};

			var findUncaughtFrozen = function (store, key) {
			  return find(store.entries, function (it) {
			    return it[0] === key;
			  });
			};

			UncaughtFrozenStore.prototype = {
			  get: function (key) {
			    var entry = findUncaughtFrozen(this, key);
			    if (entry) return entry[1];
			  },
			  has: function (key) {
			    return !!findUncaughtFrozen(this, key);
			  },
			  set: function (key, value) {
			    var entry = findUncaughtFrozen(this, key);
			    if (entry) entry[1] = value;
			    else this.entries.push([key, value]);
			  },
			  'delete': function (key) {
			    var index = findIndex(this.entries, function (it) {
			      return it[0] === key;
			    });
			    if (~index) this.entries.splice(index, 1);
			    return !!~index;
			  }
			};

			var collectionWeak = {
			  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
			    var C = wrapper(function (that, iterable) {
			      anInstance(that, C, CONSTRUCTOR_NAME);
			      setInternalState$7(that, {
			        type: CONSTRUCTOR_NAME,
			        id: id$1++,
			        frozen: undefined
			      });
			      if (iterable != undefined) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
			    });

			    var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

			    var define = function (that, key, value) {
			      var state = getInternalState(that);
			      var data = getWeakData(anObject(key), true);
			      if (data === true) uncaughtFrozenStore(state).set(key, value);
			      else data[state.id] = value;
			      return that;
			    };

			    redefineAll(C.prototype, {
			      // 23.3.3.2 WeakMap.prototype.delete(key)
			      // 23.4.3.3 WeakSet.prototype.delete(value)
			      'delete': function (key) {
			        var state = getInternalState(this);
			        if (!isObject(key)) return false;
			        var data = getWeakData(key);
			        if (data === true) return uncaughtFrozenStore(state)['delete'](key);
			        return data && has(data, state.id) && delete data[state.id];
			      },
			      // 23.3.3.4 WeakMap.prototype.has(key)
			      // 23.4.3.4 WeakSet.prototype.has(value)
			      has: function has$1(key) {
			        var state = getInternalState(this);
			        if (!isObject(key)) return false;
			        var data = getWeakData(key);
			        if (data === true) return uncaughtFrozenStore(state).has(key);
			        return data && has(data, state.id);
			      }
			    });

			    redefineAll(C.prototype, IS_MAP ? {
			      // 23.3.3.3 WeakMap.prototype.get(key)
			      get: function get(key) {
			        var state = getInternalState(this);
			        if (isObject(key)) {
			          var data = getWeakData(key);
			          if (data === true) return uncaughtFrozenStore(state).get(key);
			          return data ? data[state.id] : undefined;
			        }
			      },
			      // 23.3.3.5 WeakMap.prototype.set(key, value)
			      set: function set(key, value) {
			        return define(this, key, value);
			      }
			    } : {
			      // 23.4.3.1 WeakSet.prototype.add(value)
			      add: function add(value) {
			        return define(this, value, true);
			      }
			    });

			    return C;
			  }
			};

			var es_weakMap = createCommonjsModule(function (module) {






			var enforceIternalState = internalState.enforce;


			var IS_IE11 = !global_1.ActiveXObject && 'ActiveXObject' in global_1;
			// eslint-disable-next-line es/no-object-isextensible -- safe
			var isExtensible = Object.isExtensible;
			var InternalWeakMap;

			var wrapper = function (init) {
			  return function WeakMap() {
			    return init(this, arguments.length ? arguments[0] : undefined);
			  };
			};

			// `WeakMap` constructor
			// https://tc39.es/ecma262/#sec-weakmap-constructor
			var $WeakMap = module.exports = collection('WeakMap', wrapper, collectionWeak);

			// IE11 WeakMap frozen keys fix
			// We can't use feature detection because it crash some old IE builds
			// https://github.com/zloirock/core-js/issues/485
			if (nativeWeakMap && IS_IE11) {
			  InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
			  internalMetadata.REQUIRED = true;
			  var WeakMapPrototype = $WeakMap.prototype;
			  var nativeDelete = WeakMapPrototype['delete'];
			  var nativeHas = WeakMapPrototype.has;
			  var nativeGet = WeakMapPrototype.get;
			  var nativeSet = WeakMapPrototype.set;
			  redefineAll(WeakMapPrototype, {
			    'delete': function (key) {
			      if (isObject(key) && !isExtensible(key)) {
			        var state = enforceIternalState(this);
			        if (!state.frozen) state.frozen = new InternalWeakMap();
			        return nativeDelete.call(this, key) || state.frozen['delete'](key);
			      } return nativeDelete.call(this, key);
			    },
			    has: function has(key) {
			      if (isObject(key) && !isExtensible(key)) {
			        var state = enforceIternalState(this);
			        if (!state.frozen) state.frozen = new InternalWeakMap();
			        return nativeHas.call(this, key) || state.frozen.has(key);
			      } return nativeHas.call(this, key);
			    },
			    get: function get(key) {
			      if (isObject(key) && !isExtensible(key)) {
			        var state = enforceIternalState(this);
			        if (!state.frozen) state.frozen = new InternalWeakMap();
			        return nativeHas.call(this, key) ? nativeGet.call(this, key) : state.frozen.get(key);
			      } return nativeGet.call(this, key);
			    },
			    set: function set(key, value) {
			      if (isObject(key) && !isExtensible(key)) {
			        var state = enforceIternalState(this);
			        if (!state.frozen) state.frozen = new InternalWeakMap();
			        nativeHas.call(this, key) ? nativeSet.call(this, key, value) : state.frozen.set(key, value);
			      } else nativeSet.call(this, key, value);
			      return this;
			    }
			  });
			}
			});

			// `WeakSet` constructor
			// https://tc39.es/ecma262/#sec-weakset-constructor
			collection('WeakSet', function (init) {
			  return function WeakSet() { return init(this, arguments.length ? arguments[0] : undefined); };
			}, collectionWeak);

			var runtime_1 = createCommonjsModule(function (module) {
			/**
			 * Copyright (c) 2014-present, Facebook, Inc.
			 *
			 * This source code is licensed under the MIT license found in the
			 * LICENSE file in the root directory of this source tree.
			 */

			var runtime = (function (exports) {

			  var Op = Object.prototype;
			  var hasOwn = Op.hasOwnProperty;
			  var undefined$1; // More compressible than void 0.
			  var $Symbol = typeof Symbol === "function" ? Symbol : {};
			  var iteratorSymbol = $Symbol.iterator || "@@iterator";
			  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
			  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

			  function define(obj, key, value) {
			    Object.defineProperty(obj, key, {
			      value: value,
			      enumerable: true,
			      configurable: true,
			      writable: true
			    });
			    return obj[key];
			  }
			  try {
			    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
			    define({}, "");
			  } catch (err) {
			    define = function(obj, key, value) {
			      return obj[key] = value;
			    };
			  }

			  function wrap(innerFn, outerFn, self, tryLocsList) {
			    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
			    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
			    var generator = Object.create(protoGenerator.prototype);
			    var context = new Context(tryLocsList || []);

			    // The ._invoke method unifies the implementations of the .next,
			    // .throw, and .return methods.
			    generator._invoke = makeInvokeMethod(innerFn, self, context);

			    return generator;
			  }
			  exports.wrap = wrap;

			  // Try/catch helper to minimize deoptimizations. Returns a completion
			  // record like context.tryEntries[i].completion. This interface could
			  // have been (and was previously) designed to take a closure to be
			  // invoked without arguments, but in all the cases we care about we
			  // already have an existing method we want to call, so there's no need
			  // to create a new function object. We can even get away with assuming
			  // the method takes exactly one argument, since that happens to be true
			  // in every case, so we don't have to touch the arguments object. The
			  // only additional allocation required is the completion record, which
			  // has a stable shape and so hopefully should be cheap to allocate.
			  function tryCatch(fn, obj, arg) {
			    try {
			      return { type: "normal", arg: fn.call(obj, arg) };
			    } catch (err) {
			      return { type: "throw", arg: err };
			    }
			  }

			  var GenStateSuspendedStart = "suspendedStart";
			  var GenStateSuspendedYield = "suspendedYield";
			  var GenStateExecuting = "executing";
			  var GenStateCompleted = "completed";

			  // Returning this object from the innerFn has the same effect as
			  // breaking out of the dispatch switch statement.
			  var ContinueSentinel = {};

			  // Dummy constructor functions that we use as the .constructor and
			  // .constructor.prototype properties for functions that return Generator
			  // objects. For full spec compliance, you may wish to configure your
			  // minifier not to mangle the names of these two functions.
			  function Generator() {}
			  function GeneratorFunction() {}
			  function GeneratorFunctionPrototype() {}

			  // This is a polyfill for %IteratorPrototype% for environments that
			  // don't natively support it.
			  var IteratorPrototype = {};
			  IteratorPrototype[iteratorSymbol] = function () {
			    return this;
			  };

			  var getProto = Object.getPrototypeOf;
			  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
			  if (NativeIteratorPrototype &&
			      NativeIteratorPrototype !== Op &&
			      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
			    // This environment has a native %IteratorPrototype%; use it instead
			    // of the polyfill.
			    IteratorPrototype = NativeIteratorPrototype;
			  }

			  var Gp = GeneratorFunctionPrototype.prototype =
			    Generator.prototype = Object.create(IteratorPrototype);
			  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
			  GeneratorFunctionPrototype.constructor = GeneratorFunction;
			  GeneratorFunction.displayName = define(
			    GeneratorFunctionPrototype,
			    toStringTagSymbol,
			    "GeneratorFunction"
			  );

			  // Helper for defining the .next, .throw, and .return methods of the
			  // Iterator interface in terms of a single ._invoke method.
			  function defineIteratorMethods(prototype) {
			    ["next", "throw", "return"].forEach(function(method) {
			      define(prototype, method, function(arg) {
			        return this._invoke(method, arg);
			      });
			    });
			  }

			  exports.isGeneratorFunction = function(genFun) {
			    var ctor = typeof genFun === "function" && genFun.constructor;
			    return ctor
			      ? ctor === GeneratorFunction ||
			        // For the native GeneratorFunction constructor, the best we can
			        // do is to check its .name property.
			        (ctor.displayName || ctor.name) === "GeneratorFunction"
			      : false;
			  };

			  exports.mark = function(genFun) {
			    if (Object.setPrototypeOf) {
			      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
			    } else {
			      genFun.__proto__ = GeneratorFunctionPrototype;
			      define(genFun, toStringTagSymbol, "GeneratorFunction");
			    }
			    genFun.prototype = Object.create(Gp);
			    return genFun;
			  };

			  // Within the body of any async function, `await x` is transformed to
			  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
			  // `hasOwn.call(value, "__await")` to determine if the yielded value is
			  // meant to be awaited.
			  exports.awrap = function(arg) {
			    return { __await: arg };
			  };

			  function AsyncIterator(generator, PromiseImpl) {
			    function invoke(method, arg, resolve, reject) {
			      var record = tryCatch(generator[method], generator, arg);
			      if (record.type === "throw") {
			        reject(record.arg);
			      } else {
			        var result = record.arg;
			        var value = result.value;
			        if (value &&
			            typeof value === "object" &&
			            hasOwn.call(value, "__await")) {
			          return PromiseImpl.resolve(value.__await).then(function(value) {
			            invoke("next", value, resolve, reject);
			          }, function(err) {
			            invoke("throw", err, resolve, reject);
			          });
			        }

			        return PromiseImpl.resolve(value).then(function(unwrapped) {
			          // When a yielded Promise is resolved, its final value becomes
			          // the .value of the Promise<{value,done}> result for the
			          // current iteration.
			          result.value = unwrapped;
			          resolve(result);
			        }, function(error) {
			          // If a rejected Promise was yielded, throw the rejection back
			          // into the async generator function so it can be handled there.
			          return invoke("throw", error, resolve, reject);
			        });
			      }
			    }

			    var previousPromise;

			    function enqueue(method, arg) {
			      function callInvokeWithMethodAndArg() {
			        return new PromiseImpl(function(resolve, reject) {
			          invoke(method, arg, resolve, reject);
			        });
			      }

			      return previousPromise =
			        // If enqueue has been called before, then we want to wait until
			        // all previous Promises have been resolved before calling invoke,
			        // so that results are always delivered in the correct order. If
			        // enqueue has not been called before, then it is important to
			        // call invoke immediately, without waiting on a callback to fire,
			        // so that the async generator function has the opportunity to do
			        // any necessary setup in a predictable way. This predictability
			        // is why the Promise constructor synchronously invokes its
			        // executor callback, and why async functions synchronously
			        // execute code before the first await. Since we implement simple
			        // async functions in terms of async generators, it is especially
			        // important to get this right, even though it requires care.
			        previousPromise ? previousPromise.then(
			          callInvokeWithMethodAndArg,
			          // Avoid propagating failures to Promises returned by later
			          // invocations of the iterator.
			          callInvokeWithMethodAndArg
			        ) : callInvokeWithMethodAndArg();
			    }

			    // Define the unified helper method that is used to implement .next,
			    // .throw, and .return (see defineIteratorMethods).
			    this._invoke = enqueue;
			  }

			  defineIteratorMethods(AsyncIterator.prototype);
			  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
			    return this;
			  };
			  exports.AsyncIterator = AsyncIterator;

			  // Note that simple async functions are implemented on top of
			  // AsyncIterator objects; they just return a Promise for the value of
			  // the final result produced by the iterator.
			  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
			    if (PromiseImpl === void 0) PromiseImpl = Promise;

			    var iter = new AsyncIterator(
			      wrap(innerFn, outerFn, self, tryLocsList),
			      PromiseImpl
			    );

			    return exports.isGeneratorFunction(outerFn)
			      ? iter // If outerFn is a generator, return the full iterator.
			      : iter.next().then(function(result) {
			          return result.done ? result.value : iter.next();
			        });
			  };

			  function makeInvokeMethod(innerFn, self, context) {
			    var state = GenStateSuspendedStart;

			    return function invoke(method, arg) {
			      if (state === GenStateExecuting) {
			        throw new Error("Generator is already running");
			      }

			      if (state === GenStateCompleted) {
			        if (method === "throw") {
			          throw arg;
			        }

			        // Be forgiving, per 25.3.3.3.3 of the spec:
			        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
			        return doneResult();
			      }

			      context.method = method;
			      context.arg = arg;

			      while (true) {
			        var delegate = context.delegate;
			        if (delegate) {
			          var delegateResult = maybeInvokeDelegate(delegate, context);
			          if (delegateResult) {
			            if (delegateResult === ContinueSentinel) continue;
			            return delegateResult;
			          }
			        }

			        if (context.method === "next") {
			          // Setting context._sent for legacy support of Babel's
			          // function.sent implementation.
			          context.sent = context._sent = context.arg;

			        } else if (context.method === "throw") {
			          if (state === GenStateSuspendedStart) {
			            state = GenStateCompleted;
			            throw context.arg;
			          }

			          context.dispatchException(context.arg);

			        } else if (context.method === "return") {
			          context.abrupt("return", context.arg);
			        }

			        state = GenStateExecuting;

			        var record = tryCatch(innerFn, self, context);
			        if (record.type === "normal") {
			          // If an exception is thrown from innerFn, we leave state ===
			          // GenStateExecuting and loop back for another invocation.
			          state = context.done
			            ? GenStateCompleted
			            : GenStateSuspendedYield;

			          if (record.arg === ContinueSentinel) {
			            continue;
			          }

			          return {
			            value: record.arg,
			            done: context.done
			          };

			        } else if (record.type === "throw") {
			          state = GenStateCompleted;
			          // Dispatch the exception by looping back around to the
			          // context.dispatchException(context.arg) call above.
			          context.method = "throw";
			          context.arg = record.arg;
			        }
			      }
			    };
			  }

			  // Call delegate.iterator[context.method](context.arg) and handle the
			  // result, either by returning a { value, done } result from the
			  // delegate iterator, or by modifying context.method and context.arg,
			  // setting context.delegate to null, and returning the ContinueSentinel.
			  function maybeInvokeDelegate(delegate, context) {
			    var method = delegate.iterator[context.method];
			    if (method === undefined$1) {
			      // A .throw or .return when the delegate iterator has no .throw
			      // method always terminates the yield* loop.
			      context.delegate = null;

			      if (context.method === "throw") {
			        // Note: ["return"] must be used for ES3 parsing compatibility.
			        if (delegate.iterator["return"]) {
			          // If the delegate iterator has a return method, give it a
			          // chance to clean up.
			          context.method = "return";
			          context.arg = undefined$1;
			          maybeInvokeDelegate(delegate, context);

			          if (context.method === "throw") {
			            // If maybeInvokeDelegate(context) changed context.method from
			            // "return" to "throw", let that override the TypeError below.
			            return ContinueSentinel;
			          }
			        }

			        context.method = "throw";
			        context.arg = new TypeError(
			          "The iterator does not provide a 'throw' method");
			      }

			      return ContinueSentinel;
			    }

			    var record = tryCatch(method, delegate.iterator, context.arg);

			    if (record.type === "throw") {
			      context.method = "throw";
			      context.arg = record.arg;
			      context.delegate = null;
			      return ContinueSentinel;
			    }

			    var info = record.arg;

			    if (! info) {
			      context.method = "throw";
			      context.arg = new TypeError("iterator result is not an object");
			      context.delegate = null;
			      return ContinueSentinel;
			    }

			    if (info.done) {
			      // Assign the result of the finished delegate to the temporary
			      // variable specified by delegate.resultName (see delegateYield).
			      context[delegate.resultName] = info.value;

			      // Resume execution at the desired location (see delegateYield).
			      context.next = delegate.nextLoc;

			      // If context.method was "throw" but the delegate handled the
			      // exception, let the outer generator proceed normally. If
			      // context.method was "next", forget context.arg since it has been
			      // "consumed" by the delegate iterator. If context.method was
			      // "return", allow the original .return call to continue in the
			      // outer generator.
			      if (context.method !== "return") {
			        context.method = "next";
			        context.arg = undefined$1;
			      }

			    } else {
			      // Re-yield the result returned by the delegate method.
			      return info;
			    }

			    // The delegate iterator is finished, so forget it and continue with
			    // the outer generator.
			    context.delegate = null;
			    return ContinueSentinel;
			  }

			  // Define Generator.prototype.{next,throw,return} in terms of the
			  // unified ._invoke helper method.
			  defineIteratorMethods(Gp);

			  define(Gp, toStringTagSymbol, "Generator");

			  // A Generator should always return itself as the iterator object when the
			  // @@iterator function is called on it. Some browsers' implementations of the
			  // iterator prototype chain incorrectly implement this, causing the Generator
			  // object to not be returned from this call. This ensures that doesn't happen.
			  // See https://github.com/facebook/regenerator/issues/274 for more details.
			  Gp[iteratorSymbol] = function() {
			    return this;
			  };

			  Gp.toString = function() {
			    return "[object Generator]";
			  };

			  function pushTryEntry(locs) {
			    var entry = { tryLoc: locs[0] };

			    if (1 in locs) {
			      entry.catchLoc = locs[1];
			    }

			    if (2 in locs) {
			      entry.finallyLoc = locs[2];
			      entry.afterLoc = locs[3];
			    }

			    this.tryEntries.push(entry);
			  }

			  function resetTryEntry(entry) {
			    var record = entry.completion || {};
			    record.type = "normal";
			    delete record.arg;
			    entry.completion = record;
			  }

			  function Context(tryLocsList) {
			    // The root entry object (effectively a try statement without a catch
			    // or a finally block) gives us a place to store values thrown from
			    // locations where there is no enclosing try statement.
			    this.tryEntries = [{ tryLoc: "root" }];
			    tryLocsList.forEach(pushTryEntry, this);
			    this.reset(true);
			  }

			  exports.keys = function(object) {
			    var keys = [];
			    for (var key in object) {
			      keys.push(key);
			    }
			    keys.reverse();

			    // Rather than returning an object with a next method, we keep
			    // things simple and return the next function itself.
			    return function next() {
			      while (keys.length) {
			        var key = keys.pop();
			        if (key in object) {
			          next.value = key;
			          next.done = false;
			          return next;
			        }
			      }

			      // To avoid creating an additional object, we just hang the .value
			      // and .done properties off the next function object itself. This
			      // also ensures that the minifier will not anonymize the function.
			      next.done = true;
			      return next;
			    };
			  };

			  function values(iterable) {
			    if (iterable) {
			      var iteratorMethod = iterable[iteratorSymbol];
			      if (iteratorMethod) {
			        return iteratorMethod.call(iterable);
			      }

			      if (typeof iterable.next === "function") {
			        return iterable;
			      }

			      if (!isNaN(iterable.length)) {
			        var i = -1, next = function next() {
			          while (++i < iterable.length) {
			            if (hasOwn.call(iterable, i)) {
			              next.value = iterable[i];
			              next.done = false;
			              return next;
			            }
			          }

			          next.value = undefined$1;
			          next.done = true;

			          return next;
			        };

			        return next.next = next;
			      }
			    }

			    // Return an iterator with no values.
			    return { next: doneResult };
			  }
			  exports.values = values;

			  function doneResult() {
			    return { value: undefined$1, done: true };
			  }

			  Context.prototype = {
			    constructor: Context,

			    reset: function(skipTempReset) {
			      this.prev = 0;
			      this.next = 0;
			      // Resetting context._sent for legacy support of Babel's
			      // function.sent implementation.
			      this.sent = this._sent = undefined$1;
			      this.done = false;
			      this.delegate = null;

			      this.method = "next";
			      this.arg = undefined$1;

			      this.tryEntries.forEach(resetTryEntry);

			      if (!skipTempReset) {
			        for (var name in this) {
			          // Not sure about the optimal order of these conditions:
			          if (name.charAt(0) === "t" &&
			              hasOwn.call(this, name) &&
			              !isNaN(+name.slice(1))) {
			            this[name] = undefined$1;
			          }
			        }
			      }
			    },

			    stop: function() {
			      this.done = true;

			      var rootEntry = this.tryEntries[0];
			      var rootRecord = rootEntry.completion;
			      if (rootRecord.type === "throw") {
			        throw rootRecord.arg;
			      }

			      return this.rval;
			    },

			    dispatchException: function(exception) {
			      if (this.done) {
			        throw exception;
			      }

			      var context = this;
			      function handle(loc, caught) {
			        record.type = "throw";
			        record.arg = exception;
			        context.next = loc;

			        if (caught) {
			          // If the dispatched exception was caught by a catch block,
			          // then let that catch block handle the exception normally.
			          context.method = "next";
			          context.arg = undefined$1;
			        }

			        return !! caught;
			      }

			      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
			        var entry = this.tryEntries[i];
			        var record = entry.completion;

			        if (entry.tryLoc === "root") {
			          // Exception thrown outside of any try block that could handle
			          // it, so set the completion value of the entire function to
			          // throw the exception.
			          return handle("end");
			        }

			        if (entry.tryLoc <= this.prev) {
			          var hasCatch = hasOwn.call(entry, "catchLoc");
			          var hasFinally = hasOwn.call(entry, "finallyLoc");

			          if (hasCatch && hasFinally) {
			            if (this.prev < entry.catchLoc) {
			              return handle(entry.catchLoc, true);
			            } else if (this.prev < entry.finallyLoc) {
			              return handle(entry.finallyLoc);
			            }

			          } else if (hasCatch) {
			            if (this.prev < entry.catchLoc) {
			              return handle(entry.catchLoc, true);
			            }

			          } else if (hasFinally) {
			            if (this.prev < entry.finallyLoc) {
			              return handle(entry.finallyLoc);
			            }

			          } else {
			            throw new Error("try statement without catch or finally");
			          }
			        }
			      }
			    },

			    abrupt: function(type, arg) {
			      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
			        var entry = this.tryEntries[i];
			        if (entry.tryLoc <= this.prev &&
			            hasOwn.call(entry, "finallyLoc") &&
			            this.prev < entry.finallyLoc) {
			          var finallyEntry = entry;
			          break;
			        }
			      }

			      if (finallyEntry &&
			          (type === "break" ||
			           type === "continue") &&
			          finallyEntry.tryLoc <= arg &&
			          arg <= finallyEntry.finallyLoc) {
			        // Ignore the finally entry if control is not jumping to a
			        // location outside the try/catch block.
			        finallyEntry = null;
			      }

			      var record = finallyEntry ? finallyEntry.completion : {};
			      record.type = type;
			      record.arg = arg;

			      if (finallyEntry) {
			        this.method = "next";
			        this.next = finallyEntry.finallyLoc;
			        return ContinueSentinel;
			      }

			      return this.complete(record);
			    },

			    complete: function(record, afterLoc) {
			      if (record.type === "throw") {
			        throw record.arg;
			      }

			      if (record.type === "break" ||
			          record.type === "continue") {
			        this.next = record.arg;
			      } else if (record.type === "return") {
			        this.rval = this.arg = record.arg;
			        this.method = "return";
			        this.next = "end";
			      } else if (record.type === "normal" && afterLoc) {
			        this.next = afterLoc;
			      }

			      return ContinueSentinel;
			    },

			    finish: function(finallyLoc) {
			      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
			        var entry = this.tryEntries[i];
			        if (entry.finallyLoc === finallyLoc) {
			          this.complete(entry.completion, entry.afterLoc);
			          resetTryEntry(entry);
			          return ContinueSentinel;
			        }
			      }
			    },

			    "catch": function(tryLoc) {
			      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
			        var entry = this.tryEntries[i];
			        if (entry.tryLoc === tryLoc) {
			          var record = entry.completion;
			          if (record.type === "throw") {
			            var thrown = record.arg;
			            resetTryEntry(entry);
			          }
			          return thrown;
			        }
			      }

			      // The context.catch method must only be called with a location
			      // argument that corresponds to a known catch block.
			      throw new Error("illegal catch attempt");
			    },

			    delegateYield: function(iterable, resultName, nextLoc) {
			      this.delegate = {
			        iterator: values(iterable),
			        resultName: resultName,
			        nextLoc: nextLoc
			      };

			      if (this.method === "next") {
			        // Deliberately forget the last sent value so that we don't
			        // accidentally pass it on to the delegate.
			        this.arg = undefined$1;
			      }

			      return ContinueSentinel;
			    }
			  };

			  // Regardless of whether this script is executing as a CommonJS module
			  // or not, return the runtime object so that we can declare the variable
			  // regeneratorRuntime in the outer scope, which allows this module to be
			  // injected easily by `bin/regenerator --include-runtime script.js`.
			  return exports;

			}(
			  // If this script is executing as a CommonJS module, use module.exports
			  // as the regeneratorRuntime namespace. Otherwise create a new empty
			  // object. Either way, the resulting object will be used to initialize
			  // the regeneratorRuntime variable at the top of this file.
			   module.exports 
			));

			try {
			  regeneratorRuntime = runtime;
			} catch (accidentalStrictMode) {
			  // This module should not be running in strict mode, so the above
			  // assignment should always work unless something is misconfigured. Just
			  // in case runtime.js accidentally runs in strict mode, we can escape
			  // strict mode using a global Function call. This could conceivably fail
			  // if a Content Security Policy forbids using Function, but in that case
			  // the proper solution is to fix the accidental strict mode problem. If
			  // you've misconfigured your bundler to force strict mode and applied a
			  // CSP to forbid Function, and you're not willing to fix either of those
			  // problems, please detail your unique predicament in a GitHub issue.
			  Function("r", "regeneratorRuntime = r")(runtime);
			}
			});

		}
	};
});
