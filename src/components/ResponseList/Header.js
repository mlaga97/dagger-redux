// Library imports
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      responseID: 1,
    };
  }

  handleClick = (event) => {
    const name = event.target.attributes.name.value;
    this.setState({
      [name]: ((this.state[name] || 0) + 1) % 3,
    });
  }

  helper = (target, name) => (
    <th name={target} onClick={this.handleClick}>
      {name} {[' ', '▾', '▴'][this.state[target]]}
    </th>
  )

  render = () => (
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
  )
}

export default Header;
