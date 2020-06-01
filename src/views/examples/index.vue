<template>
  <div class="example-page">
    <ul class="_tab">
      <li
        :class="tab === el ? '_active' : ''"
        @click="tab = el"
        v-for="(el, i) in tabsData"
        :key="i">
        <es-button :type="tab === el ? '' : 'plain'">{{ el }}</es-button>
      </li>
    </ul>
    <div class="_container">
      <components :is="tab"></components>
    </div>
  </div>
</template>
<script>
import esSelectDemo from './es-select'
import esButtonDemo from './es-button'

export default {
  components: {
    esSelectDemo,
    esButtonDemo
  },
  data() {
    return {
      tab: 'esSelectDemo',
      tabsData: [
        'esSelectDemo',
        'esButtonDemo'
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.example-page {
  display: flex;
  ._tab {
    width: 200px;
    display: flex;
    flex-direction: column;
    li {
      color: #999;
      padding: 6px 10px;
      cursor: pointer;
      transition: all 0.32s;
      &._active {
        color: @primary-color;
        border-color: @primary-color;
      }
    }
  }
  ._container {
    background: #f4f5f6;
    flex: 1;
    min-height: 100vh;
  }
}
</style>