// Library imports
import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { Alert, FormGroup, FormControl, Panel, Grid, Row, Col } from 'react-bootstrap';

// Components
import FocusableInput from './FocusableInput';

// Styling
import '../style/dagger.css';

// Actions
import actions from '../actions';

const ErrorMessage = ({auth}) => {
  if (auth.status) {
    return null;
  }

  if (!auth.reason) {
    return null;
  }

  return <Alert bsStyle='danger'>{auth.reason}</Alert>;
};

class LoginForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    // Attempt Login
    this.props.dispatch({
      type: actions.auth.login.requested,
      data: {
        username: event.target.username.value,
        password: event.target.password.value,
      },
    });
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.firstInput).focus();
  }

  render = () => (
    <div className='container'>
      <form onSubmit={this.handleSubmit} className='login' autoComplete='off'>
        <ErrorMessage auth={this.props.auth} />
        <Panel>
          <Panel.Heading>Login</Panel.Heading>
          <Panel.Body>
            <Grid>
              <Row>
                <Col sm={4} smOffset={4}>
                  <FocusableInput controlID='formLoginUsername' label='Username' name='username' type='text' required='required' autoFocus='autofocus' ref='firstInput' />
                </Col>
              </Row>
              <Row>
                <Col sm={4} smOffset={4}>
                  <FocusableInput controlID='formLoginPassword' label='Password' name='password' type='password' required='required' />
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
  state => ({
    auth: state.auth,
  }),
  dispatch => ({
    dispatch,
  }),
)(LoginForm);
