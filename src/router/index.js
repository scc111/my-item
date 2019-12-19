import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Coll from '@/components/collapseDemo/Coll'
import index from '@/components/activeDemo/index'
import vModelDemo from '@/components/v-model-demo/index'
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
      // 自定义组件使用v-model
      path: '/v-model-demo',
      name: 'vModelDemo',
      component: vModelDemo
    },
    {
      path: '/charts',
      name: 'charts',
      component: charts
    },
  ]
})
