// Library imports
import React from 'react';
import { Table } from 'react-bootstrap';

// Helper
import { convertIntoMultiColumnWrapper } from './helpers';

function PreHeader(props) {
  if (!props.type.span) { return null; }

  return (
    <tr>
      <th>{props.type.span}</th>
      {
        props.type.options.map((subType, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <th key={index} colSpan={Object.keys(subType.options).length}>
            {subType.span}
          </th>
        ))
      }
    </tr>
  );
}

function HeaderColumns(props) {
  const { type } = props;

  const options = convertIntoMultiColumnWrapper(type);

  return options.map(subType => (
    Object.keys(subType.options).map((value, key) => (
      // eslint-disable-next-line react/no-array-index-key
      <th key={key}>
        {value}
      </th>
    ))
  ));
}

function Header(props) {
  const { type, span: hasPreheader } = props;

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
  const { type, children } = props;

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