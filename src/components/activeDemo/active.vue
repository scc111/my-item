<template>
  <div class="containerBox">
    <div class="listBox"
         v-for="(item,index) of data"
         :key="index"
         @click="handleClick(item)">
      <Icon :type="item.type"
            v-show="hookValue !== item.key"
            size="25" />
      <Icon class="active"
            type="md-checkmark"
            v-show="hookValue === item.key"
            size="25" />
      <span :class="hookValue === item.key ? 'orange' :''">{{item.title}}</span>
      <span class="content">{{item.content}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'active',
  props: {
    value: {
      //key值
      type: [String, Number],
      default: ''
    },
    data: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  data() {
    return {
      hookValue: this.value
    }
  },
  methods: {
    handleClick(e) {
      let { key } = e
      this.hookValue = e.key
      this.$emit('input', key)
    }
  }
}
</script>

<style scoped lang="less">
.containerBox {
  width: 50%;
  margin: 200px auto;
  border-top: 1px solid #999;
  height: 49px;
  .listBox {
    font-size: 16px;
    border-bottom: 1px solid #999;
    line-height: 50px;
    position: relative;
    span {
      display: inline-block;
      margin-left: 10px;
    }
    .orange {
      color: orange;
      font-weight: 600;
    }
    .content {
      position: absolute;
      top: 0;
      left: 300px;
    }
    .active {
      color: orange;
      font-weight: 600;
    }
  }
  .listBox:hover {
    background: #cccccc;
  }
}
</style>
