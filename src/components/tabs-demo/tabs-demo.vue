<template>
  <div>
    <Tabs value="name1">
      <TabPane v-for="(item,index) of list"
               :key="index"
               :label="item.label"
               :name="item.value">
        <slot :name="item.slotName"></slot>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  },
  computed: {},
  mounted() {},
  methods: {}
}
</script>
<style lang='less' scoped>
</style>



