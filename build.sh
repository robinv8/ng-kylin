#!/usr/bin/env bash

rm -rf ./publish

cp -r src/app/components src/temp_components

node ./html.merge.js

echo 'Generating entry file using Angular compiler'
$(npm bin)/ngc -p tsconfig-aot.json
rm -rf src/temp_components

echo 'Bundling to es module'
export ROLLUP_FORMAT=es
$(npm bin)/rollup -c rollup-config.js
rm -rf publish/src/*.js
rm -rf publish/src/**/*.js
sed -e "s/from '.\//from '.\/src\//g" publish/src/index.d.ts > publish/index.d.ts
sed -e "s/\":\".\//\":\".\/src\//g" publish/src/index.metadata.json > publish/index.metadata.json
rm publish/src/index.d.ts publish/src/index.metadata.json

echo 'Transpiling es module to es5'
$(npm bin)/tsc --allowJs --importHelpers --target es5 --module es2015 --outDir publish/esm5 publish/esm15/index.js

echo 'Bundling to umd module'
export ROLLUP_FORMAT=umd
$(npm bin)/rollup -c rollup-config.js

echo 'Minifying umd module'
$(npm bin)/uglifyjs publish/bundles/ng-kylin.umd.js --output publish/bundles/ng-kylin.umd.min.js

echo 'Copying package.json'
cp package.json publish/package.json

