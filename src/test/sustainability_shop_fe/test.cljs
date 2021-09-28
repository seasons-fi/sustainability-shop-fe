(ns sustainability-shop-fe.test
  (:require [cljs.test :refer (deftest is use-fixtures testing)]
            [sustainability-shop-fe.map-utils :refer [to-lowercase includes-search-string]]))


(deftest test-regex
  (testing "creating note"
    (is (= (to-lowercase "Aino")
           "aino"))
    (is (= (includes-search-string "nanso" "n")
           true))
    (is (= (includes-search-string "nanso" "nanso")
           true))
    (is (= (includes-search-string "Aino" "aino")
           true))
    (is (= (includes-search-string "aino" "a")
           true))
    (is (= (includes-search-string "Aino" "a")
           true))
    (is (= (includes-search-string "nnn" "n")
           true))))