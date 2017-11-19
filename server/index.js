import { Nuxt, Builder } from 'nuxt'

const feathers = require('@feathersjs/feathers')
const express = require('@feathersjs/express')
const app = express(feathers())
const socketio = require('@feathersjs/socketio')
const logger = require('winston')
const api = require('./app')
const port = api.get('port')
const host = api.get('host')

app.set('port', port)

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

// Init Nuxt.js
const nuxt = new Nuxt(config)

// Build only in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}

// Give nuxt middleware to express
app.configure(socketio({
//  path: '/api/socket.io/'
}))

app.use('/api', api)
app.use(nuxt.render)

// Listen the server
let server = app.listen(port, host)
logger.info('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
api.setup(server)
