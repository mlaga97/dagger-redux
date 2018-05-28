// Library imports
import React from 'react';
import {Radio} from 'react-bootstrap';

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

// TODO: Number the question
classes.radioScale = function(props) {
	if(typeof props.type.options[Object.keys(props.type.options)[1]] !== 'object') {
		return(
			<tr>
				<td>{props.question.text}</td>
				<React.Fragment>
					{
						Object.keys(props.type.options).map((value, key) => {
							return(
								<td key={key}>
									<Radio name={props.question.id}>
										{value}
									</Radio>
								</td>
							);
						})
					}
				</React.Fragment>
			</tr>
		);
	} else {
		console.warn('Multi-column radioScale is currently unsupported');
		return null;
	}
}

export default classes
