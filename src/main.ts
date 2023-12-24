import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { plugin, defaultConfig } from "@formkit/vue"
import 'vue-toast-notification/dist/theme-sugar.css';
import config from '../formkit.config'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(plugin, defaultConfig(config))
app.use(createPinia())
app.use(router)

app.mount('#app')
