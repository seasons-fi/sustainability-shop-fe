["^ ","~:resource-id",["~:shadow.build.classpath/resource","com/cognitect/transit/caching.js"],"~:js","goog.provide(\"com.cognitect.transit.caching\");\ngoog.require(\"com.cognitect.transit.delimiters\");\ngoog.scope(function() {\n  var caching = com.cognitect.transit.caching, d = com.cognitect.transit.delimiters;\n  caching.MIN_SIZE_CACHEABLE = 3;\n  caching.BASE_CHAR_IDX = 48;\n  caching.CACHE_CODE_DIGITS = 44;\n  caching.MAX_CACHE_ENTRIES = caching.CACHE_CODE_DIGITS * caching.CACHE_CODE_DIGITS;\n  caching.MAX_CACHE_SIZE = 4096;\n  caching.isCacheable = function(string, asMapKey) {\n    if (string.length > caching.MIN_SIZE_CACHEABLE) {\n      if (asMapKey) {\n        return true;\n      } else {\n        var c0 = string.charAt(0), c1 = string.charAt(1);\n        if (c0 === d.ESC) {\n          return c1 === \":\" || c1 === \"$\" || c1 === \"#\";\n        } else {\n          return false;\n        }\n      }\n    } else {\n      return false;\n    }\n  };\n  caching.idxToCode = function(idx) {\n    var hi = Math.floor(idx / caching.CACHE_CODE_DIGITS), lo = idx % caching.CACHE_CODE_DIGITS, loc = String.fromCharCode(lo + caching.BASE_CHAR_IDX);\n    if (hi === 0) {\n      return d.SUB + loc;\n    } else {\n      return d.SUB + String.fromCharCode(hi + caching.BASE_CHAR_IDX) + loc;\n    }\n  };\n  caching.WriteCache = function() {\n    this.idx = 0;\n    this.gen = 0;\n    this.cacheSize = 0;\n    this.cache = {};\n  };\n  caching.WriteCache.prototype.write = function(string, asMapKey) {\n    if (caching.isCacheable(string, asMapKey)) {\n      if (this.cacheSize === caching.MAX_CACHE_SIZE) {\n        this.clear();\n        this.gen = 0;\n        this.cache = {};\n      } else {\n        if (this.idx === caching.MAX_CACHE_ENTRIES) {\n          this.clear();\n        }\n      }\n      var entry = this.cache[string];\n      if (entry == null) {\n        this.cache[string] = [caching.idxToCode(this.idx), this.gen];\n        this.idx++;\n        return string;\n      } else {\n        if (entry[1] != this.gen) {\n          entry[1] = this.gen;\n          entry[0] = caching.idxToCode(this.idx);\n          this.idx++;\n          return string;\n        } else {\n          return entry[0];\n        }\n      }\n    } else {\n      return string;\n    }\n  };\n  caching.WriteCache.prototype.clear = function Transit$WriteCache() {\n    this.idx = 0;\n    this.gen++;\n  };\n  caching.writeCache = function() {\n    return new caching.WriteCache;\n  };\n  caching.isCacheCode = function(string) {\n    return string.charAt(0) === d.SUB && string.charAt(1) !== \" \";\n  };\n  caching.codeToIdx = function(code) {\n    if (code.length === 2) {\n      return code.charCodeAt(1) - caching.BASE_CHAR_IDX;\n    } else {\n      var hi = (code.charCodeAt(1) - caching.BASE_CHAR_IDX) * caching.CACHE_CODE_DIGITS, lo = code.charCodeAt(2) - caching.BASE_CHAR_IDX;\n      return hi + lo;\n    }\n  };\n  caching.ReadCache = function Transit$ReadCache() {\n    this.idx = 0;\n    this.cache = [];\n  };\n  caching.ReadCache.prototype.write = function(obj, asMapKey) {\n    if (this.idx == caching.MAX_CACHE_ENTRIES) {\n      this.idx = 0;\n    }\n    this.cache[this.idx] = obj;\n    this.idx++;\n    return obj;\n  };\n  caching.ReadCache.prototype.read = function(string, asMapKey) {\n    return this.cache[caching.codeToIdx(string)];\n  };\n  caching.ReadCache.prototype.clear = function() {\n    this.idx = 0;\n  };\n  caching.readCache = function() {\n    return new caching.ReadCache;\n  };\n});\n","~:source","// Copyright 2014 Cognitect. All Rights Reserved.\n//\n// Licensed under the Apache License, Version 2.0 (the \"License\");\n// you may not use this file except in compliance with the License.\n// You may obtain a copy of the License at\n//\n//      http://www.apache.org/licenses/LICENSE-2.0\n//\n// Unless required by applicable law or agreed to in writing, software\n// distributed under the License is distributed on an \"AS-IS\" BASIS,\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n// See the License for the specific language governing permissions and\n// limitations under the License.\n\ngoog.provide(\"com.cognitect.transit.caching\");\ngoog.require(\"com.cognitect.transit.delimiters\");\n\ngoog.scope(function() {\n\nvar caching = com.cognitect.transit.caching,\n    d       = com.cognitect.transit.delimiters;\n\n/**\n * @const\n * @type {number}\n */\ncaching.MIN_SIZE_CACHEABLE = 3;\n\n/**\n * @const\n * @type {number}\n */\ncaching.BASE_CHAR_IDX = 48;\n\n/**\n * @const\n * @type {number}\n */\ncaching.CACHE_CODE_DIGITS = 44;\n\n/**\n * @const\n * @type {number}\n */\ncaching.MAX_CACHE_ENTRIES = caching.CACHE_CODE_DIGITS*caching.CACHE_CODE_DIGITS;\n\n/**\n * @const\n * @type {number}\n */\ncaching.MAX_CACHE_SIZE = 4096;\n\ncaching.isCacheable = function(string, asMapKey) {\n    if(string.length > caching.MIN_SIZE_CACHEABLE) {\n        if(asMapKey) {\n            return true;\n        } else {\n            var c0 = string.charAt(0),\n                c1 = string.charAt(1);\n            if(c0 === d.ESC) {\n                return c1 === \":\" || c1 === \"$\" || c1 === \"#\";\n            } else {\n                return false;\n            }\n        }\n    } else {\n        return false;\n    }\n};\n\n// =============================================================================\n// WriteCache\n\ncaching.idxToCode = function(idx) {\n    var hi  = Math.floor(idx / caching.CACHE_CODE_DIGITS),\n        lo  = idx % caching.CACHE_CODE_DIGITS,\n        loc = String.fromCharCode(lo + caching.BASE_CHAR_IDX)\n    if(hi === 0) {\n        return d.SUB + loc;\n    } else {\n        return d.SUB + String.fromCharCode(hi + caching.BASE_CHAR_IDX) + loc;\n    }\n};\n\n/**\n * @constructor\n */\ncaching.WriteCache = function() {\n    this.idx = 0;\n    this.gen = 0;\n    this.cacheSize = 0;\n    this.cache = {};\n};\n\ncaching.WriteCache.prototype.write = function(string, asMapKey) {\n    if(caching.isCacheable(string, asMapKey)) {\n        if(this.cacheSize === caching.MAX_CACHE_SIZE) {\n            this.clear();\n            this.gen = 0;\n            this.cache = {};\n        } else if(this.idx === caching.MAX_CACHE_ENTRIES) {\n            this.clear();\n        }\n        var entry = this.cache[string];\n        if(entry == null) {\n            this.cache[string] = [caching.idxToCode(this.idx), this.gen];\n            this.idx++;\n            return string;\n        } else if(entry[1] != this.gen) {\n            entry[1] = this.gen;\n            entry[0] = caching.idxToCode(this.idx);\n            this.idx++;\n            return string;\n        } else {\n            return entry[0];\n        }\n    } else {\n        return string;\n    }\n};\n\ncaching.WriteCache.prototype.clear = function Transit$WriteCache() {\n    this.idx = 0;\n    this.gen++;\n};\n\ncaching.writeCache = function() {\n    return new caching.WriteCache();\n};\n\n// =============================================================================\n// ReadCache\n\ncaching.isCacheCode = function(string) {\n    return (string.charAt(0) === d.SUB) && (string.charAt(1) !== \" \");\n};\n\ncaching.codeToIdx = function(code) {\n    if(code.length === 2) {\n        return code.charCodeAt(1) - caching.BASE_CHAR_IDX;        \n    } else {\n        var hi = (code.charCodeAt(1) - caching.BASE_CHAR_IDX) * caching.CACHE_CODE_DIGITS,\n            lo = (code.charCodeAt(2) - caching.BASE_CHAR_IDX);\n        return hi + lo; \n    }\n};\n\n/**\n * @constructor\n */\ncaching.ReadCache = function Transit$ReadCache() {\n    this.idx = 0;\n    this.cache = [];\n};\n\ncaching.ReadCache.prototype.write = function(obj, asMapKey) {\n    if(this.idx == caching.MAX_CACHE_ENTRIES) {\n        this.idx = 0;\n    }\n    this.cache[this.idx] = obj;\n    this.idx++;\n    return obj;\n};\n\ncaching.ReadCache.prototype.read = function(string, asMapKey) {\n    return this.cache[caching.codeToIdx(string)];\n};\n\ncaching.ReadCache.prototype.clear = function() {\n    this.idx = 0;\n};\n\ncaching.readCache = function() {\n    return new caching.ReadCache();\n};\n\n});    \n","~:compiled-at",1629754195856,"~:source-map-json","{\n\"version\":3,\n\"file\":\"com.cognitect.transit.caching.js\",\n\"lineCount\":110,\n\"mappings\":\"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\",\n\"sources\":[\"com/cognitect/transit/caching.js\"],\n\"sourcesContent\":[\"// Copyright 2014 Cognitect. All Rights Reserved.\\n//\\n// Licensed under the Apache License, Version 2.0 (the \\\"License\\\");\\n// you may not use this file except in compliance with the License.\\n// You may obtain a copy of the License at\\n//\\n//      http://www.apache.org/licenses/LICENSE-2.0\\n//\\n// Unless required by applicable law or agreed to in writing, software\\n// distributed under the License is distributed on an \\\"AS-IS\\\" BASIS,\\n// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\\n// See the License for the specific language governing permissions and\\n// limitations under the License.\\n\\ngoog.provide(\\\"com.cognitect.transit.caching\\\");\\ngoog.require(\\\"com.cognitect.transit.delimiters\\\");\\n\\ngoog.scope(function() {\\n\\nvar caching = com.cognitect.transit.caching,\\n    d       = com.cognitect.transit.delimiters;\\n\\n/**\\n * @const\\n * @type {number}\\n */\\ncaching.MIN_SIZE_CACHEABLE = 3;\\n\\n/**\\n * @const\\n * @type {number}\\n */\\ncaching.BASE_CHAR_IDX = 48;\\n\\n/**\\n * @const\\n * @type {number}\\n */\\ncaching.CACHE_CODE_DIGITS = 44;\\n\\n/**\\n * @const\\n * @type {number}\\n */\\ncaching.MAX_CACHE_ENTRIES = caching.CACHE_CODE_DIGITS*caching.CACHE_CODE_DIGITS;\\n\\n/**\\n * @const\\n * @type {number}\\n */\\ncaching.MAX_CACHE_SIZE = 4096;\\n\\ncaching.isCacheable = function(string, asMapKey) {\\n    if(string.length > caching.MIN_SIZE_CACHEABLE) {\\n        if(asMapKey) {\\n            return true;\\n        } else {\\n            var c0 = string.charAt(0),\\n                c1 = string.charAt(1);\\n            if(c0 === d.ESC) {\\n                return c1 === \\\":\\\" || c1 === \\\"$\\\" || c1 === \\\"#\\\";\\n            } else {\\n                return false;\\n            }\\n        }\\n    } else {\\n        return false;\\n    }\\n};\\n\\n// =============================================================================\\n// WriteCache\\n\\ncaching.idxToCode = function(idx) {\\n    var hi  = Math.floor(idx / caching.CACHE_CODE_DIGITS),\\n        lo  = idx % caching.CACHE_CODE_DIGITS,\\n        loc = String.fromCharCode(lo + caching.BASE_CHAR_IDX)\\n    if(hi === 0) {\\n        return d.SUB + loc;\\n    } else {\\n        return d.SUB + String.fromCharCode(hi + caching.BASE_CHAR_IDX) + loc;\\n    }\\n};\\n\\n/**\\n * @constructor\\n */\\ncaching.WriteCache = function() {\\n    this.idx = 0;\\n    this.gen = 0;\\n    this.cacheSize = 0;\\n    this.cache = {};\\n};\\n\\ncaching.WriteCache.prototype.write = function(string, asMapKey) {\\n    if(caching.isCacheable(string, asMapKey)) {\\n        if(this.cacheSize === caching.MAX_CACHE_SIZE) {\\n            this.clear();\\n            this.gen = 0;\\n            this.cache = {};\\n        } else if(this.idx === caching.MAX_CACHE_ENTRIES) {\\n            this.clear();\\n        }\\n        var entry = this.cache[string];\\n        if(entry == null) {\\n            this.cache[string] = [caching.idxToCode(this.idx), this.gen];\\n            this.idx++;\\n            return string;\\n        } else if(entry[1] != this.gen) {\\n            entry[1] = this.gen;\\n            entry[0] = caching.idxToCode(this.idx);\\n            this.idx++;\\n            return string;\\n        } else {\\n            return entry[0];\\n        }\\n    } else {\\n        return string;\\n    }\\n};\\n\\ncaching.WriteCache.prototype.clear = function Transit$WriteCache() {\\n    this.idx = 0;\\n    this.gen++;\\n};\\n\\ncaching.writeCache = function() {\\n    return new caching.WriteCache();\\n};\\n\\n// =============================================================================\\n// ReadCache\\n\\ncaching.isCacheCode = function(string) {\\n    return (string.charAt(0) === d.SUB) && (string.charAt(1) !== \\\" \\\");\\n};\\n\\ncaching.codeToIdx = function(code) {\\n    if(code.length === 2) {\\n        return code.charCodeAt(1) - caching.BASE_CHAR_IDX;        \\n    } else {\\n        var hi = (code.charCodeAt(1) - caching.BASE_CHAR_IDX) * caching.CACHE_CODE_DIGITS,\\n            lo = (code.charCodeAt(2) - caching.BASE_CHAR_IDX);\\n        return hi + lo; \\n    }\\n};\\n\\n/**\\n * @constructor\\n */\\ncaching.ReadCache = function Transit$ReadCache() {\\n    this.idx = 0;\\n    this.cache = [];\\n};\\n\\ncaching.ReadCache.prototype.write = function(obj, asMapKey) {\\n    if(this.idx == caching.MAX_CACHE_ENTRIES) {\\n        this.idx = 0;\\n    }\\n    this.cache[this.idx] = obj;\\n    this.idx++;\\n    return obj;\\n};\\n\\ncaching.ReadCache.prototype.read = function(string, asMapKey) {\\n    return this.cache[caching.codeToIdx(string)];\\n};\\n\\ncaching.ReadCache.prototype.clear = function() {\\n    this.idx = 0;\\n};\\n\\ncaching.readCache = function() {\\n    return new caching.ReadCache();\\n};\\n\\n});    \\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"scope\",\"caching\",\"com\",\"cognitect\",\"transit\",\"d\",\"delimiters\",\"MIN_SIZE_CACHEABLE\",\"BASE_CHAR_IDX\",\"CACHE_CODE_DIGITS\",\"MAX_CACHE_ENTRIES\",\"MAX_CACHE_SIZE\",\"isCacheable\",\"caching.isCacheable\",\"string\",\"asMapKey\",\"length\",\"c0\",\"charAt\",\"c1\",\"ESC\",\"idxToCode\",\"caching.idxToCode\",\"idx\",\"hi\",\"Math\",\"floor\",\"lo\",\"loc\",\"String\",\"fromCharCode\",\"SUB\",\"WriteCache\",\"caching.WriteCache\",\"gen\",\"cacheSize\",\"cache\",\"prototype\",\"write\",\"caching.WriteCache.prototype.write\",\"clear\",\"entry\",\"caching.WriteCache.prototype.clear\",\"Transit$WriteCache\",\"writeCache\",\"caching.writeCache\",\"isCacheCode\",\"caching.isCacheCode\",\"codeToIdx\",\"caching.codeToIdx\",\"code\",\"charCodeAt\",\"ReadCache\",\"caching.ReadCache\",\"Transit$ReadCache\",\"caching.ReadCache.prototype.write\",\"obj\",\"read\",\"caching.ReadCache.prototype.read\",\"caching.ReadCache.prototype.clear\",\"readCache\",\"caching.readCache\"]\n}\n"]