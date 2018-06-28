function getQuestionType(question, types) {
  const { type } = question;

  // Convert all to anonymous format
  if (typeof type === 'string') {
    return types[type];
  }

  return type;
}

export default getQuestionType;
