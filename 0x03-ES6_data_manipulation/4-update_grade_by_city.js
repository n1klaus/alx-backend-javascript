export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const students = studentList.filter((student) => student.location === city);
  return students.map((student) => {
    for (const item in newGrades) {
      if (student.id === item.studentId) {
        student.grade = item.grade;
      } else {
        student.grade = 'N/A';
      }
    }
    return student;
  });
}
