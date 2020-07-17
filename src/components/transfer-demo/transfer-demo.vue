<template>
  <div>
    <!-- 穿梭框组件子组件 -->
    <Transfer
      :data="data1"
      :title="titles"
      :target-keys="targetKeys"
      :render-format="render1"
      :list-style="listStyle"
      @on-change="handleChange1"
    ></Transfer>
  </div>
</template>

<script>
export default {
  name: 'transferDemo',
  components: {},
  props: {
    data1: {
      type: Array,
      default: () => []
    },
    targetKeys1: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      targetKeys: this.targetKeys1,
      // 自定义样式
      listStyle: {
        width: '250px',
        height: '300px'
      }
    }
  },
  methods: {
    // 规定格式参数为item<===>data1,默认显示label,没有时显示key值,可以自己组合出需要的数据格式
    render1(item) {
      return item.label
    },
    handleChange1(newTargetKeys, direction, moveKeys) {
      console.log('新的目标列索引', newTargetKeys)
      console.log('方向', direction)
      console.log('移动的key值', moveKeys)
      this.targetKeys = newTargetKeys
    }
  }
}
</script>
<style lang='less' scoped>
</style>