// Library imports
import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

// Actions
import actions from '../actions';

class UserList extends React.Component {
	componentWillMount() {
		this.props.dispatch({type: actions.user.list.requested});
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
