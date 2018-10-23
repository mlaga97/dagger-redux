// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

// Components
import Username from './Username';
import Password from './Password';
import LoginButton from './LoginButton';
import ErrorMessage from './ErrorMessage';

// Styling
import '../../style/dagger.css';

// Actions
import actions from '../../actions';

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
                  <Username />
                </Col>
              </Row>
              <Row>
                <Col sm={4} smOffset={4}>
                  <Password />
                </Col>
              </Row>
            </Grid>
          </Panel.Body>
        </Panel>
        <Grid>
          <Col sm={4} smOffset={4}>
            <LoginButton />
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
