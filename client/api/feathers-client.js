import feathers from 'feathers/client'
import auth from 'feathers-authentication-client'
import hooks from 'feathers-hooks'
import socketio from 'feathers-socketio/client'
import io from 'socket.io-client'

const socket = io('', {path: '/api/socket.io/'})
const api = feathers()
  .configure(socketio(socket))
  .configure(hooks())
  .configure(auth({ storage: window.localStorage }))

export default api
