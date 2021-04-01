import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from './components/Header.vue'
import CreateTask from './components/CreateTask.vue'
import Task from './components/Task.vue'
import Search from './components/Search.vue'
import HeaderAuth from './components/HeaderAuth.vue'
import axios from 'axios'
Vue.config.productionTip = false

Vue.component('Header', Header)
Vue.component('CreateTask', CreateTask)
Vue.component('Search',Search)
Vue.component('Task', Task)
Vue.component('HeaderAuth',HeaderAuth)
new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app')
