// Library imports
import React from 'react';

// Utilities
import getSections from '../../utilities/Assessment/getSections';

// Components
import Section from './Section';

class Assessment extends React.Component {
  onUpdate = (event) => {
    this.props.onUpdate({
      ...event,
      class: this.props.metadata.class,
    });
  }

  render() {
    return (
      <div>
        {
          // Render Sections
          getSections(this.props).map(section => (
            <Section key={section.index} {...section} onUpdate={this.onUpdate} />
          ))
        }
      </div>
    );
  }
}

export default Assessment;
