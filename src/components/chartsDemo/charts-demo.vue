<template>
  <div id="myChart"
       :style="{width: '300px', height: '300px'}"></div>
</template>

<script>
export default {
  name: 'charts',
  props: {
    val: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      timer: ''
    }
  },
  mounted() {
    this.drawLine()
    this.timer = setInterval(this.setTimer, 2000)
    // this.timer = '33'
    // console.log(this.timer)
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%'
        },
        toolbox: {
          feature: {
            restore: {},
            saveAsImage: {}
          }
        },
        series: [
          {
            name: '业务指标',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            data: [{ value: 50, name: '完成率' }]
          }
        ]
      })
    },
    setTimer() {
      myChart.setOption.series[0].data[0].value =
        (Math.random() * 100).toFixed(2) - 0
      myChart.setOption(option, true)
    }
  }
}
</script>

<style scoped lang = "less" >
</style>
