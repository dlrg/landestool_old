const user = require('./user/user.service.js');
module.exports = function (app) {
  app.configure(user);
};
