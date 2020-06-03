<template>
  <div class="example-page">
    <ul class="_tab">
      <li class="gay" @click="goGayhub">
        <svg t="1591060569778" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2569" width="48" height="48"><path d="M64.6 512c0 195.6 125.4 361.9 300.1 422.9 23.5 5.9 19.9-10.8 19.9-22.2v-77.6c-135.8 15.9-141.3-74-150.5-89-18.5-31.5-61.9-39.5-49-54.5 31-15.9 62.5 4 98.9 58 26.4 39.1 77.9 32.5 104.1 26 5.7-23.5 17.9-44.5 34.7-60.9-140.7-25.2-199.4-111.1-199.4-213.3 0-49.5 16.4-95.1 48.4-131.8-20.4-60.6 1.9-112.4 4.9-120.1 58.2-5.2 118.5 41.6 123.3 45.3 33.1-8.9 70.8-13.7 112.9-13.7 42.4 0 80.3 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.4-43.9 2.9 7.7 24.7 58.3 5.5 118.1 32.5 36.8 49 82.8 49 132.4 0 102.3-59 188.3-200.2 213.2 23.5 23.3 38.1 55.5 38.1 91.1v112.7c0.8 9 0 17.9 15.1 17.9C832.7 877 960.4 709.4 960.4 512.1c0-247.5-200.6-447.9-447.9-447.9C265 64.1 64.6 264.5 64.6 512z" fill="#d045d5" p-id="2570"></path></svg>
      </li>
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
import esConfirmDemo from './es-confirm'

export default {
  components: {
    esSelectDemo,
    esButtonDemo,
    esConfirmDemo
  },
  data() {
    return {
      tab: 'esSelectDemo',
      tabsData: [
        'esSelectDemo',
        'esButtonDemo',
        'esConfirmDemo'
      ]
    }
  },
  methods: {
    goGayhub() {
      window.open('https://github.com/LAINE001/es-ui')
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
    .gay {
      width: 50px;
      height: 50px;
      transition: all .4s ease-in-out;
      transform-origin: 95% 40%;
      margin: 0 auto;
    }
    .gay:hover {
      opacity: 0.8;
      transform: rotate(-106deg);
    }
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