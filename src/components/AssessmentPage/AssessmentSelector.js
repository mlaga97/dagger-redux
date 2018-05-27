// Library imports
import React from 'react';
import {Panel, Grid, Row, Col, Checkbox} from 'react-bootstrap';

let AssessmentSelectorEntry = props => (
	<div>
		<Checkbox>{props.assessmentClass.metadata.text}</Checkbox>
	</div>
)

function AssessmentSelector(props) {
	if(!props.assessments) { 
		return(
			<div>Retrieving assessments...</div>
		);
	} else {
		return(
			<Panel defaultExpanded>
				<Panel.Heading>
					<Panel.Title toggle>
						Assessment Selection
					</Panel.Title>
				</Panel.Heading>
				<Panel.Collapse>
					<Panel.Body>
						<Grid>
							<Row>
								{
									Object.keys(props.assessments).map((key) => {
										let value = props.assessments[key];
										return(
											<Col key={key} xs={12} sm={6} md={3} lg={0.5}>
												<AssessmentSelectorEntry key={key} assessmentClass={value} />
											</Col>
										);
									})
								}
							</Row>
						</Grid>
					</Panel.Body>
				</Panel.Collapse>
			</Panel>
		);
	}
}

export default AssessmentSelector;
