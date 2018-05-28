// Library imports
import React from 'react';

// Question Classes
import classes from './classes';

function Question(props) {

	// Props
	let index = props.index + 1;
	let types = props.types;
	let question = props.question;

	// Question Variables
	let text = question.text;
	let id = question.id;
	let type = question.type;

	// Handle Anonymous Types
	// TODO: Anonymous Types
	if(typeof question.type !== 'string') {
		console.warn('Inline types are currently unsupported');

		return(
			<div>
				{index}. {text} ({id}, {typeof(type) === 'string' ? type : 'inline'})
				<br/>
			</div>
		)
	}

	// Turns out the type was actually just the typeName!
	// TODO: Stop using this variable for 2 different things.
	type = types[type];

	// Check if we have a renderer available
	if(classes[type.class]) {
		return classes[type.class]({
			index: props.index,
			question: props.question,
			type: props.types[props.question.type],
		});
	}

	// Fall back to provisional renderer
	console.warn('No renderer for class: ' + type.class);
	return(
		<div>
			{index}. {text} ({id}, {typeof(type) === 'string' ? type : 'inline'})
			<br/>
		</div>
	)
}

export default Question;
