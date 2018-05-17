// Library imports
import React from 'react';
import {connect} from 'react-redux';

// Actions
import {AUTH_STATUS_REQUESTED} from '../actions/allActions';

// Components
import PrivateApp from './PrivateApp';
import PublicApp from './PublicApp';

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

