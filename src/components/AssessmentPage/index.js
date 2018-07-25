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
    const { assessments: { all: assessments } } = props;
    const { response, selected } = state;

    return (
      <form>
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
