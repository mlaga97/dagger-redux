// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

// Styling
import '../../style/dagger.css';

// Actions
import actions from '../../actions';

class LoginForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    // TODO: Change this if login page is moved.
    if (window.location.pathname !== '/') {
      window.location.pathname = '/';
    }

    // Attempt Login
    this.props.dispatch({
      type: actions.auth.login.requested,
      data: {
        username: event.target.username.value,
        password: event.target.password.value,
      },
    });
  }

  render = () => (
    <div class='container'>
      <form onSubmit={this.handleSubmit} class='login'>
        <FormGroup>
          <ControlLabel>Login</ControlLabel>
          <FormControl name="username" type="text" />
          <FormControl name="password" type="password" />
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default connect(
  () => ({
  }),
  dispatch => ({
    dispatch,
  }),
)(LoginForm);
