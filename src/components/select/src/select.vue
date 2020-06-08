<template>
  <div
    v-outside-click="handleClickOutside"
    :style="{ width }"
    class="es-select">

    <input
      :readonly="readonly"
      v-model="selectLabel"
      @click="showDrop = !showDrop"
      @keyup="handleKeyup"
      ref="input"
      :disabled="disabled"
      class="es-select__inner"
      :class="disabled ? 'is_disabled':''"
      type="text"
      placeholder="请选择">
    
    <transition
      name="select-drop--transition"
      @after-leave="doDestroyPoper">
      <div id="id2" ref="es-option" v-show="showDrop" class="es-select-drop">
        <div ref="arrow" data-popper-arrow class="arrow"></div>
        <ul v-show="!isEmpty" class="es-select__dropdown">
          <slot />
        </ul>
        <p v-show="isEmpty" class="is-empty">暂无数据</p>
      </div>
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
  props: {
    // v-model bind value
    value: {
      required: true
    },
    width: {
      type: String,
      default: '100%'
    },
    filterable: Boolean,
    disabled: {
      type: Boolean,
      default: false
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
      selectLabel: '',
      selectIndex: null,

      options: [],

      poperIns: null
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
      handler(val) {
        if (!val) {
          if (this.$refs.input) {}
        } else {
          this.$refs.input.focus()
          const $d1 = this.$refs['input']
          const $d2 = this.$refs['es-option']
          const $a1 = this.$refs.arrow
          this.poperIns = createPopper($d1, $d2, {
            placement: 'bottom',
            // strategy: 'fixed',
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, 10]
                }
              },
              {
                name: 'flip',
                options: {
                  fallbackPlacements: ['top']
                }
              },
              {
                name: 'arrow',
                options: {
                  padding: 15
                }
              }
            ]
          })
        }
      }
    }
  },
  methods: {
    /**
     * close select dropdown
     * @params: null || label optionLabel
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
    // filter
    handleKeyup(e) {
      this.options = this.options.filter(e => e.label.includes(this.selectLabel))
      this.$children.forEach($_option => {
        $_option.inputFilterQuery(this.selectLabel)
      })
      this.showDrop = true
    },
    handleClickOutside() {
      this.showDrop = false
    },
    doDestroyPoper() {
      this.poperIns && this.poperIns.destroy()
    }
  },
  mounted() {
    this.selectValue = this.value || ''
    this.getLabel()
    // const d1 = document.querySelector('#id1')
    // const d2 = document.querySelector('#id2')
    // createPopper(d1, d2, {
    //   placement: 'bottom',
    //   modifiers: [
    //     {
    //       name: 'flip',
    //       options: {
    //         fallbackPlacements: ['top']
    //       }
    //     }
    //   ]
    // })
  },
  directives: {
    'outside-click': {
      bind(el, binding) {
        el._outsideClickEvent = e => {
          if (!el.contains(e.target)) {
            binding.value(e)
          }
        }
        setTimeout(() => {
          document.body.addEventListener('click', el._outsideClickEvent)
        }, 0)
      },
      unbind(el) {
        document.body.removeEventListener('click', el._outsideClickEvent)
        delete el._outsideClickEvent
      }
    }
  }
}
</script>
<style lang="less" scoped>
// @primary-color: #fc54c3;

.es-select {
  display: inline-block;
  position: relative;
  .is-empty {
    font-size: 14px;
    padding: 8px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .is_disabled {
    cursor: not-allowed;
    background: #f4f5f9;
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
.es-select-drop {
  width: 100%;
  background: #ffffff;
}
.es-select__dropdown {
  width: 100%;
  border-radius: 2px;
  background: #ffffff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  opacity: 1;
  max-height: 240px;
  overflow-y: auto;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 4px 0;
}
.arrow {
  border-top: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #ffffff;
  border-left: 6px solid transparent;
  position: absolute;
  top: -12px;
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
