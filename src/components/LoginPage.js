// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Panel, Grid, Row, Col } from 'react-bootstrap';

// Components
import FocusableInput from './FocusableInput';

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
        <Panel>
          <Panel.Heading>Login</Panel.Heading>
          <Panel.Body>
            <Grid>
              <Row>
                <Col sm={4} smOffset={4}>
                  <FocusableInput controlID='formLoginUsername' label='Username' name='username' type='text' />
                </Col>
              </Row>
              <Row>
                <Col sm={4} smOffset={4}>
                  <FocusableInput controlID='formLoginPassword' label='Password' name='password' type='password' />
                </Col>
              </Row>
            </Grid>
          </Panel.Body>
        </Panel>
        <Grid>
          <Col sm={4} smOffset={4}>
            <FormGroup controlId='formLoginSubmit' className='form-group-clear-style'>
              <FormControl type='submit' name='Login' value='Login' />
            </FormGroup>
          </Col>
        </Grid>
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
