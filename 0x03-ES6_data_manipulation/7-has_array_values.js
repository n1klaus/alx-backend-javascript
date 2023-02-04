export default function hasValuesFromArray(set, array) {
  const check = array.map((elem) => set.has(elem));
  if (check.includes(false)) {
    return false;
  }
  return true;
}
