<template>
  <li
    @click="onClickOption(label)"
    class="es-select--option"
    :class="itemIsSelected() ? 'selected' : ''">
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
      this.select.closeDropdown(this.value, label)
    },
    itemIsSelected() {
      return this.select.selectValue === this.value
    }
  },
  created() {
    this.select.options.push({
      value: this.value,
      label: this.label
    })
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
  font-size: 14px;
  &:hover {
    background: #f4f5f9;
    color: @primary-color;
  }
  &.selected {
    color: @primary-color;
  }
}
</style>