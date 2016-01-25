start:
	webpack-dev-server --hot --inline

watch:
	webpack --display-error-details --watch

app:
	electron-packager . Sonos --platform=darwin --arch=x64 --ignore=node_modules  --dir=static --out=build --overwrite

open:
	open http://localhost:8080/webpack-dev-server
	make start
