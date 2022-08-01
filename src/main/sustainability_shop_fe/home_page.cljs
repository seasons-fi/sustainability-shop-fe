(ns sustainability-shop-fe.home-page
  (:require [sustainability-shop-fe.slick-slider :refer [slick-slider-home]]
            ;; [sustainability-shop-fe.search :refer [search-input]]
            [sustainability-shop-fe.navigation :refer [navigation]]
            [sustainability-shop-fe.list-component :refer [list-render]]
            [sustainability-shop-fe.map.map-utils :refer [includes-search-string]]
            [sustainability-shop-fe.filters :refer [filterLabel filterComponent filteredList]]
            [sustainability-shop-fe.grid :refer [grid-wrapper grid-item]]))



(defn categorySection [title description item]
  [:section {:class "w-1/2 my-14 pr-8 h-min-content"} 
   [:h2 {:class "text-5xl text-blue-600 font-medium "} title
    [:img {:class "inline align-middle h-full" 
           :src "/img/arrow.svg"}]] 
   [:p {:class "text-base text-blue-600 font-light my-6" } description] 
   item])




(defn home-page [state-app]
  [:<>
   [navigation]
   [:div {:class "block md:hidden"}
    (if-not (or (clojure.string/blank? (:search-value @state-app)) (empty? (:search-value @state-app))) 
      [:div 
       (let [filteredItems (filteredList state-app
                                      (if (clojure.string/blank? (:search-value @state-app))
                                        (:list @state-app)
                                        (filter
                                         (fn [l]
                                           (let [name (:name l)
                                                 city (:city l)
                                                 address (:address l)
                                                 category (:category l)
                                                 subcategory (:category l)]
                                             (or
                                              (when (not (nil? address))
                                                (includes-search-string
                                                 address
                                                 (:search-value @state-app)))
                                              (when (not (nil? city))
                                                (includes-search-string
                                                 city
                                                 (:search-value @state-app)))
                                              (when (not (nil? category))
                                                (includes-search-string
                                                 category
                                                 (:search-value @state-app)))
                                              (when (not (nil? subcategory))
                                                (includes-search-string
                                                 subcategory
                                                 (:search-value @state-app)))
                                              (includes-search-string
                                               name
                                               (:search-value @state-app)))))
                                         (:list @state-app))))]
        [grid-wrapper
             (map
              (fn [i] [grid-item i])
              filteredItems)])]
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
                         :links ["collection points" "recycling centers"]}]])
    ]
   [:div {:class "hidden md:block p-12"}
    (let [filteredItems (filteredList state-app
                                      (if (clojure.string/blank? (:search-value @state-app))
                                        (:list @state-app)
                                        (filter
                                         (fn [l]
                                           (let [name (:name l)
                                                 city (:city l)
                                                 address (:address l)
                                                 category (:category l)
                                                 subcategory (:category l)]
                                             (or
                                              (when (not (nil? address))
                                                (includes-search-string
                                                 address
                                                 (:search-value @state-app)))
                                              (when (not (nil? city))
                                                (includes-search-string
                                                 city
                                                 (:search-value @state-app)))
                                              (when (not (nil? category))
                                                (includes-search-string
                                                 category
                                                 (:search-value @state-app)))
                                              (when (not (nil? subcategory))
                                                (includes-search-string
                                                 subcategory
                                                 (:search-value @state-app)))
                                              (includes-search-string
                                               name
                                               (:search-value @state-app)))))
                                         (:list @state-app))))]
      [:<>
       (if (:searchSelected @state-app)
         [:div {:class "h-auto w-full transition-all ease-in-out delay-150	"}
          (when (clojure.string/blank? (:search-value @state-app))
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
                [list-render  "nanso"]
                ]]
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
              ;; [categorySection 
              ;;  "Recycle"
              ;;  "One mans trash is another mans treasure. We recycle, we donate and we make sure the clothes don `t 
              ;;   go to waste, right?"]
              ]
             ;;TODO: add when events are added
             ;; [:h1 {:class "text-8xl text-blue-600 font-medium "} "Experience"]
             [filterComponent state-app]])
          
          [:section {:class "flex flex-wrap gap-2  border-b-2 border-blue-600 border-solid"} 
           [:div {:class "border-r-2 border-blue-600 border-solid pr-6"}
            [:h2 {:class "block text-blue-600 my-3"} "Applied filters: " (count (:filter @state-app))]
            (when-not (or (clojure.string/blank? (:search-value @state-app)) (empty? (:search-value @state-app)))
              [:p {:class "inline-block w-auto bg-blue-600 text-white px-3 py-1"} (:search-value @state-app)])
            (map
             (fn [item] [:p {:class "inline-block w-auto bg-blue-600 text-white px-3 py-1"}
                         (if (string? (:value item))
                           (:value item)
                           (:criteria item))])
             (:filter @state-app))]
           [:div [:h2 {:class "block text-blue-600 my-3 "} "Places: " (count filteredItems)]]]
          (when-not (empty? (:filter @state-app))
            [grid-wrapper
             (map
              (fn [i] [grid-item i])
              filteredItems)])

          ;; [list-render (map (:geoJsonData @state-app)) "nanso"]
          ]
       [:<>
        [:section {:class "py-12"}

         [:h1 {:class "text-8xl text-blue-600 font-medium "}
          "Umberto Eco is a discovery platform for sustainable fashion choices in Helsinki."]]
        [:section {:class "flex flex-wrap gap-2  border-b-2 border-blue-600 border-solid"}
         [filterComponent state-app]
         [:div {:class "border-r-2 border-blue-600 border-solid pr-6"}
          [:h2 {:class "block text-blue-600 my-3"} "Applied filters: " (count (:filter @state-app))]
          (when-not (or (clojure.string/blank? (:search-value @state-app)) (empty? (:search-value @state-app)))
            [:p {:class "inline-block w-auto bg-blue-600 text-white px-3 py-1"} (:search-value @state-app)])
          (map
           (fn [item] [:p {:class "inline-block w-auto bg-blue-600 text-white px-3 py-1"}
                       (if (string? (:value item))
                         (:value item)
                         (:criteria item))])
           (:filter @state-app))]
         [:div [:h2 {:class "block text-blue-600 my-3 "} "Places: " (count filteredItems)]]]
        (when-not (empty? (:filter @state-app))
          [grid-wrapper
           (map
            (fn [i] [grid-item i])
            filteredItems)])]
       )
       
       
       ])]])
         
      
      