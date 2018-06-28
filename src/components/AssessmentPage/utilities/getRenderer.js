// Library imports
import classes from '../AssessmentClasses';

function getRenderer(typeClass) {
  if (classes[typeClass] && classes[typeClass].renderer) {
    return classes[typeClass].renderer;
  }

  console.warn(`No renderer available for type: ${typeClass}`); // eslint-disable-line no-console
  return null;
}

export default getRenderer;
