import vueImageGallery from './vue-image-gallery.vue'
import './prefixfree.js'

const imagegallery = {
    install(Vue, options) {
        Vue.component(vueImageGallery.name, vueImageGallery)
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(imagegallery);
}

export default imagegallery
