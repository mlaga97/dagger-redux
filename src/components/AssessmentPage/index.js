// Library imports
import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router';

// Actions
import actions from '../../actions';

// Components
import AssessmentSelector from './AssessmentSelector';
import AssessmentMetadata from './AssessmentMetadata';
import OptionalAssessments from './OptionalAssessments';

class AssessmentPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      response: {},
    };
  }

  componentWillMount() {
    if (!this.props.assessments.all) {
      this.props.dispatch({
        type: actions.assessment.all.requested,
      });
    }
  }

  handleSubmit = () => {
    this.props.dispatch({
      type: actions.response.post.requested,
      data: this.state,
    });

    this.props.history.push('/');
  }

  responseUpdate = (event) => {
    // Update State
    this.setState(prevState => ({
      ...prevState,
      response: {
        ...prevState.response,
        [event.class]: {
          ...prevState.response[event.class],
          [event.name]: event.value,
        },
      },
    }));
  }

  selectorUpdate = (event) => {
    const { name, checked } = event.target;

    const type = checked ?
      actions.response.assessment.selected :
      actions.response.assessment.deselected;

    this.props.dispatch({
      type,
      data: name,
    });
  }

  render = () => (
    <form>
      <AssessmentMetadata onUpdate={this.responseUpdate} />
      {/* <RequiredAssessments /> */}
      <AssessmentSelector
        onUpdate={this.selectorUpdate}
        assessments={this.props.assessments.all}
        selected={this.props.assessments.selected}
      />
      <OptionalAssessments
        onUpdate={this.responseUpdate}
        response={this.props.response}
        assessments={this.props.assessments.all}
        selected={this.props.assessments.selected}
      />
      <Button onClick={this.handleSubmit}>Next</Button>
    </form>
  )
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    assessments: state.assessments,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(AssessmentPage);
