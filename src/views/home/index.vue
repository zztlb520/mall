<template>
  <div class="home pl-15px pr-15px">
    <header class="relative">
      <van-swipe class="h-160px w-100% rounded-5px" vertical :autoplay="3000">
          <van-swipe-item>
            <van-image width="100%" height="100%" src="./src/assets/home/banna/banna.jpg"/>
          </van-swipe-item>
          <van-swipe-item>
            <van-image width="100%" height="100%" src="./src/assets/home/banna/banna1.jpg"/>
          </van-swipe-item>
          <van-swipe-item>
            <van-image width="100%" height="100%" src="./src/assets/home/banna/banna2.jpg"/>
          </van-swipe-item>
          <van-swipe-item>
            <van-image width="100%" height="100%" src="./src/assets/home/banna/banna3.jpg"/>
          </van-swipe-item>
      </van-swipe>
      <van-notice-bar left-icon="volume-o"
        text="无论我们能活多久，我们能够享受的只有无法分割的此刻，此外别无其他。"
      />
    </header>
    <main>
        <!-- <div  class="flex-y-center justify-between h-40px text-13px font-bold text-danger_lightest">
           <span class="flex-y-center">
                <system-logo class="text-24px pr-2px"/>
                <span>自营品牌</span>
            </span>
           <span class="flex-center">
                <icon-local-safety class="text-24px pr-2px"/>
                <span>30天无忧退换</span>
            </span>
           <span class="flex-center">
                <icon-local-refund class="text-24px pr-2px"/>
                48小时快速退款
            </span>
        </div> -->
        <van-swipe class="w-100% bg-[#fff] dark:bg-[#101014] rounded-10px mb-10px mt-10px pt-10px pb-10px">
            <van-swipe-item>
                <div class="flex-y-center justify-between flex-wrap">
                    <template v-for="(item,index) in quickNavs" :key="index">
                        <van-space class="w-20% p-10px" direction="vertical" size='0' align="center" fill>
                            <van-image :src="`./src/assets/home/quickNav/${item.url}.png`" />             
                            <div class="text-12px text-color">{{item.text}}</div>
                        </van-space>
                    </template>
                </div>
                <!-- <van-grid :border="false" :column-num="5">
                    <van-grid-item v-for="(item,index) in quickNavs" :key="index" class="p-0px">
                        <div class="rounded-50% w-55px h-55px bg-[#f6f6f6]"></div>
                        <div class="mt-5px text-13px">{{item.text}}</div>
                    </van-grid-item>
                </van-grid> -->
            </van-swipe-item>
            <van-swipe-item>
                <div class="flex-y-center justify-between flex-wrap">
                    <template v-for="(item,index) in quickNavs" :key="index">
                       <van-space class="w-20% p-10px" direction="vertical" size='0' align="center" fill>
                            <van-image :src="`./src/assets/home/quickNav/${item.url}.png`" />             
                            <div class="text-12px text-color">{{item.text}}</div>
                        </van-space>
                    </template>
                </div>
            </van-swipe-item>
        </van-swipe>
    </main>
  </div>
  
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
const quickNavs = ref<{text:string,url:string}[]>([
    { text:'新品首发', url:'appliances'},
    { text:'居家生活', url:'appliances'},
    { text:'母亲婴子', url:'appliances'},
    { text:'个人清洁', url:'appliances'},
    { text:'新品首发', url:'appliances'},
    { text:'吃过福利', url:'appliances'},
    { text:'超级拼团', url:'appliances'},
    { text:'超值专区', url:'appliances'},
    { text:'奥莱特卖', url:'appliances'},
    { text:'pro卡', url:'appliances'}
])
// const firstQuickNavs = quickNavs.value.splice(0,5)
// const secondQuickNavs = quickNavs.value.splice(5,5)
console.log(quickNavs)
</script>

<style lang="scss">
 .home{
    .my-swipe {
        width: 100%;
    }
    .van-notice-bar{
        position: absolute!important;
        width: 100%;
        bottom: 0;
        height: 26px;
        font-size: 12px;
        color: #fff;
        background: rgba(0, 0, 0, .2);
        border-radius: 15px 15px 0 0;
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
            .van-grid-item__content{
                background-color: transparent;
                padding: 15px 0;
            }
        }
    }
}



</style>