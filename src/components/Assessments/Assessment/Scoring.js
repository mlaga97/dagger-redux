// Library imports
import React from 'react';
import scriptjs from 'scriptjs';
import { Panel } from 'react-bootstrap';

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
      return <div>Loading response...</div>;
    }

    if (!state.scoring) {
      // Make sure we actually have a container to put stuff in.
      if (!window.scoring) {
        window.scoring = {};
      }

      this.getScript(metadata.id);

      return <div>Loading scoring...</div>;
    }

    // Two methods of rendering
    if (typeof state.scoring.render === 'function') {
      // Method 1: Just show some html.
      // TODO: Deprecate this method

      const output = state.scoring.score(response, flags);

      // TODO: Update flags w/ output.flags
      // const newFlags = output.flags;

      const html = state.scoring.render(output.result);

      return (
        <Panel defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              Scoring
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body dangerouslySetInnerHTML={{__html: html}}/>
          </Panel.Collapse>
        </Panel>
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
        <Panel defaultExpanded>
          <Panel.Heading>
            <Panel.Title toggle>
              Scoring
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              Score: {result.score}<br/>
              Severity: {result.severity}<br/>
              Recommendation: {result.recommendation}<br/>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      );
    }
  }
}

export default Scoring;
