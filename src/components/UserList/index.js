// Library imports
import React from 'react';
import { connect } from 'react-redux';

// Components
import List from './List';

// Actions
import actions from '../../actions';

class UserList extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: actions.user.all.requested,
    });
  }

  render() {
    if (!this.props.users.all) {
      return <div>Retrieving user list...</div>;
    }

    return <List users={this.props.users.all}/>;
  }
}

export default connect(
  state => ({
    users: state.users,
  }),
  dispatch => ({
    dispatch,
  }),
)(UserList);
