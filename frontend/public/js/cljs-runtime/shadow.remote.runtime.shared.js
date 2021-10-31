goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__47187,res){
var map__47188 = p__47187;
var map__47188__$1 = cljs.core.__destructure_map(map__47188);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47188__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47188__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__47191 = res;
var G__47191__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47191,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__47191);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47191__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__47191__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__47198 = arguments.length;
switch (G__47198) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__47203,msg,handlers,timeout_after_ms){
var map__47204 = p__47203;
var map__47204__$1 = cljs.core.__destructure_map(map__47204);
var runtime = map__47204__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47204__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___47408 = arguments.length;
var i__4819__auto___47409 = (0);
while(true){
if((i__4819__auto___47409 < len__4818__auto___47408)){
args__4824__auto__.push((arguments[i__4819__auto___47409]));

var G__47411 = (i__4819__auto___47409 + (1));
i__4819__auto___47409 = G__47411;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__47219,ev,args){
var map__47222 = p__47219;
var map__47222__$1 = cljs.core.__destructure_map(map__47222);
var runtime = map__47222__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47222__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__47224 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47227 = null;
var count__47228 = (0);
var i__47229 = (0);
while(true){
if((i__47229 < count__47228)){
var ext = chunk__47227.cljs$core$IIndexed$_nth$arity$2(null,i__47229);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47413 = seq__47224;
var G__47414 = chunk__47227;
var G__47415 = count__47228;
var G__47416 = (i__47229 + (1));
seq__47224 = G__47413;
chunk__47227 = G__47414;
count__47228 = G__47415;
i__47229 = G__47416;
continue;
} else {
var G__47417 = seq__47224;
var G__47418 = chunk__47227;
var G__47419 = count__47228;
var G__47420 = (i__47229 + (1));
seq__47224 = G__47417;
chunk__47227 = G__47418;
count__47228 = G__47419;
i__47229 = G__47420;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47224);
if(temp__5753__auto__){
var seq__47224__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47224__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__47224__$1);
var G__47421 = cljs.core.chunk_rest(seq__47224__$1);
var G__47422 = c__4638__auto__;
var G__47423 = cljs.core.count(c__4638__auto__);
var G__47424 = (0);
seq__47224 = G__47421;
chunk__47227 = G__47422;
count__47228 = G__47423;
i__47229 = G__47424;
continue;
} else {
var ext = cljs.core.first(seq__47224__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47425 = cljs.core.next(seq__47224__$1);
var G__47426 = null;
var G__47427 = (0);
var G__47428 = (0);
seq__47224 = G__47425;
chunk__47227 = G__47426;
count__47228 = G__47427;
i__47229 = G__47428;
continue;
} else {
var G__47429 = cljs.core.next(seq__47224__$1);
var G__47430 = null;
var G__47431 = (0);
var G__47432 = (0);
seq__47224 = G__47429;
chunk__47227 = G__47430;
count__47228 = G__47431;
i__47229 = G__47432;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq47212){
var G__47213 = cljs.core.first(seq47212);
var seq47212__$1 = cljs.core.next(seq47212);
var G__47214 = cljs.core.first(seq47212__$1);
var seq47212__$2 = cljs.core.next(seq47212__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47213,G__47214,seq47212__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__47256,p__47257){
var map__47258 = p__47256;
var map__47258__$1 = cljs.core.__destructure_map(map__47258);
var runtime = map__47258__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47258__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47259 = p__47257;
var map__47259__$1 = cljs.core.__destructure_map(map__47259);
var msg = map__47259__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47259__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__47260 = cljs.core.deref(state_ref);
var map__47260__$1 = cljs.core.__destructure_map(map__47260);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47260__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47260__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__47264){
var map__47265 = p__47264;
var map__47265__$1 = cljs.core.__destructure_map(map__47265);
var runtime = map__47265__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47265__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__47295,msg){
var map__47296 = p__47295;
var map__47296__$1 = cljs.core.__destructure_map(map__47296);
var runtime = map__47296__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47296__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__47304,key,p__47305){
var map__47307 = p__47304;
var map__47307__$1 = cljs.core.__destructure_map(map__47307);
var state = map__47307__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47307__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__47308 = p__47305;
var map__47308__$1 = cljs.core.__destructure_map(map__47308);
var spec = map__47308__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47308__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__47313,key,spec){
var map__47314 = p__47313;
var map__47314__$1 = cljs.core.__destructure_map(map__47314);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47314__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__47318_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__47318_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__47319_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__47319_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__47320_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__47320_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__47321_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__47321_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__47322_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__47322_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__47331,key){
var map__47332 = p__47331;
var map__47332__$1 = cljs.core.__destructure_map(map__47332);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47332__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__47360,msg){
var map__47361 = p__47360;
var map__47361__$1 = cljs.core.__destructure_map(map__47361);
var runtime = map__47361__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47361__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__47370,p__47371){
var map__47372 = p__47370;
var map__47372__$1 = cljs.core.__destructure_map(map__47372);
var runtime = map__47372__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47372__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47373 = p__47371;
var map__47373__$1 = cljs.core.__destructure_map(map__47373);
var msg = map__47373__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47373__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47373__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__47376 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47378 = null;
var count__47379 = (0);
var i__47380 = (0);
while(true){
if((i__47380 < count__47379)){
var map__47392 = chunk__47378.cljs$core$IIndexed$_nth$arity$2(null,i__47380);
var map__47392__$1 = cljs.core.__destructure_map(map__47392);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47392__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47434 = seq__47376;
var G__47435 = chunk__47378;
var G__47436 = count__47379;
var G__47437 = (i__47380 + (1));
seq__47376 = G__47434;
chunk__47378 = G__47435;
count__47379 = G__47436;
i__47380 = G__47437;
continue;
} else {
var G__47438 = seq__47376;
var G__47439 = chunk__47378;
var G__47440 = count__47379;
var G__47441 = (i__47380 + (1));
seq__47376 = G__47438;
chunk__47378 = G__47439;
count__47379 = G__47440;
i__47380 = G__47441;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47376);
if(temp__5753__auto__){
var seq__47376__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47376__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__47376__$1);
var G__47442 = cljs.core.chunk_rest(seq__47376__$1);
var G__47443 = c__4638__auto__;
var G__47444 = cljs.core.count(c__4638__auto__);
var G__47445 = (0);
seq__47376 = G__47442;
chunk__47378 = G__47443;
count__47379 = G__47444;
i__47380 = G__47445;
continue;
} else {
var map__47393 = cljs.core.first(seq__47376__$1);
var map__47393__$1 = cljs.core.__destructure_map(map__47393);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47393__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47446 = cljs.core.next(seq__47376__$1);
var G__47447 = null;
var G__47448 = (0);
var G__47449 = (0);
seq__47376 = G__47446;
chunk__47378 = G__47447;
count__47379 = G__47448;
i__47380 = G__47449;
continue;
} else {
var G__47450 = cljs.core.next(seq__47376__$1);
var G__47451 = null;
var G__47452 = (0);
var G__47453 = (0);
seq__47376 = G__47450;
chunk__47378 = G__47451;
count__47379 = G__47452;
i__47380 = G__47453;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
