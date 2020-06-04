<template>
  <button
    @click="onClick"
    class="es-button"
    :style="{ display: block ? 'block' : 'inline-block' }"
    :class="[
      type ? `es-button--${type}` : '',
      round ? 'es-button__round' : ''
    ]">
    <span v-if="!$slots.default">按 钮</span>
    <slot v-else></slot>
  </button>
</template>
<script>
export default {
  name: 'es-button',
  props: {
    type: {
      type: String,
      default: ''
    },
    round: Boolean,
    block: Boolean
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
@primary-color: #fc54c3;

button {
  box-sizing: border-box;
  border: none;
  outline: none;
  cursor: pointer;
}
.es-button {
  box-sizing: border-box;
  border-radius: 2px;
  color: #ffffff;
  background: @primary-color;
  box-shadow: @shadow-color;
  border: 1px solid @primary-color;
  padding: 7.5px 20px;
  position: relative;
  margin-right: 14px;
  &.es-button--plain {
    background: none;
    color: #606266;
    border: 1px solid #dcdfe6;
    &:focus {
      outline: none;
      background: none;
      color: @primary-color;
      border-color: @primary-color;
    }
  }
  &.es-button--text {
    background: none;
    color: #606266;
    border: none;
    &:after {
      display: none;
    }
    &:focus {
      color: @primary-color;
      background: none;
    }
  }
  &.es-button__round {
    border-radius: 18px;
    &:after {
      border-radius: 18px;
    }
  }
  &.es-button--ghost {
    border: 1px dashed #dcdfe6;
    background: none;
    color: #606266;
    &:focus {
      outline: none;
      background: none;
      color: @primary-color;
      border-color: @primary-color;
    }
  }
  &:hover {
    opacity: 0.9;
  }
  &:focus {
    outline: none;
    background: #f148b7;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    top: -6px;
    left: -6px;
    right: -6px;
    bottom: -6px;
    border-radius: 2px;
    pointer-events: none;
    background-color: @primary-color;
    background-repeat: no-repeat;
    background-position: 50%;
    opacity: 0;
    transition: all 0.3s;
  }
  &:active:after {
    opacity: 0.4;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: 0s;
  }
}
</style>
