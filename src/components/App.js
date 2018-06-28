// Library imports
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

// Actions
import actions from '../actions';

// Components
import LogoutPage from './LogoutPage';
import AssessmentPage from './AssessmentPage';
import ClinicList from './ClinicList';
import UserList from './UserList';
import ResponseList from './ResponseList';
import ResponsePage from './ResponsePage';

// Helpers
function HomePage() {
  return <p>Hello.</p>;
}

const divStyle = {
  paddingLeft: '15px',
  paddingRight: '15px',
  paddingBottom: '15px',
};


class PrivateApp extends React.Component {
  // Do stuff that the entire application needs
  componentWillMount() {
    // Get user data
    if (!this.props.users.current) {
      this.props.dispatch({
        type: actions.user.current.requested,
      });
    }

    // Get clinic data
    if (!this.props.clinics.current) {
      this.props.dispatch({
        type: actions.clinic.current.requested,
      });
    }

    // TODO: Get server data
    // TODO: Get assessment [meta?]data
    // TODO: Setup response?
  }

  render() {
    if (!this.props.users.current) {
      return <div>Loading user data...</div>;
    }

    if (!this.props.clinics.current) {
      return <div>Loading clinic data...</div>;
    }

    return (
      <BrowserRouter>
        <div>
          <Navbar inverse>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">Dagger</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <IndexLinkContainer to="/">
                <NavItem eventKey={1}>Home</NavItem>
              </IndexLinkContainer>
              <IndexLinkContainer to="/assessment">
                <NavItem eventKey={2}>Assessment</NavItem>
              </IndexLinkContainer>
              <IndexLinkContainer to="/responses">
                <NavItem eventKey={3}>Responses</NavItem>
              </IndexLinkContainer>
              <IndexLinkContainer to="/reportTest">
                <NavItem eventKey={4}>Reports</NavItem>
              </IndexLinkContainer>
              <NavDropdown eventKey={5} title="Other" id="nav-dropdown-other">
                <IndexLinkContainer to="/clinicStats">
                  <MenuItem eventKey={5.1}>Clinic Statistics</MenuItem>
                </IndexLinkContainer>
                <IndexLinkContainer to="/modules">
                  <MenuItem eventKey={5.2}>Modules</MenuItem>
                </IndexLinkContainer>
                <IndexLinkContainer to="/config">
                  <MenuItem eventKey={5.3}>Configuration</MenuItem>
                </IndexLinkContainer>
                <IndexLinkContainer to="/userStats">
                  <MenuItem eventKey={5.4}>User Statistics</MenuItem>
                </IndexLinkContainer>
                <IndexLinkContainer to="/userSettings">
                  <MenuItem eventKey={5.5}>User Settings</MenuItem>
                </IndexLinkContainer>
                <IndexLinkContainer to="/users">
                  <MenuItem eventKey={5.6}>Users</MenuItem>
                </IndexLinkContainer>
                <IndexLinkContainer to="/clinics">
                  <MenuItem eventKey={5.7}>Clinics</MenuItem>
                </IndexLinkContainer>
                <IndexLinkContainer to="/logout">
                  <MenuItem eventKey={5.8}>Logout</MenuItem>
                </IndexLinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar>

          <div style={divStyle}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/logout" component={LogoutPage} />
            <Route exact path="/assessment" component={AssessmentPage} />

            <Route exact path="/responses" component={ResponseList} />
            {/* <Route exact path='/response' component={ResponsePage} /> */}
            <Route path="/response/:id" component={ResponsePage} />

            <Route exact path="/clinics" component={ClinicList} />
            {/* <Route exact path='/clinic' component={ClinicPage} /> */}
            <Route path="/clinic/*" component={ClinicList} />

            <Route exact path="/users" component={UserList} />
            {/* <Route exact path='/user' component={UserPage} /> */}
            <Route path="/user/*" component={UserList} />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default connect(
  state => ({
    auth: state.auth,
    users: state.users,
    clinics: state.clinics,
  }),
  dispatch => ({
    dispatch,
  }),
)(PrivateApp);
