goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_41769 = (function (value){
var x__4509__auto__ = (((value == null))?null:value);
var m__4510__auto__ = (devtools.format._header[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4510__auto__.call(null,value));
} else {
var m__4508__auto__ = (devtools.format._header["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4508__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_41769(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_41771 = (function (value){
var x__4509__auto__ = (((value == null))?null:value);
var m__4510__auto__ = (devtools.format._has_body[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4510__auto__.call(null,value));
} else {
var m__4508__auto__ = (devtools.format._has_body["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4508__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_41771(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_41775 = (function (value){
var x__4509__auto__ = (((value == null))?null:value);
var m__4510__auto__ = (devtools.format._body[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4510__auto__.call(null,value));
} else {
var m__4508__auto__ = (devtools.format._body["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__4508__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_41775(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o41278 = temp__5751__auto__;
var temp__5751__auto____$1 = (o41278["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o41279 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o41279["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o41280 = temp__5751__auto____$2;
return (o41280["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o41281 = temp__5751__auto__;
var temp__5751__auto____$1 = (o41281["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o41282 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o41282["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o41283 = temp__5751__auto____$2;
return (o41283["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o41284 = temp__5751__auto__;
var temp__5751__auto____$1 = (o41284["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o41285 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o41285["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o41286 = temp__5751__auto____$2;
return (o41286["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o41287 = temp__5751__auto__;
var temp__5751__auto____$1 = (o41287["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o41288 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o41288["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o41289 = temp__5751__auto____$2;
return (o41289["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o41290 = temp__5751__auto__;
var temp__5751__auto____$1 = (o41290["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o41291 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o41291["templating"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o41292 = temp__5751__auto____$2;
return (o41292["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o41293 = temp__5751__auto__;
var temp__5751__auto____$1 = (o41293["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o41294 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o41294["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o41295 = temp__5751__auto____$2;
return (o41295["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5751__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5751__auto__)){
var o41296 = temp__5751__auto__;
var temp__5751__auto____$1 = (o41296["formatters"]);
if(cljs.core.truth_(temp__5751__auto____$1)){
var o41297 = temp__5751__auto____$1;
var temp__5751__auto____$2 = (o41297["markup"]);
if(cljs.core.truth_(temp__5751__auto____$2)){
var o41298 = temp__5751__auto____$2;
return (o41298["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41809 = arguments.length;
var i__4819__auto___41811 = (0);
while(true){
if((i__4819__auto___41811 < len__4818__auto___41809)){
args__4824__auto__.push((arguments[i__4819__auto___41811]));

var G__41813 = (i__4819__auto___41811 + (1));
i__4819__auto___41811 = G__41813;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq41300){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41300));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41819 = arguments.length;
var i__4819__auto___41820 = (0);
while(true){
if((i__4819__auto___41820 < len__4818__auto___41819)){
args__4824__auto__.push((arguments[i__4819__auto___41820]));

var G__41821 = (i__4819__auto___41820 + (1));
i__4819__auto___41820 = G__41821;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq41301){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41301));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41823 = arguments.length;
var i__4819__auto___41825 = (0);
while(true){
if((i__4819__auto___41825 < len__4818__auto___41823)){
args__4824__auto__.push((arguments[i__4819__auto___41825]));

var G__41826 = (i__4819__auto___41825 + (1));
i__4819__auto___41825 = G__41826;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq41302){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41302));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41834 = arguments.length;
var i__4819__auto___41835 = (0);
while(true){
if((i__4819__auto___41835 < len__4818__auto___41834)){
args__4824__auto__.push((arguments[i__4819__auto___41835]));

var G__41838 = (i__4819__auto___41835 + (1));
i__4819__auto___41835 = G__41838;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq41304){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41304));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41863 = arguments.length;
var i__4819__auto___41864 = (0);
while(true){
if((i__4819__auto___41864 < len__4818__auto___41863)){
args__4824__auto__.push((arguments[i__4819__auto___41864]));

var G__41865 = (i__4819__auto___41864 + (1));
i__4819__auto___41864 = G__41865;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq41306){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41306));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41867 = arguments.length;
var i__4819__auto___41869 = (0);
while(true){
if((i__4819__auto___41869 < len__4818__auto___41867)){
args__4824__auto__.push((arguments[i__4819__auto___41869]));

var G__41870 = (i__4819__auto___41869 + (1));
i__4819__auto___41869 = G__41870;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq41307){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41307));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41872 = arguments.length;
var i__4819__auto___41873 = (0);
while(true){
if((i__4819__auto___41873 < len__4818__auto___41872)){
args__4824__auto__.push((arguments[i__4819__auto___41873]));

var G__41874 = (i__4819__auto___41873 + (1));
i__4819__auto___41873 = G__41874;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq41308){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41308));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41875 = arguments.length;
var i__4819__auto___41876 = (0);
while(true){
if((i__4819__auto___41876 < len__4818__auto___41875)){
args__4824__auto__.push((arguments[i__4819__auto___41876]));

var G__41877 = (i__4819__auto___41876 + (1));
i__4819__auto___41876 = G__41877;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__41315){
var vec__41316 = p__41315;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41316,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__41310_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__41310_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq41311){
var G__41312 = cljs.core.first(seq41311);
var seq41311__$1 = cljs.core.next(seq41311);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41312,seq41311__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__41319 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__41320 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__41321 = (function (){var G__41640 = new cljs.core.Keyword(null,"li","li",723558921);
var G__41641 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__41642 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__41640,G__41641,G__41642) : devtools.format.make_template_fn.call(null,G__41640,G__41641,G__41642));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__41319,G__41320,G__41321) : devtools.format.make_template_fn.call(null,G__41319,G__41320,G__41321));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41888 = arguments.length;
var i__4819__auto___41889 = (0);
while(true){
if((i__4819__auto___41889 < len__4818__auto___41888)){
args__4824__auto__.push((arguments[i__4819__auto___41889]));

var G__41890 = (i__4819__auto___41889 + (1));
i__4819__auto___41889 = G__41890;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq41735){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq41735));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4824__auto__ = [];
var len__4818__auto___41903 = arguments.length;
var i__4819__auto___41904 = (0);
while(true){
if((i__4819__auto___41904 < len__4818__auto___41903)){
args__4824__auto__.push((arguments[i__4819__auto___41904]));

var G__41908 = (i__4819__auto___41904 + (1));
i__4819__auto___41904 = G__41908;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq41763){
var G__41764 = cljs.core.first(seq41763);
var seq41763__$1 = cljs.core.next(seq41763);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41764,seq41763__$1);
}));


//# sourceMappingURL=devtools.format.js.map
