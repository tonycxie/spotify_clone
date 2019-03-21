const controller = require('../controller/models.js');

module.exports = app => {
    app.get('/login', controller.login);
    app.all('*', controller.angular);
}