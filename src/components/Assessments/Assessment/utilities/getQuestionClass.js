// Utilities
import getQuestionType from './getQuestionType';

function getQuestionClass(question, types) {
  return getQuestionType(question, types).class;
}

export default getQuestionClass;
