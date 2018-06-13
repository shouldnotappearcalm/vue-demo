import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Grid from '../view/grid/grid'
import Layout from '../view/layout/index'
import Select from '../view/select/select'
import Date from '../view/date/date'
import Transfer from '../view/transfer/transfer'
import Form from '../view/form/form'
import Tree from '../view/tree/tree'

Vue.use(Router)

export default new Router({
  routes: [{
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
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/date',
      name: 'Date',
      component: Date
    } ,
    {
      path: '/transfer',
      name: 'Transfer',
      component: Transfer
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/tree',
      name: 'Tree',
      component: Tree
    }
  ]
})
