#!/bin/bash

set -e

export BUILD_DESKTOP_APP_PATH=$PWD/dist/desktop
export BUILD_MOBILE_APP_PATH=$PWD/dist/mobile
export PORT=3000

node $PWD/dist/server/app.js
