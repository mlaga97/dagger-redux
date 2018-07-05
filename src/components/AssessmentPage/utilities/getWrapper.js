// Library imports
import classes from '../../QuestionClasses';

function getWrapper(typeClass) {
  if (classes[typeClass] && classes[typeClass].wrapper) {
    return classes[typeClass].wrapper;
  }

  // Return default
  return props => props.children;
}

export default getWrapper;
