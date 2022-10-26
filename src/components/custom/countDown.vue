<template>
    <van-count-down use-solt :time="time">
        <template v-slot="timeData">
            <span class="block">{{ padZero(timeData.hours )}}</span>
            <span class="colon">:</span>
            <span class="block">{{ padZero(timeData.minutes)}}</span>
            <span class="colon">:</span>
            <span class="block">{{padZero(timeData.seconds)}}</span>
        </template>
    </van-count-down>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const time = ref(2 * 60 * 1000);

function padZero(num:number) {
    return num < 10 ? '0' + num : num;
}
</script>

<style scoped>
.colon {
    display: inline-block;
    margin: 0 4px;
    color: #1989fa;
}
.block {
    display: inline-block;
    width: 22px;
    color: #fff;
    font-size: 12px;
    text-align: center;
    background-color: #1989fa;
}
</style>