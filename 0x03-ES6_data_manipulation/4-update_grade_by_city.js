export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const students = studentList.filter((student) => student.location === city);
  return students.map((student) => {
    const newStudent = { ...student };
    for (const item of newGrades) {
      if (newStudent.id === item.studentId) {
        newStudent.grade = item.grade;
      }
    }
    if (newStudent.grade === undefined) {
      newStudent.grade = 'N/A';
    }
    return newStudent;
  });
}
