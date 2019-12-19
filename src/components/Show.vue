<template>
  <div class="show">
   <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel">
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'Show',
  data () {
    return {
       modal1: false
    }
  },
  methods:{
    shows(){
      this.modal1=true
    },
    ok () {
       this.$Message.info('Clicked ok');
    },
    cancel () {
       this.$Message.info('Clicked cancel');
    }
  }
}
</script>

<style scoped>

</style>
