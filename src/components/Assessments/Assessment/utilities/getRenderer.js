// Library imports
import classes from '../../../QuestionClasses';

function getRenderer(typeClass) {
  if (classes[typeClass] && classes[typeClass].renderer) {
    return classes[typeClass].renderer;
  }

  // eslint-disable-next-line no-console
  console.warn(`No renderer available for type: ${typeClass}`);

  return null;
}

export default getRenderer;
