// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Panel, Grid, Row } from 'react-bootstrap';

// Actions
import actions from '../../actions';

// Components
import Response from './Response';
import SortableTable from './SortableTable';
import AdvancedSearch from './AdvancedSearch';
import RandomEntry from '../RandomEntry';
import ConditionalWrapper from '../ConditionalWrapper';

class ResponseList extends React.Component {
  componentWillMount() {
    this.props.dispatch({
      type: actions.response.all.requested,
    });
  }

  render() {
    if (!this.props.responses.all) {
      return <div className='content-loading'>Retrieving response list...</div>;
    }

    const resultCount = Object.keys(this.props.responses.all).length;

    return (
      <div>
        <ConditionalWrapper display={process.env.REACT_APP_ENVIRONMENT === 'development'}>
          <RandomEntry />
        </ConditionalWrapper>
        <Panel defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              Search
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <Grid className='container-response-search-options'>
                <Row>
                  <AdvancedSearch />
                </Row>
              </Grid>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
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
    responses: state.responses,
  }),
  dispatch => ({
    dispatch,
  }),
)(ResponseList);
