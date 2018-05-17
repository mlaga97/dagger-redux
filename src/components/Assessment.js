// Library imports
import React from 'react';

function AssessmentQuestion(props) {
	if(!props.question)
		return null;

	return(
		<div>
			{props.index + 1}. {props.question.text} ({props.question.id}, {typeof(props.question.type) === 'string' ? props.question.type : 'inline'})<br/>
		</div>
	);
}

function AssessmentQuestions(props) {
	if(!props.questions)
		return null;

	return(
		<div>
			{
				props.questions.map((question, index) => {
					return(
						<AssessmentQuestion key={index} index={index} question={question} />
					);
				})
			}
		</div>
	);
}

function AssessmentSectionHeader(props) {
	if(!props.header)
		return null;

	return(
		<div>
			<b>{props.header}</b><br/>
		</div>
	);
}

function AssessmentSectionDescription(props) {
	if(!props.description)
		return null;

	return(
		<div>
			<b>{props.description}</b><br/>
		</div>
	);
}

function AssessmentSection(props) {
	if(!props.section)
		return null;

	// TODO: Header and description
	return(
		<div>
			<AssessmentSectionHeader header={props.section.header} />
			<AssessmentSectionDescription description={props.section.description} />
			<AssessmentQuestions questions={props.section.questions} />
			<br/>
		</div>
	);
}

function Assessment(props) {
	let assessment = props.assessmentClass;

	return(
		<div>
			<h3>{assessment.metadata.text}</h3>
			<AssessmentQuestions questions={assessment.questions} />
			{
				assessment.sections.map((section, index) => {
					return(
						<AssessmentSection key={index} section={section} />
					);
				})
			}
			<hr/>
		</div>
	);
}

export default Assessment;
