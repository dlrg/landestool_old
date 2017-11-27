import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex, { initAuth } from 'feathers-vuex'
import feathersClient from '@/api/feathers-client'

const { service, auth } = feathersVuex(feathersClient, { idField: '_id' })

Vue.use(Vuex)

export default () => new Vuex.Store({
  actions: {
    nuxtServerInit ({ commit, dispatch }, { req }) {
      return initAuth({
        commit,
        dispatch,
        req,
        moduleName: 'auth',
        cookieName: 'feathers-jwt'
      })
    }
  },
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
