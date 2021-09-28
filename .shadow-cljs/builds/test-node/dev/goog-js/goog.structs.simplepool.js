["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/structs/simplepool.js"],"~:js","goog.provide(\"goog.structs.SimplePool\");\ngoog.require(\"goog.Disposable\");\ngoog.structs.SimplePool = function(initialCount, maxCount) {\n  goog.Disposable.call(this);\n  this.createObjectFn_ = null;\n  this.disposeObjectFn_ = null;\n  this.maxCount_ = maxCount;\n  this.freeQueue_ = [];\n  this.createInitial_(initialCount);\n};\ngoog.inherits(goog.structs.SimplePool, goog.Disposable);\ngoog.structs.SimplePool.prototype.setCreateObjectFn = function(createObjectFn) {\n  this.createObjectFn_ = createObjectFn;\n};\ngoog.structs.SimplePool.prototype.setDisposeObjectFn = function(disposeObjectFn) {\n  this.disposeObjectFn_ = disposeObjectFn;\n};\ngoog.structs.SimplePool.prototype.getObject = function() {\n  if (this.freeQueue_.length) {\n    return this.freeQueue_.pop();\n  }\n  return this.createObject();\n};\ngoog.structs.SimplePool.prototype.releaseObject = function(obj) {\n  if (this.freeQueue_.length < this.maxCount_) {\n    this.freeQueue_.push(obj);\n  } else {\n    this.disposeObject(obj);\n  }\n};\ngoog.structs.SimplePool.prototype.createInitial_ = function(initialCount) {\n  if (initialCount > this.maxCount_) {\n    throw new Error(\"[goog.structs.SimplePool] Initial cannot be greater than max\");\n  }\n  for (var i = 0; i < initialCount; i++) {\n    this.freeQueue_.push(this.createObject());\n  }\n};\ngoog.structs.SimplePool.prototype.createObject = function() {\n  if (this.createObjectFn_) {\n    return this.createObjectFn_();\n  } else {\n    return {};\n  }\n};\ngoog.structs.SimplePool.prototype.disposeObject = function(obj) {\n  if (this.disposeObjectFn_) {\n    this.disposeObjectFn_(obj);\n  } else {\n    if (goog.isObject(obj)) {\n      if (typeof obj.dispose === \"function\") {\n        obj.dispose();\n      } else {\n        for (var i in obj) {\n          delete obj[i];\n        }\n      }\n    }\n  }\n};\ngoog.structs.SimplePool.prototype.disposeInternal = function() {\n  goog.structs.SimplePool.superClass_.disposeInternal.call(this);\n  var freeQueue = this.freeQueue_;\n  while (freeQueue.length) {\n    this.disposeObject(freeQueue.pop());\n  }\n  delete this.freeQueue_;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Datastructure: Pool.\n *\n *\n * A generic class for handling pools of objects that is more efficient than\n * goog.structs.Pool because it doesn't maintain a list of objects that are in\n * use. See constructor comment.\n */\n\n\ngoog.provide('goog.structs.SimplePool');\n\ngoog.require('goog.Disposable');\n\n\n\n/**\n * A generic pool class. Simpler and more efficient than goog.structs.Pool\n * because it doesn't maintain a list of objects that are in use. This class\n * has constant overhead and doesn't create any additional objects as part of\n * the pool management after construction time.\n *\n * IMPORTANT: If the objects being pooled are arrays or maps that can have\n * unlimited number of properties, they need to be cleaned before being\n * returned to the pool.\n *\n * Also note that {@see goog.object.clean} actually allocates an array to clean\n * the object passed to it, so simply using this function would defy the\n * purpose of using the pool.\n *\n * @param {number} initialCount Initial number of objects to populate the free\n *     pool at construction time.\n * @param {number} maxCount Maximum number of objects to keep in the free pool.\n * @constructor\n * @extends {goog.Disposable}\n * @template T\n */\ngoog.structs.SimplePool = function(initialCount, maxCount) {\n  'use strict';\n  goog.Disposable.call(this);\n\n  /**\n   * Function for overriding createObject. The avoids a common case requiring\n   * subclassing this class.\n   * @private {?Function}\n   */\n  this.createObjectFn_ = null;\n\n  /**\n   * Function for overriding disposeObject. The avoids a common case requiring\n   * subclassing this class.\n   * @private {?Function}\n   */\n  this.disposeObjectFn_ = null;\n\n  /**\n   * Maximum number of objects allowed\n   * @private {number}\n   */\n  this.maxCount_ = maxCount;\n\n  /**\n   * Queue used to store objects that are currently in the pool and available\n   * to be used.\n   * @private {Array<T>}\n   */\n  this.freeQueue_ = [];\n\n  this.createInitial_(initialCount);\n};\ngoog.inherits(goog.structs.SimplePool, goog.Disposable);\n\n\n/**\n * Sets the `createObject` function which is used for creating a new\n * object in the pool.\n * @param {Function} createObjectFn Create object function which returns the\n *     newly created object.\n */\ngoog.structs.SimplePool.prototype.setCreateObjectFn = function(createObjectFn) {\n  'use strict';\n  this.createObjectFn_ = createObjectFn;\n};\n\n\n/**\n * Sets the `disposeObject` function which is used for disposing of an\n * object in the pool.\n * @param {Function} disposeObjectFn Dispose object function which takes the\n *     object to dispose as a parameter.\n */\ngoog.structs.SimplePool.prototype.setDisposeObjectFn = function(\n    disposeObjectFn) {\n  'use strict';\n  this.disposeObjectFn_ = disposeObjectFn;\n};\n\n\n/**\n * Gets an unused object from the pool, if there is one available,\n * otherwise creates a new one.\n * @return {T} An object from the pool or a new one if necessary.\n */\ngoog.structs.SimplePool.prototype.getObject = function() {\n  'use strict';\n  if (this.freeQueue_.length) {\n    return this.freeQueue_.pop();\n  }\n  return this.createObject();\n};\n\n\n/**\n * Returns an object to the pool so that it can be reused. If the pool is\n * already full, the object is disposed instead.\n * @param {T} obj The object to release.\n */\ngoog.structs.SimplePool.prototype.releaseObject = function(obj) {\n  'use strict';\n  if (this.freeQueue_.length < this.maxCount_) {\n    this.freeQueue_.push(obj);\n  } else {\n    this.disposeObject(obj);\n  }\n};\n\n\n/**\n * Populates the pool with initialCount objects.\n * @param {number} initialCount The number of objects to add to the pool.\n * @private\n */\ngoog.structs.SimplePool.prototype.createInitial_ = function(initialCount) {\n  'use strict';\n  if (initialCount > this.maxCount_) {\n    throw new Error(\n        '[goog.structs.SimplePool] Initial cannot be greater than max');\n  }\n  for (var i = 0; i < initialCount; i++) {\n    this.freeQueue_.push(this.createObject());\n  }\n};\n\n\n/**\n * Should be overridden by sub-classes to return an instance of the object type\n * that is expected in the pool.\n * @return {T} The created object.\n */\ngoog.structs.SimplePool.prototype.createObject = function() {\n  'use strict';\n  if (this.createObjectFn_) {\n    return this.createObjectFn_();\n  } else {\n    return {};\n  }\n};\n\n\n/**\n * Should be overrideen to dispose of an object. Default implementation is to\n * remove all of the object's members, which should render it useless. Calls the\n *  object's dispose method, if available.\n * @param {T} obj The object to dispose.\n */\ngoog.structs.SimplePool.prototype.disposeObject = function(obj) {\n  'use strict';\n  if (this.disposeObjectFn_) {\n    this.disposeObjectFn_(obj);\n  } else if (goog.isObject(obj)) {\n    if (typeof obj.dispose === 'function') {\n      obj.dispose();\n    } else {\n      for (var i in obj) {\n        delete obj[i];\n      }\n    }\n  }\n};\n\n\n/**\n * Disposes of the pool and all objects currently held in the pool.\n * @override\n * @protected\n */\ngoog.structs.SimplePool.prototype.disposeInternal = function() {\n  'use strict';\n  goog.structs.SimplePool.superClass_.disposeInternal.call(this);\n  // Call disposeObject on each object held by the pool.\n  var freeQueue = this.freeQueue_;\n  while (freeQueue.length) {\n    this.disposeObject(freeQueue.pop());\n  }\n  delete this.freeQueue_;\n};\n","~:compiled-at",1629284452268,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.structs.simplepool.js\",\n\"lineCount\":69,\n\"mappings\":\"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\",\n\"sources\":[\"goog/structs/simplepool.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Datastructure: Pool.\\n *\\n *\\n * A generic class for handling pools of objects that is more efficient than\\n * goog.structs.Pool because it doesn't maintain a list of objects that are in\\n * use. See constructor comment.\\n */\\n\\n\\ngoog.provide('goog.structs.SimplePool');\\n\\ngoog.require('goog.Disposable');\\n\\n\\n\\n/**\\n * A generic pool class. Simpler and more efficient than goog.structs.Pool\\n * because it doesn't maintain a list of objects that are in use. This class\\n * has constant overhead and doesn't create any additional objects as part of\\n * the pool management after construction time.\\n *\\n * IMPORTANT: If the objects being pooled are arrays or maps that can have\\n * unlimited number of properties, they need to be cleaned before being\\n * returned to the pool.\\n *\\n * Also note that {@see goog.object.clean} actually allocates an array to clean\\n * the object passed to it, so simply using this function would defy the\\n * purpose of using the pool.\\n *\\n * @param {number} initialCount Initial number of objects to populate the free\\n *     pool at construction time.\\n * @param {number} maxCount Maximum number of objects to keep in the free pool.\\n * @constructor\\n * @extends {goog.Disposable}\\n * @template T\\n */\\ngoog.structs.SimplePool = function(initialCount, maxCount) {\\n  'use strict';\\n  goog.Disposable.call(this);\\n\\n  /**\\n   * Function for overriding createObject. The avoids a common case requiring\\n   * subclassing this class.\\n   * @private {?Function}\\n   */\\n  this.createObjectFn_ = null;\\n\\n  /**\\n   * Function for overriding disposeObject. The avoids a common case requiring\\n   * subclassing this class.\\n   * @private {?Function}\\n   */\\n  this.disposeObjectFn_ = null;\\n\\n  /**\\n   * Maximum number of objects allowed\\n   * @private {number}\\n   */\\n  this.maxCount_ = maxCount;\\n\\n  /**\\n   * Queue used to store objects that are currently in the pool and available\\n   * to be used.\\n   * @private {Array<T>}\\n   */\\n  this.freeQueue_ = [];\\n\\n  this.createInitial_(initialCount);\\n};\\ngoog.inherits(goog.structs.SimplePool, goog.Disposable);\\n\\n\\n/**\\n * Sets the `createObject` function which is used for creating a new\\n * object in the pool.\\n * @param {Function} createObjectFn Create object function which returns the\\n *     newly created object.\\n */\\ngoog.structs.SimplePool.prototype.setCreateObjectFn = function(createObjectFn) {\\n  'use strict';\\n  this.createObjectFn_ = createObjectFn;\\n};\\n\\n\\n/**\\n * Sets the `disposeObject` function which is used for disposing of an\\n * object in the pool.\\n * @param {Function} disposeObjectFn Dispose object function which takes the\\n *     object to dispose as a parameter.\\n */\\ngoog.structs.SimplePool.prototype.setDisposeObjectFn = function(\\n    disposeObjectFn) {\\n  'use strict';\\n  this.disposeObjectFn_ = disposeObjectFn;\\n};\\n\\n\\n/**\\n * Gets an unused object from the pool, if there is one available,\\n * otherwise creates a new one.\\n * @return {T} An object from the pool or a new one if necessary.\\n */\\ngoog.structs.SimplePool.prototype.getObject = function() {\\n  'use strict';\\n  if (this.freeQueue_.length) {\\n    return this.freeQueue_.pop();\\n  }\\n  return this.createObject();\\n};\\n\\n\\n/**\\n * Returns an object to the pool so that it can be reused. If the pool is\\n * already full, the object is disposed instead.\\n * @param {T} obj The object to release.\\n */\\ngoog.structs.SimplePool.prototype.releaseObject = function(obj) {\\n  'use strict';\\n  if (this.freeQueue_.length < this.maxCount_) {\\n    this.freeQueue_.push(obj);\\n  } else {\\n    this.disposeObject(obj);\\n  }\\n};\\n\\n\\n/**\\n * Populates the pool with initialCount objects.\\n * @param {number} initialCount The number of objects to add to the pool.\\n * @private\\n */\\ngoog.structs.SimplePool.prototype.createInitial_ = function(initialCount) {\\n  'use strict';\\n  if (initialCount > this.maxCount_) {\\n    throw new Error(\\n        '[goog.structs.SimplePool] Initial cannot be greater than max');\\n  }\\n  for (var i = 0; i < initialCount; i++) {\\n    this.freeQueue_.push(this.createObject());\\n  }\\n};\\n\\n\\n/**\\n * Should be overridden by sub-classes to return an instance of the object type\\n * that is expected in the pool.\\n * @return {T} The created object.\\n */\\ngoog.structs.SimplePool.prototype.createObject = function() {\\n  'use strict';\\n  if (this.createObjectFn_) {\\n    return this.createObjectFn_();\\n  } else {\\n    return {};\\n  }\\n};\\n\\n\\n/**\\n * Should be overrideen to dispose of an object. Default implementation is to\\n * remove all of the object's members, which should render it useless. Calls the\\n *  object's dispose method, if available.\\n * @param {T} obj The object to dispose.\\n */\\ngoog.structs.SimplePool.prototype.disposeObject = function(obj) {\\n  'use strict';\\n  if (this.disposeObjectFn_) {\\n    this.disposeObjectFn_(obj);\\n  } else if (goog.isObject(obj)) {\\n    if (typeof obj.dispose === 'function') {\\n      obj.dispose();\\n    } else {\\n      for (var i in obj) {\\n        delete obj[i];\\n      }\\n    }\\n  }\\n};\\n\\n\\n/**\\n * Disposes of the pool and all objects currently held in the pool.\\n * @override\\n * @protected\\n */\\ngoog.structs.SimplePool.prototype.disposeInternal = function() {\\n  'use strict';\\n  goog.structs.SimplePool.superClass_.disposeInternal.call(this);\\n  // Call disposeObject on each object held by the pool.\\n  var freeQueue = this.freeQueue_;\\n  while (freeQueue.length) {\\n    this.disposeObject(freeQueue.pop());\\n  }\\n  delete this.freeQueue_;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"structs\",\"SimplePool\",\"goog.structs.SimplePool\",\"initialCount\",\"maxCount\",\"Disposable\",\"call\",\"createObjectFn_\",\"disposeObjectFn_\",\"maxCount_\",\"freeQueue_\",\"createInitial_\",\"inherits\",\"prototype\",\"setCreateObjectFn\",\"goog.structs.SimplePool.prototype.setCreateObjectFn\",\"createObjectFn\",\"setDisposeObjectFn\",\"goog.structs.SimplePool.prototype.setDisposeObjectFn\",\"disposeObjectFn\",\"getObject\",\"goog.structs.SimplePool.prototype.getObject\",\"length\",\"pop\",\"createObject\",\"releaseObject\",\"goog.structs.SimplePool.prototype.releaseObject\",\"obj\",\"push\",\"disposeObject\",\"goog.structs.SimplePool.prototype.createInitial_\",\"Error\",\"i\",\"goog.structs.SimplePool.prototype.createObject\",\"goog.structs.SimplePool.prototype.disposeObject\",\"isObject\",\"dispose\",\"disposeInternal\",\"goog.structs.SimplePool.prototype.disposeInternal\",\"superClass_\",\"freeQueue\"]\n}\n"]