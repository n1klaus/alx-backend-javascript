const process = require('process');
const readDatabase = require('../utils');

const filePath = String(process.argv[2]) || 'database.csv';
console.log(filePath);

class StudentsController {
  static getAllStudents(request, response) {
    response.status(200);
    let studentInfo = 'This is the list of our students';
    readDatabase(filePath)
      .then((data) => {
        // studentInfo += `\nNumber of students: ${Object.values(data).flat().length}`;
        for (const [subject, firstNames] of Object.entries(data)) {
          studentInfo += `\nNumber of students in ${subject}: ${firstNames.length}. List: ${firstNames.join(', ')}`;
        }
        response.status(200).send(studentInfo);
      })
      .catch(() => {
        studentInfo += '\nCannot load the database';
        response.status(500).send(studentInfo);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const field = request.params.major;
    response.status(200);
    readDatabase(filePath)
      .then((data) => {
        if (!(field in data)) {
          response.status(500).send('Major parameter must be CS or SWE');
        } else {
          response.status(200).send(`List: ${data[field].join(', ')}`);
        }
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}
module.exports = StudentsController;
