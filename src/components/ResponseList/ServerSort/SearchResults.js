// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

// Actions
import actions from '../../../actions';

class SearchResults extends React.Component {
  render() {
    const { responses } = this.props;

    if (!responses || !responses.list || !responses.list['responseList_results'] ) {
      return 'Loading response list...';
    }

    if (!responses || !responses.all) {
      return 'Loading responses...';
    }

    return (
      <Table className='table-search-results table-card-table table-striped'>
        <thead>
          <tr>
            <th>{/* placeholder for record launch button */}</th>
            <th>Date Submitted</th>
            <th>Visit Date</th>
            <th>User ID</th>
            <th>Clinic ID</th>
            <th>Assessments</th>
          </tr>
        </thead>
        <tbody>
          {
            // TODO: Change map -> some?
            responses.list['responseList_results'].map((index) => {
              const response = responses.all[index];

              if (!response) {
                return <tr>Loading response...</tr>;
              }

              return (
                React.Children.map(
                  this.props.children,
                  child => React.cloneElement(child, {
                    response: responses.all[index],
                  }),
                )
              )
            })
          }
        </tbody>
      </Table>
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
)(SearchResults);
