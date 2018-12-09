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

    // Open the advanced search
    this.setState({
      open: true,
    });

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

  // TODO: Not this.
  handleEnter = (e) => {
    if (e.keyCode == 13) {
      this.handleSubmit(e);
    }
  }

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
              <form onSubmit={this.handleSubmit} onKeyUp={this.handleEnter} >
                <div className='simple-search-wrapper'>
                  <SortText name='patientID' label='Patient ID' />
                </div>
                <Panel className='panel-unadorned' expanded={this.state.open} >
                  <Panel.Heading>
                    <Panel.Title toggle>
                      <Grid>
                        <Row>
                          <Col sm={4} className='col-search-button'>
                            {/* type='submit' doesn't work here!?*/}
                            <Button onClick={this.handleSubmit} >Search</Button>
                            <div onClick={this.handleToggle} className={(this.state.open) ? 'collapse-trigger collapsed' : 'collapse-trigger expanded'}>Advanced Search</div>
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

                          {/* TODO: Convert userID and clinicID back into SortSelect. */}
                          <SortText name='userID' label='User ID' />
                          <SortText name='clinicID' label='Clinic ID' />
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
