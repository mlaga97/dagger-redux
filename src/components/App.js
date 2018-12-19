// Library imports
import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { IndexLinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';

// Styling
import '../style/dagger.css';

// Actions
import actions from '../actions';

// Components
import Footer from './Footer';
import HomePage from './HomePage';
import UserList from './UserList';
import UserPage from './UserPage';
import ClinicList from './ClinicList';
import ClinicPage from './ClinicPage';
import LogoutPage from './LogoutPage';
import ResponseList from './ResponseList';
import ResponsePage from './ResponsePage';
import AssessmentPage from './AssessmentPage';
import ConditionalWrapper from './ConditionalWrapper';
import ClinicSwitcherModal from './ClinicSwitcherModal';

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
        type: actions.clinic.current.get.requested,
      });
    }

    // TODO: Get server data
    // TODO: Get assessment [meta?]data
    // TODO: Setup response?
  }

  render() {
    // Only display in development
    const indev = (process.env.REACT_APP_ENVIRONMENT === 'development');

    if (!this.props.users.current) {
      return <div>Loading user data...</div>;
    }

    if (!this.props.clinics.current) {
      return <div>Loading clinic data...</div>;
    }

    const basename = process.env.PUBLIC_URL.replace(/(^\w+:|^)\/\/.*?\//, '');

    return (
      <BrowserRouter basename={basename}>
        <div className='app'>
          <Navbar inverse collapseOnSelect fixedTop>
            <Navbar.Header>
              <IndexLinkContainer to='/'>
                <Navbar.Brand>Dagger</Navbar.Brand>
              </IndexLinkContainer>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <IndexLinkContainer to='/'>
                  <NavItem eventKey={1}>Home</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer to='/assessment'>
                  <NavItem eventKey={2}>New Record</NavItem>
                </IndexLinkContainer>
                <IndexLinkContainer to='/responses'>
                  <NavItem eventKey={3}>Search</NavItem>
                </IndexLinkContainer>
                <ConditionalWrapper display={indev}>
                  <IndexLinkContainer to='/reportTest'>
                    <NavItem eventKey={4}>Reports</NavItem>
                  </IndexLinkContainer>
                </ConditionalWrapper>
                <NavDropdown eventKey={5} title='Other' id='nav-dropdown-other'>
                  <ClinicSwitcherModal/>
                  <ConditionalWrapper display={indev}>
                    <IndexLinkContainer to='/clinicStats'>
                      <MenuItem eventKey={5.1}>Clinic Statistics</MenuItem>
                    </IndexLinkContainer>
                  </ConditionalWrapper>
                  <ConditionalWrapper display={indev}>
                    <IndexLinkContainer to='/modules'>
                      <MenuItem eventKey={5.2}>Modules</MenuItem>
                    </IndexLinkContainer>
                  </ConditionalWrapper>
                  <ConditionalWrapper display={indev}>
                    <IndexLinkContainer to='/config'>
                      <MenuItem eventKey={5.3}>Configuration</MenuItem>
                    </IndexLinkContainer>
                  </ConditionalWrapper>
                  <ConditionalWrapper display={indev}>
                    <IndexLinkContainer to='/userStats'>
                      <MenuItem eventKey={5.4}>User Statistics</MenuItem>
                    </IndexLinkContainer>
                  </ConditionalWrapper>
                  <IndexLinkContainer to={'/user/' + this.props.users.current}>
                    <MenuItem eventKey={5.5}>User Settings</MenuItem>
                  </IndexLinkContainer>
                  <ConditionalWrapper display={indev}>
                    <IndexLinkContainer to='/users'>
                      <MenuItem eventKey={5.6}>Users</MenuItem>
                    </IndexLinkContainer>
                  </ConditionalWrapper>
                  <ConditionalWrapper display={indev}>
                    <IndexLinkContainer to='/clinics'>
                      <MenuItem eventKey={5.7}>Clinics</MenuItem>
                    </IndexLinkContainer>
                  </ConditionalWrapper>
                  <IndexLinkContainer to='/logout'>
                    <MenuItem eventKey={5.8}>Logout</MenuItem>
                  </IndexLinkContainer>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <div className='page'>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/logout' component={LogoutPage} />
            <Route exact path='/assessment' component={AssessmentPage} />

            <Route exact path='/responses' component={ResponseList} />
            {/* <Route exact path='/response' component={ResponsePage} /> */}
            <Route path='/response/:id' component={ResponsePage} />

            <Route exact path='/clinics' component={ClinicList} />
            {/* <Route exact path='/clinic' component={ClinicPage} /> */}
            <Route path='/clinic/:id' component={ClinicPage} />

            <Route exact path='/users' component={UserList} />
            {/* <Route exact path='/user' component={UserPage} /> */}
            <Route path='/user/:id' component={UserPage} />

            <Footer/>
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
