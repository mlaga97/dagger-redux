// TODO: REFACTOR THIS!!!

// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Table, Panel } from 'react-bootstrap';

// Actions
import actions from '../../actions';

class ResponseAssessments extends React.Component {
  componentWillMount() {
    const { assessments } = this.props;

    // TODO: Only request the relevant assessments?
    if (!assessments || !assessments.all) {
      this.props.dispatch({
        type: actions.assessment.all.requested,
      });
    }
  }

  render() {
    const {
      assessments,
      response: {
        assessments: {
          responses,
        },
      },
    } = this.props;

    if (!assessments || !assessments.all) {
      return <div>Retrieving assessments...</div>;
    }

    // Get the list of keys once
    const keys = Object.keys(responses);

    // Make sure every key has an assessment
    keys.forEach((key) => {
      if (!assessments.all[key]) {
        // eslint-disable-next-line no-console
        console.warn(`No assessment display information for ${key}`);
      }
    });

    // Make sure that the required assessments show up first, by sorting all
    // of the keys into two arrays, required and optional, then concatenate
    // them together for later use.
    const required = keys.filter(key => assessments.all[key].metadata.required);
    const optional = keys.filter(key => !assessments.all[key].metadata.required);
    const assessmentKeysToDisplay = required.concat(optional);

    return (
      <div>
        {
          assessmentKeysToDisplay.map((assessmentID) => {
            const assessment = assessments.all[assessmentID];
            const response = responses[assessmentID];
            const { metadata } = assessment;

            if (!response) {
              return null;
            }

            return (
              <Panel defaultExpanded key={assessmentID}>
                <Panel.Heading>
                  <Panel.Title toggle>
                    {metadata.title}
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                  <Panel.Body>
                    <Table striped bordered condensed hover>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Response</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          // TODO: Display better
                          Object.keys(response).map(questionID => (
                            <tr>
                              <td>{questionID}</td>
                              <td>{response[questionID]}</td>
                            </tr>
                          ))
                        }
                      </tbody>
                    </Table>
                  </Panel.Body>
                </Panel.Collapse>
              </Panel>
            );
          })
        }
      </div>
    );
  }
}

export default connect(
  state => ({
    assessments: state.assessments,
  }),
  dispatch => ({
    dispatch,
  }),
)(ResponseAssessments);
