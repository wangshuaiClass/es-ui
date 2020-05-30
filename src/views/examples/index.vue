<template>
  <div>
    <ul class="_tab">
      <li
        :class="tab === el ? '_active' : ''"
        @click="tab = el"
        v-for="(el, i) in tabsData"
        :key="i">
        {{ el }}
      </li>
    </ul>
    <div style="background:#f4f5f6">
      <components :is="tab"></components>
    </div>
  </div>
</template>
<script>
import eSselect from './es-select'
import eSButton from './es-button'

export default {
  components: {
    eSselect,
    eSButton
  },
  data() {
    return {
      tab: 'eSButton',
      tabsData: [
        'eSselect',
        'eSButton'
      ]
    }
  }
}
</script>
<style lang="less" scoped>
._tab {
  display: flex;
  li {
    border: 1px solid #999;
    padding: 5px 10px;
    margin: 10px;
    cursor: pointer;
    &._active {
      color: red;
    }
  }
}
</style>