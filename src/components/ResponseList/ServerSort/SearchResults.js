// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

// Actions
import actions from '../../../actions';

class SearchResults extends React.Component {
  handleClick = (event) => {
    const name = event.target.attributes.name.value;

    // TODO: Fix
    const val = this.props.parameters.order;

    if (val === -1) {
      this.props.updateSort({
        orderBy: name,
        order: 1,
      });

      return;
    }

    this.props.updateSort({
      orderBy: name,
      order: -1,
    });
  }

  helper = (target, name) => {
    let out = 'sort sort-inactive';

    if (this.props.parameters.orderBy === target) {
      if (this.props.parameters.order === 1) {
        out = ['sort sort-active sort-desc'];
      } else {
        out = ['sort sort-active sort-asc'];
      }
    }

    return (
      <th name={target} className={out} onClick={this.handleClick}>
        {name}
      </th>
    );
  }

  render() {
    const { responses } = this.props;

    if (!responses || !responses.list || !responses.list['responseList_results'] ) {
      return 'Loading response list...';
    }

    if (!responses || !responses.all) {
      return 'Loading responses...';
    }

    // TODO: User and clinic sorting don't work right!
    return (
      <Table className='table-search-results table-card-table table-striped'>
        <thead>
          <tr>
            <th>{/* placeholder for record launch button */}</th>
            <th>{this.helper('dateSubmitted', 'Date Submitted')}</th>
            <th>{this.helper('visitDate', 'Visit Date')}</th>
            <th>{this.helper('user', 'User ID')}</th>
            <th>{this.helper('clinic', 'Clinic ID')}</th>
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
