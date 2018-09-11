// Library imports
import React from 'react';
import { connect } from 'react-redux';

// Actions
import actions from '../../actions';

// Components
import Sorting from './Sorting';
import Response from './Response';
import SortableTable from './SortableTable';

class ResponseList extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: actions.response.all.requested,
    });
  }

  render() {
    if (!this.props.responses.all) {
      return <div>Retrieving response list...</div>;
    }

    const resultCount = Object.keys(this.props.responses.all).length;

    return (
      <div>
        <Sorting />
        <hr/>
        <h3>{resultCount} Result{(resultCount === 1) ? '' : 's'}</h3>
        <SortableTable responses={this.props.responses}>
          <Response />
        </SortableTable>
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
)(ResponseList);
