export default function guardrail(mathFunction) {
  const queue = [];
  const calc = Promise.resolve(mathFunction);
  return calc
    .then(
      (value) => {
        queue.push(value);
        return value;
      },
      (error) => {
        queue.push(error);
        return error;
      },
    )
    .then(() => {
      queue.push('Guardrail was processed');
      return queue;
    });
}
