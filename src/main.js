import { createApp } from 'vue'
import App from './App.vue'

// 事件总线
import mitt from 'mitt'

const Event = mitt()

const app = createApp(App)
app.config.globalProperties.$Event = Event

app.mount('#app')


