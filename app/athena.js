import { createApp } from 'vue'
import Athena from './athena'

const app = createApp(App)
app.config.globalProperties.$athena = new Athena()
app.mount('#app')