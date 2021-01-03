#!/usr/bin/bash

set -e

export PLATFORM=$1
export BUILD_DESKTOP_APP_PATH=$PWD/projection/desktop
export BUILD_MOBILE_APP_PATH=$PWD/projection/mobile

if [[ $1 == "desktop" ]]; then
#  export PORT=3001
  rm -rf $PWD/projection/desktop/.next
  next dev $PWD/projection/desktop -p 3001
elif [[ $1 == "mobile" ]]; then
#  export PORT=3002
  rm -rf $PWD/projection/mobile/.next
  next dev $PWD/projection/mobile -p 3002
fi;

#export TS_NODE_FILES="true"
#node --inspect -r ts-node/register $PWD/server/app.ts
