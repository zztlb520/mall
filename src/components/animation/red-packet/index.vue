<template>
	<van-dialog width="100%" className="custom-red-packet" overlay-class="top-44px" :teleport="teleport" v-model:show="_visible" @opened="init()" :show-confirm-button="false">
		<div class="main-diaog expand-page">
			<i class="close" @click="_visible=false"></i>
			<slot></slot>
			<div id="redPacket"></div>
		</div>
	</van-dialog>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";
import { getRandomInt } from '@/utils'
import { ref, computed } from "vue"

/**
 * Props
 */
interface Props {
	visible:boolean
	num?: number
	imgObj?: string
	teleport?: string;
	sizeList?: {
		w: number
		h: number
	}[] 
}
const props = withDefaults(defineProps<Props>(), {
	num: 15,
	imgObj:"",
	teleport: "body",
	sizeList:()=>[
		{w: 1.28, h: 1.496},
		{w: 1.692, h: 2.25}, 
		{w: 2.256, h: 3}
	]
})

const _visible = computed({
    get: () => props.visible,
    set: (bool: boolean) => {
        emit("update:visible", bool)

    }
})

/**
 * Emits
 */
export interface Emits {
    (e: "handelClick"): void
	(e: "update:visible", value: boolean): void
}

const emit = defineEmits<Emits>()


const w = ref(0);
const h = ref(0);

const containerEl = ref<HTMLDivElement>()
const newRedPacketEl = ref<HTMLDivElement>()

const currentRedPacket = ref()

const redPacketInfoList = ref<{w: number, h: number}[]>([])

const sizeIndex = ref(0)
const activeIndex = ref(0)

const init = ()=>{
    if(containerEl.value) return;
	containerEl.value = document.getElementById("redPacket") as HTMLDivElement;
	w.value = window.innerWidth;
	h.value = window.innerHeight;
	createRedPacket(props.num);
}

/**
 * 创建红包雨，并移动
 * @param num
 */
const createRedPacket = (num:number|undefined) => {
	// const sinw = w.value / num;
	
	for (let i = 0; i < num; i++) {
		const redPacketEl = document.createElement("div") as HTMLDivElement;
		redPacketEl.style.backgroundImage = `url(${props.imgObj})`;
		const SizeIndex = Math.ceil(Math.random() * 3) - 1;
		redPacketEl.style.width = props.sizeList[SizeIndex].w +'rem';
		redPacketEl.style.height = props.sizeList[SizeIndex].h +'rem';
		redPacketEl.classList.add("redPacket-img")
		redPacketInfoList.value.push(props.sizeList[SizeIndex]);
		
		gsap.set(redPacketEl, {
			x: getRandomInt(0,w.value*0.85),
			y: Math.random() * -42 -200,
		});
		
		containerEl.value?.appendChild(redPacketEl);
		const CurrentRedPacket = gsap.to(redPacketEl, Math.random() * 15 + 5, {
			y: h.value+50,
			repeat: -1,
			delay: -15,
		});

		redPacketEl.onclick = () => {
			currentRedPacket.value = CurrentRedPacket;
			newRedPacketEl.value = redPacketEl;
			sizeIndex.value = SizeIndex;
			activeIndex.value = i;
			emit("handelClick");
		};
	}
}

const handelDrwa = ()=> {
	if(newRedPacketEl.value && newRedPacketEl.value){
		clickedRedPacket(currentRedPacket.value, newRedPacketEl.value, sizeIndex.value);
		removeOtherRedPacket(activeIndex.value);
		newRedPacketEl.value.style.pointerEvents="none";
	}
}

/**
 * 被点击的红包
 * @param tweenMaxEl
 * @param el
 * @param sizeIndex 红包尺寸大小
 */
const clickedRedPacket = (currentRedPacket:gsap.core.Tween, el:HTMLDivElement, sizeIndex:number)=> {
	if(props.sizeList?.length && gsap){
		currentRedPacket.pause();
		gsap.to(el, 0.3, {
			x: w.value/2 - (props.sizeList[sizeIndex].w*50) ,
			y: h.value/2 - (props.sizeList[sizeIndex].h*50) - 100,
		});

		gsap.from(el, 0.4, { scale: 1.2, repeat: -1, yoyo: true, delay: 0.4 });
	}
}

/**
 * 删除没被点击的红包
 * @param index
 */
const removeOtherRedPacket = (index:number)=> {
	if(containerEl.value){
		for (let i = containerEl.value.childNodes.length - 1; i >= 0; i--) {
			if (i !== index) {
				containerEl.value.removeChild(containerEl.value.childNodes[i]);
			}
		}
	}
}

defineExpose({
  handelDrwa
});
</script>
<style lang="scss">
.custom-red-packet{
	margin: 0;
	max-width: 100%;
	top: 44px;
	box-sizing: border-box;
	transform: translate(0);
	border-radius: 0;
}
</style>

<style lang="scss" scoped>
.main-diaog{
	position: relative;
	.close{
		position: absolute;
		right: 10px;
		top: 0;
		z-index: 1;
		width: 40px;
		height: 61px;
		background-image: url("../../../assets/img/comom/close.png");
      	background-size: 100% 100%;
	}
	#redPacket {
		:deep(.redPacket-img) {
			background-repeat: no-repeat;
			background-size: contain;
			position: absolute;
			cursor: pointer;
			pointer-events: all;
		}
	}
}

</style>
