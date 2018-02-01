import feathers from 'feathers/client'
import auth from '@feathersjs/authentication-client'
import hooks from 'feathers-hooks'
import socketio from 'feathers-socketio/client'
import io from 'socket.io-client'
import { CookieStorage } from 'cookie-storage'

var socket

if (process.browser) {
  socket = io('', {path: '/api/socket.io/'})
} else {
  socket = io('http://localhost:3000', {path: '/api/socket.io/'})
  CookieStorage.prototype._setCookie = function () {}
}

const api = feathers()
  .configure(socketio(socket))
  .configure(hooks())
  .configure(auth({ storage: new CookieStorage() }))

export default api
