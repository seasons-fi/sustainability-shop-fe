(ns sustainability-shop-fe.navigation
  (:require [reitit.frontend.easy :as rfe]))

(defn navigation [{:keys [links]}]
  [:nav {:class "w-full relative px-3 pt-6 flex flex-row flex-no-wrap justify-between"}
   [:a {:class ""
        :href "/"} 
    ;; [:h1 {:class ""} "seasons."]
    [:img.max-50 {:src "/img/menu.svg"}]
    ]
   [:a {:class "border-2 border-solid border-blue-600 text-blue-600 rounded-full py-1 px-4 font-medium"
        :href "/map"}
    "map"]
   ])