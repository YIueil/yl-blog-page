import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/global.css'

// Ant Design Vue
import { Modal, message } from 'ant-design-vue'
import 'ant-design-vue/lib/modal/style'
import 'ant-design-vue/lib/message/style'

message.config({
    duration: 1
})

// 事件总线
import mitt from 'mitt'

const Event = mitt()

const app = createApp(App)
app.config.globalProperties.$Event = Event
app.config.globalProperties.$confirm = Modal.confirm
app.config.globalProperties.$message = message

app.mount('#app')


