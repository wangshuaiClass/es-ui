<template>
  <div class="es-select">
    <input ref="v1" class="es-select__inner" type="text" placeholder="请选择">
    <ul ref="u1" class="es-select__dropdown">
      <li>菜单一</li>
      <li>菜单二</li>
      <li>菜单三</li>
    </ul>
  </div>
</template>
<script>
// const Popper = isServer ? function() {} : require('popper.js/dist/umd/popper.js');  // eslint-disable-line
const Popper = require('@popperjs/core')

export default {
  name: 'es-select',
  mounted() {
    Popper.createPopper(this.$refs.v1, this.$refs.u1, {
      placement: 'bottom'
    })
  }
}
</script>
