export default function getFullResponseFromAPI(success) {
  if (success) {
    return Promise.resolve(
      {
        status: 200,
        body: 'Success',
      },
    );
  }
  const error = new Error('The fake API is not working currently');
  return Promise.reject(error);
}
