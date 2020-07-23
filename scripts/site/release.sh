#!/usr/bin/env sh
muld-tools build-site

gh-pages -d site --add
