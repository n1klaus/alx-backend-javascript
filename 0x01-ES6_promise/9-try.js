export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const ans = mathFunction();
    queue.push(ans);
  } catch (err) {
    queue.push(`Error: ${err.message}`);
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
