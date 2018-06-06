// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';

// Actions
import actions from '../../actions';

// Components
import Assessment from '../Assessment';

// TODO: Handle the 'optional' part
class OptionalAssessments extends React.Component {
  componentWillMount() {
    if (!this.props.assessments) {
      this.props.dispatch({
        type: actions.assessment.all.requested,
      });
    }
  }

  render() {
    const { assessments } = this.props;

    if (!assessments) {
      return (
        <div>Retrieving assessments...</div>
      );
    }
    return (
      <div>
        {
          Object.keys(assessments).map((key) => {
            if (this.props.response.selected[key]) {
              const assessment = assessments[key];
              const { types, questions } = assessment;
              let { sections } = assessment;

              // Translate questions field into sections format
              // TODO: Decide if we should deprecate assessment.questions
              if (questions) {
                sections = [
                  {
                    questions,
                  },
                ];
              }

              return (
                <Panel key={key} defaultExpanded>
                  <Panel.Heading>
                    <Panel.Title toggle>
                      {assessment.metadata.text}
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Collapse>
                    <Panel.Body>
                      <Assessment types={types} sections={sections} />
                    </Panel.Body>
                  </Panel.Collapse>
                </Panel>
              );
            }
            return null;
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    assessments: state.assessments,
    response: state.response,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OptionalAssessments);
