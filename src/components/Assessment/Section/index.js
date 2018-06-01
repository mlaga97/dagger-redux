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
  const types = props.types;
  const section = props.section;

  // Section Variables
  const header = section.header;
  const questions = section.questions;
  const description = section.description;

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
					index += offset;
					offset = offset + chunk.length - 1;

					return <Chunk key={index} index={index} questions={chunk} types={types} />;
				})
			}
    </div>
  );
}

export default Section;
