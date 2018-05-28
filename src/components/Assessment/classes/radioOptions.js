// Library imports
import React from 'react';
import {Radio} from 'react-bootstrap';

// Helpers
let questionStyle = {
	'paddingLeft': '20px',
}

function renderer(props) {

	// Props
	let type = props.type;
	let index = props.index + 1;
	let question = props.question;

	// Type Variables
	let options = type.options;

	// Question Variables
	let id = question.id;
	let text = question.text;
	let typeName = typeof(question.type) === 'string' ? question.type : 'inline';

	return(
		<div>
			{index}. {text} ({id}, {typeName})
			<div style={questionStyle}>
				{
					Object.keys(options).map((option, key) => {
						return(
							<Radio key={key} value={options[option]} name={id}>
								{option}
							</Radio>
						);
					})
				}
			</div>
			<br/>
		</div>
	);
							//<div key={key}>{value}: {options[value]}</div>
}

export default {
	renderer: renderer,
};
