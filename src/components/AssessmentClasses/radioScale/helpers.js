/* Most of this file is just to deal with the server-side coersion of the useful
 *
 * "options": {
 *   "0": "a",
 *   "1": "b",
 *   "2": "c"
 * }
 *
 * into the less-than-useful
 *
 * "options": ["a", "b", "c"]
 *
 */

export function convertIntoMultiColumnRenderer(options) {
  if (!Array.isArray(options)) {
    options = [{ options }];
  } else {
    // Catch the degenerate case
    if (typeof options[0] !== 'object') {
      options = [{ options }];
    }
  }

  return options;
}

export function convertIntoMultiColumnWrapper(type) {
  let { options } = type;
  
  if (!Array.isArray(options)) {
    options = [type];
  } else {
    // Catch the degenerate case
    if (typeof options[0] !== 'object') {
      options = [type];
    }
  }

  return options;
}
