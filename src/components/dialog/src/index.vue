<template>
  <div v-show="visible" @click.self="handleClose" class="es-dialog__wrapper">
    <div class="es-dialog">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'es-dialog',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="less" scoped>
.es-dialog__wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  animation-duration: .22s;
  animation-fill-mode: both;
  animation-name: _dialog_ani;
}
.es-dialog {
  margin: 0 auto;
  margin-top: 12vh;
  width: 40%;
  height: 300px;
  background: #ffffff;
  border-radius: 4px;
  animation-duration: .22s;
  animation-fill-mode: both;
  animation-name: _dialog_content_ani;
}
@keyframes _dialog_ani {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes _dialog_content_ani {
 0% {
    opacity: 0;
    transform: translate3d(0, 30%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0);
  }
}
</style>
