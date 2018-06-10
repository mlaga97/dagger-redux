// Library imports
import React from 'react';
import { Panel, Grid, Row, Col, Checkbox } from 'react-bootstrap';

class AssessmentSelector extends React.Component {
  handleChange = (event) => {
    this.props.onUpdate(event);
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

export default AssessmentSelector;
