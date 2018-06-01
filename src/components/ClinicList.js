// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

// Actions
import actions from '../actions';

class ClinicList extends React.Component {
  componentWillMount() {
    this.props.dispatch({ type: actions.clinic.all.requested });
  }

  render() {
    if (!this.props.clinics) {
      return (
        <div>
					Retrieving clinic list...
        </div>
      );
    }
    return (
      <div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>City</th>
              <th>State</th>
            </tr>
          </thead>
          <tbody>
            {
								Object.keys(this.props.clinics).map((clinicID, index) => {
									const clinic = this.props.clinics[clinicID];

									return (
  <tr key={clinic.id}>
    <td>
      <Link to={`/clinic/${clinic.id}`}>{clinic.id}</Link>
    </td>
    <td>{clinic.name}</td>
    <td>{clinic.city}</td>
    <td>{clinic.state}</td>
  </tr>
									);
								})
							}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    clinics: state.clinics,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClinicList);
