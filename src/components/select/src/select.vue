<template>
  <div :style="{ width }" class="es-select">

    <input
      :readonly="readonly"
      v-model="selectLabel"
      @click="showDrop = !showDrop"
      @keyup="handleKeyup"
      ref="input"
      class="es-select__inner"
      type="text"
      placeholder="请选择">
    
    <transition name="select-drop--transition">
      <div v-show="showDrop" ref="es-option" class="es-select__dropdown">
        <ul v-show="!isEmpty">
          <slot />
        </ul>
        <p v-show="isEmpty" class="is-empty">暂无数据</p>
      </div>
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
    },
    filterable: Boolean
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
      selectLabel: '',
      selectIndex: null,

      options: []
    }
  },
  computed: {
    readonly() {
      return !this.filterable
    },
    isEmpty() {
      return this.options.length <= 0
    }
  },
  watch: {
    showDrop: {
      // immediate: true,
      handler(val) {
        if (!val) {
          if (this.$refs.input) {
            // this.$refs.input.blur()
          }
        } else {
          this.$refs.input.focus()
        }
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
    closeDropdown(selectValue, optionLabel) {
      this.selectLabel = optionLabel
      this.selectValue = selectValue
      this.$emit('input', selectValue)
      this.showDrop = false
    },
    getLabel() {
      this.options.forEach((e, i) => {
        if (this.selectValue === e.value) {
          this.selectLabel = e.label
          this.selectIndex = i
        }
      })
    },
    handleKeyup(e) {
      this.options = this.options.filter(e => e.label.includes(this.selectLabel))
      this.$children.forEach($_option => {
        $_option.inputFilterQuery(this.selectLabel)
      })
      this.showDrop = true
    }
  },
  mounted() {
    this.selectValue = this.value || ''
    this.getLabel()
  }
}
</script>
<style lang="less" scoped>
@primary-color: #fc54c3;

.es-select {
  display: inline-block;
  position: relative;
  .is-empty {
    font-size: 14px;
    padding: 8px;
  }
}

.es-select__inner {
  width: 100%;
  border: none;
  outline: none;
  box-sizing: border-box;
  padding: 8px 15px;
  border-radius: 2px;
  height: 32px;
  line-height: 32px;
  border: 1px solid #ddd;
  font-size: 14px;
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
  margin-top: 8px;
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  &::before {
    content: ' ';
    position: absolute;
    display: inline-block;
    top: -7px;
    opacity: 0.8;
    left: 20px;
    width: 5px;
    height: 5px;
    background: @primary-color;
    border-radius: 50%;
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
