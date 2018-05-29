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
	// TODO: getChunks shouldn't do this.
	if(!questions[0]) {
		console.warn('Chunk was empty!');
		return null;
	}

	// Question Variables
	let type = questions[0].type;

	// Calculate children, since these will be the same no matter what
	let children = (
		<React.Fragment>
			{
				questions.map((question, index) => (
					<Question key={index} index={index} question={question} types={types} />
				))
			}
		</React.Fragment>
	)

	// Handle Anonymous Types
	if(typeof type === 'string') {
		// Turns out the type was actually just the typeName!
		// TODO: Stop using this variable for 2 different things.
		type = types[type];
	}

	// Check if we have a wrapper available
	if(classes[type.class] && classes[type.class].wrapper) {
		let Wrapper = classes[type.class].wrapper;
		return(
			<Wrapper type={type}>
				{children}
			</Wrapper>
		);
	}

	// Fall back to provisional wrapper
	console.warn('No chunk wrapper specified for ' + type.class);
	return children;
}

export default Chunk;
