import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueCookies from 'vue-cookies';

import login from './components/login';
import library from './components/library';
import borrowBook from './components/borrowBook';
import returnBook from './components/returnBook';
import myInfo from './components/myInfo';
import borrwoRecord from './components/borrowRecord';
import manageInfo from './components/manageInfo';
import ranking from './components/ranking';
import admin from './components/admin';
import operateBook from './components/operateBook';
import addBook from './components/addBook';
import axios from 'axios'
Vue.prototype.axios = axios

Vue.prototype.globalUrl = "http://127.0.0.1:8081/"

const routes = [
    { path: '/login', component: login },
    {
        path: '/library',
        component: library,
        children: [
            { path: 'borrow-book', component: borrowBook },
            { path: 'return-book', component: returnBook },
            { path: 'my-info', component: myInfo },
            { path: 'borrow-record', component: borrwoRecord },
            { path: 'manage-info', component: manageInfo },
            { path: 'ranking', component: ranking },
        ]
    },
    {
        path: '/admin',
        component: admin,
        children: [
            { path: 'operate-book', component: operateBook },
            { path: 'add-book', component: addBook },
            { path: 'ranking', component: ranking },
        ]
    },
]

Vue.use(VueRouter);
Vue.use(VueCookies);

const router = new VueRouter({
    routes
})

new Vue({
    el: '#app',
    router,
    render: h => h(App),
});