// Library imports
import React from 'react';
import {connect} from 'react-redux';

// Actions
import {AUTH_LOGOUT_REQUESTED} from '../actions/allActions';

class LogoutPage extends React.Component {
	componentWillMount() {
		this.props.dispatch({type: AUTH_LOGOUT_REQUESTED});
	}

	render() {
		if(this.props.auth.status) {
			return(
				<div>Logging out...</div>
			);
		} else {
			this.props.history.push("/");
			return(
				<div>Logged out!</div>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch: dispatch,
	};
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LogoutPage);
