// Library imports
import React from 'react';

const Chunk = ({
  Wrapper,
  Renderer,
  editable,
  firstType,
  questions,
  onUpdate,
  response,
}) => (
  // Render Wrapper
  <Wrapper type={firstType} editable={editable}>
    {
      // Render Questions
      questions.map(question => (
        <Renderer key={question.name} {...question} editable={editable} response={response} onUpdate={onUpdate} />
      ))
    }
  </Wrapper>
);

export default Chunk;
