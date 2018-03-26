// Initializes the `helper` service on path `/helper`
const createService = require('feathers-mongoose')
const createModel = require('../../models/helper.model')
const hooks = require('./helper.hooks')

module.exports = function (app) {
  const Model = createModel(app)
  const paginate = app.get('paginate')

  const options = {
    name: 'helper',
    Model,
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/helper', createService(options))

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('helper')

  service.hooks(hooks)
}
