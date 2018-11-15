// Library imports
import React from 'react';
import { connect } from 'react-redux';

// Actions
import actions from '../actions';

// TODO: Rewrite using React Hooks?
class Query extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: actions.response.list.requested,
      parameters: this.props.parameters,
    });
  }

  render() {
    let { responses, parameters: { queryID } } = this.props;

    if (!this.props.responses || !this.props.responses.list || !this.props.responses.list[queryID]) {
      return '...';
    }

    return this.props.responses.list[queryID].length;
  }
}

export default connect(
  state => ({
    responses: state.responses,
  }),
  dispatch => ({
    dispatch,
  }),
)(Query);

