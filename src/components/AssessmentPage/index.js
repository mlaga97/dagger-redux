// Library imports
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';

// Actions
import actions from '../../actions';

// Components
import AssessmentSelector from '../AssessmentSelector';
import AssessmentMetadata from '../AssessmentMetadata';
import OptionalAssessments from '../OptionalAssessments';

// Event Handlers
import handleSubmit from './handleSubmit';
import responseUpdate from './responseUpdate';
import selectorUpdate from './selectorUpdate';


class AssessmentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: {},
      response: {},
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
    const { assessments } = props;
    const { response, selected } = state;

    return (
      <form>
        <AssessmentMetadata onUpdate={this.responseUpdate} />
        {/* <RequiredAssessments /> */}
        <AssessmentSelector
          onUpdate={this.selectorUpdate}
          assessments={assessments.all}
          selected={selected}
        />
        <OptionalAssessments
          onUpdate={this.responseUpdate}
          response={response}
          assessments={assessments.all}
          selected={selected}
        />
        <Button onClick={this.handleSubmit}>Next</Button>
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
    }),
    dispatch => ({
      dispatch,
    }),
  ),
)(AssessmentPage);
