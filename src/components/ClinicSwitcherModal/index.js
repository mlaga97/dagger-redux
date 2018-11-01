// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Modal, Button, MenuItem } from 'react-bootstrap';

// Styling
import '../../style/dagger.css';

// Actions
import actions from '../../actions';

// Components
import List from './List';

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

  handleClick = (event) => {
    const { value } = event.target;
    this.props.dispatch({
      type: actions.clinic.current.post.requested,
      data: value,
    });
    this.handleClose();
  }

  render = () => {
    if (!this.props.users.all) {
      return <div className='content-loading'>Retrieving user list...</div>;
    }

    const userID = this.props.users.current;
    const user = this.props.users.all[userID];

    if (!user.clinics) {
      return <div className='content-loading'>Retrieving user clinics...</div>;
    }

    if (!this.props.clinics.all) {
      return <div className='content-loading'>Retrieving clinic list...</div>;
    }

    // Get the user clinics
    let clinics = {};
    user.clinics.forEach((clinicID) => {
      clinics[clinicID] = this.props.clinics.all[clinicID]
    })

    return (
      <React.Fragment>
        <MenuItem onClick={this.handleShow}>
          Change Clinic
        </MenuItem>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please Select A Clinic</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <List
              clinics={clinics}
              handleClick={this.handleClick}
              currentClinic={this.props.clinics.current}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
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
