const assert = require('assert')
const app = require('../../app')

describe('\'helper\' service', () => {
  it('registered the service', () => {
    const service = app.service('helper')

    assert.ok(service, 'Registered the service')
  })
})
