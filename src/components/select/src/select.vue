<template>
  <div class="es-select">

    <input @click="showDrop = !showDrop" ref="v1" class="es-select__inner" type="text" placeholder="请选择">
    
    <transition name="select-drop--transition">
      <ul v-if="showDrop" ref="es-option" class="es-select__dropdown">
        <es-option></es-option>
        <!-- <li @click="showDrop = !showDrop" class="es-select--option">菜单二</li> -->
      </ul>
    </transition>

  </div>
</template>
<script>
// isServer
import { createPopper } from '@popperjs/core'
// import esOption from './option'

export default {
  name: 'es-select',
  // components: { esOption },
  provide() {
    return {
      'select': this
    }
  },
  data() {
    return {
      showDrop: true
    }
  },
  watch: {
    showDrop: {
      immediate: true,
      handler(showDrop) {
        showDrop && this.$refs['es-option'] && createPopper(this.$refs.v1, this.$refs['es-option'], {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, 6]
              }
            }
          ]
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
.es-select {
  width: 200px;
}
.es-select__inner {
  width: 200px;
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 8px 15px;
  border-radius: 2px;
  border: 1px solid #ddd;
  &:focus {
    border: 1px solid @primary-color;
  }
}
.es-select__dropdown {
  width: 200px;
  border-radius: 2px;
  background: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: absolute;
}
.es-select--option {
  cursor: pointer;
  padding: 4px 8px;
  color: #333333;
  &:hover {
    background: #f4f5f9;
    color: @primary-color;
  }
}

.select-drop--transition-enter-active,
.select-drop--transition-leave-active {
  opacity: 1;
  transform: scaleY(1);
  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1), opacity 300ms cubic-bezier(0.23, 1, 0.32, 1);
  transform-origin: center top;
}
.select-drop--transition-enter,
.select-drop--transition-leave-active {
  opacity: 0;
  transform: scaleY(0);
}
</style>
