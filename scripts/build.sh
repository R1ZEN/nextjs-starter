#!/usr/bin/bash

set -e

export NODE_ENV=production

rm -rf ./dist

echo "> Build Desktop/Mobile App"
rm -rf $PWD/projection/desktop/.next
rm -rf $PWD/projection/mobile/.next

npx next build $PWD/projection/desktop
npx next build $PWD/projection/mobile

mkdir $PWD/dist

echo "> Build Server App"
mkdir $PWD/dist/server
npx babel $PWD/server --extensions '.ts' --config-file $PWD/configs/babel.config.server.js -d $PWD/dist/server

echo "> Copy Desktop Build"
mkdir $PWD/dist/desktop
cp -R $PWD/projection/desktop/.next $PWD/dist/desktop

echo "> Copy Mobile Build"
mkdir $PWD/dist/mobile
cp -R $PWD/projection/mobile/.next $PWD/dist/mobile
