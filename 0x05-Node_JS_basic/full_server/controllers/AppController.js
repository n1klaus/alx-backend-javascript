class AppController {
  static getHomePage(request, response) {
    response.type('text');
    response.status(200).send('Hello Holberton School!');
  }
}
module.exports = AppController;
