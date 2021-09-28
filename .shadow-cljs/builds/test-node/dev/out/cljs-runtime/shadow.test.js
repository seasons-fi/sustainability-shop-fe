goog.provide('shadow.test');
/**
 * like ct/test-vars-block but more generic
 * groups vars by namespace, executes fixtures
 */
shadow.test.test_vars_grouped_block = (function shadow$test$test_vars_grouped_block(vars){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__30532){
var vec__30535 = p__30532;
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30535,(0),null);
var vars__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30535,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
}),(function (){
return cljs.test.block((function (){var env = cljs.test.get_current_env();
var once_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167),ns], null));
var each_fixtures = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977),ns], null));
var G__30538 = cljs.test.execution_strategy(once_fixtures,each_fixtures);
var G__30538__$1 = (((G__30538 instanceof cljs.core.Keyword))?G__30538.fqn:null);
switch (G__30538__$1) {
case "async":
return cljs.test.wrap_map_fixtures(once_fixtures,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.test.wrap_map_fixtures,each_fixtures),cljs.test.test_var_block),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"test","test",577538877),cljs.core.meta),vars__$1)], 0)));

break;
case "sync":
var each_fixture_fn = cljs.test.join_fixtures(each_fixtures);
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
var G__30541 = (function (){
var seq__30543 = cljs.core.seq(vars__$1);
var chunk__30544 = null;
var count__30545 = (0);
var i__30546 = (0);
while(true){
if((i__30546 < count__30545)){
var v = chunk__30544.cljs$core$IIndexed$_nth$arity$2(null,i__30546);
var temp__5753__auto___30785 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5753__auto___30785)){
var t_30786 = temp__5753__auto___30785;
var G__30555_30787 = ((function (seq__30543,chunk__30544,count__30545,i__30546,t_30786,temp__5753__auto___30785,v,each_fixture_fn,G__30538,G__30538__$1,env,once_fixtures,each_fixtures,vec__30535,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_30786)));
});})(seq__30543,chunk__30544,count__30545,i__30546,t_30786,temp__5753__auto___30785,v,each_fixture_fn,G__30538,G__30538__$1,env,once_fixtures,each_fixtures,vec__30535,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__30555_30787) : each_fixture_fn.call(null,G__30555_30787));
} else {
}


var G__30789 = seq__30543;
var G__30790 = chunk__30544;
var G__30791 = count__30545;
var G__30792 = (i__30546 + (1));
seq__30543 = G__30789;
chunk__30544 = G__30790;
count__30545 = G__30791;
i__30546 = G__30792;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30543);
if(temp__5753__auto__){
var seq__30543__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30543__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__30543__$1);
var G__30793 = cljs.core.chunk_rest(seq__30543__$1);
var G__30794 = c__4638__auto__;
var G__30795 = cljs.core.count(c__4638__auto__);
var G__30796 = (0);
seq__30543 = G__30793;
chunk__30544 = G__30794;
count__30545 = G__30795;
i__30546 = G__30796;
continue;
} else {
var v = cljs.core.first(seq__30543__$1);
var temp__5753__auto___30797__$1 = new cljs.core.Keyword(null,"test","test",577538877).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(v));
if(cljs.core.truth_(temp__5753__auto___30797__$1)){
var t_30798 = temp__5753__auto___30797__$1;
var G__30560_30799 = ((function (seq__30543,chunk__30544,count__30545,i__30546,t_30798,temp__5753__auto___30797__$1,v,seq__30543__$1,temp__5753__auto__,each_fixture_fn,G__30538,G__30538__$1,env,once_fixtures,each_fixtures,vec__30535,ns,vars__$1){
return (function (){
return cljs.test.run_block(cljs.test.test_var_block_STAR_(v,cljs.test.disable_async(t_30798)));
});})(seq__30543,chunk__30544,count__30545,i__30546,t_30798,temp__5753__auto___30797__$1,v,seq__30543__$1,temp__5753__auto__,each_fixture_fn,G__30538,G__30538__$1,env,once_fixtures,each_fixtures,vec__30535,ns,vars__$1))
;
(each_fixture_fn.cljs$core$IFn$_invoke$arity$1 ? each_fixture_fn.cljs$core$IFn$_invoke$arity$1(G__30560_30799) : each_fixture_fn.call(null,G__30560_30799));
} else {
}


var G__30801 = cljs.core.next(seq__30543__$1);
var G__30802 = null;
var G__30803 = (0);
var G__30804 = (0);
seq__30543 = G__30801;
chunk__30544 = G__30802;
count__30545 = G__30803;
i__30546 = G__30804;
continue;
}
} else {
return null;
}
}
break;
}
});
var fexpr__30540 = cljs.test.join_fixtures(once_fixtures);
return (fexpr__30540.cljs$core$IFn$_invoke$arity$1 ? fexpr__30540.cljs$core$IFn$_invoke$arity$1(G__30541) : fexpr__30540.call(null,G__30541));
})], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30538__$1)].join('')));

}
})());
}),(function (){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645),new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
})], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by((function (p1__30524_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__30524_SHARP_));
}),vars))], 0));
});
/**
 * Like test-ns, but returns a block for further composition and
 *   later execution.  Does not clear the current env.
 */
shadow.test.test_ns_block = (function shadow$test$test_ns_block(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

var map__30572 = shadow.test.env.get_test_ns_info(ns);
var map__30572__$1 = cljs.core.__destructure_map(map__30572);
var test_ns = map__30572__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30572__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
if(cljs.core.not(test_ns)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Namespace: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)," not found, no tests to run."].join('')], 0));
})], null);
} else {
return shadow.test.test_vars_grouped_block(vars);
}
});
shadow.test.prepare_test_run = (function shadow$test$prepare_test_run(p__30588,vars){
var map__30589 = p__30588;
var map__30589__$1 = cljs.core.__destructure_map(map__30589);
var env = map__30589__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30589__$1,new cljs.core.Keyword(null,"report-fn","report-fn",-549046115));
var orig_report = cljs.test.report;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
cljs.test.set_env_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061),orig_report));

if(cljs.core.truth_(report_fn)){
(cljs.test.report = report_fn);
} else {
}

var seq__30612_30805 = cljs.core.seq(shadow.test.env.get_tests());
var chunk__30614_30806 = null;
var count__30615_30807 = (0);
var i__30616_30808 = (0);
while(true){
if((i__30616_30808 < count__30615_30807)){
var vec__30654_30809 = chunk__30614_30806.cljs$core$IIndexed$_nth$arity$2(null,i__30616_30808);
var test_ns_30810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30654_30809,(0),null);
var ns_info_30811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30654_30809,(1),null);
var map__30666_30812 = ns_info_30811;
var map__30666_30813__$1 = cljs.core.__destructure_map(map__30666_30812);
var fixtures_30814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30666_30813__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5753__auto___30815 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_30814);
if(cljs.core.truth_(temp__5753__auto___30815)){
var fix_30816 = temp__5753__auto___30815;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_30810,fix_30816], 0));
} else {
}

var temp__5753__auto___30817 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_30814);
if(cljs.core.truth_(temp__5753__auto___30817)){
var fix_30818 = temp__5753__auto___30817;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_30810,fix_30818], 0));
} else {
}


var G__30819 = seq__30612_30805;
var G__30820 = chunk__30614_30806;
var G__30821 = count__30615_30807;
var G__30822 = (i__30616_30808 + (1));
seq__30612_30805 = G__30819;
chunk__30614_30806 = G__30820;
count__30615_30807 = G__30821;
i__30616_30808 = G__30822;
continue;
} else {
var temp__5753__auto___30823 = cljs.core.seq(seq__30612_30805);
if(temp__5753__auto___30823){
var seq__30612_30824__$1 = temp__5753__auto___30823;
if(cljs.core.chunked_seq_QMARK_(seq__30612_30824__$1)){
var c__4638__auto___30825 = cljs.core.chunk_first(seq__30612_30824__$1);
var G__30826 = cljs.core.chunk_rest(seq__30612_30824__$1);
var G__30827 = c__4638__auto___30825;
var G__30828 = cljs.core.count(c__4638__auto___30825);
var G__30829 = (0);
seq__30612_30805 = G__30826;
chunk__30614_30806 = G__30827;
count__30615_30807 = G__30828;
i__30616_30808 = G__30829;
continue;
} else {
var vec__30692_30830 = cljs.core.first(seq__30612_30824__$1);
var test_ns_30831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30692_30830,(0),null);
var ns_info_30833 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30692_30830,(1),null);
var map__30696_30834 = ns_info_30833;
var map__30696_30835__$1 = cljs.core.__destructure_map(map__30696_30834);
var fixtures_30836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30696_30835__$1,new cljs.core.Keyword(null,"fixtures","fixtures",1009814994));
var temp__5753__auto___30837__$1 = new cljs.core.Keyword(null,"once","once",-262568523).cljs$core$IFn$_invoke$arity$1(fixtures_30836);
if(cljs.core.truth_(temp__5753__auto___30837__$1)){
var fix_30838 = temp__5753__auto___30837__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"once-fixtures","once-fixtures",1253947167)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_30831,fix_30838], 0));
} else {
}

var temp__5753__auto___30839__$1 = new cljs.core.Keyword(null,"each","each",940016129).cljs$core$IFn$_invoke$arity$1(fixtures_30836);
if(cljs.core.truth_(temp__5753__auto___30839__$1)){
var fix_30840 = temp__5753__auto___30839__$1;
cljs.test.update_current_env_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"each-fixtures","each-fixtures",802243977)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([test_ns_30831,fix_30840], 0));
} else {
}


var G__30841 = cljs.core.next(seq__30612_30824__$1);
var G__30842 = null;
var G__30843 = (0);
var G__30844 = (0);
seq__30612_30805 = G__30841;
chunk__30614_30806 = G__30842;
count__30615_30807 = G__30843;
i__30616_30808 = G__30844;
continue;
}
} else {
}
}
break;
}

return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-run-tests","begin-run-tests",309363062),new cljs.core.Keyword(null,"var-count","var-count",-1513152110),cljs.core.count(vars),new cljs.core.Keyword(null,"ns-count","ns-count",-1269070724),cljs.core.count(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__30582_SHARP_){
return new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__30582_SHARP_));
}),vars)))], null));
})], null);
});
shadow.test.finish_test_run = (function shadow$test$finish_test_run(block){
if(cljs.core.vector_QMARK_(block)){
} else {
throw (new Error("Assert failed: (vector? block)"));
}

return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(block,(function (){
var map__30730 = cljs.test.get_current_env();
var map__30730__$1 = cljs.core.__destructure_map(map__30730);
var env = map__30730__$1;
var report_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30730__$1,new cljs.core.Keyword("shadow.test","report-fn","shadow.test/report-fn",1075704061));
var report_counters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30730__$1,new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242));
cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952)));

cljs.test.report.call(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(report_counters,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return (cljs.test.report = report_fn);
}));
});
/**
 * tests all vars grouped by namespace, expects seq of test vars, can be obtained from env
 */
shadow.test.run_test_vars = (function shadow$test$run_test_vars(var_args){
var G__30733 = arguments.length;
switch (G__30733) {
case 1:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$1 = (function (test_vars){
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),test_vars);
}));

(shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2 = (function (env,vars){
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_test_vars.cljs$lang$maxFixedArity = 2);

/**
 * test all vars for given namespace symbol
 */
shadow.test.test_ns = (function shadow$test$test_ns(var_args){
var G__30748 = arguments.length;
switch (G__30748) {
case 1:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$1 = (function (ns){
return shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),ns);
}));

(shadow.test.test_ns.cljs$core$IFn$_invoke$arity$2 = (function (env,ns){
var map__30754 = shadow.test.env.get_test_ns_info(ns);
var map__30754__$1 = cljs.core.__destructure_map(map__30754);
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30754__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.test_ns.cljs$lang$maxFixedArity = 2);

/**
 * test all vars in specified namespace symbol set
 */
shadow.test.run_tests = (function shadow$test$run_tests(var_args){
var G__30763 = arguments.length;
switch (G__30763) {
case 0:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,shadow.test.env.get_test_namespaces());
}));

(shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,namespaces){
if(cljs.core.set_QMARK_(namespaces)){
} else {
throw (new Error("Assert failed: (set? namespaces)"));
}

var vars = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30755_SHARP_){
return cljs.core.contains_QMARK_(namespaces,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(p1__30755_SHARP_)));
}),shadow.test.env.get_test_vars());
return cljs.test.run_block(shadow.test.finish_test_run(cljs.core.into.cljs$core$IFn$_invoke$arity$2(shadow.test.prepare_test_run(env,vars),shadow.test.test_vars_grouped_block(vars))));
}));

(shadow.test.run_tests.cljs$lang$maxFixedArity = 2);

/**
 * Runs all tests in all namespaces; prints results.
 *   Optional argument is a regular expression; only namespaces with
 *   names matching the regular expression (with re-matches) will be
 *   tested.
 */
shadow.test.run_all_tests = (function shadow$test$run_all_tests(var_args){
var G__30775 = arguments.length;
switch (G__30775) {
case 0:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0(),null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$1 = (function (env){
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(env,null);
}));

(shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2 = (function (env,re){
return shadow.test.run_tests.cljs$core$IFn$_invoke$arity$2(env,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30769_SHARP_){
var or__4212__auto__ = (re == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
return cljs.core.re_matches(re,cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__30769_SHARP_));
}
}),shadow.test.env.get_test_namespaces())));
}));

(shadow.test.run_all_tests.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=shadow.test.js.map
