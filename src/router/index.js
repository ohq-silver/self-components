import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import UsingComponents from '../components/usingComponents/src/components/UsingComponents'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UsingComponents',
      component: UsingComponents
    }
  ]
})
