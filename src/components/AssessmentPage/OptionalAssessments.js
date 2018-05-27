// Library imports
import React from 'react';
import {Panel} from 'react-bootstrap';

// Components
import Assessment from '../Assessment';

// TODO: Handle the 'optional' part
function OptionalAssessments(props) {
	if(!props.assessments) { 
		return(
			<div>Retrieving assessments...</div>
		);
	} else {
		return(
			<div>
				{
					Object.keys(props.assessments).map((key) => {
						let assessment = props.assessments[key];

						return(
							<Panel key={key}>
								<Panel.Heading>
									<Panel.Title toggle>
										{assessment.metadata.text}
									</Panel.Title>
								</Panel.Heading>
								<Panel.Collapse>
									<Panel.Body>
										<Assessment assessment={assessment}/>
									</Panel.Body>
								</Panel.Collapse>
							</Panel>
						);
					})
				}
			</div>
		);
	}
}

export default OptionalAssessments;
