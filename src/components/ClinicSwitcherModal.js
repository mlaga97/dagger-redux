// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Table, Radio } from 'react-bootstrap';

// Styling
import '../style/dagger.css';

// Actions
import actions from '../actions';

const Header = () => (
  <tr>
    <th></th>
    <th>ID</th>
    <th>Name</th>
    <th>City</th>
    <th>State</th>
  </tr>
);

const Clinic = ({clinic}) => (
  <tr key={clinic.id}>
      <td><Radio name='clinic'/></td>
      <td>{clinic.id}</td>
      <td>{clinic.name}</td>
      <td>{clinic.city}</td>
      <td>{clinic.state}</td>
    </tr>
);

// TODO: Merge with ClinicList/List
const List = ({clinics}) => (
  <Table>
    <thead>
      <Header/>
    </thead>
    <tbody>
      {
        Object.keys(clinics).map((clinicID) => (
          <Clinic clinic={clinics[clinicID]}/>
        ))
      }
    </tbody>
  </Table>
)

class ClinicSwitcherModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: true,
    };
  }

  componentWillMount() {
    this.props.dispatch({
      type: actions.clinic.all.requested,
    });

    this.props.dispatch({
      type: actions.user.all.requested,
    });
  }

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  render = () => {
    if (!this.props.users.all) {
      return <div>Retrieving user list...</div>;
    }

    const userID = this.props.users.current;
    const user = this.props.users.all[userID];

    if (!user.clinics) {
      return <div>Retrieving user clinics...</div>;
    }

    if (!this.props.clinics.all) {
      return <div>Retrieving clinic list...</div>;
    }

    // Get the user clinics
    let clinics = {};
    user.clinics.forEach((clinicID) => {
      clinics[clinicID] = this.props.clinics.all[clinicID]
    })

    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Please Select A Clinic</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <List clinics={clinics} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
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
)(ClinicSwitcherModal);
