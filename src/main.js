// includes
import 'simplebar';

// imports
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// parts
import App from './App.vue'
import router from './router'

// styles
import 'simplebar/dist/simplebar.css'
import './styles/base.scss'

// create , init, mount app
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
