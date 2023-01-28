export default function iterateThroughObject(reportWithIterator) {
  const users = [...reportWithIterator];
  return users.join(' | ');
}
