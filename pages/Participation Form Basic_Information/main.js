import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './Basic_Info.vue'
import router from './router'
import './style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
