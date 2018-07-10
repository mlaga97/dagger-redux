// Library imports
import React from 'react';
import { connect } from 'react-redux';

// Actions
import actions from '../../actions';

// Components
import Metadata from './Metadata';
import Assessments from '../Assessments';

class ResponsePage extends React.Component {
  constructor(props) {
    super(props);

    this.responseID = this.props.match.params.id;
  }

  componentWillMount() {
    const { responses } = this.props;

    if (!this.props.assessments.all) {
      this.props.dispatch({
        type: actions.assessment.all.requested,
      });
    }

    // TODO: Only request the relevant responseID from the server
    if (!responses || !responses.all || !responses.all[this.responseID]) {
      this.props.dispatch({
        type: actions.response.all.requested,
      });
    }
  }

  render() {
    const { responseID, props } = this;
    const assessments = props.assessments.all;

    if (!props.responses || !props.responses.all) {
      return <div>Retrieving response list...</div>;
    }

    // TODO: This isn't super clear.
    const {
      metadata,
      assessments: {
        selected,
        responses,
      },
    } = props.responses.all[responseID];

    // TODO: Heading?
    return (
      <div>
        <Metadata metadata={metadata} />
        <Assessments
          response={responses}
          assessments={assessments}
        />
        <Assessments
          selected={selected}
          response={responses}
          assessments={assessments}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    responses: state.responses,
    assessments: state.assessments,
  }),
  dispatch => ({
    dispatch,
  }),
)(ResponsePage);
