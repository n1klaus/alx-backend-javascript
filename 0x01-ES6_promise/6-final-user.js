import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  Promise.all([user, photo])
    .then((data) => {
      const result = Object.assign({}, ...data);
      return Promise.resolve(new Array({ status: 'success', value: result }));
    })
    .catch((error) => Promise.reject(new Array({ status: 'failed', value: error })));
}
