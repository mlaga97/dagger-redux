// Actions
import actions from '../../../actions';

function handleSubmit(e) {
  // Prevent redirect
  e.preventDefault();

  // Response Metadata
  const metadata = {
    user: {
      id: this.props.users.current,
    },
    visit: {
      //type: '',
      date: this.state.response.metadata.assessmentDate,
    },
    // client: {},
    clinic: {
      id: this.props.clinics.current,
    },
    // server: {},
    //statistics: {},
    patient: {
      id: this.state.response.metadata.patientID,
      dob: this.state.response.metadata.patientDOB,
    },
    // en-CA is the equivalent of ISO-8601
    dateSubmitted: (new Date()).toLocaleDateString('en-CA'),
  };

  // Assessment Responses
  const assessments = {
    selected: this.state.selected,
    responses: this.state.response,
  };

  delete assessments.responses.metadata;

  const response = {
    apiVersion: 0,
    metadata,
    // analytics: {},
    assessments,
    // demographics: {},
  };

  this.props.dispatch({
    type: actions.response.post.requested,
    data: response,
  });
}

export default handleSubmit;
