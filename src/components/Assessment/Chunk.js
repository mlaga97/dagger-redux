// Library imports
import React from 'react';
import {Table} from 'react-bootstrap';

// Components
import Question from './Question';

function Chunk(props) {

	// Props
	let questions = props.questions;
	let types = props.types;

	// Check that we have at least one question
	// TODO: getChunks shouldn't do this.
	if(!questions[0]) {
		console.warn('Chunk was empty!');
		return null;
	}

	// Question Variables
	let type = questions[0].type;
	let id = questions[0].id;

	// Handle Anonymous Types
	if(typeof type !== 'string') {
		return(
			<div>
				{
					questions.map((question, index) => (
						<Question key={index} index={index} question={question} types={types} />
					))
				}
			</div>
		);
	}

	// Turns out the type was actually just the typeName!
	// TODO: Stop using this variable for 2 different things.
	type = types[type];

	// TODO: Handle wrappers in some better way.
	switch(type.class) {
		case 'radioScale':
			return (
				<Table striped bordered condensed hover>
					<tbody>
						{
							questions.map((question, index) => (
								<Question key={index} index={index} question={question} types={types} />
							))
						}
					</tbody>
				</Table>
			);
		default:
			console.warn('No chunk wrapper specified for ' + type.class);
			return(
				<div>
					{
						questions.map((question, index) => (
							<Question key={index} index={index} question={question} types={types} />
						))
					}
				</div>
			);
	}
}

export default Chunk;
