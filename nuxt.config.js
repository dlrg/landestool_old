const BabiliPlugin = require('babili-webpack-plugin')

module.exports = {
  /*
  ** Headers of the page
  */
  router: {
    middleware: ['auth']
  },
  head: {
    title: 'DLRG LJTr Verwaltungstool',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://static.codeanker.de/fonts/cl/styles.css' }
    ]
  },
  plugins: [
    { src: '~/plugins/date-picker', ssr: false }
  ],
  /*
  ** Global scss
  */
  css: ['~/assets/scss/main.scss'],
  srcDir: 'client/',
  build: {
    vendor: [],
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (!ctx.dev) {
        config.plugins = config.plugins.filter((plugin) => plugin.constructor.name !== 'UglifyJsPlugin')
        config.plugins.push(new BabiliPlugin())
      }

      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules(?!\/striptags)|bower_components)/
        })
      }
    }
  }
}
