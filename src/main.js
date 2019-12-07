import Vue from 'vue'
import App from './App.vue'

// Loading application components and styles
import loader from './plugins/loader';
Vue.use(loader);

import router from './router';

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
