import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const result = { photo: null, user: null };
  try {
    const user = await createUser();
    const photo = await uploadPhoto();
    result.photo = photo;
    result.user = user;
    return result;
  } catch (err) {
    return result;
  }
}
