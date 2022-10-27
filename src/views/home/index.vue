<template>
    <div class="home">
        <header class="relative">
            <van-swipe class="h-160px w-100% rounded-15px" vertical :autoplay="3000">
                <template v-for="(item,index) in store.config.bannas" :key="index">
                    <van-swipe-item>
                        <van-image width="100%" height="100%" :src="`./src/assets/home/banna/banna${item}.jpg`"/>
                    </van-swipe-item>
                </template>
            </van-swipe>
            <van-notice-bar left-icon="volume-o" :text="store.config.notifica"/>
        </header>
        <main>
            <van-space direction="vertical" size='10px' fill>
                <van-swipe class="w-100% bg-[#fff] dark:bg-[#333] rounded-15px mt-10px pt-10px pb-15px">
                    <van-swipe-item v-for="(item,index) in store.config.quickNavs" :key="index">
                        <div class="flex-y-center justify-between flex-wrap">
                            <template v-for="(item,index) in item" :key="index">
                                <van-space class="w-20%" direction="vertical" size='0' align="center" fill>
                                    <van-image class="quickNavImg" :src="`./src/assets/home/quickNav/${item.url}.png`" />             
                                    <div class="text-12px text-color">{{item.text}}</div>
                                </van-space>
                            </template>
                        </div>
                    </van-swipe-item>
                </van-swipe>
                <div class="w-100% bg-[#fff] dark:bg-[#333] rounded-15px p-10px">
                    <div class="flex-y-center justify-between">
                        <div class="flex-y-center">
                            <h2 class="text-20px">限量<span class="text-danger">秒杀</span></h2>
                            <span class="ml-5px mr-5px">|</span>
                            <span class="text-color text-14px">限时限量抢好物</span>
                        </div>
                        <count-down :time="store.config.spike.time"/>
                    </div>
                    <div class="flex-y-center justify-between mt-10px">
                        <template v-for="(item,index) in store.config.spike.url" :key="index">
                            <img class="w-30% rounded-15px" :src="`./src/assets/home/spike/${item}.jpg`" />
                        </template>
                    </div>
                </div>
                <div class="flex-y-center justify-between">
                    <template v-for="(item,index) in store.config.hot" :key="index">
                        <van-space class="w-31% bg-[#fff] dark:bg-[#333] rounded-15px pt-10px" direction="vertical" size='10' align="center" fill>
                            <span>
                                <b class="text-14px">{{item.title}}</b> 
                                <span class="hot_tip_bg" v-if="item.isBg">{{item.bgtxt}}</span>
                            </span>
                            <span class="text-10px text-color">{{item.tip}}</span>
                            <img class="h-80px" :src="`./src/assets/home/hot/${item.url}.png`" />
                        </van-space>
                    </template>
                </div>
                <div class="flex-y-center justify-between p-10px">
                    <div class="flex-y-center">
                        <h2 class="text-20px">限量<span class="text-danger">抢购</span></h2>
                        <span class="ml-5px mr-5px">|</span>
                        <span class="text-color text-14px mr-5px">距离结束</span>
                        <count-down :time="store.config.spike.time"/>
                    </div>
                    <div class="text-color text-14px">更多></div>
                </div>
            </van-space>
        </main>
        <global-bg :theme-color="themeColor" :darkMode="theme.darkMode"/>
    </div>
    
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useHomeStore, useThemeStore } from '@/store';
import { getColorPalette } from '@/utils';
import { GlobalBg } from '@/layouts/common';
const store = useHomeStore();
const theme = useThemeStore();

const themeColor = computed(() => theme.darkMode ? getColorPalette(theme.themeColor, 8) : theme.themeColor);

onMounted(async()=>{
  await store.getAll();
})
</script>

<style lang="scss">
 .home{
    position: relative;
    padding: 56px 15px 84px 15px;
    .van-notice-bar{
        position: absolute!important;
        width: 100%;
        bottom: 0;
        height: 26px;
        font-size: 12px;
        color: #fff;
        background: rgba(0, 0, 0, .2);
        border-radius: 16px;
        line-height: 26px;
        .van-icon{
            color: var(--van-info-lightest-color);
        }
    }
    main{
        .van-swipe{
            .van-swipe__indicator{
                width: 10px;
                height: 3px;
                border-radius: 2px;
                background: var(--color-contrast-higher);
            }
            .van-swipe__indicators{
                bottom: 5px;
            }
        }
        .quickNavImg{
            text-align: center;
            img{
                width: 70%;
                height: 70%;
                display: inline-block;
            }
        }
        .hot_tip_bg{
            padding: 2px;
            margin-left: 3px;
            color: #fff;
            font-size: 12px;
            border-radius: 40% 0 40% 0;
            background-color: var(--van-danger-color);
        }
    }
}
</style>