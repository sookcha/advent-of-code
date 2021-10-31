goog.provide('frontend.core');
frontend.core.content = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Step G must be finished before step M can begin.\nStep T must be finished before step E can begin.\nStep P must be finished before step M can begin.\nStep V must be finished before step L can begin.\nStep Y must be finished before step B can begin.\nStep K must be finished before step Z can begin.\nStep H must be finished before step I can begin.\nStep D must be finished before step U can begin.\nStep C must be finished before step L can begin.\nStep R must be finished before step Z can begin.\nStep U must be finished before step B can begin.\nStep J must be finished before step M can begin.\nStep M must be finished before step E can begin.\nStep I must be finished before step X can begin.\nStep N must be finished before step O can begin.\nStep S must be finished before step F can begin.\nStep X must be finished before step A can begin.\nStep F must be finished before step Q can begin.\nStep B must be finished before step Z can begin.\nStep Q must be finished before step W can begin.\nStep L must be finished before step W can begin.\nStep O must be finished before step Z can begin.\nStep A must be finished before step Z can begin.\nStep E must be finished before step W can begin.\nStep W must be finished before step Z can begin.\nStep G must be finished before step R can begin.\nStep H must be finished before step A can begin.\nStep A must be finished before step W can begin.\nStep Y must be finished before step D can begin.\nStep O must be finished before step A can begin.\nStep V must be finished before step U can begin.\nStep H must be finished before step W can begin.\nStep K must be finished before step F can begin.\nStep J must be finished before step X can begin.\nStep V must be finished before step R can begin.\nStep Q must be finished before step A can begin.\nStep F must be finished before step B can begin.\nStep G must be finished before step P can begin.\nStep L must be finished before step A can begin.\nStep B must be finished before step Q can begin.\nStep H must be finished before step J can begin.\nStep J must be finished before step L can begin.\nStep F must be finished before step E can begin.\nStep U must be finished before step A can begin.\nStep G must be finished before step Q can begin.\nStep G must be finished before step S can begin.\nStep K must be finished before step J can begin.\nStep N must be finished before step B can begin.\nStep F must be finished before step O can begin.\nStep C must be finished before step Z can begin.\nStep B must be finished before step E can begin.\nStep M must be finished before step S can begin.\nStep A must be finished before step E can begin.\nStep E must be finished before step Z can begin.\nStep K must be finished before step I can begin.\nStep P must be finished before step A can begin.\nStep Y must be finished before step L can begin.\nStep Y must be finished before step J can begin.\nStep G must be finished before step N can begin.\nStep Q must be finished before step L can begin.\nStep D must be finished before step X can begin.\nStep C must be finished before step I can begin.\nStep K must be finished before step B can begin.\nStep N must be finished before step F can begin.\nStep D must be finished before step M can begin.\nStep B must be finished before step A can begin.\nStep U must be finished before step J can begin.\nStep Q must be finished before step Z can begin.\nStep X must be finished before step F can begin.\nStep K must be finished before step X can begin.\nStep U must be finished before step E can begin.\nStep X must be finished before step W can begin.\nStep K must be finished before step Q can begin.\nStep I must be finished before step E can begin.\nStep D must be finished before step J can begin.\nStep P must be finished before step I can begin.\nStep K must be finished before step D can begin.\nStep S must be finished before step X can begin.\nStep C must be finished before step R can begin.\nStep P must be finished before step W can begin.\nStep I must be finished before step O can begin.\nStep S must be finished before step O can begin.\nStep K must be finished before step C can begin.\nStep N must be finished before step Q can begin.\nStep L must be finished before step E can begin.\nStep L must be finished before step Z can begin.\nStep K must be finished before step W can begin.\nStep Y must be finished before step A can begin.\nStep L must be finished before step O can begin.\nStep N must be finished before step W can begin.\nStep R must be finished before step W can begin.\nStep C must be finished before step O can begin.\nStep H must be finished before step X can begin.\nStep V must be finished before step Y can begin.\nStep S must be finished before step W can begin.\nStep V must be finished before step E can begin.\nStep Q must be finished before step E can begin.\nStep P must be finished before step H can begin.\nStep V must be finished before step H can begin.\nStep N must be finished before step Z can begin.\nStep C must be finished before step A can begin.");
frontend.core.worker_count = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((5));
frontend.core.time_to_finish = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
frontend.core.current_time = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0));
frontend.core.global_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
frontend.core.worker_component = (function frontend$core$worker_component(p__43450){
var map__43451 = p__43450;
var map__43451__$1 = cljs.core.__destructure_map(map__43451);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43451__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var job = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43451__$1,new cljs.core.Keyword(null,"job","job",850873087));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622)],["center","#FFF","background-color 0.2s",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),time))?"black":"green"),"100%","center","flex","1px solid white","100px"])], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),time))?"Idle":new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["\uC791\uC5C5 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(job)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["\uB0A8\uC740 \uC2DC\uAC04 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(time)].join('')], null)], null))], null);
});
frontend.core.start = (function frontend$core$start(){
var state = aoc.year2018.day07.get_initial_state(cljs.core.deref(frontend.core.worker_count),(function (alphabet){
return ((alphabet.charCodeAt((0)) | (0)) - (4));
}),cljs.core.deref(frontend.core.content));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.core.time_to_finish,(function (_){
return new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(aoc.year2018.day07.get_solution(state));
}));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.core.global_state,(function (_){
return state;
}));
});
frontend.core.home_page = (function frontend$core$home_page(){
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(aoc.year2018.day07.get_next_state_part_2,cljs.core.deref(frontend.core.global_state)),cljs.core.deref(frontend.core.current_time));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"Day 7"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\uC791\uC5C5\uB9C8\uB2E4 \uC758\uC874\uAD00\uACC4\uAC00 \uC788\uB294 \uC791\uC5C5 \uBAA9\uB85D\uC774 \uC788\uC744 \uB54C \uBAA8\uB4E0 \uC791\uC5C5\uC774 \uC644\uB8CC\uB410\uC744 \uB54C \uC791\uC5C5\uC744 \uC644\uB8CC\uD55C \uC21C\uC11C\uB300\uB85C \uCD9C\uB825\uD558\uB77C. \uAC19\uC740 \uB514\uD39C\uB358\uC2DC\uAC00 \uC788\uB294 \uC791\uC5C5\uC758 \uACBD\uC6B0 \uC54C\uD30C\uBCB3 \uC21C\uC11C\uB85C \uBA3C\uC800 \uCC98\uB9AC\uD55C\uB2E4."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"\uCD1D 5\uAC1C\uC758 \uC6CC\uCEE4\uAC00 \uC788\uC744 \uB54C \uBAA8\uB4E0 \uC791\uC5C5\uC774 \uC644\uB8CC\uB41C \uC2DC\uAC04\uC744 \uAD6C\uD558\uB77C."], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),"\uC791\uC5C5\uBAA9\uB85D"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),cljs.core.deref(frontend.core.content)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\uC6CC\uCEE4 \uAC2F\uC218"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"defaultValue","defaultValue",-586131910),cljs.core.deref(frontend.core.worker_count),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.core.worker_count,(function (_){
return parseInt(e.target.value);
}));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),frontend.core.start], null),"\uC2DC\uC791"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),(function (){var iter__4611__auto__ = (function frontend$core$home_page_$_iter__43452(s__43453){
return (new cljs.core.LazySeq(null,(function (){
var s__43453__$1 = s__43453;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__43453__$1);
if(temp__5753__auto__){
var s__43453__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43453__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__43453__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__43455 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__43454 = (0);
while(true){
if((i__43454 < size__4610__auto__)){
var worker = cljs.core._nth(c__4609__auto__,i__43454);
cljs.core.chunk_append(b__43455,frontend.core.worker_component(worker));

var G__43456 = (i__43454 + (1));
i__43454 = G__43456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43455),frontend$core$home_page_$_iter__43452(cljs.core.chunk_rest(s__43453__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43455),null);
}
} else {
var worker = cljs.core.first(s__43453__$2);
return cljs.core.cons(frontend.core.worker_component(worker),frontend$core$home_page_$_iter__43452(cljs.core.rest(s__43453__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"workers","workers",-2054878819).cljs$core$IFn$_invoke$arity$1(state));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["\uC791\uC5C5\uC744 \uC644\uB8CC\uD558\uAE30\uAE4C\uC9C0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.core.time_to_finish))," \uCD08\uAC00 \uAC78\uB9BD\uB2C8\uB2E4."].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h5","h5",-1829156625),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.core.current_time)),"\uCD08\uC758 \uC791\uC5C5 \uC0C1\uD0DC"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(frontend.core.current_time),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),((1) + cljs.core.deref(frontend.core.time_to_finish)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var target = parseInt(e.target.value);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.core.current_time,(function (_){
return target;
}));
})], null)], null)], null)], null);
});
frontend.core.mount_root = (function frontend$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.core.home_page], null),document.getElementById("app"));
});
frontend.core.init_BANG_ = (function frontend$core$init_BANG_(){
return frontend.core.mount_root();
});
goog.exportSymbol('frontend.core.init_BANG_', frontend.core.init_BANG_);

//# sourceMappingURL=frontend.core.js.map
