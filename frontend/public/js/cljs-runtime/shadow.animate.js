goog.provide('shadow.animate');

/**
 * @interface
 */
shadow.animate.Animation = function(){};

var shadow$animate$Animation$_animate_from$dyn_51821 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.animate._animate_from[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.animate._animate_from["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-from",this$);
}
}
});
/**
 * return a map of {attr initial-value}
 */
shadow.animate._animate_from = (function shadow$animate$_animate_from(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_from$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_from$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_from$dyn_51821(this$);
}
});

var shadow$animate$Animation$_animate_to$dyn_51822 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.animate._animate_to[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.animate._animate_to["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-to",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_to = (function shadow$animate$_animate_to(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_to$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_to$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_to$dyn_51822(this$);
}
});

var shadow$animate$Animation$_animate_toggles$dyn_51823 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.animate._animate_toggles[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.animate._animate_toggles["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-toggles",this$);
}
}
});
/**
 * return a map of {attr target-value}
 */
shadow.animate._animate_toggles = (function shadow$animate$_animate_toggles(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_toggles$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_toggles$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_toggles$dyn_51823(this$);
}
});

var shadow$animate$Animation$_animate_timings$dyn_51824 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.animate._animate_timings[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.animate._animate_timings["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-timings",this$);
}
}
});
/**
 * return a map of {attr timing-function}
 */
shadow.animate._animate_timings = (function shadow$animate$_animate_timings(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_timings$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_timings$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_timings$dyn_51824(this$);
}
});

var shadow$animate$Animation$_animate_delays$dyn_51825 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.animate._animate_delays[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.animate._animate_delays["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Animation.-animate-delays",this$);
}
}
});
/**
 * return a map of {attr transition-delay}
 */
shadow.animate._animate_delays = (function shadow$animate$_animate_delays(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$animate$Animation$_animate_delays$arity$1 == null)))))){
return this$.shadow$animate$Animation$_animate_delays$arity$1(this$);
} else {
return shadow$animate$Animation$_animate_delays$dyn_51825(this$);
}
});

shadow.animate.transition_string = (function shadow$animate$transition_string(duration,adef){
var timings = shadow.animate._animate_timings(adef);
var delays = shadow.animate._animate_delays(adef);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__51442){
var vec__51445 = p__51442;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51445,(0),null);
var timing = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51445,(1),null);
return [cljs.core.name(attr)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(duration),"ms"," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(timing),(function (){var delay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(delays,attr);
if(cljs.core.truth_((function (){var and__4210__auto__ = delay;
if(cljs.core.truth_(and__4210__auto__)){
return (delay > (0));
} else {
return and__4210__auto__;
}
})())){
return [" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(delay),"ms"].join('');
} else {
return null;
}
})()].join('');
}),timings));
});

/**
 * @interface
 */
shadow.animate.IAnimator = function(){};

var shadow$animate$IAnimator$get_duration$dyn_51826 = (function (animator){
var x__4509__auto__ = (((animator == null))?null:animator);
var m__4510__auto__ = (shadow.animate.get_duration[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4510__auto__.call(null,animator));
} else {
var m__4508__auto__ = (shadow.animate.get_duration["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4508__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.get-duration",animator);
}
}
});
shadow.animate.get_duration = (function shadow$animate$get_duration(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$get_duration$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$get_duration$arity$1(animator);
} else {
return shadow$animate$IAnimator$get_duration$dyn_51826(animator);
}
});

var shadow$animate$IAnimator$init_BANG_$dyn_51827 = (function (animator){
var x__4509__auto__ = (((animator == null))?null:animator);
var m__4510__auto__ = (shadow.animate.init_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4510__auto__.call(null,animator));
} else {
var m__4508__auto__ = (shadow.animate.init_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4508__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.init!",animator);
}
}
});
/**
 * apply the initial values
 */
shadow.animate.init_BANG_ = (function shadow$animate$init_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$init_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$init_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$init_BANG_$dyn_51827(animator);
}
});

var shadow$animate$IAnimator$start_BANG_$dyn_51828 = (function (animator){
var x__4509__auto__ = (((animator == null))?null:animator);
var m__4510__auto__ = (shadow.animate.start_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4510__auto__.call(null,animator));
} else {
var m__4508__auto__ = (shadow.animate.start_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4508__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.start!",animator);
}
}
});
/**
 * start the animation, must return a channel that closes once the animation is done
 */
shadow.animate.start_BANG_ = (function shadow$animate$start_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$start_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$start_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$start_BANG_$dyn_51828(animator);
}
});

var shadow$animate$IAnimator$finish_BANG_$dyn_51829 = (function (animator){
var x__4509__auto__ = (((animator == null))?null:animator);
var m__4510__auto__ = (shadow.animate.finish_BANG_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4510__auto__.call(null,animator));
} else {
var m__4508__auto__ = (shadow.animate.finish_BANG_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(animator) : m__4508__auto__.call(null,animator));
} else {
throw cljs.core.missing_protocol("IAnimator.finish!",animator);
}
}
});
/**
 * cleanup
 */
shadow.animate.finish_BANG_ = (function shadow$animate$finish_BANG_(animator){
if((((!((animator == null)))) && ((!((animator.shadow$animate$IAnimator$finish_BANG_$arity$1 == null)))))){
return animator.shadow$animate$IAnimator$finish_BANG_$arity$1(animator);
} else {
return shadow$animate$IAnimator$finish_BANG_$dyn_51829(animator);
}
});


/**
* @constructor
 * @implements {shadow.animate.IAnimator}
*/
shadow.animate.Animator = (function (duration,items){
this.duration = duration;
this.items = items;
});
(shadow.animate.Animator.prototype.shadow$animate$IAnimator$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$get_duration$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.duration;
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$init_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4695__auto__ = self__.items.length;
var i__46556__auto__ = (0);
while(true){
if((i__46556__auto__ < n__4695__auto__)){
var map__51549_51830 = (self__.items[i__46556__auto__]);
var map__51549_51831__$1 = cljs.core.__destructure_map(map__51549_51830);
var el_51832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51549_51831__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var from_51833 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51549_51831__$1,new cljs.core.Keyword(null,"from","from",1815293044));
goog.style.setStyle(el_51832,from_51833);

var G__51834 = (i__46556__auto__ + (1));
i__46556__auto__ = G__51834;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$start_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4695__auto__ = self__.items.length;
var i__46556__auto__ = (0);
while(true){
if((i__46556__auto__ < n__4695__auto__)){
var map__51551_51835 = (self__.items[i__46556__auto__]);
var map__51551_51836__$1 = cljs.core.__destructure_map(map__51551_51835);
var el_51837 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51551_51836__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var to_51838 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51551_51836__$1,new cljs.core.Keyword(null,"to","to",192099007));
var transition_51839 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51551_51836__$1,new cljs.core.Keyword(null,"transition","transition",765692007));
(to_51838["transition"] = transition_51839);

goog.style.setStyle(el_51837,to_51838);

var G__51840 = (i__46556__auto__ + (1));
i__46556__auto__ = G__51840;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.prototype.shadow$animate$IAnimator$finish_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var n__4695__auto__ = self__.items.length;
var i__46556__auto__ = (0);
while(true){
if((i__46556__auto__ < n__4695__auto__)){
var map__51575_51841 = (self__.items[i__46556__auto__]);
var map__51575_51842__$1 = cljs.core.__destructure_map(map__51575_51841);
var el_51843 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51575_51842__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var toggles_51844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51575_51842__$1,new cljs.core.Keyword(null,"toggles","toggles",1077909479));
(toggles_51844["transition"] = null);

goog.style.setStyle(el_51843,toggles_51844);

var G__51845 = (i__46556__auto__ + (1));
i__46556__auto__ = G__51845;
continue;
} else {
return null;
}
break;
}
}));

(shadow.animate.Animator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"duration","duration",-1210334701,null),new cljs.core.Symbol(null,"items","items",-1622480831,null)], null);
}));

(shadow.animate.Animator.cljs$lang$type = true);

(shadow.animate.Animator.cljs$lang$ctorStr = "shadow.animate/Animator");

(shadow.animate.Animator.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.animate/Animator");
}));

/**
 * Positional factory function for shadow.animate/Animator.
 */
shadow.animate.__GT_Animator = (function shadow$animate$__GT_Animator(duration,items){
return (new shadow.animate.Animator(duration,items));
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
shadow.animate.AnimationStep = (function (el,from,to,toggles,transition,__meta,__extmap,__hash){
this.el = el;
this.from = from;
this.to = to;
this.toggles = toggles;
this.transition = transition;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k51603,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__51672 = k51603;
var G__51672__$1 = (((G__51672 instanceof cljs.core.Keyword))?G__51672.fqn:null);
switch (G__51672__$1) {
case "el":
return self__.el;

break;
case "from":
return self__.from;

break;
case "to":
return self__.to;

break;
case "toggles":
return self__.toggles;

break;
case "transition":
return self__.transition;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k51603,else__4464__auto__);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__51673){
var vec__51674 = p__51673;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51674,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51674,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.animate.AnimationStep{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"el","el",-1618201118),self__.el],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"from","from",1815293044),self__.from],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"to","to",192099007),self__.to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition],null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__51602){
var self__ = this;
var G__51602__$1 = this;
return (new cljs.core.RecordIter((0),G__51602__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (630436239 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this51604,other51605){
var self__ = this;
var this51604__$1 = this;
return (((!((other51605 == null)))) && ((((this51604__$1.constructor === other51605.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51604__$1.el,other51605.el)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51604__$1.from,other51605.from)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51604__$1.to,other51605.to)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51604__$1.toggles,other51605.toggles)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51604__$1.transition,other51605.transition)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this51604__$1.__extmap,other51605.__extmap)))))))))))))));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"el","el",-1618201118),null,new cljs.core.Keyword(null,"transition","transition",765692007),null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),null,new cljs.core.Keyword(null,"from","from",1815293044),null,new cljs.core.Keyword(null,"to","to",192099007),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k51603){
var self__ = this;
var this__4468__auto____$1 = this;
var G__51677 = k51603;
var G__51677__$1 = (((G__51677 instanceof cljs.core.Keyword))?G__51677.fqn:null);
switch (G__51677__$1) {
case "el":
case "from":
case "to":
case "toggles":
case "transition":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k51603);

}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__51602){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__51678 = cljs.core.keyword_identical_QMARK_;
var expr__51679 = k__4470__auto__;
if(cljs.core.truth_((pred__51678.cljs$core$IFn$_invoke$arity$2 ? pred__51678.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"el","el",-1618201118),expr__51679) : pred__51678.call(null,new cljs.core.Keyword(null,"el","el",-1618201118),expr__51679)))){
return (new shadow.animate.AnimationStep(G__51602,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51678.cljs$core$IFn$_invoke$arity$2 ? pred__51678.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from","from",1815293044),expr__51679) : pred__51678.call(null,new cljs.core.Keyword(null,"from","from",1815293044),expr__51679)))){
return (new shadow.animate.AnimationStep(self__.el,G__51602,self__.to,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51678.cljs$core$IFn$_invoke$arity$2 ? pred__51678.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007),expr__51679) : pred__51678.call(null,new cljs.core.Keyword(null,"to","to",192099007),expr__51679)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,G__51602,self__.toggles,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51678.cljs$core$IFn$_invoke$arity$2 ? pred__51678.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__51679) : pred__51678.call(null,new cljs.core.Keyword(null,"toggles","toggles",1077909479),expr__51679)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,G__51602,self__.transition,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__51678.cljs$core$IFn$_invoke$arity$2 ? pred__51678.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"transition","transition",765692007),expr__51679) : pred__51678.call(null,new cljs.core.Keyword(null,"transition","transition",765692007),expr__51679)))){
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,G__51602,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__51602),null));
}
}
}
}
}
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"el","el",-1618201118),self__.el,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"from","from",1815293044),self__.from,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"to","to",192099007),self__.to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"toggles","toggles",1077909479),self__.toggles,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"transition","transition",765692007),self__.transition,null))], null),self__.__extmap));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__51602){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.animate.AnimationStep(self__.el,self__.from,self__.to,self__.toggles,self__.transition,G__51602,self__.__extmap,self__.__hash));
}));

(shadow.animate.AnimationStep.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.animate.AnimationStep.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"el","el",22330409,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.Symbol(null,"transition","transition",-1888743762,null)], null);
}));

(shadow.animate.AnimationStep.cljs$lang$type = true);

(shadow.animate.AnimationStep.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.animate/AnimationStep",null,(1),null));
}));

(shadow.animate.AnimationStep.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.animate/AnimationStep");
}));

/**
 * Positional factory function for shadow.animate/AnimationStep.
 */
shadow.animate.__GT_AnimationStep = (function shadow$animate$__GT_AnimationStep(el,from,to,toggles,transition){
return (new shadow.animate.AnimationStep(el,from,to,toggles,transition,null,null,null));
});

/**
 * Factory function for shadow.animate/AnimationStep, taking a map of keywords to field values.
 */
shadow.animate.map__GT_AnimationStep = (function shadow$animate$map__GT_AnimationStep(G__51642){
var extmap__4501__auto__ = (function (){var G__51684 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__51642,new cljs.core.Keyword(null,"el","el",-1618201118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"to","to",192099007),new cljs.core.Keyword(null,"toggles","toggles",1077909479),new cljs.core.Keyword(null,"transition","transition",765692007)], 0));
if(cljs.core.record_QMARK_(G__51642)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__51684);
} else {
return G__51684;
}
})();
return (new shadow.animate.AnimationStep(new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(G__51642),new cljs.core.Keyword(null,"from","from",1815293044).cljs$core$IFn$_invoke$arity$1(G__51642),new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(G__51642),new cljs.core.Keyword(null,"toggles","toggles",1077909479).cljs$core$IFn$_invoke$arity$1(G__51642),new cljs.core.Keyword(null,"transition","transition",765692007).cljs$core$IFn$_invoke$arity$1(G__51642),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.animate.setup = (function shadow$animate$setup(duration,elements){
var items = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$animate$setup_$_iter__51686(s__51687){
return (new cljs.core.LazySeq(null,(function (){
var s__51687__$1 = s__51687;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__51687__$1);
if(temp__5753__auto__){
var s__51687__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__51687__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__51687__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__51689 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__51688 = (0);
while(true){
if((i__51688 < size__4610__auto__)){
var vec__51690 = cljs.core._nth(c__4609__auto__,i__51688);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51690,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51690,(1),null);
cljs.core.chunk_append(b__51689,(function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
);

var G__51848 = (i__51688 + (1));
i__51688 = G__51848;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__51689),shadow$animate$setup_$_iter__51686(cljs.core.chunk_rest(s__51687__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__51689),null);
}
} else {
var vec__51695 = cljs.core.first(s__51687__$2);
var el = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51695,(0),null);
var adef = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51695,(1),null);
return cljs.core.cons((function (){
if((((!((adef == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === adef.shadow$animate$Animation$))))?true:(((!adef.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef):false)):cljs.core.native_satisfies_QMARK_(shadow.animate.Animation,adef))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid animation",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"animation","animation",-1248293244),adef], null));
}

var from = shadow.animate._animate_from(adef);
var to = shadow.animate._animate_to(adef);
var toggles = shadow.animate._animate_toggles(adef);
return (new shadow.animate.AnimationStep(shadow.dom.dom_node(el),cljs.core.clj__GT_js(from),cljs.core.clj__GT_js(to),cljs.core.clj__GT_js(toggles),shadow.animate.transition_string(duration,adef),null,null,null));
})()
,shadow$animate$setup_$_iter__51686(cljs.core.rest(s__51687__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(elements);
})());
return (new shadow.animate.Animator(duration,items));
});
shadow.animate.continue_BANG_ = (function shadow$animate$continue_BANG_(animator){
shadow.animate.start_BANG_(animator);

var c__46656__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46657__auto__ = (function (){var switch__46501__auto__ = (function (state_51706){
var state_val_51707 = (state_51706[(1)]);
if((state_val_51707 === (1))){
var inst_51700 = shadow.animate.get_duration(animator);
var inst_51701 = cljs.core.async.timeout(inst_51700);
var state_51706__$1 = state_51706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51706__$1,(2),inst_51701);
} else {
if((state_val_51707 === (2))){
var inst_51703 = (state_51706[(2)]);
var inst_51704 = shadow.animate.finish_BANG_(animator);
var state_51706__$1 = (function (){var statearr_51712 = state_51706;
(statearr_51712[(7)] = inst_51703);

(statearr_51712[(8)] = inst_51704);

return statearr_51712;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51706__$1,new cljs.core.Keyword(null,"done","done",-889844188));
} else {
return null;
}
}
});
return (function() {
var shadow$animate$continue_BANG__$_state_machine__46502__auto__ = null;
var shadow$animate$continue_BANG__$_state_machine__46502__auto____0 = (function (){
var statearr_51715 = [null,null,null,null,null,null,null,null,null];
(statearr_51715[(0)] = shadow$animate$continue_BANG__$_state_machine__46502__auto__);

(statearr_51715[(1)] = (1));

return statearr_51715;
});
var shadow$animate$continue_BANG__$_state_machine__46502__auto____1 = (function (state_51706){
while(true){
var ret_value__46503__auto__ = (function (){try{while(true){
var result__46504__auto__ = switch__46501__auto__(state_51706);
if(cljs.core.keyword_identical_QMARK_(result__46504__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46504__auto__;
}
break;
}
}catch (e51717){var ex__46505__auto__ = e51717;
var statearr_51718_51849 = state_51706;
(statearr_51718_51849[(2)] = ex__46505__auto__);


if(cljs.core.seq((state_51706[(4)]))){
var statearr_51719_51850 = state_51706;
(statearr_51719_51850[(1)] = cljs.core.first((state_51706[(4)])));

} else {
throw ex__46505__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46503__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51851 = state_51706;
state_51706 = G__51851;
continue;
} else {
return ret_value__46503__auto__;
}
break;
}
});
shadow$animate$continue_BANG__$_state_machine__46502__auto__ = function(state_51706){
switch(arguments.length){
case 0:
return shadow$animate$continue_BANG__$_state_machine__46502__auto____0.call(this);
case 1:
return shadow$animate$continue_BANG__$_state_machine__46502__auto____1.call(this,state_51706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$animate$continue_BANG__$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$animate$continue_BANG__$_state_machine__46502__auto____0;
shadow$animate$continue_BANG__$_state_machine__46502__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$animate$continue_BANG__$_state_machine__46502__auto____1;
return shadow$animate$continue_BANG__$_state_machine__46502__auto__;
})()
})();
var state__46658__auto__ = (function (){var statearr_51721 = f__46657__auto__();
(statearr_51721[(6)] = c__46656__auto__);

return statearr_51721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46658__auto__);
}));

return c__46656__auto__;
});
shadow.animate.start = (function shadow$animate$start(duration,elements){
var animator = shadow.animate.setup(duration,elements);
animator.shadow$animate$IAnimator$init_BANG_$arity$1(null);

return shadow.animate.continue_BANG_(animator);
});
/**
 * transition the given attr from -> to using timing function and delay
 * timing defaults to ease, delay to 0
 */
shadow.animate.transition = (function shadow$animate$transition(var_args){
var G__51763 = arguments.length;
switch (G__51763) {
case 3:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$3 = (function (attr,from,to){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,"ease",(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$4 = (function (attr,from,to,timing){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$5(attr,from,to,timing,(0));
}));

(shadow.animate.transition.cljs$core$IFn$_invoke$arity$5 = (function (attr,from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate51764 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate51764 = (function (attr,from,to,timing,delay,meta51765){
this.attr = attr;
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta51765 = meta51765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate51764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51766,meta51765__$1){
var self__ = this;
var _51766__$1 = this;
return (new shadow.animate.t_shadow$animate51764(self__.attr,self__.from,self__.to,self__.timing,self__.delay,meta51765__$1));
}));

(shadow.animate.t_shadow$animate51764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51766){
var self__ = this;
var _51766__$1 = this;
return self__.meta51765;
}));

(shadow.animate.t_shadow$animate51764.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate51764.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate51764.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate51764.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51764.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.timing]);
}));

(shadow.animate.t_shadow$animate51764.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.delay]);
}));

(shadow.animate.t_shadow$animate51764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta51765","meta51765",-2108041925,null)], null);
}));

(shadow.animate.t_shadow$animate51764.cljs$lang$type = true);

(shadow.animate.t_shadow$animate51764.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate51764");

(shadow.animate.t_shadow$animate51764.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.animate/t_shadow$animate51764");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate51764.
 */
shadow.animate.__GT_t_shadow$animate51764 = (function shadow$animate$__GT_t_shadow$animate51764(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta51765){
return (new shadow.animate.t_shadow$animate51764(attr__$1,from__$1,to__$1,timing__$1,delay__$1,meta51765));
});

}

return (new shadow.animate.t_shadow$animate51764(attr,from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.transition.cljs$lang$maxFixedArity = 5);

shadow.animate.toggle = (function shadow$animate$toggle(attr,from,to){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate51769 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate51769 = (function (attr,from,to,meta51770){
this.attr = attr;
this.from = from;
this.to = to;
this.meta51770 = meta51770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate51769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51771,meta51770__$1){
var self__ = this;
var _51771__$1 = this;
return (new shadow.animate.t_shadow$animate51769(self__.attr,self__.from,self__.to,meta51770__$1));
}));

(shadow.animate.t_shadow$animate51769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51771){
var self__ = this;
var _51771__$1 = this;
return self__.meta51770;
}));

(shadow.animate.t_shadow$animate51769.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate51769.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51769.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.from]);
}));

(shadow.animate.t_shadow$animate51769.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,self__.to]);
}));

(shadow.animate.t_shadow$animate51769.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51769.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51769.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"meta51770","meta51770",-2080326749,null)], null);
}));

(shadow.animate.t_shadow$animate51769.cljs$lang$type = true);

(shadow.animate.t_shadow$animate51769.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate51769");

(shadow.animate.t_shadow$animate51769.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.animate/t_shadow$animate51769");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate51769.
 */
shadow.animate.__GT_t_shadow$animate51769 = (function shadow$animate$toggle_$___GT_t_shadow$animate51769(attr__$1,from__$1,to__$1,meta51770){
return (new shadow.animate.t_shadow$animate51769(attr__$1,from__$1,to__$1,meta51770));
});

}

return (new shadow.animate.t_shadow$animate51769(attr,from,to,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * set attr to value when the animation starts
 */
shadow.animate.set_attr = (function shadow$animate$set_attr(var_args){
var G__51774 = arguments.length;
switch (G__51774) {
case 1:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1 = (function (attrs){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate51777 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate51777 = (function (attrs,meta51778){
this.attrs = attrs;
this.meta51778 = meta51778;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate51777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51779,meta51778__$1){
var self__ = this;
var _51779__$1 = this;
return (new shadow.animate.t_shadow$animate51777(self__.attrs,meta51778__$1));
}));

(shadow.animate.t_shadow$animate51777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51779){
var self__ = this;
var _51779__$1 = this;
return self__.meta51778;
}));

(shadow.animate.t_shadow$animate51777.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate51777.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51777.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.attrs;
}));

(shadow.animate.t_shadow$animate51777.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51777.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51777.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51777.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51778","meta51778",1980884384,null)], null);
}));

(shadow.animate.t_shadow$animate51777.cljs$lang$type = true);

(shadow.animate.t_shadow$animate51777.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate51777");

(shadow.animate.t_shadow$animate51777.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.animate/t_shadow$animate51777");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate51777.
 */
shadow.animate.__GT_t_shadow$animate51777 = (function shadow$animate$__GT_t_shadow$animate51777(attrs__$1,meta51778){
return (new shadow.animate.t_shadow$animate51777(attrs__$1,meta51778));
});

}

return (new shadow.animate.t_shadow$animate51777(attrs,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$2 = (function (attr,value){
return shadow.animate.set_attr.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value]));
}));

(shadow.animate.set_attr.cljs$lang$maxFixedArity = 2);

/**
 * use to remove a given attribute style when the animation is finished
 * usually only needed to remove attributes we no longer need since they are probably
 * inherited and we only used for previous transitions
 */
shadow.animate.delete_attr = (function shadow$animate$delete_attr(attr){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate51783 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate51783 = (function (attr,meta51784){
this.attr = attr;
this.meta51784 = meta51784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate51783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51785,meta51784__$1){
var self__ = this;
var _51785__$1 = this;
return (new shadow.animate.t_shadow$animate51783(self__.attr,meta51784__$1));
}));

(shadow.animate.t_shadow$animate51783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51785){
var self__ = this;
var _51785__$1 = this;
return self__.meta51784;
}));

(shadow.animate.t_shadow$animate51783.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate51783.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51783.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51783.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([self__.attr,null]);
}));

(shadow.animate.t_shadow$animate51783.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51783.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"meta51784","meta51784",489183761,null)], null);
}));

(shadow.animate.t_shadow$animate51783.cljs$lang$type = true);

(shadow.animate.t_shadow$animate51783.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate51783");

(shadow.animate.t_shadow$animate51783.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.animate/t_shadow$animate51783");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate51783.
 */
shadow.animate.__GT_t_shadow$animate51783 = (function shadow$animate$delete_attr_$___GT_t_shadow$animate51783(attr__$1,meta51784){
return (new shadow.animate.t_shadow$animate51783(attr__$1,meta51784));
});

}

return (new shadow.animate.t_shadow$animate51783(attr,cljs.core.PersistentArrayMap.EMPTY));
});
shadow.animate.combine = (function shadow$animate$combine(var_args){
var args__4824__auto__ = [];
var len__4818__auto___51859 = arguments.length;
var i__4819__auto___51860 = (0);
while(true){
if((i__4819__auto___51860 < len__4818__auto___51859)){
args__4824__auto__.push((arguments[i__4819__auto___51860]));

var G__51861 = (i__4819__auto___51860 + (1));
i__4819__auto___51860 = G__51861;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.animate.combine.cljs$core$IFn$_invoke$arity$variadic = (function (transitions){
var to = cljs.core.PersistentArrayMap.EMPTY;
var from = cljs.core.PersistentArrayMap.EMPTY;
var toggles = cljs.core.PersistentArrayMap.EMPTY;
var timings = cljs.core.PersistentArrayMap.EMPTY;
var delays = cljs.core.PersistentArrayMap.EMPTY;
var transitions__$1 = transitions;
while(true){
var temp__5751__auto__ = cljs.core.first(transitions__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var adef = temp__5751__auto__;
var G__51864 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([to,shadow.animate._animate_to(adef)], 0));
var G__51865 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from,shadow.animate._animate_from(adef)], 0));
var G__51866 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([toggles,shadow.animate._animate_toggles(adef)], 0));
var G__51867 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([timings,shadow.animate._animate_timings(adef)], 0));
var G__51868 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([delays,shadow.animate._animate_delays(adef)], 0));
var G__51869 = cljs.core.rest(transitions__$1);
to = G__51864;
from = G__51865;
toggles = G__51866;
timings = G__51867;
delays = G__51868;
transitions__$1 = G__51869;
continue;
} else {
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate51791 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate51791 = (function (transitions,to,from,toggles,timings,delays,temp__5751__auto__,meta51792){
this.transitions = transitions;
this.to = to;
this.from = from;
this.toggles = toggles;
this.timings = timings;
this.delays = delays;
this.temp__5751__auto__ = temp__5751__auto__;
this.meta51792 = meta51792;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate51791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_51793,meta51792__$1){
var self__ = this;
var _51793__$1 = this;
return (new shadow.animate.t_shadow$animate51791(self__.transitions,self__.to,self__.from,self__.toggles,self__.timings,self__.delays,self__.temp__5751__auto__,meta51792__$1));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate51791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_51793){
var self__ = this;
var _51793__$1 = this;
return self__.meta51792;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate51791.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate51791.prototype.shadow$animate$Animation$_animate_from$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.from;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate51791.prototype.shadow$animate$Animation$_animate_to$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.to;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate51791.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.toggles;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate51791.prototype.shadow$animate$Animation$_animate_timings$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.timings;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate51791.prototype.shadow$animate$Animation$_animate_delays$arity$1 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.delays;
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate51791.getBasis = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transitions","transitions",-405684594,null),cljs.core.with_meta(new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"toggles","toggles",-1576526290,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"timings","timings",-569636600,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"delays","delays",-873843187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"any","any",-948528346,null)], null)),new cljs.core.Symbol(null,"temp__5751__auto__","temp__5751__auto__",870218099,null),new cljs.core.Symbol(null,"meta51792","meta51792",-1508074379,null)], null);
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

(shadow.animate.t_shadow$animate51791.cljs$lang$type = true);

(shadow.animate.t_shadow$animate51791.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate51791");

(shadow.animate.t_shadow$animate51791.cljs$lang$ctorPrWriter = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.animate/t_shadow$animate51791");
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
);

/**
 * Positional factory function for shadow.animate/t_shadow$animate51791.
 */
shadow.animate.__GT_t_shadow$animate51791 = ((function (to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__){
return (function shadow$animate$__GT_t_shadow$animate51791(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5751__auto____$1,meta51792){
return (new shadow.animate.t_shadow$animate51791(transitions__$2,to__$1,from__$1,toggles__$1,timings__$1,delays__$1,temp__5751__auto____$1,meta51792));
});})(to,from,toggles,timings,delays,transitions__$1,temp__5751__auto__))
;

}

return (new shadow.animate.t_shadow$animate51791(transitions__$1,to,from,toggles,timings,delays,temp__5751__auto__,cljs.core.PersistentArrayMap.EMPTY));
}
break;
}
}));

(shadow.animate.combine.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.animate.combine.cljs$lang$applyTo = (function (seq51786){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51786));
}));

shadow.animate.fade_in = (function shadow$animate$fade_in(var_args){
var G__51795 = arguments.length;
switch (G__51795) {
case 0:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-in");
}));

(shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"0","1",timing_function);
}));

(shadow.animate.fade_in.cljs$lang$maxFixedArity = 1);

shadow.animate.fade_out = (function shadow$animate$fade_out(var_args){
var G__51797 = arguments.length;
switch (G__51797) {
case 0:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.animate.fade_in.cljs$core$IFn$_invoke$arity$1("ease-out");
}));

(shadow.animate.fade_out.cljs$core$IFn$_invoke$arity$1 = (function (timing_function){
return shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0",timing_function);
}));

(shadow.animate.fade_out.cljs$lang$maxFixedArity = 1);

shadow.animate.vendor_prefix = goog.dom.vendor.getVendorPrefix();
shadow.animate.vendor_transform = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.animate.vendor_prefix),"-transform"].join(''));
shadow.animate.translate_y = (function shadow$animate$translate_y(var_args){
var G__51801 = arguments.length;
switch (G__51801) {
case 3:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_y.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate51804 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate51804 = (function (from,to,timing,delay,meta51805){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta51805 = meta51805;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate51804.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51806,meta51805__$1){
var self__ = this;
var _51806__$1 = this;
return (new shadow.animate.t_shadow$animate51804(self__.from,self__.to,self__.timing,self__.delay,meta51805__$1));
}));

(shadow.animate.t_shadow$animate51804.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51806){
var self__ = this;
var _51806__$1 = this;
return self__.meta51805;
}));

(shadow.animate.t_shadow$animate51804.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate51804.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate51804.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateY(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate51804.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate51804.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51804.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate51804.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta51805","meta51805",-1102169694,null)], null);
}));

(shadow.animate.t_shadow$animate51804.cljs$lang$type = true);

(shadow.animate.t_shadow$animate51804.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate51804");

(shadow.animate.t_shadow$animate51804.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.animate/t_shadow$animate51804");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate51804.
 */
shadow.animate.__GT_t_shadow$animate51804 = (function shadow$animate$__GT_t_shadow$animate51804(from__$1,to__$1,timing__$1,delay__$1,meta51805){
return (new shadow.animate.t_shadow$animate51804(from__$1,to__$1,timing__$1,delay__$1,meta51805));
});

}

return (new shadow.animate.t_shadow$animate51804(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_y.cljs$lang$maxFixedArity = 4);

shadow.animate.translate_x = (function shadow$animate$translate_x(var_args){
var G__51812 = arguments.length;
switch (G__51812) {
case 3:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$3 = (function (from,to,timing){
return shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4(from,to,timing,(0));
}));

(shadow.animate.translate_x.cljs$core$IFn$_invoke$arity$4 = (function (from,to,timing,delay){
if((typeof shadow !== 'undefined') && (typeof shadow.animate !== 'undefined') && (typeof shadow.animate.t_shadow$animate51813 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {shadow.animate.Animation}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
shadow.animate.t_shadow$animate51813 = (function (from,to,timing,delay,meta51814){
this.from = from;
this.to = to;
this.timing = timing;
this.delay = delay;
this.meta51814 = meta51814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.animate.t_shadow$animate51813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51815,meta51814__$1){
var self__ = this;
var _51815__$1 = this;
return (new shadow.animate.t_shadow$animate51813(self__.from,self__.to,self__.timing,self__.delay,meta51814__$1));
}));

(shadow.animate.t_shadow$animate51813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51815){
var self__ = this;
var _51815__$1 = this;
return self__.meta51814;
}));

(shadow.animate.t_shadow$animate51813.prototype.shadow$animate$Animation$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.animate.t_shadow$animate51813.prototype.shadow$animate$Animation$_animate_from$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.from),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate51813.prototype.shadow$animate$Animation$_animate_to$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),["translateX(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.to),")"].join('')], null);
}));

(shadow.animate.t_shadow$animate51813.prototype.shadow$animate$Animation$_animate_timings$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.timing]);
}));

(shadow.animate.t_shadow$animate51813.prototype.shadow$animate$Animation$_animate_toggles$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(shadow.animate.t_shadow$animate51813.prototype.shadow$animate$Animation$_animate_delays$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.createAsIfByAssoc([shadow.animate.vendor_transform,self__.delay]);
}));

(shadow.animate.t_shadow$animate51813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"from","from",-839142725,null),new cljs.core.Symbol(null,"to","to",1832630534,null),new cljs.core.Symbol(null,"timing","timing",-208693668,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"meta51814","meta51814",1174350501,null)], null);
}));

(shadow.animate.t_shadow$animate51813.cljs$lang$type = true);

(shadow.animate.t_shadow$animate51813.cljs$lang$ctorStr = "shadow.animate/t_shadow$animate51813");

(shadow.animate.t_shadow$animate51813.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.animate/t_shadow$animate51813");
}));

/**
 * Positional factory function for shadow.animate/t_shadow$animate51813.
 */
shadow.animate.__GT_t_shadow$animate51813 = (function shadow$animate$__GT_t_shadow$animate51813(from__$1,to__$1,timing__$1,delay__$1,meta51814){
return (new shadow.animate.t_shadow$animate51813(from__$1,to__$1,timing__$1,delay__$1,meta51814));
});

}

return (new shadow.animate.t_shadow$animate51813(from,to,timing,delay,cljs.core.PersistentArrayMap.EMPTY));
}));

(shadow.animate.translate_x.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.animate.js.map
