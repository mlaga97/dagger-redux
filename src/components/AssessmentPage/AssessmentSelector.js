// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Panel, Grid, Row, Col, Checkbox } from 'react-bootstrap';

// Actions
import actions from '../../actions';

class AssessmentSelector extends React.Component {
  componentWillMount() {
    // TODO: Make this a metadata request
    if (!this.props.assessments) {
      this.props.dispatch({
        type: actions.assessment.all.requested,
      });
    }
  }

  handleChange = (event) => {
    const { name, checked } = event.target;

    const type = checked ?
      actions.response.assessment.selected :
      actions.response.assessment.deselected;

    this.props.dispatch({
      type,
      data: name,
    });
  }

  render() {
    if (!this.props.assessments) {
      return (
        <div>Retrieving assessments...</div>
      );
    }
    return (
      <Panel defaultExpanded>
        <Panel.Heading>
          <Panel.Title toggle>
              Assessment Selection
          </Panel.Title>
        </Panel.Heading>
        <Panel.Collapse>
          <Panel.Body>
            <Grid>
              <Row>
                {
                  Object.keys(this.props.assessments).map((key) => {
                    const assessment = this.props.assessments[key];
                    const { text } = assessment.metadata;

                    // Assume default value, lest we anger React
                    const value = this.props.selected[key] || false;

                    return (
                      <Col key={key} xs={12} sm={6} md={3} lg={0.5}>
                        <Checkbox name={key} onChange={this.handleChange} checked={value}>
                          {text}
                        </Checkbox>
                      </Col>
                    );
                  })
                }
              </Row>
            </Grid>
          </Panel.Body>
        </Panel.Collapse>
      </Panel>
    );
  }
}

function mapStateToProps(state) {
  return {
    assessments: state.assessments,
    selected: state.response.selected,
  };
}

export default connect(
  mapStateToProps,
  dispatch => ({
    dispatch,
  }),
)(AssessmentSelector);
