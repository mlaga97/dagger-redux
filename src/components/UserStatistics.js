// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Panel, Grid, Row } from 'react-bootstrap';

// Actions
import actions from '../actions';

class ResponseList extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: actions.statistics.user.requested,
    });
  }

  render() {
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
        <Panel.Heading>User Statistics - Week {weekNumber} ({weekStartDate} - {weekEndDate})</Panel.Heading>
        <Panel.Body>
          <div>HCH Record Count: {hchCount}</div>
          <div>Appointment Record Count: {appointmentCount}</div>
          <div>Warm Handoff Record Count: {warmHandoffCount}</div>
          <div>Total Record Count: {recordCount}</div>
        </Panel.Body>
      </Panel>
    );
  }
}

export default connect(
  state => ({
    statistics: state.statistics,
  }),
  dispatch => ({
    dispatch,
  }),
)(ResponseList);
