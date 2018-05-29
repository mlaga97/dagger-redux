// Library imports
import React from 'react';

// Components
import Question from './Question';

// Question Classes
import classes from './classes';

function Chunk(props) {

	// Props
	let questions = props.questions;
	let types = props.types;

	// Check that we have at least one question
	// TODO: getChunks shouldn't do this in the first place...
	if(!questions[0]) {
		return null;
	}

	// Get the type of the first question, now that we know it exists
	let type = questions[0].type;

	// Handle Anonymous Types
	if(typeof type === 'string') {
		// Turns out the type was actually just the typeName!
		// TODO: Stop using this variable for 2 different things?
		type = types[type];
	}

	// Set default wrapper
	let Wrapper = props => props.children;

	// Replace if we have a better one available
	if(classes[type.class] && classes[type.class].wrapper) {
		Wrapper = classes[type.class].wrapper;
	}

	return(
		<Wrapper type={type}>
			{
				props.questions.map((question, index) => (
					<Question key={index} index={index + props.index} question={question} types={props.types} />
				))
			}
		</Wrapper>
	);
}

export default Chunk;
