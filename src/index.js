// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// Bootstrap Stuff
import 'bootstrap/dist/css/bootstrap.min.css';

// Configuration stuff
import configureStore from './configureStore';

// Components
import AuthRedirector from './components';

// Actions
import actions from './actions';

// Redux Store
let store = configureStore();

// Get stuff from the server
store.dispatch({type: actions.auth.status.requested});

// Do the routing and then render
ReactDOM.render(
	<Provider store={store}>
		<AuthRedirector />
	</Provider>
	,
	document.getElementById('root')
);
