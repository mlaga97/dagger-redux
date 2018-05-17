// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';

// Actions
import {AUTH_STATUS_REQUESTED} from '../actions/allActions';

// Components
import PrivateApp from './PrivateApp';
import PublicApp from './PublicApp';
import UserList from './UserList';
import LoginForm from './LoginForm';
import LogoutPage from './LogoutPage';

// Helpers
function HomePage() {
	return <p>Hello.</p>
}

let divStyle = {
	'paddingLeft': '15px',
	'paddingRight': '15px',
	'paddingBottom': '15px',
}

// The main layout for the application
class App extends React.Component {
	componentWillMount() {
		// Do stuff that the entire application needs
		this.props.dispatch({type: AUTH_STATUS_REQUESTED});
	}

	render() {
		if(!this.props.auth) {
			return (
				<div>Getting auth data...</div>
			);
		} else {
			if(!this.props.auth.status) {
				if(window.location.pathname !== '/login') {
					window.location.pathname = '/login';
				}

				return <PublicApp />;
			} else {
				return <PrivateApp />;
			}
		}
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth,
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch: dispatch,
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

