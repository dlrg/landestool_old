// Initializes the `upload` service on path `/upload`
const hooks = require('./upload.hooks')
const blobService = require('feathers-blob')
const fs = require('fs-blob-store')
const blobStorage = fs('./uploads')

module.exports = function (app) {
  const Model = blobService({ Model: blobStorage })

  app.use('/upload', Model)

  const service = app.service('upload')

  service.hooks(hooks)
}
