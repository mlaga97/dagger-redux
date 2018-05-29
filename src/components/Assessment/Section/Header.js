// Library imports
import React from 'react';

function Description(props) {
	let description = props.description;

	if(!description)
		return null;

	return(
		<div>
			<b>{description}</b>
			<br/>
		</div>
	);
}

export default Description;
