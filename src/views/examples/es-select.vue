<template>
  <div style="padding:20px">
    <ul class="list">
      <li>
        <span>空数据</span>
        <es-select width="300px" v-model="selectValue">
          <es-option
            v-for="(el, i) in optsData2"
            :key="i"
            :value="el.value"
            :label="el.label">
          </es-option>
        </es-select>
      </li>
      <li>
        <span>普通</span>
        <es-select width="300px" v-model="selectValue">
          <es-option
            v-for="(el, i) in optsData"
            :key="i"
            :value="el.value"
            :label="el.label">
          </es-option>
        </es-select>
      </li>
      <li>
        <span>可搜索</span>
        <es-select filterable width="300px" v-model="selectValue">
          <es-option
            v-for="(el, i) in optsData"
            :key="i"
            :value="el.value"
            :label="el.label">
          </es-option>
        </es-select>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectValue: 'liuqingkun',
      optsData2: [
        // {
        //   value: 'wocao',
        //   label: '你好'
        // }
      ],
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
          value: 'two1',
          label: '赵信'
        },
        {
          value: 'three',
          label: '亚索'
        },
        {
          value: 'four',
          label: '数据库啦菲拉斯阿三链接拉萨解放了阿加莎拉法基'
        },
        {
          value: 'two',
          label: '赵信'
        },
        {
          value: 'two',
          label: '赵信'
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  li {
    // display: flex;
    // width: 50%;
    margin-bottom: 15px;
    span {
      font-size: 14px;
      line-height: 32px;
      margin-right: 15px;
    }
  }
}
</style>