/* eslint-disable import/extensions */
import { createApp } from 'vue'
// eslint-disable-next-line import/no-unresolved
import router from './router'
// eslint-disable-next-line import/no-unresolved
import store from './store'
import App from './App.vue'
import './index.css'

createApp(App).use(store).use(router).mount('#app')
