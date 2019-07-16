import Vue from 'vue';

import 'normalize.css';
import App from '@/app.vue';
import store from '@/store';
import router from '@/router';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
