// Library imports
import React from 'react';
import { connect } from 'react-redux';

// Actions
import actions from '../actions';

// Components
import App from './App';
import PublicApp from './PublicApp';

// The main layout for the application
class AuthRedirector extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: actions.auth.status.requested,
    });
  }

  render() {
    if (!this.props.auth) {
      return <div>Getting auth data...</div>;
    }
    if (!this.props.auth.status) {
      return <PublicApp />;
    }
    return <App />;
  }
}

export default connect(
  state => ({
    auth: state.auth,
  }),
  dispatch => ({
    dispatch,
  }),
)(AuthRedirector);
