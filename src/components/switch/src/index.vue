<template>
  <button class="es-switch" :class="{ 'es-switch__close': !switchValue }" @click="toggleSwitch">
    <span :class="switchValue ? '_left':'_right'" class="es-switch__dot"></span>
    <span :class="switchValue ? '_right':'_left'" class="es-switch__text">
      {{ switchValue ? `${falseLabel}` : trueLabel }}
    </span>
  </button>
</template>
<script>
export default {
  name: 'es-switch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    'false-label': {
      type: [String, Number],
      default: '关'
    },
    'true-label': {
      type: [String, Number],
      default: '开'
    }
  },
  data() {
    return {
      switchValue: false
    }
  },
  created() {
    this.switchValue = this.value
  },
  methods: {
    toggleSwitch() {
      this.switchValue = !this.switchValue
      this.$emit('input', this.switchValue)
    }
  }
}
</script>
<style lang="less" scoped>
@primary-color: #fc54c3;

.es-switch {
  width: 44px;
  height: 22px;
  border-radius: 12px;
  background: @primary-color;
  outline: none;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.32s;
  &.es-switch__close {
    background: #dcdfe6 !important;
  }
  .es-switch__dot {
    background: #ffffff;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    position: absolute;
    left: 2px;
    top: 2px;
    transition: all 0.32s cubic-bezier(1,-0.21, 0, 0.9);
    &._right {
      left: 23px;
    }
    &._left {
      left: 2px;
    }
  }
  .es-switch__text {
    position: absolute;
    right: 6px;
    line-height: 18px;
    font-size: 12px;
    color: #ffffff;
    top: 3px;
    transition: all 0.32s cubic-bezier(1,-0.21, 0, 0.9);
    &._right {
      right: 6px;
    }
    &._left {
      right: 24px;
    }
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
    pointer-events: none;
    background-color: @primary-color;
    background-repeat: no-repeat;
    background-position: 50%;
    opacity: 0;
    transition: all 0.3s;
    border-radius: 18px;
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
