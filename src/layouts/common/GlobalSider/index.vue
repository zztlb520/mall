<template>
	<van-popup v-model:show="app.siderCollapse" position="left" class="w-75% h-full">
		<header class="p-l-30px r-20px flex items-center h-100px">
			<div class="avatar rounded-1 border">
				<img class="w-60px h-60px" src="@/assets/img/avatar/2.jpg" alt="">
			</div>
			<icon-lucide-scan-line/>
		</header>
		<van-button @click="handelNotify"> 系统通知</van-button>
		<van-button class="" @click="show=false"> 关闭系统通知</van-button>

	</van-popup>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store';
import { ref } from 'vue';
const app = useAppStore();
const show = ref(false);

const handelNotify = ()=>{
	window.$notify.success({
		title: 'Info',
		message: 'This is a message wiThis is a message without close buttonthout close button',
		position:'top-right',
		duration: 1000
	});
}

</script>

<style></style>
