#!/usr/bin/env bash

NAME=$1

echo $NAME

rm ./$NAME.crx
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --pack-extension=./src --pack-extension-key=./$NAME.pem
mv ./src.crx ./$NAME.crx

rm ./$NAME.zip
zip -r -X $NAME.zip ./src

echo "$NAME Package complete!"