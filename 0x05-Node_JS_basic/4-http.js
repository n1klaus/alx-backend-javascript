const http = require('http');

const PORT = 1245;
const app = http.createServer((req, res) => {
  const body = 'Hello Holberton School!';
  // res.writeHead(200, { 'Content-Type': 'text/plain', 'Content-Length': body.length });
  res.statusCode = 200;
  res.write(body);
  res.end();
});

app.listen(PORT)
  .on('error', (error) => {
    throw error;
  });

module.exports = app;
