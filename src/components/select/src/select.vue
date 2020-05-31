<template>
  <div :style="{ width }" class="es-select">

    <input
      v-model="selectValue"
      @focus="showDrop = true"
      ref="v1"
      class="es-select__inner"
      type="text"
      placeholder="请选择">
    
    <transition name="select-drop--transition">
      <ul v-show="showDrop" ref="es-option" class="es-select__dropdown">
        <slot />
      </ul>
    </transition>
    
  </div>
</template>
<script>
// isServer
// import * as Popper from '@popperjs/core'
// import esOption from './option'

export default {
  name: 'es-select',
  // components: { esOption },
  props: {
    // v-model bind value
    value: {
      required: true
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  provide() {
    return {
      'select': this
    }
  },
  data() {
    return {
      showDrop: false,
      // value
      selectValue: '',
      // show label text
      selectLabel: '',

      // poperIns: null
    }
  },
  watch: {
    showDrop: {
      immediate: true,
      handler(showDrop) {
        // showDrop
        // ? this.poperIns = Popper.createPopper(this.$refs.v1, this.$refs['es-option'], {
        //   placement: 'bottom'
        // })
        // : this.poperIns && this.poperIns.destroy()
      }
    }
  },
  methods: {
    /**
     * close select dropdown
     * params: null || label
     */
    closeDropdown(optionLabel) {
      this.selectValue = optionLabel
      this.showDrop = false
    }
  },
  mounted() {
    this.selectValue = this.value || ''
    console.log(this.$refs.default)
  }
}
</script>
<style lang="less" scoped>
.es-select {
  position: relative;
}
.es-select__inner {
  width: 100%;
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 8px 15px;
  border-radius: 2px;
  border: 1px solid #ddd;
  cursor: pointer;
  &:focus {
    border: 1px solid @primary-color;
  }
}
.es-select__dropdown {
  width: 100%;
  border-radius: 2px;
  background: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  opacity: 1;
  position: absolute;
  margin-top: 4px;
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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
