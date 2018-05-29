// Library imports
import React from 'react';
import {Radio} from 'react-bootstrap';

function Renderer(props) {

	// Props
	let type = props.type;
	let question = props.question;
	let index = props.index;

	// Type Variables
	let options = type.options;

	// Question variables
	let id = question.id;
	let text = question.text;

	// Check if single- or multi- column
	// TODO: Would it be better to split this up?
	if(typeof options[Object.keys(options)[1]] !== 'object') {
		let hideLabel = type.hideLabel;

		return(
			<tr>
				<td>
					{index}. {text}
				</td>
				<React.Fragment>
					{
						Object.keys(options).map((value, key) => (
							<td key={key}>
								<Radio name={id}>
									{!hideLabel ? value : null}
								</Radio>
							</td>
						))
					}
				</React.Fragment>
			</tr>
		);
	} else {
		return(
			<tr>
				<td>{text}</td>
				<React.Fragment>
					{
						props.type.options.map((subType) => {
							let suffix = subType.suffix;
							let options = subType.options;
							let hideLabel = subType.hideLabel;

							return Object.keys(options).map((value, key) => (
								<td key={key}>
									<Radio name={id + ((suffix) ? suffix : '')}>
										{!hideLabel ? value : null}
									</Radio>
								</td>
							))
						})
					}
				</React.Fragment>
			</tr>
		)
	}
}

export default Renderer;
