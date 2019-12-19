<template>
<!-- 这是封装的子组件 -->
<div class="containerBox">
   <div class="listBox" v-for="(item,index) of data" :class="{gray:item.open}" :key="index">
      <span>{{item.name}}</span>
      <i-switch class="openBtn" @on-change="item.open = !item.open" ></i-switch>
       <div class="hiddenBox" v-show="item.open">
           <slot :name="item.slot"></slot>
       </div>
   </div>
</div>

</template>
<script>
export default {
  name: 'Home',
  props:{
    data:{
      type:Array,
      default:function(){
        return []
      }
    }
  },
  data () {
    return {}
  },
 methods: {}
}
</script>

<style scoped lang = "less">
.containerBox{
  width: 50%;
  border-top: 1px solid #999;
  min-height:49px;
.listBox{
  font-size: 16px;
  border-bottom: 1px solid #999;
  line-height: 50px;
  position: relative;
  span{
    display: inline-block;
    margin-left: 20px;
  }
  .hiddenBox{
    width: 100%;
    height: auto;
    padding-left: 20px;
    background: #ccc;
    z-index: 10;
  }
  .openBtn{
    position: absolute;
    top: 13px;
    right: 20px;
  }
}
.gray{
  background: #ccc;
}
}


</style>
