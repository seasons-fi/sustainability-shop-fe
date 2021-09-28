goog.provide('sustainability_shop_fe.openroute');
sustainability_shop_fe.openroute.directionCol = alandipert.storage_atom.local_storage(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"directionCol","directionCol",-2046541107));
cljs.core.add_watch(sustainability_shop_fe.openroute.directionCol,new cljs.core.Keyword(null,"new","new",-2085437848),(function (_,___$1,___$2,v){
return null;
}));
sustainability_shop_fe.openroute.tok = "api_key=5b3ce3597851110001cf62489fd56d0c4f854187bb994903cad49fa5";
sustainability_shop_fe.openroute.cat = "https://api.openrouteservice.org/v2/directions/foot-walking";
sustainability_shop_fe.openroute.start = "start=24.93685,60.17038";
sustainability_shop_fe.openroute.end = "end=24.9384,60.1699";
sustainability_shop_fe.openroute.method = "GET";
sustainability_shop_fe.openroute.dataType = "json";
sustainability_shop_fe.openroute.contentType = "application/json; charset=utf-8";
sustainability_shop_fe.openroute.fetch_directions_BANG_ = (function sustainability_shop_fe$openroute$fetch_directions_BANG_(){
var c__26215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_35479){
var state_val_35480 = (state_35479[(1)]);
if((state_val_35480 === (1))){
var inst_35450 = [sustainability_shop_fe.openroute.cat,"?",sustainability_shop_fe.openroute.tok,"&",sustainability_shop_fe.openroute.start,"&",sustainability_shop_fe.openroute.end].join('');
var inst_35463 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_35464 = [false];
var inst_35465 = cljs.core.PersistentHashMap.fromArrays(inst_35463,inst_35464);
var inst_35466 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_35450,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_35465], 0));
var state_35479__$1 = state_35479;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35479__$1,(2),inst_35466);
} else {
if((state_val_35480 === (2))){
var inst_35469 = (state_35479[(2)]);
var inst_35470 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_35469);
var inst_35471 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_35470);
var inst_35472 = cljs.core.reset_BANG_(sustainability_shop_fe.openroute.directionCol,inst_35471);
var state_35479__$1 = state_35479;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35479__$1,inst_35472);
} else {
return null;
}
}
});
return (function() {
var sustainability_shop_fe$openroute$fetch_directions_BANG__$_state_machine__26131__auto__ = null;
var sustainability_shop_fe$openroute$fetch_directions_BANG__$_state_machine__26131__auto____0 = (function (){
var statearr_35485 = [null,null,null,null,null,null,null];
(statearr_35485[(0)] = sustainability_shop_fe$openroute$fetch_directions_BANG__$_state_machine__26131__auto__);

(statearr_35485[(1)] = (1));

return statearr_35485;
});
var sustainability_shop_fe$openroute$fetch_directions_BANG__$_state_machine__26131__auto____1 = (function (state_35479){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_35479);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e35488){var ex__26134__auto__ = e35488;
var statearr_35489_35502 = state_35479;
(statearr_35489_35502[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_35479[(4)]))){
var statearr_35490_35503 = state_35479;
(statearr_35490_35503[(1)] = cljs.core.first((state_35479[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35504 = state_35479;
state_35479 = G__35504;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
sustainability_shop_fe$openroute$fetch_directions_BANG__$_state_machine__26131__auto__ = function(state_35479){
switch(arguments.length){
case 0:
return sustainability_shop_fe$openroute$fetch_directions_BANG__$_state_machine__26131__auto____0.call(this);
case 1:
return sustainability_shop_fe$openroute$fetch_directions_BANG__$_state_machine__26131__auto____1.call(this,state_35479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sustainability_shop_fe$openroute$fetch_directions_BANG__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = sustainability_shop_fe$openroute$fetch_directions_BANG__$_state_machine__26131__auto____0;
sustainability_shop_fe$openroute$fetch_directions_BANG__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = sustainability_shop_fe$openroute$fetch_directions_BANG__$_state_machine__26131__auto____1;
return sustainability_shop_fe$openroute$fetch_directions_BANG__$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_35495 = f__26216__auto__();
(statearr_35495[(6)] = c__26215__auto__);

return statearr_35495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));

return c__26215__auto__;
});

//# sourceMappingURL=sustainability_shop_fe.openroute.js.map
