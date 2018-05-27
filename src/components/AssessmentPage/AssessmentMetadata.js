// Library imports
import React from 'react';
import {Panel, FormGroup, ControlLabel, FormControl, ToggleButtonGroup, ToggleButton} from 'react-bootstrap';

export default () => (
	<Panel defaultExpanded>
		<Panel.Heading>
			<Panel.Title toggle>
				Assessment Metadata
			</Panel.Title>
		</Panel.Heading>
		<Panel.Collapse>
			<Panel.Body>
				<FormGroup>
					<ControlLabel>Patient ID</ControlLabel>
					<FormControl type='text' />
				</FormGroup>
				<FormGroup>
					<ControlLabel>Patient DOB</ControlLabel>
					<FormControl type='date' />
				</FormGroup>
				<FormGroup>
					<ControlLabel>Assessment Date Today</ControlLabel>
					<br/>
					<ToggleButtonGroup name='assessmentDataToday' type='radio'>
						<ToggleButton value={true}>Yes</ToggleButton>
						<ToggleButton value={false}>No</ToggleButton>
					</ToggleButtonGroup>
				</FormGroup>
				<FormGroup>
					<ControlLabel>Assessment Date</ControlLabel>
					<FormControl type='date' />
				</FormGroup>
			</Panel.Body>
		</Panel.Collapse>
	</Panel>
)
