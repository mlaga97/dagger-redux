// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Panel, ToggleButton, ToggleButtonGroup, Button, ButtonGroup, Tab, Row, Col, Nav, NavItem, Breadcrumb, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

// Components
import Account from './Account';
import Clinics from './Clinics';
import Records from './Records';
import Activity from './Activity';
import Overview from './Overview';
import Settings from './Settings';

// Actions
import actions from '../../actions';

class UserPage extends React.Component {
  constructor(props) {
    super(props);

    this.userID = this.props.match.params.id;
  }

  componentWillMount() {
    this.props.dispatch({
      type: actions.user.all.requested,
    });

    this.props.dispatch({
      type: actions.clinic.all.requested,
    });
  }

  render() {
    if (!this.props.users.all) {
      return <div className='content-loading'>Retrieving user list...</div>;
    }

    if (!this.props.clinics.all) {
      return <div className='content-loading'>Retrieving clinic list...</div>;
    }

    const user = this.props.users.all[this.userID];

    return (
      <React.Fragment>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Users</Breadcrumb.Item>
          <Breadcrumb.Item>{this.userID}</Breadcrumb.Item>
        </Breadcrumb>
        <Tab.Container defaultActiveKey='overview'>
          <Row className='clearfix'>
            <Col sm={3}>
              <Nav bsStyle='pills' stacked>
                <NavItem eventKey='overview'>Overview</NavItem>
                <NavItem eventKey='activity'>Activity</NavItem>
                <NavItem eventKey='records'>Records</NavItem>
                <NavItem eventKey='clinics'>Clinics</NavItem>
                <NavItem eventKey='settings'>Settings</NavItem>
                <NavItem eventKey='account'>Account</NavItem>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content animation>
                <Tab.Pane eventKey='overview'>
                  <Overview />
                </Tab.Pane>
                <Tab.Pane eventKey='activity'>
                  <Activity />
                </Tab.Pane>
                <Tab.Pane eventKey='records'>
                  <Records />
                </Tab.Pane>
                <Tab.Pane eventKey='clinics'>
                  <Clinics user={user} allClinics={this.props.clinics.all}/>
                </Tab.Pane>
                <Tab.Pane eventKey='settings'>
                  <Settings />
                </Tab.Pane>
                <Tab.Pane eventKey='account'>
                  <Account />
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </React.Fragment>
    );

  }
}

export default connect(
  state => ({
    users: state.users,
    clinics: state.clinics,
  }),
  dispatch => ({
    dispatch,
  }),
)(UserPage);
