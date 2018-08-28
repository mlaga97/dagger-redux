// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

// Actions
import actions from '../../actions';

// Components
import Sorting from './Sorting';
import Response from './Response';

// TODO: Refactor into significantly smaller components
class ResponseList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      responseID: 1,
      sortBy: 'responseID',
      order: -1,
    };
  }

  componentWillMount() {
    this.props.dispatch({
      type: actions.response.all.requested,
    });
  }

  handleClick = (event) => {
    const name = event.target.attributes.name.value;
    //const val = ((this.state[name] || 0) + 1) % 2;
    const val = ((this.state[name] || 0) + 1) % 2;

    this.setState({
      [name]: val,
      sortBy: name,
      //order: [0, 1, -1][val],
      order: [1, -1][val],
    });
  }

  helper = (target, name) => {
    let out = ' ';

    if (this.state.sortBy === target) {
      //out = [' ', '▾', '▴'][this.state[target]];
      out = ['▾', '▴'][this.state[target]];
    }

    return(
      <th name={target} onClick={this.handleClick}>
        {name} {out}
      </th>
    );
  }

  sortHelper = (cmp) => this.state.order * ((cmp) ? 1 : -1);

  render() {
    if (!this.props.responses.all) {
      return <div>Retrieving response list...</div>;
    }

    const resultCount = Object.keys(this.props.responses.all).length;

    return (
      <div>
        <Sorting />
        <hr/>
        <h3>{resultCount} Result{(resultCount === 1) ? '' : 's'}</h3>
        <Table>
          <thead>
            <tr>
              {this.helper('responseID', 'ID')}
              {this.helper('dateSubmitted', 'Date Submitted')}
              {this.helper('visitDate', 'Visit Date')}
              {this.helper('userID', 'User ID')}
              {this.helper('clinicID', 'Clinic ID')}
              {this.helper('patientID', 'Patient ID')}
              {this.helper('patientDOB', 'Patient DOB')}
              <th>Assessments</th>
            </tr>
          </thead>
          <tbody>
            {
              Object.keys(this.props.responses.all).sort(
                (a, b) => {
                  const A = this.props.responses.all[a].metadata;
                  const B = this.props.responses.all[b].metadata;

                  if (!this.state.sortBy) {
                    return -1;
                  }

                  if (!this.state.order || this.state.order === 0) {
                    return -1;
                  }

                  if (this.state.sortBy === 'responseID') {
                    return this.state.order;
                  }

                  if (this.state.sortBy === 'dateSubmitted') {
                    return this.sortHelper(new Date(A.dateSubmitted) < new Date(B.dateSubmitted));
                  }

                  if (this.state.sortBy === 'visitDate') {
                    return this.sortHelper(new Date(A.visit.date) < new Date(B.visit.date));
                  }

                  if (this.state.sortBy === 'userID') {
                    return this.sortHelper(A.user.id < B.user.id);
                  }

                  if (this.state.sortBy === 'clinicID') {
                    return this.sortHelper(A.clinic.id < B.clinic.id);
                  }

                  if (this.state.sortBy === 'patientID') {
                    return this.sortHelper(A.patient.id < B.patient.id);
                  }

                  if (this.state.sortBy === 'patientDOB') {
                    return this.sortHelper(new Date(A.patient.dob) < new Date(B.patient.dob));
                  }

                  console.warn('Attempted sorting on unsupported field!');
                  return -1;
                }
              ).map(index => (
                <Response response={this.props.responses.all[index]} />
              ))
            }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default connect(
  state => ({
    responses: state.responses,
  }),
  dispatch => ({
    dispatch,
  }),
)(ResponseList);
