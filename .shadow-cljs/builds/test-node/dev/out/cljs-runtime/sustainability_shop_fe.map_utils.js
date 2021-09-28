goog.provide('sustainability_shop_fe.map_utils');
sustainability_shop_fe.map_utils.to_lowercase = (function sustainability_shop_fe$map_utils$to_lowercase(str){
return clojure.string.lower_case(str);
});
sustainability_shop_fe.map_utils.includes_search_string = (function sustainability_shop_fe$map_utils$includes_search_string(str,search){
var matches = cljs.core.re_matches(cljs.core.re_pattern(search),sustainability_shop_fe.map_utils.to_lowercase(str));
if(((clojure.string.includes_QMARK_(sustainability_shop_fe.map_utils.to_lowercase(str),search)) || ((((!(clojure.string.blank_QMARK_(matches)))) || (cljs.core.seq(matches)))))){
return true;
} else {
return false;
}
});

//# sourceMappingURL=sustainability_shop_fe.map_utils.js.map
