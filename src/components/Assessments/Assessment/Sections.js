// Library imports
import React from 'react';

// Components
import Section from './Section';

class Sections extends React.Component {
  onUpdate = (event) => {
    this.props.onUpdate({
      ...event,
      class: this.props.metadata.id,
    });
  }

  render = () => (
    <React.Fragment>
      {
        // Render Sections
        this.props.sections.map(section => (
          <Section
            {...section}
            key={section.index}
            editable={this.props.editable}
            response={this.props.response}
            onUpdate={this.onUpdate}
          />
        ))
      }
    </React.Fragment>
  );
}

export default Sections;
