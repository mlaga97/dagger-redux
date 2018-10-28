// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Panel, Grid, Row, Col, Table } from 'react-bootstrap';

// Actions
import actions from '../actions';

// Components
import RecentRecords from './RecentRecords';

class ResponseList extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: actions.statistics.user.requested,
    });

    this.props.dispatch({
      type: actions.user.current.requested,
    });
  }

  render() {
    if (!this.props.users || !this.props.users.current) {
      return <div>Retrieving user ID...</div>;
    }

    if (!this.props.statistics || !this.props.statistics.user) {
      return <div>Retrieving user statistics...</div>;
    }

    let {
      today,
      weekNumber,
      weekStartDate,
      weekEndDate,
      appointmentCount,
      warmHandoffCount,
      hchCount,
      recordCount
    } = this.props.statistics.user;

    return (
      <Panel>
        <Panel.Heading>
          My Recent Activity
        </Panel.Heading>
        <Panel.Body>
          <RecentRecords userID={this.props.users.current} />
          <Grid>
            <Row>
              <Col sm={12}>
                <Table striped bordered className='table-response'>
                  <thead>
                    <tr>
                      <th>Period</th>
                      <th>Range</th>
                      <th>Appointments</th>
                      <th>Warm Handoffs</th>
                      <th>HCH</th>
                      <th>Total Records</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>This Week (week {weekNumber})</td>
                      <td>{weekStartDate} - {weekEndDate}</td>
                      <td>{appointmentCount}</td>
                      <td>{warmHandoffCount}</td>
                      <td>{hchCount}</td>
                      <td>{recordCount}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Grid>
        </Panel.Body>
      </Panel>
    );
  }
}

export default connect(
  state => ({
    users: state.users,
    statistics: state.statistics,
  }),
  dispatch => ({
    dispatch,
  }),
)(ResponseList);
