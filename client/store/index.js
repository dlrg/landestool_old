import Vue from 'vue'
import Vuex from 'vuex'
import feathersVuex, { initAuth } from 'feathers-vuex'
import feathersClient from '@/api/feathers-client'

const { service, auth } = feathersVuex(feathersClient, { idField: '_id' })

Vue.use(Vuex)

export default () => new Vuex.Store({
  actions: {
    async nuxtServerInit ({ commit, dispatch, state }, { req }) {
      await initAuth({
        commit,
        dispatch,
        req,
        moduleName: 'auth',
        cookieName: 'feathers-jwt'
      })

      if (state.auth.accessToken) {
        let { accessToken } = state.auth
        await dispatch('auth/authenticate', { strategy: 'jwt', accessToken })
      }
    },
    async nuxtClientInit ({ commit, dispatch, state }) {
      if (state.auth.accessToken) {
        let { accessToken } = state.auth
        await dispatch('auth/authenticate', { strategy: 'jwt', accessToken })
      }
    }
  },
  plugins: [
    service('user'),
    service('program'),
    service('helper'),
    auth({
      userService: '/user',
      state: {
        publicPages: [
          'login',
          'signup',
          'signup-success'
        ],
        forbiddenOnAuth: [
          'login',
          'signup'
        ]
      }
    })
  ]
})
