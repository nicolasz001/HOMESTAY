import '@babel/polyfill'
import Vue from 'vue'
import store from './store/index'
import './plugins/vuetify'
import "@mdi/font/css/materialdesignicons.min.css"
import App from './App.vue'
import router from './router/'
 
 


import "@/assets/core.css"
import "@/assets/w3.css"
import "@/assets/fonts.css"
import "@/assets/position.css"
import "@/assets/size.css"
import "@/assets/color.css"
import 'animate.css'
Vue.config.productionTip = false


import VueQrcodeReader from 'vue-qrcode-reader'
const moment = require('moment');
require('moment/locale/th');


Vue.use(require('vue-moment'), {
    moment
})
Vue.use(VueQrcodeReader)
Vue.component('my-component', {
  components: {
    'qrcode-stream': VueQrcodeReader.QrcodeStream,
    'qrcode-drop-zone': VueQrcodeReader.QrcodeDropZone,
    'qrcode-capture': VueQrcodeReader.QrcodeCapture
  }});

new Vue({
  router,
  store,
  
  render: h => h(App)
}).$mount('#app')
