module.exports = function (app) {
  return function getFile (req, res, next) {
    return app.service('upload').get(req.params.id)
      .then(data => {
        res.writeHead(200, {
          'Content-Type': data.uri.substring(data.uri.indexOf('data:') + 5, data.uri.indexOf(','))
        })
        res.end(data.uri.substring(data.uri.indexOf(',') + 1), data.uri.substring(data.uri.indexOf(';') + 1, data.uri.indexOf(',')))
      })
      .catch(err => {
        res.status(404)
        res.send(err)
      })
  }
}
