<template>
  <div class="model">
    <!-- 自定义组件使用v-model -->
    <!-- v-model只是一个语法糖，等于:value+@input，
    真正的实现靠的还是v-bind:绑定响应式数据，触发 input 事件并传递数据 (核心和重点) -->
    <input  :value='currentValue' type="text" @input="handleInput">   <br>
    <button @click="pre">数量--</button>
    <button @click="add">数量++</button>
  </div>
</template>

<script>
export default {
  name: 'vModelDemo',
  props:['value'],
  data() {
    return {
      currentValue:this.value
    }
  },
  methods:{
    handleInput(ev){
     let value = ev.target.value
     this.$emit('input',value)
    },
    pre(){
       let value = this.currentValue--
       this.$emit('input',value)
    },
    add(){
       let value = this.currentValue++
       this.$emit('input',value)
    }
  }
}
</script>

<style scoped>
</style>
