.PHONY: all say_hello generate clean

all: load_post_css work_file

say_hello:
	echo "Hello World"
generate:
	@echo "Creating empty text files..."
	touch file-{1..10}.txt

clean:
	@echo "Cleaning up..."
	rm *.txt

load_post_css:
	npm i -D postcss postcss-cli

work_file:
	npx postcss resources/public/css/style.scss --parser postcss-scss --use postcss-node-sass autoprefixer --output resources/public/css/main.css --watch
