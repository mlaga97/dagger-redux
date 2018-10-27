// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Panel, Grid, Row } from 'react-bootstrap';

// Actions
import actions from '../actions';

// Components
// TODO: Break these out to a higher level
import Response from './ResponseList/Response';
import SortableTable from './ResponseList/SortableTable';
import AdvancedSearch from './ResponseList/AdvancedSearch';
import ConditionalWrapper from './ConditionalWrapper';

class ResponseList extends React.Component {
  componentWillMount() {
    const date = (new Date()).toLocaleString('en-CA').substring(0, 10);
    this.props.dispatch({
      type: actions.response.all.requested,
      parameters: {
        dateSubmittedStart: date,
        dateSubmittedEnd: date,
        userID: this.props.userID,
      }
    });
  }

  render() {
    if (!this.props.responses.all) {
      return <div>Retrieving response list...</div>;
    }

    const resultCount = Object.keys(this.props.responses.all).length;

    return (
      <div>
        <div className='search-results-count'>
          {resultCount} Result{(resultCount === 1) ? '' : 's'}
        </div>
        <SortableTable responses={this.props.responses}>
          <Response />
        </SortableTable>
      </div>
    );
  }
}

export default connect(
  state => ({
    user: state.user,
    responses: state.responses,
  }),
  dispatch => ({
    dispatch,
  }),
)(ResponseList);
