<template>
  <div :class="[isFocus ? 'es-input-focus' : '', 'es-input']">
    <input type="text" v-model="value2" :placeholder="placeholder" @focus="focus()" @blur="blur()" @input="handleInput" />
    <i class="icon-clear"></i>
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
      value2: ''
    };
  },
  mounted() {

  },
  methods: {
    focus() {
      this.isFocus = true;
    },
    blur() {
      this.isFocus = false;
    },
    handleInput() {
      this.$emit('input', this.value2)
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
  input {
    width: 100%;
    height: 100%;
    border: 0;
    text-indent: 1em;
    outline-style: none;
  }
  .icon-clear:before{
    content: '';
    background:url("../images/x.png") no-repeat;
    display: inline-block;
    width: 20px;
    height: 20px;
    z-index: 111;
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