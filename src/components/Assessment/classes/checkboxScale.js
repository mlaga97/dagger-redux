// Library imports
import React from 'react';
import {Table, Checkbox} from 'react-bootstrap';

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
		<tr>
			<td>
				<ol start={questionNumber}>
					<li>{text}</li>
				</ol>
			</td>
			<td>
				<Checkbox name={id} value={1} />
			</td>
		</tr>
	)
}

function Wrapper(props) {
	let children = props.children;

	return (
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
