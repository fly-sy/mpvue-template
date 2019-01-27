<template>
  <div>
   <!-- <text :title="msg">{{msg}}</text> -->
    {{msg}}
    <input type="text" v-model="msg" />
    <button  @click="toggle">toggle</button>
    <Ssr></Ssr>
  </div>
</template>

<script>
// import card from '@/components/card'
// import Ssr from '@/components/Ssr'

export default {
  data () {
    return {
      msg: '第一次使用mpvue'
    }
  },
  methods: {
    toggle () {
      console.log(1)
    }
  },
  components: {
    // card
    // Ssr
  }
}
</script>

<style lang="less" scoped>

</style>
