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
        <br>
        <br>
        <es-switch v-model="loading"></es-switch>
        <br>
        <div class="cold-word" v-loading="loading2">
            <p>寒蝉凄切，对长亭晚。</p>
            <p>骤雨初歇，都门帐饮无绪，方留恋处，兰舟催发。</p>
            <p>执手相看泪眼，竟无语凝噎。</p>
            <p>念去去，千里烟波，暮霭沉沉楚天阔。</p>
            <br>
            <p>多情自古伤离别，更那堪，冷落清秋节。</p>
            <p>今宵酒醒何处？杨柳岸，晓风残月。</p>
            <p>此去经年，应是良辰好景虚设。</p>
            <p>便纵有千种风情，</p>
            <p>便纵有千种风情，</p>
            <p>便纵有千种风情，</p>
            <p>待与何人说。</p>
        </div>
        <br>
        <es-switch false-label="暗" true-label="亮" v-model="loading2"></es-switch>

        <es-button @click="showDialog = true">弹框</es-button>
        <es-dialog :visible="showDialog" @close="showDialog = false">
            <div>
                <es-select v-model="selectValue">
                    <es-option :value="123" label="第一个"></es-option>
                </es-select>
            </div>
        </es-dialog>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                loading: false,
                loading2: false,
                showDialog: false,
                selectValue: ''
            }
        }
    }
</script>
<style lang="less" scoped>
    .box {
        position: relative;
    }
    .cold-word {
        width: 400px;
        height: 300px;
        padding: 15px;
        margin-left: 20px;
        p {
            text-align: left;
            color: #666;
            margin: 5px;
        }
    }
</style>
