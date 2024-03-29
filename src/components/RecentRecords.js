// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

// Actions
import actions from '../actions';

// Components
// TODO: Break these out to a higher level
import Response from './ResponseList/Response';
import SortableTable from './ResponseList/SortableTable';

// TODO: Replace SortableTable with SearchResults
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

    this.props.dispatch({
      type: actions.response.list.requested,
      parameters: {
        dateSubmittedStart: date,
        dateSubmittedEnd: date,
        userID: this.props.userID,
        queryID: 'recentRecords_user_' + this.props.userID,
      }
    });
  }

  render() {
    const { responses, userID } = this.props;
    const queryID = 'recentRecords_user_' + userID;

    if (!responses.all) {
      return <div className='content-loading'>Retrieving responses...</div>;
    }

    if (!responses.list || !responses.list[queryID]) {
      return <div className='content-loading'>Retrieving response list...</div>;
    }

    const list = responses.list[queryID];
    const resultCount = Object.keys(list).length;
    const results = list.map(key => this.props.responses.all[key]);

    if(resultCount > 0) {
      return (
        <div>
          <Grid>
            <Row>
              <Col sm={12}>
                <div className='search-results-count'>
                  {resultCount} record{(resultCount === 1) ? '' : 's'} submitted today.
                </div>
                <SortableTable responses={results}>
                  <Response />
                </SortableTable>
              </Col>
            </Row>
          </Grid>
        </div>

      );
    } else {
      return (
        <div>
          <Grid>
            <Row>
              <Col sm={12}>
                <div className='search-results-count'>
                  {resultCount} records submitted today.
                </div>
              </Col>
            </Row>
          </Grid>
        </div>

      );
    }
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
