import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import { router } from './router/index.js'

const app = createApp(App)
app.use(router)
app.use(ElementUI)
app.mount('#app')