// Library imports
import chunkify from './chunkify';

// Utilities
import expandChunks from './expandChunks';

function getSections(props) {
  const { types, sections } = props;

  // Counting Stuff
  let offset = 1;

  return sections.map((section, index) => {
    const { header, questions, description } = section;

    // Counting Stuff
    const key = index + offset;
    offset += section.questions.length - 1;

    // Divide questions into chunks
    const chunks = chunkify(types, questions);

    return ({
      index,
      types,
      header,
      description,
      chunks: expandChunks({
        types,
        chunks,
        offset: key,
      }),
    });
  });
}

export default getSections;
