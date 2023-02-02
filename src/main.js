import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

const vueApp = createApp(App);
vueApp.use(VueAxios, axios).mount('#app')
