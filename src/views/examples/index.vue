<template>
  <div class="example-page">
    <ul class="_tab">
      <li
        :class="tab === el ? '_active' : ''"
        @click="tab = el"
        v-for="(el, i) in tabsData"
        :key="i">
        {{ el }}
      </li>
    </ul>
    <div class="_container">
      <components :is="tab"></components>
    </div>
  </div>
</template>
<script>
import esSelect from './es-select'
import esButton from './es-button'

export default {
  components: {
    esSelect,
    esButton
  },
  data() {
    return {
      tab: 'esSelect',
      tabsData: [
        'esSelect',
        'esButton'
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.example-page {
  display: flex;
  ._tab {
    width: 140px;
    display: flex;
    flex-direction: column;
    li {
      color: #999;
      border-radius: 2px;
      border: 0.4px solid #999;
      padding: 6px 10px;
      margin: 10px;
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