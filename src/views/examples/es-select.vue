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
          value: 'one',
          label: '德玛'
        },
        {
          value: 'two',
          label: '赵信'
        },
        {
          value: 'three',
          label: '亚索'
        },
        {
          value: 'four',
          label: '数据库啦菲拉斯阿三链接拉萨解放了阿加莎拉法基'
        }
      ]
    }
  }
}
</script>
