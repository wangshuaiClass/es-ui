<template>
  <li
    @click="onClickOption(label)"
    class="es-select--option">
    <!-- value: {{ value }} -->
    {{ label }}
  </li>
</template>
<script>
export default {
  name: 'es-option',
  inject: ['select'],
  props: {
    value: {
      required: true
    },
    label: {}
  },
  data() {
    return {
      currentLabel: ''
    }
  },
  methods: {
    onClickOption(label) {
      this.select.closeDropdown(label)
    }
  },
  created() {
  }
}
</script>
<style lang="less" scoped>
li {
  list-style: none;
}
.es-select--option {
  cursor: pointer;
  padding: 8px;
  color: #333333;
  text-align: left;
  text-indent: 12px;
  &:hover {
    background: #f4f5f9;
    color: @primary-color;
  }
}
</style>