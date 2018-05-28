// Library imports
import React from 'react';
import {Radio} from 'react-bootstrap';

function Renderer(props) {
	// TODO: hideLabel
	// TODO: suffix


	if(typeof props.type.options[Object.keys(props.type.options)[1]] !== 'object') {
		return(
			<tr>
				<td>{props.question.text}</td>
				<React.Fragment>
					{
						Object.keys(props.type.options).map((value, key) => (
							<td key={key}>
								<Radio name={props.question.id}>
									{!props.type.hideLabel ? value : null}
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
				<td>{props.question.text}</td>
				<React.Fragment>
					{
						props.type.options.map((subType) => {
							return Object.keys(subType.options).map((value, key) => {
								return(
									<td key={key}>
										<Radio name={props.question.id + ((subType.suffix) ? subType.suffix : '')}>
											{!subType.hideLabel ? value : null}
										</Radio>
									</td>
								)
							})
						})
					}
				</React.Fragment>
			</tr>
		)
	}
}

export default Renderer;
