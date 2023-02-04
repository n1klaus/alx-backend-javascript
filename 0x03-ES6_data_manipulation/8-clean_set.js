export default function cleanSet(set, startString) {
  const result = [];
  if (typeof startString === 'string' && startString !== '') {
    set.forEach((elem) => {
      if (elem.startsWith(startString)) {
        result.push(elem.slice(startString.length));
      }
    });
    return result.join('-');
  }
  return '';
}
