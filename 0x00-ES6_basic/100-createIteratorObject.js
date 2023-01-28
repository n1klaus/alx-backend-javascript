export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees);
  const employees = [];
  for (const emp of allEmployees) {
    if (Array.isArray(emp)) {
      employees.push(...emp);
    } else {
      employees.push(emp);
    }
  }
  const myIterable = {
    * [Symbol.iterator]() {
      yield* employees;
    },
  };
  return myIterable;
}
