// Library imports
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';

// Actions
import actions from '../../actions';

// Components
import Selector from './Selector';
import Metadata from './Metadata';
import Assessments from '../Assessments';

// Event Handlers
import handleSubmit from './helpers/handleSubmit';
import responseUpdate from './helpers/responseUpdate';
import selectorUpdate from './helpers/selectorUpdate';


class AssessmentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lastResponse: props.responseID,
      selected: {},
      response: {
        metadata: {
          assessmentDateToday: 'true',
          // en-CA is the equivalent of ISO-8601
          assessmentDate: (new Date()).toLocaleDateString('en-CA'),
        }
      },
    };

    this.handleSubmit = handleSubmit.bind(this);
    this.responseUpdate = responseUpdate.bind(this);
    this.selectorUpdate = selectorUpdate.bind(this);
  }

  componentWillMount() {
    if (!this.props.assessments.all) {
      this.props.dispatch({
        type: actions.assessment.all.requested,
      });
    }
  }

  render() {
    const { props, state } = this;
    const { responseID, assessments: { all: assessments } } = props;
    const { lastResponse, response, selected } = state;

    if (lastResponse !== responseID) {
      this.props.history.push('/response/' + responseID);
      return <div>Submitted!</div>;
    }

    return (
      <form onSubmit={this.handleSubmit} >
        <Metadata
          editable
          response={response}
          onUpdate={this.responseUpdate}
        />
        <Assessments
          editable
          response={response}
          assessments={assessments}
          onUpdate={this.responseUpdate}
        />
        <Selector
          response={response}
          selected={selected}
          assessments={assessments}
          onUpdate={this.selectorUpdate}
        />
        <Assessments
          editable
          response={response}
          selected={selected}
          assessments={assessments}
          onUpdate={this.responseUpdate}
        />
        <div className='centered'>
          <Button type='submit' name='Submit' value='Submit'>Next</Button>
        </div>
      </form>
    );
  }
}

export default compose(
  withRouter,
  connect(
    state => ({
      auth: state.auth,
      users: state.users,
      clinics: state.clinics,
      assessments: state.assessments,
      responseID: state.responses.post,
    }),
    dispatch => ({
      dispatch,
    }),
  ),
)(AssessmentPage);
