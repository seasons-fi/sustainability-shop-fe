goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5753__auto__ = (function (){var fexpr__34440 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__34440.cljs$core$IFn$_invoke$arity$1 ? fexpr__34440.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__34440.call(null,channel));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var req = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__34458){
var vec__34459 = p__34458;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34459,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34459,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__34466 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__34466)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__34466)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__34466)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__34466)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__34466)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__34466)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34466)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__34473){
var map__34474 = p__34473;
var map__34474__$1 = cljs.core.__destructure_map(map__34474);
var request = map__34474__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34474__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34474__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34474__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__34475 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__34475,default_headers);

cljs_http.core.apply_response_type_BANG_(G__34475,response_type);

G__34475.setTimeoutInterval(timeout);

G__34475.setWithCredentials(send_credentials);

return G__34475;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__34479){
var map__34480 = p__34479;
var map__34480__$1 = cljs.core.__destructure_map(map__34480);
var request = map__34480__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34480__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__4212__auto__ = request_method;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__34485 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__34485) : cljs_http.core.error_kw.call(null,G__34485));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_34635 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__34490_34638 = xhr;
G__34490_34638.setProgressEventsEnabled(true);

G__34490_34638.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_34635,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__34490_34638.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_34635,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__26215__auto___34644 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_34508){
var state_val_34509 = (state_34508[(1)]);
if((state_val_34509 === (1))){
var state_34508__$1 = state_34508;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34508__$1,(2),cancel);
} else {
if((state_val_34509 === (2))){
var inst_34499 = (state_34508[(2)]);
var inst_34500 = xhr.isComplete();
var inst_34501 = cljs.core.not(inst_34500);
var state_34508__$1 = (function (){var statearr_34537 = state_34508;
(statearr_34537[(7)] = inst_34499);

return statearr_34537;
})();
if(inst_34501){
var statearr_34543_34646 = state_34508__$1;
(statearr_34543_34646[(1)] = (3));

} else {
var statearr_34544_34647 = state_34508__$1;
(statearr_34544_34647[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (3))){
var inst_34503 = xhr.abort();
var state_34508__$1 = state_34508;
var statearr_34547_34649 = state_34508__$1;
(statearr_34547_34649[(2)] = inst_34503);

(statearr_34547_34649[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (4))){
var state_34508__$1 = state_34508;
var statearr_34549_34650 = state_34508__$1;
(statearr_34549_34650[(2)] = null);

(statearr_34549_34650[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34509 === (5))){
var inst_34506 = (state_34508[(2)]);
var state_34508__$1 = state_34508;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34508__$1,inst_34506);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__26131__auto__ = null;
var cljs_http$core$xhr_$_state_machine__26131__auto____0 = (function (){
var statearr_34554 = [null,null,null,null,null,null,null,null];
(statearr_34554[(0)] = cljs_http$core$xhr_$_state_machine__26131__auto__);

(statearr_34554[(1)] = (1));

return statearr_34554;
});
var cljs_http$core$xhr_$_state_machine__26131__auto____1 = (function (state_34508){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_34508);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e34560){var ex__26134__auto__ = e34560;
var statearr_34561_34653 = state_34508;
(statearr_34561_34653[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_34508[(4)]))){
var statearr_34562_34654 = state_34508;
(statearr_34562_34654[(1)] = cljs.core.first((state_34508[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34655 = state_34508;
state_34508 = G__34655;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__26131__auto__ = function(state_34508){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__26131__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__26131__auto____1.call(this,state_34508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__26131__auto____0;
cljs_http$core$xhr_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__26131__auto____1;
return cljs_http$core$xhr_$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_34563 = f__26216__auto__();
(statearr_34563[(6)] = c__26215__auto___34644);

return statearr_34563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__34568){
var map__34569 = p__34568;
var map__34569__$1 = cljs.core.__destructure_map(map__34569);
var request = map__34569__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34569__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34569__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34569__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34569__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_34661 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_34661], null));

if(cljs.core.truth_(cancel)){
var c__26215__auto___34666 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_34600){
var state_val_34601 = (state_34600[(1)]);
if((state_val_34601 === (1))){
var state_34600__$1 = state_34600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34600__$1,(2),cancel);
} else {
if((state_val_34601 === (2))){
var inst_34596 = (state_34600[(2)]);
var inst_34597 = jsonp.cancel(req_34661);
var state_34600__$1 = (function (){var statearr_34605 = state_34600;
(statearr_34605[(7)] = inst_34596);

return statearr_34605;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34600__$1,inst_34597);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__26131__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__26131__auto____0 = (function (){
var statearr_34606 = [null,null,null,null,null,null,null,null];
(statearr_34606[(0)] = cljs_http$core$jsonp_$_state_machine__26131__auto__);

(statearr_34606[(1)] = (1));

return statearr_34606;
});
var cljs_http$core$jsonp_$_state_machine__26131__auto____1 = (function (state_34600){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_34600);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e34608){var ex__26134__auto__ = e34608;
var statearr_34609_34671 = state_34600;
(statearr_34609_34671[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_34600[(4)]))){
var statearr_34610_34672 = state_34600;
(statearr_34610_34672[(1)] = cljs.core.first((state_34600[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34674 = state_34600;
state_34600 = G__34674;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__26131__auto__ = function(state_34600){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__26131__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__26131__auto____1.call(this,state_34600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__26131__auto____0;
cljs_http$core$jsonp_$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__26131__auto____1;
return cljs_http$core$jsonp_$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_34614 = f__26216__auto__();
(statearr_34614[(6)] = c__26215__auto___34666);

return statearr_34614;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__34615){
var map__34616 = p__34615;
var map__34616__$1 = cljs.core.__destructure_map(map__34616);
var request = map__34616__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34616__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
