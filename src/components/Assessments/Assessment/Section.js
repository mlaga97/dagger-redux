// Library imports
import React from 'react';

// Components
import Chunk from './Chunk';
import Description from './Description';
import Header from './Header';

// TODO: Come up with a better system than header and description.
function Section(props) {
  const {
    chunks,
    header,
    editable,
    onUpdate,
    response,
    description,
  } = props;

  // TODO: This is definitely wrong
  if (!chunks[0]) {
    chunks.shift();
  }

  return (
    <div>
      {/* Render Header and Description */}
      <Header header={header} />
      <Description description={description} />

      {
        // Render Chunks
        chunks.map(chunk => (
          <Chunk key={chunk.index} {...chunk} editable={editable} response={response} onUpdate={onUpdate} />
        ))
      }
    </div>
  );
}

export default Section;
