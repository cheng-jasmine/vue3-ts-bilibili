import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.less'

import Card from './components/Card/index.vue' // 全局注册组件


import mitt from 'mitt'

const app = createApp(App)

const Mit = mitt()

declare module 'vue' {
    export interface ComponentCustomProperties {
        $Bus: typeof Mit
    }
}

app.config.globalProperties.$Bus = Mit

app.component('Card', Card).use(router).mount('#app')
