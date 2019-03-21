const controller = require('../controller/models.js');

module.exports = app => {
    app.all('*', controller.angular);
}