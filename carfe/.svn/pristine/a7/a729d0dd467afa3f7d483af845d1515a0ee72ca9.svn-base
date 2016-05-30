#!/bin/sh
PRODUCT_NAME="chuilei"
APP_NAME="chuilei"
rm -rf output
mkdir -p output/template/$APP_NAME
mkdir -p output/$APP_NAME/static/carmispage

cp -r dist/carmispage/* output/$APP_NAME/static/carmispage
cp -r dist/carmispage/carmis.tpl output/template/$APP_NAME

cd output

find ./ -name .svn -exec rm -rf {} \;

find ./ -name .DS_Store -exec rm -rf {} \;

tar cvzf $APP_NAME.tar.gz template
tar cvzf static-$APP_NAME.tar.gz $APP_NAME


rm -rf $APP_NAME template

cd -

# rm -rf output
# rm -rf build

echo '###########################################'
echo 'chuilei carmispage build success!'
echo '###########################################'