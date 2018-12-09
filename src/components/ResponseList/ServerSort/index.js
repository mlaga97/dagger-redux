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
  constructor(props) {
    super(props);

    this.state = {
      pageParameters: {
        page: 1,
        count: 10,
      },
      sortParameters: {},
      searchParameters: {},
    }
  }

  updateCount = (parameters) => {
    this.props.dispatch({
      type: actions.response.list.requested,
      parameters: {
        ...parameters,
        queryID: 'responseList_count',
      },
    });
  }

  updateResults = (parameters) => {
    this.props.dispatch({
      type: actions.response.list.requested,
      parameters: {
        ...parameters,
        queryID: 'responseList_results',
      },
    });

    // TODO: Make sure this loads only the ones we need.
    this.props.dispatch({
      type: actions.response.all.requested,
      parameters: {
        ...parameters,
        //queryID: 'responseList_results', // TODO: Later
      },
    });
  }

  updateSearch = (searchParameters) => {
    this.setState({
      searchParameters,
    });

    const parameters = {
      ...this.state.pageParameters,
      ...this.state.sortParameters,
      ...searchParameters, // Use function argument since state hasn't updated yet.
    }

    this.updateCount(searchParameters);
    this.updateResults(parameters);
  }

  updateSort = (sortParameters) => {
    this.setState({
      sortParameters,
    });

    const parameters = {
      ...this.state.pageParameters,
      ...sortParameters, // Use function argument since state hasn't updated yet.
      ...this.state.searchParameters,
    }

    this.updateResults(parameters);
  }

  updatePage = (pageParameters) => {
    this.setState({
      pageParameters,
    });

    const parameters = {
      ...pageParameters, // Use function argument since state hasn't updated yet.
      ...this.state.sortParameters,
      ...this.state.searchParameters,
    }

    this.updateResults(parameters);
  }

  componentDidMount() {
    this.updateSearch({});
  }

  render() {
    return (
      <React.Fragment>
        <SearchParameters onUpdate={this.updateSearch} parameters={this.state.searchParameters} />
        <SearchResultsCount />
        <SearchResults updateSort={this.updateSort} >
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
