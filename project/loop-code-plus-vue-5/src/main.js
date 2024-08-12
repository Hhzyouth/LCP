import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import ElementPlus from 'element-plus'
// import zhCn from 'element-plus/es/locale/lang/zh-cn' 全局加载语言
import { ElConfigProvider } from 'element-plus'; //局部加载


const pinia = createPinia()
const app = createApp(App)
app.component('ElConfigProvider', ElConfigProvider)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
// app.use(ElementPlus, {
//   locale: zhCn,
// })
app.use(router)
app.use(pinia)
app.mount('#app')


