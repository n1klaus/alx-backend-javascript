import { uploadPhoto, createUser } from './util';

export default function handleProfileSignup() {
  const upload = uploadPhoto();
  const user = createUser();
  const resp = Promise.all([upload, user])
    .then(
      (values) => {
        const data = Object.assign({}, ...values);
        const result = `${data.body} ${data.firstName} ${data.lastName}`;
        console.log(result);
        return result;
      },
      (error) => {
        console.error('Signup system offline');
        return error;
      },
    );
  return resp;
}
