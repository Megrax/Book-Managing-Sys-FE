import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

import borrowBook from './components/borrowBook';

const routes = [
  { path: '/borrow-book', component: borrowBook }
]

Vue.use(VueRouter);

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});