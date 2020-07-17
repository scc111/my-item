<template>
  <div class="model">
    <!-- 自定义组件使用v-model -->
    <!-- v-model只是一个语法糖，等于:value+@input，
    真正的实现靠的还是v-bind:绑定响应式数据，触发 input 事件并传递数据 (核心和重点) -->
    <input  :value='currentValue' type="text" @input="handleInput">   <br>
    <button @click="reduce">数量--</button>
    <button @click="add">数量++</button>
  </div>
</template>

<script>
export default {
  name: 'vModelDemo',
  props:['value'],
  data() {
    return {
      currentValue:this.value,
      aa:''
    }
  },
  methods:{
    handleInput(ev){
     let value = ev.target.value
     this.$emit('input',value)
    },
    reduce(){
       this.currentValue--
       this.$emit('input',this.currentValue)
    },
    add(){
       this.currentValue++
       this.$emit('input',this.currentValue)
    }
  }
}
</script>

<style scoped>
</style>
