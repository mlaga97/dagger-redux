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
    return [{ options }];
  }

  // Handle edge case (aforementioned server-side coersion)
  if (typeof options[0] !== 'object') {
    return [{ options }];
  }

  return options;
}

export function convertIntoMultiColumnWrapper(type) {
  const { options } = type;

  if (!Array.isArray(options)) {
    return [type];
  }

  // Handle edge case (aforementioned server-side coersion)
  if (typeof options[0] !== 'object') {
    return [type];
  }

  return options;
}
