// Library imports
import React from 'react';
import { Table } from 'react-bootstrap';

// TODO: Consider whether the multicolumn support should be broken off into a separate 'radioScaleMulticolumn' for SIGNIFICANTLY easier maintenence.

function PreHeader(props) {
  if (!props.type.span) { return null; }

  return (
    <tr>
      <th>{props.type.span}</th>
      {
				props.type.options.map((subType, index) => (
  <th key={index} colSpan={Object.keys(subType.options).length}>
    {subType.span}
  </th>
				))
			}
    </tr>
  );
}

function HeaderColumns(props) {
  const type = props.type;
  const options = type.options;

  if (typeof options[Object.keys(options)[1]] !== 'object') {
    return Object.keys(options).map((value, key) => (
      <th key={key}>
        {value}
      </th>
    ));
  }
  return options.map((subType) => {
    const options = subType.options;

    return Object.keys(options).map((value, key) => (
      <th key={key}>
        {value}
      </th>
    ));
  });
}

function Header(props) {
  const type = props.type;
  const span = type.span;

  const hasPreheader = span;

  return (
    <tr>
      <th>
        {!hasPreheader ? 'Question' : null}
      </th>
      <HeaderColumns type={type} />
    </tr>
  );
}

function Wrapper(props) {
  const type = props.type;
  const children = props.children;

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
