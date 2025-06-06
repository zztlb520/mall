<template>
	<van-image :style="{'width':width,'height':height}" :src="props.img" lazy-load>
		<template v-slot:loading>
			<icon-local-gears-spinner class="text-primary w-100% h-100%"></icon-local-gears-spinner>
		</template>
		<template v-slot:error>
			<icon-local-error-svg class="text-primary w-100% h-100%"></icon-local-error-svg>
		</template>
	</van-image>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { isNumber } from '~/src/utils';
interface Props {
	/** 远程请求图片 */
	img?: string
	width?: string | number
	height?: string | number
}
const props = defineProps<Props>()

const height = computed((): string | number => {
	if(!props.height) return '';
	if(isNumber(props.width)){
		return props.width+'px'
	}
	return props.width;
})

const width = computed(()=> {
	if(!props.width) return '';
	if(isNumber(props.width)){
		return props.width+'px'
	}
	return props.width;
})
</script>

<style scoped>

</style>