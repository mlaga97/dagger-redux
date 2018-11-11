// Library imports
import React from 'react';
import { Panel, Grid, Row, Col, Table } from 'react-bootstrap';

let formatDate = function(input) {
  let pattern = /(\d{4})\-(\d{2})\-(\d{2})/;
  if (!input || !input.match(pattern)) {
    return null;
  }
  return input.replace(pattern, '$2/$3/$1');
};

const Record = ({
  visit,
  dateSubmitted,
}) => (
  <Panel defaultExpanded>
    <Panel.Heading>
      <Panel.Title toggle>
        Record Overview
      </Panel.Title>
    </Panel.Heading>
    <Panel.Collapse>
      <Panel.Body>
        <Grid>
          <Row>
            <Col sm={4}>
              <Table striped bordered className='table-response table-vertical'>
                  <thead>
                    <tr>
                       <th colspan='2'>
                          Record Overview
                       </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                       <th>Assessment Performed</th>
                       <td data-label='Assessment Performed'>{formatDate(visit.date)}</td>
                    </tr>
                    <tr>
                       <th>Assessment Recorded</th>
                       <td data-label='Assessment Recorded'>{formatDate(dateSubmitted.split(' ')[0])}</td>
                    </tr>
                  </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </Panel.Body>
    </Panel.Collapse>
  </Panel>
);

export default Record;
