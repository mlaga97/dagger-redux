// Actions
import actions from '../../../actions';

function handleSubmit() {
  // Response Metadata
  const metadata = {
    user: {
      id: this.props.users.current,
    },
    // visit: {
    //   type: '',
    //   date: '',
    // },
    // client: {},
    clinic: {
      id: this.props.clinics.current,
    },
    // server: {},
    patient: {
      id: this.state.response.metadata.patientID,
      dob: this.state.response.metadata.patientDOB,
    },
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

  this.props.history.push('/');
}

export default handleSubmit;
