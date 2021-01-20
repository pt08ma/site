import colors from 'vuetify/es5/util/colors'

// /// dotenv 読み込み
// require('dotenv').config();
// const { GOOGLE_ANALYTICS_TRACKING_ID } = process.env;

export default {
  target: 'static',
  // mode: 'spa',
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: 'pt08ma',
    title: 'pt08ma',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'img/favicon.ico' }
    ]
  },

  router: {
    base: process.env.NODE_ENV === 'dev' ? '/' : '/site/'
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/dotenv',
  ],

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  // github pages 用に出力を docs に
  generate: {
    dir: 'docs'
  },

  // env
  env: {
    GOOGLE_ANALYTICS_TRACKING_ID: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
  },
}
