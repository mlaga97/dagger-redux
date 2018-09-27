// Library imports
import React from 'react';
import { Panel, Grid } from 'react-bootstrap';

// Components
import Assessment from './Assessment';

function Assessments(props) {
  const {
    editable,
    onUpdate,
    response,
    selected,
    assessments,
  } = props;

  if (!assessments) {
    return <div>Retrieving assessments...</div>;
  }

  return (
    <div>
      {
        Object.keys(assessments).map((key) => {
          const assessment = assessments[key];
          const { types, metadata, questions } = assessment;
          const { title, required } = metadata;
          let { sections } = assessment;

          // Hide required assessments if selections are provided.
          if (required && selected) {
            return null;
          }

          // Hide optional assessments if they aren't selected.
          if (!required && selected && !selected[key]) {
            return null;
          }

          // Hide optional assessments if no selections are provided.
          if (!required && !selected) {
            return null;
          }

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
                  {title}
                </Panel.Title>
              </Panel.Heading>
              <Panel.Collapse>
                <Panel.Body>
                  <Grid>
                    <Assessment
                      types={types}
                      editable={editable}
                      metadata={metadata}
                      sections={sections}
                      onUpdate={onUpdate}
                      response={response[key]}
                    />
                  </Grid>
                </Panel.Body>
              </Panel.Collapse>
            </Panel>
          );
        })
      }
    </div>
  );
}

export default Assessments;
