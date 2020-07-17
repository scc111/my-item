<template>
  <div>
    <div class="container">
      <input @input="show()"
             type="text"
             name=""
             id="" />
    </div>

  </div>

</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      list: { 第一层: { 第二层1: { 第三层1: {} }, 第二层2: { 第三层2: {} } } },
      listArr: [
        ['第二层', '第三层1', '第四层1'],
        ['第二层', '第三层2', '第四层2']
      ],
      firstVal: '',
      secondVal: '',
      thirdVal: '',
      aa: {},
      searchConfig: false
    }
  },
  methods: {
    fun(data) {
      let obj = {}
      let obj2 = {}
      data.forEach(option => {
        this.firstVal = option[0]
        this.secondVal = option[1]
        this.thirdVal = option[2]
        obj2[this.secondVal] = {}
        obj2[this.secondVal][this.thirdVal] = {}
        obj[this.firstVal] = obj2
      })
      return obj
    },
    show() {
      console.log('///')
    },
    saveTime() {
      if (this.searchConfig) {
        clearTimeout(this.searchConfig)
      }
      this.searchConfig = setTimeout(() => {
        this.show()
      }, 3000)
    }
    // 防抖是将多次执行变为最后一次执行，节流是将多次执行变为每隔一段时间执行
  },
  mounted() {
    this.saveTime()
    console.log(this.fun(this.listArr))
  }
}
</script>

<style scoped lang = "less" >
.container {
  background: #ccc;
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>
