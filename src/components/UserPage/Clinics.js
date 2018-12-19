// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Panel, Grid, Row, Col, Button } from 'react-bootstrap';

// Components
import ClinicList from '../ClinicList/List'

// Actions
import actions from '../../actions';

class Clinics extends React.Component {

  // TODO: Only request the ones we need.
  componentDidMount() {
    this.props.dispatch({
      type: actions.user.all.requested,
    });

    this.props.dispatch({
      type: actions.clinic.all.requested,
    });
  }

  render() {
    if (!this.props.users.all) {
      return <div className='content-loading'>Retrieving user list...</div>;
    }

    if (!this.props.clinics.all) {
      return <div className='content-loading'>Retrieving clinic list...</div>;
    }

    const user = this.props.users.all[this.props.userID];

    let clinics = {};
    user.clinics.forEach((clinicID) => {
      clinics[clinicID] = this.props.clinics.all[clinicID]
    })

    return (
      <React.Fragment>
        <Panel>
          <Panel.Heading>
            Assigned Clinics
            <Button className='btn-sm btn-download'>Assign/Unassign Clinics</Button>
          </Panel.Heading>
          <Panel.Body>
            <Grid>
              <Row>
                <Col sm={12}>
                </Col>
              </Row>
              <Row>
                <Col sm={12}>
                  <ClinicList clinics={clinics} />
                </Col>
              </Row>
            </Grid>
          </Panel.Body>
        </Panel>
        <Panel>
          <Panel.Heading>
            {/* TODO: Title that better describes "clinics that a user has records in but isn't currently assigned to" */}
            Other Related Clinics
          </Panel.Heading>
          <Panel.Body>
            <Grid>
              <Row>
                <Col sm={12}>
                  <ClinicList clinics={clinics} />
                </Col>
              </Row>
            </Grid>
          </Panel.Body>
        </Panel>
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
)(Clinics);
