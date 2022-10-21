// imports
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'

// parts
import App from './App.vue'
import router from './router'

// styles
import './styles/base.scss'

// create , init, mount app
const app = createApp(App)
app.use(createPinia())
app.use(createI18n({
    legacy: false, 
    locale: 'en',
    fallbackLocale: 'en',
    messages
}))
app.use(router)
app.mount('#app')
