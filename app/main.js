import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Athena from './athena'
import Services from './services'

const services = new Services({ /* configurations */ })

const app = createApp(App)
app.use(store)
app.use(router)
app.config.globalProperties.$athena = new Athena()
app.config.globalProperties.$services = services
app.mount('#app')