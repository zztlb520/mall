<template>
  	<div class="user-page" :style="{'--vip-bg':vipBg}">
		<global-header v-if="app.headerNavShow"/>
		<div class="avatar-bg">
			<div class="avatar" :style="{'background-image':`url(./src/assets/img/avatar/${auth.userInfo.userAvatar}.jpg)`}">
			</div>
		</div>
		<van-pull-refresh v-model="store.loading" :head-height="80" @refresh="onRefresh">
			<template #loading>
				<pull-loading/>
			</template>
			<div>
				<div class="flex h-80px items-center p-l-20px">
					<img class="w-70px h-70px rounded-50%" :src="`./src/assets/img/avatar/${auth.userInfo.userAvatar}.jpg`" alt="">
					<div class="m-l-20px">
						<div class="text-20px lh-24px font-bold">{{ auth.userInfo.userName }}</div>
						<div class="kaya-gray m-t-10px flex-center">
							<span>粉丝</span>
							<span class="m-l-5px">8</span>
							<van-divider class="b-[var(--kaya-gray)]!" vertical />
							<span>关注</span>
							<span class="m-l-5px">2</span>
						</div>
					</div>
				</div>
				<div class="w-335px h-100px m-t-10px rounded-10px m-x-auto">
					<MallVip></MallVip>
				</div>
				<ul class="grid grid-cols-4 text-center font-bold kaya-gray">
					<li v-for="(item,index) in store.config?.recordConfig" :key="index">
						<div class="text-16px lh-26px kaya-text">{{item.count}}</div>
						<div>{{item.name}}</div>
					</li>
				</ul>
				<div class="rounded-15px kaya-bg m-x-15px m-t-15px p-t-10px">
					<div class="flex-y-center justify-between p-x-15px lh-30px">
						<div class="text-16px font-600">我的订单</div>
						<div class="kaya-gray">全部订单<van-icon name="arrow" class="m-l-5px"/></div>
					</div>
					<ul class="grid grid-cols-4 text-center m-t-20px">
						<li v-for="item in store.config?.orderConfig" :key="item.icon">
							<van-badge :content="item.count" :show-zero="false">
								<i class="iconfont text-28px! theme-text" :class="item.icon"></i>
							</van-badge>
							<div>{{item.name}}</div>
						</li>
					</ul>
					<div class="flex p-l-10px m-t-10px bg-[var(--color-contrast-lower)] p-y-15px rounded-b-15px relative">
						<div class="absolute left-120px top--5px bg-[var(--color-contrast-lower)] vip124 clip-triangle"></div>
						<img class="w-38px rounded-5px" src="@/assets/img/user/charger.png" alt="">
						<div class="m-l-10px overflow-hidden">
							<div class="h-20px flex-y-center text-14px font-600">
								<i class="iconfont ali-awit-receipt m-r-10px"></i>商品出库（收货时寄件8折）
							</div>
							<div class="truncate kaya-gray m-t-3px">您的订单由京东【广州九龙分拣中心】送往【深圳龙岗坂田】</div>
						</div>
					</div>
				</div>
				<div class="rounded-15px kaya-bg m-x-15px m-t-15px p-y-15px">
					<ul class="grid grid-cols-4 text-center gap-y-10px">
						<li v-for="item in store.config?.serviceConfig" :key="item.icon">
							<i class="iconfont text-28px! theme-text" :class="item.icon"></i>
							<div>{{item.name}}</div>
						</li>
					</ul>
				</div>
			</div>
		</van-pull-refresh>
	</div>
</template>

<script setup lang="ts">
import { GlobalHeader } from '@/layouts/common';
import { computed } from 'vue';
import { useAppStore, useUserStore, useThemeStore, useAuthStore } from '@/store';
import { getColorPalette } from '@/utils';

const store = useUserStore();
const theme = useThemeStore();
const app = useAppStore();
const auth = useAuthStore();

const themeColor = computed(() => theme.darkMode ? getColorPalette(theme.themeColor, 8) : theme.themeColor);


const vipBg = computed(()=>theme.vipColorList[auth.userInfo.userLive-1]);

function onRefresh(){
    setTimeout(()=>{
        store.getAll();
    },1500)
}

store.getAll()
</script>

<style lang="scss" scoped>
.user-page{
	height: 100vh;
	position: relative;
	z-index: 1;
	width: 100%;
	overflow-x: hidden;
	padding-top: 56px;
	padding-bottom: 84px;
	&::before{
		content: "";
		position: fixed;
		top: 0;
		left: 0;
		inset: 0;
		bottom: var(--foot-h);
		z-index: -1;
		background: var(--vip-bg);
		opacity: 0.3;
	}
	&::after,.avatar-bg{
		width: 100%;
		top: 0;
		left: 0;
		height: 220px;
		position: absolute;
		border-radius: 0 0 50% 50%;
	}
	.avatar-bg{
		width: 200%;
		left: -50%;
		padding-top: 139px;
		overflow: hidden;
		.avatar{
			position: absolute;
			top: 0;
			width: 100%;
			height: 100%;
			background-size: 375px auto;
			background-repeat: no-repeat;
			background-position: center center;
			border-radius: 0 0 50% 50%;
			opacity: 0.25;
			z-index: -2;
		}
	}

	&::after{
		content: "";
		width: 200%;
		left: -50%;
		z-index: -1;
		backdrop-filter: blur(3px);
		background-image: radial-gradient(ellipse at top, transparent, var(--color-contrast-lower), transparent);
	}
}
</style>
