goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_51395 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.object._id[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.object._id["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_51395(this$);
}
});

var shadow$object$IObject$_type$dyn_51396 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.object._type[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.object._type["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_51396(this$);
}
});

var shadow$object$IObject$_data$dyn_51397 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.object._data[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.object._data["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_51397(this$);
}
});

var shadow$object$IObject$_update$dyn_51398 = (function (this$,update_fn){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.object._update[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4510__auto__.call(null,this$,update_fn));
} else {
var m__4508__auto__ = (shadow.object._update["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__4508__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_51398(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_51399 = (function (this$,cause){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4510__auto__.call(null,this$,cause));
} else {
var m__4508__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__4508__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_51399(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__50692 = arguments.length;
switch (G__50692) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__4212__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5753__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5753__auto__)){
var oid = temp__5753__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5753__auto__)){
var parent_id = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__51402 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__51402;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50847_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__50847_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__50909 = arguments.length;
switch (G__50909) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50954_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__50954_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__50956){
var map__50961 = p__50956;
var map__50961__$1 = cljs.core.__destructure_map(map__50961);
var oref = map__50961__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50961__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__50968 = arguments.length;
switch (G__50968) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50963_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__50963_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5751__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5751__auto__)){
var obj = temp__5751__auto__;
return obj;
} else {
var temp__5753__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__51405 = parent;
dom = G__51405;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___51406 = arguments.length;
var i__4819__auto___51407 = (0);
while(true){
if((i__4819__auto___51407 < len__4818__auto___51406)){
args__4824__auto__.push((arguments[i__4819__auto___51407]));

var G__51408 = (i__4819__auto___51407 + (1));
i__4819__auto___51407 = G__51408;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5753__auto__)){
var reactions_to_trigger = temp__5753__auto__;
var seq__50983 = cljs.core.seq(reactions_to_trigger);
var chunk__50984 = null;
var count__50985 = (0);
var i__50986 = (0);
while(true){
if((i__50986 < count__50985)){
var rfn = chunk__50984.cljs$core$IIndexed$_nth$arity$2(null,i__50986);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__51409 = seq__50983;
var G__51410 = chunk__50984;
var G__51411 = count__50985;
var G__51412 = (i__50986 + (1));
seq__50983 = G__51409;
chunk__50984 = G__51410;
count__50985 = G__51411;
i__50986 = G__51412;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__50983);
if(temp__5753__auto____$1){
var seq__50983__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50983__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50983__$1);
var G__51413 = cljs.core.chunk_rest(seq__50983__$1);
var G__51414 = c__4638__auto__;
var G__51415 = cljs.core.count(c__4638__auto__);
var G__51416 = (0);
seq__50983 = G__51413;
chunk__50984 = G__51414;
count__50985 = G__51415;
i__50986 = G__51416;
continue;
} else {
var rfn = cljs.core.first(seq__50983__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__51417 = cljs.core.next(seq__50983__$1);
var G__51418 = null;
var G__51419 = (0);
var G__51420 = (0);
seq__50983 = G__51417;
chunk__50984 = G__51418;
count__50985 = G__51419;
i__50986 = G__51420;
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
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq50978){
var G__50979 = cljs.core.first(seq50978);
var seq50978__$1 = cljs.core.next(seq50978);
var G__50980 = cljs.core.first(seq50978__$1);
var seq50978__$2 = cljs.core.next(seq50978__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50979,G__50980,seq50978__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__50995_51421 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__50996_51422 = null;
var count__50997_51423 = (0);
var i__50998_51424 = (0);
while(true){
if((i__50998_51424 < count__50997_51423)){
var child_51425 = chunk__50996_51422.cljs$core$IIndexed$_nth$arity$2(null,i__50998_51424);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_51425,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_51425,ev,notify_fn));


var G__51426 = seq__50995_51421;
var G__51427 = chunk__50996_51422;
var G__51428 = count__50997_51423;
var G__51429 = (i__50998_51424 + (1));
seq__50995_51421 = G__51426;
chunk__50996_51422 = G__51427;
count__50997_51423 = G__51428;
i__50998_51424 = G__51429;
continue;
} else {
var temp__5753__auto___51430 = cljs.core.seq(seq__50995_51421);
if(temp__5753__auto___51430){
var seq__50995_51431__$1 = temp__5753__auto___51430;
if(cljs.core.chunked_seq_QMARK_(seq__50995_51431__$1)){
var c__4638__auto___51432 = cljs.core.chunk_first(seq__50995_51431__$1);
var G__51433 = cljs.core.chunk_rest(seq__50995_51431__$1);
var G__51434 = c__4638__auto___51432;
var G__51435 = cljs.core.count(c__4638__auto___51432);
var G__51436 = (0);
seq__50995_51421 = G__51433;
chunk__50996_51422 = G__51434;
count__50997_51423 = G__51435;
i__50998_51424 = G__51436;
continue;
} else {
var child_51437 = cljs.core.first(seq__50995_51431__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_51437,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_51437,ev,notify_fn));


var G__51438 = cljs.core.next(seq__50995_51431__$1);
var G__51439 = null;
var G__51440 = (0);
var G__51441 = (0);
seq__50995_51421 = G__51438;
chunk__50996_51422 = G__51439;
count__50997_51423 = G__51440;
i__50998_51424 = G__51441;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___51443 = arguments.length;
var i__4819__auto___51444 = (0);
while(true){
if((i__4819__auto___51444 < len__4818__auto___51443)){
args__4824__auto__.push((arguments[i__4819__auto___51444]));

var G__51448 = (i__4819__auto___51444 + (1));
i__4819__auto___51444 = G__51448;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq51003){
var G__51004 = cljs.core.first(seq51003);
var seq51003__$1 = cljs.core.next(seq51003);
var G__51005 = cljs.core.first(seq51003__$1);
var seq51003__$2 = cljs.core.next(seq51003__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51004,G__51005,seq51003__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___51449 = arguments.length;
var i__4819__auto___51450 = (0);
while(true){
if((i__4819__auto___51450 < len__4818__auto___51449)){
args__4824__auto__.push((arguments[i__4819__auto___51450]));

var G__51451 = (i__4819__auto___51450 + (1));
i__4819__auto___51450 = G__51451;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__51452 = shadow.object.get_parent(current);
current = G__51452;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq51006){
var G__51007 = cljs.core.first(seq51006);
var seq51006__$1 = cljs.core.next(seq51006);
var G__51008 = cljs.core.first(seq51006__$1);
var seq51006__$2 = cljs.core.next(seq51006__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51007,G__51008,seq51006__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___51453 = arguments.length;
var i__4819__auto___51454 = (0);
while(true){
if((i__4819__auto___51454 < len__4818__auto___51453)){
args__4824__auto__.push((arguments[i__4819__auto___51454]));

var G__51455 = (i__4819__auto___51454 + (1));
i__4819__auto___51454 = G__51455;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq51012){
var G__51013 = cljs.core.first(seq51012);
var seq51012__$1 = cljs.core.next(seq51012);
var G__51014 = cljs.core.first(seq51012__$1);
var seq51012__$2 = cljs.core.next(seq51012__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51013,G__51014,seq51012__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5751__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5751__auto__)){
var custom_remove = temp__5751__auto__;
var G__51017 = this$;
var G__51018 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__51017,G__51018) : custom_remove.call(null,G__51017,G__51018));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__51020 = arguments.length;
switch (G__51020) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__51026 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__51027 = null;
var count__51028 = (0);
var i__51029 = (0);
while(true){
if((i__51029 < count__51028)){
var vec__51038 = chunk__51027.cljs$core$IIndexed$_nth$arity$2(null,i__51029);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51038,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51038,(1),null);
var ev_def = vec__51038;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_51457__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__51026,chunk__51027,count__51028,i__51029,vec__51038,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__51026,chunk__51027,count__51028,i__51029,vec__51038,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__51026,chunk__51027,count__51028,i__51029,handler_51457__$1,vec__51038,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_51457__$1.cljs$core$IFn$_invoke$arity$3 ? handler_51457__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_51457__$1.call(null,oref,e,el));
});})(seq__51026,chunk__51027,count__51028,i__51029,handler_51457__$1,vec__51038,ev,handler,ev_def))
);


var G__51458 = seq__51026;
var G__51459 = chunk__51027;
var G__51460 = count__51028;
var G__51461 = (i__51029 + (1));
seq__51026 = G__51458;
chunk__51027 = G__51459;
count__51028 = G__51460;
i__51029 = G__51461;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51026);
if(temp__5753__auto__){
var seq__51026__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51026__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__51026__$1);
var G__51462 = cljs.core.chunk_rest(seq__51026__$1);
var G__51463 = c__4638__auto__;
var G__51464 = cljs.core.count(c__4638__auto__);
var G__51465 = (0);
seq__51026 = G__51462;
chunk__51027 = G__51463;
count__51028 = G__51464;
i__51029 = G__51465;
continue;
} else {
var vec__51089 = cljs.core.first(seq__51026__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51089,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51089,(1),null);
var ev_def = vec__51089;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_51466__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__51026,chunk__51027,count__51028,i__51029,vec__51089,ev,handler,ev_def,seq__51026__$1,temp__5753__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__51026,chunk__51027,count__51028,i__51029,vec__51089,ev,handler,ev_def,seq__51026__$1,temp__5753__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__51026,chunk__51027,count__51028,i__51029,handler_51466__$1,vec__51089,ev,handler,ev_def,seq__51026__$1,temp__5753__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_51466__$1.cljs$core$IFn$_invoke$arity$3 ? handler_51466__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_51466__$1.call(null,oref,e,el));
});})(seq__51026,chunk__51027,count__51028,i__51029,handler_51466__$1,vec__51089,ev,handler,ev_def,seq__51026__$1,temp__5753__auto__))
);


var G__51467 = cljs.core.next(seq__51026__$1);
var G__51468 = null;
var G__51469 = (0);
var G__51470 = (0);
seq__51026 = G__51467;
chunk__51027 = G__51468;
count__51028 = G__51469;
i__51029 = G__51470;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__51100){
var vec__51101 = p__51100;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51101,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51101,(1),null);
if(cljs.core.truth_((function (){var and__4210__auto__ = event;
if(cljs.core.truth_(and__4210__auto__)){
return handler;
} else {
return and__4210__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__4824__auto__ = [];
var len__4818__auto___51471 = arguments.length;
var i__4819__auto___51472 = (0);
while(true){
if((i__4819__auto___51472 < len__4818__auto___51471)){
args__4824__auto__.push((arguments[i__4819__auto___51472]));

var G__51473 = (i__4819__auto___51472 + (1));
i__4819__auto___51472 = G__51473;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e51149){if((e51149 instanceof Object)){
var e = e51149;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e51149;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq51135){
var G__51137 = cljs.core.first(seq51135);
var seq51135__$1 = cljs.core.next(seq51135);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51137,seq51135__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__51155 = arguments.length;
switch (G__51155) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__51163 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__51163) : shadow.dom.build.call(null,G__51163));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k51168,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__51174 = k51168;
var G__51174__$1 = (((G__51174 instanceof cljs.core.Keyword))?G__51174.fqn:null);
switch (G__51174__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51168,else__4464__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__51176){
var vec__51177 = p__51176;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51177,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51177,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.object.Watch{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51167){
var self__ = this;
var G__51167__$1 = this;
return (new cljs.core.RecordIter((0),G__51167__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51169,other51170){
var self__ = this;
var this51169__$1 = this;
return (((!((other51170 == null)))) && ((((this51169__$1.constructor === other51170.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51169__$1.key,other51170.key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51169__$1.handler,other51170.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51169__$1.__extmap,other51170.__extmap)))))))));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k51168){
var self__ = this;
var this__4468__auto____$1 = this;
var G__51192 = k51168;
var G__51192__$1 = (((G__51192 instanceof cljs.core.Keyword))?G__51192.fqn:null);
switch (G__51192__$1) {
case "key":
case "handler":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51168);

}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__51167){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__51195 = cljs.core.keyword_identical_QMARK_;
var expr__51196 = k__4470__auto__;
if(cljs.core.truth_((pred__51195.cljs$core$IFn$_invoke$arity$2 ? pred__51195.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__51196) : pred__51195.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__51196)))){
return (new shadow.object.Watch(G__51167,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51195.cljs$core$IFn$_invoke$arity$2 ? pred__51195.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__51196) : pred__51195.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__51196)))){
return (new shadow.object.Watch(self__.key,G__51167,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__51167),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__51167){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__51167,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__51172){
var extmap__4501__auto__ = (function (){var G__51201 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51172,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__51172)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51201);
} else {
return G__51201;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__51172),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__51172),null,cljs.core.not_empty(extmap__4501__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51205_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__51205_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__51214 = cljs.core.seq(self__.watches);
var chunk__51215 = null;
var count__51216 = (0);
var i__51217 = (0);
while(true){
if((i__51217 < count__51216)){
var map__51222 = chunk__51215.cljs$core$IIndexed$_nth$arity$2(null,i__51217);
var map__51222__$1 = cljs.core.__destructure_map(map__51222);
var watch = map__51222__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51222__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51222__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__51477 = seq__51214;
var G__51478 = chunk__51215;
var G__51479 = count__51216;
var G__51480 = (i__51217 + (1));
seq__51214 = G__51477;
chunk__51215 = G__51478;
count__51216 = G__51479;
i__51217 = G__51480;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__51214);
if(temp__5753__auto__){
var seq__51214__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__51214__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__51214__$1);
var G__51481 = cljs.core.chunk_rest(seq__51214__$1);
var G__51482 = c__4638__auto__;
var G__51483 = cljs.core.count(c__4638__auto__);
var G__51484 = (0);
seq__51214 = G__51481;
chunk__51215 = G__51482;
count__51216 = G__51483;
i__51217 = G__51484;
continue;
} else {
var map__51223 = cljs.core.first(seq__51214__$1);
var map__51223__$1 = cljs.core.__destructure_map(map__51223);
var watch = map__51223__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51223__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51223__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__51485 = cljs.core.next(seq__51214__$1);
var G__51486 = null;
var G__51487 = (0);
var G__51488 = (0);
seq__51214 = G__51485;
chunk__51215 = G__51486;
count__51216 = G__51487;
i__51217 = G__51488;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__51224_51489 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__51225_51490 = null;
var count__51226_51491 = (0);
var i__51227_51492 = (0);
while(true){
if((i__51227_51492 < count__51226_51491)){
var child_51493 = chunk__51225_51490.cljs$core$IIndexed$_nth$arity$2(null,i__51227_51492);
shadow.object._destroy_BANG_(child_51493,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__51494 = seq__51224_51489;
var G__51495 = chunk__51225_51490;
var G__51496 = count__51226_51491;
var G__51497 = (i__51227_51492 + (1));
seq__51224_51489 = G__51494;
chunk__51225_51490 = G__51495;
count__51226_51491 = G__51496;
i__51227_51492 = G__51497;
continue;
} else {
var temp__5753__auto___51498 = cljs.core.seq(seq__51224_51489);
if(temp__5753__auto___51498){
var seq__51224_51499__$1 = temp__5753__auto___51498;
if(cljs.core.chunked_seq_QMARK_(seq__51224_51499__$1)){
var c__4638__auto___51500 = cljs.core.chunk_first(seq__51224_51499__$1);
var G__51501 = cljs.core.chunk_rest(seq__51224_51499__$1);
var G__51502 = c__4638__auto___51500;
var G__51503 = cljs.core.count(c__4638__auto___51500);
var G__51504 = (0);
seq__51224_51489 = G__51501;
chunk__51225_51490 = G__51502;
count__51226_51491 = G__51503;
i__51227_51492 = G__51504;
continue;
} else {
var child_51505 = cljs.core.first(seq__51224_51499__$1);
shadow.object._destroy_BANG_(child_51505,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__51506 = cljs.core.next(seq__51224_51499__$1);
var G__51507 = null;
var G__51508 = (0);
var G__51509 = (0);
seq__51224_51489 = G__51506;
chunk__51225_51490 = G__51507;
count__51226_51491 = G__51508;
i__51227_51492 = G__51509;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_51510 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_51510 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_51510);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__51240 = arguments.length;
switch (G__51240) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__51252 = arguments.length;
switch (G__51252) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__4824__auto__ = [];
var len__4818__auto___51513 = arguments.length;
var i__4819__auto___51514 = (0);
while(true){
if((i__4819__auto___51514 < len__4818__auto___51513)){
args__4824__auto__.push((arguments[i__4819__auto___51514]));

var G__51515 = (i__4819__auto___51514 + (1));
i__4819__auto___51514 = G__51515;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_51516 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5751__auto___51517 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5751__auto___51517)){
var dom_51518 = temp__5751__auto___51517;
shadow.dom.set_data(dom_51518,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_51518,dom_events_51516);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_51518], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_51518], 0));
} else {
var temp__5753__auto___51519 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5753__auto___51519)){
var dom_fn_51520 = temp__5753__auto___51519;
var dom_51521 = (function (){var G__51264 = (dom_fn_51520.cljs$core$IFn$_invoke$arity$2 ? dom_fn_51520.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_51520.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__51264) : shadow.dom.build.call(null,G__51264));
})();
shadow.dom.set_data(dom_51521,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_51521], 0));

shadow.object.bind_dom_events(oref,dom_51521,dom_events_51516);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_51521], 0));
} else {
}
}

var temp__5753__auto___51522 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5753__auto___51522)){
var watches_51523 = temp__5753__auto___51522;
var seq__51265_51524 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_51523));
var chunk__51266_51525 = null;
var count__51267_51526 = (0);
var i__51268_51527 = (0);
while(true){
if((i__51268_51527 < count__51267_51526)){
var vec__51275_51528 = chunk__51266_51525.cljs$core$IIndexed$_nth$arity$2(null,i__51268_51527);
var attr_51529 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51275_51528,(0),null);
var handler_51530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51275_51528,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_51529,((function (seq__51265_51524,chunk__51266_51525,count__51267_51526,i__51268_51527,vec__51275_51528,attr_51529,handler_51530,watches_51523,temp__5753__auto___51522,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_51530.cljs$core$IFn$_invoke$arity$3 ? handler_51530.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_51530.call(null,oref,old,new$));
});})(seq__51265_51524,chunk__51266_51525,count__51267_51526,i__51268_51527,vec__51275_51528,attr_51529,handler_51530,watches_51523,temp__5753__auto___51522,oid,parent,result_chan,odef,obj,oref))
);


var G__51531 = seq__51265_51524;
var G__51532 = chunk__51266_51525;
var G__51533 = count__51267_51526;
var G__51534 = (i__51268_51527 + (1));
seq__51265_51524 = G__51531;
chunk__51266_51525 = G__51532;
count__51267_51526 = G__51533;
i__51268_51527 = G__51534;
continue;
} else {
var temp__5753__auto___51535__$1 = cljs.core.seq(seq__51265_51524);
if(temp__5753__auto___51535__$1){
var seq__51265_51536__$1 = temp__5753__auto___51535__$1;
if(cljs.core.chunked_seq_QMARK_(seq__51265_51536__$1)){
var c__4638__auto___51537 = cljs.core.chunk_first(seq__51265_51536__$1);
var G__51538 = cljs.core.chunk_rest(seq__51265_51536__$1);
var G__51539 = c__4638__auto___51537;
var G__51540 = cljs.core.count(c__4638__auto___51537);
var G__51541 = (0);
seq__51265_51524 = G__51538;
chunk__51266_51525 = G__51539;
count__51267_51526 = G__51540;
i__51268_51527 = G__51541;
continue;
} else {
var vec__51280_51542 = cljs.core.first(seq__51265_51536__$1);
var attr_51543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51280_51542,(0),null);
var handler_51544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51280_51542,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_51543,((function (seq__51265_51524,chunk__51266_51525,count__51267_51526,i__51268_51527,vec__51280_51542,attr_51543,handler_51544,seq__51265_51536__$1,temp__5753__auto___51535__$1,watches_51523,temp__5753__auto___51522,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_51544.cljs$core$IFn$_invoke$arity$3 ? handler_51544.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_51544.call(null,oref,old,new$));
});})(seq__51265_51524,chunk__51266_51525,count__51267_51526,i__51268_51527,vec__51280_51542,attr_51543,handler_51544,seq__51265_51536__$1,temp__5753__auto___51535__$1,watches_51523,temp__5753__auto___51522,oid,parent,result_chan,odef,obj,oref))
);


var G__51545 = cljs.core.next(seq__51265_51536__$1);
var G__51546 = null;
var G__51547 = (0);
var G__51548 = (0);
seq__51265_51524 = G__51545;
chunk__51266_51525 = G__51546;
count__51267_51526 = G__51547;
i__51268_51527 = G__51548;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq51261){
var G__51262 = cljs.core.first(seq51261);
var seq51261__$1 = cljs.core.next(seq51261);
var G__51263 = cljs.core.first(seq51261__$1);
var seq51261__$2 = cljs.core.next(seq51261__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51262,G__51263,seq51261__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__51285 = arguments.length;
switch (G__51285) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__51283_SHARP_){
var G__51287 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__51283_SHARP_) : node_gen.call(null,p1__51283_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__51287) : shadow.dom.build.call(null,G__51287));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__51292_51552 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__51293_51553 = null;
var count__51294_51554 = (0);
var i__51295_51555 = (0);
while(true){
if((i__51295_51555 < count__51294_51554)){
var obj_51556 = chunk__51293_51553.cljs$core$IIndexed$_nth$arity$2(null,i__51295_51555);
var obj_51557__$1 = shadow.object.get_from_dom(obj_51556);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_51557__$1);


var G__51558 = seq__51292_51552;
var G__51559 = chunk__51293_51553;
var G__51560 = count__51294_51554;
var G__51561 = (i__51295_51555 + (1));
seq__51292_51552 = G__51558;
chunk__51293_51553 = G__51559;
count__51294_51554 = G__51560;
i__51295_51555 = G__51561;
continue;
} else {
var temp__5753__auto___51562 = cljs.core.seq(seq__51292_51552);
if(temp__5753__auto___51562){
var seq__51292_51563__$1 = temp__5753__auto___51562;
if(cljs.core.chunked_seq_QMARK_(seq__51292_51563__$1)){
var c__4638__auto___51564 = cljs.core.chunk_first(seq__51292_51563__$1);
var G__51565 = cljs.core.chunk_rest(seq__51292_51563__$1);
var G__51566 = c__4638__auto___51564;
var G__51567 = cljs.core.count(c__4638__auto___51564);
var G__51568 = (0);
seq__51292_51552 = G__51565;
chunk__51293_51553 = G__51566;
count__51294_51554 = G__51567;
i__51295_51555 = G__51568;
continue;
} else {
var obj_51569 = cljs.core.first(seq__51292_51563__$1);
var obj_51570__$1 = shadow.object.get_from_dom(obj_51569);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_51570__$1);


var G__51571 = cljs.core.next(seq__51292_51563__$1);
var G__51572 = null;
var G__51573 = (0);
var G__51574 = (0);
seq__51292_51552 = G__51571;
chunk__51293_51553 = G__51572;
count__51294_51554 = G__51573;
i__51295_51555 = G__51574;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__51302 = arguments.length;
switch (G__51302) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__51300_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__51300_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__51305){
var vec__51307 = p__51305;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51307,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51307,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__51310_51581 = cljs.core.seq((function (){var G__51318 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__51318) : coll_transform.call(null,G__51318));
})());
var chunk__51311_51582 = null;
var count__51312_51583 = (0);
var i__51313_51584 = (0);
while(true){
if((i__51313_51584 < count__51312_51583)){
var item_51585 = chunk__51311_51582.cljs$core$IIndexed$_nth$arity$2(null,i__51313_51584);
shadow.object.dom_enter(coll_dom,make_item_fn(item_51585));


var G__51586 = seq__51310_51581;
var G__51587 = chunk__51311_51582;
var G__51588 = count__51312_51583;
var G__51589 = (i__51313_51584 + (1));
seq__51310_51581 = G__51586;
chunk__51311_51582 = G__51587;
count__51312_51583 = G__51588;
i__51313_51584 = G__51589;
continue;
} else {
var temp__5753__auto___51590 = cljs.core.seq(seq__51310_51581);
if(temp__5753__auto___51590){
var seq__51310_51591__$1 = temp__5753__auto___51590;
if(cljs.core.chunked_seq_QMARK_(seq__51310_51591__$1)){
var c__4638__auto___51592 = cljs.core.chunk_first(seq__51310_51591__$1);
var G__51593 = cljs.core.chunk_rest(seq__51310_51591__$1);
var G__51594 = c__4638__auto___51592;
var G__51595 = cljs.core.count(c__4638__auto___51592);
var G__51596 = (0);
seq__51310_51581 = G__51593;
chunk__51311_51582 = G__51594;
count__51312_51583 = G__51595;
i__51313_51584 = G__51596;
continue;
} else {
var item_51597 = cljs.core.first(seq__51310_51591__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_51597));


var G__51598 = cljs.core.next(seq__51310_51591__$1);
var G__51599 = null;
var G__51600 = (0);
var G__51601 = (0);
seq__51310_51581 = G__51598;
chunk__51311_51582 = G__51599;
count__51312_51583 = G__51600;
i__51313_51584 = G__51601;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__4298__auto__ = count_new;
var y__4299__auto__ = count_children;
return ((x__4298__auto__ < y__4299__auto__) ? x__4298__auto__ : y__4299__auto__);
})();
var n__4695__auto___51606 = count_children__$1;
var idx_51607 = (0);
while(true){
if((idx_51607 < n__4695__auto___51606)){
var cn_51608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_51607);
var cc_51609 = shadow.object.get_from_dom(cn_51608);
var ckey_51610 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_51609);
var cval_51611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_51609,item_key);
var vec__51319_51612 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_51607);
var nkey_51613 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51319_51612,(0),null);
var nval_51614 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51319_51612,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_51610,nkey_51613)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_51611,nval_51614)))){
} else {
var new_obj_51615 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_51613,nval_51614], null));
shadow.dom.replace_node(cn_51608,new_obj_51615);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_51609);

shadow.object.notify_tree_BANG_(new_obj_51615,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__51616 = (idx_51607 + (1));
idx_51607 = G__51616;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__51322_51617 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__51323_51618 = null;
var count__51324_51619 = (0);
var i__51325_51620 = (0);
while(true){
if((i__51325_51620 < count__51324_51619)){
var item_51621 = chunk__51323_51618.cljs$core$IIndexed$_nth$arity$2(null,i__51325_51620);
shadow.object.dom_enter(coll_dom,make_item_fn(item_51621));


var G__51622 = seq__51322_51617;
var G__51623 = chunk__51323_51618;
var G__51624 = count__51324_51619;
var G__51625 = (i__51325_51620 + (1));
seq__51322_51617 = G__51622;
chunk__51323_51618 = G__51623;
count__51324_51619 = G__51624;
i__51325_51620 = G__51625;
continue;
} else {
var temp__5753__auto___51626 = cljs.core.seq(seq__51322_51617);
if(temp__5753__auto___51626){
var seq__51322_51627__$1 = temp__5753__auto___51626;
if(cljs.core.chunked_seq_QMARK_(seq__51322_51627__$1)){
var c__4638__auto___51628 = cljs.core.chunk_first(seq__51322_51627__$1);
var G__51629 = cljs.core.chunk_rest(seq__51322_51627__$1);
var G__51630 = c__4638__auto___51628;
var G__51631 = cljs.core.count(c__4638__auto___51628);
var G__51632 = (0);
seq__51322_51617 = G__51629;
chunk__51323_51618 = G__51630;
count__51324_51619 = G__51631;
i__51325_51620 = G__51632;
continue;
} else {
var item_51633 = cljs.core.first(seq__51322_51627__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_51633));


var G__51634 = cljs.core.next(seq__51322_51627__$1);
var G__51635 = null;
var G__51636 = (0);
var G__51637 = (0);
seq__51322_51617 = G__51634;
chunk__51323_51618 = G__51635;
count__51324_51619 = G__51636;
i__51325_51620 = G__51637;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__4210__auto__ = key;
if(cljs.core.truth_(and__4210__auto__)){
return path;
} else {
return and__4210__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__51340 = "inspect!";
var G__51341 = shadow.object._id(oref);
var G__51342 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__51343 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__51340,G__51341,G__51342,G__51343) : shadow.object.info.call(null,G__51340,G__51341,G__51342,G__51343));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__51345_51638 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__51346_51639 = null;
var count__51347_51640 = (0);
var i__51348_51641 = (0);
while(true){
if((i__51348_51641 < count__51347_51640)){
var vec__51369_51643 = chunk__51346_51639.cljs$core$IIndexed$_nth$arity$2(null,i__51348_51641);
var id_51644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51369_51643,(0),null);
var oref_51645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51369_51643,(1),null);
var G__51372_51646 = "dump";
var G__51373_51647 = id_51644;
var G__51374_51648 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_51645)], 0));
var G__51375_51649 = cljs.core.deref(shadow.object._data(oref_51645));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__51372_51646,G__51373_51647,G__51374_51648,G__51375_51649) : shadow.object.info.call(null,G__51372_51646,G__51373_51647,G__51374_51648,G__51375_51649));


var G__51650 = seq__51345_51638;
var G__51651 = chunk__51346_51639;
var G__51652 = count__51347_51640;
var G__51653 = (i__51348_51641 + (1));
seq__51345_51638 = G__51650;
chunk__51346_51639 = G__51651;
count__51347_51640 = G__51652;
i__51348_51641 = G__51653;
continue;
} else {
var temp__5753__auto___51654 = cljs.core.seq(seq__51345_51638);
if(temp__5753__auto___51654){
var seq__51345_51655__$1 = temp__5753__auto___51654;
if(cljs.core.chunked_seq_QMARK_(seq__51345_51655__$1)){
var c__4638__auto___51656 = cljs.core.chunk_first(seq__51345_51655__$1);
var G__51657 = cljs.core.chunk_rest(seq__51345_51655__$1);
var G__51658 = c__4638__auto___51656;
var G__51659 = cljs.core.count(c__4638__auto___51656);
var G__51660 = (0);
seq__51345_51638 = G__51657;
chunk__51346_51639 = G__51658;
count__51347_51640 = G__51659;
i__51348_51641 = G__51660;
continue;
} else {
var vec__51376_51661 = cljs.core.first(seq__51345_51655__$1);
var id_51662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51376_51661,(0),null);
var oref_51663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51376_51661,(1),null);
var G__51379_51664 = "dump";
var G__51380_51665 = id_51662;
var G__51381_51666 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_51663)], 0));
var G__51382_51667 = cljs.core.deref(shadow.object._data(oref_51663));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__51379_51664,G__51380_51665,G__51381_51666,G__51382_51667) : shadow.object.info.call(null,G__51379_51664,G__51380_51665,G__51381_51666,G__51382_51667));


var G__51668 = cljs.core.next(seq__51345_51655__$1);
var G__51669 = null;
var G__51670 = (0);
var G__51671 = (0);
seq__51345_51638 = G__51668;
chunk__51346_51639 = G__51669;
count__51347_51640 = G__51670;
i__51348_51641 = G__51671;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
