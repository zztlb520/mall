<template>
	<div class="wave" :style="{ width:props.size, height:props.size, backgroundColor:props.background}">
		<div class="mask" :class="{'active':props.count>0}" :style="{ backgroundColor:props.maskColor, top:progress }"></div>
		<div class="progress" :class="{'active':props.count>0}" :style="{ backgroundColor:props.progressColor, top:progress }"></div>
	</div>
</template>

<script setup lang="ts">
import { computed } from "vue"
/**
 * Props
 */
interface Props {
	size?:string
	background?:string
	progressColor?:string
	maskColor?:string
	count?:number
}
const props = withDefaults(defineProps<Props>(), {
	size:"150px",
	background:"#c83c1e",
	progressColor:"#40261c",
	maskColor:"rgba(88, 47, 38 , .74)",
	count:0
})

const progress = computed<string>(()=>{
	let Progress = 0;
	if(props.count<=0) Progress= 50;
	if(props.count>=100) Progress= -50;
	else Progress = 50 - props.count;
	return Progress+'%';
})
</script>

<style lang="scss" scoped>
 .wave{
	width: 135px;
	height: 135px;
	position: absolute;
	background: #ccc;
	border-radius: 50%;
	overflow: hidden;
	background: #c83c1e;
	border-radius: 50%;
	z-index: 1;
	box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5);
}
.mask,.progress{
	content: '';
	position: absolute;
	width: 200%;
	height: 200%;
	top: 50%;
	left: 50%;
	z-index: -1;
	transform: translate(-50%, -75%);
}
.progress{
	border-radius: 45%;
	background: #40261c;
	&.active{
		animation: animate 5s linear infinite;
	}
}
.mask{
	border-radius: 40%;
	background: rgba(88, 47, 38 , .74);
	&.active{
		animation: animate 10s linear infinite;
	}
}
@keyframes animate{
	0%{
		transform: translate(-50%, -75%) rotate(0deg);
	}
	100%{
		transform: translate(-50%, -75%) rotate(360deg);
	}
}
</style>