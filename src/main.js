import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueProgressBar from 'vue-progressbar'
import Vue2TouchEvents from 'vue2-touch-events'
import { VueHammer } from 'vue2-hammer'
// import TweenMax from "gsap/TweenMax";



const options = {
    color: '#E0A96F',
    failedColor: '#874b4b',
    thickness: '3px',
    transition: {
        speed: '0.2s',
        opacity: '0.6s',
        termination: 300
    },
    autoRevert: true,
    location: 'top',
    inverse: false
}

library.add(fas, far, fab)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueProgressBar, options)
Vue.use(Vue2TouchEvents)
Vue.use(VueHammer)
    // Vue.use(TweenMax)

Vue.component('font-awesome-icon', FontAwesomeIcon)
    // Vue.directive("pan", {
    //     bind: function(el, binding) {
    //         if (typeof binding.value === "function") {
    //             const mc = new Hammer(el);
    //             mc.get("pan").set({ direction: Hammer.DIRECTION_ALL });
    //             mc.on("pan", binding.value);
    //         }
    //     }
    // });


Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')