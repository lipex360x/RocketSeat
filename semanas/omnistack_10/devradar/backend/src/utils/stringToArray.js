export default function stringToArray(string) {
  return string.split(',').map(value => value.trim());
}
