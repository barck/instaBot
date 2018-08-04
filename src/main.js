import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';
import App from './App';
import router from './router';

Vue.use(VueScrollTo);

Vue.config.productionTip = false;

const Root = Vue.extend({
  router,
  components: { App },
  template: '<App/>'
});

const root = new Root();
root.$mount('#app');
