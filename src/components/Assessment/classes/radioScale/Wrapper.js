// Library imports
import React from 'react';
import {Table} from 'react-bootstrap';

// TODO: Consider whether the multicolumn support should be broken off into a separate 'radioScaleMulticolumn' for SIGNIFICANTLY easier maintenence.

function PreHeader(props) {
	if(!props.type.span)
		return null;

	return (
		<tr>
			<th>{props.type.span}</th>
			{
				props.type.options.map((subType, index) => {
					return(
						<th key={index} colSpan={Object.keys(subType.options).length}>
							{subType.span}
						</th>
					);
				})
			}
		</tr>
	);
}

function Header(props) {
	let type = props.type;
	let options = type.options;
	let span = type.span;

	let hasPreheader = !!span;

	if(typeof options[Object.keys(props.type.options)[1]] !== 'object') {
		return (
			<tr>
				<th>
					{
						!hasPreheader ? 'Question' : null
					}
				</th>
				{
					Object.keys(options).map((value, key) => {
						return(
							<th key={key}>
								{value}
							</th>
						);
					})
				}
			</tr>
		);
	} else {
		return (
			<tr>
				<th>
					{
						!hasPreheader ? 'Question' : null
					}
				</th>
				{
					props.type.options.map((subType) => {
						return Object.keys(subType.options).map((value, key) => {
							return(
								<th key={key}>
									{value}
								</th>
							);
						})
					})
				}
			</tr>
		);
	}
}

let Wrapper = (type, children) => {
	return (
		<Table striped bordered condensed hover>
			<thead>
				<PreHeader type={type} />
				<Header type={type} />
			</thead>
			<tbody>
				{children}
			</tbody>
		</Table>
	);
}

export default Wrapper;
