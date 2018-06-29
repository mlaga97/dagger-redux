// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';

// Actions
import actions from '../../actions';

// Components
import Header from './Header';
import Response from './Response';

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

    return (
      <div>
        <Table>
          <Header />
          <tbody>
            {
              Object.keys(this.props.responses.all).map(index => (
                <Response response={this.props.responses.all[index]} />
              ))
            }
          </tbody>
        </Table>
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
