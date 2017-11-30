import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex from 'feathers-vuex'
import feathersClient from '@/api/feathers-client'

const { service, auth } = feathersVuex(feathersClient, { idField: '_id' })

Vue.use(Vuex)

export default () => new Vuex.Store({
  plugins: [
    service('user'),
    service('program'),
    auth({
      userService: '/user',
      state: {
        publicPages: [
          'login'
        ],
        forbiddenOnAuth: [
          'login'
        ]
      }
    })
  ]
})
