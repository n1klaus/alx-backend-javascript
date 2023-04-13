export default function handleResponseFromAPI(promise) {
  const res = { status: 200, body: 'success' };
  const result = promise
    .then(() => res)
    .catch((err) => err)
    .finally(() => {
      console.log('Got a response from the API');
    });
  return result;
}
