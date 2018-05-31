// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import axios from 'axios';

// Bootstrap Stuff
import 'bootstrap/dist/css/bootstrap.min.css';

// Configuration stuff
import configureStore from './configureStore';

// Components
import AuthRedirector from './components';

// Axios configuration
// TODO: Somewhere else?
axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

// Redux Store
let store = configureStore();

// Do the routing and then render
ReactDOM.render(
	<Provider store={store}>
		<AuthRedirector />
	</Provider>
	,
	document.getElementById('root')
);
