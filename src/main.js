// includes
import 'simplebar';

// imports
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'simplebar/dist/simplebar.css'
import './styles/base.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
