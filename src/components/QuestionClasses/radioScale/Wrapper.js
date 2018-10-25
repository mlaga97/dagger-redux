// Library imports
import React from 'react';
import { Col, Table } from 'react-bootstrap';

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

function PreHeaderNonEdit(props) {
  if (!props.type.span) { return null; }

  return (
    <tr>
      <th>{props.type.span}</th>
      {
        props.type.options.map((subType, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <th key={index}>
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
  const { type, children, editable } = props;

  if (!editable && type.span) {
    return (
      <React.Fragment>
        <Col sm={12}>
          <Table striped bordered className={"table-response"} >
            <thead>
              <PreHeaderNonEdit type={type} />
            </thead>
            <tbody>
              {children}
            </tbody>
          </Table>
        </Col>
      </React.Fragment>
    );
  }

  if (!editable && !type.span) {
    return (
      <React.Fragment>
        <Col sm={12}>
          <Table striped bordered className={"table-response"} >
            <thead>
              <tr>
                <th>Question</th>
                <th>Response</th>
              </tr>
            </thead>
            <tbody>
              {children}
            </tbody>
          </Table>
        </Col>
      </React.Fragment>
    );
  }

  // Fall back to radioOptions if on a mobile device
  // TODO: Better
  const isMobile = window.innerWidth <= 500;
  if (isMobile) {
    return (
      <Col sm={12}>
        {children}
      </Col>
    );
  }

  return (
      <Col sm={12}>
        <Table striped bordered condensed hover className={"table-assessment"} >
          <thead>
            <PreHeader type={type} />
            <Header type={type} />
          </thead>
          <tbody>
            {children}
          </tbody>
        </Table>
      </Col>
  );
}

export default Wrapper;
