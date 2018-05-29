// Library imports
import React from 'react';
import {connect} from 'react-redux';

// Actions
import actions from '../actions';

// Components
import App from './App';
import PublicApp from './PublicApp';

// The main layout for the application
class AuthRedirector extends React.Component {
	componentWillMount() {
		this.props.dispatch({type: actions.auth.status.requested});
	}

	render() {
		if(!this.props.auth) {
			return <div>Getting auth data...</div>;
		} else {
			if(!this.props.auth.status) {
				return <PublicApp />;
			} else {
				return <App />;
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
)(AuthRedirector);
