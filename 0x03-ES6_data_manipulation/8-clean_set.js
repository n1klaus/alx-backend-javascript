export default function cleanSet(set, startString) {
  const result = [];
  if (typeof startString === 'string' && startString !== '') {
    set.forEach((elem) => {
      if (typeof elem === 'string' && elem.startsWith(startString)) {
        result.push(elem.slice(startString.length));
      }
    });
    return result.join('-');
  }
  return '';
}
