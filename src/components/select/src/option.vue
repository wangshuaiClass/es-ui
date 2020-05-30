<template>
  <li>
    {{ currentLabel }}
  </li>
</template>
<script>
export default {
  name: 'es-option',
  inject: ['select'],
  props: {
    value: {
      required: true
    }
  },
  data() {
    return {
      currentLabel: ''
    }
  },
  mounted() {
    console.log(this)
  }
}
</script>