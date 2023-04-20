const fs = require('fs');

function countStudents(file) {
  return new Promise((resolve, reject) => {
    const students = {};
    fs.access(file, fs.constants.F_OK && fs.constants.R_OK, (error) => {
      if (error) {
        return reject(new Error('Cannot load the database'));
      }
      return null;
    });
    fs.readFile(file, 'utf-8', (error, data) => {
      if (error) return reject(error);
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
      return resolve(students);
    });
  });
}

module.exports = countStudents;
