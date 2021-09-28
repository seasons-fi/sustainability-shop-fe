(ns sustainability-shop-fe.ui
  (:require ["react-slick" :as rs :default Slider]
            [reagent.core :as reagent :refer [atom]]))

(defn h1 [title]
  [:h1 title])

(defn h2 [title class]
  [:h2 {:class class} title])

(defn h3 [title]
  [:h3 title])

(defn info [text]
  [:p.info text])



(defn slider [children]
  [:> Slider {:slidesToShow 2
              :infinite true}
   children])

(defn picture [src]
  [:picture
   (if (empty? src)
     [:img {:src "https://images.unsplash.com/photo-1504198458649-3128b932f49e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"}]
     [:img {:src src}])])

(defn brand-modal [item]
  [:<>
   (picture
    (:image (:properties item)))
   [:h3.bottom-text (clj->js (:name (:properties item)))]])





