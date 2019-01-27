<template>
  <div class="home">
    this is home page
  </div>
</template>

<script>
export default {
  data: () => ({

  }),
  created () {
    this.getdata()
  },
  methods: {
    async getdata () {
      const res = await this.$httpWX.get({
        url: 'api/getprodlist'
      })
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>

</style>