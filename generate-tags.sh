#!/bin/bash

set -euo pipefail

function check_and_tag() {
  VERSION=$(node -p "require('./packages/$1/package.json').version")
  if git tag | grep "$1@$VERSION" >/dev/null; then
    echo "$1@$VERSION already exists"
  else
    echo "Tagging $1@$VERSION"
    git tag "$1@$VERSION"
    git push --tags
  fi
}

git push

check_and_tag "eslint"
check_and_tag "oxfmt"
check_and_tag "oxlint"
