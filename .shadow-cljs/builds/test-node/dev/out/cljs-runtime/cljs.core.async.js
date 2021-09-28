goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31985 = arguments.length;
switch (G__31985) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31989 = (function (f,blockable,meta31990){
this.f = f;
this.blockable = blockable;
this.meta31990 = meta31990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31991,meta31990__$1){
var self__ = this;
var _31991__$1 = this;
return (new cljs.core.async.t_cljs$core$async31989(self__.f,self__.blockable,meta31990__$1));
}));

(cljs.core.async.t_cljs$core$async31989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31991){
var self__ = this;
var _31991__$1 = this;
return self__.meta31990;
}));

(cljs.core.async.t_cljs$core$async31989.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31989.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31989.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31989.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31990","meta31990",463485120,null)], null);
}));

(cljs.core.async.t_cljs$core$async31989.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31989");

(cljs.core.async.t_cljs$core$async31989.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async31989");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31989.
 */
cljs.core.async.__GT_t_cljs$core$async31989 = (function cljs$core$async$__GT_t_cljs$core$async31989(f__$1,blockable__$1,meta31990){
return (new cljs.core.async.t_cljs$core$async31989(f__$1,blockable__$1,meta31990));
});

}

return (new cljs.core.async.t_cljs$core$async31989(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32013 = arguments.length;
switch (G__32013) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32016 = arguments.length;
switch (G__32016) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32040 = arguments.length;
switch (G__32040) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34048 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34048) : fn1.call(null,val_34048));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34048) : fn1.call(null,val_34048));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32048 = arguments.length;
switch (G__32048) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___34050 = n;
var x_34051 = (0);
while(true){
if((x_34051 < n__4695__auto___34050)){
(a[x_34051] = x_34051);

var G__34052 = (x_34051 + (1));
x_34051 = G__34052;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32064 = (function (flag,meta32065){
this.flag = flag;
this.meta32065 = meta32065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32066,meta32065__$1){
var self__ = this;
var _32066__$1 = this;
return (new cljs.core.async.t_cljs$core$async32064(self__.flag,meta32065__$1));
}));

(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32066){
var self__ = this;
var _32066__$1 = this;
return self__.meta32065;
}));

(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32065","meta32065",-21910967,null)], null);
}));

(cljs.core.async.t_cljs$core$async32064.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32064");

(cljs.core.async.t_cljs$core$async32064.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32064");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32064.
 */
cljs.core.async.__GT_t_cljs$core$async32064 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32064(flag__$1,meta32065){
return (new cljs.core.async.t_cljs$core$async32064(flag__$1,meta32065));
});

}

return (new cljs.core.async.t_cljs$core$async32064(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32068 = (function (flag,cb,meta32069){
this.flag = flag;
this.cb = cb;
this.meta32069 = meta32069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32070,meta32069__$1){
var self__ = this;
var _32070__$1 = this;
return (new cljs.core.async.t_cljs$core$async32068(self__.flag,self__.cb,meta32069__$1));
}));

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32070){
var self__ = this;
var _32070__$1 = this;
return self__.meta32069;
}));

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32068.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32068.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32069","meta32069",763657709,null)], null);
}));

(cljs.core.async.t_cljs$core$async32068.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32068.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32068");

(cljs.core.async.t_cljs$core$async32068.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32068");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32068.
 */
cljs.core.async.__GT_t_cljs$core$async32068 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32068(flag__$1,cb__$1,meta32069){
return (new cljs.core.async.t_cljs$core$async32068(flag__$1,cb__$1,meta32069));
});

}

return (new cljs.core.async.t_cljs$core$async32068(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32075_SHARP_){
var G__32078 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32075_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32078) : fret.call(null,G__32078));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32076_SHARP_){
var G__32081 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32076_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32081) : fret.call(null,G__32081));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34059 = (i + (1));
i = G__34059;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34060 = arguments.length;
var i__4819__auto___34061 = (0);
while(true){
if((i__4819__auto___34061 < len__4818__auto___34060)){
args__4824__auto__.push((arguments[i__4819__auto___34061]));

var G__34062 = (i__4819__auto___34061 + (1));
i__4819__auto___34061 = G__34062;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32086){
var map__32087 = p__32086;
var map__32087__$1 = cljs.core.__destructure_map(map__32087);
var opts = map__32087__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32084){
var G__32085 = cljs.core.first(seq32084);
var seq32084__$1 = cljs.core.next(seq32084);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32085,seq32084__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32089 = arguments.length;
switch (G__32089) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26215__auto___34064 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_32173){
var state_val_32174 = (state_32173[(1)]);
if((state_val_32174 === (7))){
var inst_32167 = (state_32173[(2)]);
var state_32173__$1 = state_32173;
var statearr_32179_34065 = state_32173__$1;
(statearr_32179_34065[(2)] = inst_32167);

(statearr_32179_34065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (1))){
var state_32173__$1 = state_32173;
var statearr_32180_34066 = state_32173__$1;
(statearr_32180_34066[(2)] = null);

(statearr_32180_34066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (4))){
var inst_32145 = (state_32173[(7)]);
var inst_32145__$1 = (state_32173[(2)]);
var inst_32146 = (inst_32145__$1 == null);
var state_32173__$1 = (function (){var statearr_32181 = state_32173;
(statearr_32181[(7)] = inst_32145__$1);

return statearr_32181;
})();
if(cljs.core.truth_(inst_32146)){
var statearr_32182_34067 = state_32173__$1;
(statearr_32182_34067[(1)] = (5));

} else {
var statearr_32183_34068 = state_32173__$1;
(statearr_32183_34068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (13))){
var state_32173__$1 = state_32173;
var statearr_32184_34069 = state_32173__$1;
(statearr_32184_34069[(2)] = null);

(statearr_32184_34069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (6))){
var inst_32145 = (state_32173[(7)]);
var state_32173__$1 = state_32173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32173__$1,(11),to,inst_32145);
} else {
if((state_val_32174 === (3))){
var inst_32170 = (state_32173[(2)]);
var state_32173__$1 = state_32173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32173__$1,inst_32170);
} else {
if((state_val_32174 === (12))){
var state_32173__$1 = state_32173;
var statearr_32190_34070 = state_32173__$1;
(statearr_32190_34070[(2)] = null);

(statearr_32190_34070[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (2))){
var state_32173__$1 = state_32173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32173__$1,(4),from);
} else {
if((state_val_32174 === (11))){
var inst_32156 = (state_32173[(2)]);
var state_32173__$1 = state_32173;
if(cljs.core.truth_(inst_32156)){
var statearr_32192_34071 = state_32173__$1;
(statearr_32192_34071[(1)] = (12));

} else {
var statearr_32200_34072 = state_32173__$1;
(statearr_32200_34072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (9))){
var state_32173__$1 = state_32173;
var statearr_32201_34073 = state_32173__$1;
(statearr_32201_34073[(2)] = null);

(statearr_32201_34073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (5))){
var state_32173__$1 = state_32173;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32205_34074 = state_32173__$1;
(statearr_32205_34074[(1)] = (8));

} else {
var statearr_32206_34075 = state_32173__$1;
(statearr_32206_34075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (14))){
var inst_32165 = (state_32173[(2)]);
var state_32173__$1 = state_32173;
var statearr_32207_34076 = state_32173__$1;
(statearr_32207_34076[(2)] = inst_32165);

(statearr_32207_34076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (10))){
var inst_32152 = (state_32173[(2)]);
var state_32173__$1 = state_32173;
var statearr_32211_34078 = state_32173__$1;
(statearr_32211_34078[(2)] = inst_32152);

(statearr_32211_34078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32174 === (8))){
var inst_32149 = cljs.core.async.close_BANG_(to);
var state_32173__$1 = state_32173;
var statearr_32212_34079 = state_32173__$1;
(statearr_32212_34079[(2)] = inst_32149);

(statearr_32212_34079[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_32217 = [null,null,null,null,null,null,null,null];
(statearr_32217[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_32217[(1)] = (1));

return statearr_32217;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_32173){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_32173);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e32218){var ex__26134__auto__ = e32218;
var statearr_32219_34080 = state_32173;
(statearr_32219_34080[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_32173[(4)]))){
var statearr_32220_34081 = state_32173;
(statearr_32220_34081[(1)] = cljs.core.first((state_32173[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34082 = state_32173;
state_32173 = G__34082;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_32173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_32173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_32221 = f__26216__auto__();
(statearr_32221[(6)] = c__26215__auto___34064);

return statearr_32221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__32224){
var vec__32225 = p__32224;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32225,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32225,(1),null);
var job = vec__32225;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__26215__auto___34083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_32235){
var state_val_32236 = (state_32235[(1)]);
if((state_val_32236 === (1))){
var state_32235__$1 = state_32235;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32235__$1,(2),res,v);
} else {
if((state_val_32236 === (2))){
var inst_32232 = (state_32235[(2)]);
var inst_32233 = cljs.core.async.close_BANG_(res);
var state_32235__$1 = (function (){var statearr_32246 = state_32235;
(statearr_32246[(7)] = inst_32232);

return statearr_32246;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_32235__$1,inst_32233);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0 = (function (){
var statearr_32250 = [null,null,null,null,null,null,null,null];
(statearr_32250[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__);

(statearr_32250[(1)] = (1));

return statearr_32250;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1 = (function (state_32235){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_32235);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e32252){var ex__26134__auto__ = e32252;
var statearr_32253_34084 = state_32235;
(statearr_32253_34084[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_32235[(4)]))){
var statearr_32254_34085 = state_32235;
(statearr_32254_34085[(1)] = cljs.core.first((state_32235[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34086 = state_32235;
state_32235 = G__34086;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = function(state_32235){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1.call(this,state_32235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_32258 = f__26216__auto__();
(statearr_32258[(6)] = c__26215__auto___34083);

return statearr_32258;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__32260){
var vec__32263 = p__32260;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32263,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32263,(1),null);
var job = vec__32263;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___34087 = n;
var __34088 = (0);
while(true){
if((__34088 < n__4695__auto___34087)){
var G__32266_34089 = type;
var G__32266_34090__$1 = (((G__32266_34089 instanceof cljs.core.Keyword))?G__32266_34089.fqn:null);
switch (G__32266_34090__$1) {
case "compute":
var c__26215__auto___34092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34088,c__26215__auto___34092,G__32266_34089,G__32266_34090__$1,n__4695__auto___34087,jobs,results,process,async){
return (function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = ((function (__34088,c__26215__auto___34092,G__32266_34089,G__32266_34090__$1,n__4695__auto___34087,jobs,results,process,async){
return (function (state_32282){
var state_val_32283 = (state_32282[(1)]);
if((state_val_32283 === (1))){
var state_32282__$1 = state_32282;
var statearr_32288_34093 = state_32282__$1;
(statearr_32288_34093[(2)] = null);

(statearr_32288_34093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (2))){
var state_32282__$1 = state_32282;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32282__$1,(4),jobs);
} else {
if((state_val_32283 === (3))){
var inst_32280 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32282__$1,inst_32280);
} else {
if((state_val_32283 === (4))){
var inst_32269 = (state_32282[(2)]);
var inst_32270 = process(inst_32269);
var state_32282__$1 = state_32282;
if(cljs.core.truth_(inst_32270)){
var statearr_32292_34098 = state_32282__$1;
(statearr_32292_34098[(1)] = (5));

} else {
var statearr_32293_34099 = state_32282__$1;
(statearr_32293_34099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (5))){
var state_32282__$1 = state_32282;
var statearr_32294_34100 = state_32282__$1;
(statearr_32294_34100[(2)] = null);

(statearr_32294_34100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (6))){
var state_32282__$1 = state_32282;
var statearr_32295_34102 = state_32282__$1;
(statearr_32295_34102[(2)] = null);

(statearr_32295_34102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32283 === (7))){
var inst_32278 = (state_32282[(2)]);
var state_32282__$1 = state_32282;
var statearr_32296_34107 = state_32282__$1;
(statearr_32296_34107[(2)] = inst_32278);

(statearr_32296_34107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34088,c__26215__auto___34092,G__32266_34089,G__32266_34090__$1,n__4695__auto___34087,jobs,results,process,async))
;
return ((function (__34088,switch__26130__auto__,c__26215__auto___34092,G__32266_34089,G__32266_34090__$1,n__4695__auto___34087,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0 = (function (){
var statearr_32297 = [null,null,null,null,null,null,null];
(statearr_32297[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__);

(statearr_32297[(1)] = (1));

return statearr_32297;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1 = (function (state_32282){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_32282);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e32298){var ex__26134__auto__ = e32298;
var statearr_32299_34110 = state_32282;
(statearr_32299_34110[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_32282[(4)]))){
var statearr_32300_34112 = state_32282;
(statearr_32300_34112[(1)] = cljs.core.first((state_32282[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34117 = state_32282;
state_32282 = G__34117;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = function(state_32282){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1.call(this,state_32282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__;
})()
;})(__34088,switch__26130__auto__,c__26215__auto___34092,G__32266_34089,G__32266_34090__$1,n__4695__auto___34087,jobs,results,process,async))
})();
var state__26217__auto__ = (function (){var statearr_32301 = f__26216__auto__();
(statearr_32301[(6)] = c__26215__auto___34092);

return statearr_32301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
});})(__34088,c__26215__auto___34092,G__32266_34089,G__32266_34090__$1,n__4695__auto___34087,jobs,results,process,async))
);


break;
case "async":
var c__26215__auto___34119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34088,c__26215__auto___34119,G__32266_34089,G__32266_34090__$1,n__4695__auto___34087,jobs,results,process,async){
return (function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = ((function (__34088,c__26215__auto___34119,G__32266_34089,G__32266_34090__$1,n__4695__auto___34087,jobs,results,process,async){
return (function (state_32314){
var state_val_32315 = (state_32314[(1)]);
if((state_val_32315 === (1))){
var state_32314__$1 = state_32314;
var statearr_32316_34124 = state_32314__$1;
(statearr_32316_34124[(2)] = null);

(statearr_32316_34124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (2))){
var state_32314__$1 = state_32314;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32314__$1,(4),jobs);
} else {
if((state_val_32315 === (3))){
var inst_32312 = (state_32314[(2)]);
var state_32314__$1 = state_32314;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32314__$1,inst_32312);
} else {
if((state_val_32315 === (4))){
var inst_32304 = (state_32314[(2)]);
var inst_32305 = async(inst_32304);
var state_32314__$1 = state_32314;
if(cljs.core.truth_(inst_32305)){
var statearr_32318_34129 = state_32314__$1;
(statearr_32318_34129[(1)] = (5));

} else {
var statearr_32319_34130 = state_32314__$1;
(statearr_32319_34130[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (5))){
var state_32314__$1 = state_32314;
var statearr_32320_34131 = state_32314__$1;
(statearr_32320_34131[(2)] = null);

(statearr_32320_34131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (6))){
var state_32314__$1 = state_32314;
var statearr_32322_34132 = state_32314__$1;
(statearr_32322_34132[(2)] = null);

(statearr_32322_34132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32315 === (7))){
var inst_32310 = (state_32314[(2)]);
var state_32314__$1 = state_32314;
var statearr_32323_34136 = state_32314__$1;
(statearr_32323_34136[(2)] = inst_32310);

(statearr_32323_34136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34088,c__26215__auto___34119,G__32266_34089,G__32266_34090__$1,n__4695__auto___34087,jobs,results,process,async))
;
return ((function (__34088,switch__26130__auto__,c__26215__auto___34119,G__32266_34089,G__32266_34090__$1,n__4695__auto___34087,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0 = (function (){
var statearr_32324 = [null,null,null,null,null,null,null];
(statearr_32324[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__);

(statearr_32324[(1)] = (1));

return statearr_32324;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1 = (function (state_32314){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_32314);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e32327){var ex__26134__auto__ = e32327;
var statearr_32328_34137 = state_32314;
(statearr_32328_34137[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_32314[(4)]))){
var statearr_32329_34138 = state_32314;
(statearr_32329_34138[(1)] = cljs.core.first((state_32314[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34143 = state_32314;
state_32314 = G__34143;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = function(state_32314){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1.call(this,state_32314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__;
})()
;})(__34088,switch__26130__auto__,c__26215__auto___34119,G__32266_34089,G__32266_34090__$1,n__4695__auto___34087,jobs,results,process,async))
})();
var state__26217__auto__ = (function (){var statearr_32330 = f__26216__auto__();
(statearr_32330[(6)] = c__26215__auto___34119);

return statearr_32330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
});})(__34088,c__26215__auto___34119,G__32266_34089,G__32266_34090__$1,n__4695__auto___34087,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32266_34090__$1)].join('')));

}

var G__34145 = (__34088 + (1));
__34088 = G__34145;
continue;
} else {
}
break;
}

var c__26215__auto___34146 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_32375){
var state_val_32376 = (state_32375[(1)]);
if((state_val_32376 === (7))){
var inst_32371 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
var statearr_32380_34151 = state_32375__$1;
(statearr_32380_34151[(2)] = inst_32371);

(statearr_32380_34151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (1))){
var state_32375__$1 = state_32375;
var statearr_32383_34156 = state_32375__$1;
(statearr_32383_34156[(2)] = null);

(statearr_32383_34156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (4))){
var inst_32337 = (state_32375[(7)]);
var inst_32337__$1 = (state_32375[(2)]);
var inst_32352 = (inst_32337__$1 == null);
var state_32375__$1 = (function (){var statearr_32403 = state_32375;
(statearr_32403[(7)] = inst_32337__$1);

return statearr_32403;
})();
if(cljs.core.truth_(inst_32352)){
var statearr_32408_34160 = state_32375__$1;
(statearr_32408_34160[(1)] = (5));

} else {
var statearr_32409_34161 = state_32375__$1;
(statearr_32409_34161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (6))){
var inst_32337 = (state_32375[(7)]);
var inst_32361 = (state_32375[(8)]);
var inst_32361__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32362 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32363 = [inst_32337,inst_32361__$1];
var inst_32364 = (new cljs.core.PersistentVector(null,2,(5),inst_32362,inst_32363,null));
var state_32375__$1 = (function (){var statearr_32410 = state_32375;
(statearr_32410[(8)] = inst_32361__$1);

return statearr_32410;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32375__$1,(8),jobs,inst_32364);
} else {
if((state_val_32376 === (3))){
var inst_32373 = (state_32375[(2)]);
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32375__$1,inst_32373);
} else {
if((state_val_32376 === (2))){
var state_32375__$1 = state_32375;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32375__$1,(4),from);
} else {
if((state_val_32376 === (9))){
var inst_32368 = (state_32375[(2)]);
var state_32375__$1 = (function (){var statearr_32420 = state_32375;
(statearr_32420[(9)] = inst_32368);

return statearr_32420;
})();
var statearr_32423_34170 = state_32375__$1;
(statearr_32423_34170[(2)] = null);

(statearr_32423_34170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (5))){
var inst_32359 = cljs.core.async.close_BANG_(jobs);
var state_32375__$1 = state_32375;
var statearr_32434_34171 = state_32375__$1;
(statearr_32434_34171[(2)] = inst_32359);

(statearr_32434_34171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32376 === (8))){
var inst_32361 = (state_32375[(8)]);
var inst_32366 = (state_32375[(2)]);
var state_32375__$1 = (function (){var statearr_32435 = state_32375;
(statearr_32435[(10)] = inst_32366);

return statearr_32435;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32375__$1,(9),results,inst_32361);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0 = (function (){
var statearr_32445 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32445[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__);

(statearr_32445[(1)] = (1));

return statearr_32445;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1 = (function (state_32375){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_32375);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e32453){var ex__26134__auto__ = e32453;
var statearr_32455_34174 = state_32375;
(statearr_32455_34174[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_32375[(4)]))){
var statearr_32460_34175 = state_32375;
(statearr_32460_34175[(1)] = cljs.core.first((state_32375[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34176 = state_32375;
state_32375 = G__34176;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = function(state_32375){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1.call(this,state_32375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_32461 = f__26216__auto__();
(statearr_32461[(6)] = c__26215__auto___34146);

return statearr_32461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


var c__26215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_32499){
var state_val_32500 = (state_32499[(1)]);
if((state_val_32500 === (7))){
var inst_32495 = (state_32499[(2)]);
var state_32499__$1 = state_32499;
var statearr_32502_34177 = state_32499__$1;
(statearr_32502_34177[(2)] = inst_32495);

(statearr_32502_34177[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32500 === (20))){
var state_32499__$1 = state_32499;
var statearr_32503_34178 = state_32499__$1;
(statearr_32503_34178[(2)] = null);

(statearr_32503_34178[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32500 === (1))){
var state_32499__$1 = state_32499;
var statearr_32504_34179 = state_32499__$1;
(statearr_32504_34179[(2)] = null);

(statearr_32504_34179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32500 === (4))){
var inst_32464 = (state_32499[(7)]);
var inst_32464__$1 = (state_32499[(2)]);
var inst_32465 = (inst_32464__$1 == null);
var state_32499__$1 = (function (){var statearr_32506 = state_32499;
(statearr_32506[(7)] = inst_32464__$1);

return statearr_32506;
})();
if(cljs.core.truth_(inst_32465)){
var statearr_32507_34181 = state_32499__$1;
(statearr_32507_34181[(1)] = (5));

} else {
var statearr_32508_34182 = state_32499__$1;
(statearr_32508_34182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32500 === (15))){
var inst_32477 = (state_32499[(8)]);
var state_32499__$1 = state_32499;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32499__$1,(18),to,inst_32477);
} else {
if((state_val_32500 === (21))){
var inst_32490 = (state_32499[(2)]);
var state_32499__$1 = state_32499;
var statearr_32513_34183 = state_32499__$1;
(statearr_32513_34183[(2)] = inst_32490);

(statearr_32513_34183[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32500 === (13))){
var inst_32492 = (state_32499[(2)]);
var state_32499__$1 = (function (){var statearr_32518 = state_32499;
(statearr_32518[(9)] = inst_32492);

return statearr_32518;
})();
var statearr_32519_34185 = state_32499__$1;
(statearr_32519_34185[(2)] = null);

(statearr_32519_34185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32500 === (6))){
var inst_32464 = (state_32499[(7)]);
var state_32499__$1 = state_32499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32499__$1,(11),inst_32464);
} else {
if((state_val_32500 === (17))){
var inst_32485 = (state_32499[(2)]);
var state_32499__$1 = state_32499;
if(cljs.core.truth_(inst_32485)){
var statearr_32524_34189 = state_32499__$1;
(statearr_32524_34189[(1)] = (19));

} else {
var statearr_32525_34190 = state_32499__$1;
(statearr_32525_34190[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32500 === (3))){
var inst_32497 = (state_32499[(2)]);
var state_32499__$1 = state_32499;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32499__$1,inst_32497);
} else {
if((state_val_32500 === (12))){
var inst_32474 = (state_32499[(10)]);
var state_32499__$1 = state_32499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32499__$1,(14),inst_32474);
} else {
if((state_val_32500 === (2))){
var state_32499__$1 = state_32499;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32499__$1,(4),results);
} else {
if((state_val_32500 === (19))){
var state_32499__$1 = state_32499;
var statearr_32528_34192 = state_32499__$1;
(statearr_32528_34192[(2)] = null);

(statearr_32528_34192[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32500 === (11))){
var inst_32474 = (state_32499[(2)]);
var state_32499__$1 = (function (){var statearr_32530 = state_32499;
(statearr_32530[(10)] = inst_32474);

return statearr_32530;
})();
var statearr_32531_34193 = state_32499__$1;
(statearr_32531_34193[(2)] = null);

(statearr_32531_34193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32500 === (9))){
var state_32499__$1 = state_32499;
var statearr_32532_34194 = state_32499__$1;
(statearr_32532_34194[(2)] = null);

(statearr_32532_34194[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32500 === (5))){
var state_32499__$1 = state_32499;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32534_34195 = state_32499__$1;
(statearr_32534_34195[(1)] = (8));

} else {
var statearr_32535_34196 = state_32499__$1;
(statearr_32535_34196[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32500 === (14))){
var inst_32479 = (state_32499[(11)]);
var inst_32477 = (state_32499[(8)]);
var inst_32477__$1 = (state_32499[(2)]);
var inst_32478 = (inst_32477__$1 == null);
var inst_32479__$1 = cljs.core.not(inst_32478);
var state_32499__$1 = (function (){var statearr_32537 = state_32499;
(statearr_32537[(11)] = inst_32479__$1);

(statearr_32537[(8)] = inst_32477__$1);

return statearr_32537;
})();
if(inst_32479__$1){
var statearr_32538_34197 = state_32499__$1;
(statearr_32538_34197[(1)] = (15));

} else {
var statearr_32539_34198 = state_32499__$1;
(statearr_32539_34198[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32500 === (16))){
var inst_32479 = (state_32499[(11)]);
var state_32499__$1 = state_32499;
var statearr_32541_34199 = state_32499__$1;
(statearr_32541_34199[(2)] = inst_32479);

(statearr_32541_34199[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32500 === (10))){
var inst_32471 = (state_32499[(2)]);
var state_32499__$1 = state_32499;
var statearr_32542_34200 = state_32499__$1;
(statearr_32542_34200[(2)] = inst_32471);

(statearr_32542_34200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32500 === (18))){
var inst_32482 = (state_32499[(2)]);
var state_32499__$1 = state_32499;
var statearr_32544_34201 = state_32499__$1;
(statearr_32544_34201[(2)] = inst_32482);

(statearr_32544_34201[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32500 === (8))){
var inst_32468 = cljs.core.async.close_BANG_(to);
var state_32499__$1 = state_32499;
var statearr_32545_34202 = state_32499__$1;
(statearr_32545_34202[(2)] = inst_32468);

(statearr_32545_34202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0 = (function (){
var statearr_32546 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__);

(statearr_32546[(1)] = (1));

return statearr_32546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1 = (function (state_32499){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_32499);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e32547){var ex__26134__auto__ = e32547;
var statearr_32548_34203 = state_32499;
(statearr_32548_34203[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_32499[(4)]))){
var statearr_32549_34204 = state_32499;
(statearr_32549_34204[(1)] = cljs.core.first((state_32499[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34205 = state_32499;
state_32499 = G__34205;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__ = function(state_32499){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1.call(this,state_32499);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26131__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_32550 = f__26216__auto__();
(statearr_32550[(6)] = c__26215__auto__);

return statearr_32550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));

return c__26215__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32552 = arguments.length;
switch (G__32552) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32554 = arguments.length;
switch (G__32554) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32556 = arguments.length;
switch (G__32556) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__26215__auto___34209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_32590){
var state_val_32591 = (state_32590[(1)]);
if((state_val_32591 === (7))){
var inst_32586 = (state_32590[(2)]);
var state_32590__$1 = state_32590;
var statearr_32594_34214 = state_32590__$1;
(statearr_32594_34214[(2)] = inst_32586);

(statearr_32594_34214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (1))){
var state_32590__$1 = state_32590;
var statearr_32595_34215 = state_32590__$1;
(statearr_32595_34215[(2)] = null);

(statearr_32595_34215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (4))){
var inst_32565 = (state_32590[(7)]);
var inst_32565__$1 = (state_32590[(2)]);
var inst_32566 = (inst_32565__$1 == null);
var state_32590__$1 = (function (){var statearr_32596 = state_32590;
(statearr_32596[(7)] = inst_32565__$1);

return statearr_32596;
})();
if(cljs.core.truth_(inst_32566)){
var statearr_32597_34217 = state_32590__$1;
(statearr_32597_34217[(1)] = (5));

} else {
var statearr_32598_34219 = state_32590__$1;
(statearr_32598_34219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (13))){
var state_32590__$1 = state_32590;
var statearr_32599_34221 = state_32590__$1;
(statearr_32599_34221[(2)] = null);

(statearr_32599_34221[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (6))){
var inst_32565 = (state_32590[(7)]);
var inst_32571 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32565) : p.call(null,inst_32565));
var state_32590__$1 = state_32590;
if(cljs.core.truth_(inst_32571)){
var statearr_32600_34222 = state_32590__$1;
(statearr_32600_34222[(1)] = (9));

} else {
var statearr_32601_34223 = state_32590__$1;
(statearr_32601_34223[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (3))){
var inst_32588 = (state_32590[(2)]);
var state_32590__$1 = state_32590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32590__$1,inst_32588);
} else {
if((state_val_32591 === (12))){
var state_32590__$1 = state_32590;
var statearr_32602_34224 = state_32590__$1;
(statearr_32602_34224[(2)] = null);

(statearr_32602_34224[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (2))){
var state_32590__$1 = state_32590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32590__$1,(4),ch);
} else {
if((state_val_32591 === (11))){
var inst_32565 = (state_32590[(7)]);
var inst_32575 = (state_32590[(2)]);
var state_32590__$1 = state_32590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32590__$1,(8),inst_32575,inst_32565);
} else {
if((state_val_32591 === (9))){
var state_32590__$1 = state_32590;
var statearr_32603_34227 = state_32590__$1;
(statearr_32603_34227[(2)] = tc);

(statearr_32603_34227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (5))){
var inst_32568 = cljs.core.async.close_BANG_(tc);
var inst_32569 = cljs.core.async.close_BANG_(fc);
var state_32590__$1 = (function (){var statearr_32604 = state_32590;
(statearr_32604[(8)] = inst_32568);

return statearr_32604;
})();
var statearr_32605_34230 = state_32590__$1;
(statearr_32605_34230[(2)] = inst_32569);

(statearr_32605_34230[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (14))){
var inst_32584 = (state_32590[(2)]);
var state_32590__$1 = state_32590;
var statearr_32606_34231 = state_32590__$1;
(statearr_32606_34231[(2)] = inst_32584);

(statearr_32606_34231[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (10))){
var state_32590__$1 = state_32590;
var statearr_32607_34232 = state_32590__$1;
(statearr_32607_34232[(2)] = fc);

(statearr_32607_34232[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32591 === (8))){
var inst_32579 = (state_32590[(2)]);
var state_32590__$1 = state_32590;
if(cljs.core.truth_(inst_32579)){
var statearr_32608_34235 = state_32590__$1;
(statearr_32608_34235[(1)] = (12));

} else {
var statearr_32609_34236 = state_32590__$1;
(statearr_32609_34236[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_32612 = [null,null,null,null,null,null,null,null,null];
(statearr_32612[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_32612[(1)] = (1));

return statearr_32612;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_32590){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_32590);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e32613){var ex__26134__auto__ = e32613;
var statearr_32614_34238 = state_32590;
(statearr_32614_34238[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_32590[(4)]))){
var statearr_32615_34239 = state_32590;
(statearr_32615_34239[(1)] = cljs.core.first((state_32590[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34240 = state_32590;
state_32590 = G__34240;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_32590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_32590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_32616 = f__26216__auto__();
(statearr_32616[(6)] = c__26215__auto___34209);

return statearr_32616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_32640){
var state_val_32641 = (state_32640[(1)]);
if((state_val_32641 === (7))){
var inst_32636 = (state_32640[(2)]);
var state_32640__$1 = state_32640;
var statearr_32642_34242 = state_32640__$1;
(statearr_32642_34242[(2)] = inst_32636);

(statearr_32642_34242[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (1))){
var inst_32619 = init;
var inst_32620 = inst_32619;
var state_32640__$1 = (function (){var statearr_32644 = state_32640;
(statearr_32644[(7)] = inst_32620);

return statearr_32644;
})();
var statearr_32646_34243 = state_32640__$1;
(statearr_32646_34243[(2)] = null);

(statearr_32646_34243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (4))){
var inst_32623 = (state_32640[(8)]);
var inst_32623__$1 = (state_32640[(2)]);
var inst_32624 = (inst_32623__$1 == null);
var state_32640__$1 = (function (){var statearr_32647 = state_32640;
(statearr_32647[(8)] = inst_32623__$1);

return statearr_32647;
})();
if(cljs.core.truth_(inst_32624)){
var statearr_32648_34245 = state_32640__$1;
(statearr_32648_34245[(1)] = (5));

} else {
var statearr_32649_34246 = state_32640__$1;
(statearr_32649_34246[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (6))){
var inst_32627 = (state_32640[(9)]);
var inst_32620 = (state_32640[(7)]);
var inst_32623 = (state_32640[(8)]);
var inst_32627__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32620,inst_32623) : f.call(null,inst_32620,inst_32623));
var inst_32628 = cljs.core.reduced_QMARK_(inst_32627__$1);
var state_32640__$1 = (function (){var statearr_32650 = state_32640;
(statearr_32650[(9)] = inst_32627__$1);

return statearr_32650;
})();
if(inst_32628){
var statearr_32651_34248 = state_32640__$1;
(statearr_32651_34248[(1)] = (8));

} else {
var statearr_32652_34249 = state_32640__$1;
(statearr_32652_34249[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (3))){
var inst_32638 = (state_32640[(2)]);
var state_32640__$1 = state_32640;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32640__$1,inst_32638);
} else {
if((state_val_32641 === (2))){
var state_32640__$1 = state_32640;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32640__$1,(4),ch);
} else {
if((state_val_32641 === (9))){
var inst_32627 = (state_32640[(9)]);
var inst_32620 = inst_32627;
var state_32640__$1 = (function (){var statearr_32653 = state_32640;
(statearr_32653[(7)] = inst_32620);

return statearr_32653;
})();
var statearr_32654_34251 = state_32640__$1;
(statearr_32654_34251[(2)] = null);

(statearr_32654_34251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (5))){
var inst_32620 = (state_32640[(7)]);
var state_32640__$1 = state_32640;
var statearr_32655_34252 = state_32640__$1;
(statearr_32655_34252[(2)] = inst_32620);

(statearr_32655_34252[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (10))){
var inst_32634 = (state_32640[(2)]);
var state_32640__$1 = state_32640;
var statearr_32656_34253 = state_32640__$1;
(statearr_32656_34253[(2)] = inst_32634);

(statearr_32656_34253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32641 === (8))){
var inst_32627 = (state_32640[(9)]);
var inst_32630 = cljs.core.deref(inst_32627);
var state_32640__$1 = state_32640;
var statearr_32657_34257 = state_32640__$1;
(statearr_32657_34257[(2)] = inst_32630);

(statearr_32657_34257[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__26131__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26131__auto____0 = (function (){
var statearr_32658 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32658[(0)] = cljs$core$async$reduce_$_state_machine__26131__auto__);

(statearr_32658[(1)] = (1));

return statearr_32658;
});
var cljs$core$async$reduce_$_state_machine__26131__auto____1 = (function (state_32640){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_32640);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e32659){var ex__26134__auto__ = e32659;
var statearr_32660_34258 = state_32640;
(statearr_32660_34258[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_32640[(4)]))){
var statearr_32661_34259 = state_32640;
(statearr_32661_34259[(1)] = cljs.core.first((state_32640[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34260 = state_32640;
state_32640 = G__34260;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26131__auto__ = function(state_32640){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26131__auto____1.call(this,state_32640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26131__auto____0;
cljs$core$async$reduce_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26131__auto____1;
return cljs$core$async$reduce_$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_32662 = f__26216__auto__();
(statearr_32662[(6)] = c__26215__auto__);

return statearr_32662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));

return c__26215__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__26215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_32671){
var state_val_32672 = (state_32671[(1)]);
if((state_val_32672 === (1))){
var inst_32666 = cljs.core.async.reduce(f__$1,init,ch);
var state_32671__$1 = state_32671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32671__$1,(2),inst_32666);
} else {
if((state_val_32672 === (2))){
var inst_32668 = (state_32671[(2)]);
var inst_32669 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32668) : f__$1.call(null,inst_32668));
var state_32671__$1 = state_32671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32671__$1,inst_32669);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__26131__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26131__auto____0 = (function (){
var statearr_32674 = [null,null,null,null,null,null,null];
(statearr_32674[(0)] = cljs$core$async$transduce_$_state_machine__26131__auto__);

(statearr_32674[(1)] = (1));

return statearr_32674;
});
var cljs$core$async$transduce_$_state_machine__26131__auto____1 = (function (state_32671){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_32671);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e32675){var ex__26134__auto__ = e32675;
var statearr_32676_34261 = state_32671;
(statearr_32676_34261[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_32671[(4)]))){
var statearr_32677_34262 = state_32671;
(statearr_32677_34262[(1)] = cljs.core.first((state_32671[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34263 = state_32671;
state_32671 = G__34263;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26131__auto__ = function(state_32671){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26131__auto____1.call(this,state_32671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26131__auto____0;
cljs$core$async$transduce_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26131__auto____1;
return cljs$core$async$transduce_$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_32678 = f__26216__auto__();
(statearr_32678[(6)] = c__26215__auto__);

return statearr_32678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));

return c__26215__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32680 = arguments.length;
switch (G__32680) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_32705){
var state_val_32706 = (state_32705[(1)]);
if((state_val_32706 === (7))){
var inst_32687 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32707_34267 = state_32705__$1;
(statearr_32707_34267[(2)] = inst_32687);

(statearr_32707_34267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (1))){
var inst_32681 = cljs.core.seq(coll);
var inst_32682 = inst_32681;
var state_32705__$1 = (function (){var statearr_32708 = state_32705;
(statearr_32708[(7)] = inst_32682);

return statearr_32708;
})();
var statearr_32709_34268 = state_32705__$1;
(statearr_32709_34268[(2)] = null);

(statearr_32709_34268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (4))){
var inst_32682 = (state_32705[(7)]);
var inst_32685 = cljs.core.first(inst_32682);
var state_32705__$1 = state_32705;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32705__$1,(7),ch,inst_32685);
} else {
if((state_val_32706 === (13))){
var inst_32699 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32710_34269 = state_32705__$1;
(statearr_32710_34269[(2)] = inst_32699);

(statearr_32710_34269[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (6))){
var inst_32690 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
if(cljs.core.truth_(inst_32690)){
var statearr_32711_34270 = state_32705__$1;
(statearr_32711_34270[(1)] = (8));

} else {
var statearr_32712_34271 = state_32705__$1;
(statearr_32712_34271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (3))){
var inst_32703 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32705__$1,inst_32703);
} else {
if((state_val_32706 === (12))){
var state_32705__$1 = state_32705;
var statearr_32713_34273 = state_32705__$1;
(statearr_32713_34273[(2)] = null);

(statearr_32713_34273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (2))){
var inst_32682 = (state_32705[(7)]);
var state_32705__$1 = state_32705;
if(cljs.core.truth_(inst_32682)){
var statearr_32714_34274 = state_32705__$1;
(statearr_32714_34274[(1)] = (4));

} else {
var statearr_32715_34275 = state_32705__$1;
(statearr_32715_34275[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (11))){
var inst_32696 = cljs.core.async.close_BANG_(ch);
var state_32705__$1 = state_32705;
var statearr_32716_34277 = state_32705__$1;
(statearr_32716_34277[(2)] = inst_32696);

(statearr_32716_34277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (9))){
var state_32705__$1 = state_32705;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32717_34279 = state_32705__$1;
(statearr_32717_34279[(1)] = (11));

} else {
var statearr_32718_34280 = state_32705__$1;
(statearr_32718_34280[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (5))){
var inst_32682 = (state_32705[(7)]);
var state_32705__$1 = state_32705;
var statearr_32719_34281 = state_32705__$1;
(statearr_32719_34281[(2)] = inst_32682);

(statearr_32719_34281[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (10))){
var inst_32701 = (state_32705[(2)]);
var state_32705__$1 = state_32705;
var statearr_32720_34283 = state_32705__$1;
(statearr_32720_34283[(2)] = inst_32701);

(statearr_32720_34283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32706 === (8))){
var inst_32682 = (state_32705[(7)]);
var inst_32692 = cljs.core.next(inst_32682);
var inst_32682__$1 = inst_32692;
var state_32705__$1 = (function (){var statearr_32721 = state_32705;
(statearr_32721[(7)] = inst_32682__$1);

return statearr_32721;
})();
var statearr_32722_34284 = state_32705__$1;
(statearr_32722_34284[(2)] = null);

(statearr_32722_34284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_32727 = [null,null,null,null,null,null,null,null];
(statearr_32727[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_32727[(1)] = (1));

return statearr_32727;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_32705){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_32705);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e32728){var ex__26134__auto__ = e32728;
var statearr_32729_34285 = state_32705;
(statearr_32729_34285[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_32705[(4)]))){
var statearr_32730_34286 = state_32705;
(statearr_32730_34286[(1)] = cljs.core.first((state_32705[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34287 = state_32705;
state_32705 = G__34287;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_32705){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_32705);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_32734 = f__26216__auto__();
(statearr_32734[(6)] = c__26215__auto__);

return statearr_32734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));

return c__26215__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32743 = arguments.length;
switch (G__32743) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_34289 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_34289(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_34290 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_34290(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_34294 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_34294(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_34295 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_34295(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32759 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32759 = (function (ch,cs,meta32760){
this.ch = ch;
this.cs = cs;
this.meta32760 = meta32760;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32759.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32761,meta32760__$1){
var self__ = this;
var _32761__$1 = this;
return (new cljs.core.async.t_cljs$core$async32759(self__.ch,self__.cs,meta32760__$1));
}));

(cljs.core.async.t_cljs$core$async32759.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32761){
var self__ = this;
var _32761__$1 = this;
return self__.meta32760;
}));

(cljs.core.async.t_cljs$core$async32759.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32759.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32759.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32759.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32759.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32759.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32759.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32760","meta32760",-216632645,null)], null);
}));

(cljs.core.async.t_cljs$core$async32759.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32759.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32759");

(cljs.core.async.t_cljs$core$async32759.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async32759");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32759.
 */
cljs.core.async.__GT_t_cljs$core$async32759 = (function cljs$core$async$mult_$___GT_t_cljs$core$async32759(ch__$1,cs__$1,meta32760){
return (new cljs.core.async.t_cljs$core$async32759(ch__$1,cs__$1,meta32760));
});

}

return (new cljs.core.async.t_cljs$core$async32759(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__26215__auto___34296 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_32910){
var state_val_32911 = (state_32910[(1)]);
if((state_val_32911 === (7))){
var inst_32906 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
var statearr_32912_34297 = state_32910__$1;
(statearr_32912_34297[(2)] = inst_32906);

(statearr_32912_34297[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (20))){
var inst_32809 = (state_32910[(7)]);
var inst_32821 = cljs.core.first(inst_32809);
var inst_32822 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32821,(0),null);
var inst_32823 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32821,(1),null);
var state_32910__$1 = (function (){var statearr_32913 = state_32910;
(statearr_32913[(8)] = inst_32822);

return statearr_32913;
})();
if(cljs.core.truth_(inst_32823)){
var statearr_32914_34298 = state_32910__$1;
(statearr_32914_34298[(1)] = (22));

} else {
var statearr_32915_34299 = state_32910__$1;
(statearr_32915_34299[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (27))){
var inst_32778 = (state_32910[(9)]);
var inst_32851 = (state_32910[(10)]);
var inst_32853 = (state_32910[(11)]);
var inst_32858 = (state_32910[(12)]);
var inst_32858__$1 = cljs.core._nth(inst_32851,inst_32853);
var inst_32859 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32858__$1,inst_32778,done);
var state_32910__$1 = (function (){var statearr_32916 = state_32910;
(statearr_32916[(12)] = inst_32858__$1);

return statearr_32916;
})();
if(cljs.core.truth_(inst_32859)){
var statearr_32917_34300 = state_32910__$1;
(statearr_32917_34300[(1)] = (30));

} else {
var statearr_32918_34301 = state_32910__$1;
(statearr_32918_34301[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (1))){
var state_32910__$1 = state_32910;
var statearr_32920_34302 = state_32910__$1;
(statearr_32920_34302[(2)] = null);

(statearr_32920_34302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (24))){
var inst_32809 = (state_32910[(7)]);
var inst_32828 = (state_32910[(2)]);
var inst_32829 = cljs.core.next(inst_32809);
var inst_32787 = inst_32829;
var inst_32788 = null;
var inst_32789 = (0);
var inst_32790 = (0);
var state_32910__$1 = (function (){var statearr_32921 = state_32910;
(statearr_32921[(13)] = inst_32787);

(statearr_32921[(14)] = inst_32790);

(statearr_32921[(15)] = inst_32788);

(statearr_32921[(16)] = inst_32828);

(statearr_32921[(17)] = inst_32789);

return statearr_32921;
})();
var statearr_32922_34303 = state_32910__$1;
(statearr_32922_34303[(2)] = null);

(statearr_32922_34303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (39))){
var state_32910__$1 = state_32910;
var statearr_32926_34304 = state_32910__$1;
(statearr_32926_34304[(2)] = null);

(statearr_32926_34304[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (4))){
var inst_32778 = (state_32910[(9)]);
var inst_32778__$1 = (state_32910[(2)]);
var inst_32779 = (inst_32778__$1 == null);
var state_32910__$1 = (function (){var statearr_32927 = state_32910;
(statearr_32927[(9)] = inst_32778__$1);

return statearr_32927;
})();
if(cljs.core.truth_(inst_32779)){
var statearr_32928_34305 = state_32910__$1;
(statearr_32928_34305[(1)] = (5));

} else {
var statearr_32929_34306 = state_32910__$1;
(statearr_32929_34306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (15))){
var inst_32787 = (state_32910[(13)]);
var inst_32790 = (state_32910[(14)]);
var inst_32788 = (state_32910[(15)]);
var inst_32789 = (state_32910[(17)]);
var inst_32805 = (state_32910[(2)]);
var inst_32806 = (inst_32790 + (1));
var tmp32923 = inst_32787;
var tmp32924 = inst_32788;
var tmp32925 = inst_32789;
var inst_32787__$1 = tmp32923;
var inst_32788__$1 = tmp32924;
var inst_32789__$1 = tmp32925;
var inst_32790__$1 = inst_32806;
var state_32910__$1 = (function (){var statearr_32933 = state_32910;
(statearr_32933[(13)] = inst_32787__$1);

(statearr_32933[(14)] = inst_32790__$1);

(statearr_32933[(15)] = inst_32788__$1);

(statearr_32933[(17)] = inst_32789__$1);

(statearr_32933[(18)] = inst_32805);

return statearr_32933;
})();
var statearr_32934_34308 = state_32910__$1;
(statearr_32934_34308[(2)] = null);

(statearr_32934_34308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (21))){
var inst_32832 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
var statearr_32938_34310 = state_32910__$1;
(statearr_32938_34310[(2)] = inst_32832);

(statearr_32938_34310[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (31))){
var inst_32858 = (state_32910[(12)]);
var inst_32862 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32858);
var state_32910__$1 = state_32910;
var statearr_32939_34311 = state_32910__$1;
(statearr_32939_34311[(2)] = inst_32862);

(statearr_32939_34311[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (32))){
var inst_32850 = (state_32910[(19)]);
var inst_32851 = (state_32910[(10)]);
var inst_32853 = (state_32910[(11)]);
var inst_32852 = (state_32910[(20)]);
var inst_32864 = (state_32910[(2)]);
var inst_32865 = (inst_32853 + (1));
var tmp32935 = inst_32850;
var tmp32936 = inst_32851;
var tmp32937 = inst_32852;
var inst_32850__$1 = tmp32935;
var inst_32851__$1 = tmp32936;
var inst_32852__$1 = tmp32937;
var inst_32853__$1 = inst_32865;
var state_32910__$1 = (function (){var statearr_32942 = state_32910;
(statearr_32942[(19)] = inst_32850__$1);

(statearr_32942[(21)] = inst_32864);

(statearr_32942[(10)] = inst_32851__$1);

(statearr_32942[(11)] = inst_32853__$1);

(statearr_32942[(20)] = inst_32852__$1);

return statearr_32942;
})();
var statearr_32944_34313 = state_32910__$1;
(statearr_32944_34313[(2)] = null);

(statearr_32944_34313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (40))){
var inst_32877 = (state_32910[(22)]);
var inst_32882 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32877);
var state_32910__$1 = state_32910;
var statearr_32945_34314 = state_32910__$1;
(statearr_32945_34314[(2)] = inst_32882);

(statearr_32945_34314[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (33))){
var inst_32868 = (state_32910[(23)]);
var inst_32870 = cljs.core.chunked_seq_QMARK_(inst_32868);
var state_32910__$1 = state_32910;
if(inst_32870){
var statearr_32946_34315 = state_32910__$1;
(statearr_32946_34315[(1)] = (36));

} else {
var statearr_32947_34316 = state_32910__$1;
(statearr_32947_34316[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (13))){
var inst_32799 = (state_32910[(24)]);
var inst_32802 = cljs.core.async.close_BANG_(inst_32799);
var state_32910__$1 = state_32910;
var statearr_32948_34317 = state_32910__$1;
(statearr_32948_34317[(2)] = inst_32802);

(statearr_32948_34317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (22))){
var inst_32822 = (state_32910[(8)]);
var inst_32825 = cljs.core.async.close_BANG_(inst_32822);
var state_32910__$1 = state_32910;
var statearr_32949_34318 = state_32910__$1;
(statearr_32949_34318[(2)] = inst_32825);

(statearr_32949_34318[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (36))){
var inst_32868 = (state_32910[(23)]);
var inst_32872 = cljs.core.chunk_first(inst_32868);
var inst_32873 = cljs.core.chunk_rest(inst_32868);
var inst_32874 = cljs.core.count(inst_32872);
var inst_32850 = inst_32873;
var inst_32851 = inst_32872;
var inst_32852 = inst_32874;
var inst_32853 = (0);
var state_32910__$1 = (function (){var statearr_32950 = state_32910;
(statearr_32950[(19)] = inst_32850);

(statearr_32950[(10)] = inst_32851);

(statearr_32950[(11)] = inst_32853);

(statearr_32950[(20)] = inst_32852);

return statearr_32950;
})();
var statearr_32951_34322 = state_32910__$1;
(statearr_32951_34322[(2)] = null);

(statearr_32951_34322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (41))){
var inst_32868 = (state_32910[(23)]);
var inst_32885 = (state_32910[(2)]);
var inst_32886 = cljs.core.next(inst_32868);
var inst_32850 = inst_32886;
var inst_32851 = null;
var inst_32852 = (0);
var inst_32853 = (0);
var state_32910__$1 = (function (){var statearr_32952 = state_32910;
(statearr_32952[(19)] = inst_32850);

(statearr_32952[(25)] = inst_32885);

(statearr_32952[(10)] = inst_32851);

(statearr_32952[(11)] = inst_32853);

(statearr_32952[(20)] = inst_32852);

return statearr_32952;
})();
var statearr_32953_34323 = state_32910__$1;
(statearr_32953_34323[(2)] = null);

(statearr_32953_34323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (43))){
var state_32910__$1 = state_32910;
var statearr_32954_34324 = state_32910__$1;
(statearr_32954_34324[(2)] = null);

(statearr_32954_34324[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (29))){
var inst_32894 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
var statearr_32955_34328 = state_32910__$1;
(statearr_32955_34328[(2)] = inst_32894);

(statearr_32955_34328[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (44))){
var inst_32903 = (state_32910[(2)]);
var state_32910__$1 = (function (){var statearr_32956 = state_32910;
(statearr_32956[(26)] = inst_32903);

return statearr_32956;
})();
var statearr_32957_34329 = state_32910__$1;
(statearr_32957_34329[(2)] = null);

(statearr_32957_34329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (6))){
var inst_32842 = (state_32910[(27)]);
var inst_32841 = cljs.core.deref(cs);
var inst_32842__$1 = cljs.core.keys(inst_32841);
var inst_32843 = cljs.core.count(inst_32842__$1);
var inst_32844 = cljs.core.reset_BANG_(dctr,inst_32843);
var inst_32849 = cljs.core.seq(inst_32842__$1);
var inst_32850 = inst_32849;
var inst_32851 = null;
var inst_32852 = (0);
var inst_32853 = (0);
var state_32910__$1 = (function (){var statearr_32958 = state_32910;
(statearr_32958[(19)] = inst_32850);

(statearr_32958[(28)] = inst_32844);

(statearr_32958[(27)] = inst_32842__$1);

(statearr_32958[(10)] = inst_32851);

(statearr_32958[(11)] = inst_32853);

(statearr_32958[(20)] = inst_32852);

return statearr_32958;
})();
var statearr_32959_34331 = state_32910__$1;
(statearr_32959_34331[(2)] = null);

(statearr_32959_34331[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (28))){
var inst_32850 = (state_32910[(19)]);
var inst_32868 = (state_32910[(23)]);
var inst_32868__$1 = cljs.core.seq(inst_32850);
var state_32910__$1 = (function (){var statearr_32960 = state_32910;
(statearr_32960[(23)] = inst_32868__$1);

return statearr_32960;
})();
if(inst_32868__$1){
var statearr_32961_34332 = state_32910__$1;
(statearr_32961_34332[(1)] = (33));

} else {
var statearr_32962_34333 = state_32910__$1;
(statearr_32962_34333[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (25))){
var inst_32853 = (state_32910[(11)]);
var inst_32852 = (state_32910[(20)]);
var inst_32855 = (inst_32853 < inst_32852);
var inst_32856 = inst_32855;
var state_32910__$1 = state_32910;
if(cljs.core.truth_(inst_32856)){
var statearr_32963_34334 = state_32910__$1;
(statearr_32963_34334[(1)] = (27));

} else {
var statearr_32964_34335 = state_32910__$1;
(statearr_32964_34335[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (34))){
var state_32910__$1 = state_32910;
var statearr_32965_34336 = state_32910__$1;
(statearr_32965_34336[(2)] = null);

(statearr_32965_34336[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (17))){
var state_32910__$1 = state_32910;
var statearr_32966_34337 = state_32910__$1;
(statearr_32966_34337[(2)] = null);

(statearr_32966_34337[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (3))){
var inst_32908 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32910__$1,inst_32908);
} else {
if((state_val_32911 === (12))){
var inst_32837 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
var statearr_32967_34338 = state_32910__$1;
(statearr_32967_34338[(2)] = inst_32837);

(statearr_32967_34338[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (2))){
var state_32910__$1 = state_32910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32910__$1,(4),ch);
} else {
if((state_val_32911 === (23))){
var state_32910__$1 = state_32910;
var statearr_32969_34341 = state_32910__$1;
(statearr_32969_34341[(2)] = null);

(statearr_32969_34341[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (35))){
var inst_32892 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
var statearr_32970_34342 = state_32910__$1;
(statearr_32970_34342[(2)] = inst_32892);

(statearr_32970_34342[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (19))){
var inst_32809 = (state_32910[(7)]);
var inst_32813 = cljs.core.chunk_first(inst_32809);
var inst_32814 = cljs.core.chunk_rest(inst_32809);
var inst_32815 = cljs.core.count(inst_32813);
var inst_32787 = inst_32814;
var inst_32788 = inst_32813;
var inst_32789 = inst_32815;
var inst_32790 = (0);
var state_32910__$1 = (function (){var statearr_32971 = state_32910;
(statearr_32971[(13)] = inst_32787);

(statearr_32971[(14)] = inst_32790);

(statearr_32971[(15)] = inst_32788);

(statearr_32971[(17)] = inst_32789);

return statearr_32971;
})();
var statearr_32972_34343 = state_32910__$1;
(statearr_32972_34343[(2)] = null);

(statearr_32972_34343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (11))){
var inst_32787 = (state_32910[(13)]);
var inst_32809 = (state_32910[(7)]);
var inst_32809__$1 = cljs.core.seq(inst_32787);
var state_32910__$1 = (function (){var statearr_32973 = state_32910;
(statearr_32973[(7)] = inst_32809__$1);

return statearr_32973;
})();
if(inst_32809__$1){
var statearr_32974_34344 = state_32910__$1;
(statearr_32974_34344[(1)] = (16));

} else {
var statearr_32975_34345 = state_32910__$1;
(statearr_32975_34345[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (9))){
var inst_32839 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
var statearr_32976_34346 = state_32910__$1;
(statearr_32976_34346[(2)] = inst_32839);

(statearr_32976_34346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (5))){
var inst_32785 = cljs.core.deref(cs);
var inst_32786 = cljs.core.seq(inst_32785);
var inst_32787 = inst_32786;
var inst_32788 = null;
var inst_32789 = (0);
var inst_32790 = (0);
var state_32910__$1 = (function (){var statearr_32977 = state_32910;
(statearr_32977[(13)] = inst_32787);

(statearr_32977[(14)] = inst_32790);

(statearr_32977[(15)] = inst_32788);

(statearr_32977[(17)] = inst_32789);

return statearr_32977;
})();
var statearr_32978_34347 = state_32910__$1;
(statearr_32978_34347[(2)] = null);

(statearr_32978_34347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (14))){
var state_32910__$1 = state_32910;
var statearr_32979_34348 = state_32910__$1;
(statearr_32979_34348[(2)] = null);

(statearr_32979_34348[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (45))){
var inst_32900 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
var statearr_32980_34349 = state_32910__$1;
(statearr_32980_34349[(2)] = inst_32900);

(statearr_32980_34349[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (26))){
var inst_32842 = (state_32910[(27)]);
var inst_32896 = (state_32910[(2)]);
var inst_32897 = cljs.core.seq(inst_32842);
var state_32910__$1 = (function (){var statearr_32981 = state_32910;
(statearr_32981[(29)] = inst_32896);

return statearr_32981;
})();
if(inst_32897){
var statearr_32987_34350 = state_32910__$1;
(statearr_32987_34350[(1)] = (42));

} else {
var statearr_32988_34351 = state_32910__$1;
(statearr_32988_34351[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (16))){
var inst_32809 = (state_32910[(7)]);
var inst_32811 = cljs.core.chunked_seq_QMARK_(inst_32809);
var state_32910__$1 = state_32910;
if(inst_32811){
var statearr_32989_34352 = state_32910__$1;
(statearr_32989_34352[(1)] = (19));

} else {
var statearr_32990_34353 = state_32910__$1;
(statearr_32990_34353[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (38))){
var inst_32889 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
var statearr_32991_34354 = state_32910__$1;
(statearr_32991_34354[(2)] = inst_32889);

(statearr_32991_34354[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (30))){
var state_32910__$1 = state_32910;
var statearr_32992_34355 = state_32910__$1;
(statearr_32992_34355[(2)] = null);

(statearr_32992_34355[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (10))){
var inst_32790 = (state_32910[(14)]);
var inst_32788 = (state_32910[(15)]);
var inst_32798 = cljs.core._nth(inst_32788,inst_32790);
var inst_32799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32798,(0),null);
var inst_32800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32798,(1),null);
var state_32910__$1 = (function (){var statearr_32993 = state_32910;
(statearr_32993[(24)] = inst_32799);

return statearr_32993;
})();
if(cljs.core.truth_(inst_32800)){
var statearr_32994_34356 = state_32910__$1;
(statearr_32994_34356[(1)] = (13));

} else {
var statearr_32995_34357 = state_32910__$1;
(statearr_32995_34357[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (18))){
var inst_32835 = (state_32910[(2)]);
var state_32910__$1 = state_32910;
var statearr_32996_34358 = state_32910__$1;
(statearr_32996_34358[(2)] = inst_32835);

(statearr_32996_34358[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (42))){
var state_32910__$1 = state_32910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32910__$1,(45),dchan);
} else {
if((state_val_32911 === (37))){
var inst_32877 = (state_32910[(22)]);
var inst_32868 = (state_32910[(23)]);
var inst_32778 = (state_32910[(9)]);
var inst_32877__$1 = cljs.core.first(inst_32868);
var inst_32878 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32877__$1,inst_32778,done);
var state_32910__$1 = (function (){var statearr_32997 = state_32910;
(statearr_32997[(22)] = inst_32877__$1);

return statearr_32997;
})();
if(cljs.core.truth_(inst_32878)){
var statearr_32998_34359 = state_32910__$1;
(statearr_32998_34359[(1)] = (39));

} else {
var statearr_32999_34360 = state_32910__$1;
(statearr_32999_34360[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32911 === (8))){
var inst_32790 = (state_32910[(14)]);
var inst_32789 = (state_32910[(17)]);
var inst_32792 = (inst_32790 < inst_32789);
var inst_32793 = inst_32792;
var state_32910__$1 = state_32910;
if(cljs.core.truth_(inst_32793)){
var statearr_33000_34363 = state_32910__$1;
(statearr_33000_34363[(1)] = (10));

} else {
var statearr_33001_34365 = state_32910__$1;
(statearr_33001_34365[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__26131__auto__ = null;
var cljs$core$async$mult_$_state_machine__26131__auto____0 = (function (){
var statearr_33002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33002[(0)] = cljs$core$async$mult_$_state_machine__26131__auto__);

(statearr_33002[(1)] = (1));

return statearr_33002;
});
var cljs$core$async$mult_$_state_machine__26131__auto____1 = (function (state_32910){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_32910);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e33003){var ex__26134__auto__ = e33003;
var statearr_33005_34367 = state_32910;
(statearr_33005_34367[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_32910[(4)]))){
var statearr_33006_34370 = state_32910;
(statearr_33006_34370[(1)] = cljs.core.first((state_32910[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34371 = state_32910;
state_32910 = G__34371;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26131__auto__ = function(state_32910){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26131__auto____1.call(this,state_32910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26131__auto____0;
cljs$core$async$mult_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26131__auto____1;
return cljs$core$async$mult_$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_33008 = f__26216__auto__();
(statearr_33008[(6)] = c__26215__auto___34296);

return statearr_33008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33010 = arguments.length;
switch (G__33010) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_34375 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_34375(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_34376 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_34376(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_34381 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_34381(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_34383 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_34383(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_34386 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_34386(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___34389 = arguments.length;
var i__4819__auto___34390 = (0);
while(true){
if((i__4819__auto___34390 < len__4818__auto___34389)){
args__4824__auto__.push((arguments[i__4819__auto___34390]));

var G__34391 = (i__4819__auto___34390 + (1));
i__4819__auto___34390 = G__34391;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33032){
var map__33033 = p__33032;
var map__33033__$1 = cljs.core.__destructure_map(map__33033);
var opts = map__33033__$1;
var statearr_33034_34393 = state;
(statearr_33034_34393[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33035_34394 = state;
(statearr_33035_34394[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33036_34395 = state;
(statearr_33036_34395[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33022){
var G__33023 = cljs.core.first(seq33022);
var seq33022__$1 = cljs.core.next(seq33022);
var G__33024 = cljs.core.first(seq33022__$1);
var seq33022__$2 = cljs.core.next(seq33022__$1);
var G__33025 = cljs.core.first(seq33022__$2);
var seq33022__$3 = cljs.core.next(seq33022__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33023,G__33024,G__33025,seq33022__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33044 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33044 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33045){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33045 = meta33045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33046,meta33045__$1){
var self__ = this;
var _33046__$1 = this;
return (new cljs.core.async.t_cljs$core$async33044(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33045__$1));
}));

(cljs.core.async.t_cljs$core$async33044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33046){
var self__ = this;
var _33046__$1 = this;
return self__.meta33045;
}));

(cljs.core.async.t_cljs$core$async33044.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33044.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33044.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33044.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33044.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33044.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33044.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33044.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33044.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33045","meta33045",-795501092,null)], null);
}));

(cljs.core.async.t_cljs$core$async33044.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33044.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33044");

(cljs.core.async.t_cljs$core$async33044.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33044");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33044.
 */
cljs.core.async.__GT_t_cljs$core$async33044 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33044(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33045){
return (new cljs.core.async.t_cljs$core$async33044(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33045));
});

}

return (new cljs.core.async.t_cljs$core$async33044(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26215__auto___34409 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_33126){
var state_val_33127 = (state_33126[(1)]);
if((state_val_33127 === (7))){
var inst_33086 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
if(cljs.core.truth_(inst_33086)){
var statearr_33128_34410 = state_33126__$1;
(statearr_33128_34410[(1)] = (8));

} else {
var statearr_33129_34411 = state_33126__$1;
(statearr_33129_34411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (20))){
var inst_33079 = (state_33126[(7)]);
var state_33126__$1 = state_33126;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33126__$1,(23),out,inst_33079);
} else {
if((state_val_33127 === (1))){
var inst_33058 = calc_state();
var inst_33059 = cljs.core.__destructure_map(inst_33058);
var inst_33060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33059,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33059,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33059,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33063 = inst_33058;
var state_33126__$1 = (function (){var statearr_33130 = state_33126;
(statearr_33130[(8)] = inst_33061);

(statearr_33130[(9)] = inst_33063);

(statearr_33130[(10)] = inst_33060);

(statearr_33130[(11)] = inst_33062);

return statearr_33130;
})();
var statearr_33131_34413 = state_33126__$1;
(statearr_33131_34413[(2)] = null);

(statearr_33131_34413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (24))){
var inst_33069 = (state_33126[(12)]);
var inst_33063 = inst_33069;
var state_33126__$1 = (function (){var statearr_33132 = state_33126;
(statearr_33132[(9)] = inst_33063);

return statearr_33132;
})();
var statearr_33133_34415 = state_33126__$1;
(statearr_33133_34415[(2)] = null);

(statearr_33133_34415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (4))){
var inst_33081 = (state_33126[(13)]);
var inst_33079 = (state_33126[(7)]);
var inst_33077 = (state_33126[(2)]);
var inst_33079__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33077,(0),null);
var inst_33080 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33077,(1),null);
var inst_33081__$1 = (inst_33079__$1 == null);
var state_33126__$1 = (function (){var statearr_33134 = state_33126;
(statearr_33134[(13)] = inst_33081__$1);

(statearr_33134[(14)] = inst_33080);

(statearr_33134[(7)] = inst_33079__$1);

return statearr_33134;
})();
if(cljs.core.truth_(inst_33081__$1)){
var statearr_33135_34417 = state_33126__$1;
(statearr_33135_34417[(1)] = (5));

} else {
var statearr_33136_34418 = state_33126__$1;
(statearr_33136_34418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (15))){
var inst_33070 = (state_33126[(15)]);
var inst_33100 = (state_33126[(16)]);
var inst_33100__$1 = cljs.core.empty_QMARK_(inst_33070);
var state_33126__$1 = (function (){var statearr_33137 = state_33126;
(statearr_33137[(16)] = inst_33100__$1);

return statearr_33137;
})();
if(inst_33100__$1){
var statearr_33138_34419 = state_33126__$1;
(statearr_33138_34419[(1)] = (17));

} else {
var statearr_33139_34420 = state_33126__$1;
(statearr_33139_34420[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (21))){
var inst_33069 = (state_33126[(12)]);
var inst_33063 = inst_33069;
var state_33126__$1 = (function (){var statearr_33140 = state_33126;
(statearr_33140[(9)] = inst_33063);

return statearr_33140;
})();
var statearr_33141_34421 = state_33126__$1;
(statearr_33141_34421[(2)] = null);

(statearr_33141_34421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (13))){
var inst_33093 = (state_33126[(2)]);
var inst_33094 = calc_state();
var inst_33063 = inst_33094;
var state_33126__$1 = (function (){var statearr_33142 = state_33126;
(statearr_33142[(9)] = inst_33063);

(statearr_33142[(17)] = inst_33093);

return statearr_33142;
})();
var statearr_33143_34422 = state_33126__$1;
(statearr_33143_34422[(2)] = null);

(statearr_33143_34422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (22))){
var inst_33120 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
var statearr_33144_34424 = state_33126__$1;
(statearr_33144_34424[(2)] = inst_33120);

(statearr_33144_34424[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (6))){
var inst_33080 = (state_33126[(14)]);
var inst_33084 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33080,change);
var state_33126__$1 = state_33126;
var statearr_33145_34426 = state_33126__$1;
(statearr_33145_34426[(2)] = inst_33084);

(statearr_33145_34426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (25))){
var state_33126__$1 = state_33126;
var statearr_33149_34427 = state_33126__$1;
(statearr_33149_34427[(2)] = null);

(statearr_33149_34427[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (17))){
var inst_33071 = (state_33126[(18)]);
var inst_33080 = (state_33126[(14)]);
var inst_33102 = (inst_33071.cljs$core$IFn$_invoke$arity$1 ? inst_33071.cljs$core$IFn$_invoke$arity$1(inst_33080) : inst_33071.call(null,inst_33080));
var inst_33103 = cljs.core.not(inst_33102);
var state_33126__$1 = state_33126;
var statearr_33151_34428 = state_33126__$1;
(statearr_33151_34428[(2)] = inst_33103);

(statearr_33151_34428[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (3))){
var inst_33124 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33126__$1,inst_33124);
} else {
if((state_val_33127 === (12))){
var state_33126__$1 = state_33126;
var statearr_33152_34429 = state_33126__$1;
(statearr_33152_34429[(2)] = null);

(statearr_33152_34429[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (2))){
var inst_33063 = (state_33126[(9)]);
var inst_33069 = (state_33126[(12)]);
var inst_33069__$1 = cljs.core.__destructure_map(inst_33063);
var inst_33070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33069__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33071 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33069__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33072 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33069__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33126__$1 = (function (){var statearr_33154 = state_33126;
(statearr_33154[(18)] = inst_33071);

(statearr_33154[(15)] = inst_33070);

(statearr_33154[(12)] = inst_33069__$1);

return statearr_33154;
})();
return cljs.core.async.ioc_alts_BANG_(state_33126__$1,(4),inst_33072);
} else {
if((state_val_33127 === (23))){
var inst_33111 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
if(cljs.core.truth_(inst_33111)){
var statearr_33155_34432 = state_33126__$1;
(statearr_33155_34432[(1)] = (24));

} else {
var statearr_33156_34433 = state_33126__$1;
(statearr_33156_34433[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (19))){
var inst_33106 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
var statearr_33160_34434 = state_33126__$1;
(statearr_33160_34434[(2)] = inst_33106);

(statearr_33160_34434[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (11))){
var inst_33080 = (state_33126[(14)]);
var inst_33090 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33080);
var state_33126__$1 = state_33126;
var statearr_33162_34435 = state_33126__$1;
(statearr_33162_34435[(2)] = inst_33090);

(statearr_33162_34435[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (9))){
var inst_33070 = (state_33126[(15)]);
var inst_33080 = (state_33126[(14)]);
var inst_33097 = (state_33126[(19)]);
var inst_33097__$1 = (inst_33070.cljs$core$IFn$_invoke$arity$1 ? inst_33070.cljs$core$IFn$_invoke$arity$1(inst_33080) : inst_33070.call(null,inst_33080));
var state_33126__$1 = (function (){var statearr_33163 = state_33126;
(statearr_33163[(19)] = inst_33097__$1);

return statearr_33163;
})();
if(cljs.core.truth_(inst_33097__$1)){
var statearr_33164_34436 = state_33126__$1;
(statearr_33164_34436[(1)] = (14));

} else {
var statearr_33166_34437 = state_33126__$1;
(statearr_33166_34437[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (5))){
var inst_33081 = (state_33126[(13)]);
var state_33126__$1 = state_33126;
var statearr_33167_34442 = state_33126__$1;
(statearr_33167_34442[(2)] = inst_33081);

(statearr_33167_34442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (14))){
var inst_33097 = (state_33126[(19)]);
var state_33126__$1 = state_33126;
var statearr_33168_34445 = state_33126__$1;
(statearr_33168_34445[(2)] = inst_33097);

(statearr_33168_34445[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (26))){
var inst_33116 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
var statearr_33169_34446 = state_33126__$1;
(statearr_33169_34446[(2)] = inst_33116);

(statearr_33169_34446[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (16))){
var inst_33108 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
if(cljs.core.truth_(inst_33108)){
var statearr_33170_34448 = state_33126__$1;
(statearr_33170_34448[(1)] = (20));

} else {
var statearr_33171_34451 = state_33126__$1;
(statearr_33171_34451[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (10))){
var inst_33122 = (state_33126[(2)]);
var state_33126__$1 = state_33126;
var statearr_33172_34454 = state_33126__$1;
(statearr_33172_34454[(2)] = inst_33122);

(statearr_33172_34454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (18))){
var inst_33100 = (state_33126[(16)]);
var state_33126__$1 = state_33126;
var statearr_33173_34455 = state_33126__$1;
(statearr_33173_34455[(2)] = inst_33100);

(statearr_33173_34455[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33127 === (8))){
var inst_33079 = (state_33126[(7)]);
var inst_33088 = (inst_33079 == null);
var state_33126__$1 = state_33126;
if(cljs.core.truth_(inst_33088)){
var statearr_33174_34456 = state_33126__$1;
(statearr_33174_34456[(1)] = (11));

} else {
var statearr_33175_34457 = state_33126__$1;
(statearr_33175_34457[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__26131__auto__ = null;
var cljs$core$async$mix_$_state_machine__26131__auto____0 = (function (){
var statearr_33182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33182[(0)] = cljs$core$async$mix_$_state_machine__26131__auto__);

(statearr_33182[(1)] = (1));

return statearr_33182;
});
var cljs$core$async$mix_$_state_machine__26131__auto____1 = (function (state_33126){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_33126);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e33183){var ex__26134__auto__ = e33183;
var statearr_33184_34463 = state_33126;
(statearr_33184_34463[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_33126[(4)]))){
var statearr_33185_34465 = state_33126;
(statearr_33185_34465[(1)] = cljs.core.first((state_33126[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34467 = state_33126;
state_33126 = G__34467;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26131__auto__ = function(state_33126){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26131__auto____1.call(this,state_33126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26131__auto____0;
cljs$core$async$mix_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26131__auto____1;
return cljs$core$async$mix_$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_33186 = f__26216__auto__();
(statearr_33186[(6)] = c__26215__auto___34409);

return statearr_33186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_34472 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_34472(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_34476 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_34476(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_34477 = (function() {
var G__34478 = null;
var G__34478__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__34478__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__34478 = function(p,v){
switch(arguments.length){
case 1:
return G__34478__1.call(this,p);
case 2:
return G__34478__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__34478.cljs$core$IFn$_invoke$arity$1 = G__34478__1;
G__34478.cljs$core$IFn$_invoke$arity$2 = G__34478__2;
return G__34478;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33190 = arguments.length;
switch (G__33190) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34477(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_34477(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33207 = arguments.length;
switch (G__33207) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33199_SHARP_){
if(cljs.core.truth_((p1__33199_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33199_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33199_SHARP_.call(null,topic)))){
return p1__33199_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33199_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33215 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33216){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33216 = meta33216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33217,meta33216__$1){
var self__ = this;
var _33217__$1 = this;
return (new cljs.core.async.t_cljs$core$async33215(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33216__$1));
}));

(cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33217){
var self__ = this;
var _33217__$1 = this;
return self__.meta33216;
}));

(cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33215.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33216","meta33216",1195399493,null)], null);
}));

(cljs.core.async.t_cljs$core$async33215.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33215");

(cljs.core.async.t_cljs$core$async33215.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33215");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33215.
 */
cljs.core.async.__GT_t_cljs$core$async33215 = (function cljs$core$async$__GT_t_cljs$core$async33215(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33216){
return (new cljs.core.async.t_cljs$core$async33215(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33216));
});

}

return (new cljs.core.async.t_cljs$core$async33215(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26215__auto___34491 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_33294){
var state_val_33295 = (state_33294[(1)]);
if((state_val_33295 === (7))){
var inst_33290 = (state_33294[(2)]);
var state_33294__$1 = state_33294;
var statearr_33298_34492 = state_33294__$1;
(statearr_33298_34492[(2)] = inst_33290);

(statearr_33298_34492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (20))){
var state_33294__$1 = state_33294;
var statearr_33304_34493 = state_33294__$1;
(statearr_33304_34493[(2)] = null);

(statearr_33304_34493[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (1))){
var state_33294__$1 = state_33294;
var statearr_33306_34494 = state_33294__$1;
(statearr_33306_34494[(2)] = null);

(statearr_33306_34494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (24))){
var inst_33273 = (state_33294[(7)]);
var inst_33282 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33273);
var state_33294__$1 = state_33294;
var statearr_33307_34495 = state_33294__$1;
(statearr_33307_34495[(2)] = inst_33282);

(statearr_33307_34495[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (4))){
var inst_33225 = (state_33294[(8)]);
var inst_33225__$1 = (state_33294[(2)]);
var inst_33226 = (inst_33225__$1 == null);
var state_33294__$1 = (function (){var statearr_33308 = state_33294;
(statearr_33308[(8)] = inst_33225__$1);

return statearr_33308;
})();
if(cljs.core.truth_(inst_33226)){
var statearr_33309_34496 = state_33294__$1;
(statearr_33309_34496[(1)] = (5));

} else {
var statearr_33310_34497 = state_33294__$1;
(statearr_33310_34497[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (15))){
var inst_33267 = (state_33294[(2)]);
var state_33294__$1 = state_33294;
var statearr_33311_34512 = state_33294__$1;
(statearr_33311_34512[(2)] = inst_33267);

(statearr_33311_34512[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (21))){
var inst_33287 = (state_33294[(2)]);
var state_33294__$1 = (function (){var statearr_33312 = state_33294;
(statearr_33312[(9)] = inst_33287);

return statearr_33312;
})();
var statearr_33313_34513 = state_33294__$1;
(statearr_33313_34513[(2)] = null);

(statearr_33313_34513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (13))){
var inst_33249 = (state_33294[(10)]);
var inst_33251 = cljs.core.chunked_seq_QMARK_(inst_33249);
var state_33294__$1 = state_33294;
if(inst_33251){
var statearr_33314_34514 = state_33294__$1;
(statearr_33314_34514[(1)] = (16));

} else {
var statearr_33315_34515 = state_33294__$1;
(statearr_33315_34515[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (22))){
var inst_33279 = (state_33294[(2)]);
var state_33294__$1 = state_33294;
if(cljs.core.truth_(inst_33279)){
var statearr_33316_34516 = state_33294__$1;
(statearr_33316_34516[(1)] = (23));

} else {
var statearr_33317_34517 = state_33294__$1;
(statearr_33317_34517[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (6))){
var inst_33225 = (state_33294[(8)]);
var inst_33273 = (state_33294[(7)]);
var inst_33275 = (state_33294[(11)]);
var inst_33273__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33225) : topic_fn.call(null,inst_33225));
var inst_33274 = cljs.core.deref(mults);
var inst_33275__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33274,inst_33273__$1);
var state_33294__$1 = (function (){var statearr_33318 = state_33294;
(statearr_33318[(7)] = inst_33273__$1);

(statearr_33318[(11)] = inst_33275__$1);

return statearr_33318;
})();
if(cljs.core.truth_(inst_33275__$1)){
var statearr_33319_34522 = state_33294__$1;
(statearr_33319_34522[(1)] = (19));

} else {
var statearr_33320_34523 = state_33294__$1;
(statearr_33320_34523[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (25))){
var inst_33284 = (state_33294[(2)]);
var state_33294__$1 = state_33294;
var statearr_33321_34524 = state_33294__$1;
(statearr_33321_34524[(2)] = inst_33284);

(statearr_33321_34524[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (17))){
var inst_33249 = (state_33294[(10)]);
var inst_33258 = cljs.core.first(inst_33249);
var inst_33259 = cljs.core.async.muxch_STAR_(inst_33258);
var inst_33260 = cljs.core.async.close_BANG_(inst_33259);
var inst_33261 = cljs.core.next(inst_33249);
var inst_33235 = inst_33261;
var inst_33236 = null;
var inst_33237 = (0);
var inst_33238 = (0);
var state_33294__$1 = (function (){var statearr_33322 = state_33294;
(statearr_33322[(12)] = inst_33236);

(statearr_33322[(13)] = inst_33238);

(statearr_33322[(14)] = inst_33237);

(statearr_33322[(15)] = inst_33260);

(statearr_33322[(16)] = inst_33235);

return statearr_33322;
})();
var statearr_33323_34525 = state_33294__$1;
(statearr_33323_34525[(2)] = null);

(statearr_33323_34525[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (3))){
var inst_33292 = (state_33294[(2)]);
var state_33294__$1 = state_33294;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33294__$1,inst_33292);
} else {
if((state_val_33295 === (12))){
var inst_33269 = (state_33294[(2)]);
var state_33294__$1 = state_33294;
var statearr_33324_34526 = state_33294__$1;
(statearr_33324_34526[(2)] = inst_33269);

(statearr_33324_34526[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (2))){
var state_33294__$1 = state_33294;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33294__$1,(4),ch);
} else {
if((state_val_33295 === (23))){
var state_33294__$1 = state_33294;
var statearr_33325_34527 = state_33294__$1;
(statearr_33325_34527[(2)] = null);

(statearr_33325_34527[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (19))){
var inst_33225 = (state_33294[(8)]);
var inst_33275 = (state_33294[(11)]);
var inst_33277 = cljs.core.async.muxch_STAR_(inst_33275);
var state_33294__$1 = state_33294;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33294__$1,(22),inst_33277,inst_33225);
} else {
if((state_val_33295 === (11))){
var inst_33249 = (state_33294[(10)]);
var inst_33235 = (state_33294[(16)]);
var inst_33249__$1 = cljs.core.seq(inst_33235);
var state_33294__$1 = (function (){var statearr_33326 = state_33294;
(statearr_33326[(10)] = inst_33249__$1);

return statearr_33326;
})();
if(inst_33249__$1){
var statearr_33327_34528 = state_33294__$1;
(statearr_33327_34528[(1)] = (13));

} else {
var statearr_33328_34529 = state_33294__$1;
(statearr_33328_34529[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (9))){
var inst_33271 = (state_33294[(2)]);
var state_33294__$1 = state_33294;
var statearr_33330_34532 = state_33294__$1;
(statearr_33330_34532[(2)] = inst_33271);

(statearr_33330_34532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (5))){
var inst_33232 = cljs.core.deref(mults);
var inst_33233 = cljs.core.vals(inst_33232);
var inst_33234 = cljs.core.seq(inst_33233);
var inst_33235 = inst_33234;
var inst_33236 = null;
var inst_33237 = (0);
var inst_33238 = (0);
var state_33294__$1 = (function (){var statearr_33331 = state_33294;
(statearr_33331[(12)] = inst_33236);

(statearr_33331[(13)] = inst_33238);

(statearr_33331[(14)] = inst_33237);

(statearr_33331[(16)] = inst_33235);

return statearr_33331;
})();
var statearr_33332_34533 = state_33294__$1;
(statearr_33332_34533[(2)] = null);

(statearr_33332_34533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (14))){
var state_33294__$1 = state_33294;
var statearr_33336_34534 = state_33294__$1;
(statearr_33336_34534[(2)] = null);

(statearr_33336_34534[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (16))){
var inst_33249 = (state_33294[(10)]);
var inst_33253 = cljs.core.chunk_first(inst_33249);
var inst_33254 = cljs.core.chunk_rest(inst_33249);
var inst_33255 = cljs.core.count(inst_33253);
var inst_33235 = inst_33254;
var inst_33236 = inst_33253;
var inst_33237 = inst_33255;
var inst_33238 = (0);
var state_33294__$1 = (function (){var statearr_33337 = state_33294;
(statearr_33337[(12)] = inst_33236);

(statearr_33337[(13)] = inst_33238);

(statearr_33337[(14)] = inst_33237);

(statearr_33337[(16)] = inst_33235);

return statearr_33337;
})();
var statearr_33338_34535 = state_33294__$1;
(statearr_33338_34535[(2)] = null);

(statearr_33338_34535[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (10))){
var inst_33236 = (state_33294[(12)]);
var inst_33238 = (state_33294[(13)]);
var inst_33237 = (state_33294[(14)]);
var inst_33235 = (state_33294[(16)]);
var inst_33243 = cljs.core._nth(inst_33236,inst_33238);
var inst_33244 = cljs.core.async.muxch_STAR_(inst_33243);
var inst_33245 = cljs.core.async.close_BANG_(inst_33244);
var inst_33246 = (inst_33238 + (1));
var tmp33333 = inst_33236;
var tmp33334 = inst_33237;
var tmp33335 = inst_33235;
var inst_33235__$1 = tmp33335;
var inst_33236__$1 = tmp33333;
var inst_33237__$1 = tmp33334;
var inst_33238__$1 = inst_33246;
var state_33294__$1 = (function (){var statearr_33339 = state_33294;
(statearr_33339[(12)] = inst_33236__$1);

(statearr_33339[(13)] = inst_33238__$1);

(statearr_33339[(14)] = inst_33237__$1);

(statearr_33339[(16)] = inst_33235__$1);

(statearr_33339[(17)] = inst_33245);

return statearr_33339;
})();
var statearr_33340_34541 = state_33294__$1;
(statearr_33340_34541[(2)] = null);

(statearr_33340_34541[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (18))){
var inst_33264 = (state_33294[(2)]);
var state_33294__$1 = state_33294;
var statearr_33341_34542 = state_33294__$1;
(statearr_33341_34542[(2)] = inst_33264);

(statearr_33341_34542[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33295 === (8))){
var inst_33238 = (state_33294[(13)]);
var inst_33237 = (state_33294[(14)]);
var inst_33240 = (inst_33238 < inst_33237);
var inst_33241 = inst_33240;
var state_33294__$1 = state_33294;
if(cljs.core.truth_(inst_33241)){
var statearr_33342_34545 = state_33294__$1;
(statearr_33342_34545[(1)] = (10));

} else {
var statearr_33343_34546 = state_33294__$1;
(statearr_33343_34546[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_33344 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33344[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_33344[(1)] = (1));

return statearr_33344;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_33294){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_33294);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e33345){var ex__26134__auto__ = e33345;
var statearr_33346_34551 = state_33294;
(statearr_33346_34551[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_33294[(4)]))){
var statearr_33347_34552 = state_33294;
(statearr_33347_34552[(1)] = cljs.core.first((state_33294[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34553 = state_33294;
state_33294 = G__34553;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_33294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_33294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_33348 = f__26216__auto__();
(statearr_33348[(6)] = c__26215__auto___34491);

return statearr_33348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33350 = arguments.length;
switch (G__33350) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33352 = arguments.length;
switch (G__33352) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33356 = arguments.length;
switch (G__33356) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__26215__auto___34574 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_33410){
var state_val_33411 = (state_33410[(1)]);
if((state_val_33411 === (7))){
var state_33410__$1 = state_33410;
var statearr_33412_34575 = state_33410__$1;
(statearr_33412_34575[(2)] = null);

(statearr_33412_34575[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (1))){
var state_33410__$1 = state_33410;
var statearr_33413_34576 = state_33410__$1;
(statearr_33413_34576[(2)] = null);

(statearr_33413_34576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (4))){
var inst_33360 = (state_33410[(7)]);
var inst_33359 = (state_33410[(8)]);
var inst_33362 = (inst_33360 < inst_33359);
var state_33410__$1 = state_33410;
if(cljs.core.truth_(inst_33362)){
var statearr_33414_34577 = state_33410__$1;
(statearr_33414_34577[(1)] = (6));

} else {
var statearr_33415_34578 = state_33410__$1;
(statearr_33415_34578[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (15))){
var inst_33393 = (state_33410[(9)]);
var inst_33401 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33393);
var state_33410__$1 = state_33410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33410__$1,(17),out,inst_33401);
} else {
if((state_val_33411 === (13))){
var inst_33393 = (state_33410[(9)]);
var inst_33393__$1 = (state_33410[(2)]);
var inst_33394 = cljs.core.some(cljs.core.nil_QMARK_,inst_33393__$1);
var state_33410__$1 = (function (){var statearr_33417 = state_33410;
(statearr_33417[(9)] = inst_33393__$1);

return statearr_33417;
})();
if(cljs.core.truth_(inst_33394)){
var statearr_33418_34581 = state_33410__$1;
(statearr_33418_34581[(1)] = (14));

} else {
var statearr_33419_34582 = state_33410__$1;
(statearr_33419_34582[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (6))){
var state_33410__$1 = state_33410;
var statearr_33420_34583 = state_33410__$1;
(statearr_33420_34583[(2)] = null);

(statearr_33420_34583[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (17))){
var inst_33403 = (state_33410[(2)]);
var state_33410__$1 = (function (){var statearr_33423 = state_33410;
(statearr_33423[(10)] = inst_33403);

return statearr_33423;
})();
var statearr_33424_34588 = state_33410__$1;
(statearr_33424_34588[(2)] = null);

(statearr_33424_34588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (3))){
var inst_33408 = (state_33410[(2)]);
var state_33410__$1 = state_33410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33410__$1,inst_33408);
} else {
if((state_val_33411 === (12))){
var _ = (function (){var statearr_33425 = state_33410;
(statearr_33425[(4)] = cljs.core.rest((state_33410[(4)])));

return statearr_33425;
})();
var state_33410__$1 = state_33410;
var ex33422 = (state_33410__$1[(2)]);
var statearr_33427_34598 = state_33410__$1;
(statearr_33427_34598[(5)] = ex33422);


if((ex33422 instanceof Object)){
var statearr_33430_34602 = state_33410__$1;
(statearr_33430_34602[(1)] = (11));

(statearr_33430_34602[(5)] = null);

} else {
throw ex33422;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (2))){
var inst_33358 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33359 = cnt;
var inst_33360 = (0);
var state_33410__$1 = (function (){var statearr_33431 = state_33410;
(statearr_33431[(7)] = inst_33360);

(statearr_33431[(8)] = inst_33359);

(statearr_33431[(11)] = inst_33358);

return statearr_33431;
})();
var statearr_33432_34607 = state_33410__$1;
(statearr_33432_34607[(2)] = null);

(statearr_33432_34607[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (11))){
var inst_33365 = (state_33410[(2)]);
var inst_33366 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33410__$1 = (function (){var statearr_33433 = state_33410;
(statearr_33433[(12)] = inst_33365);

return statearr_33433;
})();
var statearr_33434_34613 = state_33410__$1;
(statearr_33434_34613[(2)] = inst_33366);

(statearr_33434_34613[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (9))){
var inst_33360 = (state_33410[(7)]);
var _ = (function (){var statearr_33435 = state_33410;
(statearr_33435[(4)] = cljs.core.cons((12),(state_33410[(4)])));

return statearr_33435;
})();
var inst_33379 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33360) : chs__$1.call(null,inst_33360));
var inst_33380 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33360) : done.call(null,inst_33360));
var inst_33381 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33379,inst_33380);
var ___$1 = (function (){var statearr_33436 = state_33410;
(statearr_33436[(4)] = cljs.core.rest((state_33410[(4)])));

return statearr_33436;
})();
var state_33410__$1 = state_33410;
var statearr_33437_34619 = state_33410__$1;
(statearr_33437_34619[(2)] = inst_33381);

(statearr_33437_34619[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (5))){
var inst_33391 = (state_33410[(2)]);
var state_33410__$1 = (function (){var statearr_33438 = state_33410;
(statearr_33438[(13)] = inst_33391);

return statearr_33438;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33410__$1,(13),dchan);
} else {
if((state_val_33411 === (14))){
var inst_33396 = cljs.core.async.close_BANG_(out);
var state_33410__$1 = state_33410;
var statearr_33439_34621 = state_33410__$1;
(statearr_33439_34621[(2)] = inst_33396);

(statearr_33439_34621[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (16))){
var inst_33406 = (state_33410[(2)]);
var state_33410__$1 = state_33410;
var statearr_33440_34623 = state_33410__$1;
(statearr_33440_34623[(2)] = inst_33406);

(statearr_33440_34623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (10))){
var inst_33360 = (state_33410[(7)]);
var inst_33384 = (state_33410[(2)]);
var inst_33385 = (inst_33360 + (1));
var inst_33360__$1 = inst_33385;
var state_33410__$1 = (function (){var statearr_33441 = state_33410;
(statearr_33441[(7)] = inst_33360__$1);

(statearr_33441[(14)] = inst_33384);

return statearr_33441;
})();
var statearr_33442_34624 = state_33410__$1;
(statearr_33442_34624[(2)] = null);

(statearr_33442_34624[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33411 === (8))){
var inst_33389 = (state_33410[(2)]);
var state_33410__$1 = state_33410;
var statearr_33443_34625 = state_33410__$1;
(statearr_33443_34625[(2)] = inst_33389);

(statearr_33443_34625[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_33444 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33444[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_33444[(1)] = (1));

return statearr_33444;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_33410){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_33410);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e33445){var ex__26134__auto__ = e33445;
var statearr_33446_34628 = state_33410;
(statearr_33446_34628[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_33410[(4)]))){
var statearr_33447_34629 = state_33410;
(statearr_33447_34629[(1)] = cljs.core.first((state_33410[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34630 = state_33410;
state_33410 = G__34630;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_33410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_33410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_33448 = f__26216__auto__();
(statearr_33448[(6)] = c__26215__auto___34574);

return statearr_33448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33453 = arguments.length;
switch (G__33453) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26215__auto___34632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_33486){
var state_val_33487 = (state_33486[(1)]);
if((state_val_33487 === (7))){
var inst_33466 = (state_33486[(7)]);
var inst_33465 = (state_33486[(8)]);
var inst_33465__$1 = (state_33486[(2)]);
var inst_33466__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33465__$1,(0),null);
var inst_33467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33465__$1,(1),null);
var inst_33468 = (inst_33466__$1 == null);
var state_33486__$1 = (function (){var statearr_33488 = state_33486;
(statearr_33488[(7)] = inst_33466__$1);

(statearr_33488[(8)] = inst_33465__$1);

(statearr_33488[(9)] = inst_33467);

return statearr_33488;
})();
if(cljs.core.truth_(inst_33468)){
var statearr_33489_34636 = state_33486__$1;
(statearr_33489_34636[(1)] = (8));

} else {
var statearr_33490_34637 = state_33486__$1;
(statearr_33490_34637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (1))){
var inst_33455 = cljs.core.vec(chs);
var inst_33456 = inst_33455;
var state_33486__$1 = (function (){var statearr_33492 = state_33486;
(statearr_33492[(10)] = inst_33456);

return statearr_33492;
})();
var statearr_33494_34639 = state_33486__$1;
(statearr_33494_34639[(2)] = null);

(statearr_33494_34639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (4))){
var inst_33456 = (state_33486[(10)]);
var state_33486__$1 = state_33486;
return cljs.core.async.ioc_alts_BANG_(state_33486__$1,(7),inst_33456);
} else {
if((state_val_33487 === (6))){
var inst_33482 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
var statearr_33495_34640 = state_33486__$1;
(statearr_33495_34640[(2)] = inst_33482);

(statearr_33495_34640[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (3))){
var inst_33484 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33486__$1,inst_33484);
} else {
if((state_val_33487 === (2))){
var inst_33456 = (state_33486[(10)]);
var inst_33458 = cljs.core.count(inst_33456);
var inst_33459 = (inst_33458 > (0));
var state_33486__$1 = state_33486;
if(cljs.core.truth_(inst_33459)){
var statearr_33499_34641 = state_33486__$1;
(statearr_33499_34641[(1)] = (4));

} else {
var statearr_33500_34642 = state_33486__$1;
(statearr_33500_34642[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (11))){
var inst_33456 = (state_33486[(10)]);
var inst_33475 = (state_33486[(2)]);
var tmp33496 = inst_33456;
var inst_33456__$1 = tmp33496;
var state_33486__$1 = (function (){var statearr_33501 = state_33486;
(statearr_33501[(11)] = inst_33475);

(statearr_33501[(10)] = inst_33456__$1);

return statearr_33501;
})();
var statearr_33502_34648 = state_33486__$1;
(statearr_33502_34648[(2)] = null);

(statearr_33502_34648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (9))){
var inst_33466 = (state_33486[(7)]);
var state_33486__$1 = state_33486;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33486__$1,(11),out,inst_33466);
} else {
if((state_val_33487 === (5))){
var inst_33480 = cljs.core.async.close_BANG_(out);
var state_33486__$1 = state_33486;
var statearr_33505_34651 = state_33486__$1;
(statearr_33505_34651[(2)] = inst_33480);

(statearr_33505_34651[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (10))){
var inst_33478 = (state_33486[(2)]);
var state_33486__$1 = state_33486;
var statearr_33506_34652 = state_33486__$1;
(statearr_33506_34652[(2)] = inst_33478);

(statearr_33506_34652[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33487 === (8))){
var inst_33466 = (state_33486[(7)]);
var inst_33456 = (state_33486[(10)]);
var inst_33465 = (state_33486[(8)]);
var inst_33467 = (state_33486[(9)]);
var inst_33470 = (function (){var cs = inst_33456;
var vec__33461 = inst_33465;
var v = inst_33466;
var c = inst_33467;
return (function (p1__33451_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33451_SHARP_);
});
})();
var inst_33471 = cljs.core.filterv(inst_33470,inst_33456);
var inst_33456__$1 = inst_33471;
var state_33486__$1 = (function (){var statearr_33507 = state_33486;
(statearr_33507[(10)] = inst_33456__$1);

return statearr_33507;
})();
var statearr_33508_34656 = state_33486__$1;
(statearr_33508_34656[(2)] = null);

(statearr_33508_34656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_33511 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33511[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_33511[(1)] = (1));

return statearr_33511;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_33486){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_33486);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e33512){var ex__26134__auto__ = e33512;
var statearr_33513_34659 = state_33486;
(statearr_33513_34659[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_33486[(4)]))){
var statearr_33514_34660 = state_33486;
(statearr_33514_34660[(1)] = cljs.core.first((state_33486[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34662 = state_33486;
state_33486 = G__34662;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_33486){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_33486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_33515 = f__26216__auto__();
(statearr_33515[(6)] = c__26215__auto___34632);

return statearr_33515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33517 = arguments.length;
switch (G__33517) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26215__auto___34665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_33541){
var state_val_33542 = (state_33541[(1)]);
if((state_val_33542 === (7))){
var inst_33523 = (state_33541[(7)]);
var inst_33523__$1 = (state_33541[(2)]);
var inst_33524 = (inst_33523__$1 == null);
var inst_33525 = cljs.core.not(inst_33524);
var state_33541__$1 = (function (){var statearr_33543 = state_33541;
(statearr_33543[(7)] = inst_33523__$1);

return statearr_33543;
})();
if(inst_33525){
var statearr_33544_34668 = state_33541__$1;
(statearr_33544_34668[(1)] = (8));

} else {
var statearr_33545_34669 = state_33541__$1;
(statearr_33545_34669[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33542 === (1))){
var inst_33518 = (0);
var state_33541__$1 = (function (){var statearr_33546 = state_33541;
(statearr_33546[(8)] = inst_33518);

return statearr_33546;
})();
var statearr_33547_34670 = state_33541__$1;
(statearr_33547_34670[(2)] = null);

(statearr_33547_34670[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33542 === (4))){
var state_33541__$1 = state_33541;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33541__$1,(7),ch);
} else {
if((state_val_33542 === (6))){
var inst_33536 = (state_33541[(2)]);
var state_33541__$1 = state_33541;
var statearr_33548_34673 = state_33541__$1;
(statearr_33548_34673[(2)] = inst_33536);

(statearr_33548_34673[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33542 === (3))){
var inst_33538 = (state_33541[(2)]);
var inst_33539 = cljs.core.async.close_BANG_(out);
var state_33541__$1 = (function (){var statearr_33549 = state_33541;
(statearr_33549[(9)] = inst_33538);

return statearr_33549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33541__$1,inst_33539);
} else {
if((state_val_33542 === (2))){
var inst_33518 = (state_33541[(8)]);
var inst_33520 = (inst_33518 < n);
var state_33541__$1 = state_33541;
if(cljs.core.truth_(inst_33520)){
var statearr_33550_34675 = state_33541__$1;
(statearr_33550_34675[(1)] = (4));

} else {
var statearr_33551_34676 = state_33541__$1;
(statearr_33551_34676[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33542 === (11))){
var inst_33518 = (state_33541[(8)]);
var inst_33528 = (state_33541[(2)]);
var inst_33529 = (inst_33518 + (1));
var inst_33518__$1 = inst_33529;
var state_33541__$1 = (function (){var statearr_33553 = state_33541;
(statearr_33553[(8)] = inst_33518__$1);

(statearr_33553[(10)] = inst_33528);

return statearr_33553;
})();
var statearr_33554_34677 = state_33541__$1;
(statearr_33554_34677[(2)] = null);

(statearr_33554_34677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33542 === (9))){
var state_33541__$1 = state_33541;
var statearr_33555_34678 = state_33541__$1;
(statearr_33555_34678[(2)] = null);

(statearr_33555_34678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33542 === (5))){
var state_33541__$1 = state_33541;
var statearr_33556_34679 = state_33541__$1;
(statearr_33556_34679[(2)] = null);

(statearr_33556_34679[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33542 === (10))){
var inst_33533 = (state_33541[(2)]);
var state_33541__$1 = state_33541;
var statearr_33558_34680 = state_33541__$1;
(statearr_33558_34680[(2)] = inst_33533);

(statearr_33558_34680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33542 === (8))){
var inst_33523 = (state_33541[(7)]);
var state_33541__$1 = state_33541;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33541__$1,(11),out,inst_33523);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_33559 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33559[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_33559[(1)] = (1));

return statearr_33559;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_33541){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_33541);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e33561){var ex__26134__auto__ = e33561;
var statearr_33562_34681 = state_33541;
(statearr_33562_34681[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_33541[(4)]))){
var statearr_33564_34682 = state_33541;
(statearr_33564_34682[(1)] = cljs.core.first((state_33541[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34683 = state_33541;
state_33541 = G__34683;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_33541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_33541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_33566 = f__26216__auto__();
(statearr_33566[(6)] = c__26215__auto___34665);

return statearr_33566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33572 = (function (f,ch,meta33573){
this.f = f;
this.ch = ch;
this.meta33573 = meta33573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33574,meta33573__$1){
var self__ = this;
var _33574__$1 = this;
return (new cljs.core.async.t_cljs$core$async33572(self__.f,self__.ch,meta33573__$1));
}));

(cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33574){
var self__ = this;
var _33574__$1 = this;
return self__.meta33573;
}));

(cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33575 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33575 = (function (f,ch,meta33573,_,fn1,meta33576){
this.f = f;
this.ch = ch;
this.meta33573 = meta33573;
this._ = _;
this.fn1 = fn1;
this.meta33576 = meta33576;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33577,meta33576__$1){
var self__ = this;
var _33577__$1 = this;
return (new cljs.core.async.t_cljs$core$async33575(self__.f,self__.ch,self__.meta33573,self__._,self__.fn1,meta33576__$1));
}));

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33577){
var self__ = this;
var _33577__$1 = this;
return self__.meta33576;
}));

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33575.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__33569_SHARP_){
var G__33579 = (((p1__33569_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__33569_SHARP_) : self__.f.call(null,p1__33569_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__33579) : f1.call(null,G__33579));
});
}));

(cljs.core.async.t_cljs$core$async33575.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33573","meta33573",-1550584554,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async33572","cljs.core.async/t_cljs$core$async33572",639408866,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta33576","meta33576",848917111,null)], null);
}));

(cljs.core.async.t_cljs$core$async33575.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33575.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33575");

(cljs.core.async.t_cljs$core$async33575.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33575");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33575.
 */
cljs.core.async.__GT_t_cljs$core$async33575 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33575(f__$1,ch__$1,meta33573__$1,___$2,fn1__$1,meta33576){
return (new cljs.core.async.t_cljs$core$async33575(f__$1,ch__$1,meta33573__$1,___$2,fn1__$1,meta33576));
});

}

return (new cljs.core.async.t_cljs$core$async33575(self__.f,self__.ch,self__.meta33573,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__33582 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__33582) : self__.f.call(null,G__33582));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33572.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async33572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33573","meta33573",-1550584554,null)], null);
}));

(cljs.core.async.t_cljs$core$async33572.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33572");

(cljs.core.async.t_cljs$core$async33572.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33572");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33572.
 */
cljs.core.async.__GT_t_cljs$core$async33572 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async33572(f__$1,ch__$1,meta33573){
return (new cljs.core.async.t_cljs$core$async33572(f__$1,ch__$1,meta33573));
});

}

return (new cljs.core.async.t_cljs$core$async33572(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33585 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33585 = (function (f,ch,meta33586){
this.f = f;
this.ch = ch;
this.meta33586 = meta33586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33587,meta33586__$1){
var self__ = this;
var _33587__$1 = this;
return (new cljs.core.async.t_cljs$core$async33585(self__.f,self__.ch,meta33586__$1));
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33587){
var self__ = this;
var _33587__$1 = this;
return self__.meta33586;
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33585.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async33585.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33586","meta33586",476975768,null)], null);
}));

(cljs.core.async.t_cljs$core$async33585.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33585");

(cljs.core.async.t_cljs$core$async33585.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33585");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33585.
 */
cljs.core.async.__GT_t_cljs$core$async33585 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async33585(f__$1,ch__$1,meta33586){
return (new cljs.core.async.t_cljs$core$async33585(f__$1,ch__$1,meta33586));
});

}

return (new cljs.core.async.t_cljs$core$async33585(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33600 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33600 = (function (p,ch,meta33601){
this.p = p;
this.ch = ch;
this.meta33601 = meta33601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33602,meta33601__$1){
var self__ = this;
var _33602__$1 = this;
return (new cljs.core.async.t_cljs$core$async33600(self__.p,self__.ch,meta33601__$1));
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33602){
var self__ = this;
var _33602__$1 = this;
return self__.meta33601;
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33600.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async33600.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta33601","meta33601",1934242518,null)], null);
}));

(cljs.core.async.t_cljs$core$async33600.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33600");

(cljs.core.async.t_cljs$core$async33600.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async33600");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33600.
 */
cljs.core.async.__GT_t_cljs$core$async33600 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async33600(p__$1,ch__$1,meta33601){
return (new cljs.core.async.t_cljs$core$async33600(p__$1,ch__$1,meta33601));
});

}

return (new cljs.core.async.t_cljs$core$async33600(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__33606 = arguments.length;
switch (G__33606) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26215__auto___34698 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_33627){
var state_val_33628 = (state_33627[(1)]);
if((state_val_33628 === (7))){
var inst_33623 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
var statearr_33629_34699 = state_33627__$1;
(statearr_33629_34699[(2)] = inst_33623);

(statearr_33629_34699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (1))){
var state_33627__$1 = state_33627;
var statearr_33630_34700 = state_33627__$1;
(statearr_33630_34700[(2)] = null);

(statearr_33630_34700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (4))){
var inst_33609 = (state_33627[(7)]);
var inst_33609__$1 = (state_33627[(2)]);
var inst_33610 = (inst_33609__$1 == null);
var state_33627__$1 = (function (){var statearr_33631 = state_33627;
(statearr_33631[(7)] = inst_33609__$1);

return statearr_33631;
})();
if(cljs.core.truth_(inst_33610)){
var statearr_33632_34701 = state_33627__$1;
(statearr_33632_34701[(1)] = (5));

} else {
var statearr_33633_34702 = state_33627__$1;
(statearr_33633_34702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (6))){
var inst_33609 = (state_33627[(7)]);
var inst_33614 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33609) : p.call(null,inst_33609));
var state_33627__$1 = state_33627;
if(cljs.core.truth_(inst_33614)){
var statearr_33638_34703 = state_33627__$1;
(statearr_33638_34703[(1)] = (8));

} else {
var statearr_33639_34704 = state_33627__$1;
(statearr_33639_34704[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (3))){
var inst_33625 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33627__$1,inst_33625);
} else {
if((state_val_33628 === (2))){
var state_33627__$1 = state_33627;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33627__$1,(4),ch);
} else {
if((state_val_33628 === (11))){
var inst_33617 = (state_33627[(2)]);
var state_33627__$1 = state_33627;
var statearr_33640_34705 = state_33627__$1;
(statearr_33640_34705[(2)] = inst_33617);

(statearr_33640_34705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (9))){
var state_33627__$1 = state_33627;
var statearr_33644_34706 = state_33627__$1;
(statearr_33644_34706[(2)] = null);

(statearr_33644_34706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (5))){
var inst_33612 = cljs.core.async.close_BANG_(out);
var state_33627__$1 = state_33627;
var statearr_33645_34710 = state_33627__$1;
(statearr_33645_34710[(2)] = inst_33612);

(statearr_33645_34710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (10))){
var inst_33620 = (state_33627[(2)]);
var state_33627__$1 = (function (){var statearr_33646 = state_33627;
(statearr_33646[(8)] = inst_33620);

return statearr_33646;
})();
var statearr_33647_34711 = state_33627__$1;
(statearr_33647_34711[(2)] = null);

(statearr_33647_34711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33628 === (8))){
var inst_33609 = (state_33627[(7)]);
var state_33627__$1 = state_33627;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33627__$1,(11),out,inst_33609);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_33653 = [null,null,null,null,null,null,null,null,null];
(statearr_33653[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_33653[(1)] = (1));

return statearr_33653;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_33627){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_33627);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e33654){var ex__26134__auto__ = e33654;
var statearr_33655_34712 = state_33627;
(statearr_33655_34712[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_33627[(4)]))){
var statearr_33656_34713 = state_33627;
(statearr_33656_34713[(1)] = cljs.core.first((state_33627[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34714 = state_33627;
state_33627 = G__34714;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_33627){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_33627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_33657 = f__26216__auto__();
(statearr_33657[(6)] = c__26215__auto___34698);

return statearr_33657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__33661 = arguments.length;
switch (G__33661) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_33732){
var state_val_33733 = (state_33732[(1)]);
if((state_val_33733 === (7))){
var inst_33727 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33735_34722 = state_33732__$1;
(statearr_33735_34722[(2)] = inst_33727);

(statearr_33735_34722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (20))){
var inst_33694 = (state_33732[(7)]);
var inst_33708 = (state_33732[(2)]);
var inst_33709 = cljs.core.next(inst_33694);
var inst_33678 = inst_33709;
var inst_33679 = null;
var inst_33680 = (0);
var inst_33681 = (0);
var state_33732__$1 = (function (){var statearr_33736 = state_33732;
(statearr_33736[(8)] = inst_33681);

(statearr_33736[(9)] = inst_33679);

(statearr_33736[(10)] = inst_33708);

(statearr_33736[(11)] = inst_33678);

(statearr_33736[(12)] = inst_33680);

return statearr_33736;
})();
var statearr_33737_34726 = state_33732__$1;
(statearr_33737_34726[(2)] = null);

(statearr_33737_34726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (1))){
var state_33732__$1 = state_33732;
var statearr_33738_34728 = state_33732__$1;
(statearr_33738_34728[(2)] = null);

(statearr_33738_34728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (4))){
var inst_33667 = (state_33732[(13)]);
var inst_33667__$1 = (state_33732[(2)]);
var inst_33668 = (inst_33667__$1 == null);
var state_33732__$1 = (function (){var statearr_33740 = state_33732;
(statearr_33740[(13)] = inst_33667__$1);

return statearr_33740;
})();
if(cljs.core.truth_(inst_33668)){
var statearr_33741_34729 = state_33732__$1;
(statearr_33741_34729[(1)] = (5));

} else {
var statearr_33743_34730 = state_33732__$1;
(statearr_33743_34730[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (15))){
var state_33732__$1 = state_33732;
var statearr_33748_34731 = state_33732__$1;
(statearr_33748_34731[(2)] = null);

(statearr_33748_34731[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (21))){
var state_33732__$1 = state_33732;
var statearr_33749_34732 = state_33732__$1;
(statearr_33749_34732[(2)] = null);

(statearr_33749_34732[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (13))){
var inst_33681 = (state_33732[(8)]);
var inst_33679 = (state_33732[(9)]);
var inst_33678 = (state_33732[(11)]);
var inst_33680 = (state_33732[(12)]);
var inst_33688 = (state_33732[(2)]);
var inst_33691 = (inst_33681 + (1));
var tmp33745 = inst_33679;
var tmp33746 = inst_33678;
var tmp33747 = inst_33680;
var inst_33678__$1 = tmp33746;
var inst_33679__$1 = tmp33745;
var inst_33680__$1 = tmp33747;
var inst_33681__$1 = inst_33691;
var state_33732__$1 = (function (){var statearr_33750 = state_33732;
(statearr_33750[(8)] = inst_33681__$1);

(statearr_33750[(9)] = inst_33679__$1);

(statearr_33750[(14)] = inst_33688);

(statearr_33750[(11)] = inst_33678__$1);

(statearr_33750[(12)] = inst_33680__$1);

return statearr_33750;
})();
var statearr_33751_34738 = state_33732__$1;
(statearr_33751_34738[(2)] = null);

(statearr_33751_34738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (22))){
var state_33732__$1 = state_33732;
var statearr_33752_34739 = state_33732__$1;
(statearr_33752_34739[(2)] = null);

(statearr_33752_34739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (6))){
var inst_33667 = (state_33732[(13)]);
var inst_33676 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33667) : f.call(null,inst_33667));
var inst_33677 = cljs.core.seq(inst_33676);
var inst_33678 = inst_33677;
var inst_33679 = null;
var inst_33680 = (0);
var inst_33681 = (0);
var state_33732__$1 = (function (){var statearr_33754 = state_33732;
(statearr_33754[(8)] = inst_33681);

(statearr_33754[(9)] = inst_33679);

(statearr_33754[(11)] = inst_33678);

(statearr_33754[(12)] = inst_33680);

return statearr_33754;
})();
var statearr_33755_34742 = state_33732__$1;
(statearr_33755_34742[(2)] = null);

(statearr_33755_34742[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (17))){
var inst_33694 = (state_33732[(7)]);
var inst_33701 = cljs.core.chunk_first(inst_33694);
var inst_33702 = cljs.core.chunk_rest(inst_33694);
var inst_33703 = cljs.core.count(inst_33701);
var inst_33678 = inst_33702;
var inst_33679 = inst_33701;
var inst_33680 = inst_33703;
var inst_33681 = (0);
var state_33732__$1 = (function (){var statearr_33758 = state_33732;
(statearr_33758[(8)] = inst_33681);

(statearr_33758[(9)] = inst_33679);

(statearr_33758[(11)] = inst_33678);

(statearr_33758[(12)] = inst_33680);

return statearr_33758;
})();
var statearr_33759_34745 = state_33732__$1;
(statearr_33759_34745[(2)] = null);

(statearr_33759_34745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (3))){
var inst_33729 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33732__$1,inst_33729);
} else {
if((state_val_33733 === (12))){
var inst_33717 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33760_34746 = state_33732__$1;
(statearr_33760_34746[(2)] = inst_33717);

(statearr_33760_34746[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (2))){
var state_33732__$1 = state_33732;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33732__$1,(4),in$);
} else {
if((state_val_33733 === (23))){
var inst_33725 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33761_34747 = state_33732__$1;
(statearr_33761_34747[(2)] = inst_33725);

(statearr_33761_34747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (19))){
var inst_33712 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33762_34749 = state_33732__$1;
(statearr_33762_34749[(2)] = inst_33712);

(statearr_33762_34749[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (11))){
var inst_33678 = (state_33732[(11)]);
var inst_33694 = (state_33732[(7)]);
var inst_33694__$1 = cljs.core.seq(inst_33678);
var state_33732__$1 = (function (){var statearr_33763 = state_33732;
(statearr_33763[(7)] = inst_33694__$1);

return statearr_33763;
})();
if(inst_33694__$1){
var statearr_33764_34755 = state_33732__$1;
(statearr_33764_34755[(1)] = (14));

} else {
var statearr_33765_34756 = state_33732__$1;
(statearr_33765_34756[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (9))){
var inst_33719 = (state_33732[(2)]);
var inst_33720 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_33732__$1 = (function (){var statearr_33766 = state_33732;
(statearr_33766[(15)] = inst_33719);

return statearr_33766;
})();
if(cljs.core.truth_(inst_33720)){
var statearr_33767_34758 = state_33732__$1;
(statearr_33767_34758[(1)] = (21));

} else {
var statearr_33768_34759 = state_33732__$1;
(statearr_33768_34759[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (5))){
var inst_33670 = cljs.core.async.close_BANG_(out);
var state_33732__$1 = state_33732;
var statearr_33769_34760 = state_33732__$1;
(statearr_33769_34760[(2)] = inst_33670);

(statearr_33769_34760[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (14))){
var inst_33694 = (state_33732[(7)]);
var inst_33697 = cljs.core.chunked_seq_QMARK_(inst_33694);
var state_33732__$1 = state_33732;
if(inst_33697){
var statearr_33770_34761 = state_33732__$1;
(statearr_33770_34761[(1)] = (17));

} else {
var statearr_33772_34762 = state_33732__$1;
(statearr_33772_34762[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (16))){
var inst_33715 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33773_34763 = state_33732__$1;
(statearr_33773_34763[(2)] = inst_33715);

(statearr_33773_34763[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (10))){
var inst_33681 = (state_33732[(8)]);
var inst_33679 = (state_33732[(9)]);
var inst_33686 = cljs.core._nth(inst_33679,inst_33681);
var state_33732__$1 = state_33732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33732__$1,(13),out,inst_33686);
} else {
if((state_val_33733 === (18))){
var inst_33694 = (state_33732[(7)]);
var inst_33706 = cljs.core.first(inst_33694);
var state_33732__$1 = state_33732;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33732__$1,(20),out,inst_33706);
} else {
if((state_val_33733 === (8))){
var inst_33681 = (state_33732[(8)]);
var inst_33680 = (state_33732[(12)]);
var inst_33683 = (inst_33681 < inst_33680);
var inst_33684 = inst_33683;
var state_33732__$1 = state_33732;
if(cljs.core.truth_(inst_33684)){
var statearr_33775_34768 = state_33732__$1;
(statearr_33775_34768[(1)] = (10));

} else {
var statearr_33776_34769 = state_33732__$1;
(statearr_33776_34769[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26131__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26131__auto____0 = (function (){
var statearr_33778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33778[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26131__auto__);

(statearr_33778[(1)] = (1));

return statearr_33778;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26131__auto____1 = (function (state_33732){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_33732);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e33779){var ex__26134__auto__ = e33779;
var statearr_33780_34774 = state_33732;
(statearr_33780_34774[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_33732[(4)]))){
var statearr_33781_34775 = state_33732;
(statearr_33781_34775[(1)] = cljs.core.first((state_33732[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34776 = state_33732;
state_33732 = G__34776;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26131__auto__ = function(state_33732){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26131__auto____1.call(this,state_33732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26131__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26131__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_33784 = f__26216__auto__();
(statearr_33784[(6)] = c__26215__auto__);

return statearr_33784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));

return c__26215__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__33788 = arguments.length;
switch (G__33788) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__33790 = arguments.length;
switch (G__33790) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__33794 = arguments.length;
switch (G__33794) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26215__auto___34781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_33819){
var state_val_33820 = (state_33819[(1)]);
if((state_val_33820 === (7))){
var inst_33814 = (state_33819[(2)]);
var state_33819__$1 = state_33819;
var statearr_33821_34784 = state_33819__$1;
(statearr_33821_34784[(2)] = inst_33814);

(statearr_33821_34784[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (1))){
var inst_33796 = null;
var state_33819__$1 = (function (){var statearr_33822 = state_33819;
(statearr_33822[(7)] = inst_33796);

return statearr_33822;
})();
var statearr_33824_34786 = state_33819__$1;
(statearr_33824_34786[(2)] = null);

(statearr_33824_34786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (4))){
var inst_33799 = (state_33819[(8)]);
var inst_33799__$1 = (state_33819[(2)]);
var inst_33800 = (inst_33799__$1 == null);
var inst_33801 = cljs.core.not(inst_33800);
var state_33819__$1 = (function (){var statearr_33826 = state_33819;
(statearr_33826[(8)] = inst_33799__$1);

return statearr_33826;
})();
if(inst_33801){
var statearr_33827_34790 = state_33819__$1;
(statearr_33827_34790[(1)] = (5));

} else {
var statearr_33828_34791 = state_33819__$1;
(statearr_33828_34791[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (6))){
var state_33819__$1 = state_33819;
var statearr_33829_34792 = state_33819__$1;
(statearr_33829_34792[(2)] = null);

(statearr_33829_34792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (3))){
var inst_33816 = (state_33819[(2)]);
var inst_33817 = cljs.core.async.close_BANG_(out);
var state_33819__$1 = (function (){var statearr_33830 = state_33819;
(statearr_33830[(9)] = inst_33816);

return statearr_33830;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33819__$1,inst_33817);
} else {
if((state_val_33820 === (2))){
var state_33819__$1 = state_33819;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33819__$1,(4),ch);
} else {
if((state_val_33820 === (11))){
var inst_33799 = (state_33819[(8)]);
var inst_33808 = (state_33819[(2)]);
var inst_33796 = inst_33799;
var state_33819__$1 = (function (){var statearr_33833 = state_33819;
(statearr_33833[(7)] = inst_33796);

(statearr_33833[(10)] = inst_33808);

return statearr_33833;
})();
var statearr_33834_34796 = state_33819__$1;
(statearr_33834_34796[(2)] = null);

(statearr_33834_34796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (9))){
var inst_33799 = (state_33819[(8)]);
var state_33819__$1 = state_33819;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33819__$1,(11),out,inst_33799);
} else {
if((state_val_33820 === (5))){
var inst_33799 = (state_33819[(8)]);
var inst_33796 = (state_33819[(7)]);
var inst_33803 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33799,inst_33796);
var state_33819__$1 = state_33819;
if(inst_33803){
var statearr_33837_34797 = state_33819__$1;
(statearr_33837_34797[(1)] = (8));

} else {
var statearr_33838_34798 = state_33819__$1;
(statearr_33838_34798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (10))){
var inst_33811 = (state_33819[(2)]);
var state_33819__$1 = state_33819;
var statearr_33839_34800 = state_33819__$1;
(statearr_33839_34800[(2)] = inst_33811);

(statearr_33839_34800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33820 === (8))){
var inst_33796 = (state_33819[(7)]);
var tmp33836 = inst_33796;
var inst_33796__$1 = tmp33836;
var state_33819__$1 = (function (){var statearr_33840 = state_33819;
(statearr_33840[(7)] = inst_33796__$1);

return statearr_33840;
})();
var statearr_33841_34802 = state_33819__$1;
(statearr_33841_34802[(2)] = null);

(statearr_33841_34802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_33842 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33842[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_33842[(1)] = (1));

return statearr_33842;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_33819){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_33819);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e33843){var ex__26134__auto__ = e33843;
var statearr_33844_34804 = state_33819;
(statearr_33844_34804[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_33819[(4)]))){
var statearr_33845_34805 = state_33819;
(statearr_33845_34805[(1)] = cljs.core.first((state_33819[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34807 = state_33819;
state_33819 = G__34807;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_33819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_33819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_33848 = f__26216__auto__();
(statearr_33848[(6)] = c__26215__auto___34781);

return statearr_33848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__33850 = arguments.length;
switch (G__33850) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26215__auto___34813 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_33888){
var state_val_33889 = (state_33888[(1)]);
if((state_val_33889 === (7))){
var inst_33884 = (state_33888[(2)]);
var state_33888__$1 = state_33888;
var statearr_33891_34814 = state_33888__$1;
(statearr_33891_34814[(2)] = inst_33884);

(statearr_33891_34814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33889 === (1))){
var inst_33851 = (new Array(n));
var inst_33852 = inst_33851;
var inst_33853 = (0);
var state_33888__$1 = (function (){var statearr_33892 = state_33888;
(statearr_33892[(7)] = inst_33852);

(statearr_33892[(8)] = inst_33853);

return statearr_33892;
})();
var statearr_33895_34815 = state_33888__$1;
(statearr_33895_34815[(2)] = null);

(statearr_33895_34815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33889 === (4))){
var inst_33856 = (state_33888[(9)]);
var inst_33856__$1 = (state_33888[(2)]);
var inst_33857 = (inst_33856__$1 == null);
var inst_33858 = cljs.core.not(inst_33857);
var state_33888__$1 = (function (){var statearr_33896 = state_33888;
(statearr_33896[(9)] = inst_33856__$1);

return statearr_33896;
})();
if(inst_33858){
var statearr_33897_34822 = state_33888__$1;
(statearr_33897_34822[(1)] = (5));

} else {
var statearr_33898_34825 = state_33888__$1;
(statearr_33898_34825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33889 === (15))){
var inst_33878 = (state_33888[(2)]);
var state_33888__$1 = state_33888;
var statearr_33900_34827 = state_33888__$1;
(statearr_33900_34827[(2)] = inst_33878);

(statearr_33900_34827[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33889 === (13))){
var state_33888__$1 = state_33888;
var statearr_33901_34833 = state_33888__$1;
(statearr_33901_34833[(2)] = null);

(statearr_33901_34833[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33889 === (6))){
var inst_33853 = (state_33888[(8)]);
var inst_33874 = (inst_33853 > (0));
var state_33888__$1 = state_33888;
if(cljs.core.truth_(inst_33874)){
var statearr_33902_34841 = state_33888__$1;
(statearr_33902_34841[(1)] = (12));

} else {
var statearr_33905_34842 = state_33888__$1;
(statearr_33905_34842[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33889 === (3))){
var inst_33886 = (state_33888[(2)]);
var state_33888__$1 = state_33888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33888__$1,inst_33886);
} else {
if((state_val_33889 === (12))){
var inst_33852 = (state_33888[(7)]);
var inst_33876 = cljs.core.vec(inst_33852);
var state_33888__$1 = state_33888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33888__$1,(15),out,inst_33876);
} else {
if((state_val_33889 === (2))){
var state_33888__$1 = state_33888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33888__$1,(4),ch);
} else {
if((state_val_33889 === (11))){
var inst_33868 = (state_33888[(2)]);
var inst_33869 = (new Array(n));
var inst_33852 = inst_33869;
var inst_33853 = (0);
var state_33888__$1 = (function (){var statearr_33908 = state_33888;
(statearr_33908[(7)] = inst_33852);

(statearr_33908[(8)] = inst_33853);

(statearr_33908[(10)] = inst_33868);

return statearr_33908;
})();
var statearr_33909_34852 = state_33888__$1;
(statearr_33909_34852[(2)] = null);

(statearr_33909_34852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33889 === (9))){
var inst_33852 = (state_33888[(7)]);
var inst_33866 = cljs.core.vec(inst_33852);
var state_33888__$1 = state_33888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33888__$1,(11),out,inst_33866);
} else {
if((state_val_33889 === (5))){
var inst_33861 = (state_33888[(11)]);
var inst_33852 = (state_33888[(7)]);
var inst_33856 = (state_33888[(9)]);
var inst_33853 = (state_33888[(8)]);
var inst_33860 = (inst_33852[inst_33853] = inst_33856);
var inst_33861__$1 = (inst_33853 + (1));
var inst_33862 = (inst_33861__$1 < n);
var state_33888__$1 = (function (){var statearr_33910 = state_33888;
(statearr_33910[(12)] = inst_33860);

(statearr_33910[(11)] = inst_33861__$1);

return statearr_33910;
})();
if(cljs.core.truth_(inst_33862)){
var statearr_33911_34857 = state_33888__$1;
(statearr_33911_34857[(1)] = (8));

} else {
var statearr_33912_34858 = state_33888__$1;
(statearr_33912_34858[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33889 === (14))){
var inst_33881 = (state_33888[(2)]);
var inst_33882 = cljs.core.async.close_BANG_(out);
var state_33888__$1 = (function (){var statearr_33914 = state_33888;
(statearr_33914[(13)] = inst_33881);

return statearr_33914;
})();
var statearr_33915_34862 = state_33888__$1;
(statearr_33915_34862[(2)] = inst_33882);

(statearr_33915_34862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33889 === (10))){
var inst_33872 = (state_33888[(2)]);
var state_33888__$1 = state_33888;
var statearr_33916_34863 = state_33888__$1;
(statearr_33916_34863[(2)] = inst_33872);

(statearr_33916_34863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33889 === (8))){
var inst_33861 = (state_33888[(11)]);
var inst_33852 = (state_33888[(7)]);
var tmp33913 = inst_33852;
var inst_33852__$1 = tmp33913;
var inst_33853 = inst_33861;
var state_33888__$1 = (function (){var statearr_33917 = state_33888;
(statearr_33917[(7)] = inst_33852__$1);

(statearr_33917[(8)] = inst_33853);

return statearr_33917;
})();
var statearr_33918_34864 = state_33888__$1;
(statearr_33918_34864[(2)] = null);

(statearr_33918_34864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_33920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33920[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_33920[(1)] = (1));

return statearr_33920;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_33888){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_33888);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e33922){var ex__26134__auto__ = e33922;
var statearr_33923_34871 = state_33888;
(statearr_33923_34871[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_33888[(4)]))){
var statearr_33924_34873 = state_33888;
(statearr_33924_34873[(1)] = cljs.core.first((state_33888[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34874 = state_33888;
state_33888 = G__34874;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_33888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_33888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_33925 = f__26216__auto__();
(statearr_33925[(6)] = c__26215__auto___34813);

return statearr_33925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__33930 = arguments.length;
switch (G__33930) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26215__auto___34881 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_33980){
var state_val_33981 = (state_33980[(1)]);
if((state_val_33981 === (7))){
var inst_33976 = (state_33980[(2)]);
var state_33980__$1 = state_33980;
var statearr_33982_34882 = state_33980__$1;
(statearr_33982_34882[(2)] = inst_33976);

(statearr_33982_34882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33981 === (1))){
var inst_33936 = [];
var inst_33937 = inst_33936;
var inst_33938 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_33980__$1 = (function (){var statearr_33983 = state_33980;
(statearr_33983[(7)] = inst_33938);

(statearr_33983[(8)] = inst_33937);

return statearr_33983;
})();
var statearr_33984_34884 = state_33980__$1;
(statearr_33984_34884[(2)] = null);

(statearr_33984_34884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33981 === (4))){
var inst_33941 = (state_33980[(9)]);
var inst_33941__$1 = (state_33980[(2)]);
var inst_33942 = (inst_33941__$1 == null);
var inst_33943 = cljs.core.not(inst_33942);
var state_33980__$1 = (function (){var statearr_33985 = state_33980;
(statearr_33985[(9)] = inst_33941__$1);

return statearr_33985;
})();
if(inst_33943){
var statearr_33986_34886 = state_33980__$1;
(statearr_33986_34886[(1)] = (5));

} else {
var statearr_33987_34887 = state_33980__$1;
(statearr_33987_34887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33981 === (15))){
var inst_33937 = (state_33980[(8)]);
var inst_33968 = cljs.core.vec(inst_33937);
var state_33980__$1 = state_33980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33980__$1,(18),out,inst_33968);
} else {
if((state_val_33981 === (13))){
var inst_33963 = (state_33980[(2)]);
var state_33980__$1 = state_33980;
var statearr_33989_34892 = state_33980__$1;
(statearr_33989_34892[(2)] = inst_33963);

(statearr_33989_34892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33981 === (6))){
var inst_33937 = (state_33980[(8)]);
var inst_33965 = inst_33937.length;
var inst_33966 = (inst_33965 > (0));
var state_33980__$1 = state_33980;
if(cljs.core.truth_(inst_33966)){
var statearr_33991_34895 = state_33980__$1;
(statearr_33991_34895[(1)] = (15));

} else {
var statearr_33992_34896 = state_33980__$1;
(statearr_33992_34896[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33981 === (17))){
var inst_33973 = (state_33980[(2)]);
var inst_33974 = cljs.core.async.close_BANG_(out);
var state_33980__$1 = (function (){var statearr_33993 = state_33980;
(statearr_33993[(10)] = inst_33973);

return statearr_33993;
})();
var statearr_33994_34897 = state_33980__$1;
(statearr_33994_34897[(2)] = inst_33974);

(statearr_33994_34897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33981 === (3))){
var inst_33978 = (state_33980[(2)]);
var state_33980__$1 = state_33980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33980__$1,inst_33978);
} else {
if((state_val_33981 === (12))){
var inst_33937 = (state_33980[(8)]);
var inst_33956 = cljs.core.vec(inst_33937);
var state_33980__$1 = state_33980;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33980__$1,(14),out,inst_33956);
} else {
if((state_val_33981 === (2))){
var state_33980__$1 = state_33980;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33980__$1,(4),ch);
} else {
if((state_val_33981 === (11))){
var inst_33941 = (state_33980[(9)]);
var inst_33937 = (state_33980[(8)]);
var inst_33945 = (state_33980[(11)]);
var inst_33953 = inst_33937.push(inst_33941);
var tmp33995 = inst_33937;
var inst_33937__$1 = tmp33995;
var inst_33938 = inst_33945;
var state_33980__$1 = (function (){var statearr_33997 = state_33980;
(statearr_33997[(7)] = inst_33938);

(statearr_33997[(8)] = inst_33937__$1);

(statearr_33997[(12)] = inst_33953);

return statearr_33997;
})();
var statearr_33998_34903 = state_33980__$1;
(statearr_33998_34903[(2)] = null);

(statearr_33998_34903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33981 === (9))){
var inst_33938 = (state_33980[(7)]);
var inst_33949 = cljs.core.keyword_identical_QMARK_(inst_33938,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_33980__$1 = state_33980;
var statearr_33999_34906 = state_33980__$1;
(statearr_33999_34906[(2)] = inst_33949);

(statearr_33999_34906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33981 === (5))){
var inst_33938 = (state_33980[(7)]);
var inst_33941 = (state_33980[(9)]);
var inst_33946 = (state_33980[(13)]);
var inst_33945 = (state_33980[(11)]);
var inst_33945__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_33941) : f.call(null,inst_33941));
var inst_33946__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33945__$1,inst_33938);
var state_33980__$1 = (function (){var statearr_34000 = state_33980;
(statearr_34000[(13)] = inst_33946__$1);

(statearr_34000[(11)] = inst_33945__$1);

return statearr_34000;
})();
if(inst_33946__$1){
var statearr_34001_34907 = state_33980__$1;
(statearr_34001_34907[(1)] = (8));

} else {
var statearr_34002_34908 = state_33980__$1;
(statearr_34002_34908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33981 === (14))){
var inst_33941 = (state_33980[(9)]);
var inst_33945 = (state_33980[(11)]);
var inst_33958 = (state_33980[(2)]);
var inst_33959 = [];
var inst_33960 = inst_33959.push(inst_33941);
var inst_33937 = inst_33959;
var inst_33938 = inst_33945;
var state_33980__$1 = (function (){var statearr_34003 = state_33980;
(statearr_34003[(14)] = inst_33960);

(statearr_34003[(7)] = inst_33938);

(statearr_34003[(15)] = inst_33958);

(statearr_34003[(8)] = inst_33937);

return statearr_34003;
})();
var statearr_34004_34912 = state_33980__$1;
(statearr_34004_34912[(2)] = null);

(statearr_34004_34912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33981 === (16))){
var state_33980__$1 = state_33980;
var statearr_34005_34916 = state_33980__$1;
(statearr_34005_34916[(2)] = null);

(statearr_34005_34916[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33981 === (10))){
var inst_33951 = (state_33980[(2)]);
var state_33980__$1 = state_33980;
if(cljs.core.truth_(inst_33951)){
var statearr_34006_34917 = state_33980__$1;
(statearr_34006_34917[(1)] = (11));

} else {
var statearr_34007_34918 = state_33980__$1;
(statearr_34007_34918[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33981 === (18))){
var inst_33970 = (state_33980[(2)]);
var state_33980__$1 = state_33980;
var statearr_34008_34920 = state_33980__$1;
(statearr_34008_34920[(2)] = inst_33970);

(statearr_34008_34920[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33981 === (8))){
var inst_33946 = (state_33980[(13)]);
var state_33980__$1 = state_33980;
var statearr_34009_34921 = state_33980__$1;
(statearr_34009_34921[(2)] = inst_33946);

(statearr_34009_34921[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26131__auto__ = null;
var cljs$core$async$state_machine__26131__auto____0 = (function (){
var statearr_34013 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34013[(0)] = cljs$core$async$state_machine__26131__auto__);

(statearr_34013[(1)] = (1));

return statearr_34013;
});
var cljs$core$async$state_machine__26131__auto____1 = (function (state_33980){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_33980);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e34014){var ex__26134__auto__ = e34014;
var statearr_34015_34924 = state_33980;
(statearr_34015_34924[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_33980[(4)]))){
var statearr_34016_34925 = state_33980;
(statearr_34016_34925[(1)] = cljs.core.first((state_33980[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34926 = state_33980;
state_33980 = G__34926;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs$core$async$state_machine__26131__auto__ = function(state_33980){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26131__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26131__auto____1.call(this,state_33980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26131__auto____0;
cljs$core$async$state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26131__auto____1;
return cljs$core$async$state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_34017 = f__26216__auto__();
(statearr_34017[(6)] = c__26215__auto___34881);

return statearr_34017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
