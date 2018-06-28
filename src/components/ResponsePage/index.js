// Library imports
import React from 'react';
import { connect } from 'react-redux';

// Actions
import actions from '../../actions';

// Components
import Metadata from './Metadata';
import Assessments from './Assessments';

class ResponsePage extends React.Component {
  constructor(props) {
    super(props);

    this.responseID = this.props.match.params.id;
  }

  componentWillMount() {
    const { responses } = this.props;

    // TODO: Only request the relevant responseID from the server
    if (!responses || !responses.all || !responses.all[this.responseID]) {
      this.props.dispatch({
        type: actions.response.all.requested,
      });
    }
  }

  render() {
    const { responseID, props } = this;
    const { responses } = props;

    if (!responses || !responses.all) {
      return (
        <div>
          Retrieving response list...
        </div>
      );
    }

    const response = responses.all[responseID];

    if (!response) {
      return (
        <div>
          No response found for that id!
        </div>
      );
    }

    const { metadata } = this.props.responses.all[responseID];

    // TODO: Heading?
    return (
      <div>
        <Metadata metadata={metadata} />
        <Assessments response={response} />
      </div>
    );
  }
}

export default connect(
  state => ({
    responses: state.responses,
  }),
  dispatch => ({
    dispatch,
  }),
)(ResponsePage);
