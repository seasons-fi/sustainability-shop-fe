# sustainability-shop-fe

Front-End written with ClojureScript and shadow for seasons.eco project

## Setup

To get an interactive development environment run:

    yarn install
    shadow-cljs watch app

and open your browser at [http://localhost:8080](http://localhost:8080/).

This will auto compile and send all changes to the browser without the
need to reload.
And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL.

## Data and State management

In order to receive a JSON file with map features, you need to have a backend server running.
http://localhost:443/ localhost or
http://52.47.131.189:443/
