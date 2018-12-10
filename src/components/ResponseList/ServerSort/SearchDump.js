// Library imports
import React from 'react';
import downloadCsv from 'download-csv';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

// Actions
import actions from '../../../actions';

class SearchDump extends React.Component {
  loop = () => {
    const { maxPage, parameters } = this.props;

    if (this.pagesToFetch > 0) {
      // Queue up
      this.props.dispatch({
        type: actions.response.all.requested,
        parameters: {
          ...this.props.parameters,
          count: 1000,
          page: this.pagesToFetch,
        },
      });

      // Update Progress
      console.log(100*this.fetchedRecords()/this.recordsToFetch);

      this.pagesToFetch--;
      this.lastQueueIteration = this.iteration;
    } else {
      if (this.iteration - 10 > this.lastQueueIteration) {
        console.log('Something went wrong...');

        // TODO: Download missing records here

        clearInterval(this.timerID);
      } else if (this.fetchedRecords() == this.recordsToFetch) {
        clearInterval(this.timerID);

        console.log('Download finished...');
        console.log('Processing data...');

        // TODO: Progress logging
        // TODO: Assessment Responses
        const data = this.props.responses.list['responseList_count'].map((key) => {
          const { metadata, assessments } = this.props.responses.all[key];

          return {
            responseID: metadata.id,
            userID: metadata.user.id,
            clinicID: metadata.clinic.id,
            visitDate: metadata.visit.date,
            patientID: metadata.patient.id,
            patientDOB: metadata.patient.dob,
            dateSubmitted: metadata.dateSubmitted,
            selectedAssessments: '"' + Object.keys(assessments.selected).reduce((acc, value) => {
              return acc + value + ', ';
            }, '').slice(0, -2) + '"',
            assessmentResponses: assessments.responses,
          };
        });

        downloadCsv(data, null, 'dagger_search_results.csv');

        console.log('Done!');
      } else {
        console.log('Waiting on stragglers...');
      }
    }

    // Update count
    this.iteration++;
  }

  // TODO: Better
  fetchedRecords = () => {
    let fetchedRecordCount = 0;

    this.props.responses.list['responseList_count'].forEach((key) => {
      if (this.props.responses.all[key]) {
        fetchedRecordCount++;
      }
    });

    return fetchedRecordCount;
  }

  handleClick = (e) => {
    this.iteration = 0;

    this.pagesFetched = 0;
    this.recordsToFetch = this.props.responses.list['responseList_count'].length;
    this.pagesToFetch = Math.ceil(this.recordsToFetch/1000);

    this.timerID = setInterval(this.loop, 200);
  }

  render = () => <Button onClick={this.handleClick} >Download Search Results</Button>;
}

export default connect(
  state => ({
    responses: state.responses,
  }),
  dispatch => ({
    dispatch,
  }),
)(SearchDump);
