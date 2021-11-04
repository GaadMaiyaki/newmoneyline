let apiurl
if (process.env.NODE_ENV === 'production') {
  apiurl = 'https://api.moneyline.ng/api/v1'
} else {
  apiurl = 'http://moneylineback.test/api/v1'
}
import pkg from './package';
import {
  ALL_USERS
} from './utils/api-routes';
import axios from 'axios';
export default {
  mode: 'spa',

  // server: {
  //   host: '192.168.10.18', // default: localhost
  // },

  /*
   ** Headers of the page
   */
  head: {
    title: 'Moneyline',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: pkg.description
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/icon.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Raleway:400,700'
      },
      {
        rel: 'stylesheet',
        href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    // color: '#40A774',
    throttle: 0,
    delay: 3000,
    name: 'chasing-dots',
    color: '#40A774',
    background: 'white',
    height: '4px'
  },

  // loading: '~/components/loading.vue',

  /*
   ** Global CSS
   */
  css: ['~/assets/css/main.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/vue-range-slider',
    '~/plugins/vee-validate',
    '~/plugins/axios',
    '~/plugins/vue-noty',
    '~/plugins/form-wizard.js',
    '~/plugins/vue-modaltor',
    '~/plugins/vue-button-loader',
    '~/plugins/vue-filters.js',
    {
      src: '~/plugins/localStorage.js',
      ssr: false
    }
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    baseURL: apiurl
    // baseURL: 'https://api.moneyline.ng/api/v1'
    // baseURL: 'http://moneyline-api.test/api/v1'
    //baseURL: 'http://192.168.10.31:8000/api/v1',
  },

  router: {
    routes: [{
      name: 'account',
      path: '/account/activation/:token',
      component: 'pages/account/activation/_token.vue'
    }]
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
