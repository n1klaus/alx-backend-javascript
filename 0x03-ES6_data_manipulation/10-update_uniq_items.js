export default function updateUniqueItems(map) {
  if (typeof map !== 'object') {
    throw new Error('Cannot process');
  }
  map.forEach((value, key, m) => {
    if (value === 1) {
      m.set(key, 100);
    }
  });
  return map;
}
