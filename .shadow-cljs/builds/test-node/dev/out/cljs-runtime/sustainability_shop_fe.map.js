goog.provide('sustainability_shop_fe.map');
sustainability_shop_fe.map.r = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570));
sustainability_shop_fe.map.yh = "[{\n  \"type\": \"FeatureCollection\",\n  \"features\": [\n    {\n      \"type\": \"Feature\",\n      \"properties\": {\n        \"name\": \"Test\"\n      },\n      \"geometry\": {\n        \"type\": \"Point\",\n        \"coordinates\": [\n          24.9384, 60.1699 \n        ]\n      }\n    }\n  ]\n}]";
sustainability_shop_fe.map.geoJsonData = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
sustainability_shop_fe.map.mapBox = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
sustainability_shop_fe.map.selectedLocation = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
sustainability_shop_fe.map.allLocations = alandipert.storage_atom.local_storage(reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"allLocations","allLocations",1728203529));
sustainability_shop_fe.map.locationsInMap = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
sustainability_shop_fe.map.search_value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
sustainability_shop_fe.map.includes_search_string = (function sustainability_shop_fe$map$includes_search_string(search,str){
var matches = cljs.core.re_matches(cljs.core.re_pattern(search),str);
if(((clojure.string.includes_QMARK_(str,search)) || ((((!(clojure.string.blank_QMARK_(matches)))) || ((!(cljs.core.empty_QMARK_(matches)))))))){
return true;
} else {
return false;
}
});
sustainability_shop_fe.map.locations_in_search = (function sustainability_shop_fe$map$locations_in_search(search_value){
if((!(cljs.core.empty_QMARK_(JSON.parse(cljs.core.deref(sustainability_shop_fe.map.geoJsonData)))))){
return JSON.stringify(cljs.core.clj__GT_js(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35609_SHARP_){
return clojure.string.includes_QMARK_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__35609_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))),search_value);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35610_SHARP_){
return (!((p1__35610_SHARP_ == null)));
}),cljs.core.first(JSON.parse(cljs.core.deref(sustainability_shop_fe.map.geoJsonData))).features))));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
sustainability_shop_fe.map.switch$ = (function sustainability_shop_fe$map$switch(mode,modeR){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row.switch","div.row.switch",115414925),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.reset_BANG_(mode,"list");
}),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),["btn ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(modeR,"map"))?null:"bold")].join('')], null),"List"], null),"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.reset_BANG_(mode,"map");
}),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"class","class",-2030961996),["btn ",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(modeR,"map"))?"bold":null)].join('')], null),"Map (eco-friendly stores nearby)"], null)], null);
});
cljs.core.add_watch(sustainability_shop_fe.map.allLocations,new cljs.core.Keyword(null,"new","new",-2085437848),(function (_,___$1,___$2,v){
return null;
}));
sustainability_shop_fe.map.reset_map_to_point = (function sustainability_shop_fe$map$reset_map_to_point(latlng,mapbox){
return mapbox.flyTo(latlng,(18));
});
sustainability_shop_fe.map.fetch_link_BANG_ = (function sustainability_shop_fe$map$fetch_link_BANG_(){
var c__26215__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26216__auto__ = (function (){var switch__26130__auto__ = (function (state_35630){
var state_val_35631 = (state_35630[(1)]);
if((state_val_35631 === (1))){
var inst_35619 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_35621 = [false];
var inst_35622 = cljs.core.PersistentHashMap.fromArrays(inst_35619,inst_35621);
var inst_35623 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic("https://gist.githubusercontent.com/marharyta/fa3213c1cc4a31526efba46bb1da04b3/raw/55d3bb0850bc32500e222c8e776b4c9d22c97d46/test.geojson",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_35622], 0));
var state_35630__$1 = state_35630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35630__$1,(2),inst_35623);
} else {
if((state_val_35631 === (2))){
var inst_35625 = (state_35630[(2)]);
var inst_35626 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_35625);
var inst_35627 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(inst_35626);
var inst_35628 = cljs.core.reset_BANG_(sustainability_shop_fe.map.geoJsonData,inst_35627);
var state_35630__$1 = state_35630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35630__$1,inst_35628);
} else {
return null;
}
}
});
return (function() {
var sustainability_shop_fe$map$fetch_link_BANG__$_state_machine__26131__auto__ = null;
var sustainability_shop_fe$map$fetch_link_BANG__$_state_machine__26131__auto____0 = (function (){
var statearr_35641 = [null,null,null,null,null,null,null];
(statearr_35641[(0)] = sustainability_shop_fe$map$fetch_link_BANG__$_state_machine__26131__auto__);

(statearr_35641[(1)] = (1));

return statearr_35641;
});
var sustainability_shop_fe$map$fetch_link_BANG__$_state_machine__26131__auto____1 = (function (state_35630){
while(true){
var ret_value__26132__auto__ = (function (){try{while(true){
var result__26133__auto__ = switch__26130__auto__(state_35630);
if(cljs.core.keyword_identical_QMARK_(result__26133__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26133__auto__;
}
break;
}
}catch (e35645){var ex__26134__auto__ = e35645;
var statearr_35646_35708 = state_35630;
(statearr_35646_35708[(2)] = ex__26134__auto__);


if(cljs.core.seq((state_35630[(4)]))){
var statearr_35650_35709 = state_35630;
(statearr_35650_35709[(1)] = cljs.core.first((state_35630[(4)])));

} else {
throw ex__26134__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26132__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35710 = state_35630;
state_35630 = G__35710;
continue;
} else {
return ret_value__26132__auto__;
}
break;
}
});
sustainability_shop_fe$map$fetch_link_BANG__$_state_machine__26131__auto__ = function(state_35630){
switch(arguments.length){
case 0:
return sustainability_shop_fe$map$fetch_link_BANG__$_state_machine__26131__auto____0.call(this);
case 1:
return sustainability_shop_fe$map$fetch_link_BANG__$_state_machine__26131__auto____1.call(this,state_35630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sustainability_shop_fe$map$fetch_link_BANG__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$0 = sustainability_shop_fe$map$fetch_link_BANG__$_state_machine__26131__auto____0;
sustainability_shop_fe$map$fetch_link_BANG__$_state_machine__26131__auto__.cljs$core$IFn$_invoke$arity$1 = sustainability_shop_fe$map$fetch_link_BANG__$_state_machine__26131__auto____1;
return sustainability_shop_fe$map$fetch_link_BANG__$_state_machine__26131__auto__;
})()
})();
var state__26217__auto__ = (function (){var statearr_35651 = f__26216__auto__();
(statearr_35651[(6)] = c__26215__auto__);

return statearr_35651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26217__auto__);
}));

return c__26215__auto__;
});
sustainability_shop_fe.map.slick_slider = (function sustainability_shop_fe$map$slick_slider(locations_in_map_view){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.core.adapt_react_class(shadow.js.shim.module$react_slick.default),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slidesToShow","slidesToShow",1986928315),1.5,new cljs.core.Keyword(null,"infinite","infinite",-121292194),false], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (f){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-24 bg-white p-6 mr-3"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-xl font-medium text-blue-600"], null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.properties.name)], null)], null);
}),locations_in_map_view)], null);
});
sustainability_shop_fe.map.global_geojsonLayer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
sustainability_shop_fe.map.initialize_geo = (function sustainability_shop_fe$map$initialize_geo(mapbox,geoJsonData,removeLayer){
var markers = shadow.js.shim.module$leaflet.markerClusterGroup();
var geojsonLayer = shadow.js.shim.module$leaflet.geoJson(JSON.parse(geoJsonData),({"pointToLayer": (function (feature,latlng){
return markers.addLayer(shadow.js.shim.module$leaflet.marker(latlng).addEventListener("click",(function (){
sustainability_shop_fe.map.reset_map_to_point(latlng,mapbox);

return cljs.core.reset_BANG_(sustainability_shop_fe.map.selectedLocation,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(feature,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
})));
}), "filter": (function (feature){
if(clojure.string.blank_QMARK_(cljs.core.deref(sustainability_shop_fe.map.search_value))){
return true;
} else {
if(sustainability_shop_fe.map.includes_search_string(cljs.core.deref(sustainability_shop_fe.map.search_value),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(feature,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))))){
return true;
} else {
return null;
}
}
})}));
console.log("layer",cljs.core.clj__GT_js(geojsonLayer));

cljs.core.reset_BANG_(sustainability_shop_fe.map.global_geojsonLayer,geojsonLayer);

return geojsonLayer.addTo(mapbox);
});
sustainability_shop_fe.map.initialize_features_in_view_selection = (function sustainability_shop_fe$map$initialize_features_in_view_selection(mapbox,geoJsonData){
mapbox.addEventListener("moveend",(function (){
return cljs.core.reset_BANG_(sustainability_shop_fe.map.locationsInMap,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (feat){
var f = shadow.js.shim.module$leaflet.latLng(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(feat.geometry.coordinates,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(feat.geometry.coordinates,(0)));
if(cljs.core.truth_(mapbox.getBounds().contains(f))){
return feat;
} else {
return null;
}
}),cljs.core.first(JSON.parse(geoJsonData)).features));
}));

return mapbox.addEventListener("zoomend",(function (){
return cljs.core.reset_BANG_(sustainability_shop_fe.map.locationsInMap,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (feat){
var f = shadow.js.shim.module$leaflet.latLng(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(feat.geometry.coordinates,(1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(feat.geometry.coordinates,(0)));
if(cljs.core.truth_(mapbox.getBounds().contains(f))){
return feat;
} else {
return null;
}
}),cljs.core.first(JSON.parse(geoJsonData)).features));
}));
});
sustainability_shop_fe.map.map_render = (function sustainability_shop_fe$map$map_render(){
var mapContainer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute top-0 z-0",new cljs.core.Keyword(null,"id","id",-1388402092),"mapid",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
return cljs.core.reset_BANG_(mapContainer,el);
})], null)], null);
});
});
sustainability_shop_fe.map.list_render = (function sustainability_shop_fe$map$list_render(){
var listContainer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"listid",new cljs.core.Keyword(null,"ref","ref",1289896967),(function (el){
return cljs.core.reset_BANG_(listContainer,el);
})], null),(function (){var iter__4611__auto__ = (function sustainability_shop_fe$map$list_render_$_iter__35670(s__35671){
return (new cljs.core.LazySeq(null,(function (){
var s__35671__$1 = s__35671;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__35671__$1);
if(temp__5753__auto__){
var s__35671__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__35671__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__35671__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__35673 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__35672 = (0);
while(true){
if((i__35672 < size__4610__auto__)){
var item = cljs.core._nth(c__4609__auto__,i__35672);
cljs.core.chunk_append(b__35673,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-sm-6.col-md-4.col-lg-3","div.col-12.col-sm-6.col-md-4.col-lg-3",-1691402023),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.item-btn","button.item-btn",1314848212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (i__35672,item,c__4609__auto__,size__4610__auto__,b__35673,s__35671__$2,temp__5753__auto__,listContainer){
return (function (){
return cljs.core.reset_BANG_(sustainability_shop_fe.map.selectedLocation,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(item));
});})(i__35672,item,c__4609__auto__,size__4610__auto__,b__35673,s__35671__$2,temp__5753__auto__,listContainer))
], null),sustainability_shop_fe.ui.brand_modal(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.clj__GT_js(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(item)))], null)));

var G__35711 = (i__35672 + (1));
i__35672 = G__35711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35673),sustainability_shop_fe$map$list_render_$_iter__35670(cljs.core.chunk_rest(s__35671__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35673),null);
}
} else {
var item = cljs.core.first(s__35671__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-12.col-sm-6.col-md-4.col-lg-3","div.col-12.col-sm-6.col-md-4.col-lg-3",-1691402023),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.item-btn","button.item-btn",1314848212),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (item,s__35671__$2,temp__5753__auto__,listContainer){
return (function (){
return cljs.core.reset_BANG_(sustainability_shop_fe.map.selectedLocation,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(item));
});})(item,s__35671__$2,temp__5753__auto__,listContainer))
], null),sustainability_shop_fe.ui.brand_modal(item)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.clj__GT_js(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(item)))], null)),sustainability_shop_fe$map$list_render_$_iter__35670(cljs.core.rest(s__35671__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(cljs.core.deref(sustainability_shop_fe.map.geoJsonData)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)),(0))));
})()], null);
});
});
sustainability_shop_fe.map.turn_realtime_db_to_geojson = (function sustainability_shop_fe$map$turn_realtime_db_to_geojson(flat_data){
return cljs.core.clj__GT_js(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"FeatureCollection",new cljs.core.Keyword(null,"features","features",-1146962336),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"Feature",new cljs.core.Keyword(null,"properties","properties",685819552),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"phone","phone",-763596057),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"city","city",-393302614),new cljs.core.Keyword(null,"production","production",1781416239),new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"isBrickAndMortar","isBrickAndMortar",1736904982),new cljs.core.Keyword(null,"materials","materials",2036902582),new cljs.core.Keyword(null,"design","design",1241338903),new cljs.core.Keyword(null,"website","website",649297111),new cljs.core.Keyword(null,"hours","hours",58380855),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"country","country",312965309)],[new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"phone","phone",-763596057).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"production","production",1781416239).cljs$core$IFn$_invoke$arity$1(i),cljs.core.keys(i),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"isBrickAndMortar","isBrickAndMortar",1736904982).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"materials","materials",2036902582).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"design","design",1241338903).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"website","website",649297111).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"hours","hours",58380855).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"country","country",312965309).cljs$core$IFn$_invoke$arity$1(i)]),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"Point",new cljs.core.Keyword(null,"coordinates","coordinates",-1225332668),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"long","long",-171452093).cljs$core$IFn$_invoke$arity$1(i),new cljs.core.Keyword(null,"lat","lat",-580793929).cljs$core$IFn$_invoke$arity$1(i)], null)], null)], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"name","name",1843675177),(function (p1__35680_SHARP_,p2__35681_SHARP_){
return cljs.core.compare(p1__35680_SHARP_.toLowerCase(),p2__35681_SHARP_.toLowerCase());
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(i,(1));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (i){
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.map_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(i,(1)));
if(and__4210__auto__){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(i,(1)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(i,(1));
} else {
return null;
}
}),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(flat_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))))))], null)], null));
});
sustainability_shop_fe.map.list_of_brands = (function sustainability_shop_fe$map$list_of_brands(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),sustainability_shop_fe.map.list_render], null));
});
sustainability_shop_fe.map.initialize_location_handling = (function sustainability_shop_fe$map$initialize_location_handling(mapbox){
var control = (new L.Control());
var BackToList = L.Control.extend(({"onAdd": (function (map){
var p = L.DomUtil.create("p");
var text = document.createTextNode("List");
var di = p.appendChild(text);
var div = p.addEventListener("click",(function (){
return cljs.core.reset_BANG_(sustainability_shop_fe.map.mode,"list");
}));
return p;
}), "onRemove": (function (map){
return console.log("onRemove");
})}));
var MyGeolocation = L.Control.extend(({"onAdd": (function (map){
var image = L.DomUtil.create("img");
var di = image.setAttribute("src","./img/GroupS.png");
var bi = image.setAttribute("width","30px");
var bii = image.setAttribute("height","30px");
var div = image.addEventListener("click",(function (){
if(cljs.core.truth_(navigator.geolocation)){
var geolocation = navigator.geolocation;
return geolocation.getCurrentPosition((function (position){
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;
var latlng = ({"lat": latitude, "lng": longitude});
var accuracy = position.coords.accuracy;
var myIcon = shadow.js.shim.module$leaflet.divIcon(({"className": "my-div-icon", "html": " test "}));
if(cljs.core.truth_(mapbox)){
shadow.js.shim.module$leaflet.marker(latlng,({"icon": myIcon})).addTo(cljs.core.deref(sustainability_shop_fe.map.mapBox));

return mapbox.flyTo(latlng);
} else {
return null;
}
}),(function (e){
return e;
}),({"enableHighAccuracy": true}));
} else {
return console.log("Geolocation is not supported by your browser");
}
}));
return image;
}), "onRemove": (function (map){
return console.log("onRemove");
})}));
var MyGeolocationControl = (new MyGeolocation());
var BackToListControl = (new BackToList());
mapbox.zoomControl.setPosition("bottomright");

MyGeolocationControl.setPosition("bottomright").addTo(mapbox);

return BackToListControl.setPosition("bottomright").addTo(mapbox);
});
sustainability_shop_fe.map.map_component = (function sustainability_shop_fe$map$map_component(){
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var mapbox = shadow.js.shim.module$leaflet.map("mapid",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gestureHandling","gestureHandling",483431293),true], null));
cljs.core.reset_BANG_(sustainability_shop_fe.map.mapBox,mapbox);

sustainability_shop_fe.map_utils.initialize_map(mapbox);

sustainability_shop_fe.map.initialize_location_handling(mapbox);

console.log("component-did-mount",JSON.parse(cljs.core.deref(sustainability_shop_fe.map.geoJsonData)));

if((!(cljs.core.empty_QMARK_(cljs.core.deref(sustainability_shop_fe.map.geoJsonData))))){
sustainability_shop_fe.map.initialize_geo(cljs.core.deref(sustainability_shop_fe.map.mapBox),cljs.core.deref(sustainability_shop_fe.map.geoJsonData),false);

return sustainability_shop_fe.map.initialize_features_in_view_selection(cljs.core.deref(sustainability_shop_fe.map.mapBox),cljs.core.deref(sustainability_shop_fe.map.geoJsonData));
} else {
return sustainability_shop_fe.map.initialize_geo(cljs.core.deref(sustainability_shop_fe.map.mapBox),sustainability_shop_fe.map.yh,true);
}
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (){
console.log("component-did-update",JSON.parse(cljs.core.deref(sustainability_shop_fe.map.geoJsonData)),JSON.parse(cljs.core.deref(sustainability_shop_fe.openroute.directionCol)));

console.log("@mapBox",cljs.core.clj__GT_js(cljs.core.deref(sustainability_shop_fe.map.mapBox)));

cljs.core.deref(sustainability_shop_fe.map.global_geojsonLayer).remove();

sustainability_shop_fe.map.initialize_geo(cljs.core.deref(sustainability_shop_fe.map.mapBox),cljs.core.deref(sustainability_shop_fe.map.geoJsonData),false);

return sustainability_shop_fe.map.initialize_features_in_view_selection(cljs.core.deref(sustainability_shop_fe.map.mapBox),cljs.core.deref(sustainability_shop_fe.map.geoJsonData));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),sustainability_shop_fe.map.map_render], null));
});
sustainability_shop_fe.map.filter_locations = (function sustainability_shop_fe$map$filter_locations(locations){
if(clojure.string.blank_QMARK_(cljs.core.deref(sustainability_shop_fe.map.search_value))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35705_SHARP_){
return (!((p1__35705_SHARP_ == null)));
}),locations);
} else {
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35706_SHARP_){
return sustainability_shop_fe.map.includes_search_string(cljs.core.deref(sustainability_shop_fe.map.search_value),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"properties","properties",685819552).cljs$core$IFn$_invoke$arity$1(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__35706_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)))));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__35707_SHARP_){
return (!((p1__35707_SHARP_ == null)));
}),locations));
}
});
sustainability_shop_fe.map.map_page = (function sustainability_shop_fe$map$map_page(){
var mode = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("map");
var locations_in_map_view = sustainability_shop_fe.map.filter_locations(cljs.core.deref(sustainability_shop_fe.map.locationsInMap));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block relative py-16 h-full"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"block relative h-full"], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mode),"map"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sustainability_shop_fe.map.map_component,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sustainability_shop_fe.map.geoJsonData)),cljs.core.deref(sustainability_shop_fe.map.search_value)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"absolute block w-full bottom-6"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"h-24 z-10"], null),((cljs.core.empty_QMARK_(locations_in_map_view))?null:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sustainability_shop_fe.map.slick_slider,locations_in_map_view], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996)," block absolute w-full h-10 border-2 border-solid border-blue-600 text-blue-600 rounded-full py-1 px-4 font-medium mt-3 z-50 bg-white",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (evt){
return cljs.core.reset_BANG_(sustainability_shop_fe.map.search_value,evt.target.value);
})], null)], null)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sustainability_shop_fe.map.list_of_brands,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sustainability_shop_fe.map.geoJsonData))], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sustainability_shop_fe.ui.selected_location,cljs.core.deref(sustainability_shop_fe.map.selectedLocation),sustainability_shop_fe.map.selectedLocation], null)], null)], null);
});
sustainability_shop_fe.map.drawmap = (function sustainability_shop_fe$map$drawmap(snapshot){
return cljs.core.reset_BANG_(sustainability_shop_fe.map.geoJsonData,JSON.stringify(sustainability_shop_fe.map.turn_realtime_db_to_geojson(snapshot.val())));
});

//# sourceMappingURL=sustainability_shop_fe.map.js.map
