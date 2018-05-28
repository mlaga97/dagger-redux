// Library imports
import React from 'react';
import getChunks from './getChunks';

// Components
import Chunk from '../Chunk';

function Header(props) {
	let header = props.header;

	if(!header)
		return null;

	return(
		<div>
			<b>{header}</b>
			<br/>
		</div>
	);
}

function Description(props) {
	let description = props.description;

	if(!description)
		return null;

	return(
		<div>
			<b>{description}</b>
			<br/>
		</div>
	);
}

// TODO: Come up with a better system than header and description.
function Section(props) {

	// Props
	let types = props.types;
	let section = props.section;

	// Section Variables
	let header = section.header;
	let questions = section.questions;
	let description = section.description;

	// Get Chunks
	let chunks = getChunks(types, questions);

	return(
		<div>
			<Header header={header} />
			<Description description={description} />

			{
				// Render Chunks
				chunks.map((chunk, index) => {
					return(
						<Chunk key={index} index={index} questions={chunk} types={types} />
					);
				})
			}
		</div>
	);
}

export default Section;
