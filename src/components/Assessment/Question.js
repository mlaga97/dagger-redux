// Question Classes
import classes from './classes';

function Question(props) {
  // Props
  const index = props.index + 1;
  const types = props.types;
  const question = props.question;

  // Question Variables
  let type = question.type;

  // Handle Anonymous Types
  if (typeof type === 'string') { type = types[type]; } // Turns out the type was actually just the name!

  // Check if we have a renderer available
  if (classes[type.class] && classes[type.class].renderer) {
    return classes[type.class].renderer({
      index,
      question,
      type,
    });
  }

  // Fail if no renderer available
  console.warn(`No renderer for class: ${type.class}`);
  return null;
}

export default Question;
