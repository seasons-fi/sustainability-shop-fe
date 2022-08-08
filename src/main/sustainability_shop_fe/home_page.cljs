(ns sustainability-shop-fe.home-page
  (:require [sustainability-shop-fe.slick-slider :refer [slick-slider-home]]
            [reagent.core :as reagent :refer [atom]]
            [sustainability-shop-fe.navigation :refer [navigation]]
            [sustainability-shop-fe.list-component :refer [list-render]]
            [sustainability-shop-fe.map.map-utils :refer [filter-locations-by-search-list-fuse]]
            [sustainability-shop-fe.map.leaflet-map-component :refer [map-component]]
            [sustainability-shop-fe.filters :refer [filteredList fullFilters]]
            [sustainability-shop-fe.grid :refer [grid-wrapper grid-item]]))



(defn categorySection [title description item]
  [:section {:class "w-1/2 my-14 pr-8 h-min-content"} 
   [:h2 {:class "text-5xl text-blue-600 font-medium "} title
    [:img {:class "inline align-middle h-full" 
           :src "/img/arrow.svg"}]] 
   [:p {:class "text-base text-blue-600 font-light my-6" } description] 
   item])



(defn home-page [state-app]
  (let [emptySearchValue (or (clojure.string/blank? (:search-value @state-app)) (empty? (:search-value @state-app)))
        filteredItems (filteredList state-app (filter-locations-by-search-list-fuse state-app))]
   [:<>
    [navigation]
    ;; MOBILE
    [:div {:class "block md:hidden"} 
     (if-not emptySearchValue
       [:section {:class "p-3"}
        [grid-wrapper
         (map
          (fn [i] [grid-item i])
          filteredItems)]]
       [:<>
        [:section {:class "p-6 pt-12 h-screen"}
           [:h1 {:class "text-6xl text-blue-600 font-medium text-justify	"}
            "Umberto Eco is a discovery platform for sustainable fashion choices in Helsinki."]]
        
         [slick-slider-home [{:id 1
                            :name "duce"
                            :link "reduce"
                            :links ["sustainable brands" "clothing rentals"]}
                           {:id 2
                            :name "use"
                            :link "reuse"
                            :links ["second hand" "flea markets" "vintage stores"]}
                           {:id 3
                            :name "pair"
                            :link "repair"
                            :links ["atelies"]}
                           {:id 4
                            :name "cycle"
                            :link "recycle"
                            :links ["collection points" "recycling centers"]}]]])]
    ;; DESKTOP
    [:div {:class "hidden md:block px-12 py-3 xl:p-12"}
     [:<>
      (when (:searchSelected @state-app)
        [:div {:class "h-auto w-full transition-all ease-in-out delay-150	"}
         (when emptySearchValue
           [:<>
             ;; [:p {:class "text-7xl text-blue-600 font-medium "} "Search by address, city, name, items, or category: vintage, brand, recycling etc. or..."]
            [:h1 {:class "text-8xl text-blue-600 font-medium "} "Explore"]
             ;; [:h5 "the categories"]
            [:div {:class "w-full flex flex-wrap"}
             [categorySection
              "Reduce"
              "We have the power to choose brands that reduce carbon emissions, 
                energy usage, water consumption and their overall environmental impact. 
                So why wouldn`t we buy from these brands that produce clothes that last longer, 
                will serve us more and makes us even more fashionable?"
              [:<>
               [list-render  "Voglia"]
               [list-render  "nanso"]]]
             [categorySection
              "Reuse"
              "Here`s an overview of places where we buy pre-loved items with history and character to them. 
                An alternative money saving option to be a sustainable it-girl."
              [:<>
               [list-render  "Relove"]
               [list-render "UFF"]]]
              ;; [categorySection 
              ;;  "Repair"
              ;;  "We`re not good at goodbyes so that`s why we repair and restore our favourite items. Not always by 
              ;;   ourselves but with the help of these experts below."]
              [categorySection 
               "Recycle"
               "One mans trash is another mans treasure. We recycle, we donate and we make sure the clothes don `t 
                go to waste, right?"
               [:<>
               [list-render  "Recci"]]]
             ]
             ;;TODO: add when events are added
             ;; [:h1 {:class "text-8xl text-blue-600 font-medium "} "Experience"]
             ;; [filterComponent state-app]
            ])])
        [:<>
         (when emptySearchValue
          [:section {:class "py-3 xl:py-12"}
           [:h1 {:class "text-8xl text-blue-600 font-medium "}
            "Umberto Eco is a discovery platform for sustainable fashion choices in Helsinki."]]) 
         [:div {:class "my-6"}
          [map-component "60.5vh" (:geoJsonData @state-app) (:search-value @state-app) (:selectedLocation @state-app) (:filter @state-app)]]
         [fullFilters state-app emptySearchValue filteredItems]
         (when-not (empty? (:filter @state-app))
           [grid-wrapper
            (map
             (fn [i] [grid-item i])
             filteredItems)])]]]]))
         
      
      