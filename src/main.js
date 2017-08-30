import Vue from 'vue'
import App from './App.vue'
import vueImageGallery from './lib/index.js'

Vue.use(vueImageGallery)

new Vue({
  el: '#app',
  render: h => h(App)
})
