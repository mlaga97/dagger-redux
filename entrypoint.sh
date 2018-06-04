#!/bin/bash

cd /dagger

install () {
  npm install
}

test_install () {
  if [ -z "$(ls -A node_modules)" ]; then
    install
  fi
}

start () {
  npm start
}

build () {
  npm run-script build
}

lint () {
  npx eslint .
}

development () {
  install
  start
}

production () {
  if [ "$PUBLIC_URL" = "" ]; then
    echo 'ERROR: Need to specify a PUBLIC_URL';
  fi

  install
  build
}

# Prefer parameters to environment
case $1 in
  lint)
    test_install
    lint
    exit;;
  bash)
    /bin/bash
    exit;;
  development)
    development
    exit;;
  production)
    production
    exit;;
esac

case $REACT_APP_ENVIRONMENT in
  development)
    development
    exit;;
  production)
    production
    exit;;
esac
