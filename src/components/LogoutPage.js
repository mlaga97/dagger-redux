// Library imports
import React from 'react';
import { connect } from 'react-redux';

// Actions
import actions from '../actions';

class LogoutPage extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: actions.auth.logout.requested,
    });
  }

  render() {
    if (this.props.auth.status) {
      window.location.pathname = '/';
      return <div>Logging out...</div>;
    }

    return <div>Logged out!</div>;
  }
}

export default connect(
  state => ({
    auth: state.auth,
  }),
  dispatch => ({
    dispatch,
  }),
)(LogoutPage);
