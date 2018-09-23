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
    // TODO: Get this from an environment variable.
    const url = 'http://localhost/modules/' + id + '/scoring.js';

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

    const result = state.scoring(response);

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

export default Scoring;