// Library imports
import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

function Renderer(props) {

	// Props
	let question = props.question;

	// Question variables
	let id = question.id;
	let text = question.text;

	// TODO: Learn how to count.
	// TODO: Is ol/li the best way?
	let questionNumber = 0;

	return(
		<FormGroup>
			<ControlLabel>
				{questionNumber}. {text}
			</ControlLabel>
			<FormControl type='text' name={id} />
		</FormGroup>
	)
}

export default {
	renderer: Renderer,
};
