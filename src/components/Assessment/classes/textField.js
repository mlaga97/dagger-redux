// Library imports
import React from 'react';
import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

function Renderer(props) {

	// Props
	let question = props.question;
	let index = props.index;

	// Question variables
	let id = question.id;
	let text = question.text;

	return(
		<FormGroup>
			<ControlLabel>
				{index}. {text}
			</ControlLabel>
			<FormControl type='text' name={id} />
		</FormGroup>
	)
}

export default {
	renderer: Renderer,
};
