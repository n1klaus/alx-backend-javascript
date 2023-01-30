export default function getListStudentIds(studentList) {
  const idList = new Map();
  if (Array.isArray(studentList)) {
    for (const student of studentList) {
      idList.set(student.id, student.firstName);
    }
    return [...idList.keys()];
  }
  return [];
}
