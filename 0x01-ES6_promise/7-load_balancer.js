export default function loadBalancer(chinaDownload, USDownload) {
	Promise.race([chinaDownload, USDownload])
	.then((data) => console.log(data))
	.catch((error) => console.error(error));
}
