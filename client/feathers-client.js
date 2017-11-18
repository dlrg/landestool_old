import feathers from '@feathersjs/client'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'
import io from 'socket.io-client'

const socket = io('http://localhost:3000/api', {transports: ['websocket']})
let feathersClient = null

if (process.browser) {
  feathersClient = feathers()
    .configure(socketio(socket))
    .configure(auth({ storage: window.localStorage }))
} else {
  feathersClient = process.feathers
  feathersClient.authenticate = true
}

export default feathersClient
