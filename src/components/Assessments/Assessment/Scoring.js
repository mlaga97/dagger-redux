// Library imports
import React from 'react';
import scriptjs from 'scriptjs';
import { Table } from 'react-bootstrap';

class Scoring extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getScript(id) {
    const url = process.env.REACT_APP_MODULES_BASE_URL + id + '/scoring.js';

    // TODO: Get this to work without using globals.
    scriptjs(url, () => {
      this.setState({
        scoring: window.scoring[id],
      });
    });
  }

  render() {
    const { props, state } = this;
    const { response, metadata } = props;

    // TODO: Implement flags
    const flags = {};

    if (!metadata.scorable) {
      return null;
    }

    if (!response) {
      return <div className='loading-message'>Loading response...</div>;
    }

    if (!state.scoring) {
      // Make sure we actually have a container to put stuff in.
      if (!window.scoring) {
        window.scoring = {};
      }

      this.getScript(metadata.id);

      return <div className='loading-message'>
        Loading scoring...
      </div>;
    }

    // Two methods of rendering
    if (typeof state.scoring.render === 'function') {
      // Method 1: Just show some raw, unformatted html.
      // TODO: Deprecate this method

      const output = state.scoring.score(response, flags);

      // TODO: Update flags w/ output.flags
      // const newFlags = output.flags;

      const html = state.scoring.render(output.result);

      // Keep using a table for what would otherwise be a panel because consistency.
      return (
        <Table bordered striped className='table-scoring' >
          <thead>
            <tr>
              <th>Scoring</th>
            </tr>
          </thead>
          <tbody>
            <tr> 
              <div
                style={{padding: '10px'}}
                dangerouslySetInnerHTML={{__html: html}}
              />
            </tr>
          </tbody>
        </Table>
      );
    } else {
      // Method 2: Show a score, an assessment of severity, and a recommended course of action.
      // TODO: Improve this method
      // TODO: Don't show if scoring not valid!

      const output = state.scoring.score(response, flags);

      // TODO: Update flags w/ output.flags
      // const newFlags = output.flags;

      const result = output.result;

      return (
        <Table bordered striped className='table-scoring' >
          <thead>
            <tr>
              <th>Severity</th>
              <th>Recomendation</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{
                (result.severity) ?
                  result.severity : 'Loading...'
              }</td>
              <td>{
                (result.recommendation) ? 
                  result.recommendation : 'Loading...'
              }</td>
              <td>{
                (result.score) ?
                  result.score : '...'
              }</td>
            </tr>
          </tbody>
        </Table>
      );
    }
  }
}

export default Scoring;
