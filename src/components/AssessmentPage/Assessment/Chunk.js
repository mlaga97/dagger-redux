// Library imports
import React from 'react';

const Chunk = ({
  Wrapper,
  Renderer,
  firstType,
  questions,
  onUpdate,
  response,
}) => (
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

export default Chunk;
