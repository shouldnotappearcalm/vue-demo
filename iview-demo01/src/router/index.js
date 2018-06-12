import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Grid from '../view/grid/grid'
import Layout from '../view/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/grid',
      name: 'Grid',
      component: Grid
    },
    {
      path: '/layout',
      name: 'Layout',
      component: Layout
    }
  ]
})
