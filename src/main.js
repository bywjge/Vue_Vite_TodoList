
import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// createApp(App).mount('#app')
import {createApp} from "vue";

createApp(App).use(ElementPlus).mount('#app');