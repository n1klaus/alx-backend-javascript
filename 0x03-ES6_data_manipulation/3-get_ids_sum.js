export default function getStudentIdsSum(studentList) {
  const idList = [];
  for (const student of studentList) {
    idList.push(student.id);
  }
  return idList.reduce((curr, acc) => curr + acc);
}
