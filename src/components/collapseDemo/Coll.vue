<template>
<!-- 这是父组件 -->
    <div class="colls">
    <Home :data="data">
     <template slot="sex">
     <Child/><span>1</span>
     </template>
      <template slot="age">
       <Child/><span>2</span>
     </template>
      <template slot="hobby">
       <Child/><span>3</span>
     </template>
    </Home>
    </div>
</template>
<script>
import Home from './Home'
import Child from './Child'
export default {
components:{Home,Child},
  name: 'Coll',
  data () {
    return {
      data:[
        {
        name:'性别',
        open:false,
        slot:'sex'
        },
        {
        name:'年龄',
        open:false,
        slot:'age'
        },
        {
        name:'行为兴趣',
        open:false,
        slot:'hobby'
        }
      ]
    }
  },
  methods:{
    
  }
 
}
</script>

<style scoped>

</style>
