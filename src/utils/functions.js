export function truncate(input, characters) {
  if (input.length > characters) return input.substring(0, characters) + '...';
  else return input;
}
