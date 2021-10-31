goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__51156__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51156 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51161__i = 0, G__51161__a = new Array(arguments.length -  0);
while (G__51161__i < G__51161__a.length) {G__51161__a[G__51161__i] = arguments[G__51161__i + 0]; ++G__51161__i;}
  args = new cljs.core.IndexedSeq(G__51161__a,0,null);
} 
return G__51156__delegate.call(this,args);};
G__51156.cljs$lang$maxFixedArity = 0;
G__51156.cljs$lang$applyTo = (function (arglist__51162){
var args = cljs.core.seq(arglist__51162);
return G__51156__delegate(args);
});
G__51156.cljs$core$IFn$_invoke$arity$variadic = G__51156__delegate;
return G__51156;
})()
);

(o.error = (function() { 
var G__51164__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51165__i = 0, G__51165__a = new Array(arguments.length -  0);
while (G__51165__i < G__51165__a.length) {G__51165__a[G__51165__i] = arguments[G__51165__i + 0]; ++G__51165__i;}
  args = new cljs.core.IndexedSeq(G__51165__a,0,null);
} 
return G__51164__delegate.call(this,args);};
G__51164.cljs$lang$maxFixedArity = 0;
G__51164.cljs$lang$applyTo = (function (arglist__51166){
var args = cljs.core.seq(arglist__51166);
return G__51164__delegate(args);
});
G__51164.cljs$core$IFn$_invoke$arity$variadic = G__51164__delegate;
return G__51164;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
