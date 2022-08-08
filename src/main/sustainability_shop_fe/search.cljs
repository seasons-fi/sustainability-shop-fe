(ns sustainability-shop-fe.search
  (:require [sustainability-shop-fe.state :refer [reset-logger]]))

;; TODO: make search comme separated
(defn search-input [state-app]
 [:form {:action ""
         :on-submit (fn [e] 
                   (. e preventDefault))} 
  [:input {:class "block h-12 lg:h-16 border-2 border-solid border-blue-600 text-blue-600 rounded-full py-1 px-4 font-medium z-50 bg-white bottom-0 w-full" 
           :type "search"
           :placeholder "Search by name, address, city, category etc."
           :value (:search-value @state-app)
           :autoComplete "on"
           :on-focus (fn [evt] (reset-logger state-app "searchSelected" true "set search to focus")) 
           ;; :on-blur (fn [evt] (reset-logger state-app "searchSelected" false "set search to focus"))
           :on-change (fn [evt]
                        (try
                          (. (:mapBox @state-app) (fitBounds (. (:global-geojsonLayer @state-app) getBounds)))
                          (throw (js/Error. "Oops")) 
                         (catch :default e
                           e))
                                  ;; (. (:mapBox @state-app) (setZoom 12))
                        (reset! state-app (assoc-in @state-app [:search-value] (-> evt .-target .-value))))}]])