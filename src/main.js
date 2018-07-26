import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const initializer = async () => {
  // await store.dispatch('GET_USER');
};

const Root = Vue.extend({
  router,
  store,
  components: { App },
  template: '<App/>'
});

initializer().then(() => {
  const root = new Root();
  root.$mount('#app');
});
