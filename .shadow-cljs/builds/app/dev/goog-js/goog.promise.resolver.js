["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/promise/resolver.js"],"~:js","goog.provide(\"goog.promise.Resolver\");\ngoog.requireType(\"goog.Promise\");\ngoog.promise.Resolver = function() {\n};\ngoog.promise.Resolver.prototype.promise;\ngoog.promise.Resolver.prototype.resolve;\ngoog.promise.Resolver.prototype.reject;\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\ngoog.provide('goog.promise.Resolver');\n\ngoog.requireType('goog.Promise');\n\n\n\n/**\n * Resolver interface for promises. The resolver is a convenience interface that\n * bundles the promise and its associated resolve and reject functions together,\n * for cases where the resolver needs to be persisted internally.\n *\n * @interface\n * @template TYPE\n */\ngoog.promise.Resolver = function() {};\n\n\n/**\n * The promise that created this resolver.\n * @type {!goog.Promise<TYPE>}\n */\ngoog.promise.Resolver.prototype.promise;\n\n\n/**\n * Resolves this resolver with the specified value.\n * @type {function((TYPE|goog.Promise<TYPE>|Thenable)=)}\n */\ngoog.promise.Resolver.prototype.resolve;\n\n\n/**\n * Rejects this resolver with the specified reason.\n * @type {function(*=): void}\n */\ngoog.promise.Resolver.prototype.reject;\n","~:compiled-at",1629754195896,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.promise.resolver.js\",\n\"lineCount\":8,\n\"mappings\":\"AAMAA,IAAKC,CAAAA,OAAL,CAAa,uBAAb,CAAA;AAEAD,IAAKE,CAAAA,WAAL,CAAiB,cAAjB,CAAA;AAYAF,IAAKG,CAAAA,OAAQC,CAAAA,QAAb,GAAwBC,QAAQ,EAAG;CAAnC;AAOAL,IAAKG,CAAAA,OAAQC,CAAAA,QAASE,CAAAA,SAAUH,CAAAA,OAAhC;AAOAH,IAAKG,CAAAA,OAAQC,CAAAA,QAASE,CAAAA,SAAUC,CAAAA,OAAhC;AAOAP,IAAKG,CAAAA,OAAQC,CAAAA,QAASE,CAAAA,SAAUE,CAAAA,MAAhC;;\",\n\"sources\":[\"goog/promise/resolver.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\ngoog.provide('goog.promise.Resolver');\\n\\ngoog.requireType('goog.Promise');\\n\\n\\n\\n/**\\n * Resolver interface for promises. The resolver is a convenience interface that\\n * bundles the promise and its associated resolve and reject functions together,\\n * for cases where the resolver needs to be persisted internally.\\n *\\n * @interface\\n * @template TYPE\\n */\\ngoog.promise.Resolver = function() {};\\n\\n\\n/**\\n * The promise that created this resolver.\\n * @type {!goog.Promise<TYPE>}\\n */\\ngoog.promise.Resolver.prototype.promise;\\n\\n\\n/**\\n * Resolves this resolver with the specified value.\\n * @type {function((TYPE|goog.Promise<TYPE>|Thenable)=)}\\n */\\ngoog.promise.Resolver.prototype.resolve;\\n\\n\\n/**\\n * Rejects this resolver with the specified reason.\\n * @type {function(*=): void}\\n */\\ngoog.promise.Resolver.prototype.reject;\\n\"],\n\"names\":[\"goog\",\"provide\",\"requireType\",\"promise\",\"Resolver\",\"goog.promise.Resolver\",\"prototype\",\"resolve\",\"reject\"]\n}\n"]