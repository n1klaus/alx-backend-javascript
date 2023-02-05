const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  let value = 0;
  if (weakMap.has(endpoint)) {
    value = weakMap.get(endpoint);
  }
  if (value >= 5) {
    throw new Error('Endpoint load is high');
  }
  value += 1;
  weakMap.set(endpoint, value);
  console.log(value);
};

export { weakMap, queryAPI };
