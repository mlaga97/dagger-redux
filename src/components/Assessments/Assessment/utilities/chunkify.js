import areFriends from './areFriends';

function chunkify(types, questions) {
  const chunks = [];

  let currentType = questions[0].type;
  let currentChunk = [];

  questions.forEach((question) => {
    if (areFriends(types, currentType, question.type)) {
      currentChunk.push(question);
    } else {
      chunks.push(currentChunk);

      currentChunk = [];
      currentType = question.type;

      currentChunk.push(question);
    }
  });

  // TODO: This May be wrong?
  chunks.push(currentChunk);

  return chunks;
}

export default chunkify;
