start:
	webpack-dev-server --hot --inline &
	sleep 5 && open http://localhost:8080/webpack-dev-server/

build:
	webpack --display-error-details
