import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Coll from '@/components/collapseDemo/Coll'
import index from '@/components/activeDemo/index'
import forms from '@/components/formDemo/forms'
import charts from '@/components/chartsDemo/charts-demo'




Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // 插槽的作用
      path: '/coll',
      name: 'Coll',
      component: Coll
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/forms',
      name: 'forms',
      component: forms
    },
    {
      path: '/charts',
      name: 'charts',
      component: charts
    },
  ]
})
