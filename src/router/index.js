import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: (resolve) => {
        require(['../pages/test'], resolve)
      }
    },
    {
      path: '/test2',
      name: 'test2',
      component: (resolve) => {
        require(['../pages/test2'], resolve)
      }
    }
  ]
})
