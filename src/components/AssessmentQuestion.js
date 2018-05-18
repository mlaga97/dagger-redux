// Library imports
import React from 'react';

// Helpers
let questionStyle = {
	'paddingLeft': '20px',
}

var classes = {};

classes.radioOptions = function(props) {
	return(
		<div>
			{props.index + 1}. {props.question.text} ({props.question.id}, {typeof(props.question.type) === 'string' ? props.question.type : 'inline'})
			<div style={questionStyle}>
				{
					Object.keys(props.type.options).map((value, key) => {
						return(
							<div key={key}>{value}: {props.type.options[value]}</div>
						);
					})
				}
			</div>
			<br/>
		</div>
	);
}

classes.radioScale = function(props) {
	if(typeof props.type.options[Object.keys(props.type.options)[1]] !== 'object') {
		return(
			<div>
				{props.index + 1}. {props.question.text} ({props.question.id}, {typeof(props.question.type) === 'string' ? props.question.type : 'inline'})
				<div style={questionStyle}>
					{
						Object.keys(props.type.options).map((value, key) => {
							return(
								<div key={key}>{value}: {props.type.options[value]}</div>
							);
						})
					}
				</div>
				<br/>
			</div>
		);
	} else {
		console.warn('Multi-column radioScale is currently unsupported');
		return null;
	}
}

// TODO: Inline types
function AssessmentQuestion(props) {
	if(!props.question)
		return null;

	switch(typeof props.question.type) {
		case 'string':
			let type = props.types[props.question.type];

			if(!classes[type.class]) {
				console.warn('No renderer for class: ' + type.class);
				return(
					<div>
						{props.index + 1}. {props.question.text} ({props.question.id}, {typeof(props.question.type) === 'string' ? props.question.type : 'inline'})<br/>
					</div>
				)
			} else {
				return classes[type.class]({
					index: props.index,
					question: props.question,
					type: props.types[props.question.type],
				});
			}

		case 'object':
			console.warn('Inline types are currently unsupported');

			return(
				<div>
					{props.index + 1}. {props.question.text} ({props.question.id}, {typeof(props.question.type) === 'string' ? props.question.type : 'inline'})<br/>
				</div>
			)

		default:
			// TODO: More helpful error message
			console.warn('TODO: Make a more descriptive error message here.');
	}

}

export default AssessmentQuestion;
