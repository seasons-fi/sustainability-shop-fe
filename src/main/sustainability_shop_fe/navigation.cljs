(ns sustainability-shop-fe.navigation
  (:require [reitit.frontend.easy :as rfe]
            [sustainability-shop-fe.state :refer [state-app]]
            [sustainability-shop-fe.map.map-ui :refer [breadcrumbs]]
            [sustainability-shop-fe.search :refer [search-input]]
            [sustainability-shop-fe.filters :refer [filterLabel filterComponent filteredList]]
            [sustainability-shop-fe.styles :refer [styles]]
            [sustainability-shop-fe.mode :refer [modeSwitch]]))

;; TODO: create a sliding menu like this
;; https://codepen.io/plavookac/pen/qomrMw

(defn navigation [{:keys [links]}]
  [:nav {:class "w-full relative top-0 sticky z-30
                 px-3 md:px-12 pt-6 
                 flex flex-wrap
                 bg-white "} 
   
  ;;  [:p {:class "w-full font-garamond text-blue-600 text-xl text-center italic font-light"} "The list could surely go on, and there is nothing more wonderful than a list, instrument of wondrous hypotyposis."]
  ;;  [:div {:class "header h-12 border-2 text-blue-600 py-1 px-4 font-medium h-12 text-center super-z-2x w-2/12 lg:w-1/12"}
  ;;    [:input {:class "openSidebarMenu"
  ;;             :type "checkbox"
  ;;             :id "openSidebarMenu"}]
  ;;    [:label {:class "sidebarIconToggle text-center"
  ;;             :for "openSidebarMenu"}
  ;;     [:span "menu"]
  ;;     ;; [:div {:class "spinner diagonal part-1"}]
  ;;     ;; [:div {:class "spinner horizontal"}]
  ;;     ;; [:div {:class "spinner diagonal part-2"}]
  ;;     ]
  ;;    [:div {:id "sidebarMenu" :class "z-30"}
  ;;     [:div {:class "absolute top-60 p-12 w-full"}
  ;;      [:a {:class "w-full text-left" 
  ;;           :href (str "/" "reduce")}
  ;;       [:h1 {:class (:h1 styles)} "Reduce"]]
  ;;      [:a {:class "w-full text-left" 
  ;;           :href (str "/" "reuse")}
  ;;       [:h1 {:class (:h1 styles)} "Re-use"]]
  ;;      [:a {:class "w-full text-left" 
  ;;           :href (str "/" "repair")}
  ;;       [:h1 {:class (:h1 styles)} "Repair"]]
  ;;      [:a {:class "w-full text-left" 
  ;;           :href (str "/" "recycle")}
  ;;       [:h1 {:class (:h1 styles)} "Recycle"]]]]]
   [:h1 {:class "font-garamond text-blue-600 text-3xl md:text-3xl text-left font-light	w-8/12 lg:w-11/12 "} "Umberto Eco"] 
  ;;  [modeSwitch state-app]
   [:div {:class "w-full block mt-2 lg:mt-8 flex flex-wrap justify-between"}
    [:div {:class "w-full"}
     (search-input state-app)]
    ;; [:div {:class "w-1/6"}
    ;;  (modeSwitch state-app)] 
    ;; [:div {:class "w-4/6"}
    ;;  (breadcrumbs (:path (:match @state-app)))]
    ;; [:div {:class "w-full"}
    ;;  [filterComponent state-app]]
    ]
   
   ;; https://codepen.io/cyboc23/pen/NWqYyzx
  ;;  [:div {:class "w-full"} 
  ;;   [:section {:class "tags bg-blue-600"}
  ;;    [:div 
  ;;     [:section {:class "news-message tags bg-blue-600"}
  ;;           [:p {:class "w-full font-garamond text-white text-xl text-center italic font-light"} "The list could surely go on, and there is nothing more wonderful than a list, instrument of wondrous hypotyposis."]
  ;;           [:p {:class "w-full font-garamond text-white text-xl text-center italic font-light"} "The list could surely go on, and there is nothing more wonderful than a list, instrument of wondrous hypotyposis."]
  ;;         ] 
  ;;     [:section {:class "news-message tags bg-blue-600"}
  ;;            [:p {:class "w-full font-garamond text-white text-xl text-center italic font-light"} "The list could surely go on, and there is nothing more wonderful than a list, instrument of wondrous hypotyposis."]
  ;;           [:p {:class "w-full font-garamond text-white text-xl text-center italic font-light"} "The list could surely go on, and there is nothing more wonderful than a list, instrument of wondrous hypotyposis."]]
  ;;     ]]]
   ])