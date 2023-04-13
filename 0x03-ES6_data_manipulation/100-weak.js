const weakMap = new WeakMap();

const queryAPI = (endpoint) => {
  let value = 0;
  if (weakMap.has(endpoint)) {
    value = weakMap.get(endpoint);
  }
  if (value >= 4) {
    throw new Error('Endpoint load is high');
  }
  value += 1;
  weakMap.set(endpoint, value);
};

export { weakMap, queryAPI };
