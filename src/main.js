import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import store from './store';
import App from './App.vue';
import Lobby from './components/Lobby.vue';
import Login from './components/Login.vue';
import Profile from './components/Profile.vue';
import Room from './components/Room.vue';

import './assets/index.css';
import base from './base';
const routes = [
  { path: '/', component: Lobby },
  { path: '/login', component: Login },
  { path: '/user/:id', component: Profile },
  { path: '/user', redirect: '/' },
  { path: '/room', redirect: '/' },
  { path: '/room/:roomID', component: Room },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).use(store).mixin(base).mount('#app');
