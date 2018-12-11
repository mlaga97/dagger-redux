// Library imports
import React from 'react';
import { connect } from 'react-redux';
import { Panel, Grid, Row, Col, Button } from 'react-bootstrap';

// Actions
import actions from '../actions';

const generateMetadata = () => {
  const patientDOBs = [
    '1941-07-01', '1943-01-23', '1944-07-20', '1944-10-11', '1952-11-08',
    '1953-08-29', '1956-08-01', '1966-09-21', '1974-08-05', '1979-11-21',
    '1980-03-31', '1983-03-12', '1991-12-01', '1994-12-15', '1995-06-16',
    '1995-12-31', '1998-07-28', '1998-10-06', '2001-05-17', '2002-11-02',
    '2004-04-23', '2004-07-23', '2004-10-12', '2004-11-19', '2010-03-30',
    '1945-03-19', '1951-01-13', '1952-04-23', '1955-02-02', '1960-01-01',
    '1963-05-07', '1965-05-09', '1966-08-22', '1966-09-23', '1972-09-22',
    '1974-09-03', '1976-02-02', '1977-01-05', '1980-07-01', '1981-06-20',
    '1983-01-14', '1983-02-06', '1984-08-11', '1992-01-30', '1993-03-09',
    '1995-07-24', '1995-10-01', '1996-10-31', '2009-02-12', '2010-06-30',
    '1943-07-30', '1947-03-30', '1953-04-06', '1954-12-09', '1955-01-15',
    '1955-04-17', '1956-04-24', '1959-04-11', '1963-03-03', '1971-07-27',
    '1972-10-28', '1976-09-30', '1978-08-07', '1981-12-29', '1983-01-05',
    '1992-03-05', '1992-07-05', '1993-05-17', '1994-07-19', '1997-04-22',
    '1998-04-23', '2001-02-04', '2001-05-22', '2001-08-31', '2002-06-30',
    '1942-05-28', '1944-10-23', '1951-01-04', '1951-07-02', '1955-06-14',
    '1958-04-21', '1959-09-19', '1959-11-23', '1960-09-05', '1964-08-22',
    '1967-06-06', '1973-10-27', '1978-10-12', '1978-12-20', '1980-10-09',
    '1983-05-17', '1984-06-22', '1989-11-26', '1990-05-01', '1991-04-06',
    '1992-07-10', '1998-03-18', '1998-07-20', '2002-02-11', '2005-01-01',
  ]

  const patientOffset = Math.floor(Math.random() * 100);

  // Select a random date within the last four years, and return in ISO-8601 formatted string. I hate Javascript.
  const assessmentDate = (new Date((new Date()).setDate((new Date()).getDate()-Math.floor(Math.random() * 365 * 4)))).toLocaleString('en-CA').substring(0, 10);

  // Process Metadata
  const metadata = {
    user: {
      id: String(1111 + Math.floor(Math.random() * 3)), // 3 Users
    },
    visit: {
      date: assessmentDate, // 4 Years
    },
    clinic: {
      id: String(2000 + Math.floor(Math.random() * 5)), // 5 Clinics
    },
    patient: {
      id: String(100000 + patientOffset), // 100 Patients
      dob: patientDOBs[patientOffset],
    },
    dateSubmitted: assessmentDate, // 4 Years
  };

  return metadata;
}

class RandomEntry extends React.Component {
  componentWillMount() {
    if (!this.props.assessments.all) {
      this.props.dispatch({
        type: actions.assessment.all.requested,
      });
    }
  }

  handleSubmit = () => {
    // Assessment Responses
    const assessments = {
      selected: {},
      responses: {},
    };

    Object.keys(this.props.assessments.all).forEach((key) => {
      const assessment = this.props.assessments.all[key];

      // Pick Assessments
      if (assessment.metadata.required || Math.random() < 0.1) {
        if (!assessment.metadata.required) {
          assessments.selected[key] = true;
        }
        assessments.responses[key] = {};

        // Extract the questions
        let questions = assessment.questions || [];
        if (assessment.sections) {
          assessment.sections.forEach((section) => {
            section.questions.forEach((question) => {
              questions.push(question);
            })
          })
        }

        // Iterate over the questions
        questions.forEach((question) => {

          // Retrieve type
          let type = question.type;
          if (typeof type === 'string') {
            type = assessment.types[question.type];
          }

          // TODO: Add dateField and TextField
          // TODO: Fix multi-column radioScale
          if (type.options) {
            const keys = Object.keys(type.options);
            const index = Math.floor(Math.random() * keys.length)

            assessments.responses[key][question.id] = String(type.options[keys[index]]);
          } else {
            switch (type.class) {
              case 'yesNoToggle':
                assessments.responses[key][question.id] = (Math.random() < 0.5) ? 'yes' : 'no';
                break;
              case 'checkboxScale':
                assessments.responses[key][question.id] = (Math.random() < 0.5) ? true : false;
                break;
              default:
                // TODO: Something
                break;
            }
          }
        });
      }
    })

    delete assessments.responses.metadata;

    const response = {
      apiVersion: 0,
      metadata: generateMetadata(),
      assessments,
    };

    this.props.dispatch({
      type: actions.response.post.requested,
      data: response,
    });
  }

  multiSubmit = (count) => {
    for (let i = 0; i < count; i++) {
      this.handleSubmit();
    }
  }

  render = () => (
    <Panel defaultExpanded className={'panel-testing'}>
      <Panel.Heading>
        <Panel.Title toggle>
          Generate Random Testing Data
        </Panel.Title>
      </Panel.Heading>
      <Panel.Collapse>
        <Panel.Body>
          <Grid>
            <Row>
              <Col sm={12}>
                {
                  [1, 5, 10, 25, 50, 100, 250, 500, 1000, 2500, 5000].map((count) => (
                    <Button key={count} className={'btn-sm'} onClick={() => {this.multiSubmit(count)}}>{count} Random</Button>
                  ))
                }
              </Col>
            </Row>
          </Grid>
        </Panel.Body>
      </Panel.Collapse>
    </Panel>
  );
}

export default connect(
  state => ({
    auth: state.auth,
    users: state.users,
    clinics: state.clinics,
    assessments: state.assessments,
  }),
  dispatch => ({
    dispatch,
  }),
)(RandomEntry);
