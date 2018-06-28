// Utilities
import getWrapper from './getWrapper';
import getRenderer from './getRenderer';
import expandQuestions from './expandQuestions';
import getQuestionType from './getQuestionType';
import getQuestionClass from './getQuestionClass';

function expandChunks(props) {
  let { offset } = props;
  const { types, chunks } = props;

  return chunks.map((chunk, index) => {
    // Counting Stuff
    const key = index + offset;
    offset += chunk.length - 1;

    // Check that we have at least one question
    // TODO: Move this into chunkify, or fix the underlying issue?
    if (!chunk[0]) {
      return null;
    }

    // Get the type of the first question, for rendering the wrapper
    const firstType = getQuestionType(chunk[0], types);

    // Get the class of the first question, for retrieving components
    const firstClass = getQuestionClass(chunk[0], types);

    return ({
      index,
      Wrapper: getWrapper(firstClass),
      Renderer: getRenderer(firstClass),
      firstType,
      questions: expandQuestions({
        types,
        offset: key,
        questions: chunk,
      }),
    });
  });
}

export default expandChunks;
