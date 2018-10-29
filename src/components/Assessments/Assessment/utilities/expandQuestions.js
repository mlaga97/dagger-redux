function expandQuestions(props) {
  const { types, offset, questions } = props;

  return questions.map((question, index) => {
    let { type } = question;
    const {
      text,
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
      name, // Field name
      type, // Question type
      text, // Question text
      width, // Question width
      number, // Question number
      required, // Is question required
    };
  });
}

export default expandQuestions;
