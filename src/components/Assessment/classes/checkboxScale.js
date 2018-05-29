// Library imports
import React from 'react';
import {Table, Checkbox} from 'react-bootstrap';

function Renderer(props) {

	// Props
	let question = props.question;
	let index = props.index;

	// Question variables
	let id = question.id;
	let text = question.text;

	return(
		<tr>
			<td>
				{index}. {text}
			</td>
			<td>
				<Checkbox name={id} value={1} />
			</td>
		</tr>
	)
}

function Wrapper(props) {
	let children = props.children;

	return(
		<Table striped bordered condensed hover>
			<thead>
				<tr>
					<th>Question</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{children}
			</tbody>
		</Table>
	);
}

export default {
	renderer: Renderer,
	wrapper: Wrapper,
};
