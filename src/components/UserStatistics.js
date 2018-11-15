// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Panel, Grid, Row, Col, Table } from 'react-bootstrap';
import { format, getISOWeek, startOfWeek, endOfWeek, subWeeks, startOfMonth, endOfMonth, getMonth, subMonths } from 'date-fns';

// Actions
import actions from '../actions';

// Components
import RecentRecords from './RecentRecords';
import QueryCount from './QueryCount';

// TODO: Is it visitDate or dateSubmitted?
function UserStatisticsHelper(props) {
  const { title, queryID, userID, start, end } = props;

  const visitDateStart = format(start, 'YYYY-MM-DD');
  const visitDateEnd = format(end, 'YYYY-MM-DD');

  return (
    <tr>
      {props.children}
      <td data-label='Range'>{format(start, 'dddd, MMM DD')} - {format(end, 'dddd, MMM DD')}</td>
      <td data-label='Appointments'>
        <QueryCount parameters={{
          queryID: 'appointments_' + visitDateStart + visitDateEnd,
          userID,
          visitDateStart,
          visitDateEnd,
          activityType: 'appointment',
        }} />
      </td>
      <td data-label='Warm Handoffs'>
        <QueryCount parameters={{
          queryID: 'warmHandoffs_' + visitDateStart + visitDateEnd,
          userID,
          visitDateStart,
          visitDateEnd,
          activityType: 'warmHandOff',
        }} />
      </td>
      <td data-label='HCH'>
        <QueryCount parameters={{
          queryID: 'hchScreenings_' + visitDateStart + visitDateEnd,
          userID,
          visitDateStart,
          visitDateEnd,
          activityType: 'hchScreening',
        }} />
      </td>
      <td data-label='Total Records'>
        <QueryCount parameters={{
          queryID: 'totalRecords_' + visitDateStart + visitDateEnd,
          userID,
          visitDateStart,
          visitDateEnd,
        }} />
      </td>
    </tr>
  );
}

class ResponseList extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: actions.user.current.requested,
    });
  }

  render() {
    if (!this.props.users || !this.props.users.current) {
      return <div className='content-loading'>Retrieving user ID...</div>;
    }

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
                    <UserStatisticsHelper
                      queryID='thisWeek'
                      userID={this.props.users.current}
                      start={startOfWeek(new Date(), {weekStartsOn: 1})}
                      end={endOfWeek(new Date(), {weekStartsOn: 1})}
                    >
                      <td data-label='Period'>This Week (week {getISOWeek(new Date())})</td>
                    </UserStatisticsHelper>
                    <UserStatisticsHelper
                      queryID='lastWeek'
                      userID={this.props.users.current}
                      start={startOfWeek(subWeeks(new Date(), 1), {weekStartsOn: 1})}
                      end={endOfWeek(subWeeks(new Date(), 1), {weekStartsOn: 1})}
                    >
                      <td data-label='Period'>Last Week (week {getISOWeek(subWeeks(new Date(), 1))})</td>
                    </UserStatisticsHelper>
                    <UserStatisticsHelper
                      queryID='thisMonth'
                      userID={this.props.users.current}
                      start={startOfMonth(new Date())}
                      end={endOfMonth(new Date())}
                    >
                      <td data-label='Period'>This Month ({format(new Date(), 'MMMM')})</td>
                    </UserStatisticsHelper>
                    <UserStatisticsHelper
                      queryID='thisMonth'
                      userID={this.props.users.current}
                      start={startOfMonth(subMonths(new Date(), 1))}
                      end={endOfMonth(subMonths(new Date(), 1))}
                    >
                      <td data-label='Period'>Last Month ({format(subMonths(new Date(), 1), 'MMMM')})</td>
                    </UserStatisticsHelper>
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
  }),
  dispatch => ({
    dispatch,
  }),
)(ResponseList);
