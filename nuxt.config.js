import pkg from './package'

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
  ],



  /*
  ** Build configuration
  */
 build: {
  babel: {
    babelrc: false,
    presets: [
      [
          '@nuxt/babel-preset-app',
          {
              modules: false,
          },
      ],
    ]
  },
  
  vendor: [],

    /*
    ** You can extend webpack config here
    */
    extend(config, {isDev, isClient}) {
      

      // @see https://github.com/nuxt/nuxt.js/pull/3480#issuecomment-404150387
      config.output.globalObject = "this"

      if (isClient) { // web workers are only available client-side
        config.module.rules.push({
          test: /\.worker\.js$/,
          use: { loader: 'workerize-loader' },
          exclude: /(node_modules)/
        })
      }
    }
  }
}
