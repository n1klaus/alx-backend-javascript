import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  const resp = Promise.all([user, photo])
    .then((data) => {
      const result = Object.assign({}, ...data);
      return [{ status: 'success', value: result }];
    })
    .catch((error) => [{ status: 'failed', value: error }]);
  return resp;
}
