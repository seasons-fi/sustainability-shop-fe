goog.provide('shadow.test.node');
cljs.test.report.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),(function (m){
if(cljs.test.successful_QMARK_(m)){
return process.exit((0));
} else {
return process.exit((1));
}
}));
shadow.test.node.reset_test_data_BANG_ = (function shadow$test$node$reset_test_data_BANG_(){
return shadow.test.env.reset_test_data_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"sustainability-shop-fe.test","sustainability-shop-fe.test",33521160,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vars","vars",-2046957217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return sustainability_shop_fe.test.test_regex;},new cljs.core.Symbol("sustainability-shop-fe.test","test-regex","sustainability-shop-fe.test/test-regex",-1844957986,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sustainability-shop-fe.test","sustainability-shop-fe.test",33521160,null),new cljs.core.Symbol(null,"test-regex","test-regex",1118199758,null),"sustainability_shop_fe/test.cljs",20,1,6,6,cljs.core.List.EMPTY,null,(cljs.core.truth_(sustainability_shop_fe.test.test_regex)?sustainability_shop_fe.test.test_regex.cljs$lang$test:null)]))], null)], null)], null));
});
shadow.test.node.parse_args = (function shadow$test$node$parse_args(args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (opts,arg){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("--help",arg)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"help","help",-439233446),true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("--list",arg)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"list","list",765357683),true);
} else {
if(clojure.string.starts_with_QMARK_(arg,"--test=")){
var test_arg = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(arg,(7));
var test_syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.symbol,clojure.string.split.cljs$core$IFn$_invoke$arity$2(test_arg,","));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(opts,new cljs.core.Keyword(null,"test-syms","test-syms",338772208),cljs.core.into,test_syms);
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Unknown arg: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg)].join('')], 0));

return opts;

}
}
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"test-syms","test-syms",338772208),cljs.core.PersistentVector.EMPTY], null),args);
});
shadow.test.node.find_matching_test_vars = (function shadow$test$node$find_matching_test_vars(test_syms){
var test_namespaces = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.simple_symbol_QMARK_,test_syms));
var test_var_syms = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.qualified_symbol_QMARK_,test_syms));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (the_var){
var map__28123 = cljs.core.meta(the_var);
var map__28123__$1 = cljs.core.__destructure_map(map__28123);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28123__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28123__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return ((cljs.core.contains_QMARK_(test_namespaces,ns)) || (cljs.core.contains_QMARK_(test_var_syms,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,name))));
}),shadow.test.env.get_test_vars());
});
shadow.test.node.execute_cli = (function shadow$test$node$execute_cli(p__28124){
var map__28125 = p__28124;
var map__28125__$1 = cljs.core.__destructure_map(map__28125);
var opts = map__28125__$1;
var test_syms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28125__$1,new cljs.core.Keyword(null,"test-syms","test-syms",338772208));
var help = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28125__$1,new cljs.core.Keyword(null,"help","help",-439233446));
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28125__$1,new cljs.core.Keyword(null,"list","list",765357683));
var test_env = cljs.test.empty_env.cljs$core$IFn$_invoke$arity$0();
if(cljs.core.truth_(help)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Usage:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  --list (list known test names)"], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  --test=<ns-to-test>,<fqn-symbol-to-test> (run test for namespace or single var, separated by comma)"], 0));
} else {
if(cljs.core.truth_(list)){
var seq__28126 = cljs.core.seq(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,shadow.test.env.get_tests()));
var chunk__28127 = null;
var count__28128 = (0);
var i__28129 = (0);
while(true){
if((i__28129 < count__28128)){
var vec__28148 = chunk__28127.cljs$core$IIndexed$_nth$arity$2(null,i__28129);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28148,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28148,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespace:",ns], 0));

var seq__28151_28167 = cljs.core.seq(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info));
var chunk__28153_28168 = null;
var count__28154_28169 = (0);
var i__28155_28170 = (0);
while(true){
if((i__28155_28170 < count__28154_28169)){
var var_28171 = chunk__28153_28168.cljs$core$IIndexed$_nth$arity$2(null,i__28155_28170);
var m_28172 = cljs.core.meta(var_28171);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m_28172)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m_28172))].join('')], 0));


var G__28173 = seq__28151_28167;
var G__28174 = chunk__28153_28168;
var G__28175 = count__28154_28169;
var G__28176 = (i__28155_28170 + (1));
seq__28151_28167 = G__28173;
chunk__28153_28168 = G__28174;
count__28154_28169 = G__28175;
i__28155_28170 = G__28176;
continue;
} else {
var temp__5753__auto___28177 = cljs.core.seq(seq__28151_28167);
if(temp__5753__auto___28177){
var seq__28151_28178__$1 = temp__5753__auto___28177;
if(cljs.core.chunked_seq_QMARK_(seq__28151_28178__$1)){
var c__4638__auto___28179 = cljs.core.chunk_first(seq__28151_28178__$1);
var G__28180 = cljs.core.chunk_rest(seq__28151_28178__$1);
var G__28181 = c__4638__auto___28179;
var G__28182 = cljs.core.count(c__4638__auto___28179);
var G__28183 = (0);
seq__28151_28167 = G__28180;
chunk__28153_28168 = G__28181;
count__28154_28169 = G__28182;
i__28155_28170 = G__28183;
continue;
} else {
var var_28184 = cljs.core.first(seq__28151_28178__$1);
var m_28185 = cljs.core.meta(var_28184);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m_28185)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m_28185))].join('')], 0));


var G__28186 = cljs.core.next(seq__28151_28178__$1);
var G__28187 = null;
var G__28188 = (0);
var G__28189 = (0);
seq__28151_28167 = G__28186;
chunk__28153_28168 = G__28187;
count__28154_28169 = G__28188;
i__28155_28170 = G__28189;
continue;
}
} else {
}
}
break;
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["---------------------------------"], 0));


var G__28190 = seq__28126;
var G__28191 = chunk__28127;
var G__28192 = count__28128;
var G__28193 = (i__28129 + (1));
seq__28126 = G__28190;
chunk__28127 = G__28191;
count__28128 = G__28192;
i__28129 = G__28193;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28126);
if(temp__5753__auto__){
var seq__28126__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28126__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__28126__$1);
var G__28194 = cljs.core.chunk_rest(seq__28126__$1);
var G__28195 = c__4638__auto__;
var G__28196 = cljs.core.count(c__4638__auto__);
var G__28197 = (0);
seq__28126 = G__28194;
chunk__28127 = G__28195;
count__28128 = G__28196;
i__28129 = G__28197;
continue;
} else {
var vec__28157 = cljs.core.first(seq__28126__$1);
var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28157,(0),null);
var ns_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28157,(1),null);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Namespace:",ns], 0));

var seq__28160_28198 = cljs.core.seq(new cljs.core.Keyword(null,"vars","vars",-2046957217).cljs$core$IFn$_invoke$arity$1(ns_info));
var chunk__28162_28199 = null;
var count__28163_28200 = (0);
var i__28164_28201 = (0);
while(true){
if((i__28164_28201 < count__28163_28200)){
var var_28202 = chunk__28162_28199.cljs$core$IIndexed$_nth$arity$2(null,i__28164_28201);
var m_28203 = cljs.core.meta(var_28202);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m_28203)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m_28203))].join('')], 0));


var G__28204 = seq__28160_28198;
var G__28205 = chunk__28162_28199;
var G__28206 = count__28163_28200;
var G__28207 = (i__28164_28201 + (1));
seq__28160_28198 = G__28204;
chunk__28162_28199 = G__28205;
count__28163_28200 = G__28206;
i__28164_28201 = G__28207;
continue;
} else {
var temp__5753__auto___28208__$1 = cljs.core.seq(seq__28160_28198);
if(temp__5753__auto___28208__$1){
var seq__28160_28209__$1 = temp__5753__auto___28208__$1;
if(cljs.core.chunked_seq_QMARK_(seq__28160_28209__$1)){
var c__4638__auto___28210 = cljs.core.chunk_first(seq__28160_28209__$1);
var G__28211 = cljs.core.chunk_rest(seq__28160_28209__$1);
var G__28212 = c__4638__auto___28210;
var G__28213 = cljs.core.count(c__4638__auto___28210);
var G__28214 = (0);
seq__28160_28198 = G__28211;
chunk__28162_28199 = G__28212;
count__28163_28200 = G__28213;
i__28164_28201 = G__28214;
continue;
} else {
var var_28215 = cljs.core.first(seq__28160_28209__$1);
var m_28216 = cljs.core.meta(var_28215);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m_28216)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m_28216))].join('')], 0));


var G__28217 = cljs.core.next(seq__28160_28209__$1);
var G__28218 = null;
var G__28219 = (0);
var G__28220 = (0);
seq__28160_28198 = G__28217;
chunk__28162_28199 = G__28218;
count__28163_28200 = G__28219;
i__28164_28201 = G__28220;
continue;
}
} else {
}
}
break;
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["---------------------------------"], 0));


var G__28221 = cljs.core.next(seq__28126__$1);
var G__28222 = null;
var G__28223 = (0);
var G__28224 = (0);
seq__28126 = G__28221;
chunk__28127 = G__28222;
count__28128 = G__28223;
i__28129 = G__28224;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if(cljs.core.seq(test_syms)){
var test_vars = shadow.test.node.find_matching_test_vars(test_syms);
return shadow.test.run_test_vars.cljs$core$IFn$_invoke$arity$2(test_env,test_vars);
} else {
return shadow.test.run_all_tests.cljs$core$IFn$_invoke$arity$2(test_env,null);

}
}
}
});
shadow.test.node.main = (function shadow$test$node$main(var_args){
var args__4824__auto__ = [];
var len__4818__auto___28225 = arguments.length;
var i__4819__auto___28226 = (0);
while(true){
if((i__4819__auto___28226 < len__4818__auto___28225)){
args__4824__auto__.push((arguments[i__4819__auto___28226]));

var G__28227 = (i__4819__auto___28226 + (1));
i__4819__auto___28226 = G__28227;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.test.node.main.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.test.node.main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
shadow.test.node.reset_test_data_BANG_();

if(shadow.test.env.UI_DRIVEN){
return console.log("Waiting for UI ...");
} else {
var opts = shadow.test.node.parse_args(args);
return shadow.test.node.execute_cli(opts);
}
}));

(shadow.test.node.main.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.test.node.main.cljs$lang$applyTo = (function (seq28166){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28166));
}));


//# sourceMappingURL=shadow.test.node.js.map
