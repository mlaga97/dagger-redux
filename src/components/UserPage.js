// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

// Components
import ClinicList from './ClinicList/List'

// Actions
import actions from '../actions';

function UserClinics({user, allClinics}) {
  // Get the user clinics
  let clinics = {};

  if (!user.clinics) {
    return null;
  }

  user.clinics.forEach((clinicID) => {
    clinics[clinicID] = allClinics[clinicID]
  })

  console.log(clinics);

  return (
    <div>
      <h3>Clinics</h3>
      <ClinicList clinics={clinics}/>
    </div>
  );

  return null;
}

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
      return <div>Retrieving user list...</div>;
    }

    if (!this.props.clinics.all) {
      return <div>Retrieving clinic list...</div>;
    }

    const user = this.props.users.all[this.userID];

    return (
      <div>
        <h3>Basic Information</h3>
        <b>User ID</b>: {user.id}<br/>
        <b>Username</b>: {user.login.username}<br/>

        <hr/>

        <h3>Flags</h3>
        {
          Object.keys(user.flags).map((key) => (
            <div>
              <b>{key}</b>: {(user.flags[key] == 1) ? "yes" : "no"}<br/>
            </div>
          ))
        }

        <hr/>
        <UserClinics user={user} allClinics={this.props.clinics.all}/>
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
)(UserPage);
