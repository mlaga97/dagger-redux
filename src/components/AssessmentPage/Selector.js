// Library imports
import React from 'react';
import { Panel, Grid, Row, Col, Checkbox } from 'react-bootstrap';

class AssessmentSelector extends React.Component {
  handleChange = (event) => {
    this.props.onUpdate(event);
  }

  render() {
    if (!this.props.assessments) {
      return <div className='content-loading'>Retrieving assessments...</div>;
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
            <Grid className={'container-assessment-selection'}>
              <Row>
                {
                  Object.keys(this.props.assessments).map((key) => {
                    const { response } = this.props;
                    const assessment = this.props.assessments[key];
                    const { title, required, tags } = assessment.metadata;

                    // Filter based on child/adult
                    // TODO: Make more flexible
                    // TODO: Move somewhere else
                    if (tags) {
                      if (response.metadata && response.metadata.patientDOB) {
                        let today = new Date();
                        let birthDate = new Date(response.metadata.patientDOB);
                        let age = today.getFullYear() - birthDate.getFullYear();
                        let m = today.getMonth() - birthDate.getMonth();

                        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
                          age--;
                        }

                        if (tags.includes('adultOnly') && age < 18) {
                          return null;
                        }

                        if (tags.includes('childOnly') && age >= 18) {
                          return null;
                        }
                      }
                    }

                    if (required) {
                      return null;
                    }

                    // Assume default value, lest we anger React
                    const value = this.props.selected[key] || false;

                    return (
                      <Col key={key} sm={3}>
                        <Checkbox name={key} onChange={this.handleChange} checked={value}>
                          {title}
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
