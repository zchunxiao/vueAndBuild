import Vue from "vue"
import App from "./App.vue"
import router from "@/router"
import "@/assets/style/global.css"
import HelloWorld from "@/components/HelloWorld.vue"
import color from "@/directives"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import "@/common/font.css"
// // import '@/assets/style/scss/element-variables.scss'

// import ELButton from "@/components/button"

import axios from "axios";
Vue.config.productionTip = false

// 注册全局组件
Vue.component("HelloWorld", HelloWorld)
// Vue.component('el-button',ELButton);
// 注册全局指令
Vue.directive("color", color)

Vue.use(ElementUI);



Vue.prototype.$ajax = axios

new Vue({
  render: h => h(App),
  router
}).$mount("#app")
