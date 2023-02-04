export default function getListStudentIds(studentList) {
  const idList = [];
  if (Array.isArray(studentList)) {
    studentList.map((student) => {
      idList.push(student.id);
      return idList;
    });
  }
  return idList;
}
