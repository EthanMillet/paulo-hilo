import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import globalFunctions from './globals.js'

const app = createApp(App)

app.use(router)

app.config.globalProperties.$global = globalFunctions;

app.mount('#app')
