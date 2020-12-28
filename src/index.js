import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';

import borrowBook from './components/borrowBook';
import returnBook from './components/returnBook';
import myInfo from './components/myInfo';
import manageInfo from './components/manageInfo';
import ranking from './components/ranking';

const routes = [
  { path: '/borrow-book', component: borrowBook },
  { path: '/return-book', component: returnBook },
  { path: '/my-info', component: myInfo },
  { path: '/manage-info', component: manageInfo },
  { path: '/ranking', component: ranking },
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