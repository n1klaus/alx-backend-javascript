const fs = require('fs');

function countStudents(file) {
  const students = {};
  if (!fs.existsSync(file)) {
    throw new Error('Cannot load the database');
  }
  fs.createReadStream(file)
    .on('data', (data) => {
      const studentData = data.toString().split('\n').slice(1);
      console.log(`Number of students: ${studentData.length}`);
      studentData.forEach((row) => {
        const studentRow = row.split(',');
        if (studentRow.length === 4) {
          if (!(studentRow[3] in students)) {
            students[studentRow[3]] = [];
          }
          for (const [subject, firstNames] of Object.entries(students)) {
            if (studentRow.includes(subject)) {
              firstNames.push(studentRow[0]);
            }
          }
        }
      });
      for (const [subject, firstNames] of Object.entries(students)) {
        console.log(`Number of students in ${subject}: ${firstNames.length}. List: ${firstNames.join(', ')}`);
      }
    });
}

module.exports = countStudents;
