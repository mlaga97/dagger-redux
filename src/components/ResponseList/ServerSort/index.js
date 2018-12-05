// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

// Actions
import actions from '../../../actions';

// Components
import Response from '../Response';
import SearchResults from './SearchResults';
import SearchParameters from './SearchParameters';
import SearchResultsCount from './SearchResultsCount';

class SearchContainer extends React.Component {
  updateSearch = (parameters) => {
    this.props.dispatch({
      type: 'SEARCH_PARAMETERS_UPDATED',
      parameters: {
        ...parameters,
        queryID: 'responseList_count',
      },
    });

    this.props.dispatch({
      type: actions.response.list.requested,
      parameters: {
        ...parameters,
        queryID: 'responseList_count',
      },
    });

    this.props.dispatch({
      type: actions.response.all.requested,
      parameters: {
        ...parameters,
        //queryID: 'responseList_results', // TODO: Later
      },
    });
  }

  updateSort = (parameters) => {
    this.props.dispatch({
      type: 'SEARCH_SORT_UPDATED',
      parameters,
    });
  }

  updatePage = (parameters) => {
    this.props.dispatch({
      type: 'SEARCH_PAGE_UPDATED',
      parameters,
    });
  }

  componentDidMount() {
    this.updateSearch({});
  }

  render() {
    return (
      <React.Fragment>
        <SearchParameters onUpdate={this.updateSearch} />
        <SearchResultsCount />
        <SearchResults updateSort={this.updateSort}>
          <Response />
        </SearchResults>
      </React.Fragment>
    );
  }
}

export default connect(
  state => ({
    search: state.search,
    responses: state.responses,
  }),
  dispatch => ({
    dispatch,
  }),
)(SearchContainer);
