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
	let types = props.types;
	let section = props.section;

	// Section Variables
	let header = section.header;
	let questions = section.questions;
	let description = section.description;

	// Divide section into chunks
	let chunks = getChunks(types, questions);

	return(
		<div>
			{/* Render Header and Description */}
			<Header header={header} />
			<Description description={description} />

			{
				// Render Chunks
				chunks.map((chunk, index) => (
					<Chunk key={index} index={index} questions={chunk} types={types} />
				))
			}
		</div>
	);
}

export default Section;
