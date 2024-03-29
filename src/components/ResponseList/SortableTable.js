// TODO: Make reuseable and move to top level

// Library imports
import React from 'react';
import { Table } from 'react-bootstrap';

class SortableTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      responseID: 1,
      sortBy: 'responseID',
      order: -1,
    };
  }

  handleClick = (event) => {
    const name = event.target.attributes.name.value;
    const val = ((this.state[name] || 0) + 1) % 2;

    this.setState({
      [name]: val,
      sortBy: name,
      order: [1, -1][val],
    });
  }

  helper = (target, name) => {
    let out = 'sort sort-inactive';

    if (this.state.sortBy === target) {
      out = ['sort sort-active sort-desc', 'sort sort-active sort-asc'][this.state[target]];
    }

    return (
      <th name={target} className={out} onClick={this.handleClick}>
        {name}
      </th>
    );
  }

  sortHelper = cmp => this.state.order * ((cmp) ? 1 : -1);

  render = () => (
    <Table className='table-search-results table-card-table table-striped'>
      <thead>
        <tr>
          <th>{/* placeholder for record launch button */}</th>
          {this.helper('dateSubmitted', 'Date Submitted')}
          {this.helper('visitDate', 'Visit Date')}
          {this.helper('userID', 'User ID')}
          {this.helper('clinicID', 'Clinic ID')}
          <th>Assessments</th>
        </tr>
      </thead>
      <tbody>
        {
          Object.keys(this.props.responses).sort((a, b) => {
            const A = this.props.responses[a].metadata;
            const B = this.props.responses[b].metadata;

            if (!this.state.sortBy || !this.state.order || this.state.order === 0) {
              return this.sortHelper(parseInt(a, 10) < parseInt(b, 10));
            }

            if (this.state.sortBy === 'dateSubmitted') {
              return this.sortHelper(
                new Date(A.dateSubmitted) < new Date(B.dateSubmitted)
              );
            }

            if (this.state.sortBy === 'visitDate') {
              return this.sortHelper(
                new Date(A.visit.date) < new Date(B.visit.date)
              );
            }

            if (this.state.sortBy === 'userID') {
              return this.sortHelper(A.user.id < B.user.id);
            }

            if (this.state.sortBy === 'clinicID') {
              return this.sortHelper(A.clinic.id < B.clinic.id);
            }

            if (this.state.sortBy === 'patientDOB') {
              return this.sortHelper(
                new Date(A.patient.dob) < new Date(B.patient.dob)
              );
            }

            return -1;
          }).map(index => (
            React.Children.map(
              this.props.children,
              child => React.cloneElement(child, {
                response: this.props.responses[index],
              }),
            )
          ))
        }
      </tbody>
    </Table>
  );
}

export default SortableTable;
