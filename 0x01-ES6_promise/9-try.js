export default function guardrail(mathFunction) {
	const queue= new Array();
	const calc = Promise.resolve(mathFunction());
	calc
	.then((value) => {queue.push(value)})
	.catch((error) => {queue.push(error)})
	.then(() => {
		queue.push("Guardrail was processed");
		return queue;
	});
}
