// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Panel, Grid, Row, Col } from 'react-bootstrap';

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
      return <div className='content-loading'>Retrieving response list...</div>;
    }

    const resultCount = Object.keys(this.props.responses.all).length;

    if(resultCount > 0) {
      return (
        <div>
          <Grid>
            <Row>
              <Col sm={12}>
                <div className='search-results-count'>
                  {resultCount} record{(resultCount === 1) ? '' : 's'} submitted today.
                </div>
                <SortableTable responses={this.props.responses}>
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
