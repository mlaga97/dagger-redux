// Library imports
import React from 'react';
import getChunks from './getChunks';

// Components
import Chunk from '../Chunk';
import Description from './Description';
import Header from './Header';

// TODO: Come up with a better system than header and description.
function Section(props) {
  // Props
  const { types, section } = props;

  // Section Variables
  const { header, questions, description } = section;

  // Divide section into chunks
  const chunks = getChunks(types, questions);

  // Index
  let offset = props.index;

  return (
    <div>
      {/* Render Header and Description */}
      <Header header={header} />
      <Description description={description} />

      {
        // Render Chunks
        chunks.map((chunk, index) => {
          const key = index + offset;
          offset += chunk.length - 1;

          return <Chunk key={key} index={key} questions={chunk} types={types} />;
        })
      }
    </div>
  );
}

export default Section;
