const fs = require('fs');

function countStudents(file) {
  try {
    const students = {};
    fs.accessSync(file, fs.constants.F_OK && fs.constants.R_OK);
    const data = fs.readFileSync(file, 'utf-8');
    let studentData = data.toString().split('\n').slice(1);
    studentData = studentData.filter((row) => row.split(',').join('') !== '');
    studentData.forEach((row) => {
      const studentRow = row.split(',');
      if (studentRow.length === 4) {
        if (studentRow[3] !== '' && !(studentRow[3] in students)) {
          students[studentRow[3]] = [];
        }
        for (const [subject, firstNames] of Object.entries(students)) {
          if (studentRow.includes(subject)) {
            firstNames.push(studentRow[0]);
          }
        }
      }
    });
    console.log(`Number of students: ${studentData.length}`);
    for (const [subject, firstNames] of Object.entries(students)) {
      console.log(`Number of students in ${subject}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
