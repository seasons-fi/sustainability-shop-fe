["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/debug/entrypointregistry.js"],"~:js","goog.provide(\"goog.debug.EntryPointMonitor\");\ngoog.provide(\"goog.debug.entryPointRegistry\");\ngoog.require(\"goog.asserts\");\ngoog.debug.EntryPointMonitor = function() {\n};\ngoog.debug.EntryPointMonitor.prototype.wrap;\ngoog.debug.EntryPointMonitor.prototype.unwrap;\ngoog.debug.entryPointRegistry.refList_ = [];\ngoog.debug.entryPointRegistry.monitors_ = [];\ngoog.debug.entryPointRegistry.monitorsMayExist_ = false;\ngoog.debug.entryPointRegistry.register = function(callback) {\n  goog.debug.entryPointRegistry.refList_[goog.debug.entryPointRegistry.refList_.length] = callback;\n  if (goog.debug.entryPointRegistry.monitorsMayExist_) {\n    var monitors = goog.debug.entryPointRegistry.monitors_;\n    for (var i = 0; i < monitors.length; i++) {\n      callback(goog.bind(monitors[i].wrap, monitors[i]));\n    }\n  }\n};\ngoog.debug.entryPointRegistry.monitorAll = function(monitor) {\n  goog.debug.entryPointRegistry.monitorsMayExist_ = true;\n  var transformer = goog.bind(monitor.wrap, monitor);\n  for (var i = 0; i < goog.debug.entryPointRegistry.refList_.length; i++) {\n    goog.debug.entryPointRegistry.refList_[i](transformer);\n  }\n  goog.debug.entryPointRegistry.monitors_.push(monitor);\n};\ngoog.debug.entryPointRegistry.unmonitorAllIfPossible = function(monitor) {\n  var monitors = goog.debug.entryPointRegistry.monitors_;\n  goog.asserts.assert(monitor == monitors[monitors.length - 1], \"Only the most recent monitor can be unwrapped.\");\n  var transformer = goog.bind(monitor.unwrap, monitor);\n  for (var i = 0; i < goog.debug.entryPointRegistry.refList_.length; i++) {\n    goog.debug.entryPointRegistry.refList_[i](transformer);\n  }\n  monitors.length--;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview A global registry for entry points into a program,\n * so that they can be instrumented. Each module should register their\n * entry points with this registry. Designed to be compiled out\n * if no instrumentation is requested.\n *\n * Entry points may be registered before or after a call to\n * goog.debug.entryPointRegistry.monitorAll. If an entry point is registered\n * later, the existing monitor will instrument the new entry point.\n */\n\ngoog.provide('goog.debug.EntryPointMonitor');\ngoog.provide('goog.debug.entryPointRegistry');\n\ngoog.require('goog.asserts');\n\n\n\n/**\n * @interface\n */\ngoog.debug.EntryPointMonitor = function() {};\n\n\n/**\n * Instruments a function.\n *\n * @param {!Function} fn A function to instrument.\n * @return {!Function} The instrumented function.\n */\ngoog.debug.EntryPointMonitor.prototype.wrap;\n\n\n/**\n * Try to remove an instrumentation wrapper created by this monitor.\n * If the function passed to unwrap is not a wrapper created by this\n * monitor, then we will do nothing.\n *\n * Notice that some wrappers may not be unwrappable. For example, if other\n * monitors have applied their own wrappers, then it will be impossible to\n * unwrap them because their wrappers will have captured our wrapper.\n *\n * So it is important that entry points are unwrapped in the reverse\n * order that they were wrapped.\n *\n * @param {!Function} fn A function to unwrap.\n * @return {!Function} The unwrapped function, or `fn` if it was not\n *     a wrapped function created by this monitor.\n */\ngoog.debug.EntryPointMonitor.prototype.unwrap;\n\n\n/**\n * An array of entry point callbacks.\n * @type {!Array<function(!Function)>}\n * @private\n */\ngoog.debug.entryPointRegistry.refList_ = [];\n\n\n/**\n * Monitors that should wrap all the entry points.\n * @type {!Array<!goog.debug.EntryPointMonitor>}\n * @private\n */\ngoog.debug.entryPointRegistry.monitors_ = [];\n\n\n/**\n * Whether goog.debug.entryPointRegistry.monitorAll has ever been called.\n * Checking this allows the compiler to optimize out the registrations.\n * @type {boolean}\n * @private\n */\ngoog.debug.entryPointRegistry.monitorsMayExist_ = false;\n\n\n/**\n * Register an entry point with this module.\n *\n * The entry point will be instrumented when a monitor is passed to\n * goog.debug.entryPointRegistry.monitorAll. If this has already occurred, the\n * entry point is instrumented immediately.\n *\n * @param {function(!Function)} callback A callback function which is called\n *     with a transforming function to instrument the entry point. The callback\n *     is responsible for wrapping the relevant entry point with the\n *     transforming function.\n */\ngoog.debug.entryPointRegistry.register = function(callback) {\n  'use strict';\n  // Don't use push(), so that this can be compiled out.\n  goog.debug.entryPointRegistry\n      .refList_[goog.debug.entryPointRegistry.refList_.length] = callback;\n  // If no one calls monitorAll, this can be compiled out.\n  if (goog.debug.entryPointRegistry.monitorsMayExist_) {\n    var monitors = goog.debug.entryPointRegistry.monitors_;\n    for (var i = 0; i < monitors.length; i++) {\n      callback(goog.bind(monitors[i].wrap, monitors[i]));\n    }\n  }\n};\n\n\n/**\n * Configures a monitor to wrap all entry points.\n *\n * Entry points that have already been registered are immediately wrapped by\n * the monitor. When an entry point is registered in the future, it will also\n * be wrapped by the monitor when it is registered.\n *\n * @param {!goog.debug.EntryPointMonitor} monitor An entry point monitor.\n */\ngoog.debug.entryPointRegistry.monitorAll = function(monitor) {\n  'use strict';\n  goog.debug.entryPointRegistry.monitorsMayExist_ = true;\n  var transformer = goog.bind(monitor.wrap, monitor);\n  for (var i = 0; i < goog.debug.entryPointRegistry.refList_.length; i++) {\n    goog.debug.entryPointRegistry.refList_[i](transformer);\n  }\n  goog.debug.entryPointRegistry.monitors_.push(monitor);\n};\n\n\n/**\n * Try to unmonitor all the entry points that have already been registered. If\n * an entry point is registered in the future, it will not be wrapped by the\n * monitor when it is registered. Note that this may fail if the entry points\n * have additional wrapping.\n *\n * @param {!goog.debug.EntryPointMonitor} monitor The last monitor to wrap\n *     the entry points.\n * @throws {Error} If the monitor is not the most recently configured monitor.\n */\ngoog.debug.entryPointRegistry.unmonitorAllIfPossible = function(monitor) {\n  'use strict';\n  var monitors = goog.debug.entryPointRegistry.monitors_;\n  goog.asserts.assert(\n      monitor == monitors[monitors.length - 1],\n      'Only the most recent monitor can be unwrapped.');\n  var transformer = goog.bind(monitor.unwrap, monitor);\n  for (var i = 0; i < goog.debug.entryPointRegistry.refList_.length; i++) {\n    goog.debug.entryPointRegistry.refList_[i](transformer);\n  }\n  monitors.length--;\n};\n","~:compiled-at",1629284452226,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.debug.entrypointregistry.js\",\n\"lineCount\":37,\n\"mappings\":\"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\",\n\"sources\":[\"goog/debug/entrypointregistry.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview A global registry for entry points into a program,\\n * so that they can be instrumented. Each module should register their\\n * entry points with this registry. Designed to be compiled out\\n * if no instrumentation is requested.\\n *\\n * Entry points may be registered before or after a call to\\n * goog.debug.entryPointRegistry.monitorAll. If an entry point is registered\\n * later, the existing monitor will instrument the new entry point.\\n */\\n\\ngoog.provide('goog.debug.EntryPointMonitor');\\ngoog.provide('goog.debug.entryPointRegistry');\\n\\ngoog.require('goog.asserts');\\n\\n\\n\\n/**\\n * @interface\\n */\\ngoog.debug.EntryPointMonitor = function() {};\\n\\n\\n/**\\n * Instruments a function.\\n *\\n * @param {!Function} fn A function to instrument.\\n * @return {!Function} The instrumented function.\\n */\\ngoog.debug.EntryPointMonitor.prototype.wrap;\\n\\n\\n/**\\n * Try to remove an instrumentation wrapper created by this monitor.\\n * If the function passed to unwrap is not a wrapper created by this\\n * monitor, then we will do nothing.\\n *\\n * Notice that some wrappers may not be unwrappable. For example, if other\\n * monitors have applied their own wrappers, then it will be impossible to\\n * unwrap them because their wrappers will have captured our wrapper.\\n *\\n * So it is important that entry points are unwrapped in the reverse\\n * order that they were wrapped.\\n *\\n * @param {!Function} fn A function to unwrap.\\n * @return {!Function} The unwrapped function, or `fn` if it was not\\n *     a wrapped function created by this monitor.\\n */\\ngoog.debug.EntryPointMonitor.prototype.unwrap;\\n\\n\\n/**\\n * An array of entry point callbacks.\\n * @type {!Array<function(!Function)>}\\n * @private\\n */\\ngoog.debug.entryPointRegistry.refList_ = [];\\n\\n\\n/**\\n * Monitors that should wrap all the entry points.\\n * @type {!Array<!goog.debug.EntryPointMonitor>}\\n * @private\\n */\\ngoog.debug.entryPointRegistry.monitors_ = [];\\n\\n\\n/**\\n * Whether goog.debug.entryPointRegistry.monitorAll has ever been called.\\n * Checking this allows the compiler to optimize out the registrations.\\n * @type {boolean}\\n * @private\\n */\\ngoog.debug.entryPointRegistry.monitorsMayExist_ = false;\\n\\n\\n/**\\n * Register an entry point with this module.\\n *\\n * The entry point will be instrumented when a monitor is passed to\\n * goog.debug.entryPointRegistry.monitorAll. If this has already occurred, the\\n * entry point is instrumented immediately.\\n *\\n * @param {function(!Function)} callback A callback function which is called\\n *     with a transforming function to instrument the entry point. The callback\\n *     is responsible for wrapping the relevant entry point with the\\n *     transforming function.\\n */\\ngoog.debug.entryPointRegistry.register = function(callback) {\\n  'use strict';\\n  // Don't use push(), so that this can be compiled out.\\n  goog.debug.entryPointRegistry\\n      .refList_[goog.debug.entryPointRegistry.refList_.length] = callback;\\n  // If no one calls monitorAll, this can be compiled out.\\n  if (goog.debug.entryPointRegistry.monitorsMayExist_) {\\n    var monitors = goog.debug.entryPointRegistry.monitors_;\\n    for (var i = 0; i < monitors.length; i++) {\\n      callback(goog.bind(monitors[i].wrap, monitors[i]));\\n    }\\n  }\\n};\\n\\n\\n/**\\n * Configures a monitor to wrap all entry points.\\n *\\n * Entry points that have already been registered are immediately wrapped by\\n * the monitor. When an entry point is registered in the future, it will also\\n * be wrapped by the monitor when it is registered.\\n *\\n * @param {!goog.debug.EntryPointMonitor} monitor An entry point monitor.\\n */\\ngoog.debug.entryPointRegistry.monitorAll = function(monitor) {\\n  'use strict';\\n  goog.debug.entryPointRegistry.monitorsMayExist_ = true;\\n  var transformer = goog.bind(monitor.wrap, monitor);\\n  for (var i = 0; i < goog.debug.entryPointRegistry.refList_.length; i++) {\\n    goog.debug.entryPointRegistry.refList_[i](transformer);\\n  }\\n  goog.debug.entryPointRegistry.monitors_.push(monitor);\\n};\\n\\n\\n/**\\n * Try to unmonitor all the entry points that have already been registered. If\\n * an entry point is registered in the future, it will not be wrapped by the\\n * monitor when it is registered. Note that this may fail if the entry points\\n * have additional wrapping.\\n *\\n * @param {!goog.debug.EntryPointMonitor} monitor The last monitor to wrap\\n *     the entry points.\\n * @throws {Error} If the monitor is not the most recently configured monitor.\\n */\\ngoog.debug.entryPointRegistry.unmonitorAllIfPossible = function(monitor) {\\n  'use strict';\\n  var monitors = goog.debug.entryPointRegistry.monitors_;\\n  goog.asserts.assert(\\n      monitor == monitors[monitors.length - 1],\\n      'Only the most recent monitor can be unwrapped.');\\n  var transformer = goog.bind(monitor.unwrap, monitor);\\n  for (var i = 0; i < goog.debug.entryPointRegistry.refList_.length; i++) {\\n    goog.debug.entryPointRegistry.refList_[i](transformer);\\n  }\\n  monitors.length--;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"require\",\"debug\",\"EntryPointMonitor\",\"goog.debug.EntryPointMonitor\",\"prototype\",\"wrap\",\"unwrap\",\"entryPointRegistry\",\"refList_\",\"monitors_\",\"monitorsMayExist_\",\"register\",\"goog.debug.entryPointRegistry.register\",\"callback\",\"length\",\"monitors\",\"i\",\"bind\",\"monitorAll\",\"goog.debug.entryPointRegistry.monitorAll\",\"monitor\",\"transformer\",\"push\",\"unmonitorAllIfPossible\",\"goog.debug.entryPointRegistry.unmonitorAllIfPossible\",\"asserts\",\"assert\"]\n}\n"]