<template>
  <!-- 这是父组件 -->
  <div class="index">
    <active :data="data"></active>
  </div>
</template>
<script>
import active from './active'
export default {
  components: { active },
  name: 'index',
  data() {
    return {
      data: [
        {
          type: 'ios-globe-outline',
          title: '网页',
          key: '1',
          content: '推广网页，增加网页的用户量'
        },
        {
          type: 'ios-globe-outline',
          title: '网页（微信推广）',
          key: '2',
          content: '推广网页，增加网页的用户量'
        },
        {
          type: 'ios-globe-outline',
          title: '电商网页',
          key: '3',
          content: '推广电商网页，增加商品的购买量'
        }
      ]
    }
  },
  methods: {
    getObj(){
      
    }
  }
}
</script>

<style scoped>
</style>
