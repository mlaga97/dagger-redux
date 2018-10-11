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
    <React.Fragment>
      {/* Render Header and Description */}
      <Header header={header} />
      <Description description={description} />

      {
        // Render Chunks
        chunks.map(chunk => (
          <Chunk
            {...chunk}
            key={chunk.index}
            editable={editable}
            response={response}
            onUpdate={onUpdate}
          />
        ))
      }
    </React.Fragment>
  );
}

export default Section;
