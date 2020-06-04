<template>
  <div>
    <es-button class="c" @click="onClick">确认</es-button>
  </div>
</template>
<script>
export default {
  methods: {
    onClick() {
      this.$message.success('成功')
      // this.$message('哈哈')
    }
  }
}
</script>
<style lang="less" scoped>
.c {
  margin-top: 20px;
}
</style>
