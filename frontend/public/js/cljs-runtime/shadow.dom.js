goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_50531 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_50531(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_50533 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_50533(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__49262 = coll;
var G__49263 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__49262,G__49263) : shadow.dom.lazy_native_coll_seq.call(null,G__49262,G__49263));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__49313 = arguments.length;
switch (G__49313) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__49337 = arguments.length;
switch (G__49337) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__49351 = arguments.length;
switch (G__49351) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__49369 = arguments.length;
switch (G__49369) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__49395 = arguments.length;
switch (G__49395) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__49424 = arguments.length;
switch (G__49424) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e49443){if((e49443 instanceof Object)){
var e = e49443;
return console.log("didnt support attachEvent",el,e);
} else {
throw e49443;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__49460 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__49461 = null;
var count__49462 = (0);
var i__49463 = (0);
while(true){
if((i__49463 < count__49462)){
var el = chunk__49461.cljs$core$IIndexed$_nth$arity$2(null,i__49463);
var handler_50543__$1 = ((function (seq__49460,chunk__49461,count__49462,i__49463,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49460,chunk__49461,count__49462,i__49463,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50543__$1);


var G__50544 = seq__49460;
var G__50545 = chunk__49461;
var G__50546 = count__49462;
var G__50547 = (i__49463 + (1));
seq__49460 = G__50544;
chunk__49461 = G__50545;
count__49462 = G__50546;
i__49463 = G__50547;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49460);
if(temp__5753__auto__){
var seq__49460__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49460__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49460__$1);
var G__50548 = cljs.core.chunk_rest(seq__49460__$1);
var G__50549 = c__4638__auto__;
var G__50550 = cljs.core.count(c__4638__auto__);
var G__50551 = (0);
seq__49460 = G__50548;
chunk__49461 = G__50549;
count__49462 = G__50550;
i__49463 = G__50551;
continue;
} else {
var el = cljs.core.first(seq__49460__$1);
var handler_50552__$1 = ((function (seq__49460,chunk__49461,count__49462,i__49463,el,seq__49460__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__49460,chunk__49461,count__49462,i__49463,el,seq__49460__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_50552__$1);


var G__50553 = cljs.core.next(seq__49460__$1);
var G__50554 = null;
var G__50555 = (0);
var G__50556 = (0);
seq__49460 = G__50553;
chunk__49461 = G__50554;
count__49462 = G__50555;
i__49463 = G__50556;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__49507 = arguments.length;
switch (G__49507) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__49533 = cljs.core.seq(events);
var chunk__49534 = null;
var count__49535 = (0);
var i__49536 = (0);
while(true){
if((i__49536 < count__49535)){
var vec__49593 = chunk__49534.cljs$core$IIndexed$_nth$arity$2(null,i__49536);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49593,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49593,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50562 = seq__49533;
var G__50563 = chunk__49534;
var G__50564 = count__49535;
var G__50565 = (i__49536 + (1));
seq__49533 = G__50562;
chunk__49534 = G__50563;
count__49535 = G__50564;
i__49536 = G__50565;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49533);
if(temp__5753__auto__){
var seq__49533__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49533__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49533__$1);
var G__50566 = cljs.core.chunk_rest(seq__49533__$1);
var G__50567 = c__4638__auto__;
var G__50568 = cljs.core.count(c__4638__auto__);
var G__50569 = (0);
seq__49533 = G__50566;
chunk__49534 = G__50567;
count__49535 = G__50568;
i__49536 = G__50569;
continue;
} else {
var vec__49598 = cljs.core.first(seq__49533__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49598,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49598,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__50570 = cljs.core.next(seq__49533__$1);
var G__50571 = null;
var G__50572 = (0);
var G__50573 = (0);
seq__49533 = G__50570;
chunk__49534 = G__50571;
count__49535 = G__50572;
i__49536 = G__50573;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__49608 = cljs.core.seq(styles);
var chunk__49609 = null;
var count__49610 = (0);
var i__49611 = (0);
while(true){
if((i__49611 < count__49610)){
var vec__49623 = chunk__49609.cljs$core$IIndexed$_nth$arity$2(null,i__49611);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49623,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49623,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50583 = seq__49608;
var G__50584 = chunk__49609;
var G__50585 = count__49610;
var G__50586 = (i__49611 + (1));
seq__49608 = G__50583;
chunk__49609 = G__50584;
count__49610 = G__50585;
i__49611 = G__50586;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49608);
if(temp__5753__auto__){
var seq__49608__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49608__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49608__$1);
var G__50587 = cljs.core.chunk_rest(seq__49608__$1);
var G__50588 = c__4638__auto__;
var G__50589 = cljs.core.count(c__4638__auto__);
var G__50590 = (0);
seq__49608 = G__50587;
chunk__49609 = G__50588;
count__49610 = G__50589;
i__49611 = G__50590;
continue;
} else {
var vec__49630 = cljs.core.first(seq__49608__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49630,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49630,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__50591 = cljs.core.next(seq__49608__$1);
var G__50592 = null;
var G__50593 = (0);
var G__50594 = (0);
seq__49608 = G__50591;
chunk__49609 = G__50592;
count__49610 = G__50593;
i__49611 = G__50594;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__49633_50600 = key;
var G__49633_50602__$1 = (((G__49633_50600 instanceof cljs.core.Keyword))?G__49633_50600.fqn:null);
switch (G__49633_50602__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_50604 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_50604,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_50604,"aria-");
}
})())){
el.setAttribute(ks_50604,value);
} else {
(el[ks_50604] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__49748){
var map__49750 = p__49748;
var map__49750__$1 = cljs.core.__destructure_map(map__49750);
var props = map__49750__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49750__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__49752 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49752,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49752,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49752,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__49756 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__49756,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__49756;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__49762 = arguments.length;
switch (G__49762) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__49784){
var vec__49791 = p__49784;
var seq__49792 = cljs.core.seq(vec__49791);
var first__49793 = cljs.core.first(seq__49792);
var seq__49792__$1 = cljs.core.next(seq__49792);
var nn = first__49793;
var first__49793__$1 = cljs.core.first(seq__49792__$1);
var seq__49792__$2 = cljs.core.next(seq__49792__$1);
var np = first__49793__$1;
var nc = seq__49792__$2;
var node = vec__49791;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49801 = nn;
var G__49802 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49801,G__49802) : create_fn.call(null,G__49801,G__49802));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49803 = nn;
var G__49804 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49803,G__49804) : create_fn.call(null,G__49803,G__49804));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__49805 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49805,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49805,(1),null);
var seq__49808_50607 = cljs.core.seq(node_children);
var chunk__49809_50608 = null;
var count__49810_50609 = (0);
var i__49811_50610 = (0);
while(true){
if((i__49811_50610 < count__49810_50609)){
var child_struct_50611 = chunk__49809_50608.cljs$core$IIndexed$_nth$arity$2(null,i__49811_50610);
var children_50612 = shadow.dom.dom_node(child_struct_50611);
if(cljs.core.seq_QMARK_(children_50612)){
var seq__49840_50613 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50612));
var chunk__49842_50614 = null;
var count__49843_50615 = (0);
var i__49844_50616 = (0);
while(true){
if((i__49844_50616 < count__49843_50615)){
var child_50620 = chunk__49842_50614.cljs$core$IIndexed$_nth$arity$2(null,i__49844_50616);
if(cljs.core.truth_(child_50620)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50620);


var G__50621 = seq__49840_50613;
var G__50622 = chunk__49842_50614;
var G__50623 = count__49843_50615;
var G__50624 = (i__49844_50616 + (1));
seq__49840_50613 = G__50621;
chunk__49842_50614 = G__50622;
count__49843_50615 = G__50623;
i__49844_50616 = G__50624;
continue;
} else {
var G__50625 = seq__49840_50613;
var G__50626 = chunk__49842_50614;
var G__50627 = count__49843_50615;
var G__50628 = (i__49844_50616 + (1));
seq__49840_50613 = G__50625;
chunk__49842_50614 = G__50626;
count__49843_50615 = G__50627;
i__49844_50616 = G__50628;
continue;
}
} else {
var temp__5753__auto___50629 = cljs.core.seq(seq__49840_50613);
if(temp__5753__auto___50629){
var seq__49840_50630__$1 = temp__5753__auto___50629;
if(cljs.core.chunked_seq_QMARK_(seq__49840_50630__$1)){
var c__4638__auto___50631 = cljs.core.chunk_first(seq__49840_50630__$1);
var G__50632 = cljs.core.chunk_rest(seq__49840_50630__$1);
var G__50633 = c__4638__auto___50631;
var G__50634 = cljs.core.count(c__4638__auto___50631);
var G__50635 = (0);
seq__49840_50613 = G__50632;
chunk__49842_50614 = G__50633;
count__49843_50615 = G__50634;
i__49844_50616 = G__50635;
continue;
} else {
var child_50636 = cljs.core.first(seq__49840_50630__$1);
if(cljs.core.truth_(child_50636)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50636);


var G__50637 = cljs.core.next(seq__49840_50630__$1);
var G__50638 = null;
var G__50639 = (0);
var G__50640 = (0);
seq__49840_50613 = G__50637;
chunk__49842_50614 = G__50638;
count__49843_50615 = G__50639;
i__49844_50616 = G__50640;
continue;
} else {
var G__50641 = cljs.core.next(seq__49840_50630__$1);
var G__50642 = null;
var G__50643 = (0);
var G__50644 = (0);
seq__49840_50613 = G__50641;
chunk__49842_50614 = G__50642;
count__49843_50615 = G__50643;
i__49844_50616 = G__50644;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50612);
}


var G__50645 = seq__49808_50607;
var G__50646 = chunk__49809_50608;
var G__50647 = count__49810_50609;
var G__50648 = (i__49811_50610 + (1));
seq__49808_50607 = G__50645;
chunk__49809_50608 = G__50646;
count__49810_50609 = G__50647;
i__49811_50610 = G__50648;
continue;
} else {
var temp__5753__auto___50649 = cljs.core.seq(seq__49808_50607);
if(temp__5753__auto___50649){
var seq__49808_50650__$1 = temp__5753__auto___50649;
if(cljs.core.chunked_seq_QMARK_(seq__49808_50650__$1)){
var c__4638__auto___50651 = cljs.core.chunk_first(seq__49808_50650__$1);
var G__50652 = cljs.core.chunk_rest(seq__49808_50650__$1);
var G__50653 = c__4638__auto___50651;
var G__50654 = cljs.core.count(c__4638__auto___50651);
var G__50655 = (0);
seq__49808_50607 = G__50652;
chunk__49809_50608 = G__50653;
count__49810_50609 = G__50654;
i__49811_50610 = G__50655;
continue;
} else {
var child_struct_50656 = cljs.core.first(seq__49808_50650__$1);
var children_50657 = shadow.dom.dom_node(child_struct_50656);
if(cljs.core.seq_QMARK_(children_50657)){
var seq__49856_50658 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_50657));
var chunk__49859_50659 = null;
var count__49860_50660 = (0);
var i__49861_50661 = (0);
while(true){
if((i__49861_50661 < count__49860_50660)){
var child_50662 = chunk__49859_50659.cljs$core$IIndexed$_nth$arity$2(null,i__49861_50661);
if(cljs.core.truth_(child_50662)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50662);


var G__50664 = seq__49856_50658;
var G__50665 = chunk__49859_50659;
var G__50666 = count__49860_50660;
var G__50667 = (i__49861_50661 + (1));
seq__49856_50658 = G__50664;
chunk__49859_50659 = G__50665;
count__49860_50660 = G__50666;
i__49861_50661 = G__50667;
continue;
} else {
var G__50668 = seq__49856_50658;
var G__50669 = chunk__49859_50659;
var G__50670 = count__49860_50660;
var G__50671 = (i__49861_50661 + (1));
seq__49856_50658 = G__50668;
chunk__49859_50659 = G__50669;
count__49860_50660 = G__50670;
i__49861_50661 = G__50671;
continue;
}
} else {
var temp__5753__auto___50672__$1 = cljs.core.seq(seq__49856_50658);
if(temp__5753__auto___50672__$1){
var seq__49856_50673__$1 = temp__5753__auto___50672__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49856_50673__$1)){
var c__4638__auto___50674 = cljs.core.chunk_first(seq__49856_50673__$1);
var G__50675 = cljs.core.chunk_rest(seq__49856_50673__$1);
var G__50676 = c__4638__auto___50674;
var G__50677 = cljs.core.count(c__4638__auto___50674);
var G__50678 = (0);
seq__49856_50658 = G__50675;
chunk__49859_50659 = G__50676;
count__49860_50660 = G__50677;
i__49861_50661 = G__50678;
continue;
} else {
var child_50679 = cljs.core.first(seq__49856_50673__$1);
if(cljs.core.truth_(child_50679)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_50679);


var G__50680 = cljs.core.next(seq__49856_50673__$1);
var G__50681 = null;
var G__50682 = (0);
var G__50683 = (0);
seq__49856_50658 = G__50680;
chunk__49859_50659 = G__50681;
count__49860_50660 = G__50682;
i__49861_50661 = G__50683;
continue;
} else {
var G__50684 = cljs.core.next(seq__49856_50673__$1);
var G__50685 = null;
var G__50686 = (0);
var G__50687 = (0);
seq__49856_50658 = G__50684;
chunk__49859_50659 = G__50685;
count__49860_50660 = G__50686;
i__49861_50661 = G__50687;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_50657);
}


var G__50688 = cljs.core.next(seq__49808_50650__$1);
var G__50689 = null;
var G__50690 = (0);
var G__50691 = (0);
seq__49808_50607 = G__50688;
chunk__49809_50608 = G__50689;
count__49810_50609 = G__50690;
i__49811_50610 = G__50691;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__49948 = cljs.core.seq(node);
var chunk__49949 = null;
var count__49950 = (0);
var i__49951 = (0);
while(true){
if((i__49951 < count__49950)){
var n = chunk__49949.cljs$core$IIndexed$_nth$arity$2(null,i__49951);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50693 = seq__49948;
var G__50694 = chunk__49949;
var G__50695 = count__49950;
var G__50696 = (i__49951 + (1));
seq__49948 = G__50693;
chunk__49949 = G__50694;
count__49950 = G__50695;
i__49951 = G__50696;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__49948);
if(temp__5753__auto__){
var seq__49948__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49948__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49948__$1);
var G__50697 = cljs.core.chunk_rest(seq__49948__$1);
var G__50698 = c__4638__auto__;
var G__50699 = cljs.core.count(c__4638__auto__);
var G__50700 = (0);
seq__49948 = G__50697;
chunk__49949 = G__50698;
count__49950 = G__50699;
i__49951 = G__50700;
continue;
} else {
var n = cljs.core.first(seq__49948__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__50701 = cljs.core.next(seq__49948__$1);
var G__50702 = null;
var G__50703 = (0);
var G__50704 = (0);
seq__49948 = G__50701;
chunk__49949 = G__50702;
count__49950 = G__50703;
i__49951 = G__50704;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__49954 = arguments.length;
switch (G__49954) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__49959 = arguments.length;
switch (G__49959) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__49961 = arguments.length;
switch (G__49961) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___50709 = arguments.length;
var i__4819__auto___50710 = (0);
while(true){
if((i__4819__auto___50710 < len__4818__auto___50709)){
args__4824__auto__.push((arguments[i__4819__auto___50710]));

var G__50711 = (i__4819__auto___50710 + (1));
i__4819__auto___50710 = G__50711;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__49966_50713 = cljs.core.seq(nodes);
var chunk__49967_50714 = null;
var count__49968_50715 = (0);
var i__49969_50716 = (0);
while(true){
if((i__49969_50716 < count__49968_50715)){
var node_50717 = chunk__49967_50714.cljs$core$IIndexed$_nth$arity$2(null,i__49969_50716);
fragment.appendChild(shadow.dom._to_dom(node_50717));


var G__50718 = seq__49966_50713;
var G__50719 = chunk__49967_50714;
var G__50720 = count__49968_50715;
var G__50721 = (i__49969_50716 + (1));
seq__49966_50713 = G__50718;
chunk__49967_50714 = G__50719;
count__49968_50715 = G__50720;
i__49969_50716 = G__50721;
continue;
} else {
var temp__5753__auto___50722 = cljs.core.seq(seq__49966_50713);
if(temp__5753__auto___50722){
var seq__49966_50723__$1 = temp__5753__auto___50722;
if(cljs.core.chunked_seq_QMARK_(seq__49966_50723__$1)){
var c__4638__auto___50724 = cljs.core.chunk_first(seq__49966_50723__$1);
var G__50725 = cljs.core.chunk_rest(seq__49966_50723__$1);
var G__50726 = c__4638__auto___50724;
var G__50727 = cljs.core.count(c__4638__auto___50724);
var G__50728 = (0);
seq__49966_50713 = G__50725;
chunk__49967_50714 = G__50726;
count__49968_50715 = G__50727;
i__49969_50716 = G__50728;
continue;
} else {
var node_50729 = cljs.core.first(seq__49966_50723__$1);
fragment.appendChild(shadow.dom._to_dom(node_50729));


var G__50730 = cljs.core.next(seq__49966_50723__$1);
var G__50731 = null;
var G__50732 = (0);
var G__50733 = (0);
seq__49966_50713 = G__50730;
chunk__49967_50714 = G__50731;
count__49968_50715 = G__50732;
i__49969_50716 = G__50733;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq49965){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49965));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__49970_50734 = cljs.core.seq(scripts);
var chunk__49971_50735 = null;
var count__49972_50736 = (0);
var i__49973_50737 = (0);
while(true){
if((i__49973_50737 < count__49972_50736)){
var vec__49980_50738 = chunk__49971_50735.cljs$core$IIndexed$_nth$arity$2(null,i__49973_50737);
var script_tag_50739 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49980_50738,(0),null);
var script_body_50740 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49980_50738,(1),null);
eval(script_body_50740);


var G__50741 = seq__49970_50734;
var G__50742 = chunk__49971_50735;
var G__50743 = count__49972_50736;
var G__50744 = (i__49973_50737 + (1));
seq__49970_50734 = G__50741;
chunk__49971_50735 = G__50742;
count__49972_50736 = G__50743;
i__49973_50737 = G__50744;
continue;
} else {
var temp__5753__auto___50745 = cljs.core.seq(seq__49970_50734);
if(temp__5753__auto___50745){
var seq__49970_50746__$1 = temp__5753__auto___50745;
if(cljs.core.chunked_seq_QMARK_(seq__49970_50746__$1)){
var c__4638__auto___50747 = cljs.core.chunk_first(seq__49970_50746__$1);
var G__50748 = cljs.core.chunk_rest(seq__49970_50746__$1);
var G__50749 = c__4638__auto___50747;
var G__50750 = cljs.core.count(c__4638__auto___50747);
var G__50751 = (0);
seq__49970_50734 = G__50748;
chunk__49971_50735 = G__50749;
count__49972_50736 = G__50750;
i__49973_50737 = G__50751;
continue;
} else {
var vec__49987_50752 = cljs.core.first(seq__49970_50746__$1);
var script_tag_50753 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49987_50752,(0),null);
var script_body_50754 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49987_50752,(1),null);
eval(script_body_50754);


var G__50755 = cljs.core.next(seq__49970_50746__$1);
var G__50756 = null;
var G__50757 = (0);
var G__50758 = (0);
seq__49970_50734 = G__50755;
chunk__49971_50735 = G__50756;
count__49972_50736 = G__50757;
i__49973_50737 = G__50758;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__49990){
var vec__49991 = p__49990;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49991,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49991,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__50000 = arguments.length;
switch (G__50000) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__50013 = cljs.core.seq(style_keys);
var chunk__50014 = null;
var count__50015 = (0);
var i__50016 = (0);
while(true){
if((i__50016 < count__50015)){
var it = chunk__50014.cljs$core$IIndexed$_nth$arity$2(null,i__50016);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50760 = seq__50013;
var G__50761 = chunk__50014;
var G__50762 = count__50015;
var G__50763 = (i__50016 + (1));
seq__50013 = G__50760;
chunk__50014 = G__50761;
count__50015 = G__50762;
i__50016 = G__50763;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50013);
if(temp__5753__auto__){
var seq__50013__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50013__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50013__$1);
var G__50765 = cljs.core.chunk_rest(seq__50013__$1);
var G__50766 = c__4638__auto__;
var G__50767 = cljs.core.count(c__4638__auto__);
var G__50768 = (0);
seq__50013 = G__50765;
chunk__50014 = G__50766;
count__50015 = G__50767;
i__50016 = G__50768;
continue;
} else {
var it = cljs.core.first(seq__50013__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__50769 = cljs.core.next(seq__50013__$1);
var G__50770 = null;
var G__50771 = (0);
var G__50772 = (0);
seq__50013 = G__50769;
chunk__50014 = G__50770;
count__50015 = G__50771;
i__50016 = G__50772;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k50047,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__50099 = k50047;
var G__50099__$1 = (((G__50099 instanceof cljs.core.Keyword))?G__50099.fqn:null);
switch (G__50099__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50047,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__50137){
var vec__50138 = p__50137;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50138,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50138,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50046){
var self__ = this;
var G__50046__$1 = this;
return (new cljs.core.RecordIter((0),G__50046__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50048,other50049){
var self__ = this;
var this50048__$1 = this;
return (((!((other50049 == null)))) && ((((this50048__$1.constructor === other50049.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50048__$1.x,other50049.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50048__$1.y,other50049.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50048__$1.__extmap,other50049.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k50047){
var self__ = this;
var this__4468__auto____$1 = this;
var G__50172 = k50047;
var G__50172__$1 = (((G__50172 instanceof cljs.core.Keyword))?G__50172.fqn:null);
switch (G__50172__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50047);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__50046){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__50177 = cljs.core.keyword_identical_QMARK_;
var expr__50178 = k__4470__auto__;
if(cljs.core.truth_((pred__50177.cljs$core$IFn$_invoke$arity$2 ? pred__50177.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__50178) : pred__50177.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__50178)))){
return (new shadow.dom.Coordinate(G__50046,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50177.cljs$core$IFn$_invoke$arity$2 ? pred__50177.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__50178) : pred__50177.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__50178)))){
return (new shadow.dom.Coordinate(self__.x,G__50046,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__50046),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__50046){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__50046,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__50050){
var extmap__4501__auto__ = (function (){var G__50188 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50050,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__50050)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50188);
} else {
return G__50188;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__50050),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__50050),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k50197,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__50233 = k50197;
var G__50233__$1 = (((G__50233 instanceof cljs.core.Keyword))?G__50233.fqn:null);
switch (G__50233__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k50197,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__50235){
var vec__50236 = p__50235;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50236,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50236,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__50196){
var self__ = this;
var G__50196__$1 = this;
return (new cljs.core.RecordIter((0),G__50196__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this50198,other50199){
var self__ = this;
var this50198__$1 = this;
return (((!((other50199 == null)))) && ((((this50198__$1.constructor === other50199.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50198__$1.w,other50199.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50198__$1.h,other50199.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this50198__$1.__extmap,other50199.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k50197){
var self__ = this;
var this__4468__auto____$1 = this;
var G__50301 = k50197;
var G__50301__$1 = (((G__50301 instanceof cljs.core.Keyword))?G__50301.fqn:null);
switch (G__50301__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k50197);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__50196){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__50319 = cljs.core.keyword_identical_QMARK_;
var expr__50320 = k__4470__auto__;
if(cljs.core.truth_((pred__50319.cljs$core$IFn$_invoke$arity$2 ? pred__50319.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__50320) : pred__50319.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__50320)))){
return (new shadow.dom.Size(G__50196,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__50319.cljs$core$IFn$_invoke$arity$2 ? pred__50319.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__50320) : pred__50319.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__50320)))){
return (new shadow.dom.Size(self__.w,G__50196,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__50196),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__50196){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__50196,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__50209){
var extmap__4501__auto__ = (function (){var G__50331 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__50209,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__50209)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__50331);
} else {
return G__50331;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__50209),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__50209),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__50794 = (i + (1));
var G__50795 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__50794;
ret = G__50795;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50374){
var vec__50375 = p__50374;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50375,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50375,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__50379 = arguments.length;
switch (G__50379) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__50813 = ps;
var G__50814 = (i + (1));
el__$1 = G__50813;
i = G__50814;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__50396 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50396,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50396,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50396,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__50399_50815 = cljs.core.seq(props);
var chunk__50400_50816 = null;
var count__50401_50817 = (0);
var i__50402_50818 = (0);
while(true){
if((i__50402_50818 < count__50401_50817)){
var vec__50409_50819 = chunk__50400_50816.cljs$core$IIndexed$_nth$arity$2(null,i__50402_50818);
var k_50820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50409_50819,(0),null);
var v_50821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50409_50819,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_50820);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50820),v_50821);


var G__50822 = seq__50399_50815;
var G__50823 = chunk__50400_50816;
var G__50824 = count__50401_50817;
var G__50825 = (i__50402_50818 + (1));
seq__50399_50815 = G__50822;
chunk__50400_50816 = G__50823;
count__50401_50817 = G__50824;
i__50402_50818 = G__50825;
continue;
} else {
var temp__5753__auto___50826 = cljs.core.seq(seq__50399_50815);
if(temp__5753__auto___50826){
var seq__50399_50827__$1 = temp__5753__auto___50826;
if(cljs.core.chunked_seq_QMARK_(seq__50399_50827__$1)){
var c__4638__auto___50828 = cljs.core.chunk_first(seq__50399_50827__$1);
var G__50829 = cljs.core.chunk_rest(seq__50399_50827__$1);
var G__50830 = c__4638__auto___50828;
var G__50831 = cljs.core.count(c__4638__auto___50828);
var G__50832 = (0);
seq__50399_50815 = G__50829;
chunk__50400_50816 = G__50830;
count__50401_50817 = G__50831;
i__50402_50818 = G__50832;
continue;
} else {
var vec__50413_50833 = cljs.core.first(seq__50399_50827__$1);
var k_50834 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50413_50833,(0),null);
var v_50835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50413_50833,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_50834);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_50834),v_50835);


var G__50838 = cljs.core.next(seq__50399_50827__$1);
var G__50839 = null;
var G__50840 = (0);
var G__50841 = (0);
seq__50399_50815 = G__50838;
chunk__50400_50816 = G__50839;
count__50401_50817 = G__50840;
i__50402_50818 = G__50841;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__50420 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50420,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50420,(1),null);
var seq__50425_50850 = cljs.core.seq(node_children);
var chunk__50427_50851 = null;
var count__50428_50852 = (0);
var i__50429_50853 = (0);
while(true){
if((i__50429_50853 < count__50428_50852)){
var child_struct_50854 = chunk__50427_50851.cljs$core$IIndexed$_nth$arity$2(null,i__50429_50853);
if((!((child_struct_50854 == null)))){
if(typeof child_struct_50854 === 'string'){
var text_50855 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50855),child_struct_50854].join(''));
} else {
var children_50856 = shadow.dom.svg_node(child_struct_50854);
if(cljs.core.seq_QMARK_(children_50856)){
var seq__50459_50857 = cljs.core.seq(children_50856);
var chunk__50461_50858 = null;
var count__50462_50859 = (0);
var i__50463_50860 = (0);
while(true){
if((i__50463_50860 < count__50462_50859)){
var child_50861 = chunk__50461_50858.cljs$core$IIndexed$_nth$arity$2(null,i__50463_50860);
if(cljs.core.truth_(child_50861)){
node.appendChild(child_50861);


var G__50862 = seq__50459_50857;
var G__50863 = chunk__50461_50858;
var G__50864 = count__50462_50859;
var G__50865 = (i__50463_50860 + (1));
seq__50459_50857 = G__50862;
chunk__50461_50858 = G__50863;
count__50462_50859 = G__50864;
i__50463_50860 = G__50865;
continue;
} else {
var G__50866 = seq__50459_50857;
var G__50867 = chunk__50461_50858;
var G__50868 = count__50462_50859;
var G__50869 = (i__50463_50860 + (1));
seq__50459_50857 = G__50866;
chunk__50461_50858 = G__50867;
count__50462_50859 = G__50868;
i__50463_50860 = G__50869;
continue;
}
} else {
var temp__5753__auto___50870 = cljs.core.seq(seq__50459_50857);
if(temp__5753__auto___50870){
var seq__50459_50871__$1 = temp__5753__auto___50870;
if(cljs.core.chunked_seq_QMARK_(seq__50459_50871__$1)){
var c__4638__auto___50872 = cljs.core.chunk_first(seq__50459_50871__$1);
var G__50873 = cljs.core.chunk_rest(seq__50459_50871__$1);
var G__50874 = c__4638__auto___50872;
var G__50875 = cljs.core.count(c__4638__auto___50872);
var G__50876 = (0);
seq__50459_50857 = G__50873;
chunk__50461_50858 = G__50874;
count__50462_50859 = G__50875;
i__50463_50860 = G__50876;
continue;
} else {
var child_50877 = cljs.core.first(seq__50459_50871__$1);
if(cljs.core.truth_(child_50877)){
node.appendChild(child_50877);


var G__50883 = cljs.core.next(seq__50459_50871__$1);
var G__50884 = null;
var G__50885 = (0);
var G__50886 = (0);
seq__50459_50857 = G__50883;
chunk__50461_50858 = G__50884;
count__50462_50859 = G__50885;
i__50463_50860 = G__50886;
continue;
} else {
var G__50887 = cljs.core.next(seq__50459_50871__$1);
var G__50888 = null;
var G__50889 = (0);
var G__50890 = (0);
seq__50459_50857 = G__50887;
chunk__50461_50858 = G__50888;
count__50462_50859 = G__50889;
i__50463_50860 = G__50890;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50856);
}
}


var G__50891 = seq__50425_50850;
var G__50892 = chunk__50427_50851;
var G__50893 = count__50428_50852;
var G__50894 = (i__50429_50853 + (1));
seq__50425_50850 = G__50891;
chunk__50427_50851 = G__50892;
count__50428_50852 = G__50893;
i__50429_50853 = G__50894;
continue;
} else {
var G__50895 = seq__50425_50850;
var G__50896 = chunk__50427_50851;
var G__50897 = count__50428_50852;
var G__50898 = (i__50429_50853 + (1));
seq__50425_50850 = G__50895;
chunk__50427_50851 = G__50896;
count__50428_50852 = G__50897;
i__50429_50853 = G__50898;
continue;
}
} else {
var temp__5753__auto___50899 = cljs.core.seq(seq__50425_50850);
if(temp__5753__auto___50899){
var seq__50425_50900__$1 = temp__5753__auto___50899;
if(cljs.core.chunked_seq_QMARK_(seq__50425_50900__$1)){
var c__4638__auto___50901 = cljs.core.chunk_first(seq__50425_50900__$1);
var G__50902 = cljs.core.chunk_rest(seq__50425_50900__$1);
var G__50903 = c__4638__auto___50901;
var G__50904 = cljs.core.count(c__4638__auto___50901);
var G__50905 = (0);
seq__50425_50850 = G__50902;
chunk__50427_50851 = G__50903;
count__50428_50852 = G__50904;
i__50429_50853 = G__50905;
continue;
} else {
var child_struct_50906 = cljs.core.first(seq__50425_50900__$1);
if((!((child_struct_50906 == null)))){
if(typeof child_struct_50906 === 'string'){
var text_50908 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_50908),child_struct_50906].join(''));
} else {
var children_50910 = shadow.dom.svg_node(child_struct_50906);
if(cljs.core.seq_QMARK_(children_50910)){
var seq__50473_50911 = cljs.core.seq(children_50910);
var chunk__50476_50912 = null;
var count__50477_50913 = (0);
var i__50478_50914 = (0);
while(true){
if((i__50478_50914 < count__50477_50913)){
var child_50916 = chunk__50476_50912.cljs$core$IIndexed$_nth$arity$2(null,i__50478_50914);
if(cljs.core.truth_(child_50916)){
node.appendChild(child_50916);


var G__50917 = seq__50473_50911;
var G__50918 = chunk__50476_50912;
var G__50919 = count__50477_50913;
var G__50920 = (i__50478_50914 + (1));
seq__50473_50911 = G__50917;
chunk__50476_50912 = G__50918;
count__50477_50913 = G__50919;
i__50478_50914 = G__50920;
continue;
} else {
var G__50921 = seq__50473_50911;
var G__50922 = chunk__50476_50912;
var G__50923 = count__50477_50913;
var G__50924 = (i__50478_50914 + (1));
seq__50473_50911 = G__50921;
chunk__50476_50912 = G__50922;
count__50477_50913 = G__50923;
i__50478_50914 = G__50924;
continue;
}
} else {
var temp__5753__auto___50925__$1 = cljs.core.seq(seq__50473_50911);
if(temp__5753__auto___50925__$1){
var seq__50473_50927__$1 = temp__5753__auto___50925__$1;
if(cljs.core.chunked_seq_QMARK_(seq__50473_50927__$1)){
var c__4638__auto___50928 = cljs.core.chunk_first(seq__50473_50927__$1);
var G__50929 = cljs.core.chunk_rest(seq__50473_50927__$1);
var G__50930 = c__4638__auto___50928;
var G__50931 = cljs.core.count(c__4638__auto___50928);
var G__50932 = (0);
seq__50473_50911 = G__50929;
chunk__50476_50912 = G__50930;
count__50477_50913 = G__50931;
i__50478_50914 = G__50932;
continue;
} else {
var child_50933 = cljs.core.first(seq__50473_50927__$1);
if(cljs.core.truth_(child_50933)){
node.appendChild(child_50933);


var G__50934 = cljs.core.next(seq__50473_50927__$1);
var G__50935 = null;
var G__50936 = (0);
var G__50937 = (0);
seq__50473_50911 = G__50934;
chunk__50476_50912 = G__50935;
count__50477_50913 = G__50936;
i__50478_50914 = G__50937;
continue;
} else {
var G__50938 = cljs.core.next(seq__50473_50927__$1);
var G__50939 = null;
var G__50940 = (0);
var G__50941 = (0);
seq__50473_50911 = G__50938;
chunk__50476_50912 = G__50939;
count__50477_50913 = G__50940;
i__50478_50914 = G__50941;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_50910);
}
}


var G__50942 = cljs.core.next(seq__50425_50900__$1);
var G__50943 = null;
var G__50944 = (0);
var G__50945 = (0);
seq__50425_50850 = G__50942;
chunk__50427_50851 = G__50943;
count__50428_50852 = G__50944;
i__50429_50853 = G__50945;
continue;
} else {
var G__50946 = cljs.core.next(seq__50425_50900__$1);
var G__50947 = null;
var G__50948 = (0);
var G__50949 = (0);
seq__50425_50850 = G__50946;
chunk__50427_50851 = G__50947;
count__50428_50852 = G__50948;
i__50429_50853 = G__50949;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___50950 = arguments.length;
var i__4819__auto___50951 = (0);
while(true){
if((i__4819__auto___50951 < len__4818__auto___50950)){
args__4824__auto__.push((arguments[i__4819__auto___50951]));

var G__50952 = (i__4819__auto___50951 + (1));
i__4819__auto___50951 = G__50952;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq50493){
var G__50495 = cljs.core.first(seq50493);
var seq50493__$1 = cljs.core.next(seq50493);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50495,seq50493__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__50499 = arguments.length;
switch (G__50499) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__46656__auto___50962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_50516){
var state_val_50517 = (state_50516[(1)]);
if((state_val_50517 === (1))){
var state_50516__$1 = state_50516;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50516__$1,(2),once_or_cleanup);
} else {
if((state_val_50517 === (2))){
var inst_50513 = (state_50516[(2)]);
var inst_50514 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_50516__$1 = (function (){var statearr_50519 = state_50516;
(statearr_50519[(7)] = inst_50513);

return statearr_50519;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50516__$1,inst_50514);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46502__auto__ = null;
var shadow$dom$state_machine__46502__auto____0 = (function (){
var statearr_50520 = [null,null,null,null,null,null,null,null];
(statearr_50520[(0)] = shadow$dom$state_machine__46502__auto__);

(statearr_50520[(1)] = (1));

return statearr_50520;
});
var shadow$dom$state_machine__46502__auto____1 = (function (state_50516){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_50516);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e50521){var ex__46505__auto__ = e50521;
var statearr_50522_51009 = state_50516;
(statearr_50522_51009[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_50516[(4)]))){
var statearr_50523_51010 = state_50516;
(statearr_50523_51010[(1)] = cljs.core.first((state_50516[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51011 = state_50516;
state_50516 = G__51011;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
shadow$dom$state_machine__46502__auto__ = function(state_50516){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46502__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46502__auto____1.call(this,state_50516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46502__auto____0;
shadow$dom$state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46502__auto____1;
return shadow$dom$state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_50526 = f__46657__auto__();
(statearr_50526[(6)] = c__46656__auto___50962);

return statearr_50526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
