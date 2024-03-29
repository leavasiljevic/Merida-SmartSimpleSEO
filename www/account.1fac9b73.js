// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/tslib/tslib.es6.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__extends = __extends;
exports.__rest = __rest;
exports.__decorate = __decorate;
exports.__param = __param;
exports.__metadata = __metadata;
exports.__awaiter = __awaiter;
exports.__generator = __generator;
exports.__exportStar = __exportStar;
exports.__values = __values;
exports.__read = __read;
exports.__spread = __spread;
exports.__spreadArrays = __spreadArrays;
exports.__await = __await;
exports.__asyncGenerator = __asyncGenerator;
exports.__asyncDelegator = __asyncDelegator;
exports.__asyncValues = __asyncValues;
exports.__makeTemplateObject = __makeTemplateObject;
exports.__importStar = __importStar;
exports.__importDefault = __importDefault;
exports.__assign = void 0;

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
var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  exports.__assign = __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__assign = __assign;

function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
}

function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator],
      i = 0;
  if (m) return m.call(o);
  return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

  return ar;
}

function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
}

;

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
      i,
      q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i;

  function verb(n) {
    if (g[n]) i[n] = function (v) {
      return new Promise(function (a, b) {
        q.push([n, v, a, b]) > 1 || resume(n, v);
      });
    };
  }

  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }

  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }

  function fulfill(value) {
    resume("next", value);
  }

  function reject(value) {
    resume("throw", value);
  }

  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function () {
    return this;
  }, i;

  function verb(n, f) {
    i[n] = o[n] ? function (v) {
      return (p = !p) ? {
        value: __await(o[n](v)),
        done: n === "return"
      } : f ? f(v) : v;
    } : f;
  }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
      i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
    return this;
  }, i);

  function verb(n) {
    i[n] = o[n] && function (v) {
      return new Promise(function (resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }

  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v) {
      resolve({
        value: v,
        done: d
      });
    }, reject);
  }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", {
      value: raw
    });
  } else {
    cooked.raw = raw;
  }

  return cooked;
}

;

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return mod && mod.__esModule ? mod : {
    default: mod
  };
}
},{}],"../node_modules/@firebase/util/dist/index.cjs.js":[function(require,module,exports) {
var global = arguments[3];
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_1 = require('tslib');

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
var CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
var assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
var assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var stringToByteArray = function (str) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
var byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    var out = [];
    var pos = 0, c = 0;
    while (pos < bytes.length) {
        var c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            var c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            var c4 = bytes[pos++];
            var u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            var c2 = bytes[pos++];
            var c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
var base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray: function (input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        var byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        var output = [];
        for (var i = 0; i < input.length; i += 3) {
            var byte1 = input[i];
            var haveByte2 = i + 1 < input.length;
            var byte2 = haveByte2 ? input[i + 1] : 0;
            var haveByte3 = i + 2 < input.length;
            var byte3 = haveByte3 ? input[i + 2] : 0;
            var outByte1 = byte1 >> 2;
            var outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            var outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            var outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString: function (input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray: function (input, webSafe) {
        this.init_();
        var charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        var output = [];
        for (var i = 0; i < input.length;) {
            var byte1 = charToByteMap[input.charAt(i++)];
            var haveByte2 = i < input.length;
            var byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            var haveByte3 = i < input.length;
            var byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            var haveByte4 = i < input.length;
            var byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            var outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                var outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    var outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_: function () {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (var i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */
var base64Encode = function (str) {
    var utf8Bytes = stringToByteArray(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
var base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            var dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (var prop in source) {
        if (!source.hasOwnProperty(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.reject = function () { };
        this.resolve = function () { };
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    Deferred.prototype.wrapCallback = function (callback) {
        var _this = this;
        return function (error, value) {
            if (error) {
                _this.reject(error);
            }
            else {
                _this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                _this.promise.catch(function () { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    };
    return Deferred;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(global.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
var FirebaseError = /** @class */ (function (_super) {
    tslib_1.__extends(FirebaseError, _super);
    function FirebaseError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(_this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(_this, ErrorFactory.prototype.create);
        }
        return _this;
    }
    return FirebaseError;
}(Error));
var ErrorFactory = /** @class */ (function () {
    function ErrorFactory(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    ErrorFactory.prototype.create = function (code) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        var customData = data[0] || {};
        var fullCode = this.service + "/" + code;
        var template = this.errors[code];
        var message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        var fullMessage = this.serviceName + ": " + message + " (" + fullCode + ").";
        var error = new FirebaseError(fullCode, fullMessage);
        // Keys with an underscore at the end of their name are not included in
        // error.data for some reason.
        // TODO: Replace with Object.entries when lib is updated to es2017.
        for (var _a = 0, _b = Object.keys(customData); _a < _b.length; _a++) {
            var key = _b[_a];
            if (key.slice(-1) !== '_') {
                if (key in error) {
                    console.warn("Overwriting FirebaseError base field \"" + key + "\" can cause unexpected behavior.");
                }
                error[key] = customData[key];
            }
        }
        return error;
    };
    return ErrorFactory;
}());
function replaceTemplate(template, data) {
    return template.replace(PATTERN, function (_, key) {
        var value = data[key];
        return value != null ? value.toString() : "<" + key + "?>";
    });
}
var PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var decode = function (token) {
    var header = {}, claims = {}, data = {}, signature = '';
    try {
        var parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header: header,
        claims: claims,
        data: data,
        signature: signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidTimestamp = function (token) {
    var claims = decode(token).claims;
    var now = Math.floor(new Date().getTime() / 1000);
    var validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var issuedAtTime = function (token) {
    var claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isValidFormat = function (token) {
    var decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
var isAdmin = function (token) {
    var claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    var res = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    var params = [];
    var _loop_1 = function (key, value) {
        if (Array.isArray(value)) {
            value.forEach(function (arrayVal) {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    };
    for (var _i = 0, _a = Object.entries(querystringParams); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        _loop_1(key, value);
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    var obj = {};
    var tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(function (token) {
        if (token) {
            var key = token.split('=');
            obj[key[0]] = key[1];
        }
    });
    return obj;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
var Sha1 = /** @class */ (function () {
    function Sha1() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (var i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    Sha1.prototype.reset = function () {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    };
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    Sha1.prototype.compress_ = function (buf, offset) {
        if (!offset) {
            offset = 0;
        }
        var W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (var i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (var i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (var i = 16; i < 80; i++) {
            var t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        var a = this.chain_[0];
        var b = this.chain_[1];
        var c = this.chain_[2];
        var d = this.chain_[3];
        var e = this.chain_[4];
        var f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (var i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            var t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    };
    Sha1.prototype.update = function (bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        var lengthMinusBlock = length - this.blockSize;
        var n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        var buf = this.buf_;
        var inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    };
    /** @override */
    Sha1.prototype.digest = function () {
        var digest = [];
        var totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (var i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        var n = 0;
        for (var i = 0; i < 5; i++) {
            for (var j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    };
    return Sha1;
}());

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    var proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
var ObserverProxy = /** @class */ (function () {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    function ObserverProxy(executor, onNoObservers) {
        var _this = this;
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(function () {
            executor(_this);
        })
            .catch(function (e) {
            _this.error(e);
        });
    }
    ObserverProxy.prototype.next = function (value) {
        this.forEachObserver(function (observer) {
            observer.next(value);
        });
    };
    ObserverProxy.prototype.error = function (error) {
        this.forEachObserver(function (observer) {
            observer.error(error);
        });
        this.close(error);
    };
    ObserverProxy.prototype.complete = function () {
        this.forEachObserver(function (observer) {
            observer.complete();
        });
        this.close();
    };
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    ObserverProxy.prototype.subscribe = function (nextOrObserver, error, complete) {
        var _this = this;
        var observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error: error,
                complete: complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        var unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // tslint:disable-next-line:no-floating-promises
            this.task.then(function () {
                try {
                    if (_this.finalError) {
                        observer.error(_this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    };
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    ObserverProxy.prototype.unsubscribeOne = function (i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    };
    ObserverProxy.prototype.forEachObserver = function (fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (var i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    };
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    ObserverProxy.prototype.sendOne = function (i, fn) {
        var _this = this;
        // Execute the callback asynchronously
        // tslint:disable-next-line:no-floating-promises
        this.task.then(function () {
            if (_this.observers !== undefined && _this.observers[i] !== undefined) {
                try {
                    fn(_this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    };
    ObserverProxy.prototype.close = function (err) {
        var _this = this;
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // tslint:disable-next-line:no-floating-promises
        this.task.then(function () {
            _this.observers = undefined;
            _this.onNoObservers = undefined;
        });
    };
    return ObserverProxy;
}());
/** Turn synchronous function into one called asynchronously. */
function async(fn, onError) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        Promise.resolve(true)
            .then(function () {
            fn.apply(void 0, args);
        })
            .catch(function (error) {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (var _i = 0, methods_1 = methods; _i < methods_1.length; _i++) {
        var method = methods_1[_i];
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
var validateArgCount = function (fnName, minCount, maxCount, argCount) {
    var argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        var error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argumentNumber The index of the argument
 * @param optional Whether or not the argument is optional
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argumentNumber, optional) {
    var argName = '';
    switch (argumentNumber) {
        case 1:
            argName = optional ? 'first' : 'First';
            break;
        case 2:
            argName = optional ? 'second' : 'Second';
            break;
        case 3:
            argName = optional ? 'third' : 'Third';
            break;
        case 4:
            argName = optional ? 'fourth' : 'Fourth';
            break;
        default:
            throw new Error('errorPrefix called with argumentNumber > 4.  Need to update it?');
    }
    var error = fnName + ' failed: ';
    error += argName + ' argument ';
    return error;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, argumentNumber, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentNumber, callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentNumber, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
var stringToByteArray$1 = function (str) {
    var out = [];
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            var high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            var low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
var stringLength = function (str) {
    var p = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

exports.CONSTANTS = CONSTANTS;
exports.Deferred = Deferred;
exports.ErrorFactory = ErrorFactory;
exports.FirebaseError = FirebaseError;
exports.Sha1 = Sha1;
exports.assert = assert;
exports.assertionError = assertionError;
exports.async = async;
exports.base64 = base64;
exports.base64Decode = base64Decode;
exports.base64Encode = base64Encode;
exports.contains = contains;
exports.createSubscribe = createSubscribe;
exports.decode = decode;
exports.deepCopy = deepCopy;
exports.deepExtend = deepExtend;
exports.errorPrefix = errorPrefix;
exports.getUA = getUA;
exports.isAdmin = isAdmin;
exports.isBrowser = isBrowser;
exports.isEmpty = isEmpty;
exports.isMobileCordova = isMobileCordova;
exports.isNode = isNode;
exports.isNodeSdk = isNodeSdk;
exports.isReactNative = isReactNative;
exports.isValidFormat = isValidFormat;
exports.isValidTimestamp = isValidTimestamp;
exports.issuedAtTime = issuedAtTime;
exports.jsonEval = jsonEval;
exports.map = map;
exports.querystring = querystring;
exports.querystringDecode = querystringDecode;
exports.safeGet = safeGet;
exports.stringLength = stringLength;
exports.stringToByteArray = stringToByteArray$1;
exports.stringify = stringify;
exports.validateArgCount = validateArgCount;
exports.validateCallback = validateCallback;
exports.validateContextObject = validateContextObject;
exports.validateNamespace = validateNamespace;


},{"tslib":"../node_modules/tslib/tslib.es6.js"}],"../node_modules/@firebase/logger/dist/index.esm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setLogLevel = setLogLevel;
exports.Logger = exports.LogLevel = void 0;

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * A container for all of the Logger instances
 */
var instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */

var LogLevel;
exports.LogLevel = LogLevel;

(function (LogLevel) {
  LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
  LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
  LogLevel[LogLevel["INFO"] = 2] = "INFO";
  LogLevel[LogLevel["WARN"] = 3] = "WARN";
  LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
  LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (exports.LogLevel = LogLevel = {}));
/**
 * The default log level
 */


var defaultLogLevel = LogLevel.INFO;
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */

var defaultLogHandler = function (instance, logType) {
  var args = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    args[_i - 2] = arguments[_i];
  }

  if (logType < instance.logLevel) {
    return;
  }

  var now = new Date().toISOString();

  switch (logType) {
    /**
     * By default, `console.debug` is not displayed in the developer console (in
     * chrome). To avoid forcing users to have to opt-in to these logs twice
     * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
     * logs to the `console.log` function.
     */
    case LogLevel.DEBUG:
      console.log.apply(console, ["[" + now + "]  " + instance.name + ":"].concat(args));
      break;

    case LogLevel.VERBOSE:
      console.log.apply(console, ["[" + now + "]  " + instance.name + ":"].concat(args));
      break;

    case LogLevel.INFO:
      console.info.apply(console, ["[" + now + "]  " + instance.name + ":"].concat(args));
      break;

    case LogLevel.WARN:
      console.warn.apply(console, ["[" + now + "]  " + instance.name + ":"].concat(args));
      break;

    case LogLevel.ERROR:
      console.error.apply(console, ["[" + now + "]  " + instance.name + ":"].concat(args));
      break;

    default:
      throw new Error("Attempted to log a message with an invalid logType (value: " + logType + ")");
  }
};

var Logger =
/** @class */
function () {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  function Logger(name) {
    this.name = name;
    /**
     * The log level of the given Logger instance.
     */

    this._logLevel = defaultLogLevel;
    /**
     * The log handler for the Logger instance.
     */

    this._logHandler = defaultLogHandler;
    /**
     * Capture the current instance for later use
     */

    instances.push(this);
  }

  Object.defineProperty(Logger.prototype, "logLevel", {
    get: function () {
      return this._logLevel;
    },
    set: function (val) {
      if (!(val in LogLevel)) {
        throw new TypeError('Invalid value assigned to `logLevel`');
      }

      this._logLevel = val;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Logger.prototype, "logHandler", {
    get: function () {
      return this._logHandler;
    },
    set: function (val) {
      if (typeof val !== 'function') {
        throw new TypeError('Value assigned to `logHandler` must be a function');
      }

      this._logHandler = val;
    },
    enumerable: true,
    configurable: true
  });
  /**
   * The functions below are all based on the `console` interface
   */

  Logger.prototype.debug = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._logHandler.apply(this, [this, LogLevel.DEBUG].concat(args));
  };

  Logger.prototype.log = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._logHandler.apply(this, [this, LogLevel.VERBOSE].concat(args));
  };

  Logger.prototype.info = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._logHandler.apply(this, [this, LogLevel.INFO].concat(args));
  };

  Logger.prototype.warn = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._logHandler.apply(this, [this, LogLevel.WARN].concat(args));
  };

  Logger.prototype.error = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    this._logHandler.apply(this, [this, LogLevel.ERROR].concat(args));
  };

  return Logger;
}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


exports.Logger = Logger;

function setLogLevel(level) {
  instances.forEach(function (inst) {
    inst.logLevel = level;
  });
}
},{}],"../node_modules/@firebase/app/dist/index.cjs.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib_1 = require('tslib');
var util = require('@firebase/util');
var logger$1 = require('@firebase/logger');

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _a;
var ERRORS = (_a = {},
    _a["no-app" /* NO_APP */] = "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    _a["bad-app-name" /* BAD_APP_NAME */] = "Illegal App name: '{$appName}",
    _a["duplicate-app" /* DUPLICATE_APP */] = "Firebase App named '{$appName}' already exists",
    _a["app-deleted" /* APP_DELETED */] = "Firebase App named '{$appName}' already deleted",
    _a["duplicate-service" /* DUPLICATE_SERVICE */] = "Firebase service named '{$appName}' already registered",
    _a["invalid-app-argument" /* INVALID_APP_ARGUMENT */] = 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    _a);
var ERROR_FACTORY = new util.ErrorFactory('app', 'Firebase', ERRORS);

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An array to capture listeners before the true auth functions
// exist
var tokenListeners = [];
/**
 * Global context object for a collection of services using
 * a shared authentication state.
 */
var FirebaseAppImpl = /** @class */ (function () {
    function FirebaseAppImpl(options, config, firebase_) {
        this.firebase_ = firebase_;
        this.isDeleted_ = false;
        this.services_ = {};
        this.name_ = config.name;
        this.automaticDataCollectionEnabled_ =
            config.automaticDataCollectionEnabled || false;
        this.options_ = util.deepCopy(options);
        this.INTERNAL = {
            getUid: function () { return null; },
            getToken: function () { return Promise.resolve(null); },
            addAuthTokenListener: function (callback) {
                tokenListeners.push(callback);
                // Make sure callback is called, asynchronously, in the absence of the auth module
                setTimeout(function () { return callback(null); }, 0);
            },
            removeAuthTokenListener: function (callback) {
                tokenListeners = tokenListeners.filter(function (listener) { return listener !== callback; });
            }
        };
    }
    Object.defineProperty(FirebaseAppImpl.prototype, "automaticDataCollectionEnabled", {
        get: function () {
            this.checkDestroyed_();
            return this.automaticDataCollectionEnabled_;
        },
        set: function (val) {
            this.checkDestroyed_();
            this.automaticDataCollectionEnabled_ = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "name", {
        get: function () {
            this.checkDestroyed_();
            return this.name_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FirebaseAppImpl.prototype, "options", {
        get: function () {
            this.checkDestroyed_();
            return this.options_;
        },
        enumerable: true,
        configurable: true
    });
    FirebaseAppImpl.prototype.delete = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.checkDestroyed_();
            resolve();
        })
            .then(function () {
            _this.firebase_.INTERNAL.removeApp(_this.name_);
            var services = [];
            for (var _i = 0, _a = Object.keys(_this.services_); _i < _a.length; _i++) {
                var serviceKey = _a[_i];
                for (var _b = 0, _c = Object.keys(_this.services_[serviceKey]); _b < _c.length; _b++) {
                    var instanceKey = _c[_b];
                    services.push(_this.services_[serviceKey][instanceKey]);
                }
            }
            return Promise.all(services
                .filter(function (service) { return 'INTERNAL' in service; })
                .map(function (service) { return service.INTERNAL.delete(); }));
        })
            .then(function () {
            _this.isDeleted_ = true;
            _this.services_ = {};
        });
    };
    /**
     * Return a service instance associated with this app (creating it
     * on demand), identified by the passed instanceIdentifier.
     *
     * NOTE: Currently storage and functions are the only ones that are leveraging this
     * functionality. They invoke it by calling:
     *
     * ```javascript
     * firebase.app().storage('STORAGE BUCKET ID')
     * ```
     *
     * The service name is passed to this already
     * @internal
     */
    FirebaseAppImpl.prototype._getService = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        this.checkDestroyed_();
        if (!this.services_[name]) {
            this.services_[name] = {};
        }
        if (!this.services_[name][instanceIdentifier]) {
            /**
             * If a custom instance has been defined (i.e. not '[DEFAULT]')
             * then we will pass that instance on, otherwise we pass `null`
             */
            var instanceSpecifier = instanceIdentifier !== DEFAULT_ENTRY_NAME
                ? instanceIdentifier
                : undefined;
            var service = this.firebase_.INTERNAL.factories[name](this, this.extendApp.bind(this), instanceSpecifier);
            this.services_[name][instanceIdentifier] = service;
        }
        return this.services_[name][instanceIdentifier];
    };
    /**
     * Remove a service instance from the cache, so we will create a new instance for this service
     * when people try to get this service again.
     *
     * NOTE: currently only firestore is using this functionality to support firestore shutdown.
     *
     * @param name The service name
     * @param instanceIdentifier instance identifier in case multiple instances are allowed
     * @internal
     */
    FirebaseAppImpl.prototype._removeServiceInstance = function (name, instanceIdentifier) {
        if (instanceIdentifier === void 0) { instanceIdentifier = DEFAULT_ENTRY_NAME; }
        if (this.services_[name] && this.services_[name][instanceIdentifier]) {
            delete this.services_[name][instanceIdentifier];
        }
    };
    /**
     * Callback function used to extend an App instance at the time
     * of service instance creation.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    FirebaseAppImpl.prototype.extendApp = function (props) {
        var _this = this;
        // Copy the object onto the FirebaseAppImpl prototype
        util.deepExtend(this, props);
        /**
         * If the app has overwritten the addAuthTokenListener stub, forward
         * the active token listeners on to the true fxn.
         *
         * TODO: This function is required due to our current module
         * structure. Once we are able to rely strictly upon a single module
         * implementation, this code should be refactored and Auth should
         * provide these stubs and the upgrade logic
         */
        if (props.INTERNAL && props.INTERNAL.addAuthTokenListener) {
            tokenListeners.forEach(function (listener) {
                _this.INTERNAL.addAuthTokenListener(listener);
            });
            tokenListeners = [];
        }
    };
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    FirebaseAppImpl.prototype.checkDestroyed_ = function () {
        if (this.isDeleted_) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this.name_ });
        }
    };
    return FirebaseAppImpl;
}());
// Prevent dead-code elimination of these methods w/o invalid property
// copying.
(FirebaseAppImpl.prototype.name && FirebaseAppImpl.prototype.options) ||
    FirebaseAppImpl.prototype.delete ||
    console.log('dc');

var version = "6.3.4";

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Because auth can't share code with other components, we attach the utility functions
 * in an internal namespace to share code.
 * This function return a firebase namespace object without
 * any utility functions, so it can be shared between the regular firebaseNamespace and
 * the lite version.
 */
function createFirebaseNamespaceCore(firebaseAppImpl) {
    var apps = {};
    var factories = {};
    var appHooks = {};
    // A namespace is a plain JavaScript Object.
    var namespace = {
        // Hack to prevent Babel from modifying the object returned
        // as the firebase namespace.
        // @ts-ignore
        __esModule: true,
        initializeApp: initializeApp,
        // @ts-ignore
        app: app,
        // @ts-ignore
        apps: null,
        SDK_VERSION: version,
        INTERNAL: {
            registerService: registerService,
            removeApp: removeApp,
            factories: factories,
            useAsService: useAsService
        }
    };
    // Inject a circular default export to allow Babel users who were previously
    // using:
    //
    //   import firebase from 'firebase';
    //   which becomes: var firebase = require('firebase').default;
    //
    // instead of
    //
    //   import * as firebase from 'firebase';
    //   which becomes: var firebase = require('firebase');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    namespace['default'] = namespace;
    // firebase.apps is a read-only getter.
    Object.defineProperty(namespace, 'apps', {
        get: getApps
    });
    /**
     * Called by App.delete() - but before any services associated with the App
     * are deleted.
     */
    function removeApp(name) {
        var app = apps[name];
        callAppHooks(app, 'delete');
        delete apps[name];
    }
    /**
     * Get the App object for a given name (or DEFAULT).
     */
    function app(name) {
        name = name || DEFAULT_ENTRY_NAME;
        if (!util.contains(apps, name)) {
            throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
        }
        return apps[name];
    }
    // @ts-ignore
    app['App'] = firebaseAppImpl;
    function initializeApp(options, rawConfig) {
        if (rawConfig === void 0) { rawConfig = {}; }
        if (typeof rawConfig !== 'object' || rawConfig === null) {
            var name_1 = rawConfig;
            rawConfig = { name: name_1 };
        }
        var config = rawConfig;
        if (config.name === undefined) {
            config.name = DEFAULT_ENTRY_NAME;
        }
        var name = config.name;
        if (typeof name !== 'string' || !name) {
            throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
                appName: String(name)
            });
        }
        if (util.contains(apps, name)) {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
        var app = new firebaseAppImpl(options, config, namespace);
        apps[name] = app;
        callAppHooks(app, 'create');
        return app;
    }
    /*
     * Return an array of all the non-deleted FirebaseApps.
     */
    function getApps() {
        // Make a copy so caller cannot mutate the apps list.
        return Object.keys(apps).map(function (name) { return apps[name]; });
    }
    /*
     * Register a Firebase Service.
     *
     * firebase.INTERNAL.registerService()
     *
     * TODO: Implement serviceProperties.
     */
    function registerService(name, createService, serviceProperties, appHook, allowMultipleInstances) {
        if (allowMultipleInstances === void 0) { allowMultipleInstances = false; }
        // Cannot re-register a service that already exists
        if (factories[name]) {
            throw ERROR_FACTORY.create("duplicate-service" /* DUPLICATE_SERVICE */, { appName: name });
        }
        // Capture the service factory for later service instantiation
        factories[name] = createService;
        // Capture the appHook, if passed
        if (appHook) {
            appHooks[name] = appHook;
            // Run the **new** app hook on all existing apps
            getApps().forEach(function (app) {
                appHook('create', app);
            });
        }
        // The Service namespace is an accessor function ...
        function serviceNamespace(appArg) {
            if (appArg === void 0) { appArg = app(); }
            // @ts-ignore
            if (typeof appArg[name] !== 'function') {
                // Invalid argument.
                // This happens in the following case: firebase.storage('gs:/')
                throw ERROR_FACTORY.create("invalid-app-argument" /* INVALID_APP_ARGUMENT */, {
                    appName: name
                });
            }
            // Forward service instance lookup to the FirebaseApp.
            // @ts-ignore
            return appArg[name]();
        }
        // ... and a container for service-level properties.
        if (serviceProperties !== undefined) {
            util.deepExtend(serviceNamespace, serviceProperties);
        }
        // Monkey-patch the serviceNamespace onto the firebase namespace
        // @ts-ignore
        namespace[name] = serviceNamespace;
        // Patch the FirebaseAppImpl prototype
        // @ts-ignore
        firebaseAppImpl.prototype[name] =
            // TODO: The eslint disable can be removed and the 'ignoreRestArgs'
            // option added to the no-explicit-any rule when ESlint releases it.
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var serviceFxn = this._getService.bind(this, name);
                return serviceFxn.apply(this, allowMultipleInstances ? args : []);
            };
        return serviceNamespace;
    }
    function callAppHooks(app, eventName) {
        for (var _i = 0, _a = Object.keys(factories); _i < _a.length; _i++) {
            var serviceName = _a[_i];
            // Ignore virtual services
            var factoryName = useAsService(app, serviceName);
            if (factoryName === null) {
                return;
            }
            if (appHooks[factoryName]) {
                appHooks[factoryName](eventName, app);
            }
        }
    }
    // Map the requested service to a registered service name
    // (used to map auth to serverAuth service when needed).
    function useAsService(app, name) {
        if (name === 'serverAuth') {
            return null;
        }
        var useService = name;
        return useService;
    }
    return namespace;
}

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Return a firebase namespace object.
 *
 * In production, this will be called exactly once and the result
 * assigned to the 'firebase' global.  It may be called multiple times
 * in unit tests.
 */
function createFirebaseNamespace() {
    var namespace = createFirebaseNamespaceCore(FirebaseAppImpl);
    namespace.INTERNAL = tslib_1.__assign({}, namespace.INTERNAL, { createFirebaseNamespace: createFirebaseNamespace,
        extendNamespace: extendNamespace,
        createSubscribe: util.createSubscribe,
        ErrorFactory: util.ErrorFactory,
        deepExtend: util.deepExtend });
    /**
     * Patch the top-level firebase namespace with additional properties.
     *
     * firebase.INTERNAL.extendNamespace()
     */
    function extendNamespace(props) {
        util.deepExtend(namespace, props);
    }
    return namespace;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logger = new logger$1.Logger('@firebase/app');
// Firebase Lite detection
// eslint-disable-next-line @typescript-eslint/no-explicit-any
if (util.isBrowser() && self.firebase !== undefined) {
    logger.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
    // eslint-disable-next-line
    var sdkVersion = self.firebase.SDK_VERSION;
    if (sdkVersion && sdkVersion.indexOf('LITE') >= 0) {
        logger.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ");
    }
}
var firebaseNamespace = createFirebaseNamespace();
var initializeApp = firebaseNamespace.initializeApp;
// TODO: This disable can be removed and the 'ignoreRestArgs' option added to
// the no-explicit-any rule when ESlint releases it.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
firebaseNamespace.initializeApp = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    // Environment check before initializing app
    // Do the check in initializeApp, so people have a chance to disable it by setting logLevel
    // in @firebase/logger
    if (util.isNode()) {
        logger.warn("\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the \"main\" field in package.json.\n      \n      If you are using Webpack, you can specify \"main\" as the first item in\n      \"resolve.mainFields\":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify \"main\"\n      as the first item in \"mainFields\", e.g. ['main', 'module'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      ");
    }
    return initializeApp.apply(undefined, args);
};
var firebase = firebaseNamespace;

exports.default = firebase;
exports.firebase = firebase;


},{"tslib":"../node_modules/tslib/tslib.es6.js","@firebase/util":"../node_modules/@firebase/util/dist/index.cjs.js","@firebase/logger":"../node_modules/@firebase/logger/dist/index.esm.js"}],"../node_modules/firebase/app/dist/index.cjs.js":[function(require,module,exports) {
'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var firebase = _interopDefault(require('@firebase/app'));

/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = firebase;


},{"@firebase/app":"../node_modules/@firebase/app/dist/index.cjs.js"}],"../node_modules/@firebase/auth/dist/auth.esm.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

var _app = _interopRequireDefault(require("@firebase/app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var k,
      aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value);
  },
      ba = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;

  function ca(a, b) {
    if (b) {
      var c = ba;
      a = a.split(".");

      for (var d = 0; d < a.length - 1; d++) {
        var e = a[d];
        e in c || (c[e] = {});
        c = c[e];
      }

      a = a[a.length - 1];
      d = c[a];
      b = b(d);
      b != d && null != b && aa(c, a, {
        configurable: !0,
        writable: !0,
        value: b
      });
    }
  }

  function da(a) {
    var b = 0;
    return function () {
      return b < a.length ? {
        done: !1,
        value: a[b++]
      } : {
        done: !0
      };
    };
  }

  function ea(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {
      next: da(a)
    };
  }

  ca("Promise", function (a) {
    function b(g) {
      this.b = 0;
      this.c = void 0;
      this.a = [];
      var h = this.f();

      try {
        g(h.resolve, h.reject);
      } catch (m) {
        h.reject(m);
      }
    }

    function c() {
      this.a = null;
    }

    function d(g) {
      return g instanceof b ? g : new b(function (h) {
        h(g);
      });
    }

    if (a) return a;

    c.prototype.b = function (g) {
      if (null == this.a) {
        this.a = [];
        var h = this;
        this.c(function () {
          h.g();
        });
      }

      this.a.push(g);
    };

    var e = ba.setTimeout;

    c.prototype.c = function (g) {
      e(g, 0);
    };

    c.prototype.g = function () {
      for (; this.a && this.a.length;) {
        var g = this.a;
        this.a = [];

        for (var h = 0; h < g.length; ++h) {
          var m = g[h];
          g[h] = null;

          try {
            m();
          } catch (p) {
            this.f(p);
          }
        }
      }

      this.a = null;
    };

    c.prototype.f = function (g) {
      this.c(function () {
        throw g;
      });
    };

    b.prototype.f = function () {
      function g(p) {
        return function (v) {
          m || (m = !0, p.call(h, v));
        };
      }

      var h = this,
          m = !1;
      return {
        resolve: g(this.o),
        reject: g(this.g)
      };
    };

    b.prototype.o = function (g) {
      if (g === this) this.g(new TypeError("A Promise cannot resolve to itself"));else if (g instanceof b) this.u(g);else {
        a: switch (typeof g) {
          case "object":
            var h = null != g;
            break a;

          case "function":
            h = !0;
            break a;

          default:
            h = !1;
        }

        h ? this.l(g) : this.h(g);
      }
    };

    b.prototype.l = function (g) {
      var h = void 0;

      try {
        h = g.then;
      } catch (m) {
        this.g(m);
        return;
      }

      "function" == typeof h ? this.v(h, g) : this.h(g);
    };

    b.prototype.g = function (g) {
      this.i(2, g);
    };

    b.prototype.h = function (g) {
      this.i(1, g);
    };

    b.prototype.i = function (g, h) {
      if (0 != this.b) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.b);
      this.b = g;
      this.c = h;
      this.m();
    };

    b.prototype.m = function () {
      if (null != this.a) {
        for (var g = 0; g < this.a.length; ++g) f.b(this.a[g]);

        this.a = null;
      }
    };

    var f = new c();

    b.prototype.u = function (g) {
      var h = this.f();
      g.Ja(h.resolve, h.reject);
    };

    b.prototype.v = function (g, h) {
      var m = this.f();

      try {
        g.call(h, m.resolve, m.reject);
      } catch (p) {
        m.reject(p);
      }
    };

    b.prototype.then = function (g, h) {
      function m(H, V) {
        return "function" == typeof H ? function (ua) {
          try {
            p(H(ua));
          } catch (kd) {
            v(kd);
          }
        } : V;
      }

      var p,
          v,
          z = new b(function (H, V) {
        p = H;
        v = V;
      });
      this.Ja(m(g, p), m(h, v));
      return z;
    };

    b.prototype.catch = function (g) {
      return this.then(void 0, g);
    };

    b.prototype.Ja = function (g, h) {
      function m() {
        switch (p.b) {
          case 1:
            g(p.c);
            break;

          case 2:
            h(p.c);
            break;

          default:
            throw Error("Unexpected state: " + p.b);
        }
      }

      var p = this;
      null == this.a ? f.b(m) : this.a.push(m);
    };

    b.resolve = d;

    b.reject = function (g) {
      return new b(function (h, m) {
        m(g);
      });
    };

    b.race = function (g) {
      return new b(function (h, m) {
        for (var p = ea(g), v = p.next(); !v.done; v = p.next()) d(v.value).Ja(h, m);
      });
    };

    b.all = function (g) {
      var h = ea(g),
          m = h.next();
      return m.done ? d([]) : new b(function (p, v) {
        function z(ua) {
          return function (kd) {
            H[ua] = kd;
            V--;
            0 == V && p(H);
          };
        }

        var H = [],
            V = 0;

        do H.push(void 0), V++, d(m.value).Ja(z(H.length - 1), v), m = h.next(); while (!m.done);
      });
    };

    return b;
  });
  var fa = fa || {},
      l = this || self;

  function n(a) {
    return "string" == typeof a;
  }

  function ha(a) {
    return "boolean" == typeof a;
  }

  var ia = /^[\w+/_-]+[=]{0,2}$/,
      ja = null;

  function ka() {}

  function la(a) {
    var b = typeof a;
    if ("object" == b) {
      if (a) {
        if (a instanceof Array) return "array";
        if (a instanceof Object) return b;
        var c = Object.prototype.toString.call(a);
        if ("[object Window]" == c) return "object";
        if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
        if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
      } else return "null";
    } else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
  }

  function ma(a) {
    return null === a;
  }

  function na(a) {
    return "array" == la(a);
  }

  function oa(a) {
    var b = la(a);
    return "array" == b || "object" == b && "number" == typeof a.length;
  }

  function q(a) {
    return "function" == la(a);
  }

  function r(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b;
  }

  var pa = "closure_uid_" + (1E9 * Math.random() >>> 0),
      qa = 0;

  function ra(a, b, c) {
    return a.call.apply(a.bind, arguments);
  }

  function sa(a, b, c) {
    if (!a) throw Error();

    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function () {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a.apply(b, e);
      };
    }

    return function () {
      return a.apply(b, arguments);
    };
  }

  function t(a, b, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? t = ra : t = sa;
    return t.apply(null, arguments);
  }

  function ta(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function () {
      var d = c.slice();
      d.push.apply(d, arguments);
      return a.apply(this, d);
    };
  }

  var va = Date.now || function () {
    return +new Date();
  };

  function u(a, b) {
    function c() {}

    c.prototype = b.prototype;
    a.qb = b.prototype;
    a.prototype = new c();
    a.prototype.constructor = a;

    a.cd = function (d, e, f) {
      for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];

      return b.prototype[e].apply(d, g);
    };
  }

  ;

  function wa(a) {
    if (!a) return !1;

    try {
      return !!a.$goog_Thenable;
    } catch (b) {
      return !1;
    }
  }

  ;

  function w(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, w);else {
      var b = Error().stack;
      b && (this.stack = b);
    }
    a && (this.message = String(a));
  }

  u(w, Error);
  w.prototype.name = "CustomError";

  function xa(a, b) {
    a = a.split("%s");

    for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");

    w.call(this, c + a[d]);
  }

  u(xa, w);
  xa.prototype.name = "AssertionError";

  function ya(a, b) {
    throw new xa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
  }

  ;

  function za(a, b) {
    this.c = a;
    this.f = b;
    this.b = 0;
    this.a = null;
  }

  za.prototype.get = function () {
    if (0 < this.b) {
      this.b--;
      var a = this.a;
      this.a = a.next;
      a.next = null;
    } else a = this.c();

    return a;
  };

  function Aa(a, b) {
    a.f(b);
    100 > a.b && (a.b++, b.next = a.a, a.a = b);
  }

  ;

  function Ba() {
    this.b = this.a = null;
  }

  var Da = new za(function () {
    return new Ca();
  }, function (a) {
    a.reset();
  });

  Ba.prototype.add = function (a, b) {
    var c = Da.get();
    c.set(a, b);
    this.b ? this.b.next = c : this.a = c;
    this.b = c;
  };

  function Ea() {
    var a = Fa,
        b = null;
    a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null);
    return b;
  }

  function Ca() {
    this.next = this.b = this.a = null;
  }

  Ca.prototype.set = function (a, b) {
    this.a = a;
    this.b = b;
    this.next = null;
  };

  Ca.prototype.reset = function () {
    this.next = this.b = this.a = null;
  };

  function Ga(a, b) {
    a: {
      try {
        var c = a && a.ownerDocument,
            d = c && (c.defaultView || c.parentWindow);
        d = d || l;

        if (d.Element && d.Location) {
          var e = d;
          break a;
        }
      } catch (g) {}

      e = null;
    }

    if (e && "undefined" != typeof e[b] && (!a || !(a instanceof e[b]) && (a instanceof e.Location || a instanceof e.Element))) {
      if (r(a)) try {
        var f = a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
      } catch (g) {
        f = "<object could not be stringified>";
      } else f = void 0 === a ? "undefined" : null === a ? "null" : typeof a;
      ya("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, f);
    }
  }

  ;
  var Ha = Array.prototype.indexOf ? function (a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
  } : function (a, b) {
    if (n(a)) return n(b) && 1 == b.length ? a.indexOf(b, 0) : -1;

    for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;

    return -1;
  },
      x = Array.prototype.forEach ? function (a, b, c) {
    Array.prototype.forEach.call(a, b, c);
  } : function (a, b, c) {
    for (var d = a.length, e = n(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a);
  };

  function Ia(a, b) {
    for (var c = n(a) ? a.split("") : a, d = a.length - 1; 0 <= d; --d) d in c && b.call(void 0, c[d], d, a);
  }

  var Ja = Array.prototype.map ? function (a, b) {
    return Array.prototype.map.call(a, b, void 0);
  } : function (a, b) {
    for (var c = a.length, d = Array(c), e = n(a) ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));

    return d;
  },
      Ka = Array.prototype.some ? function (a, b) {
    return Array.prototype.some.call(a, b, void 0);
  } : function (a, b) {
    for (var c = a.length, d = n(a) ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) return !0;

    return !1;
  };

  function La(a) {
    a: {
      var b = Ma;

      for (var c = a.length, d = n(a) ? a.split("") : a, e = 0; e < c; e++) if (e in d && b.call(void 0, d[e], e, a)) {
        b = e;
        break a;
      }

      b = -1;
    }

    return 0 > b ? null : n(a) ? a.charAt(b) : a[b];
  }

  function Na(a, b) {
    return 0 <= Ha(a, b);
  }

  function Oa(a, b) {
    b = Ha(a, b);
    var c;
    (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
    return c;
  }

  function y(a, b) {
    var c = 0;
    Ia(a, function (d, e) {
      b.call(void 0, d, e, a) && 1 == Array.prototype.splice.call(a, e, 1).length && c++;
    });
  }

  function Pa(a) {
    return Array.prototype.concat.apply([], arguments);
  }

  function Qa(a) {
    var b = a.length;

    if (0 < b) {
      for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];

      return c;
    }

    return [];
  }

  ;

  function Ra(a, b) {
    for (var c in a) b.call(void 0, a[c], c, a);
  }

  function Sa(a) {
    for (var b in a) return !1;

    return !0;
  }

  function Ta(a) {
    var b = {},
        c;

    for (c in a) b[c] = a[c];

    return b;
  }

  var Ua = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

  function Va(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
      d = arguments[e];

      for (c in d) a[c] = d[c];

      for (var f = 0; f < Ua.length; f++) c = Ua[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }

  ;

  function Wa(a, b) {
    this.a = a === Xa && b || "";
    this.b = Ya;
  }

  Wa.prototype.na = !0;

  Wa.prototype.ma = function () {
    return this.a;
  };

  Wa.prototype.toString = function () {
    return "Const{" + this.a + "}";
  };

  function Za(a) {
    if (a instanceof Wa && a.constructor === Wa && a.b === Ya) return a.a;
    ya("expected object of type Const, got '" + a + "'");
    return "type_error:Const";
  }

  var Ya = {},
      Xa = {},
      $a = new Wa(Xa, "");

  function ab() {
    this.a = "";
    this.b = bb;
  }

  ab.prototype.na = !0;

  ab.prototype.ma = function () {
    return this.a.toString();
  };

  ab.prototype.toString = function () {
    return "TrustedResourceUrl{" + this.a + "}";
  };

  function cb(a) {
    if (a instanceof ab && a.constructor === ab && a.b === bb) return a.a;
    ya("expected object of type TrustedResourceUrl, got '" + a + "' of type " + la(a));
    return "type_error:TrustedResourceUrl";
  }

  function db(a, b) {
    var c = Za(a);
    if (!eb.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
    a = c.replace(fb, function (d, e) {
      if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
      d = b[e];
      return d instanceof Wa ? Za(d) : encodeURIComponent(String(d));
    });
    return gb(a);
  }

  var fb = /%{(\w+)}/g,
      eb = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,
      bb = {};

  function gb(a) {
    var b = new ab();
    b.a = a;
    return b;
  }

  ;
  var hb = String.prototype.trim ? function (a) {
    return a.trim();
  } : function (a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
  },
      ib = /&/g,
      jb = /</g,
      kb = />/g,
      lb = /"/g,
      mb = /'/g,
      nb = /\x00/g,
      ob = /[\x00&<>"']/;

  function A(a, b) {
    return -1 != a.indexOf(b);
  }

  function pb(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }

  ;

  function qb() {
    this.a = "";
    this.b = rb;
  }

  qb.prototype.na = !0;

  qb.prototype.ma = function () {
    return this.a.toString();
  };

  qb.prototype.toString = function () {
    return "SafeUrl{" + this.a + "}";
  };

  function sb(a) {
    if (a instanceof qb && a.constructor === qb && a.b === rb) return a.a;
    ya("expected object of type SafeUrl, got '" + a + "' of type " + la(a));
    return "type_error:SafeUrl";
  }

  var tb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

  function ub(a) {
    if (a instanceof qb) return a;
    a = "object" == typeof a && a.na ? a.ma() : String(a);
    tb.test(a) || (a = "about:invalid#zClosurez");
    return vb(a);
  }

  var rb = {};

  function vb(a) {
    var b = new qb();
    b.a = a;
    return b;
  }

  vb("about:blank");
  var wb;

  a: {
    var xb = l.navigator;

    if (xb) {
      var yb = xb.userAgent;

      if (yb) {
        wb = yb;
        break a;
      }
    }

    wb = "";
  }

  function B(a) {
    return A(wb, a);
  }

  ;

  function zb() {
    this.a = "";
    this.b = Ab;
  }

  zb.prototype.na = !0;

  zb.prototype.ma = function () {
    return this.a.toString();
  };

  zb.prototype.toString = function () {
    return "SafeHtml{" + this.a + "}";
  };

  function Bb(a) {
    if (a instanceof zb && a.constructor === zb && a.b === Ab) return a.a;
    ya("expected object of type SafeHtml, got '" + a + "' of type " + la(a));
    return "type_error:SafeHtml";
  }

  var Ab = {};

  function Cb(a) {
    var b = new zb();
    b.a = a;
    return b;
  }

  Cb("<!DOCTYPE html>");
  var Db = Cb("");
  Cb("<br>");

  function Eb(a) {
    var b = gb(Za($a));
    Ga(a, "HTMLIFrameElement");
    a.src = cb(b).toString();
  }

  function Fb(a, b) {
    Ga(a, "HTMLScriptElement");
    a.src = cb(b);
    if (null === ja) b: {
      b = l.document;

      if ((b = b.querySelector && b.querySelector("script[nonce]")) && (b = b.nonce || b.getAttribute("nonce")) && ia.test(b)) {
        ja = b;
        break b;
      }

      ja = "";
    }
    b = ja;
    b && a.setAttribute("nonce", b);
  }

  ;

  function Gb(a, b) {
    for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();

    return d + c.join("%s");
  }

  function Hb(a) {
    ob.test(a) && (-1 != a.indexOf("&") && (a = a.replace(ib, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(jb, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(kb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(lb, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(mb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(nb, "&#0;")));
    return a;
  }

  ;

  function Ib(a) {
    l.setTimeout(function () {
      throw a;
    }, 0);
  }

  var Jb;

  function Kb() {
    var a = l.MessageChannel;
    "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !B("Presto") && (a = function () {
      var e = document.createElement("IFRAME");
      e.style.display = "none";
      Eb(e);
      document.documentElement.appendChild(e);
      var f = e.contentWindow;
      e = f.document;
      e.open();
      e.write(Bb(Db));
      e.close();
      var g = "callImmediate" + Math.random(),
          h = "file:" == f.location.protocol ? "*" : f.location.protocol + "//" + f.location.host;
      e = t(function (m) {
        if (("*" == h || m.origin == h) && m.data == g) this.port1.onmessage();
      }, this);
      f.addEventListener("message", e, !1);
      this.port1 = {};
      this.port2 = {
        postMessage: function () {
          f.postMessage(g, h);
        }
      };
    });

    if ("undefined" !== typeof a && !B("Trident") && !B("MSIE")) {
      var b = new a(),
          c = {},
          d = c;

      b.port1.onmessage = function () {
        if (void 0 !== c.next) {
          c = c.next;
          var e = c.yb;
          c.yb = null;
          e();
        }
      };

      return function (e) {
        d.next = {
          yb: e
        };
        d = d.next;
        b.port2.postMessage(0);
      };
    }

    return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function (e) {
      var f = document.createElement("SCRIPT");

      f.onreadystatechange = function () {
        f.onreadystatechange = null;
        f.parentNode.removeChild(f);
        f = null;
        e();
        e = null;
      };

      document.documentElement.appendChild(f);
    } : function (e) {
      l.setTimeout(e, 0);
    };
  }

  ;

  function Lb(a, b) {
    Mb || Nb();
    Ob || (Mb(), Ob = !0);
    Fa.add(a, b);
  }

  var Mb;

  function Nb() {
    if (l.Promise && l.Promise.resolve) {
      var a = l.Promise.resolve(void 0);

      Mb = function () {
        a.then(Pb);
      };
    } else Mb = function () {
      var b = Pb;
      !q(l.setImmediate) || l.Window && l.Window.prototype && !B("Edge") && l.Window.prototype.setImmediate == l.setImmediate ? (Jb || (Jb = Kb()), Jb(b)) : l.setImmediate(b);
    };
  }

  var Ob = !1,
      Fa = new Ba();

  function Pb() {
    for (var a; a = Ea();) {
      try {
        a.a.call(a.b);
      } catch (b) {
        Ib(b);
      }

      Aa(Da, a);
    }

    Ob = !1;
  }

  ;

  function C(a, b) {
    this.a = Qb;
    this.i = void 0;
    this.f = this.b = this.c = null;
    this.g = this.h = !1;
    if (a != ka) try {
      var c = this;
      a.call(b, function (d) {
        Rb(c, Sb, d);
      }, function (d) {
        if (!(d instanceof Tb)) try {
          if (d instanceof Error) throw d;
          throw Error("Promise rejected.");
        } catch (e) {}
        Rb(c, Ub, d);
      });
    } catch (d) {
      Rb(this, Ub, d);
    }
  }

  var Qb = 0,
      Sb = 2,
      Ub = 3;

  function Vb() {
    this.next = this.f = this.b = this.g = this.a = null;
    this.c = !1;
  }

  Vb.prototype.reset = function () {
    this.f = this.b = this.g = this.a = null;
    this.c = !1;
  };

  var Wb = new za(function () {
    return new Vb();
  }, function (a) {
    a.reset();
  });

  function Xb(a, b, c) {
    var d = Wb.get();
    d.g = a;
    d.b = b;
    d.f = c;
    return d;
  }

  function D(a) {
    if (a instanceof C) return a;
    var b = new C(ka);
    Rb(b, Sb, a);
    return b;
  }

  function E(a) {
    return new C(function (b, c) {
      c(a);
    });
  }

  function Yb(a, b, c) {
    Zb(a, b, c, null) || Lb(ta(b, a));
  }

  function $b(a) {
    return new C(function (b, c) {
      var d = a.length,
          e = [];
      if (d) for (var f = function (p, v) {
        d--;
        e[p] = v;
        0 == d && b(e);
      }, g = function (p) {
        c(p);
      }, h = 0, m; h < a.length; h++) m = a[h], Yb(m, ta(f, h), g);else b(e);
    });
  }

  function ac(a) {
    return new C(function (b) {
      var c = a.length,
          d = [];
      if (c) for (var e = function (h, m, p) {
        c--;
        d[h] = m ? {
          Eb: !0,
          value: p
        } : {
          Eb: !1,
          reason: p
        };
        0 == c && b(d);
      }, f = 0, g; f < a.length; f++) g = a[f], Yb(g, ta(e, f, !0), ta(e, f, !1));else b(d);
    });
  }

  C.prototype.then = function (a, b, c) {
    return bc(this, q(a) ? a : null, q(b) ? b : null, c);
  };

  C.prototype.$goog_Thenable = !0;
  k = C.prototype;

  k.ia = function (a, b) {
    a = Xb(a, a, b);
    a.c = !0;
    cc(this, a);
    return this;
  };

  k.s = function (a, b) {
    return bc(this, null, a, b);
  };

  k.cancel = function (a) {
    this.a == Qb && Lb(function () {
      var b = new Tb(a);
      dc(this, b);
    }, this);
  };

  function dc(a, b) {
    if (a.a == Qb) if (a.c) {
      var c = a.c;

      if (c.b) {
        for (var d = 0, e = null, f = null, g = c.b; g && (g.c || (d++, g.a == a && (e = g), !(e && 1 < d))); g = g.next) e || (f = g);

        e && (c.a == Qb && 1 == d ? dc(c, b) : (f ? (d = f, d.next == c.f && (c.f = d), d.next = d.next.next) : ec(c), fc(c, e, Ub, b)));
      }

      a.c = null;
    } else Rb(a, Ub, b);
  }

  function cc(a, b) {
    a.b || a.a != Sb && a.a != Ub || gc(a);
    a.f ? a.f.next = b : a.b = b;
    a.f = b;
  }

  function bc(a, b, c, d) {
    var e = Xb(null, null, null);
    e.a = new C(function (f, g) {
      e.g = b ? function (h) {
        try {
          var m = b.call(d, h);
          f(m);
        } catch (p) {
          g(p);
        }
      } : f;
      e.b = c ? function (h) {
        try {
          var m = c.call(d, h);
          void 0 === m && h instanceof Tb ? g(h) : f(m);
        } catch (p) {
          g(p);
        }
      } : g;
    });
    e.a.c = a;
    cc(a, e);
    return e.a;
  }

  k.Lc = function (a) {
    this.a = Qb;
    Rb(this, Sb, a);
  };

  k.Mc = function (a) {
    this.a = Qb;
    Rb(this, Ub, a);
  };

  function Rb(a, b, c) {
    a.a == Qb && (a === c && (b = Ub, c = new TypeError("Promise cannot resolve to itself")), a.a = 1, Zb(c, a.Lc, a.Mc, a) || (a.i = c, a.a = b, a.c = null, gc(a), b != Ub || c instanceof Tb || hc(a, c)));
  }

  function Zb(a, b, c, d) {
    if (a instanceof C) return cc(a, Xb(b || ka, c || null, d)), !0;
    if (wa(a)) return a.then(b, c, d), !0;
    if (r(a)) try {
      var e = a.then;
      if (q(e)) return ic(a, e, b, c, d), !0;
    } catch (f) {
      return c.call(d, f), !0;
    }
    return !1;
  }

  function ic(a, b, c, d, e) {
    function f(m) {
      h || (h = !0, d.call(e, m));
    }

    function g(m) {
      h || (h = !0, c.call(e, m));
    }

    var h = !1;

    try {
      b.call(a, g, f);
    } catch (m) {
      f(m);
    }
  }

  function gc(a) {
    a.h || (a.h = !0, Lb(a.Wb, a));
  }

  function ec(a) {
    var b = null;
    a.b && (b = a.b, a.b = b.next, b.next = null);
    a.b || (a.f = null);
    return b;
  }

  k.Wb = function () {
    for (var a; a = ec(this);) fc(this, a, this.a, this.i);

    this.h = !1;
  };

  function fc(a, b, c, d) {
    if (c == Ub && b.b && !b.c) for (; a && a.g; a = a.c) a.g = !1;
    if (b.a) b.a.c = null, jc(b, c, d);else try {
      b.c ? b.g.call(b.f) : jc(b, c, d);
    } catch (e) {
      kc.call(null, e);
    }
    Aa(Wb, b);
  }

  function jc(a, b, c) {
    b == Sb ? a.g.call(a.f, c) : a.b && a.b.call(a.f, c);
  }

  function hc(a, b) {
    a.g = !0;
    Lb(function () {
      a.g && kc.call(null, b);
    });
  }

  var kc = Ib;

  function Tb(a) {
    w.call(this, a);
  }

  u(Tb, w);
  Tb.prototype.name = "cancel";

  function lc() {
    0 != mc && (nc[this[pa] || (this[pa] = ++qa)] = this);
    this.qa = this.qa;
    this.ja = this.ja;
  }

  var mc = 0,
      nc = {};
  lc.prototype.qa = !1;

  function oc(a) {
    if (!a.qa && (a.qa = !0, a.va(), 0 != mc)) {
      var b = a[pa] || (a[pa] = ++qa);
      if (0 != mc && a.ja && 0 < a.ja.length) throw Error(a + " did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.");
      delete nc[b];
    }
  }

  lc.prototype.va = function () {
    if (this.ja) for (; this.ja.length;) this.ja.shift()();
  };

  function pc(a) {
    pc[" "](a);
    return a;
  }

  pc[" "] = ka;

  function qc(a, b) {
    var c = rc;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
  }

  ;
  var sc = B("Opera"),
      tc = B("Trident") || B("MSIE"),
      uc = B("Edge"),
      vc = uc || tc,
      wc = B("Gecko") && !(A(wb.toLowerCase(), "webkit") && !B("Edge")) && !(B("Trident") || B("MSIE")) && !B("Edge"),
      xc = A(wb.toLowerCase(), "webkit") && !B("Edge");

  function yc() {
    var a = l.document;
    return a ? a.documentMode : void 0;
  }

  var zc;

  a: {
    var Ac = "",
        Bc = function () {
      var a = wb;
      if (wc) return /rv:([^\);]+)(\)|;)/.exec(a);
      if (uc) return /Edge\/([\d\.]+)/.exec(a);
      if (tc) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
      if (xc) return /WebKit\/(\S+)/.exec(a);
      if (sc) return /(?:Version)[ \/]?(\S+)/.exec(a);
    }();

    Bc && (Ac = Bc ? Bc[1] : "");

    if (tc) {
      var Cc = yc();

      if (null != Cc && Cc > parseFloat(Ac)) {
        zc = String(Cc);
        break a;
      }
    }

    zc = Ac;
  }

  var rc = {};

  function Dc(a) {
    return qc(a, function () {
      for (var b = 0, c = hb(String(zc)).split("."), d = hb(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
        var g = c[f] || "",
            h = d[f] || "";

        do {
          g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
          h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
          if (0 == g[0].length && 0 == h[0].length) break;
          b = pb(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || pb(0 == g[2].length, 0 == h[2].length) || pb(g[2], h[2]);
          g = g[3];
          h = h[3];
        } while (0 == b);
      }

      return 0 <= b;
    });
  }

  var Ec;
  Ec = l.document && tc ? yc() : void 0;

  var Fc = Object.freeze || function (a) {
    return a;
  };

  var Gc = !tc || 9 <= Number(Ec),
      Hc = tc && !Dc("9"),
      Ic = function () {
    if (!l.addEventListener || !Object.defineProperty) return !1;
    var a = !1,
        b = Object.defineProperty({}, "passive", {
      get: function () {
        a = !0;
      }
    });

    try {
      l.addEventListener("test", ka, b), l.removeEventListener("test", ka, b);
    } catch (c) {}

    return a;
  }();

  function Jc(a, b) {
    this.type = a;
    this.b = this.target = b;
    this.Kb = !0;
  }

  Jc.prototype.preventDefault = function () {
    this.Kb = !1;
  };

  function Kc(a, b) {
    Jc.call(this, a ? a.type : "");
    this.relatedTarget = this.b = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.a = null;

    if (a) {
      var c = this.type = a.type,
          d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
      this.target = a.target || a.srcElement;
      this.b = b;

      if (b = a.relatedTarget) {
        if (wc) {
          a: {
            try {
              pc(b.nodeName);
              var e = !0;
              break a;
            } catch (f) {}

            e = !1;
          }

          e || (b = null);
        }
      } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);

      this.relatedTarget = b;
      d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
      this.button = a.button;
      this.key = a.key || "";
      this.ctrlKey = a.ctrlKey;
      this.altKey = a.altKey;
      this.shiftKey = a.shiftKey;
      this.metaKey = a.metaKey;
      this.pointerId = a.pointerId || 0;
      this.pointerType = n(a.pointerType) ? a.pointerType : Lc[a.pointerType] || "";
      this.a = a;
      a.defaultPrevented && this.preventDefault();
    }
  }

  u(Kc, Jc);
  var Lc = Fc({
    2: "touch",
    3: "pen",
    4: "mouse"
  });

  Kc.prototype.preventDefault = function () {
    Kc.qb.preventDefault.call(this);
    var a = this.a;
    if (a.preventDefault) a.preventDefault();else if (a.returnValue = !1, Hc) try {
      if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
    } catch (b) {}
  };

  Kc.prototype.f = function () {
    return this.a;
  };

  var Mc = "closure_listenable_" + (1E6 * Math.random() | 0),
      Nc = 0;

  function Oc(a, b, c, d, e) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.Na = e;
    this.key = ++Nc;
    this.oa = this.Ia = !1;
  }

  function Pc(a) {
    a.oa = !0;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.Na = null;
  }

  ;

  function Qc(a) {
    this.src = a;
    this.a = {};
    this.b = 0;
  }

  Qc.prototype.add = function (a, b, c, d, e) {
    var f = a.toString();
    a = this.a[f];
    a || (a = this.a[f] = [], this.b++);
    var g = Rc(a, b, d, e);
    -1 < g ? (b = a[g], c || (b.Ia = !1)) : (b = new Oc(b, this.src, f, !!d, e), b.Ia = c, a.push(b));
    return b;
  };

  function Sc(a, b) {
    var c = b.type;
    c in a.a && Oa(a.a[c], b) && (Pc(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
  }

  function Rc(a, b, c, d) {
    for (var e = 0; e < a.length; ++e) {
      var f = a[e];
      if (!f.oa && f.listener == b && f.capture == !!c && f.Na == d) return e;
    }

    return -1;
  }

  ;
  var Tc = "closure_lm_" + (1E6 * Math.random() | 0),
      Uc = {},
      Vc = 0;

  function Wc(a, b, c, d, e) {
    if (d && d.once) Xc(a, b, c, d, e);else if (na(b)) for (var f = 0; f < b.length; f++) Wc(a, b[f], c, d, e);else c = Yc(c), a && a[Mc] ? Zc(a, b, c, r(d) ? !!d.capture : !!d, e) : $c(a, b, c, !1, d, e);
  }

  function $c(a, b, c, d, e, f) {
    if (!b) throw Error("Invalid event type");
    var g = r(e) ? !!e.capture : !!e,
        h = ad(a);
    h || (a[Tc] = h = new Qc(a));
    c = h.add(b, c, d, g, f);

    if (!c.proxy) {
      d = bd();
      c.proxy = d;
      d.src = a;
      d.listener = c;
      if (a.addEventListener) Ic || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);else if (a.attachEvent) a.attachEvent(cd(b.toString()), d);else if (a.addListener && a.removeListener) a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");
      Vc++;
    }
  }

  function bd() {
    var a = dd,
        b = Gc ? function (c) {
      return a.call(b.src, b.listener, c);
    } : function (c) {
      c = a.call(b.src, b.listener, c);
      if (!c) return c;
    };
    return b;
  }

  function Xc(a, b, c, d, e) {
    if (na(b)) for (var f = 0; f < b.length; f++) Xc(a, b[f], c, d, e);else c = Yc(c), a && a[Mc] ? ed(a, b, c, r(d) ? !!d.capture : !!d, e) : $c(a, b, c, !0, d, e);
  }

  function fd(a, b, c, d, e) {
    if (na(b)) for (var f = 0; f < b.length; f++) fd(a, b[f], c, d, e);else (d = r(d) ? !!d.capture : !!d, c = Yc(c), a && a[Mc]) ? (a = a.m, b = String(b).toString(), b in a.a && (f = a.a[b], c = Rc(f, c, d, e), -1 < c && (Pc(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = ad(a)) && (b = a.a[b.toString()], a = -1, b && (a = Rc(b, c, d, e)), (c = -1 < a ? b[a] : null) && gd(c));
  }

  function gd(a) {
    if ("number" != typeof a && a && !a.oa) {
      var b = a.src;
      if (b && b[Mc]) Sc(b.m, a);else {
        var c = a.type,
            d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(cd(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        Vc--;
        (c = ad(b)) ? (Sc(c, a), 0 == c.b && (c.src = null, b[Tc] = null)) : Pc(a);
      }
    }
  }

  function cd(a) {
    return a in Uc ? Uc[a] : Uc[a] = "on" + a;
  }

  function hd(a, b, c, d) {
    var e = !0;
    if (a = ad(a)) if (b = a.a[b.toString()]) for (b = b.concat(), a = 0; a < b.length; a++) {
      var f = b[a];
      f && f.capture == c && !f.oa && (f = id(f, d), e = e && !1 !== f);
    }
    return e;
  }

  function id(a, b) {
    var c = a.listener,
        d = a.Na || a.src;
    a.Ia && gd(a);
    return c.call(d, b);
  }

  function dd(a, b) {
    if (a.oa) return !0;

    if (!Gc) {
      if (!b) a: {
        b = ["window", "event"];

        for (var c = l, d = 0; d < b.length; d++) if (c = c[b[d]], null == c) {
          b = null;
          break a;
        }

        b = c;
      }
      d = b;
      b = new Kc(d, this);
      c = !0;

      if (!(0 > d.keyCode || void 0 != d.returnValue)) {
        a: {
          var e = !1;
          if (0 == d.keyCode) try {
            d.keyCode = -1;
            break a;
          } catch (g) {
            e = !0;
          }
          if (e || void 0 == d.returnValue) d.returnValue = !0;
        }

        d = [];

        for (e = b.b; e; e = e.parentNode) d.push(e);

        a = a.type;

        for (e = d.length - 1; 0 <= e; e--) {
          b.b = d[e];
          var f = hd(d[e], a, !0, b);
          c = c && f;
        }

        for (e = 0; e < d.length; e++) b.b = d[e], f = hd(d[e], a, !1, b), c = c && f;
      }

      return c;
    }

    return id(a, new Kc(b, this));
  }

  function ad(a) {
    a = a[Tc];
    return a instanceof Qc ? a : null;
  }

  var jd = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);

  function Yc(a) {
    if (q(a)) return a;
    a[jd] || (a[jd] = function (b) {
      return a.handleEvent(b);
    });
    return a[jd];
  }

  ;

  function F() {
    lc.call(this);
    this.m = new Qc(this);
    this.Pb = this;
    this.Wa = null;
  }

  u(F, lc);
  F.prototype[Mc] = !0;

  F.prototype.addEventListener = function (a, b, c, d) {
    Wc(this, a, b, c, d);
  };

  F.prototype.removeEventListener = function (a, b, c, d) {
    fd(this, a, b, c, d);
  };

  F.prototype.dispatchEvent = function (a) {
    var b,
        c = this.Wa;
    if (c) for (b = []; c; c = c.Wa) b.push(c);
    c = this.Pb;
    var d = a.type || a;
    if (n(a)) a = new Jc(a, c);else if (a instanceof Jc) a.target = a.target || c;else {
      var e = a;
      a = new Jc(d, c);
      Va(a, e);
    }
    e = !0;
    if (b) for (var f = b.length - 1; 0 <= f; f--) {
      var g = a.b = b[f];
      e = ld(g, d, !0, a) && e;
    }
    g = a.b = c;
    e = ld(g, d, !0, a) && e;
    e = ld(g, d, !1, a) && e;
    if (b) for (f = 0; f < b.length; f++) g = a.b = b[f], e = ld(g, d, !1, a) && e;
    return e;
  };

  F.prototype.va = function () {
    F.qb.va.call(this);

    if (this.m) {
      var a = this.m,
          b = 0,
          c;

      for (c in a.a) {
        for (var d = a.a[c], e = 0; e < d.length; e++) ++b, Pc(d[e]);

        delete a.a[c];
        a.b--;
      }
    }

    this.Wa = null;
  };

  function Zc(a, b, c, d, e) {
    a.m.add(String(b), c, !1, d, e);
  }

  function ed(a, b, c, d, e) {
    a.m.add(String(b), c, !0, d, e);
  }

  function ld(a, b, c, d) {
    b = a.m.a[String(b)];
    if (!b) return !0;
    b = b.concat();

    for (var e = !0, f = 0; f < b.length; ++f) {
      var g = b[f];

      if (g && !g.oa && g.capture == c) {
        var h = g.listener,
            m = g.Na || g.src;
        g.Ia && Sc(a.m, g);
        e = !1 !== h.call(m, d) && e;
      }
    }

    return e && 0 != d.Kb;
  }

  ;

  function md(a, b, c) {
    if (q(a)) c && (a = t(a, c));else if (a && "function" == typeof a.handleEvent) a = t(a.handleEvent, a);else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : l.setTimeout(a, b || 0);
  }

  function nd(a) {
    var b = null;
    return new C(function (c, d) {
      b = md(function () {
        c(void 0);
      }, a);
      -1 == b && d(Error("Failed to schedule timer."));
    }).s(function (c) {
      l.clearTimeout(b);
      throw c;
    });
  }

  ;

  function od(a) {
    if (a.S && "function" == typeof a.S) return a.S();
    if (n(a)) return a.split("");

    if (oa(a)) {
      for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);

      return b;
    }

    b = [];
    c = 0;

    for (d in a) b[c++] = a[d];

    return b;
  }

  function pd(a) {
    if (a.U && "function" == typeof a.U) return a.U();

    if (!a.S || "function" != typeof a.S) {
      if (oa(a) || n(a)) {
        var b = [];
        a = a.length;

        for (var c = 0; c < a; c++) b.push(c);

        return b;
      }

      b = [];
      c = 0;

      for (var d in a) b[c++] = d;

      return b;
    }
  }

  function qd(a, b) {
    if (a.forEach && "function" == typeof a.forEach) a.forEach(b, void 0);else if (oa(a) || n(a)) x(a, b, void 0);else for (var c = pd(a), d = od(a), e = d.length, f = 0; f < e; f++) b.call(void 0, d[f], c && c[f], a);
  }

  ;

  function rd(a, b) {
    this.b = {};
    this.a = [];
    this.c = 0;
    var c = arguments.length;

    if (1 < c) {
      if (c % 2) throw Error("Uneven number of arguments");

      for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
    } else if (a) if (a instanceof rd) for (c = a.U(), d = 0; d < c.length; d++) this.set(c[d], a.get(c[d]));else for (d in a) this.set(d, a[d]);
  }

  k = rd.prototype;

  k.S = function () {
    sd(this);

    for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);

    return a;
  };

  k.U = function () {
    sd(this);
    return this.a.concat();
  };

  k.clear = function () {
    this.b = {};
    this.c = this.a.length = 0;
  };

  function sd(a) {
    if (a.c != a.a.length) {
      for (var b = 0, c = 0; b < a.a.length;) {
        var d = a.a[b];
        td(a.b, d) && (a.a[c++] = d);
        b++;
      }

      a.a.length = c;
    }

    if (a.c != a.a.length) {
      var e = {};

      for (c = b = 0; b < a.a.length;) d = a.a[b], td(e, d) || (a.a[c++] = d, e[d] = 1), b++;

      a.a.length = c;
    }
  }

  k.get = function (a, b) {
    return td(this.b, a) ? this.b[a] : b;
  };

  k.set = function (a, b) {
    td(this.b, a) || (this.c++, this.a.push(a));
    this.b[a] = b;
  };

  k.forEach = function (a, b) {
    for (var c = this.U(), d = 0; d < c.length; d++) {
      var e = c[d],
          f = this.get(e);
      a.call(b, f, e, this);
    }
  };

  function td(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }

  ;
  var ud = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

  function vd(a, b) {
    if (a) {
      a = a.split("&");

      for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="),
            e = null;

        if (0 <= d) {
          var f = a[c].substring(0, d);
          e = a[c].substring(d + 1);
        } else f = a[c];

        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
      }
    }
  }

  ;

  function wd(a, b) {
    this.b = this.i = this.f = "";
    this.m = null;
    this.g = this.c = "";
    this.h = !1;
    var c;
    a instanceof wd ? (this.h = void 0 !== b ? b : a.h, xd(this, a.f), this.i = a.i, this.b = a.b, yd(this, a.m), this.c = a.c, zd(this, Ad(a.a)), this.g = a.g) : a && (c = String(a).match(ud)) ? (this.h = !!b, xd(this, c[1] || "", !0), this.i = Bd(c[2] || ""), this.b = Bd(c[3] || "", !0), yd(this, c[4]), this.c = Bd(c[5] || "", !0), zd(this, c[6] || "", !0), this.g = Bd(c[7] || "")) : (this.h = !!b, this.a = new Cd(null, this.h));
  }

  wd.prototype.toString = function () {
    var a = [],
        b = this.f;
    b && a.push(Dd(b, Ed, !0), ":");
    var c = this.b;
    if (c || "file" == b) a.push("//"), (b = this.i) && a.push(Dd(b, Ed, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.m, null != c && a.push(":", String(c));
    if (c = this.c) this.b && "/" != c.charAt(0) && a.push("/"), a.push(Dd(c, "/" == c.charAt(0) ? Fd : Gd, !0));
    (c = this.a.toString()) && a.push("?", c);
    (c = this.g) && a.push("#", Dd(c, Hd));
    return a.join("");
  };

  wd.prototype.resolve = function (a) {
    var b = new wd(this),
        c = !!a.f;
    c ? xd(b, a.f) : c = !!a.i;
    c ? b.i = a.i : c = !!a.b;
    c ? b.b = a.b : c = null != a.m;
    var d = a.c;
    if (c) yd(b, a.m);else if (c = !!a.c) {
      if ("/" != d.charAt(0)) if (this.b && !this.c) d = "/" + d;else {
        var e = b.c.lastIndexOf("/");
        -1 != e && (d = b.c.substr(0, e + 1) + d);
      }
      e = d;
      if (".." == e || "." == e) d = "";else if (A(e, "./") || A(e, "/.")) {
        d = 0 == e.lastIndexOf("/", 0);
        e = e.split("/");

        for (var f = [], g = 0; g < e.length;) {
          var h = e[g++];
          "." == h ? d && g == e.length && f.push("") : ".." == h ? ((1 < f.length || 1 == f.length && "" != f[0]) && f.pop(), d && g == e.length && f.push("")) : (f.push(h), d = !0);
        }

        d = f.join("/");
      } else d = e;
    }
    c ? b.c = d : c = "" !== a.a.toString();
    c ? zd(b, Ad(a.a)) : c = !!a.g;
    c && (b.g = a.g);
    return b;
  };

  function xd(a, b, c) {
    a.f = c ? Bd(b, !0) : b;
    a.f && (a.f = a.f.replace(/:$/, ""));
  }

  function yd(a, b) {
    if (b) {
      b = Number(b);
      if (isNaN(b) || 0 > b) throw Error("Bad port number " + b);
      a.m = b;
    } else a.m = null;
  }

  function zd(a, b, c) {
    b instanceof Cd ? (a.a = b, Id(a.a, a.h)) : (c || (b = Dd(b, Jd)), a.a = new Cd(b, a.h));
  }

  function G(a, b, c) {
    a.a.set(b, c);
  }

  function Kd(a, b) {
    return a.a.get(b);
  }

  function Ld(a) {
    return a instanceof wd ? new wd(a) : new wd(a, void 0);
  }

  function Md(a, b) {
    var c = new wd(null, void 0);
    xd(c, "https");
    a && (c.b = a);
    b && (c.c = b);
    return c;
  }

  function Bd(a, b) {
    return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : "";
  }

  function Dd(a, b, c) {
    return n(a) ? (a = encodeURI(a).replace(b, Nd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null;
  }

  function Nd(a) {
    a = a.charCodeAt(0);
    return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16);
  }

  var Ed = /[#\/\?@]/g,
      Gd = /[#\?:]/g,
      Fd = /[#\?]/g,
      Jd = /[#\?@]/g,
      Hd = /#/g;

  function Cd(a, b) {
    this.b = this.a = null;
    this.c = a || null;
    this.f = !!b;
  }

  function Od(a) {
    a.a || (a.a = new rd(), a.b = 0, a.c && vd(a.c, function (b, c) {
      a.add(decodeURIComponent(b.replace(/\+/g, " ")), c);
    }));
  }

  function Pd(a) {
    var b = pd(a);
    if ("undefined" == typeof b) throw Error("Keys are undefined");
    var c = new Cd(null, void 0);
    a = od(a);

    for (var d = 0; d < b.length; d++) {
      var e = b[d],
          f = a[d];
      na(f) ? Qd(c, e, f) : c.add(e, f);
    }

    return c;
  }

  k = Cd.prototype;

  k.add = function (a, b) {
    Od(this);
    this.c = null;
    a = Rd(this, a);
    var c = this.a.get(a);
    c || this.a.set(a, c = []);
    c.push(b);
    this.b += 1;
    return this;
  };

  function Sd(a, b) {
    Od(a);
    b = Rd(a, b);
    td(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, td(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && sd(a)));
  }

  k.clear = function () {
    this.a = this.c = null;
    this.b = 0;
  };

  function Td(a, b) {
    Od(a);
    b = Rd(a, b);
    return td(a.a.b, b);
  }

  k.forEach = function (a, b) {
    Od(this);
    this.a.forEach(function (c, d) {
      x(c, function (e) {
        a.call(b, e, d, this);
      }, this);
    }, this);
  };

  k.U = function () {
    Od(this);

    for (var a = this.a.S(), b = this.a.U(), c = [], d = 0; d < b.length; d++) for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);

    return c;
  };

  k.S = function (a) {
    Od(this);
    var b = [];
    if (n(a)) Td(this, a) && (b = Pa(b, this.a.get(Rd(this, a))));else {
      a = this.a.S();

      for (var c = 0; c < a.length; c++) b = Pa(b, a[c]);
    }
    return b;
  };

  k.set = function (a, b) {
    Od(this);
    this.c = null;
    a = Rd(this, a);
    Td(this, a) && (this.b -= this.a.get(a).length);
    this.a.set(a, [b]);
    this.b += 1;
    return this;
  };

  k.get = function (a, b) {
    if (!a) return b;
    a = this.S(a);
    return 0 < a.length ? String(a[0]) : b;
  };

  function Qd(a, b, c) {
    Sd(a, b);
    0 < c.length && (a.c = null, a.a.set(Rd(a, b), Qa(c)), a.b += c.length);
  }

  k.toString = function () {
    if (this.c) return this.c;
    if (!this.a) return "";

    for (var a = [], b = this.a.U(), c = 0; c < b.length; c++) {
      var d = b[c],
          e = encodeURIComponent(String(d));
      d = this.S(d);

      for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
      }
    }

    return this.c = a.join("&");
  };

  function Ad(a) {
    var b = new Cd();
    b.c = a.c;
    a.a && (b.a = new rd(a.a), b.b = a.b);
    return b;
  }

  function Rd(a, b) {
    b = String(b);
    a.f && (b = b.toLowerCase());
    return b;
  }

  function Id(a, b) {
    b && !a.f && (Od(a), a.c = null, a.a.forEach(function (c, d) {
      var e = d.toLowerCase();
      d != e && (Sd(this, d), Qd(this, e, c));
    }, a));
    a.f = b;
  }

  ;
  var Ud = !tc || 9 <= Number(Ec);

  function Vd(a) {
    var b = document;
    return n(a) ? b.getElementById(a) : a;
  }

  function Wd(a, b) {
    Ra(b, function (c, d) {
      c && "object" == typeof c && c.na && (c = c.ma());
      "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : Xd.hasOwnProperty(d) ? a.setAttribute(Xd[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c;
    });
  }

  var Xd = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    frameborder: "frameBorder",
    height: "height",
    maxlength: "maxLength",
    nonce: "nonce",
    role: "role",
    rowspan: "rowSpan",
    type: "type",
    usemap: "useMap",
    valign: "vAlign",
    width: "width"
  };

  function Yd(a, b, c) {
    var d = arguments,
        e = document,
        f = String(d[0]),
        g = d[1];

    if (!Ud && g && (g.name || g.type)) {
      f = ["<", f];
      g.name && f.push(' name="', Hb(g.name), '"');

      if (g.type) {
        f.push(' type="', Hb(g.type), '"');
        var h = {};
        Va(h, g);
        delete h.type;
        g = h;
      }

      f.push(">");
      f = f.join("");
    }

    f = e.createElement(f);
    g && (n(g) ? f.className = g : na(g) ? f.className = g.join(" ") : Wd(f, g));
    2 < d.length && Zd(e, f, d);
    return f;
  }

  function Zd(a, b, c) {
    function d(g) {
      g && b.appendChild(n(g) ? a.createTextNode(g) : g);
    }

    for (var e = 2; e < c.length; e++) {
      var f = c[e];
      !oa(f) || r(f) && 0 < f.nodeType ? d(f) : x($d(f) ? Qa(f) : f, d);
    }
  }

  function $d(a) {
    if (a && "number" == typeof a.length) {
      if (r(a)) return "function" == typeof a.item || "string" == typeof a.item;
      if (q(a)) return "function" == typeof a.item;
    }

    return !1;
  }

  ;

  function ae(a) {
    var b = [];
    be(new ce(), a, b);
    return b.join("");
  }

  function ce() {}

  function be(a, b, c) {
    if (null == b) c.push("null");else {
      if ("object" == typeof b) {
        if (na(b)) {
          var d = b;
          b = d.length;
          c.push("[");

          for (var e = "", f = 0; f < b; f++) c.push(e), be(a, d[f], c), e = ",";

          c.push("]");
          return;
        }

        if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();else {
          c.push("{");
          e = "";

          for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), de(d, c), c.push(":"), be(a, f, c), e = ","));

          c.push("}");
          return;
        }
      }

      switch (typeof b) {
        case "string":
          de(b, c);
          break;

        case "number":
          c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
          break;

        case "boolean":
          c.push(String(b));
          break;

        case "function":
          c.push("null");
          break;

        default:
          throw Error("Unknown type: " + typeof b);
      }
    }
  }

  var ee = {
    '"': '\\"',
    "\\": "\\\\",
    "/": "\\/",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\u000b"
  },
      fe = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

  function de(a, b) {
    b.push('"', a.replace(fe, function (c) {
      var d = ee[c];
      d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), ee[c] = d);
      return d;
    }), '"');
  }

  ;
  /*
  Copyright 2017 Google Inc.
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

  function ge() {
    var a = I();
    return tc && !!Ec && 11 == Ec || /Edge\/\d+/.test(a);
  }

  function he() {
    return l.window && l.window.location.href || self && self.location && self.location.href || "";
  }

  function ie(a, b) {
    b = b || l.window;
    var c = "about:blank";
    a && (c = sb(ub(a)).toString());
    b.location.href = c;
  }

  function je(a, b) {
    var c = [],
        d;

    for (d in a) d in b ? typeof a[d] != typeof b[d] ? c.push(d) : "object" == typeof a[d] && null != a[d] && null != b[d] ? 0 < je(a[d], b[d]).length && c.push(d) : a[d] !== b[d] && c.push(d) : c.push(d);

    for (d in b) d in a || c.push(d);

    return c;
  }

  function ke() {
    var a = I();
    a = le(a) != me ? null : (a = a.match(/\sChrome\/(\d+)/i)) && 2 == a.length ? parseInt(a[1], 10) : null;
    return a && 30 > a ? !1 : !tc || !Ec || 9 < Ec;
  }

  function ne(a) {
    a = (a || I()).toLowerCase();
    return a.match(/android/) || a.match(/webos/) || a.match(/iphone|ipad|ipod/) || a.match(/blackberry/) || a.match(/windows phone/) || a.match(/iemobile/) ? !0 : !1;
  }

  function oe(a) {
    a = a || l.window;

    try {
      a.close();
    } catch (b) {}
  }

  function pe(a, b, c) {
    var d = Math.floor(1E9 * Math.random()).toString();
    b = b || 500;
    c = c || 600;
    var e = (window.screen.availHeight - c) / 2,
        f = (window.screen.availWidth - b) / 2;
    b = {
      width: b,
      height: c,
      top: 0 < e ? e : 0,
      left: 0 < f ? f : 0,
      location: !0,
      resizable: !0,
      statusbar: !0,
      toolbar: !1
    };
    c = I().toLowerCase();
    d && (b.target = d, A(c, "crios/") && (b.target = "_blank"));
    le(I()) == qe && (a = a || "http://localhost", b.scrollbars = !0);
    c = a || "";
    (a = b) || (a = {});
    d = window;
    b = c instanceof qb ? c : ub("undefined" != typeof c.href ? c.href : String(c));
    c = a.target || c.target;
    e = [];

    for (g in a) switch (g) {
      case "width":
      case "height":
      case "top":
      case "left":
        e.push(g + "=" + a[g]);
        break;

      case "target":
      case "noopener":
      case "noreferrer":
        break;

      default:
        e.push(g + "=" + (a[g] ? 1 : 0));
    }

    var g = e.join(",");
    (B("iPhone") && !B("iPod") && !B("iPad") || B("iPad") || B("iPod")) && d.navigator && d.navigator.standalone && c && "_self" != c ? (g = d.document.createElement("A"), Ga(g, "HTMLAnchorElement"), b instanceof qb || b instanceof qb || (b = "object" == typeof b && b.na ? b.ma() : String(b), tb.test(b) || (b = "about:invalid#zClosurez"), b = vb(b)), g.href = sb(b), g.setAttribute("target", c), a.noreferrer && g.setAttribute("rel", "noreferrer"), a = document.createEvent("MouseEvent"), a.initMouseEvent("click", !0, !0, d, 1), g.dispatchEvent(a), g = {}) : a.noreferrer ? (g = d.open("", c, g), a = sb(b).toString(), g && (vc && A(a, ";") && (a = "'" + a.replace(/'/g, "%27") + "'"), g.opener = null, a = Cb('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url=' + Hb(a) + '">'), g.document.write(Bb(a)), g.document.close())) : (g = d.open(sb(b).toString(), c, g)) && a.noopener && (g.opener = null);
    if (g) try {
      g.focus();
    } catch (h) {}
    return g;
  }

  function re(a) {
    return new C(function (b) {
      function c() {
        nd(2E3).then(function () {
          if (!a || a.closed) b();else return c();
        });
      }

      return c();
    });
  }

  var se = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,
      te = /^[^@]+@[^@]+$/;

  function ue() {
    var a = null;
    return new C(function (b) {
      "complete" == l.document.readyState ? b() : (a = function () {
        b();
      }, Xc(window, "load", a));
    }).s(function (b) {
      fd(window, "load", a);
      throw b;
    });
  }

  function ve() {
    return we(void 0) ? ue().then(function () {
      return new C(function (a, b) {
        var c = l.document,
            d = setTimeout(function () {
          b(Error("Cordova framework is not ready."));
        }, 1E3);
        c.addEventListener("deviceready", function () {
          clearTimeout(d);
          a();
        }, !1);
      });
    }) : E(Error("Cordova must run in an Android or iOS file scheme."));
  }

  function we(a) {
    a = a || I();
    return !("file:" !== xe() || !a.toLowerCase().match(/iphone|ipad|ipod|android/));
  }

  function ye() {
    var a = l.window;

    try {
      return !(!a || a == a.top);
    } catch (b) {
      return !1;
    }
  }

  function ze() {
    return "undefined" !== typeof l.WorkerGlobalScope && "function" === typeof l.importScripts;
  }

  function Ae() {
    return _app.default.INTERNAL.hasOwnProperty("reactNative") ? "ReactNative" : _app.default.INTERNAL.hasOwnProperty("node") ? "Node" : ze() ? "Worker" : "Browser";
  }

  function Be() {
    var a = Ae();
    return "ReactNative" === a || "Node" === a;
  }

  function Ce() {
    for (var a = 50, b = []; 0 < a;) b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;

    return b.join("");
  }

  var qe = "Firefox",
      me = "Chrome";

  function le(a) {
    var b = a.toLowerCase();
    if (A(b, "opera/") || A(b, "opr/") || A(b, "opios/")) return "Opera";
    if (A(b, "iemobile")) return "IEMobile";
    if (A(b, "msie") || A(b, "trident/")) return "IE";
    if (A(b, "edge/")) return "Edge";
    if (A(b, "firefox/")) return qe;
    if (A(b, "silk/")) return "Silk";
    if (A(b, "blackberry")) return "Blackberry";
    if (A(b, "webos")) return "Webos";
    if (!A(b, "safari/") || A(b, "chrome/") || A(b, "crios/") || A(b, "android")) {
      if (!A(b, "chrome/") && !A(b, "crios/") || A(b, "edge/")) {
        if (A(b, "android")) return "Android";
        if ((a = a.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/)) && 2 == a.length) return a[1];
      } else return me;
    } else return "Safari";
    return "Other";
  }

  var De = {
    Sc: "FirebaseCore-web",
    Uc: "FirebaseUI-web"
  };

  function Ee(a, b) {
    b = b || [];
    var c = [],
        d = {},
        e;

    for (e in De) d[De[e]] = !0;

    for (e = 0; e < b.length; e++) "undefined" !== typeof d[b[e]] && (delete d[b[e]], c.push(b[e]));

    c.sort();
    b = c;
    b.length || (b = ["FirebaseCore-web"]);
    c = Ae();
    "Browser" === c ? (d = I(), c = le(d)) : "Worker" === c && (d = I(), c = le(d) + "-" + c);
    return c + "/JsCore/" + a + "/" + b.join(",");
  }

  function I() {
    return l.navigator && l.navigator.userAgent || "";
  }

  function J(a, b) {
    a = a.split(".");
    b = b || l;

    for (var c = 0; c < a.length && "object" == typeof b && null != b; c++) b = b[a[c]];

    c != a.length && (b = void 0);
    return b;
  }

  function Fe() {
    try {
      var a = l.localStorage,
          b = Ge();
      if (a) return a.setItem(b, "1"), a.removeItem(b), ge() ? !!l.indexedDB : !0;
    } catch (c) {
      return ze() && !!l.indexedDB;
    }

    return !1;
  }

  function He() {
    return (Ie() || "chrome-extension:" === xe() || we()) && !Be() && Fe() && !ze();
  }

  function Ie() {
    return "http:" === xe() || "https:" === xe();
  }

  function xe() {
    return l.location && l.location.protocol || null;
  }

  function Je(a) {
    a = a || I();
    return ne(a) || le(a) == qe ? !1 : !0;
  }

  function Ke(a) {
    return "undefined" === typeof a ? null : ae(a);
  }

  function Le(a) {
    var b = {},
        c;

    for (c in a) a.hasOwnProperty(c) && null !== a[c] && void 0 !== a[c] && (b[c] = a[c]);

    return b;
  }

  function Me(a) {
    if (null !== a) return JSON.parse(a);
  }

  function Ge(a) {
    return a ? a : Math.floor(1E9 * Math.random()).toString();
  }

  function Ne(a) {
    a = a || I();
    return "Safari" == le(a) || a.toLowerCase().match(/iphone|ipad|ipod/) ? !1 : !0;
  }

  function Oe() {
    var a = l.___jsl;
    if (a && a.H) for (var b in a.H) if (a.H[b].r = a.H[b].r || [], a.H[b].L = a.H[b].L || [], a.H[b].r = a.H[b].L.concat(), a.CP) for (var c = 0; c < a.CP.length; c++) a.CP[c] = null;
  }

  function Pe(a, b) {
    if (a > b) throw Error("Short delay should be less than long delay!");
    this.a = a;
    this.c = b;
    a = I();
    b = Ae();
    this.b = ne(a) || "ReactNative" === b;
  }

  Pe.prototype.get = function () {
    var a = l.navigator;
    return (a && "boolean" === typeof a.onLine && (Ie() || "chrome-extension:" === xe() || "undefined" !== typeof a.connection) ? a.onLine : 1) ? this.b ? this.c : this.a : Math.min(5E3, this.a);
  };

  function Qe() {
    var a = l.document;
    return a && "undefined" !== typeof a.visibilityState ? "visible" == a.visibilityState : !0;
  }

  function Re() {
    var a = l.document,
        b = null;
    return Qe() || !a ? D() : new C(function (c) {
      b = function () {
        Qe() && (a.removeEventListener("visibilitychange", b, !1), c());
      };

      a.addEventListener("visibilitychange", b, !1);
    }).s(function (c) {
      a.removeEventListener("visibilitychange", b, !1);
      throw c;
    });
  }

  function Se(a) {
    try {
      var b = new Date(parseInt(a, 10));
      if (!isNaN(b.getTime()) && !/[^0-9]/.test(a)) return b.toUTCString();
    } catch (c) {}

    return null;
  }

  function Te() {
    return !(!J("fireauth.oauthhelper", l) && !J("fireauth.iframe", l));
  }

  function Ue() {
    var a = l.navigator;
    return a && a.serviceWorker && a.serviceWorker.controller || null;
  }

  function Ve() {
    var a = l.navigator;
    return a && a.serviceWorker ? D().then(function () {
      return a.serviceWorker.ready;
    }).then(function (b) {
      return b.active || null;
    }).s(function () {
      return null;
    }) : D(null);
  }

  ;
  var We = {};

  function Xe(a) {
    We[a] || (We[a] = !0, "undefined" !== typeof console && "function" === typeof console.warn && console.warn(a));
  }

  ;
  var Ye;

  try {
    var Ze = {};
    Object.defineProperty(Ze, "abcd", {
      configurable: !0,
      enumerable: !0,
      value: 1
    });
    Object.defineProperty(Ze, "abcd", {
      configurable: !0,
      enumerable: !0,
      value: 2
    });
    Ye = 2 == Ze.abcd;
  } catch (a) {
    Ye = !1;
  }

  function K(a, b, c) {
    Ye ? Object.defineProperty(a, b, {
      configurable: !0,
      enumerable: !0,
      value: c
    }) : a[b] = c;
  }

  function L(a, b) {
    if (b) for (var c in b) b.hasOwnProperty(c) && K(a, c, b[c]);
  }

  function $e(a) {
    var b = {};
    L(b, a);
    return b;
  }

  function af(a) {
    var b = {},
        c;

    for (c in a) a.hasOwnProperty(c) && (b[c] = a[c]);

    return b;
  }

  function bf(a, b) {
    if (!b || !b.length) return !0;
    if (!a) return !1;

    for (var c = 0; c < b.length; c++) {
      var d = a[b[c]];
      if (void 0 === d || null === d || "" === d) return !1;
    }

    return !0;
  }

  function cf(a) {
    var b = a;

    if ("object" == typeof a && null != a) {
      b = "length" in a ? [] : {};

      for (var c in a) K(b, c, cf(a[c]));
    }

    return b;
  }

  ;

  function df(a) {
    var b = {},
        c = a[ef],
        d = a[ff];
    a = a[gf];
    if (!a || a != hf && !c) throw Error("Invalid provider user info!");
    b[jf] = d || null;
    b[kf] = c || null;
    K(this, lf, a);
    K(this, mf, cf(b));
  }

  var hf = "EMAIL_SIGNIN",
      ef = "email",
      ff = "newEmail",
      gf = "requestType",
      kf = "email",
      jf = "fromEmail",
      mf = "data",
      lf = "operation";

  function M(a, b) {
    this.code = nf + a;
    this.message = b || of[a] || "";
  }

  u(M, Error);

  M.prototype.w = function () {
    return {
      code: this.code,
      message: this.message
    };
  };

  M.prototype.toJSON = function () {
    return this.w();
  };

  function pf(a) {
    var b = a && a.code;
    return b ? new M(b.substring(nf.length), a.message) : null;
  }

  var nf = "auth/",
      of = {
    "admin-restricted-operation": "This operation is restricted to administrators only.",
    "argument-error": "",
    "app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
    "app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
    "captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
    "code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
    "cordova-not-ready": "Cordova framework is not ready.",
    "cors-unsupported": "This browser is not supported.",
    "credential-already-in-use": "This credential is already associated with a different user account.",
    "custom-token-mismatch": "The custom token corresponds to a different audience.",
    "requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
    "dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
    "email-already-in-use": "The email address is already in use by another account.",
    "expired-action-code": "The action code has expired. ",
    "cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
    "internal-error": "An internal error has occurred.",
    "invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
    "invalid-app-id": "The mobile app identifier is not registed for the current project.",
    "invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
    "invalid-auth-event": "An internal error has occurred.",
    "invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
    "invalid-continue-uri": "The continue URL provided in the request is invalid.",
    "invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
    "invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
    "invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
    "invalid-email": "The email address is badly formatted.",
    "invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
    "invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
    "invalid-credential": "The supplied auth credential is malformed or has expired.",
    "invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
    "invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
    "invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
    "unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
    "invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
    "wrong-password": "The password is invalid or the user does not have a password.",
    "invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
    "invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
    "invalid-provider-id": "The specified provider ID is invalid.",
    "invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
    "invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
    "invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
    "missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
    "auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
    "missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
    "missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
    "missing-continue-uri": "A continue URL must be provided in the request.",
    "missing-iframe-start": "An internal error has occurred.",
    "missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
    "missing-or-invalid-nonce": "The OIDC ID token requires a valid unhashed nonce.",
    "missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
    "missing-verification-id": "The phone auth credential was created with an empty verification ID.",
    "app-deleted": "This instance of FirebaseApp has been deleted.",
    "account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
    "network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
    "no-auth-event": "An internal error has occurred.",
    "no-such-provider": "User was not linked to an account with the given provider.",
    "null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
    "operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
    "operation-not-supported-in-this-environment": 'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
    "popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
    "popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
    "provider-already-linked": "User can only be linked to one identity for the given provider.",
    "quota-exceeded": "The project's quota for this operation has been exceeded.",
    "redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
    "redirect-operation-pending": "A redirect sign-in operation is already pending.",
    "rejected-credential": "The request contains malformed or mismatching credentials.",
    timeout: "The operation has timed out.",
    "user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
    "too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
    "unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
    "unsupported-persistence-type": "The current environment does not support the specified persistence type.",
    "user-cancelled": "User did not grant your application the permissions it requested.",
    "user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
    "user-disabled": "The user account has been disabled by an administrator.",
    "user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
    "user-signed-out": "",
    "weak-password": "The password must be 6 characters long or more.",
    "web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
  };

  function qf(a) {
    var b = a[rf];
    if ("undefined" === typeof b) throw new M("missing-continue-uri");
    if ("string" !== typeof b || "string" === typeof b && !b.length) throw new M("invalid-continue-uri");
    this.h = b;
    this.b = this.a = null;
    this.g = !1;
    var c = a[sf];

    if (c && "object" === typeof c) {
      b = c[tf];
      var d = c[uf];
      c = c[vf];

      if ("string" === typeof b && b.length) {
        this.a = b;
        if ("undefined" !== typeof d && "boolean" !== typeof d) throw new M("argument-error", uf + " property must be a boolean when specified.");
        this.g = !!d;
        if ("undefined" !== typeof c && ("string" !== typeof c || "string" === typeof c && !c.length)) throw new M("argument-error", vf + " property must be a non empty string when specified.");
        this.b = c || null;
      } else {
        if ("undefined" !== typeof b) throw new M("argument-error", tf + " property must be a non empty string when specified.");
        if ("undefined" !== typeof d || "undefined" !== typeof c) throw new M("missing-android-pkg-name");
      }
    } else if ("undefined" !== typeof c) throw new M("argument-error", sf + " property must be a non null object when specified.");

    this.f = null;
    if ((b = a[wf]) && "object" === typeof b) {
      if (b = b[xf], "string" === typeof b && b.length) this.f = b;else {
        if ("undefined" !== typeof b) throw new M("argument-error", xf + " property must be a non empty string when specified.");
      }
    } else if ("undefined" !== typeof b) throw new M("argument-error", wf + " property must be a non null object when specified.");
    b = a[yf];
    if ("undefined" !== typeof b && "boolean" !== typeof b) throw new M("argument-error", yf + " property must be a boolean when specified.");
    this.c = !!b;
    a = a[zf];
    if ("undefined" !== typeof a && ("string" !== typeof a || "string" === typeof a && !a.length)) throw new M("argument-error", zf + " property must be a non empty string when specified.");
    this.i = a || null;
  }

  var sf = "android",
      zf = "dynamicLinkDomain",
      yf = "handleCodeInApp",
      wf = "iOS",
      rf = "url",
      uf = "installApp",
      vf = "minimumVersion",
      tf = "packageName",
      xf = "bundleId";

  function Af(a) {
    var b = {};
    b.continueUrl = a.h;
    b.canHandleCodeInApp = a.c;
    if (b.androidPackageName = a.a) b.androidMinimumVersion = a.b, b.androidInstallApp = a.g;
    b.iOSBundleId = a.f;
    b.dynamicLinkDomain = a.i;

    for (var c in b) null === b[c] && delete b[c];

    return b;
  }

  ;

  function Bf(a) {
    return Ja(a, function (b) {
      b = b.toString(16);
      return 1 < b.length ? b : "0" + b;
    }).join("");
  }

  ;
  var Cf = null,
      Df = null;

  function Ef(a) {
    var b = "";
    Ff(a, function (c) {
      b += String.fromCharCode(c);
    });
    return b;
  }

  function Ff(a, b) {
    function c(m) {
      for (; d < a.length;) {
        var p = a.charAt(d++),
            v = Df[p];
        if (null != v) return v;
        if (!/^[\s\xa0]*$/.test(p)) throw Error("Unknown base64 encoding at char: " + p);
      }

      return m;
    }

    Gf();

    for (var d = 0;;) {
      var e = c(-1),
          f = c(0),
          g = c(64),
          h = c(64);
      if (64 === h && -1 === e) break;
      b(e << 2 | f >> 4);
      64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h));
    }
  }

  function Gf() {
    if (!Cf) {
      Cf = {};
      Df = {};

      for (var a = 0; 65 > a; a++) Cf[a] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a), Df[Cf[a]] = a, 62 <= a && (Df["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.".charAt(a)] = a);
    }
  }

  ;

  function Hf(a) {
    this.c = a.sub;
    va();
    this.a = a.provider_id || a.firebase && a.firebase.sign_in_provider || null;
    this.b = !!a.is_anonymous || "anonymous" == this.a;
  }

  Hf.prototype.f = function () {
    return this.b;
  };

  function If(a) {
    return (a = Jf(a)) && a.sub && a.iss && a.aud && a.exp ? new Hf(a) : null;
  }

  function Jf(a) {
    if (!a) return null;
    a = a.split(".");
    if (3 != a.length) return null;
    a = a[1];

    for (var b = (4 - a.length % 4) % 4, c = 0; c < b; c++) a += ".";

    try {
      return JSON.parse(Ef(a));
    } catch (d) {}

    return null;
  }

  ;
  var Kf = {
    Yc: {
      bb: "https://www.googleapis.com/identitytoolkit/v3/relyingparty/",
      jb: "https://securetoken.googleapis.com/v1/token",
      id: "p"
    },
    $c: {
      bb: "https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",
      jb: "https://staging-securetoken.sandbox.googleapis.com/v1/token",
      id: "s"
    },
    ad: {
      bb: "https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",
      jb: "https://test-securetoken.sandbox.googleapis.com/v1/token",
      id: "t"
    }
  };

  function Lf(a) {
    for (var b in Kf) if (Kf[b].id === a) return a = Kf[b], {
      firebaseEndpoint: a.bb,
      secureTokenEndpoint: a.jb
    };

    return null;
  }

  var Mf;
  Mf = Lf("__EID__") ? "__EID__" : void 0;
  var Nf = "oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),
      Of = ["client_id", "response_type", "scope", "redirect_uri", "state"],
      Pf = {
    Tc: {
      Oa: "locale",
      Ba: 500,
      Aa: 600,
      Pa: "facebook.com",
      ib: Of
    },
    Vc: {
      Oa: null,
      Ba: 500,
      Aa: 620,
      Pa: "github.com",
      ib: Of
    },
    Wc: {
      Oa: "hl",
      Ba: 515,
      Aa: 680,
      Pa: "google.com",
      ib: Of
    },
    bd: {
      Oa: "lang",
      Ba: 485,
      Aa: 705,
      Pa: "twitter.com",
      ib: Nf
    }
  };

  function Qf(a) {
    for (var b in Pf) if (Pf[b].Pa == a) return Pf[b];

    return null;
  }

  ;

  function Rf(a) {
    var b = {};
    b["facebook.com"] = Sf;
    b["google.com"] = Tf;
    b["github.com"] = Uf;
    b["twitter.com"] = Vf;
    var c = a && a[Wf];

    try {
      if (c) return b[c] ? new b[c](a) : new Xf(a);
      if ("undefined" !== typeof a[Yf]) return new Zf(a);
    } catch (d) {}

    return null;
  }

  var Yf = "idToken",
      Wf = "providerId";

  function Zf(a) {
    var b = a[Wf];

    if (!b && a[Yf]) {
      var c = If(a[Yf]);
      c && c.a && (b = c.a);
    }

    if (!b) throw Error("Invalid additional user info!");
    if ("anonymous" == b || "custom" == b) b = null;
    c = !1;
    "undefined" !== typeof a.isNewUser ? c = !!a.isNewUser : "identitytoolkit#SignupNewUserResponse" === a.kind && (c = !0);
    K(this, "providerId", b);
    K(this, "isNewUser", c);
  }

  function Xf(a) {
    Zf.call(this, a);
    a = Me(a.rawUserInfo || "{}");
    K(this, "profile", cf(a || {}));
  }

  u(Xf, Zf);

  function Sf(a) {
    Xf.call(this, a);
    if ("facebook.com" != this.providerId) throw Error("Invalid provider ID!");
  }

  u(Sf, Xf);

  function Uf(a) {
    Xf.call(this, a);
    if ("github.com" != this.providerId) throw Error("Invalid provider ID!");
    K(this, "username", this.profile && this.profile.login || null);
  }

  u(Uf, Xf);

  function Tf(a) {
    Xf.call(this, a);
    if ("google.com" != this.providerId) throw Error("Invalid provider ID!");
  }

  u(Tf, Xf);

  function Vf(a) {
    Xf.call(this, a);
    if ("twitter.com" != this.providerId) throw Error("Invalid provider ID!");
    K(this, "username", a.screenName || null);
  }

  u(Vf, Xf);

  function $f(a) {
    this.a = Ld(a);
  }

  ;

  function ag(a) {
    var b = Ld(a),
        c = Kd(b, "link"),
        d = Kd(Ld(c), "link");
    b = Kd(b, "deep_link_id");
    return Kd(Ld(b), "link") || b || d || c || a;
  }

  ;

  function bg() {}

  function cg(a, b) {
    return a.then(function (c) {
      if (c[dg]) {
        var d = If(c[dg]);
        if (!d || b != d.c) throw new M("user-mismatch");
        return c;
      }

      throw new M("user-mismatch");
    }).s(function (c) {
      throw c && c.code && c.code == nf + "user-not-found" ? new M("user-mismatch") : c;
    });
  }

  function eg(a, b) {
    if (b) this.a = b;else throw new M("internal-error", "failed to construct a credential");
    K(this, "providerId", a);
    K(this, "signInMethod", a);
  }

  eg.prototype.la = function (a) {
    return fg(a, gg(this));
  };

  eg.prototype.b = function (a, b) {
    var c = gg(this);
    c.idToken = b;
    return hg(a, c);
  };

  eg.prototype.f = function (a, b) {
    return cg(ig(a, gg(this)), b);
  };

  function gg(a) {
    return {
      pendingToken: a.a,
      requestUri: "http://localhost"
    };
  }

  eg.prototype.w = function () {
    return {
      providerId: this.providerId,
      signInMethod: this.signInMethod,
      pendingToken: this.a
    };
  };

  function jg(a) {
    if (a && a.providerId && a.signInMethod && 0 == a.providerId.indexOf("saml.") && a.pendingToken) try {
      return new eg(a.providerId, a.pendingToken);
    } catch (b) {}
    return null;
  }

  function kg(a, b, c) {
    this.a = null;
    if (b.idToken || b.accessToken) b.idToken && K(this, "idToken", b.idToken), b.accessToken && K(this, "accessToken", b.accessToken), b.nonce && !b.pendingToken && K(this, "nonce", b.nonce), b.pendingToken && (this.a = b.pendingToken);else if (b.oauthToken && b.oauthTokenSecret) K(this, "accessToken", b.oauthToken), K(this, "secret", b.oauthTokenSecret);else throw new M("internal-error", "failed to construct a credential");
    K(this, "providerId", a);
    K(this, "signInMethod", c);
  }

  kg.prototype.la = function (a) {
    return fg(a, lg(this));
  };

  kg.prototype.b = function (a, b) {
    var c = lg(this);
    c.idToken = b;
    return hg(a, c);
  };

  kg.prototype.f = function (a, b) {
    var c = lg(this);
    return cg(ig(a, c), b);
  };

  function lg(a) {
    var b = {};
    a.idToken && (b.id_token = a.idToken);
    a.accessToken && (b.access_token = a.accessToken);
    a.secret && (b.oauth_token_secret = a.secret);
    b.providerId = a.providerId;
    a.nonce && !a.a && (b.nonce = a.nonce);
    b = {
      postBody: Pd(b).toString(),
      requestUri: "http://localhost"
    };
    a.a && (delete b.postBody, b.pendingToken = a.a);
    return b;
  }

  kg.prototype.w = function () {
    var a = {
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
    this.idToken && (a.oauthIdToken = this.idToken);
    this.accessToken && (a.oauthAccessToken = this.accessToken);
    this.secret && (a.oauthTokenSecret = this.secret);
    this.nonce && (a.nonce = this.nonce);
    this.a && (a.pendingToken = this.a);
    return a;
  };

  function mg(a) {
    if (a && a.providerId && a.signInMethod) {
      var b = {
        idToken: a.oauthIdToken,
        accessToken: a.oauthTokenSecret ? null : a.oauthAccessToken,
        oauthTokenSecret: a.oauthTokenSecret,
        oauthToken: a.oauthTokenSecret && a.oauthAccessToken,
        nonce: a.nonce,
        pendingToken: a.pendingToken
      };

      try {
        return new kg(a.providerId, b, a.signInMethod);
      } catch (c) {}
    }

    return null;
  }

  function ng(a, b) {
    this.Cc = b || [];
    L(this, {
      providerId: a,
      isOAuthProvider: !0
    });
    this.zb = {};
    this.eb = (Qf(a) || {}).Oa || null;
    this.ab = null;
  }

  ng.prototype.Da = function (a) {
    this.zb = Ta(a);
    return this;
  };

  function og(a) {
    if ("string" !== typeof a || 0 != a.indexOf("saml.")) throw new M("argument-error", 'SAML provider IDs must be prefixed with "saml."');
    ng.call(this, a, []);
  }

  u(og, ng);

  function N(a) {
    ng.call(this, a, Of);
    this.a = [];
  }

  u(N, ng);

  N.prototype.ua = function (a) {
    Na(this.a, a) || this.a.push(a);
    return this;
  };

  N.prototype.Fb = function () {
    return Qa(this.a);
  };

  N.prototype.credential = function (a, b) {
    var c;
    r(a) ? c = {
      idToken: a.idToken || null,
      accessToken: a.accessToken || null,
      nonce: a.rawNonce || null
    } : c = {
      idToken: a || null,
      accessToken: b || null
    };
    if (!c.idToken && !c.accessToken) throw new M("argument-error", "credential failed: must provide the ID token and/or the access token.");
    return new kg(this.providerId, c, this.providerId);
  };

  function pg() {
    N.call(this, "facebook.com");
  }

  u(pg, N);
  K(pg, "PROVIDER_ID", "facebook.com");
  K(pg, "FACEBOOK_SIGN_IN_METHOD", "facebook.com");

  function qg(a) {
    if (!a) throw new M("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
    var b = a;
    r(a) && (b = a.accessToken);
    return new pg().credential({
      accessToken: b
    });
  }

  function rg() {
    N.call(this, "github.com");
  }

  u(rg, N);
  K(rg, "PROVIDER_ID", "github.com");
  K(rg, "GITHUB_SIGN_IN_METHOD", "github.com");

  function sg(a) {
    if (!a) throw new M("argument-error", "credential failed: expected 1 argument (the OAuth access token).");
    var b = a;
    r(a) && (b = a.accessToken);
    return new rg().credential({
      accessToken: b
    });
  }

  function tg() {
    N.call(this, "google.com");
    this.ua("profile");
  }

  u(tg, N);
  K(tg, "PROVIDER_ID", "google.com");
  K(tg, "GOOGLE_SIGN_IN_METHOD", "google.com");

  function ug(a, b) {
    var c = a;
    r(a) && (c = a.idToken, b = a.accessToken);
    return new tg().credential({
      idToken: c,
      accessToken: b
    });
  }

  function vg() {
    ng.call(this, "twitter.com", Nf);
  }

  u(vg, ng);
  K(vg, "PROVIDER_ID", "twitter.com");
  K(vg, "TWITTER_SIGN_IN_METHOD", "twitter.com");

  function wg(a, b) {
    var c = a;
    r(c) || (c = {
      oauthToken: a,
      oauthTokenSecret: b
    });
    if (!c.oauthToken || !c.oauthTokenSecret) throw new M("argument-error", "credential failed: expected 2 arguments (the OAuth access token and secret).");
    return new kg("twitter.com", c, "twitter.com");
  }

  function xg(a, b, c) {
    this.a = a;
    this.c = b;
    K(this, "providerId", "password");
    K(this, "signInMethod", c === yg.EMAIL_LINK_SIGN_IN_METHOD ? yg.EMAIL_LINK_SIGN_IN_METHOD : yg.EMAIL_PASSWORD_SIGN_IN_METHOD);
  }

  xg.prototype.la = function (a) {
    return this.signInMethod == yg.EMAIL_LINK_SIGN_IN_METHOD ? O(a, zg, {
      email: this.a,
      oobCode: this.c
    }) : O(a, Ag, {
      email: this.a,
      password: this.c
    });
  };

  xg.prototype.b = function (a, b) {
    return this.signInMethod == yg.EMAIL_LINK_SIGN_IN_METHOD ? O(a, Bg, {
      idToken: b,
      email: this.a,
      oobCode: this.c
    }) : O(a, Cg, {
      idToken: b,
      email: this.a,
      password: this.c
    });
  };

  xg.prototype.f = function (a, b) {
    return cg(this.la(a), b);
  };

  xg.prototype.w = function () {
    return {
      email: this.a,
      password: this.c,
      signInMethod: this.signInMethod
    };
  };

  function Dg(a) {
    return a && a.email && a.password ? new xg(a.email, a.password, a.signInMethod) : null;
  }

  function yg() {
    L(this, {
      providerId: "password",
      isOAuthProvider: !1
    });
  }

  function Eg(a, b) {
    b = Fg(b);
    if (!b) throw new M("argument-error", "Invalid email link!");
    return new xg(a, b, yg.EMAIL_LINK_SIGN_IN_METHOD);
  }

  function Fg(a) {
    a = ag(a);
    a = new $f(a);
    var b = Kd(a.a, "oobCode") || null;
    return "signIn" === (Kd(a.a, "mode") || null) && b ? b : null;
  }

  L(yg, {
    PROVIDER_ID: "password"
  });
  L(yg, {
    EMAIL_LINK_SIGN_IN_METHOD: "emailLink"
  });
  L(yg, {
    EMAIL_PASSWORD_SIGN_IN_METHOD: "password"
  });

  function Gg(a) {
    if (!(a.Ua && a.Ta || a.Fa && a.$)) throw new M("internal-error");
    this.a = a;
    K(this, "providerId", "phone");
    K(this, "signInMethod", "phone");
  }

  Gg.prototype.la = function (a) {
    return a.Va(Hg(this));
  };

  Gg.prototype.b = function (a, b) {
    var c = Hg(this);
    c.idToken = b;
    return O(a, Ig, c);
  };

  Gg.prototype.f = function (a, b) {
    var c = Hg(this);
    c.operation = "REAUTH";
    a = O(a, Jg, c);
    return cg(a, b);
  };

  Gg.prototype.w = function () {
    var a = {
      providerId: "phone"
    };
    this.a.Ua && (a.verificationId = this.a.Ua);
    this.a.Ta && (a.verificationCode = this.a.Ta);
    this.a.Fa && (a.temporaryProof = this.a.Fa);
    this.a.$ && (a.phoneNumber = this.a.$);
    return a;
  };

  function Kg(a) {
    if (a && "phone" === a.providerId && (a.verificationId && a.verificationCode || a.temporaryProof && a.phoneNumber)) {
      var b = {};
      x(["verificationId", "verificationCode", "temporaryProof", "phoneNumber"], function (c) {
        a[c] && (b[c] = a[c]);
      });
      return new Gg(b);
    }

    return null;
  }

  function Hg(a) {
    return a.a.Fa && a.a.$ ? {
      temporaryProof: a.a.Fa,
      phoneNumber: a.a.$
    } : {
      sessionInfo: a.a.Ua,
      code: a.a.Ta
    };
  }

  function Lg(a) {
    try {
      this.a = a || _app.default.auth();
    } catch (b) {
      throw new M("argument-error", "Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().");
    }

    L(this, {
      providerId: "phone",
      isOAuthProvider: !1
    });
  }

  Lg.prototype.Va = function (a, b) {
    var c = this.a.c;
    return D(b.verify()).then(function (d) {
      if (!n(d)) throw new M("argument-error", "An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.");

      switch (b.type) {
        case "recaptcha":
          return Mg(c, {
            phoneNumber: a,
            recaptchaToken: d
          }).then(function (e) {
            "function" === typeof b.reset && b.reset();
            return e;
          }, function (e) {
            "function" === typeof b.reset && b.reset();
            throw e;
          });

        default:
          throw new M("argument-error", 'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.');
      }
    });
  };

  function Ng(a, b) {
    if (!a) throw new M("missing-verification-id");
    if (!b) throw new M("missing-verification-code");
    return new Gg({
      Ua: a,
      Ta: b
    });
  }

  L(Lg, {
    PROVIDER_ID: "phone"
  });
  L(Lg, {
    PHONE_SIGN_IN_METHOD: "phone"
  });

  function Og(a) {
    if (a.temporaryProof && a.phoneNumber) return new Gg({
      Fa: a.temporaryProof,
      $: a.phoneNumber
    });
    var b = a && a.providerId;
    if (!b || "password" === b) return null;
    var c = a && a.oauthAccessToken,
        d = a && a.oauthTokenSecret,
        e = a && a.nonce,
        f = a && a.oauthIdToken,
        g = a && a.pendingToken;

    try {
      switch (b) {
        case "google.com":
          return ug(f, c);

        case "facebook.com":
          return qg(c);

        case "github.com":
          return sg(c);

        case "twitter.com":
          return wg(c, d);

        default:
          return c || d || f || g ? g ? 0 == b.indexOf("saml.") ? new eg(b, g) : new kg(b, {
            pendingToken: g,
            idToken: a.oauthIdToken,
            accessToken: a.oauthAccessToken
          }, b) : new N(b).credential({
            idToken: f,
            accessToken: c,
            rawNonce: e
          }) : null;
      }
    } catch (h) {
      return null;
    }
  }

  function Pg(a) {
    if (!a.isOAuthProvider) throw new M("invalid-oauth-provider");
  }

  ;

  function Qg(a, b, c, d, e, f) {
    this.c = a;
    this.b = b || null;
    this.g = c || null;
    this.f = d || null;
    this.h = f || null;
    this.a = e || null;

    if (this.g || this.a) {
      if (this.g && this.a) throw new M("invalid-auth-event");
      if (this.g && !this.f) throw new M("invalid-auth-event");
    } else throw new M("invalid-auth-event");
  }

  Qg.prototype.getUid = function () {
    var a = [];
    a.push(this.c);
    this.b && a.push(this.b);
    this.f && a.push(this.f);
    this.i && a.push(this.i);
    return a.join("-");
  };

  Qg.prototype.w = function () {
    return {
      type: this.c,
      eventId: this.b,
      urlResponse: this.g,
      sessionId: this.f,
      postBody: this.h,
      error: this.a && this.a.w()
    };
  };

  function Rg(a) {
    a = a || {};
    return a.type ? new Qg(a.type, a.eventId, a.urlResponse, a.sessionId, a.error && pf(a.error), a.postBody) : null;
  }

  ;
  /*
  Copyright 2018 Google Inc.
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

  function Sg() {
    this.b = null;
    this.a = [];
  }

  var Tg = null;

  Sg.prototype.subscribe = function (a) {
    var b = this;
    this.a.push(a);
    this.b || (this.b = function (c) {
      for (var d = 0; d < b.a.length; d++) b.a[d](c);
    }, a = J("universalLinks.subscribe", l), "function" === typeof a && a(null, this.b));
  };

  Sg.prototype.unsubscribe = function (a) {
    y(this.a, function (b) {
      return b == a;
    });
  };

  function Ug(a) {
    var b = "unauthorized-domain",
        c = void 0,
        d = Ld(a);
    a = d.b;
    d = d.f;
    "chrome-extension" == d ? c = Gb("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : "http" == d || "https" == d ? c = Gb("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.", a) : b = "operation-not-supported-in-this-environment";
    M.call(this, b, c);
  }

  u(Ug, M);

  function Vg(a, b, c) {
    M.call(this, a, c);
    a = b || {};
    a.Ab && K(this, "email", a.Ab);
    a.$ && K(this, "phoneNumber", a.$);
    a.credential && K(this, "credential", a.credential);
  }

  u(Vg, M);

  Vg.prototype.w = function () {
    var a = {
      code: this.code,
      message: this.message
    };
    this.email && (a.email = this.email);
    this.phoneNumber && (a.phoneNumber = this.phoneNumber);
    var b = this.credential && this.credential.w();
    b && Va(a, b);
    return a;
  };

  Vg.prototype.toJSON = function () {
    return this.w();
  };

  function Wg(a) {
    if (a.code) {
      var b = a.code || "";
      0 == b.indexOf(nf) && (b = b.substring(nf.length));
      var c = {
        credential: Og(a)
      };
      if (a.email) c.Ab = a.email;else if (a.phoneNumber) c.$ = a.phoneNumber;else if (!c.credential) return new M(b, a.message || void 0);
      return new Vg(b, c, a.message);
    }

    return null;
  }

  ;

  function Xg() {}

  Xg.prototype.c = null;

  function Yg(a) {
    return a.c || (a.c = a.b());
  }

  ;
  var Zg;

  function $g() {}

  u($g, Xg);

  $g.prototype.a = function () {
    var a = ah(this);
    return a ? new ActiveXObject(a) : new XMLHttpRequest();
  };

  $g.prototype.b = function () {
    var a = {};
    ah(this) && (a[0] = !0, a[1] = !0);
    return a;
  };

  function ah(a) {
    if (!a.f && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
      for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
        var d = b[c];

        try {
          return new ActiveXObject(d), a.f = d;
        } catch (e) {}
      }

      throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }

    return a.f;
  }

  Zg = new $g();

  function bh() {}

  u(bh, Xg);

  bh.prototype.a = function () {
    var a = new XMLHttpRequest();
    if ("withCredentials" in a) return a;
    if ("undefined" != typeof XDomainRequest) return new ch();
    throw Error("Unsupported browser");
  };

  bh.prototype.b = function () {
    return {};
  };

  function ch() {
    this.a = new XDomainRequest();
    this.readyState = 0;
    this.onreadystatechange = null;
    this.responseType = this.responseText = this.response = "";
    this.status = -1;
    this.statusText = "";
    this.a.onload = t(this.cc, this);
    this.a.onerror = t(this.Gb, this);
    this.a.onprogress = t(this.dc, this);
    this.a.ontimeout = t(this.hc, this);
  }

  k = ch.prototype;

  k.open = function (a, b, c) {
    if (null != c && !c) throw Error("Only async requests are supported.");
    this.a.open(a, b);
  };

  k.send = function (a) {
    if (a) {
      if ("string" == typeof a) this.a.send(a);else throw Error("Only string data is supported");
    } else this.a.send();
  };

  k.abort = function () {
    this.a.abort();
  };

  k.setRequestHeader = function () {};

  k.getResponseHeader = function (a) {
    return "content-type" == a.toLowerCase() ? this.a.contentType : "";
  };

  k.cc = function () {
    this.status = 200;
    this.response = this.responseText = this.a.responseText;
    dh(this, 4);
  };

  k.Gb = function () {
    this.status = 500;
    this.response = this.responseText = "";
    dh(this, 4);
  };

  k.hc = function () {
    this.Gb();
  };

  k.dc = function () {
    this.status = 200;
    dh(this, 1);
  };

  function dh(a, b) {
    a.readyState = b;
    if (a.onreadystatechange) a.onreadystatechange();
  }

  k.getAllResponseHeaders = function () {
    return "content-type: " + this.a.contentType;
  };

  function eh(a, b, c) {
    this.reset(a, b, c, void 0, void 0);
  }

  eh.prototype.a = null;
  var fh = 0;

  eh.prototype.reset = function (a, b, c, d, e) {
    "number" == typeof e || fh++;
    d || va();
    delete this.a;
  };

  function gh(a) {
    this.f = a;
    this.b = this.c = this.a = null;
  }

  function hh(a, b) {
    this.name = a;
    this.value = b;
  }

  hh.prototype.toString = function () {
    return this.name;
  };

  var ih = new hh("SEVERE", 1E3),
      jh = new hh("WARNING", 900),
      kh = new hh("CONFIG", 700),
      lh = new hh("FINE", 500);

  function mh(a) {
    if (a.c) return a.c;
    if (a.a) return mh(a.a);
    ya("Root logger has no level set.");
    return null;
  }

  gh.prototype.log = function (a, b, c) {
    if (a.value >= mh(this).value) for (q(b) && (b = b()), a = new eh(a, String(b), this.f), c && (a.a = c), c = this; c;) c = c.a;
  };

  var nh = {},
      oh = null;

  function ph(a) {
    oh || (oh = new gh(""), nh[""] = oh, oh.c = kh);
    var b;

    if (!(b = nh[a])) {
      b = new gh(a);
      var c = a.lastIndexOf("."),
          d = a.substr(c + 1);
      c = ph(a.substr(0, c));
      c.b || (c.b = {});
      c.b[d] = b;
      b.a = c;
      nh[a] = b;
    }

    return b;
  }

  ;

  function qh(a, b) {
    a && a.log(lh, b, void 0);
  }

  ;

  function rh(a) {
    this.f = a;
  }

  u(rh, Xg);

  rh.prototype.a = function () {
    return new sh(this.f);
  };

  rh.prototype.b = function (a) {
    return function () {
      return a;
    };
  }({});

  function sh(a) {
    F.call(this);
    this.u = a;
    this.readyState = th;
    this.status = 0;
    this.responseType = this.responseText = this.response = this.statusText = "";
    this.onreadystatechange = null;
    this.i = new Headers();
    this.b = null;
    this.o = "GET";
    this.g = "";
    this.a = !1;
    this.h = ph("goog.net.FetchXmlHttp");
    this.l = this.c = this.f = null;
  }

  u(sh, F);
  var th = 0;
  k = sh.prototype;

  k.open = function (a, b) {
    if (this.readyState != th) throw this.abort(), Error("Error reopening a connection");
    this.o = a;
    this.g = b;
    this.readyState = 1;
    uh(this);
  };

  k.send = function (a) {
    if (1 != this.readyState) throw this.abort(), Error("need to call open() first. ");
    this.a = !0;
    var b = {
      headers: this.i,
      method: this.o,
      credentials: void 0,
      cache: void 0
    };
    a && (b.body = a);
    this.u.fetch(new Request(this.g, b)).then(this.gc.bind(this), this.Ma.bind(this));
  };

  k.abort = function () {
    this.response = this.responseText = "";
    this.i = new Headers();
    this.status = 0;
    this.c && this.c.cancel("Request was aborted.");
    1 <= this.readyState && this.a && 4 != this.readyState && (this.a = !1, vh(this, !1));
    this.readyState = th;
  };

  k.gc = function (a) {
    this.a && (this.f = a, this.b || (this.b = a.headers, this.readyState = 2, uh(this)), this.a && (this.readyState = 3, uh(this), this.a && ("arraybuffer" === this.responseType ? a.arrayBuffer().then(this.ec.bind(this), this.Ma.bind(this)) : "undefined" !== typeof l.ReadableStream && "body" in a ? (this.response = this.responseText = "", this.c = a.body.getReader(), this.l = new TextDecoder(), wh(this)) : a.text().then(this.fc.bind(this), this.Ma.bind(this)))));
  };

  function wh(a) {
    a.c.read().then(a.bc.bind(a)).catch(a.Ma.bind(a));
  }

  k.bc = function (a) {
    if (this.a) {
      var b = this.l.decode(a.value ? a.value : new Uint8Array(0), {
        stream: !a.done
      });
      b && (this.response = this.responseText += b);
      a.done ? vh(this, !0) : uh(this);
      3 == this.readyState && wh(this);
    }
  };

  k.fc = function (a) {
    this.a && (this.response = this.responseText = a, vh(this, !0));
  };

  k.ec = function (a) {
    this.a && (this.response = a, vh(this, !0));
  };

  k.Ma = function (a) {
    var b = this.h;
    b && b.log(jh, "Failed to fetch url " + this.g, a instanceof Error ? a : Error(a));
    this.a && vh(this, !0);
  };

  function vh(a, b) {
    b && a.f && (a.status = a.f.status, a.statusText = a.f.statusText);
    a.readyState = 4;
    a.f = null;
    a.c = null;
    a.l = null;
    uh(a);
  }

  k.setRequestHeader = function (a, b) {
    this.i.append(a, b);
  };

  k.getResponseHeader = function (a) {
    return this.b ? this.b.get(a.toLowerCase()) || "" : ((a = this.h) && a.log(jh, "Attempting to get response header but no headers have been received for url: " + this.g, void 0), "");
  };

  k.getAllResponseHeaders = function () {
    if (!this.b) {
      var a = this.h;
      a && a.log(jh, "Attempting to get all response headers but no headers have been received for url: " + this.g, void 0);
      return "";
    }

    a = [];

    for (var b = this.b.entries(), c = b.next(); !c.done;) c = c.value, a.push(c[0] + ": " + c[1]), c = b.next();

    return a.join("\r\n");
  };

  function uh(a) {
    a.onreadystatechange && a.onreadystatechange.call(a);
  }

  ;

  function xh(a) {
    F.call(this);
    this.headers = new rd();
    this.D = a || null;
    this.c = !1;
    this.A = this.a = null;
    this.h = this.N = this.l = "";
    this.f = this.I = this.i = this.G = !1;
    this.g = 0;
    this.u = null;
    this.o = yh;
    this.v = this.O = !1;
  }

  u(xh, F);
  var yh = "";
  xh.prototype.b = ph("goog.net.XhrIo");
  var zh = /^https?$/i,
      Ah = ["POST", "PUT"];

  function Bh(a, b, c, d, e) {
    if (a.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.l + "; newUri=" + b);
    c = c ? c.toUpperCase() : "GET";
    a.l = b;
    a.h = "";
    a.N = c;
    a.G = !1;
    a.c = !0;
    a.a = a.D ? a.D.a() : Zg.a();
    a.A = a.D ? Yg(a.D) : Yg(Zg);
    a.a.onreadystatechange = t(a.Jb, a);

    try {
      qh(a.b, Ch(a, "Opening Xhr")), a.I = !0, a.a.open(c, String(b), !0), a.I = !1;
    } catch (g) {
      qh(a.b, Ch(a, "Error opening Xhr: " + g.message));
      Dh(a, g);
      return;
    }

    b = d || "";
    var f = new rd(a.headers);
    e && qd(e, function (g, h) {
      f.set(h, g);
    });
    e = La(f.U());
    d = l.FormData && b instanceof l.FormData;
    !Na(Ah, c) || e || d || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    f.forEach(function (g, h) {
      this.a.setRequestHeader(h, g);
    }, a);
    a.o && (a.a.responseType = a.o);
    "withCredentials" in a.a && a.a.withCredentials !== a.O && (a.a.withCredentials = a.O);

    try {
      Eh(a), 0 < a.g && (a.v = Fh(a.a), qh(a.b, Ch(a, "Will abort after " + a.g + "ms if incomplete, xhr2 " + a.v)), a.v ? (a.a.timeout = a.g, a.a.ontimeout = t(a.Ga, a)) : a.u = md(a.Ga, a.g, a)), qh(a.b, Ch(a, "Sending request")), a.i = !0, a.a.send(b), a.i = !1;
    } catch (g) {
      qh(a.b, Ch(a, "Send error: " + g.message)), Dh(a, g);
    }
  }

  function Fh(a) {
    return tc && Dc(9) && "number" == typeof a.timeout && void 0 !== a.ontimeout;
  }

  function Ma(a) {
    return "content-type" == a.toLowerCase();
  }

  k = xh.prototype;

  k.Ga = function () {
    "undefined" != typeof fa && this.a && (this.h = "Timed out after " + this.g + "ms, aborting", qh(this.b, Ch(this, this.h)), this.dispatchEvent("timeout"), this.abort(8));
  };

  function Dh(a, b) {
    a.c = !1;
    a.a && (a.f = !0, a.a.abort(), a.f = !1);
    a.h = b;
    Gh(a);
    Hh(a);
  }

  function Gh(a) {
    a.G || (a.G = !0, a.dispatchEvent("complete"), a.dispatchEvent("error"));
  }

  k.abort = function () {
    this.a && this.c && (qh(this.b, Ch(this, "Aborting")), this.c = !1, this.f = !0, this.a.abort(), this.f = !1, this.dispatchEvent("complete"), this.dispatchEvent("abort"), Hh(this));
  };

  k.va = function () {
    this.a && (this.c && (this.c = !1, this.f = !0, this.a.abort(), this.f = !1), Hh(this, !0));
    xh.qb.va.call(this);
  };

  k.Jb = function () {
    this.qa || (this.I || this.i || this.f ? Ih(this) : this.vc());
  };

  k.vc = function () {
    Ih(this);
  };

  function Ih(a) {
    if (a.c && "undefined" != typeof fa) if (a.A[1] && 4 == Jh(a) && 2 == Kh(a)) qh(a.b, Ch(a, "Local request error detected and ignored"));else if (a.i && 4 == Jh(a)) md(a.Jb, 0, a);else if (a.dispatchEvent("readystatechange"), 4 == Jh(a)) {
      qh(a.b, Ch(a, "Request complete"));
      a.c = !1;

      try {
        var b = Kh(a);

        a: switch (b) {
          case 200:
          case 201:
          case 202:
          case 204:
          case 206:
          case 304:
          case 1223:
            var c = !0;
            break a;

          default:
            c = !1;
        }

        var d;

        if (!(d = c)) {
          var e;

          if (e = 0 === b) {
            var f = String(a.l).match(ud)[1] || null;

            if (!f && l.self && l.self.location) {
              var g = l.self.location.protocol;
              f = g.substr(0, g.length - 1);
            }

            e = !zh.test(f ? f.toLowerCase() : "");
          }

          d = e;
        }

        if (d) a.dispatchEvent("complete"), a.dispatchEvent("success");else {
          try {
            var h = 2 < Jh(a) ? a.a.statusText : "";
          } catch (m) {
            qh(a.b, "Can not get status: " + m.message), h = "";
          }

          a.h = h + " [" + Kh(a) + "]";
          Gh(a);
        }
      } finally {
        Hh(a);
      }
    }
  }

  function Hh(a, b) {
    if (a.a) {
      Eh(a);
      var c = a.a,
          d = a.A[0] ? ka : null;
      a.a = null;
      a.A = null;
      b || a.dispatchEvent("ready");

      try {
        c.onreadystatechange = d;
      } catch (e) {
        (a = a.b) && a.log(ih, "Problem encountered resetting onreadystatechange: " + e.message, void 0);
      }
    }
  }

  function Eh(a) {
    a.a && a.v && (a.a.ontimeout = null);
    a.u && (l.clearTimeout(a.u), a.u = null);
  }

  function Jh(a) {
    return a.a ? a.a.readyState : 0;
  }

  function Kh(a) {
    try {
      return 2 < Jh(a) ? a.a.status : -1;
    } catch (b) {
      return -1;
    }
  }

  function Lh(a) {
    try {
      return a.a ? a.a.responseText : "";
    } catch (b) {
      return qh(a.b, "Can not get responseText: " + b.message), "";
    }
  }

  k.getResponse = function () {
    try {
      if (!this.a) return null;
      if ("response" in this.a) return this.a.response;

      switch (this.o) {
        case yh:
        case "text":
          return this.a.responseText;

        case "arraybuffer":
          if ("mozResponseArrayBuffer" in this.a) return this.a.mozResponseArrayBuffer;
      }

      var a = this.b;
      a && a.log(ih, "Response type " + this.o + " is not supported on this browser", void 0);
      return null;
    } catch (b) {
      return qh(this.b, "Can not get response: " + b.message), null;
    }
  };

  function Ch(a, b) {
    return b + " [" + a.N + " " + a.l + " " + Kh(a) + "]";
  }

  ;
  /*
  Portions of this code are from MochiKit, received by
  The Closure Authors under the MIT license. All other code is Copyright
  2005-2009 The Closure Authors. All Rights Reserved.
  */

  function Mh(a) {
    var b = Nh;
    this.g = [];
    this.v = b;
    this.u = a || null;
    this.f = this.a = !1;
    this.c = void 0;
    this.l = this.A = this.i = !1;
    this.h = 0;
    this.b = null;
    this.m = 0;
  }

  Mh.prototype.cancel = function (a) {
    if (this.a) this.c instanceof Mh && this.c.cancel();else {
      if (this.b) {
        var b = this.b;
        delete this.b;
        a ? b.cancel(a) : (b.m--, 0 >= b.m && b.cancel());
      }

      this.v ? this.v.call(this.u, this) : this.l = !0;
      this.a || (a = new Oh(this), Ph(this), Qh(this, !1, a));
    }
  };

  Mh.prototype.o = function (a, b) {
    this.i = !1;
    Qh(this, a, b);
  };

  function Qh(a, b, c) {
    a.a = !0;
    a.c = c;
    a.f = !b;
    Rh(a);
  }

  function Ph(a) {
    if (a.a) {
      if (!a.l) throw new Sh(a);
      a.l = !1;
    }
  }

  function Th(a, b) {
    Uh(a, null, b, void 0);
  }

  function Uh(a, b, c, d) {
    a.g.push([b, c, d]);
    a.a && Rh(a);
  }

  Mh.prototype.then = function (a, b, c) {
    var d,
        e,
        f = new C(function (g, h) {
      d = g;
      e = h;
    });
    Uh(this, d, function (g) {
      g instanceof Oh ? f.cancel() : e(g);
    });
    return f.then(a, b, c);
  };

  Mh.prototype.$goog_Thenable = !0;

  function Vh(a) {
    return Ka(a.g, function (b) {
      return q(b[1]);
    });
  }

  function Rh(a) {
    if (a.h && a.a && Vh(a)) {
      var b = a.h,
          c = Wh[b];
      c && (l.clearTimeout(c.a), delete Wh[b]);
      a.h = 0;
    }

    a.b && (a.b.m--, delete a.b);
    b = a.c;

    for (var d = c = !1; a.g.length && !a.i;) {
      var e = a.g.shift(),
          f = e[0],
          g = e[1];
      e = e[2];
      if (f = a.f ? g : f) try {
        var h = f.call(e || a.u, b);
        void 0 !== h && (a.f = a.f && (h == b || h instanceof Error), a.c = b = h);
        if (wa(b) || "function" === typeof l.Promise && b instanceof l.Promise) d = !0, a.i = !0;
      } catch (m) {
        b = m, a.f = !0, Vh(a) || (c = !0);
      }
    }

    a.c = b;
    d && (h = t(a.o, a, !0), d = t(a.o, a, !1), b instanceof Mh ? (Uh(b, h, d), b.A = !0) : b.then(h, d));
    c && (b = new Xh(b), Wh[b.a] = b, a.h = b.a);
  }

  function Sh() {
    w.call(this);
  }

  u(Sh, w);
  Sh.prototype.message = "Deferred has already fired";
  Sh.prototype.name = "AlreadyCalledError";

  function Oh() {
    w.call(this);
  }

  u(Oh, w);
  Oh.prototype.message = "Deferred was canceled";
  Oh.prototype.name = "CanceledError";

  function Xh(a) {
    this.a = l.setTimeout(t(this.c, this), 0);
    this.b = a;
  }

  Xh.prototype.c = function () {
    delete Wh[this.a];
    throw this.b;
  };

  var Wh = {};

  function Yh(a) {
    var b = {},
        c = b.document || document,
        d = cb(a).toString(),
        e = document.createElement("SCRIPT"),
        f = {
      Lb: e,
      Ga: void 0
    },
        g = new Mh(f),
        h = null,
        m = null != b.timeout ? b.timeout : 5E3;
    0 < m && (h = window.setTimeout(function () {
      Zh(e, !0);
      var p = new $h(ai, "Timeout reached for loading script " + d);
      Ph(g);
      Qh(g, !1, p);
    }, m), f.Ga = h);

    e.onload = e.onreadystatechange = function () {
      e.readyState && "loaded" != e.readyState && "complete" != e.readyState || (Zh(e, b.dd || !1, h), Ph(g), Qh(g, !0, null));
    };

    e.onerror = function () {
      Zh(e, !0, h);
      var p = new $h(bi, "Error while loading script " + d);
      Ph(g);
      Qh(g, !1, p);
    };

    f = b.attributes || {};
    Va(f, {
      type: "text/javascript",
      charset: "UTF-8"
    });
    Wd(e, f);
    Fb(e, a);
    ci(c).appendChild(e);
    return g;
  }

  function ci(a) {
    var b;
    return (b = (a || document).getElementsByTagName("HEAD")) && 0 != b.length ? b[0] : a.documentElement;
  }

  function Nh() {
    if (this && this.Lb) {
      var a = this.Lb;
      a && "SCRIPT" == a.tagName && Zh(a, !0, this.Ga);
    }
  }

  function Zh(a, b, c) {
    null != c && l.clearTimeout(c);
    a.onload = ka;
    a.onerror = ka;
    a.onreadystatechange = ka;
    b && window.setTimeout(function () {
      a && a.parentNode && a.parentNode.removeChild(a);
    }, 0);
  }

  var bi = 0,
      ai = 1;

  function $h(a, b) {
    var c = "Jsloader error (code #" + a + ")";
    b && (c += ": " + b);
    w.call(this, c);
    this.code = a;
  }

  u($h, w);

  function di(a) {
    this.f = a;
  }

  u(di, Xg);

  di.prototype.a = function () {
    return new this.f();
  };

  di.prototype.b = function () {
    return {};
  };

  function ei(a, b, c) {
    this.b = a;
    a = b || {};
    this.i = a.secureTokenEndpoint || "https://securetoken.googleapis.com/v1/token";
    this.m = a.secureTokenTimeout || fi;
    this.f = Ta(a.secureTokenHeaders || gi);
    this.g = a.firebaseEndpoint || "https://www.googleapis.com/identitytoolkit/v3/relyingparty/";
    this.h = a.firebaseTimeout || hi;
    this.a = Ta(a.firebaseHeaders || ii);
    c && (this.a["X-Client-Version"] = c, this.f["X-Client-Version"] = c);
    c = "Node" == Ae();
    c = l.XMLHttpRequest || c && _app.default.INTERNAL.node && _app.default.INTERNAL.node.XMLHttpRequest;
    if (!c && !ze()) throw new M("internal-error", "The XMLHttpRequest compatibility library was not found.");
    this.c = void 0;
    ze() ? this.c = new rh(self) : Be() ? this.c = new di(c) : this.c = new bh();
  }

  var ji,
      dg = "idToken",
      fi = new Pe(3E4, 6E4),
      gi = {
    "Content-Type": "application/x-www-form-urlencoded"
  },
      hi = new Pe(3E4, 6E4),
      ii = {
    "Content-Type": "application/json"
  };

  function ki(a, b) {
    b ? a.a["X-Firebase-Locale"] = b : delete a.a["X-Firebase-Locale"];
  }

  function li(a, b) {
    b ? (a.a["X-Client-Version"] = b, a.f["X-Client-Version"] = b) : (delete a.a["X-Client-Version"], delete a.f["X-Client-Version"]);
  }

  function mi(a, b, c, d, e, f, g) {
    ke() || ze() ? a = t(a.o, a) : (ji || (ji = new C(function (h, m) {
      ni(h, m);
    })), a = t(a.l, a));
    a(b, c, d, e, f, g);
  }

  ei.prototype.o = function (a, b, c, d, e, f) {
    if (ze() && ("undefined" === typeof l.fetch || "undefined" === typeof l.Headers || "undefined" === typeof l.Request)) throw new M("operation-not-supported-in-this-environment", "fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.");
    var g = new xh(this.c);

    if (f) {
      g.g = Math.max(0, f);
      var h = setTimeout(function () {
        g.dispatchEvent("timeout");
      }, f);
    }

    Zc(g, "complete", function () {
      h && clearTimeout(h);
      var m = null;

      try {
        m = JSON.parse(Lh(this)) || null;
      } catch (p) {
        m = null;
      }

      b && b(m);
    });
    ed(g, "ready", function () {
      h && clearTimeout(h);
      oc(this);
    });
    ed(g, "timeout", function () {
      h && clearTimeout(h);
      oc(this);
      b && b(null);
    });
    Bh(g, a, c, d, e);
  };

  var oi = new Wa(Xa, "https://apis.google.com/js/client.js?onload=%{onload}"),
      pi = "__fcb" + Math.floor(1E6 * Math.random()).toString();

  function ni(a, b) {
    if (((window.gapi || {}).client || {}).request) a();else {
      l[pi] = function () {
        ((window.gapi || {}).client || {}).request ? a() : b(Error("CORS_UNSUPPORTED"));
      };

      var c = db(oi, {
        onload: pi
      });
      Th(Yh(c), function () {
        b(Error("CORS_UNSUPPORTED"));
      });
    }
  }

  ei.prototype.l = function (a, b, c, d, e) {
    var f = this;
    ji.then(function () {
      window.gapi.client.setApiKey(f.b);
      var g = window.gapi.auth.getToken();
      window.gapi.auth.setToken(null);
      window.gapi.client.request({
        path: a,
        method: c,
        body: d,
        headers: e,
        authType: "none",
        callback: function (h) {
          window.gapi.auth.setToken(g);
          b && b(h);
        }
      });
    }).s(function (g) {
      b && b({
        error: {
          message: g && g.message || "CORS_UNSUPPORTED"
        }
      });
    });
  };

  function qi(a, b) {
    return new C(function (c, d) {
      "refresh_token" == b.grant_type && b.refresh_token || "authorization_code" == b.grant_type && b.code ? mi(a, a.i + "?key=" + encodeURIComponent(a.b), function (e) {
        e ? e.error ? d(ri(e)) : e.access_token && e.refresh_token ? c(e) : d(new M("internal-error")) : d(new M("network-request-failed"));
      }, "POST", Pd(b).toString(), a.f, a.m.get()) : d(new M("internal-error"));
    });
  }

  function si(a, b, c, d, e, f) {
    var g = Ld(a.g + b);
    G(g, "key", a.b);
    f && G(g, "cb", va().toString());
    var h = "GET" == c;
    if (h) for (var m in d) d.hasOwnProperty(m) && G(g, m, d[m]);
    return new C(function (p, v) {
      mi(a, g.toString(), function (z) {
        z ? z.error ? v(ri(z, e || {})) : p(z) : v(new M("network-request-failed"));
      }, c, h ? void 0 : ae(Le(d)), a.a, a.h.get());
    });
  }

  function ti(a) {
    a = a.email;
    if (!n(a) || !te.test(a)) throw new M("invalid-email");
  }

  function ui(a) {
    "email" in a && ti(a);
  }

  function vi(a, b) {
    return O(a, wi, {
      identifier: b,
      continueUri: Ie() ? he() : "http://localhost"
    }).then(function (c) {
      return c.signinMethods || [];
    });
  }

  function xi(a) {
    return O(a, yi, {}).then(function (b) {
      return b.authorizedDomains || [];
    });
  }

  function zi(a) {
    if (!a[dg]) throw new M("internal-error");
  }

  function Ai(a) {
    if (a.phoneNumber || a.temporaryProof) {
      if (!a.phoneNumber || !a.temporaryProof) throw new M("internal-error");
    } else {
      if (!a.sessionInfo) throw new M("missing-verification-id");
      if (!a.code) throw new M("missing-verification-code");
    }
  }

  ei.prototype.ob = function () {
    return O(this, Bi, {});
  };

  ei.prototype.rb = function (a, b) {
    return O(this, Ci, {
      idToken: a,
      email: b
    });
  };

  ei.prototype.sb = function (a, b) {
    return O(this, Cg, {
      idToken: a,
      password: b
    });
  };

  var Di = {
    displayName: "DISPLAY_NAME",
    photoUrl: "PHOTO_URL"
  };
  k = ei.prototype;

  k.tb = function (a, b) {
    var c = {
      idToken: a
    },
        d = [];
    Ra(Di, function (e, f) {
      var g = b[f];
      null === g ? d.push(e) : f in b && (c[f] = g);
    });
    d.length && (c.deleteAttribute = d);
    return O(this, Ci, c);
  };

  k.lb = function (a, b) {
    a = {
      requestType: "PASSWORD_RESET",
      email: a
    };
    Va(a, b);
    return O(this, Ei, a);
  };

  k.mb = function (a, b) {
    a = {
      requestType: "EMAIL_SIGNIN",
      email: a
    };
    Va(a, b);
    return O(this, Fi, a);
  };

  k.kb = function (a, b) {
    a = {
      requestType: "VERIFY_EMAIL",
      idToken: a
    };
    Va(a, b);
    return O(this, Gi, a);
  };

  function Mg(a, b) {
    return O(a, Hi, b);
  }

  k.Va = function (a) {
    return O(this, Ii, a);
  };

  function Ji(a, b, c) {
    return O(a, Ki, {
      idToken: b,
      deleteProvider: c
    });
  }

  function Li(a) {
    if (!a.requestUri || !a.sessionId && !a.postBody && !a.pendingToken) throw new M("internal-error");
  }

  function Mi(a, b) {
    b.oauthIdToken && b.providerId && 0 == b.providerId.indexOf("oidc.") && !b.pendingToken && (a.sessionId ? b.nonce = a.sessionId : a.postBody && (a = new Cd(a.postBody), Td(a, "nonce") && (b.nonce = a.get("nonce"))));
    return b;
  }

  function Ni(a) {
    var b = null;
    a.needConfirmation ? (a.code = "account-exists-with-different-credential", b = Wg(a)) : "FEDERATED_USER_ID_ALREADY_LINKED" == a.errorMessage ? (a.code = "credential-already-in-use", b = Wg(a)) : "EMAIL_EXISTS" == a.errorMessage ? (a.code = "email-already-in-use", b = Wg(a)) : a.errorMessage && (b = Oi(a.errorMessage));
    if (b) throw b;
    if (!a[dg]) throw new M("internal-error");
  }

  function fg(a, b) {
    b.returnIdpCredential = !0;
    return O(a, Pi, b);
  }

  function hg(a, b) {
    b.returnIdpCredential = !0;
    return O(a, Qi, b);
  }

  function ig(a, b) {
    b.returnIdpCredential = !0;
    b.autoCreate = !1;
    return O(a, Ri, b);
  }

  function Si(a) {
    if (!a.oobCode) throw new M("invalid-action-code");
  }

  k.$a = function (a, b) {
    return O(this, Ti, {
      oobCode: a,
      newPassword: b
    });
  };

  k.Ka = function (a) {
    return O(this, Ui, {
      oobCode: a
    });
  };

  k.Xa = function (a) {
    return O(this, Vi, {
      oobCode: a
    });
  };

  var Vi = {
    endpoint: "setAccountInfo",
    C: Si,
    da: "email"
  },
      Ui = {
    endpoint: "resetPassword",
    C: Si,
    J: function (a) {
      var b = a.requestType;
      if (!b || !a.email && "EMAIL_SIGNIN" != b) throw new M("internal-error");
    }
  },
      Wi = {
    endpoint: "signupNewUser",
    C: function (a) {
      ti(a);
      if (!a.password) throw new M("weak-password");
    },
    J: zi,
    R: !0
  },
      wi = {
    endpoint: "createAuthUri"
  },
      Xi = {
    endpoint: "deleteAccount",
    T: ["idToken"]
  },
      Ki = {
    endpoint: "setAccountInfo",
    T: ["idToken", "deleteProvider"],
    C: function (a) {
      if (!na(a.deleteProvider)) throw new M("internal-error");
    }
  },
      zg = {
    endpoint: "emailLinkSignin",
    T: ["email", "oobCode"],
    C: ti,
    J: zi,
    R: !0
  },
      Bg = {
    endpoint: "emailLinkSignin",
    T: ["idToken", "email", "oobCode"],
    C: ti,
    J: zi,
    R: !0
  },
      Yi = {
    endpoint: "getAccountInfo"
  },
      Fi = {
    endpoint: "getOobConfirmationCode",
    T: ["requestType"],
    C: function (a) {
      if ("EMAIL_SIGNIN" != a.requestType) throw new M("internal-error");
      ti(a);
    },
    da: "email"
  },
      Gi = {
    endpoint: "getOobConfirmationCode",
    T: ["idToken", "requestType"],
    C: function (a) {
      if ("VERIFY_EMAIL" != a.requestType) throw new M("internal-error");
    },
    da: "email"
  },
      Ei = {
    endpoint: "getOobConfirmationCode",
    T: ["requestType"],
    C: function (a) {
      if ("PASSWORD_RESET" != a.requestType) throw new M("internal-error");
      ti(a);
    },
    da: "email"
  },
      yi = {
    wb: !0,
    endpoint: "getProjectConfig",
    Ib: "GET"
  },
      Zi = {
    wb: !0,
    endpoint: "getRecaptchaParam",
    Ib: "GET",
    J: function (a) {
      if (!a.recaptchaSiteKey) throw new M("internal-error");
    }
  },
      Ti = {
    endpoint: "resetPassword",
    C: Si,
    da: "email"
  },
      Hi = {
    endpoint: "sendVerificationCode",
    T: ["phoneNumber", "recaptchaToken"],
    da: "sessionInfo"
  },
      Ci = {
    endpoint: "setAccountInfo",
    T: ["idToken"],
    C: ui,
    R: !0
  },
      Cg = {
    endpoint: "setAccountInfo",
    T: ["idToken"],
    C: function (a) {
      ui(a);
      if (!a.password) throw new M("weak-password");
    },
    J: zi,
    R: !0
  },
      Bi = {
    endpoint: "signupNewUser",
    J: zi,
    R: !0
  },
      Pi = {
    endpoint: "verifyAssertion",
    C: Li,
    Qa: Mi,
    J: Ni,
    R: !0
  },
      Ri = {
    endpoint: "verifyAssertion",
    C: Li,
    Qa: Mi,
    J: function (a) {
      if (a.errorMessage && "USER_NOT_FOUND" == a.errorMessage) throw new M("user-not-found");
      if (a.errorMessage) throw Oi(a.errorMessage);
      if (!a[dg]) throw new M("internal-error");
    },
    R: !0
  },
      Qi = {
    endpoint: "verifyAssertion",
    C: function (a) {
      Li(a);
      if (!a.idToken) throw new M("internal-error");
    },
    Qa: Mi,
    J: Ni,
    R: !0
  },
      $i = {
    endpoint: "verifyCustomToken",
    C: function (a) {
      if (!a.token) throw new M("invalid-custom-token");
    },
    J: zi,
    R: !0
  },
      Ag = {
    endpoint: "verifyPassword",
    C: function (a) {
      ti(a);
      if (!a.password) throw new M("wrong-password");
    },
    J: zi,
    R: !0
  },
      Ii = {
    endpoint: "verifyPhoneNumber",
    C: Ai,
    J: zi
  },
      Ig = {
    endpoint: "verifyPhoneNumber",
    C: function (a) {
      if (!a.idToken) throw new M("internal-error");
      Ai(a);
    },
    J: function (a) {
      if (a.temporaryProof) throw a.code = "credential-already-in-use", Wg(a);
      zi(a);
    }
  },
      Jg = {
    Vb: {
      USER_NOT_FOUND: "user-not-found"
    },
    endpoint: "verifyPhoneNumber",
    C: Ai,
    J: zi
  };

  function O(a, b, c) {
    if (!bf(c, b.T)) return E(new M("internal-error"));
    var d = b.Ib || "POST",
        e;
    return D(c).then(b.C).then(function () {
      b.R && (c.returnSecureToken = !0);
      return si(a, b.endpoint, d, c, b.Vb, b.wb || !1);
    }).then(function (f) {
      e = f;
      return b.Qa ? b.Qa(c, e) : e;
    }).then(b.J).then(function () {
      if (!b.da) return e;
      if (!(b.da in e)) throw new M("internal-error");
      return e[b.da];
    });
  }

  function Oi(a) {
    return ri({
      error: {
        errors: [{
          message: a
        }],
        code: 400,
        message: a
      }
    });
  }

  function ri(a, b) {
    var c = (a.error && a.error.errors && a.error.errors[0] || {}).reason || "";
    var d = {
      keyInvalid: "invalid-api-key",
      ipRefererBlocked: "app-not-authorized"
    };
    if (c = d[c] ? new M(d[c]) : null) return c;
    c = a.error && a.error.message || "";
    d = {
      INVALID_CUSTOM_TOKEN: "invalid-custom-token",
      CREDENTIAL_MISMATCH: "custom-token-mismatch",
      MISSING_CUSTOM_TOKEN: "internal-error",
      INVALID_IDENTIFIER: "invalid-email",
      MISSING_CONTINUE_URI: "internal-error",
      INVALID_EMAIL: "invalid-email",
      INVALID_PASSWORD: "wrong-password",
      USER_DISABLED: "user-disabled",
      MISSING_PASSWORD: "internal-error",
      EMAIL_EXISTS: "email-already-in-use",
      PASSWORD_LOGIN_DISABLED: "operation-not-allowed",
      INVALID_IDP_RESPONSE: "invalid-credential",
      INVALID_PENDING_TOKEN: "invalid-credential",
      FEDERATED_USER_ID_ALREADY_LINKED: "credential-already-in-use",
      MISSING_OR_INVALID_NONCE: "missing-or-invalid-nonce",
      INVALID_MESSAGE_PAYLOAD: "invalid-message-payload",
      INVALID_RECIPIENT_EMAIL: "invalid-recipient-email",
      INVALID_SENDER: "invalid-sender",
      EMAIL_NOT_FOUND: "user-not-found",
      RESET_PASSWORD_EXCEED_LIMIT: "too-many-requests",
      EXPIRED_OOB_CODE: "expired-action-code",
      INVALID_OOB_CODE: "invalid-action-code",
      MISSING_OOB_CODE: "internal-error",
      INVALID_PROVIDER_ID: "invalid-provider-id",
      CREDENTIAL_TOO_OLD_LOGIN_AGAIN: "requires-recent-login",
      INVALID_ID_TOKEN: "invalid-user-token",
      TOKEN_EXPIRED: "user-token-expired",
      USER_NOT_FOUND: "user-token-expired",
      CORS_UNSUPPORTED: "cors-unsupported",
      DYNAMIC_LINK_NOT_ACTIVATED: "dynamic-link-not-activated",
      INVALID_APP_ID: "invalid-app-id",
      TOO_MANY_ATTEMPTS_TRY_LATER: "too-many-requests",
      WEAK_PASSWORD: "weak-password",
      OPERATION_NOT_ALLOWED: "operation-not-allowed",
      USER_CANCELLED: "user-cancelled",
      CAPTCHA_CHECK_FAILED: "captcha-check-failed",
      INVALID_APP_CREDENTIAL: "invalid-app-credential",
      INVALID_CODE: "invalid-verification-code",
      INVALID_PHONE_NUMBER: "invalid-phone-number",
      INVALID_SESSION_INFO: "invalid-verification-id",
      INVALID_TEMPORARY_PROOF: "invalid-credential",
      MISSING_APP_CREDENTIAL: "missing-app-credential",
      MISSING_CODE: "missing-verification-code",
      MISSING_PHONE_NUMBER: "missing-phone-number",
      MISSING_SESSION_INFO: "missing-verification-id",
      QUOTA_EXCEEDED: "quota-exceeded",
      SESSION_EXPIRED: "code-expired",
      REJECTED_CREDENTIAL: "rejected-credential",
      INVALID_CONTINUE_URI: "invalid-continue-uri",
      MISSING_ANDROID_PACKAGE_NAME: "missing-android-pkg-name",
      MISSING_IOS_BUNDLE_ID: "missing-ios-bundle-id",
      UNAUTHORIZED_DOMAIN: "unauthorized-continue-uri",
      INVALID_DYNAMIC_LINK_DOMAIN: "invalid-dynamic-link-domain",
      INVALID_OAUTH_CLIENT_ID: "invalid-oauth-client-id",
      INVALID_CERT_HASH: "invalid-cert-hash",
      ADMIN_ONLY_OPERATION: "admin-restricted-operation"
    };
    Va(d, b || {});
    b = (b = c.match(/^[^\s]+\s*:\s*(.*)$/)) && 1 < b.length ? b[1] : void 0;

    for (var e in d) if (0 === c.indexOf(e)) return new M(d[e], b);

    !b && a && (b = Ke(a));
    return new M("internal-error", b);
  }

  ;

  function aj(a) {
    this.b = a;
    this.a = null;
    this.gb = bj(this);
  }

  function bj(a) {
    return cj().then(function () {
      return new C(function (b, c) {
        J("gapi.iframes.getContext")().open({
          where: document.body,
          url: a.b,
          messageHandlersFilter: J("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),
          attributes: {
            style: {
              position: "absolute",
              top: "-100px",
              width: "1px",
              height: "1px"
            }
          },
          dontclear: !0
        }, function (d) {
          function e() {
            clearTimeout(f);
            b();
          }

          a.a = d;
          a.a.restyle({
            setHideOnLeave: !1
          });
          var f = setTimeout(function () {
            c(Error("Network Error"));
          }, dj.get());
          d.ping(e).then(e, function () {
            c(Error("Network Error"));
          });
        });
      });
    });
  }

  function ej(a, b) {
    return a.gb.then(function () {
      return new C(function (c) {
        a.a.send(b.type, b, c, J("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
      });
    });
  }

  function fj(a, b) {
    a.gb.then(function () {
      a.a.register("authEvent", b, J("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"));
    });
  }

  var gj = new Wa(Xa, "https://apis.google.com/js/api.js?onload=%{onload}"),
      hj = new Pe(3E4, 6E4),
      dj = new Pe(5E3, 15E3),
      ij = null;

  function cj() {
    return ij ? ij : ij = new C(function (a, b) {
      function c() {
        Oe();
        J("gapi.load")("gapi.iframes", {
          callback: a,
          ontimeout: function () {
            Oe();
            b(Error("Network Error"));
          },
          timeout: hj.get()
        });
      }

      if (J("gapi.iframes.Iframe")) a();else if (J("gapi.load")) c();else {
        var d = "__iframefcb" + Math.floor(1E6 * Math.random()).toString();

        l[d] = function () {
          J("gapi.load") ? c() : b(Error("Network Error"));
        };

        d = db(gj, {
          onload: d
        });
        D(Yh(d)).s(function () {
          b(Error("Network Error"));
        });
      }
    }).s(function (a) {
      ij = null;
      throw a;
    });
  }

  ;

  function jj(a, b, c) {
    this.i = a;
    this.g = b;
    this.h = c;
    this.f = null;
    this.a = Md(this.i, "/__/auth/iframe");
    G(this.a, "apiKey", this.g);
    G(this.a, "appName", this.h);
    this.b = null;
    this.c = [];
  }

  jj.prototype.toString = function () {
    this.f ? G(this.a, "v", this.f) : Sd(this.a.a, "v");
    this.b ? G(this.a, "eid", this.b) : Sd(this.a.a, "eid");
    this.c.length ? G(this.a, "fw", this.c.join(",")) : Sd(this.a.a, "fw");
    return this.a.toString();
  };

  function kj(a, b, c, d, e) {
    this.o = a;
    this.l = b;
    this.c = c;
    this.m = d;
    this.h = this.g = this.i = null;
    this.a = e;
    this.f = null;
  }

  kj.prototype.toString = function () {
    var a = Md(this.o, "/__/auth/handler");
    G(a, "apiKey", this.l);
    G(a, "appName", this.c);
    G(a, "authType", this.m);

    if (this.a.isOAuthProvider) {
      var b = this.a;

      try {
        var c = _app.default.app(this.c).auth().ea();
      } catch (h) {
        c = null;
      }

      b.ab = c;
      G(a, "providerId", this.a.providerId);
      b = this.a;
      c = Le(b.zb);

      for (var d in c) c[d] = c[d].toString();

      d = b.Cc;
      c = Ta(c);

      for (var e = 0; e < d.length; e++) {
        var f = d[e];
        f in c && delete c[f];
      }

      b.eb && b.ab && !c[b.eb] && (c[b.eb] = b.ab);
      Sa(c) || G(a, "customParameters", Ke(c));
    }

    "function" === typeof this.a.Fb && (b = this.a.Fb(), b.length && G(a, "scopes", b.join(",")));
    this.i ? G(a, "redirectUrl", this.i) : Sd(a.a, "redirectUrl");
    this.g ? G(a, "eventId", this.g) : Sd(a.a, "eventId");
    this.h ? G(a, "v", this.h) : Sd(a.a, "v");
    if (this.b) for (var g in this.b) this.b.hasOwnProperty(g) && !Kd(a, g) && G(a, g, this.b[g]);
    this.f ? G(a, "eid", this.f) : Sd(a.a, "eid");
    g = lj(this.c);
    g.length && G(a, "fw", g.join(","));
    return a.toString();
  };

  function lj(a) {
    try {
      return _app.default.app(a).auth().ya();
    } catch (b) {
      return [];
    }
  }

  function mj(a, b, c, d, e) {
    this.l = a;
    this.f = b;
    this.b = c;
    this.c = d || null;
    this.h = e || null;
    this.o = this.u = this.v = null;
    this.g = [];
    this.m = this.a = null;
  }

  function nj(a) {
    var b = he();
    return xi(a).then(function (c) {
      a: {
        var d = Ld(b),
            e = d.f;
        d = d.b;

        for (var f = 0; f < c.length; f++) {
          var g = c[f];
          var h = d;
          var m = e;
          0 == g.indexOf("chrome-extension://") ? h = Ld(g).b == h && "chrome-extension" == m : "http" != m && "https" != m ? h = !1 : se.test(g) ? h = h == g : (g = g.split(".").join("\\."), h = new RegExp("^(.+\\." + g + "|" + g + ")$", "i").test(h));

          if (h) {
            c = !0;
            break a;
          }
        }

        c = !1;
      }

      if (!c) throw new Ug(he());
    });
  }

  function oj(a) {
    if (a.m) return a.m;
    a.m = ue().then(function () {
      if (!a.u) {
        var b = a.c,
            c = a.h,
            d = lj(a.b),
            e = new jj(a.l, a.f, a.b);
        e.f = b;
        e.b = c;
        e.c = Qa(d || []);
        a.u = e.toString();
      }

      a.i = new aj(a.u);
      pj(a);
    });
    return a.m;
  }

  k = mj.prototype;

  k.Ea = function (a, b, c) {
    var d = new M("popup-closed-by-user"),
        e = new M("web-storage-unsupported"),
        f = this,
        g = !1;
    return this.ga().then(function () {
      qj(f).then(function (h) {
        h || (a && oe(a), b(e), g = !0);
      });
    }).s(function () {}).then(function () {
      if (!g) return re(a);
    }).then(function () {
      if (!g) return nd(c).then(function () {
        b(d);
      });
    });
  };

  k.Mb = function () {
    var a = I();
    return !Je(a) && !Ne(a);
  };

  k.Hb = function () {
    return !1;
  };

  k.Db = function (a, b, c, d, e, f, g) {
    if (!a) return E(new M("popup-blocked"));
    if (g && !Je()) return this.ga().s(function (m) {
      oe(a);
      e(m);
    }), d(), D();
    this.a || (this.a = nj(rj(this)));
    var h = this;
    return this.a.then(function () {
      var m = h.ga().s(function (p) {
        oe(a);
        e(p);
        throw p;
      });
      d();
      return m;
    }).then(function () {
      Pg(c);

      if (!g) {
        var m = sj(h.l, h.f, h.b, b, c, null, f, h.c, void 0, h.h);
        ie(m, a);
      }
    }).s(function (m) {
      "auth/network-request-failed" == m.code && (h.a = null);
      throw m;
    });
  };

  function rj(a) {
    a.o || (a.v = a.c ? Ee(a.c, lj(a.b)) : null, a.o = new ei(a.f, Lf(a.h), a.v));
    return a.o;
  }

  k.Ca = function (a, b, c) {
    this.a || (this.a = nj(rj(this)));
    var d = this;
    return this.a.then(function () {
      Pg(b);
      var e = sj(d.l, d.f, d.b, a, b, he(), c, d.c, void 0, d.h);
      ie(e);
    }).s(function (e) {
      "auth/network-request-failed" == e.code && (d.a = null);
      throw e;
    });
  };

  k.ga = function () {
    var a = this;
    return oj(this).then(function () {
      return a.i.gb;
    }).s(function () {
      a.a = null;
      throw new M("network-request-failed");
    });
  };

  k.Ob = function () {
    return !0;
  };

  function sj(a, b, c, d, e, f, g, h, m, p) {
    a = new kj(a, b, c, d, e);
    a.i = f;
    a.g = g;
    a.h = h;
    a.b = Ta(m || null);
    a.f = p;
    return a.toString();
  }

  function pj(a) {
    if (!a.i) throw Error("IfcHandler must be initialized!");
    fj(a.i, function (b) {
      var c = {};

      if (b && b.authEvent) {
        var d = !1;
        b = Rg(b.authEvent);

        for (c = 0; c < a.g.length; c++) d = a.g[c](b) || d;

        c = {};
        c.status = d ? "ACK" : "ERROR";
        return D(c);
      }

      c.status = "ERROR";
      return D(c);
    });
  }

  function qj(a) {
    var b = {
      type: "webStorageSupport"
    };
    return oj(a).then(function () {
      return ej(a.i, b);
    }).then(function (c) {
      if (c && c.length && "undefined" !== typeof c[0].webStorageSupport) return c[0].webStorageSupport;
      throw Error();
    });
  }

  k.wa = function (a) {
    this.g.push(a);
  };

  k.La = function (a) {
    y(this.g, function (b) {
      return b == a;
    });
  };

  function tj(a) {
    this.a = a || _app.default.INTERNAL.reactNative && _app.default.INTERNAL.reactNative.AsyncStorage;
    if (!this.a) throw new M("internal-error", "The React Native compatibility library was not found.");
    this.type = "asyncStorage";
  }

  k = tj.prototype;

  k.get = function (a) {
    return D(this.a.getItem(a)).then(function (b) {
      return b && Me(b);
    });
  };

  k.set = function (a, b) {
    return D(this.a.setItem(a, Ke(b)));
  };

  k.P = function (a) {
    return D(this.a.removeItem(a));
  };

  k.Y = function () {};

  k.ca = function () {};

  function uj(a) {
    this.b = a;
    this.a = {};
    this.c = t(this.f, this);
  }

  var vj = [];

  function wj() {
    var a = ze() ? self : null;
    x(vj, function (c) {
      c.b == a && (b = c);
    });

    if (!b) {
      var b = new uj(a);
      vj.push(b);
    }

    return b;
  }

  uj.prototype.f = function (a) {
    var b = a.data.eventType,
        c = a.data.eventId,
        d = this.a[b];

    if (d && 0 < d.length) {
      a.ports[0].postMessage({
        status: "ack",
        eventId: c,
        eventType: b,
        response: null
      });
      var e = [];
      x(d, function (f) {
        e.push(D().then(function () {
          return f(a.origin, a.data.data);
        }));
      });
      ac(e).then(function (f) {
        var g = [];
        x(f, function (h) {
          g.push({
            fulfilled: h.Eb,
            value: h.value,
            reason: h.reason ? h.reason.message : void 0
          });
        });
        x(g, function (h) {
          for (var m in h) "undefined" === typeof h[m] && delete h[m];
        });
        a.ports[0].postMessage({
          status: "done",
          eventId: c,
          eventType: b,
          response: g
        });
      });
    }
  };

  uj.prototype.subscribe = function (a, b) {
    Sa(this.a) && this.b.addEventListener("message", this.c);
    "undefined" === typeof this.a[a] && (this.a[a] = []);
    this.a[a].push(b);
  };

  uj.prototype.unsubscribe = function (a, b) {
    "undefined" !== typeof this.a[a] && b ? (y(this.a[a], function (c) {
      return c == b;
    }), 0 == this.a[a].length && delete this.a[a]) : b || delete this.a[a];
    Sa(this.a) && this.b.removeEventListener("message", this.c);
  };

  function xj(a) {
    this.a = a;
  }

  xj.prototype.postMessage = function (a, b) {
    this.a.postMessage(a, b);
  };

  function yj(a) {
    this.c = a;
    this.b = !1;
    this.a = [];
  }

  function zj(a, b, c, d) {
    var e,
        f = c || {},
        g,
        h,
        m,
        p = null;
    if (a.b) return E(Error("connection_unavailable"));
    var v = d ? 800 : 50,
        z = "undefined" !== typeof MessageChannel ? new MessageChannel() : null;
    return new C(function (H, V) {
      z ? (e = Math.floor(Math.random() * Math.pow(10, 20)).toString(), z.port1.start(), h = setTimeout(function () {
        V(Error("unsupported_event"));
      }, v), g = function (ua) {
        ua.data.eventId === e && ("ack" === ua.data.status ? (clearTimeout(h), m = setTimeout(function () {
          V(Error("timeout"));
        }, 3E3)) : "done" === ua.data.status ? (clearTimeout(m), "undefined" !== typeof ua.data.response ? H(ua.data.response) : V(Error("unknown_error"))) : (clearTimeout(h), clearTimeout(m), V(Error("invalid_response"))));
      }, p = {
        messageChannel: z,
        onMessage: g
      }, a.a.push(p), z.port1.addEventListener("message", g), a.c.postMessage({
        eventType: b,
        eventId: e,
        data: f
      }, [z.port2])) : V(Error("connection_unavailable"));
    }).then(function (H) {
      Aj(a, p);
      return H;
    }).s(function (H) {
      Aj(a, p);
      throw H;
    });
  }

  function Aj(a, b) {
    if (b) {
      var c = b.messageChannel,
          d = b.onMessage;
      c && (c.port1.removeEventListener("message", d), c.port1.close());
      y(a.a, function (e) {
        return e == b;
      });
    }
  }

  yj.prototype.close = function () {
    for (; 0 < this.a.length;) Aj(this, this.a[0]);

    this.b = !0;
  };

  function Bj() {
    if (!Cj()) throw new M("web-storage-unsupported");
    this.c = {};
    this.a = [];
    this.b = 0;
    this.l = l.indexedDB;
    this.type = "indexedDB";
    this.g = this.m = this.f = this.i = null;
    this.u = !1;
    this.h = null;
    var a = this;
    ze() && self ? (this.m = wj(), this.m.subscribe("keyChanged", function (b, c) {
      return Dj(a).then(function (d) {
        0 < d.length && x(a.a, function (e) {
          e(d);
        });
        return {
          keyProcessed: Na(d, c.key)
        };
      });
    }), this.m.subscribe("ping", function () {
      return D(["keyChanged"]);
    })) : Ve().then(function (b) {
      if (a.h = b) a.g = new yj(new xj(b)), zj(a.g, "ping", null, !0).then(function (c) {
        c[0].fulfilled && Na(c[0].value, "keyChanged") && (a.u = !0);
      }).s(function () {});
    });
  }

  var Ej;

  function Fj(a) {
    return new C(function (b, c) {
      var d = a.l.deleteDatabase("firebaseLocalStorageDb");

      d.onsuccess = function () {
        b();
      };

      d.onerror = function (e) {
        c(Error(e.target.error));
      };
    });
  }

  function Gj(a) {
    return new C(function (b, c) {
      var d = a.l.open("firebaseLocalStorageDb", 1);

      d.onerror = function (e) {
        try {
          e.preventDefault();
        } catch (f) {}

        c(Error(e.target.error));
      };

      d.onupgradeneeded = function (e) {
        e = e.target.result;

        try {
          e.createObjectStore("firebaseLocalStorage", {
            keyPath: "fbase_key"
          });
        } catch (f) {
          c(f);
        }
      };

      d.onsuccess = function (e) {
        e = e.target.result;
        e.objectStoreNames.contains("firebaseLocalStorage") ? b(e) : Fj(a).then(function () {
          return Gj(a);
        }).then(function (f) {
          b(f);
        }).s(function (f) {
          c(f);
        });
      };
    });
  }

  function Hj(a) {
    a.o || (a.o = Gj(a));
    return a.o;
  }

  function Cj() {
    try {
      return !!l.indexedDB;
    } catch (a) {
      return !1;
    }
  }

  function Ij(a) {
    return a.objectStore("firebaseLocalStorage");
  }

  function Jj(a, b) {
    return a.transaction(["firebaseLocalStorage"], b ? "readwrite" : "readonly");
  }

  function Kj(a) {
    return new C(function (b, c) {
      a.onsuccess = function (d) {
        d && d.target ? b(d.target.result) : b();
      };

      a.onerror = function (d) {
        c(d.target.error);
      };
    });
  }

  k = Bj.prototype;

  k.set = function (a, b) {
    var c = !1,
        d,
        e = this;
    return Hj(this).then(function (f) {
      d = f;
      f = Ij(Jj(d, !0));
      return Kj(f.get(a));
    }).then(function (f) {
      var g = Ij(Jj(d, !0));
      if (f) return f.value = b, Kj(g.put(f));
      e.b++;
      c = !0;
      f = {};
      f.fbase_key = a;
      f.value = b;
      return Kj(g.add(f));
    }).then(function () {
      e.c[a] = b;
      return Lj(e, a);
    }).ia(function () {
      c && e.b--;
    });
  };

  function Lj(a, b) {
    return a.g && a.h && Ue() === a.h ? zj(a.g, "keyChanged", {
      key: b
    }, a.u).then(function () {}).s(function () {}) : D();
  }

  k.get = function (a) {
    return Hj(this).then(function (b) {
      return Kj(Ij(Jj(b, !1)).get(a));
    }).then(function (b) {
      return b && b.value;
    });
  };

  k.P = function (a) {
    var b = !1,
        c = this;
    return Hj(this).then(function (d) {
      b = !0;
      c.b++;
      return Kj(Ij(Jj(d, !0))["delete"](a));
    }).then(function () {
      delete c.c[a];
      return Lj(c, a);
    }).ia(function () {
      b && c.b--;
    });
  };

  function Dj(a) {
    return Hj(a).then(function (b) {
      var c = Ij(Jj(b, !1));
      return c.getAll ? Kj(c.getAll()) : new C(function (d, e) {
        var f = [],
            g = c.openCursor();

        g.onsuccess = function (h) {
          (h = h.target.result) ? (f.push(h.value), h["continue"]()) : d(f);
        };

        g.onerror = function (h) {
          e(h.target.error);
        };
      });
    }).then(function (b) {
      var c = {},
          d = [];

      if (0 == a.b) {
        for (d = 0; d < b.length; d++) c[b[d].fbase_key] = b[d].value;

        d = je(a.c, c);
        a.c = c;
      }

      return d;
    });
  }

  k.Y = function (a) {
    0 == this.a.length && Mj(this);
    this.a.push(a);
  };

  k.ca = function (a) {
    y(this.a, function (b) {
      return b == a;
    });
    0 == this.a.length && Nj(this);
  };

  function Mj(a) {
    function b() {
      a.f = setTimeout(function () {
        a.i = Dj(a).then(function (c) {
          0 < c.length && x(a.a, function (d) {
            d(c);
          });
        }).then(function () {
          b();
        }).s(function (c) {
          "STOP_EVENT" != c.message && b();
        });
      }, 800);
    }

    Nj(a);
    b();
  }

  function Nj(a) {
    a.i && a.i.cancel("STOP_EVENT");
    a.f && (clearTimeout(a.f), a.f = null);
  }

  ;

  function Oj(a) {
    var b = this,
        c = null;
    this.a = [];
    this.type = "indexedDB";
    this.c = a;
    this.b = D().then(function () {
      if (Cj()) {
        var d = Ge(),
            e = "__sak" + d;
        Ej || (Ej = new Bj());
        c = Ej;
        return c.set(e, d).then(function () {
          return c.get(e);
        }).then(function (f) {
          if (f !== d) throw Error("indexedDB not supported!");
          return c.P(e);
        }).then(function () {
          return c;
        }).s(function () {
          return b.c;
        });
      }

      return b.c;
    }).then(function (d) {
      b.type = d.type;
      d.Y(function (e) {
        x(b.a, function (f) {
          f(e);
        });
      });
      return d;
    });
  }

  k = Oj.prototype;

  k.get = function (a) {
    return this.b.then(function (b) {
      return b.get(a);
    });
  };

  k.set = function (a, b) {
    return this.b.then(function (c) {
      return c.set(a, b);
    });
  };

  k.P = function (a) {
    return this.b.then(function (b) {
      return b.P(a);
    });
  };

  k.Y = function (a) {
    this.a.push(a);
  };

  k.ca = function (a) {
    y(this.a, function (b) {
      return b == a;
    });
  };

  function Pj() {
    this.a = {};
    this.type = "inMemory";
  }

  k = Pj.prototype;

  k.get = function (a) {
    return D(this.a[a]);
  };

  k.set = function (a, b) {
    this.a[a] = b;
    return D();
  };

  k.P = function (a) {
    delete this.a[a];
    return D();
  };

  k.Y = function () {};

  k.ca = function () {};

  function Qj() {
    if (!Rj()) {
      if ("Node" == Ae()) throw new M("internal-error", "The LocalStorage compatibility library was not found.");
      throw new M("web-storage-unsupported");
    }

    this.a = Sj() || _app.default.INTERNAL.node.localStorage;
    this.type = "localStorage";
  }

  function Sj() {
    try {
      var a = l.localStorage,
          b = Ge();
      a && (a.setItem(b, "1"), a.removeItem(b));
      return a;
    } catch (c) {
      return null;
    }
  }

  function Rj() {
    var a = "Node" == Ae();
    a = Sj() || a && _app.default.INTERNAL.node && _app.default.INTERNAL.node.localStorage;
    if (!a) return !1;

    try {
      return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
    } catch (b) {
      return !1;
    }
  }

  k = Qj.prototype;

  k.get = function (a) {
    var b = this;
    return D().then(function () {
      var c = b.a.getItem(a);
      return Me(c);
    });
  };

  k.set = function (a, b) {
    var c = this;
    return D().then(function () {
      var d = Ke(b);
      null === d ? c.P(a) : c.a.setItem(a, d);
    });
  };

  k.P = function (a) {
    var b = this;
    return D().then(function () {
      b.a.removeItem(a);
    });
  };

  k.Y = function (a) {
    l.window && Wc(l.window, "storage", a);
  };

  k.ca = function (a) {
    l.window && fd(l.window, "storage", a);
  };

  function Tj() {
    this.type = "nullStorage";
  }

  k = Tj.prototype;

  k.get = function () {
    return D(null);
  };

  k.set = function () {
    return D();
  };

  k.P = function () {
    return D();
  };

  k.Y = function () {};

  k.ca = function () {};

  function Uj() {
    if (!Vj()) {
      if ("Node" == Ae()) throw new M("internal-error", "The SessionStorage compatibility library was not found.");
      throw new M("web-storage-unsupported");
    }

    this.a = Wj() || _app.default.INTERNAL.node.sessionStorage;
    this.type = "sessionStorage";
  }

  function Wj() {
    try {
      var a = l.sessionStorage,
          b = Ge();
      a && (a.setItem(b, "1"), a.removeItem(b));
      return a;
    } catch (c) {
      return null;
    }
  }

  function Vj() {
    var a = "Node" == Ae();
    a = Wj() || a && _app.default.INTERNAL.node && _app.default.INTERNAL.node.sessionStorage;
    if (!a) return !1;

    try {
      return a.setItem("__sak", "1"), a.removeItem("__sak"), !0;
    } catch (b) {
      return !1;
    }
  }

  k = Uj.prototype;

  k.get = function (a) {
    var b = this;
    return D().then(function () {
      var c = b.a.getItem(a);
      return Me(c);
    });
  };

  k.set = function (a, b) {
    var c = this;
    return D().then(function () {
      var d = Ke(b);
      null === d ? c.P(a) : c.a.setItem(a, d);
    });
  };

  k.P = function (a) {
    var b = this;
    return D().then(function () {
      b.a.removeItem(a);
    });
  };

  k.Y = function () {};

  k.ca = function () {};

  function Xj() {
    var a = {};
    a.Browser = Yj;
    a.Node = Zj;
    a.ReactNative = ak;
    a.Worker = bk;
    this.a = a[Ae()];
  }

  var ck,
      Yj = {
    B: Qj,
    Sa: Uj
  },
      Zj = {
    B: Qj,
    Sa: Uj
  },
      ak = {
    B: tj,
    Sa: Tj
  },
      bk = {
    B: Qj,
    Sa: Tj
  };
  var dk = {
    Xc: "local",
    NONE: "none",
    Zc: "session"
  };

  function ek(a) {
    var b = new M("invalid-persistence-type"),
        c = new M("unsupported-persistence-type");

    a: {
      for (d in dk) if (dk[d] == a) {
        var d = !0;
        break a;
      }

      d = !1;
    }

    if (!d || "string" !== typeof a) throw b;

    switch (Ae()) {
      case "ReactNative":
        if ("session" === a) throw c;
        break;

      case "Node":
        if ("none" !== a) throw c;
        break;

      default:
        if (!Fe() && "none" !== a) throw c;
    }
  }

  function fk() {
    var a = !Ne(I()) && ye() ? !0 : !1,
        b = Je(),
        c = Fe();
    this.o = a;
    this.h = b;
    this.m = c;
    this.a = {};
    ck || (ck = new Xj());
    a = ck;

    try {
      this.g = !ge() && Te() || !l.indexedDB ? new a.a.B() : new Oj(ze() ? new Pj() : new a.a.B());
    } catch (d) {
      this.g = new Pj(), this.h = !0;
    }

    try {
      this.i = new a.a.Sa();
    } catch (d) {
      this.i = new Pj();
    }

    this.l = new Pj();
    this.f = t(this.Nb, this);
    this.b = {};
  }

  var gk;

  function hk() {
    gk || (gk = new fk());
    return gk;
  }

  function ik(a, b) {
    switch (b) {
      case "session":
        return a.i;

      case "none":
        return a.l;

      default:
        return a.g;
    }
  }

  function jk(a, b) {
    return "firebase:" + a.name + (b ? ":" + b : "");
  }

  function kk(a, b, c) {
    var d = jk(b, c),
        e = ik(a, b.B);
    return a.get(b, c).then(function (f) {
      var g = null;

      try {
        g = Me(l.localStorage.getItem(d));
      } catch (h) {}

      if (g && !f) return l.localStorage.removeItem(d), a.set(b, g, c);
      g && f && "localStorage" != e.type && l.localStorage.removeItem(d);
    });
  }

  k = fk.prototype;

  k.get = function (a, b) {
    return ik(this, a.B).get(jk(a, b));
  };

  function lk(a, b, c) {
    c = jk(b, c);
    "local" == b.B && (a.b[c] = null);
    return ik(a, b.B).P(c);
  }

  k.set = function (a, b, c) {
    var d = jk(a, c),
        e = this,
        f = ik(this, a.B);
    return f.set(d, b).then(function () {
      return f.get(d);
    }).then(function (g) {
      "local" == a.B && (e.b[d] = g);
    });
  };

  k.addListener = function (a, b, c) {
    a = jk(a, b);
    this.m && (this.b[a] = l.localStorage.getItem(a));
    Sa(this.a) && (ik(this, "local").Y(this.f), this.h || (ge() || !Te()) && l.indexedDB || !this.m || mk(this));
    this.a[a] || (this.a[a] = []);
    this.a[a].push(c);
  };

  k.removeListener = function (a, b, c) {
    a = jk(a, b);
    this.a[a] && (y(this.a[a], function (d) {
      return d == c;
    }), 0 == this.a[a].length && delete this.a[a]);
    Sa(this.a) && (ik(this, "local").ca(this.f), nk(this));
  };

  function mk(a) {
    nk(a);
    a.c = setInterval(function () {
      for (var b in a.a) {
        var c = l.localStorage.getItem(b),
            d = a.b[b];
        c != d && (a.b[b] = c, c = new Kc({
          type: "storage",
          key: b,
          target: window,
          oldValue: d,
          newValue: c,
          a: !0
        }), a.Nb(c));
      }
    }, 1E3);
  }

  function nk(a) {
    a.c && (clearInterval(a.c), a.c = null);
  }

  k.Nb = function (a) {
    if (a && a.f) {
      var b = a.a.key;
      if (null == b) for (var c in this.a) {
        var d = this.b[c];
        "undefined" === typeof d && (d = null);
        var e = l.localStorage.getItem(c);
        e !== d && (this.b[c] = e, this.Ya(c));
      } else if (0 == b.indexOf("firebase:") && this.a[b]) {
        "undefined" !== typeof a.a.a ? ik(this, "local").ca(this.f) : nk(this);
        if (this.o) if (c = l.localStorage.getItem(b), d = a.a.newValue, d !== c) null !== d ? l.localStorage.setItem(b, d) : l.localStorage.removeItem(b);else if (this.b[b] === d && "undefined" === typeof a.a.a) return;
        var f = this;

        c = function () {
          if ("undefined" !== typeof a.a.a || f.b[b] !== l.localStorage.getItem(b)) f.b[b] = l.localStorage.getItem(b), f.Ya(b);
        };

        tc && Ec && 10 == Ec && l.localStorage.getItem(b) !== a.a.newValue && a.a.newValue !== a.a.oldValue ? setTimeout(c, 10) : c();
      }
    } else x(a, t(this.Ya, this));
  };

  k.Ya = function (a) {
    this.a[a] && x(this.a[a], function (b) {
      b();
    });
  };

  function ok(a) {
    this.a = a;
    this.b = hk();
  }

  var pk = {
    name: "authEvent",
    B: "local"
  };

  function qk(a) {
    return a.b.get(pk, a.a).then(function (b) {
      return Rg(b);
    });
  }

  ;

  function rk() {
    this.a = hk();
  }

  ;

  function sk() {
    this.b = -1;
  }

  ;

  function tk(a, b) {
    this.b = uk;
    this.f = l.Uint8Array ? new Uint8Array(this.b) : Array(this.b);
    this.g = this.c = 0;
    this.a = [];
    this.i = a;
    this.h = b;
    this.m = l.Int32Array ? new Int32Array(64) : Array(64);
    void 0 !== vk || (l.Int32Array ? vk = new Int32Array(wk) : vk = wk);
    this.reset();
  }

  var vk;
  u(tk, sk);

  for (var uk = 64, xk = uk - 1, yk = [], zk = 0; zk < xk; zk++) yk[zk] = 0;

  var Ak = Pa(128, yk);

  tk.prototype.reset = function () {
    this.g = this.c = 0;
    this.a = l.Int32Array ? new Int32Array(this.h) : Qa(this.h);
  };

  function Bk(a) {
    for (var b = a.f, c = a.m, d = 0, e = 0; e < b.length;) c[d++] = b[e] << 24 | b[e + 1] << 16 | b[e + 2] << 8 | b[e + 3], e = 4 * d;

    for (b = 16; 64 > b; b++) {
      e = c[b - 15] | 0;
      d = c[b - 2] | 0;
      var f = (c[b - 16] | 0) + ((e >>> 7 | e << 25) ^ (e >>> 18 | e << 14) ^ e >>> 3) | 0,
          g = (c[b - 7] | 0) + ((d >>> 17 | d << 15) ^ (d >>> 19 | d << 13) ^ d >>> 10) | 0;
      c[b] = f + g | 0;
    }

    d = a.a[0] | 0;
    e = a.a[1] | 0;
    var h = a.a[2] | 0,
        m = a.a[3] | 0,
        p = a.a[4] | 0,
        v = a.a[5] | 0,
        z = a.a[6] | 0;
    f = a.a[7] | 0;

    for (b = 0; 64 > b; b++) {
      var H = ((d >>> 2 | d << 30) ^ (d >>> 13 | d << 19) ^ (d >>> 22 | d << 10)) + (d & e ^ d & h ^ e & h) | 0;
      g = p & v ^ ~p & z;
      f = f + ((p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)) | 0;
      g = g + (vk[b] | 0) | 0;
      g = f + (g + (c[b] | 0) | 0) | 0;
      f = z;
      z = v;
      v = p;
      p = m + g | 0;
      m = h;
      h = e;
      e = d;
      d = g + H | 0;
    }

    a.a[0] = a.a[0] + d | 0;
    a.a[1] = a.a[1] + e | 0;
    a.a[2] = a.a[2] + h | 0;
    a.a[3] = a.a[3] + m | 0;
    a.a[4] = a.a[4] + p | 0;
    a.a[5] = a.a[5] + v | 0;
    a.a[6] = a.a[6] + z | 0;
    a.a[7] = a.a[7] + f | 0;
  }

  function Ck(a, b, c) {
    void 0 === c && (c = b.length);
    var d = 0,
        e = a.c;
    if (n(b)) for (; d < c;) a.f[e++] = b.charCodeAt(d++), e == a.b && (Bk(a), e = 0);else if (oa(b)) for (; d < c;) {
      var f = b[d++];
      if (!("number" == typeof f && 0 <= f && 255 >= f && f == (f | 0))) throw Error("message must be a byte array");
      a.f[e++] = f;
      e == a.b && (Bk(a), e = 0);
    } else throw Error("message must be string or array");
    a.c = e;
    a.g += c;
  }

  var wk = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

  function Dk() {
    tk.call(this, 8, Ek);
  }

  u(Dk, tk);
  var Ek = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];

  function Fk(a, b, c, d, e) {
    this.l = a;
    this.i = b;
    this.m = c;
    this.o = d || null;
    this.u = e || null;
    this.h = b + ":" + c;
    this.v = new rk();
    this.g = new ok(this.h);
    this.f = null;
    this.b = [];
    this.a = this.c = null;
  }

  function Gk(a) {
    return new M("invalid-cordova-configuration", a);
  }

  k = Fk.prototype;

  k.ga = function () {
    return this.za ? this.za : this.za = ve().then(function () {
      if ("function" !== typeof J("universalLinks.subscribe", l)) throw Gk("cordova-universal-links-plugin-fix is not installed");
      if ("undefined" === typeof J("BuildInfo.packageName", l)) throw Gk("cordova-plugin-buildinfo is not installed");
      if ("function" !== typeof J("cordova.plugins.browsertab.openUrl", l)) throw Gk("cordova-plugin-browsertab is not installed");
      if ("function" !== typeof J("cordova.InAppBrowser.open", l)) throw Gk("cordova-plugin-inappbrowser is not installed");
    }, function () {
      throw new M("cordova-not-ready");
    });
  };

  function Hk() {
    for (var a = 20, b = []; 0 < a;) b.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62 * Math.random()))), a--;

    return b.join("");
  }

  function Ik(a) {
    var b = new Dk();
    Ck(b, a);
    a = [];
    var c = 8 * b.g;
    56 > b.c ? Ck(b, Ak, 56 - b.c) : Ck(b, Ak, b.b - (b.c - 56));

    for (var d = 63; 56 <= d; d--) b.f[d] = c & 255, c /= 256;

    Bk(b);

    for (d = c = 0; d < b.i; d++) for (var e = 24; 0 <= e; e -= 8) a[c++] = b.a[d] >> e & 255;

    return Bf(a);
  }

  k.Ea = function (a, b) {
    b(new M("operation-not-supported-in-this-environment"));
    return D();
  };

  k.Db = function () {
    return E(new M("operation-not-supported-in-this-environment"));
  };

  k.Ob = function () {
    return !1;
  };

  k.Mb = function () {
    return !0;
  };

  k.Hb = function () {
    return !0;
  };

  k.Ca = function (a, b, c) {
    if (this.c) return E(new M("redirect-operation-pending"));
    var d = this,
        e = l.document,
        f = null,
        g = null,
        h = null,
        m = null;
    return this.c = D().then(function () {
      Pg(b);
      return Jk(d);
    }).then(function () {
      return Kk(d, a, b, c);
    }).then(function () {
      return new C(function (p, v) {
        g = function () {
          var z = J("cordova.plugins.browsertab.close", l);
          p();
          "function" === typeof z && z();
          d.a && "function" === typeof d.a.close && (d.a.close(), d.a = null);
          return !1;
        };

        d.wa(g);

        h = function () {
          f || (f = nd(2E3).then(function () {
            v(new M("redirect-cancelled-by-user"));
          }));
        };

        m = function () {
          Qe() && h();
        };

        e.addEventListener("resume", h, !1);
        I().toLowerCase().match(/android/) || e.addEventListener("visibilitychange", m, !1);
      }).s(function (p) {
        return Lk(d).then(function () {
          throw p;
        });
      });
    }).ia(function () {
      h && e.removeEventListener("resume", h, !1);
      m && e.removeEventListener("visibilitychange", m, !1);
      f && f.cancel();
      g && d.La(g);
      d.c = null;
    });
  };

  function Kk(a, b, c, d) {
    var e = Hk(),
        f = new Qg(b, d, null, e, new M("no-auth-event")),
        g = J("BuildInfo.packageName", l);
    if ("string" !== typeof g) throw new M("invalid-cordova-configuration");
    var h = J("BuildInfo.displayName", l),
        m = {};
    if (I().toLowerCase().match(/iphone|ipad|ipod/)) m.ibi = g;else if (I().toLowerCase().match(/android/)) m.apn = g;else return E(new M("operation-not-supported-in-this-environment"));
    h && (m.appDisplayName = h);
    e = Ik(e);
    m.sessionId = e;
    var p = sj(a.l, a.i, a.m, b, c, null, d, a.o, m, a.u);
    return a.ga().then(function () {
      var v = a.h;
      return a.v.a.set(pk, f.w(), v);
    }).then(function () {
      var v = J("cordova.plugins.browsertab.isAvailable", l);
      if ("function" !== typeof v) throw new M("invalid-cordova-configuration");
      var z = null;
      v(function (H) {
        if (H) {
          z = J("cordova.plugins.browsertab.openUrl", l);
          if ("function" !== typeof z) throw new M("invalid-cordova-configuration");
          z(p);
        } else {
          z = J("cordova.InAppBrowser.open", l);
          if ("function" !== typeof z) throw new M("invalid-cordova-configuration");
          H = I();
          a.a = z(p, H.match(/(iPad|iPhone|iPod).*OS 7_\d/i) || H.match(/(iPad|iPhone|iPod).*OS 8_\d/i) ? "_blank" : "_system", "location=yes");
        }
      });
    });
  }

  function Mk(a, b) {
    for (var c = 0; c < a.b.length; c++) try {
      a.b[c](b);
    } catch (d) {}
  }

  function Jk(a) {
    a.f || (a.f = a.ga().then(function () {
      return new C(function (b) {
        function c(d) {
          b(d);
          a.La(c);
          return !1;
        }

        a.wa(c);
        Nk(a);
      });
    }));
    return a.f;
  }

  function Lk(a) {
    var b = null;
    return qk(a.g).then(function (c) {
      b = c;
      c = a.g;
      return lk(c.b, pk, c.a);
    }).then(function () {
      return b;
    });
  }

  function Nk(a) {
    function b(g) {
      d = !0;
      e && e.cancel();
      Lk(a).then(function (h) {
        var m = c;

        if (h && g && g.url) {
          var p = null;
          m = ag(g.url);
          -1 != m.indexOf("/__/auth/callback") && (p = Ld(m), p = Me(Kd(p, "firebaseError") || null), p = (p = "object" === typeof p ? pf(p) : null) ? new Qg(h.c, h.b, null, null, p) : new Qg(h.c, h.b, m, h.f));
          m = p || c;
        }

        Mk(a, m);
      });
    }

    var c = new Qg("unknown", null, null, null, new M("no-auth-event")),
        d = !1,
        e = nd(500).then(function () {
      return Lk(a).then(function () {
        d || Mk(a, c);
      });
    }),
        f = l.handleOpenURL;

    l.handleOpenURL = function (g) {
      0 == g.toLowerCase().indexOf(J("BuildInfo.packageName", l).toLowerCase() + "://") && b({
        url: g
      });
      if ("function" === typeof f) try {
        f(g);
      } catch (h) {
        console.error(h);
      }
    };

    Tg || (Tg = new Sg());
    Tg.subscribe(b);
  }

  k.wa = function (a) {
    this.b.push(a);
    Jk(this).s(function (b) {
      "auth/invalid-cordova-configuration" === b.code && (b = new Qg("unknown", null, null, null, new M("no-auth-event")), a(b));
    });
  };

  k.La = function (a) {
    y(this.b, function (b) {
      return b == a;
    });
  };

  function Ok(a) {
    this.a = a;
    this.b = hk();
  }

  var Pk = {
    name: "pendingRedirect",
    B: "session"
  };

  function Qk(a) {
    return a.b.set(Pk, "pending", a.a);
  }

  function Rk(a) {
    return lk(a.b, Pk, a.a);
  }

  function Sk(a) {
    return a.b.get(Pk, a.a).then(function (b) {
      return "pending" == b;
    });
  }

  ;

  function Tk(a, b, c) {
    this.i = {};
    this.u = 0;
    this.A = a;
    this.l = b;
    this.o = c;
    this.h = [];
    this.f = !1;
    this.m = t(this.cb, this);
    this.b = new Uk();
    this.v = new Vk();
    this.g = new Ok(this.l + ":" + this.o);
    this.c = {};
    this.c.unknown = this.b;
    this.c.signInViaRedirect = this.b;
    this.c.linkViaRedirect = this.b;
    this.c.reauthViaRedirect = this.b;
    this.c.signInViaPopup = this.v;
    this.c.linkViaPopup = this.v;
    this.c.reauthViaPopup = this.v;
    this.a = Wk(this.A, this.l, this.o, Mf);
  }

  function Wk(a, b, c, d) {
    var e = _app.default.SDK_VERSION || null;
    return we() ? new Fk(a, b, c, e, d) : new mj(a, b, c, e, d);
  }

  k = Tk.prototype;

  k.reset = function () {
    this.f = !1;
    this.a.La(this.m);
    this.a = Wk(this.A, this.l, this.o);
    this.i = {};
  };

  k.Za = function () {
    this.b.Za();
  };

  function Xk(a) {
    a.f || (a.f = !0, a.a.wa(a.m));
    var b = a.a;
    return a.a.ga().s(function (c) {
      a.a == b && a.reset();
      throw c;
    });
  }

  function Yk(a) {
    a.a.Mb() && Xk(a).s(function (b) {
      var c = new Qg("unknown", null, null, null, new M("operation-not-supported-in-this-environment"));
      Zk(b) && a.cb(c);
    });
    a.a.Hb() || $k(a.b);
  }

  k.subscribe = function (a) {
    Na(this.h, a) || this.h.push(a);

    if (!this.f) {
      var b = this;
      Sk(this.g).then(function (c) {
        c ? Rk(b.g).then(function () {
          Xk(b).s(function (d) {
            var e = new Qg("unknown", null, null, null, new M("operation-not-supported-in-this-environment"));
            Zk(d) && b.cb(e);
          });
        }) : Yk(b);
      }).s(function () {
        Yk(b);
      });
    }
  };

  k.unsubscribe = function (a) {
    y(this.h, function (b) {
      return b == a;
    });
  };

  k.cb = function (a) {
    if (!a) throw new M("invalid-auth-event");
    6E5 <= va() - this.u && (this.i = {}, this.u = 0);
    if (a && a.getUid() && this.i.hasOwnProperty(a.getUid())) return !1;

    for (var b = !1, c = 0; c < this.h.length; c++) {
      var d = this.h[c];

      if (d.xb(a.c, a.b)) {
        if (b = this.c[a.c]) b.h(a, d), a && (a.f || a.b) && (this.i[a.getUid()] = !0, this.u = va());
        b = !0;
        break;
      }
    }

    $k(this.b);
    return b;
  };

  var al = new Pe(2E3, 1E4),
      bl = new Pe(3E4, 6E4);

  Tk.prototype.fa = function () {
    return this.b.fa();
  };

  function cl(a, b, c, d, e, f) {
    return a.a.Db(b, c, d, function () {
      a.f || (a.f = !0, a.a.wa(a.m));
    }, function () {
      a.reset();
    }, e, f);
  }

  function Zk(a) {
    return a && "auth/cordova-not-ready" == a.code ? !0 : !1;
  }

  Tk.prototype.Ca = function (a, b, c) {
    var d = this,
        e;
    return Qk(this.g).then(function () {
      return d.a.Ca(a, b, c).s(function (f) {
        if (Zk(f)) throw new M("operation-not-supported-in-this-environment");
        e = f;
        return Rk(d.g).then(function () {
          throw e;
        });
      }).then(function () {
        return d.a.Ob() ? new C(function () {}) : Rk(d.g).then(function () {
          return d.fa();
        }).then(function () {}).s(function () {});
      });
    });
  };

  Tk.prototype.Ea = function (a, b, c, d) {
    return this.a.Ea(c, function (e) {
      a.ha(b, null, e, d);
    }, al.get());
  };

  var dl = {};

  function el(a, b, c) {
    var d = b + ":" + c;
    dl[d] || (dl[d] = new Tk(a, b, c));
    return dl[d];
  }

  function Uk() {
    this.b = null;
    this.f = [];
    this.c = [];
    this.a = null;
    this.i = this.g = !1;
  }

  Uk.prototype.reset = function () {
    this.b = null;
    this.a && (this.a.cancel(), this.a = null);
  };

  Uk.prototype.h = function (a, b) {
    if (a) {
      this.reset();
      this.g = !0;
      var c = a.c,
          d = a.b,
          e = a.a && "auth/web-storage-unsupported" == a.a.code,
          f = a.a && "auth/operation-not-supported-in-this-environment" == a.a.code;
      this.i = !(!e && !f);
      "unknown" != c || e || f ? a.a ? (fl(this, !0, null, a.a), D()) : b.xa(c, d) ? gl(this, a, b) : E(new M("invalid-auth-event")) : (fl(this, !1, null, null), D());
    } else E(new M("invalid-auth-event"));
  };

  function $k(a) {
    a.g || (a.g = !0, fl(a, !1, null, null));
  }

  Uk.prototype.Za = function () {
    this.g && !this.i && fl(this, !1, null, null);
  };

  function gl(a, b, c) {
    c = c.xa(b.c, b.b);
    var d = b.g,
        e = b.f,
        f = b.h,
        g = !!b.c.match(/Redirect$/);
    c(d, e, f).then(function (h) {
      fl(a, g, h, null);
    }).s(function (h) {
      fl(a, g, null, h);
    });
  }

  function hl(a, b) {
    a.b = function () {
      return E(b);
    };

    if (a.c.length) for (var c = 0; c < a.c.length; c++) a.c[c](b);
  }

  function il(a, b) {
    a.b = function () {
      return D(b);
    };

    if (a.f.length) for (var c = 0; c < a.f.length; c++) a.f[c](b);
  }

  function fl(a, b, c, d) {
    b ? d ? hl(a, d) : il(a, c) : il(a, {
      user: null
    });
    a.f = [];
    a.c = [];
  }

  Uk.prototype.fa = function () {
    var a = this;
    return new C(function (b, c) {
      a.b ? a.b().then(b, c) : (a.f.push(b), a.c.push(c), jl(a));
    });
  };

  function jl(a) {
    var b = new M("timeout");
    a.a && a.a.cancel();
    a.a = nd(bl.get()).then(function () {
      a.b || (a.g = !0, fl(a, !0, null, b));
    });
  }

  function Vk() {}

  Vk.prototype.h = function (a, b) {
    if (a) {
      var c = a.c,
          d = a.b;
      a.a ? (b.ha(a.c, null, a.a, a.b), D()) : b.xa(c, d) ? kl(a, b) : E(new M("invalid-auth-event"));
    } else E(new M("invalid-auth-event"));
  };

  function kl(a, b) {
    var c = a.b,
        d = a.c;
    b.xa(d, c)(a.g, a.f, a.h).then(function (e) {
      b.ha(d, e, null, c);
    }).s(function (e) {
      b.ha(d, null, e, c);
    });
  }

  ;

  function ll() {
    this.ub = !1;
    Object.defineProperty(this, "appVerificationDisabled", {
      get: function () {
        return this.ub;
      },
      set: function (a) {
        this.ub = a;
      },
      enumerable: !1
    });
  }

  ;

  function ml(a, b) {
    this.a = b;
    K(this, "verificationId", a);
  }

  ml.prototype.confirm = function (a) {
    a = Ng(this.verificationId, a);
    return this.a(a);
  };

  function nl(a, b, c, d) {
    return new Lg(a).Va(b, c).then(function (e) {
      return new ml(e, d);
    });
  }

  ;

  function ol(a) {
    var b = Jf(a);
    if (!(b && b.exp && b.auth_time && b.iat)) throw new M("internal-error", "An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.");
    L(this, {
      token: a,
      expirationTime: Se(1E3 * b.exp),
      authTime: Se(1E3 * b.auth_time),
      issuedAtTime: Se(1E3 * b.iat),
      signInProvider: b.firebase && b.firebase.sign_in_provider ? b.firebase.sign_in_provider : null,
      claims: b
    });
  }

  ;

  function pl(a, b, c) {
    this.h = a;
    this.i = b;
    this.g = c;
    this.c = 3E4;
    this.f = 96E4;
    this.b = null;
    this.a = this.c;
    if (this.f < this.c) throw Error("Proactive refresh lower bound greater than upper bound!");
  }

  pl.prototype.start = function () {
    this.a = this.c;
    ql(this, !0);
  };

  function rl(a, b) {
    if (b) return a.a = a.c, a.g();
    b = a.a;
    a.a *= 2;
    a.a > a.f && (a.a = a.f);
    return b;
  }

  function ql(a, b) {
    a.stop();
    a.b = nd(rl(a, b)).then(function () {
      return Re();
    }).then(function () {
      return a.h();
    }).then(function () {
      ql(a, !0);
    }).s(function (c) {
      a.i(c) && ql(a, !1);
    });
  }

  pl.prototype.stop = function () {
    this.b && (this.b.cancel(), this.b = null);
  };

  function sl(a) {
    this.f = a;
    this.b = this.a = null;
    this.c = 0;
  }

  sl.prototype.w = function () {
    return {
      apiKey: this.f.b,
      refreshToken: this.a,
      accessToken: this.b,
      expirationTime: this.c
    };
  };

  function tl(a, b) {
    var c = b[dg],
        d = b.refreshToken;
    b = ul(b.expiresIn);
    a.b = c;
    a.c = b;
    a.a = d;
  }

  function vl(a, b) {
    a.b = b.b;
    a.a = b.a;
    a.c = b.c;
  }

  function ul(a) {
    return va() + 1E3 * parseInt(a, 10);
  }

  function wl(a, b) {
    return qi(a.f, b).then(function (c) {
      a.b = c.access_token;
      a.c = ul(c.expires_in);
      a.a = c.refresh_token;
      return {
        accessToken: a.b,
        expirationTime: a.c,
        refreshToken: a.a
      };
    }).s(function (c) {
      "auth/user-token-expired" == c.code && (a.a = null);
      throw c;
    });
  }

  sl.prototype.getToken = function (a) {
    a = !!a;
    return this.b && !this.a ? E(new M("user-token-expired")) : a || !this.b || va() > this.c - 3E4 ? this.a ? wl(this, {
      grant_type: "refresh_token",
      refresh_token: this.a
    }) : D(null) : D({
      accessToken: this.b,
      expirationTime: this.c,
      refreshToken: this.a
    });
  };

  function xl(a, b) {
    this.a = a || null;
    this.b = b || null;
    L(this, {
      lastSignInTime: Se(b || null),
      creationTime: Se(a || null)
    });
  }

  function yl(a) {
    return new xl(a.a, a.b);
  }

  xl.prototype.w = function () {
    return {
      lastLoginAt: this.b,
      createdAt: this.a
    };
  };

  function zl(a, b, c, d, e, f) {
    L(this, {
      uid: a,
      displayName: d || null,
      photoURL: e || null,
      email: c || null,
      phoneNumber: f || null,
      providerId: b
    });
  }

  function Al(a, b) {
    Jc.call(this, a);

    for (var c in b) this[c] = b[c];
  }

  u(Al, Jc);

  function P(a, b, c) {
    this.G = [];
    this.l = a.apiKey;
    this.o = a.appName;
    this.u = a.authDomain || null;
    a = _app.default.SDK_VERSION ? Ee(_app.default.SDK_VERSION) : null;
    this.c = new ei(this.l, Lf(Mf), a);
    this.h = new sl(this.c);
    Bl(this, b[dg]);
    tl(this.h, b);
    K(this, "refreshToken", this.h.a);
    Cl(this, c || {});
    F.call(this);
    this.I = !1;
    this.u && He() && (this.a = el(this.u, this.l, this.o));
    this.N = [];
    this.i = null;
    this.A = Dl(this);
    this.V = t(this.Ha, this);
    var d = this;
    this.ka = null;

    this.ta = function (e) {
      d.pa(e.g);
    };

    this.X = null;
    this.O = [];

    this.sa = function (e) {
      El(d, e.c);
    };

    this.W = null;
  }

  u(P, F);

  P.prototype.pa = function (a) {
    this.ka = a;
    ki(this.c, a);
  };

  P.prototype.ea = function () {
    return this.ka;
  };

  function Fl(a, b) {
    a.X && fd(a.X, "languageCodeChanged", a.ta);
    (a.X = b) && Wc(b, "languageCodeChanged", a.ta);
  }

  function El(a, b) {
    a.O = b;
    li(a.c, _app.default.SDK_VERSION ? Ee(_app.default.SDK_VERSION, a.O) : null);
  }

  P.prototype.ya = function () {
    return Qa(this.O);
  };

  function Gl(a, b) {
    a.W && fd(a.W, "frameworkChanged", a.sa);
    (a.W = b) && Wc(b, "frameworkChanged", a.sa);
  }

  P.prototype.Ha = function () {
    this.A.b && (this.A.stop(), this.A.start());
  };

  function Hl(a) {
    try {
      return _app.default.app(a.o).auth();
    } catch (b) {
      throw new M("internal-error", "No firebase.auth.Auth instance is available for the Firebase App '" + a.o + "'!");
    }
  }

  function Dl(a) {
    return new pl(function () {
      return a.F(!0);
    }, function (b) {
      return b && "auth/network-request-failed" == b.code ? !0 : !1;
    }, function () {
      var b = a.h.c - va() - 3E5;
      return 0 < b ? b : 0;
    });
  }

  function Il(a) {
    a.D || a.A.b || (a.A.start(), fd(a, "tokenChanged", a.V), Wc(a, "tokenChanged", a.V));
  }

  function Jl(a) {
    fd(a, "tokenChanged", a.V);
    a.A.stop();
  }

  function Bl(a, b) {
    a.ra = b;
    K(a, "_lat", b);
  }

  function Kl(a, b) {
    y(a.N, function (c) {
      return c == b;
    });
  }

  function Ll(a) {
    for (var b = [], c = 0; c < a.N.length; c++) b.push(a.N[c](a));

    return ac(b).then(function () {
      return a;
    });
  }

  function Ml(a) {
    a.a && !a.I && (a.I = !0, a.a.subscribe(a));
  }

  function Cl(a, b) {
    L(a, {
      uid: b.uid,
      displayName: b.displayName || null,
      photoURL: b.photoURL || null,
      email: b.email || null,
      emailVerified: b.emailVerified || !1,
      phoneNumber: b.phoneNumber || null,
      isAnonymous: b.isAnonymous || !1,
      metadata: new xl(b.createdAt, b.lastLoginAt),
      providerData: []
    });
  }

  K(P.prototype, "providerId", "firebase");

  function Nl() {}

  function Ol(a) {
    return D().then(function () {
      if (a.D) throw new M("app-deleted");
    });
  }

  function Pl(a) {
    return Ja(a.providerData, function (b) {
      return b.providerId;
    });
  }

  function Ql(a, b) {
    b && (Rl(a, b.providerId), a.providerData.push(b));
  }

  function Rl(a, b) {
    y(a.providerData, function (c) {
      return c.providerId == b;
    });
  }

  function Sl(a, b, c) {
    ("uid" != b || c) && a.hasOwnProperty(b) && K(a, b, c);
  }

  function Tl(a, b) {
    a != b && (L(a, {
      uid: b.uid,
      displayName: b.displayName,
      photoURL: b.photoURL,
      email: b.email,
      emailVerified: b.emailVerified,
      phoneNumber: b.phoneNumber,
      isAnonymous: b.isAnonymous,
      providerData: []
    }), b.metadata ? K(a, "metadata", yl(b.metadata)) : K(a, "metadata", new xl()), x(b.providerData, function (c) {
      Ql(a, c);
    }), vl(a.h, b.h), K(a, "refreshToken", a.h.a));
  }

  k = P.prototype;

  k.reload = function () {
    var a = this;
    return Q(this, Ol(this).then(function () {
      return Ul(a).then(function () {
        return Ll(a);
      }).then(Nl);
    }));
  };

  function Ul(a) {
    return a.F().then(function (b) {
      var c = a.isAnonymous;
      return Vl(a, b).then(function () {
        c || Sl(a, "isAnonymous", !1);
        return b;
      });
    });
  }

  k.ac = function (a) {
    return this.F(a).then(function (b) {
      return new ol(b);
    });
  };

  k.F = function (a) {
    var b = this;
    return Q(this, Ol(this).then(function () {
      return b.h.getToken(a);
    }).then(function (c) {
      if (!c) throw new M("internal-error");
      c.accessToken != b.ra && (Bl(b, c.accessToken), b.dispatchEvent(new Al("tokenChanged")));
      Sl(b, "refreshToken", c.refreshToken);
      return c.accessToken;
    }));
  };

  function Wl(a, b) {
    b[dg] && a.ra != b[dg] && (tl(a.h, b), a.dispatchEvent(new Al("tokenChanged")), Bl(a, b[dg]), Sl(a, "refreshToken", a.h.a));
  }

  function Vl(a, b) {
    return O(a.c, Yi, {
      idToken: b
    }).then(t(a.wc, a));
  }

  k.wc = function (a) {
    a = a.users;
    if (!a || !a.length) throw new M("internal-error");
    a = a[0];
    Cl(this, {
      uid: a.localId,
      displayName: a.displayName,
      photoURL: a.photoUrl,
      email: a.email,
      emailVerified: !!a.emailVerified,
      phoneNumber: a.phoneNumber,
      lastLoginAt: a.lastLoginAt,
      createdAt: a.createdAt
    });

    for (var b = Xl(a), c = 0; c < b.length; c++) Ql(this, b[c]);

    Sl(this, "isAnonymous", !(this.email && a.passwordHash) && !(this.providerData && this.providerData.length));
  };

  function Xl(a) {
    return (a = a.providerUserInfo) && a.length ? Ja(a, function (b) {
      return new zl(b.rawId, b.providerId, b.email, b.displayName, b.photoUrl, b.phoneNumber);
    }) : [];
  }

  k.xc = function (a) {
    Xe("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead.");
    return this.hb(a);
  };

  k.hb = function (a) {
    var b = this,
        c = null;
    return Q(this, a.f(this.c, this.uid).then(function (d) {
      Wl(b, d);
      c = Yl(b, d, "reauthenticate");
      b.i = null;
      return b.reload();
    }).then(function () {
      return c;
    }), !0);
  };

  function Zl(a, b) {
    return Ul(a).then(function () {
      if (Na(Pl(a), b)) return Ll(a).then(function () {
        throw new M("provider-already-linked");
      });
    });
  }

  k.oc = function (a) {
    Xe("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead.");
    return this.fb(a);
  };

  k.fb = function (a) {
    var b = this,
        c = null;
    return Q(this, Zl(this, a.providerId).then(function () {
      return b.F();
    }).then(function (d) {
      return a.b(b.c, d);
    }).then(function (d) {
      c = Yl(b, d, "link");
      return $l(b, d);
    }).then(function () {
      return c;
    }));
  };

  k.pc = function (a, b) {
    var c = this;
    return Q(this, Zl(this, "phone").then(function () {
      return nl(Hl(c), a, b, t(c.fb, c));
    }));
  };

  k.yc = function (a, b) {
    var c = this;
    return Q(this, D().then(function () {
      return nl(Hl(c), a, b, t(c.hb, c));
    }), !0);
  };

  function Yl(a, b, c) {
    var d = Og(b);
    b = Rf(b);
    return $e({
      user: a,
      credential: d,
      additionalUserInfo: b,
      operationType: c
    });
  }

  function $l(a, b) {
    Wl(a, b);
    return a.reload().then(function () {
      return a;
    });
  }

  k.rb = function (a) {
    var b = this;
    return Q(this, this.F().then(function (c) {
      return b.c.rb(c, a);
    }).then(function (c) {
      Wl(b, c);
      return b.reload();
    }));
  };

  k.Pc = function (a) {
    var b = this;
    return Q(this, this.F().then(function (c) {
      return a.b(b.c, c);
    }).then(function (c) {
      Wl(b, c);
      return b.reload();
    }));
  };

  k.sb = function (a) {
    var b = this;
    return Q(this, this.F().then(function (c) {
      return b.c.sb(c, a);
    }).then(function (c) {
      Wl(b, c);
      return b.reload();
    }));
  };

  k.tb = function (a) {
    if (void 0 === a.displayName && void 0 === a.photoURL) return Ol(this);
    var b = this;
    return Q(this, this.F().then(function (c) {
      return b.c.tb(c, {
        displayName: a.displayName,
        photoUrl: a.photoURL
      });
    }).then(function (c) {
      Wl(b, c);
      Sl(b, "displayName", c.displayName || null);
      Sl(b, "photoURL", c.photoUrl || null);
      x(b.providerData, function (d) {
        "password" === d.providerId && (K(d, "displayName", b.displayName), K(d, "photoURL", b.photoURL));
      });
      return Ll(b);
    }).then(Nl));
  };

  k.Nc = function (a) {
    var b = this;
    return Q(this, Ul(this).then(function (c) {
      return Na(Pl(b), a) ? Ji(b.c, c, [a]).then(function (d) {
        var e = {};
        x(d.providerUserInfo || [], function (f) {
          e[f.providerId] = !0;
        });
        x(Pl(b), function (f) {
          e[f] || Rl(b, f);
        });
        e[Lg.PROVIDER_ID] || K(b, "phoneNumber", null);
        return Ll(b);
      }) : Ll(b).then(function () {
        throw new M("no-such-provider");
      });
    }));
  };

  k.delete = function () {
    var a = this;
    return Q(this, this.F().then(function (b) {
      return O(a.c, Xi, {
        idToken: b
      });
    }).then(function () {
      a.dispatchEvent(new Al("userDeleted"));
    })).then(function () {
      for (var b = 0; b < a.G.length; b++) a.G[b].cancel("app-deleted");

      Fl(a, null);
      Gl(a, null);
      a.G = [];
      a.D = !0;
      Jl(a);
      K(a, "refreshToken", null);
      a.a && a.a.unsubscribe(a);
    });
  };

  k.xb = function (a, b) {
    return "linkViaPopup" == a && (this.g || null) == b && this.f || "reauthViaPopup" == a && (this.g || null) == b && this.f || "linkViaRedirect" == a && (this.aa || null) == b || "reauthViaRedirect" == a && (this.aa || null) == b ? !0 : !1;
  };

  k.ha = function (a, b, c, d) {
    "linkViaPopup" != a && "reauthViaPopup" != a || d != (this.g || null) || (c && this.v ? this.v(c) : b && !c && this.f && this.f(b), this.b && (this.b.cancel(), this.b = null), delete this.f, delete this.v);
  };

  k.xa = function (a, b) {
    return "linkViaPopup" == a && b == (this.g || null) ? t(this.Bb, this) : "reauthViaPopup" == a && b == (this.g || null) ? t(this.Cb, this) : "linkViaRedirect" == a && (this.aa || null) == b ? t(this.Bb, this) : "reauthViaRedirect" == a && (this.aa || null) == b ? t(this.Cb, this) : null;
  };

  k.qc = function (a) {
    var b = this;
    return am(this, "linkViaPopup", a, function () {
      return Zl(b, a.providerId).then(function () {
        return Ll(b);
      });
    }, !1);
  };

  k.zc = function (a) {
    return am(this, "reauthViaPopup", a, function () {
      return D();
    }, !0);
  };

  function am(a, b, c, d, e) {
    if (!He()) return E(new M("operation-not-supported-in-this-environment"));
    if (a.i && !e) return E(a.i);
    var f = Qf(c.providerId),
        g = Ge(a.uid + ":::"),
        h = null;
    (!Je() || ye()) && a.u && c.isOAuthProvider && (h = sj(a.u, a.l, a.o, b, c, null, g, _app.default.SDK_VERSION || null));
    var m = pe(h, f && f.Ba, f && f.Aa);
    d = d().then(function () {
      bm(a);
      if (!e) return a.F().then(function () {});
    }).then(function () {
      return cl(a.a, m, b, c, g, !!h);
    }).then(function () {
      return new C(function (p, v) {
        a.ha(b, null, new M("cancelled-popup-request"), a.g || null);
        a.f = p;
        a.v = v;
        a.g = g;
        a.b = a.a.Ea(a, b, m, g);
      });
    }).then(function (p) {
      m && oe(m);
      return p ? $e(p) : null;
    }).s(function (p) {
      m && oe(m);
      throw p;
    });
    return Q(a, d, e);
  }

  k.rc = function (a) {
    var b = this;
    return cm(this, "linkViaRedirect", a, function () {
      return Zl(b, a.providerId);
    }, !1);
  };

  k.Ac = function (a) {
    return cm(this, "reauthViaRedirect", a, function () {
      return D();
    }, !0);
  };

  function cm(a, b, c, d, e) {
    if (!He()) return E(new M("operation-not-supported-in-this-environment"));
    if (a.i && !e) return E(a.i);
    var f = null,
        g = Ge(a.uid + ":::");
    d = d().then(function () {
      bm(a);
      if (!e) return a.F().then(function () {});
    }).then(function () {
      a.aa = g;
      return Ll(a);
    }).then(function (h) {
      a.ba && (h = a.ba, h = h.b.set(dm, a.w(), h.a));
      return h;
    }).then(function () {
      return a.a.Ca(b, c, g);
    }).s(function (h) {
      f = h;
      if (a.ba) return em(a.ba);
      throw f;
    }).then(function () {
      if (f) throw f;
    });
    return Q(a, d, e);
  }

  function bm(a) {
    if (!a.a || !a.I) {
      if (a.a && !a.I) throw new M("internal-error");
      throw new M("auth-domain-config-required");
    }
  }

  k.Bb = function (a, b, c) {
    var d = this;
    this.b && (this.b.cancel(), this.b = null);
    var e = null,
        f = this.F().then(function (g) {
      return hg(d.c, {
        requestUri: a,
        postBody: c,
        sessionId: b,
        idToken: g
      });
    }).then(function (g) {
      e = Yl(d, g, "link");
      return $l(d, g);
    }).then(function () {
      return e;
    });
    return Q(this, f);
  };

  k.Cb = function (a, b, c) {
    var d = this;
    this.b && (this.b.cancel(), this.b = null);
    var e = null,
        f = D().then(function () {
      return cg(ig(d.c, {
        requestUri: a,
        sessionId: b,
        postBody: c
      }), d.uid);
    }).then(function (g) {
      e = Yl(d, g, "reauthenticate");
      Wl(d, g);
      d.i = null;
      return d.reload();
    }).then(function () {
      return e;
    });
    return Q(this, f, !0);
  };

  k.kb = function (a) {
    var b = this,
        c = null;
    return Q(this, this.F().then(function (d) {
      c = d;
      return "undefined" === typeof a || Sa(a) ? {} : Af(new qf(a));
    }).then(function (d) {
      return b.c.kb(c, d);
    }).then(function (d) {
      if (b.email != d) return b.reload();
    }).then(function () {}));
  };

  function Q(a, b, c) {
    var d = fm(a, b, c);
    a.G.push(d);
    d.ia(function () {
      Oa(a.G, d);
    });
    return d;
  }

  function fm(a, b, c) {
    return a.i && !c ? (b.cancel(), E(a.i)) : b.s(function (d) {
      !d || "auth/user-disabled" != d.code && "auth/user-token-expired" != d.code || (a.i || a.dispatchEvent(new Al("userInvalidated")), a.i = d);
      throw d;
    });
  }

  k.toJSON = function () {
    return this.w();
  };

  k.w = function () {
    var a = {
      uid: this.uid,
      displayName: this.displayName,
      photoURL: this.photoURL,
      email: this.email,
      emailVerified: this.emailVerified,
      phoneNumber: this.phoneNumber,
      isAnonymous: this.isAnonymous,
      providerData: [],
      apiKey: this.l,
      appName: this.o,
      authDomain: this.u,
      stsTokenManager: this.h.w(),
      redirectEventId: this.aa || null
    };
    this.metadata && Va(a, this.metadata.w());
    x(this.providerData, function (b) {
      a.providerData.push(af(b));
    });
    return a;
  };

  function gm(a) {
    if (!a.apiKey) return null;
    var b = {
      apiKey: a.apiKey,
      authDomain: a.authDomain,
      appName: a.appName
    },
        c = {};
    if (a.stsTokenManager && a.stsTokenManager.accessToken && a.stsTokenManager.expirationTime) c[dg] = a.stsTokenManager.accessToken, c.refreshToken = a.stsTokenManager.refreshToken || null, c.expiresIn = (a.stsTokenManager.expirationTime - va()) / 1E3;else return null;
    var d = new P(b, c, a);
    a.providerData && x(a.providerData, function (e) {
      e && Ql(d, $e(e));
    });
    a.redirectEventId && (d.aa = a.redirectEventId);
    return d;
  }

  function hm(a, b, c, d) {
    var e = new P(a, b);
    c && (e.ba = c);
    d && El(e, d);
    return e.reload().then(function () {
      return e;
    });
  }

  function im(a, b, c, d) {
    b = b || {
      apiKey: a.l,
      authDomain: a.u,
      appName: a.o
    };
    var e = a.h,
        f = {};
    f[dg] = e.b;
    f.refreshToken = e.a;
    f.expiresIn = (e.c - va()) / 1E3;
    b = new P(b, f);
    c && (b.ba = c);
    d && El(b, d);
    Tl(b, a);
    return b;
  }

  ;

  function jm(a) {
    this.a = a;
    this.b = hk();
  }

  var dm = {
    name: "redirectUser",
    B: "session"
  };

  function em(a) {
    return lk(a.b, dm, a.a);
  }

  function km(a, b) {
    return a.b.get(dm, a.a).then(function (c) {
      c && b && (c.authDomain = b);
      return gm(c || {});
    });
  }

  ;

  function lm(a) {
    this.a = a;
    this.b = hk();
    this.c = null;
    this.f = mm(this);
    this.b.addListener(nm("local"), this.a, t(this.g, this));
  }

  lm.prototype.g = function () {
    var a = this,
        b = nm("local");
    om(this, function () {
      return D().then(function () {
        return a.c && "local" != a.c.B ? a.b.get(b, a.a) : null;
      }).then(function (c) {
        if (c) return pm(a, "local").then(function () {
          a.c = b;
        });
      });
    });
  };

  function pm(a, b) {
    var c = [],
        d;

    for (d in dk) dk[d] !== b && c.push(lk(a.b, nm(dk[d]), a.a));

    c.push(lk(a.b, qm, a.a));
    return $b(c);
  }

  function mm(a) {
    var b = nm("local"),
        c = nm("session"),
        d = nm("none");
    return kk(a.b, b, a.a).then(function () {
      return a.b.get(c, a.a);
    }).then(function (e) {
      return e ? c : a.b.get(d, a.a).then(function (f) {
        return f ? d : a.b.get(b, a.a).then(function (g) {
          return g ? b : a.b.get(qm, a.a).then(function (h) {
            return h ? nm(h) : b;
          });
        });
      });
    }).then(function (e) {
      a.c = e;
      return pm(a, e.B);
    }).s(function () {
      a.c || (a.c = b);
    });
  }

  var qm = {
    name: "persistence",
    B: "session"
  };

  function nm(a) {
    return {
      name: "authUser",
      B: a
    };
  }

  lm.prototype.nb = function (a) {
    var b = null,
        c = this;
    ek(a);
    return om(this, function () {
      return a != c.c.B ? c.b.get(c.c, c.a).then(function (d) {
        b = d;
        return pm(c, a);
      }).then(function () {
        c.c = nm(a);
        if (b) return c.b.set(c.c, b, c.a);
      }) : D();
    });
  };

  function rm(a) {
    return om(a, function () {
      return a.b.set(qm, a.c.B, a.a);
    });
  }

  function sm(a, b) {
    return om(a, function () {
      return a.b.set(a.c, b.w(), a.a);
    });
  }

  function tm(a) {
    return om(a, function () {
      return lk(a.b, a.c, a.a);
    });
  }

  function um(a, b) {
    return om(a, function () {
      return a.b.get(a.c, a.a).then(function (c) {
        c && b && (c.authDomain = b);
        return gm(c || {});
      });
    });
  }

  function om(a, b) {
    a.f = a.f.then(b, b);
    return a.f;
  }

  ;

  function vm(a) {
    this.l = !1;
    K(this, "settings", new ll());
    K(this, "app", a);
    if (R(this).options && R(this).options.apiKey) a = _app.default.SDK_VERSION ? Ee(_app.default.SDK_VERSION) : null, this.c = new ei(R(this).options && R(this).options.apiKey, Lf(Mf), a);else throw new M("invalid-api-key");
    this.N = [];
    this.o = [];
    this.I = [];
    this.Rb = _app.default.INTERNAL.createSubscribe(t(this.kc, this));
    this.O = void 0;
    this.Sb = _app.default.INTERNAL.createSubscribe(t(this.mc, this));
    wm(this, null);
    this.h = new lm(R(this).options.apiKey + ":" + R(this).name);
    this.A = new jm(R(this).options.apiKey + ":" + R(this).name);
    this.V = S(this, xm(this));
    this.i = S(this, ym(this));
    this.X = !1;
    this.ka = t(this.Kc, this);
    this.Ha = t(this.Z, this);
    this.ra = t(this.Zb, this);
    this.sa = t(this.ic, this);
    this.ta = t(this.jc, this);
    zm(this);
    this.INTERNAL = {};
    this.INTERNAL["delete"] = t(this.delete, this);
    this.INTERNAL.logFramework = t(this.sc, this);
    this.u = 0;
    F.call(this);
    Am(this);
    this.G = [];
  }

  u(vm, F);

  function Bm(a) {
    Jc.call(this, "languageCodeChanged");
    this.g = a;
  }

  u(Bm, Jc);

  function Cm(a) {
    Jc.call(this, "frameworkChanged");
    this.c = a;
  }

  u(Cm, Jc);
  k = vm.prototype;

  k.nb = function (a) {
    a = this.h.nb(a);
    return S(this, a);
  };

  k.pa = function (a) {
    this.W === a || this.l || (this.W = a, ki(this.c, this.W), this.dispatchEvent(new Bm(this.ea())));
  };

  k.ea = function () {
    return this.W;
  };

  k.Qc = function () {
    var a = l.navigator;
    this.pa(a ? a.languages && a.languages[0] || a.language || a.userLanguage || null : null);
  };

  k.sc = function (a) {
    this.G.push(a);
    li(this.c, _app.default.SDK_VERSION ? Ee(_app.default.SDK_VERSION, this.G) : null);
    this.dispatchEvent(new Cm(this.G));
  };

  k.ya = function () {
    return Qa(this.G);
  };

  function Am(a) {
    Object.defineProperty(a, "lc", {
      get: function () {
        return this.ea();
      },
      set: function (b) {
        this.pa(b);
      },
      enumerable: !1
    });
    a.W = null;
  }

  k.toJSON = function () {
    return {
      apiKey: R(this).options.apiKey,
      authDomain: R(this).options.authDomain,
      appName: R(this).name,
      currentUser: T(this) && T(this).w()
    };
  };

  function Dm(a) {
    return a.Qb || E(new M("auth-domain-config-required"));
  }

  function zm(a) {
    var b = R(a).options.authDomain,
        c = R(a).options.apiKey;
    b && He() && (a.Qb = a.V.then(function () {
      if (!a.l) {
        a.a = el(b, c, R(a).name);
        a.a.subscribe(a);
        T(a) && Ml(T(a));

        if (a.D) {
          Ml(a.D);
          var d = a.D;
          d.pa(a.ea());
          Fl(d, a);
          d = a.D;
          El(d, a.G);
          Gl(d, a);
          a.D = null;
        }

        return a.a;
      }
    }));
  }

  k.xb = function (a, b) {
    switch (a) {
      case "unknown":
      case "signInViaRedirect":
        return !0;

      case "signInViaPopup":
        return this.g == b && !!this.f;

      default:
        return !1;
    }
  };

  k.ha = function (a, b, c, d) {
    "signInViaPopup" == a && this.g == d && (c && this.v ? this.v(c) : b && !c && this.f && this.f(b), this.b && (this.b.cancel(), this.b = null), delete this.f, delete this.v);
  };

  k.xa = function (a, b) {
    return "signInViaRedirect" == a || "signInViaPopup" == a && this.g == b && this.f ? t(this.Yb, this) : null;
  };

  k.Yb = function (a, b, c) {
    var d = this;
    a = {
      requestUri: a,
      postBody: c,
      sessionId: b
    };
    this.b && (this.b.cancel(), this.b = null);
    var e = null,
        f = null,
        g = fg(d.c, a).then(function (h) {
      e = Og(h);
      f = Rf(h);
      return h;
    });
    a = d.V.then(function () {
      return g;
    }).then(function (h) {
      return Em(d, h);
    }).then(function () {
      return $e({
        user: T(d),
        credential: e,
        additionalUserInfo: f,
        operationType: "signIn"
      });
    });
    return S(this, a);
  };

  k.Ic = function (a) {
    if (!He()) return E(new M("operation-not-supported-in-this-environment"));
    var b = this,
        c = Qf(a.providerId),
        d = Ge(),
        e = null;
    (!Je() || ye()) && R(this).options.authDomain && a.isOAuthProvider && (e = sj(R(this).options.authDomain, R(this).options.apiKey, R(this).name, "signInViaPopup", a, null, d, _app.default.SDK_VERSION || null));
    var f = pe(e, c && c.Ba, c && c.Aa);
    c = Dm(this).then(function (g) {
      return cl(g, f, "signInViaPopup", a, d, !!e);
    }).then(function () {
      return new C(function (g, h) {
        b.ha("signInViaPopup", null, new M("cancelled-popup-request"), b.g);
        b.f = g;
        b.v = h;
        b.g = d;
        b.b = b.a.Ea(b, "signInViaPopup", f, d);
      });
    }).then(function (g) {
      f && oe(f);
      return g ? $e(g) : null;
    }).s(function (g) {
      f && oe(f);
      throw g;
    });
    return S(this, c);
  };

  k.Jc = function (a) {
    if (!He()) return E(new M("operation-not-supported-in-this-environment"));
    var b = this,
        c = Dm(this).then(function () {
      return rm(b.h);
    }).then(function () {
      return b.a.Ca("signInViaRedirect", a);
    });
    return S(this, c);
  };

  k.fa = function () {
    if (!He()) return E(new M("operation-not-supported-in-this-environment"));
    var a = this,
        b = Dm(this).then(function () {
      return a.a.fa();
    }).then(function (c) {
      return c ? $e(c) : null;
    });
    return S(this, b);
  };

  k.Oc = function (a) {
    if (!a) return E(new M("null-user"));
    var b = this,
        c = {};
    c.apiKey = R(this).options.apiKey;
    c.authDomain = R(this).options.authDomain;
    c.appName = R(this).name;
    var d = im(a, c, b.A, b.ya());
    return S(this, this.i.then(function () {
      if (R(b).options.apiKey != a.l) return d.reload();
    }).then(function () {
      if (T(b) && a.uid == T(b).uid) return Tl(T(b), a), b.Z(a);
      wm(b, d);
      Ml(d);
      return b.Z(d);
    }).then(function () {
      Fm(b);
    }));
  };

  function Em(a, b) {
    var c = {};
    c.apiKey = R(a).options.apiKey;
    c.authDomain = R(a).options.authDomain;
    c.appName = R(a).name;
    return a.V.then(function () {
      return hm(c, b, a.A, a.ya());
    }).then(function (d) {
      if (T(a) && d.uid == T(a).uid) return Tl(T(a), d), a.Z(d);
      wm(a, d);
      Ml(d);
      return a.Z(d);
    }).then(function () {
      Fm(a);
    });
  }

  function wm(a, b) {
    T(a) && (Kl(T(a), a.Ha), fd(T(a), "tokenChanged", a.ra), fd(T(a), "userDeleted", a.sa), fd(T(a), "userInvalidated", a.ta), Jl(T(a)));
    b && (b.N.push(a.Ha), Wc(b, "tokenChanged", a.ra), Wc(b, "userDeleted", a.sa), Wc(b, "userInvalidated", a.ta), 0 < a.u && Il(b));
    K(a, "currentUser", b);
    b && (b.pa(a.ea()), Fl(b, a), El(b, a.G), Gl(b, a));
  }

  k.pb = function () {
    var a = this,
        b = this.i.then(function () {
      if (!T(a)) return D();
      wm(a, null);
      return tm(a.h).then(function () {
        Fm(a);
      });
    });
    return S(this, b);
  };

  function Gm(a) {
    var b = km(a.A, R(a).options.authDomain).then(function (c) {
      if (a.D = c) c.ba = a.A;
      return em(a.A);
    });
    return S(a, b);
  }

  function xm(a) {
    var b = R(a).options.authDomain,
        c = Gm(a).then(function () {
      return um(a.h, b);
    }).then(function (d) {
      return d ? (d.ba = a.A, a.D && (a.D.aa || null) == (d.aa || null) ? d : d.reload().then(function () {
        return sm(a.h, d).then(function () {
          return d;
        });
      }).s(function (e) {
        return "auth/network-request-failed" == e.code ? d : tm(a.h);
      })) : null;
    }).then(function (d) {
      wm(a, d || null);
    });
    return S(a, c);
  }

  function ym(a) {
    return a.V.then(function () {
      return a.fa();
    }).s(function () {}).then(function () {
      if (!a.l) return a.ka();
    }).s(function () {}).then(function () {
      if (!a.l) {
        a.X = !0;
        var b = a.h;
        b.b.addListener(nm("local"), b.a, a.ka);
      }
    });
  }

  k.Kc = function () {
    var a = this;
    return um(this.h, R(this).options.authDomain).then(function (b) {
      if (!a.l) {
        var c;

        if (c = T(a) && b) {
          c = T(a).uid;
          var d = b.uid;
          c = void 0 === c || null === c || "" === c || void 0 === d || null === d || "" === d ? !1 : c == d;
        }

        if (c) return Tl(T(a), b), T(a).F();
        if (T(a) || b) wm(a, b), b && (Ml(b), b.ba = a.A), a.a && a.a.subscribe(a), Fm(a);
      }
    });
  };

  k.Z = function (a) {
    return sm(this.h, a);
  };

  k.Zb = function () {
    Fm(this);
    this.Z(T(this));
  };

  k.ic = function () {
    this.pb();
  };

  k.jc = function () {
    this.pb();
  };

  function Hm(a, b) {
    var c = null,
        d = null;
    return S(a, b.then(function (e) {
      c = Og(e);
      d = Rf(e);
      return Em(a, e);
    }).then(function () {
      return $e({
        user: T(a),
        credential: c,
        additionalUserInfo: d,
        operationType: "signIn"
      });
    }));
  }

  k.kc = function (a) {
    var b = this;
    this.addAuthTokenListener(function () {
      a.next(T(b));
    });
  };

  k.mc = function (a) {
    var b = this;
    Im(this, function () {
      a.next(T(b));
    });
  };

  k.uc = function (a, b, c) {
    var d = this;
    this.X && Promise.resolve().then(function () {
      q(a) ? a(T(d)) : q(a.next) && a.next(T(d));
    });
    return this.Rb(a, b, c);
  };

  k.tc = function (a, b, c) {
    var d = this;
    this.X && Promise.resolve().then(function () {
      d.O = d.getUid();
      q(a) ? a(T(d)) : q(a.next) && a.next(T(d));
    });
    return this.Sb(a, b, c);
  };

  k.$b = function (a) {
    var b = this,
        c = this.i.then(function () {
      return T(b) ? T(b).F(a).then(function (d) {
        return {
          accessToken: d
        };
      }) : null;
    });
    return S(this, c);
  };

  k.Ec = function (a) {
    var b = this;
    return this.i.then(function () {
      return Hm(b, O(b.c, $i, {
        token: a
      }));
    }).then(function (c) {
      var d = c.user;
      Sl(d, "isAnonymous", !1);
      b.Z(d);
      return c;
    });
  };

  k.Fc = function (a, b) {
    var c = this;
    return this.i.then(function () {
      return Hm(c, O(c.c, Ag, {
        email: a,
        password: b
      }));
    });
  };

  k.Ub = function (a, b) {
    var c = this;
    return this.i.then(function () {
      return Hm(c, O(c.c, Wi, {
        email: a,
        password: b
      }));
    });
  };

  k.Ra = function (a) {
    var b = this;
    return this.i.then(function () {
      return Hm(b, a.la(b.c));
    });
  };

  k.Dc = function (a) {
    Xe("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead.");
    return this.Ra(a);
  };

  k.ob = function () {
    var a = this;
    return this.i.then(function () {
      var b = T(a);

      if (b && b.isAnonymous) {
        var c = $e({
          providerId: null,
          isNewUser: !1
        });
        return $e({
          user: b,
          credential: null,
          additionalUserInfo: c,
          operationType: "signIn"
        });
      }

      return Hm(a, a.c.ob()).then(function (d) {
        var e = d.user;
        Sl(e, "isAnonymous", !0);
        a.Z(e);
        return d;
      });
    });
  };

  function R(a) {
    return a.app;
  }

  function T(a) {
    return a.currentUser;
  }

  k.getUid = function () {
    return T(this) && T(this).uid || null;
  };

  function Jm(a) {
    return T(a) && T(a)._lat || null;
  }

  function Fm(a) {
    if (a.X) {
      for (var b = 0; b < a.o.length; b++) if (a.o[b]) a.o[b](Jm(a));

      if (a.O !== a.getUid() && a.I.length) for (a.O = a.getUid(), b = 0; b < a.I.length; b++) if (a.I[b]) a.I[b](Jm(a));
    }
  }

  k.Tb = function (a) {
    this.addAuthTokenListener(a);
    this.u++;
    0 < this.u && T(this) && Il(T(this));
  };

  k.Bc = function (a) {
    var b = this;
    x(this.o, function (c) {
      c == a && b.u--;
    });
    0 > this.u && (this.u = 0);
    0 == this.u && T(this) && Jl(T(this));
    this.removeAuthTokenListener(a);
  };

  k.addAuthTokenListener = function (a) {
    var b = this;
    this.o.push(a);
    S(this, this.i.then(function () {
      b.l || Na(b.o, a) && a(Jm(b));
    }));
  };

  k.removeAuthTokenListener = function (a) {
    y(this.o, function (b) {
      return b == a;
    });
  };

  function Im(a, b) {
    a.I.push(b);
    S(a, a.i.then(function () {
      !a.l && Na(a.I, b) && a.O !== a.getUid() && (a.O = a.getUid(), b(Jm(a)));
    }));
  }

  k.delete = function () {
    this.l = !0;

    for (var a = 0; a < this.N.length; a++) this.N[a].cancel("app-deleted");

    this.N = [];
    this.h && (a = this.h, a.b.removeListener(nm("local"), a.a, this.ka));
    this.a && (this.a.unsubscribe(this), this.a.Za());
    return Promise.resolve();
  };

  function S(a, b) {
    a.N.push(b);
    b.ia(function () {
      Oa(a.N, b);
    });
    return b;
  }

  k.Xb = function (a) {
    return S(this, vi(this.c, a));
  };

  k.nc = function (a) {
    return !!Fg(a);
  };

  k.mb = function (a, b) {
    var c = this;
    return S(this, D().then(function () {
      var d = new qf(b);
      if (!d.c) throw new M("argument-error", yf + " must be true when sending sign in link to email");
      return Af(d);
    }).then(function (d) {
      return c.c.mb(a, d);
    }).then(function () {}));
  };

  k.Rc = function (a) {
    return this.Ka(a).then(function (b) {
      return b.data.email;
    });
  };

  k.$a = function (a, b) {
    return S(this, this.c.$a(a, b).then(function () {}));
  };

  k.Ka = function (a) {
    return S(this, this.c.Ka(a).then(function (b) {
      return new df(b);
    }));
  };

  k.Xa = function (a) {
    return S(this, this.c.Xa(a).then(function () {}));
  };

  k.lb = function (a, b) {
    var c = this;
    return S(this, D().then(function () {
      return "undefined" === typeof b || Sa(b) ? {} : Af(new qf(b));
    }).then(function (d) {
      return c.c.lb(a, d);
    }).then(function () {}));
  };

  k.Hc = function (a, b) {
    return S(this, nl(this, a, b, t(this.Ra, this)));
  };

  k.Gc = function (a, b) {
    var c = this;
    return S(this, D().then(function () {
      var d = Eg(a, b || he());
      return c.Ra(d);
    }));
  };

  function Km() {}

  Km.prototype.render = function () {};

  Km.prototype.reset = function () {};

  Km.prototype.getResponse = function () {};

  Km.prototype.execute = function () {};

  function Lm() {
    this.a = {};
    this.b = 1E12;
  }

  var Mm = null;

  Lm.prototype.render = function (a, b) {
    this.a[this.b.toString()] = new Nm(a, b);
    return this.b++;
  };

  Lm.prototype.reset = function (a) {
    var b = Om(this, a);
    a = Pm(a);
    b && a && (b.delete(), delete this.a[a]);
  };

  Lm.prototype.getResponse = function (a) {
    return (a = Om(this, a)) ? a.getResponse() : null;
  };

  Lm.prototype.execute = function (a) {
    (a = Om(this, a)) && a.execute();
  };

  function Om(a, b) {
    return (b = Pm(b)) ? a.a[b] || null : null;
  }

  function Pm(a) {
    return (a = "undefined" === typeof a ? 1E12 : a) ? a.toString() : null;
  }

  function Nm(a, b) {
    this.g = !1;
    this.c = b;
    this.a = this.b = null;
    this.h = "invisible" !== this.c.size;
    this.f = Vd(a);
    var c = this;

    this.i = function () {
      c.execute();
    };

    this.h ? this.execute() : Wc(this.f, "click", this.i);
  }

  Nm.prototype.getResponse = function () {
    Qm(this);
    return this.b;
  };

  Nm.prototype.execute = function () {
    Qm(this);
    var a = this;
    this.a || (this.a = setTimeout(function () {
      a.b = Ce();
      var b = a.c.callback,
          c = a.c["expired-callback"];
      if (b) try {
        b(a.b);
      } catch (d) {}
      a.a = setTimeout(function () {
        a.a = null;
        a.b = null;
        if (c) try {
          c();
        } catch (d) {}
        a.h && a.execute();
      }, 6E4);
    }, 500));
  };

  Nm.prototype.delete = function () {
    Qm(this);
    this.g = !0;
    clearTimeout(this.a);
    this.a = null;
    fd(this.f, "click", this.i);
  };

  function Qm(a) {
    if (a.g) throw Error("reCAPTCHA mock was already deleted!");
  }

  ;

  function Rm() {}

  Rm.prototype.g = function () {
    Mm || (Mm = new Lm());
    return D(Mm);
  };

  Rm.prototype.c = function () {};

  var Sm = null;

  function Tm() {
    this.b = l.grecaptcha ? Infinity : 0;
    this.f = null;
    this.a = "__rcb" + Math.floor(1E6 * Math.random()).toString();
  }

  var Um = new Wa(Xa, "https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),
      Vm = new Pe(3E4, 6E4);

  Tm.prototype.g = function (a) {
    var b = this;
    return new C(function (c, d) {
      var e = setTimeout(function () {
        d(new M("network-request-failed"));
      }, Vm.get());

      if (!l.grecaptcha || a !== b.f && !b.b) {
        l[b.a] = function () {
          if (l.grecaptcha) {
            b.f = a;
            var g = l.grecaptcha.render;

            l.grecaptcha.render = function (h, m) {
              h = g(h, m);
              b.b++;
              return h;
            };

            clearTimeout(e);
            c(l.grecaptcha);
          } else clearTimeout(e), d(new M("internal-error"));

          delete l[b.a];
        };

        var f = db(Um, {
          onload: b.a,
          hl: a || ""
        });
        D(Yh(f)).s(function () {
          clearTimeout(e);
          d(new M("internal-error", "Unable to load external reCAPTCHA dependencies!"));
        });
      } else clearTimeout(e), c(l.grecaptcha);
    });
  };

  Tm.prototype.c = function () {
    this.b--;
  };

  var Wm = null;

  function Xm(a, b, c, d, e, f, g) {
    K(this, "type", "recaptcha");
    this.c = this.f = null;
    this.D = !1;
    this.l = b;
    this.g = null;
    g ? (Sm || (Sm = new Rm()), g = Sm) : (Wm || (Wm = new Tm()), g = Wm);
    this.o = g;
    this.a = c || {
      theme: "light",
      type: "image"
    };
    this.h = [];
    if (this.a[Ym]) throw new M("argument-error", "sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.");
    this.i = "invisible" === this.a[Zm];
    if (!l.document) throw new M("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.");
    if (!Vd(b) || !this.i && Vd(b).hasChildNodes()) throw new M("argument-error", "reCAPTCHA container is either not found or already contains inner elements!");
    this.u = new ei(a, f || null, e || null);

    this.v = d || function () {
      return null;
    };

    var h = this;
    this.m = [];
    var m = this.a[$m];

    this.a[$m] = function (v) {
      an(h, v);
      if ("function" === typeof m) m(v);else if ("string" === typeof m) {
        var z = J(m, l);
        "function" === typeof z && z(v);
      }
    };

    var p = this.a[bn];

    this.a[bn] = function () {
      an(h, null);
      if ("function" === typeof p) p();else if ("string" === typeof p) {
        var v = J(p, l);
        "function" === typeof v && v();
      }
    };
  }

  var $m = "callback",
      bn = "expired-callback",
      Ym = "sitekey",
      Zm = "size";

  function an(a, b) {
    for (var c = 0; c < a.m.length; c++) try {
      a.m[c](b);
    } catch (d) {}
  }

  function cn(a, b) {
    y(a.m, function (c) {
      return c == b;
    });
  }

  function dn(a, b) {
    a.h.push(b);
    b.ia(function () {
      Oa(a.h, b);
    });
    return b;
  }

  k = Xm.prototype;

  k.za = function () {
    var a = this;
    return this.f ? this.f : this.f = dn(this, D().then(function () {
      if (Ie() && !ze()) return ue();
      throw new M("operation-not-supported-in-this-environment", "RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.");
    }).then(function () {
      return a.o.g(a.v());
    }).then(function (b) {
      a.g = b;
      return O(a.u, Zi, {});
    }).then(function (b) {
      a.a[Ym] = b.recaptchaSiteKey;
    }).s(function (b) {
      a.f = null;
      throw b;
    }));
  };

  k.render = function () {
    en(this);
    var a = this;
    return dn(this, this.za().then(function () {
      if (null === a.c) {
        var b = a.l;

        if (!a.i) {
          var c = Vd(b);
          b = Yd("DIV");
          c.appendChild(b);
        }

        a.c = a.g.render(b, a.a);
      }

      return a.c;
    }));
  };

  k.verify = function () {
    en(this);
    var a = this;
    return dn(this, this.render().then(function (b) {
      return new C(function (c) {
        var d = a.g.getResponse(b);
        if (d) c(d);else {
          var e = function (f) {
            f && (cn(a, e), c(f));
          };

          a.m.push(e);
          a.i && a.g.execute(a.c);
        }
      });
    }));
  };

  k.reset = function () {
    en(this);
    null !== this.c && this.g.reset(this.c);
  };

  function en(a) {
    if (a.D) throw new M("internal-error", "RecaptchaVerifier instance has been destroyed.");
  }

  k.clear = function () {
    en(this);
    this.D = !0;
    this.o.c();

    for (var a = 0; a < this.h.length; a++) this.h[a].cancel("RecaptchaVerifier instance has been destroyed.");

    if (!this.i) {
      a = Vd(this.l);

      for (var b; b = a.firstChild;) a.removeChild(b);
    }
  };

  function fn(a, b, c) {
    var d = !1;

    try {
      this.b = c || _app.default.app();
    } catch (g) {
      throw new M("argument-error", "No firebase.app.App instance is currently initialized.");
    }

    if (this.b.options && this.b.options.apiKey) c = this.b.options.apiKey;else throw new M("invalid-api-key");
    var e = this,
        f = null;

    try {
      f = this.b.auth().ya();
    } catch (g) {}

    try {
      d = this.b.auth().settings.appVerificationDisabledForTesting;
    } catch (g) {}

    f = _app.default.SDK_VERSION ? Ee(_app.default.SDK_VERSION, f) : null;
    Xm.call(this, c, a, b, function () {
      try {
        var g = e.b.auth().ea();
      } catch (h) {
        g = null;
      }

      return g;
    }, f, Lf(Mf), d);
  }

  u(fn, Xm);

  function gn(a, b, c, d) {
    a: {
      c = Array.prototype.slice.call(c);
      var e = 0;

      for (var f = !1, g = 0; g < b.length; g++) if (b[g].optional) f = !0;else {
        if (f) throw new M("internal-error", "Argument validator encountered a required argument after an optional argument.");
        e++;
      }

      f = b.length;
      if (c.length < e || f < c.length) d = "Expected " + (e == f ? 1 == e ? "1 argument" : e + " arguments" : e + "-" + f + " arguments") + " but got " + c.length + ".";else {
        for (e = 0; e < c.length; e++) if (f = b[e].optional && void 0 === c[e], !b[e].M(c[e]) && !f) {
          b = b[e];
          if (0 > e || e >= hn.length) throw new M("internal-error", "Argument validator received an unsupported number of arguments.");
          c = hn[e];
          d = (d ? "" : c + " argument ") + (b.name ? '"' + b.name + '" ' : "") + "must be " + b.K + ".";
          break a;
        }

        d = null;
      }
    }

    if (d) throw new M("argument-error", a + " failed: " + d);
  }

  var hn = "First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ");

  function U(a, b) {
    return {
      name: a || "",
      K: "a valid string",
      optional: !!b,
      M: n
    };
  }

  function jn(a, b) {
    return {
      name: a || "",
      K: "a boolean",
      optional: !!b,
      M: ha
    };
  }

  function W(a, b) {
    return {
      name: a || "",
      K: "a valid object",
      optional: !!b,
      M: r
    };
  }

  function kn(a, b) {
    return {
      name: a || "",
      K: "a function",
      optional: !!b,
      M: q
    };
  }

  function ln(a, b) {
    return {
      name: a || "",
      K: "null",
      optional: !!b,
      M: ma
    };
  }

  function mn() {
    return {
      name: "",
      K: "an HTML element",
      optional: !1,
      M: function (a) {
        return !!(a && a instanceof Element);
      }
    };
  }

  function nn() {
    return {
      name: "auth",
      K: "an instance of Firebase Auth",
      optional: !0,
      M: function (a) {
        return !!(a && a instanceof vm);
      }
    };
  }

  function on() {
    return {
      name: "app",
      K: "an instance of Firebase App",
      optional: !0,
      M: function (a) {
        return !!(a && a instanceof _app.default.app.App);
      }
    };
  }

  function pn(a) {
    return {
      name: a ? a + "Credential" : "credential",
      K: a ? "a valid " + a + " credential" : "a valid credential",
      optional: !1,
      M: function (b) {
        if (!b) return !1;
        var c = !a || b.providerId === a;
        return !(!b.la || !c);
      }
    };
  }

  function qn() {
    return {
      name: "authProvider",
      K: "a valid Auth provider",
      optional: !1,
      M: function (a) {
        return !!(a && a.providerId && a.hasOwnProperty && a.hasOwnProperty("isOAuthProvider"));
      }
    };
  }

  function rn() {
    return {
      name: "applicationVerifier",
      K: "an implementation of firebase.auth.ApplicationVerifier",
      optional: !1,
      M: function (a) {
        return !!(a && n(a.type) && q(a.verify));
      }
    };
  }

  function X(a, b, c, d) {
    return {
      name: c || "",
      K: a.K + " or " + b.K,
      optional: !!d,
      M: function (e) {
        return a.M(e) || b.M(e);
      }
    };
  }

  ;

  function Y(a, b) {
    for (var c in b) {
      var d = b[c].name;
      a[d] = sn(d, a[c], b[c].j);
    }
  }

  function tn(a, b) {
    for (var c in b) {
      var d = b[c].name;
      d !== c && Object.defineProperty(a, d, {
        get: ta(function (e) {
          return this[e];
        }, c),
        set: ta(function (e, f, g, h) {
          gn(e, [g], [h], !0);
          this[f] = h;
        }, d, c, b[c].vb),
        enumerable: !0
      });
    }
  }

  function Z(a, b, c, d) {
    a[b] = sn(b, c, d);
  }

  function sn(a, b, c) {
    function d() {
      var g = Array.prototype.slice.call(arguments);
      gn(e, c, g);
      return b.apply(this, g);
    }

    if (!c) return b;
    var e = un(a),
        f;

    for (f in b) d[f] = b[f];

    for (f in b.prototype) d.prototype[f] = b.prototype[f];

    return d;
  }

  function un(a) {
    a = a.split(".");
    return a[a.length - 1];
  }

  ;
  Y(vm.prototype, {
    Xa: {
      name: "applyActionCode",
      j: [U("code")]
    },
    Ka: {
      name: "checkActionCode",
      j: [U("code")]
    },
    $a: {
      name: "confirmPasswordReset",
      j: [U("code"), U("newPassword")]
    },
    Ub: {
      name: "createUserWithEmailAndPassword",
      j: [U("email"), U("password")]
    },
    Xb: {
      name: "fetchSignInMethodsForEmail",
      j: [U("email")]
    },
    fa: {
      name: "getRedirectResult",
      j: []
    },
    nc: {
      name: "isSignInWithEmailLink",
      j: [U("emailLink")]
    },
    tc: {
      name: "onAuthStateChanged",
      j: [X(W(), kn(), "nextOrObserver"), kn("opt_error", !0), kn("opt_completed", !0)]
    },
    uc: {
      name: "onIdTokenChanged",
      j: [X(W(), kn(), "nextOrObserver"), kn("opt_error", !0), kn("opt_completed", !0)]
    },
    lb: {
      name: "sendPasswordResetEmail",
      j: [U("email"), X(W("opt_actionCodeSettings", !0), ln(null, !0), "opt_actionCodeSettings", !0)]
    },
    mb: {
      name: "sendSignInLinkToEmail",
      j: [U("email"), W("actionCodeSettings")]
    },
    nb: {
      name: "setPersistence",
      j: [U("persistence")]
    },
    Dc: {
      name: "signInAndRetrieveDataWithCredential",
      j: [pn()]
    },
    ob: {
      name: "signInAnonymously",
      j: []
    },
    Ra: {
      name: "signInWithCredential",
      j: [pn()]
    },
    Ec: {
      name: "signInWithCustomToken",
      j: [U("token")]
    },
    Fc: {
      name: "signInWithEmailAndPassword",
      j: [U("email"), U("password")]
    },
    Gc: {
      name: "signInWithEmailLink",
      j: [U("email"), U("emailLink", !0)]
    },
    Hc: {
      name: "signInWithPhoneNumber",
      j: [U("phoneNumber"), rn()]
    },
    Ic: {
      name: "signInWithPopup",
      j: [qn()]
    },
    Jc: {
      name: "signInWithRedirect",
      j: [qn()]
    },
    Oc: {
      name: "updateCurrentUser",
      j: [X(function (a) {
        return {
          name: "user",
          K: "an instance of Firebase User",
          optional: !!a,
          M: function (b) {
            return !!(b && b instanceof P);
          }
        };
      }(), ln(), "user")]
    },
    pb: {
      name: "signOut",
      j: []
    },
    toJSON: {
      name: "toJSON",
      j: [U(null, !0)]
    },
    Qc: {
      name: "useDeviceLanguage",
      j: []
    },
    Rc: {
      name: "verifyPasswordResetCode",
      j: [U("code")]
    }
  });
  tn(vm.prototype, {
    lc: {
      name: "languageCode",
      vb: X(U(), ln(), "languageCode")
    }
  });
  vm.Persistence = dk;
  vm.Persistence.LOCAL = "local";
  vm.Persistence.SESSION = "session";
  vm.Persistence.NONE = "none";
  Y(P.prototype, {
    "delete": {
      name: "delete",
      j: []
    },
    ac: {
      name: "getIdTokenResult",
      j: [jn("opt_forceRefresh", !0)]
    },
    F: {
      name: "getIdToken",
      j: [jn("opt_forceRefresh", !0)]
    },
    oc: {
      name: "linkAndRetrieveDataWithCredential",
      j: [pn()]
    },
    fb: {
      name: "linkWithCredential",
      j: [pn()]
    },
    pc: {
      name: "linkWithPhoneNumber",
      j: [U("phoneNumber"), rn()]
    },
    qc: {
      name: "linkWithPopup",
      j: [qn()]
    },
    rc: {
      name: "linkWithRedirect",
      j: [qn()]
    },
    xc: {
      name: "reauthenticateAndRetrieveDataWithCredential",
      j: [pn()]
    },
    hb: {
      name: "reauthenticateWithCredential",
      j: [pn()]
    },
    yc: {
      name: "reauthenticateWithPhoneNumber",
      j: [U("phoneNumber"), rn()]
    },
    zc: {
      name: "reauthenticateWithPopup",
      j: [qn()]
    },
    Ac: {
      name: "reauthenticateWithRedirect",
      j: [qn()]
    },
    reload: {
      name: "reload",
      j: []
    },
    kb: {
      name: "sendEmailVerification",
      j: [X(W("opt_actionCodeSettings", !0), ln(null, !0), "opt_actionCodeSettings", !0)]
    },
    toJSON: {
      name: "toJSON",
      j: [U(null, !0)]
    },
    Nc: {
      name: "unlink",
      j: [U("provider")]
    },
    rb: {
      name: "updateEmail",
      j: [U("email")]
    },
    sb: {
      name: "updatePassword",
      j: [U("password")]
    },
    Pc: {
      name: "updatePhoneNumber",
      j: [pn("phone")]
    },
    tb: {
      name: "updateProfile",
      j: [W("profile")]
    }
  });
  Y(Lm.prototype, {
    execute: {
      name: "execute"
    },
    render: {
      name: "render"
    },
    reset: {
      name: "reset"
    },
    getResponse: {
      name: "getResponse"
    }
  });
  Y(Km.prototype, {
    execute: {
      name: "execute"
    },
    render: {
      name: "render"
    },
    reset: {
      name: "reset"
    },
    getResponse: {
      name: "getResponse"
    }
  });
  Y(C.prototype, {
    ia: {
      name: "finally"
    },
    s: {
      name: "catch"
    },
    then: {
      name: "then"
    }
  });
  tn(ll.prototype, {
    appVerificationDisabled: {
      name: "appVerificationDisabledForTesting",
      vb: jn("appVerificationDisabledForTesting")
    }
  });
  Y(ml.prototype, {
    confirm: {
      name: "confirm",
      j: [U("verificationCode")]
    }
  });
  Z(bg, "fromJSON", function (a) {
    a = n(a) ? JSON.parse(a) : a;

    for (var b, c = [mg, Dg, Kg, jg], d = 0; d < c.length; d++) if (b = c[d](a)) return b;

    return null;
  }, [X(U(), W(), "json")]);
  Z(yg, "credential", function (a, b) {
    return new xg(a, b);
  }, [U("email"), U("password")]);
  Y(xg.prototype, {
    w: {
      name: "toJSON",
      j: [U(null, !0)]
    }
  });
  Y(pg.prototype, {
    ua: {
      name: "addScope",
      j: [U("scope")]
    },
    Da: {
      name: "setCustomParameters",
      j: [W("customOAuthParameters")]
    }
  });
  Z(pg, "credential", qg, [X(U(), W(), "token")]);
  Z(yg, "credentialWithLink", Eg, [U("email"), U("emailLink")]);
  Y(rg.prototype, {
    ua: {
      name: "addScope",
      j: [U("scope")]
    },
    Da: {
      name: "setCustomParameters",
      j: [W("customOAuthParameters")]
    }
  });
  Z(rg, "credential", sg, [X(U(), W(), "token")]);
  Y(tg.prototype, {
    ua: {
      name: "addScope",
      j: [U("scope")]
    },
    Da: {
      name: "setCustomParameters",
      j: [W("customOAuthParameters")]
    }
  });
  Z(tg, "credential", ug, [X(U(), X(W(), ln()), "idToken"), X(U(), ln(), "accessToken", !0)]);
  Y(vg.prototype, {
    Da: {
      name: "setCustomParameters",
      j: [W("customOAuthParameters")]
    }
  });
  Z(vg, "credential", wg, [X(U(), W(), "token"), U("secret", !0)]);
  Y(N.prototype, {
    ua: {
      name: "addScope",
      j: [U("scope")]
    },
    credential: {
      name: "credential",
      j: [X(U(), X(W(), ln()), "optionsOrIdToken"), X(U(), ln(), "accessToken", !0)]
    },
    Da: {
      name: "setCustomParameters",
      j: [W("customOAuthParameters")]
    }
  });
  Y(kg.prototype, {
    w: {
      name: "toJSON",
      j: [U(null, !0)]
    }
  });
  Y(eg.prototype, {
    w: {
      name: "toJSON",
      j: [U(null, !0)]
    }
  });
  Z(Lg, "credential", Ng, [U("verificationId"), U("verificationCode")]);
  Y(Lg.prototype, {
    Va: {
      name: "verifyPhoneNumber",
      j: [U("phoneNumber"), rn()]
    }
  });
  Y(Gg.prototype, {
    w: {
      name: "toJSON",
      j: [U(null, !0)]
    }
  });
  Y(M.prototype, {
    toJSON: {
      name: "toJSON",
      j: [U(null, !0)]
    }
  });
  Y(Vg.prototype, {
    toJSON: {
      name: "toJSON",
      j: [U(null, !0)]
    }
  });
  Y(Ug.prototype, {
    toJSON: {
      name: "toJSON",
      j: [U(null, !0)]
    }
  });
  Y(fn.prototype, {
    clear: {
      name: "clear",
      j: []
    },
    render: {
      name: "render",
      j: []
    },
    verify: {
      name: "verify",
      j: []
    }
  });

  (function () {
    if ("undefined" !== typeof _app.default && _app.default.INTERNAL && _app.default.INTERNAL.registerService) {
      var a = {
        Auth: vm,
        AuthCredential: bg,
        Error: M
      };
      Z(a, "EmailAuthProvider", yg, []);
      Z(a, "FacebookAuthProvider", pg, []);
      Z(a, "GithubAuthProvider", rg, []);
      Z(a, "GoogleAuthProvider", tg, []);
      Z(a, "TwitterAuthProvider", vg, []);
      Z(a, "OAuthProvider", N, [U("providerId")]);
      Z(a, "SAMLAuthProvider", og, [U("providerId")]);
      Z(a, "PhoneAuthProvider", Lg, [nn()]);
      Z(a, "RecaptchaVerifier", fn, [X(U(), mn(), "recaptchaContainer"), W("recaptchaParameters", !0), on()]);

      _app.default.INTERNAL.registerService("auth", function (b, c) {
        b = new vm(b);
        c({
          INTERNAL: {
            getUid: t(b.getUid, b),
            getToken: t(b.$b, b),
            addAuthTokenListener: t(b.Tb, b),
            removeAuthTokenListener: t(b.Bc, b)
          }
        });
        return b;
      }, a, function (b, c) {
        if ("create" === b) try {
          c.auth();
        } catch (d) {}
      });

      _app.default.INTERNAL.extendNamespace({
        User: P
      });
    } else throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.");
  })();
}).apply(typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : {});
},{"@firebase/app":"../node_modules/@firebase/app/dist/index.cjs.js"}],"../node_modules/firebase/auth/dist/index.esm.js":[function(require,module,exports) {
"use strict";

require("@firebase/auth");
},{"@firebase/auth":"../node_modules/@firebase/auth/dist/auth.esm.js"}],"../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../node_modules/@firebase/database/dist/index.cjs.js":[function(require,module,exports) {
var process = require("process");
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var firebase = _interopDefault(require('@firebase/app'));
var tslib_1 = require('tslib');
var util = require('@firebase/util');
var logger$1 = require('@firebase/logger');

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Wraps a DOM Storage object and:
 * - automatically encode objects as JSON strings before storing them to allow us to store arbitrary types.
 * - prefixes names with "firebase:" to avoid collisions with app data.
 *
 * We automatically (see storage.js) create two such wrappers, one for sessionStorage,
 * and one for localStorage.
 *
 * @constructor
 */
var DOMStorageWrapper = /** @class */ (function () {
    /**
     * @param {Storage} domStorage_ The underlying storage object (e.g. localStorage or sessionStorage)
     */
    function DOMStorageWrapper(domStorage_) {
        this.domStorage_ = domStorage_;
        // Use a prefix to avoid collisions with other stuff saved by the app.
        this.prefix_ = 'firebase:';
    }
    /**
     * @param {string} key The key to save the value under
     * @param {?Object} value The value being stored, or null to remove the key.
     */
    DOMStorageWrapper.prototype.set = function (key, value) {
        if (value == null) {
            this.domStorage_.removeItem(this.prefixedName_(key));
        }
        else {
            this.domStorage_.setItem(this.prefixedName_(key), util.stringify(value));
        }
    };
    /**
     * @param {string} key
     * @return {*} The value that was stored under this key, or null
     */
    DOMStorageWrapper.prototype.get = function (key) {
        var storedVal = this.domStorage_.getItem(this.prefixedName_(key));
        if (storedVal == null) {
            return null;
        }
        else {
            return util.jsonEval(storedVal);
        }
    };
    /**
     * @param {string} key
     */
    DOMStorageWrapper.prototype.remove = function (key) {
        this.domStorage_.removeItem(this.prefixedName_(key));
    };
    /**
     * @param {string} name
     * @return {string}
     */
    DOMStorageWrapper.prototype.prefixedName_ = function (name) {
        return this.prefix_ + name;
    };
    DOMStorageWrapper.prototype.toString = function () {
        return this.domStorage_.toString();
    };
    return DOMStorageWrapper;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory storage implementation that matches the API of DOMStorageWrapper
 * (TODO: create interface for both to implement).
 *
 * @constructor
 */
var MemoryStorage = /** @class */ (function () {
    function MemoryStorage() {
        this.cache_ = {};
        this.isInMemoryStorage = true;
    }
    MemoryStorage.prototype.set = function (key, value) {
        if (value == null) {
            delete this.cache_[key];
        }
        else {
            this.cache_[key] = value;
        }
    };
    MemoryStorage.prototype.get = function (key) {
        if (util.contains(this.cache_, key)) {
            return this.cache_[key];
        }
        return null;
    };
    MemoryStorage.prototype.remove = function (key) {
        delete this.cache_[key];
    };
    return MemoryStorage;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Helper to create a DOMStorageWrapper or else fall back to MemoryStorage.
 * TODO: Once MemoryStorage and DOMStorageWrapper have a shared interface this method annotation should change
 * to reflect this type
 *
 * @param {string} domStorageName Name of the underlying storage object
 *   (e.g. 'localStorage' or 'sessionStorage').
 * @return {?} Turning off type information until a common interface is defined.
 */
var createStoragefor = function (domStorageName) {
    try {
        // NOTE: just accessing "localStorage" or "window['localStorage']" may throw a security exception,
        // so it must be inside the try/catch.
        if (typeof window !== 'undefined' &&
            typeof window[domStorageName] !== 'undefined') {
            // Need to test cache. Just because it's here doesn't mean it works
            var domStorage = window[domStorageName];
            domStorage.setItem('firebase:sentinel', 'cache');
            domStorage.removeItem('firebase:sentinel');
            return new DOMStorageWrapper(domStorage);
        }
    }
    catch (e) { }
    // Failed to create wrapper.  Just return in-memory storage.
    // TODO: log?
    return new MemoryStorage();
};
/** A storage object that lasts across sessions */
var PersistentStorage = createStoragefor('localStorage');
/** A storage object that only lasts one session */
var SessionStorage = createStoragefor('sessionStorage');

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var logClient = new logger$1.Logger('@firebase/database');
/**
 * Returns a locally-unique ID (generated by just incrementing up from 0 each time its called).
 * @type {function(): number} Generated ID.
 */
var LUIDGenerator = (function () {
    var id = 1;
    return function () {
        return id++;
    };
})();
/**
 * Sha1 hash of the input string
 * @param {!string} str The string to hash
 * @return {!string} The resulting hash
 */
var sha1 = function (str) {
    var utf8Bytes = util.stringToByteArray(str);
    var sha1 = new util.Sha1();
    sha1.update(utf8Bytes);
    var sha1Bytes = sha1.digest();
    return util.base64.encodeByteArray(sha1Bytes);
};
/**
 * @param {...*} var_args
 * @return {string}
 * @private
 */
var buildLogMessage_ = function () {
    var var_args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        var_args[_i] = arguments[_i];
    }
    var message = '';
    for (var i = 0; i < var_args.length; i++) {
        if (Array.isArray(var_args[i]) ||
            (var_args[i] &&
                typeof var_args[i] === 'object' &&
                typeof var_args[i].length === 'number')) {
            message += buildLogMessage_.apply(null, var_args[i]);
        }
        else if (typeof var_args[i] === 'object') {
            message += util.stringify(var_args[i]);
        }
        else {
            message += var_args[i];
        }
        message += ' ';
    }
    return message;
};
/**
 * Use this for all debug messages in Firebase.
 * @type {?function(string)}
 */
var logger = null;
/**
 * Flag to check for log availability on first log message
 * @type {boolean}
 * @private
 */
var firstLog_ = true;
/**
 * The implementation of Firebase.enableLogging (defined here to break dependencies)
 * @param {boolean|?function(string)} logger_ A flag to turn on logging, or a custom logger
 * @param {boolean=} persistent Whether or not to persist logging settings across refreshes
 */
var enableLogging = function (logger_, persistent) {
    util.assert(!persistent || (logger_ === true || logger_ === false), "Can't turn on custom loggers persistently.");
    if (logger_ === true) {
        logClient.logLevel = logger$1.LogLevel.VERBOSE;
        logger = logClient.log.bind(logClient);
        if (persistent)
            SessionStorage.set('logging_enabled', true);
    }
    else if (typeof logger_ === 'function') {
        logger = logger_;
    }
    else {
        logger = null;
        SessionStorage.remove('logging_enabled');
    }
};
/**
 *
 * @param {...(string|Arguments)} var_args
 */
var log = function () {
    var var_args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        var_args[_i] = arguments[_i];
    }
    if (firstLog_ === true) {
        firstLog_ = false;
        if (logger === null && SessionStorage.get('logging_enabled') === true)
            enableLogging(true);
    }
    if (logger) {
        var message = buildLogMessage_.apply(null, var_args);
        logger(message);
    }
};
/**
 * @param {!string} prefix
 * @return {function(...[*])}
 */
var logWrapper = function (prefix) {
    return function () {
        var var_args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            var_args[_i] = arguments[_i];
        }
        log.apply(void 0, tslib_1.__spread([prefix], var_args));
    };
};
/**
 * @param {...string} var_args
 */
var error = function () {
    var var_args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        var_args[_i] = arguments[_i];
    }
    var message = 'FIREBASE INTERNAL ERROR: ' + buildLogMessage_.apply(void 0, tslib_1.__spread(var_args));
    logClient.error(message);
};
/**
 * @param {...string} var_args
 */
var fatal = function () {
    var var_args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        var_args[_i] = arguments[_i];
    }
    var message = "FIREBASE FATAL ERROR: " + buildLogMessage_.apply(void 0, tslib_1.__spread(var_args));
    logClient.error(message);
    throw new Error(message);
};
/**
 * @param {...*} var_args
 */
var warn = function () {
    var var_args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        var_args[_i] = arguments[_i];
    }
    var message = 'FIREBASE WARNING: ' + buildLogMessage_.apply(void 0, tslib_1.__spread(var_args));
    logClient.warn(message);
};
/**
 * Logs a warning if the containing page uses https. Called when a call to new Firebase
 * does not use https.
 */
var warnIfPageIsSecure = function () {
    // Be very careful accessing browser globals. Who knows what may or may not exist.
    if (typeof window !== 'undefined' &&
        window.location &&
        window.location.protocol &&
        window.location.protocol.indexOf('https:') !== -1) {
        warn('Insecure Firebase access from a secure page. ' +
            'Please use https in calls to new Firebase().');
    }
};
/**
 * Returns true if data is NaN, or +/- Infinity.
 * @param {*} data
 * @return {boolean}
 */
var isInvalidJSONNumber = function (data) {
    return (typeof data === 'number' &&
        (data != data || // NaN
            data == Number.POSITIVE_INFINITY ||
            data == Number.NEGATIVE_INFINITY));
};
/**
 * @param {function()} fn
 */
var executeWhenDOMReady = function (fn) {
    if (util.isNodeSdk() || document.readyState === 'complete') {
        fn();
    }
    else {
        // Modeled after jQuery. Try DOMContentLoaded and onreadystatechange (which
        // fire before onload), but fall back to onload.
        var called_1 = false;
        var wrappedFn_1 = function () {
            if (!document.body) {
                setTimeout(wrappedFn_1, Math.floor(10));
                return;
            }
            if (!called_1) {
                called_1 = true;
                fn();
            }
        };
        if (document.addEventListener) {
            document.addEventListener('DOMContentLoaded', wrappedFn_1, false);
            // fallback to onload.
            window.addEventListener('load', wrappedFn_1, false);
        }
        else if (document.attachEvent) {
            // IE.
            document.attachEvent('onreadystatechange', function () {
                if (document.readyState === 'complete')
                    wrappedFn_1();
            });
            // fallback to onload.
            window.attachEvent('onload', wrappedFn_1);
            // jQuery has an extra hack for IE that we could employ (based on
            // http://javascript.nwbox.com/IEContentLoaded/) But it looks really old.
            // I'm hoping we don't need it.
        }
    }
};
/**
 * Minimum key name. Invalid for actual data, used as a marker to sort before any valid names
 * @type {!string}
 */
var MIN_NAME = '[MIN_NAME]';
/**
 * Maximum key name. Invalid for actual data, used as a marker to sort above any valid names
 * @type {!string}
 */
var MAX_NAME = '[MAX_NAME]';
/**
 * Compares valid Firebase key names, plus min and max name
 * @param {!string} a
 * @param {!string} b
 * @return {!number}
 */
var nameCompare = function (a, b) {
    if (a === b) {
        return 0;
    }
    else if (a === MIN_NAME || b === MAX_NAME) {
        return -1;
    }
    else if (b === MIN_NAME || a === MAX_NAME) {
        return 1;
    }
    else {
        var aAsInt = tryParseInt(a), bAsInt = tryParseInt(b);
        if (aAsInt !== null) {
            if (bAsInt !== null) {
                return aAsInt - bAsInt == 0 ? a.length - b.length : aAsInt - bAsInt;
            }
            else {
                return -1;
            }
        }
        else if (bAsInt !== null) {
            return 1;
        }
        else {
            return a < b ? -1 : 1;
        }
    }
};
/**
 * @param {!string} a
 * @param {!string} b
 * @return {!number} comparison result.
 */
var stringCompare = function (a, b) {
    if (a === b) {
        return 0;
    }
    else if (a < b) {
        return -1;
    }
    else {
        return 1;
    }
};
/**
 * @param {string} key
 * @param {Object} obj
 * @return {*}
 */
var requireKey = function (key, obj) {
    if (obj && key in obj) {
        return obj[key];
    }
    else {
        throw new Error('Missing required key (' + key + ') in object: ' + util.stringify(obj));
    }
};
/**
 * @param {*} obj
 * @return {string}
 */
var ObjectToUniqueKey = function (obj) {
    if (typeof obj !== 'object' || obj === null)
        return util.stringify(obj);
    var keys = [];
    for (var k in obj) {
        keys.push(k);
    }
    // Export as json, but with the keys sorted.
    keys.sort();
    var key = '{';
    for (var i = 0; i < keys.length; i++) {
        if (i !== 0)
            key += ',';
        key += util.stringify(keys[i]);
        key += ':';
        key += ObjectToUniqueKey(obj[keys[i]]);
    }
    key += '}';
    return key;
};
/**
 * Splits a string into a number of smaller segments of maximum size
 * @param {!string} str The string
 * @param {!number} segsize The maximum number of chars in the string.
 * @return {Array.<string>} The string, split into appropriately-sized chunks
 */
var splitStringBySize = function (str, segsize) {
    var len = str.length;
    if (len <= segsize) {
        return [str];
    }
    var dataSegs = [];
    for (var c = 0; c < len; c += segsize) {
        if (c + segsize > len) {
            dataSegs.push(str.substring(c, len));
        }
        else {
            dataSegs.push(str.substring(c, c + segsize));
        }
    }
    return dataSegs;
};
/**
 * Apply a function to each (key, value) pair in an object or
 * apply a function to each (index, value) pair in an array
 * @param obj The object or array to iterate over
 * @param fn The function to apply
 */
function each(obj, fn) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            fn(key, obj[key]);
        }
    }
}
/**
 * Borrowed from http://hg.secondlife.com/llsd/src/tip/js/typedarray.js (MIT License)
 * I made one modification at the end and removed the NaN / Infinity
 * handling (since it seemed broken [caused an overflow] and we don't need it).  See MJL comments.
 * @param {!number} v A double
 * @return {string}
 */
var doubleToIEEE754String = function (v) {
    util.assert(!isInvalidJSONNumber(v), 'Invalid JSON number'); // MJL
    var ebits = 11, fbits = 52;
    var bias = (1 << (ebits - 1)) - 1, s, e, f, ln, i, bits, str;
    // Compute sign, exponent, fraction
    // Skip NaN / Infinity handling --MJL.
    if (v === 0) {
        e = 0;
        f = 0;
        s = 1 / v === -Infinity ? 1 : 0;
    }
    else {
        s = v < 0;
        v = Math.abs(v);
        if (v >= Math.pow(2, 1 - bias)) {
            // Normalized
            ln = Math.min(Math.floor(Math.log(v) / Math.LN2), bias);
            e = ln + bias;
            f = Math.round(v * Math.pow(2, fbits - ln) - Math.pow(2, fbits));
        }
        else {
            // Denormalized
            e = 0;
            f = Math.round(v / Math.pow(2, 1 - bias - fbits));
        }
    }
    // Pack sign, exponent, fraction
    bits = [];
    for (i = fbits; i; i -= 1) {
        bits.push(f % 2 ? 1 : 0);
        f = Math.floor(f / 2);
    }
    for (i = ebits; i; i -= 1) {
        bits.push(e % 2 ? 1 : 0);
        e = Math.floor(e / 2);
    }
    bits.push(s ? 1 : 0);
    bits.reverse();
    str = bits.join('');
    // Return the data as a hex string. --MJL
    var hexByteString = '';
    for (i = 0; i < 64; i += 8) {
        var hexByte = parseInt(str.substr(i, 8), 2).toString(16);
        if (hexByte.length === 1)
            hexByte = '0' + hexByte;
        hexByteString = hexByteString + hexByte;
    }
    return hexByteString.toLowerCase();
};
/**
 * Used to detect if we're in a Chrome content script (which executes in an
 * isolated environment where long-polling doesn't work).
 * @return {boolean}
 */
var isChromeExtensionContentScript = function () {
    return !!(typeof window === 'object' &&
        window['chrome'] &&
        window['chrome']['extension'] &&
        !/^chrome/.test(window.location.href));
};
/**
 * Used to detect if we're in a Windows 8 Store app.
 * @return {boolean}
 */
var isWindowsStoreApp = function () {
    // Check for the presence of a couple WinRT globals
    return typeof Windows === 'object' && typeof Windows.UI === 'object';
};
/**
 * Converts a server error code to a Javascript Error
 * @param {!string} code
 * @param {!Query} query
 * @return {Error}
 */
var errorForServerCode = function (code, query) {
    var reason = 'Unknown Error';
    if (code === 'too_big') {
        reason =
            'The data requested exceeds the maximum size ' +
                'that can be accessed with a single request.';
    }
    else if (code == 'permission_denied') {
        reason = "Client doesn't have permission to access the desired data.";
    }
    else if (code == 'unavailable') {
        reason = 'The service is unavailable';
    }
    var error = new Error(code + ' at ' + query.path.toString() + ': ' + reason);
    error.code = code.toUpperCase();
    return error;
};
/**
 * Used to test for integer-looking strings
 * @type {RegExp}
 * @private
 */
var INTEGER_REGEXP_ = new RegExp('^-?\\d{1,10}$');
/**
 * If the string contains a 32-bit integer, return it.  Else return null.
 * @param {!string} str
 * @return {?number}
 */
var tryParseInt = function (str) {
    if (INTEGER_REGEXP_.test(str)) {
        var intVal = Number(str);
        if (intVal >= -2147483648 && intVal <= 2147483647) {
            return intVal;
        }
    }
    return null;
};
/**
 * Helper to run some code but catch any exceptions and re-throw them later.
 * Useful for preventing user callbacks from breaking internal code.
 *
 * Re-throwing the exception from a setTimeout is a little evil, but it's very
 * convenient (we don't have to try to figure out when is a safe point to
 * re-throw it), and the behavior seems reasonable:
 *
 * * If you aren't pausing on exceptions, you get an error in the console with
 *   the correct stack trace.
 * * If you're pausing on all exceptions, the debugger will pause on your
 *   exception and then again when we rethrow it.
 * * If you're only pausing on uncaught exceptions, the debugger will only pause
 *   on us re-throwing it.
 *
 * @param {!function()} fn The code to guard.
 */
var exceptionGuard = function (fn) {
    try {
        fn();
    }
    catch (e) {
        // Re-throw exception when it's safe.
        setTimeout(function () {
            // It used to be that "throw e" would result in a good console error with
            // relevant context, but as of Chrome 39, you just get the firebase.js
            // file/line number where we re-throw it, which is useless. So we log
            // e.stack explicitly.
            var stack = e.stack || '';
            warn('Exception was thrown by user callback.', stack);
            throw e;
        }, Math.floor(0));
    }
};
/**
 * @return {boolean} true if we think we're currently being crawled.
 */
var beingCrawled = function () {
    var userAgent = (typeof window === 'object' &&
        window['navigator'] &&
        window['navigator']['userAgent']) ||
        '';
    // For now we whitelist the most popular crawlers.  We should refine this to be the set of crawlers we
    // believe to support JavaScript/AJAX rendering.
    // NOTE: Google Webmaster Tools doesn't really belong, but their "This is how a visitor to your website
    // would have seen the page" is flaky if we don't treat it as a crawler.
    return (userAgent.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i) >= 0);
};
/**
 * Same as setTimeout() except on Node.JS it will /not/ prevent the process from exiting.
 *
 * It is removed with clearTimeout() as normal.
 *
 * @param {Function} fn Function to run.
 * @param {number} time Milliseconds to wait before running.
 * @return {number|Object} The setTimeout() return value.
 */
var setTimeoutNonBlocking = function (fn, time) {
    var timeout = setTimeout(fn, time);
    if (typeof timeout === 'object' && timeout['unref']) {
        timeout['unref']();
    }
    return timeout;
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable object representing a parsed path.  It's immutable so that you
 * can pass them around to other functions without worrying about them changing
 * it.
 */
var Path = /** @class */ (function () {
    /**
     * @param {string|Array.<string>} pathOrString Path string to parse,
     *      or another path, or the raw tokens array
     * @param {number=} pieceNum
     */
    function Path(pathOrString, pieceNum) {
        if (pieceNum === void 0) {
            this.pieces_ = pathOrString.split('/');
            // Remove empty pieces.
            var copyTo = 0;
            for (var i = 0; i < this.pieces_.length; i++) {
                if (this.pieces_[i].length > 0) {
                    this.pieces_[copyTo] = this.pieces_[i];
                    copyTo++;
                }
            }
            this.pieces_.length = copyTo;
            this.pieceNum_ = 0;
        }
        else {
            this.pieces_ = pathOrString;
            this.pieceNum_ = pieceNum;
        }
    }
    Object.defineProperty(Path, "Empty", {
        /**
         * Singleton to represent an empty path
         *
         * @const
         */
        get: function () {
            return new Path('');
        },
        enumerable: true,
        configurable: true
    });
    Path.prototype.getFront = function () {
        if (this.pieceNum_ >= this.pieces_.length)
            return null;
        return this.pieces_[this.pieceNum_];
    };
    /**
     * @return {number} The number of segments in this path
     */
    Path.prototype.getLength = function () {
        return this.pieces_.length - this.pieceNum_;
    };
    /**
     * @return {!Path}
     */
    Path.prototype.popFront = function () {
        var pieceNum = this.pieceNum_;
        if (pieceNum < this.pieces_.length) {
            pieceNum++;
        }
        return new Path(this.pieces_, pieceNum);
    };
    /**
     * @return {?string}
     */
    Path.prototype.getBack = function () {
        if (this.pieceNum_ < this.pieces_.length)
            return this.pieces_[this.pieces_.length - 1];
        return null;
    };
    Path.prototype.toString = function () {
        var pathString = '';
        for (var i = this.pieceNum_; i < this.pieces_.length; i++) {
            if (this.pieces_[i] !== '')
                pathString += '/' + this.pieces_[i];
        }
        return pathString || '/';
    };
    Path.prototype.toUrlEncodedString = function () {
        var pathString = '';
        for (var i = this.pieceNum_; i < this.pieces_.length; i++) {
            if (this.pieces_[i] !== '')
                pathString += '/' + encodeURIComponent(String(this.pieces_[i]));
        }
        return pathString || '/';
    };
    /**
     * Shallow copy of the parts of the path.
     *
     * @param {number=} begin
     * @return {!Array<string>}
     */
    Path.prototype.slice = function (begin) {
        if (begin === void 0) { begin = 0; }
        return this.pieces_.slice(this.pieceNum_ + begin);
    };
    /**
     * @return {?Path}
     */
    Path.prototype.parent = function () {
        if (this.pieceNum_ >= this.pieces_.length)
            return null;
        var pieces = [];
        for (var i = this.pieceNum_; i < this.pieces_.length - 1; i++)
            pieces.push(this.pieces_[i]);
        return new Path(pieces, 0);
    };
    /**
     * @param {string|!Path} childPathObj
     * @return {!Path}
     */
    Path.prototype.child = function (childPathObj) {
        var pieces = [];
        for (var i = this.pieceNum_; i < this.pieces_.length; i++)
            pieces.push(this.pieces_[i]);
        if (childPathObj instanceof Path) {
            for (var i = childPathObj.pieceNum_; i < childPathObj.pieces_.length; i++) {
                pieces.push(childPathObj.pieces_[i]);
            }
        }
        else {
            var childPieces = childPathObj.split('/');
            for (var i = 0; i < childPieces.length; i++) {
                if (childPieces[i].length > 0)
                    pieces.push(childPieces[i]);
            }
        }
        return new Path(pieces, 0);
    };
    /**
     * @return {boolean} True if there are no segments in this path
     */
    Path.prototype.isEmpty = function () {
        return this.pieceNum_ >= this.pieces_.length;
    };
    /**
     * @param {!Path} outerPath
     * @param {!Path} innerPath
     * @return {!Path} The path from outerPath to innerPath
     */
    Path.relativePath = function (outerPath, innerPath) {
        var outer = outerPath.getFront(), inner = innerPath.getFront();
        if (outer === null) {
            return innerPath;
        }
        else if (outer === inner) {
            return Path.relativePath(outerPath.popFront(), innerPath.popFront());
        }
        else {
            throw new Error('INTERNAL ERROR: innerPath (' +
                innerPath +
                ') is not within ' +
                'outerPath (' +
                outerPath +
                ')');
        }
    };
    /**
     * @param {!Path} left
     * @param {!Path} right
     * @return {number} -1, 0, 1 if left is less, equal, or greater than the right.
     */
    Path.comparePaths = function (left, right) {
        var leftKeys = left.slice();
        var rightKeys = right.slice();
        for (var i = 0; i < leftKeys.length && i < rightKeys.length; i++) {
            var cmp = nameCompare(leftKeys[i], rightKeys[i]);
            if (cmp !== 0)
                return cmp;
        }
        if (leftKeys.length === rightKeys.length)
            return 0;
        return leftKeys.length < rightKeys.length ? -1 : 1;
    };
    /**
     *
     * @param {Path} other
     * @return {boolean} true if paths are the same.
     */
    Path.prototype.equals = function (other) {
        if (this.getLength() !== other.getLength()) {
            return false;
        }
        for (var i = this.pieceNum_, j = other.pieceNum_; i <= this.pieces_.length; i++, j++) {
            if (this.pieces_[i] !== other.pieces_[j]) {
                return false;
            }
        }
        return true;
    };
    /**
     *
     * @param {!Path} other
     * @return {boolean} True if this path is a parent (or the same as) other
     */
    Path.prototype.contains = function (other) {
        var i = this.pieceNum_;
        var j = other.pieceNum_;
        if (this.getLength() > other.getLength()) {
            return false;
        }
        while (i < this.pieces_.length) {
            if (this.pieces_[i] !== other.pieces_[j]) {
                return false;
            }
            ++i;
            ++j;
        }
        return true;
    };
    return Path;
}()); // end Path
/**
 * Dynamic (mutable) path used to count path lengths.
 *
 * This class is used to efficiently check paths for valid
 * length (in UTF8 bytes) and depth (used in path validation).
 *
 * Throws Error exception if path is ever invalid.
 *
 * The definition of a path always begins with '/'.
 */
var ValidationPath = /** @class */ (function () {
    /**
     * @param {!Path} path Initial Path.
     * @param {string} errorPrefix_ Prefix for any error messages.
     */
    function ValidationPath(path, errorPrefix_) {
        this.errorPrefix_ = errorPrefix_;
        /** @type {!Array<string>} */
        this.parts_ = path.slice();
        /** @type {number} Initialize to number of '/' chars needed in path. */
        this.byteLength_ = Math.max(1, this.parts_.length);
        for (var i = 0; i < this.parts_.length; i++) {
            this.byteLength_ += util.stringLength(this.parts_[i]);
        }
        this.checkValid_();
    }
    Object.defineProperty(ValidationPath, "MAX_PATH_DEPTH", {
        /** @const {number} Maximum key depth. */
        get: function () {
            return 32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ValidationPath, "MAX_PATH_LENGTH_BYTES", {
        /** @const {number} Maximum number of (UTF8) bytes in a Firebase path. */
        get: function () {
            return 768;
        },
        enumerable: true,
        configurable: true
    });
    /** @param {string} child */
    ValidationPath.prototype.push = function (child) {
        // Count the needed '/'
        if (this.parts_.length > 0) {
            this.byteLength_ += 1;
        }
        this.parts_.push(child);
        this.byteLength_ += util.stringLength(child);
        this.checkValid_();
    };
    ValidationPath.prototype.pop = function () {
        var last = this.parts_.pop();
        this.byteLength_ -= util.stringLength(last);
        // Un-count the previous '/'
        if (this.parts_.length > 0) {
            this.byteLength_ -= 1;
        }
    };
    ValidationPath.prototype.checkValid_ = function () {
        if (this.byteLength_ > ValidationPath.MAX_PATH_LENGTH_BYTES) {
            throw new Error(this.errorPrefix_ +
                'has a key path longer than ' +
                ValidationPath.MAX_PATH_LENGTH_BYTES +
                ' bytes (' +
                this.byteLength_ +
                ').');
        }
        if (this.parts_.length > ValidationPath.MAX_PATH_DEPTH) {
            throw new Error(this.errorPrefix_ +
                'path specified exceeds the maximum depth that can be written (' +
                ValidationPath.MAX_PATH_DEPTH +
                ') or object contains a cycle ' +
                this.toErrorString());
        }
    };
    /**
     * String for use in error messages - uses '.' notation for path.
     *
     * @return {string}
     */
    ValidationPath.prototype.toErrorString = function () {
        if (this.parts_.length == 0) {
            return '';
        }
        return "in property '" + this.parts_.join('.') + "'";
    };
    return ValidationPath;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var PROTOCOL_VERSION = '5';
var VERSION_PARAM = 'v';
var TRANSPORT_SESSION_PARAM = 's';
var REFERER_PARAM = 'r';
var FORGE_REF = 'f';
var FORGE_DOMAIN = 'firebaseio.com';
var LAST_SESSION_PARAM = 'ls';
var WEBSOCKET = 'websocket';
var LONG_POLLING = 'long_polling';

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A class that holds metadata about a Repo object
 *
 * @constructor
 */
var RepoInfo = /** @class */ (function () {
    /**
     * @param {string} host Hostname portion of the url for the repo
     * @param {boolean} secure Whether or not this repo is accessed over ssl
     * @param {string} namespace The namespace represented by the repo
     * @param {boolean} webSocketOnly Whether to prefer websockets over all other transports (used by Nest).
     * @param {string=} persistenceKey Override the default session persistence storage key
     */
    function RepoInfo(host, secure, namespace, webSocketOnly, persistenceKey) {
        if (persistenceKey === void 0) { persistenceKey = ''; }
        this.secure = secure;
        this.namespace = namespace;
        this.webSocketOnly = webSocketOnly;
        this.persistenceKey = persistenceKey;
        this.host = host.toLowerCase();
        this.domain = this.host.substr(this.host.indexOf('.') + 1);
        this.internalHost = PersistentStorage.get('host:' + host) || this.host;
    }
    RepoInfo.prototype.needsQueryParam = function () {
        return this.host !== this.internalHost || this.isCustomHost();
    };
    RepoInfo.prototype.isCacheableHost = function () {
        return this.internalHost.substr(0, 2) === 's-';
    };
    RepoInfo.prototype.isDemoHost = function () {
        return this.domain === 'firebaseio-demo.com';
    };
    RepoInfo.prototype.isCustomHost = function () {
        return (this.domain !== 'firebaseio.com' && this.domain !== 'firebaseio-demo.com');
    };
    RepoInfo.prototype.updateHost = function (newHost) {
        if (newHost !== this.internalHost) {
            this.internalHost = newHost;
            if (this.isCacheableHost()) {
                PersistentStorage.set('host:' + this.host, this.internalHost);
            }
        }
    };
    /**
     * Returns the websocket URL for this repo
     * @param {string} type of connection
     * @param {Object} params list
     * @return {string} The URL for this repo
     */
    RepoInfo.prototype.connectionURL = function (type, params) {
        util.assert(typeof type === 'string', 'typeof type must == string');
        util.assert(typeof params === 'object', 'typeof params must == object');
        var connURL;
        if (type === WEBSOCKET) {
            connURL =
                (this.secure ? 'wss://' : 'ws://') + this.internalHost + '/.ws?';
        }
        else if (type === LONG_POLLING) {
            connURL =
                (this.secure ? 'https://' : 'http://') + this.internalHost + '/.lp?';
        }
        else {
            throw new Error('Unknown connection type: ' + type);
        }
        if (this.needsQueryParam()) {
            params['ns'] = this.namespace;
        }
        var pairs = [];
        each(params, function (key, value) {
            pairs.push(key + '=' + value);
        });
        return connURL + pairs.join('&');
    };
    /** @return {string} */
    RepoInfo.prototype.toString = function () {
        var str = this.toURLString();
        if (this.persistenceKey) {
            str += '<' + this.persistenceKey + '>';
        }
        return str;
    };
    /** @return {string} */
    RepoInfo.prototype.toURLString = function () {
        return (this.secure ? 'https://' : 'http://') + this.host;
    };
    return RepoInfo;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param {!string} pathString
 * @return {string}
 */
function decodePath(pathString) {
    var pathStringDecoded = '';
    var pieces = pathString.split('/');
    for (var i = 0; i < pieces.length; i++) {
        if (pieces[i].length > 0) {
            var piece = pieces[i];
            try {
                piece = decodeURIComponent(piece.replace(/\+/g, ' '));
            }
            catch (e) { }
            pathStringDecoded += '/' + piece;
        }
    }
    return pathStringDecoded;
}
/**
 * @param {!string} queryString
 * @return {!{[key:string]:string}} key value hash
 */
function decodeQuery(queryString) {
    var e_1, _a;
    var results = {};
    if (queryString.charAt(0) === '?') {
        queryString = queryString.substring(1);
    }
    try {
        for (var _b = tslib_1.__values(queryString.split('&')), _c = _b.next(); !_c.done; _c = _b.next()) {
            var segment = _c.value;
            if (segment.length === 0) {
                continue;
            }
            var kv = segment.split('=');
            if (kv.length === 2) {
                results[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
            }
            else {
                warn("Invalid query segment '" + segment + "' in query '" + queryString + "'");
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return results;
}
/**
 *
 * @param {!string} dataURL
 * @return {{repoInfo: !RepoInfo, path: !Path}}
 */
var parseRepoInfo = function (dataURL) {
    var parsedUrl = parseURL(dataURL), namespace = parsedUrl.subdomain;
    if (parsedUrl.domain === 'firebase') {
        fatal(parsedUrl.host +
            ' is no longer supported. ' +
            'Please use <YOUR FIREBASE>.firebaseio.com instead');
    }
    // Catch common error of uninitialized namespace value.
    if ((!namespace || namespace == 'undefined') &&
        parsedUrl.domain !== 'localhost') {
        fatal('Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com');
    }
    if (!parsedUrl.secure) {
        warnIfPageIsSecure();
    }
    var webSocketOnly = parsedUrl.scheme === 'ws' || parsedUrl.scheme === 'wss';
    return {
        repoInfo: new RepoInfo(parsedUrl.host, parsedUrl.secure, namespace, webSocketOnly),
        path: new Path(parsedUrl.pathString)
    };
};
/**
 *
 * @param {!string} dataURL
 * @return {{host: string, port: number, domain: string, subdomain: string, secure: boolean, scheme: string, pathString: string}}
 */
var parseURL = function (dataURL) {
    // Default to empty strings in the event of a malformed string.
    var host = '', domain = '', subdomain = '', pathString = '';
    // Always default to SSL, unless otherwise specified.
    var secure = true, scheme = 'https', port = 443;
    // Don't do any validation here. The caller is responsible for validating the result of parsing.
    if (typeof dataURL === 'string') {
        // Parse scheme.
        var colonInd = dataURL.indexOf('//');
        if (colonInd >= 0) {
            scheme = dataURL.substring(0, colonInd - 1);
            dataURL = dataURL.substring(colonInd + 2);
        }
        // Parse host, path, and query string.
        var slashInd = dataURL.indexOf('/');
        if (slashInd === -1) {
            slashInd = dataURL.length;
        }
        var questionMarkInd = dataURL.indexOf('?');
        if (questionMarkInd === -1) {
            questionMarkInd = dataURL.length;
        }
        host = dataURL.substring(0, Math.min(slashInd, questionMarkInd));
        if (slashInd < questionMarkInd) {
            // For pathString, questionMarkInd will always come after slashInd
            pathString = decodePath(dataURL.substring(slashInd, questionMarkInd));
        }
        var queryParams = decodeQuery(dataURL.substring(Math.min(dataURL.length, questionMarkInd)));
        // If we have a port, use scheme for determining if it's secure.
        colonInd = host.indexOf(':');
        if (colonInd >= 0) {
            secure = scheme === 'https' || scheme === 'wss';
            port = parseInt(host.substring(colonInd + 1), 10);
        }
        else {
            colonInd = dataURL.length;
        }
        var parts = host.split('.');
        if (parts.length === 3) {
            // Normalize namespaces to lowercase to share storage / connection.
            domain = parts[1];
            subdomain = parts[0].toLowerCase();
        }
        else if (parts.length === 2) {
            domain = parts[0];
        }
        else if (parts[0].slice(0, colonInd).toLowerCase() === 'localhost') {
            domain = 'localhost';
        }
        // Support `ns` query param if subdomain not already set
        if (subdomain === '' && 'ns' in queryParams) {
            subdomain = queryParams['ns'];
        }
    }
    return {
        host: host,
        port: port,
        domain: domain,
        subdomain: subdomain,
        secure: secure,
        scheme: scheme,
        pathString: pathString
    };
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * True for invalid Firebase keys
 * @type {RegExp}
 * @private
 */
var INVALID_KEY_REGEX_ = /[\[\].#$\/\u0000-\u001F\u007F]/;
/**
 * True for invalid Firebase paths.
 * Allows '/' in paths.
 * @type {RegExp}
 * @private
 */
var INVALID_PATH_REGEX_ = /[\[\].#$\u0000-\u001F\u007F]/;
/**
 * Maximum number of characters to allow in leaf value
 * @type {number}
 * @private
 */
var MAX_LEAF_SIZE_ = 10 * 1024 * 1024;
/**
 * @param {*} key
 * @return {boolean}
 */
var isValidKey = function (key) {
    return (typeof key === 'string' && key.length !== 0 && !INVALID_KEY_REGEX_.test(key));
};
/**
 * @param {string} pathString
 * @return {boolean}
 */
var isValidPathString = function (pathString) {
    return (typeof pathString === 'string' &&
        pathString.length !== 0 &&
        !INVALID_PATH_REGEX_.test(pathString));
};
/**
 * @param {string} pathString
 * @return {boolean}
 */
var isValidRootPathString = function (pathString) {
    if (pathString) {
        // Allow '/.info/' at the beginning.
        pathString = pathString.replace(/^\/*\.info(\/|$)/, '/');
    }
    return isValidPathString(pathString);
};
/**
 * @param {*} priority
 * @return {boolean}
 */
var isValidPriority = function (priority) {
    return (priority === null ||
        typeof priority === 'string' ||
        (typeof priority === 'number' && !isInvalidJSONNumber(priority)) ||
        (priority && typeof priority === 'object' && util.contains(priority, '.sv')));
};
/**
 * Pre-validate a datum passed as an argument to Firebase function.
 *
 * @param {string} fnName
 * @param {number} argumentNumber
 * @param {*} data
 * @param {!Path} path
 * @param {boolean} optional
 */
var validateFirebaseDataArg = function (fnName, argumentNumber, data, path, optional) {
    if (optional && data === undefined)
        return;
    validateFirebaseData(util.errorPrefix(fnName, argumentNumber, optional), data, path);
};
/**
 * Validate a data object client-side before sending to server.
 *
 * @param {string} errorPrefix
 * @param {*} data
 * @param {!Path|!ValidationPath} path_
 */
var validateFirebaseData = function (errorPrefix, data, path_) {
    var path = path_ instanceof Path ? new ValidationPath(path_, errorPrefix) : path_;
    if (data === undefined) {
        throw new Error(errorPrefix + 'contains undefined ' + path.toErrorString());
    }
    if (typeof data === 'function') {
        throw new Error(errorPrefix +
            'contains a function ' +
            path.toErrorString() +
            ' with contents = ' +
            data.toString());
    }
    if (isInvalidJSONNumber(data)) {
        throw new Error(errorPrefix + 'contains ' + data.toString() + ' ' + path.toErrorString());
    }
    // Check max leaf size, but try to avoid the utf8 conversion if we can.
    if (typeof data === 'string' &&
        data.length > MAX_LEAF_SIZE_ / 3 &&
        util.stringLength(data) > MAX_LEAF_SIZE_) {
        throw new Error(errorPrefix +
            'contains a string greater than ' +
            MAX_LEAF_SIZE_ +
            ' utf8 bytes ' +
            path.toErrorString() +
            " ('" +
            data.substring(0, 50) +
            "...')");
    }
    // TODO = Perf = Consider combining the recursive validation of keys into NodeFromJSON
    // to save extra walking of large objects.
    if (data && typeof data === 'object') {
        var hasDotValue_1 = false;
        var hasActualChild_1 = false;
        each(data, function (key, value) {
            if (key === '.value') {
                hasDotValue_1 = true;
            }
            else if (key !== '.priority' && key !== '.sv') {
                hasActualChild_1 = true;
                if (!isValidKey(key)) {
                    throw new Error(errorPrefix +
                        ' contains an invalid key (' +
                        key +
                        ') ' +
                        path.toErrorString() +
                        '.  Keys must be non-empty strings ' +
                        'and can\'t contain ".", "#", "$", "/", "[", or "]"');
                }
            }
            path.push(key);
            validateFirebaseData(errorPrefix, value, path);
            path.pop();
        });
        if (hasDotValue_1 && hasActualChild_1) {
            throw new Error(errorPrefix +
                ' contains ".value" child ' +
                path.toErrorString() +
                ' in addition to actual children.');
        }
    }
};
/**
 * Pre-validate paths passed in the firebase function.
 *
 * @param {string} errorPrefix
 * @param {Array<!Path>} mergePaths
 */
var validateFirebaseMergePaths = function (errorPrefix, mergePaths) {
    var i, curPath;
    for (i = 0; i < mergePaths.length; i++) {
        curPath = mergePaths[i];
        var keys = curPath.slice();
        for (var j = 0; j < keys.length; j++) {
            if (keys[j] === '.priority' && j === keys.length - 1) ;
            else if (!isValidKey(keys[j])) {
                throw new Error(errorPrefix +
                    'contains an invalid key (' +
                    keys[j] +
                    ') in path ' +
                    curPath.toString() +
                    '. Keys must be non-empty strings ' +
                    'and can\'t contain ".", "#", "$", "/", "[", or "]"');
            }
        }
    }
    // Check that update keys are not descendants of each other.
    // We rely on the property that sorting guarantees that ancestors come
    // right before descendants.
    mergePaths.sort(Path.comparePaths);
    var prevPath = null;
    for (i = 0; i < mergePaths.length; i++) {
        curPath = mergePaths[i];
        if (prevPath !== null && prevPath.contains(curPath)) {
            throw new Error(errorPrefix +
                'contains a path ' +
                prevPath.toString() +
                ' that is ancestor of another path ' +
                curPath.toString());
        }
        prevPath = curPath;
    }
};
/**
 * pre-validate an object passed as an argument to firebase function (
 * must be an object - e.g. for firebase.update()).
 *
 * @param {string} fnName
 * @param {number} argumentNumber
 * @param {*} data
 * @param {!Path} path
 * @param {boolean} optional
 */
var validateFirebaseMergeDataArg = function (fnName, argumentNumber, data, path, optional) {
    if (optional && data === undefined)
        return;
    var errorPrefix = util.errorPrefix(fnName, argumentNumber, optional);
    if (!(data && typeof data === 'object') || Array.isArray(data)) {
        throw new Error(errorPrefix + ' must be an object containing the children to replace.');
    }
    var mergePaths = [];
    each(data, function (key, value) {
        var curPath = new Path(key);
        validateFirebaseData(errorPrefix, value, path.child(curPath));
        if (curPath.getBack() === '.priority') {
            if (!isValidPriority(value)) {
                throw new Error(errorPrefix +
                    "contains an invalid value for '" +
                    curPath.toString() +
                    "', which must be a valid " +
                    'Firebase priority (a string, finite number, server value, or null).');
            }
        }
        mergePaths.push(curPath);
    });
    validateFirebaseMergePaths(errorPrefix, mergePaths);
};
var validatePriority = function (fnName, argumentNumber, priority, optional) {
    if (optional && priority === undefined)
        return;
    if (isInvalidJSONNumber(priority))
        throw new Error(util.errorPrefix(fnName, argumentNumber, optional) +
            'is ' +
            priority.toString() +
            ', but must be a valid Firebase priority (a string, finite number, ' +
            'server value, or null).');
    // Special case to allow importing data with a .sv.
    if (!isValidPriority(priority))
        throw new Error(util.errorPrefix(fnName, argumentNumber, optional) +
            'must be a valid Firebase priority ' +
            '(a string, finite number, server value, or null).');
};
var validateEventType = function (fnName, argumentNumber, eventType, optional) {
    if (optional && eventType === undefined)
        return;
    switch (eventType) {
        case 'value':
        case 'child_added':
        case 'child_removed':
        case 'child_changed':
        case 'child_moved':
            break;
        default:
            throw new Error(util.errorPrefix(fnName, argumentNumber, optional) +
                'must be a valid event type = "value", "child_added", "child_removed", ' +
                '"child_changed", or "child_moved".');
    }
};
var validateKey = function (fnName, argumentNumber, key, optional) {
    if (optional && key === undefined)
        return;
    if (!isValidKey(key))
        throw new Error(util.errorPrefix(fnName, argumentNumber, optional) +
            'was an invalid key = "' +
            key +
            '".  Firebase keys must be non-empty strings and ' +
            'can\'t contain ".", "#", "$", "/", "[", or "]").');
};
var validatePathString = function (fnName, argumentNumber, pathString, optional) {
    if (optional && pathString === undefined)
        return;
    if (!isValidPathString(pathString))
        throw new Error(util.errorPrefix(fnName, argumentNumber, optional) +
            'was an invalid path = "' +
            pathString +
            '". Paths must be non-empty strings and ' +
            'can\'t contain ".", "#", "$", "[", or "]"');
};
var validateRootPathString = function (fnName, argumentNumber, pathString, optional) {
    if (pathString) {
        // Allow '/.info/' at the beginning.
        pathString = pathString.replace(/^\/*\.info(\/|$)/, '/');
    }
    validatePathString(fnName, argumentNumber, pathString, optional);
};
var validateWritablePath = function (fnName, path) {
    if (path.getFront() === '.info') {
        throw new Error(fnName + " failed = Can't modify data under /.info/");
    }
};
var validateUrl = function (fnName, argumentNumber, parsedUrl) {
    // TODO = Validate server better.
    var pathString = parsedUrl.path.toString();
    if (!(typeof parsedUrl.repoInfo.host === 'string') ||
        parsedUrl.repoInfo.host.length === 0 ||
        (!isValidKey(parsedUrl.repoInfo.namespace) &&
            parsedUrl.repoInfo.host.split(':')[0] !== 'localhost') ||
        (pathString.length !== 0 && !isValidRootPathString(pathString))) {
        throw new Error(util.errorPrefix(fnName, argumentNumber, false) +
            'must be a valid firebase URL and ' +
            'the path can\'t contain ".", "#", "$", "[", or "]".');
    }
};
var validateBoolean = function (fnName, argumentNumber, bool, optional) {
    if (optional && bool === undefined)
        return;
    if (typeof bool !== 'boolean')
        throw new Error(util.errorPrefix(fnName, argumentNumber, optional) + 'must be a boolean.');
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @constructor
 */
var OnDisconnect = /** @class */ (function () {
    /**
     * @param {!Repo} repo_
     * @param {!Path} path_
     */
    function OnDisconnect(repo_, path_) {
        this.repo_ = repo_;
        this.path_ = path_;
    }
    /**
     * @param {function(?Error)=} onComplete
     * @return {!firebase.Promise}
     */
    OnDisconnect.prototype.cancel = function (onComplete) {
        util.validateArgCount('OnDisconnect.cancel', 0, 1, arguments.length);
        util.validateCallback('OnDisconnect.cancel', 1, onComplete, true);
        var deferred = new util.Deferred();
        this.repo_.onDisconnectCancel(this.path_, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    /**
     * @param {function(?Error)=} onComplete
     * @return {!firebase.Promise}
     */
    OnDisconnect.prototype.remove = function (onComplete) {
        util.validateArgCount('OnDisconnect.remove', 0, 1, arguments.length);
        validateWritablePath('OnDisconnect.remove', this.path_);
        util.validateCallback('OnDisconnect.remove', 1, onComplete, true);
        var deferred = new util.Deferred();
        this.repo_.onDisconnectSet(this.path_, null, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    /**
     * @param {*} value
     * @param {function(?Error)=} onComplete
     * @return {!firebase.Promise}
     */
    OnDisconnect.prototype.set = function (value, onComplete) {
        util.validateArgCount('OnDisconnect.set', 1, 2, arguments.length);
        validateWritablePath('OnDisconnect.set', this.path_);
        validateFirebaseDataArg('OnDisconnect.set', 1, value, this.path_, false);
        util.validateCallback('OnDisconnect.set', 2, onComplete, true);
        var deferred = new util.Deferred();
        this.repo_.onDisconnectSet(this.path_, value, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    /**
     * @param {*} value
     * @param {number|string|null} priority
     * @param {function(?Error)=} onComplete
     * @return {!firebase.Promise}
     */
    OnDisconnect.prototype.setWithPriority = function (value, priority, onComplete) {
        util.validateArgCount('OnDisconnect.setWithPriority', 2, 3, arguments.length);
        validateWritablePath('OnDisconnect.setWithPriority', this.path_);
        validateFirebaseDataArg('OnDisconnect.setWithPriority', 1, value, this.path_, false);
        validatePriority('OnDisconnect.setWithPriority', 2, priority, false);
        util.validateCallback('OnDisconnect.setWithPriority', 3, onComplete, true);
        var deferred = new util.Deferred();
        this.repo_.onDisconnectSetWithPriority(this.path_, value, priority, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    /**
     * @param {!Object} objectToMerge
     * @param {function(?Error)=} onComplete
     * @return {!firebase.Promise}
     */
    OnDisconnect.prototype.update = function (objectToMerge, onComplete) {
        util.validateArgCount('OnDisconnect.update', 1, 2, arguments.length);
        validateWritablePath('OnDisconnect.update', this.path_);
        if (Array.isArray(objectToMerge)) {
            var newObjectToMerge = {};
            for (var i = 0; i < objectToMerge.length; ++i) {
                newObjectToMerge['' + i] = objectToMerge[i];
            }
            objectToMerge = newObjectToMerge;
            warn('Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the ' +
                'existing data, or an Object with integer keys if you really do want to only update some of the children.');
        }
        validateFirebaseMergeDataArg('OnDisconnect.update', 1, objectToMerge, this.path_, false);
        util.validateCallback('OnDisconnect.update', 2, onComplete, true);
        var deferred = new util.Deferred();
        this.repo_.onDisconnectUpdate(this.path_, objectToMerge, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    return OnDisconnect;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var TransactionResult = /** @class */ (function () {
    /**
     * A type for the resolve value of Firebase.transaction.
     * @constructor
     * @dict
     * @param {boolean} committed
     * @param {DataSnapshot} snapshot
     */
    function TransactionResult(committed, snapshot) {
        this.committed = committed;
        this.snapshot = snapshot;
    }
    // Do not create public documentation. This is intended to make JSON serialization work but is otherwise unnecessary
    // for end-users
    TransactionResult.prototype.toJSON = function () {
        util.validateArgCount('TransactionResult.toJSON', 0, 1, arguments.length);
        return { committed: this.committed, snapshot: this.snapshot.toJSON() };
    };
    return TransactionResult;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Fancy ID generator that creates 20-character string identifiers with the
 * following properties:
 *
 * 1. They're based on timestamp so that they sort *after* any existing ids.
 * 2. They contain 72-bits of random data after the timestamp so that IDs won't
 *    collide with other clients' IDs.
 * 3. They sort *lexicographically* (so the timestamp is converted to characters
 *    that will sort properly).
 * 4. They're monotonically increasing. Even if you generate more than one in
 *    the same timestamp, the latter ones will sort after the former ones. We do
 *    this by using the previous random bits but "incrementing" them by 1 (only
 *    in the case of a timestamp collision).
 */
var nextPushId = (function () {
    // Modeled after base64 web-safe chars, but ordered by ASCII.
    var PUSH_CHARS = '-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz';
    // Timestamp of last push, used to prevent local collisions if you push twice
    // in one ms.
    var lastPushTime = 0;
    // We generate 72-bits of randomness which get turned into 12 characters and
    // appended to the timestamp to prevent collisions with other clients. We
    // store the last characters we generated because in the event of a collision,
    // we'll use those same characters except "incremented" by one.
    var lastRandChars = [];
    return function (now) {
        var duplicateTime = now === lastPushTime;
        lastPushTime = now;
        var i;
        var timeStampChars = new Array(8);
        for (i = 7; i >= 0; i--) {
            timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
            // NOTE: Can't use << here because javascript will convert to int and lose
            // the upper bits.
            now = Math.floor(now / 64);
        }
        util.assert(now === 0, 'Cannot push at time == 0');
        var id = timeStampChars.join('');
        if (!duplicateTime) {
            for (i = 0; i < 12; i++) {
                lastRandChars[i] = Math.floor(Math.random() * 64);
            }
        }
        else {
            // If the timestamp hasn't changed since last push, use the same random
            // number, except incremented by 1.
            for (i = 11; i >= 0 && lastRandChars[i] === 63; i--) {
                lastRandChars[i] = 0;
            }
            lastRandChars[i]++;
        }
        for (i = 0; i < 12; i++) {
            id += PUSH_CHARS.charAt(lastRandChars[i]);
        }
        util.assert(id.length === 20, 'nextPushId: Length should be 20.');
        return id;
    };
})();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 *
 * @param {!string} name
 * @param {!Node} node
 * @constructor
 * @struct
 */
var NamedNode = /** @class */ (function () {
    function NamedNode(name, node) {
        this.name = name;
        this.node = node;
    }
    /**
     *
     * @param {!string} name
     * @param {!Node} node
     * @return {NamedNode}
     */
    NamedNode.Wrap = function (name, node) {
        return new NamedNode(name, node);
    };
    return NamedNode;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 *
 * @constructor
 */
var Index = /** @class */ (function () {
    function Index() {
    }
    /**
     * @return {function(!NamedNode, !NamedNode):number} A standalone comparison function for
     * this index
     */
    Index.prototype.getCompare = function () {
        return this.compare.bind(this);
    };
    /**
     * Given a before and after value for a node, determine if the indexed value has changed. Even if they are different,
     * it's possible that the changes are isolated to parts of the snapshot that are not indexed.
     *
     * @param {!Node} oldNode
     * @param {!Node} newNode
     * @return {boolean} True if the portion of the snapshot being indexed changed between oldNode and newNode
     */
    Index.prototype.indexedValueChanged = function (oldNode, newNode) {
        var oldWrapped = new NamedNode(MIN_NAME, oldNode);
        var newWrapped = new NamedNode(MIN_NAME, newNode);
        return this.compare(oldWrapped, newWrapped) !== 0;
    };
    /**
     * @return {!NamedNode} a node wrapper that will sort equal to or less than
     * any other node wrapper, using this index
     */
    Index.prototype.minPost = function () {
        return NamedNode.MIN;
    };
    return Index;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __EMPTY_NODE;
var KeyIndex = /** @class */ (function (_super) {
    tslib_1.__extends(KeyIndex, _super);
    function KeyIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(KeyIndex, "__EMPTY_NODE", {
        get: function () {
            return __EMPTY_NODE;
        },
        set: function (val) {
            __EMPTY_NODE = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @inheritDoc
     */
    KeyIndex.prototype.compare = function (a, b) {
        return nameCompare(a.name, b.name);
    };
    /**
     * @inheritDoc
     */
    KeyIndex.prototype.isDefinedOn = function (node) {
        // We could probably return true here (since every node has a key), but it's never called
        // so just leaving unimplemented for now.
        throw util.assertionError('KeyIndex.isDefinedOn not expected to be called.');
    };
    /**
     * @inheritDoc
     */
    KeyIndex.prototype.indexedValueChanged = function (oldNode, newNode) {
        return false; // The key for a node never changes.
    };
    /**
     * @inheritDoc
     */
    KeyIndex.prototype.minPost = function () {
        return NamedNode.MIN;
    };
    /**
     * @inheritDoc
     */
    KeyIndex.prototype.maxPost = function () {
        // TODO: This should really be created once and cached in a static property, but
        // NamedNode isn't defined yet, so I can't use it in a static.  Bleh.
        return new NamedNode(MAX_NAME, __EMPTY_NODE);
    };
    /**
     * @param {*} indexValue
     * @param {string} name
     * @return {!NamedNode}
     */
    KeyIndex.prototype.makePost = function (indexValue, name) {
        util.assert(typeof indexValue === 'string', 'KeyIndex indexValue must always be a string.');
        // We just use empty node, but it'll never be compared, since our comparator only looks at name.
        return new NamedNode(indexValue, __EMPTY_NODE);
    };
    /**
     * @return {!string} String representation for inclusion in a query spec
     */
    KeyIndex.prototype.toString = function () {
        return '.key';
    };
    return KeyIndex;
}(Index));
var KEY_INDEX = new KeyIndex();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var MAX_NODE;
function setMaxNode(val) {
    MAX_NODE = val;
}
/**
 * @param {(!string|!number)} priority
 * @return {!string}
 */
var priorityHashText = function (priority) {
    if (typeof priority === 'number')
        return 'number:' + doubleToIEEE754String(priority);
    else
        return 'string:' + priority;
};
/**
 * Validates that a priority snapshot Node is valid.
 *
 * @param {!Node} priorityNode
 */
var validatePriorityNode = function (priorityNode) {
    if (priorityNode.isLeafNode()) {
        var val = priorityNode.val();
        util.assert(typeof val === 'string' ||
            typeof val === 'number' ||
            (typeof val === 'object' &&
                util.contains(val, '.sv')), 'Priority must be a string or number.');
    }
    else {
        util.assert(priorityNode === MAX_NODE || priorityNode.isEmpty(), 'priority of unexpected type.');
    }
    // Don't call getPriority() on MAX_NODE to avoid hitting assertion.
    util.assert(priorityNode === MAX_NODE || priorityNode.getPriority().isEmpty(), "Priority nodes can't have a priority of their own.");
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __childrenNodeConstructor;
/**
 * LeafNode is a class for storing leaf nodes in a DataSnapshot.  It
 * implements Node and stores the value of the node (a string,
 * number, or boolean) accessible via getValue().
 */
var LeafNode = /** @class */ (function () {
    /**
     * @implements {Node}
     * @param {!(string|number|boolean|Object)} value_ The value to store in this leaf node.
     *                                         The object type is possible in the event of a deferred value
     * @param {!Node=} priorityNode_ The priority of this node.
     */
    function LeafNode(value_, priorityNode_) {
        if (priorityNode_ === void 0) { priorityNode_ = LeafNode.__childrenNodeConstructor.EMPTY_NODE; }
        this.value_ = value_;
        this.priorityNode_ = priorityNode_;
        this.lazyHash_ = null;
        util.assert(this.value_ !== undefined && this.value_ !== null, "LeafNode shouldn't be created with null/undefined value.");
        validatePriorityNode(this.priorityNode_);
    }
    Object.defineProperty(LeafNode, "__childrenNodeConstructor", {
        get: function () {
            return __childrenNodeConstructor;
        },
        set: function (val) {
            __childrenNodeConstructor = val;
        },
        enumerable: true,
        configurable: true
    });
    /** @inheritDoc */
    LeafNode.prototype.isLeafNode = function () {
        return true;
    };
    /** @inheritDoc */
    LeafNode.prototype.getPriority = function () {
        return this.priorityNode_;
    };
    /** @inheritDoc */
    LeafNode.prototype.updatePriority = function (newPriorityNode) {
        return new LeafNode(this.value_, newPriorityNode);
    };
    /** @inheritDoc */
    LeafNode.prototype.getImmediateChild = function (childName) {
        // Hack to treat priority as a regular child
        if (childName === '.priority') {
            return this.priorityNode_;
        }
        else {
            return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
        }
    };
    /** @inheritDoc */
    LeafNode.prototype.getChild = function (path) {
        if (path.isEmpty()) {
            return this;
        }
        else if (path.getFront() === '.priority') {
            return this.priorityNode_;
        }
        else {
            return LeafNode.__childrenNodeConstructor.EMPTY_NODE;
        }
    };
    /**
     * @inheritDoc
     */
    LeafNode.prototype.hasChild = function () {
        return false;
    };
    /** @inheritDoc */
    LeafNode.prototype.getPredecessorChildName = function (childName, childNode) {
        return null;
    };
    /** @inheritDoc */
    LeafNode.prototype.updateImmediateChild = function (childName, newChildNode) {
        if (childName === '.priority') {
            return this.updatePriority(newChildNode);
        }
        else if (newChildNode.isEmpty() && childName !== '.priority') {
            return this;
        }
        else {
            return LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(childName, newChildNode).updatePriority(this.priorityNode_);
        }
    };
    /** @inheritDoc */
    LeafNode.prototype.updateChild = function (path, newChildNode) {
        var front = path.getFront();
        if (front === null) {
            return newChildNode;
        }
        else if (newChildNode.isEmpty() && front !== '.priority') {
            return this;
        }
        else {
            util.assert(front !== '.priority' || path.getLength() === 1, '.priority must be the last token in a path');
            return this.updateImmediateChild(front, LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateChild(path.popFront(), newChildNode));
        }
    };
    /** @inheritDoc */
    LeafNode.prototype.isEmpty = function () {
        return false;
    };
    /** @inheritDoc */
    LeafNode.prototype.numChildren = function () {
        return 0;
    };
    /** @inheritDoc */
    LeafNode.prototype.forEachChild = function (index, action) {
        return false;
    };
    /**
     * @inheritDoc
     */
    LeafNode.prototype.val = function (exportFormat) {
        if (exportFormat && !this.getPriority().isEmpty())
            return {
                '.value': this.getValue(),
                '.priority': this.getPriority().val()
            };
        else
            return this.getValue();
    };
    /** @inheritDoc */
    LeafNode.prototype.hash = function () {
        if (this.lazyHash_ === null) {
            var toHash = '';
            if (!this.priorityNode_.isEmpty())
                toHash +=
                    'priority:' +
                        priorityHashText(this.priorityNode_.val()) +
                        ':';
            var type = typeof this.value_;
            toHash += type + ':';
            if (type === 'number') {
                toHash += doubleToIEEE754String(this.value_);
            }
            else {
                toHash += this.value_;
            }
            this.lazyHash_ = sha1(toHash);
        }
        return this.lazyHash_;
    };
    /**
     * Returns the value of the leaf node.
     * @return {Object|string|number|boolean} The value of the node.
     */
    LeafNode.prototype.getValue = function () {
        return this.value_;
    };
    /**
     * @inheritDoc
     */
    LeafNode.prototype.compareTo = function (other) {
        if (other === LeafNode.__childrenNodeConstructor.EMPTY_NODE) {
            return 1;
        }
        else if (other instanceof LeafNode.__childrenNodeConstructor) {
            return -1;
        }
        else {
            util.assert(other.isLeafNode(), 'Unknown node type');
            return this.compareToLeafNode_(other);
        }
    };
    /**
     * Comparison specifically for two leaf nodes
     * @param {!LeafNode} otherLeaf
     * @return {!number}
     * @private
     */
    LeafNode.prototype.compareToLeafNode_ = function (otherLeaf) {
        var otherLeafType = typeof otherLeaf.value_;
        var thisLeafType = typeof this.value_;
        var otherIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(otherLeafType);
        var thisIndex = LeafNode.VALUE_TYPE_ORDER.indexOf(thisLeafType);
        util.assert(otherIndex >= 0, 'Unknown leaf type: ' + otherLeafType);
        util.assert(thisIndex >= 0, 'Unknown leaf type: ' + thisLeafType);
        if (otherIndex === thisIndex) {
            // Same type, compare values
            if (thisLeafType === 'object') {
                // Deferred value nodes are all equal, but we should also never get to this point...
                return 0;
            }
            else {
                // Note that this works because true > false, all others are number or string comparisons
                if (this.value_ < otherLeaf.value_) {
                    return -1;
                }
                else if (this.value_ === otherLeaf.value_) {
                    return 0;
                }
                else {
                    return 1;
                }
            }
        }
        else {
            return thisIndex - otherIndex;
        }
    };
    /**
     * @inheritDoc
     */
    LeafNode.prototype.withIndex = function () {
        return this;
    };
    /**
     * @inheritDoc
     */
    LeafNode.prototype.isIndexed = function () {
        return true;
    };
    /**
     * @inheritDoc
     */
    LeafNode.prototype.equals = function (other) {
        /**
         * @inheritDoc
         */
        if (other === this) {
            return true;
        }
        else if (other.isLeafNode()) {
            var otherLeaf = other;
            return (this.value_ === otherLeaf.value_ &&
                this.priorityNode_.equals(otherLeaf.priorityNode_));
        }
        else {
            return false;
        }
    };
    /**
     * The sort order for comparing leaf nodes of different types. If two leaf nodes have
     * the same type, the comparison falls back to their value
     * @type {Array.<!string>}
     * @const
     */
    LeafNode.VALUE_TYPE_ORDER = ['object', 'boolean', 'number', 'string'];
    return LeafNode;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var nodeFromJSON;
var MAX_NODE$1;
function setNodeFromJSON(val) {
    nodeFromJSON = val;
}
function setMaxNode$1(val) {
    MAX_NODE$1 = val;
}
/**
 * @constructor
 * @extends {Index}
 * @private
 */
var PriorityIndex = /** @class */ (function (_super) {
    tslib_1.__extends(PriorityIndex, _super);
    function PriorityIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    PriorityIndex.prototype.compare = function (a, b) {
        var aPriority = a.node.getPriority();
        var bPriority = b.node.getPriority();
        var indexCmp = aPriority.compareTo(bPriority);
        if (indexCmp === 0) {
            return nameCompare(a.name, b.name);
        }
        else {
            return indexCmp;
        }
    };
    /**
     * @inheritDoc
     */
    PriorityIndex.prototype.isDefinedOn = function (node) {
        return !node.getPriority().isEmpty();
    };
    /**
     * @inheritDoc
     */
    PriorityIndex.prototype.indexedValueChanged = function (oldNode, newNode) {
        return !oldNode.getPriority().equals(newNode.getPriority());
    };
    /**
     * @inheritDoc
     */
    PriorityIndex.prototype.minPost = function () {
        return NamedNode.MIN;
    };
    /**
     * @inheritDoc
     */
    PriorityIndex.prototype.maxPost = function () {
        return new NamedNode(MAX_NAME, new LeafNode('[PRIORITY-POST]', MAX_NODE$1));
    };
    /**
     * @param {*} indexValue
     * @param {string} name
     * @return {!NamedNode}
     */
    PriorityIndex.prototype.makePost = function (indexValue, name) {
        var priorityNode = nodeFromJSON(indexValue);
        return new NamedNode(name, new LeafNode('[PRIORITY-POST]', priorityNode));
    };
    /**
     * @return {!string} String representation for inclusion in a query spec
     */
    PriorityIndex.prototype.toString = function () {
        return '.priority';
    };
    return PriorityIndex;
}(Index));
var PRIORITY_INDEX = new PriorityIndex();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An iterator over an LLRBNode.
 */
var SortedMapIterator = /** @class */ (function () {
    /**
     * @template K, V, T
     * @param {LLRBNode|LLRBEmptyNode} node Node to iterate.
     * @param {?K} startKey
     * @param {function(K, K): number} comparator
     * @param {boolean} isReverse_ Whether or not to iterate in reverse
     * @param {(function(K, V):T)=} resultGenerator_
     */
    function SortedMapIterator(node, startKey, comparator, isReverse_, resultGenerator_) {
        if (resultGenerator_ === void 0) { resultGenerator_ = null; }
        this.isReverse_ = isReverse_;
        this.resultGenerator_ = resultGenerator_;
        /** @private
         * @type {Array.<!LLRBNode>}
         */
        this.nodeStack_ = [];
        var cmp = 1;
        while (!node.isEmpty()) {
            node = node;
            cmp = startKey ? comparator(node.key, startKey) : 1;
            // flip the comparison if we're going in reverse
            if (isReverse_)
                cmp *= -1;
            if (cmp < 0) {
                // This node is less than our start key. ignore it
                if (this.isReverse_) {
                    node = node.left;
                }
                else {
                    node = node.right;
                }
            }
            else if (cmp === 0) {
                // This node is exactly equal to our start key. Push it on the stack, but stop iterating;
                this.nodeStack_.push(node);
                break;
            }
            else {
                // This node is greater than our start key, add it to the stack and move to the next one
                this.nodeStack_.push(node);
                if (this.isReverse_) {
                    node = node.right;
                }
                else {
                    node = node.left;
                }
            }
        }
    }
    SortedMapIterator.prototype.getNext = function () {
        if (this.nodeStack_.length === 0)
            return null;
        var node = this.nodeStack_.pop();
        var result;
        if (this.resultGenerator_)
            result = this.resultGenerator_(node.key, node.value);
        else
            result = { key: node.key, value: node.value };
        if (this.isReverse_) {
            node = node.left;
            while (!node.isEmpty()) {
                this.nodeStack_.push(node);
                node = node.right;
            }
        }
        else {
            node = node.right;
            while (!node.isEmpty()) {
                this.nodeStack_.push(node);
                node = node.left;
            }
        }
        return result;
    };
    SortedMapIterator.prototype.hasNext = function () {
        return this.nodeStack_.length > 0;
    };
    SortedMapIterator.prototype.peek = function () {
        if (this.nodeStack_.length === 0)
            return null;
        var node = this.nodeStack_[this.nodeStack_.length - 1];
        if (this.resultGenerator_) {
            return this.resultGenerator_(node.key, node.value);
        }
        else {
            return { key: node.key, value: node.value };
        }
    };
    return SortedMapIterator;
}());
/**
 * Represents a node in a Left-leaning Red-Black tree.
 */
var LLRBNode = /** @class */ (function () {
    /**
     * @template K, V
     * @param {!K} key Key associated with this node.
     * @param {!V} value Value associated with this node.
     * @param {?boolean} color Whether this node is red.
     * @param {?(LLRBNode|LLRBEmptyNode)=} left Left child.
     * @param {?(LLRBNode|LLRBEmptyNode)=} right Right child.
     */
    function LLRBNode(key, value, color, left, right) {
        this.key = key;
        this.value = value;
        this.color = color != null ? color : LLRBNode.RED;
        this.left =
            left != null ? left : SortedMap.EMPTY_NODE;
        this.right =
            right != null ? right : SortedMap.EMPTY_NODE;
    }
    /**
     * Returns a copy of the current node, optionally replacing pieces of it.
     *
     * @param {?K} key New key for the node, or null.
     * @param {?V} value New value for the node, or null.
     * @param {?boolean} color New color for the node, or null.
     * @param {?LLRBNode|LLRBEmptyNode} left New left child for the node, or null.
     * @param {?LLRBNode|LLRBEmptyNode} right New right child for the node, or null.
     * @return {!LLRBNode} The node copy.
     */
    LLRBNode.prototype.copy = function (key, value, color, left, right) {
        return new LLRBNode(key != null ? key : this.key, value != null ? value : this.value, color != null ? color : this.color, left != null ? left : this.left, right != null ? right : this.right);
    };
    /**
     * @return {number} The total number of nodes in the tree.
     */
    LLRBNode.prototype.count = function () {
        return this.left.count() + 1 + this.right.count();
    };
    /**
     * @return {boolean} True if the tree is empty.
     */
    LLRBNode.prototype.isEmpty = function () {
        return false;
    };
    /**
     * Traverses the tree in key order and calls the specified action function
     * for each node.
     *
     * @param {function(!K, !V):*} action Callback function to be called for each
     *   node.  If it returns true, traversal is aborted.
     * @return {*} The first truthy value returned by action, or the last falsey
     *   value returned by action
     */
    LLRBNode.prototype.inorderTraversal = function (action) {
        return (this.left.inorderTraversal(action) ||
            action(this.key, this.value) ||
            this.right.inorderTraversal(action));
    };
    /**
     * Traverses the tree in reverse key order and calls the specified action function
     * for each node.
     *
     * @param {function(!Object, !Object)} action Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @return {*} True if traversal was aborted.
     */
    LLRBNode.prototype.reverseTraversal = function (action) {
        return (this.right.reverseTraversal(action) ||
            action(this.key, this.value) ||
            this.left.reverseTraversal(action));
    };
    /**
     * @return {!Object} The minimum node in the tree.
     * @private
     */
    LLRBNode.prototype.min_ = function () {
        if (this.left.isEmpty()) {
            return this;
        }
        else {
            return this.left.min_();
        }
    };
    /**
     * @return {!K} The maximum key in the tree.
     */
    LLRBNode.prototype.minKey = function () {
        return this.min_().key;
    };
    /**
     * @return {!K} The maximum key in the tree.
     */
    LLRBNode.prototype.maxKey = function () {
        if (this.right.isEmpty()) {
            return this.key;
        }
        else {
            return this.right.maxKey();
        }
    };
    /**
     *
     * @param {!Object} key Key to insert.
     * @param {!Object} value Value to insert.
     * @param {Comparator} comparator Comparator.
     * @return {!LLRBNode} New tree, with the key/value added.
     */
    LLRBNode.prototype.insert = function (key, value, comparator) {
        var cmp, n;
        n = this;
        cmp = comparator(key, n.key);
        if (cmp < 0) {
            n = n.copy(null, null, null, n.left.insert(key, value, comparator), null);
        }
        else if (cmp === 0) {
            n = n.copy(null, value, null, null, null);
        }
        else {
            n = n.copy(null, null, null, null, n.right.insert(key, value, comparator));
        }
        return n.fixUp_();
    };
    /**
     * @private
     * @return {!LLRBNode|LLRBEmptyNode} New tree, with the minimum key removed.
     */
    LLRBNode.prototype.removeMin_ = function () {
        if (this.left.isEmpty()) {
            return SortedMap.EMPTY_NODE;
        }
        var n = this;
        if (!n.left.isRed_() && !n.left.left.isRed_())
            n = n.moveRedLeft_();
        n = n.copy(null, null, null, n.left.removeMin_(), null);
        return n.fixUp_();
    };
    /**
     * @param {!Object} key The key of the item to remove.
     * @param {Comparator} comparator Comparator.
     * @return {!LLRBNode|LLRBEmptyNode} New tree, with the specified item removed.
     */
    LLRBNode.prototype.remove = function (key, comparator) {
        var n, smallest;
        n = this;
        if (comparator(key, n.key) < 0) {
            if (!n.left.isEmpty() && !n.left.isRed_() && !n.left.left.isRed_()) {
                n = n.moveRedLeft_();
            }
            n = n.copy(null, null, null, n.left.remove(key, comparator), null);
        }
        else {
            if (n.left.isRed_())
                n = n.rotateRight_();
            if (!n.right.isEmpty() && !n.right.isRed_() && !n.right.left.isRed_()) {
                n = n.moveRedRight_();
            }
            if (comparator(key, n.key) === 0) {
                if (n.right.isEmpty()) {
                    return SortedMap.EMPTY_NODE;
                }
                else {
                    smallest = n.right.min_();
                    n = n.copy(smallest.key, smallest.value, null, null, n.right.removeMin_());
                }
            }
            n = n.copy(null, null, null, null, n.right.remove(key, comparator));
        }
        return n.fixUp_();
    };
    /**
     * @private
     * @return {boolean} Whether this is a RED node.
     */
    LLRBNode.prototype.isRed_ = function () {
        return this.color;
    };
    /**
     * @private
     * @return {!LLRBNode} New tree after performing any needed rotations.
     */
    LLRBNode.prototype.fixUp_ = function () {
        var n = this;
        if (n.right.isRed_() && !n.left.isRed_())
            n = n.rotateLeft_();
        if (n.left.isRed_() && n.left.left.isRed_())
            n = n.rotateRight_();
        if (n.left.isRed_() && n.right.isRed_())
            n = n.colorFlip_();
        return n;
    };
    /**
     * @private
     * @return {!LLRBNode} New tree, after moveRedLeft.
     */
    LLRBNode.prototype.moveRedLeft_ = function () {
        var n = this.colorFlip_();
        if (n.right.left.isRed_()) {
            n = n.copy(null, null, null, null, n.right.rotateRight_());
            n = n.rotateLeft_();
            n = n.colorFlip_();
        }
        return n;
    };
    /**
     * @private
     * @return {!LLRBNode} New tree, after moveRedRight.
     */
    LLRBNode.prototype.moveRedRight_ = function () {
        var n = this.colorFlip_();
        if (n.left.left.isRed_()) {
            n = n.rotateRight_();
            n = n.colorFlip_();
        }
        return n;
    };
    /**
     * @private
     * @return {!LLRBNode} New tree, after rotateLeft.
     */
    LLRBNode.prototype.rotateLeft_ = function () {
        var nl = this.copy(null, null, LLRBNode.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, nl, null);
    };
    /**
     * @private
     * @return {!LLRBNode} New tree, after rotateRight.
     */
    LLRBNode.prototype.rotateRight_ = function () {
        var nr = this.copy(null, null, LLRBNode.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, nr);
    };
    /**
     * @private
     * @return {!LLRBNode} New tree, after colorFlip.
     */
    LLRBNode.prototype.colorFlip_ = function () {
        var left = this.left.copy(null, null, !this.left.color, null, null);
        var right = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, left, right);
    };
    /**
     * For testing.
     *
     * @private
     * @return {boolean} True if all is well.
     */
    LLRBNode.prototype.checkMaxDepth_ = function () {
        var blackDepth = this.check_();
        return Math.pow(2.0, blackDepth) <= this.count() + 1;
    };
    /**
     * @private
     * @return {number} Not sure what this returns exactly. :-).
     */
    LLRBNode.prototype.check_ = function () {
        var blackDepth;
        if (this.isRed_() && this.left.isRed_()) {
            throw new Error('Red node has red child(' + this.key + ',' + this.value + ')');
        }
        if (this.right.isRed_()) {
            throw new Error('Right child of (' + this.key + ',' + this.value + ') is red');
        }
        blackDepth = this.left.check_();
        if (blackDepth !== this.right.check_()) {
            throw new Error('Black depths differ');
        }
        else {
            return blackDepth + (this.isRed_() ? 0 : 1);
        }
    };
    LLRBNode.RED = true;
    LLRBNode.BLACK = false;
    return LLRBNode;
}());
/**
 * Represents an empty node (a leaf node in the Red-Black Tree).
 */
var LLRBEmptyNode = /** @class */ (function () {
    function LLRBEmptyNode() {
    }
    /**
     * Returns a copy of the current node.
     *
     * @return {!LLRBEmptyNode} The node copy.
     */
    LLRBEmptyNode.prototype.copy = function (key, value, color, left, right) {
        return this;
    };
    /**
     * Returns a copy of the tree, with the specified key/value added.
     *
     * @param {!K} key Key to be added.
     * @param {!V} value Value to be added.
     * @param {Comparator} comparator Comparator.
     * @return {!LLRBNode} New tree, with item added.
     */
    LLRBEmptyNode.prototype.insert = function (key, value, comparator) {
        return new LLRBNode(key, value, null);
    };
    /**
     * Returns a copy of the tree, with the specified key removed.
     *
     * @param {!K} key The key to remove.
     * @param {Comparator} comparator Comparator.
     * @return {!LLRBEmptyNode} New tree, with item removed.
     */
    LLRBEmptyNode.prototype.remove = function (key, comparator) {
        return this;
    };
    /**
     * @return {number} The total number of nodes in the tree.
     */
    LLRBEmptyNode.prototype.count = function () {
        return 0;
    };
    /**
     * @return {boolean} True if the tree is empty.
     */
    LLRBEmptyNode.prototype.isEmpty = function () {
        return true;
    };
    /**
     * Traverses the tree in key order and calls the specified action function
     * for each node.
     *
     * @param {function(!K, !V):*} action Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @return {boolean} True if traversal was aborted.
     */
    LLRBEmptyNode.prototype.inorderTraversal = function (action) {
        return false;
    };
    /**
     * Traverses the tree in reverse key order and calls the specified action function
     * for each node.
     *
     * @param {function(!K, !V)} action Callback function to be called for each
     * node.  If it returns true, traversal is aborted.
     * @return {boolean} True if traversal was aborted.
     */
    LLRBEmptyNode.prototype.reverseTraversal = function (action) {
        return false;
    };
    /**
     * @return {null}
     */
    LLRBEmptyNode.prototype.minKey = function () {
        return null;
    };
    /**
     * @return {null}
     */
    LLRBEmptyNode.prototype.maxKey = function () {
        return null;
    };
    /**
     * @private
     * @return {number} Not sure what this returns exactly. :-).
     */
    LLRBEmptyNode.prototype.check_ = function () {
        return 0;
    };
    /**
     * @private
     * @return {boolean} Whether this node is red.
     */
    LLRBEmptyNode.prototype.isRed_ = function () {
        return false;
    };
    return LLRBEmptyNode;
}());
/**
 * An immutable sorted map implementation, based on a Left-leaning Red-Black
 * tree.
 */
var SortedMap = /** @class */ (function () {
    /**
     * @template K, V
     * @param {function(K, K):number} comparator_ Key comparator.
     * @param {LLRBNode=} root_ (Optional) Root node for the map.
     */
    function SortedMap(comparator_, root_) {
        if (root_ === void 0) { root_ = SortedMap.EMPTY_NODE; }
        this.comparator_ = comparator_;
        this.root_ = root_;
    }
    /**
     * Returns a copy of the map, with the specified key/value added or replaced.
     * (TODO: We should perhaps rename this method to 'put')
     *
     * @param {!K} key Key to be added.
     * @param {!V} value Value to be added.
     * @return {!SortedMap.<K, V>} New map, with item added.
     */
    SortedMap.prototype.insert = function (key, value) {
        return new SortedMap(this.comparator_, this.root_
            .insert(key, value, this.comparator_)
            .copy(null, null, LLRBNode.BLACK, null, null));
    };
    /**
     * Returns a copy of the map, with the specified key removed.
     *
     * @param {!K} key The key to remove.
     * @return {!SortedMap.<K, V>} New map, with item removed.
     */
    SortedMap.prototype.remove = function (key) {
        return new SortedMap(this.comparator_, this.root_
            .remove(key, this.comparator_)
            .copy(null, null, LLRBNode.BLACK, null, null));
    };
    /**
     * Returns the value of the node with the given key, or null.
     *
     * @param {!K} key The key to look up.
     * @return {?V} The value of the node with the given key, or null if the
     * key doesn't exist.
     */
    SortedMap.prototype.get = function (key) {
        var cmp;
        var node = this.root_;
        while (!node.isEmpty()) {
            cmp = this.comparator_(key, node.key);
            if (cmp === 0) {
                return node.value;
            }
            else if (cmp < 0) {
                node = node.left;
            }
            else if (cmp > 0) {
                node = node.right;
            }
        }
        return null;
    };
    /**
     * Returns the key of the item *before* the specified key, or null if key is the first item.
     * @param {K} key The key to find the predecessor of
     * @return {?K} The predecessor key.
     */
    SortedMap.prototype.getPredecessorKey = function (key) {
        var cmp, node = this.root_, rightParent = null;
        while (!node.isEmpty()) {
            cmp = this.comparator_(key, node.key);
            if (cmp === 0) {
                if (!node.left.isEmpty()) {
                    node = node.left;
                    while (!node.right.isEmpty())
                        node = node.right;
                    return node.key;
                }
                else if (rightParent) {
                    return rightParent.key;
                }
                else {
                    return null; // first item.
                }
            }
            else if (cmp < 0) {
                node = node.left;
            }
            else if (cmp > 0) {
                rightParent = node;
                node = node.right;
            }
        }
        throw new Error('Attempted to find predecessor key for a nonexistent key.  What gives?');
    };
    /**
     * @return {boolean} True if the map is empty.
     */
    SortedMap.prototype.isEmpty = function () {
        return this.root_.isEmpty();
    };
    /**
     * @return {number} The total number of nodes in the map.
     */
    SortedMap.prototype.count = function () {
        return this.root_.count();
    };
    /**
     * @return {?K} The minimum key in the map.
     */
    SortedMap.prototype.minKey = function () {
        return this.root_.minKey();
    };
    /**
     * @return {?K} The maximum key in the map.
     */
    SortedMap.prototype.maxKey = function () {
        return this.root_.maxKey();
    };
    /**
     * Traverses the map in key order and calls the specified action function
     * for each key/value pair.
     *
     * @param {function(!K, !V):*} action Callback function to be called
     * for each key/value pair.  If action returns true, traversal is aborted.
     * @return {*} The first truthy value returned by action, or the last falsey
     *   value returned by action
     */
    SortedMap.prototype.inorderTraversal = function (action) {
        return this.root_.inorderTraversal(action);
    };
    /**
     * Traverses the map in reverse key order and calls the specified action function
     * for each key/value pair.
     *
     * @param {function(!Object, !Object)} action Callback function to be called
     * for each key/value pair.  If action returns true, traversal is aborted.
     * @return {*} True if the traversal was aborted.
     */
    SortedMap.prototype.reverseTraversal = function (action) {
        return this.root_.reverseTraversal(action);
    };
    /**
     * Returns an iterator over the SortedMap.
     * @template T
     * @param {(function(K, V):T)=} resultGenerator
     * @return {SortedMapIterator.<K, V, T>} The iterator.
     */
    SortedMap.prototype.getIterator = function (resultGenerator) {
        return new SortedMapIterator(this.root_, null, this.comparator_, false, resultGenerator);
    };
    SortedMap.prototype.getIteratorFrom = function (key, resultGenerator) {
        return new SortedMapIterator(this.root_, key, this.comparator_, false, resultGenerator);
    };
    SortedMap.prototype.getReverseIteratorFrom = function (key, resultGenerator) {
        return new SortedMapIterator(this.root_, key, this.comparator_, true, resultGenerator);
    };
    SortedMap.prototype.getReverseIterator = function (resultGenerator) {
        return new SortedMapIterator(this.root_, null, this.comparator_, true, resultGenerator);
    };
    /**
     * Always use the same empty node, to reduce memory.
     * @const
     */
    SortedMap.EMPTY_NODE = new LLRBEmptyNode();
    return SortedMap;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var LOG_2 = Math.log(2);
/**
 * @constructor
 */
var Base12Num = /** @class */ (function () {
    /**
     * @param {number} length
     */
    function Base12Num(length) {
        var logBase2 = function (num) {
            return parseInt((Math.log(num) / LOG_2), 10);
        };
        var bitMask = function (bits) { return parseInt(Array(bits + 1).join('1'), 2); };
        this.count = logBase2(length + 1);
        this.current_ = this.count - 1;
        var mask = bitMask(this.count);
        this.bits_ = (length + 1) & mask;
    }
    /**
     * @return {boolean}
     */
    Base12Num.prototype.nextBitIsOne = function () {
        //noinspection JSBitwiseOperatorUsage
        var result = !(this.bits_ & (0x1 << this.current_));
        this.current_--;
        return result;
    };
    return Base12Num;
}());
/**
 * Takes a list of child nodes and constructs a SortedSet using the given comparison
 * function
 *
 * Uses the algorithm described in the paper linked here:
 * http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.46.1458
 *
 * @template K, V
 * @param {Array.<!NamedNode>} childList Unsorted list of children
 * @param {function(!NamedNode, !NamedNode):number} cmp The comparison method to be used
 * @param {(function(NamedNode):K)=} keyFn An optional function to extract K from a node wrapper, if K's
 *                                                        type is not NamedNode
 * @param {(function(K, K):number)=} mapSortFn An optional override for comparator used by the generated sorted map
 * @return {SortedMap.<K, V>}
 */
var buildChildSet = function (childList, cmp, keyFn, mapSortFn) {
    childList.sort(cmp);
    var buildBalancedTree = function (low, high) {
        var length = high - low;
        var namedNode;
        var key;
        if (length == 0) {
            return null;
        }
        else if (length == 1) {
            namedNode = childList[low];
            key = keyFn ? keyFn(namedNode) : namedNode;
            return new LLRBNode(key, namedNode.node, LLRBNode.BLACK, null, null);
        }
        else {
            var middle = parseInt((length / 2), 10) + low;
            var left = buildBalancedTree(low, middle);
            var right = buildBalancedTree(middle + 1, high);
            namedNode = childList[middle];
            key = keyFn ? keyFn(namedNode) : namedNode;
            return new LLRBNode(key, namedNode.node, LLRBNode.BLACK, left, right);
        }
    };
    var buildFrom12Array = function (base12) {
        var node = null;
        var root = null;
        var index = childList.length;
        var buildPennant = function (chunkSize, color) {
            var low = index - chunkSize;
            var high = index;
            index -= chunkSize;
            var childTree = buildBalancedTree(low + 1, high);
            var namedNode = childList[low];
            var key = keyFn ? keyFn(namedNode) : namedNode;
            attachPennant(new LLRBNode(key, namedNode.node, color, null, childTree));
        };
        var attachPennant = function (pennant) {
            if (node) {
                node.left = pennant;
                node = pennant;
            }
            else {
                root = pennant;
                node = pennant;
            }
        };
        for (var i = 0; i < base12.count; ++i) {
            var isOne = base12.nextBitIsOne();
            // The number of nodes taken in each slice is 2^(arr.length - (i + 1))
            var chunkSize = Math.pow(2, base12.count - (i + 1));
            if (isOne) {
                buildPennant(chunkSize, LLRBNode.BLACK);
            }
            else {
                // current == 2
                buildPennant(chunkSize, LLRBNode.BLACK);
                buildPennant(chunkSize, LLRBNode.RED);
            }
        }
        return root;
    };
    var base12 = new Base12Num(childList.length);
    var root = buildFrom12Array(base12);
    return new SortedMap(mapSortFn || cmp, root);
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var _defaultIndexMap;
var fallbackObject = {};
var IndexMap = /** @class */ (function () {
    function IndexMap(indexes_, indexSet_) {
        this.indexes_ = indexes_;
        this.indexSet_ = indexSet_;
    }
    Object.defineProperty(IndexMap, "Default", {
        /**
         * The default IndexMap for nodes without a priority
         */
        get: function () {
            util.assert(fallbackObject && PRIORITY_INDEX, 'ChildrenNode.ts has not been loaded');
            _defaultIndexMap =
                _defaultIndexMap ||
                    new IndexMap({ '.priority': fallbackObject }, { '.priority': PRIORITY_INDEX });
            return _defaultIndexMap;
        },
        enumerable: true,
        configurable: true
    });
    IndexMap.prototype.get = function (indexKey) {
        var sortedMap = util.safeGet(this.indexes_, indexKey);
        if (!sortedMap)
            throw new Error('No index defined for ' + indexKey);
        if (sortedMap instanceof SortedMap) {
            return sortedMap;
        }
        else {
            // The index exists, but it falls back to just name comparison. Return null so that the calling code uses the
            // regular child map
            return null;
        }
    };
    IndexMap.prototype.hasIndex = function (indexDefinition) {
        return util.contains(this.indexSet_, indexDefinition.toString());
    };
    IndexMap.prototype.addIndex = function (indexDefinition, existingChildren) {
        util.assert(indexDefinition !== KEY_INDEX, "KeyIndex always exists and isn't meant to be added to the IndexMap.");
        var childList = [];
        var sawIndexedValue = false;
        var iter = existingChildren.getIterator(NamedNode.Wrap);
        var next = iter.getNext();
        while (next) {
            sawIndexedValue =
                sawIndexedValue || indexDefinition.isDefinedOn(next.node);
            childList.push(next);
            next = iter.getNext();
        }
        var newIndex;
        if (sawIndexedValue) {
            newIndex = buildChildSet(childList, indexDefinition.getCompare());
        }
        else {
            newIndex = fallbackObject;
        }
        var indexName = indexDefinition.toString();
        var newIndexSet = tslib_1.__assign({}, this.indexSet_);
        newIndexSet[indexName] = indexDefinition;
        var newIndexes = tslib_1.__assign({}, this.indexes_);
        newIndexes[indexName] = newIndex;
        return new IndexMap(newIndexes, newIndexSet);
    };
    /**
     * Ensure that this node is properly tracked in any indexes that we're maintaining
     */
    IndexMap.prototype.addToIndexes = function (namedNode, existingChildren) {
        var _this = this;
        var newIndexes = util.map(this.indexes_, function (indexedChildren, indexName) {
            var index = util.safeGet(_this.indexSet_, indexName);
            util.assert(index, 'Missing index implementation for ' + indexName);
            if (indexedChildren === fallbackObject) {
                // Check to see if we need to index everything
                if (index.isDefinedOn(namedNode.node)) {
                    // We need to build this index
                    var childList = [];
                    var iter = existingChildren.getIterator(NamedNode.Wrap);
                    var next = iter.getNext();
                    while (next) {
                        if (next.name != namedNode.name) {
                            childList.push(next);
                        }
                        next = iter.getNext();
                    }
                    childList.push(namedNode);
                    return buildChildSet(childList, index.getCompare());
                }
                else {
                    // No change, this remains a fallback
                    return fallbackObject;
                }
            }
            else {
                var existingSnap = existingChildren.get(namedNode.name);
                var newChildren = indexedChildren;
                if (existingSnap) {
                    newChildren = newChildren.remove(new NamedNode(namedNode.name, existingSnap));
                }
                return newChildren.insert(namedNode, namedNode.node);
            }
        });
        return new IndexMap(newIndexes, this.indexSet_);
    };
    /**
     * Create a new IndexMap instance with the given value removed
     */
    IndexMap.prototype.removeFromIndexes = function (namedNode, existingChildren) {
        var newIndexes = util.map(this.indexes_, function (indexedChildren) {
            if (indexedChildren === fallbackObject) {
                // This is the fallback. Just return it, nothing to do in this case
                return indexedChildren;
            }
            else {
                var existingSnap = existingChildren.get(namedNode.name);
                if (existingSnap) {
                    return indexedChildren.remove(new NamedNode(namedNode.name, existingSnap));
                }
                else {
                    // No record of this child
                    return indexedChildren;
                }
            }
        });
        return new IndexMap(newIndexes, this.indexSet_);
    };
    return IndexMap;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function NAME_ONLY_COMPARATOR(left, right) {
    return nameCompare(left.name, right.name);
}
function NAME_COMPARATOR(left, right) {
    return nameCompare(left, right);
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// TODO: For memory savings, don't store priorityNode_ if it's empty.
var EMPTY_NODE;
/**
 * ChildrenNode is a class for storing internal nodes in a DataSnapshot
 * (i.e. nodes with children).  It implements Node and stores the
 * list of children in the children property, sorted by child name.
 *
 * @constructor
 * @implements {Node}
 */
var ChildrenNode = /** @class */ (function () {
    /**
     *
     * @param {!SortedMap.<string, !Node>} children_ List of children
     * of this node..
     * @param {?Node} priorityNode_ The priority of this node (as a snapshot node).
     * @param {!IndexMap} indexMap_
     */
    function ChildrenNode(children_, priorityNode_, indexMap_) {
        this.children_ = children_;
        this.priorityNode_ = priorityNode_;
        this.indexMap_ = indexMap_;
        this.lazyHash_ = null;
        /**
         * Note: The only reason we allow null priority is for EMPTY_NODE, since we can't use
         * EMPTY_NODE as the priority of EMPTY_NODE.  We might want to consider making EMPTY_NODE its own
         * class instead of an empty ChildrenNode.
         */
        if (this.priorityNode_) {
            validatePriorityNode(this.priorityNode_);
        }
        if (this.children_.isEmpty()) {
            util.assert(!this.priorityNode_ || this.priorityNode_.isEmpty(), 'An empty node cannot have a priority');
        }
    }
    Object.defineProperty(ChildrenNode, "EMPTY_NODE", {
        get: function () {
            return (EMPTY_NODE ||
                (EMPTY_NODE = new ChildrenNode(new SortedMap(NAME_COMPARATOR), null, IndexMap.Default)));
        },
        enumerable: true,
        configurable: true
    });
    /** @inheritDoc */
    ChildrenNode.prototype.isLeafNode = function () {
        return false;
    };
    /** @inheritDoc */
    ChildrenNode.prototype.getPriority = function () {
        return this.priorityNode_ || EMPTY_NODE;
    };
    /** @inheritDoc */
    ChildrenNode.prototype.updatePriority = function (newPriorityNode) {
        if (this.children_.isEmpty()) {
            // Don't allow priorities on empty nodes
            return this;
        }
        else {
            return new ChildrenNode(this.children_, newPriorityNode, this.indexMap_);
        }
    };
    /** @inheritDoc */
    ChildrenNode.prototype.getImmediateChild = function (childName) {
        // Hack to treat priority as a regular child
        if (childName === '.priority') {
            return this.getPriority();
        }
        else {
            var child = this.children_.get(childName);
            return child === null ? EMPTY_NODE : child;
        }
    };
    /** @inheritDoc */
    ChildrenNode.prototype.getChild = function (path) {
        var front = path.getFront();
        if (front === null)
            return this;
        return this.getImmediateChild(front).getChild(path.popFront());
    };
    /** @inheritDoc */
    ChildrenNode.prototype.hasChild = function (childName) {
        return this.children_.get(childName) !== null;
    };
    /** @inheritDoc */
    ChildrenNode.prototype.updateImmediateChild = function (childName, newChildNode) {
        util.assert(newChildNode, 'We should always be passing snapshot nodes');
        if (childName === '.priority') {
            return this.updatePriority(newChildNode);
        }
        else {
            var namedNode = new NamedNode(childName, newChildNode);
            var newChildren = void 0, newIndexMap = void 0, newPriority = void 0;
            if (newChildNode.isEmpty()) {
                newChildren = this.children_.remove(childName);
                newIndexMap = this.indexMap_.removeFromIndexes(namedNode, this.children_);
            }
            else {
                newChildren = this.children_.insert(childName, newChildNode);
                newIndexMap = this.indexMap_.addToIndexes(namedNode, this.children_);
            }
            newPriority = newChildren.isEmpty() ? EMPTY_NODE : this.priorityNode_;
            return new ChildrenNode(newChildren, newPriority, newIndexMap);
        }
    };
    /** @inheritDoc */
    ChildrenNode.prototype.updateChild = function (path, newChildNode) {
        var front = path.getFront();
        if (front === null) {
            return newChildNode;
        }
        else {
            util.assert(path.getFront() !== '.priority' || path.getLength() === 1, '.priority must be the last token in a path');
            var newImmediateChild = this.getImmediateChild(front).updateChild(path.popFront(), newChildNode);
            return this.updateImmediateChild(front, newImmediateChild);
        }
    };
    /** @inheritDoc */
    ChildrenNode.prototype.isEmpty = function () {
        return this.children_.isEmpty();
    };
    /** @inheritDoc */
    ChildrenNode.prototype.numChildren = function () {
        return this.children_.count();
    };
    /** @inheritDoc */
    ChildrenNode.prototype.val = function (exportFormat) {
        if (this.isEmpty())
            return null;
        var obj = {};
        var numKeys = 0, maxKey = 0, allIntegerKeys = true;
        this.forEachChild(PRIORITY_INDEX, function (key, childNode) {
            obj[key] = childNode.val(exportFormat);
            numKeys++;
            if (allIntegerKeys && ChildrenNode.INTEGER_REGEXP_.test(key)) {
                maxKey = Math.max(maxKey, Number(key));
            }
            else {
                allIntegerKeys = false;
            }
        });
        if (!exportFormat && allIntegerKeys && maxKey < 2 * numKeys) {
            // convert to array.
            var array = [];
            for (var key in obj)
                array[key] = obj[key];
            return array;
        }
        else {
            if (exportFormat && !this.getPriority().isEmpty()) {
                obj['.priority'] = this.getPriority().val();
            }
            return obj;
        }
    };
    /** @inheritDoc */
    ChildrenNode.prototype.hash = function () {
        if (this.lazyHash_ === null) {
            var toHash_1 = '';
            if (!this.getPriority().isEmpty())
                toHash_1 +=
                    'priority:' +
                        priorityHashText(this.getPriority().val()) +
                        ':';
            this.forEachChild(PRIORITY_INDEX, function (key, childNode) {
                var childHash = childNode.hash();
                if (childHash !== '')
                    toHash_1 += ':' + key + ':' + childHash;
            });
            this.lazyHash_ = toHash_1 === '' ? '' : sha1(toHash_1);
        }
        return this.lazyHash_;
    };
    /** @inheritDoc */
    ChildrenNode.prototype.getPredecessorChildName = function (childName, childNode, index) {
        var idx = this.resolveIndex_(index);
        if (idx) {
            var predecessor = idx.getPredecessorKey(new NamedNode(childName, childNode));
            return predecessor ? predecessor.name : null;
        }
        else {
            return this.children_.getPredecessorKey(childName);
        }
    };
    /**
     * @param {!Index} indexDefinition
     * @return {?string}
     */
    ChildrenNode.prototype.getFirstChildName = function (indexDefinition) {
        var idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            var minKey = idx.minKey();
            return minKey && minKey.name;
        }
        else {
            return this.children_.minKey();
        }
    };
    /**
     * @param {!Index} indexDefinition
     * @return {?NamedNode}
     */
    ChildrenNode.prototype.getFirstChild = function (indexDefinition) {
        var minKey = this.getFirstChildName(indexDefinition);
        if (minKey) {
            return new NamedNode(minKey, this.children_.get(minKey));
        }
        else {
            return null;
        }
    };
    /**
     * Given an index, return the key name of the largest value we have, according to that index
     * @param {!Index} indexDefinition
     * @return {?string}
     */
    ChildrenNode.prototype.getLastChildName = function (indexDefinition) {
        var idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            var maxKey = idx.maxKey();
            return maxKey && maxKey.name;
        }
        else {
            return this.children_.maxKey();
        }
    };
    /**
     * @param {!Index} indexDefinition
     * @return {?NamedNode}
     */
    ChildrenNode.prototype.getLastChild = function (indexDefinition) {
        var maxKey = this.getLastChildName(indexDefinition);
        if (maxKey) {
            return new NamedNode(maxKey, this.children_.get(maxKey));
        }
        else {
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    ChildrenNode.prototype.forEachChild = function (index, action) {
        var idx = this.resolveIndex_(index);
        if (idx) {
            return idx.inorderTraversal(function (wrappedNode) {
                return action(wrappedNode.name, wrappedNode.node);
            });
        }
        else {
            return this.children_.inorderTraversal(action);
        }
    };
    /**
     * @param {!Index} indexDefinition
     * @return {SortedMapIterator}
     */
    ChildrenNode.prototype.getIterator = function (indexDefinition) {
        return this.getIteratorFrom(indexDefinition.minPost(), indexDefinition);
    };
    /**
     *
     * @param {!NamedNode} startPost
     * @param {!Index} indexDefinition
     * @return {!SortedMapIterator}
     */
    ChildrenNode.prototype.getIteratorFrom = function (startPost, indexDefinition) {
        var idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            return idx.getIteratorFrom(startPost, function (key) { return key; });
        }
        else {
            var iterator = this.children_.getIteratorFrom(startPost.name, NamedNode.Wrap);
            var next = iterator.peek();
            while (next != null && indexDefinition.compare(next, startPost) < 0) {
                iterator.getNext();
                next = iterator.peek();
            }
            return iterator;
        }
    };
    /**
     * @param {!Index} indexDefinition
     * @return {!SortedMapIterator}
     */
    ChildrenNode.prototype.getReverseIterator = function (indexDefinition) {
        return this.getReverseIteratorFrom(indexDefinition.maxPost(), indexDefinition);
    };
    /**
     * @param {!NamedNode} endPost
     * @param {!Index} indexDefinition
     * @return {!SortedMapIterator}
     */
    ChildrenNode.prototype.getReverseIteratorFrom = function (endPost, indexDefinition) {
        var idx = this.resolveIndex_(indexDefinition);
        if (idx) {
            return idx.getReverseIteratorFrom(endPost, function (key) {
                return key;
            });
        }
        else {
            var iterator = this.children_.getReverseIteratorFrom(endPost.name, NamedNode.Wrap);
            var next = iterator.peek();
            while (next != null && indexDefinition.compare(next, endPost) > 0) {
                iterator.getNext();
                next = iterator.peek();
            }
            return iterator;
        }
    };
    /**
     * @inheritDoc
     */
    ChildrenNode.prototype.compareTo = function (other) {
        if (this.isEmpty()) {
            if (other.isEmpty()) {
                return 0;
            }
            else {
                return -1;
            }
        }
        else if (other.isLeafNode() || other.isEmpty()) {
            return 1;
        }
        else if (other === MAX_NODE$2) {
            return -1;
        }
        else {
            // Must be another node with children.
            return 0;
        }
    };
    /**
     * @inheritDoc
     */
    ChildrenNode.prototype.withIndex = function (indexDefinition) {
        if (indexDefinition === KEY_INDEX ||
            this.indexMap_.hasIndex(indexDefinition)) {
            return this;
        }
        else {
            var newIndexMap = this.indexMap_.addIndex(indexDefinition, this.children_);
            return new ChildrenNode(this.children_, this.priorityNode_, newIndexMap);
        }
    };
    /**
     * @inheritDoc
     */
    ChildrenNode.prototype.isIndexed = function (index) {
        return index === KEY_INDEX || this.indexMap_.hasIndex(index);
    };
    /**
     * @inheritDoc
     */
    ChildrenNode.prototype.equals = function (other) {
        if (other === this) {
            return true;
        }
        else if (other.isLeafNode()) {
            return false;
        }
        else {
            var otherChildrenNode = other;
            if (!this.getPriority().equals(otherChildrenNode.getPriority())) {
                return false;
            }
            else if (this.children_.count() === otherChildrenNode.children_.count()) {
                var thisIter = this.getIterator(PRIORITY_INDEX);
                var otherIter = otherChildrenNode.getIterator(PRIORITY_INDEX);
                var thisCurrent = thisIter.getNext();
                var otherCurrent = otherIter.getNext();
                while (thisCurrent && otherCurrent) {
                    if (thisCurrent.name !== otherCurrent.name ||
                        !thisCurrent.node.equals(otherCurrent.node)) {
                        return false;
                    }
                    thisCurrent = thisIter.getNext();
                    otherCurrent = otherIter.getNext();
                }
                return thisCurrent === null && otherCurrent === null;
            }
            else {
                return false;
            }
        }
    };
    /**
     * Returns a SortedMap ordered by index, or null if the default (by-key) ordering can be used
     * instead.
     *
     * @private
     * @param {!Index} indexDefinition
     * @return {?SortedMap.<NamedNode, Node>}
     */
    ChildrenNode.prototype.resolveIndex_ = function (indexDefinition) {
        if (indexDefinition === KEY_INDEX) {
            return null;
        }
        else {
            return this.indexMap_.get(indexDefinition.toString());
        }
    };
    /**
     * @private
     * @type {RegExp}
     */
    ChildrenNode.INTEGER_REGEXP_ = /^(0|[1-9]\d*)$/;
    return ChildrenNode;
}());
/**
 * @constructor
 * @extends {ChildrenNode}
 * @private
 */
var MaxNode = /** @class */ (function (_super) {
    tslib_1.__extends(MaxNode, _super);
    function MaxNode() {
        return _super.call(this, new SortedMap(NAME_COMPARATOR), ChildrenNode.EMPTY_NODE, IndexMap.Default) || this;
    }
    MaxNode.prototype.compareTo = function (other) {
        if (other === this) {
            return 0;
        }
        else {
            return 1;
        }
    };
    MaxNode.prototype.equals = function (other) {
        // Not that we every compare it, but MAX_NODE is only ever equal to itself
        return other === this;
    };
    MaxNode.prototype.getPriority = function () {
        return this;
    };
    MaxNode.prototype.getImmediateChild = function (childName) {
        return ChildrenNode.EMPTY_NODE;
    };
    MaxNode.prototype.isEmpty = function () {
        return false;
    };
    return MaxNode;
}(ChildrenNode));
/**
 * Marker that will sort higher than any other snapshot.
 * @type {!MAX_NODE}
 * @const
 */
var MAX_NODE$2 = new MaxNode();
Object.defineProperties(NamedNode, {
    MIN: {
        value: new NamedNode(MIN_NAME, ChildrenNode.EMPTY_NODE)
    },
    MAX: {
        value: new NamedNode(MAX_NAME, MAX_NODE$2)
    }
});
/**
 * Reference Extensions
 */
KeyIndex.__EMPTY_NODE = ChildrenNode.EMPTY_NODE;
LeafNode.__childrenNodeConstructor = ChildrenNode;
setMaxNode(MAX_NODE$2);
setMaxNode$1(MAX_NODE$2);

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var USE_HINZE = true;
/**
 * Constructs a snapshot node representing the passed JSON and returns it.
 * @param {*} json JSON to create a node for.
 * @param {?string|?number=} priority Optional priority to use.  This will be ignored if the
 * passed JSON contains a .priority property.
 * @return {!Node}
 */
function nodeFromJSON$1(json, priority) {
    if (priority === void 0) { priority = null; }
    if (json === null) {
        return ChildrenNode.EMPTY_NODE;
    }
    if (typeof json === 'object' && '.priority' in json) {
        priority = json['.priority'];
    }
    util.assert(priority === null ||
        typeof priority === 'string' ||
        typeof priority === 'number' ||
        (typeof priority === 'object' && '.sv' in priority), 'Invalid priority type found: ' + typeof priority);
    if (typeof json === 'object' && '.value' in json && json['.value'] !== null) {
        json = json['.value'];
    }
    // Valid leaf nodes include non-objects or server-value wrapper objects
    if (typeof json !== 'object' || '.sv' in json) {
        var jsonLeaf = json;
        return new LeafNode(jsonLeaf, nodeFromJSON$1(priority));
    }
    if (!(json instanceof Array) && USE_HINZE) {
        var children_1 = [];
        var childrenHavePriority_1 = false;
        var hinzeJsonObj = json;
        each(hinzeJsonObj, function (key, child) {
            if (key.substring(0, 1) !== '.') {
                // Ignore metadata nodes
                var childNode = nodeFromJSON$1(child);
                if (!childNode.isEmpty()) {
                    childrenHavePriority_1 =
                        childrenHavePriority_1 || !childNode.getPriority().isEmpty();
                    children_1.push(new NamedNode(key, childNode));
                }
            }
        });
        if (children_1.length == 0) {
            return ChildrenNode.EMPTY_NODE;
        }
        var childSet = buildChildSet(children_1, NAME_ONLY_COMPARATOR, function (namedNode) { return namedNode.name; }, NAME_COMPARATOR);
        if (childrenHavePriority_1) {
            var sortedChildSet = buildChildSet(children_1, PRIORITY_INDEX.getCompare());
            return new ChildrenNode(childSet, nodeFromJSON$1(priority), new IndexMap({ '.priority': sortedChildSet }, { '.priority': PRIORITY_INDEX }));
        }
        else {
            return new ChildrenNode(childSet, nodeFromJSON$1(priority), IndexMap.Default);
        }
    }
    else {
        var node_1 = ChildrenNode.EMPTY_NODE;
        each(json, function (key, childData) {
            if (util.contains(json, key)) {
                if (key.substring(0, 1) !== '.') {
                    // ignore metadata nodes.
                    var childNode = nodeFromJSON$1(childData);
                    if (childNode.isLeafNode() || !childNode.isEmpty())
                        node_1 = node_1.updateImmediateChild(key, childNode);
                }
            }
        });
        return node_1.updatePriority(nodeFromJSON$1(priority));
    }
}
setNodeFromJSON(nodeFromJSON$1);

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @constructor
 * @extends {Index}
 * @private
 */
var ValueIndex = /** @class */ (function (_super) {
    tslib_1.__extends(ValueIndex, _super);
    function ValueIndex() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * @inheritDoc
     */
    ValueIndex.prototype.compare = function (a, b) {
        var indexCmp = a.node.compareTo(b.node);
        if (indexCmp === 0) {
            return nameCompare(a.name, b.name);
        }
        else {
            return indexCmp;
        }
    };
    /**
     * @inheritDoc
     */
    ValueIndex.prototype.isDefinedOn = function (node) {
        return true;
    };
    /**
     * @inheritDoc
     */
    ValueIndex.prototype.indexedValueChanged = function (oldNode, newNode) {
        return !oldNode.equals(newNode);
    };
    /**
     * @inheritDoc
     */
    ValueIndex.prototype.minPost = function () {
        return NamedNode.MIN;
    };
    /**
     * @inheritDoc
     */
    ValueIndex.prototype.maxPost = function () {
        return NamedNode.MAX;
    };
    /**
     * @param {*} indexValue
     * @param {string} name
     * @return {!NamedNode}
     */
    ValueIndex.prototype.makePost = function (indexValue, name) {
        var valueNode = nodeFromJSON$1(indexValue);
        return new NamedNode(name, valueNode);
    };
    /**
     * @return {!string} String representation for inclusion in a query spec
     */
    ValueIndex.prototype.toString = function () {
        return '.value';
    };
    return ValueIndex;
}(Index));
var VALUE_INDEX = new ValueIndex();

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param {!Path} indexPath
 * @constructor
 * @extends {Index}
 */
var PathIndex = /** @class */ (function (_super) {
    tslib_1.__extends(PathIndex, _super);
    function PathIndex(indexPath_) {
        var _this = _super.call(this) || this;
        _this.indexPath_ = indexPath_;
        util.assert(!indexPath_.isEmpty() && indexPath_.getFront() !== '.priority', "Can't create PathIndex with empty path or .priority key");
        return _this;
    }
    /**
     * @param {!Node} snap
     * @return {!Node}
     * @protected
     */
    PathIndex.prototype.extractChild = function (snap) {
        return snap.getChild(this.indexPath_);
    };
    /**
     * @inheritDoc
     */
    PathIndex.prototype.isDefinedOn = function (node) {
        return !node.getChild(this.indexPath_).isEmpty();
    };
    /**
     * @inheritDoc
     */
    PathIndex.prototype.compare = function (a, b) {
        var aChild = this.extractChild(a.node);
        var bChild = this.extractChild(b.node);
        var indexCmp = aChild.compareTo(bChild);
        if (indexCmp === 0) {
            return nameCompare(a.name, b.name);
        }
        else {
            return indexCmp;
        }
    };
    /**
     * @inheritDoc
     */
    PathIndex.prototype.makePost = function (indexValue, name) {
        var valueNode = nodeFromJSON$1(indexValue);
        var node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, valueNode);
        return new NamedNode(name, node);
    };
    /**
     * @inheritDoc
     */
    PathIndex.prototype.maxPost = function () {
        var node = ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_, MAX_NODE$2);
        return new NamedNode(MAX_NAME, node);
    };
    /**
     * @inheritDoc
     */
    PathIndex.prototype.toString = function () {
        return this.indexPath_.slice().join('/');
    };
    return PathIndex;
}(Index));

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Class representing a firebase data snapshot.  It wraps a SnapshotNode and
 * surfaces the public methods (val, forEach, etc.) we want to expose.
 */
var DataSnapshot = /** @class */ (function () {
    /**
     * @param {!Node} node_ A SnapshotNode to wrap.
     * @param {!Reference} ref_ The ref of the location this snapshot came from.
     * @param {!Index} index_ The iteration order for this snapshot
     */
    function DataSnapshot(node_, ref_, index_) {
        this.node_ = node_;
        this.ref_ = ref_;
        this.index_ = index_;
    }
    /**
     * Retrieves the snapshot contents as JSON.  Returns null if the snapshot is
     * empty.
     *
     * @return {*} JSON representation of the DataSnapshot contents, or null if empty.
     */
    DataSnapshot.prototype.val = function () {
        util.validateArgCount('DataSnapshot.val', 0, 0, arguments.length);
        return this.node_.val();
    };
    /**
     * Returns the snapshot contents as JSON, including priorities of node.  Suitable for exporting
     * the entire node contents.
     * @return {*} JSON representation of the DataSnapshot contents, or null if empty.
     */
    DataSnapshot.prototype.exportVal = function () {
        util.validateArgCount('DataSnapshot.exportVal', 0, 0, arguments.length);
        return this.node_.val(true);
    };
    // Do not create public documentation. This is intended to make JSON serialization work but is otherwise unnecessary
    // for end-users
    DataSnapshot.prototype.toJSON = function () {
        // Optional spacer argument is unnecessary because we're depending on recursion rather than stringifying the content
        util.validateArgCount('DataSnapshot.toJSON', 0, 1, arguments.length);
        return this.exportVal();
    };
    /**
     * Returns whether the snapshot contains a non-null value.
     *
     * @return {boolean} Whether the snapshot contains a non-null value, or is empty.
     */
    DataSnapshot.prototype.exists = function () {
        util.validateArgCount('DataSnapshot.exists', 0, 0, arguments.length);
        return !this.node_.isEmpty();
    };
    /**
     * Returns a DataSnapshot of the specified child node's contents.
     *
     * @param {!string} childPathString Path to a child.
     * @return {!DataSnapshot} DataSnapshot for child node.
     */
    DataSnapshot.prototype.child = function (childPathString) {
        util.validateArgCount('DataSnapshot.child', 0, 1, arguments.length);
        // Ensure the childPath is a string (can be a number)
        childPathString = String(childPathString);
        validatePathString('DataSnapshot.child', 1, childPathString, false);
        var childPath = new Path(childPathString);
        var childRef = this.ref_.child(childPath);
        return new DataSnapshot(this.node_.getChild(childPath), childRef, PRIORITY_INDEX);
    };
    /**
     * Returns whether the snapshot contains a child at the specified path.
     *
     * @param {!string} childPathString Path to a child.
     * @return {boolean} Whether the child exists.
     */
    DataSnapshot.prototype.hasChild = function (childPathString) {
        util.validateArgCount('DataSnapshot.hasChild', 1, 1, arguments.length);
        validatePathString('DataSnapshot.hasChild', 1, childPathString, false);
        var childPath = new Path(childPathString);
        return !this.node_.getChild(childPath).isEmpty();
    };
    /**
     * Returns the priority of the object, or null if no priority was set.
     *
     * @return {string|number|null} The priority.
     */
    DataSnapshot.prototype.getPriority = function () {
        util.validateArgCount('DataSnapshot.getPriority', 0, 0, arguments.length);
        // typecast here because we never return deferred values or internal priorities (MAX_PRIORITY)
        return this.node_.getPriority().val();
    };
    /**
     * Iterates through child nodes and calls the specified action for each one.
     *
     * @param {function(!DataSnapshot)} action Callback function to be called
     * for each child.
     * @return {boolean} True if forEach was canceled by action returning true for
     * one of the child nodes.
     */
    DataSnapshot.prototype.forEach = function (action) {
        var _this = this;
        util.validateArgCount('DataSnapshot.forEach', 1, 1, arguments.length);
        util.validateCallback('DataSnapshot.forEach', 1, action, false);
        if (this.node_.isLeafNode())
            return false;
        var childrenNode = this.node_;
        // Sanitize the return value to a boolean. ChildrenNode.forEachChild has a weird return type...
        return !!childrenNode.forEachChild(this.index_, function (key, node) {
            return action(new DataSnapshot(node, _this.ref_.child(key), PRIORITY_INDEX));
        });
    };
    /**
     * Returns whether this DataSnapshot has children.
     * @return {boolean} True if the DataSnapshot contains 1 or more child nodes.
     */
    DataSnapshot.prototype.hasChildren = function () {
        util.validateArgCount('DataSnapshot.hasChildren', 0, 0, arguments.length);
        if (this.node_.isLeafNode())
            return false;
        else
            return !this.node_.isEmpty();
    };
    Object.defineProperty(DataSnapshot.prototype, "key", {
        get: function () {
            return this.ref_.getKey();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the number of children for this DataSnapshot.
     * @return {number} The number of children that this DataSnapshot contains.
     */
    DataSnapshot.prototype.numChildren = function () {
        util.validateArgCount('DataSnapshot.numChildren', 0, 0, arguments.length);
        return this.node_.numChildren();
    };
    /**
     * @return {Reference} The Firebase reference for the location this snapshot's data came from.
     */
    DataSnapshot.prototype.getRef = function () {
        util.validateArgCount('DataSnapshot.ref', 0, 0, arguments.length);
        return this.ref_;
    };
    Object.defineProperty(DataSnapshot.prototype, "ref", {
        get: function () {
            return this.getRef();
        },
        enumerable: true,
        configurable: true
    });
    return DataSnapshot;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Encapsulates the data needed to raise an event
 * @implements {Event}
 */
var DataEvent = /** @class */ (function () {
    /**
     * @param {!string} eventType One of: value, child_added, child_changed, child_moved, child_removed
     * @param {!EventRegistration} eventRegistration The function to call to with the event data. User provided
     * @param {!DataSnapshot} snapshot The data backing the event
     * @param {?string=} prevName Optional, the name of the previous child for child_* events.
     */
    function DataEvent(eventType, eventRegistration, snapshot, prevName) {
        this.eventType = eventType;
        this.eventRegistration = eventRegistration;
        this.snapshot = snapshot;
        this.prevName = prevName;
    }
    /**
     * @inheritDoc
     */
    DataEvent.prototype.getPath = function () {
        var ref = this.snapshot.getRef();
        if (this.eventType === 'value') {
            return ref.path;
        }
        else {
            return ref.getParent().path;
        }
    };
    /**
     * @inheritDoc
     */
    DataEvent.prototype.getEventType = function () {
        return this.eventType;
    };
    /**
     * @inheritDoc
     */
    DataEvent.prototype.getEventRunner = function () {
        return this.eventRegistration.getEventRunner(this);
    };
    /**
     * @inheritDoc
     */
    DataEvent.prototype.toString = function () {
        return (this.getPath().toString() +
            ':' +
            this.eventType +
            ':' +
            util.stringify(this.snapshot.exportVal()));
    };
    return DataEvent;
}());
var CancelEvent = /** @class */ (function () {
    /**
     * @param {EventRegistration} eventRegistration
     * @param {Error} error
     * @param {!Path} path
     */
    function CancelEvent(eventRegistration, error, path) {
        this.eventRegistration = eventRegistration;
        this.error = error;
        this.path = path;
    }
    /**
     * @inheritDoc
     */
    CancelEvent.prototype.getPath = function () {
        return this.path;
    };
    /**
     * @inheritDoc
     */
    CancelEvent.prototype.getEventType = function () {
        return 'cancel';
    };
    /**
     * @inheritDoc
     */
    CancelEvent.prototype.getEventRunner = function () {
        return this.eventRegistration.getEventRunner(this);
    };
    /**
     * @inheritDoc
     */
    CancelEvent.prototype.toString = function () {
        return this.path.toString() + ':cancel';
    };
    return CancelEvent;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents registration for 'value' events.
 */
var ValueEventRegistration = /** @class */ (function () {
    /**
     * @param {?function(!DataSnapshot)} callback_
     * @param {?function(Error)} cancelCallback_
     * @param {?Object} context_
     */
    function ValueEventRegistration(callback_, cancelCallback_, context_) {
        this.callback_ = callback_;
        this.cancelCallback_ = cancelCallback_;
        this.context_ = context_;
    }
    /**
     * @inheritDoc
     */
    ValueEventRegistration.prototype.respondsTo = function (eventType) {
        return eventType === 'value';
    };
    /**
     * @inheritDoc
     */
    ValueEventRegistration.prototype.createEvent = function (change, query) {
        var index = query.getQueryParams().getIndex();
        return new DataEvent('value', this, new DataSnapshot(change.snapshotNode, query.getRef(), index));
    };
    /**
     * @inheritDoc
     */
    ValueEventRegistration.prototype.getEventRunner = function (eventData) {
        var ctx = this.context_;
        if (eventData.getEventType() === 'cancel') {
            util.assert(this.cancelCallback_, 'Raising a cancel event on a listener with no cancel callback');
            var cancelCB_1 = this.cancelCallback_;
            return function () {
                // We know that error exists, we checked above that this is a cancel event
                cancelCB_1.call(ctx, eventData.error);
            };
        }
        else {
            var cb_1 = this.callback_;
            return function () {
                cb_1.call(ctx, eventData.snapshot);
            };
        }
    };
    /**
     * @inheritDoc
     */
    ValueEventRegistration.prototype.createCancelEvent = function (error, path) {
        if (this.cancelCallback_) {
            return new CancelEvent(this, error, path);
        }
        else {
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    ValueEventRegistration.prototype.matches = function (other) {
        if (!(other instanceof ValueEventRegistration)) {
            return false;
        }
        else if (!other.callback_ || !this.callback_) {
            // If no callback specified, we consider it to match any callback.
            return true;
        }
        else {
            return (other.callback_ === this.callback_ && other.context_ === this.context_);
        }
    };
    /**
     * @inheritDoc
     */
    ValueEventRegistration.prototype.hasAnyCallback = function () {
        return this.callback_ !== null;
    };
    return ValueEventRegistration;
}());
/**
 * Represents the registration of 1 or more child_xxx events.
 *
 * Currently, it is always exactly 1 child_xxx event, but the idea is we might let you
 * register a group of callbacks together in the future.
 *
 * @constructor
 * @implements {EventRegistration}
 */
var ChildEventRegistration = /** @class */ (function () {
    /**
     * @param {?Object.<string, function(!DataSnapshot, ?string=)>} callbacks_
     * @param {?function(Error)} cancelCallback_
     * @param {Object=} context_
     */
    function ChildEventRegistration(callbacks_, cancelCallback_, context_) {
        this.callbacks_ = callbacks_;
        this.cancelCallback_ = cancelCallback_;
        this.context_ = context_;
    }
    /**
     * @inheritDoc
     */
    ChildEventRegistration.prototype.respondsTo = function (eventType) {
        var eventToCheck = eventType === 'children_added' ? 'child_added' : eventType;
        eventToCheck =
            eventToCheck === 'children_removed' ? 'child_removed' : eventToCheck;
        return util.contains(this.callbacks_, eventToCheck);
    };
    /**
     * @inheritDoc
     */
    ChildEventRegistration.prototype.createCancelEvent = function (error, path) {
        if (this.cancelCallback_) {
            return new CancelEvent(this, error, path);
        }
        else {
            return null;
        }
    };
    /**
     * @inheritDoc
     */
    ChildEventRegistration.prototype.createEvent = function (change, query) {
        util.assert(change.childName != null, 'Child events should have a childName.');
        var ref = query.getRef().child(/** @type {!string} */ change.childName);
        var index = query.getQueryParams().getIndex();
        return new DataEvent(change.type, this, new DataSnapshot(change.snapshotNode, ref, index), change.prevName);
    };
    /**
     * @inheritDoc
     */
    ChildEventRegistration.prototype.getEventRunner = function (eventData) {
        var ctx = this.context_;
        if (eventData.getEventType() === 'cancel') {
            util.assert(this.cancelCallback_, 'Raising a cancel event on a listener with no cancel callback');
            var cancelCB_2 = this.cancelCallback_;
            return function () {
                // We know that error exists, we checked above that this is a cancel event
                cancelCB_2.call(ctx, eventData.error);
            };
        }
        else {
            var cb_2 = this.callbacks_[eventData.eventType];
            return function () {
                cb_2.call(ctx, eventData.snapshot, eventData.prevName);
            };
        }
    };
    /**
     * @inheritDoc
     */
    ChildEventRegistration.prototype.matches = function (other) {
        var _this = this;
        if (other instanceof ChildEventRegistration) {
            if (!this.callbacks_ || !other.callbacks_) {
                return true;
            }
            else if (this.context_ === other.context_) {
                var otherKeys = Object.keys(other.callbacks_);
                var thisKeys = Object.keys(this.callbacks_);
                var otherCount = otherKeys.length;
                var thisCount = thisKeys.length;
                if (otherCount === thisCount) {
                    // If count is 1, do an exact match on eventType, if either is defined but null, it's a match.
                    // If event types don't match, not a match
                    // If count is not 1, exact match across all
                    if (otherCount === 1) {
                        var otherKey = otherKeys[0];
                        var thisKey = thisKeys[0];
                        return (thisKey === otherKey &&
                            (!other.callbacks_[otherKey] ||
                                !this.callbacks_[thisKey] ||
                                other.callbacks_[otherKey] === this.callbacks_[thisKey]));
                    }
                    else {
                        // Exact match on each key.
                        return thisKeys.every(function (eventType) {
                            return other.callbacks_[eventType] === _this.callbacks_[eventType];
                        });
                    }
                }
            }
        }
        return false;
    };
    /**
     * @inheritDoc
     */
    ChildEventRegistration.prototype.hasAnyCallback = function () {
        return this.callbacks_ !== null;
    };
    return ChildEventRegistration;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __referenceConstructor;
/**
 * A Query represents a filter to be applied to a firebase location.  This object purely represents the
 * query expression (and exposes our public API to build the query).  The actual query logic is in ViewBase.js.
 *
 * Since every Firebase reference is a query, Firebase inherits from this object.
 */
var Query = /** @class */ (function () {
    function Query(repo, path, queryParams_, orderByCalled_) {
        this.repo = repo;
        this.path = path;
        this.queryParams_ = queryParams_;
        this.orderByCalled_ = orderByCalled_;
    }
    Object.defineProperty(Query, "__referenceConstructor", {
        get: function () {
            util.assert(__referenceConstructor, 'Reference.ts has not been loaded');
            return __referenceConstructor;
        },
        set: function (val) {
            __referenceConstructor = val;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Validates start/end values for queries.
     * @param {!QueryParams} params
     * @private
     */
    Query.validateQueryEndpoints_ = function (params) {
        var startNode = null;
        var endNode = null;
        if (params.hasStart()) {
            startNode = params.getIndexStartValue();
        }
        if (params.hasEnd()) {
            endNode = params.getIndexEndValue();
        }
        if (params.getIndex() === KEY_INDEX) {
            var tooManyArgsError = 'Query: When ordering by key, you may only pass one argument to ' +
                'startAt(), endAt(), or equalTo().';
            var wrongArgTypeError = 'Query: When ordering by key, the argument passed to startAt(), endAt(),' +
                'or equalTo() must be a string.';
            if (params.hasStart()) {
                var startName = params.getIndexStartName();
                if (startName != MIN_NAME) {
                    throw new Error(tooManyArgsError);
                }
                else if (typeof startNode !== 'string') {
                    throw new Error(wrongArgTypeError);
                }
            }
            if (params.hasEnd()) {
                var endName = params.getIndexEndName();
                if (endName != MAX_NAME) {
                    throw new Error(tooManyArgsError);
                }
                else if (typeof endNode !== 'string') {
                    throw new Error(wrongArgTypeError);
                }
            }
        }
        else if (params.getIndex() === PRIORITY_INDEX) {
            if ((startNode != null && !isValidPriority(startNode)) ||
                (endNode != null && !isValidPriority(endNode))) {
                throw new Error('Query: When ordering by priority, the first argument passed to startAt(), ' +
                    'endAt(), or equalTo() must be a valid priority value (null, a number, or a string).');
            }
        }
        else {
            util.assert(params.getIndex() instanceof PathIndex ||
                params.getIndex() === VALUE_INDEX, 'unknown index type.');
            if ((startNode != null && typeof startNode === 'object') ||
                (endNode != null && typeof endNode === 'object')) {
                throw new Error('Query: First argument passed to startAt(), endAt(), or equalTo() cannot be ' +
                    'an object.');
            }
        }
    };
    /**
     * Validates that limit* has been called with the correct combination of parameters
     * @param {!QueryParams} params
     * @private
     */
    Query.validateLimit_ = function (params) {
        if (params.hasStart() &&
            params.hasEnd() &&
            params.hasLimit() &&
            !params.hasAnchoredLimit()) {
            throw new Error("Query: Can't combine startAt(), endAt(), and limit(). Use limitToFirst() or limitToLast() instead.");
        }
    };
    /**
     * Validates that no other order by call has been made
     * @param {!string} fnName
     * @private
     */
    Query.prototype.validateNoPreviousOrderByCall_ = function (fnName) {
        if (this.orderByCalled_ === true) {
            throw new Error(fnName + ": You can't combine multiple orderBy calls.");
        }
    };
    /**
     * @return {!QueryParams}
     */
    Query.prototype.getQueryParams = function () {
        return this.queryParams_;
    };
    /**
     * @return {!Reference}
     */
    Query.prototype.getRef = function () {
        util.validateArgCount('Query.ref', 0, 0, arguments.length);
        // This is a slight hack. We cannot goog.require('fb.api.Firebase'), since Firebase requires fb.api.Query.
        // However, we will always export 'Firebase' to the global namespace, so it's guaranteed to exist by the time this
        // method gets called.
        return new Query.__referenceConstructor(this.repo, this.path);
    };
    /**
     * @param {!string} eventType
     * @param {!function(DataSnapshot, string=)} callback
     * @param {(function(Error)|Object)=} cancelCallbackOrContext
     * @param {Object=} context
     * @return {!function(DataSnapshot, string=)}
     */
    Query.prototype.on = function (eventType, callback, cancelCallbackOrContext, context) {
        util.validateArgCount('Query.on', 2, 4, arguments.length);
        validateEventType('Query.on', 1, eventType, false);
        util.validateCallback('Query.on', 2, callback, false);
        var ret = Query.getCancelAndContextArgs_('Query.on', cancelCallbackOrContext, context);
        if (eventType === 'value') {
            this.onValueEvent(callback, ret.cancel, ret.context);
        }
        else {
            var callbacks = {};
            callbacks[eventType] = callback;
            this.onChildEvent(callbacks, ret.cancel, ret.context);
        }
        return callback;
    };
    /**
     * @param {!function(!DataSnapshot)} callback
     * @param {?function(Error)} cancelCallback
     * @param {?Object} context
     * @protected
     */
    Query.prototype.onValueEvent = function (callback, cancelCallback, context) {
        var container = new ValueEventRegistration(callback, cancelCallback || null, context || null);
        this.repo.addEventCallbackForQuery(this, container);
    };
    /**
     * @param {!Object.<string, !function(!DataSnapshot, ?string)>} callbacks
     * @param {?function(Error)} cancelCallback
     * @param {?Object} context
     * @protected
     */
    Query.prototype.onChildEvent = function (callbacks, cancelCallback, context) {
        var container = new ChildEventRegistration(callbacks, cancelCallback, context);
        this.repo.addEventCallbackForQuery(this, container);
    };
    /**
     * @param {string=} eventType
     * @param {(function(!DataSnapshot, ?string=))=} callback
     * @param {Object=} context
     */
    Query.prototype.off = function (eventType, callback, context) {
        util.validateArgCount('Query.off', 0, 3, arguments.length);
        validateEventType('Query.off', 1, eventType, true);
        util.validateCallback('Query.off', 2, callback, true);
        util.validateContextObject('Query.off', 3, context, true);
        var container = null;
        var callbacks = null;
        if (eventType === 'value') {
            var valueCallback = callback || null;
            container = new ValueEventRegistration(valueCallback, null, context || null);
        }
        else if (eventType) {
            if (callback) {
                callbacks = {};
                callbacks[eventType] = callback;
            }
            container = new ChildEventRegistration(callbacks, null, context || null);
        }
        this.repo.removeEventCallbackForQuery(this, container);
    };
    /**
     * Attaches a listener, waits for the first event, and then removes the listener
     * @param {!string} eventType
     * @param {!function(!DataSnapshot, string=)} userCallback
     * @param failureCallbackOrContext
     * @param context
     * @return {!firebase.Promise}
     */
    Query.prototype.once = function (eventType, userCallback, failureCallbackOrContext, context) {
        var _this = this;
        util.validateArgCount('Query.once', 1, 4, arguments.length);
        validateEventType('Query.once', 1, eventType, false);
        util.validateCallback('Query.once', 2, userCallback, true);
        var ret = Query.getCancelAndContextArgs_('Query.once', failureCallbackOrContext, context);
        // TODO: Implement this more efficiently (in particular, use 'get' wire protocol for 'value' event)
        // TODO: consider actually wiring the callbacks into the promise. We cannot do this without a breaking change
        // because the API currently expects callbacks will be called synchronously if the data is cached, but this is
        // against the Promise specification.
        var firstCall = true;
        var deferred = new util.Deferred();
        // A dummy error handler in case a user wasn't expecting promises
        deferred.promise.catch(function () { });
        var onceCallback = function (snapshot) {
            // NOTE: Even though we unsubscribe, we may get called multiple times if a single action (e.g. set() with JSON)
            // triggers multiple events (e.g. child_added or child_changed).
            if (firstCall) {
                firstCall = false;
                _this.off(eventType, onceCallback);
                if (userCallback) {
                    userCallback.bind(ret.context)(snapshot);
                }
                deferred.resolve(snapshot);
            }
        };
        this.on(eventType, onceCallback, 
        /*cancel=*/ function (err) {
            _this.off(eventType, onceCallback);
            if (ret.cancel)
                ret.cancel.bind(ret.context)(err);
            deferred.reject(err);
        });
        return deferred.promise;
    };
    /**
     * Set a limit and anchor it to the start of the window.
     * @param {!number} limit
     * @return {!Query}
     */
    Query.prototype.limitToFirst = function (limit) {
        util.validateArgCount('Query.limitToFirst', 1, 1, arguments.length);
        if (typeof limit !== 'number' ||
            Math.floor(limit) !== limit ||
            limit <= 0) {
            throw new Error('Query.limitToFirst: First argument must be a positive integer.');
        }
        if (this.queryParams_.hasLimit()) {
            throw new Error('Query.limitToFirst: Limit was already set (by another call to limit, ' +
                'limitToFirst, or limitToLast).');
        }
        return new Query(this.repo, this.path, this.queryParams_.limitToFirst(limit), this.orderByCalled_);
    };
    /**
     * Set a limit and anchor it to the end of the window.
     * @param {!number} limit
     * @return {!Query}
     */
    Query.prototype.limitToLast = function (limit) {
        util.validateArgCount('Query.limitToLast', 1, 1, arguments.length);
        if (typeof limit !== 'number' ||
            Math.floor(limit) !== limit ||
            limit <= 0) {
            throw new Error('Query.limitToLast: First argument must be a positive integer.');
        }
        if (this.queryParams_.hasLimit()) {
            throw new Error('Query.limitToLast: Limit was already set (by another call to limit, ' +
                'limitToFirst, or limitToLast).');
        }
        return new Query(this.repo, this.path, this.queryParams_.limitToLast(limit), this.orderByCalled_);
    };
    /**
     * Given a child path, return a new query ordered by the specified grandchild path.
     * @param {!string} path
     * @return {!Query}
     */
    Query.prototype.orderByChild = function (path) {
        util.validateArgCount('Query.orderByChild', 1, 1, arguments.length);
        if (path === '$key') {
            throw new Error('Query.orderByChild: "$key" is invalid.  Use Query.orderByKey() instead.');
        }
        else if (path === '$priority') {
            throw new Error('Query.orderByChild: "$priority" is invalid.  Use Query.orderByPriority() instead.');
        }
        else if (path === '$value') {
            throw new Error('Query.orderByChild: "$value" is invalid.  Use Query.orderByValue() instead.');
        }
        validatePathString('Query.orderByChild', 1, path, false);
        this.validateNoPreviousOrderByCall_('Query.orderByChild');
        var parsedPath = new Path(path);
        if (parsedPath.isEmpty()) {
            throw new Error('Query.orderByChild: cannot pass in empty path.  Use Query.orderByValue() instead.');
        }
        var index = new PathIndex(parsedPath);
        var newParams = this.queryParams_.orderBy(index);
        Query.validateQueryEndpoints_(newParams);
        return new Query(this.repo, this.path, newParams, /*orderByCalled=*/ true);
    };
    /**
     * Return a new query ordered by the KeyIndex
     * @return {!Query}
     */
    Query.prototype.orderByKey = function () {
        util.validateArgCount('Query.orderByKey', 0, 0, arguments.length);
        this.validateNoPreviousOrderByCall_('Query.orderByKey');
        var newParams = this.queryParams_.orderBy(KEY_INDEX);
        Query.validateQueryEndpoints_(newParams);
        return new Query(this.repo, this.path, newParams, /*orderByCalled=*/ true);
    };
    /**
     * Return a new query ordered by the PriorityIndex
     * @return {!Query}
     */
    Query.prototype.orderByPriority = function () {
        util.validateArgCount('Query.orderByPriority', 0, 0, arguments.length);
        this.validateNoPreviousOrderByCall_('Query.orderByPriority');
        var newParams = this.queryParams_.orderBy(PRIORITY_INDEX);
        Query.validateQueryEndpoints_(newParams);
        return new Query(this.repo, this.path, newParams, /*orderByCalled=*/ true);
    };
    /**
     * Return a new query ordered by the ValueIndex
     * @return {!Query}
     */
    Query.prototype.orderByValue = function () {
        util.validateArgCount('Query.orderByValue', 0, 0, arguments.length);
        this.validateNoPreviousOrderByCall_('Query.orderByValue');
        var newParams = this.queryParams_.orderBy(VALUE_INDEX);
        Query.validateQueryEndpoints_(newParams);
        return new Query(this.repo, this.path, newParams, /*orderByCalled=*/ true);
    };
    /**
     * @param {number|string|boolean|null} value
     * @param {?string=} name
     * @return {!Query}
     */
    Query.prototype.startAt = function (value, name) {
        if (value === void 0) { value = null; }
        util.validateArgCount('Query.startAt', 0, 2, arguments.length);
        validateFirebaseDataArg('Query.startAt', 1, value, this.path, true);
        validateKey('Query.startAt', 2, name, true);
        var newParams = this.queryParams_.startAt(value, name);
        Query.validateLimit_(newParams);
        Query.validateQueryEndpoints_(newParams);
        if (this.queryParams_.hasStart()) {
            throw new Error('Query.startAt: Starting point was already set (by another call to startAt ' +
                'or equalTo).');
        }
        // Calling with no params tells us to start at the beginning.
        if (value === undefined) {
            value = null;
            name = null;
        }
        return new Query(this.repo, this.path, newParams, this.orderByCalled_);
    };
    /**
     * @param {number|string|boolean|null} value
     * @param {?string=} name
     * @return {!Query}
     */
    Query.prototype.endAt = function (value, name) {
        if (value === void 0) { value = null; }
        util.validateArgCount('Query.endAt', 0, 2, arguments.length);
        validateFirebaseDataArg('Query.endAt', 1, value, this.path, true);
        validateKey('Query.endAt', 2, name, true);
        var newParams = this.queryParams_.endAt(value, name);
        Query.validateLimit_(newParams);
        Query.validateQueryEndpoints_(newParams);
        if (this.queryParams_.hasEnd()) {
            throw new Error('Query.endAt: Ending point was already set (by another call to endAt or ' +
                'equalTo).');
        }
        return new Query(this.repo, this.path, newParams, this.orderByCalled_);
    };
    /**
     * Load the selection of children with exactly the specified value, and, optionally,
     * the specified name.
     * @param {number|string|boolean|null} value
     * @param {string=} name
     * @return {!Query}
     */
    Query.prototype.equalTo = function (value, name) {
        util.validateArgCount('Query.equalTo', 1, 2, arguments.length);
        validateFirebaseDataArg('Query.equalTo', 1, value, this.path, false);
        validateKey('Query.equalTo', 2, name, true);
        if (this.queryParams_.hasStart()) {
            throw new Error('Query.equalTo: Starting point was already set (by another call to startAt or ' +
                'equalTo).');
        }
        if (this.queryParams_.hasEnd()) {
            throw new Error('Query.equalTo: Ending point was already set (by another call to endAt or ' +
                'equalTo).');
        }
        return this.startAt(value, name).endAt(value, name);
    };
    /**
     * @return {!string} URL for this location.
     */
    Query.prototype.toString = function () {
        util.validateArgCount('Query.toString', 0, 0, arguments.length);
        return this.repo.toString() + this.path.toUrlEncodedString();
    };
    // Do not create public documentation. This is intended to make JSON serialization work but is otherwise unnecessary
    // for end-users.
    Query.prototype.toJSON = function () {
        // An optional spacer argument is unnecessary for a string.
        util.validateArgCount('Query.toJSON', 0, 1, arguments.length);
        return this.toString();
    };
    /**
     * An object representation of the query parameters used by this Query.
     * @return {!Object}
     */
    Query.prototype.queryObject = function () {
        return this.queryParams_.getQueryObject();
    };
    /**
     * @return {!string}
     */
    Query.prototype.queryIdentifier = function () {
        var obj = this.queryObject();
        var id = ObjectToUniqueKey(obj);
        return id === '{}' ? 'default' : id;
    };
    /**
     * Return true if this query and the provided query are equivalent; otherwise, return false.
     * @param {Query} other
     * @return {boolean}
     */
    Query.prototype.isEqual = function (other) {
        util.validateArgCount('Query.isEqual', 1, 1, arguments.length);
        if (!(other instanceof Query)) {
            var error = 'Query.isEqual failed: First argument must be an instance of firebase.database.Query.';
            throw new Error(error);
        }
        var sameRepo = this.repo === other.repo;
        var samePath = this.path.equals(other.path);
        var sameQueryIdentifier = this.queryIdentifier() === other.queryIdentifier();
        return sameRepo && samePath && sameQueryIdentifier;
    };
    /**
     * Helper used by .on and .once to extract the context and or cancel arguments.
     * @param {!string} fnName The function name (on or once)
     * @param {(function(Error)|Object)=} cancelOrContext
     * @param {Object=} context
     * @return {{cancel: ?function(Error), context: ?Object}}
     * @private
     */
    Query.getCancelAndContextArgs_ = function (fnName, cancelOrContext, context) {
        var ret = { cancel: null, context: null };
        if (cancelOrContext && context) {
            ret.cancel = cancelOrContext;
            util.validateCallback(fnName, 3, ret.cancel, true);
            ret.context = context;
            util.validateContextObject(fnName, 4, ret.context, true);
        }
        else if (cancelOrContext) {
            // we have either a cancel callback or a context.
            if (typeof cancelOrContext === 'object' && cancelOrContext !== null) {
                // it's a context!
                ret.context = cancelOrContext;
            }
            else if (typeof cancelOrContext === 'function') {
                ret.cancel = cancelOrContext;
            }
            else {
                throw new Error(util.errorPrefix(fnName, 3, true) +
                    ' must either be a cancel callback or a context object.');
            }
        }
        return ret;
    };
    Object.defineProperty(Query.prototype, "ref", {
        get: function () {
            return this.getRef();
        },
        enumerable: true,
        configurable: true
    });
    return Query;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Helper class to store a sparse set of snapshots.
 */
var SparseSnapshotTree = /** @class */ (function () {
    function SparseSnapshotTree() {
        this.value = null;
        this.children = new Map();
    }
    /**
     * Gets the node stored at the given path if one exists.
     *
     * @param path Path to look up snapshot for.
     * @return The retrieved node, or null.
     */
    SparseSnapshotTree.prototype.find = function (path) {
        if (this.value != null) {
            return this.value.getChild(path);
        }
        else if (!path.isEmpty() && this.children.size > 0) {
            var childKey = path.getFront();
            path = path.popFront();
            if (this.children.has(childKey)) {
                var childTree = this.children.get(childKey);
                return childTree.find(path);
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    };
    /**
     * Stores the given node at the specified path. If there is already a node
     * at a shallower path, it merges the new data into that snapshot node.
     *
     * @param path Path to look up snapshot for.
     * @param data The new data, or null.
     */
    SparseSnapshotTree.prototype.remember = function (path, data) {
        if (path.isEmpty()) {
            this.value = data;
            this.children.clear();
        }
        else if (this.value !== null) {
            this.value = this.value.updateChild(path, data);
        }
        else {
            var childKey = path.getFront();
            if (!this.children.has(childKey)) {
                this.children.set(childKey, new SparseSnapshotTree());
            }
            var child = this.children.get(childKey);
            path = path.popFront();
            child.remember(path, data);
        }
    };
    /**
     * Purge the data at path from the cache.
     *
     * @param path Path to look up snapshot for.
     * @return True if this node should now be removed.
     */
    SparseSnapshotTree.prototype.forget = function (path) {
        if (path.isEmpty()) {
            this.value = null;
            this.children.clear();
            return true;
        }
        else {
            if (this.value !== null) {
                if (this.value.isLeafNode()) {
                    // We're trying to forget a node that doesn't exist
                    return false;
                }
                else {
                    var value = this.value;
                    this.value = null;
                    var self_1 = this;
                    value.forEachChild(PRIORITY_INDEX, function (key, tree) {
                        self_1.remember(new Path(key), tree);
                    });
                    return this.forget(path);
                }
            }
            else if (this.children.size > 0) {
                var childKey = path.getFront();
                path = path.popFront();
                if (this.children.has(childKey)) {
                    var safeToRemove = this.children.get(childKey).forget(path);
                    if (safeToRemove) {
                        this.children.delete(childKey);
                    }
                }
                return this.children.size === 0;
            }
            else {
                return true;
            }
        }
    };
    /**
     * Recursively iterates through all of the stored tree and calls the
     * callback on each one.
     *
     * @param prefixPath Path to look up node for.
     * @param func The function to invoke for each tree.
     */
    SparseSnapshotTree.prototype.forEachTree = function (prefixPath, func) {
        if (this.value !== null) {
            func(prefixPath, this.value);
        }
        else {
            this.forEachChild(function (key, tree) {
                var path = new Path(prefixPath.toString() + '/' + key);
                tree.forEachTree(path, func);
            });
        }
    };
    /**
     * Iterates through each immediate child and triggers the callback.
     *
     * @param func The function to invoke for each child.
     */
    SparseSnapshotTree.prototype.forEachChild = function (func) {
        this.children.forEach(function (tree, key) {
            func(key, tree);
        });
    };
    return SparseSnapshotTree;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Generate placeholders for deferred values.
 * @param {?Object} values
 * @return {!Object}
 */
var generateWithValues = function (values) {
    values = values || {};
    values['timestamp'] = values['timestamp'] || new Date().getTime();
    return values;
};
/**
 * Value to use when firing local events. When writing server values, fire
 * local events with an approximate value, otherwise return value as-is.
 * @param {(Object|string|number|boolean)} value
 * @param {!Object} serverValues
 * @return {!(string|number|boolean)}
 */
var resolveDeferredValue = function (value, serverValues) {
    if (!value || typeof value !== 'object') {
        return value;
    }
    else {
        util.assert('.sv' in value, 'Unexpected leaf node or priority contents');
        return serverValues[value['.sv']];
    }
};
/**
 * Recursively replace all deferred values and priorities in the tree with the
 * specified generated replacement values.
 * @param {!SparseSnapshotTree} tree
 * @param {!Object} serverValues
 * @return {!SparseSnapshotTree}
 */
var resolveDeferredValueTree = function (tree, serverValues) {
    var resolvedTree = new SparseSnapshotTree();
    tree.forEachTree(new Path(''), function (path, node) {
        resolvedTree.remember(path, resolveDeferredValueSnapshot(node, serverValues));
    });
    return resolvedTree;
};
/**
 * Recursively replace all deferred values and priorities in the node with the
 * specified generated replacement values.  If there are no server values in the node,
 * it'll be returned as-is.
 * @param {!Node} node
 * @param {!Object} serverValues
 * @return {!Node}
 */
var resolveDeferredValueSnapshot = function (node, serverValues) {
    var rawPri = node.getPriority().val();
    var priority = resolveDeferredValue(rawPri, serverValues);
    var newNode;
    if (node.isLeafNode()) {
        var leafNode = node;
        var value = resolveDeferredValue(leafNode.getValue(), serverValues);
        if (value !== leafNode.getValue() ||
            priority !== leafNode.getPriority().val()) {
            return new LeafNode(value, nodeFromJSON$1(priority));
        }
        else {
            return node;
        }
    }
    else {
        var childrenNode = node;
        newNode = childrenNode;
        if (priority !== childrenNode.getPriority().val()) {
            newNode = newNode.updatePriority(new LeafNode(priority));
        }
        childrenNode.forEachChild(PRIORITY_INDEX, function (childName, childNode) {
            var newChildNode = resolveDeferredValueSnapshot(childNode, serverValues);
            if (newChildNode !== childNode) {
                newNode = newNode.updateImmediateChild(childName, newChildNode);
            }
        });
        return newNode;
    }
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 *
 * @enum
 */
var OperationType;
(function (OperationType) {
    OperationType[OperationType["OVERWRITE"] = 0] = "OVERWRITE";
    OperationType[OperationType["MERGE"] = 1] = "MERGE";
    OperationType[OperationType["ACK_USER_WRITE"] = 2] = "ACK_USER_WRITE";
    OperationType[OperationType["LISTEN_COMPLETE"] = 3] = "LISTEN_COMPLETE";
})(OperationType || (OperationType = {}));
/**
 * @param {boolean} fromUser
 * @param {boolean} fromServer
 * @param {?string} queryId
 * @param {boolean} tagged
 * @constructor
 */
var OperationSource = /** @class */ (function () {
    function OperationSource(fromUser, fromServer, queryId, tagged) {
        this.fromUser = fromUser;
        this.fromServer = fromServer;
        this.queryId = queryId;
        this.tagged = tagged;
        util.assert(!tagged || fromServer, 'Tagged queries must be from server.');
    }
    /**
     * @const
     * @type {!OperationSource}
     */
    OperationSource.User = new OperationSource(
    /*fromUser=*/ true, false, null, 
    /*tagged=*/ false);
    /**
     * @const
     * @type {!OperationSource}
     */
    OperationSource.Server = new OperationSource(false, 
    /*fromServer=*/ true, null, 
    /*tagged=*/ false);
    /**
     * @param {string} queryId
     * @return {!OperationSource}
     */
    OperationSource.forServerTaggedQuery = function (queryId) {
        return new OperationSource(false, 
        /*fromServer=*/ true, queryId, 
        /*tagged=*/ true);
    };
    return OperationSource;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var AckUserWrite = /** @class */ (function () {
    /**
     *
     * @param {!Path} path
     * @param {!ImmutableTree<!boolean>} affectedTree A tree containing true for each affected path. Affected paths can't overlap.
     * @param {!boolean} revert
     */
    function AckUserWrite(
    /**@inheritDoc */ path, 
    /**@inheritDoc */ affectedTree, 
    /**@inheritDoc */ revert) {
        this.path = path;
        this.affectedTree = affectedTree;
        this.revert = revert;
        /** @inheritDoc */
        this.type = OperationType.ACK_USER_WRITE;
        /** @inheritDoc */
        this.source = OperationSource.User;
    }
    /**
     * @inheritDoc
     */
    AckUserWrite.prototype.operationForChild = function (childName) {
        if (!this.path.isEmpty()) {
            util.assert(this.path.getFront() === childName, 'operationForChild called for unrelated child.');
            return new AckUserWrite(this.path.popFront(), this.affectedTree, this.revert);
        }
        else if (this.affectedTree.value != null) {
            util.assert(this.affectedTree.children.isEmpty(), 'affectedTree should not have overlapping affected paths.');
            // All child locations are affected as well; just return same operation.
            return this;
        }
        else {
            var childTree = this.affectedTree.subtree(new Path(childName));
            return new AckUserWrite(Path.Empty, childTree, this.revert);
        }
    };
    return AckUserWrite;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var emptyChildrenSingleton;
/**
 * Singleton empty children collection.
 *
 * @const
 * @type {!SortedMap.<string, !ImmutableTree.<?>>}
 */
var EmptyChildren = function () {
    if (!emptyChildrenSingleton) {
        emptyChildrenSingleton = new SortedMap(stringCompare);
    }
    return emptyChildrenSingleton;
};
/**
 * A tree with immutable elements.
 */
var ImmutableTree = /** @class */ (function () {
    /**
     * @template T
     * @param {?T} value
     * @param {SortedMap.<string, !ImmutableTree.<T>>=} children
     */
    function ImmutableTree(value, children) {
        if (children === void 0) { children = EmptyChildren(); }
        this.value = value;
        this.children = children;
    }
    /**
     * @template T
     * @param {!Object.<string, !T>} obj
     * @return {!ImmutableTree.<!T>}
     */
    ImmutableTree.fromObject = function (obj) {
        var tree = ImmutableTree.Empty;
        each(obj, function (childPath, childSnap) {
            tree = tree.set(new Path(childPath), childSnap);
        });
        return tree;
    };
    /**
     * True if the value is empty and there are no children
     * @return {boolean}
     */
    ImmutableTree.prototype.isEmpty = function () {
        return this.value === null && this.children.isEmpty();
    };
    /**
     * Given a path and predicate, return the first node and the path to that node
     * where the predicate returns true.
     *
     * TODO Do a perf test -- If we're creating a bunch of {path: value:} objects
     * on the way back out, it may be better to pass down a pathSoFar obj.
     *
     * @param {!Path} relativePath The remainder of the path
     * @param {function(T):boolean} predicate The predicate to satisfy to return a
     *   node
     * @return {?{path:!Path, value:!T}}
     */
    ImmutableTree.prototype.findRootMostMatchingPathAndValue = function (relativePath, predicate) {
        if (this.value != null && predicate(this.value)) {
            return { path: Path.Empty, value: this.value };
        }
        else {
            if (relativePath.isEmpty()) {
                return null;
            }
            else {
                var front = relativePath.getFront();
                var child = this.children.get(front);
                if (child !== null) {
                    var childExistingPathAndValue = child.findRootMostMatchingPathAndValue(relativePath.popFront(), predicate);
                    if (childExistingPathAndValue != null) {
                        var fullPath = new Path(front).child(childExistingPathAndValue.path);
                        return { path: fullPath, value: childExistingPathAndValue.value };
                    }
                    else {
                        return null;
                    }
                }
                else {
                    return null;
                }
            }
        }
    };
    /**
     * Find, if it exists, the shortest subpath of the given path that points a defined
     * value in the tree
     * @param {!Path} relativePath
     * @return {?{path: !Path, value: !T}}
     */
    ImmutableTree.prototype.findRootMostValueAndPath = function (relativePath) {
        return this.findRootMostMatchingPathAndValue(relativePath, function () { return true; });
    };
    /**
     * @param {!Path} relativePath
     * @return {!ImmutableTree.<T>} The subtree at the given path
     */
    ImmutableTree.prototype.subtree = function (relativePath) {
        if (relativePath.isEmpty()) {
            return this;
        }
        else {
            var front = relativePath.getFront();
            var childTree = this.children.get(front);
            if (childTree !== null) {
                return childTree.subtree(relativePath.popFront());
            }
            else {
                return ImmutableTree.Empty;
            }
        }
    };
    /**
     * Sets a value at the specified path.
     *
     * @param {!Path} relativePath Path to set value at.
     * @param {?T} toSet Value to set.
     * @return {!ImmutableTree.<T>} Resulting tree.
     */
    ImmutableTree.prototype.set = function (relativePath, toSet) {
        if (relativePath.isEmpty()) {
            return new ImmutableTree(toSet, this.children);
        }
        else {
            var front = relativePath.getFront();
            var child = this.children.get(front) || ImmutableTree.Empty;
            var newChild = child.set(relativePath.popFront(), toSet);
            var newChildren = this.children.insert(front, newChild);
            return new ImmutableTree(this.value, newChildren);
        }
    };
    /**
     * Removes the value at the specified path.
     *
     * @param {!Path} relativePath Path to value to remove.
     * @return {!ImmutableTree.<T>} Resulting tree.
     */
    ImmutableTree.prototype.remove = function (relativePath) {
        if (relativePath.isEmpty()) {
            if (this.children.isEmpty()) {
                return ImmutableTree.Empty;
            }
            else {
                return new ImmutableTree(null, this.children);
            }
        }
        else {
            var front = relativePath.getFront();
            var child = this.children.get(front);
            if (child) {
                var newChild = child.remove(relativePath.popFront());
                var newChildren = void 0;
                if (newChild.isEmpty()) {
                    newChildren = this.children.remove(front);
                }
                else {
                    newChildren = this.children.insert(front, newChild);
                }
                if (this.value === null && newChildren.isEmpty()) {
                    return ImmutableTree.Empty;
                }
                else {
                    return new ImmutableTree(this.value, newChildren);
                }
            }
            else {
                return this;
            }
        }
    };
    /**
     * Gets a value from the tree.
     *
     * @param {!Path} relativePath Path to get value for.
     * @return {?T} Value at path, or null.
     */
    ImmutableTree.prototype.get = function (relativePath) {
        if (relativePath.isEmpty()) {
            return this.value;
        }
        else {
            var front = relativePath.getFront();
            var child = this.children.get(front);
            if (child) {
                return child.get(relativePath.popFront());
            }
            else {
                return null;
            }
        }
    };
    /**
     * Replace the subtree at the specified path with the given new tree.
     *
     * @param {!Path} relativePath Path to replace subtree for.
     * @param {!ImmutableTree} newTree New tree.
     * @return {!ImmutableTree} Resulting tree.
     */
    ImmutableTree.prototype.setTree = function (relativePath, newTree) {
        if (relativePath.isEmpty()) {
            return newTree;
        }
        else {
            var front = relativePath.getFront();
            var child = this.children.get(front) || ImmutableTree.Empty;
            var newChild = child.setTree(relativePath.popFront(), newTree);
            var newChildren = void 0;
            if (newChild.isEmpty()) {
                newChildren = this.children.remove(front);
            }
            else {
                newChildren = this.children.insert(front, newChild);
            }
            return new ImmutableTree(this.value, newChildren);
        }
    };
    /**
     * Performs a depth first fold on this tree. Transforms a tree into a single
     * value, given a function that operates on the path to a node, an optional
     * current value, and a map of child names to folded subtrees
     * @template V
     * @param {function(Path, ?T, Object.<string, V>):V} fn
     * @return {V}
     */
    ImmutableTree.prototype.fold = function (fn) {
        return this.fold_(Path.Empty, fn);
    };
    /**
     * Recursive helper for public-facing fold() method
     * @template V
     * @param {!Path} pathSoFar
     * @param {function(Path, ?T, Object.<string, V>):V} fn
     * @return {V}
     * @private
     */
    ImmutableTree.prototype.fold_ = function (pathSoFar, fn) {
        var accum = {};
        this.children.inorderTraversal(function (childKey, childTree) {
            accum[childKey] = childTree.fold_(pathSoFar.child(childKey), fn);
        });
        return fn(pathSoFar, this.value, accum);
    };
    /**
     * Find the first matching value on the given path. Return the result of applying f to it.
     * @template V
     * @param {!Path} path
     * @param {!function(!Path, !T):?V} f
     * @return {?V}
     */
    ImmutableTree.prototype.findOnPath = function (path, f) {
        return this.findOnPath_(path, Path.Empty, f);
    };
    ImmutableTree.prototype.findOnPath_ = function (pathToFollow, pathSoFar, f) {
        var result = this.value ? f(pathSoFar, this.value) : false;
        if (result) {
            return result;
        }
        else {
            if (pathToFollow.isEmpty()) {
                return null;
            }
            else {
                var front = pathToFollow.getFront();
                var nextChild = this.children.get(front);
                if (nextChild) {
                    return nextChild.findOnPath_(pathToFollow.popFront(), pathSoFar.child(front), f);
                }
                else {
                    return null;
                }
            }
        }
    };
    /**
     *
     * @param {!Path} path
     * @param {!function(!Path, !T)} f
     * @returns {!ImmutableTree.<T>}
     */
    ImmutableTree.prototype.foreachOnPath = function (path, f) {
        return this.foreachOnPath_(path, Path.Empty, f);
    };
    ImmutableTree.prototype.foreachOnPath_ = function (pathToFollow, currentRelativePath, f) {
        if (pathToFollow.isEmpty()) {
            return this;
        }
        else {
            if (this.value) {
                f(currentRelativePath, this.value);
            }
            var front = pathToFollow.getFront();
            var nextChild = this.children.get(front);
            if (nextChild) {
                return nextChild.foreachOnPath_(pathToFollow.popFront(), currentRelativePath.child(front), f);
            }
            else {
                return ImmutableTree.Empty;
            }
        }
    };
    /**
     * Calls the given function for each node in the tree that has a value.
     *
     * @param {function(!Path, !T)} f A function to be called with
     *   the path from the root of the tree to a node, and the value at that node.
     *   Called in depth-first order.
     */
    ImmutableTree.prototype.foreach = function (f) {
        this.foreach_(Path.Empty, f);
    };
    ImmutableTree.prototype.foreach_ = function (currentRelativePath, f) {
        this.children.inorderTraversal(function (childName, childTree) {
            childTree.foreach_(currentRelativePath.child(childName), f);
        });
        if (this.value) {
            f(currentRelativePath, this.value);
        }
    };
    /**
     *
     * @param {function(string, !T)} f
     */
    ImmutableTree.prototype.foreachChild = function (f) {
        this.children.inorderTraversal(function (childName, childTree) {
            if (childTree.value) {
                f(childName, childTree.value);
            }
        });
    };
    ImmutableTree.Empty = new ImmutableTree(null);
    return ImmutableTree;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param {!OperationSource} source
 * @param {!Path} path
 * @constructor
 * @implements {Operation}
 */
var ListenComplete = /** @class */ (function () {
    function ListenComplete(source, path) {
        this.source = source;
        this.path = path;
        /** @inheritDoc */
        this.type = OperationType.LISTEN_COMPLETE;
    }
    ListenComplete.prototype.operationForChild = function (childName) {
        if (this.path.isEmpty()) {
            return new ListenComplete(this.source, Path.Empty);
        }
        else {
            return new ListenComplete(this.source, this.path.popFront());
        }
    };
    return ListenComplete;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param {!OperationSource} source
 * @param {!Path} path
 * @param {!Node} snap
 * @constructor
 * @implements {Operation}
 */
var Overwrite = /** @class */ (function () {
    function Overwrite(source, path, snap) {
        this.source = source;
        this.path = path;
        this.snap = snap;
        /** @inheritDoc */
        this.type = OperationType.OVERWRITE;
    }
    Overwrite.prototype.operationForChild = function (childName) {
        if (this.path.isEmpty()) {
            return new Overwrite(this.source, Path.Empty, this.snap.getImmediateChild(childName));
        }
        else {
            return new Overwrite(this.source, this.path.popFront(), this.snap);
        }
    };
    return Overwrite;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @param {!OperationSource} source
 * @param {!Path} path
 * @param {!ImmutableTree.<!Node>} children
 * @constructor
 * @implements {Operation}
 */
var Merge = /** @class */ (function () {
    function Merge(
    /**@inheritDoc */ source, 
    /**@inheritDoc */ path, 
    /**@inheritDoc */ children) {
        this.source = source;
        this.path = path;
        this.children = children;
        /** @inheritDoc */
        this.type = OperationType.MERGE;
    }
    /**
     * @inheritDoc
     */
    Merge.prototype.operationForChild = function (childName) {
        if (this.path.isEmpty()) {
            var childTree = this.children.subtree(new Path(childName));
            if (childTree.isEmpty()) {
                // This child is unaffected
                return null;
            }
            else if (childTree.value) {
                // We have a snapshot for the child in question.  This becomes an overwrite of the child.
                return new Overwrite(this.source, Path.Empty, childTree.value);
            }
            else {
                // This is a merge at a deeper level
                return new Merge(this.source, Path.Empty, childTree);
            }
        }
        else {
            util.assert(this.path.getFront() === childName, "Can't get a merge for a child not on the path of the operation");
            return new Merge(this.source, this.path.popFront(), this.children);
        }
    };
    /**
     * @inheritDoc
     */
    Merge.prototype.toString = function () {
        return ('Operation(' +
            this.path +
            ': ' +
            this.source.toString() +
            ' merge: ' +
            this.children.toString() +
            ')');
    };
    return Merge;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A cache node only stores complete children. Additionally it holds a flag whether the node can be considered fully
 * initialized in the sense that we know at one point in time this represented a valid state of the world, e.g.
 * initialized with data from the server, or a complete overwrite by the client. The filtered flag also tracks
 * whether a node potentially had children removed due to a filter.
 */
var CacheNode = /** @class */ (function () {
    /**
     * @param {!Node} node_
     * @param {boolean} fullyInitialized_
     * @param {boolean} filtered_
     */
    function CacheNode(node_, fullyInitialized_, filtered_) {
        this.node_ = node_;
        this.fullyInitialized_ = fullyInitialized_;
        this.filtered_ = filtered_;
    }
    /**
     * Returns whether this node was fully initialized with either server data or a complete overwrite by the client
     * @return {boolean}
     */
    CacheNode.prototype.isFullyInitialized = function () {
        return this.fullyInitialized_;
    };
    /**
     * Returns whether this node is potentially missing children due to a filter applied to the node
     * @return {boolean}
     */
    CacheNode.prototype.isFiltered = function () {
        return this.filtered_;
    };
    /**
     * @param {!Path} path
     * @return {boolean}
     */
    CacheNode.prototype.isCompleteForPath = function (path) {
        if (path.isEmpty()) {
            return this.isFullyInitialized() && !this.filtered_;
        }
        var childKey = path.getFront();
        return this.isCompleteForChild(childKey);
    };
    /**
     * @param {!string} key
     * @return {boolean}
     */
    CacheNode.prototype.isCompleteForChild = function (key) {
        return ((this.isFullyInitialized() && !this.filtered_) || this.node_.hasChild(key));
    };
    /**
     * @return {!Node}
     */
    CacheNode.prototype.getNode = function () {
        return this.node_;
    };
    return CacheNode;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Stores the data we have cached for a view.
 *
 * serverSnap is the cached server data, eventSnap is the cached event data (server data plus any local writes).
 *
 * @constructor
 */
var ViewCache = /** @class */ (function () {
    /**
     *
     * @param {!CacheNode} eventCache_
     * @param {!CacheNode} serverCache_
     */
    function ViewCache(eventCache_, serverCache_) {
        this.eventCache_ = eventCache_;
        this.serverCache_ = serverCache_;
    }
    /**
     * @param {!Node} eventSnap
     * @param {boolean} complete
     * @param {boolean} filtered
     * @return {!ViewCache}
     */
    ViewCache.prototype.updateEventSnap = function (eventSnap, complete, filtered) {
        return new ViewCache(new CacheNode(eventSnap, complete, filtered), this.serverCache_);
    };
    /**
     * @param {!Node} serverSnap
     * @param {boolean} complete
     * @param {boolean} filtered
     * @return {!ViewCache}
     */
    ViewCache.prototype.updateServerSnap = function (serverSnap, complete, filtered) {
        return new ViewCache(this.eventCache_, new CacheNode(serverSnap, complete, filtered));
    };
    /**
     * @return {!CacheNode}
     */
    ViewCache.prototype.getEventCache = function () {
        return this.eventCache_;
    };
    /**
     * @return {?Node}
     */
    ViewCache.prototype.getCompleteEventSnap = function () {
        return this.eventCache_.isFullyInitialized()
            ? this.eventCache_.getNode()
            : null;
    };
    /**
     * @return {!CacheNode}
     */
    ViewCache.prototype.getServerCache = function () {
        return this.serverCache_;
    };
    /**
     * @return {?Node}
     */
    ViewCache.prototype.getCompleteServerSnap = function () {
        return this.serverCache_.isFullyInitialized()
            ? this.serverCache_.getNode()
            : null;
    };
    /**
     * @const
     * @type {ViewCache}
     */
    ViewCache.Empty = new ViewCache(new CacheNode(ChildrenNode.EMPTY_NODE, 
    /*fullyInitialized=*/ false, 
    /*filtered=*/ false), new CacheNode(ChildrenNode.EMPTY_NODE, 
    /*fullyInitialized=*/ false, 
    /*filtered=*/ false));
    return ViewCache;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @constructor
 * @struct
 * @param {!string} type The event type
 * @param {!Node} snapshotNode The data
 * @param {string=} childName The name for this child, if it's a child event
 * @param {Node=} oldSnap Used for intermediate processing of child changed events
 * @param {string=} prevName The name for the previous child, if applicable
 */
var Change = /** @class */ (function () {
    function Change(type, snapshotNode, childName, oldSnap, prevName) {
        this.type = type;
        this.snapshotNode = snapshotNode;
        this.childName = childName;
        this.oldSnap = oldSnap;
        this.prevName = prevName;
    }
    /**
     * @param {!Node} snapshot
     * @return {!Change}
     */
    Change.valueChange = function (snapshot) {
        return new Change(Change.VALUE, snapshot);
    };
    /**
     * @param {string} childKey
     * @param {!Node} snapshot
     * @return {!Change}
     */
    Change.childAddedChange = function (childKey, snapshot) {
        return new Change(Change.CHILD_ADDED, snapshot, childKey);
    };
    /**
     * @param {string} childKey
     * @param {!Node} snapshot
     * @return {!Change}
     */
    Change.childRemovedChange = function (childKey, snapshot) {
        return new Change(Change.CHILD_REMOVED, snapshot, childKey);
    };
    /**
     * @param {string} childKey
     * @param {!Node} newSnapshot
     * @param {!Node} oldSnapshot
     * @return {!Change}
     */
    Change.childChangedChange = function (childKey, newSnapshot, oldSnapshot) {
        return new Change(Change.CHILD_CHANGED, newSnapshot, childKey, oldSnapshot);
    };
    /**
     * @param {string} childKey
     * @param {!Node} snapshot
     * @return {!Change}
     */
    Change.childMovedChange = function (childKey, snapshot) {
        return new Change(Change.CHILD_MOVED, snapshot, childKey);
    };
    //event types
    /** Event type for a child added */
    Change.CHILD_ADDED = 'child_added';
    /** Event type for a child removed */
    Change.CHILD_REMOVED = 'child_removed';
    /** Event type for a child changed */
    Change.CHILD_CHANGED = 'child_changed';
    /** Event type for a child moved */
    Change.CHILD_MOVED = 'child_moved';
    /** Event type for a value change */
    Change.VALUE = 'value';
    return Change;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Doesn't really filter nodes but applies an index to the node and keeps track of any changes
 *
 * @constructor
 * @implements {NodeFilter}
 * @param {!Index} index
 */
var IndexedFilter = /** @class */ (function () {
    function IndexedFilter(index_) {
        this.index_ = index_;
    }
    IndexedFilter.prototype.updateChild = function (snap, key, newChild, affectedPath, source, optChangeAccumulator) {
        util.assert(snap.isIndexed(this.index_), 'A node must be indexed if only a child is updated');
        var oldChild = snap.getImmediateChild(key);
        // Check if anything actually changed.
        if (oldChild.getChild(affectedPath).equals(newChild.getChild(affectedPath))) {
            // There's an edge case where a child can enter or leave the view because affectedPath was set to null.
            // In this case, affectedPath will appear null in both the old and new snapshots.  So we need
            // to avoid treating these cases as "nothing changed."
            if (oldChild.isEmpty() == newChild.isEmpty()) {
                // Nothing changed.
                // This assert should be valid, but it's expensive (can dominate perf testing) so don't actually do it.
                //assert(oldChild.equals(newChild), 'Old and new snapshots should be equal.');
                return snap;
            }
        }
        if (optChangeAccumulator != null) {
            if (newChild.isEmpty()) {
                if (snap.hasChild(key)) {
                    optChangeAccumulator.trackChildChange(Change.childRemovedChange(key, oldChild));
                }
                else {
                    util.assert(snap.isLeafNode(), 'A child remove without an old child only makes sense on a leaf node');
                }
            }
            else if (oldChild.isEmpty()) {
                optChangeAccumulator.trackChildChange(Change.childAddedChange(key, newChild));
            }
            else {
                optChangeAccumulator.trackChildChange(Change.childChangedChange(key, newChild, oldChild));
            }
        }
        if (snap.isLeafNode() && newChild.isEmpty()) {
            return snap;
        }
        else {
            // Make sure the node is indexed
            return snap.updateImmediateChild(key, newChild).withIndex(this.index_);
        }
    };
    /**
     * @inheritDoc
     */
    IndexedFilter.prototype.updateFullNode = function (oldSnap, newSnap, optChangeAccumulator) {
        if (optChangeAccumulator != null) {
            if (!oldSnap.isLeafNode()) {
                oldSnap.forEachChild(PRIORITY_INDEX, function (key, childNode) {
                    if (!newSnap.hasChild(key)) {
                        optChangeAccumulator.trackChildChange(Change.childRemovedChange(key, childNode));
                    }
                });
            }
            if (!newSnap.isLeafNode()) {
                newSnap.forEachChild(PRIORITY_INDEX, function (key, childNode) {
                    if (oldSnap.hasChild(key)) {
                        var oldChild = oldSnap.getImmediateChild(key);
                        if (!oldChild.equals(childNode)) {
                            optChangeAccumulator.trackChildChange(Change.childChangedChange(key, childNode, oldChild));
                        }
                    }
                    else {
                        optChangeAccumulator.trackChildChange(Change.childAddedChange(key, childNode));
                    }
                });
            }
        }
        return newSnap.withIndex(this.index_);
    };
    /**
     * @inheritDoc
     */
    IndexedFilter.prototype.updatePriority = function (oldSnap, newPriority) {
        if (oldSnap.isEmpty()) {
            return ChildrenNode.EMPTY_NODE;
        }
        else {
            return oldSnap.updatePriority(newPriority);
        }
    };
    /**
     * @inheritDoc
     */
    IndexedFilter.prototype.filtersNodes = function () {
        return false;
    };
    /**
     * @inheritDoc
     */
    IndexedFilter.prototype.getIndexedFilter = function () {
        return this;
    };
    /**
     * @inheritDoc
     */
    IndexedFilter.prototype.getIndex = function () {
        return this.index_;
    };
    return IndexedFilter;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ChildChangeAccumulator = /** @class */ (function () {
    function ChildChangeAccumulator() {
        this.changeMap = new Map();
    }
    ChildChangeAccumulator.prototype.trackChildChange = function (change) {
        var type = change.type;
        var childKey = change.childName;
        util.assert(type == Change.CHILD_ADDED ||
            type == Change.CHILD_CHANGED ||
            type == Change.CHILD_REMOVED, 'Only child changes supported for tracking');
        util.assert(childKey !== '.priority', 'Only non-priority child changes can be tracked.');
        var oldChange = this.changeMap.get(childKey);
        if (oldChange) {
            var oldType = oldChange.type;
            if (type == Change.CHILD_ADDED && oldType == Change.CHILD_REMOVED) {
                this.changeMap.set(childKey, Change.childChangedChange(childKey, change.snapshotNode, oldChange.snapshotNode));
            }
            else if (type == Change.CHILD_REMOVED &&
                oldType == Change.CHILD_ADDED) {
                this.changeMap.delete(childKey);
            }
            else if (type == Change.CHILD_REMOVED &&
                oldType == Change.CHILD_CHANGED) {
                this.changeMap.set(childKey, Change.childRemovedChange(childKey, oldChange.oldSnap));
            }
            else if (type == Change.CHILD_CHANGED &&
                oldType == Change.CHILD_ADDED) {
                this.changeMap.set(childKey, Change.childAddedChange(childKey, change.snapshotNode));
            }
            else if (type == Change.CHILD_CHANGED &&
                oldType == Change.CHILD_CHANGED) {
                this.changeMap.set(childKey, Change.childChangedChange(childKey, change.snapshotNode, oldChange.oldSnap));
            }
            else {
                throw util.assertionError('Illegal combination of changes: ' +
                    change +
                    ' occurred after ' +
                    oldChange);
            }
        }
        else {
            this.changeMap.set(childKey, change);
        }
    };
    ChildChangeAccumulator.prototype.getChanges = function () {
        return Array.from(this.changeMap.values());
    };
    return ChildChangeAccumulator;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An implementation of CompleteChildSource that never returns any additional children
 *
 * @private
 * @constructor
 * @implements CompleteChildSource
 */
var NoCompleteChildSource_ = /** @class */ (function () {
    function NoCompleteChildSource_() {
    }
    /**
     * @inheritDoc
     */
    NoCompleteChildSource_.prototype.getCompleteChild = function (childKey) {
        return null;
    };
    /**
     * @inheritDoc
     */
    NoCompleteChildSource_.prototype.getChildAfterChild = function (index, child, reverse) {
        return null;
    };
    return NoCompleteChildSource_;
}());
/**
 * Singleton instance.
 * @const
 * @type {!CompleteChildSource}
 */
var NO_COMPLETE_CHILD_SOURCE = new NoCompleteChildSource_();
/**
 * An implementation of CompleteChildSource that uses a WriteTree in addition to any other server data or
 * old event caches available to calculate complete children.
 *
 *
 * @implements CompleteChildSource
 */
var WriteTreeCompleteChildSource = /** @class */ (function () {
    /**
     * @param {!WriteTreeRef} writes_
     * @param {!ViewCache} viewCache_
     * @param {?Node} optCompleteServerCache_
     */
    function WriteTreeCompleteChildSource(writes_, viewCache_, optCompleteServerCache_) {
        if (optCompleteServerCache_ === void 0) { optCompleteServerCache_ = null; }
        this.writes_ = writes_;
        this.viewCache_ = viewCache_;
        this.optCompleteServerCache_ = optCompleteServerCache_;
    }
    /**
     * @inheritDoc
     */
    WriteTreeCompleteChildSource.prototype.getCompleteChild = function (childKey) {
        var node = this.viewCache_.getEventCache();
        if (node.isCompleteForChild(childKey)) {
            return node.getNode().getImmediateChild(childKey);
        }
        else {
            var serverNode = this.optCompleteServerCache_ != null
                ? new CacheNode(this.optCompleteServerCache_, true, false)
                : this.viewCache_.getServerCache();
            return this.writes_.calcCompleteChild(childKey, serverNode);
        }
    };
    /**
     * @inheritDoc
     */
    WriteTreeCompleteChildSource.prototype.getChildAfterChild = function (index, child, reverse) {
        var completeServerData = this.optCompleteServerCache_ != null
            ? this.optCompleteServerCache_
            : this.viewCache_.getCompleteServerSnap();
        var nodes = this.writes_.calcIndexedSlice(completeServerData, child, 1, reverse, index);
        if (nodes.length === 0) {
            return null;
        }
        else {
            return nodes[0];
        }
    };
    return WriteTreeCompleteChildSource;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @constructor
 * @struct
 */
var ProcessorResult = /** @class */ (function () {
    /**
     * @param {!ViewCache} viewCache
     * @param {!Array.<!Change>} changes
     */
    function ProcessorResult(viewCache, changes) {
        this.viewCache = viewCache;
        this.changes = changes;
    }
    return ProcessorResult;
}());
/**
 * @constructor
 */
var ViewProcessor = /** @class */ (function () {
    /**
     * @param {!NodeFilter} filter_
     */
    function ViewProcessor(filter_) {
        this.filter_ = filter_;
    }
    /**
     * @param {!ViewCache} viewCache
     */
    ViewProcessor.prototype.assertIndexed = function (viewCache) {
        util.assert(viewCache
            .getEventCache()
            .getNode()
            .isIndexed(this.filter_.getIndex()), 'Event snap not indexed');
        util.assert(viewCache
            .getServerCache()
            .getNode()
            .isIndexed(this.filter_.getIndex()), 'Server snap not indexed');
    };
    /**
     * @param {!ViewCache} oldViewCache
     * @param {!Operation} operation
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} completeCache
     * @return {!ProcessorResult}
     */
    ViewProcessor.prototype.applyOperation = function (oldViewCache, operation, writesCache, completeCache) {
        var accumulator = new ChildChangeAccumulator();
        var newViewCache, filterServerNode;
        if (operation.type === OperationType.OVERWRITE) {
            var overwrite = operation;
            if (overwrite.source.fromUser) {
                newViewCache = this.applyUserOverwrite_(oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, accumulator);
            }
            else {
                util.assert(overwrite.source.fromServer, 'Unknown source.');
                // We filter the node if it's a tagged update or the node has been previously filtered  and the
                // update is not at the root in which case it is ok (and necessary) to mark the node unfiltered
                // again
                filterServerNode =
                    overwrite.source.tagged ||
                        (oldViewCache.getServerCache().isFiltered() &&
                            !overwrite.path.isEmpty());
                newViewCache = this.applyServerOverwrite_(oldViewCache, overwrite.path, overwrite.snap, writesCache, completeCache, filterServerNode, accumulator);
            }
        }
        else if (operation.type === OperationType.MERGE) {
            var merge = operation;
            if (merge.source.fromUser) {
                newViewCache = this.applyUserMerge_(oldViewCache, merge.path, merge.children, writesCache, completeCache, accumulator);
            }
            else {
                util.assert(merge.source.fromServer, 'Unknown source.');
                // We filter the node if it's a tagged update or the node has been previously filtered
                filterServerNode =
                    merge.source.tagged || oldViewCache.getServerCache().isFiltered();
                newViewCache = this.applyServerMerge_(oldViewCache, merge.path, merge.children, writesCache, completeCache, filterServerNode, accumulator);
            }
        }
        else if (operation.type === OperationType.ACK_USER_WRITE) {
            var ackUserWrite = operation;
            if (!ackUserWrite.revert) {
                newViewCache = this.ackUserWrite_(oldViewCache, ackUserWrite.path, ackUserWrite.affectedTree, writesCache, completeCache, accumulator);
            }
            else {
                newViewCache = this.revertUserWrite_(oldViewCache, ackUserWrite.path, writesCache, completeCache, accumulator);
            }
        }
        else if (operation.type === OperationType.LISTEN_COMPLETE) {
            newViewCache = this.listenComplete_(oldViewCache, operation.path, writesCache, accumulator);
        }
        else {
            throw util.assertionError('Unknown operation type: ' + operation.type);
        }
        var changes = accumulator.getChanges();
        ViewProcessor.maybeAddValueEvent_(oldViewCache, newViewCache, changes);
        return new ProcessorResult(newViewCache, changes);
    };
    /**
     * @param {!ViewCache} oldViewCache
     * @param {!ViewCache} newViewCache
     * @param {!Array.<!Change>} accumulator
     * @private
     */
    ViewProcessor.maybeAddValueEvent_ = function (oldViewCache, newViewCache, accumulator) {
        var eventSnap = newViewCache.getEventCache();
        if (eventSnap.isFullyInitialized()) {
            var isLeafOrEmpty = eventSnap.getNode().isLeafNode() || eventSnap.getNode().isEmpty();
            var oldCompleteSnap = oldViewCache.getCompleteEventSnap();
            if (accumulator.length > 0 ||
                !oldViewCache.getEventCache().isFullyInitialized() ||
                (isLeafOrEmpty &&
                    !eventSnap.getNode().equals(/** @type {!Node} */ oldCompleteSnap)) ||
                !eventSnap
                    .getNode()
                    .getPriority()
                    .equals(oldCompleteSnap.getPriority())) {
                accumulator.push(Change.valueChange(
                /** @type {!Node} */ newViewCache.getCompleteEventSnap()));
            }
        }
    };
    /**
     * @param {!ViewCache} viewCache
     * @param {!Path} changePath
     * @param {!WriteTreeRef} writesCache
     * @param {!CompleteChildSource} source
     * @param {!ChildChangeAccumulator} accumulator
     * @return {!ViewCache}
     * @private
     */
    ViewProcessor.prototype.generateEventCacheAfterServerEvent_ = function (viewCache, changePath, writesCache, source, accumulator) {
        var oldEventSnap = viewCache.getEventCache();
        if (writesCache.shadowingWrite(changePath) != null) {
            // we have a shadowing write, ignore changes
            return viewCache;
        }
        else {
            var newEventCache = void 0, serverNode = void 0;
            if (changePath.isEmpty()) {
                // TODO: figure out how this plays with "sliding ack windows"
                util.assert(viewCache.getServerCache().isFullyInitialized(), 'If change path is empty, we must have complete server data');
                if (viewCache.getServerCache().isFiltered()) {
                    // We need to special case this, because we need to only apply writes to complete children, or
                    // we might end up raising events for incomplete children. If the server data is filtered deep
                    // writes cannot be guaranteed to be complete
                    var serverCache = viewCache.getCompleteServerSnap();
                    var completeChildren = serverCache instanceof ChildrenNode
                        ? serverCache
                        : ChildrenNode.EMPTY_NODE;
                    var completeEventChildren = writesCache.calcCompleteEventChildren(completeChildren);
                    newEventCache = this.filter_.updateFullNode(viewCache.getEventCache().getNode(), completeEventChildren, accumulator);
                }
                else {
                    var completeNode = writesCache.calcCompleteEventCache(viewCache.getCompleteServerSnap());
                    newEventCache = this.filter_.updateFullNode(viewCache.getEventCache().getNode(), completeNode, accumulator);
                }
            }
            else {
                var childKey = changePath.getFront();
                if (childKey == '.priority') {
                    util.assert(changePath.getLength() == 1, "Can't have a priority with additional path components");
                    var oldEventNode = oldEventSnap.getNode();
                    serverNode = viewCache.getServerCache().getNode();
                    // we might have overwrites for this priority
                    var updatedPriority = writesCache.calcEventCacheAfterServerOverwrite(changePath, oldEventNode, serverNode);
                    if (updatedPriority != null) {
                        newEventCache = this.filter_.updatePriority(oldEventNode, updatedPriority);
                    }
                    else {
                        // priority didn't change, keep old node
                        newEventCache = oldEventSnap.getNode();
                    }
                }
                else {
                    var childChangePath = changePath.popFront();
                    // update child
                    var newEventChild = void 0;
                    if (oldEventSnap.isCompleteForChild(childKey)) {
                        serverNode = viewCache.getServerCache().getNode();
                        var eventChildUpdate = writesCache.calcEventCacheAfterServerOverwrite(changePath, oldEventSnap.getNode(), serverNode);
                        if (eventChildUpdate != null) {
                            newEventChild = oldEventSnap
                                .getNode()
                                .getImmediateChild(childKey)
                                .updateChild(childChangePath, eventChildUpdate);
                        }
                        else {
                            // Nothing changed, just keep the old child
                            newEventChild = oldEventSnap
                                .getNode()
                                .getImmediateChild(childKey);
                        }
                    }
                    else {
                        newEventChild = writesCache.calcCompleteChild(childKey, viewCache.getServerCache());
                    }
                    if (newEventChild != null) {
                        newEventCache = this.filter_.updateChild(oldEventSnap.getNode(), childKey, newEventChild, childChangePath, source, accumulator);
                    }
                    else {
                        // no complete child available or no change
                        newEventCache = oldEventSnap.getNode();
                    }
                }
            }
            return viewCache.updateEventSnap(newEventCache, oldEventSnap.isFullyInitialized() || changePath.isEmpty(), this.filter_.filtersNodes());
        }
    };
    /**
     * @param {!ViewCache} oldViewCache
     * @param {!Path} changePath
     * @param {!Node} changedSnap
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} completeCache
     * @param {boolean} filterServerNode
     * @param {!ChildChangeAccumulator} accumulator
     * @return {!ViewCache}
     * @private
     */
    ViewProcessor.prototype.applyServerOverwrite_ = function (oldViewCache, changePath, changedSnap, writesCache, completeCache, filterServerNode, accumulator) {
        var oldServerSnap = oldViewCache.getServerCache();
        var newServerCache;
        var serverFilter = filterServerNode
            ? this.filter_
            : this.filter_.getIndexedFilter();
        if (changePath.isEmpty()) {
            newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), changedSnap, null);
        }
        else if (serverFilter.filtersNodes() && !oldServerSnap.isFiltered()) {
            // we want to filter the server node, but we didn't filter the server node yet, so simulate a full update
            var newServerNode = oldServerSnap
                .getNode()
                .updateChild(changePath, changedSnap);
            newServerCache = serverFilter.updateFullNode(oldServerSnap.getNode(), newServerNode, null);
        }
        else {
            var childKey = changePath.getFront();
            if (!oldServerSnap.isCompleteForPath(changePath) &&
                changePath.getLength() > 1) {
                // We don't update incomplete nodes with updates intended for other listeners
                return oldViewCache;
            }
            var childChangePath = changePath.popFront();
            var childNode = oldServerSnap.getNode().getImmediateChild(childKey);
            var newChildNode = childNode.updateChild(childChangePath, changedSnap);
            if (childKey == '.priority') {
                newServerCache = serverFilter.updatePriority(oldServerSnap.getNode(), newChildNode);
            }
            else {
                newServerCache = serverFilter.updateChild(oldServerSnap.getNode(), childKey, newChildNode, childChangePath, NO_COMPLETE_CHILD_SOURCE, null);
            }
        }
        var newViewCache = oldViewCache.updateServerSnap(newServerCache, oldServerSnap.isFullyInitialized() || changePath.isEmpty(), serverFilter.filtersNodes());
        var source = new WriteTreeCompleteChildSource(writesCache, newViewCache, completeCache);
        return this.generateEventCacheAfterServerEvent_(newViewCache, changePath, writesCache, source, accumulator);
    };
    /**
     * @param {!ViewCache} oldViewCache
     * @param {!Path} changePath
     * @param {!Node} changedSnap
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} completeCache
     * @param {!ChildChangeAccumulator} accumulator
     * @return {!ViewCache}
     * @private
     */
    ViewProcessor.prototype.applyUserOverwrite_ = function (oldViewCache, changePath, changedSnap, writesCache, completeCache, accumulator) {
        var oldEventSnap = oldViewCache.getEventCache();
        var newViewCache, newEventCache;
        var source = new WriteTreeCompleteChildSource(writesCache, oldViewCache, completeCache);
        if (changePath.isEmpty()) {
            newEventCache = this.filter_.updateFullNode(oldViewCache.getEventCache().getNode(), changedSnap, accumulator);
            newViewCache = oldViewCache.updateEventSnap(newEventCache, true, this.filter_.filtersNodes());
        }
        else {
            var childKey = changePath.getFront();
            if (childKey === '.priority') {
                newEventCache = this.filter_.updatePriority(oldViewCache.getEventCache().getNode(), changedSnap);
                newViewCache = oldViewCache.updateEventSnap(newEventCache, oldEventSnap.isFullyInitialized(), oldEventSnap.isFiltered());
            }
            else {
                var childChangePath = changePath.popFront();
                var oldChild = oldEventSnap.getNode().getImmediateChild(childKey);
                var newChild = void 0;
                if (childChangePath.isEmpty()) {
                    // Child overwrite, we can replace the child
                    newChild = changedSnap;
                }
                else {
                    var childNode = source.getCompleteChild(childKey);
                    if (childNode != null) {
                        if (childChangePath.getBack() === '.priority' &&
                            childNode.getChild(childChangePath.parent()).isEmpty()) {
                            // This is a priority update on an empty node. If this node exists on the server, the
                            // server will send down the priority in the update, so ignore for now
                            newChild = childNode;
                        }
                        else {
                            newChild = childNode.updateChild(childChangePath, changedSnap);
                        }
                    }
                    else {
                        // There is no complete child node available
                        newChild = ChildrenNode.EMPTY_NODE;
                    }
                }
                if (!oldChild.equals(newChild)) {
                    var newEventSnap = this.filter_.updateChild(oldEventSnap.getNode(), childKey, newChild, childChangePath, source, accumulator);
                    newViewCache = oldViewCache.updateEventSnap(newEventSnap, oldEventSnap.isFullyInitialized(), this.filter_.filtersNodes());
                }
                else {
                    newViewCache = oldViewCache;
                }
            }
        }
        return newViewCache;
    };
    /**
     * @param {!ViewCache} viewCache
     * @param {string} childKey
     * @return {boolean}
     * @private
     */
    ViewProcessor.cacheHasChild_ = function (viewCache, childKey) {
        return viewCache.getEventCache().isCompleteForChild(childKey);
    };
    /**
     * @param {!ViewCache} viewCache
     * @param {!Path} path
     * @param {ImmutableTree.<!Node>} changedChildren
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} serverCache
     * @param {!ChildChangeAccumulator} accumulator
     * @return {!ViewCache}
     * @private
     */
    ViewProcessor.prototype.applyUserMerge_ = function (viewCache, path, changedChildren, writesCache, serverCache, accumulator) {
        var _this = this;
        // HACK: In the case of a limit query, there may be some changes that bump things out of the
        // window leaving room for new items.  It's important we process these changes first, so we
        // iterate the changes twice, first processing any that affect items currently in view.
        // TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
        // and event snap.  I'm not sure if this will result in edge cases when a child is in one but
        // not the other.
        var curViewCache = viewCache;
        changedChildren.foreach(function (relativePath, childNode) {
            var writePath = path.child(relativePath);
            if (ViewProcessor.cacheHasChild_(viewCache, writePath.getFront())) {
                curViewCache = _this.applyUserOverwrite_(curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
            }
        });
        changedChildren.foreach(function (relativePath, childNode) {
            var writePath = path.child(relativePath);
            if (!ViewProcessor.cacheHasChild_(viewCache, writePath.getFront())) {
                curViewCache = _this.applyUserOverwrite_(curViewCache, writePath, childNode, writesCache, serverCache, accumulator);
            }
        });
        return curViewCache;
    };
    /**
     * @param {!Node} node
     * @param {ImmutableTree.<!Node>} merge
     * @return {!Node}
     * @private
     */
    ViewProcessor.prototype.applyMerge_ = function (node, merge) {
        merge.foreach(function (relativePath, childNode) {
            node = node.updateChild(relativePath, childNode);
        });
        return node;
    };
    /**
     * @param {!ViewCache} viewCache
     * @param {!Path} path
     * @param {!ImmutableTree.<!Node>} changedChildren
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} serverCache
     * @param {boolean} filterServerNode
     * @param {!ChildChangeAccumulator} accumulator
     * @return {!ViewCache}
     * @private
     */
    ViewProcessor.prototype.applyServerMerge_ = function (viewCache, path, changedChildren, writesCache, serverCache, filterServerNode, accumulator) {
        var _this = this;
        // If we don't have a cache yet, this merge was intended for a previously listen in the same location. Ignore it and
        // wait for the complete data update coming soon.
        if (viewCache
            .getServerCache()
            .getNode()
            .isEmpty() &&
            !viewCache.getServerCache().isFullyInitialized()) {
            return viewCache;
        }
        // HACK: In the case of a limit query, there may be some changes that bump things out of the
        // window leaving room for new items.  It's important we process these changes first, so we
        // iterate the changes twice, first processing any that affect items currently in view.
        // TODO: I consider an item "in view" if cacheHasChild is true, which checks both the server
        // and event snap.  I'm not sure if this will result in edge cases when a child is in one but
        // not the other.
        var curViewCache = viewCache;
        var viewMergeTree;
        if (path.isEmpty()) {
            viewMergeTree = changedChildren;
        }
        else {
            viewMergeTree = ImmutableTree.Empty.setTree(path, changedChildren);
        }
        var serverNode = viewCache.getServerCache().getNode();
        viewMergeTree.children.inorderTraversal(function (childKey, childTree) {
            if (serverNode.hasChild(childKey)) {
                var serverChild = viewCache
                    .getServerCache()
                    .getNode()
                    .getImmediateChild(childKey);
                var newChild = _this.applyMerge_(serverChild, childTree);
                curViewCache = _this.applyServerOverwrite_(curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
            }
        });
        viewMergeTree.children.inorderTraversal(function (childKey, childMergeTree) {
            var isUnknownDeepMerge = !viewCache.getServerCache().isCompleteForChild(childKey) &&
                childMergeTree.value == null;
            if (!serverNode.hasChild(childKey) && !isUnknownDeepMerge) {
                var serverChild = viewCache
                    .getServerCache()
                    .getNode()
                    .getImmediateChild(childKey);
                var newChild = _this.applyMerge_(serverChild, childMergeTree);
                curViewCache = _this.applyServerOverwrite_(curViewCache, new Path(childKey), newChild, writesCache, serverCache, filterServerNode, accumulator);
            }
        });
        return curViewCache;
    };
    /**
     * @param {!ViewCache} viewCache
     * @param {!Path} ackPath
     * @param {!ImmutableTree<!boolean>} affectedTree
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} completeCache
     * @param {!ChildChangeAccumulator} accumulator
     * @return {!ViewCache}
     * @private
     */
    ViewProcessor.prototype.ackUserWrite_ = function (viewCache, ackPath, affectedTree, writesCache, completeCache, accumulator) {
        if (writesCache.shadowingWrite(ackPath) != null) {
            return viewCache;
        }
        // Only filter server node if it is currently filtered
        var filterServerNode = viewCache.getServerCache().isFiltered();
        // Essentially we'll just get our existing server cache for the affected paths and re-apply it as a server update
        // now that it won't be shadowed.
        var serverCache = viewCache.getServerCache();
        if (affectedTree.value != null) {
            // This is an overwrite.
            if ((ackPath.isEmpty() && serverCache.isFullyInitialized()) ||
                serverCache.isCompleteForPath(ackPath)) {
                return this.applyServerOverwrite_(viewCache, ackPath, serverCache.getNode().getChild(ackPath), writesCache, completeCache, filterServerNode, accumulator);
            }
            else if (ackPath.isEmpty()) {
                // This is a goofy edge case where we are acking data at this location but don't have full data.  We
                // should just re-apply whatever we have in our cache as a merge.
                var changedChildren_1 = ImmutableTree.Empty;
                serverCache.getNode().forEachChild(KEY_INDEX, function (name, node) {
                    changedChildren_1 = changedChildren_1.set(new Path(name), node);
                });
                return this.applyServerMerge_(viewCache, ackPath, changedChildren_1, writesCache, completeCache, filterServerNode, accumulator);
            }
            else {
                return viewCache;
            }
        }
        else {
            // This is a merge.
            var changedChildren_2 = ImmutableTree.Empty;
            affectedTree.foreach(function (mergePath, value) {
                var serverCachePath = ackPath.child(mergePath);
                if (serverCache.isCompleteForPath(serverCachePath)) {
                    changedChildren_2 = changedChildren_2.set(mergePath, serverCache.getNode().getChild(serverCachePath));
                }
            });
            return this.applyServerMerge_(viewCache, ackPath, changedChildren_2, writesCache, completeCache, filterServerNode, accumulator);
        }
    };
    /**
     * @param {!ViewCache} viewCache
     * @param {!Path} path
     * @param {!WriteTreeRef} writesCache
     * @param {!ChildChangeAccumulator} accumulator
     * @return {!ViewCache}
     * @private
     */
    ViewProcessor.prototype.listenComplete_ = function (viewCache, path, writesCache, accumulator) {
        var oldServerNode = viewCache.getServerCache();
        var newViewCache = viewCache.updateServerSnap(oldServerNode.getNode(), oldServerNode.isFullyInitialized() || path.isEmpty(), oldServerNode.isFiltered());
        return this.generateEventCacheAfterServerEvent_(newViewCache, path, writesCache, NO_COMPLETE_CHILD_SOURCE, accumulator);
    };
    /**
     * @param {!ViewCache} viewCache
     * @param {!Path} path
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} completeServerCache
     * @param {!ChildChangeAccumulator} accumulator
     * @return {!ViewCache}
     * @private
     */
    ViewProcessor.prototype.revertUserWrite_ = function (viewCache, path, writesCache, completeServerCache, accumulator) {
        var complete;
        if (writesCache.shadowingWrite(path) != null) {
            return viewCache;
        }
        else {
            var source = new WriteTreeCompleteChildSource(writesCache, viewCache, completeServerCache);
            var oldEventCache = viewCache.getEventCache().getNode();
            var newEventCache = void 0;
            if (path.isEmpty() || path.getFront() === '.priority') {
                var newNode = void 0;
                if (viewCache.getServerCache().isFullyInitialized()) {
                    newNode = writesCache.calcCompleteEventCache(viewCache.getCompleteServerSnap());
                }
                else {
                    var serverChildren = viewCache.getServerCache().getNode();
                    util.assert(serverChildren instanceof ChildrenNode, 'serverChildren would be complete if leaf node');
                    newNode = writesCache.calcCompleteEventChildren(serverChildren);
                }
                newNode = newNode;
                newEventCache = this.filter_.updateFullNode(oldEventCache, newNode, accumulator);
            }
            else {
                var childKey = path.getFront();
                var newChild = writesCache.calcCompleteChild(childKey, viewCache.getServerCache());
                if (newChild == null &&
                    viewCache.getServerCache().isCompleteForChild(childKey)) {
                    newChild = oldEventCache.getImmediateChild(childKey);
                }
                if (newChild != null) {
                    newEventCache = this.filter_.updateChild(oldEventCache, childKey, newChild, path.popFront(), source, accumulator);
                }
                else if (viewCache
                    .getEventCache()
                    .getNode()
                    .hasChild(childKey)) {
                    // No complete child available, delete the existing one, if any
                    newEventCache = this.filter_.updateChild(oldEventCache, childKey, ChildrenNode.EMPTY_NODE, path.popFront(), source, accumulator);
                }
                else {
                    newEventCache = oldEventCache;
                }
                if (newEventCache.isEmpty() &&
                    viewCache.getServerCache().isFullyInitialized()) {
                    // We might have reverted all child writes. Maybe the old event was a leaf node
                    complete = writesCache.calcCompleteEventCache(viewCache.getCompleteServerSnap());
                    if (complete.isLeafNode()) {
                        newEventCache = this.filter_.updateFullNode(newEventCache, complete, accumulator);
                    }
                }
            }
            complete =
                viewCache.getServerCache().isFullyInitialized() ||
                    writesCache.shadowingWrite(Path.Empty) != null;
            return viewCache.updateEventSnap(newEventCache, complete, this.filter_.filtersNodes());
        }
    };
    return ViewProcessor;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An EventGenerator is used to convert "raw" changes (Change) as computed by the
 * CacheDiffer into actual events (Event) that can be raised.  See generateEventsForChanges()
 * for details.
 *
 * @constructor
 */
var EventGenerator = /** @class */ (function () {
    /**
     *
     * @param {!Query} query_
     */
    function EventGenerator(query_) {
        this.query_ = query_;
        /**
         * @private
         * @type {!Index}
         */
        this.index_ = this.query_.getQueryParams().getIndex();
    }
    /**
     * Given a set of raw changes (no moved events and prevName not specified yet), and a set of
     * EventRegistrations that should be notified of these changes, generate the actual events to be raised.
     *
     * Notes:
     *  - child_moved events will be synthesized at this time for any child_changed events that affect
     *    our index.
     *  - prevName will be calculated based on the index ordering.
     *
     * @param {!Array.<!Change>} changes
     * @param {!Node} eventCache
     * @param {!Array.<!EventRegistration>} eventRegistrations
     * @return {!Array.<!Event>}
     */
    EventGenerator.prototype.generateEventsForChanges = function (changes, eventCache, eventRegistrations) {
        var _this = this;
        var events = [];
        var moves = [];
        changes.forEach(function (change) {
            if (change.type === Change.CHILD_CHANGED &&
                _this.index_.indexedValueChanged(change.oldSnap, change.snapshotNode)) {
                moves.push(Change.childMovedChange(change.childName, change.snapshotNode));
            }
        });
        this.generateEventsForType_(events, Change.CHILD_REMOVED, changes, eventRegistrations, eventCache);
        this.generateEventsForType_(events, Change.CHILD_ADDED, changes, eventRegistrations, eventCache);
        this.generateEventsForType_(events, Change.CHILD_MOVED, moves, eventRegistrations, eventCache);
        this.generateEventsForType_(events, Change.CHILD_CHANGED, changes, eventRegistrations, eventCache);
        this.generateEventsForType_(events, Change.VALUE, changes, eventRegistrations, eventCache);
        return events;
    };
    /**
     * Given changes of a single change type, generate the corresponding events.
     *
     * @param {!Array.<!Event>} events
     * @param {!string} eventType
     * @param {!Array.<!Change>} changes
     * @param {!Array.<!EventRegistration>} registrations
     * @param {!Node} eventCache
     * @private
     */
    EventGenerator.prototype.generateEventsForType_ = function (events, eventType, changes, registrations, eventCache) {
        var _this = this;
        var filteredChanges = changes.filter(function (change) { return change.type === eventType; });
        filteredChanges.sort(this.compareChanges_.bind(this));
        filteredChanges.forEach(function (change) {
            var materializedChange = _this.materializeSingleChange_(change, eventCache);
            registrations.forEach(function (registration) {
                if (registration.respondsTo(change.type)) {
                    events.push(registration.createEvent(materializedChange, _this.query_));
                }
            });
        });
    };
    /**
     * @param {!Change} change
     * @param {!Node} eventCache
     * @return {!Change}
     * @private
     */
    EventGenerator.prototype.materializeSingleChange_ = function (change, eventCache) {
        if (change.type === 'value' || change.type === 'child_removed') {
            return change;
        }
        else {
            change.prevName = eventCache.getPredecessorChildName(
            /** @type {!string} */
            change.childName, change.snapshotNode, this.index_);
            return change;
        }
    };
    /**
     * @param {!Change} a
     * @param {!Change} b
     * @return {number}
     * @private
     */
    EventGenerator.prototype.compareChanges_ = function (a, b) {
        if (a.childName == null || b.childName == null) {
            throw util.assertionError('Should only compare child_ events.');
        }
        var aWrapped = new NamedNode(a.childName, a.snapshotNode);
        var bWrapped = new NamedNode(b.childName, b.snapshotNode);
        return this.index_.compare(aWrapped, bWrapped);
    };
    return EventGenerator;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A view represents a specific location and query that has 1 or more event registrations.
 *
 * It does several things:
 *  - Maintains the list of event registrations for this location/query.
 *  - Maintains a cache of the data visible for this location/query.
 *  - Applies new operations (via applyOperation), updates the cache, and based on the event
 *    registrations returns the set of events to be raised.
 * @constructor
 */
var View = /** @class */ (function () {
    /**
     *
     * @param {!Query} query_
     * @param {!ViewCache} initialViewCache
     */
    function View(query_, initialViewCache) {
        this.query_ = query_;
        this.eventRegistrations_ = [];
        var params = this.query_.getQueryParams();
        var indexFilter = new IndexedFilter(params.getIndex());
        var filter = params.getNodeFilter();
        /**
         * @type {ViewProcessor}
         * @private
         */
        this.processor_ = new ViewProcessor(filter);
        var initialServerCache = initialViewCache.getServerCache();
        var initialEventCache = initialViewCache.getEventCache();
        // Don't filter server node with other filter than index, wait for tagged listen
        var serverSnap = indexFilter.updateFullNode(ChildrenNode.EMPTY_NODE, initialServerCache.getNode(), null);
        var eventSnap = filter.updateFullNode(ChildrenNode.EMPTY_NODE, initialEventCache.getNode(), null);
        var newServerCache = new CacheNode(serverSnap, initialServerCache.isFullyInitialized(), indexFilter.filtersNodes());
        var newEventCache = new CacheNode(eventSnap, initialEventCache.isFullyInitialized(), filter.filtersNodes());
        /**
         * @type {!ViewCache}
         * @private
         */
        this.viewCache_ = new ViewCache(newEventCache, newServerCache);
        /**
         * @type {!EventGenerator}
         * @private
         */
        this.eventGenerator_ = new EventGenerator(this.query_);
    }
    /**
     * @return {!Query}
     */
    View.prototype.getQuery = function () {
        return this.query_;
    };
    /**
     * @return {?Node}
     */
    View.prototype.getServerCache = function () {
        return this.viewCache_.getServerCache().getNode();
    };
    /**
     * @param {!Path} path
     * @return {?Node}
     */
    View.prototype.getCompleteServerCache = function (path) {
        var cache = this.viewCache_.getCompleteServerSnap();
        if (cache) {
            // If this isn't a "loadsAllData" view, then cache isn't actually a complete cache and
            // we need to see if it contains the child we're interested in.
            if (this.query_.getQueryParams().loadsAllData() ||
                (!path.isEmpty() && !cache.getImmediateChild(path.getFront()).isEmpty())) {
                return cache.getChild(path);
            }
        }
        return null;
    };
    /**
     * @return {boolean}
     */
    View.prototype.isEmpty = function () {
        return this.eventRegistrations_.length === 0;
    };
    /**
     * @param {!EventRegistration} eventRegistration
     */
    View.prototype.addEventRegistration = function (eventRegistration) {
        this.eventRegistrations_.push(eventRegistration);
    };
    /**
     * @param {?EventRegistration} eventRegistration If null, remove all callbacks.
     * @param {Error=} cancelError If a cancelError is provided, appropriate cancel events will be returned.
     * @return {!Array.<!Event>} Cancel events, if cancelError was provided.
     */
    View.prototype.removeEventRegistration = function (eventRegistration, cancelError) {
        var cancelEvents = [];
        if (cancelError) {
            util.assert(eventRegistration == null, 'A cancel should cancel all event registrations.');
            var path_1 = this.query_.path;
            this.eventRegistrations_.forEach(function (registration) {
                cancelError /** @type {!Error} */ = cancelError;
                var maybeEvent = registration.createCancelEvent(cancelError, path_1);
                if (maybeEvent) {
                    cancelEvents.push(maybeEvent);
                }
            });
        }
        if (eventRegistration) {
            var remaining = [];
            for (var i = 0; i < this.eventRegistrations_.length; ++i) {
                var existing = this.eventRegistrations_[i];
                if (!existing.matches(eventRegistration)) {
                    remaining.push(existing);
                }
                else if (eventRegistration.hasAnyCallback()) {
                    // We're removing just this one
                    remaining = remaining.concat(this.eventRegistrations_.slice(i + 1));
                    break;
                }
            }
            this.eventRegistrations_ = remaining;
        }
        else {
            this.eventRegistrations_ = [];
        }
        return cancelEvents;
    };
    /**
     * Applies the given Operation, updates our cache, and returns the appropriate events.
     *
     * @param {!Operation} operation
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} completeServerCache
     * @return {!Array.<!Event>}
     */
    View.prototype.applyOperation = function (operation, writesCache, completeServerCache) {
        if (operation.type === OperationType.MERGE &&
            operation.source.queryId !== null) {
            util.assert(this.viewCache_.getCompleteServerSnap(), 'We should always have a full cache before handling merges');
            util.assert(this.viewCache_.getCompleteEventSnap(), 'Missing event cache, even though we have a server cache');
        }
        var oldViewCache = this.viewCache_;
        var result = this.processor_.applyOperation(oldViewCache, operation, writesCache, completeServerCache);
        this.processor_.assertIndexed(result.viewCache);
        util.assert(result.viewCache.getServerCache().isFullyInitialized() ||
            !oldViewCache.getServerCache().isFullyInitialized(), 'Once a server snap is complete, it should never go back');
        this.viewCache_ = result.viewCache;
        return this.generateEventsForChanges_(result.changes, result.viewCache.getEventCache().getNode(), null);
    };
    /**
     * @param {!EventRegistration} registration
     * @return {!Array.<!Event>}
     */
    View.prototype.getInitialEvents = function (registration) {
        var eventSnap = this.viewCache_.getEventCache();
        var initialChanges = [];
        if (!eventSnap.getNode().isLeafNode()) {
            var eventNode = eventSnap.getNode();
            eventNode.forEachChild(PRIORITY_INDEX, function (key, childNode) {
                initialChanges.push(Change.childAddedChange(key, childNode));
            });
        }
        if (eventSnap.isFullyInitialized()) {
            initialChanges.push(Change.valueChange(eventSnap.getNode()));
        }
        return this.generateEventsForChanges_(initialChanges, eventSnap.getNode(), registration);
    };
    /**
     * @private
     * @param {!Array.<!Change>} changes
     * @param {!Node} eventCache
     * @param {EventRegistration=} eventRegistration
     * @return {!Array.<!Event>}
     */
    View.prototype.generateEventsForChanges_ = function (changes, eventCache, eventRegistration) {
        var registrations = eventRegistration
            ? [eventRegistration]
            : this.eventRegistrations_;
        return this.eventGenerator_.generateEventsForChanges(changes, eventCache, registrations);
    };
    return View;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var __referenceConstructor$1;
/**
 * SyncPoint represents a single location in a SyncTree with 1 or more event registrations, meaning we need to
 * maintain 1 or more Views at this location to cache server data and raise appropriate events for server changes
 * and user writes (set, transaction, update).
 *
 * It's responsible for:
 *  - Maintaining the set of 1 or more views necessary at this location (a SyncPoint with 0 views should be removed).
 *  - Proxying user / server operations to the views as appropriate (i.e. applyServerOverwrite,
 *    applyUserOverwrite, etc.)
 */
var SyncPoint = /** @class */ (function () {
    function SyncPoint() {
        /**
         * The Views being tracked at this location in the tree, stored as a map where the key is a
         * queryId and the value is the View for that query.
         *
         * NOTE: This list will be quite small (usually 1, but perhaps 2 or 3; any more is an odd use case).
         */
        this.views = new Map();
    }
    Object.defineProperty(SyncPoint, "__referenceConstructor", {
        get: function () {
            util.assert(__referenceConstructor$1, 'Reference.ts has not been loaded');
            return __referenceConstructor$1;
        },
        set: function (val) {
            util.assert(!__referenceConstructor$1, '__referenceConstructor has already been defined');
            __referenceConstructor$1 = val;
        },
        enumerable: true,
        configurable: true
    });
    SyncPoint.prototype.isEmpty = function () {
        return this.views.size === 0;
    };
    SyncPoint.prototype.applyOperation = function (operation, writesCache, optCompleteServerCache) {
        var e_1, _a;
        var queryId = operation.source.queryId;
        if (queryId !== null) {
            var view = this.views.get(queryId);
            util.assert(view != null, 'SyncTree gave us an op for an invalid query.');
            return view.applyOperation(operation, writesCache, optCompleteServerCache);
        }
        else {
            var events = [];
            try {
                for (var _b = tslib_1.__values(this.views.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var view = _c.value;
                    events = events.concat(view.applyOperation(operation, writesCache, optCompleteServerCache));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return events;
        }
    };
    /**
     * Add an event callback for the specified query.
     *
     * @param {!Query} query
     * @param {!EventRegistration} eventRegistration
     * @param {!WriteTreeRef} writesCache
     * @param {?Node} serverCache Complete server cache, if we have it.
     * @param {boolean} serverCacheComplete
     * @return {!Array.<!Event>} Events to raise.
     */
    SyncPoint.prototype.addEventRegistration = function (query, eventRegistration, writesCache, serverCache, serverCacheComplete) {
        var queryId = query.queryIdentifier();
        var view = this.views.get(queryId);
        if (!view) {
            // TODO: make writesCache take flag for complete server node
            var eventCache = writesCache.calcCompleteEventCache(serverCacheComplete ? serverCache : null);
            var eventCacheComplete = false;
            if (eventCache) {
                eventCacheComplete = true;
            }
            else if (serverCache instanceof ChildrenNode) {
                eventCache = writesCache.calcCompleteEventChildren(serverCache);
                eventCacheComplete = false;
            }
            else {
                eventCache = ChildrenNode.EMPTY_NODE;
                eventCacheComplete = false;
            }
            var viewCache = new ViewCache(new CacheNode(
            /** @type {!Node} */ eventCache, eventCacheComplete, false), new CacheNode(
            /** @type {!Node} */ serverCache, serverCacheComplete, false));
            view = new View(query, viewCache);
            this.views.set(queryId, view);
        }
        // This is guaranteed to exist now, we just created anything that was missing
        view.addEventRegistration(eventRegistration);
        return view.getInitialEvents(eventRegistration);
    };
    /**
     * Remove event callback(s).  Return cancelEvents if a cancelError is specified.
     *
     * If query is the default query, we'll check all views for the specified eventRegistration.
     * If eventRegistration is null, we'll remove all callbacks for the specified view(s).
     *
     * @param {!Query} query
     * @param {?EventRegistration} eventRegistration If null, remove all callbacks.
     * @param {Error=} cancelError If a cancelError is provided, appropriate cancel events will be returned.
     * @return {{removed:!Array.<!Query>, events:!Array.<!Event>}} removed queries and any cancel events
     */
    SyncPoint.prototype.removeEventRegistration = function (query, eventRegistration, cancelError) {
        var e_2, _a;
        var queryId = query.queryIdentifier();
        var removed = [];
        var cancelEvents = [];
        var hadCompleteView = this.hasCompleteView();
        if (queryId === 'default') {
            try {
                // When you do ref.off(...), we search all views for the registration to remove.
                for (var _b = tslib_1.__values(this.views.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var _d = tslib_1.__read(_c.value, 2), viewQueryId = _d[0], view = _d[1];
                    cancelEvents = cancelEvents.concat(view.removeEventRegistration(eventRegistration, cancelError));
                    if (view.isEmpty()) {
                        this.views.delete(viewQueryId);
                        // We'll deal with complete views later.
                        if (!view
                            .getQuery()
                            .getQueryParams()
                            .loadsAllData()) {
                            removed.push(view.getQuery());
                        }
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        else {
            // remove the callback from the specific view.
            var view = this.views.get(queryId);
            if (view) {
                cancelEvents = cancelEvents.concat(view.removeEventRegistration(eventRegistration, cancelError));
                if (view.isEmpty()) {
                    this.views.delete(queryId);
                    // We'll deal with complete views later.
                    if (!view
                        .getQuery()
                        .getQueryParams()
                        .loadsAllData()) {
                        removed.push(view.getQuery());
                    }
                }
            }
        }
        if (hadCompleteView && !this.hasCompleteView()) {
            // We removed our last complete view.
            removed.push(new SyncPoint.__referenceConstructor(query.repo, query.path));
        }
        return { removed: removed, events: cancelEvents };
    };
    SyncPoint.prototype.getQueryViews = function () {
        var e_3, _a;
        var result = [];
        try {
            for (var _b = tslib_1.__values(this.views.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var view = _c.value;
                if (!view
                    .getQuery()
                    .getQueryParams()
                    .loadsAllData()) {
                    result.push(view);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return result;
    };
    /**
     * @param path The path to the desired complete snapshot
     * @return A complete cache, if it exists
     */
    SyncPoint.prototype.getCompleteServerCache = function (path) {
        var e_4, _a;
        var serverCache = null;
        try {
            for (var _b = tslib_1.__values(this.views.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var view = _c.value;
                serverCache = serverCache || view.getCompleteServerCache(path);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return serverCache;
    };
    SyncPoint.prototype.viewForQuery = function (query) {
        var params = query.getQueryParams();
        if (params.loadsAllData()) {
            return this.getCompleteView();
        }
        else {
            var queryId = query.queryIdentifier();
            return this.views.get(queryId);
        }
    };
    SyncPoint.prototype.viewExistsForQuery = function (query) {
        return this.viewForQuery(query) != null;
    };
    SyncPoint.prototype.hasCompleteView = function () {
        return this.getCompleteView() != null;
    };
    SyncPoint.prototype.getCompleteView = function () {
        var e_5, _a;
        try {
            for (var _b = tslib_1.__values(this.views.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var view = _c.value;
                if (view
                    .getQuery()
                    .getQueryParams()
                    .loadsAllData()) {
                    return view;
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return null;
    };
    return SyncPoint;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * This class holds a collection of writes that can be applied to nodes in unison. It abstracts away the logic with
 * dealing with priority writes and multiple nested writes. At any given path there is only allowed to be one write
 * modifying that path. Any write to an existing path or shadowing an existing path will modify that existing write
 * to reflect the write added.
 */
var CompoundWrite = /** @class */ (function () {
    function CompoundWrite(writeTree_) {
        this.writeTree_ = writeTree_;
    }
    CompoundWrite.prototype.addWrite = function (path, node) {
        if (path.isEmpty()) {
            return new CompoundWrite(new ImmutableTree(node));
        }
        else {
            var rootmost = this.writeTree_.findRootMostValueAndPath(path);
            if (rootmost != null) {
                var rootMostPath = rootmost.path;
                var value = rootmost.value;
                var relativePath = Path.relativePath(rootMostPath, path);
                value = value.updateChild(relativePath, node);
                return new CompoundWrite(this.writeTree_.set(rootMostPath, value));
            }
            else {
                var subtree = new ImmutableTree(node);
                var newWriteTree = this.writeTree_.setTree(path, subtree);
                return new CompoundWrite(newWriteTree);
            }
        }
    };
    CompoundWrite.prototype.addWrites = function (path, updates) {
        var newWrite = this;
        each(updates, function (childKey, node) {
            newWrite = newWrite.addWrite(path.child(childKey), node);
        });
        return newWrite;
    };
    /**
     * Will remove a write at the given path and deeper paths. This will <em>not</em> modify a write at a higher
     * location, which must be removed by calling this method with that path.
     *
     * @param path The path at which a write and all deeper writes should be removed
     * @return {!CompoundWrite} The new CompoundWrite with the removed path
     */
    CompoundWrite.prototype.removeWrite = function (path) {
        if (path.isEmpty()) {
            return CompoundWrite.Empty;
        }
        else {
            var newWriteTree = this.writeTree_.setTree(path, ImmutableTree.Empty);
            return new CompoundWrite(newWriteTree);
        }
    };
    /**
     * Returns whether this CompoundWrite will fully overwrite a node at a given location and can therefore be
     * considered "complete".
     *
     * @param path The path to check for
     * @return Whether there is a complete write at that path
     */
    CompoundWrite.prototype.hasCompleteWrite = function (path) {
        return this.getCompleteNode(path) != null;
    };
    /**
     * Returns a node for a path if and only if the node is a "complete" overwrite at that path. This will not aggregate
     * writes from deeper paths, but will return child nodes from a more shallow path.
     *
     * @param path The path to get a complete write
     * @return The node if complete at that path, or null otherwise.
     */
    CompoundWrite.prototype.getCompleteNode = function (path) {
        var rootmost = this.writeTree_.findRootMostValueAndPath(path);
        if (rootmost != null) {
            return this.writeTree_
                .get(rootmost.path)
                .getChild(Path.relativePath(rootmost.path, path));
        }
        else {
            return null;
        }
    };
    /**
     * Returns all children that are guaranteed to be a complete overwrite.
     *
     * @return A list of all complete children.
     */
    CompoundWrite.prototype.getCompleteChildren = function () {
        var children = [];
        var node = this.writeTree_.value;
        if (node != null) {
            // If it's a leaf node, it has no children; so nothing to do.
            if (!node.isLeafNode()) {
                node.forEachChild(PRIORITY_INDEX, function (childName, childNode) {
                    children.push(new NamedNode(childName, childNode));
                });
            }
        }
        else {
            this.writeTree_.children.inorderTraversal(function (childName, childTree) {
                if (childTree.value != null) {
                    children.push(new NamedNode(childName, childTree.value));
                }
            });
        }
        return children;
    };
    CompoundWrite.prototype.childCompoundWrite = function (path) {
        if (path.isEmpty()) {
            return this;
        }
        else {
            var shadowingNode = this.getCompleteNode(path);
            if (shadowingNode != null) {
                return new CompoundWrite(new ImmutableTree(shadowingNode));
            }
            else {
                return new CompoundWrite(this.writeTree_.subtree(path));
            }
        }
    };
    /**
     * Returns true if this CompoundWrite is empty and therefore does not modify any nodes.
     * @return Whether this CompoundWrite is empty
     */
    CompoundWrite.prototype.isEmpty = function () {
        return this.writeTree_.isEmpty();
    };
    /**
     * Applies this CompoundWrite to a node. The node is returned with all writes from this CompoundWrite applied to the
     * node
     * @param node The node to apply this CompoundWrite to
     * @return The node with all writes applied
     */
    CompoundWrite.prototype.apply = function (node) {
        return applySubtreeWrite(Path.Empty, this.writeTree_, node);
    };
    CompoundWrite.Empty = new CompoundWrite(new ImmutableTree(null));
    return CompoundWrite;
}());
function applySubtreeWrite(relativePath, writeTree, node) {
    if (writeTree.value != null) {
        // Since there a write is always a leaf, we're done here
        return node.updateChild(relativePath, writeTree.value);
    }
    else {
        var priorityWrite_1 = null;
        writeTree.children.inorderTraversal(function (childKey, childTree) {
            if (childKey === '.priority') {
                // Apply priorities at the end so we don't update priorities for either empty nodes or forget
                // to apply priorities to empty nodes that are later filled
                util.assert(childTree.value !== null, 'Priority writes must always be leaf nodes');
                priorityWrite_1 = childTree.value;
            }
            else {
                node = applySubtreeWrite(relativePath.child(childKey), childTree, node);
            }
        });
        // If there was a priority write, we only apply it if the node is not empty
        if (!node.getChild(relativePath).isEmpty() && priorityWrite_1 !== null) {
            node = node.updateChild(relativePath.child('.priority'), priorityWrite_1);
        }
        return node;
    }
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * WriteTree tracks all pending user-initiated writes and has methods to calculate the result of merging them
 * with underlying server data (to create "event cache" data).  Pending writes are added with addOverwrite()
 * and addMerge(), and removed with removeWrite().
 *
 * @constructor
 */
var WriteTree = /** @class */ (function () {
    function WriteTree() {
        /**
         * A tree tracking the result of applying all visible writes.  This does not include transactions with
         * applyLocally=false or writes that are completely shadowed by other writes.
         *
         * @type {!CompoundWrite}
         * @private
         */
        this.visibleWrites_ = CompoundWrite.Empty;
        /**
         * A list of all pending writes, regardless of visibility and shadowed-ness.  Used to calculate arbitrary
         * sets of the changed data, such as hidden writes (from transactions) or changes with certain writes excluded (also
         * used by transactions).
         *
         * @type {!Array.<!WriteRecord>}
         * @private
         */
        this.allWrites_ = [];
        this.lastWriteId_ = -1;
    }
    /**
     * Create a new WriteTreeRef for the given path. For use with a new sync point at the given path.
     *
     * @param {!Path} path
     * @return {!WriteTreeRef}
     */
    WriteTree.prototype.childWrites = function (path) {
        return new WriteTreeRef(path, this);
    };
    /**
     * Record a new overwrite from user code.
     *
     * @param {!Path} path
     * @param {!Node} snap
     * @param {!number} writeId
     * @param {boolean=} visible This is set to false by some transactions. It should be excluded from event caches
     */
    WriteTree.prototype.addOverwrite = function (path, snap, writeId, visible) {
        util.assert(writeId > this.lastWriteId_, 'Stacking an older write on top of newer ones');
        if (visible === undefined) {
            visible = true;
        }
        this.allWrites_.push({
            path: path,
            snap: snap,
            writeId: writeId,
            visible: visible
        });
        if (visible) {
            this.visibleWrites_ = this.visibleWrites_.addWrite(path, snap);
        }
        this.lastWriteId_ = writeId;
    };
    /**
     * Record a new merge from user code.
     *
     * @param {!Path} path
     * @param {!Object.<string, !Node>} changedChildren
     * @param {!number} writeId
     */
    WriteTree.prototype.addMerge = function (path, changedChildren, writeId) {
        util.assert(writeId > this.lastWriteId_, 'Stacking an older merge on top of newer ones');
        this.allWrites_.push({
            path: path,
            children: changedChildren,
            writeId: writeId,
            visible: true
        });
        this.visibleWrites_ = this.visibleWrites_.addWrites(path, changedChildren);
        this.lastWriteId_ = writeId;
    };
    /**
     * @param {!number} writeId
     * @return {?WriteRecord}
     */
    WriteTree.prototype.getWrite = function (writeId) {
        for (var i = 0; i < this.allWrites_.length; i++) {
            var record = this.allWrites_[i];
            if (record.writeId === writeId) {
                return record;
            }
        }
        return null;
    };
    /**
     * Remove a write (either an overwrite or merge) that has been successfully acknowledge by the server. Recalculates
     * the tree if necessary.  We return true if it may have been visible, meaning views need to reevaluate.
     *
     * @param {!number} writeId
     * @return {boolean} true if the write may have been visible (meaning we'll need to reevaluate / raise
     * events as a result).
     */
    WriteTree.prototype.removeWrite = function (writeId) {
        // Note: disabling this check. It could be a transaction that preempted another transaction, and thus was applied
        // out of order.
        //const validClear = revert || this.allWrites_.length === 0 || writeId <= this.allWrites_[0].writeId;
        //assert(validClear, "Either we don't have this write, or it's the first one in the queue");
        var _this = this;
        var idx = this.allWrites_.findIndex(function (s) {
            return s.writeId === writeId;
        });
        util.assert(idx >= 0, 'removeWrite called with nonexistent writeId.');
        var writeToRemove = this.allWrites_[idx];
        this.allWrites_.splice(idx, 1);
        var removedWriteWasVisible = writeToRemove.visible;
        var removedWriteOverlapsWithOtherWrites = false;
        var i = this.allWrites_.length - 1;
        while (removedWriteWasVisible && i >= 0) {
            var currentWrite = this.allWrites_[i];
            if (currentWrite.visible) {
                if (i >= idx &&
                    this.recordContainsPath_(currentWrite, writeToRemove.path)) {
                    // The removed write was completely shadowed by a subsequent write.
                    removedWriteWasVisible = false;
                }
                else if (writeToRemove.path.contains(currentWrite.path)) {
                    // Either we're covering some writes or they're covering part of us (depending on which came first).
                    removedWriteOverlapsWithOtherWrites = true;
                }
            }
            i--;
        }
        if (!removedWriteWasVisible) {
            return false;
        }
        else if (removedWriteOverlapsWithOtherWrites) {
            // There's some shadowing going on. Just rebuild the visible writes from scratch.
            this.resetTree_();
            return true;
        }
        else {
            // There's no shadowing.  We can safely just remove the write(s) from visibleWrites.
            if (writeToRemove.snap) {
                this.visibleWrites_ = this.visibleWrites_.removeWrite(writeToRemove.path);
            }
            else {
                var children = writeToRemove.children;
                each(children, function (childName) {
                    _this.visibleWrites_ = _this.visibleWrites_.removeWrite(writeToRemove.path.child(childName));
                });
            }
            return true;
        }
    };
    /**
     * Return a complete snapshot for the given path if there's visible write data at that path, else null.
     * No server data is considered.
     *
     * @param {!Path} path
     * @return {?Node}
     */
    WriteTree.prototype.getCompleteWriteData = function (path) {
        return this.visibleWrites_.getCompleteNode(path);
    };
    /**
     * Given optional, underlying server data, and an optional set of constraints (exclude some sets, include hidden
     * writes), attempt to calculate a complete snapshot for the given path
     *
     * @param {!Path} treePath
     * @param {?Node} completeServerCache
     * @param {Array.<number>=} writeIdsToExclude An optional set to be excluded
     * @param {boolean=} includeHiddenWrites Defaults to false, whether or not to layer on writes with visible set to false
     * @return {?Node}
     */
    WriteTree.prototype.calcCompleteEventCache = function (treePath, completeServerCache, writeIdsToExclude, includeHiddenWrites) {
        if (!writeIdsToExclude && !includeHiddenWrites) {
            var shadowingNode = this.visibleWrites_.getCompleteNode(treePath);
            if (shadowingNode != null) {
                return shadowingNode;
            }
            else {
                var subMerge = this.visibleWrites_.childCompoundWrite(treePath);
                if (subMerge.isEmpty()) {
                    return completeServerCache;
                }
                else if (completeServerCache == null &&
                    !subMerge.hasCompleteWrite(Path.Empty)) {
                    // We wouldn't have a complete snapshot, since there's no underlying data and no complete shadow
                    return null;
                }
                else {
                    var layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
                    return subMerge.apply(layeredCache);
                }
            }
        }
        else {
            var merge = this.visibleWrites_.childCompoundWrite(treePath);
            if (!includeHiddenWrites && merge.isEmpty()) {
                return completeServerCache;
            }
            else {
                // If the server cache is null, and we don't have a complete cache, we need to return null
                if (!includeHiddenWrites &&
                    completeServerCache == null &&
                    !merge.hasCompleteWrite(Path.Empty)) {
                    return null;
                }
                else {
                    var filter = function (write) {
                        return ((write.visible || includeHiddenWrites) &&
                            (!writeIdsToExclude ||
                                !~writeIdsToExclude.indexOf(write.writeId)) &&
                            (write.path.contains(treePath) || treePath.contains(write.path)));
                    };
                    var mergeAtPath = WriteTree.layerTree_(this.allWrites_, filter, treePath);
                    var layeredCache = completeServerCache || ChildrenNode.EMPTY_NODE;
                    return mergeAtPath.apply(layeredCache);
                }
            }
        }
    };
    /**
     * With optional, underlying server data, attempt to return a children node of children that we have complete data for.
     * Used when creating new views, to pre-fill their complete event children snapshot.
     *
     * @param {!Path} treePath
     * @param {?ChildrenNode} completeServerChildren
     * @return {!ChildrenNode}
     */
    WriteTree.prototype.calcCompleteEventChildren = function (treePath, completeServerChildren) {
        var completeChildren = ChildrenNode.EMPTY_NODE;
        var topLevelSet = this.visibleWrites_.getCompleteNode(treePath);
        if (topLevelSet) {
            if (!topLevelSet.isLeafNode()) {
                // we're shadowing everything. Return the children.
                topLevelSet.forEachChild(PRIORITY_INDEX, function (childName, childSnap) {
                    completeChildren = completeChildren.updateImmediateChild(childName, childSnap);
                });
            }
            return completeChildren;
        }
        else if (completeServerChildren) {
            // Layer any children we have on top of this
            // We know we don't have a top-level set, so just enumerate existing children
            var merge_1 = this.visibleWrites_.childCompoundWrite(treePath);
            completeServerChildren.forEachChild(PRIORITY_INDEX, function (childName, childNode) {
                var node = merge_1
                    .childCompoundWrite(new Path(childName))
                    .apply(childNode);
                completeChildren = completeChildren.updateImmediateChild(childName, node);
            });
            // Add any complete children we have from the set
            merge_1.getCompleteChildren().forEach(function (namedNode) {
                completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
            });
            return completeChildren;
        }
        else {
            // We don't have anything to layer on top of. Layer on any children we have
            // Note that we can return an empty snap if we have a defined delete
            var merge = this.visibleWrites_.childCompoundWrite(treePath);
            merge.getCompleteChildren().forEach(function (namedNode) {
                completeChildren = completeChildren.updateImmediateChild(namedNode.name, namedNode.node);
            });
            return completeChildren;
        }
    };
    /**
     * Given that the underlying server data has updated, determine what, if anything, needs to be
     * applied to the event cache.
     *
     * Possibilities:
     *
     * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
     *
     * 2. Some write is completely shadowing. No events to be raised
     *
     * 3. Is partially shadowed. Events
     *
     * Either existingEventSnap or existingServerSnap must exist
     *
     * @param {!Path} treePath
     * @param {!Path} childPath
     * @param {?Node} existingEventSnap
     * @param {?Node} existingServerSnap
     * @return {?Node}
     */
    WriteTree.prototype.calcEventCacheAfterServerOverwrite = function (treePath, childPath, existingEventSnap, existingServerSnap) {
        util.assert(existingEventSnap || existingServerSnap, 'Either existingEventSnap or existingServerSnap must exist');
        var path = treePath.child(childPath);
        if (this.visibleWrites_.hasCompleteWrite(path)) {
            // At this point we can probably guarantee that we're in case 2, meaning no events
            // May need to check visibility while doing the findRootMostValueAndPath call
            return null;
        }
        else {
            // No complete shadowing. We're either partially shadowing or not shadowing at all.
            var childMerge = this.visibleWrites_.childCompoundWrite(path);
            if (childMerge.isEmpty()) {
                // We're not shadowing at all. Case 1
                return existingServerSnap.getChild(childPath);
            }
            else {
                // This could be more efficient if the serverNode + updates doesn't change the eventSnap
                // However this is tricky to find out, since user updates don't necessary change the server
                // snap, e.g. priority updates on empty nodes, or deep deletes. Another special case is if the server
                // adds nodes, but doesn't change any existing writes. It is therefore not enough to
                // only check if the updates change the serverNode.
                // Maybe check if the merge tree contains these special cases and only do a full overwrite in that case?
                return childMerge.apply(existingServerSnap.getChild(childPath));
            }
        }
    };
    /**
     * Returns a complete child for a given server snap after applying all user writes or null if there is no
     * complete child for this ChildKey.
     *
     * @param {!Path} treePath
     * @param {!string} childKey
     * @param {!CacheNode} existingServerSnap
     * @return {?Node}
     */
    WriteTree.prototype.calcCompleteChild = function (treePath, childKey, existingServerSnap) {
        var path = treePath.child(childKey);
        var shadowingNode = this.visibleWrites_.getCompleteNode(path);
        if (shadowingNode != null) {
            return shadowingNode;
        }
        else {
            if (existingServerSnap.isCompleteForChild(childKey)) {
                var childMerge = this.visibleWrites_.childCompoundWrite(path);
                return childMerge.apply(existingServerSnap.getNode().getImmediateChild(childKey));
            }
            else {
                return null;
            }
        }
    };
    /**
     * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
     * a higher path, this will return the child of that write relative to the write and this path.
     * Returns null if there is no write at this path.
     */
    WriteTree.prototype.shadowingWrite = function (path) {
        return this.visibleWrites_.getCompleteNode(path);
    };
    /**
     * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
     * the window, but may now be in the window.
     */
    WriteTree.prototype.calcIndexedSlice = function (treePath, completeServerData, startPost, count, reverse, index) {
        var toIterate;
        var merge = this.visibleWrites_.childCompoundWrite(treePath);
        var shadowingNode = merge.getCompleteNode(Path.Empty);
        if (shadowingNode != null) {
            toIterate = shadowingNode;
        }
        else if (completeServerData != null) {
            toIterate = merge.apply(completeServerData);
        }
        else {
            // no children to iterate on
            return [];
        }
        toIterate = toIterate.withIndex(index);
        if (!toIterate.isEmpty() && !toIterate.isLeafNode()) {
            var nodes = [];
            var cmp = index.getCompare();
            var iter = reverse
                ? toIterate.getReverseIteratorFrom(startPost, index)
                : toIterate.getIteratorFrom(startPost, index);
            var next = iter.getNext();
            while (next && nodes.length < count) {
                if (cmp(next, startPost) !== 0) {
                    nodes.push(next);
                }
                next = iter.getNext();
            }
            return nodes;
        }
        else {
            return [];
        }
    };
    WriteTree.prototype.recordContainsPath_ = function (writeRecord, path) {
        if (writeRecord.snap) {
            return writeRecord.path.contains(path);
        }
        else {
            for (var childName in writeRecord.children) {
                if (writeRecord.children.hasOwnProperty(childName) &&
                    writeRecord.path.child(childName).contains(path)) {
                    return true;
                }
            }
            return false;
        }
    };
    /**
     * Re-layer the writes and merges into a tree so we can efficiently calculate event snapshots
     */
    WriteTree.prototype.resetTree_ = function () {
        this.visibleWrites_ = WriteTree.layerTree_(this.allWrites_, WriteTree.DefaultFilter_, Path.Empty);
        if (this.allWrites_.length > 0) {
            this.lastWriteId_ = this.allWrites_[this.allWrites_.length - 1].writeId;
        }
        else {
            this.lastWriteId_ = -1;
        }
    };
    /**
     * The default filter used when constructing the tree. Keep everything that's visible.
     */
    WriteTree.DefaultFilter_ = function (write) {
        return write.visible;
    };
    /**
     * Static method. Given an array of WriteRecords, a filter for which ones to include, and a path, construct the tree of
     * event data at that path.
     */
    WriteTree.layerTree_ = function (writes, filter, treeRoot) {
        var compoundWrite = CompoundWrite.Empty;
        for (var i = 0; i < writes.length; ++i) {
            var write = writes[i];
            // Theory, a later set will either:
            // a) abort a relevant transaction, so no need to worry about excluding it from calculating that transaction
            // b) not be relevant to a transaction (separate branch), so again will not affect the data for that transaction
            if (filter(write)) {
                var writePath = write.path;
                var relativePath = void 0;
                if (write.snap) {
                    if (treeRoot.contains(writePath)) {
                        relativePath = Path.relativePath(treeRoot, writePath);
                        compoundWrite = compoundWrite.addWrite(relativePath, write.snap);
                    }
                    else if (writePath.contains(treeRoot)) {
                        relativePath = Path.relativePath(writePath, treeRoot);
                        compoundWrite = compoundWrite.addWrite(Path.Empty, write.snap.getChild(relativePath));
                    }
                }
                else if (write.children) {
                    if (treeRoot.contains(writePath)) {
                        relativePath = Path.relativePath(treeRoot, writePath);
                        compoundWrite = compoundWrite.addWrites(relativePath, write.children);
                    }
                    else if (writePath.contains(treeRoot)) {
                        relativePath = Path.relativePath(writePath, treeRoot);
                        if (relativePath.isEmpty()) {
                            compoundWrite = compoundWrite.addWrites(Path.Empty, write.children);
                        }
                        else {
                            var child = util.safeGet(write.children, relativePath.getFront());
                            if (child) {
                                // There exists a child in this node that matches the root path
                                var deepNode = child.getChild(relativePath.popFront());
                                compoundWrite = compoundWrite.addWrite(Path.Empty, deepNode);
                            }
                        }
                    }
                }
                else {
                    throw util.assertionError('WriteRecord should have .snap or .children');
                }
            }
        }
        return compoundWrite;
    };
    return WriteTree;
}());
/**
 * A WriteTreeRef wraps a WriteTree and a path, for convenient access to a particular subtree.  All of the methods
 * just proxy to the underlying WriteTree.
 *
 * @constructor
 */
var WriteTreeRef = /** @class */ (function () {
    /**
     * @param {!Path} path
     * @param {!WriteTree} writeTree
     */
    function WriteTreeRef(path, writeTree) {
        this.treePath_ = path;
        this.writeTree_ = writeTree;
    }
    /**
     * If possible, returns a complete event cache, using the underlying server data if possible. In addition, can be used
     * to get a cache that includes hidden writes, and excludes arbitrary writes. Note that customizing the returned node
     * can lead to a more expensive calculation.
     *
     * @param {?Node} completeServerCache
     * @param {Array.<number>=} writeIdsToExclude Optional writes to exclude.
     * @param {boolean=} includeHiddenWrites Defaults to false, whether or not to layer on writes with visible set to false
     * @return {?Node}
     */
    WriteTreeRef.prototype.calcCompleteEventCache = function (completeServerCache, writeIdsToExclude, includeHiddenWrites) {
        return this.writeTree_.calcCompleteEventCache(this.treePath_, completeServerCache, writeIdsToExclude, includeHiddenWrites);
    };
    /**
     * If possible, returns a children node containing all of the complete children we have data for. The returned data is a
     * mix of the given server data and write data.
     *
     * @param {?ChildrenNode} completeServerChildren
     * @return {!ChildrenNode}
     */
    WriteTreeRef.prototype.calcCompleteEventChildren = function (completeServerChildren) {
        return this.writeTree_.calcCompleteEventChildren(this.treePath_, completeServerChildren);
    };
    /**
     * Given that either the underlying server data has updated or the outstanding writes have updated, determine what,
     * if anything, needs to be applied to the event cache.
     *
     * Possibilities:
     *
     * 1. No writes are shadowing. Events should be raised, the snap to be applied comes from the server data
     *
     * 2. Some write is completely shadowing. No events to be raised
     *
     * 3. Is partially shadowed. Events should be raised
     *
     * Either existingEventSnap or existingServerSnap must exist, this is validated via an assert
     *
     * @param {!Path} path
     * @param {?Node} existingEventSnap
     * @param {?Node} existingServerSnap
     * @return {?Node}
     */
    WriteTreeRef.prototype.calcEventCacheAfterServerOverwrite = function (path, existingEventSnap, existingServerSnap) {
        return this.writeTree_.calcEventCacheAfterServerOverwrite(this.treePath_, path, existingEventSnap, existingServerSnap);
    };
    /**
     * Returns a node if there is a complete overwrite for this path. More specifically, if there is a write at
     * a higher path, this will return the child of that write relative to the write and this path.
     * Returns null if there is no write at this path.
     *
     * @param {!Path} path
     * @return {?Node}
     */
    WriteTreeRef.prototype.shadowingWrite = function (path) {
        return this.writeTree_.shadowingWrite(this.treePath_.child(path));
    };
    /**
     * This method is used when processing child remove events on a query. If we can, we pull in children that were outside
     * the window, but may now be in the window
     *
     * @param {?Node} completeServerData
     * @param {!NamedNode} startPost
     * @param {!number} count
     * @param {boolean} reverse
     * @param {!Index} index
     * @return {!Array.<!NamedNode>}
     */
    WriteTreeRef.prototype.calcIndexedSlice = function (completeServerData, startPost, count, reverse, index) {
        return this.writeTree_.calcIndexedSlice(this.treePath_, completeServerData, startPost, count, reverse, index);
    };
    /**
     * Returns a complete child for a given server snap after applying all user writes or null if there is no
     * complete child for this ChildKey.
     *
     * @param {!string} childKey
     * @param {!CacheNode} existingServerCache
     * @return {?Node}
     */
    WriteTreeRef.prototype.calcCompleteChild = function (childKey, existingServerCache) {
        return this.writeTree_.calcCompleteChild(this.treePath_, childKey, existingServerCache);
    };
    /**
     * Return a WriteTreeRef for a child.
     *
     * @param {string} childName
     * @return {!WriteTreeRef}
     */
    WriteTreeRef.prototype.child = function (childName) {
        return new WriteTreeRef(this.treePath_.child(childName), this.writeTree_);
    };
    return WriteTreeRef;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SyncTree is the central class for managing event callback registration, data caching, views
 * (query processing), and event generation.  There are typically two SyncTree instances for
 * each Repo, one for the normal Firebase data, and one for the .info data.
 *
 * It has a number of responsibilities, including:
 *  - Tracking all user event callbacks (registered via addEventRegistration() and removeEventRegistration()).
 *  - Applying and caching data changes for user set(), transaction(), and update() calls
 *    (applyUserOverwrite(), applyUserMerge()).
 *  - Applying and caching data changes for server data changes (applyServerOverwrite(),
 *    applyServerMerge()).
 *  - Generating user-facing events for server and user changes (all of the apply* methods
 *    return the set of events that need to be raised as a result).
 *  - Maintaining the appropriate set of server listens to ensure we are always subscribed
 *    to the correct set of paths and queries to satisfy the current set of user event
 *    callbacks (listens are started/stopped using the provided listenProvider).
 *
 * NOTE: Although SyncTree tracks event callbacks and calculates events to raise, the actual
 * events are returned to the caller rather than raised synchronously.
 *
 * @constructor
 */
var SyncTree = /** @class */ (function () {
    /**
     * @param {!ListenProvider} listenProvider_ Used by SyncTree to start / stop listening
     *   to server data.
     */
    function SyncTree(listenProvider_) {
        this.listenProvider_ = listenProvider_;
        /**
         * Tree of SyncPoints.  There's a SyncPoint at any location that has 1 or more views.
         */
        this.syncPointTree_ = ImmutableTree.Empty;
        /**
         * A tree of all pending user writes (user-initiated set()'s, transaction()'s, update()'s, etc.).
         */
        this.pendingWriteTree_ = new WriteTree();
        this.tagToQueryMap = new Map();
        this.queryToTagMap = new Map();
    }
    /**
     * Apply the data changes for a user-generated set() or transaction() call.
     *
     * @return Events to raise.
     */
    SyncTree.prototype.applyUserOverwrite = function (path, newData, writeId, visible) {
        // Record pending write.
        this.pendingWriteTree_.addOverwrite(path, newData, writeId, visible);
        if (!visible) {
            return [];
        }
        else {
            return this.applyOperationToSyncPoints_(new Overwrite(OperationSource.User, path, newData));
        }
    };
    /**
     * Apply the data from a user-generated update() call
     *
     * @return Events to raise.
     */
    SyncTree.prototype.applyUserMerge = function (path, changedChildren, writeId) {
        // Record pending merge.
        this.pendingWriteTree_.addMerge(path, changedChildren, writeId);
        var changeTree = ImmutableTree.fromObject(changedChildren);
        return this.applyOperationToSyncPoints_(new Merge(OperationSource.User, path, changeTree));
    };
    /**
     * Acknowledge a pending user write that was previously registered with applyUserOverwrite() or applyUserMerge().
     *
     * @param revert True if the given write failed and needs to be reverted
     * @return Events to raise.
     */
    SyncTree.prototype.ackUserWrite = function (writeId, revert) {
        if (revert === void 0) { revert = false; }
        var write = this.pendingWriteTree_.getWrite(writeId);
        var needToReevaluate = this.pendingWriteTree_.removeWrite(writeId);
        if (!needToReevaluate) {
            return [];
        }
        else {
            var affectedTree_1 = ImmutableTree.Empty;
            if (write.snap != null) {
                // overwrite
                affectedTree_1 = affectedTree_1.set(Path.Empty, true);
            }
            else {
                each(write.children, function (pathString, node) {
                    affectedTree_1 = affectedTree_1.set(new Path(pathString), node);
                });
            }
            return this.applyOperationToSyncPoints_(new AckUserWrite(write.path, affectedTree_1, revert));
        }
    };
    /**
     * Apply new server data for the specified path..
     *
     * @return Events to raise.
     */
    SyncTree.prototype.applyServerOverwrite = function (path, newData) {
        return this.applyOperationToSyncPoints_(new Overwrite(OperationSource.Server, path, newData));
    };
    /**
     * Apply new server data to be merged in at the specified path.
     *
     * @return Events to raise.
     */
    SyncTree.prototype.applyServerMerge = function (path, changedChildren) {
        var changeTree = ImmutableTree.fromObject(changedChildren);
        return this.applyOperationToSyncPoints_(new Merge(OperationSource.Server, path, changeTree));
    };
    /**
     * Apply a listen complete for a query
     *
     * @return Events to raise.
     */
    SyncTree.prototype.applyListenComplete = function (path) {
        return this.applyOperationToSyncPoints_(new ListenComplete(OperationSource.Server, path));
    };
    /**
     * Apply new server data for the specified tagged query.
     *
     * @return Events to raise.
     */
    SyncTree.prototype.applyTaggedQueryOverwrite = function (path, snap, tag) {
        var queryKey = this.queryKeyForTag_(tag);
        if (queryKey != null) {
            var r = SyncTree.parseQueryKey_(queryKey);
            var queryPath = r.path, queryId = r.queryId;
            var relativePath = Path.relativePath(queryPath, path);
            var op = new Overwrite(OperationSource.forServerTaggedQuery(queryId), relativePath, snap);
            return this.applyTaggedOperation_(queryPath, op);
        }
        else {
            // Query must have been removed already
            return [];
        }
    };
    /**
     * Apply server data to be merged in for the specified tagged query.
     *
     * @return Events to raise.
     */
    SyncTree.prototype.applyTaggedQueryMerge = function (path, changedChildren, tag) {
        var queryKey = this.queryKeyForTag_(tag);
        if (queryKey) {
            var r = SyncTree.parseQueryKey_(queryKey);
            var queryPath = r.path, queryId = r.queryId;
            var relativePath = Path.relativePath(queryPath, path);
            var changeTree = ImmutableTree.fromObject(changedChildren);
            var op = new Merge(OperationSource.forServerTaggedQuery(queryId), relativePath, changeTree);
            return this.applyTaggedOperation_(queryPath, op);
        }
        else {
            // We've already removed the query. No big deal, ignore the update
            return [];
        }
    };
    /**
     * Apply a listen complete for a tagged query
     *
     * @return Events to raise.
     */
    SyncTree.prototype.applyTaggedListenComplete = function (path, tag) {
        var queryKey = this.queryKeyForTag_(tag);
        if (queryKey) {
            var r = SyncTree.parseQueryKey_(queryKey);
            var queryPath = r.path, queryId = r.queryId;
            var relativePath = Path.relativePath(queryPath, path);
            var op = new ListenComplete(OperationSource.forServerTaggedQuery(queryId), relativePath);
            return this.applyTaggedOperation_(queryPath, op);
        }
        else {
            // We've already removed the query. No big deal, ignore the update
            return [];
        }
    };
    /**
     * Add an event callback for the specified query.
     *
     * @return Events to raise.
     */
    SyncTree.prototype.addEventRegistration = function (query, eventRegistration) {
        var path = query.path;
        var serverCache = null;
        var foundAncestorDefaultView = false;
        // Any covering writes will necessarily be at the root, so really all we need to find is the server cache.
        // Consider optimizing this once there's a better understanding of what actual behavior will be.
        this.syncPointTree_.foreachOnPath(path, function (pathToSyncPoint, sp) {
            var relativePath = Path.relativePath(pathToSyncPoint, path);
            serverCache = serverCache || sp.getCompleteServerCache(relativePath);
            foundAncestorDefaultView =
                foundAncestorDefaultView || sp.hasCompleteView();
        });
        var syncPoint = this.syncPointTree_.get(path);
        if (!syncPoint) {
            syncPoint = new SyncPoint();
            this.syncPointTree_ = this.syncPointTree_.set(path, syncPoint);
        }
        else {
            foundAncestorDefaultView =
                foundAncestorDefaultView || syncPoint.hasCompleteView();
            serverCache = serverCache || syncPoint.getCompleteServerCache(Path.Empty);
        }
        var serverCacheComplete;
        if (serverCache != null) {
            serverCacheComplete = true;
        }
        else {
            serverCacheComplete = false;
            serverCache = ChildrenNode.EMPTY_NODE;
            var subtree = this.syncPointTree_.subtree(path);
            subtree.foreachChild(function (childName, childSyncPoint) {
                var completeCache = childSyncPoint.getCompleteServerCache(Path.Empty);
                if (completeCache) {
                    serverCache = serverCache.updateImmediateChild(childName, completeCache);
                }
            });
        }
        var viewAlreadyExists = syncPoint.viewExistsForQuery(query);
        if (!viewAlreadyExists && !query.getQueryParams().loadsAllData()) {
            // We need to track a tag for this query
            var queryKey = SyncTree.makeQueryKey_(query);
            util.assert(!this.queryToTagMap.has(queryKey), 'View does not exist, but we have a tag');
            var tag = SyncTree.getNextQueryTag_();
            this.queryToTagMap.set(queryKey, tag);
            this.tagToQueryMap.set(tag, queryKey);
        }
        var writesCache = this.pendingWriteTree_.childWrites(path);
        var events = syncPoint.addEventRegistration(query, eventRegistration, writesCache, serverCache, serverCacheComplete);
        if (!viewAlreadyExists && !foundAncestorDefaultView) {
            var view /** @type !View */ = syncPoint.viewForQuery(query);
            events = events.concat(this.setupListener_(query, view));
        }
        return events;
    };
    /**
     * Remove event callback(s).
     *
     * If query is the default query, we'll check all queries for the specified eventRegistration.
     * If eventRegistration is null, we'll remove all callbacks for the specified query/queries.
     *
     * @param eventRegistration If null, all callbacks are removed.
     * @param cancelError If a cancelError is provided, appropriate cancel events will be returned.
     * @return Cancel events, if cancelError was provided.
     */
    SyncTree.prototype.removeEventRegistration = function (query, eventRegistration, cancelError) {
        var _this = this;
        // Find the syncPoint first. Then deal with whether or not it has matching listeners
        var path = query.path;
        var maybeSyncPoint = this.syncPointTree_.get(path);
        var cancelEvents = [];
        // A removal on a default query affects all queries at that location. A removal on an indexed query, even one without
        // other query constraints, does *not* affect all queries at that location. So this check must be for 'default', and
        // not loadsAllData().
        if (maybeSyncPoint &&
            (query.queryIdentifier() === 'default' ||
                maybeSyncPoint.viewExistsForQuery(query))) {
            /**
             * @type {{removed: !Array.<!Query>, events: !Array.<!Event>}}
             */
            var removedAndEvents = maybeSyncPoint.removeEventRegistration(query, eventRegistration, cancelError);
            if (maybeSyncPoint.isEmpty()) {
                this.syncPointTree_ = this.syncPointTree_.remove(path);
            }
            var removed = removedAndEvents.removed;
            cancelEvents = removedAndEvents.events;
            // We may have just removed one of many listeners and can short-circuit this whole process
            // We may also not have removed a default listener, in which case all of the descendant listeners should already be
            // properly set up.
            //
            // Since indexed queries can shadow if they don't have other query constraints, check for loadsAllData(), instead of
            // queryId === 'default'
            var removingDefault = -1 !==
                removed.findIndex(function (query) {
                    return query.getQueryParams().loadsAllData();
                });
            var covered = this.syncPointTree_.findOnPath(path, function (relativePath, parentSyncPoint) {
                return parentSyncPoint.hasCompleteView();
            });
            if (removingDefault && !covered) {
                var subtree = this.syncPointTree_.subtree(path);
                // There are potentially child listeners. Determine what if any listens we need to send before executing the
                // removal
                if (!subtree.isEmpty()) {
                    // We need to fold over our subtree and collect the listeners to send
                    var newViews = this.collectDistinctViewsForSubTree_(subtree);
                    // Ok, we've collected all the listens we need. Set them up.
                    for (var i = 0; i < newViews.length; ++i) {
                        var view = newViews[i], newQuery = view.getQuery();
                        var listener = this.createListenerForView_(view);
                        this.listenProvider_.startListening(SyncTree.queryForListening_(newQuery), this.tagForQuery_(newQuery), listener.hashFn, listener.onComplete);
                    }
                }
            }
            // If we removed anything and we're not covered by a higher up listen, we need to stop listening on this query
            // The above block has us covered in terms of making sure we're set up on listens lower in the tree.
            // Also, note that if we have a cancelError, it's already been removed at the provider level.
            if (!covered && removed.length > 0 && !cancelError) {
                // If we removed a default, then we weren't listening on any of the other queries here. Just cancel the one
                // default. Otherwise, we need to iterate through and cancel each individual query
                if (removingDefault) {
                    // We don't tag default listeners
                    var defaultTag = null;
                    this.listenProvider_.stopListening(SyncTree.queryForListening_(query), defaultTag);
                }
                else {
                    removed.forEach(function (queryToRemove) {
                        var tagToRemove = _this.queryToTagMap.get(SyncTree.makeQueryKey_(queryToRemove));
                        _this.listenProvider_.stopListening(SyncTree.queryForListening_(queryToRemove), tagToRemove);
                    });
                }
            }
            // Now, clear all of the tags we're tracking for the removed listens
            this.removeTags_(removed);
        }
        return cancelEvents;
    };
    /**
     * Returns a complete cache, if we have one, of the data at a particular path. The location must have a listener above
     * it, but as this is only used by transaction code, that should always be the case anyways.
     *
     * Note: this method will *include* hidden writes from transaction with applyLocally set to false.
     *
     * @param path The path to the data we want
     * @param writeIdsToExclude A specific set to be excluded
     */
    SyncTree.prototype.calcCompleteEventCache = function (path, writeIdsToExclude) {
        var includeHiddenSets = true;
        var writeTree = this.pendingWriteTree_;
        var serverCache = this.syncPointTree_.findOnPath(path, function (pathSoFar, syncPoint) {
            var relativePath = Path.relativePath(pathSoFar, path);
            var serverCache = syncPoint.getCompleteServerCache(relativePath);
            if (serverCache) {
                return serverCache;
            }
        });
        return writeTree.calcCompleteEventCache(path, serverCache, writeIdsToExclude, includeHiddenSets);
    };
    /**
     * This collapses multiple unfiltered views into a single view, since we only need a single
     * listener for them.
     */
    SyncTree.prototype.collectDistinctViewsForSubTree_ = function (subtree) {
        return subtree.fold(function (relativePath, maybeChildSyncPoint, childMap) {
            if (maybeChildSyncPoint && maybeChildSyncPoint.hasCompleteView()) {
                var completeView = maybeChildSyncPoint.getCompleteView();
                return [completeView];
            }
            else {
                // No complete view here, flatten any deeper listens into an array
                var views_1 = [];
                if (maybeChildSyncPoint) {
                    views_1 = maybeChildSyncPoint.getQueryViews();
                }
                each(childMap, function (_key, childViews) {
                    views_1 = views_1.concat(childViews);
                });
                return views_1;
            }
        });
    };
    SyncTree.prototype.removeTags_ = function (queries) {
        for (var j = 0; j < queries.length; ++j) {
            var removedQuery = queries[j];
            if (!removedQuery.getQueryParams().loadsAllData()) {
                // We should have a tag for this
                var removedQueryKey = SyncTree.makeQueryKey_(removedQuery);
                var removedQueryTag = this.queryToTagMap.get(removedQueryKey);
                this.queryToTagMap.delete(removedQueryKey);
                this.tagToQueryMap.delete(removedQueryTag);
            }
        }
    };
    /**
     * Normalizes a query to a query we send the server for listening
     *
     * @return The normalized query
     */
    SyncTree.queryForListening_ = function (query) {
        if (query.getQueryParams().loadsAllData() &&
            !query.getQueryParams().isDefault()) {
            // We treat queries that load all data as default queries
            // Cast is necessary because ref() technically returns Firebase which is actually fb.api.Firebase which inherits
            // from Query
            return query.getRef();
        }
        else {
            return query;
        }
    };
    /**
     * For a given new listen, manage the de-duplication of outstanding subscriptions.
     *
     * @return This method can return events to support synchronous data sources
     */
    SyncTree.prototype.setupListener_ = function (query, view) {
        var path = query.path;
        var tag = this.tagForQuery_(query);
        var listener = this.createListenerForView_(view);
        var events = this.listenProvider_.startListening(SyncTree.queryForListening_(query), tag, listener.hashFn, listener.onComplete);
        var subtree = this.syncPointTree_.subtree(path);
        // The root of this subtree has our query. We're here because we definitely need to send a listen for that, but we
        // may need to shadow other listens as well.
        if (tag) {
            util.assert(!subtree.value.hasCompleteView(), "If we're adding a query, it shouldn't be shadowed");
        }
        else {
            // Shadow everything at or below this location, this is a default listener.
            var queriesToStop = subtree.fold(function (relativePath, maybeChildSyncPoint, childMap) {
                if (!relativePath.isEmpty() &&
                    maybeChildSyncPoint &&
                    maybeChildSyncPoint.hasCompleteView()) {
                    return [maybeChildSyncPoint.getCompleteView().getQuery()];
                }
                else {
                    // No default listener here, flatten any deeper queries into an array
                    var queries_1 = [];
                    if (maybeChildSyncPoint) {
                        queries_1 = queries_1.concat(maybeChildSyncPoint.getQueryViews().map(function (view) { return view.getQuery(); }));
                    }
                    each(childMap, function (_key, childQueries) {
                        queries_1 = queries_1.concat(childQueries);
                    });
                    return queries_1;
                }
            });
            for (var i = 0; i < queriesToStop.length; ++i) {
                var queryToStop = queriesToStop[i];
                this.listenProvider_.stopListening(SyncTree.queryForListening_(queryToStop), this.tagForQuery_(queryToStop));
            }
        }
        return events;
    };
    SyncTree.prototype.createListenerForView_ = function (view) {
        var _this = this;
        var query = view.getQuery();
        var tag = this.tagForQuery_(query);
        return {
            hashFn: function () {
                var cache = view.getServerCache() || ChildrenNode.EMPTY_NODE;
                return cache.hash();
            },
            onComplete: function (status) {
                if (status === 'ok') {
                    if (tag) {
                        return _this.applyTaggedListenComplete(query.path, tag);
                    }
                    else {
                        return _this.applyListenComplete(query.path);
                    }
                }
                else {
                    // If a listen failed, kill all of the listeners here, not just the one that triggered the error.
                    // Note that this may need to be scoped to just this listener if we change permissions on filtered children
                    var error = errorForServerCode(status, query);
                    return _this.removeEventRegistration(query, 
                    /*eventRegistration*/ null, error);
                }
            }
        };
    };
    /**
     * Given a query, computes a "queryKey" suitable for use in our queryToTagMap_.
     */
    SyncTree.makeQueryKey_ = function (query) {
        return query.path.toString() + '$' + query.queryIdentifier();
    };
    /**
     * Given a queryKey (created by makeQueryKey), parse it back into a path and queryId.
     */
    SyncTree.parseQueryKey_ = function (queryKey) {
        var splitIndex = queryKey.indexOf('$');
        util.assert(splitIndex !== -1 && splitIndex < queryKey.length - 1, 'Bad queryKey.');
        return {
            queryId: queryKey.substr(splitIndex + 1),
            path: new Path(queryKey.substr(0, splitIndex))
        };
    };
    /**
     * Return the query associated with the given tag, if we have one
     */
    SyncTree.prototype.queryKeyForTag_ = function (tag) {
        return this.tagToQueryMap.get(tag);
    };
    /**
     * Return the tag associated with the given query.
     */
    SyncTree.prototype.tagForQuery_ = function (query) {
        var queryKey = SyncTree.makeQueryKey_(query);
        return this.queryToTagMap.get(queryKey);
    };
    /**
     * Static accessor for query tags.
     */
    SyncTree.getNextQueryTag_ = function () {
        return SyncTree.nextQueryTag_++;
    };
    /**
     * A helper method to apply tagged operations
     */
    SyncTree.prototype.applyTaggedOperation_ = function (queryPath, operation) {
        var syncPoint = this.syncPointTree_.get(queryPath);
        util.assert(syncPoint, "Missing sync point for query tag that we're tracking");
        var writesCache = this.pendingWriteTree_.childWrites(queryPath);
        return syncPoint.applyOperation(operation, writesCache, 
        /*serverCache=*/ null);
    };
    /**
     * A helper method that visits all descendant and ancestor SyncPoints, applying the operation.
     *
     * NOTES:
     * - Descendant SyncPoints will be visited first (since we raise events depth-first).
  
     * - We call applyOperation() on each SyncPoint passing three things:
     *   1. A version of the Operation that has been made relative to the SyncPoint location.
     *   2. A WriteTreeRef of any writes we have cached at the SyncPoint location.
     *   3. A snapshot Node with cached server data, if we have it.
  
     * - We concatenate all of the events returned by each SyncPoint and return the result.
     */
    SyncTree.prototype.applyOperationToSyncPoints_ = function (operation) {
        return this.applyOperationHelper_(operation, this.syncPointTree_, 
        /*serverCache=*/ null, this.pendingWriteTree_.childWrites(Path.Empty));
    };
    /**
     * Recursive helper for applyOperationToSyncPoints_
     */
    SyncTree.prototype.applyOperationHelper_ = function (operation, syncPointTree, serverCache, writesCache) {
        if (operation.path.isEmpty()) {
            return this.applyOperationDescendantsHelper_(operation, syncPointTree, serverCache, writesCache);
        }
        else {
            var syncPoint = syncPointTree.get(Path.Empty);
            // If we don't have cached server data, see if we can get it from this SyncPoint.
            if (serverCache == null && syncPoint != null) {
                serverCache = syncPoint.getCompleteServerCache(Path.Empty);
            }
            var events = [];
            var childName = operation.path.getFront();
            var childOperation = operation.operationForChild(childName);
            var childTree = syncPointTree.children.get(childName);
            if (childTree && childOperation) {
                var childServerCache = serverCache
                    ? serverCache.getImmediateChild(childName)
                    : null;
                var childWritesCache = writesCache.child(childName);
                events = events.concat(this.applyOperationHelper_(childOperation, childTree, childServerCache, childWritesCache));
            }
            if (syncPoint) {
                events = events.concat(syncPoint.applyOperation(operation, writesCache, serverCache));
            }
            return events;
        }
    };
    /**
     * Recursive helper for applyOperationToSyncPoints_
     */
    SyncTree.prototype.applyOperationDescendantsHelper_ = function (operation, syncPointTree, serverCache, writesCache) {
        var _this = this;
        var syncPoint = syncPointTree.get(Path.Empty);
        // If we don't have cached server data, see if we can get it from this SyncPoint.
        if (serverCache == null && syncPoint != null) {
            serverCache = syncPoint.getCompleteServerCache(Path.Empty);
        }
        var events = [];
        syncPointTree.children.inorderTraversal(function (childName, childTree) {
            var childServerCache = serverCache
                ? serverCache.getImmediateChild(childName)
                : null;
            var childWritesCache = writesCache.child(childName);
            var childOperation = operation.operationForChild(childName);
            if (childOperation) {
                events = events.concat(_this.applyOperationDescendantsHelper_(childOperation, childTree, childServerCache, childWritesCache));
            }
        });
        if (syncPoint) {
            events = events.concat(syncPoint.applyOperation(operation, writesCache, serverCache));
        }
        return events;
    };
    /**
     * Static tracker for next query tag.
     */
    SyncTree.nextQueryTag_ = 1;
    return SyncTree;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Mutable object which basically just stores a reference to the "latest" immutable snapshot.
 *
 * @constructor
 */
var SnapshotHolder = /** @class */ (function () {
    function SnapshotHolder() {
        this.rootNode_ = ChildrenNode.EMPTY_NODE;
    }
    SnapshotHolder.prototype.getNode = function (path) {
        return this.rootNode_.getChild(path);
    };
    SnapshotHolder.prototype.updateSnapshot = function (path, newSnapshotNode) {
        this.rootNode_ = this.rootNode_.updateChild(path, newSnapshotNode);
    };
    return SnapshotHolder;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Abstraction around FirebaseApp's token fetching capabilities.
 */
var AuthTokenProvider = /** @class */ (function () {
    /**
     * @param {!FirebaseApp} app_
     */
    function AuthTokenProvider(app_) {
        this.app_ = app_;
    }
    /**
     * @param {boolean} forceRefresh
     * @return {!Promise<FirebaseAuthTokenData>}
     */
    AuthTokenProvider.prototype.getToken = function (forceRefresh) {
        return this.app_['INTERNAL']['getToken'](forceRefresh).then(null, 
        // .catch
        function (error) {
            // TODO: Need to figure out all the cases this is raised and whether
            // this makes sense.
            if (error && error.code === 'auth/token-not-initialized') {
                log('Got auth/token-not-initialized error.  Treating as null token.');
                return null;
            }
            else {
                return Promise.reject(error);
            }
        });
    };
    AuthTokenProvider.prototype.addTokenChangeListener = function (listener) {
        // TODO: We might want to wrap the listener and call it with no args to
        // avoid a leaky abstraction, but that makes removing the listener harder.
        this.app_['INTERNAL']['addAuthTokenListener'](listener);
    };
    AuthTokenProvider.prototype.removeTokenChangeListener = function (listener) {
        this.app_['INTERNAL']['removeAuthTokenListener'](listener);
    };
    AuthTokenProvider.prototype.notifyForInvalidToken = function () {
        var errorMessage = 'Provided authentication credentials for the app named "' +
            this.app_.name +
            '" are invalid. This usually indicates your app was not ' +
            'initialized correctly. ';
        if ('credential' in this.app_.options) {
            errorMessage +=
                'Make sure the "credential" property provided to initializeApp() ' +
                    'is authorized to access the specified "databaseURL" and is from the correct ' +
                    'project.';
        }
        else if ('serviceAccount' in this.app_.options) {
            errorMessage +=
                'Make sure the "serviceAccount" property provided to initializeApp() ' +
                    'is authorized to access the specified "databaseURL" and is from the correct ' +
                    'project.';
        }
        else {
            errorMessage +=
                'Make sure the "apiKey" and "databaseURL" properties provided to ' +
                    'initializeApp() match the values provided for your app at ' +
                    'https://console.firebase.google.com/.';
        }
        warn(errorMessage);
    };
    return AuthTokenProvider;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Tracks a collection of stats.
 *
 * @constructor
 */
var StatsCollection = /** @class */ (function () {
    function StatsCollection() {
        this.counters_ = {};
    }
    StatsCollection.prototype.incrementCounter = function (name, amount) {
        if (amount === void 0) { amount = 1; }
        if (!util.contains(this.counters_, name))
            this.counters_[name] = 0;
        this.counters_[name] += amount;
    };
    StatsCollection.prototype.get = function () {
        return util.deepCopy(this.counters_);
    };
    return StatsCollection;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var StatsManager = /** @class */ (function () {
    function StatsManager() {
    }
    StatsManager.getCollection = function (repoInfo) {
        var hashString = repoInfo.toString();
        if (!this.collections_[hashString]) {
            this.collections_[hashString] = new StatsCollection();
        }
        return this.collections_[hashString];
    };
    StatsManager.getOrCreateReporter = function (repoInfo, creatorFunction) {
        var hashString = repoInfo.toString();
        if (!this.reporters_[hashString]) {
            this.reporters_[hashString] = creatorFunction();
        }
        return this.reporters_[hashString];
    };
    StatsManager.collections_ = {};
    StatsManager.reporters_ = {};
    return StatsManager;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns the delta from the previous call to get stats.
 *
 * @param collection_ The collection to "listen" to.
 * @constructor
 */
var StatsListener = /** @class */ (function () {
    function StatsListener(collection_) {
        this.collection_ = collection_;
        this.last_ = null;
    }
    StatsListener.prototype.get = function () {
        var newStats = this.collection_.get();
        var delta = tslib_1.__assign({}, newStats);
        if (this.last_) {
            each(this.last_, function (stat, value) {
                delta[stat] = delta[stat] - value;
            });
        }
        this.last_ = newStats;
        return delta;
    };
    return StatsListener;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Assuming some apps may have a short amount of time on page, and a bulk of firebase operations probably
// happen on page load, we try to report our first set of stats pretty quickly, but we wait at least 10
// seconds to try to ensure the Firebase connection is established / settled.
var FIRST_STATS_MIN_TIME = 10 * 1000;
var FIRST_STATS_MAX_TIME = 30 * 1000;
// We'll continue to report stats on average every 5 minutes.
var REPORT_STATS_INTERVAL = 5 * 60 * 1000;
/**
 * @constructor
 */
var StatsReporter = /** @class */ (function () {
    /**
     * @param collection
     * @param server_
     */
    function StatsReporter(collection, server_) {
        this.server_ = server_;
        this.statsToReport_ = {};
        this.statsListener_ = new StatsListener(collection);
        var timeout = FIRST_STATS_MIN_TIME +
            (FIRST_STATS_MAX_TIME - FIRST_STATS_MIN_TIME) * Math.random();
        setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(timeout));
    }
    StatsReporter.prototype.includeStat = function (stat) {
        this.statsToReport_[stat] = true;
    };
    StatsReporter.prototype.reportStats_ = function () {
        var _this = this;
        var stats = this.statsListener_.get();
        var reportedStats = {};
        var haveStatsToReport = false;
        each(stats, function (stat, value) {
            if (value > 0 && util.contains(_this.statsToReport_, stat)) {
                reportedStats[stat] = value;
                haveStatsToReport = true;
            }
        });
        if (haveStatsToReport) {
            this.server_.reportStats(reportedStats);
        }
        // queue our next run.
        setTimeoutNonBlocking(this.reportStats_.bind(this), Math.floor(Math.random() * 2 * REPORT_STATS_INTERVAL));
    };
    return StatsReporter;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The event queue serves a few purposes:
 * 1. It ensures we maintain event order in the face of event callbacks doing operations that result in more
 *    events being queued.
 * 2. raiseQueuedEvents() handles being called reentrantly nicely.  That is, if in the course of raising events,
 *    raiseQueuedEvents() is called again, the "inner" call will pick up raising events where the "outer" call
 *    left off, ensuring that the events are still raised synchronously and in order.
 * 3. You can use raiseEventsAtPath and raiseEventsForChangedPath to ensure only relevant previously-queued
 *    events are raised synchronously.
 *
 * NOTE: This can all go away if/when we move to async events.
 *
 * @constructor
 */
var EventQueue = /** @class */ (function () {
    function EventQueue() {
        /**
         * @private
         * @type {!Array.<EventList>}
         */
        this.eventLists_ = [];
        /**
         * Tracks recursion depth of raiseQueuedEvents_, for debugging purposes.
         * @private
         * @type {!number}
         */
        this.recursionDepth_ = 0;
    }
    /**
     * @param {!Array.<Event>} eventDataList The new events to queue.
     */
    EventQueue.prototype.queueEvents = function (eventDataList) {
        // We group events by path, storing them in a single EventList, to make it easier to skip over them quickly.
        var currList = null;
        for (var i = 0; i < eventDataList.length; i++) {
            var eventData = eventDataList[i];
            var eventPath = eventData.getPath();
            if (currList !== null && !eventPath.equals(currList.getPath())) {
                this.eventLists_.push(currList);
                currList = null;
            }
            if (currList === null) {
                currList = new EventList(eventPath);
            }
            currList.add(eventData);
        }
        if (currList) {
            this.eventLists_.push(currList);
        }
    };
    /**
     * Queues the specified events and synchronously raises all events (including previously queued ones)
     * for the specified path.
     *
     * It is assumed that the new events are all for the specified path.
     *
     * @param {!Path} path The path to raise events for.
     * @param {!Array.<Event>} eventDataList The new events to raise.
     */
    EventQueue.prototype.raiseEventsAtPath = function (path, eventDataList) {
        this.queueEvents(eventDataList);
        this.raiseQueuedEventsMatchingPredicate_(function (eventPath) {
            return eventPath.equals(path);
        });
    };
    /**
     * Queues the specified events and synchronously raises all events (including previously queued ones) for
     * locations related to the specified change path (i.e. all ancestors and descendants).
     *
     * It is assumed that the new events are all related (ancestor or descendant) to the specified path.
     *
     * @param {!Path} changedPath The path to raise events for.
     * @param {!Array.<!Event>} eventDataList The events to raise
     */
    EventQueue.prototype.raiseEventsForChangedPath = function (changedPath, eventDataList) {
        this.queueEvents(eventDataList);
        this.raiseQueuedEventsMatchingPredicate_(function (eventPath) {
            return eventPath.contains(changedPath) || changedPath.contains(eventPath);
        });
    };
    /**
     * @param {!function(!Path):boolean} predicate
     * @private
     */
    EventQueue.prototype.raiseQueuedEventsMatchingPredicate_ = function (predicate) {
        this.recursionDepth_++;
        var sentAll = true;
        for (var i = 0; i < this.eventLists_.length; i++) {
            var eventList = this.eventLists_[i];
            if (eventList) {
                var eventPath = eventList.getPath();
                if (predicate(eventPath)) {
                    this.eventLists_[i].raise();
                    this.eventLists_[i] = null;
                }
                else {
                    sentAll = false;
                }
            }
        }
        if (sentAll) {
            this.eventLists_ = [];
        }
        this.recursionDepth_--;
    };
    return EventQueue;
}());
/**
 * @param {!Path} path
 * @constructor
 */
var EventList = /** @class */ (function () {
    function EventList(path_) {
        this.path_ = path_;
        /**
         * @type {!Array.<Event>}
         * @private
         */
        this.events_ = [];
    }
    /**
     * @param {!Event} eventData
     */
    EventList.prototype.add = function (eventData) {
        this.events_.push(eventData);
    };
    /**
     * Iterates through the list and raises each event
     */
    EventList.prototype.raise = function () {
        for (var i = 0; i < this.events_.length; i++) {
            var eventData = this.events_[i];
            if (eventData !== null) {
                this.events_[i] = null;
                var eventFn = eventData.getEventRunner();
                if (logger) {
                    log('event: ' + eventData.toString());
                }
                exceptionGuard(eventFn);
            }
        }
    };
    /**
     * @return {!Path}
     */
    EventList.prototype.getPath = function () {
        return this.path_;
    };
    return EventList;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Base class to be used if you want to emit events. Call the constructor with
 * the set of allowed event names.
 */
var EventEmitter = /** @class */ (function () {
    /**
     * @param {!Array.<string>} allowedEvents_
     */
    function EventEmitter(allowedEvents_) {
        this.allowedEvents_ = allowedEvents_;
        this.listeners_ = {};
        util.assert(Array.isArray(allowedEvents_) && allowedEvents_.length > 0, 'Requires a non-empty array');
    }
    /**
     * To be called by derived classes to trigger events.
     * @param {!string} eventType
     * @param {...*} var_args
     */
    EventEmitter.prototype.trigger = function (eventType) {
        var var_args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            var_args[_i - 1] = arguments[_i];
        }
        if (Array.isArray(this.listeners_[eventType])) {
            // Clone the list, since callbacks could add/remove listeners.
            var listeners = tslib_1.__spread(this.listeners_[eventType]);
            for (var i = 0; i < listeners.length; i++) {
                listeners[i].callback.apply(listeners[i].context, var_args);
            }
        }
    };
    EventEmitter.prototype.on = function (eventType, callback, context) {
        this.validateEventType_(eventType);
        this.listeners_[eventType] = this.listeners_[eventType] || [];
        this.listeners_[eventType].push({ callback: callback, context: context });
        var eventData = this.getInitialEvent(eventType);
        if (eventData) {
            callback.apply(context, eventData);
        }
    };
    EventEmitter.prototype.off = function (eventType, callback, context) {
        this.validateEventType_(eventType);
        var listeners = this.listeners_[eventType] || [];
        for (var i = 0; i < listeners.length; i++) {
            if (listeners[i].callback === callback &&
                (!context || context === listeners[i].context)) {
                listeners.splice(i, 1);
                return;
            }
        }
    };
    EventEmitter.prototype.validateEventType_ = function (eventType) {
        util.assert(this.allowedEvents_.find(function (et) {
            return et === eventType;
        }), 'Unknown event: ' + eventType);
    };
    return EventEmitter;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @extends {EventEmitter}
 */
var VisibilityMonitor = /** @class */ (function (_super) {
    tslib_1.__extends(VisibilityMonitor, _super);
    function VisibilityMonitor() {
        var _this = _super.call(this, ['visible']) || this;
        var hidden;
        var visibilityChange;
        if (typeof document !== 'undefined' &&
            typeof document.addEventListener !== 'undefined') {
            if (typeof document['hidden'] !== 'undefined') {
                // Opera 12.10 and Firefox 18 and later support
                visibilityChange = 'visibilitychange';
                hidden = 'hidden';
            }
            else if (typeof document['mozHidden'] !== 'undefined') {
                visibilityChange = 'mozvisibilitychange';
                hidden = 'mozHidden';
            }
            else if (typeof document['msHidden'] !== 'undefined') {
                visibilityChange = 'msvisibilitychange';
                hidden = 'msHidden';
            }
            else if (typeof document['webkitHidden'] !== 'undefined') {
                visibilityChange = 'webkitvisibilitychange';
                hidden = 'webkitHidden';
            }
        }
        // Initially, we always assume we are visible. This ensures that in browsers
        // without page visibility support or in cases where we are never visible
        // (e.g. chrome extension), we act as if we are visible, i.e. don't delay
        // reconnects
        _this.visible_ = true;
        if (visibilityChange) {
            document.addEventListener(visibilityChange, function () {
                var visible = !document[hidden];
                if (visible !== _this.visible_) {
                    _this.visible_ = visible;
                    _this.trigger('visible', visible);
                }
            }, false);
        }
        return _this;
    }
    VisibilityMonitor.getInstance = function () {
        return new VisibilityMonitor();
    };
    /**
     * @param {!string} eventType
     * @return {Array.<boolean>}
     */
    VisibilityMonitor.prototype.getInitialEvent = function (eventType) {
        util.assert(eventType === 'visible', 'Unknown event type: ' + eventType);
        return [this.visible_];
    };
    return VisibilityMonitor;
}(EventEmitter));

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Monitors online state (as reported by window.online/offline events).
 *
 * The expectation is that this could have many false positives (thinks we are online
 * when we're not), but no false negatives.  So we can safely use it to determine when
 * we definitely cannot reach the internet.
 *
 * @extends {EventEmitter}
 */
var OnlineMonitor = /** @class */ (function (_super) {
    tslib_1.__extends(OnlineMonitor, _super);
    function OnlineMonitor() {
        var _this = _super.call(this, ['online']) || this;
        _this.online_ = true;
        // We've had repeated complaints that Cordova apps can get stuck "offline", e.g.
        // https://forum.ionicframework.com/t/firebase-connection-is-lost-and-never-come-back/43810
        // It would seem that the 'online' event does not always fire consistently. So we disable it
        // for Cordova.
        if (typeof window !== 'undefined' &&
            typeof window.addEventListener !== 'undefined' &&
            !util.isMobileCordova()) {
            window.addEventListener('online', function () {
                if (!_this.online_) {
                    _this.online_ = true;
                    _this.trigger('online', true);
                }
            }, false);
            window.addEventListener('offline', function () {
                if (_this.online_) {
                    _this.online_ = false;
                    _this.trigger('online', false);
                }
            }, false);
        }
        return _this;
    }
    OnlineMonitor.getInstance = function () {
        return new OnlineMonitor();
    };
    /**
     * @param {!string} eventType
     * @return {Array.<boolean>}
     */
    OnlineMonitor.prototype.getInitialEvent = function (eventType) {
        util.assert(eventType === 'online', 'Unknown event type: ' + eventType);
        return [this.online_];
    };
    /**
     * @return {boolean}
     */
    OnlineMonitor.prototype.currentlyOnline = function () {
        return this.online_;
    };
    return OnlineMonitor;
}(EventEmitter));

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * This class ensures the packets from the server arrive in order
 * This class takes data from the server and ensures it gets passed into the callbacks in order.
 * @constructor
 */
var PacketReceiver = /** @class */ (function () {
    /**
     * @param onMessage_
     */
    function PacketReceiver(onMessage_) {
        this.onMessage_ = onMessage_;
        this.pendingResponses = [];
        this.currentResponseNum = 0;
        this.closeAfterResponse = -1;
        this.onClose = null;
    }
    PacketReceiver.prototype.closeAfter = function (responseNum, callback) {
        this.closeAfterResponse = responseNum;
        this.onClose = callback;
        if (this.closeAfterResponse < this.currentResponseNum) {
            this.onClose();
            this.onClose = null;
        }
    };
    /**
     * Each message from the server comes with a response number, and an array of data. The responseNumber
     * allows us to ensure that we process them in the right order, since we can't be guaranteed that all
     * browsers will respond in the same order as the requests we sent
     * @param {number} requestNum
     * @param {Array} data
     */
    PacketReceiver.prototype.handleResponse = function (requestNum, data) {
        var _this = this;
        this.pendingResponses[requestNum] = data;
        var _loop_1 = function () {
            var toProcess = this_1.pendingResponses[this_1.currentResponseNum];
            delete this_1.pendingResponses[this_1.currentResponseNum];
            var _loop_2 = function (i) {
                if (toProcess[i]) {
                    exceptionGuard(function () {
                        _this.onMessage_(toProcess[i]);
                    });
                }
            };
            for (var i = 0; i < toProcess.length; ++i) {
                _loop_2(i);
            }
            if (this_1.currentResponseNum === this_1.closeAfterResponse) {
                if (this_1.onClose) {
                    this_1.onClose();
                    this_1.onClose = null;
                }
                return "break";
            }
            this_1.currentResponseNum++;
        };
        var this_1 = this;
        while (this.pendingResponses[this.currentResponseNum]) {
            var state_1 = _loop_1();
            if (state_1 === "break")
                break;
        }
    };
    return PacketReceiver;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// URL query parameters associated with longpolling
var FIREBASE_LONGPOLL_START_PARAM = 'start';
var FIREBASE_LONGPOLL_CLOSE_COMMAND = 'close';
var FIREBASE_LONGPOLL_COMMAND_CB_NAME = 'pLPCommand';
var FIREBASE_LONGPOLL_DATA_CB_NAME = 'pRTLPCB';
var FIREBASE_LONGPOLL_ID_PARAM = 'id';
var FIREBASE_LONGPOLL_PW_PARAM = 'pw';
var FIREBASE_LONGPOLL_SERIAL_PARAM = 'ser';
var FIREBASE_LONGPOLL_CALLBACK_ID_PARAM = 'cb';
var FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM = 'seg';
var FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET = 'ts';
var FIREBASE_LONGPOLL_DATA_PARAM = 'd';
var FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM = 'disconn';
var FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM = 'dframe';
//Data size constants.
//TODO: Perf: the maximum length actually differs from browser to browser.
// We should check what browser we're on and set accordingly.
var MAX_URL_DATA_SIZE = 1870;
var SEG_HEADER_SIZE = 30; //ie: &seg=8299234&ts=982389123&d=
var MAX_PAYLOAD_SIZE = MAX_URL_DATA_SIZE - SEG_HEADER_SIZE;
/**
 * Keepalive period
 * send a fresh request at minimum every 25 seconds. Opera has a maximum request
 * length of 30 seconds that we can't exceed.
 * @const
 * @type {number}
 */
var KEEPALIVE_REQUEST_INTERVAL = 25000;
/**
 * How long to wait before aborting a long-polling connection attempt.
 * @const
 * @type {number}
 */
var LP_CONNECT_TIMEOUT = 30000;
/**
 * This class manages a single long-polling connection.
 *
 * @constructor
 * @implements {Transport}
 */
var BrowserPollConnection = /** @class */ (function () {
    /**
     * @param {string} connId An identifier for this connection, used for logging
     * @param {RepoInfo} repoInfo The info for the endpoint to send data to.
     * @param {string=} transportSessionId Optional transportSessionid if we are reconnecting for an existing
     *                                         transport session
     * @param {string=}  lastSessionId Optional lastSessionId if the PersistentConnection has already created a
     *                                     connection previously
     */
    function BrowserPollConnection(connId, repoInfo, transportSessionId, lastSessionId) {
        this.connId = connId;
        this.repoInfo = repoInfo;
        this.transportSessionId = transportSessionId;
        this.lastSessionId = lastSessionId;
        this.bytesSent = 0;
        this.bytesReceived = 0;
        this.everConnected_ = false;
        this.log_ = logWrapper(connId);
        this.stats_ = StatsManager.getCollection(repoInfo);
        this.urlFn = function (params) {
            return repoInfo.connectionURL(LONG_POLLING, params);
        };
    }
    /**
     *
     * @param {function(Object)} onMessage Callback when messages arrive
     * @param {function()} onDisconnect Callback with connection lost.
     */
    BrowserPollConnection.prototype.open = function (onMessage, onDisconnect) {
        var _this = this;
        this.curSegmentNum = 0;
        this.onDisconnect_ = onDisconnect;
        this.myPacketOrderer = new PacketReceiver(onMessage);
        this.isClosed_ = false;
        this.connectTimeoutTimer_ = setTimeout(function () {
            _this.log_('Timed out trying to connect.');
            // Make sure we clear the host cache
            _this.onClosed_();
            _this.connectTimeoutTimer_ = null;
        }, Math.floor(LP_CONNECT_TIMEOUT));
        // Ensure we delay the creation of the iframe until the DOM is loaded.
        executeWhenDOMReady(function () {
            if (_this.isClosed_)
                return;
            //Set up a callback that gets triggered once a connection is set up.
            _this.scriptTagHolder = new FirebaseIFrameScriptHolder(function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _a = tslib_1.__read(args, 5), command = _a[0], arg1 = _a[1], arg2 = _a[2], arg3 = _a[3], arg4 = _a[4];
                _this.incrementIncomingBytes_(args);
                if (!_this.scriptTagHolder)
                    return; // we closed the connection.
                if (_this.connectTimeoutTimer_) {
                    clearTimeout(_this.connectTimeoutTimer_);
                    _this.connectTimeoutTimer_ = null;
                }
                _this.everConnected_ = true;
                if (command == FIREBASE_LONGPOLL_START_PARAM) {
                    _this.id = arg1;
                    _this.password = arg2;
                }
                else if (command === FIREBASE_LONGPOLL_CLOSE_COMMAND) {
                    // Don't clear the host cache. We got a response from the server, so we know it's reachable
                    if (arg1) {
                        // We aren't expecting any more data (other than what the server's already in the process of sending us
                        // through our already open polls), so don't send any more.
                        _this.scriptTagHolder.sendNewPolls = false;
                        // arg1 in this case is the last response number sent by the server. We should try to receive
                        // all of the responses up to this one before closing
                        _this.myPacketOrderer.closeAfter(arg1, function () {
                            _this.onClosed_();
                        });
                    }
                    else {
                        _this.onClosed_();
                    }
                }
                else {
                    throw new Error('Unrecognized command received: ' + command);
                }
            }, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var _a = tslib_1.__read(args, 2), pN = _a[0], data = _a[1];
                _this.incrementIncomingBytes_(args);
                _this.myPacketOrderer.handleResponse(pN, data);
            }, function () {
                _this.onClosed_();
            }, _this.urlFn);
            //Send the initial request to connect. The serial number is simply to keep the browser from pulling previous results
            //from cache.
            var urlParams = {};
            urlParams[FIREBASE_LONGPOLL_START_PARAM] = 't';
            urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = Math.floor(Math.random() * 100000000);
            if (_this.scriptTagHolder.uniqueCallbackIdentifier)
                urlParams[FIREBASE_LONGPOLL_CALLBACK_ID_PARAM] = _this.scriptTagHolder.uniqueCallbackIdentifier;
            urlParams[VERSION_PARAM] = PROTOCOL_VERSION;
            if (_this.transportSessionId) {
                urlParams[TRANSPORT_SESSION_PARAM] = _this.transportSessionId;
            }
            if (_this.lastSessionId) {
                urlParams[LAST_SESSION_PARAM] = _this.lastSessionId;
            }
            if (!util.isNodeSdk() &&
                typeof location !== 'undefined' &&
                location.href &&
                location.href.indexOf(FORGE_DOMAIN) !== -1) {
                urlParams[REFERER_PARAM] = FORGE_REF;
            }
            var connectURL = _this.urlFn(urlParams);
            _this.log_('Connecting via long-poll to ' + connectURL);
            _this.scriptTagHolder.addTag(connectURL, function () {
                /* do nothing */
            });
        });
    };
    /**
     * Call this when a handshake has completed successfully and we want to consider the connection established
     */
    BrowserPollConnection.prototype.start = function () {
        this.scriptTagHolder.startLongPoll(this.id, this.password);
        this.addDisconnectPingFrame(this.id, this.password);
    };
    /**
     * Forces long polling to be considered as a potential transport
     */
    BrowserPollConnection.forceAllow = function () {
        BrowserPollConnection.forceAllow_ = true;
    };
    /**
     * Forces longpolling to not be considered as a potential transport
     */
    BrowserPollConnection.forceDisallow = function () {
        BrowserPollConnection.forceDisallow_ = true;
    };
    // Static method, use string literal so it can be accessed in a generic way
    BrowserPollConnection.isAvailable = function () {
        // NOTE: In React-Native there's normally no 'document', but if you debug a React-Native app in
        // the Chrome debugger, 'document' is defined, but document.createElement is null (2015/06/08).
        return (BrowserPollConnection.forceAllow_ ||
            (!BrowserPollConnection.forceDisallow_ &&
                typeof document !== 'undefined' &&
                document.createElement != null &&
                !isChromeExtensionContentScript() &&
                !isWindowsStoreApp() &&
                !util.isNodeSdk()));
    };
    /**
     * No-op for polling
     */
    BrowserPollConnection.prototype.markConnectionHealthy = function () { };
    /**
     * Stops polling and cleans up the iframe
     * @private
     */
    BrowserPollConnection.prototype.shutdown_ = function () {
        this.isClosed_ = true;
        if (this.scriptTagHolder) {
            this.scriptTagHolder.close();
            this.scriptTagHolder = null;
        }
        //remove the disconnect frame, which will trigger an XHR call to the server to tell it we're leaving.
        if (this.myDisconnFrame) {
            document.body.removeChild(this.myDisconnFrame);
            this.myDisconnFrame = null;
        }
        if (this.connectTimeoutTimer_) {
            clearTimeout(this.connectTimeoutTimer_);
            this.connectTimeoutTimer_ = null;
        }
    };
    /**
     * Triggered when this transport is closed
     * @private
     */
    BrowserPollConnection.prototype.onClosed_ = function () {
        if (!this.isClosed_) {
            this.log_('Longpoll is closing itself');
            this.shutdown_();
            if (this.onDisconnect_) {
                this.onDisconnect_(this.everConnected_);
                this.onDisconnect_ = null;
            }
        }
    };
    /**
     * External-facing close handler. RealTime has requested we shut down. Kill our connection and tell the server
     * that we've left.
     */
    BrowserPollConnection.prototype.close = function () {
        if (!this.isClosed_) {
            this.log_('Longpoll is being closed.');
            this.shutdown_();
        }
    };
    /**
     * Send the JSON object down to the server. It will need to be stringified, base64 encoded, and then
     * broken into chunks (since URLs have a small maximum length).
     * @param {!Object} data The JSON data to transmit.
     */
    BrowserPollConnection.prototype.send = function (data) {
        var dataStr = util.stringify(data);
        this.bytesSent += dataStr.length;
        this.stats_.incrementCounter('bytes_sent', dataStr.length);
        //first, lets get the base64-encoded data
        var base64data = util.base64Encode(dataStr);
        //We can only fit a certain amount in each URL, so we need to split this request
        //up into multiple pieces if it doesn't fit in one request.
        var dataSegs = splitStringBySize(base64data, MAX_PAYLOAD_SIZE);
        //Enqueue each segment for transmission. We assign each chunk a sequential ID and a total number
        //of segments so that we can reassemble the packet on the server.
        for (var i = 0; i < dataSegs.length; i++) {
            this.scriptTagHolder.enqueueSegment(this.curSegmentNum, dataSegs.length, dataSegs[i]);
            this.curSegmentNum++;
        }
    };
    /**
     * This is how we notify the server that we're leaving.
     * We aren't able to send requests with DHTML on a window close event, but we can
     * trigger XHR requests in some browsers (everything but Opera basically).
     * @param {!string} id
     * @param {!string} pw
     */
    BrowserPollConnection.prototype.addDisconnectPingFrame = function (id, pw) {
        if (util.isNodeSdk())
            return;
        this.myDisconnFrame = document.createElement('iframe');
        var urlParams = {};
        urlParams[FIREBASE_LONGPOLL_DISCONN_FRAME_REQUEST_PARAM] = 't';
        urlParams[FIREBASE_LONGPOLL_ID_PARAM] = id;
        urlParams[FIREBASE_LONGPOLL_PW_PARAM] = pw;
        this.myDisconnFrame.src = this.urlFn(urlParams);
        this.myDisconnFrame.style.display = 'none';
        document.body.appendChild(this.myDisconnFrame);
    };
    /**
     * Used to track the bytes received by this client
     * @param {*} args
     * @private
     */
    BrowserPollConnection.prototype.incrementIncomingBytes_ = function (args) {
        // TODO: This is an annoying perf hit just to track the number of incoming bytes.  Maybe it should be opt-in.
        var bytesReceived = util.stringify(args).length;
        this.bytesReceived += bytesReceived;
        this.stats_.incrementCounter('bytes_received', bytesReceived);
    };
    return BrowserPollConnection;
}());
/*********************************************************************************************
 * A wrapper around an iframe that is used as a long-polling script holder.
 * @constructor
 *********************************************************************************************/
var FirebaseIFrameScriptHolder = /** @class */ (function () {
    /**
     * @param commandCB - The callback to be called when control commands are recevied from the server.
     * @param onMessageCB - The callback to be triggered when responses arrive from the server.
     * @param onDisconnect - The callback to be triggered when this tag holder is closed
     * @param urlFn - A function that provides the URL of the endpoint to send data to.
     */
    function FirebaseIFrameScriptHolder(commandCB, onMessageCB, onDisconnect, urlFn) {
        this.onDisconnect = onDisconnect;
        this.urlFn = urlFn;
        //We maintain a count of all of the outstanding requests, because if we have too many active at once it can cause
        //problems in some browsers.
        this.outstandingRequests = new Set();
        //A queue of the pending segments waiting for transmission to the server.
        this.pendingSegs = [];
        //A serial number. We use this for two things:
        // 1) A way to ensure the browser doesn't cache responses to polls
        // 2) A way to make the server aware when long-polls arrive in a different order than we started them. The
        //    server needs to release both polls in this case or it will cause problems in Opera since Opera can only execute
        //    JSONP code in the order it was added to the iframe.
        this.currentSerial = Math.floor(Math.random() * 100000000);
        // This gets set to false when we're "closing down" the connection (e.g. we're switching transports but there's still
        // incoming data from the server that we're waiting for).
        this.sendNewPolls = true;
        if (!util.isNodeSdk()) {
            //Each script holder registers a couple of uniquely named callbacks with the window. These are called from the
            //iframes where we put the long-polling script tags. We have two callbacks:
            //   1) Command Callback - Triggered for control issues, like starting a connection.
            //   2) Message Callback - Triggered when new data arrives.
            this.uniqueCallbackIdentifier = LUIDGenerator();
            window[FIREBASE_LONGPOLL_COMMAND_CB_NAME + this.uniqueCallbackIdentifier] = commandCB;
            window[FIREBASE_LONGPOLL_DATA_CB_NAME + this.uniqueCallbackIdentifier] = onMessageCB;
            //Create an iframe for us to add script tags to.
            this.myIFrame = FirebaseIFrameScriptHolder.createIFrame_();
            // Set the iframe's contents.
            var script = '';
            // if we set a javascript url, it's IE and we need to set the document domain. The javascript url is sufficient
            // for ie9, but ie8 needs to do it again in the document itself.
            if (this.myIFrame.src &&
                this.myIFrame.src.substr(0, 'javascript:'.length) === 'javascript:') {
                var currentDomain = document.domain;
                script = '<script>document.domain="' + currentDomain + '";</script>';
            }
            var iframeContents = '<html><body>' + script + '</body></html>';
            try {
                this.myIFrame.doc.open();
                this.myIFrame.doc.write(iframeContents);
                this.myIFrame.doc.close();
            }
            catch (e) {
                log('frame writing exception');
                if (e.stack) {
                    log(e.stack);
                }
                log(e);
            }
        }
        else {
            this.commandCB = commandCB;
            this.onMessageCB = onMessageCB;
        }
    }
    /**
     * Each browser has its own funny way to handle iframes. Here we mush them all together into one object that I can
     * actually use.
     * @private
     * @return {Element}
     */
    FirebaseIFrameScriptHolder.createIFrame_ = function () {
        var iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        // This is necessary in order to initialize the document inside the iframe
        if (document.body) {
            document.body.appendChild(iframe);
            try {
                // If document.domain has been modified in IE, this will throw an error, and we need to set the
                // domain of the iframe's document manually. We can do this via a javascript: url as the src attribute
                // Also note that we must do this *after* the iframe has been appended to the page. Otherwise it doesn't work.
                var a = iframe.contentWindow.document;
                if (!a) {
                    // Apologies for the log-spam, I need to do something to keep closure from optimizing out the assignment above.
                    log('No IE domain setting required');
                }
            }
            catch (e) {
                var domain = document.domain;
                iframe.src =
                    "javascript:void((function(){document.open();document.domain='" +
                        domain +
                        "';document.close();})())";
            }
        }
        else {
            // LongPollConnection attempts to delay initialization until the document is ready, so hopefully this
            // never gets hit.
            throw 'Document body has not initialized. Wait to initialize Firebase until after the document is ready.';
        }
        // Get the document of the iframe in a browser-specific way.
        if (iframe.contentDocument) {
            iframe.doc = iframe.contentDocument; // Firefox, Opera, Safari
        }
        else if (iframe.contentWindow) {
            iframe.doc = iframe.contentWindow.document; // Internet Explorer
        }
        else if (iframe.document) {
            iframe.doc = iframe.document; //others?
        }
        return iframe;
    };
    /**
     * Cancel all outstanding queries and remove the frame.
     */
    FirebaseIFrameScriptHolder.prototype.close = function () {
        var _this = this;
        //Mark this iframe as dead, so no new requests are sent.
        this.alive = false;
        if (this.myIFrame) {
            //We have to actually remove all of the html inside this iframe before removing it from the
            //window, or IE will continue loading and executing the script tags we've already added, which
            //can lead to some errors being thrown. Setting innerHTML seems to be the easiest way to do this.
            this.myIFrame.doc.body.innerHTML = '';
            setTimeout(function () {
                if (_this.myIFrame !== null) {
                    document.body.removeChild(_this.myIFrame);
                    _this.myIFrame = null;
                }
            }, Math.floor(0));
        }
        if (util.isNodeSdk() && this.myID) {
            var urlParams = {};
            urlParams[FIREBASE_LONGPOLL_DISCONN_FRAME_PARAM] = 't';
            urlParams[FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
            urlParams[FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
            var theURL = this.urlFn(urlParams);
            FirebaseIFrameScriptHolder.nodeRestRequest(theURL);
        }
        // Protect from being called recursively.
        var onDisconnect = this.onDisconnect;
        if (onDisconnect) {
            this.onDisconnect = null;
            onDisconnect();
        }
    };
    /**
     * Actually start the long-polling session by adding the first script tag(s) to the iframe.
     * @param {!string} id - The ID of this connection
     * @param {!string} pw - The password for this connection
     */
    FirebaseIFrameScriptHolder.prototype.startLongPoll = function (id, pw) {
        this.myID = id;
        this.myPW = pw;
        this.alive = true;
        //send the initial request. If there are requests queued, make sure that we transmit as many as we are currently able to.
        while (this.newRequest_()) { }
    };
    /**
     * This is called any time someone might want a script tag to be added. It adds a script tag when there aren't
     * too many outstanding requests and we are still alive.
     *
     * If there are outstanding packet segments to send, it sends one. If there aren't, it sends a long-poll anyways if
     * needed.
     */
    FirebaseIFrameScriptHolder.prototype.newRequest_ = function () {
        // We keep one outstanding request open all the time to receive data, but if we need to send data
        // (pendingSegs.length > 0) then we create a new request to send the data.  The server will automatically
        // close the old request.
        if (this.alive &&
            this.sendNewPolls &&
            this.outstandingRequests.size < (this.pendingSegs.length > 0 ? 2 : 1)) {
            //construct our url
            this.currentSerial++;
            var urlParams = {};
            urlParams[FIREBASE_LONGPOLL_ID_PARAM] = this.myID;
            urlParams[FIREBASE_LONGPOLL_PW_PARAM] = this.myPW;
            urlParams[FIREBASE_LONGPOLL_SERIAL_PARAM] = this.currentSerial;
            var theURL = this.urlFn(urlParams);
            //Now add as much data as we can.
            var curDataString = '';
            var i = 0;
            while (this.pendingSegs.length > 0) {
                //first, lets see if the next segment will fit.
                var nextSeg = this.pendingSegs[0];
                if (nextSeg.d.length + SEG_HEADER_SIZE + curDataString.length <=
                    MAX_URL_DATA_SIZE) {
                    //great, the segment will fit. Lets append it.
                    var theSeg = this.pendingSegs.shift();
                    curDataString =
                        curDataString +
                            '&' +
                            FIREBASE_LONGPOLL_SEGMENT_NUM_PARAM +
                            i +
                            '=' +
                            theSeg.seg +
                            '&' +
                            FIREBASE_LONGPOLL_SEGMENTS_IN_PACKET +
                            i +
                            '=' +
                            theSeg.ts +
                            '&' +
                            FIREBASE_LONGPOLL_DATA_PARAM +
                            i +
                            '=' +
                            theSeg.d;
                    i++;
                }
                else {
                    break;
                }
            }
            theURL = theURL + curDataString;
            this.addLongPollTag_(theURL, this.currentSerial);
            return true;
        }
        else {
            return false;
        }
    };
    /**
     * Queue a packet for transmission to the server.
     * @param segnum - A sequential id for this packet segment used for reassembly
     * @param totalsegs - The total number of segments in this packet
     * @param data - The data for this segment.
     */
    FirebaseIFrameScriptHolder.prototype.enqueueSegment = function (segnum, totalsegs, data) {
        //add this to the queue of segments to send.
        this.pendingSegs.push({ seg: segnum, ts: totalsegs, d: data });
        //send the data immediately if there isn't already data being transmitted, unless
        //startLongPoll hasn't been called yet.
        if (this.alive) {
            this.newRequest_();
        }
    };
    /**
     * Add a script tag for a regular long-poll request.
     * @param {!string} url - The URL of the script tag.
     * @param {!number} serial - The serial number of the request.
     * @private
     */
    FirebaseIFrameScriptHolder.prototype.addLongPollTag_ = function (url, serial) {
        var _this = this;
        //remember that we sent this request.
        this.outstandingRequests.add(serial);
        var doNewRequest = function () {
            _this.outstandingRequests.delete(serial);
            _this.newRequest_();
        };
        // If this request doesn't return on its own accord (by the server sending us some data), we'll
        // create a new one after the KEEPALIVE interval to make sure we always keep a fresh request open.
        var keepaliveTimeout = setTimeout(doNewRequest, Math.floor(KEEPALIVE_REQUEST_INTERVAL));
        var readyStateCB = function () {
            // Request completed.  Cancel the keepalive.
            clearTimeout(keepaliveTimeout);
            // Trigger a new request so we can continue receiving data.
            doNewRequest();
        };
        this.addTag(url, readyStateCB);
    };
    /**
     * Add an arbitrary script tag to the iframe.
     * @param {!string} url - The URL for the script tag source.
     * @param {!function()} loadCB - A callback to be triggered once the script has loaded.
     */
    FirebaseIFrameScriptHolder.prototype.addTag = function (url, loadCB) {
        var _this = this;
        if (util.isNodeSdk()) {
            this.doNodeLongPoll(url, loadCB);
        }
        else {
            setTimeout(function () {
                try {
                    // if we're already closed, don't add this poll
                    if (!_this.sendNewPolls)
                        return;
                    var newScript_1 = _this.myIFrame.doc.createElement('script');
                    newScript_1.type = 'text/javascript';
                    newScript_1.async = true;
                    newScript_1.src = url;
                    newScript_1.onload = newScript_1.onreadystatechange = function () {
                        var rstate = newScript_1.readyState;
                        if (!rstate || rstate === 'loaded' || rstate === 'complete') {
                            newScript_1.onload = newScript_1.onreadystatechange = null;
                            if (newScript_1.parentNode) {
                                newScript_1.parentNode.removeChild(newScript_1);
                            }
                            loadCB();
                        }
                    };
                    newScript_1.onerror = function () {
                        log('Long-poll script failed to load: ' + url);
                        _this.sendNewPolls = false;
                        _this.close();
                    };
                    _this.myIFrame.doc.body.appendChild(newScript_1);
                }
                catch (e) {
                    // TODO: we should make this error visible somehow
                }
            }, Math.floor(1));
        }
    };
    return FirebaseIFrameScriptHolder;
}());

/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** The semver (www.semver.org) version of the SDK. */
var SDK_VERSION = '';
// SDK_VERSION should be set before any database instance is created
function setSDKVersion(version) {
    SDK_VERSION = version;
}

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var WEBSOCKET_MAX_FRAME_SIZE = 16384;
var WEBSOCKET_KEEPALIVE_INTERVAL = 45000;
var WebSocketImpl = null;
if (typeof MozWebSocket !== 'undefined') {
    WebSocketImpl = MozWebSocket;
}
else if (typeof WebSocket !== 'undefined') {
    WebSocketImpl = WebSocket;
}
/**
 * Create a new websocket connection with the given callbacks.
 * @constructor
 * @implements {Transport}
 */
var WebSocketConnection = /** @class */ (function () {
    /**
     * @param {string} connId identifier for this transport
     * @param {RepoInfo} repoInfo The info for the websocket endpoint.
     * @param {string=} transportSessionId Optional transportSessionId if this is connecting to an existing transport
     *                                         session
     * @param {string=} lastSessionId Optional lastSessionId if there was a previous connection
     */
    function WebSocketConnection(connId, repoInfo, transportSessionId, lastSessionId) {
        this.connId = connId;
        this.keepaliveTimer = null;
        this.frames = null;
        this.totalFrames = 0;
        this.bytesSent = 0;
        this.bytesReceived = 0;
        this.log_ = logWrapper(this.connId);
        this.stats_ = StatsManager.getCollection(repoInfo);
        this.connURL = WebSocketConnection.connectionURL_(repoInfo, transportSessionId, lastSessionId);
    }
    /**
     * @param {RepoInfo} repoInfo The info for the websocket endpoint.
     * @param {string=} transportSessionId Optional transportSessionId if this is connecting to an existing transport
     *                                         session
     * @param {string=} lastSessionId Optional lastSessionId if there was a previous connection
     * @return {string} connection url
     * @private
     */
    WebSocketConnection.connectionURL_ = function (repoInfo, transportSessionId, lastSessionId) {
        var urlParams = {};
        urlParams[VERSION_PARAM] = PROTOCOL_VERSION;
        if (!util.isNodeSdk() &&
            typeof location !== 'undefined' &&
            location.href &&
            location.href.indexOf(FORGE_DOMAIN) !== -1) {
            urlParams[REFERER_PARAM] = FORGE_REF;
        }
        if (transportSessionId) {
            urlParams[TRANSPORT_SESSION_PARAM] = transportSessionId;
        }
        if (lastSessionId) {
            urlParams[LAST_SESSION_PARAM] = lastSessionId;
        }
        return repoInfo.connectionURL(WEBSOCKET, urlParams);
    };
    /**
     *
     * @param onMessage Callback when messages arrive
     * @param onDisconnect Callback with connection lost.
     */
    WebSocketConnection.prototype.open = function (onMessage, onDisconnect) {
        var _this = this;
        this.onDisconnect = onDisconnect;
        this.onMessage = onMessage;
        this.log_('Websocket connecting to ' + this.connURL);
        this.everConnected_ = false;
        // Assume failure until proven otherwise.
        PersistentStorage.set('previous_websocket_failure', true);
        try {
            if (util.isNodeSdk()) {
                var device = util.CONSTANTS.NODE_ADMIN ? 'AdminNode' : 'Node';
                // UA Format: Firebase/<wire_protocol>/<sdk_version>/<platform>/<device>
                var options = {
                    headers: {
                        'User-Agent': "Firebase/" + PROTOCOL_VERSION + "/" + SDK_VERSION + "/" + process.platform + "/" + device
                    }
                };
                // Plumb appropriate http_proxy environment variable into faye-websocket if it exists.
                var env = process['env'];
                var proxy = this.connURL.indexOf('wss://') == 0
                    ? env['HTTPS_PROXY'] || env['https_proxy']
                    : env['HTTP_PROXY'] || env['http_proxy'];
                if (proxy) {
                    options['proxy'] = { origin: proxy };
                }
                this.mySock = new WebSocketImpl(this.connURL, [], options);
            }
            else {
                this.mySock = new WebSocketImpl(this.connURL);
            }
        }
        catch (e) {
            this.log_('Error instantiating WebSocket.');
            var error = e.message || e.data;
            if (error) {
                this.log_(error);
            }
            this.onClosed_();
            return;
        }
        this.mySock.onopen = function () {
            _this.log_('Websocket connected.');
            _this.everConnected_ = true;
        };
        this.mySock.onclose = function () {
            _this.log_('Websocket connection was disconnected.');
            _this.mySock = null;
            _this.onClosed_();
        };
        this.mySock.onmessage = function (m) {
            _this.handleIncomingFrame(m);
        };
        this.mySock.onerror = function (e) {
            _this.log_('WebSocket error.  Closing connection.');
            var error = e.message || e.data;
            if (error) {
                _this.log_(error);
            }
            _this.onClosed_();
        };
    };
    /**
     * No-op for websockets, we don't need to do anything once the connection is confirmed as open
     */
    WebSocketConnection.prototype.start = function () { };
    WebSocketConnection.forceDisallow = function () {
        WebSocketConnection.forceDisallow_ = true;
    };
    WebSocketConnection.isAvailable = function () {
        var isOldAndroid = false;
        if (typeof navigator !== 'undefined' && navigator.userAgent) {
            var oldAndroidRegex = /Android ([0-9]{0,}\.[0-9]{0,})/;
            var oldAndroidMatch = navigator.userAgent.match(oldAndroidRegex);
            if (oldAndroidMatch && oldAndroidMatch.length > 1) {
                if (parseFloat(oldAndroidMatch[1]) < 4.4) {
                    isOldAndroid = true;
                }
            }
        }
        return (!isOldAndroid &&
            WebSocketImpl !== null &&
            !WebSocketConnection.forceDisallow_);
    };
    /**
     * Returns true if we previously failed to connect with this transport.
     * @return {boolean}
     */
    WebSocketConnection.previouslyFailed = function () {
        // If our persistent storage is actually only in-memory storage,
        // we default to assuming that it previously failed to be safe.
        return (PersistentStorage.isInMemoryStorage ||
            PersistentStorage.get('previous_websocket_failure') === true);
    };
    WebSocketConnection.prototype.markConnectionHealthy = function () {
        PersistentStorage.remove('previous_websocket_failure');
    };
    WebSocketConnection.prototype.appendFrame_ = function (data) {
        this.frames.push(data);
        if (this.frames.length == this.totalFrames) {
            var fullMess = this.frames.join('');
            this.frames = null;
            var jsonMess = util.jsonEval(fullMess);
            //handle the message
            this.onMessage(jsonMess);
        }
    };
    /**
     * @param {number} frameCount The number of frames we are expecting from the server
     * @private
     */
    WebSocketConnection.prototype.handleNewFrameCount_ = function (frameCount) {
        this.totalFrames = frameCount;
        this.frames = [];
    };
    /**
     * Attempts to parse a frame count out of some text. If it can't, assumes a value of 1
     * @param {!String} data
     * @return {?String} Any remaining data to be process, or null if there is none
     * @private
     */
    WebSocketConnection.prototype.extractFrameCount_ = function (data) {
        util.assert(this.frames === null, 'We already have a frame buffer');
        // TODO: The server is only supposed to send up to 9999 frames (i.e. length <= 4), but that isn't being enforced
        // currently.  So allowing larger frame counts (length <= 6).  See https://app.asana.com/0/search/8688598998380/8237608042508
        if (data.length <= 6) {
            var frameCount = Number(data);
            if (!isNaN(frameCount)) {
                this.handleNewFrameCount_(frameCount);
                return null;
            }
        }
        this.handleNewFrameCount_(1);
        return data;
    };
    /**
     * Process a websocket frame that has arrived from the server.
     * @param mess The frame data
     */
    WebSocketConnection.prototype.handleIncomingFrame = function (mess) {
        if (this.mySock === null)
            return; // Chrome apparently delivers incoming packets even after we .close() the connection sometimes.
        var data = mess['data'];
        this.bytesReceived += data.length;
        this.stats_.incrementCounter('bytes_received', data.length);
        this.resetKeepAlive();
        if (this.frames !== null) {
            // we're buffering
            this.appendFrame_(data);
        }
        else {
            // try to parse out a frame count, otherwise, assume 1 and process it
            var remainingData = this.extractFrameCount_(data);
            if (remainingData !== null) {
                this.appendFrame_(remainingData);
            }
        }
    };
    /**
     * Send a message to the server
     * @param {Object} data The JSON object to transmit
     */
    WebSocketConnection.prototype.send = function (data) {
        this.resetKeepAlive();
        var dataStr = util.stringify(data);
        this.bytesSent += dataStr.length;
        this.stats_.incrementCounter('bytes_sent', dataStr.length);
        //We can only fit a certain amount in each websocket frame, so we need to split this request
        //up into multiple pieces if it doesn't fit in one request.
        var dataSegs = splitStringBySize(dataStr, WEBSOCKET_MAX_FRAME_SIZE);
        //Send the length header
        if (dataSegs.length > 1) {
            this.sendString_(String(dataSegs.length));
        }
        //Send the actual data in segments.
        for (var i = 0; i < dataSegs.length; i++) {
            this.sendString_(dataSegs[i]);
        }
    };
    WebSocketConnection.prototype.shutdown_ = function () {
        this.isClosed_ = true;
        if (this.keepaliveTimer) {
            clearInterval(this.keepaliveTimer);
            this.keepaliveTimer = null;
        }
        if (this.mySock) {
            this.mySock.close();
            this.mySock = null;
        }
    };
    WebSocketConnection.prototype.onClosed_ = function () {
        if (!this.isClosed_) {
            this.log_('WebSocket is closing itself');
            this.shutdown_();
            // since this is an internal close, trigger the close listener
            if (this.onDisconnect) {
                this.onDisconnect(this.everConnected_);
                this.onDisconnect = null;
            }
        }
    };
    /**
     * External-facing close handler.
     * Close the websocket and kill the connection.
     */
    WebSocketConnection.prototype.close = function () {
        if (!this.isClosed_) {
            this.log_('WebSocket is being closed');
            this.shutdown_();
        }
    };
    /**
     * Kill the current keepalive timer and start a new one, to ensure that it always fires N seconds after
     * the last activity.
     */
    WebSocketConnection.prototype.resetKeepAlive = function () {
        var _this = this;
        clearInterval(this.keepaliveTimer);
        this.keepaliveTimer = setInterval(function () {
            //If there has been no websocket activity for a while, send a no-op
            if (_this.mySock) {
                _this.sendString_('0');
            }
            _this.resetKeepAlive();
        }, Math.floor(WEBSOCKET_KEEPALIVE_INTERVAL));
    };
    /**
     * Send a string over the websocket.
     *
     * @param {string} str String to send.
     * @private
     */
    WebSocketConnection.prototype.sendString_ = function (str) {
        // Firefox seems to sometimes throw exceptions (NS_ERROR_UNEXPECTED) from websocket .send()
        // calls for some unknown reason.  We treat these as an error and disconnect.
        // See https://app.asana.com/0/58926111402292/68021340250410
        try {
            this.mySock.send(str);
        }
        catch (e) {
            this.log_('Exception thrown from WebSocket.send():', e.message || e.data, 'Closing connection.');
            setTimeout(this.onClosed_.bind(this), 0);
        }
    };
    /**
     * Number of response before we consider the connection "healthy."
     * @type {number}
     */
    WebSocketConnection.responsesRequiredToBeHealthy = 2;
    /**
     * Time to wait for the connection te become healthy before giving up.
     * @type {number}
     */
    WebSocketConnection.healthyTimeout = 30000;
    return WebSocketConnection;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Currently simplistic, this class manages what transport a Connection should use at various stages of its
 * lifecycle.
 *
 * It starts with longpolling in a browser, and httppolling on node. It then upgrades to websockets if
 * they are available.
 * @constructor
 */
var TransportManager = /** @class */ (function () {
    /**
     * @param {!RepoInfo} repoInfo Metadata around the namespace we're connecting to
     */
    function TransportManager(repoInfo) {
        this.initTransports_(repoInfo);
    }
    Object.defineProperty(TransportManager, "ALL_TRANSPORTS", {
        /**
         * @const
         * @type {!Array.<function(new:Transport, string, RepoInfo, string=)>}
         */
        get: function () {
            return [BrowserPollConnection, WebSocketConnection];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {!RepoInfo} repoInfo
     * @private
     */
    TransportManager.prototype.initTransports_ = function (repoInfo) {
        var e_1, _a;
        var isWebSocketsAvailable = WebSocketConnection && WebSocketConnection['isAvailable']();
        var isSkipPollConnection = isWebSocketsAvailable && !WebSocketConnection.previouslyFailed();
        if (repoInfo.webSocketOnly) {
            if (!isWebSocketsAvailable)
                warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway.");
            isSkipPollConnection = true;
        }
        if (isSkipPollConnection) {
            this.transports_ = [WebSocketConnection];
        }
        else {
            var transports = (this.transports_ = []);
            try {
                for (var _b = tslib_1.__values(TransportManager.ALL_TRANSPORTS), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var transport = _c.value;
                    if (transport && transport['isAvailable']()) {
                        transports.push(transport);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
    };
    /**
     * @return {function(new:Transport, !string, !RepoInfo, string=, string=)} The constructor for the
     * initial transport to use
     */
    TransportManager.prototype.initialTransport = function () {
        if (this.transports_.length > 0) {
            return this.transports_[0];
        }
        else {
            throw new Error('No transports available');
        }
    };
    /**
     * @return {?function(new:Transport, function(),function(), string=)} The constructor for the next
     * transport, or null
     */
    TransportManager.prototype.upgradeTransport = function () {
        if (this.transports_.length > 1) {
            return this.transports_[1];
        }
        else {
            return null;
        }
    };
    return TransportManager;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Abort upgrade attempt if it takes longer than 60s.
var UPGRADE_TIMEOUT = 60000;
// For some transports (WebSockets), we need to "validate" the transport by exchanging a few requests and responses.
// If we haven't sent enough requests within 5s, we'll start sending noop ping requests.
var DELAY_BEFORE_SENDING_EXTRA_REQUESTS = 5000;
// If the initial data sent triggers a lot of bandwidth (i.e. it's a large put or a listen for a large amount of data)
// then we may not be able to exchange our ping/pong requests within the healthy timeout.  So if we reach the timeout
// but we've sent/received enough bytes, we don't cancel the connection.
var BYTES_SENT_HEALTHY_OVERRIDE = 10 * 1024;
var BYTES_RECEIVED_HEALTHY_OVERRIDE = 100 * 1024;
var MESSAGE_TYPE = 't';
var MESSAGE_DATA = 'd';
var CONTROL_SHUTDOWN = 's';
var CONTROL_RESET = 'r';
var CONTROL_ERROR = 'e';
var CONTROL_PONG = 'o';
var SWITCH_ACK = 'a';
var END_TRANSMISSION = 'n';
var PING = 'p';
var SERVER_HELLO = 'h';
/**
 * Creates a new real-time connection to the server using whichever method works
 * best in the current browser.
 *
 * @constructor
 */
var Connection = /** @class */ (function () {
    /**
     * @param {!string} id - an id for this connection
     * @param {!RepoInfo} repoInfo_ - the info for the endpoint to connect to
     * @param {function(Object)} onMessage_ - the callback to be triggered when a server-push message arrives
     * @param {function(number, string)} onReady_ - the callback to be triggered when this connection is ready to send messages.
     * @param {function()} onDisconnect_ - the callback to be triggered when a connection was lost
     * @param {function(string)} onKill_ - the callback to be triggered when this connection has permanently shut down.
     * @param {string=} lastSessionId - last session id in persistent connection. is used to clean up old session in real-time server
     */
    function Connection(id, repoInfo_, onMessage_, onReady_, onDisconnect_, onKill_, lastSessionId) {
        this.id = id;
        this.repoInfo_ = repoInfo_;
        this.onMessage_ = onMessage_;
        this.onReady_ = onReady_;
        this.onDisconnect_ = onDisconnect_;
        this.onKill_ = onKill_;
        this.lastSessionId = lastSessionId;
        this.connectionCount = 0;
        this.pendingDataMessages = [];
        this.state_ = 0 /* CONNECTING */;
        this.log_ = logWrapper('c:' + this.id + ':');
        this.transportManager_ = new TransportManager(repoInfo_);
        this.log_('Connection created');
        this.start_();
    }
    /**
     * Starts a connection attempt
     * @private
     */
    Connection.prototype.start_ = function () {
        var _this = this;
        var conn = this.transportManager_.initialTransport();
        this.conn_ = new conn(this.nextTransportId_(), this.repoInfo_, undefined, this.lastSessionId);
        // For certain transports (WebSockets), we need to send and receive several messages back and forth before we
        // can consider the transport healthy.
        this.primaryResponsesRequired_ = conn['responsesRequiredToBeHealthy'] || 0;
        var onMessageReceived = this.connReceiver_(this.conn_);
        var onConnectionLost = this.disconnReceiver_(this.conn_);
        this.tx_ = this.conn_;
        this.rx_ = this.conn_;
        this.secondaryConn_ = null;
        this.isHealthy_ = false;
        /*
         * Firefox doesn't like when code from one iframe tries to create another iframe by way of the parent frame.
         * This can occur in the case of a redirect, i.e. we guessed wrong on what server to connect to and received a reset.
         * Somehow, setTimeout seems to make this ok. That doesn't make sense from a security perspective, since you should
         * still have the context of your originating frame.
         */
        setTimeout(function () {
            // this.conn_ gets set to null in some of the tests. Check to make sure it still exists before using it
            _this.conn_ && _this.conn_.open(onMessageReceived, onConnectionLost);
        }, Math.floor(0));
        var healthyTimeout_ms = conn['healthyTimeout'] || 0;
        if (healthyTimeout_ms > 0) {
            this.healthyTimeout_ = setTimeoutNonBlocking(function () {
                _this.healthyTimeout_ = null;
                if (!_this.isHealthy_) {
                    if (_this.conn_ &&
                        _this.conn_.bytesReceived > BYTES_RECEIVED_HEALTHY_OVERRIDE) {
                        _this.log_('Connection exceeded healthy timeout but has received ' +
                            _this.conn_.bytesReceived +
                            ' bytes.  Marking connection healthy.');
                        _this.isHealthy_ = true;
                        _this.conn_.markConnectionHealthy();
                    }
                    else if (_this.conn_ &&
                        _this.conn_.bytesSent > BYTES_SENT_HEALTHY_OVERRIDE) {
                        _this.log_('Connection exceeded healthy timeout but has sent ' +
                            _this.conn_.bytesSent +
                            ' bytes.  Leaving connection alive.');
                        // NOTE: We don't want to mark it healthy, since we have no guarantee that the bytes have made it to
                        // the server.
                    }
                    else {
                        _this.log_('Closing unhealthy connection after timeout.');
                        _this.close();
                    }
                }
            }, Math.floor(healthyTimeout_ms));
        }
    };
    /**
     * @return {!string}
     * @private
     */
    Connection.prototype.nextTransportId_ = function () {
        return 'c:' + this.id + ':' + this.connectionCount++;
    };
    Connection.prototype.disconnReceiver_ = function (conn) {
        var _this = this;
        return function (everConnected) {
            if (conn === _this.conn_) {
                _this.onConnectionLost_(everConnected);
            }
            else if (conn === _this.secondaryConn_) {
                _this.log_('Secondary connection lost.');
                _this.onSecondaryConnectionLost_();
            }
            else {
                _this.log_('closing an old connection');
            }
        };
    };
    Connection.prototype.connReceiver_ = function (conn) {
        var _this = this;
        return function (message) {
            if (_this.state_ != 2 /* DISCONNECTED */) {
                if (conn === _this.rx_) {
                    _this.onPrimaryMessageReceived_(message);
                }
                else if (conn === _this.secondaryConn_) {
                    _this.onSecondaryMessageReceived_(message);
                }
                else {
                    _this.log_('message on old connection');
                }
            }
        };
    };
    /**
     *
     * @param {Object} dataMsg An arbitrary data message to be sent to the server
     */
    Connection.prototype.sendRequest = function (dataMsg) {
        // wrap in a data message envelope and send it on
        var msg = { t: 'd', d: dataMsg };
        this.sendData_(msg);
    };
    Connection.prototype.tryCleanupConnection = function () {
        if (this.tx_ === this.secondaryConn_ && this.rx_ === this.secondaryConn_) {
            this.log_('cleaning up and promoting a connection: ' + this.secondaryConn_.connId);
            this.conn_ = this.secondaryConn_;
            this.secondaryConn_ = null;
            // the server will shutdown the old connection
        }
    };
    Connection.prototype.onSecondaryControl_ = function (controlData) {
        if (MESSAGE_TYPE in controlData) {
            var cmd = controlData[MESSAGE_TYPE];
            if (cmd === SWITCH_ACK) {
                this.upgradeIfSecondaryHealthy_();
            }
            else if (cmd === CONTROL_RESET) {
                // Most likely the session wasn't valid. Abandon the switch attempt
                this.log_('Got a reset on secondary, closing it');
                this.secondaryConn_.close();
                // If we were already using this connection for something, than we need to fully close
                if (this.tx_ === this.secondaryConn_ ||
                    this.rx_ === this.secondaryConn_) {
                    this.close();
                }
            }
            else if (cmd === CONTROL_PONG) {
                this.log_('got pong on secondary.');
                this.secondaryResponsesRequired_--;
                this.upgradeIfSecondaryHealthy_();
            }
        }
    };
    Connection.prototype.onSecondaryMessageReceived_ = function (parsedData) {
        var layer = requireKey('t', parsedData);
        var data = requireKey('d', parsedData);
        if (layer == 'c') {
            this.onSecondaryControl_(data);
        }
        else if (layer == 'd') {
            // got a data message, but we're still second connection. Need to buffer it up
            this.pendingDataMessages.push(data);
        }
        else {
            throw new Error('Unknown protocol layer: ' + layer);
        }
    };
    Connection.prototype.upgradeIfSecondaryHealthy_ = function () {
        if (this.secondaryResponsesRequired_ <= 0) {
            this.log_('Secondary connection is healthy.');
            this.isHealthy_ = true;
            this.secondaryConn_.markConnectionHealthy();
            this.proceedWithUpgrade_();
        }
        else {
            // Send a ping to make sure the connection is healthy.
            this.log_('sending ping on secondary.');
            this.secondaryConn_.send({ t: 'c', d: { t: PING, d: {} } });
        }
    };
    Connection.prototype.proceedWithUpgrade_ = function () {
        // tell this connection to consider itself open
        this.secondaryConn_.start();
        // send ack
        this.log_('sending client ack on secondary');
        this.secondaryConn_.send({ t: 'c', d: { t: SWITCH_ACK, d: {} } });
        // send end packet on primary transport, switch to sending on this one
        // can receive on this one, buffer responses until end received on primary transport
        this.log_('Ending transmission on primary');
        this.conn_.send({ t: 'c', d: { t: END_TRANSMISSION, d: {} } });
        this.tx_ = this.secondaryConn_;
        this.tryCleanupConnection();
    };
    Connection.prototype.onPrimaryMessageReceived_ = function (parsedData) {
        // Must refer to parsedData properties in quotes, so closure doesn't touch them.
        var layer = requireKey('t', parsedData);
        var data = requireKey('d', parsedData);
        if (layer == 'c') {
            this.onControl_(data);
        }
        else if (layer == 'd') {
            this.onDataMessage_(data);
        }
    };
    Connection.prototype.onDataMessage_ = function (message) {
        this.onPrimaryResponse_();
        // We don't do anything with data messages, just kick them up a level
        this.onMessage_(message);
    };
    Connection.prototype.onPrimaryResponse_ = function () {
        if (!this.isHealthy_) {
            this.primaryResponsesRequired_--;
            if (this.primaryResponsesRequired_ <= 0) {
                this.log_('Primary connection is healthy.');
                this.isHealthy_ = true;
                this.conn_.markConnectionHealthy();
            }
        }
    };
    Connection.prototype.onControl_ = function (controlData) {
        var cmd = requireKey(MESSAGE_TYPE, controlData);
        if (MESSAGE_DATA in controlData) {
            var payload = controlData[MESSAGE_DATA];
            if (cmd === SERVER_HELLO) {
                this.onHandshake_(payload);
            }
            else if (cmd === END_TRANSMISSION) {
                this.log_('recvd end transmission on primary');
                this.rx_ = this.secondaryConn_;
                for (var i = 0; i < this.pendingDataMessages.length; ++i) {
                    this.onDataMessage_(this.pendingDataMessages[i]);
                }
                this.pendingDataMessages = [];
                this.tryCleanupConnection();
            }
            else if (cmd === CONTROL_SHUTDOWN) {
                // This was previously the 'onKill' callback passed to the lower-level connection
                // payload in this case is the reason for the shutdown. Generally a human-readable error
                this.onConnectionShutdown_(payload);
            }
            else if (cmd === CONTROL_RESET) {
                // payload in this case is the host we should contact
                this.onReset_(payload);
            }
            else if (cmd === CONTROL_ERROR) {
                error('Server Error: ' + payload);
            }
            else if (cmd === CONTROL_PONG) {
                this.log_('got pong on primary.');
                this.onPrimaryResponse_();
                this.sendPingOnPrimaryIfNecessary_();
            }
            else {
                error('Unknown control packet command: ' + cmd);
            }
        }
    };
    /**
     *
     * @param {Object} handshake The handshake data returned from the server
     * @private
     */
    Connection.prototype.onHandshake_ = function (handshake) {
        var timestamp = handshake.ts;
        var version = handshake.v;
        var host = handshake.h;
        this.sessionId = handshake.s;
        this.repoInfo_.updateHost(host);
        // if we've already closed the connection, then don't bother trying to progress further
        if (this.state_ == 0 /* CONNECTING */) {
            this.conn_.start();
            this.onConnectionEstablished_(this.conn_, timestamp);
            if (PROTOCOL_VERSION !== version) {
                warn('Protocol version mismatch detected');
            }
            // TODO: do we want to upgrade? when? maybe a delay?
            this.tryStartUpgrade_();
        }
    };
    Connection.prototype.tryStartUpgrade_ = function () {
        var conn = this.transportManager_.upgradeTransport();
        if (conn) {
            this.startUpgrade_(conn);
        }
    };
    Connection.prototype.startUpgrade_ = function (conn) {
        var _this = this;
        this.secondaryConn_ = new conn(this.nextTransportId_(), this.repoInfo_, this.sessionId);
        // For certain transports (WebSockets), we need to send and receive several messages back and forth before we
        // can consider the transport healthy.
        this.secondaryResponsesRequired_ =
            conn['responsesRequiredToBeHealthy'] || 0;
        var onMessage = this.connReceiver_(this.secondaryConn_);
        var onDisconnect = this.disconnReceiver_(this.secondaryConn_);
        this.secondaryConn_.open(onMessage, onDisconnect);
        // If we haven't successfully upgraded after UPGRADE_TIMEOUT, give up and kill the secondary.
        setTimeoutNonBlocking(function () {
            if (_this.secondaryConn_) {
                _this.log_('Timed out trying to upgrade.');
                _this.secondaryConn_.close();
            }
        }, Math.floor(UPGRADE_TIMEOUT));
    };
    Connection.prototype.onReset_ = function (host) {
        this.log_('Reset packet received.  New host: ' + host);
        this.repoInfo_.updateHost(host);
        // TODO: if we're already "connected", we need to trigger a disconnect at the next layer up.
        // We don't currently support resets after the connection has already been established
        if (this.state_ === 1 /* CONNECTED */) {
            this.close();
        }
        else {
            // Close whatever connections we have open and start again.
            this.closeConnections_();
            this.start_();
        }
    };
    Connection.prototype.onConnectionEstablished_ = function (conn, timestamp) {
        var _this = this;
        this.log_('Realtime connection established.');
        this.conn_ = conn;
        this.state_ = 1 /* CONNECTED */;
        if (this.onReady_) {
            this.onReady_(timestamp, this.sessionId);
            this.onReady_ = null;
        }
        // If after 5 seconds we haven't sent enough requests to the server to get the connection healthy,
        // send some pings.
        if (this.primaryResponsesRequired_ === 0) {
            this.log_('Primary connection is healthy.');
            this.isHealthy_ = true;
        }
        else {
            setTimeoutNonBlocking(function () {
                _this.sendPingOnPrimaryIfNecessary_();
            }, Math.floor(DELAY_BEFORE_SENDING_EXTRA_REQUESTS));
        }
    };
    Connection.prototype.sendPingOnPrimaryIfNecessary_ = function () {
        // If the connection isn't considered healthy yet, we'll send a noop ping packet request.
        if (!this.isHealthy_ && this.state_ === 1 /* CONNECTED */) {
            this.log_('sending ping on primary.');
            this.sendData_({ t: 'c', d: { t: PING, d: {} } });
        }
    };
    Connection.prototype.onSecondaryConnectionLost_ = function () {
        var conn = this.secondaryConn_;
        this.secondaryConn_ = null;
        if (this.tx_ === conn || this.rx_ === conn) {
            // we are relying on this connection already in some capacity. Therefore, a failure is real
            this.close();
        }
    };
    /**
     *
     * @param {boolean} everConnected Whether or not the connection ever reached a server. Used to determine if
     * we should flush the host cache
     * @private
     */
    Connection.prototype.onConnectionLost_ = function (everConnected) {
        this.conn_ = null;
        // NOTE: IF you're seeing a Firefox error for this line, I think it might be because it's getting
        // called on window close and RealtimeState.CONNECTING is no longer defined.  Just a guess.
        if (!everConnected && this.state_ === 0 /* CONNECTING */) {
            this.log_('Realtime connection failed.');
            // Since we failed to connect at all, clear any cached entry for this namespace in case the machine went away
            if (this.repoInfo_.isCacheableHost()) {
                PersistentStorage.remove('host:' + this.repoInfo_.host);
                // reset the internal host to what we would show the user, i.e. <ns>.firebaseio.com
                this.repoInfo_.internalHost = this.repoInfo_.host;
            }
        }
        else if (this.state_ === 1 /* CONNECTED */) {
            this.log_('Realtime connection lost.');
        }
        this.close();
    };
    /**
     *
     * @param {string} reason
     * @private
     */
    Connection.prototype.onConnectionShutdown_ = function (reason) {
        this.log_('Connection shutdown command received. Shutting down...');
        if (this.onKill_) {
            this.onKill_(reason);
            this.onKill_ = null;
        }
        // We intentionally don't want to fire onDisconnect (kill is a different case),
        // so clear the callback.
        this.onDisconnect_ = null;
        this.close();
    };
    Connection.prototype.sendData_ = function (data) {
        if (this.state_ !== 1 /* CONNECTED */) {
            throw 'Connection is not connected';
        }
        else {
            this.tx_.send(data);
        }
    };
    /**
     * Cleans up this connection, calling the appropriate callbacks
     */
    Connection.prototype.close = function () {
        if (this.state_ !== 2 /* DISCONNECTED */) {
            this.log_('Closing realtime connection.');
            this.state_ = 2 /* DISCONNECTED */;
            this.closeConnections_();
            if (this.onDisconnect_) {
                this.onDisconnect_();
                this.onDisconnect_ = null;
            }
        }
    };
    /**
     *
     * @private
     */
    Connection.prototype.closeConnections_ = function () {
        this.log_('Shutting down all connections');
        if (this.conn_) {
            this.conn_.close();
            this.conn_ = null;
        }
        if (this.secondaryConn_) {
            this.secondaryConn_.close();
            this.secondaryConn_ = null;
        }
        if (this.healthyTimeout_) {
            clearTimeout(this.healthyTimeout_);
            this.healthyTimeout_ = null;
        }
    };
    return Connection;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Interface defining the set of actions that can be performed against the Firebase server
 * (basically corresponds to our wire protocol).
 *
 * @interface
 */
var ServerActions = /** @class */ (function () {
    function ServerActions() {
    }
    /**
     * @param {string} pathString
     * @param {*} data
     * @param {function(string, string)=} onComplete
     * @param {string=} hash
     */
    ServerActions.prototype.put = function (pathString, data, onComplete, hash) { };
    /**
     * @param {string} pathString
     * @param {*} data
     * @param {function(string, ?string)} onComplete
     * @param {string=} hash
     */
    ServerActions.prototype.merge = function (pathString, data, onComplete, hash) { };
    /**
     * Refreshes the auth token for the current connection.
     * @param {string} token The authentication token
     */
    ServerActions.prototype.refreshAuthToken = function (token) { };
    /**
     * @param {string} pathString
     * @param {*} data
     * @param {function(string, string)=} onComplete
     */
    ServerActions.prototype.onDisconnectPut = function (pathString, data, onComplete) { };
    /**
     * @param {string} pathString
     * @param {*} data
     * @param {function(string, string)=} onComplete
     */
    ServerActions.prototype.onDisconnectMerge = function (pathString, data, onComplete) { };
    /**
     * @param {string} pathString
     * @param {function(string, string)=} onComplete
     */
    ServerActions.prototype.onDisconnectCancel = function (pathString, onComplete) { };
    /**
     * @param {Object.<string, *>} stats
     */
    ServerActions.prototype.reportStats = function (stats) { };
    return ServerActions;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var RECONNECT_MIN_DELAY = 1000;
var RECONNECT_MAX_DELAY_DEFAULT = 60 * 5 * 1000; // 5 minutes in milliseconds (Case: 1858)
var RECONNECT_MAX_DELAY_FOR_ADMINS = 30 * 1000; // 30 seconds for admin clients (likely to be a backend server)
var RECONNECT_DELAY_MULTIPLIER = 1.3;
var RECONNECT_DELAY_RESET_TIMEOUT = 30000; // Reset delay back to MIN_DELAY after being connected for 30sec.
var SERVER_KILL_INTERRUPT_REASON = 'server_kill';
// If auth fails repeatedly, we'll assume something is wrong and log a warning / back off.
var INVALID_AUTH_TOKEN_THRESHOLD = 3;
/**
 * Firebase connection.  Abstracts wire protocol and handles reconnecting.
 *
 * NOTE: All JSON objects sent to the realtime connection must have property names enclosed
 * in quotes to make sure the closure compiler does not minify them.
 */
var PersistentConnection = /** @class */ (function (_super) {
    tslib_1.__extends(PersistentConnection, _super);
    /**
     * @implements {ServerActions}
     * @param repoInfo_ Data about the namespace we are connecting to
     * @param onDataUpdate_ A callback for new data from the server
     */
    function PersistentConnection(repoInfo_, onDataUpdate_, onConnectStatus_, onServerInfoUpdate_, authTokenProvider_, authOverride_) {
        var _this = _super.call(this) || this;
        _this.repoInfo_ = repoInfo_;
        _this.onDataUpdate_ = onDataUpdate_;
        _this.onConnectStatus_ = onConnectStatus_;
        _this.onServerInfoUpdate_ = onServerInfoUpdate_;
        _this.authTokenProvider_ = authTokenProvider_;
        _this.authOverride_ = authOverride_;
        // Used for diagnostic logging.
        _this.id = PersistentConnection.nextPersistentConnectionId_++;
        _this.log_ = logWrapper('p:' + _this.id + ':');
        _this.interruptReasons_ = {};
        /** Map<path, Map<queryId, ListenSpec>> */
        _this.listens = new Map();
        _this.outstandingPuts_ = [];
        _this.outstandingPutCount_ = 0;
        _this.onDisconnectRequestQueue_ = [];
        _this.connected_ = false;
        _this.reconnectDelay_ = RECONNECT_MIN_DELAY;
        _this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_DEFAULT;
        _this.securityDebugCallback_ = null;
        _this.lastSessionId = null;
        _this.establishConnectionTimer_ = null;
        _this.visible_ = false;
        // Before we get connected, we keep a queue of pending messages to send.
        _this.requestCBHash_ = {};
        _this.requestNumber_ = 0;
        _this.realtime_ = null;
        _this.authToken_ = null;
        _this.forceTokenRefresh_ = false;
        _this.invalidAuthTokenCount_ = 0;
        _this.firstConnection_ = true;
        _this.lastConnectionAttemptTime_ = null;
        _this.lastConnectionEstablishedTime_ = null;
        if (authOverride_ && !util.isNodeSdk()) {
            throw new Error('Auth override specified in options, but not supported on non Node.js platforms');
        }
        _this.scheduleConnect_(0);
        VisibilityMonitor.getInstance().on('visible', _this.onVisible_, _this);
        if (repoInfo_.host.indexOf('fblocal') === -1) {
            OnlineMonitor.getInstance().on('online', _this.onOnline_, _this);
        }
        return _this;
    }
    PersistentConnection.prototype.sendRequest = function (action, body, onResponse) {
        var curReqNum = ++this.requestNumber_;
        var msg = { r: curReqNum, a: action, b: body };
        this.log_(util.stringify(msg));
        util.assert(this.connected_, "sendRequest call when we're not connected not allowed.");
        this.realtime_.sendRequest(msg);
        if (onResponse) {
            this.requestCBHash_[curReqNum] = onResponse;
        }
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.listen = function (query, currentHashFn, tag, onComplete) {
        var queryId = query.queryIdentifier();
        var pathString = query.path.toString();
        this.log_('Listen called for ' + pathString + ' ' + queryId);
        if (!this.listens.has(pathString)) {
            this.listens.set(pathString, new Map());
        }
        util.assert(query.getQueryParams().isDefault() ||
            !query.getQueryParams().loadsAllData(), 'listen() called for non-default but complete query');
        util.assert(!this.listens.get(pathString).has(queryId), 'listen() called twice for same path/queryId.');
        var listenSpec = {
            onComplete: onComplete,
            hashFn: currentHashFn,
            query: query,
            tag: tag
        };
        this.listens.get(pathString).set(queryId, listenSpec);
        if (this.connected_) {
            this.sendListen_(listenSpec);
        }
    };
    PersistentConnection.prototype.sendListen_ = function (listenSpec) {
        var _this = this;
        var query = listenSpec.query;
        var pathString = query.path.toString();
        var queryId = query.queryIdentifier();
        this.log_('Listen on ' + pathString + ' for ' + queryId);
        var req = { /*path*/ p: pathString };
        var action = 'q';
        // Only bother to send query if it's non-default.
        if (listenSpec.tag) {
            req['q'] = query.queryObject();
            req['t'] = listenSpec.tag;
        }
        req[ /*hash*/'h'] = listenSpec.hashFn();
        this.sendRequest(action, req, function (message) {
            var payload = message[ /*data*/'d'];
            var status = message[ /*status*/'s'];
            // print warnings in any case...
            PersistentConnection.warnOnListenWarnings_(payload, query);
            var currentListenSpec = _this.listens.get(pathString) &&
                _this.listens.get(pathString).get(queryId);
            // only trigger actions if the listen hasn't been removed and readded
            if (currentListenSpec === listenSpec) {
                _this.log_('listen response', message);
                if (status !== 'ok') {
                    _this.removeListen_(pathString, queryId);
                }
                if (listenSpec.onComplete) {
                    listenSpec.onComplete(status, payload);
                }
            }
        });
    };
    PersistentConnection.warnOnListenWarnings_ = function (payload, query) {
        if (payload && typeof payload === 'object' && util.contains(payload, 'w')) {
            var warnings = util.safeGet(payload, 'w');
            if (Array.isArray(warnings) && ~warnings.indexOf('no_index')) {
                var indexSpec = '".indexOn": "' +
                    query
                        .getQueryParams()
                        .getIndex()
                        .toString() +
                    '"';
                var indexPath = query.path.toString();
                warn("Using an unspecified index. Your data will be downloaded and " +
                    ("filtered on the client. Consider adding " + indexSpec + " at ") +
                    (indexPath + " to your security rules for better performance."));
            }
        }
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.refreshAuthToken = function (token) {
        this.authToken_ = token;
        this.log_('Auth token refreshed');
        if (this.authToken_) {
            this.tryAuth();
        }
        else {
            //If we're connected we want to let the server know to unauthenticate us. If we're not connected, simply delete
            //the credential so we dont become authenticated next time we connect.
            if (this.connected_) {
                this.sendRequest('unauth', {}, function () { });
            }
        }
        this.reduceReconnectDelayIfAdminCredential_(token);
    };
    PersistentConnection.prototype.reduceReconnectDelayIfAdminCredential_ = function (credential) {
        // NOTE: This isn't intended to be bulletproof (a malicious developer can always just modify the client).
        // Additionally, we don't bother resetting the max delay back to the default if auth fails / expires.
        var isFirebaseSecret = credential && credential.length === 40;
        if (isFirebaseSecret || util.isAdmin(credential)) {
            this.log_('Admin auth credential detected.  Reducing max reconnect time.');
            this.maxReconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
        }
    };
    /**
     * Attempts to authenticate with the given credentials. If the authentication attempt fails, it's triggered like
     * a auth revoked (the connection is closed).
     */
    PersistentConnection.prototype.tryAuth = function () {
        var _this = this;
        if (this.connected_ && this.authToken_) {
            var token_1 = this.authToken_;
            var authMethod = util.isValidFormat(token_1) ? 'auth' : 'gauth';
            var requestData = { cred: token_1 };
            if (this.authOverride_ === null) {
                requestData['noauth'] = true;
            }
            else if (typeof this.authOverride_ === 'object') {
                requestData['authvar'] = this.authOverride_;
            }
            this.sendRequest(authMethod, requestData, function (res) {
                var status = res[ /*status*/'s'];
                var data = res[ /*data*/'d'] || 'error';
                if (_this.authToken_ === token_1) {
                    if (status === 'ok') {
                        _this.invalidAuthTokenCount_ = 0;
                    }
                    else {
                        // Triggers reconnect and force refresh for auth token
                        _this.onAuthRevoked_(status, data);
                    }
                }
            });
        }
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.unlisten = function (query, tag) {
        var pathString = query.path.toString();
        var queryId = query.queryIdentifier();
        this.log_('Unlisten called for ' + pathString + ' ' + queryId);
        util.assert(query.getQueryParams().isDefault() ||
            !query.getQueryParams().loadsAllData(), 'unlisten() called for non-default but complete query');
        var listen = this.removeListen_(pathString, queryId);
        if (listen && this.connected_) {
            this.sendUnlisten_(pathString, queryId, query.queryObject(), tag);
        }
    };
    PersistentConnection.prototype.sendUnlisten_ = function (pathString, queryId, queryObj, tag) {
        this.log_('Unlisten on ' + pathString + ' for ' + queryId);
        var req = { /*path*/ p: pathString };
        var action = 'n';
        // Only bother sending queryId if it's non-default.
        if (tag) {
            req['q'] = queryObj;
            req['t'] = tag;
        }
        this.sendRequest(action, req);
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.onDisconnectPut = function (pathString, data, onComplete) {
        if (this.connected_) {
            this.sendOnDisconnect_('o', pathString, data, onComplete);
        }
        else {
            this.onDisconnectRequestQueue_.push({
                pathString: pathString,
                action: 'o',
                data: data,
                onComplete: onComplete
            });
        }
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.onDisconnectMerge = function (pathString, data, onComplete) {
        if (this.connected_) {
            this.sendOnDisconnect_('om', pathString, data, onComplete);
        }
        else {
            this.onDisconnectRequestQueue_.push({
                pathString: pathString,
                action: 'om',
                data: data,
                onComplete: onComplete
            });
        }
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.onDisconnectCancel = function (pathString, onComplete) {
        if (this.connected_) {
            this.sendOnDisconnect_('oc', pathString, null, onComplete);
        }
        else {
            this.onDisconnectRequestQueue_.push({
                pathString: pathString,
                action: 'oc',
                data: null,
                onComplete: onComplete
            });
        }
    };
    PersistentConnection.prototype.sendOnDisconnect_ = function (action, pathString, data, onComplete) {
        var request = { /*path*/ p: pathString, /*data*/ d: data };
        this.log_('onDisconnect ' + action, request);
        this.sendRequest(action, request, function (response) {
            if (onComplete) {
                setTimeout(function () {
                    onComplete(response[ /*status*/'s'], response[ /* data */'d']);
                }, Math.floor(0));
            }
        });
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.put = function (pathString, data, onComplete, hash) {
        this.putInternal('p', pathString, data, onComplete, hash);
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.merge = function (pathString, data, onComplete, hash) {
        this.putInternal('m', pathString, data, onComplete, hash);
    };
    PersistentConnection.prototype.putInternal = function (action, pathString, data, onComplete, hash) {
        var request = {
            /*path*/ p: pathString,
            /*data*/ d: data
        };
        if (hash !== undefined)
            request[ /*hash*/'h'] = hash;
        // TODO: Only keep track of the most recent put for a given path?
        this.outstandingPuts_.push({
            action: action,
            request: request,
            onComplete: onComplete
        });
        this.outstandingPutCount_++;
        var index = this.outstandingPuts_.length - 1;
        if (this.connected_) {
            this.sendPut_(index);
        }
        else {
            this.log_('Buffering put: ' + pathString);
        }
    };
    PersistentConnection.prototype.sendPut_ = function (index) {
        var _this = this;
        var action = this.outstandingPuts_[index].action;
        var request = this.outstandingPuts_[index].request;
        var onComplete = this.outstandingPuts_[index].onComplete;
        this.outstandingPuts_[index].queued = this.connected_;
        this.sendRequest(action, request, function (message) {
            _this.log_(action + ' response', message);
            delete _this.outstandingPuts_[index];
            _this.outstandingPutCount_--;
            // Clean up array occasionally.
            if (_this.outstandingPutCount_ === 0) {
                _this.outstandingPuts_ = [];
            }
            if (onComplete)
                onComplete(message[ /*status*/'s'], message[ /* data */'d']);
        });
    };
    /**
     * @inheritDoc
     */
    PersistentConnection.prototype.reportStats = function (stats) {
        var _this = this;
        // If we're not connected, we just drop the stats.
        if (this.connected_) {
            var request = { /*counters*/ c: stats };
            this.log_('reportStats', request);
            this.sendRequest(/*stats*/ 's', request, function (result) {
                var status = result[ /*status*/'s'];
                if (status !== 'ok') {
                    var errorReason = result[ /* data */'d'];
                    _this.log_('reportStats', 'Error sending stats: ' + errorReason);
                }
            });
        }
    };
    PersistentConnection.prototype.onDataMessage_ = function (message) {
        if ('r' in message) {
            // this is a response
            this.log_('from server: ' + util.stringify(message));
            var reqNum = message['r'];
            var onResponse = this.requestCBHash_[reqNum];
            if (onResponse) {
                delete this.requestCBHash_[reqNum];
                onResponse(message[ /*body*/'b']);
            }
        }
        else if ('error' in message) {
            throw 'A server-side error has occurred: ' + message['error'];
        }
        else if ('a' in message) {
            // a and b are action and body, respectively
            this.onDataPush_(message['a'], message['b']);
        }
    };
    PersistentConnection.prototype.onDataPush_ = function (action, body) {
        this.log_('handleServerMessage', action, body);
        if (action === 'd')
            this.onDataUpdate_(body[ /*path*/'p'], body[ /*data*/'d'], 
            /*isMerge*/ false, body['t']);
        else if (action === 'm')
            this.onDataUpdate_(body[ /*path*/'p'], body[ /*data*/'d'], 
            /*isMerge=*/ true, body['t']);
        else if (action === 'c')
            this.onListenRevoked_(body[ /*path*/'p'], body[ /*query*/'q']);
        else if (action === 'ac')
            this.onAuthRevoked_(body[ /*status code*/'s'], body[ /* explanation */'d']);
        else if (action === 'sd')
            this.onSecurityDebugPacket_(body);
        else
            error('Unrecognized action received from server: ' +
                util.stringify(action) +
                '\nAre you using the latest client?');
    };
    PersistentConnection.prototype.onReady_ = function (timestamp, sessionId) {
        this.log_('connection ready');
        this.connected_ = true;
        this.lastConnectionEstablishedTime_ = new Date().getTime();
        this.handleTimestamp_(timestamp);
        this.lastSessionId = sessionId;
        if (this.firstConnection_) {
            this.sendConnectStats_();
        }
        this.restoreState_();
        this.firstConnection_ = false;
        this.onConnectStatus_(true);
    };
    PersistentConnection.prototype.scheduleConnect_ = function (timeout) {
        var _this = this;
        util.assert(!this.realtime_, "Scheduling a connect when we're already connected/ing?");
        if (this.establishConnectionTimer_) {
            clearTimeout(this.establishConnectionTimer_);
        }
        // NOTE: Even when timeout is 0, it's important to do a setTimeout to work around an infuriating "Security Error" in
        // Firefox when trying to write to our long-polling iframe in some scenarios (e.g. Forge or our unit tests).
        this.establishConnectionTimer_ = setTimeout(function () {
            _this.establishConnectionTimer_ = null;
            _this.establishConnection_();
        }, Math.floor(timeout));
    };
    PersistentConnection.prototype.onVisible_ = function (visible) {
        // NOTE: Tabbing away and back to a window will defeat our reconnect backoff, but I think that's fine.
        if (visible &&
            !this.visible_ &&
            this.reconnectDelay_ === this.maxReconnectDelay_) {
            this.log_('Window became visible.  Reducing delay.');
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            if (!this.realtime_) {
                this.scheduleConnect_(0);
            }
        }
        this.visible_ = visible;
    };
    PersistentConnection.prototype.onOnline_ = function (online) {
        if (online) {
            this.log_('Browser went online.');
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            if (!this.realtime_) {
                this.scheduleConnect_(0);
            }
        }
        else {
            this.log_('Browser went offline.  Killing connection.');
            if (this.realtime_) {
                this.realtime_.close();
            }
        }
    };
    PersistentConnection.prototype.onRealtimeDisconnect_ = function () {
        this.log_('data client disconnected');
        this.connected_ = false;
        this.realtime_ = null;
        // Since we don't know if our sent transactions succeeded or not, we need to cancel them.
        this.cancelSentTransactions_();
        // Clear out the pending requests.
        this.requestCBHash_ = {};
        if (this.shouldReconnect_()) {
            if (!this.visible_) {
                this.log_("Window isn't visible.  Delaying reconnect.");
                this.reconnectDelay_ = this.maxReconnectDelay_;
                this.lastConnectionAttemptTime_ = new Date().getTime();
            }
            else if (this.lastConnectionEstablishedTime_) {
                // If we've been connected long enough, reset reconnect delay to minimum.
                var timeSinceLastConnectSucceeded = new Date().getTime() - this.lastConnectionEstablishedTime_;
                if (timeSinceLastConnectSucceeded > RECONNECT_DELAY_RESET_TIMEOUT)
                    this.reconnectDelay_ = RECONNECT_MIN_DELAY;
                this.lastConnectionEstablishedTime_ = null;
            }
            var timeSinceLastConnectAttempt = new Date().getTime() - this.lastConnectionAttemptTime_;
            var reconnectDelay = Math.max(0, this.reconnectDelay_ - timeSinceLastConnectAttempt);
            reconnectDelay = Math.random() * reconnectDelay;
            this.log_('Trying to reconnect in ' + reconnectDelay + 'ms');
            this.scheduleConnect_(reconnectDelay);
            // Adjust reconnect delay for next time.
            this.reconnectDelay_ = Math.min(this.maxReconnectDelay_, this.reconnectDelay_ * RECONNECT_DELAY_MULTIPLIER);
        }
        this.onConnectStatus_(false);
    };
    PersistentConnection.prototype.establishConnection_ = function () {
        if (this.shouldReconnect_()) {
            this.log_('Making a connection attempt');
            this.lastConnectionAttemptTime_ = new Date().getTime();
            this.lastConnectionEstablishedTime_ = null;
            var onDataMessage_1 = this.onDataMessage_.bind(this);
            var onReady_1 = this.onReady_.bind(this);
            var onDisconnect_1 = this.onRealtimeDisconnect_.bind(this);
            var connId_1 = this.id + ':' + PersistentConnection.nextConnectionId_++;
            var self_1 = this;
            var lastSessionId_1 = this.lastSessionId;
            var canceled_1 = false;
            var connection_1 = null;
            var closeFn_1 = function () {
                if (connection_1) {
                    connection_1.close();
                }
                else {
                    canceled_1 = true;
                    onDisconnect_1();
                }
            };
            var sendRequestFn = function (msg) {
                util.assert(connection_1, "sendRequest call when we're not connected not allowed.");
                connection_1.sendRequest(msg);
            };
            this.realtime_ = {
                close: closeFn_1,
                sendRequest: sendRequestFn
            };
            var forceRefresh = this.forceTokenRefresh_;
            this.forceTokenRefresh_ = false;
            // First fetch auth token, and establish connection after fetching the token was successful
            this.authTokenProvider_
                .getToken(forceRefresh)
                .then(function (result) {
                if (!canceled_1) {
                    log('getToken() completed. Creating connection.');
                    self_1.authToken_ = result && result.accessToken;
                    connection_1 = new Connection(connId_1, self_1.repoInfo_, onDataMessage_1, onReady_1, onDisconnect_1, 
                    /* onKill= */ function (reason) {
                        warn(reason + ' (' + self_1.repoInfo_.toString() + ')');
                        self_1.interrupt(SERVER_KILL_INTERRUPT_REASON);
                    }, lastSessionId_1);
                }
                else {
                    log('getToken() completed but was canceled');
                }
            })
                .then(null, function (error) {
                self_1.log_('Failed to get token: ' + error);
                if (!canceled_1) {
                    if (util.CONSTANTS.NODE_ADMIN) {
                        // This may be a critical error for the Admin Node.js SDK, so log a warning.
                        // But getToken() may also just have temporarily failed, so we still want to
                        // continue retrying.
                        warn(error);
                    }
                    closeFn_1();
                }
            });
        }
    };
    PersistentConnection.prototype.interrupt = function (reason) {
        log('Interrupting connection for reason: ' + reason);
        this.interruptReasons_[reason] = true;
        if (this.realtime_) {
            this.realtime_.close();
        }
        else {
            if (this.establishConnectionTimer_) {
                clearTimeout(this.establishConnectionTimer_);
                this.establishConnectionTimer_ = null;
            }
            if (this.connected_) {
                this.onRealtimeDisconnect_();
            }
        }
    };
    PersistentConnection.prototype.resume = function (reason) {
        log('Resuming connection for reason: ' + reason);
        delete this.interruptReasons_[reason];
        if (util.isEmpty(this.interruptReasons_)) {
            this.reconnectDelay_ = RECONNECT_MIN_DELAY;
            if (!this.realtime_) {
                this.scheduleConnect_(0);
            }
        }
    };
    PersistentConnection.prototype.handleTimestamp_ = function (timestamp) {
        var delta = timestamp - new Date().getTime();
        this.onServerInfoUpdate_({ serverTimeOffset: delta });
    };
    PersistentConnection.prototype.cancelSentTransactions_ = function () {
        for (var i = 0; i < this.outstandingPuts_.length; i++) {
            var put = this.outstandingPuts_[i];
            if (put && /*hash*/ 'h' in put.request && put.queued) {
                if (put.onComplete)
                    put.onComplete('disconnect');
                delete this.outstandingPuts_[i];
                this.outstandingPutCount_--;
            }
        }
        // Clean up array occasionally.
        if (this.outstandingPutCount_ === 0)
            this.outstandingPuts_ = [];
    };
    PersistentConnection.prototype.onListenRevoked_ = function (pathString, query) {
        // Remove the listen and manufacture a "permission_denied" error for the failed listen.
        var queryId;
        if (!query) {
            queryId = 'default';
        }
        else {
            queryId = query.map(function (q) { return ObjectToUniqueKey(q); }).join('$');
        }
        var listen = this.removeListen_(pathString, queryId);
        if (listen && listen.onComplete)
            listen.onComplete('permission_denied');
    };
    PersistentConnection.prototype.removeListen_ = function (pathString, queryId) {
        var normalizedPathString = new Path(pathString).toString(); // normalize path.
        var listen;
        if (this.listens.has(normalizedPathString)) {
            var map = this.listens.get(normalizedPathString);
            listen = map.get(queryId);
            map.delete(queryId);
            if (map.size === 0) {
                this.listens.delete(normalizedPathString);
            }
        }
        else {
            // all listens for this path has already been removed
            listen = undefined;
        }
        return listen;
    };
    PersistentConnection.prototype.onAuthRevoked_ = function (statusCode, explanation) {
        log('Auth token revoked: ' + statusCode + '/' + explanation);
        this.authToken_ = null;
        this.forceTokenRefresh_ = true;
        this.realtime_.close();
        if (statusCode === 'invalid_token' || statusCode === 'permission_denied') {
            // We'll wait a couple times before logging the warning / increasing the
            // retry period since oauth tokens will report as "invalid" if they're
            // just expired. Plus there may be transient issues that resolve themselves.
            this.invalidAuthTokenCount_++;
            if (this.invalidAuthTokenCount_ >= INVALID_AUTH_TOKEN_THRESHOLD) {
                // Set a long reconnect delay because recovery is unlikely
                this.reconnectDelay_ = RECONNECT_MAX_DELAY_FOR_ADMINS;
                // Notify the auth token provider that the token is invalid, which will log
                // a warning
                this.authTokenProvider_.notifyForInvalidToken();
            }
        }
    };
    PersistentConnection.prototype.onSecurityDebugPacket_ = function (body) {
        if (this.securityDebugCallback_) {
            this.securityDebugCallback_(body);
        }
        else {
            if ('msg' in body) {
                console.log('FIREBASE: ' + body['msg'].replace('\n', '\nFIREBASE: '));
            }
        }
    };
    PersistentConnection.prototype.restoreState_ = function () {
        var e_1, _a, e_2, _b;
        //Re-authenticate ourselves if we have a credential stored.
        this.tryAuth();
        try {
            // Puts depend on having received the corresponding data update from the server before they complete, so we must
            // make sure to send listens before puts.
            for (var _c = tslib_1.__values(this.listens.values()), _d = _c.next(); !_d.done; _d = _c.next()) {
                var queries = _d.value;
                try {
                    for (var _e = (e_2 = void 0, tslib_1.__values(queries.values())), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var listenSpec = _f.value;
                        this.sendListen_(listenSpec);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
        for (var i = 0; i < this.outstandingPuts_.length; i++) {
            if (this.outstandingPuts_[i])
                this.sendPut_(i);
        }
        while (this.onDisconnectRequestQueue_.length) {
            var request = this.onDisconnectRequestQueue_.shift();
            this.sendOnDisconnect_(request.action, request.pathString, request.data, request.onComplete);
        }
    };
    /**
     * Sends client stats for first connection
     */
    PersistentConnection.prototype.sendConnectStats_ = function () {
        var stats = {};
        var clientName = 'js';
        if (util.CONSTANTS.NODE_ADMIN) {
            clientName = 'admin_node';
        }
        else if (util.CONSTANTS.NODE_CLIENT) {
            clientName = 'node';
        }
        stats['sdk.' + clientName + '.' + SDK_VERSION.replace(/\./g, '-')] = 1;
        if (util.isMobileCordova()) {
            stats['framework.cordova'] = 1;
        }
        else if (util.isReactNative()) {
            stats['framework.reactnative'] = 1;
        }
        this.reportStats(stats);
    };
    PersistentConnection.prototype.shouldReconnect_ = function () {
        var online = OnlineMonitor.getInstance().currentlyOnline();
        return util.isEmpty(this.interruptReasons_) && online;
    };
    PersistentConnection.nextPersistentConnectionId_ = 0;
    /**
     * Counter for number of connections created. Mainly used for tagging in the logs
     */
    PersistentConnection.nextConnectionId_ = 0;
    return PersistentConnection;
}(ServerActions));

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An implementation of ServerActions that communicates with the server via REST requests.
 * This is mostly useful for compatibility with crawlers, where we don't want to spin up a full
 * persistent connection (using WebSockets or long-polling)
 */
var ReadonlyRestClient = /** @class */ (function (_super) {
    tslib_1.__extends(ReadonlyRestClient, _super);
    /**
     * @param {!RepoInfo} repoInfo_ Data about the namespace we are connecting to
     * @param {function(string, *, boolean, ?number)} onDataUpdate_ A callback for new data from the server
     * @param {AuthTokenProvider} authTokenProvider_
     * @implements {ServerActions}
     */
    function ReadonlyRestClient(repoInfo_, onDataUpdate_, authTokenProvider_) {
        var _this = _super.call(this) || this;
        _this.repoInfo_ = repoInfo_;
        _this.onDataUpdate_ = onDataUpdate_;
        _this.authTokenProvider_ = authTokenProvider_;
        /** @private {function(...[*])} */
        _this.log_ = logWrapper('p:rest:');
        /**
         * We don't actually need to track listens, except to prevent us calling an onComplete for a listen
         * that's been removed. :-/
         *
         * @private {!Object.<string, !Object>}
         */
        _this.listens_ = {};
        return _this;
    }
    ReadonlyRestClient.prototype.reportStats = function (stats) {
        throw new Error('Method not implemented.');
    };
    /**
     * @param {!Query} query
     * @param {?number=} tag
     * @return {string}
     * @private
     */
    ReadonlyRestClient.getListenId_ = function (query, tag) {
        if (tag !== undefined) {
            return 'tag$' + tag;
        }
        else {
            util.assert(query.getQueryParams().isDefault(), "should have a tag if it's not a default query.");
            return query.path.toString();
        }
    };
    /** @inheritDoc */
    ReadonlyRestClient.prototype.listen = function (query, currentHashFn, tag, onComplete) {
        var _this = this;
        var pathString = query.path.toString();
        this.log_('Listen called for ' + pathString + ' ' + query.queryIdentifier());
        // Mark this listener so we can tell if it's removed.
        var listenId = ReadonlyRestClient.getListenId_(query, tag);
        var thisListen = {};
        this.listens_[listenId] = thisListen;
        var queryStringParameters = query
            .getQueryParams()
            .toRestQueryStringParameters();
        this.restRequest_(pathString + '.json', queryStringParameters, function (error, result) {
            var data = result;
            if (error === 404) {
                data = null;
                error = null;
            }
            if (error === null) {
                _this.onDataUpdate_(pathString, data, /*isMerge=*/ false, tag);
            }
            if (util.safeGet(_this.listens_, listenId) === thisListen) {
                var status_1;
                if (!error) {
                    status_1 = 'ok';
                }
                else if (error == 401) {
                    status_1 = 'permission_denied';
                }
                else {
                    status_1 = 'rest_error:' + error;
                }
                onComplete(status_1, null);
            }
        });
    };
    /** @inheritDoc */
    ReadonlyRestClient.prototype.unlisten = function (query, tag) {
        var listenId = ReadonlyRestClient.getListenId_(query, tag);
        delete this.listens_[listenId];
    };
    /** @inheritDoc */
    ReadonlyRestClient.prototype.refreshAuthToken = function (token) {
        // no-op since we just always call getToken.
    };
    /**
     * Performs a REST request to the given path, with the provided query string parameters,
     * and any auth credentials we have.
     *
     * @param {!string} pathString
     * @param {!Object.<string, *>} queryStringParameters
     * @param {?function(?number, *=)} callback
     * @private
     */
    ReadonlyRestClient.prototype.restRequest_ = function (pathString, queryStringParameters, callback) {
        var _this = this;
        if (queryStringParameters === void 0) { queryStringParameters = {}; }
        queryStringParameters['format'] = 'export';
        this.authTokenProvider_
            .getToken(/*forceRefresh=*/ false)
            .then(function (authTokenData) {
            var authToken = authTokenData && authTokenData.accessToken;
            if (authToken) {
                queryStringParameters['auth'] = authToken;
            }
            var url = (_this.repoInfo_.secure ? 'https://' : 'http://') +
                _this.repoInfo_.host +
                pathString +
                '?' +
                'ns=' +
                _this.repoInfo_.namespace +
                util.querystring(queryStringParameters);
            _this.log_('Sending REST request for ' + url);
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (callback && xhr.readyState === 4) {
                    _this.log_('REST Response for ' + url + ' received. status:', xhr.status, 'response:', xhr.responseText);
                    var res = null;
                    if (xhr.status >= 200 && xhr.status < 300) {
                        try {
                            res = util.jsonEval(xhr.responseText);
                        }
                        catch (e) {
                            warn('Failed to parse JSON response for ' +
                                url +
                                ': ' +
                                xhr.responseText);
                        }
                        callback(null, res);
                    }
                    else {
                        // 401 and 404 are expected.
                        if (xhr.status !== 401 && xhr.status !== 404) {
                            warn('Got unsuccessful REST response for ' +
                                url +
                                ' Status: ' +
                                xhr.status);
                        }
                        callback(xhr.status);
                    }
                    callback = null;
                }
            };
            xhr.open('GET', url, /*asynchronous=*/ true);
            xhr.send();
        });
    };
    return ReadonlyRestClient;
}(ServerActions));

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var INTERRUPT_REASON = 'repo_interrupt';
/**
 * A connection to a single data repository.
 */
var Repo = /** @class */ (function () {
    function Repo(repoInfo_, forceRestClient, app) {
        var _this = this;
        this.repoInfo_ = repoInfo_;
        this.app = app;
        this.dataUpdateCount = 0;
        this.statsListener_ = null;
        this.eventQueue_ = new EventQueue();
        this.nextWriteId_ = 1;
        this.interceptServerDataCallback_ = null;
        /** A list of data pieces and paths to be set when this client disconnects. */
        this.onDisconnect_ = new SparseSnapshotTree();
        // TODO: This should be @private but it's used by test_access.js and internal.js
        this.persistentConnection_ = null;
        var authTokenProvider = new AuthTokenProvider(app);
        this.stats_ = StatsManager.getCollection(repoInfo_);
        if (forceRestClient || beingCrawled()) {
            this.server_ = new ReadonlyRestClient(this.repoInfo_, this.onDataUpdate_.bind(this), authTokenProvider);
            // Minor hack: Fire onConnect immediately, since there's no actual connection.
            setTimeout(this.onConnectStatus_.bind(this, true), 0);
        }
        else {
            var authOverride = app.options['databaseAuthVariableOverride'];
            // Validate authOverride
            if (typeof authOverride !== 'undefined' && authOverride !== null) {
                if (typeof authOverride !== 'object') {
                    throw new Error('Only objects are supported for option databaseAuthVariableOverride');
                }
                try {
                    util.stringify(authOverride);
                }
                catch (e) {
                    throw new Error('Invalid authOverride provided: ' + e);
                }
            }
            this.persistentConnection_ = new PersistentConnection(this.repoInfo_, this.onDataUpdate_.bind(this), this.onConnectStatus_.bind(this), this.onServerInfoUpdate_.bind(this), authTokenProvider, authOverride);
            this.server_ = this.persistentConnection_;
        }
        authTokenProvider.addTokenChangeListener(function (token) {
            _this.server_.refreshAuthToken(token);
        });
        // In the case of multiple Repos for the same repoInfo (i.e. there are multiple Firebase.Contexts being used),
        // we only want to create one StatsReporter.  As such, we'll report stats over the first Repo created.
        this.statsReporter_ = StatsManager.getOrCreateReporter(repoInfo_, function () { return new StatsReporter(_this.stats_, _this.server_); });
        this.transactions_init_();
        // Used for .info.
        this.infoData_ = new SnapshotHolder();
        this.infoSyncTree_ = new SyncTree({
            startListening: function (query, tag, currentHashFn, onComplete) {
                var infoEvents = [];
                var node = _this.infoData_.getNode(query.path);
                // This is possibly a hack, but we have different semantics for .info endpoints. We don't raise null events
                // on initial data...
                if (!node.isEmpty()) {
                    infoEvents = _this.infoSyncTree_.applyServerOverwrite(query.path, node);
                    setTimeout(function () {
                        onComplete('ok');
                    }, 0);
                }
                return infoEvents;
            },
            stopListening: function () { }
        });
        this.updateInfo_('connected', false);
        this.serverSyncTree_ = new SyncTree({
            startListening: function (query, tag, currentHashFn, onComplete) {
                _this.server_.listen(query, currentHashFn, tag, function (status, data) {
                    var events = onComplete(status, data);
                    _this.eventQueue_.raiseEventsForChangedPath(query.path, events);
                });
                // No synchronous events for network-backed sync trees
                return [];
            },
            stopListening: function (query, tag) {
                _this.server_.unlisten(query, tag);
            }
        });
    }
    /**
     * @return The URL corresponding to the root of this Firebase.
     */
    Repo.prototype.toString = function () {
        return ((this.repoInfo_.secure ? 'https://' : 'http://') + this.repoInfo_.host);
    };
    /**
     * @return The namespace represented by the repo.
     */
    Repo.prototype.name = function () {
        return this.repoInfo_.namespace;
    };
    /**
     * @return The time in milliseconds, taking the server offset into account if we have one.
     */
    Repo.prototype.serverTime = function () {
        var offsetNode = this.infoData_.getNode(new Path('.info/serverTimeOffset'));
        var offset = offsetNode.val() || 0;
        return new Date().getTime() + offset;
    };
    /**
     * Generate ServerValues using some variables from the repo object.
     */
    Repo.prototype.generateServerValues = function () {
        return generateWithValues({
            timestamp: this.serverTime()
        });
    };
    /**
     * Called by realtime when we get new messages from the server.
     */
    Repo.prototype.onDataUpdate_ = function (pathString, data, isMerge, tag) {
        // For testing.
        this.dataUpdateCount++;
        var path = new Path(pathString);
        data = this.interceptServerDataCallback_
            ? this.interceptServerDataCallback_(pathString, data)
            : data;
        var events = [];
        if (tag) {
            if (isMerge) {
                var taggedChildren = util.map(data, function (raw) {
                    return nodeFromJSON$1(raw);
                });
                events = this.serverSyncTree_.applyTaggedQueryMerge(path, taggedChildren, tag);
            }
            else {
                var taggedSnap = nodeFromJSON$1(data);
                events = this.serverSyncTree_.applyTaggedQueryOverwrite(path, taggedSnap, tag);
            }
        }
        else if (isMerge) {
            var changedChildren = util.map(data, function (raw) {
                return nodeFromJSON$1(raw);
            });
            events = this.serverSyncTree_.applyServerMerge(path, changedChildren);
        }
        else {
            var snap = nodeFromJSON$1(data);
            events = this.serverSyncTree_.applyServerOverwrite(path, snap);
        }
        var affectedPath = path;
        if (events.length > 0) {
            // Since we have a listener outstanding for each transaction, receiving any events
            // is a proxy for some change having occurred.
            affectedPath = this.rerunTransactions_(path);
        }
        this.eventQueue_.raiseEventsForChangedPath(affectedPath, events);
    };
    // TODO: This should be @private but it's used by test_access.js and internal.js
    Repo.prototype.interceptServerData_ = function (callback) {
        this.interceptServerDataCallback_ = callback;
    };
    Repo.prototype.onConnectStatus_ = function (connectStatus) {
        this.updateInfo_('connected', connectStatus);
        if (connectStatus === false) {
            this.runOnDisconnectEvents_();
        }
    };
    Repo.prototype.onServerInfoUpdate_ = function (updates) {
        var _this = this;
        each(updates, function (value, key) {
            _this.updateInfo_(key, value);
        });
    };
    Repo.prototype.updateInfo_ = function (pathString, value) {
        var path = new Path('/.info/' + pathString);
        var newNode = nodeFromJSON$1(value);
        this.infoData_.updateSnapshot(path, newNode);
        var events = this.infoSyncTree_.applyServerOverwrite(path, newNode);
        this.eventQueue_.raiseEventsForChangedPath(path, events);
    };
    Repo.prototype.getNextWriteId_ = function () {
        return this.nextWriteId_++;
    };
    Repo.prototype.setWithPriority = function (path, newVal, newPriority, onComplete) {
        var _this = this;
        this.log_('set', {
            path: path.toString(),
            value: newVal,
            priority: newPriority
        });
        // TODO: Optimize this behavior to either (a) store flag to skip resolving where possible and / or
        // (b) store unresolved paths on JSON parse
        var serverValues = this.generateServerValues();
        var newNodeUnresolved = nodeFromJSON$1(newVal, newPriority);
        var newNode = resolveDeferredValueSnapshot(newNodeUnresolved, serverValues);
        var writeId = this.getNextWriteId_();
        var events = this.serverSyncTree_.applyUserOverwrite(path, newNode, writeId, true);
        this.eventQueue_.queueEvents(events);
        this.server_.put(path.toString(), newNodeUnresolved.val(/*export=*/ true), function (status, errorReason) {
            var success = status === 'ok';
            if (!success) {
                warn('set at ' + path + ' failed: ' + status);
            }
            var clearEvents = _this.serverSyncTree_.ackUserWrite(writeId, !success);
            _this.eventQueue_.raiseEventsForChangedPath(path, clearEvents);
            _this.callOnCompleteCallback(onComplete, status, errorReason);
        });
        var affectedPath = this.abortTransactions_(path);
        this.rerunTransactions_(affectedPath);
        // We queued the events above, so just flush the queue here
        this.eventQueue_.raiseEventsForChangedPath(affectedPath, []);
    };
    Repo.prototype.update = function (path, childrenToMerge, onComplete) {
        var _this = this;
        this.log_('update', { path: path.toString(), value: childrenToMerge });
        // Start with our existing data and merge each child into it.
        var empty = true;
        var serverValues = this.generateServerValues();
        var changedChildren = {};
        each(childrenToMerge, function (changedKey, changedValue) {
            empty = false;
            var newNodeUnresolved = nodeFromJSON$1(changedValue);
            changedChildren[changedKey] = resolveDeferredValueSnapshot(newNodeUnresolved, serverValues);
        });
        if (!empty) {
            var writeId_1 = this.getNextWriteId_();
            var events = this.serverSyncTree_.applyUserMerge(path, changedChildren, writeId_1);
            this.eventQueue_.queueEvents(events);
            this.server_.merge(path.toString(), childrenToMerge, function (status, errorReason) {
                var success = status === 'ok';
                if (!success) {
                    warn('update at ' + path + ' failed: ' + status);
                }
                var clearEvents = _this.serverSyncTree_.ackUserWrite(writeId_1, !success);
                var affectedPath = clearEvents.length > 0 ? _this.rerunTransactions_(path) : path;
                _this.eventQueue_.raiseEventsForChangedPath(affectedPath, clearEvents);
                _this.callOnCompleteCallback(onComplete, status, errorReason);
            });
            each(childrenToMerge, function (changedPath) {
                var affectedPath = _this.abortTransactions_(path.child(changedPath));
                _this.rerunTransactions_(affectedPath);
            });
            // We queued the events above, so just flush the queue here
            this.eventQueue_.raiseEventsForChangedPath(path, []);
        }
        else {
            log("update() called with empty data.  Don't do anything.");
            this.callOnCompleteCallback(onComplete, 'ok');
        }
    };
    /**
     * Applies all of the changes stored up in the onDisconnect_ tree.
     */
    Repo.prototype.runOnDisconnectEvents_ = function () {
        var _this = this;
        this.log_('onDisconnectEvents');
        var serverValues = this.generateServerValues();
        var resolvedOnDisconnectTree = resolveDeferredValueTree(this.onDisconnect_, serverValues);
        var events = [];
        resolvedOnDisconnectTree.forEachTree(Path.Empty, function (path, snap) {
            events = events.concat(_this.serverSyncTree_.applyServerOverwrite(path, snap));
            var affectedPath = _this.abortTransactions_(path);
            _this.rerunTransactions_(affectedPath);
        });
        this.onDisconnect_ = new SparseSnapshotTree();
        this.eventQueue_.raiseEventsForChangedPath(Path.Empty, events);
    };
    Repo.prototype.onDisconnectCancel = function (path, onComplete) {
        var _this = this;
        this.server_.onDisconnectCancel(path.toString(), function (status, errorReason) {
            if (status === 'ok') {
                _this.onDisconnect_.forget(path);
            }
            _this.callOnCompleteCallback(onComplete, status, errorReason);
        });
    };
    Repo.prototype.onDisconnectSet = function (path, value, onComplete) {
        var _this = this;
        var newNode = nodeFromJSON$1(value);
        this.server_.onDisconnectPut(path.toString(), newNode.val(/*export=*/ true), function (status, errorReason) {
            if (status === 'ok') {
                _this.onDisconnect_.remember(path, newNode);
            }
            _this.callOnCompleteCallback(onComplete, status, errorReason);
        });
    };
    Repo.prototype.onDisconnectSetWithPriority = function (path, value, priority, onComplete) {
        var _this = this;
        var newNode = nodeFromJSON$1(value, priority);
        this.server_.onDisconnectPut(path.toString(), newNode.val(/*export=*/ true), function (status, errorReason) {
            if (status === 'ok') {
                _this.onDisconnect_.remember(path, newNode);
            }
            _this.callOnCompleteCallback(onComplete, status, errorReason);
        });
    };
    Repo.prototype.onDisconnectUpdate = function (path, childrenToMerge, onComplete) {
        var _this = this;
        if (util.isEmpty(childrenToMerge)) {
            log("onDisconnect().update() called with empty data.  Don't do anything.");
            this.callOnCompleteCallback(onComplete, 'ok');
            return;
        }
        this.server_.onDisconnectMerge(path.toString(), childrenToMerge, function (status, errorReason) {
            if (status === 'ok') {
                each(childrenToMerge, function (childName, childNode) {
                    var newChildNode = nodeFromJSON$1(childNode);
                    _this.onDisconnect_.remember(path.child(childName), newChildNode);
                });
            }
            _this.callOnCompleteCallback(onComplete, status, errorReason);
        });
    };
    Repo.prototype.addEventCallbackForQuery = function (query, eventRegistration) {
        var events;
        if (query.path.getFront() === '.info') {
            events = this.infoSyncTree_.addEventRegistration(query, eventRegistration);
        }
        else {
            events = this.serverSyncTree_.addEventRegistration(query, eventRegistration);
        }
        this.eventQueue_.raiseEventsAtPath(query.path, events);
    };
    Repo.prototype.removeEventCallbackForQuery = function (query, eventRegistration) {
        // These are guaranteed not to raise events, since we're not passing in a cancelError. However, we can future-proof
        // a little bit by handling the return values anyways.
        var events;
        if (query.path.getFront() === '.info') {
            events = this.infoSyncTree_.removeEventRegistration(query, eventRegistration);
        }
        else {
            events = this.serverSyncTree_.removeEventRegistration(query, eventRegistration);
        }
        this.eventQueue_.raiseEventsAtPath(query.path, events);
    };
    Repo.prototype.interrupt = function () {
        if (this.persistentConnection_) {
            this.persistentConnection_.interrupt(INTERRUPT_REASON);
        }
    };
    Repo.prototype.resume = function () {
        if (this.persistentConnection_) {
            this.persistentConnection_.resume(INTERRUPT_REASON);
        }
    };
    Repo.prototype.stats = function (showDelta) {
        if (showDelta === void 0) { showDelta = false; }
        if (typeof console === 'undefined')
            return;
        var stats;
        if (showDelta) {
            if (!this.statsListener_)
                this.statsListener_ = new StatsListener(this.stats_);
            stats = this.statsListener_.get();
        }
        else {
            stats = this.stats_.get();
        }
        var longestName = Object.keys(stats).reduce(function (previousValue, currentValue) {
            return Math.max(currentValue.length, previousValue);
        }, 0);
        each(stats, function (stat, value) {
            var paddedStat = stat;
            // pad stat names to be the same length (plus 2 extra spaces).
            for (var i = stat.length; i < longestName + 2; i++) {
                paddedStat += ' ';
            }
            console.log(paddedStat + value);
        });
    };
    Repo.prototype.statsIncrementCounter = function (metric) {
        this.stats_.incrementCounter(metric);
        this.statsReporter_.includeStat(metric);
    };
    Repo.prototype.log_ = function () {
        var var_args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            var_args[_i] = arguments[_i];
        }
        var prefix = '';
        if (this.persistentConnection_) {
            prefix = this.persistentConnection_.id + ':';
        }
        log.apply(void 0, tslib_1.__spread([prefix], var_args));
    };
    Repo.prototype.callOnCompleteCallback = function (callback, status, errorReason) {
        if (callback) {
            exceptionGuard(function () {
                if (status == 'ok') {
                    callback(null);
                }
                else {
                    var code = (status || 'error').toUpperCase();
                    var message = code;
                    if (errorReason)
                        message += ': ' + errorReason;
                    var error = new Error(message);
                    error.code = code;
                    callback(error);
                }
            });
        }
    };
    Object.defineProperty(Repo.prototype, "database", {
        get: function () {
            return this.__database || (this.__database = new Database(this));
        },
        enumerable: true,
        configurable: true
    });
    return Repo;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Filters nodes by range and uses an IndexFilter to track any changes after filtering the node
 *
 * @constructor
 * @implements {NodeFilter}
 */
var RangedFilter = /** @class */ (function () {
    /**
     * @param {!QueryParams} params
     */
    function RangedFilter(params) {
        this.indexedFilter_ = new IndexedFilter(params.getIndex());
        this.index_ = params.getIndex();
        this.startPost_ = RangedFilter.getStartPost_(params);
        this.endPost_ = RangedFilter.getEndPost_(params);
    }
    /**
     * @return {!NamedNode}
     */
    RangedFilter.prototype.getStartPost = function () {
        return this.startPost_;
    };
    /**
     * @return {!NamedNode}
     */
    RangedFilter.prototype.getEndPost = function () {
        return this.endPost_;
    };
    /**
     * @param {!NamedNode} node
     * @return {boolean}
     */
    RangedFilter.prototype.matches = function (node) {
        return (this.index_.compare(this.getStartPost(), node) <= 0 &&
            this.index_.compare(node, this.getEndPost()) <= 0);
    };
    /**
     * @inheritDoc
     */
    RangedFilter.prototype.updateChild = function (snap, key, newChild, affectedPath, source, optChangeAccumulator) {
        if (!this.matches(new NamedNode(key, newChild))) {
            newChild = ChildrenNode.EMPTY_NODE;
        }
        return this.indexedFilter_.updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
    };
    /**
     * @inheritDoc
     */
    RangedFilter.prototype.updateFullNode = function (oldSnap, newSnap, optChangeAccumulator) {
        if (newSnap.isLeafNode()) {
            // Make sure we have a children node with the correct index, not a leaf node;
            newSnap = ChildrenNode.EMPTY_NODE;
        }
        var filtered = newSnap.withIndex(this.index_);
        // Don't support priorities on queries
        filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
        var self = this;
        newSnap.forEachChild(PRIORITY_INDEX, function (key, childNode) {
            if (!self.matches(new NamedNode(key, childNode))) {
                filtered = filtered.updateImmediateChild(key, ChildrenNode.EMPTY_NODE);
            }
        });
        return this.indexedFilter_.updateFullNode(oldSnap, filtered, optChangeAccumulator);
    };
    /**
     * @inheritDoc
     */
    RangedFilter.prototype.updatePriority = function (oldSnap, newPriority) {
        // Don't support priorities on queries
        return oldSnap;
    };
    /**
     * @inheritDoc
     */
    RangedFilter.prototype.filtersNodes = function () {
        return true;
    };
    /**
     * @inheritDoc
     */
    RangedFilter.prototype.getIndexedFilter = function () {
        return this.indexedFilter_;
    };
    /**
     * @inheritDoc
     */
    RangedFilter.prototype.getIndex = function () {
        return this.index_;
    };
    /**
     * @param {!QueryParams} params
     * @return {!NamedNode}
     * @private
     */
    RangedFilter.getStartPost_ = function (params) {
        if (params.hasStart()) {
            var startName = params.getIndexStartName();
            return params.getIndex().makePost(params.getIndexStartValue(), startName);
        }
        else {
            return params.getIndex().minPost();
        }
    };
    /**
     * @param {!QueryParams} params
     * @return {!NamedNode}
     * @private
     */
    RangedFilter.getEndPost_ = function (params) {
        if (params.hasEnd()) {
            var endName = params.getIndexEndName();
            return params.getIndex().makePost(params.getIndexEndValue(), endName);
        }
        else {
            return params.getIndex().maxPost();
        }
    };
    return RangedFilter;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Applies a limit and a range to a node and uses RangedFilter to do the heavy lifting where possible
 *
 * @constructor
 * @implements {NodeFilter}
 */
var LimitedFilter = /** @class */ (function () {
    /**
     * @param {!QueryParams} params
     */
    function LimitedFilter(params) {
        this.rangedFilter_ = new RangedFilter(params);
        this.index_ = params.getIndex();
        this.limit_ = params.getLimit();
        this.reverse_ = !params.isViewFromLeft();
    }
    /**
     * @inheritDoc
     */
    LimitedFilter.prototype.updateChild = function (snap, key, newChild, affectedPath, source, optChangeAccumulator) {
        if (!this.rangedFilter_.matches(new NamedNode(key, newChild))) {
            newChild = ChildrenNode.EMPTY_NODE;
        }
        if (snap.getImmediateChild(key).equals(newChild)) {
            // No change
            return snap;
        }
        else if (snap.numChildren() < this.limit_) {
            return this.rangedFilter_
                .getIndexedFilter()
                .updateChild(snap, key, newChild, affectedPath, source, optChangeAccumulator);
        }
        else {
            return this.fullLimitUpdateChild_(snap, key, newChild, source, optChangeAccumulator);
        }
    };
    /**
     * @inheritDoc
     */
    LimitedFilter.prototype.updateFullNode = function (oldSnap, newSnap, optChangeAccumulator) {
        var filtered;
        if (newSnap.isLeafNode() || newSnap.isEmpty()) {
            // Make sure we have a children node with the correct index, not a leaf node;
            filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_);
        }
        else {
            if (this.limit_ * 2 < newSnap.numChildren() &&
                newSnap.isIndexed(this.index_)) {
                // Easier to build up a snapshot, since what we're given has more than twice the elements we want
                filtered = ChildrenNode.EMPTY_NODE.withIndex(this.index_);
                // anchor to the startPost, endPost, or last element as appropriate
                var iterator = void 0;
                if (this.reverse_) {
                    iterator = newSnap.getReverseIteratorFrom(this.rangedFilter_.getEndPost(), this.index_);
                }
                else {
                    iterator = newSnap.getIteratorFrom(this.rangedFilter_.getStartPost(), this.index_);
                }
                var count = 0;
                while (iterator.hasNext() && count < this.limit_) {
                    var next = iterator.getNext();
                    var inRange = void 0;
                    if (this.reverse_) {
                        inRange =
                            this.index_.compare(this.rangedFilter_.getStartPost(), next) <= 0;
                    }
                    else {
                        inRange =
                            this.index_.compare(next, this.rangedFilter_.getEndPost()) <= 0;
                    }
                    if (inRange) {
                        filtered = filtered.updateImmediateChild(next.name, next.node);
                        count++;
                    }
                    else {
                        // if we have reached the end post, we cannot keep adding elemments
                        break;
                    }
                }
            }
            else {
                // The snap contains less than twice the limit. Faster to delete from the snap than build up a new one
                filtered = newSnap.withIndex(this.index_);
                // Don't support priorities on queries
                filtered = filtered.updatePriority(ChildrenNode.EMPTY_NODE);
                var startPost = void 0;
                var endPost = void 0;
                var cmp = void 0;
                var iterator = void 0;
                if (this.reverse_) {
                    iterator = filtered.getReverseIterator(this.index_);
                    startPost = this.rangedFilter_.getEndPost();
                    endPost = this.rangedFilter_.getStartPost();
                    var indexCompare_1 = this.index_.getCompare();
                    cmp = function (a, b) { return indexCompare_1(b, a); };
                }
                else {
                    iterator = filtered.getIterator(this.index_);
                    startPost = this.rangedFilter_.getStartPost();
                    endPost = this.rangedFilter_.getEndPost();
                    cmp = this.index_.getCompare();
                }
                var count = 0;
                var foundStartPost = false;
                while (iterator.hasNext()) {
                    var next = iterator.getNext();
                    if (!foundStartPost && cmp(startPost, next) <= 0) {
                        // start adding
                        foundStartPost = true;
                    }
                    var inRange = foundStartPost && count < this.limit_ && cmp(next, endPost) <= 0;
                    if (inRange) {
                        count++;
                    }
                    else {
                        filtered = filtered.updateImmediateChild(next.name, ChildrenNode.EMPTY_NODE);
                    }
                }
            }
        }
        return this.rangedFilter_
            .getIndexedFilter()
            .updateFullNode(oldSnap, filtered, optChangeAccumulator);
    };
    /**
     * @inheritDoc
     */
    LimitedFilter.prototype.updatePriority = function (oldSnap, newPriority) {
        // Don't support priorities on queries
        return oldSnap;
    };
    /**
     * @inheritDoc
     */
    LimitedFilter.prototype.filtersNodes = function () {
        return true;
    };
    /**
     * @inheritDoc
     */
    LimitedFilter.prototype.getIndexedFilter = function () {
        return this.rangedFilter_.getIndexedFilter();
    };
    /**
     * @inheritDoc
     */
    LimitedFilter.prototype.getIndex = function () {
        return this.index_;
    };
    /**
     * @param {!Node} snap
     * @param {string} childKey
     * @param {!Node} childSnap
     * @param {!CompleteChildSource} source
     * @param {?ChildChangeAccumulator} changeAccumulator
     * @return {!Node}
     * @private
     */
    LimitedFilter.prototype.fullLimitUpdateChild_ = function (snap, childKey, childSnap, source, changeAccumulator) {
        // TODO: rename all cache stuff etc to general snap terminology
        var cmp;
        if (this.reverse_) {
            var indexCmp_1 = this.index_.getCompare();
            cmp = function (a, b) { return indexCmp_1(b, a); };
        }
        else {
            cmp = this.index_.getCompare();
        }
        var oldEventCache = snap;
        util.assert(oldEventCache.numChildren() == this.limit_, '');
        var newChildNamedNode = new NamedNode(childKey, childSnap);
        var windowBoundary = this.reverse_
            ? oldEventCache.getFirstChild(this.index_)
            : oldEventCache.getLastChild(this.index_);
        var inRange = this.rangedFilter_.matches(newChildNamedNode);
        if (oldEventCache.hasChild(childKey)) {
            var oldChildSnap = oldEventCache.getImmediateChild(childKey);
            var nextChild = source.getChildAfterChild(this.index_, windowBoundary, this.reverse_);
            while (nextChild != null &&
                (nextChild.name == childKey || oldEventCache.hasChild(nextChild.name))) {
                // There is a weird edge case where a node is updated as part of a merge in the write tree, but hasn't
                // been applied to the limited filter yet. Ignore this next child which will be updated later in
                // the limited filter...
                nextChild = source.getChildAfterChild(this.index_, nextChild, this.reverse_);
            }
            var compareNext = nextChild == null ? 1 : cmp(nextChild, newChildNamedNode);
            var remainsInWindow = inRange && !childSnap.isEmpty() && compareNext >= 0;
            if (remainsInWindow) {
                if (changeAccumulator != null) {
                    changeAccumulator.trackChildChange(Change.childChangedChange(childKey, childSnap, oldChildSnap));
                }
                return oldEventCache.updateImmediateChild(childKey, childSnap);
            }
            else {
                if (changeAccumulator != null) {
                    changeAccumulator.trackChildChange(Change.childRemovedChange(childKey, oldChildSnap));
                }
                var newEventCache = oldEventCache.updateImmediateChild(childKey, ChildrenNode.EMPTY_NODE);
                var nextChildInRange = nextChild != null && this.rangedFilter_.matches(nextChild);
                if (nextChildInRange) {
                    if (changeAccumulator != null) {
                        changeAccumulator.trackChildChange(Change.childAddedChange(nextChild.name, nextChild.node));
                    }
                    return newEventCache.updateImmediateChild(nextChild.name, nextChild.node);
                }
                else {
                    return newEventCache;
                }
            }
        }
        else if (childSnap.isEmpty()) {
            // we're deleting a node, but it was not in the window, so ignore it
            return snap;
        }
        else if (inRange) {
            if (cmp(windowBoundary, newChildNamedNode) >= 0) {
                if (changeAccumulator != null) {
                    changeAccumulator.trackChildChange(Change.childRemovedChange(windowBoundary.name, windowBoundary.node));
                    changeAccumulator.trackChildChange(Change.childAddedChange(childKey, childSnap));
                }
                return oldEventCache
                    .updateImmediateChild(childKey, childSnap)
                    .updateImmediateChild(windowBoundary.name, ChildrenNode.EMPTY_NODE);
            }
            else {
                return snap;
            }
        }
        else {
            return snap;
        }
    };
    return LimitedFilter;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * This class is an immutable-from-the-public-api struct containing a set of query parameters defining a
 * range to be returned for a particular location. It is assumed that validation of parameters is done at the
 * user-facing API level, so it is not done here.
 * @constructor
 */
var QueryParams = /** @class */ (function () {
    function QueryParams() {
        this.limitSet_ = false;
        this.startSet_ = false;
        this.startNameSet_ = false;
        this.endSet_ = false;
        this.endNameSet_ = false;
        this.limit_ = 0;
        this.viewFrom_ = '';
        this.indexStartValue_ = null;
        this.indexStartName_ = '';
        this.indexEndValue_ = null;
        this.indexEndName_ = '';
        this.index_ = PRIORITY_INDEX;
    }
    /**
     * @return {boolean}
     */
    QueryParams.prototype.hasStart = function () {
        return this.startSet_;
    };
    /**
     * @return {boolean} True if it would return from left.
     */
    QueryParams.prototype.isViewFromLeft = function () {
        if (this.viewFrom_ === '') {
            // limit(), rather than limitToFirst or limitToLast was called.
            // This means that only one of startSet_ and endSet_ is true. Use them
            // to calculate which side of the view to anchor to. If neither is set,
            // anchor to the end.
            return this.startSet_;
        }
        else {
            return (this.viewFrom_ === QueryParams.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT);
        }
    };
    /**
     * Only valid to call if hasStart() returns true
     * @return {*}
     */
    QueryParams.prototype.getIndexStartValue = function () {
        util.assert(this.startSet_, 'Only valid if start has been set');
        return this.indexStartValue_;
    };
    /**
     * Only valid to call if hasStart() returns true.
     * Returns the starting key name for the range defined by these query parameters
     * @return {!string}
     */
    QueryParams.prototype.getIndexStartName = function () {
        util.assert(this.startSet_, 'Only valid if start has been set');
        if (this.startNameSet_) {
            return this.indexStartName_;
        }
        else {
            return MIN_NAME;
        }
    };
    /**
     * @return {boolean}
     */
    QueryParams.prototype.hasEnd = function () {
        return this.endSet_;
    };
    /**
     * Only valid to call if hasEnd() returns true.
     * @return {*}
     */
    QueryParams.prototype.getIndexEndValue = function () {
        util.assert(this.endSet_, 'Only valid if end has been set');
        return this.indexEndValue_;
    };
    /**
     * Only valid to call if hasEnd() returns true.
     * Returns the end key name for the range defined by these query parameters
     * @return {!string}
     */
    QueryParams.prototype.getIndexEndName = function () {
        util.assert(this.endSet_, 'Only valid if end has been set');
        if (this.endNameSet_) {
            return this.indexEndName_;
        }
        else {
            return MAX_NAME;
        }
    };
    /**
     * @return {boolean}
     */
    QueryParams.prototype.hasLimit = function () {
        return this.limitSet_;
    };
    /**
     * @return {boolean} True if a limit has been set and it has been explicitly anchored
     */
    QueryParams.prototype.hasAnchoredLimit = function () {
        return this.limitSet_ && this.viewFrom_ !== '';
    };
    /**
     * Only valid to call if hasLimit() returns true
     * @return {!number}
     */
    QueryParams.prototype.getLimit = function () {
        util.assert(this.limitSet_, 'Only valid if limit has been set');
        return this.limit_;
    };
    /**
     * @return {!Index}
     */
    QueryParams.prototype.getIndex = function () {
        return this.index_;
    };
    /**
     * @return {!QueryParams}
     * @private
     */
    QueryParams.prototype.copy_ = function () {
        var copy = new QueryParams();
        copy.limitSet_ = this.limitSet_;
        copy.limit_ = this.limit_;
        copy.startSet_ = this.startSet_;
        copy.indexStartValue_ = this.indexStartValue_;
        copy.startNameSet_ = this.startNameSet_;
        copy.indexStartName_ = this.indexStartName_;
        copy.endSet_ = this.endSet_;
        copy.indexEndValue_ = this.indexEndValue_;
        copy.endNameSet_ = this.endNameSet_;
        copy.indexEndName_ = this.indexEndName_;
        copy.index_ = this.index_;
        copy.viewFrom_ = this.viewFrom_;
        return copy;
    };
    /**
     * @param {!number} newLimit
     * @return {!QueryParams}
     */
    QueryParams.prototype.limit = function (newLimit) {
        var newParams = this.copy_();
        newParams.limitSet_ = true;
        newParams.limit_ = newLimit;
        newParams.viewFrom_ = '';
        return newParams;
    };
    /**
     * @param {!number} newLimit
     * @return {!QueryParams}
     */
    QueryParams.prototype.limitToFirst = function (newLimit) {
        var newParams = this.copy_();
        newParams.limitSet_ = true;
        newParams.limit_ = newLimit;
        newParams.viewFrom_ = QueryParams.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_LEFT;
        return newParams;
    };
    /**
     * @param {!number} newLimit
     * @return {!QueryParams}
     */
    QueryParams.prototype.limitToLast = function (newLimit) {
        var newParams = this.copy_();
        newParams.limitSet_ = true;
        newParams.limit_ = newLimit;
        newParams.viewFrom_ = QueryParams.WIRE_PROTOCOL_CONSTANTS_.VIEW_FROM_RIGHT;
        return newParams;
    };
    /**
     * @param {*} indexValue
     * @param {?string=} key
     * @return {!QueryParams}
     */
    QueryParams.prototype.startAt = function (indexValue, key) {
        var newParams = this.copy_();
        newParams.startSet_ = true;
        if (indexValue === undefined) {
            indexValue = null;
        }
        newParams.indexStartValue_ = indexValue;
        if (key != null) {
            newParams.startNameSet_ = true;
            newParams.indexStartName_ = key;
        }
        else {
            newParams.startNameSet_ = false;
            newParams.indexStartName_ = '';
        }
        return newParams;
    };
    /**
     * @param {*} indexValue
     * @param {?string=} key
     * @return {!QueryParams}
     */
    QueryParams.prototype.endAt = function (indexValue, key) {
        var newParams = this.copy_();
        newParams.endSet_ = true;
        if (indexValue === undefined) {
            indexValue = null;
        }
        newParams.indexEndValue_ = indexValue;
        if (key !== undefined) {
            newParams.endNameSet_ = true;
            newParams.indexEndName_ = key;
        }
        else {
            newParams.endNameSet_ = false;
            newParams.indexEndName_ = '';
        }
        return newParams;
    };
    /**
     * @param {!Index} index
     * @return {!QueryParams}
     */
    QueryParams.prototype.orderBy = function (index) {
        var newParams = this.copy_();
        newParams.index_ = index;
        return newParams;
    };
    /**
     * @return {!Object}
     */
    QueryParams.prototype.getQueryObject = function () {
        var WIRE_PROTOCOL_CONSTANTS = QueryParams.WIRE_PROTOCOL_CONSTANTS_;
        var obj = {};
        if (this.startSet_) {
            obj[WIRE_PROTOCOL_CONSTANTS.INDEX_START_VALUE] = this.indexStartValue_;
            if (this.startNameSet_) {
                obj[WIRE_PROTOCOL_CONSTANTS.INDEX_START_NAME] = this.indexStartName_;
            }
        }
        if (this.endSet_) {
            obj[WIRE_PROTOCOL_CONSTANTS.INDEX_END_VALUE] = this.indexEndValue_;
            if (this.endNameSet_) {
                obj[WIRE_PROTOCOL_CONSTANTS.INDEX_END_NAME] = this.indexEndName_;
            }
        }
        if (this.limitSet_) {
            obj[WIRE_PROTOCOL_CONSTANTS.LIMIT] = this.limit_;
            var viewFrom = this.viewFrom_;
            if (viewFrom === '') {
                if (this.isViewFromLeft()) {
                    viewFrom = WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_LEFT;
                }
                else {
                    viewFrom = WIRE_PROTOCOL_CONSTANTS.VIEW_FROM_RIGHT;
                }
            }
            obj[WIRE_PROTOCOL_CONSTANTS.VIEW_FROM] = viewFrom;
        }
        // For now, priority index is the default, so we only specify if it's some other index
        if (this.index_ !== PRIORITY_INDEX) {
            obj[WIRE_PROTOCOL_CONSTANTS.INDEX] = this.index_.toString();
        }
        return obj;
    };
    /**
     * @return {boolean}
     */
    QueryParams.prototype.loadsAllData = function () {
        return !(this.startSet_ || this.endSet_ || this.limitSet_);
    };
    /**
     * @return {boolean}
     */
    QueryParams.prototype.isDefault = function () {
        return this.loadsAllData() && this.index_ == PRIORITY_INDEX;
    };
    /**
     * @return {!NodeFilter}
     */
    QueryParams.prototype.getNodeFilter = function () {
        if (this.loadsAllData()) {
            return new IndexedFilter(this.getIndex());
        }
        else if (this.hasLimit()) {
            return new LimitedFilter(this);
        }
        else {
            return new RangedFilter(this);
        }
    };
    /**
     * Returns a set of REST query string parameters representing this query.
     *
     * @return {!Object.<string,*>} query string parameters
     */
    QueryParams.prototype.toRestQueryStringParameters = function () {
        var REST_CONSTANTS = QueryParams.REST_QUERY_CONSTANTS_;
        var qs = {};
        if (this.isDefault()) {
            return qs;
        }
        var orderBy;
        if (this.index_ === PRIORITY_INDEX) {
            orderBy = REST_CONSTANTS.PRIORITY_INDEX;
        }
        else if (this.index_ === VALUE_INDEX) {
            orderBy = REST_CONSTANTS.VALUE_INDEX;
        }
        else if (this.index_ === KEY_INDEX) {
            orderBy = REST_CONSTANTS.KEY_INDEX;
        }
        else {
            util.assert(this.index_ instanceof PathIndex, 'Unrecognized index type!');
            orderBy = this.index_.toString();
        }
        qs[REST_CONSTANTS.ORDER_BY] = util.stringify(orderBy);
        if (this.startSet_) {
            qs[REST_CONSTANTS.START_AT] = util.stringify(this.indexStartValue_);
            if (this.startNameSet_) {
                qs[REST_CONSTANTS.START_AT] += ',' + util.stringify(this.indexStartName_);
            }
        }
        if (this.endSet_) {
            qs[REST_CONSTANTS.END_AT] = util.stringify(this.indexEndValue_);
            if (this.endNameSet_) {
                qs[REST_CONSTANTS.END_AT] += ',' + util.stringify(this.indexEndName_);
            }
        }
        if (this.limitSet_) {
            if (this.isViewFromLeft()) {
                qs[REST_CONSTANTS.LIMIT_TO_FIRST] = this.limit_;
            }
            else {
                qs[REST_CONSTANTS.LIMIT_TO_LAST] = this.limit_;
            }
        }
        return qs;
    };
    /**
     * Wire Protocol Constants
     * @const
     * @enum {string}
     * @private
     */
    QueryParams.WIRE_PROTOCOL_CONSTANTS_ = {
        INDEX_START_VALUE: 'sp',
        INDEX_START_NAME: 'sn',
        INDEX_END_VALUE: 'ep',
        INDEX_END_NAME: 'en',
        LIMIT: 'l',
        VIEW_FROM: 'vf',
        VIEW_FROM_LEFT: 'l',
        VIEW_FROM_RIGHT: 'r',
        INDEX: 'i'
    };
    /**
     * REST Query Constants
     * @const
     * @enum {string}
     * @private
     */
    QueryParams.REST_QUERY_CONSTANTS_ = {
        ORDER_BY: 'orderBy',
        PRIORITY_INDEX: '$priority',
        VALUE_INDEX: '$value',
        KEY_INDEX: '$key',
        START_AT: 'startAt',
        END_AT: 'endAt',
        LIMIT_TO_FIRST: 'limitToFirst',
        LIMIT_TO_LAST: 'limitToLast'
    };
    /**
     * Default, empty query parameters
     * @type {!QueryParams}
     * @const
     */
    QueryParams.DEFAULT = new QueryParams();
    return QueryParams;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Reference = /** @class */ (function (_super) {
    tslib_1.__extends(Reference, _super);
    /**
     * Call options:
     *   new Reference(Repo, Path) or
     *   new Reference(url: string, string|RepoManager)
     *
     * Externally - this is the firebase.database.Reference type.
     *
     * @param {!Repo} repo
     * @param {(!Path)} path
     * @extends {Query}
     */
    function Reference(repo, path) {
        var _this = this;
        if (!(repo instanceof Repo)) {
            throw new Error('new Reference() no longer supported - use app.database().');
        }
        // call Query's constructor, passing in the repo and path.
        _this = _super.call(this, repo, path, QueryParams.DEFAULT, false) || this;
        return _this;
    }
    /** @return {?string} */
    Reference.prototype.getKey = function () {
        util.validateArgCount('Reference.key', 0, 0, arguments.length);
        if (this.path.isEmpty())
            return null;
        else
            return this.path.getBack();
    };
    /**
     * @param {!(string|Path)} pathString
     * @return {!Reference}
     */
    Reference.prototype.child = function (pathString) {
        util.validateArgCount('Reference.child', 1, 1, arguments.length);
        if (typeof pathString === 'number') {
            pathString = String(pathString);
        }
        else if (!(pathString instanceof Path)) {
            if (this.path.getFront() === null)
                validateRootPathString('Reference.child', 1, pathString, false);
            else
                validatePathString('Reference.child', 1, pathString, false);
        }
        return new Reference(this.repo, this.path.child(pathString));
    };
    /** @return {?Reference} */
    Reference.prototype.getParent = function () {
        util.validateArgCount('Reference.parent', 0, 0, arguments.length);
        var parentPath = this.path.parent();
        return parentPath === null ? null : new Reference(this.repo, parentPath);
    };
    /** @return {!Reference} */
    Reference.prototype.getRoot = function () {
        util.validateArgCount('Reference.root', 0, 0, arguments.length);
        var ref = this;
        while (ref.getParent() !== null) {
            ref = ref.getParent();
        }
        return ref;
    };
    /** @return {!Database} */
    Reference.prototype.databaseProp = function () {
        return this.repo.database;
    };
    /**
     * @param {*} newVal
     * @param {function(?Error)=} onComplete
     * @return {!Promise}
     */
    Reference.prototype.set = function (newVal, onComplete) {
        util.validateArgCount('Reference.set', 1, 2, arguments.length);
        validateWritablePath('Reference.set', this.path);
        validateFirebaseDataArg('Reference.set', 1, newVal, this.path, false);
        util.validateCallback('Reference.set', 2, onComplete, true);
        var deferred = new util.Deferred();
        this.repo.setWithPriority(this.path, newVal, 
        /*priority=*/ null, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    /**
     * @param {!Object} objectToMerge
     * @param {function(?Error)=} onComplete
     * @return {!Promise}
     */
    Reference.prototype.update = function (objectToMerge, onComplete) {
        util.validateArgCount('Reference.update', 1, 2, arguments.length);
        validateWritablePath('Reference.update', this.path);
        if (Array.isArray(objectToMerge)) {
            var newObjectToMerge = {};
            for (var i = 0; i < objectToMerge.length; ++i) {
                newObjectToMerge['' + i] = objectToMerge[i];
            }
            objectToMerge = newObjectToMerge;
            warn('Passing an Array to Firebase.update() is deprecated. ' +
                'Use set() if you want to overwrite the existing data, or ' +
                'an Object with integer keys if you really do want to ' +
                'only update some of the children.');
        }
        validateFirebaseMergeDataArg('Reference.update', 1, objectToMerge, this.path, false);
        util.validateCallback('Reference.update', 2, onComplete, true);
        var deferred = new util.Deferred();
        this.repo.update(this.path, objectToMerge, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    /**
     * @param {*} newVal
     * @param {string|number|null} newPriority
     * @param {function(?Error)=} onComplete
     * @return {!Promise}
     */
    Reference.prototype.setWithPriority = function (newVal, newPriority, onComplete) {
        util.validateArgCount('Reference.setWithPriority', 2, 3, arguments.length);
        validateWritablePath('Reference.setWithPriority', this.path);
        validateFirebaseDataArg('Reference.setWithPriority', 1, newVal, this.path, false);
        validatePriority('Reference.setWithPriority', 2, newPriority, false);
        util.validateCallback('Reference.setWithPriority', 3, onComplete, true);
        if (this.getKey() === '.length' || this.getKey() === '.keys')
            throw 'Reference.setWithPriority failed: ' +
                this.getKey() +
                ' is a read-only object.';
        var deferred = new util.Deferred();
        this.repo.setWithPriority(this.path, newVal, newPriority, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    /**
     * @param {function(?Error)=} onComplete
     * @return {!Promise}
     */
    Reference.prototype.remove = function (onComplete) {
        util.validateArgCount('Reference.remove', 0, 1, arguments.length);
        validateWritablePath('Reference.remove', this.path);
        util.validateCallback('Reference.remove', 1, onComplete, true);
        return this.set(null, onComplete);
    };
    /**
     * @param {function(*):*} transactionUpdate
     * @param {(function(?Error, boolean, ?DataSnapshot))=} onComplete
     * @param {boolean=} applyLocally
     * @return {!Promise}
     */
    Reference.prototype.transaction = function (transactionUpdate, onComplete, applyLocally) {
        util.validateArgCount('Reference.transaction', 1, 3, arguments.length);
        validateWritablePath('Reference.transaction', this.path);
        util.validateCallback('Reference.transaction', 1, transactionUpdate, false);
        util.validateCallback('Reference.transaction', 2, onComplete, true);
        // NOTE: applyLocally is an internal-only option for now.  We need to decide if we want to keep it and how
        // to expose it.
        validateBoolean('Reference.transaction', 3, applyLocally, true);
        if (this.getKey() === '.length' || this.getKey() === '.keys')
            throw 'Reference.transaction failed: ' +
                this.getKey() +
                ' is a read-only object.';
        if (applyLocally === undefined)
            applyLocally = true;
        var deferred = new util.Deferred();
        if (typeof onComplete === 'function') {
            deferred.promise.catch(function () { });
        }
        var promiseComplete = function (error, committed, snapshot) {
            if (error) {
                deferred.reject(error);
            }
            else {
                deferred.resolve(new TransactionResult(committed, snapshot));
            }
            if (typeof onComplete === 'function') {
                onComplete(error, committed, snapshot);
            }
        };
        this.repo.startTransaction(this.path, transactionUpdate, promiseComplete, applyLocally);
        return deferred.promise;
    };
    /**
     * @param {string|number|null} priority
     * @param {function(?Error)=} onComplete
     * @return {!Promise}
     */
    Reference.prototype.setPriority = function (priority, onComplete) {
        util.validateArgCount('Reference.setPriority', 1, 2, arguments.length);
        validateWritablePath('Reference.setPriority', this.path);
        validatePriority('Reference.setPriority', 1, priority, false);
        util.validateCallback('Reference.setPriority', 2, onComplete, true);
        var deferred = new util.Deferred();
        this.repo.setWithPriority(this.path.child('.priority'), priority, null, deferred.wrapCallback(onComplete));
        return deferred.promise;
    };
    /**
     * @param {*=} value
     * @param {function(?Error)=} onComplete
     * @return {!Reference}
     */
    Reference.prototype.push = function (value, onComplete) {
        util.validateArgCount('Reference.push', 0, 2, arguments.length);
        validateWritablePath('Reference.push', this.path);
        validateFirebaseDataArg('Reference.push', 1, value, this.path, true);
        util.validateCallback('Reference.push', 2, onComplete, true);
        var now = this.repo.serverTime();
        var name = nextPushId(now);
        // push() returns a ThennableReference whose promise is fulfilled with a regular Reference.
        // We use child() to create handles to two different references. The first is turned into a
        // ThennableReference below by adding then() and catch() methods and is used as the
        // return value of push(). The second remains a regular Reference and is used as the fulfilled
        // value of the first ThennableReference.
        var thennablePushRef = this.child(name);
        var pushRef = this.child(name);
        var promise;
        if (value != null) {
            promise = thennablePushRef.set(value, onComplete).then(function () { return pushRef; });
        }
        else {
            promise = Promise.resolve(pushRef);
        }
        thennablePushRef.then = promise.then.bind(promise);
        thennablePushRef.catch = promise.then.bind(promise, undefined);
        if (typeof onComplete === 'function') {
            promise.catch(function () { });
        }
        return thennablePushRef;
    };
    /**
     * @return {!OnDisconnect}
     */
    Reference.prototype.onDisconnect = function () {
        validateWritablePath('Reference.onDisconnect', this.path);
        return new OnDisconnect(this.repo, this.path);
    };
    Object.defineProperty(Reference.prototype, "database", {
        get: function () {
            return this.databaseProp();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "key", {
        get: function () {
            return this.getKey();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "parent", {
        get: function () {
            return this.getParent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Reference.prototype, "root", {
        get: function () {
            return this.getRoot();
        },
        enumerable: true,
        configurable: true
    });
    return Reference;
}(Query));
/**
 * Define reference constructor in various modules
 *
 * We are doing this here to avoid several circular
 * dependency issues
 */
Query.__referenceConstructor = Reference;
SyncPoint.__referenceConstructor = Reference;

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Node in a Tree.
 */
var TreeNode = /** @class */ (function () {
    function TreeNode() {
        // TODO: Consider making accessors that create children and value lazily or
        // separate Internal / Leaf 'types'.
        this.children = {};
        this.childCount = 0;
        this.value = null;
    }
    return TreeNode;
}());
/**
 * A light-weight tree, traversable by path.  Nodes can have both values and children.
 * Nodes are not enumerated (by forEachChild) unless they have a value or non-empty
 * children.
 */
var Tree = /** @class */ (function () {
    /**
     * @template T
     * @param {string=} name_ Optional name of the node.
     * @param {Tree=} parent_ Optional parent node.
     * @param {TreeNode=} node_ Optional node to wrap.
     */
    function Tree(name_, parent_, node_) {
        if (name_ === void 0) { name_ = ''; }
        if (parent_ === void 0) { parent_ = null; }
        if (node_ === void 0) { node_ = new TreeNode(); }
        this.name_ = name_;
        this.parent_ = parent_;
        this.node_ = node_;
    }
    /**
     * Returns a sub-Tree for the given path.
     *
     * @param {!(string|Path)} pathObj Path to look up.
     * @return {!Tree.<T>} Tree for path.
     */
    Tree.prototype.subTree = function (pathObj) {
        // TODO: Require pathObj to be Path?
        var path = pathObj instanceof Path ? pathObj : new Path(pathObj);
        var child = this, next;
        while ((next = path.getFront()) !== null) {
            var childNode = util.safeGet(child.node_.children, next) || new TreeNode();
            child = new Tree(next, child, childNode);
            path = path.popFront();
        }
        return child;
    };
    /**
     * Returns the data associated with this tree node.
     *
     * @return {?T} The data or null if no data exists.
     */
    Tree.prototype.getValue = function () {
        return this.node_.value;
    };
    /**
     * Sets data to this tree node.
     *
     * @param {!T} value Value to set.
     */
    Tree.prototype.setValue = function (value) {
        util.assert(typeof value !== 'undefined', 'Cannot set value to undefined');
        this.node_.value = value;
        this.updateParents_();
    };
    /**
     * Clears the contents of the tree node (its value and all children).
     */
    Tree.prototype.clear = function () {
        this.node_.value = null;
        this.node_.children = {};
        this.node_.childCount = 0;
        this.updateParents_();
    };
    /**
     * @return {boolean} Whether the tree has any children.
     */
    Tree.prototype.hasChildren = function () {
        return this.node_.childCount > 0;
    };
    /**
     * @return {boolean} Whether the tree is empty (no value or children).
     */
    Tree.prototype.isEmpty = function () {
        return this.getValue() === null && !this.hasChildren();
    };
    /**
     * Calls action for each child of this tree node.
     *
     * @param {function(!Tree.<T>)} action Action to be called for each child.
     */
    Tree.prototype.forEachChild = function (action) {
        var _this = this;
        each(this.node_.children, function (child, childTree) {
            action(new Tree(child, _this, childTree));
        });
    };
    /**
     * Does a depth-first traversal of this node's descendants, calling action for each one.
     *
     * @param {function(!Tree.<T>)} action Action to be called for each child.
     * @param {boolean=} includeSelf Whether to call action on this node as well. Defaults to
     *   false.
     * @param {boolean=} childrenFirst Whether to call action on children before calling it on
     *   parent.
     */
    Tree.prototype.forEachDescendant = function (action, includeSelf, childrenFirst) {
        if (includeSelf && !childrenFirst)
            action(this);
        this.forEachChild(function (child) {
            child.forEachDescendant(action, /*includeSelf=*/ true, childrenFirst);
        });
        if (includeSelf && childrenFirst)
            action(this);
    };
    /**
     * Calls action on each ancestor node.
     *
     * @param {function(!Tree.<T>)} action Action to be called on each parent; return
     *   true to abort.
     * @param {boolean=} includeSelf Whether to call action on this node as well.
     * @return {boolean} true if the action callback returned true.
     */
    Tree.prototype.forEachAncestor = function (action, includeSelf) {
        var node = includeSelf ? this : this.parent();
        while (node !== null) {
            if (action(node)) {
                return true;
            }
            node = node.parent();
        }
        return false;
    };
    /**
     * Does a depth-first traversal of this node's descendants.  When a descendant with a value
     * is found, action is called on it and traversal does not continue inside the node.
     * Action is *not* called on this node.
     *
     * @param {function(!Tree.<T>)} action Action to be called for each child.
     */
    Tree.prototype.forEachImmediateDescendantWithValue = function (action) {
        this.forEachChild(function (child) {
            if (child.getValue() !== null)
                action(child);
            else
                child.forEachImmediateDescendantWithValue(action);
        });
    };
    /**
     * @return {!Path} The path of this tree node, as a Path.
     */
    Tree.prototype.path = function () {
        return new Path(this.parent_ === null
            ? this.name_
            : this.parent_.path() + '/' + this.name_);
    };
    /**
     * @return {string} The name of the tree node.
     */
    Tree.prototype.name = function () {
        return this.name_;
    };
    /**
     * @return {?Tree} The parent tree node, or null if this is the root of the tree.
     */
    Tree.prototype.parent = function () {
        return this.parent_;
    };
    /**
     * Adds or removes this child from its parent based on whether it's empty or not.
     *
     * @private
     */
    Tree.prototype.updateParents_ = function () {
        if (this.parent_ !== null)
            this.parent_.updateChild_(this.name_, this);
    };
    /**
     * Adds or removes the passed child to this tree node, depending on whether it's empty.
     *
     * @param {string} childName The name of the child to update.
     * @param {!Tree.<T>} child The child to update.
     * @private
     */
    Tree.prototype.updateChild_ = function (childName, child) {
        var childEmpty = child.isEmpty();
        var childExists = util.contains(this.node_.children, childName);
        if (childEmpty && childExists) {
            delete this.node_.children[childName];
            this.node_.childCount--;
            this.updateParents_();
        }
        else if (!childEmpty && !childExists) {
            this.node_.children[childName] = child.node_;
            this.node_.childCount++;
            this.updateParents_();
        }
    };
    return Tree;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// TODO: This is pretty messy.  Ideally, a lot of this would move into FirebaseData, or a transaction-specific
// component used by FirebaseData, but it has ties to user callbacks (transaction update and onComplete) as well
// as the realtime connection (to send transactions to the server).  So that all needs to be decoupled first.
// For now it's part of Repo, but in its own file.
/**
 * @enum {number}
 */
var TransactionStatus;
(function (TransactionStatus) {
    // We've run the transaction and updated transactionResultData_ with the result, but it isn't currently sent to the
    // server. A transaction will go from RUN -> SENT -> RUN if it comes back from the server as rejected due to
    // mismatched hash.
    TransactionStatus[TransactionStatus["RUN"] = 0] = "RUN";
    // We've run the transaction and sent it to the server and it's currently outstanding (hasn't come back as accepted
    // or rejected yet).
    TransactionStatus[TransactionStatus["SENT"] = 1] = "SENT";
    // Temporary state used to mark completed transactions (whether successful or aborted).  The transaction will be
    // removed when we get a chance to prune completed ones.
    TransactionStatus[TransactionStatus["COMPLETED"] = 2] = "COMPLETED";
    // Used when an already-sent transaction needs to be aborted (e.g. due to a conflicting set() call that was made).
    // If it comes back as unsuccessful, we'll abort it.
    TransactionStatus[TransactionStatus["SENT_NEEDS_ABORT"] = 3] = "SENT_NEEDS_ABORT";
    // Temporary state used to mark transactions that need to be aborted.
    TransactionStatus[TransactionStatus["NEEDS_ABORT"] = 4] = "NEEDS_ABORT";
})(TransactionStatus || (TransactionStatus = {}));
/**
 * If a transaction does not succeed after 25 retries, we abort it.  Among other things this ensure that if there's
 * ever a bug causing a mismatch between client / server hashes for some data, we won't retry indefinitely.
 * @type {number}
 * @const
 * @private
 */
Repo.MAX_TRANSACTION_RETRIES_ = 25;
/**
 * Setup the transaction data structures
 * @private
 */
Repo.prototype.transactions_init_ = function () {
    /**
     * Stores queues of outstanding transactions for Firebase locations.
     *
     * @type {!Tree.<Array.<!Transaction>>}
     * @private
     */
    this.transactionQueueTree_ = new Tree();
};
/**
 * Creates a new transaction, adds it to the transactions we're tracking, and sends it to the server if possible.
 *
 * @param {!Path} path Path at which to do transaction.
 * @param {function(*):*} transactionUpdate Update callback.
 * @param {?function(?Error, boolean, ?DataSnapshot)} onComplete Completion callback.
 * @param {boolean} applyLocally Whether or not to make intermediate results visible
 */
Repo.prototype.startTransaction = function (path, transactionUpdate, onComplete, applyLocally) {
    this.log_('transaction on ' + path);
    // Add a watch to make sure we get server updates.
    var valueCallback = function () { };
    var watchRef = new Reference(this, path);
    watchRef.on('value', valueCallback);
    var unwatcher = function () {
        watchRef.off('value', valueCallback);
    };
    // Initialize transaction.
    var transaction = {
        path: path,
        update: transactionUpdate,
        onComplete: onComplete,
        // One of TransactionStatus enums.
        status: null,
        // Used when combining transactions at different locations to figure out which one goes first.
        order: LUIDGenerator(),
        // Whether to raise local events for this transaction.
        applyLocally: applyLocally,
        // Count of how many times we've retried the transaction.
        retryCount: 0,
        // Function to call to clean up our .on() listener.
        unwatcher: unwatcher,
        // Stores why a transaction was aborted.
        abortReason: null,
        currentWriteId: null,
        currentInputSnapshot: null,
        currentOutputSnapshotRaw: null,
        currentOutputSnapshotResolved: null
    };
    // Run transaction initially.
    var currentState = this.getLatestState_(path);
    transaction.currentInputSnapshot = currentState;
    var newVal = transaction.update(currentState.val());
    if (newVal === undefined) {
        // Abort transaction.
        transaction.unwatcher();
        transaction.currentOutputSnapshotRaw = null;
        transaction.currentOutputSnapshotResolved = null;
        if (transaction.onComplete) {
            // We just set the input snapshot, so this cast should be safe
            var snapshot = new DataSnapshot(transaction.currentInputSnapshot, new Reference(this, transaction.path), PRIORITY_INDEX);
            transaction.onComplete(null, false, snapshot);
        }
    }
    else {
        validateFirebaseData('transaction failed: Data returned ', newVal, transaction.path);
        // Mark as run and add to our queue.
        transaction.status = TransactionStatus.RUN;
        var queueNode = this.transactionQueueTree_.subTree(path);
        var nodeQueue = queueNode.getValue() || [];
        nodeQueue.push(transaction);
        queueNode.setValue(nodeQueue);
        // Update visibleData and raise events
        // Note: We intentionally raise events after updating all of our transaction state, since the user could
        // start new transactions from the event callbacks.
        var priorityForNode = void 0;
        if (typeof newVal === 'object' &&
            newVal !== null &&
            util.contains(newVal, '.priority')) {
            priorityForNode = util.safeGet(newVal, '.priority');
            util.assert(isValidPriority(priorityForNode), 'Invalid priority returned by transaction. ' +
                'Priority must be a valid string, finite number, server value, or null.');
        }
        else {
            var currentNode = this.serverSyncTree_.calcCompleteEventCache(path) ||
                ChildrenNode.EMPTY_NODE;
            priorityForNode = currentNode.getPriority().val();
        }
        priorityForNode /** @type {null|number|string} */ = priorityForNode;
        var serverValues = this.generateServerValues();
        var newNodeUnresolved = nodeFromJSON$1(newVal, priorityForNode);
        var newNode = resolveDeferredValueSnapshot(newNodeUnresolved, serverValues);
        transaction.currentOutputSnapshotRaw = newNodeUnresolved;
        transaction.currentOutputSnapshotResolved = newNode;
        transaction.currentWriteId = this.getNextWriteId_();
        var events = this.serverSyncTree_.applyUserOverwrite(path, newNode, transaction.currentWriteId, transaction.applyLocally);
        this.eventQueue_.raiseEventsForChangedPath(path, events);
        this.sendReadyTransactions_();
    }
};
/**
 * @param {!Path} path
 * @param {Array.<number>=} excludeSets A specific set to exclude
 * @return {Node}
 * @private
 */
Repo.prototype.getLatestState_ = function (path, excludeSets) {
    return (this.serverSyncTree_.calcCompleteEventCache(path, excludeSets) ||
        ChildrenNode.EMPTY_NODE);
};
/**
 * Sends any already-run transactions that aren't waiting for outstanding transactions to
 * complete.
 *
 * Externally it's called with no arguments, but it calls itself recursively with a particular
 * transactionQueueTree node to recurse through the tree.
 *
 * @param {Tree.<Array.<Transaction>>=} node  transactionQueueTree node to start at.
 * @private
 */
Repo.prototype.sendReadyTransactions_ = function (node) {
    var _this = this;
    if (node === void 0) { node = this.transactionQueueTree_; }
    // Before recursing, make sure any completed transactions are removed.
    if (!node) {
        this.pruneCompletedTransactionsBelowNode_(node);
    }
    if (node.getValue() !== null) {
        var queue = this.buildTransactionQueue_(node);
        util.assert(queue.length > 0, 'Sending zero length transaction queue');
        var allRun = queue.every(function (transaction) { return transaction.status === TransactionStatus.RUN; });
        // If they're all run (and not sent), we can send them.  Else, we must wait.
        if (allRun) {
            this.sendTransactionQueue_(node.path(), queue);
        }
    }
    else if (node.hasChildren()) {
        node.forEachChild(function (childNode) {
            _this.sendReadyTransactions_(childNode);
        });
    }
};
/**
 * Given a list of run transactions, send them to the server and then handle the result (success or failure).
 *
 * @param {!Path} path The location of the queue.
 * @param {!Array.<Transaction>} queue Queue of transactions under the specified location.
 * @private
 */
Repo.prototype.sendTransactionQueue_ = function (path, queue) {
    var _this = this;
    // Mark transactions as sent and increment retry count!
    var setsToIgnore = queue.map(function (txn) {
        return txn.currentWriteId;
    });
    var latestState = this.getLatestState_(path, setsToIgnore);
    var snapToSend = latestState;
    var latestHash = latestState.hash();
    for (var i = 0; i < queue.length; i++) {
        var txn = queue[i];
        util.assert(txn.status === TransactionStatus.RUN, 'tryToSendTransactionQueue_: items in queue should all be run.');
        txn.status = TransactionStatus.SENT;
        txn.retryCount++;
        var relativePath = Path.relativePath(path, txn.path);
        // If we've gotten to this point, the output snapshot must be defined.
        snapToSend = snapToSend.updateChild(relativePath /**@type {!Node} */, txn.currentOutputSnapshotRaw);
    }
    var dataToSend = snapToSend.val(true);
    var pathToSend = path;
    // Send the put.
    this.server_.put(pathToSend.toString(), dataToSend, function (status) {
        _this.log_('transaction put response', {
            path: pathToSend.toString(),
            status: status
        });
        var events = [];
        if (status === 'ok') {
            // Queue up the callbacks and fire them after cleaning up all of our transaction state, since
            // the callback could trigger more transactions or sets.
            var callbacks = [];
            for (var i = 0; i < queue.length; i++) {
                queue[i].status = TransactionStatus.COMPLETED;
                events = events.concat(_this.serverSyncTree_.ackUserWrite(queue[i].currentWriteId));
                if (queue[i].onComplete) {
                    // We never unset the output snapshot, and given that this transaction is complete, it should be set
                    var node = queue[i].currentOutputSnapshotResolved;
                    var ref = new Reference(_this, queue[i].path);
                    var snapshot = new DataSnapshot(node, ref, PRIORITY_INDEX);
                    callbacks.push(queue[i].onComplete.bind(null, null, true, snapshot));
                }
                queue[i].unwatcher();
            }
            // Now remove the completed transactions.
            _this.pruneCompletedTransactionsBelowNode_(_this.transactionQueueTree_.subTree(path));
            // There may be pending transactions that we can now send.
            _this.sendReadyTransactions_();
            _this.eventQueue_.raiseEventsForChangedPath(path, events);
            // Finally, trigger onComplete callbacks.
            for (var i = 0; i < callbacks.length; i++) {
                exceptionGuard(callbacks[i]);
            }
        }
        else {
            // transactions are no longer sent.  Update their status appropriately.
            if (status === 'datastale') {
                for (var i = 0; i < queue.length; i++) {
                    if (queue[i].status === TransactionStatus.SENT_NEEDS_ABORT)
                        queue[i].status = TransactionStatus.NEEDS_ABORT;
                    else
                        queue[i].status = TransactionStatus.RUN;
                }
            }
            else {
                warn('transaction at ' + pathToSend.toString() + ' failed: ' + status);
                for (var i = 0; i < queue.length; i++) {
                    queue[i].status = TransactionStatus.NEEDS_ABORT;
                    queue[i].abortReason = status;
                }
            }
            _this.rerunTransactions_(path);
        }
    }, latestHash);
};
/**
 * Finds all transactions dependent on the data at changedPath and reruns them.
 *
 * Should be called any time cached data changes.
 *
 * Return the highest path that was affected by rerunning transactions.  This is the path at which events need to
 * be raised for.
 *
 * @param {!Path} changedPath The path in mergedData that changed.
 * @return {!Path} The rootmost path that was affected by rerunning transactions.
 * @private
 */
Repo.prototype.rerunTransactions_ = function (changedPath) {
    var rootMostTransactionNode = this.getAncestorTransactionNode_(changedPath);
    var path = rootMostTransactionNode.path();
    var queue = this.buildTransactionQueue_(rootMostTransactionNode);
    this.rerunTransactionQueue_(queue, path);
    return path;
};
/**
 * Does all the work of rerunning transactions (as well as cleans up aborted transactions and whatnot).
 *
 * @param {Array.<Transaction>} queue The queue of transactions to run.
 * @param {!Path} path The path the queue is for.
 * @private
 */
Repo.prototype.rerunTransactionQueue_ = function (queue, path) {
    if (queue.length === 0) {
        return; // Nothing to do!
    }
    // Queue up the callbacks and fire them after cleaning up all of our transaction state, since
    // the callback could trigger more transactions or sets.
    var callbacks = [];
    var events = [];
    // Ignore all of the sets we're going to re-run.
    var txnsToRerun = queue.filter(function (q) {
        return q.status === TransactionStatus.RUN;
    });
    var setsToIgnore = txnsToRerun.map(function (q) {
        return q.currentWriteId;
    });
    for (var i = 0; i < queue.length; i++) {
        var transaction = queue[i];
        var relativePath = Path.relativePath(path, transaction.path);
        var abortTransaction = false, abortReason = void 0;
        util.assert(relativePath !== null, 'rerunTransactionsUnderNode_: relativePath should not be null.');
        if (transaction.status === TransactionStatus.NEEDS_ABORT) {
            abortTransaction = true;
            abortReason = transaction.abortReason;
            events = events.concat(this.serverSyncTree_.ackUserWrite(transaction.currentWriteId, true));
        }
        else if (transaction.status === TransactionStatus.RUN) {
            if (transaction.retryCount >= Repo.MAX_TRANSACTION_RETRIES_) {
                abortTransaction = true;
                abortReason = 'maxretry';
                events = events.concat(this.serverSyncTree_.ackUserWrite(transaction.currentWriteId, true));
            }
            else {
                // This code reruns a transaction
                var currentNode = this.getLatestState_(transaction.path, setsToIgnore);
                transaction.currentInputSnapshot = currentNode;
                var newData = queue[i].update(currentNode.val());
                if (newData !== undefined) {
                    validateFirebaseData('transaction failed: Data returned ', newData, transaction.path);
                    var newDataNode = nodeFromJSON$1(newData);
                    var hasExplicitPriority = typeof newData === 'object' &&
                        newData != null &&
                        util.contains(newData, '.priority');
                    if (!hasExplicitPriority) {
                        // Keep the old priority if there wasn't a priority explicitly specified.
                        newDataNode = newDataNode.updatePriority(currentNode.getPriority());
                    }
                    var oldWriteId = transaction.currentWriteId;
                    var serverValues = this.generateServerValues();
                    var newNodeResolved = resolveDeferredValueSnapshot(newDataNode, serverValues);
                    transaction.currentOutputSnapshotRaw = newDataNode;
                    transaction.currentOutputSnapshotResolved = newNodeResolved;
                    transaction.currentWriteId = this.getNextWriteId_();
                    // Mutates setsToIgnore in place
                    setsToIgnore.splice(setsToIgnore.indexOf(oldWriteId), 1);
                    events = events.concat(this.serverSyncTree_.applyUserOverwrite(transaction.path, newNodeResolved, transaction.currentWriteId, transaction.applyLocally));
                    events = events.concat(this.serverSyncTree_.ackUserWrite(oldWriteId, true));
                }
                else {
                    abortTransaction = true;
                    abortReason = 'nodata';
                    events = events.concat(this.serverSyncTree_.ackUserWrite(transaction.currentWriteId, true));
                }
            }
        }
        this.eventQueue_.raiseEventsForChangedPath(path, events);
        events = [];
        if (abortTransaction) {
            // Abort.
            queue[i].status = TransactionStatus.COMPLETED;
            // Removing a listener can trigger pruning which can muck with mergedData/visibleData (as it prunes data).
            // So defer the unwatcher until we're done.
            (function (unwatcher) {
                setTimeout(unwatcher, Math.floor(0));
            })(queue[i].unwatcher);
            if (queue[i].onComplete) {
                if (abortReason === 'nodata') {
                    var ref = new Reference(this, queue[i].path);
                    // We set this field immediately, so it's safe to cast to an actual snapshot
                    var lastInput /** @type {!Node} */ = queue[i].currentInputSnapshot;
                    var snapshot = new DataSnapshot(lastInput, ref, PRIORITY_INDEX);
                    callbacks.push(queue[i].onComplete.bind(null, null, false, snapshot));
                }
                else {
                    callbacks.push(queue[i].onComplete.bind(null, new Error(abortReason), false, null));
                }
            }
        }
    }
    // Clean up completed transactions.
    this.pruneCompletedTransactionsBelowNode_(this.transactionQueueTree_);
    // Now fire callbacks, now that we're in a good, known state.
    for (var i = 0; i < callbacks.length; i++) {
        exceptionGuard(callbacks[i]);
    }
    // Try to send the transaction result to the server.
    this.sendReadyTransactions_();
};
/**
 * Returns the rootmost ancestor node of the specified path that has a pending transaction on it, or just returns
 * the node for the given path if there are no pending transactions on any ancestor.
 *
 * @param {!Path} path The location to start at.
 * @return {!Tree.<Array.<!Transaction>>} The rootmost node with a transaction.
 * @private
 */
Repo.prototype.getAncestorTransactionNode_ = function (path) {
    var front;
    // Start at the root and walk deeper into the tree towards path until we find a node with pending transactions.
    var transactionNode = this.transactionQueueTree_;
    while ((front = path.getFront()) !== null &&
        transactionNode.getValue() === null) {
        transactionNode = transactionNode.subTree(front);
        path = path.popFront();
    }
    return transactionNode;
};
/**
 * Builds the queue of all transactions at or below the specified transactionNode.
 *
 * @param {!Tree.<Array.<Transaction>>} transactionNode
 * @return {Array.<Transaction>} The generated queue.
 * @private
 */
Repo.prototype.buildTransactionQueue_ = function (transactionNode) {
    // Walk any child transaction queues and aggregate them into a single queue.
    var transactionQueue = [];
    this.aggregateTransactionQueuesForNode_(transactionNode, transactionQueue);
    // Sort them by the order the transactions were created.
    transactionQueue.sort(function (a, b) {
        return a.order - b.order;
    });
    return transactionQueue;
};
/**
 * @param {!Tree.<Array.<Transaction>>} node
 * @param {Array.<Transaction>} queue
 * @private
 */
Repo.prototype.aggregateTransactionQueuesForNode_ = function (node, queue) {
    var _this = this;
    var nodeQueue = node.getValue();
    if (nodeQueue !== null) {
        for (var i = 0; i < nodeQueue.length; i++) {
            queue.push(nodeQueue[i]);
        }
    }
    node.forEachChild(function (child) {
        _this.aggregateTransactionQueuesForNode_(child, queue);
    });
};
/**
 * Remove COMPLETED transactions at or below this node in the transactionQueueTree_.
 *
 * @param {!Tree.<Array.<!Transaction>>} node
 * @private
 */
Repo.prototype.pruneCompletedTransactionsBelowNode_ = function (node) {
    var _this = this;
    var queue = node.getValue();
    if (queue) {
        var to = 0;
        for (var from = 0; from < queue.length; from++) {
            if (queue[from].status !== TransactionStatus.COMPLETED) {
                queue[to] = queue[from];
                to++;
            }
        }
        queue.length = to;
        node.setValue(queue.length > 0 ? queue : null);
    }
    node.forEachChild(function (childNode) {
        _this.pruneCompletedTransactionsBelowNode_(childNode);
    });
};
/**
 * Aborts all transactions on ancestors or descendants of the specified path.  Called when doing a set() or update()
 * since we consider them incompatible with transactions.
 *
 * @param {!Path} path Path for which we want to abort related transactions.
 * @return {!Path}
 * @private
 */
Repo.prototype.abortTransactions_ = function (path) {
    var _this = this;
    var affectedPath = this.getAncestorTransactionNode_(path).path();
    var transactionNode = this.transactionQueueTree_.subTree(path);
    transactionNode.forEachAncestor(function (node) {
        _this.abortTransactionsOnNode_(node);
    });
    this.abortTransactionsOnNode_(transactionNode);
    transactionNode.forEachDescendant(function (node) {
        _this.abortTransactionsOnNode_(node);
    });
    return affectedPath;
};
/**
 * Abort transactions stored in this transaction queue node.
 *
 * @param {!Tree.<Array.<Transaction>>} node Node to abort transactions for.
 * @private
 */
Repo.prototype.abortTransactionsOnNode_ = function (node) {
    var queue = node.getValue();
    if (queue !== null) {
        // Queue up the callbacks and fire them after cleaning up all of our transaction state, since
        // the callback could trigger more transactions or sets.
        var callbacks = [];
        // Go through queue.  Any already-sent transactions must be marked for abort, while the unsent ones
        // can be immediately aborted and removed.
        var events = [];
        var lastSent = -1;
        for (var i = 0; i < queue.length; i++) {
            if (queue[i].status === TransactionStatus.SENT_NEEDS_ABORT) ;
            else if (queue[i].status === TransactionStatus.SENT) {
                util.assert(lastSent === i - 1, 'All SENT items should be at beginning of queue.');
                lastSent = i;
                // Mark transaction for abort when it comes back.
                queue[i].status = TransactionStatus.SENT_NEEDS_ABORT;
                queue[i].abortReason = 'set';
            }
            else {
                util.assert(queue[i].status === TransactionStatus.RUN, 'Unexpected transaction status in abort');
                // We can abort it immediately.
                queue[i].unwatcher();
                events = events.concat(this.serverSyncTree_.ackUserWrite(queue[i].currentWriteId, true));
                if (queue[i].onComplete) {
                    var snapshot = null;
                    callbacks.push(queue[i].onComplete.bind(null, new Error('set'), false, snapshot));
                }
            }
        }
        if (lastSent === -1) {
            // We're not waiting for any sent transactions.  We can clear the queue.
            node.setValue(null);
        }
        else {
            // Remove the transactions we aborted.
            queue.length = lastSent + 1;
        }
        // Now fire the callbacks.
        this.eventQueue_.raiseEventsForChangedPath(node.path(), events);
        for (var i = 0; i < callbacks.length; i++) {
            exceptionGuard(callbacks[i]);
        }
    }
};

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** @const {string} */
var DATABASE_URL_OPTION = 'databaseURL';
/**
 * This variable is also defined in the firebase node.js admin SDK. Before
 * modifying this definition, consult the definition in:
 *
 * https://github.com/firebase/firebase-admin-node
 *
 * and make sure the two are consistent.
 */
var FIREBASE_DATABASE_EMULATOR_HOST_VAR = 'FIREBASE_DATABASE_EMULATOR_HOST';
var _staticInstance;
/**
 * Creates and caches Repo instances.
 */
var RepoManager = /** @class */ (function () {
    function RepoManager() {
        /**
         * @private {!Object.<string, Object<string, !fb.core.Repo>>}
         */
        this.repos_ = {};
        /**
         * If true, new Repos will be created to use ReadonlyRestClient (for testing purposes).
         * @private {boolean}
         */
        this.useRestClient_ = false;
    }
    RepoManager.getInstance = function () {
        if (!_staticInstance) {
            _staticInstance = new RepoManager();
        }
        return _staticInstance;
    };
    // TODO(koss): Remove these functions unless used in tests?
    RepoManager.prototype.interrupt = function () {
        for (var appName in this.repos_) {
            for (var dbUrl in this.repos_[appName]) {
                this.repos_[appName][dbUrl].interrupt();
            }
        }
    };
    RepoManager.prototype.resume = function () {
        for (var appName in this.repos_) {
            for (var dbUrl in this.repos_[appName]) {
                this.repos_[appName][dbUrl].resume();
            }
        }
    };
    /**
     * This function should only ever be called to CREATE a new database instance.
     *
     * @param {!FirebaseApp} app
     * @return {!Database}
     */
    RepoManager.prototype.databaseFromApp = function (app, url) {
        var dbUrl = url || app.options[DATABASE_URL_OPTION];
        if (dbUrl === undefined) {
            fatal("Can't determine Firebase Database URL.  Be sure to include " +
                DATABASE_URL_OPTION +
                ' option when calling firebase.initializeApp().');
        }
        var parsedUrl = parseRepoInfo(dbUrl);
        var repoInfo = parsedUrl.repoInfo;
        var dbEmulatorHost = undefined;
        if (typeof process !== 'undefined') {
            dbEmulatorHost = process.env[FIREBASE_DATABASE_EMULATOR_HOST_VAR];
        }
        if (dbEmulatorHost) {
            dbUrl = "http://" + dbEmulatorHost + "?ns=" + repoInfo.namespace;
        }
        validateUrl('Invalid Firebase Database URL', 1, parsedUrl);
        if (!parsedUrl.path.isEmpty()) {
            fatal('Database URL must point to the root of a Firebase Database ' +
                '(not including a child path).');
        }
        var repo = this.createRepo(repoInfo, app);
        return repo.database;
    };
    /**
     * Remove the repo and make sure it is disconnected.
     *
     * @param {!Repo} repo
     */
    RepoManager.prototype.deleteRepo = function (repo) {
        var appRepos = util.safeGet(this.repos_, repo.app.name);
        // This should never happen...
        if (!appRepos || util.safeGet(appRepos, repo.repoInfo_.toURLString()) !== repo) {
            fatal("Database " + repo.app.name + "(" + repo.repoInfo_ + ") has already been deleted.");
        }
        repo.interrupt();
        delete appRepos[repo.repoInfo_.toURLString()];
    };
    /**
     * Ensures a repo doesn't already exist and then creates one using the
     * provided app.
     *
     * @param {!RepoInfo} repoInfo The metadata about the Repo
     * @param {!FirebaseApp} app
     * @return {!Repo} The Repo object for the specified server / repoName.
     */
    RepoManager.prototype.createRepo = function (repoInfo, app) {
        var appRepos = util.safeGet(this.repos_, app.name);
        if (!appRepos) {
            appRepos = {};
            this.repos_[app.name] = appRepos;
        }
        var repo = util.safeGet(appRepos, repoInfo.toURLString());
        if (repo) {
            fatal('Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.');
        }
        repo = new Repo(repoInfo, this.useRestClient_, app);
        appRepos[repoInfo.toURLString()] = repo;
        return repo;
    };
    /**
     * Forces us to use ReadonlyRestClient instead of PersistentConnection for new Repos.
     * @param {boolean} forceRestClient
     */
    RepoManager.prototype.forceRestClient = function (forceRestClient) {
        this.useRestClient_ = forceRestClient;
    };
    return RepoManager;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Class representing a firebase database.
 * @implements {FirebaseService}
 */
var Database = /** @class */ (function () {
    /**
     * The constructor should not be called by users of our public API.
     * @param {!Repo} repo_
     */
    function Database(repo_) {
        this.repo_ = repo_;
        if (!(repo_ instanceof Repo)) {
            fatal("Don't call new Database() directly - please use firebase.database().");
        }
        /** @type {Reference} */
        this.root_ = new Reference(repo_, Path.Empty);
        this.INTERNAL = new DatabaseInternals(this);
    }
    Object.defineProperty(Database.prototype, "app", {
        get: function () {
            return this.repo_.app;
        },
        enumerable: true,
        configurable: true
    });
    Database.prototype.ref = function (path) {
        this.checkDeleted_('ref');
        util.validateArgCount('database.ref', 0, 1, arguments.length);
        if (path instanceof Reference) {
            return this.refFromURL(path.toString());
        }
        return path !== undefined ? this.root_.child(path) : this.root_;
    };
    /**
     * Returns a reference to the root or the path specified in url.
     * We throw a exception if the url is not in the same domain as the
     * current repo.
     * @param {string} url
     * @return {!Reference} Firebase reference.
     */
    Database.prototype.refFromURL = function (url) {
        /** @const {string} */
        var apiName = 'database.refFromURL';
        this.checkDeleted_(apiName);
        util.validateArgCount(apiName, 1, 1, arguments.length);
        var parsedURL = parseRepoInfo(url);
        validateUrl(apiName, 1, parsedURL);
        var repoInfo = parsedURL.repoInfo;
        if (repoInfo.host !== this.repo_.repoInfo_.host) {
            fatal(apiName +
                ': Host name does not match the current database: ' +
                '(found ' +
                repoInfo.host +
                ' but expected ' +
                this.repo_.repoInfo_.host +
                ')');
        }
        return this.ref(parsedURL.path.toString());
    };
    /**
     * @param {string} apiName
     */
    Database.prototype.checkDeleted_ = function (apiName) {
        if (this.repo_ === null) {
            fatal('Cannot call ' + apiName + ' on a deleted database.');
        }
    };
    // Make individual repo go offline.
    Database.prototype.goOffline = function () {
        util.validateArgCount('database.goOffline', 0, 0, arguments.length);
        this.checkDeleted_('goOffline');
        this.repo_.interrupt();
    };
    Database.prototype.goOnline = function () {
        util.validateArgCount('database.goOnline', 0, 0, arguments.length);
        this.checkDeleted_('goOnline');
        this.repo_.resume();
    };
    Database.ServerValue = {
        TIMESTAMP: {
            '.sv': 'timestamp'
        }
    };
    return Database;
}());
var DatabaseInternals = /** @class */ (function () {
    /** @param {!Database} database */
    function DatabaseInternals(database) {
        this.database = database;
    }
    /** @return {Promise<void>} */
    DatabaseInternals.prototype.delete = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.database.checkDeleted_('delete');
                RepoManager.getInstance().deleteRepo(this.database.repo_);
                this.database.repo_ = null;
                this.database.root_ = null;
                this.database.INTERNAL = null;
                this.database = null;
                return [2 /*return*/];
            });
        });
    };
    return DatabaseInternals;
}());

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * INTERNAL methods for internal-use only (tests, etc.).
 *
 * Customers shouldn't use these or else should be aware that they could break at any time.
 *
 * @const
 */
var forceLongPolling = function () {
    WebSocketConnection.forceDisallow();
    BrowserPollConnection.forceAllow();
};
var forceWebSockets = function () {
    BrowserPollConnection.forceDisallow();
};
/* Used by App Manager */
var isWebSocketsAvailable = function () {
    return WebSocketConnection['isAvailable']();
};
var setSecurityDebugCallback = function (ref, callback) {
    ref.repo.persistentConnection_.securityDebugCallback_ = callback;
};
var stats = function (ref, showDelta) {
    ref.repo.stats(showDelta);
};
var statsIncrementCounter = function (ref, metric) {
    ref.repo.statsIncrementCounter(metric);
};
var dataUpdateCount = function (ref) {
    return ref.repo.dataUpdateCount;
};
var interceptServerData = function (ref, callback) {
    return ref.repo.interceptServerData_(callback);
};

var INTERNAL = /*#__PURE__*/Object.freeze({
  forceLongPolling: forceLongPolling,
  forceWebSockets: forceWebSockets,
  isWebSocketsAvailable: isWebSocketsAvailable,
  setSecurityDebugCallback: setSecurityDebugCallback,
  stats: stats,
  statsIncrementCounter: statsIncrementCounter,
  dataUpdateCount: dataUpdateCount,
  interceptServerData: interceptServerData
});

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DataConnection = PersistentConnection;
/**
 * @param {!string} pathString
 * @param {function(*)} onComplete
 */
PersistentConnection.prototype.simpleListen = function (pathString, onComplete) {
    this.sendRequest('q', { p: pathString }, onComplete);
};
/**
 * @param {*} data
 * @param {function(*)} onEcho
 */
PersistentConnection.prototype.echo = function (data, onEcho) {
    this.sendRequest('echo', { d: data }, onEcho);
};
// RealTimeConnection properties that we use in tests.
var RealTimeConnection = Connection;
/**
 * @param {function(): string} newHash
 * @return {function()}
 */
var hijackHash = function (newHash) {
    var oldPut = PersistentConnection.prototype.put;
    PersistentConnection.prototype.put = function (pathString, data, opt_onComplete, opt_hash) {
        if (opt_hash !== undefined) {
            opt_hash = newHash();
        }
        oldPut.call(this, pathString, data, opt_onComplete, opt_hash);
    };
    return function () {
        PersistentConnection.prototype.put = oldPut;
    };
};
/**
 * @type {function(new:RepoInfo, !string, boolean, !string, boolean): undefined}
 */
var ConnectionTarget = RepoInfo;
/**
 * @param {!Query} query
 * @return {!string}
 */
var queryIdentifier = function (query) {
    return query.queryIdentifier();
};
/**
 * Forces the RepoManager to create Repos that use ReadonlyRestClient instead of PersistentConnection.
 *
 * @param {boolean} forceRestClient
 */
var forceRestClient = function (forceRestClient) {
    RepoManager.getInstance().forceRestClient(forceRestClient);
};

var TEST_ACCESS = /*#__PURE__*/Object.freeze({
  DataConnection: DataConnection,
  RealTimeConnection: RealTimeConnection,
  hijackHash: hijackHash,
  ConnectionTarget: ConnectionTarget,
  queryIdentifier: queryIdentifier,
  forceRestClient: forceRestClient
});

/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ServerValue = Database.ServerValue;
function registerDatabase(instance) {
    // set SDK_VERSION
    setSDKVersion(instance.SDK_VERSION);
    // Register the Database Service with the 'firebase' namespace.
    var namespace = instance.INTERNAL.registerService('database', function (app, unused, url) { return RepoManager.getInstance().databaseFromApp(app, url); }, 
    // firebase.database namespace properties
    {
        Reference: Reference,
        Query: Query,
        Database: Database,
        DataSnapshot: DataSnapshot,
        enableLogging: enableLogging,
        INTERNAL: INTERNAL,
        ServerValue: ServerValue,
        TEST_ACCESS: TEST_ACCESS
    }, null, true);
    if (util.isNodeSdk()) {
        module.exports = namespace;
    }
}
registerDatabase(firebase);

exports.DataSnapshot = DataSnapshot;
exports.Database = Database;
exports.OnDisconnect = OnDisconnect;
exports.Query = Query;
exports.Reference = Reference;
exports.ServerValue = ServerValue;
exports.enableLogging = enableLogging;
exports.registerDatabase = registerDatabase;


},{"@firebase/app":"../node_modules/@firebase/app/dist/index.cjs.js","tslib":"../node_modules/tslib/tslib.es6.js","@firebase/util":"../node_modules/@firebase/util/dist/index.cjs.js","@firebase/logger":"../node_modules/@firebase/logger/dist/index.esm.js","process":"../node_modules/process/browser.js"}],"../node_modules/firebase/database/dist/index.esm.js":[function(require,module,exports) {
"use strict";

require("@firebase/database");
},{"@firebase/database":"../node_modules/@firebase/database/dist/index.cjs.js"}],"firebase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  apiKey: "AIzaSyAnhHora4mvxHeo7uIaZFBc-hdOc3RXvto",
  authDomain: "smartsimpleseo-141f3.firebaseapp.com",
  databaseURL: "https://smartsimpleseo-141f3.firebaseio.com",
  projectId: "smartsimpleseo-141f3",
  storageBucket: "",
  messagingSenderId: "221937553690",
  appId: "1:221937553690:web:6d937c92ffa10621"
};
exports.default = _default;
},{}],"../node_modules/date-utils/lib/date-utils.js":[function(require,module,exports) {
/*

© 2011 by Jerry Sievert

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function () {
  /** @class Date */
  // constants
  var monthsAbbr = [],
      monthsFull = [],
      daysAbbr = [],
      daysFull = [],
      dayNames = {},
      monthsAll,
      daysAll = [],
      monthNames = [];
  monthsAbbr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  daysAbbr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dayNames = {
    'su': 0,
    'sun': 0,
    'sunday': 0,
    'mo': 1,
    'mon': 1,
    'monday': 1,
    'tu': 2,
    'tue': 2,
    'tuesday': 2,
    'we': 3,
    'wed': 3,
    'wednesday': 3,
    'th': 4,
    'thu': 4,
    'thursday': 4,
    'fr': 5,
    'fri': 5,
    'friday': 5,
    'sa': 6,
    'sat': 6,
    'saturday': 6
  };
  monthsAll = monthsFull.concat(monthsAbbr);
  daysAll = ['su', 'sun', 'sunday', 'mo', 'mon', 'monday', 'tu', 'tue', 'tuesday', 'we', 'wed', 'wednesday', 'th', 'thu', 'thursday', 'fr', 'fri', 'friday', 'sa', 'sat', 'saturday'];
  monthNames = {
    'jan': 0,
    'january': 0,
    'feb': 1,
    'february': 1,
    'mar': 2,
    'march': 2,
    'apr': 3,
    'april': 3,
    'may': 4,
    'jun': 5,
    'june': 5,
    'jul': 6,
    'july': 6,
    'aug': 7,
    'august': 7,
    'sep': 8,
    'september': 8,
    'oct': 9,
    'october': 9,
    'nov': 10,
    'november': 10,
    'dec': 11,
    'december': 11
  };
  var daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // private helper functions

  /** @ignore */

  function pad(str, length) {
    str = String(str);

    while (str.length < length) {
      str = '0' + str;
    }

    return str;
  }

  var isInteger = function (str) {
    if (str.match(/^(\d+)$/)) {
      return true;
    }

    return false;
  };

  var getInt = function (str, i, minlength, maxlength) {
    for (var x = maxlength; x >= minlength; x--) {
      var token = str.substring(i, i + x);

      if (token.length < minlength) {
        return null;
      }

      if (isInteger(token)) {
        return token;
      }
    }

    return null;
  }; // static class methods


  var origParse = Date.parse; // ------------------------------------------------------------------
  // getDateFromFormat( date_string , format_string )
  //
  // This function takes a date string and a format string. It matches
  // If the date string matches the format string, it returns the
  // getTime() of the date. If it does not match, it returns NaN.
  // Original Author: Matt Kruse <matt@mattkruse.com>
  // WWW: http://www.mattkruse.com/
  // Adapted from: http://www.mattkruse.com/javascript/date/source.html
  // ------------------------------------------------------------------

  var getDateFromFormat = function (val, format) {
    val = val + "";
    format = format + "";
    var iVal = 0;
    var iFormat = 0;
    var c = "";
    var token = "";
    var token2 = "";
    var x, y;
    var now = new Date();
    var year = now.getYear();
    var month = now.getMonth() + 1;
    var date = 1;
    var hh = 0;
    var mm = 0;
    var ss = 0;
    var ampm = "";

    while (iFormat < format.length) {
      // Get next token from format string
      c = format.charAt(iFormat);
      token = "";

      while (format.charAt(iFormat) === c && iFormat < format.length) {
        token += format.charAt(iFormat++);
      } // Extract contents of value based on format token


      if (token === "yyyy" || token === "yy" || token === "y") {
        if (token === "yyyy") {
          x = 4;
          y = 4;
        }

        if (token === "yy") {
          x = 2;
          y = 2;
        }

        if (token === "y") {
          x = 2;
          y = 4;
        }

        year = getInt(val, iVal, x, y);

        if (year === null) {
          return NaN;
        }

        iVal += year.length;

        if (year.length === 2) {
          if (year > 70) {
            year = 1900 + (year - 0);
          } else {
            year = 2000 + (year - 0);
          }
        }
      } else if (token === "MMM" || token === "NNN") {
        month = 0;

        for (var i = 0; i < monthsAll.length; i++) {
          var monthName = monthsAll[i];

          if (val.substring(iVal, iVal + monthName.length).toLowerCase() === monthName.toLowerCase()) {
            if (token === "MMM" || token === "NNN" && i > 11) {
              month = i + 1;

              if (month > 12) {
                month -= 12;
              }

              iVal += monthName.length;
              break;
            }
          }
        }

        if (month < 1 || month > 12) {
          return NaN;
        }
      } else if (token === "EE" || token === "E") {
        for (var n = 0; n < daysAll.length; n++) {
          var dayName = daysAll[n];

          if (val.substring(iVal, iVal + dayName.length).toLowerCase() === dayName.toLowerCase()) {
            iVal += dayName.length;
            break;
          }
        }
      } else if (token === "MM" || token === "M") {
        month = getInt(val, iVal, token.length, 2);

        if (month === null || month < 1 || month > 12) {
          return NaN;
        }

        iVal += month.length;
      } else if (token === "dd" || token === "d") {
        date = getInt(val, iVal, token.length, 2);

        if (date === null || date < 1 || date > 31) {
          return NaN;
        }

        iVal += date.length;
      } else if (token === "hh" || token === "h") {
        hh = getInt(val, iVal, token.length, 2);

        if (hh === null || hh < 1 || hh > 12) {
          return NaN;
        }

        iVal += hh.length;
      } else if (token === "HH" || token === "H") {
        hh = getInt(val, iVal, token.length, 2);

        if (hh === null || hh < 0 || hh > 23) {
          return NaN;
        }

        iVal += hh.length;
      } else if (token === "KK" || token === "K") {
        hh = getInt(val, iVal, token.length, 2);

        if (hh === null || hh < 0 || hh > 11) {
          return NaN;
        }

        iVal += hh.length;
      } else if (token === "kk" || token === "k") {
        hh = getInt(val, iVal, token.length, 2);

        if (hh === null || hh < 1 || hh > 24) {
          return NaN;
        }

        iVal += hh.length;
        hh--;
      } else if (token === "mm" || token === "m") {
        mm = getInt(val, iVal, token.length, 2);

        if (mm === null || mm < 0 || mm > 59) {
          return NaN;
        }

        iVal += mm.length;
      } else if (token === "ss" || token === "s") {
        ss = getInt(val, iVal, token.length, 2);

        if (ss === null || ss < 0 || ss > 59) {
          return NaN;
        }

        iVal += ss.length;
      } else if (token === "a") {
        if (val.substring(iVal, iVal + 2).toLowerCase() === "am") {
          ampm = "AM";
        } else if (val.substring(iVal, iVal + 2).toLowerCase() === "pm") {
          ampm = "PM";
        } else {
          return NaN;
        }

        iVal += 2;
      } else {
        if (val.substring(iVal, iVal + token.length) !== token) {
          return NaN;
        } else {
          iVal += token.length;
        }
      }
    } // If there are any trailing characters left in the value, it doesn't match


    if (iVal !== val.length) {
      return NaN;
    } // Is date valid for month?


    if (month === 2) {
      // Check for leap year
      if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        // leap year
        if (date > 29) {
          return NaN;
        }
      } else {
        if (date > 28) {
          return NaN;
        }
      }
    }

    if (month === 4 || month === 6 || month === 9 || month === 11) {
      if (date > 30) {
        return NaN;
      }
    } // Correct hours value


    if (hh < 12 && ampm === "PM") {
      hh = hh - 0 + 12;
    } else if (hh > 11 && ampm === "AM") {
      hh -= 12;
    }

    var newdate = new Date(year, month - 1, date, hh, mm, ss);
    return newdate.getTime();
  };
  /** @ignore */


  Date.parse = function (date, format) {
    if (format) {
      return getDateFromFormat(date, format);
    }

    var timestamp = origParse(date),
        minutesOffset = 0,
        match;

    if (isNaN(timestamp) && (match = /^(\d{4}|[+\-]\d{6})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?))?/.exec(date))) {
      if (match[8] !== 'Z') {
        minutesOffset = +match[10] * 60 + +match[11];

        if (match[9] === '+') {
          minutesOffset = 0 - minutesOffset;
        }
      }

      match[7] = match[7] || '000';
      timestamp = Date.UTC(+match[1], +match[2] - 1, +match[3], +match[4], +match[5] + minutesOffset, +match[6], +match[7].substr(0, 3));
    }

    return timestamp;
  };

  function polyfill(name, func) {
    if (Date.prototype[name] === undefined) {
      Date.prototype[name] = func;
    }
  }
  /**
      Returns new instance of Date object with the date set to today and
      the time set to midnight
      @static
      @returns {Date} Today's Date
      @function today
      @memberof Date
   */


  Date.today = function () {
    return new Date().clearTime();
  };
  /**
      Returns new instance of Date object with the date set to today and
      the time set to midnight in UTC
      @static
      @returns {Date} Today's Date in UTC
      @function UTCtoday
      @memberof Date
   */


  Date.UTCtoday = function () {
    return new Date().clearUTCTime();
  };
  /**
      Returns new instance of Date object with the date set to tomorrow and
      the time set to midnight
      @static
      @returns {Date} Tomorrow's Date
      @function tomorrow
      @memberof Date
   */


  Date.tomorrow = function () {
    return Date.today().add({
      days: 1
    });
  };
  /**
      Returns new instance of Date object with the date set to tomorrow and
      the time set to midnight in UTC
      @static
      @returns {Date} Tomorrow's Date in UTC
      @function UTCtomorrow
      @memberof Date
   */


  Date.UTCtomorrow = function () {
    return Date.UTCtoday().add({
      days: 1
    });
  };
  /**
      Returns new instance of Date object with the date set to yesterday and
      the time set to midnight
      @static
      @returns {Date} Yesterday's Date
      @function yesterday
      @memberof Date
   */


  Date.yesterday = function () {
    return Date.today().add({
      days: -1
    });
  };
  /**
      Returns new instance of Date object with the date set to yesterday and
      the time set to midnight in UTC
      @static
      @returns {Date} Yesterday's Date in UTC
      @function UTCyesterday
      @memberof Date
   */


  Date.UTCyesterday = function () {
    return Date.UTCtoday().add({
      days: -1
    });
  };
  /**
      Returns whether the day is valid
      @static
      @param day {Number} day of the month
      @param year {Number} year
      @param month {Number} month of the year [0-11]
      @returns {Boolean}
      @function validateDay
      @memberof Date
   */


  Date.validateDay = function (day, year, month) {
    var date = new Date(year, month, day);
    return date.getFullYear() === year && date.getMonth() === month && date.getDate() === day;
  };
  /**
     Returns whether the year is valid
     @static
     @param year {Number} year
     @returns {Boolean}
     @function validateYear
     @memberof Date
  */


  Date.validateYear = function (year) {
    return year >= 0 && year <= 9999;
  };
  /**
     Returns whether the second is valid
     @static
     @param second {Number} second
     @returns {Boolean}
     @function validateSecond
     @memberof Date
  */


  Date.validateSecond = function (second) {
    return second >= 0 && second < 60;
  };
  /**
     Returns whether the month is valid [0-11]
     @static
     @param month {Number} month
     @returns {Boolean}
     @function validateMonth
     @memberof Date
  */


  Date.validateMonth = function (month) {
    return month >= 0 && month < 12;
  };
  /**
     Returns whether the minute is valid
     @static
     @param minute {Number} minute
     @returns {Boolean}
     @function validateMinute
     @memberof Date
  */


  Date.validateMinute = function (minute) {
    return minute >= 0 && minute < 60;
  };
  /**
     Returns whether the millisecond is valid
     @static
     @param millisecond {Number} millisecond
     @returns {Boolean}
     @function validateMillisecond
     @memberof Date
  */


  Date.validateMillisecond = function (milli) {
    return milli >= 0 && milli < 1000;
  };
  /**
     Returns whether the hour is valid [0-23]
     @static
     @param hour {Number} hour
     @returns {Boolean}
     @function validateHour
     @memberof Date
  */


  Date.validateHour = function (hour) {
    return hour >= 0 && hour < 24;
  };
  /**
     Compares two dates
     @static
     @param date1 {Date} first date
     @param date2 {Date} second date
     @returns {Number} -1 if date1 is less than date2, 0 if they are equal, 1 if date1 is more than date2
     @function compare
     @memberof Date
  */


  Date.compare = function (date1, date2) {
    if (date1.valueOf() < date2.valueOf()) {
      return -1;
    } else if (date1.valueOf() > date2.valueOf()) {
      return 1;
    }

    return 0;
  };
  /**
     Compares two dates to the millisecond
     @static
     @param date1 {Date} first date
     @param date2 {Date} second date
     @returns {Boolean}
     @function equals
     @memberof Date
  */


  Date.equals = function (date1, date2) {
    return date1.valueOf() === date2.valueOf();
  };
  /**
     Compares two dates by day
     @static
     @param date1 {Date} first date
     @param date2 {Date} second date
     @returns {Boolean}
     @function equalsDay
     @memberof Date
  */


  Date.equalsDay = function (date1, date2) {
    return date1.toYMD() === date2.toYMD();
  };
  /**
     Returns the day number for a day [0-6]
     @static
     @param day {String} day name
     @returns {Number}
     @function getDayNumberFromName
     @memberof Date
  */


  Date.getDayNumberFromName = function (name) {
    return dayNames[name.toLowerCase()];
  };
  /**
     Returns the day number for a month [0-11]
     @static
     @param month {String} month name
     @returns {Number}
     @function getMonthNumberFromName
     @memberof Date
  */


  Date.getMonthNumberFromName = function (name) {
    return monthNames[name.toLowerCase()];
  };
  /**
     Returns the month name for a month [0-11]
     @static
     @param month {Number} month
     @returns {String}
     @function getMonthNameFromNumber
     @memberof Date
  */


  Date.getMonthNameFromNumber = function (number) {
    return monthsFull[number];
  };
  /**
     Returns the month name abbreviated for a month [0-11]
     @static
     @param month {Number} month
     @returns {String}
     @function getMonthAbbrFromNumber
     @memberof Date
  */


  Date.getMonthAbbrFromNumber = function (number) {
    return monthsAbbr[number];
  };
  /**
     Returns whether or not the year is a leap year
     @static
     @param year {Number} year
     @returns {Boolean}
     @function isLeapYear
     @memberof Date
  */


  Date.isLeapYear = function (year) {
    return new Date(year, 1, 29).getDate() === 29;
  };
  /**
     Returns the number of days in a month
     @static
     @param year {Number} year
     @param month {Number} month
     @returns {Number}
     @function getDaysInMonth
     @memberof Date
  */


  Date.getDaysInMonth = function (year, month) {
    if (month === 1) {
      return Date.isLeapYear(year) ? 29 : 28;
    }

    return daysInMonth[month];
  };
  /**
     Returns the abbreviated month name
     @returns {String}
     @function getMonthAbbr
     @instance
     @memberof Date
  */


  polyfill('getMonthAbbr', function () {
    return monthsAbbr[this.getMonth()];
  });
  /**
     Returns the month name
     @returns {String}
     @function getMonthName
     @instance
     @memberof Date
  */

  polyfill('getMonthName', function () {
    return monthsFull[this.getMonth()];
  });
  /**
     Returns the name of last month
     @returns {String}
     @function getLastMonthName
     @instance
     @memberof Date
  */

  polyfill('getLastMonthName', function () {
    var i = this.getMonth();
    i = i === 0 ? 11 : i - 1;
    return monthsFull[i];
  });
  /**
     Returns the current UTC office
     @returns {String}
     @function getUTCOffset
     @instance
     @memberof Date
  */

  polyfill('getUTCOffset', function () {
    var tz = pad(Math.abs(this.getTimezoneOffset() / 0.6), 4);

    if (this.getTimezoneOffset() > 0) {
      tz = '-' + tz;
    }

    return tz;
  });
  /**
     Returns a padded Common Log Format
     @returns {String}
     @function toCLFString
     @deprecated Will be deprecated in version 2.0 in favor of toFormat
     @instance
     @memberof Date
  */

  polyfill('toCLFString', function () {
    return pad(this.getDate(), 2) + '/' + this.getMonthAbbr() + '/' + this.getFullYear() + ':' + pad(this.getHours(), 2) + ':' + pad(this.getMinutes(), 2) + ':' + pad(this.getSeconds(), 2) + ' ' + this.getUTCOffset();
  });
  /**
     Returns a padded Year/Month/Day
     @returns {String}
     @param separator {String} optional, defaults to "-"
     @function toYMD
     @deprecated Will be deprecated in version 2.0 in favor of toFormat
     @instance
     @memberof Date
  */

  polyfill('toYMD', function (separator) {
    separator = typeof separator === 'undefined' ? '-' : separator;
    return this.getFullYear() + separator + pad(this.getMonth() + 1, 2) + separator + pad(this.getDate(), 2);
  });
  /**
     Returns a formatted String for database insertion
     @returns {String}
     @function toDBString
     @deprecated Will be deprecated in version 2.0 in favor of toFormat
     @instance
     @memberof Date
  */

  polyfill('toDBString', function () {
    return this.getUTCFullYear() + '-' + pad(this.getUTCMonth() + 1, 2) + '-' + pad(this.getUTCDate(), 2) + ' ' + pad(this.getUTCHours(), 2) + ':' + pad(this.getUTCMinutes(), 2) + ':' + pad(this.getUTCSeconds(), 2);
  });
  /**
     Sets the time to 00:00:00.0000 and returns a new Date object
     @returns {Date}
     @function clearTime
     @instance
     @memberof Date
  */

  polyfill('clearTime', function () {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    this.setMilliseconds(0);
    return this;
  });
  /**
     Sets the time to 00:00:00.0000 and returns a new Date object with set to UTC
     @returns {Date}
     @function clearUTCTime
     @instance
     @memberof Date
  */

  polyfill('clearUTCTime', function () {
    this.setUTCHours(0);
    this.setUTCMinutes(0);
    this.setUTCSeconds(0);
    this.setUTCMilliseconds(0);
    return this;
  });
  /**
     Adds `milliseconds`, `seconds`, `minutes`, `hours`, `days`, `weeks`, `months`, and `years` and returns a new Date.
     Usage: `data.add({ "seconds": 10, "days": 1 })`
     @param additions {Object}
     @returns {Date}
     @function add
     @instance
     @memberof Date
  */

  polyfill('add', function (obj) {
    if (obj.milliseconds !== undefined) {
      this.setMilliseconds(this.getMilliseconds() + obj.milliseconds);
    }

    if (obj.seconds !== undefined) {
      this.setSeconds(this.getSeconds() + obj.seconds);
    }

    if (obj.minutes !== undefined) {
      this.setMinutes(this.getMinutes() + obj.minutes);
    }

    if (obj.hours !== undefined) {
      this.setHours(this.getHours() + obj.hours);
    }

    if (obj.days !== undefined) {
      this.setDate(this.getDate() + obj.days);
    }

    if (obj.weeks !== undefined) {
      this.setDate(this.getDate() + obj.weeks * 7);
    }

    if (obj.months !== undefined) {
      this.setMonth(this.getMonth() + obj.months);
    }

    if (obj.years !== undefined) {
      this.setFullYear(this.getFullYear() + obj.years);
    }

    return this;
  });
  /**
     Adds milliseconds to the Date and returns it
     @returns {Date}
     @param milliseconds {Number} Number of milliseconds to add
     @function addMilliseconds
     @deprecated Will be deprecated in version 2.0 in favor of add
     @instance
     @memberof Date
  */

  polyfill('addMilliseconds', function (milliseconds) {
    return this.add({
      milliseconds: milliseconds
    });
  });
  /**
     Adds seconds to the Date and returns it
     @returns {Date}
     @param seconds {Number} Number of seconds to add
     @function addSeconds
     @deprecated Will be deprecated in version 2.0 in favor of add
     @instance
     @memberof Date
  */

  polyfill('addSeconds', function (seconds) {
    return this.add({
      seconds: seconds
    });
  });
  /**
     Adds minutes to the Date and returns it
     @returns {Date}
     @param minutes {Number} Number of minutes to add
     @function addMinutes
     @deprecated Will be deprecated in version 2.0 in favor of add
     @instance
     @memberof Date
  */

  polyfill('addMinutes', function (minutes) {
    return this.add({
      minutes: minutes
    });
  });
  /**
     Adds hours to the Date and returns it
     @returns {Date}
     @param hours {Number} Number of hours to add
     @function addHours
     @deprecated Will be deprecated in version 2.0 in favor of add
     @instance
     @memberof Date
  */

  polyfill('addHours', function (hours) {
    return this.add({
      hours: hours
    });
  });
  /**
     Adds days to the Date and returns it
     @returns {Date}
     @param days {Number} Number of days to add
     @function addSeconds
     @deprecated Will be deprecated in version 2.0 in favor of add
     @instance
     @memberof Date
  */

  polyfill('addDays', function (days) {
    return this.add({
      days: days
    });
  });
  /**
     Adds weeks to the Date and returns it
     @returns {Date}
     @param weeks {Number} Number of weeks to add
     @function addWeeks
     @deprecated Will be deprecated in version 2.0 in favor of add
     @instance
     @memberof Date
  */

  polyfill('addWeeks', function (weeks) {
    return this.add({
      days: weeks * 7
    });
  });
  /**
     Adds months to the Date and returns it
     @returns {Date}
     @param months {Number} Number of months to add
     @function addMonths
     @deprecated Will be deprecated in version 2.0 in favor of add
     @instance
     @memberof Date
  */

  polyfill('addMonths', function (months) {
    return this.add({
      months: months
    });
  });
  /**
     Adds years to the Date and returns it
     @returns {Date}
     @param years {Number} Number of years to add
     @function addYears
     @deprecated Will be deprecated in version 2.0 in favor of add
     @instance
     @memberof Date
  */

  polyfill('addYears', function (years) {
    return this.add({
      years: years
    });
  });
  /**
     Removes `milliseconds`, `seconds`, `minutes`, `hours`, `days`, `weeks`, `months`, and `years` and returns a new Date.
     Usage: `data.remove({ "seconds": 10, "days": 1 })`
     @param removals {Object}
     @returns {Date}
     @function remove
     @instance
     @memberof Date
  */

  polyfill('remove', function (obj) {
    if (obj.seconds !== undefined) {
      this.setSeconds(this.getSeconds() - obj.seconds);
    }

    if (obj.minutes !== undefined) {
      this.setMinutes(this.getMinutes() - obj.minutes);
    }

    if (obj.hours !== undefined) {
      this.setHours(this.getHours() - obj.hours);
    }

    if (obj.days !== undefined) {
      this.setDate(this.getDate() - obj.days);
    }

    if (obj.weeks !== undefined) {
      this.setDate(this.getDate() - obj.weeks * 7);
    }

    if (obj.months !== undefined) {
      this.setMonth(this.getMonth() - obj.months);
    }

    if (obj.years !== undefined) {
      this.setFullYear(this.getFullYear() - obj.years);
    }

    return this;
  });
  /**
     Removes milliseconds from the Date and returns it
     @returns {Date}
     @param milliseconds {Number} Number of millseconds to remove
     @function removeMilliseconds
     @deprecated Will be deprecated in version 2.0 in favor of remove
     @instance
     @memberof Date
  */

  polyfill('removeMilliseconds', function (milliseconds) {
    throw new Error('Not implemented');
  });
  /**
     Removes seconds from the Date and returns it
     @returns {Date}
     @param seconds {Number} Number of seconds to remove
     @function removeSeconds
     @deprecated Will be deprecated in version 2.0 in favor of remove
     @instance
     @memberof Date
  */

  polyfill('removeSeconds', function (seconds) {
    return this.remove({
      seconds: seconds
    });
  });
  /**
     Removes minutes from the Date and returns it
     @returns {Date}
     @param seconds {Number} Number of minutes to remove
     @function removeMinutes
     @deprecated Will be deprecated in version 2.0 in favor of remove
     @instance
     @memberof Date
  */

  polyfill('removeMinutes', function (minutes) {
    return this.remove({
      minutes: minutes
    });
  });
  /**
     Removes hours from the Date and returns it
     @returns {Date}
     @param hours {Number} Number of hours to remove
     @function removeHours
     @deprecated Will be deprecated in version 2.0 in favor of remove
     @instance
     @memberof Date
  */

  polyfill('removeHours', function (hours) {
    return this.remove({
      hours: hours
    });
  });
  /**
     Removes days from the Date and returns it
     @returns {Date}
     @param days {Number} Number of days to remove
     @function removeDays
     @deprecated Will be deprecated in version 2.0 in favor of remove
     @instance
     @memberof Date
  */

  polyfill('removeDays', function (days) {
    return this.remove({
      days: days
    });
  });
  /**
     Removes weeks from the Date and returns it
     @returns {Date}
     @param weeks {Number} Number of weeks to remove
     @function removeWeeks
     @deprecated Will be deprecated in version 2.0 in favor of remove
     @instance
     @memberof Date
  */

  polyfill('removeWeeks', function (weeks) {
    return this.remove({
      days: weeks * 7
    });
  });
  /**
     Removes months from the Date and returns it
     @returns {Date}
     @param months {Number} Number of months to remove
     @function removeMonths
     @deprecated Will be deprecated in version 2.0 in favor of remove
     @instance
     @memberof Date
  */

  polyfill('removeMonths', function (months) {
    return this.remove({
      months: months
    });
  });
  /**
     Removes years from the Date and returns it
     @returns {Date}
     @param years {Number} Number of years to remove
     @function removeYears
     @deprecated Will be deprecated in version 2.0 in favor of remove
     @instance
     @memberof Date
  */

  polyfill('removeYears', function (years) {
    return this.remove({
      years: years
    });
  });
  /**
     Adds weekdays based on a Mon-Fri work schedule and returns it
     @returns {Date}
     @param weekdays {Number} Number of weekdays to add
     @function addWeekdays
     @instance
     @memberof Date
  */

  polyfill('addWeekdays', function (weekdays) {
    var day = this.getDay();

    if (day === 0) {
      day = 7;
    }

    var daysOffset = weekdays;
    var weekspan = Math.floor((weekdays + day - 1) / 5.0);

    if (weekdays > 0) {
      daysOffset += weekspan * 2;

      if (day > 5) {
        daysOffset -= day - 5;
      }
    } else {
      daysOffset += Math.min(weekspan * 2, 0);

      if (day > 6) {
        daysOffset -= 1;
      }
    }

    return this.addDays(daysOffset);
  });
  /**
     Sets the time and date to now
     @function setTimeToNow
     @instance
     @memberof Date
  */

  polyfill('setTimeToNow', function () {
    var n = new Date();
    this.setMilliseconds(n.getMilliseconds());
    this.setSeconds(n.getSeconds());
    this.setMinutes(n.getMinutes());
    this.setHours(n.getHours());
  });
  /**
     Returns a cloned copy of the current Date
     @function clone
     @instance
     @memberof Date
  */

  polyfill('clone', function () {
    return new Date(this.valueOf());
  });
  /**
     Returns whether this Date is between a start and end date
     @function between
     @returns {Boolean}
     @instance
     @memberof Date
  */

  polyfill('between', function (start, end) {
    return this.valueOf() >= start.valueOf() && this.valueOf() <= end.valueOf();
  });
  /**
     Compares a Date to this Date
     @param {Date} Date to compare to
     @function compareTo
     @returns {Number} -1 if less than date, 0 if they are equal, 1 if more than date
     @instance
     @memberof Date
  */

  polyfill('compareTo', function (date) {
    return Date.compare(this, date);
  });
  /**
     Compares a Date and time to this Date and time for equality
     @param {Date} Date to compare to
     @function equals
     @returns {Boolean}
     @instance
     @memberof Date
  */

  polyfill('equals', function (date) {
    return Date.equals(this, date);
  });
  /**
     Compares a Date to this Date for equality
     @param {Date} Date to compare to
     @function equalsDay
     @returns {Boolean}
     @instance
     @memberof Date
  */

  polyfill('equalsDay', function (date) {
    return Date.equalsDay(this, date);
  });
  /**
     Checks to see if the Date is today
     @function isToday
     @returns {Boolean}
     @instance
     @memberof Date
  */

  polyfill('isToday', function () {
    return Date.equalsDay(this, Date.today());
  });
  /**
     Compares a Date to this Date for to see if it is after the Date passed
     @param {Date} Date to compare to
     @function isAfter
     @returns {Boolean}
     @instance
     @memberof Date
  */

  polyfill('isAfter', function (date) {
    date = date ? date : new Date();
    return this.compareTo(date) > 0;
  });
  /**
     Compares a Date to this Date for to see if it is before the Date passed
     @param {Date} Date to compare to
     @function isBefore
     @returns {Boolean}
     @instance
     @memberof Date
  */

  polyfill('isBefore', function (date) {
    date = date ? date : new Date();
    return this.compareTo(date) < 0;
  });
  /**
     Returns `true` if the Date is a weekend using standard Saturday/Sunday definition of a weekend
     @function isWeekend
     @returns {Boolean}
     @instance
     @memberof Date
  */

  polyfill('isWeekend', function (date) {
    return this.getDay() % 6 === 0;
  });
  /**
     Returns the number of days between this Date and the Date passed in
     @function getDaysBetween
     @param {Date} Date to compare to
     @returns {Number}
     @instance
     @memberof Date
  */

  polyfill('getDaysBetween', function (date) {
    return (date.clone().valueOf() - this.valueOf()) / 86400000 | 0;
  });
  /**
     Returns the number of hours between this Date and the Date passed in
     @function getHoursBetween
     @param {Date} Date to compare to
     @returns {Number}
     @instance
     @memberof Date
  */

  polyfill('getHoursBetween', function (date) {
    return (date.clone().valueOf() - this.valueOf()) / 3600000 | 0;
  });
  /**
     Returns the number of minutes between this Date and the Date passed in
     @function getMinutesBetween
     @param {Date} Date to compare to
     @returns {Number}
     @instance
     @memberof Date
  */

  polyfill('getMinutesBetween', function (date) {
    return (date.clone().valueOf() - this.valueOf()) / 60000 | 0;
  });
  /**
     Returns the number of seconds between this Date and the Date passed in
     @function getSecondsBetween
     @param {Date} Date to compare to
     @returns {Number}
     @instance
     @memberof Date
  */

  polyfill('getSecondsBetween', function (date) {
    return (date.clone().valueOf() - this.valueOf()) / 1000 | 0;
  });
  /**
     Returns the number of milliseconds between this Date and the Date passed in
     @function getMillisecondsBetween
     @param {Date} Date to compare to
     @returns {Number}
     @instance
     @memberof Date
  */

  polyfill('getMillisecondsBetween', function (date) {
    return date.clone().valueOf() - this.valueOf() | 0;
  });
  /**
     Returns the number of months between this Date and the Date passed in
     @function getMonthsBetween
     @param {Date} Date to compare to
     @returns {Number}
     @instance
     @memberof Date
  */

  polyfill('getMonthsBetween', function (date) {
    var daysDiff = Math.abs(+this / (86400 * 1000) - +date / (86400 * 1000));
    var start = new Date(+date < +this ? +date : +this);
    var end = new Date(date > +this ? +date : +this);
    var months = 0;

    while (+start < +end) {
      months++;
      start = start.addMonths(1);
    }

    var days = Math.abs(+start / (86400 * 1000) - +end / (86400 * 1000));
    return months - days / 31;
  });
  /**
     Returns the ordinal number of this Date
     @function getOrdinalNumber
     @returns {Number}
     @instance
     @memberof Date
  */

  polyfill('getOrdinalNumber', function () {
    return Math.ceil((this.clone().clearTime() - new Date(this.getFullYear(), 0, 1)) / 86400000) + 1;
  });
  /**
     Returns the a formatted version of this Date
     @function toFormat
     @param format {String} Format of the Date, using `YYYY`, `YY`, `MM`, `DD`, `HH`, `HH24`, `MI`, `SS`, etc
     @returns {String}
     @instance
     @memberof Date
  */

  polyfill('toFormat', function (format) {
    return toFormat(format, getReplaceMap(this));
  });
  /**
     Returns the a formatted version of the UTC version of this Date
     @function toUTCFormat
     @param format {String} Format of the Date, using `YYYY`, `YY`, `MM`, `DD`, `HH`, `HH24`, `MI`, `SS`, etc
     @returns {String}
     @instance
     @memberof Date
  */

  polyfill('toUTCFormat', function (format) {
    return toFormat(format, getUTCReplaceMap(this));
  });
  /**
     Returns the week number of this Date
     @function getWeekNumber
     @returns {Number}
     @instance
     @memberof Date
  */

  polyfill('getWeekNumber', function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil(((this - onejan) / 86400000 + onejan.getDay() + 1) / 7);
  });
  /**
     Returns the week number of this Date, zero padded
     @function getFullWeekNumber
     @returns {Number}
     @instance
     @memberof Date
  */

  polyfill('getFullWeekNumber', function () {
    var weekNumber = '' + this.getWeekNumber();

    if (weekNumber.length === 1) {
      weekNumber = "0" + weekNumber;
    }

    return weekNumber;
  });

  var toFormat = function (format, replaceMap) {
    var f = [format],
        i,
        l,
        s;

    var replace = function (str, rep) {
      var i = 0,
          l = f.length,
          j,
          ll,
          t,
          n = [];

      for (; i < l; i++) {
        if (typeof f[i] == 'string') {
          t = f[i].split(str);

          for (j = 0, ll = t.length - 1; j < ll; j++) {
            n.push(t[j]);
            n.push([rep]); // replacement pushed as non-string
          }

          n.push(t[ll]);
        } else {
          // must be a replacement, don't process, just push
          n.push(f[i]);
        }
      }

      f = n;
    };

    for (i in replaceMap) {
      replace(i, replaceMap[i]);
    }

    s = '';

    for (i = 0, l = f.length; i < l; i++) s += typeof f[i] == 'string' ? f[i] : f[i][0];

    return f.join('');
  };

  var getReplaceMap = function (date) {
    var hours = date.getHours() % 12 ? date.getHours() % 12 : 12;
    return {
      'YYYY': date.getFullYear(),
      'YY': String(date.getFullYear()).slice(-2),
      'MMMM': monthsFull[date.getMonth()],
      'MMM': monthsAbbr[date.getMonth()],
      'MM': pad(date.getMonth() + 1, 2),
      'MI': pad(date.getMinutes(), 2),
      'M': date.getMonth() + 1,
      'DDDD': daysFull[date.getDay()],
      'DDD': daysAbbr[date.getDay()],
      'DD': pad(date.getDate(), 2),
      'D': date.getDate(),
      'HH24': pad(date.getHours(), 2),
      'HH': pad(hours, 2),
      'H': hours,
      'SS': pad(date.getSeconds(), 2),
      'PP': date.getHours() >= 12 ? 'PM' : 'AM',
      'P': date.getHours() >= 12 ? 'pm' : 'am',
      'LL': pad(date.getMilliseconds(), 3)
    };
  };

  var getUTCReplaceMap = function (date) {
    var hours = date.getUTCHours() % 12 ? date.getUTCHours() % 12 : 12;
    return {
      'YYYY': date.getUTCFullYear(),
      'YY': String(date.getUTCFullYear()).slice(-2),
      'MMMM': monthsFull[date.getUTCMonth()],
      'MMM': monthsAbbr[date.getUTCMonth()],
      'MM': pad(date.getUTCMonth() + 1, 2),
      'MI': pad(date.getUTCMinutes(), 2),
      'M': date.getUTCMonth() + 1,
      'DDDD': daysFull[date.getUTCDay()],
      'DDD': daysAbbr[date.getUTCDay()],
      'DD': pad(date.getUTCDate(), 2),
      'D': date.getUTCDate(),
      'HH24': pad(date.getUTCHours(), 2),
      'HH': pad(hours, 2),
      'H': hours,
      'SS': pad(date.getUTCSeconds(), 2),
      'PP': date.getUTCHours() >= 12 ? 'PM' : 'AM',
      'P': date.getUTCHours() >= 12 ? 'pm' : 'am',
      'LL': pad(date.getUTCMilliseconds(), 3)
    };
  };
  /*
   * change the language
   * @param lang => support "es" Spanish, "fr" french, "pt-BR" Portuguese Brazil
   * translate => diego
   */


  var language = function (lang) {
    if (lang == "es") {
      monthsAbbr = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
      monthsFull = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      daysAbbr = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];
      daysFull = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
      dayNames = {
        'do': 0,
        'dom': 0,
        'domingo': 0,
        'lu': 1,
        'lun': 1,
        'lunes': 1,
        'ma': 2,
        'mar': 2,
        'martes': 2,
        'mi': 3,
        'mie': 3,
        'miercoles': 3,
        'ju': 4,
        'jue': 4,
        'jueves': 4,
        'vi': 5,
        'vie': 5,
        'viernes': 5,
        'sa': 6,
        'sab': 6,
        'sabado': 6
      };
      monthsAll = monthsFull.concat(monthsAbbr);
      daysAll = ['do', 'dom', 'domingo', 'lu', 'lun', 'lunes', 'ma', 'mar', 'martes', 'mi', 'mie', 'miércoles', 'ju', 'jue', 'jueves', 'vi', 'vie', 'viernes', 'sa', 'sab', 'sábado'];
      monthNames = {
        'ene': 0,
        'enero': 0,
        'feb': 1,
        'febrero': 1,
        'mar': 2,
        'marzo': 2,
        'abr': 3,
        'abril': 3,
        'may': 4,
        'mayo': 4,
        'jun': 5,
        'junio': 5,
        'jul': 6,
        'julio': 6,
        'ago': 7,
        'agosto': 7,
        'sep': 8,
        'septiembre': 8,
        'oct': 9,
        'octubre': 9,
        'nov': 10,
        'noviembre': 10,
        'dic': 11,
        'diciembre': 11
      };
    } else if (lang == "fr") {
      monthsAbbr = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jui', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
      monthsFull = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
      daysAbbr = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
      daysFull = ['Dimanchi', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
      dayNames = {
        'di': 0,
        'dim': 0,
        'dimanchi': 0,
        'lu': 1,
        'lun': 1,
        'lundi': 1,
        'ma': 2,
        'mar': 2,
        'mardi': 2,
        'me': 3,
        'mer': 3,
        'mercredi': 3,
        'je': 4,
        'jeu': 4,
        'jeudi': 4,
        've': 5,
        'ven': 5,
        'vendredi': 5,
        'sa': 6,
        'sam': 6,
        'samedi': 6
      };
      monthsAll = monthsFull.concat(monthsAbbr);
      daysAll = ['di', 'dim', 'dimanchi', 'lu', 'lun', 'lundi', 'ma', 'mar', 'mardi', 'me', 'mer', 'mercredi', 'je', 'jeu', 'jeudi', 've', 'ven', 'vendredi', 'sa', 'sam', 'samedi'];
      monthNames = {
        'jan': 0,
        'janvier': 0,
        'fév': 1,
        'février': 1,
        'mar': 2,
        'mars': 2,
        'avr': 3,
        'avril': 3,
        'mai': 4,
        'jui': 5,
        'juin': 5,
        'jul': 6,
        'juillet': 6,
        'aoû': 7,
        'août': 7,
        'sep': 8,
        'septembre': 8,
        'oct': 9,
        'octobre': 9,
        'nov': 10,
        'novembre': 10,
        'déc': 11,
        'décembre': 11
      };
    } else if (lang == "pt-BR") {
      monthsAbbr = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
      monthsFull = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
      daysAbbr = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
      daysFull = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
      dayNames = {
        'do': 0,
        'dom': 0,
        'domingo': 0,
        'se': 1,
        'seg': 1,
        'segunda': 1,
        'te': 2,
        'ter': 2,
        'terca': 2,
        'qa': 3,
        'qua': 3,
        'quarta': 3,
        'qi': 4,
        'qui': 4,
        'quinta': 4,
        'se': 5,
        'sex': 5,
        'sexta': 5,
        'sa': 6,
        'sab': 6,
        'sabado': 6
      };
      monthsAll = monthsFull.concat(monthsAbbr);
      daysAll = ['do', 'dom', 'domingo', 'se', 'seg', 'segunda', 'te', 'ter', 'terça', 'qa', 'qua', 'quarta', 'qi', 'qui', 'quinta', 'se', 'sex', 'sexta', 'sa', 'sab', 'sábado'];
      monthNames = {
        'jan': 0,
        'janeiro': 0,
        'fev': 1,
        'fevereiro': 1,
        'mar': 2,
        'março': 2,
        'abr': 3,
        'abril': 3,
        'mai': 4,
        'jun': 5,
        'junho': 5,
        'jul': 6,
        'julho': 6,
        'ago': 7,
        'agosto': 7,
        'set': 8,
        'setembro': 8,
        'out': 9,
        'outubro': 9,
        'nov': 10,
        'novembro': 10,
        'dez': 11,
        'dezembro': 11
      };
    }
  }; // Are we being imported?..


  if (typeof module !== "undefined" && typeof module.exports === "object") {
    module.exports.language = language;
  } else if (typeof exports === "object") {
    exports.language = language;
  } else if (typeof Date.language === "undefined") {
    // ...if not and if no language, then add statically to Date (for browsers.)
    Date.language = language;
  }
})();
},{}],"scripts/account.js":[function(require,module,exports) {
"use strict";

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

require("firebase/database");

var _firebase = _interopRequireDefault(require("../firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("date-utils");

_app.default.initializeApp(_firebase.default);

var firstNameField = document.getElementById("firstName");
var lastNameField = document.getElementById("lastName");
var userError = document.getElementById("accountSettingError");
var emailField = document.getElementById("email");
var submitClick = document.getElementById("save");
var cancelClick = document.getElementById("cancel");
var passwordField = document.getElementById("password");

_app.default.auth().onAuthStateChanged(function (user) {
  if (user) {
    var sUser = _app.default.auth().currentUser.uid;

    console.log(sUser);

    _app.default.database().ref("user/" + sUser).on("value", function (snapshot) {
      var data = snapshot.val();
      firstNameField.placeholder = data.firstName;
      lastNameField.placeholder = data.lastName;
      emailField.placeholder = data.email;
    });
  } else {
    userError.innerHTML = "We couldn't find your account information. You may be logged out. Do you want to <a href=\"../pages/login.html\">Login?</a>";
  }

  ;
});

firstNameField.addEventListener("blur", function (evt) {
  var firstName = document.getElementById("firstName").value;
  var valid = validateTextOnly(firstName);

  if (valid == false) {
    userError.innerHTML = "You seem to have changed a value but we cannot accept that change.";
    firstNameField.focus();
  }
});
cancelClick.addEventListener("click", function (evt) {
  window.location.replace("../pages/dashboard.html");
});
submitClick.addEventListener("click", function (evt) {
  evt.preventDefault();

  var sUser = _app.default.auth().currentUser.uid;

  var ref = _app.default.database().ref("user/" + sUser);

  if (firstNameField.value) {
    ref.update({
      firstName: firstNameField.value
    });
  } else {
    console.log("nothing in first name");
  }

  if (lastNameField.value) {
    ref.update({
      lastName: lastNameField.value
    });
  }

  if (emailField.value) {
    _app.default.auth().currentUser.updateEmail(emailField.value).then(function () {
      ref.update({
        email: emailField.value
      });
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode == "auth/requires-recent-login") {
        userError.innerHTML = "Changing your email requires you to login again. <a href=\"../pages/login.html\">Do you want to do that now?</a>";
      } else {
        userError.innerHTML = "We couldn't update your email address. " + errorMessage;
      }

      console.log(errorCode);
    });
  }

  if (passwordField.value) {
    _app.default.auth().currentUser.updatePassword(passwordField.value).then(function () {
      ref.update({
        password: passwordField.value
      });
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode == "auth/requires-recent-login") {
        userError.innerHTML = "Changing your password requires you to login again. <a href=\"../pages/login.html\">Do you want to do that now?</a>";
      } else {
        userError.innerHTML = "We couldn't update your password. " + errorMessage;
      }

      console.log(errorCode);
    });
  }

  userError.innerHTML = "Fields changed have been updated";
});

function validateEmail(email) {
  var re = /^.+@.+\..+$/;
  return re.test(email);
}

function validateTextOnly() {
  var re = /^[a-zA-Z]+$/;
  return re.test(name);
} //Password must be at least 6 letters long


function validatePassword(password) {
  var re = /^(?=.{6,})/;
  return re.test(password);
}
},{"firebase/app":"../node_modules/firebase/app/dist/index.cjs.js","firebase/auth":"../node_modules/firebase/auth/dist/index.esm.js","firebase/database":"../node_modules/firebase/database/dist/index.esm.js","../firebase":"firebase.js","date-utils":"../node_modules/date-utils/lib/date-utils.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61851" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/account.js"], null)
//# sourceMappingURL=/account.1fac9b73.js.map