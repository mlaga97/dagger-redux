// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';

// Styling
import '../style/dagger.css';

// Actions
import actions from '../actions';


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
    <div className='container'>
      <form onSubmit={this.handleSubmit} className='login'>
        <div className='panel panel-default'>
          <div className='panel-heading'>Login</div>
          <div className='panel-body'>
            <div className='row'>
              <div className='col-sm-4 col-sm-offset-4'>
                <FormGroup controlId='formLoginUsername'>
                  <ControlLabel>Username</ControlLabel>
                  <FormControl name='username' type='text' />
                </FormGroup>
              </div>
              {/* end div col */}
            </div>
            {/* end div row */}
            <div className='row'>
              <div className='col-sm-4 col-sm-offset-4'>
                <FormGroup controlId='formLoginPassword'>
                  <ControlLabel>Password</ControlLabel>
                  <FormControl name='password' type='password' />
                </FormGroup>
              </div>
              {/* end div col */}
            </div>
            {/* end div row */}
          </div>
          {/* end div panel-body */}
        </div>
        {/* end div panel */}
        <div className='col-sm-4 col-sm-offset-4'>
          <FormGroup controlId='formLoginSubmit' className='form-group-clear-style'>
            <FormControl type='submit' name='Login' value='Login' />
          </FormGroup>
        </div>
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
