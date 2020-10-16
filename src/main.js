import Vue from 'vue'
import App from './App.vue'
import 'materialize-css/dist/js/materialize.min'

Vue.config.productionTip = false;
window.axios = require('axios');

new Vue({
  render: h => h(App),
}).$mount('#app');
