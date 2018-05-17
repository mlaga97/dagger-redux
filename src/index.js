// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// Bootstrap Stuff
import 'bootstrap/dist/css/bootstrap.min.css';

// Configuration stuff
import configureStore from './configureStore';

// Components
import App from './components/App';

// Actions
import {AUTH_STATUS_REQUESTED} from './actions/allActions.js';

// Redux Store
let store = configureStore();

// Get stuff from the server
store.dispatch({type: AUTH_STATUS_REQUESTED});

// Do the routing and then render
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	,
	document.getElementById('root')
);
