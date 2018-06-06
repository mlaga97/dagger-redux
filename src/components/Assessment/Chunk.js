// Library imports
import React from 'react';

function Chunk(props) {
  const {
    Wrapper,
    Renderer,
    firstType,
    questions,
  } = props;

  return (
    // Render Wrapper
    <Wrapper type={firstType}>
      {
        // Render Questions
        questions.map(question => (
          <Renderer key={question.name} {...question} />
        ))
      }
    </Wrapper>
  );
}

export default Chunk;
