import { uploadPhoto, createUser } from './util';

export default function handleProfileSignup() {
  const upload = uploadPhoto();
  const user = createUser();
  Promise.all([upload, user])
    .then((data) => {
      const item = Object.assign({}, ...data);
      const result = `${item.body} ${item.firstName} ${item.lastName}`;
	  console.log(result);
	  return result;
    })
    .catch((error) => {
      console.error('Signup system offline');
      return error;
    });
}
