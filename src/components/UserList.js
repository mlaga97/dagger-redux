// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import _ from 'lodash';

// Actions
import {USER_LIST_REQUESTED} from '../actions/allActions';

class UserList extends React.Component {
	componentWillMount() {
		this.props.dispatch({type: USER_LIST_REQUESTED});
	}

	render() {
		if(!this.props.userData) {
			return (
				<div>
					Retrieving user list...
				</div>
			);
		} else {
			let users = this.props.userData;
			console.log(this.props.userData);
			return(
				<div className='userList'>
					{
						users.map((user, index) => {
							console.log(user[1]);
							return (
								<div key={user}>
									<Link to={'/user/' + user}>{user}</Link>
								</div>
							);
						})
					}
				</div>
			);
		}
	}
}

function mapStateToProps(state) {
	return {
		settings: state.settings,
		userData: state.userData,
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
)(UserList);
