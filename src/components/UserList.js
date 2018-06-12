// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

// Actions
import actions from '../actions';

class UserList extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: actions.user.all.requested,
    });
  }

  render() {
    if (!this.props.users.all) {
      return (
        <div>
          Retrieving user list...
        </div>
      );
    }
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Active</th>
              <th>Admin</th>
              <th>Debug</th>
              <th>Tester</th>
            </tr>
          </thead>
          <tbody>
            {
                Object.keys(this.props.users.all).map((userID) => {
                  const user = this.props.users.all[userID];

                  return (
                    <tr key={user.id}>
                      <td>
                        <Link to={`/user/${user.id}`}>{user.id}</Link>
                      </td>
                      <td>{user.login.username}</td>
                      <td>{user.login.active ? 'Yes' : 'No'}</td>
                      <td>{user.flags.admin ? 'Yes' : 'No'}</td>
                      <td>{user.flags.debug ? 'Yes' : 'No'}</td>
                      <td>{user.flags.tester ? 'Yes' : 'No'}</td>
                    </tr>
                  );
                })
              }
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
