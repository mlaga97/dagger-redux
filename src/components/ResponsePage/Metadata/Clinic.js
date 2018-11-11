// Library imports
import React from 'react';
import { Panel, Grid, Row, Col, Table } from 'react-bootstrap';

const Clinic = ({
  clinic: { id },
}) => (
  <Panel defaultExpanded>
    <Panel.Heading>
      <Panel.Title toggle>
        Clinic Overview
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
                          Clinic Overview
                       </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                       <th>Clinic ID</th>
                       <td data-label='Clinic ID'>{id}</td>
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

export default Clinic;
