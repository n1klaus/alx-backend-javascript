import { uploadPhoto, createUser } from './util';

export default async function asyncUploadUser() {
	const result = {"photo": null, "user": null};
	try {
		const user = await createUser();
		const photo = await uploadPhoto();
		result = {"photo": photo, "user": user};
	}
	finally {
		return result;
	}
}
