(ns sustainability-shop-fe.home-page
  (:require [sustainability-shop-fe.slick-slider :refer [slick-slider]]))

(defn home-page [{:keys [links]} & children]
  [:div {:class "block relative bottom"}
   [slick-slider [{:id 1
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
                   :links ["collection points" "recycling centers"]}]]
   ])