// Library imports
import React from 'react';

// Components
import Question from './Question';

// Question Classes
import classes from './classes';

function Chunk(props) {
  // Props
  const { types, questions } = props;

  // Check that we have at least one question
  // TODO: getChunks shouldn't do this in the first place...
  if (!questions[0]) {
    return null;
  }

  // Get the type of the first question, now that we know it exists
  let { type } = questions[0];

  // Handle Anonymous Types
  if (typeof type === 'string') {
    // eslint-disable-next-line prefer-destructuring
    type = types[type]; // Turns out the type was actually just the typeName!
  }

  // Set default wrapper
  // TODO: Find out why eslint doesn't like this.
  let Wrapper = props => props.children; // eslint-disable-line no-shadow

  // Replace if we have a better one available
  if (classes[type.class] && classes[type.class].wrapper) {
    Wrapper = classes[type.class].wrapper;
  }

  return (
    <Wrapper type={type}>
      {
        props.questions.map((question, index) => (
          <Question
            key={question.id}
            index={index + props.index}
            question={question}
            types={props.types}
          />
        ))
      }
    </Wrapper>
  );
}

export default Chunk;
