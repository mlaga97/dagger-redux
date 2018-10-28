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
    const { responseID, props } = this;
    const { responses } = props;

    if (!this.props.assessments.all) {
      this.props.dispatch({
        type: actions.assessment.all.requested,
      });
    }

    if (!responses || !responses.all || !responses.all[responseID] || !responses.all[String(responseID)].assessments.responses) {
      this.props.dispatch({
        type: actions.response.get.requested,
        data: this.responseID,
      });
    }

    // Prevent page from loading at bottom or in middle.
    window.scrollTo(0, 0); // TODO: Not this.
  }

  render() {
    const { responseID, props } = this;
    const assessments = props.assessments.all;

    if (!props.responses || !props.responses.all || !props.responses.all[responseID] || !props.responses.all[String(responseID)].assessments.responses) {
      return <div>Retrieving response data...</div>;
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
