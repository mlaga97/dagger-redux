function expandQuestions(props) {
  const { types, offset, questions } = props;

  return questions.map((question, index) => {
    let { type } = question;
    const { id: name, text } = question;

    // Incremental Numbering
    const number = index + offset;

    // Handle Anonymous Types
    if (typeof type === 'string') {
      type = types[type]; // Turns out the type was actually just the name!
    }

    // Get options
    const { options } = type;

    return {
      name, // Field name
      text, // Question text
      number, // Question number
      options, // Question options
    };
  });
}

export default expandQuestions;