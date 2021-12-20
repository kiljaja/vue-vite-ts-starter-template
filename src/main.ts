/* eslint-disable import/extensions */
import { createApp } from 'vue'
// eslint-disable-next-line import/no-unresolved
import router from './router'
import App from './App.vue'
import './index.css'

createApp(App).use(router).mount('#app')
