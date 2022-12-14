import Vue from 'vue'
import App from './App.vue'
import VueResize from 'vue-resize'
import 'vue-resize/dist/vue-resize.css'
Vue.config.productionTip = false
Vue.use(VueResize)

new Vue({
  render: h => h(App),
}).$mount('#app')
