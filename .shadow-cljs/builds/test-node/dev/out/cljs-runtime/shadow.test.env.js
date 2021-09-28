goog.provide('shadow.test.env');
/**
 * @define {boolean}
 */
shadow.test.env.UI_DRIVEN = goog.define("shadow.test.env.UI_DRIVEN",false);
if((typeof shadow !== 'undefined') && (typeof shadow.test !== 'undefined') && (typeof shadow.test.env !== 'undefined') && (typeof shadow.test.env.tests_ref !== 'undefined')){
} else {
shadow.test.env.tests_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.PersistentArrayMap.EMPTY], null));
}
shadow.test.env.reset_test_data_BANG_ = (function shadow$test$env$reset_test_data_BANG_(test_data){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.test.env.tests_ref,cljs.core.assoc,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),test_data);
});
shadow.test.env.get_tests = (function shadow$test$env$get_tests(){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
});
shadow.test.env.get_test_vars = (function shadow$test$env$get_test_vars(){
var iter__4611__auto__ = (function shadow$test$env$get_test_vars_$_iter__28463(s__28464){
return (new cljs.core.LazySeq(null,(function (){
var s__28464__$1 = s__28464;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28464__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var vec__28470 = cljs.core.first(xs__6308__auto__);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28470,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28470,(1),null);
var iterys__4607__auto__ = ((function (s__28464__$1,vec__28470,ns,ns_info,xs__6308__auto__,temp__5753__auto__){
return (function shadow$test$env$get_test_vars_$_iter__28463_$_iter__28465(s__28466){
return (new cljs.core.LazySeq(null,((function (s__28464__$1,vec__28470,ns,ns_info,xs__6308__auto__,temp__5753__auto__){
return (function (){
var s__28466__$1 = s__28466;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__28466__$1);
if(temp__5753__auto____$1){
var s__28466__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__28466__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__28466__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__28468 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__28467 = (0);
while(true){
if((i__28467 < size__4610__auto__)){
var var$ = cljs.core._nth(c__4609__auto__,i__28467);
cljs.core.chunk_append(b__28468,var$);

var G__28483 = (i__28467 + (1));
i__28467 = G__28483;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28468),shadow$test$env$get_test_vars_$_iter__28463_$_iter__28465(cljs.core.chunk_rest(s__28466__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28468),null);
}
} else {
var var$ = cljs.core.first(s__28466__$2);
return cljs.core.cons(var$,shadow$test$env$get_test_vars_$_iter__28463_$_iter__28465(cljs.core.rest(s__28466__$2)));
}
} else {
return null;
}
break;
}
});})(s__28464__$1,vec__28470,ns,ns_info,xs__6308__auto__,temp__5753__auto__))
,null,null));
});})(s__28464__$1,vec__28470,ns,ns_info,xs__6308__auto__,temp__5753__auto__))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info)));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$test$env$get_test_vars_$_iter__28463(cljs.core.rest(s__28464__$1)));
} else {
var G__28484 = cljs.core.rest(s__28464__$1);
s__28464__$1 = G__28484;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(shadow.test.env.get_tests());
});
shadow.test.env.get_test_ns_info = (function shadow$test$env$get_test_ns_info(ns){
if((ns instanceof cljs.core.Symbol)){
} else {
throw (new Error("Assert failed: (symbol? ns)"));
}

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.test.env.tests_ref),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns], null));
});
/**
 * returns all the registered test namespaces and symbols
 * use (get-test-ns-info the-sym) to get the details
 */
shadow.test.env.get_test_namespaces = (function shadow$test$env$get_test_namespaces(){
return cljs.core.keys(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref)));
});
shadow.test.env.get_test_count = (function shadow$test$env$get_test_count(){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),(function (){var iter__4611__auto__ = (function shadow$test$env$get_test_count_$_iter__28475(s__28476){
return (new cljs.core.LazySeq(null,(function (){
var s__28476__$1 = s__28476;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28476__$1);
if(temp__5753__auto__){
var s__28476__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28476__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__28476__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__28478 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__28477 = (0);
while(true){
if((i__28477 < size__4610__auto__)){
var map__28479 = cljs.core._nth(c__4609__auto__,i__28477);
var map__28479__$1 = cljs.core.__destructure_map(map__28479);
var test_ns = map__28479__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28479__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
cljs.core.chunk_append(b__28478,cljs.core.count(vars));

var G__28486 = (i__28477 + (1));
i__28477 = G__28486;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28478),shadow$test$env$get_test_count_$_iter__28475(cljs.core.chunk_rest(s__28476__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28478),null);
}
} else {
var map__28480 = cljs.core.first(s__28476__$2);
var map__28480__$1 = cljs.core.__destructure_map(map__28480);
var test_ns = map__28480__$1;
var vars = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28480__$1,new cljs.core.Keyword(null,"vars","vars",-2046957217));
return cljs.core.cons(cljs.core.count(vars),shadow$test$env$get_test_count_$_iter__28475(cljs.core.rest(s__28476__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.vals(new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(shadow.test.env.tests_ref))));
})());
});

//# sourceMappingURL=shadow.test.env.js.map
