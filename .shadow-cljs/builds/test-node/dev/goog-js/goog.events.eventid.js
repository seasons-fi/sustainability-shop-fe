["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/events/eventid.js"],"~:js","goog.provide(\"goog.events.EventId\");\ngoog.events.EventId = function(eventId) {\n  this.id = eventId;\n};\ngoog.events.EventId.prototype.toString = function() {\n  return this.id;\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\ngoog.provide('goog.events.EventId');\n\n\n\n/**\n * A templated class that is used when registering for events. Typical usage:\n *\n *    /** @type {goog.events.EventId<MyEventObj>} *\\\n *    var myEventId = new goog.events.EventId(\n *        goog.events.getUniqueId(('someEvent'));\n *\n *    // No need to cast or declare here since the compiler knows the\n *    // correct type of 'evt' (MyEventObj).\n *    something.listen(myEventId, function(evt) {});\n *\n * @param {string} eventId\n * @template T\n * @constructor\n * @struct\n * @final\n */\ngoog.events.EventId = function(eventId) {\n  'use strict';\n  /** @const */ this.id = eventId;\n};\n\n\n/**\n * @override\n */\ngoog.events.EventId.prototype.toString = function() {\n  'use strict';\n  return this.id;\n};\n","~:compiled-at",1629284452258,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.events.eventid.js\",\n\"lineCount\":8,\n\"mappings\":\"AAMAA,IAAKC,CAAAA,OAAL,CAAa,qBAAb,CAAA;AAqBAD,IAAKE,CAAAA,MAAOC,CAAAA,OAAZ,GAAsBC,QAAQ,CAACC,OAAD,CAAU;AAExB,MAAKC,CAAAA,EAAL,GAAUD,OAAV;AAFwB,CAAxC;AASAL,IAAKE,CAAAA,MAAOC,CAAAA,OAAQI,CAAAA,SAAUC,CAAAA,QAA9B,GAAyCC,QAAQ,EAAG;AAElD,SAAO,IAAKH,CAAAA,EAAZ;AAFkD,CAApD;;\",\n\"sources\":[\"goog/events/eventid.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\ngoog.provide('goog.events.EventId');\\n\\n\\n\\n/**\\n * A templated class that is used when registering for events. Typical usage:\\n *\\n *    /** @type {goog.events.EventId<MyEventObj>} *\\\\\\n *    var myEventId = new goog.events.EventId(\\n *        goog.events.getUniqueId(('someEvent'));\\n *\\n *    // No need to cast or declare here since the compiler knows the\\n *    // correct type of 'evt' (MyEventObj).\\n *    something.listen(myEventId, function(evt) {});\\n *\\n * @param {string} eventId\\n * @template T\\n * @constructor\\n * @struct\\n * @final\\n */\\ngoog.events.EventId = function(eventId) {\\n  'use strict';\\n  /** @const */ this.id = eventId;\\n};\\n\\n\\n/**\\n * @override\\n */\\ngoog.events.EventId.prototype.toString = function() {\\n  'use strict';\\n  return this.id;\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"events\",\"EventId\",\"goog.events.EventId\",\"eventId\",\"id\",\"prototype\",\"toString\",\"goog.events.EventId.prototype.toString\"]\n}\n"]