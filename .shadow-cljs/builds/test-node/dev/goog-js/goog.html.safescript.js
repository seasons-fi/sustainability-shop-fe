["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/html/safescript.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.html.SafeScript\");\n  goog.module.declareLegacyNamespace();\n  const Const = goog.require(\"goog.string.Const\");\n  const TypedString = goog.require(\"goog.string.TypedString\");\n  const trustedtypes = goog.require(\"goog.html.trustedtypes\");\n  const {fail} = goog.require(\"goog.asserts\");\n  const CONSTRUCTOR_TOKEN_PRIVATE = {};\n  class SafeScript {\n    constructor(value, token) {\n      this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = token === CONSTRUCTOR_TOKEN_PRIVATE ? value : \"\";\n      this.implementsGoogStringTypedString = true;\n    }\n    static fromConstant(script) {\n      const scriptString = Const.unwrap(script);\n      if (scriptString.length === 0) {\n        return SafeScript.EMPTY;\n      }\n      return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(scriptString);\n    }\n    static fromConstantAndArgs(code, var_args) {\n      const args = [];\n      for (let i = 1; i < arguments.length; i++) {\n        args.push(SafeScript.stringify_(arguments[i]));\n      }\n      return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\"(\" + Const.unwrap(code) + \")(\" + args.join(\", \") + \");\");\n    }\n    static fromJson(val) {\n      return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(SafeScript.stringify_(val));\n    }\n    getTypedStringValue() {\n      return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();\n    }\n    static unwrap(safeScript) {\n      return SafeScript.unwrapTrustedScript(safeScript).toString();\n    }\n    static unwrapTrustedScript(safeScript) {\n      if (safeScript instanceof SafeScript && safeScript.constructor === SafeScript) {\n        return safeScript.privateDoNotAccessOrElseSafeScriptWrappedValue_;\n      } else {\n        fail(\"expected object of type SafeScript, got '\" + safeScript + \"' of type \" + goog.typeOf(safeScript));\n        return \"type_error:SafeScript\";\n      }\n    }\n    static stringify_(val) {\n      const json = JSON.stringify(val);\n      return json.replace(/</g, \"\\\\x3c\");\n    }\n    static createSafeScriptSecurityPrivateDoNotAccessOrElse(script) {\n      const policy = trustedtypes.getPolicyPrivateDoNotAccessOrElse();\n      const trustedScript = policy ? policy.createScript(script) : script;\n      return new SafeScript(trustedScript, CONSTRUCTOR_TOKEN_PRIVATE);\n    }\n  }\n  if (goog.DEBUG) {\n    SafeScript.prototype.toString = function() {\n      return \"SafeScript{\" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + \"}\";\n    };\n  }\n  SafeScript.EMPTY = {valueOf:function() {\n    return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\"\");\n  }, }.valueOf();\n  exports = SafeScript;\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview The SafeScript type and its builders.\n *\n * TODO(xtof): Link to document stating type contract.\n */\n\ngoog.module('goog.html.SafeScript');\ngoog.module.declareLegacyNamespace();\n\nconst Const = goog.require('goog.string.Const');\nconst TypedString = goog.require('goog.string.TypedString');\nconst trustedtypes = goog.require('goog.html.trustedtypes');\nconst {fail} = goog.require('goog.asserts');\n\n/**\n * Token used to ensure that object is created only from this file. No code\n * outside of this file can access this token.\n * @const {!Object}\n */\nconst CONSTRUCTOR_TOKEN_PRIVATE = {};\n\n/**\n * A string-like object which represents JavaScript code and that carries the\n * security type contract that its value, as a string, will not cause execution\n * of unconstrained attacker controlled code (XSS) when evaluated as JavaScript\n * in a browser.\n *\n * Instances of this type must be created via the factory method\n * `SafeScript.fromConstant` and not by invoking its constructor. The\n * constructor intentionally takes an extra parameter that cannot be constructed\n * outside of this file and the type is immutable; hence only a default instance\n * corresponding to the empty string can be obtained via constructor invocation.\n *\n * A SafeScript's string representation can safely be interpolated as the\n * content of a script element within HTML. The SafeScript string should not be\n * escaped before interpolation.\n *\n * Note that the SafeScript might contain text that is attacker-controlled but\n * that text should have been interpolated with appropriate escaping,\n * sanitization and/or validation into the right location in the script, such\n * that it is highly constrained in its effect (for example, it had to match a\n * set of whitelisted words).\n *\n * A SafeScript can be constructed via security-reviewed unchecked\n * conversions. In this case producers of SafeScript must ensure themselves that\n * the SafeScript does not contain unsafe script. Note in particular that\n * `&lt;` is dangerous, even when inside JavaScript strings, and so should\n * always be forbidden or JavaScript escaped in user controlled input. For\n * example, if `&lt;/script&gt;&lt;script&gt;evil&lt;/script&gt;\"` were\n * interpolated inside a JavaScript string, it would break out of the context\n * of the original script element and `evil` would execute. Also note\n * that within an HTML script (raw text) element, HTML character references,\n * such as \"&lt;\" are not allowed. See\n * http://www.w3.org/TR/html5/scripting-1.html#restrictions-for-contents-of-script-elements.\n * Creating SafeScript objects HAS SIDE-EFFECTS due to calling Trusted Types Web\n * API.\n *\n * @see SafeScript#fromConstant\n * @final\n * @implements {TypedString}\n */\nclass SafeScript {\n  /**\n   * @param {!TrustedScript|string} value\n   * @param {!Object} token package-internal implementation detail.\n   */\n  constructor(value, token) {\n    /**\n     * The contained value of this SafeScript.  The field has a purposely ugly\n     * name to make (non-compiled) code that attempts to directly access this\n     * field stand out.\n     * @private {!TrustedScript|string}\n     */\n    this.privateDoNotAccessOrElseSafeScriptWrappedValue_ =\n        (token === CONSTRUCTOR_TOKEN_PRIVATE) ? value : '';\n\n    /**\n     * @override\n     * @const\n     */\n    this.implementsGoogStringTypedString = true;\n  }\n\n  /**\n   * Creates a SafeScript object from a compile-time constant string.\n   *\n   * @param {!Const} script A compile-time-constant string from which to create\n   *     a SafeScript.\n   * @return {!SafeScript} A SafeScript object initialized to `script`.\n   */\n  static fromConstant(script) {\n    const scriptString = Const.unwrap(script);\n    if (scriptString.length === 0) {\n      return SafeScript.EMPTY;\n    }\n    return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\n        scriptString);\n  }\n\n  /**\n   * Creates a SafeScript from a compile-time constant string but with arguments\n   * that can vary at run-time. The code argument should be formatted as an\n   * inline function (see example below). The arguments will be JSON-encoded and\n   * provided as input to the function specified in code.\n   *\n   * Example Usage:\n   *\n   *     let safeScript = SafeScript.fromConstantAndArgs(\n   *         Const.from('function(arg1, arg2) { doSomething(arg1, arg2); }'),\n   *         arg1,\n   *         arg2);\n   *\n   * This produces a SafeScript equivalent to the following:\n   *\n   *     (function(arg1, arg2) { doSomething(arg1, arg2); })(\"value1\",\n   * \"value2\");\n   *\n   * @param {!Const} code\n   * @param {...*} var_args\n   * @return {!SafeScript}\n   */\n  static fromConstantAndArgs(code, var_args) {\n    const args = [];\n    for (let i = 1; i < arguments.length; i++) {\n      args.push(SafeScript.stringify_(arguments[i]));\n    }\n    return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\n        '(' + Const.unwrap(code) + ')(' + args.join(', ') + ');');\n  }\n\n  /**\n   * Creates a SafeScript JSON representation from anything that could be passed\n   * to JSON.stringify.\n   * @param {*} val\n   * @return {!SafeScript}\n   */\n  static fromJson(val) {\n    return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\n        SafeScript.stringify_(val));\n  }\n\n  /**\n   * Returns this SafeScript's value as a string.\n   *\n   * IMPORTANT: In code where it is security relevant that an object's type is\n   * indeed `SafeScript`, use `SafeScript.unwrap` instead of\n   * this method. If in doubt, assume that it's security relevant. In\n   * particular, note that goog.html functions which return a goog.html type do\n   * not guarantee the returned instance is of the right type. For example:\n   *\n   * <pre>\n   * var fakeSafeHtml = new String('fake');\n   * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;\n   * var newSafeHtml = goog.html.SafeHtml.htmlEscape(fakeSafeHtml);\n   * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by\n   * // goog.html.SafeHtml.htmlEscape() as fakeSafeHtml\n   * // instanceof goog.html.SafeHtml.\n   * </pre>\n   *\n   * @see SafeScript#unwrap\n   * @override\n   */\n  getTypedStringValue() {\n    return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();\n  }\n\n  /**\n   * Performs a runtime check that the provided object is indeed a\n   * SafeScript object, and returns its value.\n   *\n   * @param {!SafeScript} safeScript The object to extract from.\n   * @return {string} The safeScript object's contained string, unless\n   *     the run-time type check fails. In that case, `unwrap` returns an\n   *     innocuous string, or, if assertions are enabled, throws\n   *     `asserts.AssertionError`.\n   */\n  static unwrap(safeScript) {\n    return SafeScript.unwrapTrustedScript(safeScript).toString();\n  }\n\n  /**\n   * Unwraps value as TrustedScript if supported or as a string if not.\n   * @param {!SafeScript} safeScript\n   * @return {!TrustedScript|string}\n   * @see SafeScript.unwrap\n   */\n  static unwrapTrustedScript(safeScript) {\n    // Perform additional Run-time type-checking to ensure that\n    // safeScript is indeed an instance of the expected type.  This\n    // provides some additional protection against security bugs due to\n    // application code that disables type checks.\n    // Specifically, the following checks are performed:\n    // 1. The object is an instance of the expected type.\n    // 2. The object is not an instance of a subclass.\n    if (safeScript instanceof SafeScript &&\n        safeScript.constructor === SafeScript) {\n      return safeScript.privateDoNotAccessOrElseSafeScriptWrappedValue_;\n    } else {\n      fail(\n          'expected object of type SafeScript, got \\'' + safeScript +\n          '\\' of type ' + goog.typeOf(safeScript));\n      return 'type_error:SafeScript';\n    }\n  }\n\n  /**\n   * Converts the given value to a embeddabel JSON string and returns it. The\n   * resulting string can be embedded in HTML because the '<' character is\n   * encoded.\n   *\n   * @param {*} val\n   * @return {string}\n   * @private\n   */\n  static stringify_(val) {\n    const json = JSON.stringify(val);\n    return json.replace(/</g, '\\\\x3c');\n  }\n\n  /**\n   * Package-internal utility method to create SafeScript instances.\n   *\n   * @param {string} script The string to initialize the SafeScript object with.\n   * @return {!SafeScript} The initialized SafeScript object.\n   * @package\n   */\n  static createSafeScriptSecurityPrivateDoNotAccessOrElse(script) {\n    const policy = trustedtypes.getPolicyPrivateDoNotAccessOrElse();\n    const trustedScript = policy ? policy.createScript(script) : script;\n    return new SafeScript(trustedScript, CONSTRUCTOR_TOKEN_PRIVATE);\n  }\n}\n\nif (goog.DEBUG) {\n  /**\n   * Returns a debug string-representation of this value.\n   *\n   * To obtain the actual string value wrapped in a SafeScript, use\n   * `SafeScript.unwrap`.\n   *\n   * @see SafeScript#unwrap\n   * @override\n   */\n  SafeScript.prototype.toString = function() {\n    return 'SafeScript{' +\n        this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + '}';\n  };\n}\n\n\n/**\n * A SafeScript instance corresponding to the empty string.\n * @const {!SafeScript}\n */\nSafeScript.EMPTY = /** @type {!SafeScript} */ ({\n  // NOTE: this compiles to nothing, but hides the possible side effect of\n  // SafeScript creation (due to calling trustedTypes.createPolicy) from the\n  // compiler so that the entire call can be removed if the result is not used.\n  valueOf: function() {\n    return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse('');\n  },\n}.valueOf());\n\n\nexports = SafeScript;\n","~:compiled-at",1629284222880,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.html.safescript.js\",\n\"lineCount\":67,\n\"mappings\":\"AAYA,IAAA,CAAA,UAAA,CAAA,QAAA,CAAA,OAAA,CAAA;AAAA,cAAA;AAAAA,MAAKC,CAAAA,MAAL,CAAY,sBAAZ,CAAA;AACAD,MAAKC,CAAAA,MAAOC,CAAAA,sBAAZ,EAAA;AAEA,QAAMC,QAAQH,IAAKI,CAAAA,OAAL,CAAa,mBAAb,CAAd;AACA,QAAMC,cAAcL,IAAKI,CAAAA,OAAL,CAAa,yBAAb,CAApB;AACA,QAAME,eAAeN,IAAKI,CAAAA,OAAL,CAAa,wBAAb,CAArB;AACA,QAAM,CAACG,IAAD,CAAA,GAASP,IAAKI,CAAAA,OAAL,CAAa,cAAb,CAAf;AAOA,QAAMI,4BAA4B,EAAlC;AA0CA,OAAMC,WAAN;AAKEC,eAAW,CAACC,KAAD,EAAQC,KAAR,CAAe;AAOxB,UAAKC,CAAAA,+CAAL,GACKD,KAAD,KAAWJ,yBAAX,GAAwCG,KAAxC,GAAgD,EADpD;AAOA,UAAKG,CAAAA,+BAAL,GAAuC,IAAvC;AAdwB;AAwBnBC,uBAAY,CAACC,MAAD,CAAS;AAC1B,YAAMC,eAAed,KAAMe,CAAAA,MAAN,CAAaF,MAAb,CAArB;AACA,UAAIC,YAAaE,CAAAA,MAAjB,KAA4B,CAA5B;AACE,eAAOV,UAAWW,CAAAA,KAAlB;AADF;AAGA,aAAOX,UAAWY,CAAAA,gDAAX,CACHJ,YADG,CAAP;AAL0B;AA+BrBK,8BAAmB,CAACC,IAAD,EAAOC,QAAP,CAAiB;AACzC,YAAMC,OAAO,EAAb;AACA,WAAK,IAAIC,IAAI,CAAb,EAAgBA,CAAhB,GAAoBC,SAAUR,CAAAA,MAA9B,EAAsCO,CAAA,EAAtC;AACED,YAAKG,CAAAA,IAAL,CAAUnB,UAAWoB,CAAAA,UAAX,CAAsBF,SAAA,CAAUD,CAAV,CAAtB,CAAV,CAAA;AADF;AAGA,aAAOjB,UAAWY,CAAAA,gDAAX,CACH,GADG,GACGlB,KAAMe,CAAAA,MAAN,CAAaK,IAAb,CADH,GACwB,IADxB,GAC+BE,IAAKK,CAAAA,IAAL,CAAU,IAAV,CAD/B,GACiD,IADjD,CAAP;AALyC;AAepCC,mBAAQ,CAACC,GAAD,CAAM;AACnB,aAAOvB,UAAWY,CAAAA,gDAAX,CACHZ,UAAWoB,CAAAA,UAAX,CAAsBG,GAAtB,CADG,CAAP;AADmB;AA0BrBC,uBAAmB,EAAG;AACpB,aAAO,IAAKpB,CAAAA,+CAAgDqB,CAAAA,QAArD,EAAP;AADoB;AAcfhB,iBAAM,CAACiB,UAAD,CAAa;AACxB,aAAO1B,UAAW2B,CAAAA,mBAAX,CAA+BD,UAA/B,CAA2CD,CAAAA,QAA3C,EAAP;AADwB;AAUnBE,8BAAmB,CAACD,UAAD,CAAa;AAQrC,UAAIA,UAAJ,YAA0B1B,UAA1B,IACI0B,UAAWzB,CAAAA,WADf,KAC+BD,UAD/B;AAEE,eAAO0B,UAAWtB,CAAAA,+CAAlB;AAFF,YAGO;AACLN,YAAA,CACI,2CADJ,GACmD4B,UADnD,GAEI,YAFJ,GAEoBnC,IAAKqC,CAAAA,MAAL,CAAYF,UAAZ,CAFpB,CAAA;AAGA,eAAO,uBAAP;AAJK;AAX8B;AA4BhCN,qBAAU,CAACG,GAAD,CAAM;AACrB,YAAMM,OAAOC,IAAKC,CAAAA,SAAL,CAAeR,GAAf,CAAb;AACA,aAAOM,IAAKG,CAAAA,OAAL,CAAa,IAAb,EAAmB,OAAnB,CAAP;AAFqB;AAYhBpB,2DAAgD,CAACL,MAAD,CAAS;AAC9D,YAAM0B,SAASpC,YAAaqC,CAAAA,iCAAb,EAAf;AACA,YAAMC,gBAAgBF,MAAA,GAASA,MAAOG,CAAAA,YAAP,CAAoB7B,MAApB,CAAT,GAAuCA,MAA7D;AACA,aAAO,IAAIP,UAAJ,CAAemC,aAAf,EAA8BpC,yBAA9B,CAAP;AAH8D;AArKlE;AA4KA,MAAIR,IAAK8C,CAAAA,KAAT;AAUErC,cAAWsC,CAAAA,SAAUb,CAAAA,QAArB,GAAgCc,QAAQ,EAAG;AACzC,aAAO,aAAP,GACI,IAAKnC,CAAAA,+CADT,GAC2D,GAD3D;AADyC,KAA3C;AAVF;AAqBAJ,YAAWW,CAAAA,KAAX,GAA+C,CAI7C6B,QAASA,QAAQ,EAAG;AAClB,WAAOxC,UAAWY,CAAAA,gDAAX,CAA4D,EAA5D,CAAP;AADkB,GAJyB,GAO7C4B,CAAAA,OAP6C,EAA/C;AAUAC,SAAA,GAAUzC,UAAV;AAlQA,SAAA,OAAA;AAAA,CAAA,CAAA;;\",\n\"sources\":[\"goog/html/safescript.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview The SafeScript type and its builders.\\n *\\n * TODO(xtof): Link to document stating type contract.\\n */\\n\\ngoog.module('goog.html.SafeScript');\\ngoog.module.declareLegacyNamespace();\\n\\nconst Const = goog.require('goog.string.Const');\\nconst TypedString = goog.require('goog.string.TypedString');\\nconst trustedtypes = goog.require('goog.html.trustedtypes');\\nconst {fail} = goog.require('goog.asserts');\\n\\n/**\\n * Token used to ensure that object is created only from this file. No code\\n * outside of this file can access this token.\\n * @const {!Object}\\n */\\nconst CONSTRUCTOR_TOKEN_PRIVATE = {};\\n\\n/**\\n * A string-like object which represents JavaScript code and that carries the\\n * security type contract that its value, as a string, will not cause execution\\n * of unconstrained attacker controlled code (XSS) when evaluated as JavaScript\\n * in a browser.\\n *\\n * Instances of this type must be created via the factory method\\n * `SafeScript.fromConstant` and not by invoking its constructor. The\\n * constructor intentionally takes an extra parameter that cannot be constructed\\n * outside of this file and the type is immutable; hence only a default instance\\n * corresponding to the empty string can be obtained via constructor invocation.\\n *\\n * A SafeScript's string representation can safely be interpolated as the\\n * content of a script element within HTML. The SafeScript string should not be\\n * escaped before interpolation.\\n *\\n * Note that the SafeScript might contain text that is attacker-controlled but\\n * that text should have been interpolated with appropriate escaping,\\n * sanitization and/or validation into the right location in the script, such\\n * that it is highly constrained in its effect (for example, it had to match a\\n * set of whitelisted words).\\n *\\n * A SafeScript can be constructed via security-reviewed unchecked\\n * conversions. In this case producers of SafeScript must ensure themselves that\\n * the SafeScript does not contain unsafe script. Note in particular that\\n * `&lt;` is dangerous, even when inside JavaScript strings, and so should\\n * always be forbidden or JavaScript escaped in user controlled input. For\\n * example, if `&lt;/script&gt;&lt;script&gt;evil&lt;/script&gt;\\\"` were\\n * interpolated inside a JavaScript string, it would break out of the context\\n * of the original script element and `evil` would execute. Also note\\n * that within an HTML script (raw text) element, HTML character references,\\n * such as \\\"&lt;\\\" are not allowed. See\\n * http://www.w3.org/TR/html5/scripting-1.html#restrictions-for-contents-of-script-elements.\\n * Creating SafeScript objects HAS SIDE-EFFECTS due to calling Trusted Types Web\\n * API.\\n *\\n * @see SafeScript#fromConstant\\n * @final\\n * @implements {TypedString}\\n */\\nclass SafeScript {\\n  /**\\n   * @param {!TrustedScript|string} value\\n   * @param {!Object} token package-internal implementation detail.\\n   */\\n  constructor(value, token) {\\n    /**\\n     * The contained value of this SafeScript.  The field has a purposely ugly\\n     * name to make (non-compiled) code that attempts to directly access this\\n     * field stand out.\\n     * @private {!TrustedScript|string}\\n     */\\n    this.privateDoNotAccessOrElseSafeScriptWrappedValue_ =\\n        (token === CONSTRUCTOR_TOKEN_PRIVATE) ? value : '';\\n\\n    /**\\n     * @override\\n     * @const\\n     */\\n    this.implementsGoogStringTypedString = true;\\n  }\\n\\n  /**\\n   * Creates a SafeScript object from a compile-time constant string.\\n   *\\n   * @param {!Const} script A compile-time-constant string from which to create\\n   *     a SafeScript.\\n   * @return {!SafeScript} A SafeScript object initialized to `script`.\\n   */\\n  static fromConstant(script) {\\n    const scriptString = Const.unwrap(script);\\n    if (scriptString.length === 0) {\\n      return SafeScript.EMPTY;\\n    }\\n    return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\\n        scriptString);\\n  }\\n\\n  /**\\n   * Creates a SafeScript from a compile-time constant string but with arguments\\n   * that can vary at run-time. The code argument should be formatted as an\\n   * inline function (see example below). The arguments will be JSON-encoded and\\n   * provided as input to the function specified in code.\\n   *\\n   * Example Usage:\\n   *\\n   *     let safeScript = SafeScript.fromConstantAndArgs(\\n   *         Const.from('function(arg1, arg2) { doSomething(arg1, arg2); }'),\\n   *         arg1,\\n   *         arg2);\\n   *\\n   * This produces a SafeScript equivalent to the following:\\n   *\\n   *     (function(arg1, arg2) { doSomething(arg1, arg2); })(\\\"value1\\\",\\n   * \\\"value2\\\");\\n   *\\n   * @param {!Const} code\\n   * @param {...*} var_args\\n   * @return {!SafeScript}\\n   */\\n  static fromConstantAndArgs(code, var_args) {\\n    const args = [];\\n    for (let i = 1; i < arguments.length; i++) {\\n      args.push(SafeScript.stringify_(arguments[i]));\\n    }\\n    return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\\n        '(' + Const.unwrap(code) + ')(' + args.join(', ') + ');');\\n  }\\n\\n  /**\\n   * Creates a SafeScript JSON representation from anything that could be passed\\n   * to JSON.stringify.\\n   * @param {*} val\\n   * @return {!SafeScript}\\n   */\\n  static fromJson(val) {\\n    return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(\\n        SafeScript.stringify_(val));\\n  }\\n\\n  /**\\n   * Returns this SafeScript's value as a string.\\n   *\\n   * IMPORTANT: In code where it is security relevant that an object's type is\\n   * indeed `SafeScript`, use `SafeScript.unwrap` instead of\\n   * this method. If in doubt, assume that it's security relevant. In\\n   * particular, note that goog.html functions which return a goog.html type do\\n   * not guarantee the returned instance is of the right type. For example:\\n   *\\n   * <pre>\\n   * var fakeSafeHtml = new String('fake');\\n   * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;\\n   * var newSafeHtml = goog.html.SafeHtml.htmlEscape(fakeSafeHtml);\\n   * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by\\n   * // goog.html.SafeHtml.htmlEscape() as fakeSafeHtml\\n   * // instanceof goog.html.SafeHtml.\\n   * </pre>\\n   *\\n   * @see SafeScript#unwrap\\n   * @override\\n   */\\n  getTypedStringValue() {\\n    return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();\\n  }\\n\\n  /**\\n   * Performs a runtime check that the provided object is indeed a\\n   * SafeScript object, and returns its value.\\n   *\\n   * @param {!SafeScript} safeScript The object to extract from.\\n   * @return {string} The safeScript object's contained string, unless\\n   *     the run-time type check fails. In that case, `unwrap` returns an\\n   *     innocuous string, or, if assertions are enabled, throws\\n   *     `asserts.AssertionError`.\\n   */\\n  static unwrap(safeScript) {\\n    return SafeScript.unwrapTrustedScript(safeScript).toString();\\n  }\\n\\n  /**\\n   * Unwraps value as TrustedScript if supported or as a string if not.\\n   * @param {!SafeScript} safeScript\\n   * @return {!TrustedScript|string}\\n   * @see SafeScript.unwrap\\n   */\\n  static unwrapTrustedScript(safeScript) {\\n    // Perform additional Run-time type-checking to ensure that\\n    // safeScript is indeed an instance of the expected type.  This\\n    // provides some additional protection against security bugs due to\\n    // application code that disables type checks.\\n    // Specifically, the following checks are performed:\\n    // 1. The object is an instance of the expected type.\\n    // 2. The object is not an instance of a subclass.\\n    if (safeScript instanceof SafeScript &&\\n        safeScript.constructor === SafeScript) {\\n      return safeScript.privateDoNotAccessOrElseSafeScriptWrappedValue_;\\n    } else {\\n      fail(\\n          'expected object of type SafeScript, got \\\\'' + safeScript +\\n          '\\\\' of type ' + goog.typeOf(safeScript));\\n      return 'type_error:SafeScript';\\n    }\\n  }\\n\\n  /**\\n   * Converts the given value to a embeddabel JSON string and returns it. The\\n   * resulting string can be embedded in HTML because the '<' character is\\n   * encoded.\\n   *\\n   * @param {*} val\\n   * @return {string}\\n   * @private\\n   */\\n  static stringify_(val) {\\n    const json = JSON.stringify(val);\\n    return json.replace(/</g, '\\\\\\\\x3c');\\n  }\\n\\n  /**\\n   * Package-internal utility method to create SafeScript instances.\\n   *\\n   * @param {string} script The string to initialize the SafeScript object with.\\n   * @return {!SafeScript} The initialized SafeScript object.\\n   * @package\\n   */\\n  static createSafeScriptSecurityPrivateDoNotAccessOrElse(script) {\\n    const policy = trustedtypes.getPolicyPrivateDoNotAccessOrElse();\\n    const trustedScript = policy ? policy.createScript(script) : script;\\n    return new SafeScript(trustedScript, CONSTRUCTOR_TOKEN_PRIVATE);\\n  }\\n}\\n\\nif (goog.DEBUG) {\\n  /**\\n   * Returns a debug string-representation of this value.\\n   *\\n   * To obtain the actual string value wrapped in a SafeScript, use\\n   * `SafeScript.unwrap`.\\n   *\\n   * @see SafeScript#unwrap\\n   * @override\\n   */\\n  SafeScript.prototype.toString = function() {\\n    return 'SafeScript{' +\\n        this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + '}';\\n  };\\n}\\n\\n\\n/**\\n * A SafeScript instance corresponding to the empty string.\\n * @const {!SafeScript}\\n */\\nSafeScript.EMPTY = /** @type {!SafeScript} */ ({\\n  // NOTE: this compiles to nothing, but hides the possible side effect of\\n  // SafeScript creation (due to calling trustedTypes.createPolicy) from the\\n  // compiler so that the entire call can be removed if the result is not used.\\n  valueOf: function() {\\n    return SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse('');\\n  },\\n}.valueOf());\\n\\n\\nexports = SafeScript;\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"Const\",\"require\",\"TypedString\",\"trustedtypes\",\"fail\",\"CONSTRUCTOR_TOKEN_PRIVATE\",\"SafeScript\",\"constructor\",\"value\",\"token\",\"privateDoNotAccessOrElseSafeScriptWrappedValue_\",\"implementsGoogStringTypedString\",\"fromConstant\",\"script\",\"scriptString\",\"unwrap\",\"length\",\"EMPTY\",\"createSafeScriptSecurityPrivateDoNotAccessOrElse\",\"fromConstantAndArgs\",\"code\",\"var_args\",\"args\",\"i\",\"arguments\",\"push\",\"stringify_\",\"join\",\"fromJson\",\"val\",\"getTypedStringValue\",\"toString\",\"safeScript\",\"unwrapTrustedScript\",\"typeOf\",\"json\",\"JSON\",\"stringify\",\"replace\",\"policy\",\"getPolicyPrivateDoNotAccessOrElse\",\"trustedScript\",\"createScript\",\"DEBUG\",\"prototype\",\"SafeScript.prototype.toString\",\"valueOf\",\"exports\"]\n}\n"]