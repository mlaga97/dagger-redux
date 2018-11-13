// TODO: Use server Date?

export function formatDate(input) {
  let pattern = /(\d{4})-(\d{2})-(\d{2})/;
  if (!input || !input.match(pattern)) {
    return null;
  }
  return input.replace(pattern, '$2/$3/$1');
};

export function yesterday() {
  let d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toLocaleDateString('en-CA');
}

export function oneYearAgo() {
  let y = new Date();
  y.setFullYear(y.getFullYear() - 1);
  return y.toLocaleDateString('en-CA');
}

export function today() {
  let d = new Date();
  return d.toLocaleDateString('en-CA');
}

export function oneYearAgoPlusOneDay() {
  let y = new Date();

  // Tomorrow
  y.setDate(y.getDate() + 1);

  // One year back from Tomorrow (excludes today's date last year)
  y.setFullYear(y.getFullYear() - 1);

  return y.toLocaleDateString('en-CA');
}
