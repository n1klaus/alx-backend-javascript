export default function createReportObject(employeesList) {
  const report = new Object({
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  });
  return report;
}
