<template>
    <div>
        <div v-loading="loading" class="box">
            我去我去
            我去我去
            我去我去br <br>
            我去我去br <br>
            我去我去br <br>
            我去我去br <br>
            我去我去br <br>
            我去我去
        </div>
        <es-button v-loading="loading">切换</es-button>
        <es-button @click="loading = !loading">切换</es-button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loading: false
            }
        },
        created() {
            this.loading = true
            setTimeout(() =>{
                this.loading = false
            }, 2000)
        }
    }
</script>
<style lang="less" scoped>
    .box {
        position: relative;
    }
</style>
