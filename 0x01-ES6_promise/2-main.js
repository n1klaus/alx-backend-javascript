import handleResponseFromAPI from './2-then';

const promise1 = Promise.resolve();
const response1 = handleResponseFromAPI(promise1);
console.log(response1);

const promise2 = Promise.reject(new Error());
const response2 = handleResponseFromAPI(promise2);
console.log(response2);
