<template>
    <div class="home">
        <header class="relative">
            <van-swipe class="h-154px w-100% rounded-15px" vertical :autoplay="3000">
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
                <van-swipe class="w-100% rounded-15px mt-10px pt-10px pb-15px">
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
                <div class="w-100% color-bg rounded-15px p-10px">
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
                        <van-space class="w-31% color-bg rounded-15px pt-10px" direction="vertical" size='10' align="center" fill>
                            <span>
                                <b class="text-14px">{{item.title}}</b> 
                                <span class="hot_tip_bg" v-if="item.isBg">{{item.bgtxt}}</span>
                            </span>
                            <span class="text-10px color-gray">{{item.tip}}</span>
                            <img class="h-80px" :src="`./src/assets/home/hot/${item.url}.png`" />
                        </van-space>
                    </template>
                </div>
                <div class="flex-y-center justify-between px-10px">
                    <div class="flex-y-center">
                        <h2 class="text-20px">限量<span class="text-danger">抢购</span></h2>
                        <span class="ml-5px mr-5px">|</span>
                        <span class="color-gray text-14px mr-5px">距离结束</span>
                        <count-down :time="store.config.spike.time"/>
                    </div>
                    <div class="color-gray text-14px">更多></div>
                </div>
                <div class="flex-y-center rounded-15px justify-between p-10px bg-primary-Gradient">
                    <template v-for="(item,index) in 5" :key="index">
                        <van-space direction="vertical" size="0" class="w-20% text-wihte flex-center">
                            <b class="text-20px">10:00</b>
                            <span class="text-10px">即将开始</span>
                        </van-space>
                    </template>
                </div>
                <van-space class="snap_up" direction="vertical" size='10px' fill>
                    <template v-for="(item,index) in store.config.snapUp" :key="index">
                        <div class="box">
                            <van-image class="w-100px" :src="`./src/assets/home/snapUp/${item.url}.png`" />
                            <div class="flex-1">
                                <span class="text-14px">{{item.tip}}</span>
                                <van-progress class="progress" :pivot-text="`已抢购${item.num}%`" :percentage="item.num" stroke-width="15" />
                                <div class="flex-y-center justify-between text-20px">
                                    <div> 
                                        <b class="color-price mr-10px">￥{{item.specialPrice}}</b>
                                        <span class="color-gray text-14px line-through">￥${{item.price}}</span>
                                    </div>
                                    <van-button size="small" class="!px-15px !h-28px" round :color="`linear-gradient(to right, ${theme.themeColor}, ${themeColor})`">立即抢购</van-button>
                                </div>
                            </div>
                        </div>
                    </template>
                </van-space>
                <div class="flex-column w-100% relative">
                    <div class="h-100px bg-[#6e6df2] rounded-t-15px"></div>
                    <div class="h-130px color-bg rounded-b-15px"></div>
                    <div class="absolute inset-10px text-wihte">
                        <div class="flex-y-center justify-between mb-5px">
                            <div class="flex-y-center">
                                <h2 class="text-20px">好物推荐</h2>
                                <span class="ml-5px mr-5px">|</span>
                                <span class="color-text text-14px">限时限量抢好物</span>
                            </div>
                            <div class="text-14px">更多></div>
                        </div>
                        <div class="flex-y-center justify-between">
                            <template v-for="(item,index) in store.config.recommendTitle" :key="index">
                                <div class="flex-center flex-column w-90% px-5px">
                                    <img class="rounded-15px w-100%" :src="`./src/assets/home/recommend/title/${item.url}.jpg`"/>
                                    <h3 class="color-black text-12px h-35px my-6px text-multiple-ellipsis">{{item.tip}}</h3>
                                    <div class="w-100%">
                                        <b class="color-price mr-10px">￥{{item.specialPrice}}</b>
                                        <span class="color-gray text-10px line-through">￥{{item.price}}</span>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
                <template v-for="(o,index) in store.config.recommendMain" :key="index">
                    <div class="flex-y-center flex-column w-100%">
                        <img class="h-130px w-100% rounded-t-15px" :src="`./src/assets/home/recommend/heade/${o.url}.jpg`"/>
                        <div class="recommend h-auto w-100% flex-y-center justify-between color-bg rounded-b-15px p-10px overflow-auto">
                            <template v-for="(item,i) in o.content" :key="i">
                                <div class="flex-center flex-column px-10px">
                                    <img class="w-80px h-80px rounded-15px object-contain" :src="`./src/assets/home/recommend/content/${item.url}.png`"/>
                                    <span class="w-80px color-black h-35px text-multiple-ellipsis text-11px my-6px">{{item.tip}}</span>
                                    <div class="w-100%">
                                        <b class="color-price text-12px mr-10px">￥{{item.specialPrice}}</b>
                                        <span class="color-gray text-10px line-through">￥{{item.price}}</span>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </template>
                <h1 class="text-center leading-40px"><b>猜 • 你 • 喜 • 欢</b></h1>
                <div class="flex-y-center justify-between flex-wrap">
                    <template v-for="(item,index) in store.config.like" :key="index">
                        <div class="w-48% color-bg rounded-15px mb-10px">
                            <img class="w-100% rounded-t-15px" :src="`./src/assets/home/like/${item.url}`"/>      
                            <div class="h-100px px-8px">
                                <div class="text-13px flex-y-center h-60px">{{item.tip}}</div>
                                <div class="flex-y-center justify-between">
                                    <div>
                                        <b class="color-price text-12px mr-5px">￥{{item.specialPrice}}</b>
                                        <span class="color-gray text-10px line-through">￥{{item.price}}</span>
                                    </div>
                                    <span class="color-gray text-10px">已售{{item.num}}</span>
                                </div>
                            </div>
                        </div>
                    </template>
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
        .snap_up{
            .box{
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-radius: 15px;
                padding: 15px;
                background-color: var(--van-background-2);
                .progress{
                    margin: 10px 0;
                    width: 60%;
                    border-radius: 13px;
                    .van-progress__portion{
                        background-color:#ffc4bd;
                    }
                    .van-progress__pivot{
                        left: 5% !important;
                        transform: inherit !important;
                        color:var(--color-price);
                        top: 0;
                        bottom: 0;
                        padding: 0;
                        line-height: 16px;
                        font-size: 10px;
                        background: none;
                    }
                }
            }
        }
        .recommend{
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE 10+, edge */
            &::-webkit-scrollbar {
                display: none; /* Chrome Safari */
                // 或者 width: 0;
            }
        }
    }
}
</style>