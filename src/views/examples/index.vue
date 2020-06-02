<template>
  <div>
<<<<<<< HEAD
    <es-input v-model="value" placeholder="默认显示" clearable ></es-input>
    <button @click="click">提交</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    };
  },
  methods: {
    click() {
      console.log(this.value)
    }
  }
};
</script>
<style lang="less">

</style>
=======
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
>>>>>>> 3f1833548fe5464b37dbbc81d68bbe600bf7b194
