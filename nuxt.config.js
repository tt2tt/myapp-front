import colors from 'vuetify/es5/util/colors'

export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - app',
    title: 'app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    'plugins/axios',
    'plugins/myInject'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-i18n'
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: '4080BE',
          info: '4FC1E9',
          success: '44D69E',
          warning: 'FEB65E',
          error: 'FB8678',
          background: 'f6f6f4',
          myblue: '1867C0'
        }
      }
    }
  },

  // 追加
  // Doc: https://nuxt-community.github.io/nuxt-i18n/basic-usage.html#nuxt-link
  i18n: {
    strategy: 'no_prefix',
    // 対応言語の設定
    locales: ['ja', 'en'],
    // デフォルト言語の設定
    defaultLocale: 'ja',
    // Doc: https://kazupon.github.io/vue-i18n/api/#properties
    vueI18n: {
      // 翻訳がない場合
      fallbackLocale: 'ja',
      // silentTranslationWarn: true,
      // 警告の設定
      silentFallbackWarn: true,
      // メッセージファイルの指定
      messages: {
        ja: require('./locales/ja.json'),
        en: require('./locales/en.json')
      }
    }
  },
  publicRuntimeConfig: {
    appName: process.env.APP_NAME // 追加
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
