const user = require('./user/user.service.js');
const program = require('./program/program.service.js');
module.exports = function (app) {
  app.configure(user);
  app.configure(program);
};
