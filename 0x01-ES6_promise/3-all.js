import {uploadPhoto, createUser} from './util.js';

export default function handleProfileSignup() {
	const upload = uploadPhoto();
	const user = createUser();
	Promise.all([upload, user])
	.then((data) => {
		const item = Object.assign({}, ...data);
		console.log(`${item.body} ${item.firstName} ${item.lastName}`);
	})
	.catch((error) => {
		console.error("Signup system offline");
		return error;
	});
}
