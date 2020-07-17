<template>
  <!-- 父组件 -->
  <tabsDemo :list="list">
    <template slot="one">
      <div>这是插槽一的内容</div>
    </template>
    <template slot="two">
      <div>这是插槽二的内容</div>
    </template>
    <template slot="three">
      <div>这是插槽三的内容</div>
    </template>
  </tabsDemo>
</template>

<script>
import tabsDemo from './tabs-demo'
export default {
  components: { tabsDemo },
  name: 'tabsDemoIndex',
  data() {
    return {
      list: [
        { label: '标签一', value: 'name1', slotName: 'one' },
        { label: '标签二', value: 'name2', slotName: 'two' },
        { label: '标签三', value: 'name3', slotName: 'three' }
      ]
    }
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style lang='less' scoped>
</style>
