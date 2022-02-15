import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps"

Vue.config.productionTip =

    Vue.use(VueGoogleMaps, {
        load: {
            key: "AIzaSyBNfwRJdrFx0T0K818ICbgPdJs0HOZqjWo",
            libraries: "places"
        }
    })

new Vue({
    render: h => h(App),
}).$mount('#app')