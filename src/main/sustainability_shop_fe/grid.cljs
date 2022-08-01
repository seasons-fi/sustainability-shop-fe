(ns sustainability-shop-fe.grid)


(defn grid-wrapper [children]
  [:div {:class "relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 grid-shapes"}
   children])

(defn grid-item [item]
  [:article  {:class "relative block w-30 h-auto  overflow-hidden" :key {:id item}}
              [:div {:class "relative block w-full h-64 shadow bg-gray-300"
                     :style #js {:backgroundImage (str "url('" (:image item) "')")
                     }}]
              [:div {:class "py-6"}
               [:h1 {:class "text-xl font-medium text-blue-600 font-avenir-heavy"} (:name item)]
               (if-not (:onlineOnly item)
                [:address {:class "text-lg text-blue-600 font-garamond not-italic font-light inline mr-6"} (:address item)]
                 [:span {:class "text-lg text-blue-600 font-garamond not-italic font-light inline mr-6"} "online"])
               [:a {:class "inline-block text-lg text-blue-600 font-garamond not-italic font-light"
                    :href "#"} 
                [:img {:class "inline-block h-2 "
                       :src "/img/arrow.svg"}]]
               ]])