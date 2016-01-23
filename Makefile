start:
	webpack-dev-server --hot --inline

build:
	webpack --display-error-details

open:
	open http://localhost:8080/webpack-dev-server
	make start
