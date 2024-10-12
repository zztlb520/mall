<template>
	<div class="vip-container p-l-15px p-t-15px" :style="{color:currentLive.fillColor}">
		<div class="text-16px font-bold lh-18px font-italic">{{ currentLive.title }}会员 SVIP{{ auth.userInfo.userLive }}</div>
		<div class="m-t-3px">达到<span class="m-x-3px">{{ 1234 }}</span>成长点可解锁</div>
		<!-- <div class="text-right m-t-12px p-r-10px">
			<van-button round class="h-26px! w-80px! border-none! shadow-lg" :class="{'text-#333!':currentLive.live==12}" :style="{'background': currentLive.fillColor}" type="primary" size="small">立即解锁</van-button>
		</div> -->
		<svg class="vip" :style="{'background-image':theme.vipColorList[currentLive.live-1]}" preserveAspectRatio="none meet" fill="none" viewBox="0 0 800 356" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<path
				d="M-52.5928 384.806C-52.5928 384.806 61.7193 269.192 170.387 247.01C290.871 222.417 387.347 328.315 504.808 291.925C602.906 261.534 633.491 165.399 728.34 126.023C836.543 81.1024 1010.31 122.96 1010.31 122.96"
				stroke="url(#a)" stroke-width="2" />
			<path
				d="M-45.377 408.896C-45.377 408.896 63.5317 288.178 171.073 261.053C290.306 230.979 391.522 332.357 507.196 290.637C603.803 255.794 629.962 158.362 722.913 114.692C828.95 64.8735 1004.44 98.7461 1004.44 98.7461"
				stroke="url(#b)" stroke-width="2" />
			<path
				d="M-38.9505 427.557C-38.9505 427.557 65.5573 303.01 172.056 272.044C290.134 237.711 394.921 335.394 509.024 289.55C604.319 251.264 626.966 152.957 718.29 105.98C822.472 52.389 999.069 79.9439 999.069 79.9439"
				stroke="url(#c)" stroke-width="2" />
			<path
				d="M-32.4631 444.471C-32.4631 444.471 67.887 316.551 173.308 282.095C290.192 243.893 398.139 338.071 510.67 288.496C604.653 247.092 624.05 148.093 713.778 98.1341C816.139 41.1419 993.547 62.867 993.547 62.867"
				stroke="url(#d)" stroke-width="2" />
			<path
				d="M-26.8552 457.892C-26.8552 457.892 70.0775 327.362 174.551 290.131C290.383 248.852 400.783 340.144 511.964 287.61C604.819 243.736 621.592 144.258 709.968 91.9446C810.786 32.2659 988.706 49.2926 988.706 49.2926"
				stroke="url(#e)" stroke-width="2" />
			<path
				d="M-30.3564 321.028C-30.3564 321.028 127.492 359.986 231.763 322.192C347.371 280.288 374.396 139.605 493.581 109.341C593.121 84.0665 669.383 150.106 770.841 134.191C886.583 116.036 1012.96 -10.3584 1012.96 -10.3584"
				stroke="url(#f)" stroke-width="2" />
			<path
				d="M-36.7747 296.715C-36.7747 296.715 119.128 342.846 225.018 309.856C342.42 273.28 375.846 133.979 496.29 109.194C596.881 88.495 670.045 157.951 772.124 146.69C888.575 133.843 1020.59 13.3563 1020.59 13.3563"
				stroke="url(#g)" stroke-width="2" />
			<path
				d="M-41.0298 277.441C-41.0298 277.441 113.118 329.136 220.123 299.967C338.762 267.626 377.163 129.614 498.419 109.166C599.688 92.0886 670.313 164.125 772.731 156.533C889.567 147.872 1025.82 32.1992 1025.82 32.1992"
				stroke="url(#h)" stroke-width="2" />
			<path
				d="M-44.326 259.629C-44.326 259.629 108.036 316.371 215.943 290.741C335.583 262.325 378.508 125.651 500.372 109.207C602.148 95.4741 670.363 169.797 772.974 165.581C890.033 160.772 1030.02 49.6489 1030.02 49.6489"
				stroke="url(#i)" stroke-width="2" />
			<path
				d="M-46.5467 245.254C-46.5467 245.254 104.262 306.005 212.809 283.237C333.158 257.994 379.682 122.503 501.938 109.287C604.041 98.2496 670.267 174.35 772.955 172.849C890.099 171.137 1032.98 63.7537 1032.98 63.7537"
				stroke="url(#j)" stroke-width="2" />
			<defs>
				<linearGradient gradientUnits="userSpaceOnUse" id="a" x1="470.297" x2="485.359" y1="130.76" y2="347.408">
					<stop :stop-color="currentLive.fillColor" />
					<stop offset="1" :stop-color="currentLive.startColor" />
				</linearGradient>
				<linearGradient gradientUnits="userSpaceOnUse" id="b" x1="465.356" x2="490.303" y1="131.218" y2="346.95">
					<stop :stop-color="currentLive.fillColor" />
					<stop offset="1" :stop-color="currentLive.startColor" />
				</linearGradient>
				<linearGradient gradientUnits="userSpaceOnUse" id="c" x1="461.492" x2="494.163" y1="131.735" y2="346.433">
					<stop :stop-color="currentLive.fillColor" />
					<stop offset="1" :stop-color="currentLive.startColor" />
				</linearGradient>
				<linearGradient gradientUnits="userSpaceOnUse" id="d" x1="457.967" x2="497.69" y1="132.331" y2="345.837">
					<stop :stop-color="currentLive.fillColor" />
					<stop offset="1" :stop-color="currentLive.startColor" />
				</linearGradient>
				<linearGradient gradientUnits="userSpaceOnUse" id="e" x1="455.15" x2="500.504" y1="132.893" y2="345.275">
					<stop :stop-color="currentLive.fillColor" />
					<stop offset="1" :stop-color="currentLive.startColor" />
				</linearGradient>
				<linearGradient gradientUnits="userSpaceOnUse" id="f" x1="548.258" x2="448.034" y1="264.826" y2="72.166">
					<stop :stop-color="currentLive.fillColor" />
					<stop offset="1" :stop-color="currentLive.endColor" />
				</linearGradient>
				<linearGradient gradientUnits="userSpaceOnUse" id="g" x1="543.804" x2="452.49" y1="267.015" y2="69.976">
					<stop :stop-color="currentLive.fillColor" />
					<stop offset="1" :stop-color="currentLive.endColor" />
				</linearGradient>
				<linearGradient gradientUnits="userSpaceOnUse" id="h" x1="540.24" x2="456.054" y1="268.59" y2="68.401">
					<stop :stop-color="currentLive.fillColor" />
					<stop offset="1" :stop-color="currentLive.endColor" />
				</linearGradient>
				<linearGradient gradientUnits="userSpaceOnUse" id="i" x1="536.92" x2="459.372" y1="269.922" y2="67.07">
					<stop :stop-color="currentLive.fillColor" />
					<stop offset="1" :stop-color="currentLive.endColor" />
				</linearGradient>
				<linearGradient gradientUnits="userSpaceOnUse" id="j" x1="534.224" x2="462.066" y1="270.912" y2="66.08">
					<stop :stop-color="currentLive.fillColor" />
					<stop offset="1" :stop-color="currentLive.endColor" />
				</linearGradient>
			</defs>
		</svg>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore, useAuthStore } from "@/store";
import { getColorPalette } from '@/utils';
interface Props {
	/** 当前用户等级 */
	live?: number
}
const props = defineProps<Props>()
const auth = useAuthStore();
const theme = useThemeStore();

const liveConfig = [
	{ startColor: "#454237", endColor: "#57686e", fillColor: '#57686e', title:'赤铁', live:1 },
	{ startColor: "#454237", endColor: "#688e81", fillColor: '#688e81', title:'青铜', live:2 },
	{ startColor: "#454237", endColor: "#40597c", fillColor: '#40597c', title:'素银', live:3 },
	{ startColor: "#454237", endColor: "#2b5d6b", fillColor: '#2b5d6b', title:'纯银', live:4 },
	{ startColor: "#454237", endColor: "#96764f", fillColor: '#96764f', title:'黄金', live:5 },
	{ startColor: "#454237", endColor: "#8e533a", fillColor: '#8e533a', title:'铂金', live:6 },
	{ startColor: "#454237", endColor: "#ed6965", fillColor: '#ed6965', title:'彩金', live:7 },
	{ startColor: "#454237", endColor: "#907a3d", fillColor: '#907a3d', title:'钻石', live:8 },
	{ startColor: "#454237", endColor: "#7b3d00", fillColor: '#7b3d00', title:'金钻', live:9 },
	{ startColor: "#454237", endColor: "#5d7f0a", fillColor: '#5d7f0a', title:'星钻', live:10 },
	{ startColor: "#454237", endColor: "#2273a5", fillColor: '#2273a5', title:'星耀', live:11 },
	{ startColor: "#454237", endColor: "#faf2d4", fillColor: '#faf2d4', title:'至尊', live:12 },
]
const currentLive = computed(()=>{
	const maxLive = liveConfig.length-1;
	const minLive = 0;
	if(props.live>maxLive || auth.userInfo.userLive>maxLive) return liveConfig[maxLive];
	if(props.live<=minLive || auth.userInfo.userLive<=minLive) return liveConfig[minLive];
	return props.live ? liveConfig[props.live-1] : liveConfig[auth.userInfo.userLive-1]
})
</script>

<style lang="scss">
.vip-container{
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
	z-index: 1;
	.vip{
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		border-radius: 10px;
		background-size: 100% 100px;
	}
}
</style>
