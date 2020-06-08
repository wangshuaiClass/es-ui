<template>
  <li
    @click="onClickOption(label)"
    class="es-select--option"
    v-show="filtered"
    :class="[
      itemIsSelected() ? 'selected' : '',
      disabled ? 'is-disabled': '' 
    ]">
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
    label: {},
    disabled: Boolean
  },
  data() {
    return {
      // currentLabel: '',
      filtered: true
    }
  },
  methods: {
    onClickOption(label) {
      if (this.disabled) return
      this.select.$refs.input.focus()
      this.select.closeDropdown(this.value, label)
    },
    itemIsSelected() {
      return this.select.selectValue === this.value
    },
    inputFilterQuery(text) {
      this.filtered = this.label.includes(text)
      console.log(this.select.options)
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
// @primary-color: #fc54c3;
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
  width: 100%;
  &:hover {
    background: #f4f5f9;
    color: @primary-color;
  }
  &.selected {
    color: @primary-color;
  }
  &.is-disabled {
    color: #e4e4e4;
    cursor: not-allowed;
  }
}
</style>