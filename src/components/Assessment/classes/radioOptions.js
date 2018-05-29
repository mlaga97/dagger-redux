// Library imports
import React from 'react';
import {FormGroup, ControlLabel, Radio} from 'react-bootstrap';

// Helpers
let questionStyle = {
	'paddingLeft': '20px',
}

function renderer(props) {

	// Props
	let type = props.type;
	let question = props.question;

	// Type Variables
	let options = type.options;

	// Question Variables
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
			<div style={questionStyle}>
				{
					Object.keys(options).map((option, key) => (
						<Radio key={key} value={options[option]} name={id}>
							{option}
						</Radio>
					))
				}
			</div>
		</FormGroup>
	);
}

export default {
	renderer: renderer,
};
