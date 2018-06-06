// Library imports
import React from 'react';

// Components
import Chunk from './Chunk';
import Description from './Description';
import Header from './Header';

// TODO: Come up with a better system than header and description.
function Section(props) {
  const { chunks, header, description } = props;

  return (
    <div>
      {/* Render Header and Description */}
      <Header header={header} />
      <Description description={description} />

      {
        // Render Chunks
        chunks.map(chunk => (
          <Chunk key={chunk.index} {...chunk} />
        ))
      }
    </div>
  );
}

export default Section;
