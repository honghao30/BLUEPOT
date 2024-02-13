import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import axios from 'axios'
import { createPinia } from "pinia"
import ClickOutside from './utils/ClickOutsideDirective'

import globalComponents from './plugins/myComponents'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/scss/index.scss'

const pinia = createPinia()

const app = createApp(App)
app.provide('$axios', axios)

createApp(App).use(ElementPlus).use(pinia).use(router).use(globalComponents).mount('#app')
app.directive('click-outside', ClickOutside)
