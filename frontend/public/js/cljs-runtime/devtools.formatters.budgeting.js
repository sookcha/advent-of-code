goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__41244__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__41244__auto__["add"]).call(o__41244__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__41244__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__41244__auto__["delete"]).call(o__41244__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__41244__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__41244__auto__["has"]).call(o__41244__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__44778 = data;
var target__41249__auto__ = G__44778;
if(cljs.core.truth_(target__41249__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44778)].join(''),"\n","target__41249__auto__"].join('')));
}

(target__41249__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__44778;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_44795 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_44795);
} else {
var seq__44779_44796 = cljs.core.seq(json_ml);
var chunk__44780_44797 = null;
var count__44781_44798 = (0);
var i__44782_44799 = (0);
while(true){
if((i__44782_44799 < count__44781_44798)){
var item_44800 = chunk__44780_44797.cljs$core$IIndexed$_nth$arity$2(null,i__44782_44799);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_44800,new_depth_budget_44795) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_44800,new_depth_budget_44795));


var G__44801 = seq__44779_44796;
var G__44802 = chunk__44780_44797;
var G__44803 = count__44781_44798;
var G__44804 = (i__44782_44799 + (1));
seq__44779_44796 = G__44801;
chunk__44780_44797 = G__44802;
count__44781_44798 = G__44803;
i__44782_44799 = G__44804;
continue;
} else {
var temp__5753__auto___44805 = cljs.core.seq(seq__44779_44796);
if(temp__5753__auto___44805){
var seq__44779_44806__$1 = temp__5753__auto___44805;
if(cljs.core.chunked_seq_QMARK_(seq__44779_44806__$1)){
var c__4638__auto___44807 = cljs.core.chunk_first(seq__44779_44806__$1);
var G__44808 = cljs.core.chunk_rest(seq__44779_44806__$1);
var G__44809 = c__4638__auto___44807;
var G__44810 = cljs.core.count(c__4638__auto___44807);
var G__44811 = (0);
seq__44779_44796 = G__44808;
chunk__44780_44797 = G__44809;
count__44781_44798 = G__44810;
i__44782_44799 = G__44811;
continue;
} else {
var item_44812 = cljs.core.first(seq__44779_44806__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_44812,new_depth_budget_44795) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_44812,new_depth_budget_44795));


var G__44813 = cljs.core.next(seq__44779_44806__$1);
var G__44814 = null;
var G__44815 = (0);
var G__44816 = (0);
seq__44779_44796 = G__44813;
chunk__44780_44797 = G__44814;
count__44781_44798 = G__44815;
i__44782_44799 = G__44816;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5751__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5751__auto__)){
var initial_hierarchy_depth_budget = temp__5751__auto__;
var remaining_depth_budget = (function (){var or__4212__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
