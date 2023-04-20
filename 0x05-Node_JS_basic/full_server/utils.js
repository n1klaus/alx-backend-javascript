const fs = require('fs');

function readDatabase(file) {
  return new Promise((resolve, reject) => {
    const students = {};
    fs.access(file, fs.constants.F_OK && fs.constants.R_OK, (error) => {
      if (error) {
        return reject(error);
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
      return resolve(students);
    });
  });
}

module.exports = readDatabase;
