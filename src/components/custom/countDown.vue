<template>
    <van-count-down use-solt :time="time">
        <template v-slot="timeData">
            <div class="box">
                <template v-for="(item,index) in padZero(timeData.hours)" :key="index">
                    <b>{{item}}</b>
                </template>
            </div>
            <span class="colon">:</span>
            <div class="box">
                <template v-for="(item,index) in padZero(timeData.minutes)" :key="index">
                    <b >{{item}}</b>
                </template>
            </div>
            <span class="colon">:</span>
            <div class="box">
                <template v-for="(item,index) in padZero(timeData.seconds)" :key="index">
                    <b>{{item}}</b>
                </template>
            </div>
        </template>
    </van-count-down>
</template>

<script setup lang="ts">
interface Props {
  /** 倒计时时间值 */
  time?: number;

}
withDefaults(defineProps<Props>(), {
  time: 0,
});

function padZero(num:number) {
    return num < 10 ? ('0' + num).split('') : num.toString().split('');
}
</script>

<style lang="scss" scoped>
.colon {
    display: inline-block;
    font-weight: bold;
    color: var(--van-danger-color);
}
.van-count-down{
    width: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.box{
    width: 26px;
    height: 26px;
    align-items: center;
    display: flex;
    position: relative;
    b{
        position: absolute;
        width: 16px;
        height: 16px;
        color: #fff;
        font-size: 10px;
        border-radius: 10px;
        text-align: center;
        line-height: 16px;
        background-color: var(--van-danger-color);
        &:first-child{
            left: 0;
        }
        &:last-child{
            left: 11px;
        }
    }
}
</style>