<template>
  <div>
    <transferDemo :data1="data1" :targetKeys1="targetKeys1"></transferDemo>
  </div>
</template>

<script>
import transferDemo from './transfer-demo'
export default {
  name: 'transferIndex',
  components: { transferDemo },
  props: {},
  data() {
    return {
      // data格式必须是[{label:  ,key:'1'}]
      data1: [
        { label: '内容一', key: '1' },
        { label: '内容二', key: '2' },
        { label: '内容三', key: '3' }
      ],
      // 目标列索引合集,每项为数据的key值,含有这些key值的数据会在右边栏中
      targetKeys1: []
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style lang='less' scoped>
</style>