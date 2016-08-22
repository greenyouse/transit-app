#!/bin/bash

polymer build;
cp -r build/bundled /tmp;
git checkout gh-pages
rm -r *
mv /tmp/bundled/* .
rmdir /tmp/bundled
