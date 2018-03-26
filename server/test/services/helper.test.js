const assert = require('assert')
const app = require('../../server/app')

describe('\'helper\' service', () => {
  it('registered the service', () => {
    const service = app.service('helper')

    assert.ok(service, 'Registered the service')
  })
})
