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
      thisWeek_today, lastWeek_today,
      thisWeek_weekNumber, lastWeek_weekNumber,
      thisWeek_weekStartDate, lastWeek_weekStartDate,
      thisWeek_weekEndDate, lastWeek_weekEndDate,
      thisWeek_appointmentCount, lastWeek_appointmentCount,
      thisWeek_warmHandoffCount, lastWeek_warmHandoffCount,
      thisWeek_hchCount, lastWeek_hchCount,
      thisWeek_recordCount, lastWeek_recordCount
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
                      <td>This Week (week {thisWeek_weekNumber})</td>
                      <td>{thisWeek_weekStartDate} - {thisWeek_weekEndDate}</td>
                      <td>{thisWeek_appointmentCount}</td>
                      <td>{thisWeek_warmHandoffCount}</td>
                      <td>{thisWeek_hchCount}</td>
                      <td>{thisWeek_recordCount}</td>
                    </tr>
                    <tr>
                      <td>Last Week (week {lastWeek_weekNumber})</td>
                      <td>{lastWeek_weekStartDate} - {lastWeek_weekEndDate}</td>
                      <td>{lastWeek_appointmentCount}</td>
                      <td>{lastWeek_warmHandoffCount}</td>
                      <td>{lastWeek_hchCount}</td>
                      <td>{lastWeek_recordCount}</td>
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
