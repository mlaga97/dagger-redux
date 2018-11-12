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
      return <div className='content-loading'>Retrieving user ID...</div>;
    }

    if (!this.props.statistics || !this.props.statistics.user) {
      return <div className='content-loading'>Retrieving user statistics...</div>;
    }

    let {
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
          <Grid>
            <Row>
              <Col sm={12}>
                <h4>Activity Today</h4>
              </Col>
            </Row>
          </Grid>
          <RecentRecords userID={this.props.users.current} />
          <Grid>
            <Row>
              <Col sm={12}>
                <h4>Activity by Week</h4>
              </Col>
            </Row>
          </Grid>
          <Grid>
            <Row>
              <Col sm={12}>
                <Table striped bordered className='table-user-stats table-card-table'>
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
                      <td data-label='Period'>This Week (week {thisWeek_weekNumber})</td>
                      <td data-label='Range'>{thisWeek_weekStartDate} - {thisWeek_weekEndDate}</td>
                      <td data-label='Appointments'>{thisWeek_appointmentCount}</td>
                      <td data-label='Warm Handoffs'>{thisWeek_warmHandoffCount}</td>
                      <td data-label='HCH'>{thisWeek_hchCount}</td>
                      <td data-label='Total Records'>{thisWeek_recordCount}</td>
                    </tr>
                    <tr>
                      <td data-label='Period'>Last Week (week {lastWeek_weekNumber})</td>
                      <td data-label='Range'>{lastWeek_weekStartDate} - {lastWeek_weekEndDate}</td>
                      <td data-label='Appointments'>{lastWeek_appointmentCount}</td>
                      <td data-label='Warm Handoffs'>{lastWeek_warmHandoffCount}</td>
                      <td data-label='HCH'>{lastWeek_hchCount}</td>
                      <td data-label='Total Records'>{lastWeek_recordCount}</td>
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
