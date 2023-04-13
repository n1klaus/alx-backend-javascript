import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const photo = uploadPhoto(fileName);
  const resp = Promise.allSettled([user, photo])
    .then((data) => {
      console.log(data);
      const res = data.map((obj) => ({
        status: obj.status,
        value: obj.status === 'fulfilled' ? obj.value : obj.reason.toString(),
      }));
      return res;
    });
  return resp;
}
