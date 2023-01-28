export default function createReportObject(employeesList) {
  const report = {
    allEmployees: { ...employeesList },
    getNumberofDepartments(employeesList) {
      return Object.keys(employeesList).length;
    },
  };
  return report;
}
