function areFriends(types, type1, type2) {
  // TODO: Allow anonymous types to have friends
  if (typeof type1 !== 'string' && typeof type2 !== 'string') {
    return false;
  }

  // Check if questions have same type
  if (type1 === type2) { return true; }

  // Check if type1 has type2 as a friend
  if (types[type1].friends) {
    if (types[type1].friends.includes(type2)) { return true; }
  }

  // Check if type2 has type1 as a friend
  if (types[type2].friends) {
    if (types[type2].friends.includes(type1)) { return true; }
  }

  // They aren't friends (;_;)
  return false;
}

export default areFriends;
