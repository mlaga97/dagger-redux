// Library imports
import React from 'react';
import { connect } from 'react-redux';

// Components
import UserList from './UserList/List'

// Actions
import actions from '../actions';

function ClinicUsers({clinic, allUsers}) {
  // Get the clinic users
  let users = {};

  if (!clinic.users) {
    return null;
  }

  clinic.users.forEach((userID) => {
    users[userID] = allUsers[userID]
  })

  return (
    <div>
      <h3>Users</h3>
      <UserList users={users}/>
    </div>
  )
}

class ClinicPage extends React.Component {
  constructor(props) {
    super(props);

    this.clinicID = this.props.match.params.id;
  }

  componentWillMount() {
    this.props.dispatch({
      type: actions.clinic.all.requested,
    });

    this.props.dispatch({
      type: actions.user.all.requested,
    });
  }

  render() {
    if (!this.props.clinics.all) {
      return <div>Retrieving clinic list...</div>;
    }

    if (!this.props.users.all) {
      return <div>Retrieving user list...</div>;
    }

    const clinic = this.props.clinics.all[this.clinicID];

    return (
      <div>
        <h3>Basic Information</h3>
        <b>Clinic ID</b>: {clinic.id}<br/>
        <b>Name</b>: {clinic.name}<br/>
        <b>City</b>: {clinic.city}<br/>
        <b>State</b>: {clinic.state}<br/>

        <hr/>
        <ClinicUsers clinic={clinic} allUsers={this.props.users.all}/>
      </div>
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
)(ClinicPage);
