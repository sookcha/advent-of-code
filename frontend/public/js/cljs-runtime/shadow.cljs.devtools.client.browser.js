goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___52248 = arguments.length;
var i__4819__auto___52249 = (0);
while(true){
if((i__4819__auto___52249 < len__4818__auto___52248)){
args__4824__auto__.push((arguments[i__4819__auto___52249]));

var G__52250 = (i__4819__auto___52249 + (1));
i__4819__auto___52249 = G__52250;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq51955){
var G__51956 = cljs.core.first(seq51955);
var seq51955__$1 = cljs.core.next(seq51955);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51956,seq51955__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__51968 = cljs.core.seq(sources);
var chunk__51975 = null;
var count__51976 = (0);
var i__51977 = (0);
while(true){
if((i__51977 < count__51976)){
var map__52063 = chunk__51975.cljs$core$IIndexed$_nth$arity$2(null,i__51977);
var map__52063__$1 = cljs.core.__destructure_map(map__52063);
var src = map__52063__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52063__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52063__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52063__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52063__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52066){var e_52252 = e52066;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52252);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52252.message)].join('')));
}

var G__52253 = seq__51968;
var G__52254 = chunk__51975;
var G__52255 = count__51976;
var G__52256 = (i__51977 + (1));
seq__51968 = G__52253;
chunk__51975 = G__52254;
count__51976 = G__52255;
i__51977 = G__52256;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51968);
if(temp__5753__auto__){
var seq__51968__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51968__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__51968__$1);
var G__52257 = cljs.core.chunk_rest(seq__51968__$1);
var G__52258 = c__4638__auto__;
var G__52259 = cljs.core.count(c__4638__auto__);
var G__52260 = (0);
seq__51968 = G__52257;
chunk__51975 = G__52258;
count__51976 = G__52259;
i__51977 = G__52260;
continue;
} else {
var map__52069 = cljs.core.first(seq__51968__$1);
var map__52069__$1 = cljs.core.__destructure_map(map__52069);
var src = map__52069__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52069__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52069__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52069__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52069__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52075){var e_52261 = e52075;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52261);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52261.message)].join('')));
}

var G__52262 = cljs.core.next(seq__51968__$1);
var G__52263 = null;
var G__52264 = (0);
var G__52265 = (0);
seq__51968 = G__52262;
chunk__51975 = G__52263;
count__51976 = G__52264;
i__51977 = G__52265;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__52107 = cljs.core.seq(js_requires);
var chunk__52108 = null;
var count__52109 = (0);
var i__52110 = (0);
while(true){
if((i__52110 < count__52109)){
var js_ns = chunk__52108.cljs$core$IIndexed$_nth$arity$2(null,i__52110);
var require_str_52267 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52267);


var G__52268 = seq__52107;
var G__52269 = chunk__52108;
var G__52270 = count__52109;
var G__52271 = (i__52110 + (1));
seq__52107 = G__52268;
chunk__52108 = G__52269;
count__52109 = G__52270;
i__52110 = G__52271;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52107);
if(temp__5753__auto__){
var seq__52107__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52107__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52107__$1);
var G__52272 = cljs.core.chunk_rest(seq__52107__$1);
var G__52273 = c__4638__auto__;
var G__52274 = cljs.core.count(c__4638__auto__);
var G__52275 = (0);
seq__52107 = G__52272;
chunk__52108 = G__52273;
count__52109 = G__52274;
i__52110 = G__52275;
continue;
} else {
var js_ns = cljs.core.first(seq__52107__$1);
var require_str_52276 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52276);


var G__52277 = cljs.core.next(seq__52107__$1);
var G__52278 = null;
var G__52279 = (0);
var G__52280 = (0);
seq__52107 = G__52277;
chunk__52108 = G__52278;
count__52109 = G__52279;
i__52110 = G__52280;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__52114){
var map__52115 = p__52114;
var map__52115__$1 = cljs.core.__destructure_map(map__52115);
var msg = map__52115__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52115__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52115__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52116(s__52117){
return (new cljs.core.LazySeq(null,(function (){
var s__52117__$1 = s__52117;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__52117__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__52122 = cljs.core.first(xs__6308__auto__);
var map__52122__$1 = cljs.core.__destructure_map(map__52122);
var src = map__52122__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52122__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52122__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__52117__$1,map__52122,map__52122__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52115,map__52115__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52116_$_iter__52118(s__52119){
return (new cljs.core.LazySeq(null,((function (s__52117__$1,map__52122,map__52122__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52115,map__52115__$1,msg,info,reload_info){
return (function (){
var s__52119__$1 = s__52119;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__52119__$1);
if(temp__5753__auto____$1){
var s__52119__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52119__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__52119__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__52121 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__52120 = (0);
while(true){
if((i__52120 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__52120);
cljs.core.chunk_append(b__52121,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__52281 = (i__52120 + (1));
i__52120 = G__52281;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52121),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52116_$_iter__52118(cljs.core.chunk_rest(s__52119__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52121),null);
}
} else {
var warning = cljs.core.first(s__52119__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52116_$_iter__52118(cljs.core.rest(s__52119__$2)));
}
} else {
return null;
}
break;
}
});})(s__52117__$1,map__52122,map__52122__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52115,map__52115__$1,msg,info,reload_info))
,null,null));
});})(s__52117__$1,map__52122,map__52122__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__52115,map__52115__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52116(cljs.core.rest(s__52117__$1)));
} else {
var G__52282 = cljs.core.rest(s__52117__$1);
s__52117__$1 = G__52282;
continue;
}
} else {
var G__52283 = cljs.core.rest(s__52117__$1);
s__52117__$1 = G__52283;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__52123_52284 = cljs.core.seq(warnings);
var chunk__52124_52285 = null;
var count__52125_52286 = (0);
var i__52126_52287 = (0);
while(true){
if((i__52126_52287 < count__52125_52286)){
var map__52129_52288 = chunk__52124_52285.cljs$core$IIndexed$_nth$arity$2(null,i__52126_52287);
var map__52129_52289__$1 = cljs.core.__destructure_map(map__52129_52288);
var w_52290 = map__52129_52289__$1;
var msg_52291__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52129_52289__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52129_52289__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52129_52289__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52129_52289__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52294)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52292),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52293),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52291__$1)].join(''));


var G__52295 = seq__52123_52284;
var G__52296 = chunk__52124_52285;
var G__52297 = count__52125_52286;
var G__52298 = (i__52126_52287 + (1));
seq__52123_52284 = G__52295;
chunk__52124_52285 = G__52296;
count__52125_52286 = G__52297;
i__52126_52287 = G__52298;
continue;
} else {
var temp__5753__auto___52299 = cljs.core.seq(seq__52123_52284);
if(temp__5753__auto___52299){
var seq__52123_52300__$1 = temp__5753__auto___52299;
if(cljs.core.chunked_seq_QMARK_(seq__52123_52300__$1)){
var c__4638__auto___52301 = cljs.core.chunk_first(seq__52123_52300__$1);
var G__52302 = cljs.core.chunk_rest(seq__52123_52300__$1);
var G__52303 = c__4638__auto___52301;
var G__52304 = cljs.core.count(c__4638__auto___52301);
var G__52305 = (0);
seq__52123_52284 = G__52302;
chunk__52124_52285 = G__52303;
count__52125_52286 = G__52304;
i__52126_52287 = G__52305;
continue;
} else {
var map__52130_52306 = cljs.core.first(seq__52123_52300__$1);
var map__52130_52307__$1 = cljs.core.__destructure_map(map__52130_52306);
var w_52308 = map__52130_52307__$1;
var msg_52309__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52130_52307__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52310 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52130_52307__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52311 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52130_52307__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52130_52307__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52312)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52310),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52311),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52309__$1)].join(''));


var G__52316 = cljs.core.next(seq__52123_52300__$1);
var G__52317 = null;
var G__52318 = (0);
var G__52319 = (0);
seq__52123_52284 = G__52316;
chunk__52124_52285 = G__52317;
count__52125_52286 = G__52318;
i__52126_52287 = G__52319;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__52113_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__52113_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__52132){
var map__52133 = p__52132;
var map__52133__$1 = cljs.core.__destructure_map(map__52133);
var msg = map__52133__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52133__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__52134 = cljs.core.seq(updates);
var chunk__52136 = null;
var count__52137 = (0);
var i__52138 = (0);
while(true){
if((i__52138 < count__52137)){
var path = chunk__52136.cljs$core$IIndexed$_nth$arity$2(null,i__52138);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52175_52320 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52179_52321 = null;
var count__52180_52322 = (0);
var i__52181_52323 = (0);
while(true){
if((i__52181_52323 < count__52180_52322)){
var node_52324 = chunk__52179_52321.cljs$core$IIndexed$_nth$arity$2(null,i__52181_52323);
if(cljs.core.not(node_52324.shadow$old)){
var path_match_52325 = shadow.cljs.devtools.client.browser.match_paths(node_52324.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52325)){
var new_link_52326 = (function (){var G__52190 = node_52324.cloneNode(true);
G__52190.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52325),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52190;
})();
(node_52324.shadow$old = true);

(new_link_52326.onload = ((function (seq__52175_52320,chunk__52179_52321,count__52180_52322,i__52181_52323,seq__52134,chunk__52136,count__52137,i__52138,new_link_52326,path_match_52325,node_52324,path,map__52133,map__52133__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52324);
});})(seq__52175_52320,chunk__52179_52321,count__52180_52322,i__52181_52323,seq__52134,chunk__52136,count__52137,i__52138,new_link_52326,path_match_52325,node_52324,path,map__52133,map__52133__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52325], 0));

goog.dom.insertSiblingAfter(new_link_52326,node_52324);


var G__52327 = seq__52175_52320;
var G__52328 = chunk__52179_52321;
var G__52329 = count__52180_52322;
var G__52330 = (i__52181_52323 + (1));
seq__52175_52320 = G__52327;
chunk__52179_52321 = G__52328;
count__52180_52322 = G__52329;
i__52181_52323 = G__52330;
continue;
} else {
var G__52331 = seq__52175_52320;
var G__52332 = chunk__52179_52321;
var G__52333 = count__52180_52322;
var G__52334 = (i__52181_52323 + (1));
seq__52175_52320 = G__52331;
chunk__52179_52321 = G__52332;
count__52180_52322 = G__52333;
i__52181_52323 = G__52334;
continue;
}
} else {
var G__52335 = seq__52175_52320;
var G__52336 = chunk__52179_52321;
var G__52337 = count__52180_52322;
var G__52338 = (i__52181_52323 + (1));
seq__52175_52320 = G__52335;
chunk__52179_52321 = G__52336;
count__52180_52322 = G__52337;
i__52181_52323 = G__52338;
continue;
}
} else {
var temp__5753__auto___52339 = cljs.core.seq(seq__52175_52320);
if(temp__5753__auto___52339){
var seq__52175_52340__$1 = temp__5753__auto___52339;
if(cljs.core.chunked_seq_QMARK_(seq__52175_52340__$1)){
var c__4638__auto___52341 = cljs.core.chunk_first(seq__52175_52340__$1);
var G__52342 = cljs.core.chunk_rest(seq__52175_52340__$1);
var G__52343 = c__4638__auto___52341;
var G__52344 = cljs.core.count(c__4638__auto___52341);
var G__52345 = (0);
seq__52175_52320 = G__52342;
chunk__52179_52321 = G__52343;
count__52180_52322 = G__52344;
i__52181_52323 = G__52345;
continue;
} else {
var node_52346 = cljs.core.first(seq__52175_52340__$1);
if(cljs.core.not(node_52346.shadow$old)){
var path_match_52347 = shadow.cljs.devtools.client.browser.match_paths(node_52346.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52347)){
var new_link_52348 = (function (){var G__52193 = node_52346.cloneNode(true);
G__52193.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52347),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52193;
})();
(node_52346.shadow$old = true);

(new_link_52348.onload = ((function (seq__52175_52320,chunk__52179_52321,count__52180_52322,i__52181_52323,seq__52134,chunk__52136,count__52137,i__52138,new_link_52348,path_match_52347,node_52346,seq__52175_52340__$1,temp__5753__auto___52339,path,map__52133,map__52133__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52346);
});})(seq__52175_52320,chunk__52179_52321,count__52180_52322,i__52181_52323,seq__52134,chunk__52136,count__52137,i__52138,new_link_52348,path_match_52347,node_52346,seq__52175_52340__$1,temp__5753__auto___52339,path,map__52133,map__52133__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52347], 0));

goog.dom.insertSiblingAfter(new_link_52348,node_52346);


var G__52349 = cljs.core.next(seq__52175_52340__$1);
var G__52350 = null;
var G__52351 = (0);
var G__52352 = (0);
seq__52175_52320 = G__52349;
chunk__52179_52321 = G__52350;
count__52180_52322 = G__52351;
i__52181_52323 = G__52352;
continue;
} else {
var G__52353 = cljs.core.next(seq__52175_52340__$1);
var G__52354 = null;
var G__52355 = (0);
var G__52356 = (0);
seq__52175_52320 = G__52353;
chunk__52179_52321 = G__52354;
count__52180_52322 = G__52355;
i__52181_52323 = G__52356;
continue;
}
} else {
var G__52357 = cljs.core.next(seq__52175_52340__$1);
var G__52358 = null;
var G__52359 = (0);
var G__52360 = (0);
seq__52175_52320 = G__52357;
chunk__52179_52321 = G__52358;
count__52180_52322 = G__52359;
i__52181_52323 = G__52360;
continue;
}
}
} else {
}
}
break;
}


var G__52361 = seq__52134;
var G__52362 = chunk__52136;
var G__52363 = count__52137;
var G__52364 = (i__52138 + (1));
seq__52134 = G__52361;
chunk__52136 = G__52362;
count__52137 = G__52363;
i__52138 = G__52364;
continue;
} else {
var G__52365 = seq__52134;
var G__52366 = chunk__52136;
var G__52367 = count__52137;
var G__52368 = (i__52138 + (1));
seq__52134 = G__52365;
chunk__52136 = G__52366;
count__52137 = G__52367;
i__52138 = G__52368;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__52134);
if(temp__5753__auto__){
var seq__52134__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52134__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52134__$1);
var G__52369 = cljs.core.chunk_rest(seq__52134__$1);
var G__52370 = c__4638__auto__;
var G__52371 = cljs.core.count(c__4638__auto__);
var G__52372 = (0);
seq__52134 = G__52369;
chunk__52136 = G__52370;
count__52137 = G__52371;
i__52138 = G__52372;
continue;
} else {
var path = cljs.core.first(seq__52134__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52197_52373 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52201_52374 = null;
var count__52202_52375 = (0);
var i__52203_52376 = (0);
while(true){
if((i__52203_52376 < count__52202_52375)){
var node_52377 = chunk__52201_52374.cljs$core$IIndexed$_nth$arity$2(null,i__52203_52376);
if(cljs.core.not(node_52377.shadow$old)){
var path_match_52378 = shadow.cljs.devtools.client.browser.match_paths(node_52377.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52378)){
var new_link_52379 = (function (){var G__52214 = node_52377.cloneNode(true);
G__52214.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52378),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52214;
})();
(node_52377.shadow$old = true);

(new_link_52379.onload = ((function (seq__52197_52373,chunk__52201_52374,count__52202_52375,i__52203_52376,seq__52134,chunk__52136,count__52137,i__52138,new_link_52379,path_match_52378,node_52377,path,seq__52134__$1,temp__5753__auto__,map__52133,map__52133__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52377);
});})(seq__52197_52373,chunk__52201_52374,count__52202_52375,i__52203_52376,seq__52134,chunk__52136,count__52137,i__52138,new_link_52379,path_match_52378,node_52377,path,seq__52134__$1,temp__5753__auto__,map__52133,map__52133__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52378], 0));

goog.dom.insertSiblingAfter(new_link_52379,node_52377);


var G__52380 = seq__52197_52373;
var G__52381 = chunk__52201_52374;
var G__52382 = count__52202_52375;
var G__52383 = (i__52203_52376 + (1));
seq__52197_52373 = G__52380;
chunk__52201_52374 = G__52381;
count__52202_52375 = G__52382;
i__52203_52376 = G__52383;
continue;
} else {
var G__52384 = seq__52197_52373;
var G__52385 = chunk__52201_52374;
var G__52386 = count__52202_52375;
var G__52387 = (i__52203_52376 + (1));
seq__52197_52373 = G__52384;
chunk__52201_52374 = G__52385;
count__52202_52375 = G__52386;
i__52203_52376 = G__52387;
continue;
}
} else {
var G__52388 = seq__52197_52373;
var G__52389 = chunk__52201_52374;
var G__52390 = count__52202_52375;
var G__52391 = (i__52203_52376 + (1));
seq__52197_52373 = G__52388;
chunk__52201_52374 = G__52389;
count__52202_52375 = G__52390;
i__52203_52376 = G__52391;
continue;
}
} else {
var temp__5753__auto___52392__$1 = cljs.core.seq(seq__52197_52373);
if(temp__5753__auto___52392__$1){
var seq__52197_52393__$1 = temp__5753__auto___52392__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52197_52393__$1)){
var c__4638__auto___52394 = cljs.core.chunk_first(seq__52197_52393__$1);
var G__52395 = cljs.core.chunk_rest(seq__52197_52393__$1);
var G__52396 = c__4638__auto___52394;
var G__52397 = cljs.core.count(c__4638__auto___52394);
var G__52398 = (0);
seq__52197_52373 = G__52395;
chunk__52201_52374 = G__52396;
count__52202_52375 = G__52397;
i__52203_52376 = G__52398;
continue;
} else {
var node_52399 = cljs.core.first(seq__52197_52393__$1);
if(cljs.core.not(node_52399.shadow$old)){
var path_match_52400 = shadow.cljs.devtools.client.browser.match_paths(node_52399.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52400)){
var new_link_52401 = (function (){var G__52216 = node_52399.cloneNode(true);
G__52216.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52400),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52216;
})();
(node_52399.shadow$old = true);

(new_link_52401.onload = ((function (seq__52197_52373,chunk__52201_52374,count__52202_52375,i__52203_52376,seq__52134,chunk__52136,count__52137,i__52138,new_link_52401,path_match_52400,node_52399,seq__52197_52393__$1,temp__5753__auto___52392__$1,path,seq__52134__$1,temp__5753__auto__,map__52133,map__52133__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52399);
});})(seq__52197_52373,chunk__52201_52374,count__52202_52375,i__52203_52376,seq__52134,chunk__52136,count__52137,i__52138,new_link_52401,path_match_52400,node_52399,seq__52197_52393__$1,temp__5753__auto___52392__$1,path,seq__52134__$1,temp__5753__auto__,map__52133,map__52133__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52400], 0));

goog.dom.insertSiblingAfter(new_link_52401,node_52399);


var G__52402 = cljs.core.next(seq__52197_52393__$1);
var G__52403 = null;
var G__52404 = (0);
var G__52405 = (0);
seq__52197_52373 = G__52402;
chunk__52201_52374 = G__52403;
count__52202_52375 = G__52404;
i__52203_52376 = G__52405;
continue;
} else {
var G__52406 = cljs.core.next(seq__52197_52393__$1);
var G__52407 = null;
var G__52408 = (0);
var G__52409 = (0);
seq__52197_52373 = G__52406;
chunk__52201_52374 = G__52407;
count__52202_52375 = G__52408;
i__52203_52376 = G__52409;
continue;
}
} else {
var G__52410 = cljs.core.next(seq__52197_52393__$1);
var G__52411 = null;
var G__52412 = (0);
var G__52413 = (0);
seq__52197_52373 = G__52410;
chunk__52201_52374 = G__52411;
count__52202_52375 = G__52412;
i__52203_52376 = G__52413;
continue;
}
}
} else {
}
}
break;
}


var G__52414 = cljs.core.next(seq__52134__$1);
var G__52415 = null;
var G__52416 = (0);
var G__52417 = (0);
seq__52134 = G__52414;
chunk__52136 = G__52415;
count__52137 = G__52416;
i__52138 = G__52417;
continue;
} else {
var G__52418 = cljs.core.next(seq__52134__$1);
var G__52419 = null;
var G__52420 = (0);
var G__52421 = (0);
seq__52134 = G__52418;
chunk__52136 = G__52419;
count__52137 = G__52420;
i__52138 = G__52421;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__52217){
var map__52218 = p__52217;
var map__52218__$1 = cljs.core.__destructure_map(map__52218);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52218__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__52225){
var map__52226 = p__52225;
var map__52226__$1 = cljs.core.__destructure_map(map__52226);
var _ = map__52226__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52226__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__52227,done,error){
var map__52228 = p__52227;
var map__52228__$1 = cljs.core.__destructure_map(map__52228);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52228__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__52229,done,error){
var map__52230 = p__52229;
var map__52230__$1 = cljs.core.__destructure_map(map__52230);
var msg = map__52230__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52230__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52230__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52230__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__52231){
var map__52232 = p__52231;
var map__52232__$1 = cljs.core.__destructure_map(map__52232);
var src = map__52232__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52232__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__52233 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__52233) : done.call(null,G__52233));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__52234){
var map__52235 = p__52234;
var map__52235__$1 = cljs.core.__destructure_map(map__52235);
var msg__$1 = map__52235__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52235__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e52236){var ex = e52236;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__52237){
var map__52238 = p__52237;
var map__52238__$1 = cljs.core.__destructure_map(map__52238);
var env = map__52238__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52238__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__52240){
var map__52241 = p__52240;
var map__52241__$1 = cljs.core.__destructure_map(map__52241);
var msg = map__52241__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52241__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__52242){
var map__52243 = p__52242;
var map__52243__$1 = cljs.core.__destructure_map(map__52243);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52243__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52243__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__52245){
var map__52246 = p__52245;
var map__52246__$1 = cljs.core.__destructure_map(map__52246);
var svc = map__52246__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52246__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
