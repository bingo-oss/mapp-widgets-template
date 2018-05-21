import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import App from './app'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

import './styles/app.scss'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
