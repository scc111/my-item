<template>
  <div>
    <!-- 自定义组件使用v-model -->
   <v-model-demo v-model="num"></v-model-demo>
   <h1> {{num}}</h1>
  </div>
</template>

<script>
import vModelDemo from './v-model-demo'
export default {
  name: 'vModelIndex',
  components:{vModelDemo},
  data() {
    return {
        num:9
    }
  }
}
</script>

<style scoped>
</style>
