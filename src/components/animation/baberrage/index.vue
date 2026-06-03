<template>
	<div class="page-container z-2 left-0 top-5px w-100% h-138px pointer-events-none" :style="cssVars">
		<Vue3Danmaku ref="danmaku" v-model:danmus="bulletScreen" isSuspend :channels="3" :speeds="currentSpeed" randomChannel
			useSlot class="w-100% h-100% overflow-hidden">
			<template v-slot:dm="{ danmu }">
				<div class="text-12px hstack select-none m-y-3px baberrage">
					<img class="avatar w-30px h-30px rd-50% m-r-8px" :src="danmu.avatar" alt="" />
					<div>{{ danmu.msg }}</div>
				</div>
			</template>
		</Vue3Danmaku>
	</div>
</template>

<script setup lang="ts">
import Vue3Danmaku from "vue3-danmaku";
import { shallowRef, ref, computed, onBeforeUnmount, type CSSProperties } from 'vue';
import { BarrageHelper } from "@/utils";
import type { BarrageItem, RawBarrageData } from "@/utils";

// 1. 定义样式接口
interface CustomStyles {
  background?: string;
  border?: string;
  color?: string;
  [key: string]: string | undefined; // 允许额外的样式键
}
/**
 * Props
 */
interface Props {
	customStyles?: CustomStyles
}
const props = withDefaults(defineProps<Props>(), {
	customStyles:() => ({ 
		background: 'linear-gradient(to right, #ffeb4b, #fff096)',
		avatarBg:'#dcdcdc',
		border: '#ffc337',
		color: '#0e1320'
	})
})



/**假设弹幕单条数据类型为 any，如果有具体结构可替换为具体 Interface */
const bulletScreen = ref<BarrageItem[]>([]);
const helper = shallowRef<BarrageHelper | null>(null);
/**5. 计算属性：映射 CSS 变量 */
const cssVars = computed(():CSSProperties => {
	const defaultStyles:CustomStyles = {
		background: 'none',
		border: '#ffc337',
		color: '#0e1320',
	};

	const finalStyles = { ...defaultStyles, ...props.customStyles };
	const vars: Record<string, string> = {};

	Object.keys(finalStyles).forEach(key => {
		const value = finalStyles[key];
		if (value) {
			// 驼峰转横杠
			const cssKey = `--${key.replace(/([A-Z])/g, "-$1").toLowerCase()}`;
			vars[cssKey] = value;
		}
	});
	return vars as CSSProperties;
});
/**初始化 */
const initBarrage = (list: RawBarrageData[]): void => {
	if (helper.value) {
		helper.value.start(list);
	}
};

const currentSpeed = ref(15);

const addBarrageData = (): void => {
	helper.value = new BarrageHelper({
		interval: 3000,
		maxPush: 1,
		minSpeed: 15,  // 较慢，产生长距离感
  		maxSpeed: 80, // 较快，产生超车感
		onPush: (newItems, speed) => {
			currentSpeed.value = speed;
			bulletScreen.value.push(...newItems);
		}
	});
};

// 执行初始化
addBarrageData();

onBeforeUnmount(() => {
	if (helper.value) {
		helper.value.destroy();
		helper.value = null;
	}
});

// 暴露方法给父组件
defineExpose({
  	initBarrage
});
</script>


<style lang="scss" scoped>
.page-container{
	position: absolute;
}
.baberrage {
	height: 30px;
	padding-right: 20px;
	padding-left: 42px;
	background: var(--background,linear-gradient(to right, #015eea, #00c0fa));
	border-radius: 15px;
	box-sizing: content-box;
	position: relative;
	color: var(--color,#fff);
	font-family: "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
	.avatar {
		width: 32px;
		height: 32px;
		left: 0;
		top: -1px;
		position: absolute;
		border: 2px solid var(--border,#00c0fa);
		background: var(--avatarBg,#dcdcdc);
	}
}
</style>