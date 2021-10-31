goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__52474 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__52475 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__52475);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__52476 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__52477 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__52477);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__52476);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__52474);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__52484 = arguments.length;
switch (G__52484) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__52485 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52485,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52485,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__52488_52509 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__52489_52510 = null;
var count__52490_52511 = (0);
var i__52491_52512 = (0);
while(true){
if((i__52491_52512 < count__52490_52511)){
var vec__52498_52513 = chunk__52489_52510.cljs$core$IIndexed$_nth$arity$2(null,i__52491_52512);
var container_52514 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52498_52513,(0),null);
var comp_52515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52498_52513,(1),null);
reagent.dom.re_render_component(comp_52515,container_52514);


var G__52517 = seq__52488_52509;
var G__52518 = chunk__52489_52510;
var G__52519 = count__52490_52511;
var G__52520 = (i__52491_52512 + (1));
seq__52488_52509 = G__52517;
chunk__52489_52510 = G__52518;
count__52490_52511 = G__52519;
i__52491_52512 = G__52520;
continue;
} else {
var temp__5753__auto___52521 = cljs.core.seq(seq__52488_52509);
if(temp__5753__auto___52521){
var seq__52488_52523__$1 = temp__5753__auto___52521;
if(cljs.core.chunked_seq_QMARK_(seq__52488_52523__$1)){
var c__4638__auto___52524 = cljs.core.chunk_first(seq__52488_52523__$1);
var G__52525 = cljs.core.chunk_rest(seq__52488_52523__$1);
var G__52526 = c__4638__auto___52524;
var G__52527 = cljs.core.count(c__4638__auto___52524);
var G__52528 = (0);
seq__52488_52509 = G__52525;
chunk__52489_52510 = G__52526;
count__52490_52511 = G__52527;
i__52491_52512 = G__52528;
continue;
} else {
var vec__52503_52529 = cljs.core.first(seq__52488_52523__$1);
var container_52530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52503_52529,(0),null);
var comp_52531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52503_52529,(1),null);
reagent.dom.re_render_component(comp_52531,container_52530);


var G__52532 = cljs.core.next(seq__52488_52523__$1);
var G__52533 = null;
var G__52534 = (0);
var G__52535 = (0);
seq__52488_52509 = G__52532;
chunk__52489_52510 = G__52533;
count__52490_52511 = G__52534;
i__52491_52512 = G__52535;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
