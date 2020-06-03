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
      <li style="width:100%">
        <div style="height:500px;width:100%">
          噗噗噗噗噗
        </div>
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
        {{ selectValue }}
      </li>
      <li style="width:100%">
        <div style="height:500px;width:100%">
          噗噗噗噗噗
        </div>
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
      selectValue: 'yasuo',
      optsData2: [
        // {
        //   value: 'wocao',
        //   label: '你好'
        // }
      ],
      optsData: [
        {
          value: 'dema',
          label: '德玛'
        },
        {
          value: 'zhaoxin',
          label: '赵信'
        },
        {
          value: 'zhaoxin',
          label: '赵信'
        },
        {
          value: 'yasuo',
          label: '亚索'
        },
        {
          value: 'fuckasfa',
          label: '数据库啦菲拉斯阿三链接拉萨解放了阿加莎拉法基'
        },
        {
          value: 'zhaoxin222',
          label: '赵信'
        },
        {
          value: 'zhaoxin',
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
  // width: 800px;
  // height: 400px;
  // border: 1px solid deeppink;
  overflow: auto;
  li {
    // display: flex;
    // width: 50%;
    // margin-bottom: 15px;
    span {
      font-size: 14px;
      line-height: 32px;
      margin-right: 15px;
    }
  }
}
</style>