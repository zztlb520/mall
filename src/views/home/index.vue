<template>
    <div class="p-t-56px h-100%">
        <global-header v-if="app.headerNavShow"/>
		<global-bg :theme-color="themeColor" :darkMode="theme.darkMode"/>

		<van-pull-refresh v-model="store.loading" :head-height="80" @refresh="onRefresh">
			<template #loading>
				<pull-loading/>
			</template>
			<div class="p-x-15px p-b-84px">
				<header class="relative h-154px">
					<van-swipe class="h-100% w-100% rounded-15px" vertical :autoplay="3000">
						<van-swipe-item v-for="(item,index) in store.config.bannas" :key="index">
							<img class="w-100% h-100%" :src="`./src/assets/img/home/banna/banna${item}.jpg`"/>
						</van-swipe-item>
					</van-swipe>
					<van-notice-bar left-icon="volume-o" :text="store.config.notifica"/>
				</header>
				<main class="mt-10px">
					<van-swipe class="w-100% h-195px rounded-15px pt-10px pb-25px">
						<van-swipe-item v-for="(item,index) in store.config.quickNavs" :key="index">
							<div class="grid grid-cols-5 gap-x-10px text-center">
								<div v-for="(e,index) in item" :key="index">
									<img class="w-60px h-60px" src="src/assets/img/home/quickNav/appliances.png" alt="">
									<!-- <van-image class="w-60px h-60px" src="src/assets/img/home/quickNav/appliances.png" lazy-load>
										<template v-slot:loading>
											<icon-local-gears-spinner class="text-primary w-100% h-100%"></icon-local-gears-spinner>
										</template>
										<template v-slot:error>
											<icon-local-error-svg class="text-primary w-100% h-100%"></icon-local-error-svg>
										</template>
									</van-image> -->
									<div class="text-12px lh-14px kaya-text">{{e.text}}</div>
								</div>
							</div>
						</van-swipe-item>
					</van-swipe>
					<div class="w-100% h-158px kaya-bg rounded-15px p-10px">
						<div class="flex-y-center h-30px justify-between">
							<div class="flex-y-center">
								<h2 class="text-20px">限量<span class="text-danger">秒杀</span></h2>
								<span class="ml-5px mr-5px">|</span>
								<span class="kaya-text text-14px">限时限量抢好物</span>
							</div>
							<count-down :time="store.config.spike.time"/>
						</div>
						<div class="flex-y-center h-100px justify-between mt-10px">
							<img v-for="(item,index) in store.config.spike.url" :src="`./src/assets/img/home/spike/${item}.jpg`" :key="index" class="w-100px h-100px rounded-15px" alt="">
						</div>
					</div>
					<div class="flex-y-center justify-between">
						<van-space v-for="(item,index) in store.config.hot" :key="index"
							class="w-31% kaya-bg rounded-15px pt-10px"
							direction="vertical"
							size='10'
							align="center"
							fill
						>
							<span>
								<b class="text-14px">{{item.title}}</b>
								<span class="hot_tip_bg" v-if="item.isBg">{{item.bgtxt}}</span>
							</span>
							<span class="text-10px kaya-gray">{{item.tip}}</span>
							<img class="h-80px" :src="`./src/assets/img/home/hot/${item.url}.png`" />
						</van-space>
					</div>
					<div class="flex-y-center justify-between px-10px">
						<div class="flex-y-center">
							<h2 class="text-20px">限量<span class="text-danger">抢购</span></h2>
							<span class="ml-5px mr-5px">|</span>
							<span class="kaya-gray text-14px mr-5px">距离结束</span>
							<count-down :time="store.config.spike.time"/>
						</div>
						<div class="kaya-gray text-14px">更多></div>
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
								<img class="w-100px" :src="`./src/assets/img/home/snapUp/${item.url}.png`" />
								<div class="flex-1">
									<span class="text-12px">{{item.tip}}</span>
									<van-progress class="progress" :pivot-text="`已抢购${item.num}%`" :percentage="item.num" stroke-width="15" />
									<div class="flex-y-center justify-between text-20px">
										<div>
											<b class="color-price mr-10px">￥{{item.specialPrice}}</b>
											<span class="kaya-gray text-14px line-through">￥${{item.price}}</span>
										</div>
										<van-button type="primary" size="small" class="h-28px" round>立即抢购</van-button>
									</div>
								</div>
							</div>
						</template>
					</van-space>
					<div class="flex-column w-100% relative">
						<div class="h-100px rounded-t-15px blue-gradient"></div>
						<div class="h-130px kaya-bg rounded-b-15px"></div>
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
										<img class="rounded-15px w-100%" :src="`./src/assets/img/home/recommend/title/${item.url}.jpg`"/>
										<h3 class="kaya-black text-12px h-35px my-6px text-multiple-ellipsis">{{item.tip}}</h3>
										<div class="w-100%">
											<b class="color-price mr-10px">￥{{item.specialPrice}}</b>
											<span class="kaya-gray text-10px line-through">￥{{item.price}}</span>
										</div>
									</div>
								</template>
							</div>
						</div>
					</div>
					<div class="flex-y-center flex-column w-100%" v-for="(o,index) in store.config.recommendMain" :key="index">
						<img class="h-130px w-100% rounded-t-15px" :src="`./src/assets/img/home/recommend/heade/${o.url}.jpg`"/>
						<div class="recommend h-auto w-100% flex-y-center justify-between kaya-bg rounded-b-15px p-10px overflow-auto">
							<template v-for="(item,i) in o.content" :key="i">
								<div class="flex-center flex-column px-10px">
									<img class="w-80px h-80px rounded-15px object-contain" :src="`./src/assets/img/home/recommend/content/${item.url}.png`"/>
									<span class="w-80px kaya-black h-35px text-multiple-ellipsis text-11px my-6px">{{item.tip}}</span>
									<div class="w-100%">
										<b class="color-price text-12px mr-10px">￥{{item.specialPrice}}</b>
										<span class="kaya-gray text-10px line-through">￥{{item.price}}</span>
									</div>
								</div>
							</template>
						</div>
					</div>
					<h1 class="text-center leading-40px"><b>猜 • 你 • 喜 • 欢</b></h1>
					<div class="flex-y-center justify-between flex-wrap">
						<div class="w-48% kaya-bg rounded-15px mb-10px" v-for="(item,index) in store.config.like" :key="index">
							<img class="w-100% rounded-t-15px" :src="`./src/assets/img/home/like/${item.url}`"/>
							<div class="h-100px px-8px">
								<div class="text-13px flex-y-center h-60px">{{item.tip}}</div>
								<div class="flex-y-center justify-between">
									<div>
										<b class="color-price text-12px mr-5px">￥{{item.specialPrice}}</b>
										<span class="kaya-gray text-10px line-through">￥{{item.price}}</span>
									</div>
									<span class="kaya-gray text-10px">已售{{item.num}}</span>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</van-pull-refresh>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, nextTick } from 'vue';
import { useAppStore, useHomeStore, useThemeStore } from '@/store';
import { getColorPalette } from '@/utils';
import { GlobalBg, GlobalHeader } from '@/layouts/common';
import { LZAY_IMG } from '@/constants';

const store = useHomeStore();
const theme = useThemeStore();
const app = useAppStore();

const themeColor = computed(() => theme.darkMode ? getColorPalette(theme.themeColor, 8) : theme.themeColor);

const themeprimary = theme.themeColor;

function onRefresh(){
    setTimeout(()=>{
        store.getAll();
    },1500)
}
store.getAll()

</script>

<style lang="scss" scoped>
.van-notice-bar{
	position: absolute;
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
.snap_up{
	.box{
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: 15px;
		padding: 15px 15px 15px 0;
		background-color: var(--van-background-2);
		:deep(.progress){
			margin: 10px 0;
			border-radius: 13px;
			.van-progress__portion{
				background: var(--color-primary-text);
			}
			.van-progress__pivot{
				background-color: var(--primary-color);
			}
		}
	}
}
:deep(.van-image__error, .van-image__loading){
	background: none;
}
</style>
