import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Coll from '@/components/collapseDemo/Coll'
import index from '@/components/activeDemo/index'
import vModelIndex from '@/components/v-model-demo/index'
import charts from '@/components/chartsDemo/charts-demo'
import transferIndex from '@/components/transfer-demo/index'
import tabsDemoIndex from '@/components/tabs-demo/index'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
      name: 'vModelIndex',
      component: vModelIndex
    },
    // e-charts
    {
      path: '/charts',
      name: 'charts',
      component: charts
    },
    // 穿梭框组件
    {
      path: '/transfer-demo',
      name: 'transferIndex',
      component: transferIndex
    },
    // tab组件
    {
      path: '/tabs-demo',
      name: 'tabsDemoIndex',
      component: tabsDemoIndex
    },
  ]
})
