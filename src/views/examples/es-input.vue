<template>
  <div>
    <es-input v-model="value" placeholder="默认显示" clearable ></es-input>
    <button @click="click">提交</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    };
  },
  methods: {
    click() {
        
    }
  }
};
</script>
<style lang="less">

</style>
