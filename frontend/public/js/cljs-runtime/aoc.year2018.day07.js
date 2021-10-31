goog.provide('aoc.year2018.day07');
/**
 * desc: input 파일을 읽어서 {'letter': #{dependencies}} 맵을 만듭니다.
 * 1. 정규식으로 1) 작업 이름 2) 해당 작업을 하기 위해 먼저 해야 하는 작업 이름 순서로 가져온 후,
 * 2. 작업 이름 별 {K V} 형태의 의존성 목록을 만듭니다. K는 작업 이름, V는 K를 완료하기 위해 먼저 해야 할 의존성 목록입니다.
 * input: resource/aoc/year2018/day07.txt
 * output: {'Q' #{'B' 'F' 'G' 'K' 'N'},
 * 'L' #{'C' 'J' 'Q' 'V' 'Y'},
 * 'J' #{'D' 'H' 'K' 'U' 'Y'},
 * 'M' #{'D' 'G' 'J' 'P'},
 * 'S' #{'G' 'M'},
 * ...
 */
aoc.year2018.day07.get_requirements_map = (function aoc$year2018$day07$get_requirements_map(content){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__42429){
var vec__42430 = p__42429;
var first_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42430,(0),null);
var second_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42430,(1),null);
if(cljs.core.contains_QMARK_(acc,second_id)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,second_id,(function (v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(v,first_id);
}));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,second_id,cljs.core.sorted_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([first_id], 0)));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42428_SHARP_){
return cljs.core.rest(p1__42428_SHARP_);
}),cljs.core.re_seq(/Step ([A-Z]) must be finished before step ([A-Z]) can begin./,content)));
});
/**
 * desc: 시작첨을 찾기 위해 부모가 없는 노드를 구합니다
 * 1. 불러온 의존성 맵을 바탕으로, map의 value 에는 있지만 key 에는 없는 영문자를 구합니다.
 * 2. 그것을 vector 로 합쳐서 반환합니다.
 * input: {'Q' #{'B' 'F' 'G' 'K' 'N'},
 * 'L' #{'C' 'J' 'Q' 'V' 'Y'},
 * 'J' #{'D' 'H' 'K' 'U' 'Y'},
 * 'M' #{'D' 'G' 'J' 'P'},
 * 'S' #{'G' 'M'},
 * ...
 * output: ['G' 'K' 'T' 'V']
 */
aoc.year2018.day07.get_works_with_no_parents = (function aoc$year2018$day07$get_works_with_no_parents(requirements_map){
var no_parents = cljs.core.first(clojure.data.diff(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.vals(requirements_map)),cljs.core.set(cljs.core.keys(requirements_map))));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.str,no_parents));
});
/**
 * desc: 작업이 모두 끝나서 대기중인 worker 를 가져옵니다
 * worker 목록 vector 를 순환하면서 워커의 남은 시간이 0 이하이면서 job이 nil이 아닌 것을 가져옵니다.
 * input: [{:time 60, :job 'A'} {:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil}]
 * output: ({:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil})
 */
aoc.year2018.day07.get_done_workers = (function aoc$year2018$day07$get_done_workers(workers){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (worker){
return ((((0) >= new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(worker))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"job","job",850873087),null)));
}),workers);
});
/**
 * desc: 작업이 모두 끝난 워커로부터 끝난 작업 이름을 가져옵니다
 * 1. get-done-workers 함수를 호출해 끝난 워커를 모두 가져옵니다
 * 2. 작업 이름 중 nil 이 아닌 것을 제외시킵니다
 * 3. map 함수를 이용해 작업 이름만 가져옵니다
 * input: ({:time 0, :job M} {:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil})
 * output: (M)
 */
aoc.year2018.day07.get_jobs = (function aoc$year2018$day07$get_jobs(workers){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42434_SHARP_){
return new cljs.core.Keyword(null,"job","job",850873087).cljs$core$IFn$_invoke$arity$1(p1__42434_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42433_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"job","job",850873087).cljs$core$IFn$_invoke$arity$1(p1__42433_SHARP_),null);
}),aoc.year2018.day07.get_done_workers(workers)));
});
/**
 * desc: 끝난 일을 해야할 일 목록의 의존성을 제거해서 다음 해야할 일 목록을 만듭니다
 * 1. 끝난 일이 없다면 현재 할일 목록을 그대로 반환합니다.
 * 2. 끝난 일이 있다면, 할일 목록의 의존성 목록에서 제거한 새로운 할일 목록을 만듭니다
 * 3. map 으로 엮어서 반환합니다.
 * input: (G), {Q #{}, L #{Q}, Z #{A E L O Q W}, E #{A L Q}, O #{L}, A #{L O Q}, W #{A E L Q}}
 * output: {Q #{}, L #{Q}, Z #{A E L O Q W}, E #{A L Q}, O #{L}, A #{L O Q}, W #{A E L Q}}
 */
aoc.year2018.day07.get_next_requirements = (function aoc$year2018$day07$get_next_requirements(done_jobs,requirements){
if(cljs.core.empty_QMARK_(done_jobs)){
return requirements;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__42435){
var vec__42436 = p__42435;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42436,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42436,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([key,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,value,done_jobs)]);
}),requirements));
}
});
/**
 * desc: 할 일 목록에서 다음 할 일을 가져옵니다.
 * 다음 할 일은 할 일 목록에서 의존성이 없는 일이 다음 할 일이라고 정의했습니다.
 * 따라서 이 함수에서는,
 * 1. 할 일 목록을 순회하면서 
 * 2. 의존성이 없는 것의 작업 이름(=> map의 key) 를 가져온 후 
 * 3. 알파벳 순으로 정렬해
 * 4. 벡터에 담아 반환합니다.
 * input: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
 *         :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}
 * output {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
 *         :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}
 */
aoc.year2018.day07.get_next_works = (function aoc$year2018$day07$get_next_works(state){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42439_SHARP_){
return cljs.core.first(p1__42439_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__42440){
var vec__42441 = p__42440;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42441,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42441,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.PersistentHashSet.EMPTY);
}),new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(state)))));
});
/**
 * desc: 끝난 작업을 다음 할일 목록에서 삭제합니다.
 * 현재 작업 목록과 끝난 작업 목록을 바탕으로,
 * 1. 끝난 작업 기반으로 다음 할일 목록을 만드는 get-next-requirements 함수를 호출합니다. 이 때 끝난 일이 의존성(=> map의 value) 에서 삭제된 다음 할일 목록이 생성됩니다
 * 2. 끝난 작업은 의존성 뿐만 아니라 할일 목록에서 완전히 삭제해야 하므로, map의 key 까지 삭제합니다.
 * input: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
 *         :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}, [G K T V]
 * output {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
 *         :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}
 */
aoc.year2018.day07.remove_done_jobs = (function aoc$year2018$day07$remove_done_jobs(state,done_jobs){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"todo","todo",-1046442570),(function (prev_req){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc,aoc.year2018.day07.get_next_requirements(done_jobs,prev_req)),done_jobs);
}));
});
/**
 * desc: 워커가 작업중이라면 시간을 1 감소시킵니다.
 * 1. 현재 worker 목록을 불러온 후 시간이 -1이 아닌 것(=> 일하고 있는 것) 의 시간을 1씩 삭제한 뒤 state 에 update 합니다
 * 2. 1에서 update 된 목록을 바탕으로, 끝난 작업을 가져옵니다. worker 중에서 시간이 0인 것의 job 이름을 가져와 벡터에 넣습니다. 이것을 `done-jobs` 라 합니다.
 * 3. 시간이 0인 워커를 {:time -1 :job nil} 형태로 업데이트 시킵니다
 * 4. 2에서 가져온 끝난 목록을 바탕으로, get-next-requirements 함수를 호출해 끝난 작업을 할일 목록의 의존성 목록(=> map의 value)에서 삭제시킵니다
 * 5. remove-done-jobs 함수를 호출해서 끝난 작업을 의존성 목록 뿐만 아니라 key 까지 삭제합니다.
 * input: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
 *         :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}
 * output {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
 *         :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}
 */
aoc.year2018.day07.decrease_worker = (function aoc$year2018$day07$decrease_worker(state){
var new_state = cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workers","workers",-2054878819),(function (p1__42444_SHARP_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(x),(-1))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"job","job",850873087),new cljs.core.Keyword(null,"job","job",850873087).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"time","time",1385887882),(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(x) - (1))], null);
} else {
return x;
}
}),p1__42444_SHARP_);
}));
var done_jobs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42445_SHARP_){
return new cljs.core.Keyword(null,"job","job",850873087).cljs$core$IFn$_invoke$arity$1(p1__42445_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42446_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42446_SHARP_),(0));
}),new cljs.core.Keyword(null,"workers","workers",-2054878819).cljs$core$IFn$_invoke$arity$1(new_state))));
return aoc.year2018.day07.remove_done_jobs(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword(null,"workers","workers",-2054878819),(function (workers){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42447_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(p1__42447_SHARP_),(0))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),(-1),new cljs.core.Keyword(null,"job","job",850873087),null], null);
} else {
return p1__42447_SHARP_;
}
}),workers));
})),new cljs.core.Keyword(null,"todo","todo",-1046442570),(function (todo){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,aoc.year2018.day07.get_next_requirements(done_jobs,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,todo)));
})),done_jobs);
});
/**
 * jobs에 항목이 존재할 때, 할 일이 없는 워커에 어사인 합니다.
 * 1. job 목록에서 해야 할 일을 하나 꺼냅니다
 * 2. 일을 하고있지 않은 워커에게 어사인을 합니다. 워커에게 어사인 했거나 하지 않았더라도 워커를 pop 해서 다음 상태에서는 워커가 두 번 처리되지 않도록 합니다.
 * 3. 해당 잡을 어사인 했다면, pop 해서 다음 상태에서는 해당 잡이 처리되지 않도록 합니다. 잡이 어사인되지 않았다면 pop 하지 않습니다.
 */
aoc.year2018.day07.iterate_workers = (function aoc$year2018$day07$iterate_workers(get_time_per_alphabet,jobs,workers){
return cljs.core.iterate((function (state){
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"workers","workers",-2054878819).cljs$core$IFn$_invoke$arity$1(state))){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.Keyword(null,"done","done",-889844188));
} else {
var job = cljs.core.peek(new cljs.core.Keyword(null,"jobs","jobs",-313607120).cljs$core$IFn$_invoke$arity$1(state));
var worker = cljs.core.peek(new cljs.core.Keyword(null,"workers","workers",-2054878819).cljs$core$IFn$_invoke$arity$1(state));
var worker_available_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"job","job",850873087).cljs$core$IFn$_invoke$arity$1(worker),null)) && ((cljs.core.count(new cljs.core.Keyword(null,"jobs","jobs",-313607120).cljs$core$IFn$_invoke$arity$1(state)) > (0))));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"jobs","jobs",-313607120),(function (jobs__$1){
if(worker_available_QMARK_){
return cljs.core.pop(jobs__$1);
} else {
return jobs__$1;
}
})),new cljs.core.Keyword(null,"resulting-worker","resulting-worker",-630217779),(function (results){
if(worker_available_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(results,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),(get_time_per_alphabet.cljs$core$IFn$_invoke$arity$1 ? get_time_per_alphabet.cljs$core$IFn$_invoke$arity$1(job) : get_time_per_alphabet.call(null,job)),new cljs.core.Keyword(null,"job","job",850873087),job], null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(results,worker);
}
})),new cljs.core.Keyword(null,"workers","workers",-2054878819),cljs.core.pop);
}
}),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"jobs","jobs",-313607120),jobs,new cljs.core.Keyword(null,"workers","workers",-2054878819),workers,new cljs.core.Keyword(null,"resulting-worker","resulting-worker",-630217779),cljs.core.PersistentVector.EMPTY], null));
});
/**
 * jobs에 항목이 존재할 때, 할 일이 없는 워커에 어사인 합니다.
 * 1. job 목록에서 해야 할 일을 하나 꺼냅니다
 * 2. 일을 하고있지 않은 워커에게 어사인을 합니다. 워커에게 어사인 했거나 하지 않았더라도 워커를 pop 해서 다음 상태에서는 워커가 두 번 처리되지 않도록 합니다.
 * 3. 해당 잡을 어사인 했다면, pop 해서 다음 상태에서는 해당 잡이 처리되지 않도록 합니다. 잡이 어사인되지 않았다면 pop 하지 않습니다.
 * input: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
 *         :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}
 * output: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
 *          :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}
 */
aoc.year2018.day07.get_next_worker_state = (function aoc$year2018$day07$get_next_worker_state(state,get_time_per_alphabet,jobs){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workers","workers",-2054878819),(function (workers){
return new cljs.core.Keyword(null,"resulting-worker","resulting-worker",-630217779).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__42448_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__42448_SHARP_),new cljs.core.Keyword(null,"done","done",-889844188));
}),aoc.year2018.day07.iterate_workers(get_time_per_alphabet,jobs,workers))));
}));
});
/**
 * desc: 처리해야 하는 작업들을 대기중인 worker 에게 할당합니다
 * 1. 현재 워커가 갖고 있는 작업 이름을 `current-works` 라고 합니다.
 * 2. get-next-works 함수에서 불러온 다음 할일 목록에서, 현재 워커가 갖고 있는 일을 제외시킨 `jobs` 벡터를 선언합니다.
 * 3. get-next-worker-state 함수를 통해 새로운 작업을 워커에 어사인 합니다.
 * 4. 3번 과정에서 얻어온 수정된 워커 목록을 state에 update 합니다.
 * 5. 처리한 작업 목록을 뜻하는 :jobs 벡터에 처리한 작업을 추가합니다. 이것은 part 1 문제를 푸는데 활용되는 벡터입니다.
 * input: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
 *         :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}
 * output {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
 *         :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}
 */
aoc.year2018.day07.assign_job_to_workers = (function aoc$year2018$day07$assign_job_to_workers(state){
var current_works = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42449_SHARP_){
return new cljs.core.Keyword(null,"job","job",850873087).cljs$core$IFn$_invoke$arity$1(p1__42449_SHARP_);
}),new cljs.core.Keyword(null,"workers","workers",-2054878819).cljs$core$IFn$_invoke$arity$1(state)));
var jobs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__42450_SHARP_){
return cljs.core.not(cljs.core.some((function (v){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,p1__42450_SHARP_);
}),current_works));
}),aoc.year2018.day07.get_next_works(state))));
var assign_new_job = (function (old_jobs){
if(cljs.core.truth_(cljs.core.peek(jobs))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(old_jobs,cljs.core.peek(jobs));
} else {
return old_jobs;
}
});
if((cljs.core.count(jobs) > (0))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(aoc.year2018.day07.get_next_worker_state(state,new cljs.core.Keyword(null,"get-time-per-alphabet","get-time-per-alphabet",-1793915601).cljs$core$IFn$_invoke$arity$1(state),jobs),new cljs.core.Keyword(null,"jobs","jobs",-313607120),assign_new_job);
} else {
return state;
}
});
/**
 * desc: 새로운 작업을 워커에게 할당합니다
 * 1. get-done-workers 함수를 이용해 끝난 작업을 가져온 후 get-jobs 함수로 작업 이름만 가져옵니다. 이를 `done-jobs` 라 합니다.
 * 2. 끝난 작업을 할일 목록에서 삭제합니다
 * 3. assign-job-to-workers 함수를 호출해 새로운 작업을 맡깁니다.
 * input: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
 *         :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}
 * output: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
 *          :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}
 */
aoc.year2018.day07.assign_new_job = (function aoc$year2018$day07$assign_new_job(state){
var done_jobs = aoc.year2018.day07.get_jobs(aoc.year2018.day07.get_done_workers(new cljs.core.Keyword(null,"workers","workers",-2054878819).cljs$core$IFn$_invoke$arity$1(state)));
return aoc.year2018.day07.assign_job_to_workers(aoc.year2018.day07.remove_done_jobs(state,done_jobs));
});
/**
 * desc: 할일 목록이 모두 비었다면 state의 status를 :done 으로 변경합니다.
 */
aoc.year2018.day07.update_status = (function aoc$year2018$day07$update_status(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"status","status",-1997798413),(function (p1__42451_SHARP_){
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"todo","todo",-1046442570).cljs$core$IFn$_invoke$arity$1(state))){
return new cljs.core.Keyword(null,"done","done",-889844188);
} else {
return p1__42451_SHARP_;
}
}));
});
/**
 * desc: iterate 를 하면서 다음 상태를 만듭니다.
 *   1. 일하고 있는 모든 워커의 시간을 1초 깎습니다.
 *   2. 새로운 일을 찾아 일을 안하고 있는 워커에게 어사인 합니다.
 *   3. 만약 모든 일을 완료했다면 status를 :done 으로 바꿉니다.
 *   4. 시간을 1초 흐르게 합니다.
 * input: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
 *         :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}, [G K T V]
 * output: {:todo {A #{B C H L O P Q U X Y} B #{} ...}}, :workers [{:time -1, :job nil} ...], 
 *          :status :in-progress, :time -1, :jobs [], :no-parent-cursor 0, :works-with-no-parents [G K T V]}
 */
aoc.year2018.day07.get_next_state_part_2 = (function aoc$year2018$day07$get_next_state_part_2(state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(aoc.year2018.day07.update_status(aoc.year2018.day07.assign_new_job(aoc.year2018.day07.decrease_worker(state))),new cljs.core.Keyword(null,"time","time",1385887882),cljs.core.inc);
});
/**
 * desc: worker 갯수와 문자별 걸리는 시간을 구하는 함수를 입력으로 받아, 작업이 전체 끝날때의 상태를 반환합니다.
 * input: 5, (fn [word] ...)
 * output: {:todo {},
 *          :workers [{:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil} {:time -1, :job nil}],
 *          :status :done,
 *          :get-time-per-alphabet #function[aoc.year2018.day07/eval7147/fn--7148],
 *          :time 1265,
 *          :jobs (...)}
 */
aoc.year2018.day07.get_solution = (function aoc$year2018$day07$get_solution(state){
var state__$1 = state;
var last_status = cljs.core.first(cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__42452_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__42452_SHARP_),new cljs.core.Keyword(null,"done","done",-889844188));
}),cljs.core.iterate(aoc.year2018.day07.get_next_state_part_2,state__$1)));
return last_status;
});
aoc.year2018.day07.get_initial_state = (function aoc$year2018$day07$get_initial_state(worker_count,alphabet_fn,content){
var requirements_map = aoc.year2018.day07.get_requirements_map(content);
var works_with_no_parents = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.List.EMPTY,cljs.core.reverse(aoc.year2018.day07.get_works_with_no_parents(requirements_map)));
var todo_jobs = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.PersistentHashSet.EMPTY], null);
}),works_with_no_parents)),requirements_map], 0));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"todo","todo",-1046442570),todo_jobs,new cljs.core.Keyword(null,"workers","workers",-2054878819),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(worker_count,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),(-1),new cljs.core.Keyword(null,"job","job",850873087),null], null))),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"in-progress","in-progress",2126442630),new cljs.core.Keyword(null,"get-time-per-alphabet","get-time-per-alphabet",-1793915601),alphabet_fn,new cljs.core.Keyword(null,"time","time",1385887882),(-1)], null);
});

//# sourceMappingURL=aoc.year2018.day07.js.map
