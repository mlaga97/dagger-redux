// Library imports
import React from 'react';

// Utilities
import getSections from './utilities/getSections';

// Components
import Section from './Section';

class Assessment extends React.Component {
  onUpdate = (event) => {
    this.props.onUpdate({
      ...event,
      class: this.props.metadata.id,
    });
  }

  render() {
    const { props, onUpdate } = this;
    const { response, editable } = props;

    return (
      <div>
        {
          // Render Sections
          getSections(props).map(section => (
            <Section
              {...section}
              key={section.index}
              editable={editable}
              response={response}
              onUpdate={onUpdate}
            />
          ))
        }
      </div>
    );
  }
}

export default Assessment;