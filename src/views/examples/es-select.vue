<template>
  <div>
    <p>奥斯就饭卡是否就</p>
    <es-select>
      <es-option
        v-for="item in 5"
        :key="item"
        :value="item"
        :label="item + 1">
      </es-option>
    </es-select>
    <p>奥斯就饭卡是否就</p>
    <p>奥斯就饭卡是否就</p>
  </div>
</template>
<script>
export default {
}
</script>
