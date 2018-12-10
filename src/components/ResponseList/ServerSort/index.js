// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

// Actions
import actions from '../../../actions';

// Components
import Response from '../Response';
import SearchDump from './SearchDump';
import PageSelector from './PageSelector';
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
    this.setState(prevState => ({
      ...prevState,
      searchParameters,
      pageParameters: {
        ...prevState.pageParameters,
        page: 1, // Reset page on new search.
      }
    }));

    const parameters = {
      ...this.state.pageParameters,
      page: 1, // Override page argument since it state hasn't updated yet.
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
      page: 1, // Override page argument since it state hasn't updated yet.
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
    if (!this.props.responses.list || !this.props.responses.list['responseList_count']) {
      return 'Loading...';
    }

    // Calculate number of pages
    const maxPage = Math.ceil(this.props.responses.list['responseList_count'].length / this.state.pageParameters.count);

    return (
      <React.Fragment>
        <SearchParameters onUpdate={this.updateSearch} parameters={this.state.searchParameters} />
        <SearchResultsCount />
        <SearchResults updateSort={this.updateSort} parameters={this.state.sortParameters} >
          <Response />
        </SearchResults>
        <PageSelector
          onUpdate={this.updatePage}
          parameters={this.state.pageParameters}
          maxPage={maxPage}
        />
        <SearchDump
          parameters={{
            ...this.state.sortParameters,
            ...this.state.searchParameters,
          }}
          maxPage={maxPage}
        />
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
