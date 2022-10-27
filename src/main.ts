<<<<<<< HEAD
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
=======
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD
//dev_teset 한번더
=======
//dev
>>>>>>> dev
import '@/assets/style/scss/common.scss'
>>>>>>> 17aa9252a3558d7992cfe6d26ba978fbdc3068dd

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
