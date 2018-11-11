function expandQuestions(props) {
  const { types, offset, questions } = props;

  // TODO: Make MUCH more generic
  return questions.map((question, index) => {
    let { type } = question;
    const {
      min,
      max,
      text,
      step,
      width,
      required,
      id: name,
    } = question;

    // Incremental Numbering
    const number = index + offset;

    // Handle Anonymous Types
    if (typeof type === 'string') {
      type = types[type]; // Turns out the type was actually just the name!
    }

    return {
      min, // Min value
      max, // Max value
      name, // Field name
      type, // Question type
      text, // Question text
      width, // Question width
      number, // Question number
      required, // Is question required
      step, // Increment/decrement step
    };
  });
}

export default expandQuestions;
