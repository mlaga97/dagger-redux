// Library imports
import React from 'react';

function Chunk(props) {
  const {
    Wrapper,
    Renderer,
    firstType,
    questions,
    onUpdate,
    response,
  } = props;

  return (
    // Render Wrapper
    <Wrapper type={firstType}>
      {
        // Render Questions
        questions.map(question => (
          <Renderer key={question.name} {...question} response={response} onUpdate={onUpdate} />
        ))
      }
    </Wrapper>
  );
}

export default Chunk;
