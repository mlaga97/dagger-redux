if [ "$UID" = "0" ]; then
	echo 'Permissions are probably about to get wrecked.'
	echo 'Run `export UID` before the command to avoid this.'
	echo
fi

if [ "$1" = "build" ] || [ "$REACT_APP_ENVIRONMENT" = "production" ]; then
	echo "RUNNING PRODUCTION BUILD"
	if [ "$PUBLIC_URL" = "" ]; then
		echo 'ERROR: Need to specify a PUBLIC_URL';
	fi

	cd /dagger
	npm install
	npm run-script build
elif [ "$1" = "develop" ] || [ "$REACT_APP_ENVIRONMENT" = "development" ]; then
	echo "RUNNING DEVELOPMENT BUILD"

	cd /dagger
	npm install
	npm start
else
	echo "REACT_APP_ENVIRONMENT was set to: $REACT_APP_ENVIRONMENT"
	echo "Please specify a build mode!"
fi
