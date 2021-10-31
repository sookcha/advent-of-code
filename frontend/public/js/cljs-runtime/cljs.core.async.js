goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__46725 = arguments.length;
switch (G__46725) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46726 = (function (f,blockable,meta46727){
this.f = f;
this.blockable = blockable;
this.meta46727 = meta46727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46728,meta46727__$1){
var self__ = this;
var _46728__$1 = this;
return (new cljs.core.async.t_cljs$core$async46726(self__.f,self__.blockable,meta46727__$1));
}));

(cljs.core.async.t_cljs$core$async46726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46728){
var self__ = this;
var _46728__$1 = this;
return self__.meta46727;
}));

(cljs.core.async.t_cljs$core$async46726.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46726.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46726.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46726.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46727","meta46727",330453559,null)], null);
}));

(cljs.core.async.t_cljs$core$async46726.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46726");

(cljs.core.async.t_cljs$core$async46726.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async46726");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46726.
 */
cljs.core.async.__GT_t_cljs$core$async46726 = (function cljs$core$async$__GT_t_cljs$core$async46726(f__$1,blockable__$1,meta46727){
return (new cljs.core.async.t_cljs$core$async46726(f__$1,blockable__$1,meta46727));
});

}

return (new cljs.core.async.t_cljs$core$async46726(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46731 = arguments.length;
switch (G__46731) {
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
var G__46733 = arguments.length;
switch (G__46733) {
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
var G__46737 = arguments.length;
switch (G__46737) {
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
var val_49244 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49244) : fn1.call(null,val_49244));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_49244) : fn1.call(null,val_49244));
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
var G__46741 = arguments.length;
switch (G__46741) {
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
var n__4695__auto___49247 = n;
var x_49248 = (0);
while(true){
if((x_49248 < n__4695__auto___49247)){
(a[x_49248] = x_49248);

var G__49249 = (x_49248 + (1));
x_49248 = G__49249;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46745 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46745 = (function (flag,meta46746){
this.flag = flag;
this.meta46746 = meta46746;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46747,meta46746__$1){
var self__ = this;
var _46747__$1 = this;
return (new cljs.core.async.t_cljs$core$async46745(self__.flag,meta46746__$1));
}));

(cljs.core.async.t_cljs$core$async46745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46747){
var self__ = this;
var _46747__$1 = this;
return self__.meta46746;
}));

(cljs.core.async.t_cljs$core$async46745.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46745.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46745.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46745.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46745.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46746","meta46746",-2099601215,null)], null);
}));

(cljs.core.async.t_cljs$core$async46745.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46745.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46745");

(cljs.core.async.t_cljs$core$async46745.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async46745");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46745.
 */
cljs.core.async.__GT_t_cljs$core$async46745 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46745(flag__$1,meta46746){
return (new cljs.core.async.t_cljs$core$async46745(flag__$1,meta46746));
});

}

return (new cljs.core.async.t_cljs$core$async46745(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46766 = (function (flag,cb,meta46767){
this.flag = flag;
this.cb = cb;
this.meta46767 = meta46767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46768,meta46767__$1){
var self__ = this;
var _46768__$1 = this;
return (new cljs.core.async.t_cljs$core$async46766(self__.flag,self__.cb,meta46767__$1));
}));

(cljs.core.async.t_cljs$core$async46766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46768){
var self__ = this;
var _46768__$1 = this;
return self__.meta46767;
}));

(cljs.core.async.t_cljs$core$async46766.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46766.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46766.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46766.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46767","meta46767",-1876773569,null)], null);
}));

(cljs.core.async.t_cljs$core$async46766.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46766");

(cljs.core.async.t_cljs$core$async46766.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async46766");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46766.
 */
cljs.core.async.__GT_t_cljs$core$async46766 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46766(flag__$1,cb__$1,meta46767){
return (new cljs.core.async.t_cljs$core$async46766(flag__$1,cb__$1,meta46767));
});

}

return (new cljs.core.async.t_cljs$core$async46766(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46779_SHARP_){
var G__46787 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46779_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46787) : fret.call(null,G__46787));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46780_SHARP_){
var G__46788 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46780_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46788) : fret.call(null,G__46788));
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
var G__49252 = (i + (1));
i = G__49252;
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
var len__4818__auto___49254 = arguments.length;
var i__4819__auto___49255 = (0);
while(true){
if((i__4819__auto___49255 < len__4818__auto___49254)){
args__4824__auto__.push((arguments[i__4819__auto___49255]));

var G__49256 = (i__4819__auto___49255 + (1));
i__4819__auto___49255 = G__49256;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46798){
var map__46799 = p__46798;
var map__46799__$1 = cljs.core.__destructure_map(map__46799);
var opts = map__46799__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46794){
var G__46795 = cljs.core.first(seq46794);
var seq46794__$1 = cljs.core.next(seq46794);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46795,seq46794__$1);
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
var G__46804 = arguments.length;
switch (G__46804) {
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
var c__46656__auto___49259 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_46839){
var state_val_46840 = (state_46839[(1)]);
if((state_val_46840 === (7))){
var inst_46835 = (state_46839[(2)]);
var state_46839__$1 = state_46839;
var statearr_46850_49260 = state_46839__$1;
(statearr_46850_49260[(2)] = inst_46835);

(statearr_46850_49260[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46840 === (1))){
var state_46839__$1 = state_46839;
var statearr_46851_49261 = state_46839__$1;
(statearr_46851_49261[(2)] = null);

(statearr_46851_49261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46840 === (4))){
var inst_46818 = (state_46839[(7)]);
var inst_46818__$1 = (state_46839[(2)]);
var inst_46819 = (inst_46818__$1 == null);
var state_46839__$1 = (function (){var statearr_46855 = state_46839;
(statearr_46855[(7)] = inst_46818__$1);

return statearr_46855;
})();
if(cljs.core.truth_(inst_46819)){
var statearr_46859_49264 = state_46839__$1;
(statearr_46859_49264[(1)] = (5));

} else {
var statearr_46860_49265 = state_46839__$1;
(statearr_46860_49265[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46840 === (13))){
var state_46839__$1 = state_46839;
var statearr_46864_49266 = state_46839__$1;
(statearr_46864_49266[(2)] = null);

(statearr_46864_49266[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46840 === (6))){
var inst_46818 = (state_46839[(7)]);
var state_46839__$1 = state_46839;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46839__$1,(11),to,inst_46818);
} else {
if((state_val_46840 === (3))){
var inst_46837 = (state_46839[(2)]);
var state_46839__$1 = state_46839;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46839__$1,inst_46837);
} else {
if((state_val_46840 === (12))){
var state_46839__$1 = state_46839;
var statearr_46868_49267 = state_46839__$1;
(statearr_46868_49267[(2)] = null);

(statearr_46868_49267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46840 === (2))){
var state_46839__$1 = state_46839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46839__$1,(4),from);
} else {
if((state_val_46840 === (11))){
var inst_46828 = (state_46839[(2)]);
var state_46839__$1 = state_46839;
if(cljs.core.truth_(inst_46828)){
var statearr_46872_49268 = state_46839__$1;
(statearr_46872_49268[(1)] = (12));

} else {
var statearr_46873_49269 = state_46839__$1;
(statearr_46873_49269[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46840 === (9))){
var state_46839__$1 = state_46839;
var statearr_46874_49270 = state_46839__$1;
(statearr_46874_49270[(2)] = null);

(statearr_46874_49270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46840 === (5))){
var state_46839__$1 = state_46839;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46875_49271 = state_46839__$1;
(statearr_46875_49271[(1)] = (8));

} else {
var statearr_46876_49272 = state_46839__$1;
(statearr_46876_49272[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46840 === (14))){
var inst_46833 = (state_46839[(2)]);
var state_46839__$1 = state_46839;
var statearr_46878_49273 = state_46839__$1;
(statearr_46878_49273[(2)] = inst_46833);

(statearr_46878_49273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46840 === (10))){
var inst_46825 = (state_46839[(2)]);
var state_46839__$1 = state_46839;
var statearr_46882_49274 = state_46839__$1;
(statearr_46882_49274[(2)] = inst_46825);

(statearr_46882_49274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46840 === (8))){
var inst_46822 = cljs.core.async.close_BANG_(to);
var state_46839__$1 = state_46839;
var statearr_46884_49275 = state_46839__$1;
(statearr_46884_49275[(2)] = inst_46822);

(statearr_46884_49275[(1)] = (10));


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
var cljs$core$async$state_machine__46502__auto__ = null;
var cljs$core$async$state_machine__46502__auto____0 = (function (){
var statearr_46886 = [null,null,null,null,null,null,null,null];
(statearr_46886[(0)] = cljs$core$async$state_machine__46502__auto__);

(statearr_46886[(1)] = (1));

return statearr_46886;
});
var cljs$core$async$state_machine__46502__auto____1 = (function (state_46839){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_46839);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e46891){var ex__46505__auto__ = e46891;
var statearr_46892_49276 = state_46839;
(statearr_46892_49276[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_46839[(4)]))){
var statearr_46893_49277 = state_46839;
(statearr_46893_49277[(1)] = cljs.core.first((state_46839[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49278 = state_46839;
state_46839 = G__49278;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$state_machine__46502__auto__ = function(state_46839){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46502__auto____1.call(this,state_46839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46502__auto____0;
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46502__auto____1;
return cljs$core$async$state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_46894 = f__46657__auto__();
(statearr_46894[(6)] = c__46656__auto___49259);

return statearr_46894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
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
var process = (function (p__46902){
var vec__46904 = p__46902;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46904,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46904,(1),null);
var job = vec__46904;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46656__auto___49279 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_46911){
var state_val_46912 = (state_46911[(1)]);
if((state_val_46912 === (1))){
var state_46911__$1 = state_46911;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46911__$1,(2),res,v);
} else {
if((state_val_46912 === (2))){
var inst_46908 = (state_46911[(2)]);
var inst_46909 = cljs.core.async.close_BANG_(res);
var state_46911__$1 = (function (){var statearr_46913 = state_46911;
(statearr_46913[(7)] = inst_46908);

return statearr_46913;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46911__$1,inst_46909);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____0 = (function (){
var statearr_46914 = [null,null,null,null,null,null,null,null];
(statearr_46914[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__);

(statearr_46914[(1)] = (1));

return statearr_46914;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____1 = (function (state_46911){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_46911);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e46915){var ex__46505__auto__ = e46915;
var statearr_46916_49280 = state_46911;
(statearr_46916_49280[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_46911[(4)]))){
var statearr_46917_49281 = state_46911;
(statearr_46917_49281[(1)] = cljs.core.first((state_46911[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49282 = state_46911;
state_46911 = G__49282;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__ = function(state_46911){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____1.call(this,state_46911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_46918 = f__46657__auto__();
(statearr_46918[(6)] = c__46656__auto___49279);

return statearr_46918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46919){
var vec__46920 = p__46919;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46920,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46920,(1),null);
var job = vec__46920;
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
var n__4695__auto___49283 = n;
var __49284 = (0);
while(true){
if((__49284 < n__4695__auto___49283)){
var G__46923_49285 = type;
var G__46923_49286__$1 = (((G__46923_49285 instanceof cljs.core.Keyword))?G__46923_49285.fqn:null);
switch (G__46923_49286__$1) {
case "compute":
var c__46656__auto___49288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49284,c__46656__auto___49288,G__46923_49285,G__46923_49286__$1,n__4695__auto___49283,jobs,results,process,async){
return (function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = ((function (__49284,c__46656__auto___49288,G__46923_49285,G__46923_49286__$1,n__4695__auto___49283,jobs,results,process,async){
return (function (state_46938){
var state_val_46939 = (state_46938[(1)]);
if((state_val_46939 === (1))){
var state_46938__$1 = state_46938;
var statearr_46946_49289 = state_46938__$1;
(statearr_46946_49289[(2)] = null);

(statearr_46946_49289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (2))){
var state_46938__$1 = state_46938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46938__$1,(4),jobs);
} else {
if((state_val_46939 === (3))){
var inst_46936 = (state_46938[(2)]);
var state_46938__$1 = state_46938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46938__$1,inst_46936);
} else {
if((state_val_46939 === (4))){
var inst_46926 = (state_46938[(2)]);
var inst_46929 = process(inst_46926);
var state_46938__$1 = state_46938;
if(cljs.core.truth_(inst_46929)){
var statearr_46960_49290 = state_46938__$1;
(statearr_46960_49290[(1)] = (5));

} else {
var statearr_46961_49291 = state_46938__$1;
(statearr_46961_49291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (5))){
var state_46938__$1 = state_46938;
var statearr_46962_49292 = state_46938__$1;
(statearr_46962_49292[(2)] = null);

(statearr_46962_49292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (6))){
var state_46938__$1 = state_46938;
var statearr_46964_49293 = state_46938__$1;
(statearr_46964_49293[(2)] = null);

(statearr_46964_49293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46939 === (7))){
var inst_46934 = (state_46938[(2)]);
var state_46938__$1 = state_46938;
var statearr_46965_49294 = state_46938__$1;
(statearr_46965_49294[(2)] = inst_46934);

(statearr_46965_49294[(1)] = (3));


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
});})(__49284,c__46656__auto___49288,G__46923_49285,G__46923_49286__$1,n__4695__auto___49283,jobs,results,process,async))
;
return ((function (__49284,switch__46501__auto__,c__46656__auto___49288,G__46923_49285,G__46923_49286__$1,n__4695__auto___49283,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____0 = (function (){
var statearr_46971 = [null,null,null,null,null,null,null];
(statearr_46971[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__);

(statearr_46971[(1)] = (1));

return statearr_46971;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____1 = (function (state_46938){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_46938);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e46972){var ex__46505__auto__ = e46972;
var statearr_46973_49295 = state_46938;
(statearr_46973_49295[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_46938[(4)]))){
var statearr_46974_49296 = state_46938;
(statearr_46974_49296[(1)] = cljs.core.first((state_46938[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49298 = state_46938;
state_46938 = G__49298;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__ = function(state_46938){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____1.call(this,state_46938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__;
})()
;})(__49284,switch__46501__auto__,c__46656__auto___49288,G__46923_49285,G__46923_49286__$1,n__4695__auto___49283,jobs,results,process,async))
})();
var state__46658__auto__ = (function (){var statearr_46976 = f__46657__auto__();
(statearr_46976[(6)] = c__46656__auto___49288);

return statearr_46976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
});})(__49284,c__46656__auto___49288,G__46923_49285,G__46923_49286__$1,n__4695__auto___49283,jobs,results,process,async))
);


break;
case "async":
var c__46656__auto___49299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__49284,c__46656__auto___49299,G__46923_49285,G__46923_49286__$1,n__4695__auto___49283,jobs,results,process,async){
return (function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = ((function (__49284,c__46656__auto___49299,G__46923_49285,G__46923_49286__$1,n__4695__auto___49283,jobs,results,process,async){
return (function (state_46989){
var state_val_46990 = (state_46989[(1)]);
if((state_val_46990 === (1))){
var state_46989__$1 = state_46989;
var statearr_46991_49307 = state_46989__$1;
(statearr_46991_49307[(2)] = null);

(statearr_46991_49307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46990 === (2))){
var state_46989__$1 = state_46989;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46989__$1,(4),jobs);
} else {
if((state_val_46990 === (3))){
var inst_46987 = (state_46989[(2)]);
var state_46989__$1 = state_46989;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46989__$1,inst_46987);
} else {
if((state_val_46990 === (4))){
var inst_46979 = (state_46989[(2)]);
var inst_46980 = async(inst_46979);
var state_46989__$1 = state_46989;
if(cljs.core.truth_(inst_46980)){
var statearr_46992_49309 = state_46989__$1;
(statearr_46992_49309[(1)] = (5));

} else {
var statearr_46993_49311 = state_46989__$1;
(statearr_46993_49311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46990 === (5))){
var state_46989__$1 = state_46989;
var statearr_46994_49312 = state_46989__$1;
(statearr_46994_49312[(2)] = null);

(statearr_46994_49312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46990 === (6))){
var state_46989__$1 = state_46989;
var statearr_46995_49314 = state_46989__$1;
(statearr_46995_49314[(2)] = null);

(statearr_46995_49314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46990 === (7))){
var inst_46985 = (state_46989[(2)]);
var state_46989__$1 = state_46989;
var statearr_46996_49315 = state_46989__$1;
(statearr_46996_49315[(2)] = inst_46985);

(statearr_46996_49315[(1)] = (3));


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
});})(__49284,c__46656__auto___49299,G__46923_49285,G__46923_49286__$1,n__4695__auto___49283,jobs,results,process,async))
;
return ((function (__49284,switch__46501__auto__,c__46656__auto___49299,G__46923_49285,G__46923_49286__$1,n__4695__auto___49283,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____0 = (function (){
var statearr_46997 = [null,null,null,null,null,null,null];
(statearr_46997[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__);

(statearr_46997[(1)] = (1));

return statearr_46997;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____1 = (function (state_46989){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_46989);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e46998){var ex__46505__auto__ = e46998;
var statearr_47001_49325 = state_46989;
(statearr_47001_49325[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_46989[(4)]))){
var statearr_47002_49326 = state_46989;
(statearr_47002_49326[(1)] = cljs.core.first((state_46989[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49327 = state_46989;
state_46989 = G__49327;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__ = function(state_46989){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____1.call(this,state_46989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__;
})()
;})(__49284,switch__46501__auto__,c__46656__auto___49299,G__46923_49285,G__46923_49286__$1,n__4695__auto___49283,jobs,results,process,async))
})();
var state__46658__auto__ = (function (){var statearr_47009 = f__46657__auto__();
(statearr_47009[(6)] = c__46656__auto___49299);

return statearr_47009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
});})(__49284,c__46656__auto___49299,G__46923_49285,G__46923_49286__$1,n__4695__auto___49283,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46923_49286__$1)].join('')));

}

var G__49328 = (__49284 + (1));
__49284 = G__49328;
continue;
} else {
}
break;
}

var c__46656__auto___49329 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_47054){
var state_val_47055 = (state_47054[(1)]);
if((state_val_47055 === (7))){
var inst_47050 = (state_47054[(2)]);
var state_47054__$1 = state_47054;
var statearr_47056_49332 = state_47054__$1;
(statearr_47056_49332[(2)] = inst_47050);

(statearr_47056_49332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47055 === (1))){
var state_47054__$1 = state_47054;
var statearr_47057_49336 = state_47054__$1;
(statearr_47057_49336[(2)] = null);

(statearr_47057_49336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47055 === (4))){
var inst_47035 = (state_47054[(7)]);
var inst_47035__$1 = (state_47054[(2)]);
var inst_47036 = (inst_47035__$1 == null);
var state_47054__$1 = (function (){var statearr_47062 = state_47054;
(statearr_47062[(7)] = inst_47035__$1);

return statearr_47062;
})();
if(cljs.core.truth_(inst_47036)){
var statearr_47080_49338 = state_47054__$1;
(statearr_47080_49338[(1)] = (5));

} else {
var statearr_47085_49339 = state_47054__$1;
(statearr_47085_49339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47055 === (6))){
var inst_47035 = (state_47054[(7)]);
var inst_47040 = (state_47054[(8)]);
var inst_47040__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47041 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47042 = [inst_47035,inst_47040__$1];
var inst_47043 = (new cljs.core.PersistentVector(null,2,(5),inst_47041,inst_47042,null));
var state_47054__$1 = (function (){var statearr_47091 = state_47054;
(statearr_47091[(8)] = inst_47040__$1);

return statearr_47091;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47054__$1,(8),jobs,inst_47043);
} else {
if((state_val_47055 === (3))){
var inst_47052 = (state_47054[(2)]);
var state_47054__$1 = state_47054;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47054__$1,inst_47052);
} else {
if((state_val_47055 === (2))){
var state_47054__$1 = state_47054;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47054__$1,(4),from);
} else {
if((state_val_47055 === (9))){
var inst_47047 = (state_47054[(2)]);
var state_47054__$1 = (function (){var statearr_47104 = state_47054;
(statearr_47104[(9)] = inst_47047);

return statearr_47104;
})();
var statearr_47109_49347 = state_47054__$1;
(statearr_47109_49347[(2)] = null);

(statearr_47109_49347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47055 === (5))){
var inst_47038 = cljs.core.async.close_BANG_(jobs);
var state_47054__$1 = state_47054;
var statearr_47110_49348 = state_47054__$1;
(statearr_47110_49348[(2)] = inst_47038);

(statearr_47110_49348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47055 === (8))){
var inst_47040 = (state_47054[(8)]);
var inst_47045 = (state_47054[(2)]);
var state_47054__$1 = (function (){var statearr_47111 = state_47054;
(statearr_47111[(10)] = inst_47045);

return statearr_47111;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47054__$1,(9),results,inst_47040);
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
var cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____0 = (function (){
var statearr_47112 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47112[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__);

(statearr_47112[(1)] = (1));

return statearr_47112;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____1 = (function (state_47054){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_47054);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e47117){var ex__46505__auto__ = e47117;
var statearr_47118_49352 = state_47054;
(statearr_47118_49352[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_47054[(4)]))){
var statearr_47124_49353 = state_47054;
(statearr_47124_49353[(1)] = cljs.core.first((state_47054[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49354 = state_47054;
state_47054 = G__49354;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__ = function(state_47054){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____1.call(this,state_47054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_47137 = f__46657__auto__();
(statearr_47137[(6)] = c__46656__auto___49329);

return statearr_47137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
}));


var c__46656__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_47177){
var state_val_47178 = (state_47177[(1)]);
if((state_val_47178 === (7))){
var inst_47173 = (state_47177[(2)]);
var state_47177__$1 = state_47177;
var statearr_47180_49355 = state_47177__$1;
(statearr_47180_49355[(2)] = inst_47173);

(statearr_47180_49355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47178 === (20))){
var state_47177__$1 = state_47177;
var statearr_47181_49358 = state_47177__$1;
(statearr_47181_49358[(2)] = null);

(statearr_47181_49358[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47178 === (1))){
var state_47177__$1 = state_47177;
var statearr_47182_49359 = state_47177__$1;
(statearr_47182_49359[(2)] = null);

(statearr_47182_49359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47178 === (4))){
var inst_47141 = (state_47177[(7)]);
var inst_47141__$1 = (state_47177[(2)]);
var inst_47142 = (inst_47141__$1 == null);
var state_47177__$1 = (function (){var statearr_47183 = state_47177;
(statearr_47183[(7)] = inst_47141__$1);

return statearr_47183;
})();
if(cljs.core.truth_(inst_47142)){
var statearr_47184_49360 = state_47177__$1;
(statearr_47184_49360[(1)] = (5));

} else {
var statearr_47185_49364 = state_47177__$1;
(statearr_47185_49364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47178 === (15))){
var inst_47154 = (state_47177[(8)]);
var state_47177__$1 = state_47177;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47177__$1,(18),to,inst_47154);
} else {
if((state_val_47178 === (21))){
var inst_47168 = (state_47177[(2)]);
var state_47177__$1 = state_47177;
var statearr_47186_49368 = state_47177__$1;
(statearr_47186_49368[(2)] = inst_47168);

(statearr_47186_49368[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47178 === (13))){
var inst_47170 = (state_47177[(2)]);
var state_47177__$1 = (function (){var statearr_47189 = state_47177;
(statearr_47189[(9)] = inst_47170);

return statearr_47189;
})();
var statearr_47190_49370 = state_47177__$1;
(statearr_47190_49370[(2)] = null);

(statearr_47190_49370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47178 === (6))){
var inst_47141 = (state_47177[(7)]);
var state_47177__$1 = state_47177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47177__$1,(11),inst_47141);
} else {
if((state_val_47178 === (17))){
var inst_47163 = (state_47177[(2)]);
var state_47177__$1 = state_47177;
if(cljs.core.truth_(inst_47163)){
var statearr_47192_49371 = state_47177__$1;
(statearr_47192_49371[(1)] = (19));

} else {
var statearr_47193_49372 = state_47177__$1;
(statearr_47193_49372[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47178 === (3))){
var inst_47175 = (state_47177[(2)]);
var state_47177__$1 = state_47177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47177__$1,inst_47175);
} else {
if((state_val_47178 === (12))){
var inst_47151 = (state_47177[(10)]);
var state_47177__$1 = state_47177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47177__$1,(14),inst_47151);
} else {
if((state_val_47178 === (2))){
var state_47177__$1 = state_47177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47177__$1,(4),results);
} else {
if((state_val_47178 === (19))){
var state_47177__$1 = state_47177;
var statearr_47194_49373 = state_47177__$1;
(statearr_47194_49373[(2)] = null);

(statearr_47194_49373[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47178 === (11))){
var inst_47151 = (state_47177[(2)]);
var state_47177__$1 = (function (){var statearr_47196 = state_47177;
(statearr_47196[(10)] = inst_47151);

return statearr_47196;
})();
var statearr_47197_49374 = state_47177__$1;
(statearr_47197_49374[(2)] = null);

(statearr_47197_49374[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47178 === (9))){
var state_47177__$1 = state_47177;
var statearr_47199_49375 = state_47177__$1;
(statearr_47199_49375[(2)] = null);

(statearr_47199_49375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47178 === (5))){
var state_47177__$1 = state_47177;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47200_49376 = state_47177__$1;
(statearr_47200_49376[(1)] = (8));

} else {
var statearr_47201_49377 = state_47177__$1;
(statearr_47201_49377[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47178 === (14))){
var inst_47157 = (state_47177[(11)]);
var inst_47154 = (state_47177[(8)]);
var inst_47154__$1 = (state_47177[(2)]);
var inst_47156 = (inst_47154__$1 == null);
var inst_47157__$1 = cljs.core.not(inst_47156);
var state_47177__$1 = (function (){var statearr_47205 = state_47177;
(statearr_47205[(11)] = inst_47157__$1);

(statearr_47205[(8)] = inst_47154__$1);

return statearr_47205;
})();
if(inst_47157__$1){
var statearr_47206_49378 = state_47177__$1;
(statearr_47206_49378[(1)] = (15));

} else {
var statearr_47207_49379 = state_47177__$1;
(statearr_47207_49379[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47178 === (16))){
var inst_47157 = (state_47177[(11)]);
var state_47177__$1 = state_47177;
var statearr_47208_49380 = state_47177__$1;
(statearr_47208_49380[(2)] = inst_47157);

(statearr_47208_49380[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47178 === (10))){
var inst_47148 = (state_47177[(2)]);
var state_47177__$1 = state_47177;
var statearr_47209_49381 = state_47177__$1;
(statearr_47209_49381[(2)] = inst_47148);

(statearr_47209_49381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47178 === (18))){
var inst_47160 = (state_47177[(2)]);
var state_47177__$1 = state_47177;
var statearr_47210_49382 = state_47177__$1;
(statearr_47210_49382[(2)] = inst_47160);

(statearr_47210_49382[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47178 === (8))){
var inst_47145 = cljs.core.async.close_BANG_(to);
var state_47177__$1 = state_47177;
var statearr_47211_49384 = state_47177__$1;
(statearr_47211_49384[(2)] = inst_47145);

(statearr_47211_49384[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____0 = (function (){
var statearr_47215 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__);

(statearr_47215[(1)] = (1));

return statearr_47215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____1 = (function (state_47177){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_47177);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e47216){var ex__46505__auto__ = e47216;
var statearr_47217_49385 = state_47177;
(statearr_47217_49385[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_47177[(4)]))){
var statearr_47218_49386 = state_47177;
(statearr_47218_49386[(1)] = cljs.core.first((state_47177[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49387 = state_47177;
state_47177 = G__49387;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__ = function(state_47177){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____1.call(this,state_47177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46502__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_47223 = f__46657__auto__();
(statearr_47223[(6)] = c__46656__auto__);

return statearr_47223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
}));

return c__46656__auto__;
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
var G__47233 = arguments.length;
switch (G__47233) {
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
var G__47251 = arguments.length;
switch (G__47251) {
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
var G__47263 = arguments.length;
switch (G__47263) {
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
var c__46656__auto___49397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_47293){
var state_val_47294 = (state_47293[(1)]);
if((state_val_47294 === (7))){
var inst_47289 = (state_47293[(2)]);
var state_47293__$1 = state_47293;
var statearr_47297_49398 = state_47293__$1;
(statearr_47297_49398[(2)] = inst_47289);

(statearr_47297_49398[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (1))){
var state_47293__$1 = state_47293;
var statearr_47298_49399 = state_47293__$1;
(statearr_47298_49399[(2)] = null);

(statearr_47298_49399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (4))){
var inst_47270 = (state_47293[(7)]);
var inst_47270__$1 = (state_47293[(2)]);
var inst_47271 = (inst_47270__$1 == null);
var state_47293__$1 = (function (){var statearr_47299 = state_47293;
(statearr_47299[(7)] = inst_47270__$1);

return statearr_47299;
})();
if(cljs.core.truth_(inst_47271)){
var statearr_47300_49400 = state_47293__$1;
(statearr_47300_49400[(1)] = (5));

} else {
var statearr_47301_49401 = state_47293__$1;
(statearr_47301_49401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (13))){
var state_47293__$1 = state_47293;
var statearr_47302_49403 = state_47293__$1;
(statearr_47302_49403[(2)] = null);

(statearr_47302_49403[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (6))){
var inst_47270 = (state_47293[(7)]);
var inst_47276 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47270) : p.call(null,inst_47270));
var state_47293__$1 = state_47293;
if(cljs.core.truth_(inst_47276)){
var statearr_47303_49404 = state_47293__$1;
(statearr_47303_49404[(1)] = (9));

} else {
var statearr_47306_49405 = state_47293__$1;
(statearr_47306_49405[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (3))){
var inst_47291 = (state_47293[(2)]);
var state_47293__$1 = state_47293;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47293__$1,inst_47291);
} else {
if((state_val_47294 === (12))){
var state_47293__$1 = state_47293;
var statearr_47309_49406 = state_47293__$1;
(statearr_47309_49406[(2)] = null);

(statearr_47309_49406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (2))){
var state_47293__$1 = state_47293;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47293__$1,(4),ch);
} else {
if((state_val_47294 === (11))){
var inst_47270 = (state_47293[(7)]);
var inst_47280 = (state_47293[(2)]);
var state_47293__$1 = state_47293;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47293__$1,(8),inst_47280,inst_47270);
} else {
if((state_val_47294 === (9))){
var state_47293__$1 = state_47293;
var statearr_47311_49409 = state_47293__$1;
(statearr_47311_49409[(2)] = tc);

(statearr_47311_49409[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (5))){
var inst_47273 = cljs.core.async.close_BANG_(tc);
var inst_47274 = cljs.core.async.close_BANG_(fc);
var state_47293__$1 = (function (){var statearr_47312 = state_47293;
(statearr_47312[(8)] = inst_47273);

return statearr_47312;
})();
var statearr_47315_49410 = state_47293__$1;
(statearr_47315_49410[(2)] = inst_47274);

(statearr_47315_49410[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (14))){
var inst_47287 = (state_47293[(2)]);
var state_47293__$1 = state_47293;
var statearr_47323_49411 = state_47293__$1;
(statearr_47323_49411[(2)] = inst_47287);

(statearr_47323_49411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (10))){
var state_47293__$1 = state_47293;
var statearr_47324_49412 = state_47293__$1;
(statearr_47324_49412[(2)] = fc);

(statearr_47324_49412[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47294 === (8))){
var inst_47282 = (state_47293[(2)]);
var state_47293__$1 = state_47293;
if(cljs.core.truth_(inst_47282)){
var statearr_47325_49413 = state_47293__$1;
(statearr_47325_49413[(1)] = (12));

} else {
var statearr_47326_49414 = state_47293__$1;
(statearr_47326_49414[(1)] = (13));

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
var cljs$core$async$state_machine__46502__auto__ = null;
var cljs$core$async$state_machine__46502__auto____0 = (function (){
var statearr_47327 = [null,null,null,null,null,null,null,null,null];
(statearr_47327[(0)] = cljs$core$async$state_machine__46502__auto__);

(statearr_47327[(1)] = (1));

return statearr_47327;
});
var cljs$core$async$state_machine__46502__auto____1 = (function (state_47293){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_47293);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e47328){var ex__46505__auto__ = e47328;
var statearr_47329_49421 = state_47293;
(statearr_47329_49421[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_47293[(4)]))){
var statearr_47330_49422 = state_47293;
(statearr_47330_49422[(1)] = cljs.core.first((state_47293[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49423 = state_47293;
state_47293 = G__49423;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$state_machine__46502__auto__ = function(state_47293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46502__auto____1.call(this,state_47293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46502__auto____0;
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46502__auto____1;
return cljs$core$async$state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_47333 = f__46657__auto__();
(statearr_47333[(6)] = c__46656__auto___49397);

return statearr_47333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
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
var c__46656__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_47355){
var state_val_47356 = (state_47355[(1)]);
if((state_val_47356 === (7))){
var inst_47351 = (state_47355[(2)]);
var state_47355__$1 = state_47355;
var statearr_47357_49425 = state_47355__$1;
(statearr_47357_49425[(2)] = inst_47351);

(statearr_47357_49425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47356 === (1))){
var inst_47334 = init;
var inst_47335 = inst_47334;
var state_47355__$1 = (function (){var statearr_47358 = state_47355;
(statearr_47358[(7)] = inst_47335);

return statearr_47358;
})();
var statearr_47359_49426 = state_47355__$1;
(statearr_47359_49426[(2)] = null);

(statearr_47359_49426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47356 === (4))){
var inst_47338 = (state_47355[(8)]);
var inst_47338__$1 = (state_47355[(2)]);
var inst_47339 = (inst_47338__$1 == null);
var state_47355__$1 = (function (){var statearr_47362 = state_47355;
(statearr_47362[(8)] = inst_47338__$1);

return statearr_47362;
})();
if(cljs.core.truth_(inst_47339)){
var statearr_47363_49427 = state_47355__$1;
(statearr_47363_49427[(1)] = (5));

} else {
var statearr_47364_49428 = state_47355__$1;
(statearr_47364_49428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47356 === (6))){
var inst_47338 = (state_47355[(8)]);
var inst_47335 = (state_47355[(7)]);
var inst_47342 = (state_47355[(9)]);
var inst_47342__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47335,inst_47338) : f.call(null,inst_47335,inst_47338));
var inst_47343 = cljs.core.reduced_QMARK_(inst_47342__$1);
var state_47355__$1 = (function (){var statearr_47365 = state_47355;
(statearr_47365[(9)] = inst_47342__$1);

return statearr_47365;
})();
if(inst_47343){
var statearr_47367_49430 = state_47355__$1;
(statearr_47367_49430[(1)] = (8));

} else {
var statearr_47369_49431 = state_47355__$1;
(statearr_47369_49431[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47356 === (3))){
var inst_47353 = (state_47355[(2)]);
var state_47355__$1 = state_47355;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47355__$1,inst_47353);
} else {
if((state_val_47356 === (2))){
var state_47355__$1 = state_47355;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47355__$1,(4),ch);
} else {
if((state_val_47356 === (9))){
var inst_47342 = (state_47355[(9)]);
var inst_47335 = inst_47342;
var state_47355__$1 = (function (){var statearr_47374 = state_47355;
(statearr_47374[(7)] = inst_47335);

return statearr_47374;
})();
var statearr_47375_49432 = state_47355__$1;
(statearr_47375_49432[(2)] = null);

(statearr_47375_49432[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47356 === (5))){
var inst_47335 = (state_47355[(7)]);
var state_47355__$1 = state_47355;
var statearr_47383_49433 = state_47355__$1;
(statearr_47383_49433[(2)] = inst_47335);

(statearr_47383_49433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47356 === (10))){
var inst_47349 = (state_47355[(2)]);
var state_47355__$1 = state_47355;
var statearr_47384_49434 = state_47355__$1;
(statearr_47384_49434[(2)] = inst_47349);

(statearr_47384_49434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47356 === (8))){
var inst_47342 = (state_47355[(9)]);
var inst_47345 = cljs.core.deref(inst_47342);
var state_47355__$1 = state_47355;
var statearr_47385_49435 = state_47355__$1;
(statearr_47385_49435[(2)] = inst_47345);

(statearr_47385_49435[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__46502__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46502__auto____0 = (function (){
var statearr_47386 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47386[(0)] = cljs$core$async$reduce_$_state_machine__46502__auto__);

(statearr_47386[(1)] = (1));

return statearr_47386;
});
var cljs$core$async$reduce_$_state_machine__46502__auto____1 = (function (state_47355){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_47355);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e47387){var ex__46505__auto__ = e47387;
var statearr_47388_49436 = state_47355;
(statearr_47388_49436[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_47355[(4)]))){
var statearr_47390_49437 = state_47355;
(statearr_47390_49437[(1)] = cljs.core.first((state_47355[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49438 = state_47355;
state_47355 = G__49438;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46502__auto__ = function(state_47355){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46502__auto____1.call(this,state_47355);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46502__auto____0;
cljs$core$async$reduce_$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46502__auto____1;
return cljs$core$async$reduce_$_state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_47391 = f__46657__auto__();
(statearr_47391[(6)] = c__46656__auto__);

return statearr_47391;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
}));

return c__46656__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46656__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_47399){
var state_val_47400 = (state_47399[(1)]);
if((state_val_47400 === (1))){
var inst_47394 = cljs.core.async.reduce(f__$1,init,ch);
var state_47399__$1 = state_47399;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47399__$1,(2),inst_47394);
} else {
if((state_val_47400 === (2))){
var inst_47396 = (state_47399[(2)]);
var inst_47397 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47396) : f__$1.call(null,inst_47396));
var state_47399__$1 = state_47399;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47399__$1,inst_47397);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46502__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46502__auto____0 = (function (){
var statearr_47401 = [null,null,null,null,null,null,null];
(statearr_47401[(0)] = cljs$core$async$transduce_$_state_machine__46502__auto__);

(statearr_47401[(1)] = (1));

return statearr_47401;
});
var cljs$core$async$transduce_$_state_machine__46502__auto____1 = (function (state_47399){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_47399);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e47402){var ex__46505__auto__ = e47402;
var statearr_47403_49439 = state_47399;
(statearr_47403_49439[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_47399[(4)]))){
var statearr_47405_49440 = state_47399;
(statearr_47405_49440[(1)] = cljs.core.first((state_47399[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49441 = state_47399;
state_47399 = G__49441;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46502__auto__ = function(state_47399){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46502__auto____1.call(this,state_47399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46502__auto____0;
cljs$core$async$transduce_$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46502__auto____1;
return cljs$core$async$transduce_$_state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_47406 = f__46657__auto__();
(statearr_47406[(6)] = c__46656__auto__);

return statearr_47406;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
}));

return c__46656__auto__;
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
var G__47412 = arguments.length;
switch (G__47412) {
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
var c__46656__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_47480){
var state_val_47481 = (state_47480[(1)]);
if((state_val_47481 === (7))){
var inst_47462 = (state_47480[(2)]);
var state_47480__$1 = state_47480;
var statearr_47482_49446 = state_47480__$1;
(statearr_47482_49446[(2)] = inst_47462);

(statearr_47482_49446[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (1))){
var inst_47456 = cljs.core.seq(coll);
var inst_47457 = inst_47456;
var state_47480__$1 = (function (){var statearr_47484 = state_47480;
(statearr_47484[(7)] = inst_47457);

return statearr_47484;
})();
var statearr_47485_49447 = state_47480__$1;
(statearr_47485_49447[(2)] = null);

(statearr_47485_49447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (4))){
var inst_47457 = (state_47480[(7)]);
var inst_47460 = cljs.core.first(inst_47457);
var state_47480__$1 = state_47480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47480__$1,(7),ch,inst_47460);
} else {
if((state_val_47481 === (13))){
var inst_47474 = (state_47480[(2)]);
var state_47480__$1 = state_47480;
var statearr_47487_49450 = state_47480__$1;
(statearr_47487_49450[(2)] = inst_47474);

(statearr_47487_49450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (6))){
var inst_47465 = (state_47480[(2)]);
var state_47480__$1 = state_47480;
if(cljs.core.truth_(inst_47465)){
var statearr_47488_49451 = state_47480__$1;
(statearr_47488_49451[(1)] = (8));

} else {
var statearr_47489_49452 = state_47480__$1;
(statearr_47489_49452[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (3))){
var inst_47478 = (state_47480[(2)]);
var state_47480__$1 = state_47480;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47480__$1,inst_47478);
} else {
if((state_val_47481 === (12))){
var state_47480__$1 = state_47480;
var statearr_47490_49453 = state_47480__$1;
(statearr_47490_49453[(2)] = null);

(statearr_47490_49453[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (2))){
var inst_47457 = (state_47480[(7)]);
var state_47480__$1 = state_47480;
if(cljs.core.truth_(inst_47457)){
var statearr_47491_49454 = state_47480__$1;
(statearr_47491_49454[(1)] = (4));

} else {
var statearr_47492_49455 = state_47480__$1;
(statearr_47492_49455[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (11))){
var inst_47471 = cljs.core.async.close_BANG_(ch);
var state_47480__$1 = state_47480;
var statearr_47493_49456 = state_47480__$1;
(statearr_47493_49456[(2)] = inst_47471);

(statearr_47493_49456[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (9))){
var state_47480__$1 = state_47480;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47494_49457 = state_47480__$1;
(statearr_47494_49457[(1)] = (11));

} else {
var statearr_47495_49458 = state_47480__$1;
(statearr_47495_49458[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (5))){
var inst_47457 = (state_47480[(7)]);
var state_47480__$1 = state_47480;
var statearr_47497_49459 = state_47480__$1;
(statearr_47497_49459[(2)] = inst_47457);

(statearr_47497_49459[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (10))){
var inst_47476 = (state_47480[(2)]);
var state_47480__$1 = state_47480;
var statearr_47498_49465 = state_47480__$1;
(statearr_47498_49465[(2)] = inst_47476);

(statearr_47498_49465[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47481 === (8))){
var inst_47457 = (state_47480[(7)]);
var inst_47467 = cljs.core.next(inst_47457);
var inst_47457__$1 = inst_47467;
var state_47480__$1 = (function (){var statearr_47499 = state_47480;
(statearr_47499[(7)] = inst_47457__$1);

return statearr_47499;
})();
var statearr_47501_49466 = state_47480__$1;
(statearr_47501_49466[(2)] = null);

(statearr_47501_49466[(1)] = (2));


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
var cljs$core$async$state_machine__46502__auto__ = null;
var cljs$core$async$state_machine__46502__auto____0 = (function (){
var statearr_47502 = [null,null,null,null,null,null,null,null];
(statearr_47502[(0)] = cljs$core$async$state_machine__46502__auto__);

(statearr_47502[(1)] = (1));

return statearr_47502;
});
var cljs$core$async$state_machine__46502__auto____1 = (function (state_47480){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_47480);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e47503){var ex__46505__auto__ = e47503;
var statearr_47504_49468 = state_47480;
(statearr_47504_49468[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_47480[(4)]))){
var statearr_47505_49469 = state_47480;
(statearr_47505_49469[(1)] = cljs.core.first((state_47480[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49470 = state_47480;
state_47480 = G__49470;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$state_machine__46502__auto__ = function(state_47480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46502__auto____1.call(this,state_47480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46502__auto____0;
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46502__auto____1;
return cljs$core$async$state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_47506 = f__46657__auto__();
(statearr_47506[(6)] = c__46656__auto__);

return statearr_47506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
}));

return c__46656__auto__;
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
var G__47509 = arguments.length;
switch (G__47509) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_49472 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_49472(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_49473 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_49473(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_49478 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_49478(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_49479 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_49479(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47522 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47522 = (function (ch,cs,meta47523){
this.ch = ch;
this.cs = cs;
this.meta47523 = meta47523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47524,meta47523__$1){
var self__ = this;
var _47524__$1 = this;
return (new cljs.core.async.t_cljs$core$async47522(self__.ch,self__.cs,meta47523__$1));
}));

(cljs.core.async.t_cljs$core$async47522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47524){
var self__ = this;
var _47524__$1 = this;
return self__.meta47523;
}));

(cljs.core.async.t_cljs$core$async47522.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47522.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47522.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47522.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async47522.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async47522.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async47522.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47523","meta47523",-1724930732,null)], null);
}));

(cljs.core.async.t_cljs$core$async47522.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47522.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47522");

(cljs.core.async.t_cljs$core$async47522.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47522");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47522.
 */
cljs.core.async.__GT_t_cljs$core$async47522 = (function cljs$core$async$mult_$___GT_t_cljs$core$async47522(ch__$1,cs__$1,meta47523){
return (new cljs.core.async.t_cljs$core$async47522(ch__$1,cs__$1,meta47523));
});

}

return (new cljs.core.async.t_cljs$core$async47522(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__46656__auto___49480 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_47709){
var state_val_47713 = (state_47709[(1)]);
if((state_val_47713 === (7))){
var inst_47705 = (state_47709[(2)]);
var state_47709__$1 = state_47709;
var statearr_47716_49481 = state_47709__$1;
(statearr_47716_49481[(2)] = inst_47705);

(statearr_47716_49481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (20))){
var inst_47574 = (state_47709[(7)]);
var inst_47598 = cljs.core.first(inst_47574);
var inst_47599 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47598,(0),null);
var inst_47600 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47598,(1),null);
var state_47709__$1 = (function (){var statearr_47718 = state_47709;
(statearr_47718[(8)] = inst_47599);

return statearr_47718;
})();
if(cljs.core.truth_(inst_47600)){
var statearr_47719_49482 = state_47709__$1;
(statearr_47719_49482[(1)] = (22));

} else {
var statearr_47721_49483 = state_47709__$1;
(statearr_47721_49483[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (27))){
var inst_47629 = (state_47709[(9)]);
var inst_47631 = (state_47709[(10)]);
var inst_47641 = (state_47709[(11)]);
var inst_47534 = (state_47709[(12)]);
var inst_47641__$1 = cljs.core._nth(inst_47629,inst_47631);
var inst_47642 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47641__$1,inst_47534,done);
var state_47709__$1 = (function (){var statearr_47723 = state_47709;
(statearr_47723[(11)] = inst_47641__$1);

return statearr_47723;
})();
if(cljs.core.truth_(inst_47642)){
var statearr_47724_49485 = state_47709__$1;
(statearr_47724_49485[(1)] = (30));

} else {
var statearr_47725_49486 = state_47709__$1;
(statearr_47725_49486[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (1))){
var state_47709__$1 = state_47709;
var statearr_47726_49487 = state_47709__$1;
(statearr_47726_49487[(2)] = null);

(statearr_47726_49487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (24))){
var inst_47574 = (state_47709[(7)]);
var inst_47605 = (state_47709[(2)]);
var inst_47606 = cljs.core.next(inst_47574);
var inst_47543 = inst_47606;
var inst_47544 = null;
var inst_47545 = (0);
var inst_47546 = (0);
var state_47709__$1 = (function (){var statearr_47727 = state_47709;
(statearr_47727[(13)] = inst_47545);

(statearr_47727[(14)] = inst_47605);

(statearr_47727[(15)] = inst_47544);

(statearr_47727[(16)] = inst_47543);

(statearr_47727[(17)] = inst_47546);

return statearr_47727;
})();
var statearr_47730_49488 = state_47709__$1;
(statearr_47730_49488[(2)] = null);

(statearr_47730_49488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (39))){
var state_47709__$1 = state_47709;
var statearr_47739_49489 = state_47709__$1;
(statearr_47739_49489[(2)] = null);

(statearr_47739_49489[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (4))){
var inst_47534 = (state_47709[(12)]);
var inst_47534__$1 = (state_47709[(2)]);
var inst_47535 = (inst_47534__$1 == null);
var state_47709__$1 = (function (){var statearr_47740 = state_47709;
(statearr_47740[(12)] = inst_47534__$1);

return statearr_47740;
})();
if(cljs.core.truth_(inst_47535)){
var statearr_47741_49490 = state_47709__$1;
(statearr_47741_49490[(1)] = (5));

} else {
var statearr_47742_49491 = state_47709__$1;
(statearr_47742_49491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (15))){
var inst_47545 = (state_47709[(13)]);
var inst_47544 = (state_47709[(15)]);
var inst_47543 = (state_47709[(16)]);
var inst_47546 = (state_47709[(17)]);
var inst_47561 = (state_47709[(2)]);
var inst_47562 = (inst_47546 + (1));
var tmp47736 = inst_47545;
var tmp47737 = inst_47544;
var tmp47738 = inst_47543;
var inst_47543__$1 = tmp47738;
var inst_47544__$1 = tmp47737;
var inst_47545__$1 = tmp47736;
var inst_47546__$1 = inst_47562;
var state_47709__$1 = (function (){var statearr_47743 = state_47709;
(statearr_47743[(13)] = inst_47545__$1);

(statearr_47743[(15)] = inst_47544__$1);

(statearr_47743[(16)] = inst_47543__$1);

(statearr_47743[(17)] = inst_47546__$1);

(statearr_47743[(18)] = inst_47561);

return statearr_47743;
})();
var statearr_47744_49492 = state_47709__$1;
(statearr_47744_49492[(2)] = null);

(statearr_47744_49492[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (21))){
var inst_47609 = (state_47709[(2)]);
var state_47709__$1 = state_47709;
var statearr_47749_49493 = state_47709__$1;
(statearr_47749_49493[(2)] = inst_47609);

(statearr_47749_49493[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (31))){
var inst_47641 = (state_47709[(11)]);
var inst_47649 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47641);
var state_47709__$1 = state_47709;
var statearr_47750_49500 = state_47709__$1;
(statearr_47750_49500[(2)] = inst_47649);

(statearr_47750_49500[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (32))){
var inst_47629 = (state_47709[(9)]);
var inst_47631 = (state_47709[(10)]);
var inst_47628 = (state_47709[(19)]);
var inst_47630 = (state_47709[(20)]);
var inst_47651 = (state_47709[(2)]);
var inst_47652 = (inst_47631 + (1));
var tmp47746 = inst_47629;
var tmp47747 = inst_47628;
var tmp47748 = inst_47630;
var inst_47628__$1 = tmp47747;
var inst_47629__$1 = tmp47746;
var inst_47630__$1 = tmp47748;
var inst_47631__$1 = inst_47652;
var state_47709__$1 = (function (){var statearr_47751 = state_47709;
(statearr_47751[(21)] = inst_47651);

(statearr_47751[(9)] = inst_47629__$1);

(statearr_47751[(10)] = inst_47631__$1);

(statearr_47751[(19)] = inst_47628__$1);

(statearr_47751[(20)] = inst_47630__$1);

return statearr_47751;
})();
var statearr_47754_49504 = state_47709__$1;
(statearr_47754_49504[(2)] = null);

(statearr_47754_49504[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (40))){
var inst_47675 = (state_47709[(22)]);
var inst_47681 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47675);
var state_47709__$1 = state_47709;
var statearr_47755_49506 = state_47709__$1;
(statearr_47755_49506[(2)] = inst_47681);

(statearr_47755_49506[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (33))){
var inst_47657 = (state_47709[(23)]);
var inst_47661 = cljs.core.chunked_seq_QMARK_(inst_47657);
var state_47709__$1 = state_47709;
if(inst_47661){
var statearr_47757_49508 = state_47709__$1;
(statearr_47757_49508[(1)] = (36));

} else {
var statearr_47761_49509 = state_47709__$1;
(statearr_47761_49509[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (13))){
var inst_47555 = (state_47709[(24)]);
var inst_47558 = cljs.core.async.close_BANG_(inst_47555);
var state_47709__$1 = state_47709;
var statearr_47784_49511 = state_47709__$1;
(statearr_47784_49511[(2)] = inst_47558);

(statearr_47784_49511[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (22))){
var inst_47599 = (state_47709[(8)]);
var inst_47602 = cljs.core.async.close_BANG_(inst_47599);
var state_47709__$1 = state_47709;
var statearr_47791_49515 = state_47709__$1;
(statearr_47791_49515[(2)] = inst_47602);

(statearr_47791_49515[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (36))){
var inst_47657 = (state_47709[(23)]);
var inst_47669 = cljs.core.chunk_first(inst_47657);
var inst_47670 = cljs.core.chunk_rest(inst_47657);
var inst_47671 = cljs.core.count(inst_47669);
var inst_47628 = inst_47670;
var inst_47629 = inst_47669;
var inst_47630 = inst_47671;
var inst_47631 = (0);
var state_47709__$1 = (function (){var statearr_47792 = state_47709;
(statearr_47792[(9)] = inst_47629);

(statearr_47792[(10)] = inst_47631);

(statearr_47792[(19)] = inst_47628);

(statearr_47792[(20)] = inst_47630);

return statearr_47792;
})();
var statearr_47793_49516 = state_47709__$1;
(statearr_47793_49516[(2)] = null);

(statearr_47793_49516[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (41))){
var inst_47657 = (state_47709[(23)]);
var inst_47683 = (state_47709[(2)]);
var inst_47684 = cljs.core.next(inst_47657);
var inst_47628 = inst_47684;
var inst_47629 = null;
var inst_47630 = (0);
var inst_47631 = (0);
var state_47709__$1 = (function (){var statearr_47794 = state_47709;
(statearr_47794[(9)] = inst_47629);

(statearr_47794[(10)] = inst_47631);

(statearr_47794[(19)] = inst_47628);

(statearr_47794[(20)] = inst_47630);

(statearr_47794[(25)] = inst_47683);

return statearr_47794;
})();
var statearr_47795_49517 = state_47709__$1;
(statearr_47795_49517[(2)] = null);

(statearr_47795_49517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (43))){
var state_47709__$1 = state_47709;
var statearr_47796_49518 = state_47709__$1;
(statearr_47796_49518[(2)] = null);

(statearr_47796_49518[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (29))){
var inst_47693 = (state_47709[(2)]);
var state_47709__$1 = state_47709;
var statearr_47797_49519 = state_47709__$1;
(statearr_47797_49519[(2)] = inst_47693);

(statearr_47797_49519[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (44))){
var inst_47702 = (state_47709[(2)]);
var state_47709__$1 = (function (){var statearr_47800 = state_47709;
(statearr_47800[(26)] = inst_47702);

return statearr_47800;
})();
var statearr_47801_49520 = state_47709__$1;
(statearr_47801_49520[(2)] = null);

(statearr_47801_49520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (6))){
var inst_47620 = (state_47709[(27)]);
var inst_47619 = cljs.core.deref(cs);
var inst_47620__$1 = cljs.core.keys(inst_47619);
var inst_47621 = cljs.core.count(inst_47620__$1);
var inst_47622 = cljs.core.reset_BANG_(dctr,inst_47621);
var inst_47627 = cljs.core.seq(inst_47620__$1);
var inst_47628 = inst_47627;
var inst_47629 = null;
var inst_47630 = (0);
var inst_47631 = (0);
var state_47709__$1 = (function (){var statearr_47803 = state_47709;
(statearr_47803[(9)] = inst_47629);

(statearr_47803[(10)] = inst_47631);

(statearr_47803[(27)] = inst_47620__$1);

(statearr_47803[(19)] = inst_47628);

(statearr_47803[(20)] = inst_47630);

(statearr_47803[(28)] = inst_47622);

return statearr_47803;
})();
var statearr_47804_49521 = state_47709__$1;
(statearr_47804_49521[(2)] = null);

(statearr_47804_49521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (28))){
var inst_47628 = (state_47709[(19)]);
var inst_47657 = (state_47709[(23)]);
var inst_47657__$1 = cljs.core.seq(inst_47628);
var state_47709__$1 = (function (){var statearr_47806 = state_47709;
(statearr_47806[(23)] = inst_47657__$1);

return statearr_47806;
})();
if(inst_47657__$1){
var statearr_47807_49528 = state_47709__$1;
(statearr_47807_49528[(1)] = (33));

} else {
var statearr_47808_49529 = state_47709__$1;
(statearr_47808_49529[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (25))){
var inst_47631 = (state_47709[(10)]);
var inst_47630 = (state_47709[(20)]);
var inst_47638 = (inst_47631 < inst_47630);
var inst_47639 = inst_47638;
var state_47709__$1 = state_47709;
if(cljs.core.truth_(inst_47639)){
var statearr_47809_49530 = state_47709__$1;
(statearr_47809_49530[(1)] = (27));

} else {
var statearr_47810_49531 = state_47709__$1;
(statearr_47810_49531[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (34))){
var state_47709__$1 = state_47709;
var statearr_47811_49532 = state_47709__$1;
(statearr_47811_49532[(2)] = null);

(statearr_47811_49532[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (17))){
var state_47709__$1 = state_47709;
var statearr_47813_49537 = state_47709__$1;
(statearr_47813_49537[(2)] = null);

(statearr_47813_49537[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (3))){
var inst_47707 = (state_47709[(2)]);
var state_47709__$1 = state_47709;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47709__$1,inst_47707);
} else {
if((state_val_47713 === (12))){
var inst_47615 = (state_47709[(2)]);
var state_47709__$1 = state_47709;
var statearr_47814_49544 = state_47709__$1;
(statearr_47814_49544[(2)] = inst_47615);

(statearr_47814_49544[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (2))){
var state_47709__$1 = state_47709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47709__$1,(4),ch);
} else {
if((state_val_47713 === (23))){
var state_47709__$1 = state_47709;
var statearr_47815_49545 = state_47709__$1;
(statearr_47815_49545[(2)] = null);

(statearr_47815_49545[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (35))){
var inst_47690 = (state_47709[(2)]);
var state_47709__$1 = state_47709;
var statearr_47817_49546 = state_47709__$1;
(statearr_47817_49546[(2)] = inst_47690);

(statearr_47817_49546[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (19))){
var inst_47574 = (state_47709[(7)]);
var inst_47579 = cljs.core.chunk_first(inst_47574);
var inst_47580 = cljs.core.chunk_rest(inst_47574);
var inst_47591 = cljs.core.count(inst_47579);
var inst_47543 = inst_47580;
var inst_47544 = inst_47579;
var inst_47545 = inst_47591;
var inst_47546 = (0);
var state_47709__$1 = (function (){var statearr_47822 = state_47709;
(statearr_47822[(13)] = inst_47545);

(statearr_47822[(15)] = inst_47544);

(statearr_47822[(16)] = inst_47543);

(statearr_47822[(17)] = inst_47546);

return statearr_47822;
})();
var statearr_47823_49547 = state_47709__$1;
(statearr_47823_49547[(2)] = null);

(statearr_47823_49547[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (11))){
var inst_47543 = (state_47709[(16)]);
var inst_47574 = (state_47709[(7)]);
var inst_47574__$1 = cljs.core.seq(inst_47543);
var state_47709__$1 = (function (){var statearr_47839 = state_47709;
(statearr_47839[(7)] = inst_47574__$1);

return statearr_47839;
})();
if(inst_47574__$1){
var statearr_47840_49548 = state_47709__$1;
(statearr_47840_49548[(1)] = (16));

} else {
var statearr_47841_49549 = state_47709__$1;
(statearr_47841_49549[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (9))){
var inst_47617 = (state_47709[(2)]);
var state_47709__$1 = state_47709;
var statearr_47848_49550 = state_47709__$1;
(statearr_47848_49550[(2)] = inst_47617);

(statearr_47848_49550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (5))){
var inst_47541 = cljs.core.deref(cs);
var inst_47542 = cljs.core.seq(inst_47541);
var inst_47543 = inst_47542;
var inst_47544 = null;
var inst_47545 = (0);
var inst_47546 = (0);
var state_47709__$1 = (function (){var statearr_47849 = state_47709;
(statearr_47849[(13)] = inst_47545);

(statearr_47849[(15)] = inst_47544);

(statearr_47849[(16)] = inst_47543);

(statearr_47849[(17)] = inst_47546);

return statearr_47849;
})();
var statearr_47850_49551 = state_47709__$1;
(statearr_47850_49551[(2)] = null);

(statearr_47850_49551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (14))){
var state_47709__$1 = state_47709;
var statearr_47851_49552 = state_47709__$1;
(statearr_47851_49552[(2)] = null);

(statearr_47851_49552[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (45))){
var inst_47699 = (state_47709[(2)]);
var state_47709__$1 = state_47709;
var statearr_47852_49553 = state_47709__$1;
(statearr_47852_49553[(2)] = inst_47699);

(statearr_47852_49553[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (26))){
var inst_47620 = (state_47709[(27)]);
var inst_47695 = (state_47709[(2)]);
var inst_47696 = cljs.core.seq(inst_47620);
var state_47709__$1 = (function (){var statearr_47853 = state_47709;
(statearr_47853[(29)] = inst_47695);

return statearr_47853;
})();
if(inst_47696){
var statearr_47854_49554 = state_47709__$1;
(statearr_47854_49554[(1)] = (42));

} else {
var statearr_47855_49555 = state_47709__$1;
(statearr_47855_49555[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (16))){
var inst_47574 = (state_47709[(7)]);
var inst_47577 = cljs.core.chunked_seq_QMARK_(inst_47574);
var state_47709__$1 = state_47709;
if(inst_47577){
var statearr_47856_49556 = state_47709__$1;
(statearr_47856_49556[(1)] = (19));

} else {
var statearr_47857_49557 = state_47709__$1;
(statearr_47857_49557[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (38))){
var inst_47687 = (state_47709[(2)]);
var state_47709__$1 = state_47709;
var statearr_47859_49558 = state_47709__$1;
(statearr_47859_49558[(2)] = inst_47687);

(statearr_47859_49558[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (30))){
var state_47709__$1 = state_47709;
var statearr_47860_49559 = state_47709__$1;
(statearr_47860_49559[(2)] = null);

(statearr_47860_49559[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (10))){
var inst_47544 = (state_47709[(15)]);
var inst_47546 = (state_47709[(17)]);
var inst_47554 = cljs.core._nth(inst_47544,inst_47546);
var inst_47555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47554,(0),null);
var inst_47556 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47554,(1),null);
var state_47709__$1 = (function (){var statearr_47861 = state_47709;
(statearr_47861[(24)] = inst_47555);

return statearr_47861;
})();
if(cljs.core.truth_(inst_47556)){
var statearr_47862_49564 = state_47709__$1;
(statearr_47862_49564[(1)] = (13));

} else {
var statearr_47863_49565 = state_47709__$1;
(statearr_47863_49565[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (18))){
var inst_47613 = (state_47709[(2)]);
var state_47709__$1 = state_47709;
var statearr_47864_49566 = state_47709__$1;
(statearr_47864_49566[(2)] = inst_47613);

(statearr_47864_49566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (42))){
var state_47709__$1 = state_47709;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47709__$1,(45),dchan);
} else {
if((state_val_47713 === (37))){
var inst_47675 = (state_47709[(22)]);
var inst_47657 = (state_47709[(23)]);
var inst_47534 = (state_47709[(12)]);
var inst_47675__$1 = cljs.core.first(inst_47657);
var inst_47678 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47675__$1,inst_47534,done);
var state_47709__$1 = (function (){var statearr_47865 = state_47709;
(statearr_47865[(22)] = inst_47675__$1);

return statearr_47865;
})();
if(cljs.core.truth_(inst_47678)){
var statearr_47866_49568 = state_47709__$1;
(statearr_47866_49568[(1)] = (39));

} else {
var statearr_47867_49569 = state_47709__$1;
(statearr_47867_49569[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47713 === (8))){
var inst_47545 = (state_47709[(13)]);
var inst_47546 = (state_47709[(17)]);
var inst_47548 = (inst_47546 < inst_47545);
var inst_47549 = inst_47548;
var state_47709__$1 = state_47709;
if(cljs.core.truth_(inst_47549)){
var statearr_47868_49570 = state_47709__$1;
(statearr_47868_49570[(1)] = (10));

} else {
var statearr_47869_49571 = state_47709__$1;
(statearr_47869_49571[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__46502__auto__ = null;
var cljs$core$async$mult_$_state_machine__46502__auto____0 = (function (){
var statearr_47871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47871[(0)] = cljs$core$async$mult_$_state_machine__46502__auto__);

(statearr_47871[(1)] = (1));

return statearr_47871;
});
var cljs$core$async$mult_$_state_machine__46502__auto____1 = (function (state_47709){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_47709);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e47872){var ex__46505__auto__ = e47872;
var statearr_47873_49575 = state_47709;
(statearr_47873_49575[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_47709[(4)]))){
var statearr_47874_49576 = state_47709;
(statearr_47874_49576[(1)] = cljs.core.first((state_47709[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49577 = state_47709;
state_47709 = G__49577;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46502__auto__ = function(state_47709){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46502__auto____1.call(this,state_47709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46502__auto____0;
cljs$core$async$mult_$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46502__auto____1;
return cljs$core$async$mult_$_state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_47875 = f__46657__auto__();
(statearr_47875[(6)] = c__46656__auto___49480);

return statearr_47875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
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
var G__47877 = arguments.length;
switch (G__47877) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_49584 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_49584(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_49590 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_49590(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_49591 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_49591(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_49592 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_49592(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_49596 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_49596(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___49601 = arguments.length;
var i__4819__auto___49602 = (0);
while(true){
if((i__4819__auto___49602 < len__4818__auto___49601)){
args__4824__auto__.push((arguments[i__4819__auto___49602]));

var G__49603 = (i__4819__auto___49602 + (1));
i__4819__auto___49602 = G__49603;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47887){
var map__47888 = p__47887;
var map__47888__$1 = cljs.core.__destructure_map(map__47888);
var opts = map__47888__$1;
var statearr_47889_49605 = state;
(statearr_47889_49605[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_47890_49606 = state;
(statearr_47890_49606[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_47891_49607 = state;
(statearr_47891_49607[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47882){
var G__47883 = cljs.core.first(seq47882);
var seq47882__$1 = cljs.core.next(seq47882);
var G__47884 = cljs.core.first(seq47882__$1);
var seq47882__$2 = cljs.core.next(seq47882__$1);
var G__47885 = cljs.core.first(seq47882__$2);
var seq47882__$3 = cljs.core.next(seq47882__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47883,G__47884,G__47885,seq47882__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47895 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47895 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47896){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47896 = meta47896;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47897,meta47896__$1){
var self__ = this;
var _47897__$1 = this;
return (new cljs.core.async.t_cljs$core$async47895(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47896__$1));
}));

(cljs.core.async.t_cljs$core$async47895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47897){
var self__ = this;
var _47897__$1 = this;
return self__.meta47896;
}));

(cljs.core.async.t_cljs$core$async47895.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47895.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async47895.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47895.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47895.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47895.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47895.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47895.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47895.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47896","meta47896",1644760597,null)], null);
}));

(cljs.core.async.t_cljs$core$async47895.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47895.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47895");

(cljs.core.async.t_cljs$core$async47895.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47895");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47895.
 */
cljs.core.async.__GT_t_cljs$core$async47895 = (function cljs$core$async$mix_$___GT_t_cljs$core$async47895(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47896){
return (new cljs.core.async.t_cljs$core$async47895(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47896));
});

}

return (new cljs.core.async.t_cljs$core$async47895(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46656__auto___49641 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_47968){
var state_val_47969 = (state_47968[(1)]);
if((state_val_47969 === (7))){
var inst_47927 = (state_47968[(2)]);
var state_47968__$1 = state_47968;
if(cljs.core.truth_(inst_47927)){
var statearr_47971_49642 = state_47968__$1;
(statearr_47971_49642[(1)] = (8));

} else {
var statearr_47972_49646 = state_47968__$1;
(statearr_47972_49646[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (20))){
var inst_47920 = (state_47968[(7)]);
var state_47968__$1 = state_47968;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47968__$1,(23),out,inst_47920);
} else {
if((state_val_47969 === (1))){
var inst_47903 = calc_state();
var inst_47904 = cljs.core.__destructure_map(inst_47903);
var inst_47905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47904,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47904,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47904,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47908 = inst_47903;
var state_47968__$1 = (function (){var statearr_47973 = state_47968;
(statearr_47973[(8)] = inst_47905);

(statearr_47973[(9)] = inst_47908);

(statearr_47973[(10)] = inst_47907);

(statearr_47973[(11)] = inst_47906);

return statearr_47973;
})();
var statearr_47974_49647 = state_47968__$1;
(statearr_47974_49647[(2)] = null);

(statearr_47974_49647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (24))){
var inst_47911 = (state_47968[(12)]);
var inst_47908 = inst_47911;
var state_47968__$1 = (function (){var statearr_47976 = state_47968;
(statearr_47976[(9)] = inst_47908);

return statearr_47976;
})();
var statearr_47977_49648 = state_47968__$1;
(statearr_47977_49648[(2)] = null);

(statearr_47977_49648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (4))){
var inst_47922 = (state_47968[(13)]);
var inst_47920 = (state_47968[(7)]);
var inst_47919 = (state_47968[(2)]);
var inst_47920__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47919,(0),null);
var inst_47921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47919,(1),null);
var inst_47922__$1 = (inst_47920__$1 == null);
var state_47968__$1 = (function (){var statearr_47978 = state_47968;
(statearr_47978[(14)] = inst_47921);

(statearr_47978[(13)] = inst_47922__$1);

(statearr_47978[(7)] = inst_47920__$1);

return statearr_47978;
})();
if(cljs.core.truth_(inst_47922__$1)){
var statearr_47979_49649 = state_47968__$1;
(statearr_47979_49649[(1)] = (5));

} else {
var statearr_47980_49650 = state_47968__$1;
(statearr_47980_49650[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (15))){
var inst_47912 = (state_47968[(15)]);
var inst_47942 = (state_47968[(16)]);
var inst_47942__$1 = cljs.core.empty_QMARK_(inst_47912);
var state_47968__$1 = (function (){var statearr_47981 = state_47968;
(statearr_47981[(16)] = inst_47942__$1);

return statearr_47981;
})();
if(inst_47942__$1){
var statearr_47982_49651 = state_47968__$1;
(statearr_47982_49651[(1)] = (17));

} else {
var statearr_47983_49652 = state_47968__$1;
(statearr_47983_49652[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (21))){
var inst_47911 = (state_47968[(12)]);
var inst_47908 = inst_47911;
var state_47968__$1 = (function (){var statearr_47984 = state_47968;
(statearr_47984[(9)] = inst_47908);

return statearr_47984;
})();
var statearr_47985_49653 = state_47968__$1;
(statearr_47985_49653[(2)] = null);

(statearr_47985_49653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (13))){
var inst_47935 = (state_47968[(2)]);
var inst_47936 = calc_state();
var inst_47908 = inst_47936;
var state_47968__$1 = (function (){var statearr_47987 = state_47968;
(statearr_47987[(17)] = inst_47935);

(statearr_47987[(9)] = inst_47908);

return statearr_47987;
})();
var statearr_47988_49654 = state_47968__$1;
(statearr_47988_49654[(2)] = null);

(statearr_47988_49654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (22))){
var inst_47962 = (state_47968[(2)]);
var state_47968__$1 = state_47968;
var statearr_47989_49655 = state_47968__$1;
(statearr_47989_49655[(2)] = inst_47962);

(statearr_47989_49655[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (6))){
var inst_47921 = (state_47968[(14)]);
var inst_47925 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47921,change);
var state_47968__$1 = state_47968;
var statearr_47990_49656 = state_47968__$1;
(statearr_47990_49656[(2)] = inst_47925);

(statearr_47990_49656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (25))){
var state_47968__$1 = state_47968;
var statearr_47991_49657 = state_47968__$1;
(statearr_47991_49657[(2)] = null);

(statearr_47991_49657[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (17))){
var inst_47921 = (state_47968[(14)]);
var inst_47913 = (state_47968[(18)]);
var inst_47944 = (inst_47913.cljs$core$IFn$_invoke$arity$1 ? inst_47913.cljs$core$IFn$_invoke$arity$1(inst_47921) : inst_47913.call(null,inst_47921));
var inst_47945 = cljs.core.not(inst_47944);
var state_47968__$1 = state_47968;
var statearr_47992_49658 = state_47968__$1;
(statearr_47992_49658[(2)] = inst_47945);

(statearr_47992_49658[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (3))){
var inst_47966 = (state_47968[(2)]);
var state_47968__$1 = state_47968;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47968__$1,inst_47966);
} else {
if((state_val_47969 === (12))){
var state_47968__$1 = state_47968;
var statearr_47994_49659 = state_47968__$1;
(statearr_47994_49659[(2)] = null);

(statearr_47994_49659[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (2))){
var inst_47908 = (state_47968[(9)]);
var inst_47911 = (state_47968[(12)]);
var inst_47911__$1 = cljs.core.__destructure_map(inst_47908);
var inst_47912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47911__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47911__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47914 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47911__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47968__$1 = (function (){var statearr_47995 = state_47968;
(statearr_47995[(15)] = inst_47912);

(statearr_47995[(18)] = inst_47913);

(statearr_47995[(12)] = inst_47911__$1);

return statearr_47995;
})();
return cljs.core.async.ioc_alts_BANG_(state_47968__$1,(4),inst_47914);
} else {
if((state_val_47969 === (23))){
var inst_47953 = (state_47968[(2)]);
var state_47968__$1 = state_47968;
if(cljs.core.truth_(inst_47953)){
var statearr_47996_49660 = state_47968__$1;
(statearr_47996_49660[(1)] = (24));

} else {
var statearr_47997_49661 = state_47968__$1;
(statearr_47997_49661[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (19))){
var inst_47948 = (state_47968[(2)]);
var state_47968__$1 = state_47968;
var statearr_47998_49662 = state_47968__$1;
(statearr_47998_49662[(2)] = inst_47948);

(statearr_47998_49662[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (11))){
var inst_47921 = (state_47968[(14)]);
var inst_47931 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47921);
var state_47968__$1 = state_47968;
var statearr_47999_49663 = state_47968__$1;
(statearr_47999_49663[(2)] = inst_47931);

(statearr_47999_49663[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (9))){
var inst_47912 = (state_47968[(15)]);
var inst_47939 = (state_47968[(19)]);
var inst_47921 = (state_47968[(14)]);
var inst_47939__$1 = (inst_47912.cljs$core$IFn$_invoke$arity$1 ? inst_47912.cljs$core$IFn$_invoke$arity$1(inst_47921) : inst_47912.call(null,inst_47921));
var state_47968__$1 = (function (){var statearr_48001 = state_47968;
(statearr_48001[(19)] = inst_47939__$1);

return statearr_48001;
})();
if(cljs.core.truth_(inst_47939__$1)){
var statearr_48002_49667 = state_47968__$1;
(statearr_48002_49667[(1)] = (14));

} else {
var statearr_48003_49668 = state_47968__$1;
(statearr_48003_49668[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (5))){
var inst_47922 = (state_47968[(13)]);
var state_47968__$1 = state_47968;
var statearr_48005_49669 = state_47968__$1;
(statearr_48005_49669[(2)] = inst_47922);

(statearr_48005_49669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (14))){
var inst_47939 = (state_47968[(19)]);
var state_47968__$1 = state_47968;
var statearr_48007_49670 = state_47968__$1;
(statearr_48007_49670[(2)] = inst_47939);

(statearr_48007_49670[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (26))){
var inst_47958 = (state_47968[(2)]);
var state_47968__$1 = state_47968;
var statearr_48008_49671 = state_47968__$1;
(statearr_48008_49671[(2)] = inst_47958);

(statearr_48008_49671[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (16))){
var inst_47950 = (state_47968[(2)]);
var state_47968__$1 = state_47968;
if(cljs.core.truth_(inst_47950)){
var statearr_48009_49672 = state_47968__$1;
(statearr_48009_49672[(1)] = (20));

} else {
var statearr_48010_49673 = state_47968__$1;
(statearr_48010_49673[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (10))){
var inst_47964 = (state_47968[(2)]);
var state_47968__$1 = state_47968;
var statearr_48011_49674 = state_47968__$1;
(statearr_48011_49674[(2)] = inst_47964);

(statearr_48011_49674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (18))){
var inst_47942 = (state_47968[(16)]);
var state_47968__$1 = state_47968;
var statearr_48013_49675 = state_47968__$1;
(statearr_48013_49675[(2)] = inst_47942);

(statearr_48013_49675[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47969 === (8))){
var inst_47920 = (state_47968[(7)]);
var inst_47929 = (inst_47920 == null);
var state_47968__$1 = state_47968;
if(cljs.core.truth_(inst_47929)){
var statearr_48014_49676 = state_47968__$1;
(statearr_48014_49676[(1)] = (11));

} else {
var statearr_48015_49677 = state_47968__$1;
(statearr_48015_49677[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__46502__auto__ = null;
var cljs$core$async$mix_$_state_machine__46502__auto____0 = (function (){
var statearr_48017 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48017[(0)] = cljs$core$async$mix_$_state_machine__46502__auto__);

(statearr_48017[(1)] = (1));

return statearr_48017;
});
var cljs$core$async$mix_$_state_machine__46502__auto____1 = (function (state_47968){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_47968);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e48018){var ex__46505__auto__ = e48018;
var statearr_48019_49678 = state_47968;
(statearr_48019_49678[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_47968[(4)]))){
var statearr_48020_49679 = state_47968;
(statearr_48020_49679[(1)] = cljs.core.first((state_47968[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49680 = state_47968;
state_47968 = G__49680;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46502__auto__ = function(state_47968){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46502__auto____1.call(this,state_47968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46502__auto____0;
cljs$core$async$mix_$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46502__auto____1;
return cljs$core$async$mix_$_state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_48021 = f__46657__auto__();
(statearr_48021[(6)] = c__46656__auto___49641);

return statearr_48021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_49681 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_49681(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_49682 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_49682(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_49683 = (function() {
var G__49684 = null;
var G__49684__1 = (function (p){
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
var G__49684__2 = (function (p,v){
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
G__49684 = function(p,v){
switch(arguments.length){
case 1:
return G__49684__1.call(this,p);
case 2:
return G__49684__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__49684.cljs$core$IFn$_invoke$arity$1 = G__49684__1;
G__49684.cljs$core$IFn$_invoke$arity$2 = G__49684__2;
return G__49684;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__48027 = arguments.length;
switch (G__48027) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49683(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_49683(p,v);
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
var G__48060 = arguments.length;
switch (G__48060) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__48037_SHARP_){
if(cljs.core.truth_((p1__48037_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__48037_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__48037_SHARP_.call(null,topic)))){
return p1__48037_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48037_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48081 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48081 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta48082){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta48082 = meta48082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48083,meta48082__$1){
var self__ = this;
var _48083__$1 = this;
return (new cljs.core.async.t_cljs$core$async48081(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta48082__$1));
}));

(cljs.core.async.t_cljs$core$async48081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48083){
var self__ = this;
var _48083__$1 = this;
return self__.meta48082;
}));

(cljs.core.async.t_cljs$core$async48081.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48081.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async48081.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48081.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async48081.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async48081.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async48081.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async48081.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta48082","meta48082",-1305465487,null)], null);
}));

(cljs.core.async.t_cljs$core$async48081.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48081.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48081");

(cljs.core.async.t_cljs$core$async48081.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48081");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48081.
 */
cljs.core.async.__GT_t_cljs$core$async48081 = (function cljs$core$async$__GT_t_cljs$core$async48081(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48082){
return (new cljs.core.async.t_cljs$core$async48081(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta48082));
});

}

return (new cljs.core.async.t_cljs$core$async48081(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46656__auto___49687 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_48240){
var state_val_48244 = (state_48240[(1)]);
if((state_val_48244 === (7))){
var inst_48232 = (state_48240[(2)]);
var state_48240__$1 = state_48240;
var statearr_48258_49688 = state_48240__$1;
(statearr_48258_49688[(2)] = inst_48232);

(statearr_48258_49688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (20))){
var state_48240__$1 = state_48240;
var statearr_48261_49689 = state_48240__$1;
(statearr_48261_49689[(2)] = null);

(statearr_48261_49689[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (1))){
var state_48240__$1 = state_48240;
var statearr_48273_49690 = state_48240__$1;
(statearr_48273_49690[(2)] = null);

(statearr_48273_49690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (24))){
var inst_48207 = (state_48240[(7)]);
var inst_48224 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48207);
var state_48240__$1 = state_48240;
var statearr_48278_49691 = state_48240__$1;
(statearr_48278_49691[(2)] = inst_48224);

(statearr_48278_49691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (4))){
var inst_48114 = (state_48240[(8)]);
var inst_48114__$1 = (state_48240[(2)]);
var inst_48115 = (inst_48114__$1 == null);
var state_48240__$1 = (function (){var statearr_48280 = state_48240;
(statearr_48280[(8)] = inst_48114__$1);

return statearr_48280;
})();
if(cljs.core.truth_(inst_48115)){
var statearr_48281_49692 = state_48240__$1;
(statearr_48281_49692[(1)] = (5));

} else {
var statearr_48282_49693 = state_48240__$1;
(statearr_48282_49693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (15))){
var inst_48201 = (state_48240[(2)]);
var state_48240__$1 = state_48240;
var statearr_48286_49694 = state_48240__$1;
(statearr_48286_49694[(2)] = inst_48201);

(statearr_48286_49694[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (21))){
var inst_48229 = (state_48240[(2)]);
var state_48240__$1 = (function (){var statearr_48288 = state_48240;
(statearr_48288[(9)] = inst_48229);

return statearr_48288;
})();
var statearr_48289_49695 = state_48240__$1;
(statearr_48289_49695[(2)] = null);

(statearr_48289_49695[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (13))){
var inst_48142 = (state_48240[(10)]);
var inst_48147 = cljs.core.chunked_seq_QMARK_(inst_48142);
var state_48240__$1 = state_48240;
if(inst_48147){
var statearr_48293_49696 = state_48240__$1;
(statearr_48293_49696[(1)] = (16));

} else {
var statearr_48294_49697 = state_48240__$1;
(statearr_48294_49697[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (22))){
var inst_48221 = (state_48240[(2)]);
var state_48240__$1 = state_48240;
if(cljs.core.truth_(inst_48221)){
var statearr_48296_49698 = state_48240__$1;
(statearr_48296_49698[(1)] = (23));

} else {
var statearr_48297_49699 = state_48240__$1;
(statearr_48297_49699[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (6))){
var inst_48209 = (state_48240[(11)]);
var inst_48207 = (state_48240[(7)]);
var inst_48114 = (state_48240[(8)]);
var inst_48207__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_48114) : topic_fn.call(null,inst_48114));
var inst_48208 = cljs.core.deref(mults);
var inst_48209__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48208,inst_48207__$1);
var state_48240__$1 = (function (){var statearr_48301 = state_48240;
(statearr_48301[(11)] = inst_48209__$1);

(statearr_48301[(7)] = inst_48207__$1);

return statearr_48301;
})();
if(cljs.core.truth_(inst_48209__$1)){
var statearr_48305_49700 = state_48240__$1;
(statearr_48305_49700[(1)] = (19));

} else {
var statearr_48306_49701 = state_48240__$1;
(statearr_48306_49701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (25))){
var inst_48226 = (state_48240[(2)]);
var state_48240__$1 = state_48240;
var statearr_48307_49702 = state_48240__$1;
(statearr_48307_49702[(2)] = inst_48226);

(statearr_48307_49702[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (17))){
var inst_48142 = (state_48240[(10)]);
var inst_48191 = cljs.core.first(inst_48142);
var inst_48192 = cljs.core.async.muxch_STAR_(inst_48191);
var inst_48193 = cljs.core.async.close_BANG_(inst_48192);
var inst_48194 = cljs.core.next(inst_48142);
var inst_48125 = inst_48194;
var inst_48127 = null;
var inst_48128 = (0);
var inst_48129 = (0);
var state_48240__$1 = (function (){var statearr_48308 = state_48240;
(statearr_48308[(12)] = inst_48127);

(statearr_48308[(13)] = inst_48128);

(statearr_48308[(14)] = inst_48129);

(statearr_48308[(15)] = inst_48125);

(statearr_48308[(16)] = inst_48193);

return statearr_48308;
})();
var statearr_48309_49703 = state_48240__$1;
(statearr_48309_49703[(2)] = null);

(statearr_48309_49703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (3))){
var inst_48234 = (state_48240[(2)]);
var state_48240__$1 = state_48240;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48240__$1,inst_48234);
} else {
if((state_val_48244 === (12))){
var inst_48203 = (state_48240[(2)]);
var state_48240__$1 = state_48240;
var statearr_48310_49704 = state_48240__$1;
(statearr_48310_49704[(2)] = inst_48203);

(statearr_48310_49704[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (2))){
var state_48240__$1 = state_48240;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48240__$1,(4),ch);
} else {
if((state_val_48244 === (23))){
var state_48240__$1 = state_48240;
var statearr_48311_49705 = state_48240__$1;
(statearr_48311_49705[(2)] = null);

(statearr_48311_49705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (19))){
var inst_48209 = (state_48240[(11)]);
var inst_48114 = (state_48240[(8)]);
var inst_48219 = cljs.core.async.muxch_STAR_(inst_48209);
var state_48240__$1 = state_48240;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48240__$1,(22),inst_48219,inst_48114);
} else {
if((state_val_48244 === (11))){
var inst_48142 = (state_48240[(10)]);
var inst_48125 = (state_48240[(15)]);
var inst_48142__$1 = cljs.core.seq(inst_48125);
var state_48240__$1 = (function (){var statearr_48312 = state_48240;
(statearr_48312[(10)] = inst_48142__$1);

return statearr_48312;
})();
if(inst_48142__$1){
var statearr_48313_49707 = state_48240__$1;
(statearr_48313_49707[(1)] = (13));

} else {
var statearr_48314_49708 = state_48240__$1;
(statearr_48314_49708[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (9))){
var inst_48205 = (state_48240[(2)]);
var state_48240__$1 = state_48240;
var statearr_48315_49709 = state_48240__$1;
(statearr_48315_49709[(2)] = inst_48205);

(statearr_48315_49709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (5))){
var inst_48121 = cljs.core.deref(mults);
var inst_48122 = cljs.core.vals(inst_48121);
var inst_48123 = cljs.core.seq(inst_48122);
var inst_48125 = inst_48123;
var inst_48127 = null;
var inst_48128 = (0);
var inst_48129 = (0);
var state_48240__$1 = (function (){var statearr_48317 = state_48240;
(statearr_48317[(12)] = inst_48127);

(statearr_48317[(13)] = inst_48128);

(statearr_48317[(14)] = inst_48129);

(statearr_48317[(15)] = inst_48125);

return statearr_48317;
})();
var statearr_48319_49710 = state_48240__$1;
(statearr_48319_49710[(2)] = null);

(statearr_48319_49710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (14))){
var state_48240__$1 = state_48240;
var statearr_48323_49711 = state_48240__$1;
(statearr_48323_49711[(2)] = null);

(statearr_48323_49711[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (16))){
var inst_48142 = (state_48240[(10)]);
var inst_48149 = cljs.core.chunk_first(inst_48142);
var inst_48150 = cljs.core.chunk_rest(inst_48142);
var inst_48151 = cljs.core.count(inst_48149);
var inst_48125 = inst_48150;
var inst_48127 = inst_48149;
var inst_48128 = inst_48151;
var inst_48129 = (0);
var state_48240__$1 = (function (){var statearr_48324 = state_48240;
(statearr_48324[(12)] = inst_48127);

(statearr_48324[(13)] = inst_48128);

(statearr_48324[(14)] = inst_48129);

(statearr_48324[(15)] = inst_48125);

return statearr_48324;
})();
var statearr_48325_49715 = state_48240__$1;
(statearr_48325_49715[(2)] = null);

(statearr_48325_49715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (10))){
var inst_48127 = (state_48240[(12)]);
var inst_48128 = (state_48240[(13)]);
var inst_48129 = (state_48240[(14)]);
var inst_48125 = (state_48240[(15)]);
var inst_48135 = cljs.core._nth(inst_48127,inst_48129);
var inst_48136 = cljs.core.async.muxch_STAR_(inst_48135);
var inst_48137 = cljs.core.async.close_BANG_(inst_48136);
var inst_48139 = (inst_48129 + (1));
var tmp48320 = inst_48127;
var tmp48321 = inst_48128;
var tmp48322 = inst_48125;
var inst_48125__$1 = tmp48322;
var inst_48127__$1 = tmp48320;
var inst_48128__$1 = tmp48321;
var inst_48129__$1 = inst_48139;
var state_48240__$1 = (function (){var statearr_48326 = state_48240;
(statearr_48326[(12)] = inst_48127__$1);

(statearr_48326[(17)] = inst_48137);

(statearr_48326[(13)] = inst_48128__$1);

(statearr_48326[(14)] = inst_48129__$1);

(statearr_48326[(15)] = inst_48125__$1);

return statearr_48326;
})();
var statearr_48327_49716 = state_48240__$1;
(statearr_48327_49716[(2)] = null);

(statearr_48327_49716[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (18))){
var inst_48198 = (state_48240[(2)]);
var state_48240__$1 = state_48240;
var statearr_48328_49717 = state_48240__$1;
(statearr_48328_49717[(2)] = inst_48198);

(statearr_48328_49717[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48244 === (8))){
var inst_48128 = (state_48240[(13)]);
var inst_48129 = (state_48240[(14)]);
var inst_48132 = (inst_48129 < inst_48128);
var inst_48133 = inst_48132;
var state_48240__$1 = state_48240;
if(cljs.core.truth_(inst_48133)){
var statearr_48329_49718 = state_48240__$1;
(statearr_48329_49718[(1)] = (10));

} else {
var statearr_48330_49719 = state_48240__$1;
(statearr_48330_49719[(1)] = (11));

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
var cljs$core$async$state_machine__46502__auto__ = null;
var cljs$core$async$state_machine__46502__auto____0 = (function (){
var statearr_48331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48331[(0)] = cljs$core$async$state_machine__46502__auto__);

(statearr_48331[(1)] = (1));

return statearr_48331;
});
var cljs$core$async$state_machine__46502__auto____1 = (function (state_48240){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_48240);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e48332){var ex__46505__auto__ = e48332;
var statearr_48333_49720 = state_48240;
(statearr_48333_49720[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_48240[(4)]))){
var statearr_48334_49721 = state_48240;
(statearr_48334_49721[(1)] = cljs.core.first((state_48240[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49722 = state_48240;
state_48240 = G__49722;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$state_machine__46502__auto__ = function(state_48240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46502__auto____1.call(this,state_48240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46502__auto____0;
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46502__auto____1;
return cljs$core$async$state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_48335 = f__46657__auto__();
(statearr_48335[(6)] = c__46656__auto___49687);

return statearr_48335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
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
var G__48337 = arguments.length;
switch (G__48337) {
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
var G__48339 = arguments.length;
switch (G__48339) {
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
var G__48342 = arguments.length;
switch (G__48342) {
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
var c__46656__auto___49729 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_48386){
var state_val_48387 = (state_48386[(1)]);
if((state_val_48387 === (7))){
var state_48386__$1 = state_48386;
var statearr_48390_49730 = state_48386__$1;
(statearr_48390_49730[(2)] = null);

(statearr_48390_49730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48387 === (1))){
var state_48386__$1 = state_48386;
var statearr_48391_49731 = state_48386__$1;
(statearr_48391_49731[(2)] = null);

(statearr_48391_49731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48387 === (4))){
var inst_48347 = (state_48386[(7)]);
var inst_48346 = (state_48386[(8)]);
var inst_48349 = (inst_48347 < inst_48346);
var state_48386__$1 = state_48386;
if(cljs.core.truth_(inst_48349)){
var statearr_48392_49732 = state_48386__$1;
(statearr_48392_49732[(1)] = (6));

} else {
var statearr_48393_49733 = state_48386__$1;
(statearr_48393_49733[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48387 === (15))){
var inst_48372 = (state_48386[(9)]);
var inst_48377 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48372);
var state_48386__$1 = state_48386;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48386__$1,(17),out,inst_48377);
} else {
if((state_val_48387 === (13))){
var inst_48372 = (state_48386[(9)]);
var inst_48372__$1 = (state_48386[(2)]);
var inst_48373 = cljs.core.some(cljs.core.nil_QMARK_,inst_48372__$1);
var state_48386__$1 = (function (){var statearr_48394 = state_48386;
(statearr_48394[(9)] = inst_48372__$1);

return statearr_48394;
})();
if(cljs.core.truth_(inst_48373)){
var statearr_48395_49734 = state_48386__$1;
(statearr_48395_49734[(1)] = (14));

} else {
var statearr_48396_49735 = state_48386__$1;
(statearr_48396_49735[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48387 === (6))){
var state_48386__$1 = state_48386;
var statearr_48397_49736 = state_48386__$1;
(statearr_48397_49736[(2)] = null);

(statearr_48397_49736[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48387 === (17))){
var inst_48379 = (state_48386[(2)]);
var state_48386__$1 = (function (){var statearr_48403 = state_48386;
(statearr_48403[(10)] = inst_48379);

return statearr_48403;
})();
var statearr_48404_49737 = state_48386__$1;
(statearr_48404_49737[(2)] = null);

(statearr_48404_49737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48387 === (3))){
var inst_48384 = (state_48386[(2)]);
var state_48386__$1 = state_48386;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48386__$1,inst_48384);
} else {
if((state_val_48387 === (12))){
var _ = (function (){var statearr_48409 = state_48386;
(statearr_48409[(4)] = cljs.core.rest((state_48386[(4)])));

return statearr_48409;
})();
var state_48386__$1 = state_48386;
var ex48402 = (state_48386__$1[(2)]);
var statearr_48410_49738 = state_48386__$1;
(statearr_48410_49738[(5)] = ex48402);


if((ex48402 instanceof Object)){
var statearr_48412_49739 = state_48386__$1;
(statearr_48412_49739[(1)] = (11));

(statearr_48412_49739[(5)] = null);

} else {
throw ex48402;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48387 === (2))){
var inst_48345 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48346 = cnt;
var inst_48347 = (0);
var state_48386__$1 = (function (){var statearr_48417 = state_48386;
(statearr_48417[(7)] = inst_48347);

(statearr_48417[(11)] = inst_48345);

(statearr_48417[(8)] = inst_48346);

return statearr_48417;
})();
var statearr_48418_49740 = state_48386__$1;
(statearr_48418_49740[(2)] = null);

(statearr_48418_49740[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48387 === (11))){
var inst_48351 = (state_48386[(2)]);
var inst_48352 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48386__$1 = (function (){var statearr_48422 = state_48386;
(statearr_48422[(12)] = inst_48351);

return statearr_48422;
})();
var statearr_48423_49741 = state_48386__$1;
(statearr_48423_49741[(2)] = inst_48352);

(statearr_48423_49741[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48387 === (9))){
var inst_48347 = (state_48386[(7)]);
var _ = (function (){var statearr_48425 = state_48386;
(statearr_48425[(4)] = cljs.core.cons((12),(state_48386[(4)])));

return statearr_48425;
})();
var inst_48358 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48347) : chs__$1.call(null,inst_48347));
var inst_48359 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48347) : done.call(null,inst_48347));
var inst_48360 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48358,inst_48359);
var ___$1 = (function (){var statearr_48426 = state_48386;
(statearr_48426[(4)] = cljs.core.rest((state_48386[(4)])));

return statearr_48426;
})();
var state_48386__$1 = state_48386;
var statearr_48427_49742 = state_48386__$1;
(statearr_48427_49742[(2)] = inst_48360);

(statearr_48427_49742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48387 === (5))){
var inst_48370 = (state_48386[(2)]);
var state_48386__$1 = (function (){var statearr_48428 = state_48386;
(statearr_48428[(13)] = inst_48370);

return statearr_48428;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48386__$1,(13),dchan);
} else {
if((state_val_48387 === (14))){
var inst_48375 = cljs.core.async.close_BANG_(out);
var state_48386__$1 = state_48386;
var statearr_48433_49743 = state_48386__$1;
(statearr_48433_49743[(2)] = inst_48375);

(statearr_48433_49743[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48387 === (16))){
var inst_48382 = (state_48386[(2)]);
var state_48386__$1 = state_48386;
var statearr_48434_49744 = state_48386__$1;
(statearr_48434_49744[(2)] = inst_48382);

(statearr_48434_49744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48387 === (10))){
var inst_48347 = (state_48386[(7)]);
var inst_48363 = (state_48386[(2)]);
var inst_48364 = (inst_48347 + (1));
var inst_48347__$1 = inst_48364;
var state_48386__$1 = (function (){var statearr_48435 = state_48386;
(statearr_48435[(7)] = inst_48347__$1);

(statearr_48435[(14)] = inst_48363);

return statearr_48435;
})();
var statearr_48436_49745 = state_48386__$1;
(statearr_48436_49745[(2)] = null);

(statearr_48436_49745[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48387 === (8))){
var inst_48368 = (state_48386[(2)]);
var state_48386__$1 = state_48386;
var statearr_48440_49746 = state_48386__$1;
(statearr_48440_49746[(2)] = inst_48368);

(statearr_48440_49746[(1)] = (5));


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
var cljs$core$async$state_machine__46502__auto__ = null;
var cljs$core$async$state_machine__46502__auto____0 = (function (){
var statearr_48445 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48445[(0)] = cljs$core$async$state_machine__46502__auto__);

(statearr_48445[(1)] = (1));

return statearr_48445;
});
var cljs$core$async$state_machine__46502__auto____1 = (function (state_48386){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_48386);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e48447){var ex__46505__auto__ = e48447;
var statearr_48448_49747 = state_48386;
(statearr_48448_49747[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_48386[(4)]))){
var statearr_48449_49749 = state_48386;
(statearr_48449_49749[(1)] = cljs.core.first((state_48386[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49751 = state_48386;
state_48386 = G__49751;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$state_machine__46502__auto__ = function(state_48386){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46502__auto____1.call(this,state_48386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46502__auto____0;
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46502__auto____1;
return cljs$core$async$state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_48451 = f__46657__auto__();
(statearr_48451[(6)] = c__46656__auto___49729);

return statearr_48451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
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
var G__48465 = arguments.length;
switch (G__48465) {
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
var c__46656__auto___49757 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_48519){
var state_val_48520 = (state_48519[(1)]);
if((state_val_48520 === (7))){
var inst_48491 = (state_48519[(7)]);
var inst_48490 = (state_48519[(8)]);
var inst_48490__$1 = (state_48519[(2)]);
var inst_48491__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48490__$1,(0),null);
var inst_48492 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48490__$1,(1),null);
var inst_48496 = (inst_48491__$1 == null);
var state_48519__$1 = (function (){var statearr_48525 = state_48519;
(statearr_48525[(9)] = inst_48492);

(statearr_48525[(7)] = inst_48491__$1);

(statearr_48525[(8)] = inst_48490__$1);

return statearr_48525;
})();
if(cljs.core.truth_(inst_48496)){
var statearr_48526_49758 = state_48519__$1;
(statearr_48526_49758[(1)] = (8));

} else {
var statearr_48530_49760 = state_48519__$1;
(statearr_48530_49760[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48520 === (1))){
var inst_48476 = cljs.core.vec(chs);
var inst_48477 = inst_48476;
var state_48519__$1 = (function (){var statearr_48532 = state_48519;
(statearr_48532[(10)] = inst_48477);

return statearr_48532;
})();
var statearr_48533_49761 = state_48519__$1;
(statearr_48533_49761[(2)] = null);

(statearr_48533_49761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48520 === (4))){
var inst_48477 = (state_48519[(10)]);
var state_48519__$1 = state_48519;
return cljs.core.async.ioc_alts_BANG_(state_48519__$1,(7),inst_48477);
} else {
if((state_val_48520 === (6))){
var inst_48514 = (state_48519[(2)]);
var state_48519__$1 = state_48519;
var statearr_48535_49763 = state_48519__$1;
(statearr_48535_49763[(2)] = inst_48514);

(statearr_48535_49763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48520 === (3))){
var inst_48516 = (state_48519[(2)]);
var state_48519__$1 = state_48519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48519__$1,inst_48516);
} else {
if((state_val_48520 === (2))){
var inst_48477 = (state_48519[(10)]);
var inst_48479 = cljs.core.count(inst_48477);
var inst_48480 = (inst_48479 > (0));
var state_48519__$1 = state_48519;
if(cljs.core.truth_(inst_48480)){
var statearr_48537_49764 = state_48519__$1;
(statearr_48537_49764[(1)] = (4));

} else {
var statearr_48538_49765 = state_48519__$1;
(statearr_48538_49765[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48520 === (11))){
var inst_48477 = (state_48519[(10)]);
var inst_48507 = (state_48519[(2)]);
var tmp48536 = inst_48477;
var inst_48477__$1 = tmp48536;
var state_48519__$1 = (function (){var statearr_48546 = state_48519;
(statearr_48546[(11)] = inst_48507);

(statearr_48546[(10)] = inst_48477__$1);

return statearr_48546;
})();
var statearr_48547_49767 = state_48519__$1;
(statearr_48547_49767[(2)] = null);

(statearr_48547_49767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48520 === (9))){
var inst_48491 = (state_48519[(7)]);
var state_48519__$1 = state_48519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48519__$1,(11),out,inst_48491);
} else {
if((state_val_48520 === (5))){
var inst_48512 = cljs.core.async.close_BANG_(out);
var state_48519__$1 = state_48519;
var statearr_48561_49768 = state_48519__$1;
(statearr_48561_49768[(2)] = inst_48512);

(statearr_48561_49768[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48520 === (10))){
var inst_48510 = (state_48519[(2)]);
var state_48519__$1 = state_48519;
var statearr_48562_49769 = state_48519__$1;
(statearr_48562_49769[(2)] = inst_48510);

(statearr_48562_49769[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48520 === (8))){
var inst_48492 = (state_48519[(9)]);
var inst_48491 = (state_48519[(7)]);
var inst_48490 = (state_48519[(8)]);
var inst_48477 = (state_48519[(10)]);
var inst_48499 = (function (){var cs = inst_48477;
var vec__48486 = inst_48490;
var v = inst_48491;
var c = inst_48492;
return (function (p1__48459_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48459_SHARP_);
});
})();
var inst_48500 = cljs.core.filterv(inst_48499,inst_48477);
var inst_48477__$1 = inst_48500;
var state_48519__$1 = (function (){var statearr_48563 = state_48519;
(statearr_48563[(10)] = inst_48477__$1);

return statearr_48563;
})();
var statearr_48564_49770 = state_48519__$1;
(statearr_48564_49770[(2)] = null);

(statearr_48564_49770[(1)] = (2));


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
var cljs$core$async$state_machine__46502__auto__ = null;
var cljs$core$async$state_machine__46502__auto____0 = (function (){
var statearr_48565 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48565[(0)] = cljs$core$async$state_machine__46502__auto__);

(statearr_48565[(1)] = (1));

return statearr_48565;
});
var cljs$core$async$state_machine__46502__auto____1 = (function (state_48519){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_48519);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e48566){var ex__46505__auto__ = e48566;
var statearr_48567_49771 = state_48519;
(statearr_48567_49771[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_48519[(4)]))){
var statearr_48568_49772 = state_48519;
(statearr_48568_49772[(1)] = cljs.core.first((state_48519[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49773 = state_48519;
state_48519 = G__49773;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$state_machine__46502__auto__ = function(state_48519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46502__auto____1.call(this,state_48519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46502__auto____0;
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46502__auto____1;
return cljs$core$async$state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_48573 = f__46657__auto__();
(statearr_48573[(6)] = c__46656__auto___49757);

return statearr_48573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
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
var G__48575 = arguments.length;
switch (G__48575) {
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
var c__46656__auto___49775 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_48602){
var state_val_48603 = (state_48602[(1)]);
if((state_val_48603 === (7))){
var inst_48582 = (state_48602[(7)]);
var inst_48582__$1 = (state_48602[(2)]);
var inst_48584 = (inst_48582__$1 == null);
var inst_48585 = cljs.core.not(inst_48584);
var state_48602__$1 = (function (){var statearr_48604 = state_48602;
(statearr_48604[(7)] = inst_48582__$1);

return statearr_48604;
})();
if(inst_48585){
var statearr_48605_49776 = state_48602__$1;
(statearr_48605_49776[(1)] = (8));

} else {
var statearr_48606_49777 = state_48602__$1;
(statearr_48606_49777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (1))){
var inst_48577 = (0);
var state_48602__$1 = (function (){var statearr_48607 = state_48602;
(statearr_48607[(8)] = inst_48577);

return statearr_48607;
})();
var statearr_48608_49778 = state_48602__$1;
(statearr_48608_49778[(2)] = null);

(statearr_48608_49778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (4))){
var state_48602__$1 = state_48602;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48602__$1,(7),ch);
} else {
if((state_val_48603 === (6))){
var inst_48596 = (state_48602[(2)]);
var state_48602__$1 = state_48602;
var statearr_48609_49779 = state_48602__$1;
(statearr_48609_49779[(2)] = inst_48596);

(statearr_48609_49779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (3))){
var inst_48598 = (state_48602[(2)]);
var inst_48599 = cljs.core.async.close_BANG_(out);
var state_48602__$1 = (function (){var statearr_48610 = state_48602;
(statearr_48610[(9)] = inst_48598);

return statearr_48610;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48602__$1,inst_48599);
} else {
if((state_val_48603 === (2))){
var inst_48577 = (state_48602[(8)]);
var inst_48579 = (inst_48577 < n);
var state_48602__$1 = state_48602;
if(cljs.core.truth_(inst_48579)){
var statearr_48611_49780 = state_48602__$1;
(statearr_48611_49780[(1)] = (4));

} else {
var statearr_48612_49781 = state_48602__$1;
(statearr_48612_49781[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (11))){
var inst_48577 = (state_48602[(8)]);
var inst_48588 = (state_48602[(2)]);
var inst_48589 = (inst_48577 + (1));
var inst_48577__$1 = inst_48589;
var state_48602__$1 = (function (){var statearr_48613 = state_48602;
(statearr_48613[(10)] = inst_48588);

(statearr_48613[(8)] = inst_48577__$1);

return statearr_48613;
})();
var statearr_48614_49782 = state_48602__$1;
(statearr_48614_49782[(2)] = null);

(statearr_48614_49782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (9))){
var state_48602__$1 = state_48602;
var statearr_48615_49783 = state_48602__$1;
(statearr_48615_49783[(2)] = null);

(statearr_48615_49783[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (5))){
var state_48602__$1 = state_48602;
var statearr_48616_49785 = state_48602__$1;
(statearr_48616_49785[(2)] = null);

(statearr_48616_49785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (10))){
var inst_48593 = (state_48602[(2)]);
var state_48602__$1 = state_48602;
var statearr_48617_49786 = state_48602__$1;
(statearr_48617_49786[(2)] = inst_48593);

(statearr_48617_49786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48603 === (8))){
var inst_48582 = (state_48602[(7)]);
var state_48602__$1 = state_48602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48602__$1,(11),out,inst_48582);
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
var cljs$core$async$state_machine__46502__auto__ = null;
var cljs$core$async$state_machine__46502__auto____0 = (function (){
var statearr_48618 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48618[(0)] = cljs$core$async$state_machine__46502__auto__);

(statearr_48618[(1)] = (1));

return statearr_48618;
});
var cljs$core$async$state_machine__46502__auto____1 = (function (state_48602){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_48602);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e48619){var ex__46505__auto__ = e48619;
var statearr_48620_49794 = state_48602;
(statearr_48620_49794[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_48602[(4)]))){
var statearr_48621_49795 = state_48602;
(statearr_48621_49795[(1)] = cljs.core.first((state_48602[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49800 = state_48602;
state_48602 = G__49800;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$state_machine__46502__auto__ = function(state_48602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46502__auto____1.call(this,state_48602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46502__auto____0;
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46502__auto____1;
return cljs$core$async$state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_48622 = f__46657__auto__();
(statearr_48622[(6)] = c__46656__auto___49775);

return statearr_48622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48624 = (function (f,ch,meta48625){
this.f = f;
this.ch = ch;
this.meta48625 = meta48625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48626,meta48625__$1){
var self__ = this;
var _48626__$1 = this;
return (new cljs.core.async.t_cljs$core$async48624(self__.f,self__.ch,meta48625__$1));
}));

(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48626){
var self__ = this;
var _48626__$1 = this;
return self__.meta48625;
}));

(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48627 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48627 = (function (f,ch,meta48625,_,fn1,meta48628){
this.f = f;
this.ch = ch;
this.meta48625 = meta48625;
this._ = _;
this.fn1 = fn1;
this.meta48628 = meta48628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48629,meta48628__$1){
var self__ = this;
var _48629__$1 = this;
return (new cljs.core.async.t_cljs$core$async48627(self__.f,self__.ch,self__.meta48625,self__._,self__.fn1,meta48628__$1));
}));

(cljs.core.async.t_cljs$core$async48627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48629){
var self__ = this;
var _48629__$1 = this;
return self__.meta48628;
}));

(cljs.core.async.t_cljs$core$async48627.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48627.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async48627.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48627.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__48623_SHARP_){
var G__48630 = (((p1__48623_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48623_SHARP_) : self__.f.call(null,p1__48623_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48630) : f1.call(null,G__48630));
});
}));

(cljs.core.async.t_cljs$core$async48627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48625","meta48625",2045706908,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48624","cljs.core.async/t_cljs$core$async48624",1903005827,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48628","meta48628",671146178,null)], null);
}));

(cljs.core.async.t_cljs$core$async48627.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48627");

(cljs.core.async.t_cljs$core$async48627.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48627");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48627.
 */
cljs.core.async.__GT_t_cljs$core$async48627 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48627(f__$1,ch__$1,meta48625__$1,___$2,fn1__$1,meta48628){
return (new cljs.core.async.t_cljs$core$async48627(f__$1,ch__$1,meta48625__$1,___$2,fn1__$1,meta48628));
});

}

return (new cljs.core.async.t_cljs$core$async48627(self__.f,self__.ch,self__.meta48625,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48633 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48633) : self__.f.call(null,G__48633));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48624.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async48624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48625","meta48625",2045706908,null)], null);
}));

(cljs.core.async.t_cljs$core$async48624.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48624");

(cljs.core.async.t_cljs$core$async48624.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48624");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48624.
 */
cljs.core.async.__GT_t_cljs$core$async48624 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48624(f__$1,ch__$1,meta48625){
return (new cljs.core.async.t_cljs$core$async48624(f__$1,ch__$1,meta48625));
});

}

return (new cljs.core.async.t_cljs$core$async48624(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48636 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48636 = (function (f,ch,meta48637){
this.f = f;
this.ch = ch;
this.meta48637 = meta48637;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48638,meta48637__$1){
var self__ = this;
var _48638__$1 = this;
return (new cljs.core.async.t_cljs$core$async48636(self__.f,self__.ch,meta48637__$1));
}));

(cljs.core.async.t_cljs$core$async48636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48638){
var self__ = this;
var _48638__$1 = this;
return self__.meta48637;
}));

(cljs.core.async.t_cljs$core$async48636.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48636.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48636.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48636.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48636.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48636.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async48636.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48637","meta48637",491002508,null)], null);
}));

(cljs.core.async.t_cljs$core$async48636.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48636.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48636");

(cljs.core.async.t_cljs$core$async48636.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48636");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48636.
 */
cljs.core.async.__GT_t_cljs$core$async48636 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48636(f__$1,ch__$1,meta48637){
return (new cljs.core.async.t_cljs$core$async48636(f__$1,ch__$1,meta48637));
});

}

return (new cljs.core.async.t_cljs$core$async48636(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48641 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48641 = (function (p,ch,meta48642){
this.p = p;
this.ch = ch;
this.meta48642 = meta48642;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48643,meta48642__$1){
var self__ = this;
var _48643__$1 = this;
return (new cljs.core.async.t_cljs$core$async48641(self__.p,self__.ch,meta48642__$1));
}));

(cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48643){
var self__ = this;
var _48643__$1 = this;
return self__.meta48642;
}));

(cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48641.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async48641.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48642","meta48642",239572545,null)], null);
}));

(cljs.core.async.t_cljs$core$async48641.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48641.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48641");

(cljs.core.async.t_cljs$core$async48641.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48641");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48641.
 */
cljs.core.async.__GT_t_cljs$core$async48641 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48641(p__$1,ch__$1,meta48642){
return (new cljs.core.async.t_cljs$core$async48641(p__$1,ch__$1,meta48642));
});

}

return (new cljs.core.async.t_cljs$core$async48641(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__48647 = arguments.length;
switch (G__48647) {
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
var c__46656__auto___49827 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_48672){
var state_val_48674 = (state_48672[(1)]);
if((state_val_48674 === (7))){
var inst_48668 = (state_48672[(2)]);
var state_48672__$1 = state_48672;
var statearr_48676_49828 = state_48672__$1;
(statearr_48676_49828[(2)] = inst_48668);

(statearr_48676_49828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48674 === (1))){
var state_48672__$1 = state_48672;
var statearr_48678_49829 = state_48672__$1;
(statearr_48678_49829[(2)] = null);

(statearr_48678_49829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48674 === (4))){
var inst_48654 = (state_48672[(7)]);
var inst_48654__$1 = (state_48672[(2)]);
var inst_48655 = (inst_48654__$1 == null);
var state_48672__$1 = (function (){var statearr_48680 = state_48672;
(statearr_48680[(7)] = inst_48654__$1);

return statearr_48680;
})();
if(cljs.core.truth_(inst_48655)){
var statearr_48682_49830 = state_48672__$1;
(statearr_48682_49830[(1)] = (5));

} else {
var statearr_48683_49831 = state_48672__$1;
(statearr_48683_49831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48674 === (6))){
var inst_48654 = (state_48672[(7)]);
var inst_48659 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48654) : p.call(null,inst_48654));
var state_48672__$1 = state_48672;
if(cljs.core.truth_(inst_48659)){
var statearr_48684_49832 = state_48672__$1;
(statearr_48684_49832[(1)] = (8));

} else {
var statearr_48685_49833 = state_48672__$1;
(statearr_48685_49833[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48674 === (3))){
var inst_48670 = (state_48672[(2)]);
var state_48672__$1 = state_48672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48672__$1,inst_48670);
} else {
if((state_val_48674 === (2))){
var state_48672__$1 = state_48672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48672__$1,(4),ch);
} else {
if((state_val_48674 === (11))){
var inst_48662 = (state_48672[(2)]);
var state_48672__$1 = state_48672;
var statearr_48686_49834 = state_48672__$1;
(statearr_48686_49834[(2)] = inst_48662);

(statearr_48686_49834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48674 === (9))){
var state_48672__$1 = state_48672;
var statearr_48688_49835 = state_48672__$1;
(statearr_48688_49835[(2)] = null);

(statearr_48688_49835[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48674 === (5))){
var inst_48657 = cljs.core.async.close_BANG_(out);
var state_48672__$1 = state_48672;
var statearr_48691_49836 = state_48672__$1;
(statearr_48691_49836[(2)] = inst_48657);

(statearr_48691_49836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48674 === (10))){
var inst_48665 = (state_48672[(2)]);
var state_48672__$1 = (function (){var statearr_48692 = state_48672;
(statearr_48692[(8)] = inst_48665);

return statearr_48692;
})();
var statearr_48693_49837 = state_48672__$1;
(statearr_48693_49837[(2)] = null);

(statearr_48693_49837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48674 === (8))){
var inst_48654 = (state_48672[(7)]);
var state_48672__$1 = state_48672;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48672__$1,(11),out,inst_48654);
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
var cljs$core$async$state_machine__46502__auto__ = null;
var cljs$core$async$state_machine__46502__auto____0 = (function (){
var statearr_48694 = [null,null,null,null,null,null,null,null,null];
(statearr_48694[(0)] = cljs$core$async$state_machine__46502__auto__);

(statearr_48694[(1)] = (1));

return statearr_48694;
});
var cljs$core$async$state_machine__46502__auto____1 = (function (state_48672){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_48672);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e48695){var ex__46505__auto__ = e48695;
var statearr_48696_49838 = state_48672;
(statearr_48696_49838[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_48672[(4)]))){
var statearr_48697_49839 = state_48672;
(statearr_48697_49839[(1)] = cljs.core.first((state_48672[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49846 = state_48672;
state_48672 = G__49846;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$state_machine__46502__auto__ = function(state_48672){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46502__auto____1.call(this,state_48672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46502__auto____0;
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46502__auto____1;
return cljs$core$async$state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_48711 = f__46657__auto__();
(statearr_48711[(6)] = c__46656__auto___49827);

return statearr_48711;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48719 = arguments.length;
switch (G__48719) {
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
var c__46656__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_48798){
var state_val_48799 = (state_48798[(1)]);
if((state_val_48799 === (7))){
var inst_48794 = (state_48798[(2)]);
var state_48798__$1 = state_48798;
var statearr_48800_49848 = state_48798__$1;
(statearr_48800_49848[(2)] = inst_48794);

(statearr_48800_49848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (20))){
var inst_48760 = (state_48798[(7)]);
var inst_48775 = (state_48798[(2)]);
var inst_48776 = cljs.core.next(inst_48760);
var inst_48743 = inst_48776;
var inst_48744 = null;
var inst_48745 = (0);
var inst_48746 = (0);
var state_48798__$1 = (function (){var statearr_48801 = state_48798;
(statearr_48801[(8)] = inst_48745);

(statearr_48801[(9)] = inst_48743);

(statearr_48801[(10)] = inst_48775);

(statearr_48801[(11)] = inst_48746);

(statearr_48801[(12)] = inst_48744);

return statearr_48801;
})();
var statearr_48806_49849 = state_48798__$1;
(statearr_48806_49849[(2)] = null);

(statearr_48806_49849[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (1))){
var state_48798__$1 = state_48798;
var statearr_48807_49850 = state_48798__$1;
(statearr_48807_49850[(2)] = null);

(statearr_48807_49850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (4))){
var inst_48732 = (state_48798[(13)]);
var inst_48732__$1 = (state_48798[(2)]);
var inst_48733 = (inst_48732__$1 == null);
var state_48798__$1 = (function (){var statearr_48808 = state_48798;
(statearr_48808[(13)] = inst_48732__$1);

return statearr_48808;
})();
if(cljs.core.truth_(inst_48733)){
var statearr_48811_49851 = state_48798__$1;
(statearr_48811_49851[(1)] = (5));

} else {
var statearr_48812_49852 = state_48798__$1;
(statearr_48812_49852[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (15))){
var state_48798__$1 = state_48798;
var statearr_48816_49853 = state_48798__$1;
(statearr_48816_49853[(2)] = null);

(statearr_48816_49853[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (21))){
var state_48798__$1 = state_48798;
var statearr_48817_49854 = state_48798__$1;
(statearr_48817_49854[(2)] = null);

(statearr_48817_49854[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (13))){
var inst_48745 = (state_48798[(8)]);
var inst_48743 = (state_48798[(9)]);
var inst_48746 = (state_48798[(11)]);
var inst_48744 = (state_48798[(12)]);
var inst_48756 = (state_48798[(2)]);
var inst_48757 = (inst_48746 + (1));
var tmp48813 = inst_48745;
var tmp48814 = inst_48743;
var tmp48815 = inst_48744;
var inst_48743__$1 = tmp48814;
var inst_48744__$1 = tmp48815;
var inst_48745__$1 = tmp48813;
var inst_48746__$1 = inst_48757;
var state_48798__$1 = (function (){var statearr_48819 = state_48798;
(statearr_48819[(8)] = inst_48745__$1);

(statearr_48819[(9)] = inst_48743__$1);

(statearr_48819[(14)] = inst_48756);

(statearr_48819[(11)] = inst_48746__$1);

(statearr_48819[(12)] = inst_48744__$1);

return statearr_48819;
})();
var statearr_48820_49855 = state_48798__$1;
(statearr_48820_49855[(2)] = null);

(statearr_48820_49855[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (22))){
var state_48798__$1 = state_48798;
var statearr_48821_49858 = state_48798__$1;
(statearr_48821_49858[(2)] = null);

(statearr_48821_49858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (6))){
var inst_48732 = (state_48798[(13)]);
var inst_48741 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48732) : f.call(null,inst_48732));
var inst_48742 = cljs.core.seq(inst_48741);
var inst_48743 = inst_48742;
var inst_48744 = null;
var inst_48745 = (0);
var inst_48746 = (0);
var state_48798__$1 = (function (){var statearr_48823 = state_48798;
(statearr_48823[(8)] = inst_48745);

(statearr_48823[(9)] = inst_48743);

(statearr_48823[(11)] = inst_48746);

(statearr_48823[(12)] = inst_48744);

return statearr_48823;
})();
var statearr_48824_49863 = state_48798__$1;
(statearr_48824_49863[(2)] = null);

(statearr_48824_49863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (17))){
var inst_48760 = (state_48798[(7)]);
var inst_48768 = cljs.core.chunk_first(inst_48760);
var inst_48769 = cljs.core.chunk_rest(inst_48760);
var inst_48770 = cljs.core.count(inst_48768);
var inst_48743 = inst_48769;
var inst_48744 = inst_48768;
var inst_48745 = inst_48770;
var inst_48746 = (0);
var state_48798__$1 = (function (){var statearr_48825 = state_48798;
(statearr_48825[(8)] = inst_48745);

(statearr_48825[(9)] = inst_48743);

(statearr_48825[(11)] = inst_48746);

(statearr_48825[(12)] = inst_48744);

return statearr_48825;
})();
var statearr_48826_49864 = state_48798__$1;
(statearr_48826_49864[(2)] = null);

(statearr_48826_49864[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (3))){
var inst_48796 = (state_48798[(2)]);
var state_48798__$1 = state_48798;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48798__$1,inst_48796);
} else {
if((state_val_48799 === (12))){
var inst_48784 = (state_48798[(2)]);
var state_48798__$1 = state_48798;
var statearr_48827_49865 = state_48798__$1;
(statearr_48827_49865[(2)] = inst_48784);

(statearr_48827_49865[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (2))){
var state_48798__$1 = state_48798;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48798__$1,(4),in$);
} else {
if((state_val_48799 === (23))){
var inst_48792 = (state_48798[(2)]);
var state_48798__$1 = state_48798;
var statearr_48835_49866 = state_48798__$1;
(statearr_48835_49866[(2)] = inst_48792);

(statearr_48835_49866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (19))){
var inst_48779 = (state_48798[(2)]);
var state_48798__$1 = state_48798;
var statearr_48836_49867 = state_48798__$1;
(statearr_48836_49867[(2)] = inst_48779);

(statearr_48836_49867[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (11))){
var inst_48743 = (state_48798[(9)]);
var inst_48760 = (state_48798[(7)]);
var inst_48760__$1 = cljs.core.seq(inst_48743);
var state_48798__$1 = (function (){var statearr_48837 = state_48798;
(statearr_48837[(7)] = inst_48760__$1);

return statearr_48837;
})();
if(inst_48760__$1){
var statearr_48838_49868 = state_48798__$1;
(statearr_48838_49868[(1)] = (14));

} else {
var statearr_48839_49869 = state_48798__$1;
(statearr_48839_49869[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (9))){
var inst_48786 = (state_48798[(2)]);
var inst_48787 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_48798__$1 = (function (){var statearr_48840 = state_48798;
(statearr_48840[(15)] = inst_48786);

return statearr_48840;
})();
if(cljs.core.truth_(inst_48787)){
var statearr_48841_49870 = state_48798__$1;
(statearr_48841_49870[(1)] = (21));

} else {
var statearr_48842_49871 = state_48798__$1;
(statearr_48842_49871[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (5))){
var inst_48735 = cljs.core.async.close_BANG_(out);
var state_48798__$1 = state_48798;
var statearr_48843_49872 = state_48798__$1;
(statearr_48843_49872[(2)] = inst_48735);

(statearr_48843_49872[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (14))){
var inst_48760 = (state_48798[(7)]);
var inst_48766 = cljs.core.chunked_seq_QMARK_(inst_48760);
var state_48798__$1 = state_48798;
if(inst_48766){
var statearr_48844_49873 = state_48798__$1;
(statearr_48844_49873[(1)] = (17));

} else {
var statearr_48847_49874 = state_48798__$1;
(statearr_48847_49874[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (16))){
var inst_48782 = (state_48798[(2)]);
var state_48798__$1 = state_48798;
var statearr_48850_49875 = state_48798__$1;
(statearr_48850_49875[(2)] = inst_48782);

(statearr_48850_49875[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48799 === (10))){
var inst_48746 = (state_48798[(11)]);
var inst_48744 = (state_48798[(12)]);
var inst_48754 = cljs.core._nth(inst_48744,inst_48746);
var state_48798__$1 = state_48798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48798__$1,(13),out,inst_48754);
} else {
if((state_val_48799 === (18))){
var inst_48760 = (state_48798[(7)]);
var inst_48773 = cljs.core.first(inst_48760);
var state_48798__$1 = state_48798;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48798__$1,(20),out,inst_48773);
} else {
if((state_val_48799 === (8))){
var inst_48745 = (state_48798[(8)]);
var inst_48746 = (state_48798[(11)]);
var inst_48751 = (inst_48746 < inst_48745);
var inst_48752 = inst_48751;
var state_48798__$1 = state_48798;
if(cljs.core.truth_(inst_48752)){
var statearr_48852_49876 = state_48798__$1;
(statearr_48852_49876[(1)] = (10));

} else {
var statearr_48853_49877 = state_48798__$1;
(statearr_48853_49877[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__46502__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46502__auto____0 = (function (){
var statearr_48855 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48855[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46502__auto__);

(statearr_48855[(1)] = (1));

return statearr_48855;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46502__auto____1 = (function (state_48798){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_48798);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e48857){var ex__46505__auto__ = e48857;
var statearr_48858_49878 = state_48798;
(statearr_48858_49878[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_48798[(4)]))){
var statearr_48859_49879 = state_48798;
(statearr_48859_49879[(1)] = cljs.core.first((state_48798[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49880 = state_48798;
state_48798 = G__49880;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46502__auto__ = function(state_48798){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46502__auto____1.call(this,state_48798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46502__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46502__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_48860 = f__46657__auto__();
(statearr_48860[(6)] = c__46656__auto__);

return statearr_48860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
}));

return c__46656__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48863 = arguments.length;
switch (G__48863) {
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
var G__48869 = arguments.length;
switch (G__48869) {
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
var G__48871 = arguments.length;
switch (G__48871) {
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
var c__46656__auto___49884 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_48908){
var state_val_48909 = (state_48908[(1)]);
if((state_val_48909 === (7))){
var inst_48903 = (state_48908[(2)]);
var state_48908__$1 = state_48908;
var statearr_48910_49885 = state_48908__$1;
(statearr_48910_49885[(2)] = inst_48903);

(statearr_48910_49885[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48909 === (1))){
var inst_48882 = null;
var state_48908__$1 = (function (){var statearr_48911 = state_48908;
(statearr_48911[(7)] = inst_48882);

return statearr_48911;
})();
var statearr_48912_49886 = state_48908__$1;
(statearr_48912_49886[(2)] = null);

(statearr_48912_49886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48909 === (4))){
var inst_48888 = (state_48908[(8)]);
var inst_48888__$1 = (state_48908[(2)]);
var inst_48889 = (inst_48888__$1 == null);
var inst_48890 = cljs.core.not(inst_48889);
var state_48908__$1 = (function (){var statearr_48913 = state_48908;
(statearr_48913[(8)] = inst_48888__$1);

return statearr_48913;
})();
if(inst_48890){
var statearr_48914_49887 = state_48908__$1;
(statearr_48914_49887[(1)] = (5));

} else {
var statearr_48915_49888 = state_48908__$1;
(statearr_48915_49888[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48909 === (6))){
var state_48908__$1 = state_48908;
var statearr_48916_49889 = state_48908__$1;
(statearr_48916_49889[(2)] = null);

(statearr_48916_49889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48909 === (3))){
var inst_48905 = (state_48908[(2)]);
var inst_48906 = cljs.core.async.close_BANG_(out);
var state_48908__$1 = (function (){var statearr_48917 = state_48908;
(statearr_48917[(9)] = inst_48905);

return statearr_48917;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48908__$1,inst_48906);
} else {
if((state_val_48909 === (2))){
var state_48908__$1 = state_48908;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48908__$1,(4),ch);
} else {
if((state_val_48909 === (11))){
var inst_48888 = (state_48908[(8)]);
var inst_48897 = (state_48908[(2)]);
var inst_48882 = inst_48888;
var state_48908__$1 = (function (){var statearr_48918 = state_48908;
(statearr_48918[(7)] = inst_48882);

(statearr_48918[(10)] = inst_48897);

return statearr_48918;
})();
var statearr_48919_49890 = state_48908__$1;
(statearr_48919_49890[(2)] = null);

(statearr_48919_49890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48909 === (9))){
var inst_48888 = (state_48908[(8)]);
var state_48908__$1 = state_48908;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48908__$1,(11),out,inst_48888);
} else {
if((state_val_48909 === (5))){
var inst_48882 = (state_48908[(7)]);
var inst_48888 = (state_48908[(8)]);
var inst_48892 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48888,inst_48882);
var state_48908__$1 = state_48908;
if(inst_48892){
var statearr_48921_49891 = state_48908__$1;
(statearr_48921_49891[(1)] = (8));

} else {
var statearr_48922_49892 = state_48908__$1;
(statearr_48922_49892[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48909 === (10))){
var inst_48900 = (state_48908[(2)]);
var state_48908__$1 = state_48908;
var statearr_48923_49893 = state_48908__$1;
(statearr_48923_49893[(2)] = inst_48900);

(statearr_48923_49893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48909 === (8))){
var inst_48882 = (state_48908[(7)]);
var tmp48920 = inst_48882;
var inst_48882__$1 = tmp48920;
var state_48908__$1 = (function (){var statearr_48924 = state_48908;
(statearr_48924[(7)] = inst_48882__$1);

return statearr_48924;
})();
var statearr_48925_49894 = state_48908__$1;
(statearr_48925_49894[(2)] = null);

(statearr_48925_49894[(1)] = (2));


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
var cljs$core$async$state_machine__46502__auto__ = null;
var cljs$core$async$state_machine__46502__auto____0 = (function (){
var statearr_48926 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48926[(0)] = cljs$core$async$state_machine__46502__auto__);

(statearr_48926[(1)] = (1));

return statearr_48926;
});
var cljs$core$async$state_machine__46502__auto____1 = (function (state_48908){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_48908);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e48927){var ex__46505__auto__ = e48927;
var statearr_48928_49895 = state_48908;
(statearr_48928_49895[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_48908[(4)]))){
var statearr_48929_49896 = state_48908;
(statearr_48929_49896[(1)] = cljs.core.first((state_48908[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49897 = state_48908;
state_48908 = G__49897;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$state_machine__46502__auto__ = function(state_48908){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46502__auto____1.call(this,state_48908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46502__auto____0;
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46502__auto____1;
return cljs$core$async$state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_48930 = f__46657__auto__();
(statearr_48930[(6)] = c__46656__auto___49884);

return statearr_48930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48932 = arguments.length;
switch (G__48932) {
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
var c__46656__auto___49899 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_48978){
var state_val_48979 = (state_48978[(1)]);
if((state_val_48979 === (7))){
var inst_48974 = (state_48978[(2)]);
var state_48978__$1 = state_48978;
var statearr_48980_49900 = state_48978__$1;
(statearr_48980_49900[(2)] = inst_48974);

(statearr_48980_49900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48979 === (1))){
var inst_48937 = (new Array(n));
var inst_48938 = inst_48937;
var inst_48939 = (0);
var state_48978__$1 = (function (){var statearr_48981 = state_48978;
(statearr_48981[(7)] = inst_48938);

(statearr_48981[(8)] = inst_48939);

return statearr_48981;
})();
var statearr_48982_49901 = state_48978__$1;
(statearr_48982_49901[(2)] = null);

(statearr_48982_49901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48979 === (4))){
var inst_48942 = (state_48978[(9)]);
var inst_48942__$1 = (state_48978[(2)]);
var inst_48943 = (inst_48942__$1 == null);
var inst_48944 = cljs.core.not(inst_48943);
var state_48978__$1 = (function (){var statearr_48983 = state_48978;
(statearr_48983[(9)] = inst_48942__$1);

return statearr_48983;
})();
if(inst_48944){
var statearr_48984_49902 = state_48978__$1;
(statearr_48984_49902[(1)] = (5));

} else {
var statearr_48985_49903 = state_48978__$1;
(statearr_48985_49903[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48979 === (15))){
var inst_48968 = (state_48978[(2)]);
var state_48978__$1 = state_48978;
var statearr_48986_49904 = state_48978__$1;
(statearr_48986_49904[(2)] = inst_48968);

(statearr_48986_49904[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48979 === (13))){
var state_48978__$1 = state_48978;
var statearr_48987_49905 = state_48978__$1;
(statearr_48987_49905[(2)] = null);

(statearr_48987_49905[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48979 === (6))){
var inst_48939 = (state_48978[(8)]);
var inst_48964 = (inst_48939 > (0));
var state_48978__$1 = state_48978;
if(cljs.core.truth_(inst_48964)){
var statearr_48988_49906 = state_48978__$1;
(statearr_48988_49906[(1)] = (12));

} else {
var statearr_48989_49907 = state_48978__$1;
(statearr_48989_49907[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48979 === (3))){
var inst_48976 = (state_48978[(2)]);
var state_48978__$1 = state_48978;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48978__$1,inst_48976);
} else {
if((state_val_48979 === (12))){
var inst_48938 = (state_48978[(7)]);
var inst_48966 = cljs.core.vec(inst_48938);
var state_48978__$1 = state_48978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48978__$1,(15),out,inst_48966);
} else {
if((state_val_48979 === (2))){
var state_48978__$1 = state_48978;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48978__$1,(4),ch);
} else {
if((state_val_48979 === (11))){
var inst_48955 = (state_48978[(2)]);
var inst_48956 = (new Array(n));
var inst_48938 = inst_48956;
var inst_48939 = (0);
var state_48978__$1 = (function (){var statearr_48990 = state_48978;
(statearr_48990[(7)] = inst_48938);

(statearr_48990[(8)] = inst_48939);

(statearr_48990[(10)] = inst_48955);

return statearr_48990;
})();
var statearr_48991_49908 = state_48978__$1;
(statearr_48991_49908[(2)] = null);

(statearr_48991_49908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48979 === (9))){
var inst_48938 = (state_48978[(7)]);
var inst_48953 = cljs.core.vec(inst_48938);
var state_48978__$1 = state_48978;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48978__$1,(11),out,inst_48953);
} else {
if((state_val_48979 === (5))){
var inst_48938 = (state_48978[(7)]);
var inst_48939 = (state_48978[(8)]);
var inst_48942 = (state_48978[(9)]);
var inst_48947 = (state_48978[(11)]);
var inst_48946 = (inst_48938[inst_48939] = inst_48942);
var inst_48947__$1 = (inst_48939 + (1));
var inst_48949 = (inst_48947__$1 < n);
var state_48978__$1 = (function (){var statearr_48992 = state_48978;
(statearr_48992[(12)] = inst_48946);

(statearr_48992[(11)] = inst_48947__$1);

return statearr_48992;
})();
if(cljs.core.truth_(inst_48949)){
var statearr_48993_49909 = state_48978__$1;
(statearr_48993_49909[(1)] = (8));

} else {
var statearr_48994_49910 = state_48978__$1;
(statearr_48994_49910[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48979 === (14))){
var inst_48971 = (state_48978[(2)]);
var inst_48972 = cljs.core.async.close_BANG_(out);
var state_48978__$1 = (function (){var statearr_49004 = state_48978;
(statearr_49004[(13)] = inst_48971);

return statearr_49004;
})();
var statearr_49011_49911 = state_48978__$1;
(statearr_49011_49911[(2)] = inst_48972);

(statearr_49011_49911[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48979 === (10))){
var inst_48959 = (state_48978[(2)]);
var state_48978__$1 = state_48978;
var statearr_49012_49912 = state_48978__$1;
(statearr_49012_49912[(2)] = inst_48959);

(statearr_49012_49912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48979 === (8))){
var inst_48938 = (state_48978[(7)]);
var inst_48947 = (state_48978[(11)]);
var tmp48995 = inst_48938;
var inst_48938__$1 = tmp48995;
var inst_48939 = inst_48947;
var state_48978__$1 = (function (){var statearr_49019 = state_48978;
(statearr_49019[(7)] = inst_48938__$1);

(statearr_49019[(8)] = inst_48939);

return statearr_49019;
})();
var statearr_49020_49913 = state_48978__$1;
(statearr_49020_49913[(2)] = null);

(statearr_49020_49913[(1)] = (2));


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
var cljs$core$async$state_machine__46502__auto__ = null;
var cljs$core$async$state_machine__46502__auto____0 = (function (){
var statearr_49021 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49021[(0)] = cljs$core$async$state_machine__46502__auto__);

(statearr_49021[(1)] = (1));

return statearr_49021;
});
var cljs$core$async$state_machine__46502__auto____1 = (function (state_48978){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_48978);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e49022){var ex__46505__auto__ = e49022;
var statearr_49023_49914 = state_48978;
(statearr_49023_49914[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_48978[(4)]))){
var statearr_49024_49915 = state_48978;
(statearr_49024_49915[(1)] = cljs.core.first((state_48978[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49917 = state_48978;
state_48978 = G__49917;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$state_machine__46502__auto__ = function(state_48978){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46502__auto____1.call(this,state_48978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46502__auto____0;
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46502__auto____1;
return cljs$core$async$state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_49039 = f__46657__auto__();
(statearr_49039[(6)] = c__46656__auto___49899);

return statearr_49039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__49047 = arguments.length;
switch (G__49047) {
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
var c__46656__auto___49922 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_49098){
var state_val_49099 = (state_49098[(1)]);
if((state_val_49099 === (7))){
var inst_49094 = (state_49098[(2)]);
var state_49098__$1 = state_49098;
var statearr_49100_49923 = state_49098__$1;
(statearr_49100_49923[(2)] = inst_49094);

(statearr_49100_49923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (1))){
var inst_49051 = [];
var inst_49052 = inst_49051;
var inst_49053 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_49098__$1 = (function (){var statearr_49101 = state_49098;
(statearr_49101[(7)] = inst_49052);

(statearr_49101[(8)] = inst_49053);

return statearr_49101;
})();
var statearr_49102_49924 = state_49098__$1;
(statearr_49102_49924[(2)] = null);

(statearr_49102_49924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (4))){
var inst_49056 = (state_49098[(9)]);
var inst_49056__$1 = (state_49098[(2)]);
var inst_49057 = (inst_49056__$1 == null);
var inst_49058 = cljs.core.not(inst_49057);
var state_49098__$1 = (function (){var statearr_49103 = state_49098;
(statearr_49103[(9)] = inst_49056__$1);

return statearr_49103;
})();
if(inst_49058){
var statearr_49104_49928 = state_49098__$1;
(statearr_49104_49928[(1)] = (5));

} else {
var statearr_49105_49929 = state_49098__$1;
(statearr_49105_49929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (15))){
var inst_49052 = (state_49098[(7)]);
var inst_49086 = cljs.core.vec(inst_49052);
var state_49098__$1 = state_49098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49098__$1,(18),out,inst_49086);
} else {
if((state_val_49099 === (13))){
var inst_49078 = (state_49098[(2)]);
var state_49098__$1 = state_49098;
var statearr_49106_49930 = state_49098__$1;
(statearr_49106_49930[(2)] = inst_49078);

(statearr_49106_49930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (6))){
var inst_49052 = (state_49098[(7)]);
var inst_49080 = inst_49052.length;
var inst_49081 = (inst_49080 > (0));
var state_49098__$1 = state_49098;
if(cljs.core.truth_(inst_49081)){
var statearr_49107_49931 = state_49098__$1;
(statearr_49107_49931[(1)] = (15));

} else {
var statearr_49108_49932 = state_49098__$1;
(statearr_49108_49932[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (17))){
var inst_49091 = (state_49098[(2)]);
var inst_49092 = cljs.core.async.close_BANG_(out);
var state_49098__$1 = (function (){var statearr_49109 = state_49098;
(statearr_49109[(10)] = inst_49091);

return statearr_49109;
})();
var statearr_49110_49933 = state_49098__$1;
(statearr_49110_49933[(2)] = inst_49092);

(statearr_49110_49933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (3))){
var inst_49096 = (state_49098[(2)]);
var state_49098__$1 = state_49098;
return cljs.core.async.impl.ioc_helpers.return_chan(state_49098__$1,inst_49096);
} else {
if((state_val_49099 === (12))){
var inst_49052 = (state_49098[(7)]);
var inst_49071 = cljs.core.vec(inst_49052);
var state_49098__$1 = state_49098;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_49098__$1,(14),out,inst_49071);
} else {
if((state_val_49099 === (2))){
var state_49098__$1 = state_49098;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49098__$1,(4),ch);
} else {
if((state_val_49099 === (11))){
var inst_49060 = (state_49098[(11)]);
var inst_49056 = (state_49098[(9)]);
var inst_49052 = (state_49098[(7)]);
var inst_49068 = inst_49052.push(inst_49056);
var tmp49111 = inst_49052;
var inst_49052__$1 = tmp49111;
var inst_49053 = inst_49060;
var state_49098__$1 = (function (){var statearr_49112 = state_49098;
(statearr_49112[(7)] = inst_49052__$1);

(statearr_49112[(8)] = inst_49053);

(statearr_49112[(12)] = inst_49068);

return statearr_49112;
})();
var statearr_49113_49934 = state_49098__$1;
(statearr_49113_49934[(2)] = null);

(statearr_49113_49934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (9))){
var inst_49053 = (state_49098[(8)]);
var inst_49064 = cljs.core.keyword_identical_QMARK_(inst_49053,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_49098__$1 = state_49098;
var statearr_49114_49935 = state_49098__$1;
(statearr_49114_49935[(2)] = inst_49064);

(statearr_49114_49935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (5))){
var inst_49060 = (state_49098[(11)]);
var inst_49056 = (state_49098[(9)]);
var inst_49053 = (state_49098[(8)]);
var inst_49061 = (state_49098[(13)]);
var inst_49060__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_49056) : f.call(null,inst_49056));
var inst_49061__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_49060__$1,inst_49053);
var state_49098__$1 = (function (){var statearr_49115 = state_49098;
(statearr_49115[(11)] = inst_49060__$1);

(statearr_49115[(13)] = inst_49061__$1);

return statearr_49115;
})();
if(inst_49061__$1){
var statearr_49116_49936 = state_49098__$1;
(statearr_49116_49936[(1)] = (8));

} else {
var statearr_49117_49937 = state_49098__$1;
(statearr_49117_49937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (14))){
var inst_49060 = (state_49098[(11)]);
var inst_49056 = (state_49098[(9)]);
var inst_49073 = (state_49098[(2)]);
var inst_49074 = [];
var inst_49075 = inst_49074.push(inst_49056);
var inst_49052 = inst_49074;
var inst_49053 = inst_49060;
var state_49098__$1 = (function (){var statearr_49118 = state_49098;
(statearr_49118[(7)] = inst_49052);

(statearr_49118[(8)] = inst_49053);

(statearr_49118[(14)] = inst_49073);

(statearr_49118[(15)] = inst_49075);

return statearr_49118;
})();
var statearr_49119_49938 = state_49098__$1;
(statearr_49119_49938[(2)] = null);

(statearr_49119_49938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (16))){
var state_49098__$1 = state_49098;
var statearr_49120_49939 = state_49098__$1;
(statearr_49120_49939[(2)] = null);

(statearr_49120_49939[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (10))){
var inst_49066 = (state_49098[(2)]);
var state_49098__$1 = state_49098;
if(cljs.core.truth_(inst_49066)){
var statearr_49121_49940 = state_49098__$1;
(statearr_49121_49940[(1)] = (11));

} else {
var statearr_49122_49941 = state_49098__$1;
(statearr_49122_49941[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (18))){
var inst_49088 = (state_49098[(2)]);
var state_49098__$1 = state_49098;
var statearr_49123_49942 = state_49098__$1;
(statearr_49123_49942[(2)] = inst_49088);

(statearr_49123_49942[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49099 === (8))){
var inst_49061 = (state_49098[(13)]);
var state_49098__$1 = state_49098;
var statearr_49124_49943 = state_49098__$1;
(statearr_49124_49943[(2)] = inst_49061);

(statearr_49124_49943[(1)] = (10));


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
var cljs$core$async$state_machine__46502__auto__ = null;
var cljs$core$async$state_machine__46502__auto____0 = (function (){
var statearr_49125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_49125[(0)] = cljs$core$async$state_machine__46502__auto__);

(statearr_49125[(1)] = (1));

return statearr_49125;
});
var cljs$core$async$state_machine__46502__auto____1 = (function (state_49098){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_49098);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e49126){var ex__46505__auto__ = e49126;
var statearr_49127_49944 = state_49098;
(statearr_49127_49944[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_49098[(4)]))){
var statearr_49128_49945 = state_49098;
(statearr_49128_49945[(1)] = cljs.core.first((state_49098[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49946 = state_49098;
state_49098 = G__49946;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
cljs$core$async$state_machine__46502__auto__ = function(state_49098){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46502__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46502__auto____1.call(this,state_49098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46502__auto____0;
cljs$core$async$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46502__auto____1;
return cljs$core$async$state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_49129 = f__46657__auto__();
(statearr_49129[(6)] = c__46656__auto___49922);

return statearr_49129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
