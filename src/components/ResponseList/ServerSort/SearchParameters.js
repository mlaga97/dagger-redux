// Library imports
import React from 'react';
import { Panel, Grid, Row, Col, Button } from 'react-bootstrap';

// Components
import SortDate from './SortDate';
import SortText from './SortText';
import SortSelect from './SortSelect';

// TODO: Add onChange handlers to all input fields.
// TODO: Make components be controlled.
class SearchParameters extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleToggle = (e) => {
    this.setState({
      open: !this.state.open,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const parameters = {};
    const list = [
      'userID',
      'clinicID',
      'patientID',
      'visitDateEnd',
      'visitDateStart',
      'dateSubmittedEnd',
      'dateSubmittedStart',
    ];

    list.forEach((key) => {
      const value = document.getElementsByName(key)[0].value;
      if (value !== '') {
        parameters[key] = value;
      }
    });

    this.props.onUpdate(parameters);
  };

  render = () => (
    <Panel defaultExpanded>
      <Panel.Heading>
        <Panel.Title toggle>
          Search
        </Panel.Title>
      </Panel.Heading>
      <Panel.Collapse>
        <Panel.Body>
          <Grid className='container-response-search-options'>
            <Row>
              <form onSubmit={this.handleSubmit}>
                <div className='simple-search-wrapper'>
                  <SortText name='patientID' label='Patient ID' />
                </div>
                <Panel className='panel-unadorned' onToggle={this.handleToggle} expanded={this.state.open} >
                  <Panel.Heading>
                    <Panel.Title toggle>
                      <Grid>
                        <Row>
                          <Col sm={4} className='col-search-button'>
                            <Button onClick={this.handleClick}>Search</Button>
                            <div className={(this.state.open) ? 'collapse-trigger collapsed' : 'collapse-trigger expanded'}>Advanced Search</div>
                          </Col>
                        </Row>
                      </Grid>
                    </Panel.Title>
                  </Panel.Heading>
                  <Panel.Collapse>
                    <Panel.Body>
                      <Grid>
                        <Row>
                          <SortDate name='visitDateStart'>Visit Date Start</SortDate>
                          <SortDate name='visitDateEnd'>Visit Date End</SortDate>
                          <SortDate name='dateSubmittedStart'>Date Submitted Start</SortDate>
                          <SortDate name='dateSubmittedEnd'>Date Submitted End</SortDate>
                          <SortSelect name='userID' label='User ID'>
                            {/*this.GetOptionsFromResponses('user') // TODO: Reenable */}
                          </SortSelect>
                          <SortSelect name='clinicID' label='Clinic ID'>
                            {/*this.GetOptionsFromResponses('clinic') // TODO: Reenable */}
                          </SortSelect>
                        </Row>
                      </Grid>
                    </Panel.Body>
                  </Panel.Collapse>
                </Panel>
              </form>
            </Row>
          </Grid>
        </Panel.Body>
      </Panel.Collapse>
    </Panel>
  );
}

export default SearchParameters;
