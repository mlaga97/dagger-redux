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

version () {
  RELEASE=`git describe --tags | sed 's|release_||; s|-.*||'`
  BRANCH=`git rev-parse --abbrev-ref HEAD`
  COMMIT=`git rev-parse --short HEAD`

  REVISION_DATE=`git log -n1 --pretty=%at HEAD`
  VERSION_STRING="v$RELEASE-$BRANCH.$COMMIT"
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

package_dev () {
  #production
  version

  NAME="dagger-redux_$VERSION_STRING"
  cd build
  tar -cf ../$NAME.tar *
  cd ..
  chmod 777 $NAME.tar
}

package_release () {
  #production
  version

  NAME="dagger-redux_$RELEASE"
  cd build
  tar -cf ../$NAME.tar *
  cd ..
  chmod 777 $NAME.tar
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
  package_dev)
    package_dev
    exit;;
  package_release)
    package_release
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
