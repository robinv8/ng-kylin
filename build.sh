#!/usr/bin/env bash

rm -rf ./publish

cp -r src/app/components src/temp_components

node ./html.merge.js

echo 'Generating entry file using Angular compiler'
$(npm bin)/ngc -p tsconfig-aot.json
rm -rf src/temp_components

echo 'Bundling to es module'
$(npm bin)/rollup -c rollup-config.js
rm -rf publish/src/*.js
rm -rf publish/src/**/*.js
sed -e "s/from '.\//from '.\/src\//g" publish/src/index.d.ts > publish/index.d.ts
sed -e "s/\":\".\//\":\".\/src\//g" publish/src/index.metadata.json > publish/index.metadata.json
rm publish/src/index.d.ts publish/src/index.metadata.json

echo 'Copying package.json'
cp package.json publish/package.json

