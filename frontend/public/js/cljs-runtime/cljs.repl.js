goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50002){
var map__50004 = p__50002;
var map__50004__$1 = cljs.core.__destructure_map(map__50004);
var m = map__50004__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50004__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50004__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50007_50244 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50008_50245 = null;
var count__50009_50246 = (0);
var i__50010_50247 = (0);
while(true){
if((i__50010_50247 < count__50009_50246)){
var f_50248 = chunk__50008_50245.cljs$core$IIndexed$_nth$arity$2(null,i__50010_50247);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50248], 0));


var G__50249 = seq__50007_50244;
var G__50250 = chunk__50008_50245;
var G__50251 = count__50009_50246;
var G__50252 = (i__50010_50247 + (1));
seq__50007_50244 = G__50249;
chunk__50008_50245 = G__50250;
count__50009_50246 = G__50251;
i__50010_50247 = G__50252;
continue;
} else {
var temp__5753__auto___50253 = cljs.core.seq(seq__50007_50244);
if(temp__5753__auto___50253){
var seq__50007_50254__$1 = temp__5753__auto___50253;
if(cljs.core.chunked_seq_QMARK_(seq__50007_50254__$1)){
var c__4638__auto___50255 = cljs.core.chunk_first(seq__50007_50254__$1);
var G__50256 = cljs.core.chunk_rest(seq__50007_50254__$1);
var G__50257 = c__4638__auto___50255;
var G__50258 = cljs.core.count(c__4638__auto___50255);
var G__50259 = (0);
seq__50007_50244 = G__50256;
chunk__50008_50245 = G__50257;
count__50009_50246 = G__50258;
i__50010_50247 = G__50259;
continue;
} else {
var f_50260 = cljs.core.first(seq__50007_50254__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50260], 0));


var G__50261 = cljs.core.next(seq__50007_50254__$1);
var G__50262 = null;
var G__50263 = (0);
var G__50264 = (0);
seq__50007_50244 = G__50261;
chunk__50008_50245 = G__50262;
count__50009_50246 = G__50263;
i__50010_50247 = G__50264;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50265 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50265], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50265)))?cljs.core.second(arglists_50265):arglists_50265)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50017_50266 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50018_50267 = null;
var count__50019_50268 = (0);
var i__50020_50269 = (0);
while(true){
if((i__50020_50269 < count__50019_50268)){
var vec__50032_50270 = chunk__50018_50267.cljs$core$IIndexed$_nth$arity$2(null,i__50020_50269);
var name_50271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50032_50270,(0),null);
var map__50035_50272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50032_50270,(1),null);
var map__50035_50273__$1 = cljs.core.__destructure_map(map__50035_50272);
var doc_50274 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50035_50273__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50275 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50035_50273__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50271], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50275], 0));

if(cljs.core.truth_(doc_50274)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50274], 0));
} else {
}


var G__50277 = seq__50017_50266;
var G__50278 = chunk__50018_50267;
var G__50279 = count__50019_50268;
var G__50280 = (i__50020_50269 + (1));
seq__50017_50266 = G__50277;
chunk__50018_50267 = G__50278;
count__50019_50268 = G__50279;
i__50020_50269 = G__50280;
continue;
} else {
var temp__5753__auto___50281 = cljs.core.seq(seq__50017_50266);
if(temp__5753__auto___50281){
var seq__50017_50282__$1 = temp__5753__auto___50281;
if(cljs.core.chunked_seq_QMARK_(seq__50017_50282__$1)){
var c__4638__auto___50283 = cljs.core.chunk_first(seq__50017_50282__$1);
var G__50284 = cljs.core.chunk_rest(seq__50017_50282__$1);
var G__50285 = c__4638__auto___50283;
var G__50286 = cljs.core.count(c__4638__auto___50283);
var G__50287 = (0);
seq__50017_50266 = G__50284;
chunk__50018_50267 = G__50285;
count__50019_50268 = G__50286;
i__50020_50269 = G__50287;
continue;
} else {
var vec__50037_50288 = cljs.core.first(seq__50017_50282__$1);
var name_50289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50037_50288,(0),null);
var map__50040_50290 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50037_50288,(1),null);
var map__50040_50291__$1 = cljs.core.__destructure_map(map__50040_50290);
var doc_50292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50040_50291__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50293 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50040_50291__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50289], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50293], 0));

if(cljs.core.truth_(doc_50292)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50292], 0));
} else {
}


var G__50294 = cljs.core.next(seq__50017_50282__$1);
var G__50295 = null;
var G__50296 = (0);
var G__50297 = (0);
seq__50017_50266 = G__50294;
chunk__50018_50267 = G__50295;
count__50019_50268 = G__50296;
i__50020_50269 = G__50297;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50042 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50043 = null;
var count__50044 = (0);
var i__50045 = (0);
while(true){
if((i__50045 < count__50044)){
var role = chunk__50043.cljs$core$IIndexed$_nth$arity$2(null,i__50045);
var temp__5753__auto___50300__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50300__$1)){
var spec_50302 = temp__5753__auto___50300__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50302)], 0));
} else {
}


var G__50303 = seq__50042;
var G__50304 = chunk__50043;
var G__50305 = count__50044;
var G__50306 = (i__50045 + (1));
seq__50042 = G__50303;
chunk__50043 = G__50304;
count__50044 = G__50305;
i__50045 = G__50306;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__50042);
if(temp__5753__auto____$1){
var seq__50042__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50042__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50042__$1);
var G__50307 = cljs.core.chunk_rest(seq__50042__$1);
var G__50308 = c__4638__auto__;
var G__50309 = cljs.core.count(c__4638__auto__);
var G__50310 = (0);
seq__50042 = G__50307;
chunk__50043 = G__50308;
count__50044 = G__50309;
i__50045 = G__50310;
continue;
} else {
var role = cljs.core.first(seq__50042__$1);
var temp__5753__auto___50313__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50313__$2)){
var spec_50314 = temp__5753__auto___50313__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50314)], 0));
} else {
}


var G__50315 = cljs.core.next(seq__50042__$1);
var G__50316 = null;
var G__50317 = (0);
var G__50318 = (0);
seq__50042 = G__50315;
chunk__50043 = G__50316;
count__50044 = G__50317;
i__50045 = G__50318;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50322 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50323 = cljs.core.ex_cause(t);
via = G__50322;
t = G__50323;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50153 = datafied_throwable;
var map__50153__$1 = cljs.core.__destructure_map(map__50153);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50153__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50153__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50153__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50154 = cljs.core.last(via);
var map__50154__$1 = cljs.core.__destructure_map(map__50154);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50154__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50154__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50154__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50155 = data;
var map__50155__$1 = cljs.core.__destructure_map(map__50155);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50155__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50155__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50155__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50156 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50156__$1 = cljs.core.__destructure_map(map__50156);
var top_data = map__50156__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50156__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50158 = phase;
var G__50158__$1 = (((G__50158 instanceof cljs.core.Keyword))?G__50158.fqn:null);
switch (G__50158__$1) {
case "read-source":
var map__50160 = data;
var map__50160__$1 = cljs.core.__destructure_map(map__50160);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50160__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50160__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50161 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50161__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50161,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50161);
var G__50161__$2 = (cljs.core.truth_((function (){var fexpr__50163 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50163.cljs$core$IFn$_invoke$arity$1 ? fexpr__50163.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50163.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50161__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50161__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50161__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50161__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50164 = top_data;
var G__50164__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50164,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50164);
var G__50164__$2 = (cljs.core.truth_((function (){var fexpr__50165 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50165.cljs$core$IFn$_invoke$arity$1 ? fexpr__50165.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50165.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50164__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50164__$1);
var G__50164__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50164__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50164__$2);
var G__50164__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50164__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50164__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50164__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50164__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50167 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50167,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50167,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50167,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50167,(3),null);
var G__50171 = top_data;
var G__50171__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50171,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50171);
var G__50171__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50171__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50171__$1);
var G__50171__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50171__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50171__$2);
var G__50171__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50171__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50171__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50171__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50171__$4;
}

break;
case "execution":
var vec__50174 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50174,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50174,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50174,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50174,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50129_SHARP_){
var or__4212__auto__ = (p1__50129_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__50180 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50180.cljs$core$IFn$_invoke$arity$1 ? fexpr__50180.cljs$core$IFn$_invoke$arity$1(p1__50129_SHARP_) : fexpr__50180.call(null,p1__50129_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__50181 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50181__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50181,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50181);
var G__50181__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50181__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50181__$1);
var G__50181__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50181__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50181__$2);
var G__50181__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50181__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50181__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50181__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50181__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50158__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50193){
var map__50194 = p__50193;
var map__50194__$1 = cljs.core.__destructure_map(map__50194);
var triage_data = map__50194__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50194__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50194__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50194__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50194__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50194__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50194__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50194__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50194__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50195 = phase;
var G__50195__$1 = (((G__50195 instanceof cljs.core.Keyword))?G__50195.fqn:null);
switch (G__50195__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50200 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50201 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50202 = loc;
var G__50203 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50204_50334 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50205_50335 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50206_50336 = true;
var _STAR_print_fn_STAR__temp_val__50207_50337 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50206_50336);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50207_50337);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50191_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50191_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50205_50335);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50204_50334);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50200,G__50201,G__50202,G__50203) : format.call(null,G__50200,G__50201,G__50202,G__50203));

break;
case "macroexpansion":
var G__50210 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50211 = cause_type;
var G__50212 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50213 = loc;
var G__50214 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50210,G__50211,G__50212,G__50213,G__50214) : format.call(null,G__50210,G__50211,G__50212,G__50213,G__50214));

break;
case "compile-syntax-check":
var G__50215 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50216 = cause_type;
var G__50217 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50218 = loc;
var G__50219 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50215,G__50216,G__50217,G__50218,G__50219) : format.call(null,G__50215,G__50216,G__50217,G__50218,G__50219));

break;
case "compilation":
var G__50220 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50221 = cause_type;
var G__50222 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50223 = loc;
var G__50224 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50220,G__50221,G__50222,G__50223,G__50224) : format.call(null,G__50220,G__50221,G__50222,G__50223,G__50224));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50225 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50226 = symbol;
var G__50227 = loc;
var G__50228 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50229_50345 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50230_50346 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50231_50347 = true;
var _STAR_print_fn_STAR__temp_val__50232_50348 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50231_50347);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50232_50348);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50192_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50192_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50230_50346);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50229_50345);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50225,G__50226,G__50227,G__50228) : format.call(null,G__50225,G__50226,G__50227,G__50228));
} else {
var G__50239 = "Execution error%s at %s(%s).\n%s\n";
var G__50240 = cause_type;
var G__50241 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50242 = loc;
var G__50243 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50239,G__50240,G__50241,G__50242,G__50243) : format.call(null,G__50239,G__50240,G__50241,G__50242,G__50243));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50195__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
