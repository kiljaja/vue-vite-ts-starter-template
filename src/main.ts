/* eslint-disable import/no-unresolved */
import { createApp } from 'vue'
// eslint-disable-next-line import/extensions
import router from './router'
import App from './App.vue'
import './index.css'

createApp(App).use(router).mount('#app')
