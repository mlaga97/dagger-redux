// Library imports
import React from 'react';
import { connect } from 'react-redux';

// Components
import List from './List';

// Actions
import actions from '../../actions';

class ClinicListPage extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: actions.clinic.all.requested,
    });
  }

  render() {
    if (!this.props.clinics.all) {
      return <div>Retrieving clinic list...</div>;
    }

    return <List clinics={this.props.clinics.all}/>;
  }
}

export default connect(
  state => ({
    clinics: state.clinics,
  }),
  dispatch => ({
    dispatch,
  }),
)(ClinicListPage);
