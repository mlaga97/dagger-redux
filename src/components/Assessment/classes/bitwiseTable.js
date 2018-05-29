// Library imports
import React from 'react';
import {Table, Checkbox} from 'react-bootstrap';

function Renderer(props) {

	// Props
	let type = props.type
	let question = props.question;

	// Question variables
	let id = question.id;
	let text = question.text;

	// Type Variables
	let options = type.options;

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
			{
				options.map((option, key) => (
					<td key={key}>
						<Checkbox name={id + '-' + key} value={Math.pow(2, key)} />
					</td>
				))
			}
		</tr>
	)
}

function Wrapper(props) {

	// Props
	let children = props.children;
	let type = props.type;

	// Type variables
	let options = type.options;

	return (
		<Table striped bordered condensed hover>
			<thead>
				<tr>
					<th>Question</th>
					{
						options.map((option, key) => (
							<th key={key}>{option}</th>
						))
					}
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
