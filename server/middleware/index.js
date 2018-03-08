const getFile = require('./get-file')
module.exports = function (app) {
  app.use('/file/:id', getFile(app))
}
