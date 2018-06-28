// Library imports
import React from 'react';
import { Panel } from 'react-bootstrap';

// Components
import Assessment from './Assessment';

// TODO: Merge with OptionalAssessments
function RequiredAssessments(props) {
  const {
    onUpdate,
    response,
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
          const { metadata } = assessment;
          const { title, required } = metadata;

          if (required) {
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
                    {title}
                  </Panel.Title>
                </Panel.Heading>
                <Panel.Collapse>
                  <Panel.Body>
                    <Assessment
                      types={types}
                      metadata={metadata}
                      sections={sections}
                      onUpdate={onUpdate}
                      response={response[key]}
                    />
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

export default RequiredAssessments;
