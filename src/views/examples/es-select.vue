<template>
  <div>
    <p>奥斯就饭卡是否就</p>
    <p>奥斯就饭卡是否就</p>
    <p>奥斯就饭卡是否就</p>
    <p>奥斯就饭卡是否就</p>
    <p>奥斯就饭卡是否就</p>
    <p>奥斯就饭卡是否就</p>
    <p>奥斯就饭卡是否就</p>
    <es-select width="300px" v-model="selectValue">
      <es-option
        v-for="(el, i) in optsData"
        :key="i"
        :value="el.value"
        :label="el.label">
      </es-option>
    </es-select>
    <p>奥斯就饭卡是否就</p>
    <p>奥斯就饭卡是否就</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectValue: 'liuqingkun',
      optsData: [
        {
          value: 'liuqingkun',
          label: '刘清坤'
        },
        {
          value: 'wangzhengshi',
          label: '王正式'
        }
      ]
    }
  }
}
</script>
