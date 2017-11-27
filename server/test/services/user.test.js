const assert = require('assert');
const app = require('../../server/app');

describe('\'user\' service', () => {
  it('registered the service', () => {
    const service = app.service('user');

    assert.ok(service, 'Registered the service');
  });
});
