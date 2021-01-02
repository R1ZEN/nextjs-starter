#!/usr/bin/bash

set -e

export PLATFORM=$1
export BUILD_DESKTOP_APP_PATH=$PWD/projection/desktop
export BUILD_MOBILE_APP_PATH=$PWD/projection/mobile

if [[ $1 == "desktop" ]]; then
  export PORT=3001
elif [[ $1 == "mobile" ]]; then
  export PORT=3002
fi;

rm -rf $PWD/projection/desktop/.next
rm -rf $PWD/projection/mobile/.next

export TS_NODE_FILES="true"
node --inspect -r ts-node/register $PWD/server/app.ts
