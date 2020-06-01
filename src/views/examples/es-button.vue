<template>
  <div>
    <es-button @click="onClick">普通</es-button>
    <es-button type="plain">朴素按钮</es-button>
    <es-button round>圆形</es-button>
    <es-button type="ghost">幽灵</es-button>
    <es-button round type="plain">圆形朴素</es-button>
    <es-button round type="text">文字</es-button>
    <es-button block>充满行</es-button>
  </div>
</template>
<script>
export default {
  methods: {
    onClick() {
      console.log('click')
    }
  }
}
</script>
