develop:
	npx webpack serve

build:
	rm -rf dist
	NODE_ENV=production npx webpack