import feathers from '@feathersjs/client'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'

let feathersClient = null

if (process.browser) {
  const socket = io('', {path: '/api/socket.io/'})
  socket.on('error', (err) => console.log(err))
  feathersClient = feathers()
    .configure(socketio(socket))
    .configure(auth({ storage: window.localStorage }))
} else {
  feathersClient = process.feathers
  feathersClient.authenticate = true
}

export default feathersClient
