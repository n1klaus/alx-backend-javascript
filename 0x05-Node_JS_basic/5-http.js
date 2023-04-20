const http = require('http');
const fs = require('fs');

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

const app = http.createServer((req, res) => {
  let body;
  switch (req.url) {
    case '/':
      body = 'Hello Holberton School!';
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', body.length);
      res.statusCode = 200;
      res.write(body);
      res.end();
      break;
    case '/students':
      body = 'This is the list of our students';
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      countStudents(file)
        .then((data) => {
          body += data;
          res.writeHead(200, { 'Content-Length': body.length });
          res.write(body);
          res.end();
        })
        .catch((err) => {
          body += "\nCannot load the database";
          res.statusCode = 404;
          res.write(body);
          res.end();
        });
      break;
    default:
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', body.length);
      res.statusCode = 200;
      res.end();
      break;
  }
});

app.listen(PORT);

module.exports = app;
