const express = require('express');
const fs = require('fs');

const app = express();

const file = process.argv[2] || 'database.csv';
const PORT = 1245;

function countStudents(file) {
  return new Promise((resolve, reject) => {
    const students = {};
    let studentsData = '';
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
      studentsData += `\nNumber of students: ${studentData.length}`;
      for (const [subject, firstNames] of Object.entries(students)) {
        studentsData += `\nNumber of students in ${subject}: ${firstNames.length}. List: ${firstNames.join(', ')}`;
      }
      return resolve(studentsData);
    });
  });
}

app.get('/', (req, resp) => {
  resp.status(200).type('text').send('Hello Holberton School!');
});

app.get('/students', (req, resp) => {
  let body = 'This is the list of our students';
  resp.status(200).type('text');
  countStudents(file)
    .then((data) => {
      body += data;
      resp.writeHead(200, { 'Content-Length': body.length });
      resp.write(body);
      resp.end();
    })
    .catch(() => {
      body += '\nCannot load the database';
      resp.status(404).write(body);
      resp.end();
    });
});

app.listen(PORT);

module.exports = app;
