// Question Classes
import classes from './classes';

function Question(props) {

	// Props
	let index = props.index + 1;
	let types = props.types;
	let question = props.question;

	// Question Variables
	let type = question.type;

	// Handle Anonymous Types
	if(typeof type === 'string')
		type = types[type]; // Turns out the type was actually just the name!

	// Check if we have a renderer available
	if(classes[type.class] && classes[type.class].renderer) {
		return classes[type.class].renderer({
			index: index,
			question: question,
			type: type,
		});
	}

	// Fail if no renderer available
	console.warn('No renderer for class: ' + type.class);
	return null;
}

export default Question;
