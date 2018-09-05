const user = require('./user/user.service.js')
const program = require('./program/program.service.js')
const upload = require('./upload/upload.service.js')
const helper = require('./helper/helper.service.js')
module.exports = function (app) {
  app.configure(user)
  app.configure(program)
  app.configure(upload)
  app.configure(helper)
}
