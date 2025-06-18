
<template>
    <van-dialog v-model:show="_visible" width="2.34rem" class="rd-0 overflow-inherit!" :show-confirm-button="false">
        <div class="blind-box">
            <!-- 盲盒 -->
            <div class="gift-box">
                <!-- 盲盒盖子 -->
                <div class="box-lid"></div>
                <!-- 遮罩层-高亮背景 -->
                <div class="box-light"></div>
                <!-- 粒子背景 -->
                <div class="particle-bg"></div>
                <div class="particle-bg left"></div>
                <ul class="star-bg">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <ul class="gift-parabola">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </van-dialog>
</template>

<script setup lang="ts">
import { computed } from "vue"
/**
 * Props
 */
interface Props {
	visible:boolean
}

const props = defineProps<Props>()

/**
 * Emits
 */
export interface Emits {
    (e: "update:visible", value: boolean): void
}

const emit = defineEmits<Emits>()

const _visible = computed({
    get: () => props.visible,
    set: (bool: boolean) => emit("update:visible", bool)
})
</script>

<style lang="scss" scoped>
.blind-box{
    width: 234px;
    height: 194px;
    background-image: url(./img/characters.png);
    background-repeat: no-repeat;
    background-size: 200px 100%;
    background-position: left top;
    position: relative;
    animation: Blind-Box 1s linear forwards;
    .gift-box{
        width: 95px;
        height: 94px;
        right: -34px;
        top: 5px;
        position: absolute;
        background-image: url(./img/gift-box.png);
        background-repeat: no-repeat;
        background-size: 90px 68px;
        background-position: center bottom;
        opacity: 0;
        animation: Gift-Box 1.5s linear forwards;
    }
    .box-lid{
        position: absolute;
        z-index: 9;
        top: 0;
        width: 95px;
        height: 48px;
        background-image: url(./img/box-lid.png);
        background-size: 100% 100%;
        animation: GiftBox-Lid 1s linear forwards;
        animation-delay: 1.2s;
    }
    .box-light{
        width: 127px;
        height: 66px;
        background-image: url(./img/box-light.png);
        background-size: 100% 100%;
        position: absolute;
        z-index: 2;
        top: 3px;
        left: -16px;
        opacity: 0;
        animation: GiftBox-Light .8s linear forwards;
        animation-delay:1s;
    }
    .particle-bg{
        position: absolute;
        top: -10px;
        bottom: 0;
        left: 0;
        right: 5px;
        opacity: 0;
        background-image: url(./img/particle-bg.png);
        background-repeat: no-repeat;
        background-size: 49px 88px;
        background-position: right top;
        animation: Particle 2.2s linear infinite;
        animation-delay: 1.2s;
        &.left{
            background-image: url(./img/particle-bg1.png);
            background-size: 53px 72px;
            background-position: left 15px;
            animation: Particle 2.4s linear infinite;
            animation-delay: 1.5s;
        }
    }
    .star-bg{
        inset: 0;
        position: absolute;
        z-index: 10;
        li{
            width: 31px;
            height: 31px;
            opacity: 0;
            position: absolute;
            background-image: url(./img/star.png);
            background-size: 100% 100%;
            &:nth-child(1){
                animation: Star-Bg 1.6s linear infinite;
                animation-delay:1.6s;
                transform: translateX(10px) translateY(5px) scale(.5,.5);
            }
            &:nth-child(2){
                animation: Star-Bg 1.7s linear infinite;
                animation-delay:1.8s;
                transform: translateX(85px) translateY(30px) scale(.4,.4);
            }
            &:nth-child(3){
                animation: Star-Bg 1.8s linear infinite;
                animation-delay:2s;
                transform: translateX(-5px) translateY(60px) scale(.4,.4);
            }
            &:nth-child(4){
                animation: Star-Bg 1.5s linear infinite;
                animation-delay: 2.2s;
                transform: translateX(60px) translateY(80px) scale(.3,.3);
            }
        }
    }
    .gift-parabola{
        li{
            width: 18px;
            height: 18px;
            position: absolute;
            left: 42px;
            top: 30px;
            z-index: 2;
            opacity: 0;
            background-size: 100% 100%;
            animation: Gift-Parabola1 .8s linear infinite;
            animation-delay: 1.8s;
            &:nth-child(1){
                background-image: url(./img/gift0.png);
                animation: Gift-Parabola1 .8s linear infinite;
                animation-delay: 1.8s;
            }
            &:nth-child(2){
                background-image: url(./img/gift1.png);
                animation: Gift-Parabola2 1s linear infinite;
                animation-delay: 1.9s;
            }
            &:nth-child(3){
                background-image: url(./img/gift2.png);
                animation: Gift-Parabola3 1.2s linear infinite;
                animation-delay: 1.8s;
            }
            &:nth-child(4){
                background-image: url(./img/gift3.png);
                animation: Gift-Parabola4 .8s linear infinite;
                animation-delay: 2.1s;
            }
            &:nth-child(5){
                background-image: url(./img/gift4.png);
                animation: Gift-Parabola5 .9s linear infinite;
                animation-delay: 1.7s;
            }
            &:nth-child(5){
                background-image: url(./img/gift0.png);
                animation: Gift-Parabola6 1s linear infinite;
                animation-delay: 1.6s;
            }
        }
    }
}

/*人物出场*/
@keyframes Blind-Box
{
    0%   { transform: translateY(-60px) scale(1,.95); opacity: 0; }
    20%  { transform: translateY(0px) scale(1,1); opacity: 1; }
    25%  { transform: translateY(6px) scale(1,.95); }
    40%  { transform: translateY(0px) scale(1,1); }
    55%  { transform: translateY(6px) scale(1,.95); }
    70%  { transform: translateY(0px) scale(1,1); }
    100% { transform: translateY(0px) scale(1,1); }
}
/**盲盒抖动出场 */
@keyframes Gift-Box
{
    0%   { transform: scale(0,0); opacity: 0; }
    20%  { transform: scale(1.05,1.05); opacity: 1; }
    30%  { transform: scale(.95,.95); opacity: 1; }
    40%  { transform: scale(1.05,1.05); opacity: 1; }
    100% { transform: scale(1,1); opacity: 1; }
}
/**盲盒盖子摘下 */
@keyframes GiftBox-Lid
{
    0%   { transform: rotate(0deg); }
    10%  { transform: translateY(-2.5px) rotate(5deg); }
    20%  { transform: translateY(-2.5px) rotate(-5deg); }
    30%  { transform: translateY(-2.5px) rotate(5deg); }
    40%  { transform: translateY(-2.5px) rotate(-5deg); opacity:1; }
    65%  { transform: translateX(12px) translateY(-30px) rotate(160deg) scale(1,1); opacity:1; }
    100% { transform: translateX(25px) translateY(146px) rotate(360deg) scale(.8,.8); opacity:1; }
}
/**显示遮罩背景 */
@keyframes GiftBox-Light
{
    0%   { opacity: 0; }
    100% { opacity: 1; }
}
/**粒子背景图 */
@keyframes Particle
{
    0%   { transform: translateY(0px); opacity: 0;}
    30%  { transform: translateY(-9px); opacity: 1;}
    70%  { transform: translateY(-21px); }
    100% { transform: translateY(-30px); opacity: 0;}
}
@keyframes Star-Bg
{
    0%   { opacity: 0; }
    20%  { opacity: 0; }
    50%  { opacity: 1; }
    80%  { opacity: 0; }
    100% { opacity: 0; }
}

@keyframes Gift-Parabola1
{
    0%   { transform: translateX(-10px) translateY(0px) rotate(0deg) scale(.25,.25); opacity:1; }
    100% { transform: translateX(-25px) translateY(-50px) rotate(120deg) scale(1,1); opacity:1; }
}
@keyframes Gift-Parabola2
{
    0%   { transform: translateX(0px) translateY(0px) rotate(0deg) scale(.25,.25); opacity:1; }
    100% { transform: translateX(30px) translateY(-60px) rotate(90deg) scale(1,1); opacity:0; }
}
@keyframes Gift-Parabola3
{
    0%   { transform: translateX(-5px) translateY(0px) rotate(0deg) scale(.25,.25); opacity:1; }
    100% { transform: translateX(-75px) translateY(-60px) rotate(150deg) scale(1,1); opacity:0; }
}
@keyframes Gift-Parabola4
{
    0%   { transform: translateX(-5px) translateY(0) rotate(0deg) scale(.25,.25); opacity:1; }
    100% { transform: translateX(-0px) translateY(-45px) rotate(120deg) scale(1,1); opacity:0; }
}
@keyframes Gift-Parabola5
{
    0%   { transform: translateX(10px) translateY(0) rotate(0deg) scale(.25,.25); opacity:1; }
    100% { transform: translateX(750px) translateY(-40px) rotate(60deg) scale(1,1); opacity:0; }
}
@keyframes Gift-Parabola6
{
    0%   { transform: translateX(5px) translateY(0px) rotate(0deg) scale(.25,.25); opacity:1; }
    100% { transform: translateX(50px) translateY(-55px) rotate(60deg) scale(1,1); opacity:0; }
}
</style>
