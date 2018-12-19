// Library imports
import React from 'react';
import { Breadcrumb, Tab, Row, Col, Nav, NavItem } from 'react-bootstrap';

// Components
import Account from './Account';
import Clinics from './Clinics';
import Records from './Records';
import Activity from './Activity';
import Overview from './Overview';
import Settings from './Settings';
import Statistics from './Statistics';

// Actions
import actions from '../../actions';

// TODO: Show error message on non-existent user.
const UserPage = ({
  match: {
    params: {
      id: userID,
    },
  },
}) => (
  <React.Fragment>
    <Breadcrumb>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Users</Breadcrumb.Item>
      <Breadcrumb.Item>{userID}</Breadcrumb.Item>
    </Breadcrumb>
    <Tab.Container defaultActiveKey='overview'>
      <Row className='clearfix'>
        <Col sm={3}>
          <Nav bsStyle='pills' stacked>
            <NavItem eventKey='overview'>Overview</NavItem>
            <NavItem eventKey='activity'>Recent Activity</NavItem>
            <NavItem eventKey='statistics'>Statistics</NavItem>
            <NavItem eventKey='records'>Records</NavItem>
            <NavItem eventKey='clinics'>Clinics</NavItem>
            <NavItem eventKey='settings'>Settings</NavItem>
            <NavItem eventKey='account'>Account</NavItem>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content animation>
            <Tab.Pane eventKey='overview'>
              <Overview userID={userID} />
            </Tab.Pane>
            <Tab.Pane eventKey='activity'>
              <Activity userID={userID} />
            </Tab.Pane>
            <Tab.Pane eventKey='statistics'>
              <Statistics userID={userID} />
            </Tab.Pane>
            <Tab.Pane eventKey='records'>
              <Records userID={userID} />
            </Tab.Pane>
            <Tab.Pane eventKey='clinics'>
              <Clinics userID={userID} />
            </Tab.Pane>
            <Tab.Pane eventKey='settings'>
              <Settings userID={userID} />
            </Tab.Pane>
            <Tab.Pane eventKey='account'>
              <Account userID={userID} />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  </React.Fragment>
);

export default UserPage;
