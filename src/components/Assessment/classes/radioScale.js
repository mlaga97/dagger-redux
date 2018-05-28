// Library imports
import React from 'react';
import {Radio, Table} from 'react-bootstrap';

function renderer(props) {
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

let wrapper = child => (
	<Table striped bordered condensed hover>
		<tbody>
			{child}
		</tbody>
	</Table>
);

export default {
	wrapper: wrapper,
	renderer: renderer,
};
