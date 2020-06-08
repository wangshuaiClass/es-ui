<template>
  <div :class="[isFocus ? 'es-input-focus' : '', 'es-input']" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <input type="text" v-model="value2" :placeholder="placeholder" @focus="focus()" @blur="blur()" @input="handleInput" />
    <i class="icon-clear" v-if="clearableFlg" @click="clear">
      <img src="../images/x.png" alt="">
    </i>
  </div>
</template>
<script>
export default {
  name: "es-input",
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    value: {
      type: [String, Number],
      default: ''
    },
    clearable: {
        type: Boolean,
        default: false
    },
  },
  data() {
    return {
      isFocus: false,
      value2: '',
      clearableFlg: false,
      clearableEnter: false,
    };
  },
  mounted() {

  },
  watch: {
    value2(val) {
      if(this.clearable) {
        if(val && this.clearableEnter) {
          this.clearableFlg = true
        } else {
          this.clearableFlg = false
        }
      } else {
        this.clearableFlg = false
      }
        
    }
  },
  methods: {
    // 聚焦
    focus() {
      this.isFocus = true;
    },
    // 离焦
    blur() {
      this.isFocus = false;
    },
    // 提交
    handleInput() {
      this.$emit('input', this.value2)
    },
    // 清除
    clear() {
      this.value2 = ''
    },
    // mouseenter
    mouseenter() {
      if(this.clearable && this.value2) {
        this.clearableEnter = true
        this.clearableFlg = true
      }
    },
    mouseleave() {
      this.clearableEnter = false
      this.clearableFlg = false
    }
  }
};
</script>

<style lang="less">
.es-input {
  width: 300px;
  height: 32px;
  border: 1px solid #dcdee2;
  border-radius: 4px;
  overflow: hidden;
  transition: 0.3s all;
  position: relative;
  input {
    width: 100%;
    height: 100%;
    border: 0;
    text-indent: 1em;
    outline-style: none;
  }
  .icon-clear{
    width: 16px;
    height: 16px;
    position: absolute;
    top:8px;
    right:8px;
    z-index: 999;
    cursor: pointer;
    img{
      width: 100%;
      height: 100%;
    }
  }
}
.es-input:hover {
  border-color: #5fdde5;
}
.es-input-focus {
  border-color: #5fdde5;
  box-shadow: #5fdde5 0px 0px 8px;
}
</style>