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
