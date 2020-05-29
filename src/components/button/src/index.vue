<template>
  <button class="es-button">
    <span>按 钮</span>
  </button>
</template>
<script>
export default {
  name: 'es-button'
}
</script>

<style lang="less" scoped>
button {
  box-sizing: border-box;
  border: none;
  outline: none;
  cursor: pointer;
}
.es-button {
  border-radius: 2px;
  color: #ffffff;
  background: @primary-color;
  box-shadow: @shadow-color;
  height: @btn-height-base;
  padding: 5px 20px;
  position: relative;
  margin: 14px;
  
  &:hover {
    opacity: 0.9;
  }
  &:active {
    background-color: #2286ef;
  }
  &:focus {
    opacity: 0.9;
    // background-color: @primary-color;
  }
  &:active::after {
    content: ' ';
    position: absolute;
    animation: shadowani 0.4s;
    z-index: -1;
    border-radius: 2px;
  }
  @keyframes shadowani {
    0% {
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      background-color: rgba(160, 200, 240, 0.6);
    }
    50% {
      left: -4px;
      top: -4px;
      right: -4px;
      bottom: -4px;
      z-index: -1;
      background-color:rgba(160, 200, 240, 0.6);
    }
    100% {
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      background-color:rgba(160, 200, 240, 0.6);
    }
  }
}
</style>
