<template>
	<div class="lottery-viewport" ref="viewport" :class="containerClass">
		<slot name="pointer"></slot>

		<div class="lottery-track" ref="track" :style="trackStyle">
			<div v-for="(item, index) in renderList" :key="index" class="lottery-item-wrapper" ref="itemNode">
				<slot :item="item" :index="index % list.length" :isWinner="checkIsWinner(index)"></slot>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount, nextTick } from 'vue';
// 1. 定义一个基础的奖品类型（你可以根据后端实际字段修改）
interface LotteryItem {
	goods_name?: string;
	[key: string]: any; // 允许有其他任意额外字段
}
interface Props {
	/**是否禁用或者达不到滚动要求 */
	canScroll?: boolean;
	/**组装列表数组 */
	list: LotteryItem[];
	/**动画时长(s) */
	duration?: number;
	/**参考速度(px/s)*/
	speed?: number;
	/**待机慢跑速度(px/s) */
	idleSpeed?: number;
	/**动画时长(s) */
	containerClass?: string;
}
// --- Props & Emits ---
const props = withDefaults(defineProps<Props>(), {
	canScroll: false,
	list: () => [], // 👈 这里加上 as T[]
	duration: 10,
	speed: 1200,
	idleSpeed: 60,
	containerClass: ''
});

const emit = defineEmits<{
	(e: 'update:canScroll', value: boolean): void;
	(e: 'finish', winner: any): void;
}>();


// --- DOM 节点引用 ---
const viewport = ref<HTMLElement | null>(null);
const track = ref<HTMLElement | null>(null);
const itemNode = ref<HTMLElement[]>([]); // Vue3 中 v-for 的 ref 数组

// --- 1. 物理引擎核心状态 ---
const offset = ref<number>(0); 									// 最终映射到 CSS transform 的值 (可能带 .5)
const pixelAcc = ref<number>(0); 								// 物理像素累加器，这是防止抖动的“真身”
let rafId: number | null = null;								// requestAnimationFrame 的句柄
let bizTimer: ReturnType<typeof setTimeout> | null = null; 		// 业务定时器 (用于 executeResult)

// --- 2. 抽奖逻辑控制状态 ---
const isDrawing = ref<boolean>(false);							// 是否处于抽奖减速阶段
const showResultState = ref<boolean>(false);					// 是否已经停止并显示中奖结果
const finalWinIndex = ref<number>(-1);							// 最终中奖的索引 (0 ~ list.length - 1)

// --- 3. 动画插值辅助状态 ---
const startTime = ref<number>(0);				 				// 抽奖开始的时间戳
const startLogicIndex = ref<number>(0);			 				// 抽奖开始时的逻辑位置 (offset / itemStride)
const totalLogicDist = ref<number>(0);			 				// 抽奖需要移动的总逻辑距离

// --- 4. 布局与测量状态 (初次渲染后通过 DOM 计算) ---
const renderList = ref<any[]>([]);								// 拼接后的完整列表 (list * loopCount)
const itemStride = ref<number>(0);								// 两个奖品中心点之间的物理距离
const viewportWidth = ref<number>(0);							// 容器视口宽度
const actualItemWidth = ref<number>(0);							// 单个奖品卡片的物理宽度

// --- 计算属性 ---
const loopCount = computed(() => props.list.length);
/**容器滚动属性设置 */
const trackStyle = computed(() => {
	return {
		transform: `translate3d(-${offset.value}px, 0, 0)`,
		display: 'flex',
		alignItems: 'center',
		willChange: 'transform'
	};
});
/**转发父组件 禁止滚动 */
const _canScroll = computed({
	get: () => props.canScroll,
	set: (bool: boolean) => emit("update:canScroll", bool)
});
/**停止 关闭滚动 */
const stopAll = () => {
	// 1. 停止动画帧 (JS 驱动的慢跑和抽奖)
	if (rafId !== null) {
		cancelAnimationFrame(rafId);
		rafId = null;
	}
	// 2. 停止业务计时器 (那个 5 秒后的结算逻辑)
	if (bizTimer !== null) {
		clearTimeout(bizTimer);
		bizTimer = null;
	}
};
/**
 * 初始化与自愈：测量 DOM 真实像素
 * 兼容 Gap、Margin、PC缩放、REM
 */
const initLayout = () => {
	if (!props.list.length) return;
	// 1. 先渲染一份数据用于测量
	if (renderList.value.length === 0) {
		renderList.value = props.list.slice(0, 2);
	}
	// 2. 确保 DOM 已渲染
	nextTick(() => {
		const viewportEl = viewport.value;
		const nodes = itemNode.value;

		if (!viewportEl || !nodes || nodes.length < 1) return;

		const rect0 = nodes[0].getBoundingClientRect();
		const vRect = viewportEl.getBoundingClientRect();

		actualItemWidth.value = rect0.width;
		viewportWidth.value = vRect.width;
		// 测算逻辑步进 (包含所有 gap/margin)
		if (nodes.length >= 2) {
			itemStride.value = nodes[1].getBoundingClientRect().left - rect0.left;
		} else {
			const style = window.getComputedStyle(nodes[0]);
			itemStride.value = rect0.width + (parseFloat(style.marginRight) || 0) + (parseFloat(style.marginLeft) || 0);
		}
		refreshScrollState();
	});
};

const refreshScrollState = () => {
	// 计算单圈总物理宽度
	const singleLoopPx = loopCount.value * itemStride.value;
	// 如果总宽度小于视口宽度：直接进入“躺平”模式
	if (singleLoopPx <= viewportWidth.value) {
		_canScroll.value = false;
		renderList.value = [...props.list]; 							// 不克隆，只展示原始数据
		offset.value = 0;                  								// 位置清零
		stopAll();                   									// 停止所有计时器和动画
		return;
	}
	_canScroll.value = true;
	renderList.value = [...props.list, ...props.list, ...props.list]; 	// 3份克隆
	if (!isDrawing.value) {
		startIdle(); 													// 启动待机慢跑
	}
};
/**
 * 待机逻辑：索引驱动慢跑
 */
const startIdle = () => {
	// 1. 彻底杀掉旧的动画进程，防止多重 RAF 叠加导致抖动加剧
	stopAll();
	// 2. 初始化累加器
	// 如果当前已有位移，从当前位移开始；否则从 0 开始
	if (pixelAcc.value === undefined || isNaN(pixelAcc.value)) {
		pixelAcc.value = offset.value || 0;
	}
	let lastTime = performance.now();
	const totalWidth = loopCount.value * itemStride.value;
	const stepAnim = (now: number) => {
		// 3. 计算时间差 (ms)
		let delta = now - lastTime;
		// 异常处理：拦截切页返回、掉帧导致的巨大跳跃
		if (delta > 100) delta = 16.67;
		// 计算当前帧率下的理论步长
		const idealStep = (props.idleSpeed / 1000) * delta;
		/**
		 * 【核心防抖】量化步长 (Step Quantization)
		 * 将理想步长锁定为 0.5 的倍数。
		 * 这种强规律性的位移是解决 Firefox 图片/文字“跳格”现象的银弹。
		 */
		const lockedStep = Math.round(idealStep * 2) / 2;
		pixelAcc.value = (pixelAcc.value + lockedStep) % totalWidth;
		// 渲染对齐：保持 0.5px 精度
		offset.value = Math.round(pixelAcc.value * 2) / 2;

		lastTime = now;
		rafId = requestAnimationFrame(stepAnim);
	};
	rafId = requestAnimationFrame(stepAnim);
};
const updateList = () => {
	// 【锁】如果正在抽奖，坚决不准动 DOM 结构
	if (isDrawing.value) {
		console.warn('正在抽奖中，已拦截非法数据更新，确保结果唯一性');
		return;
	}

	stopAll();
	renderList.value = []; // 清空触发重绘
	// 【关键同步】重置累加器，防止旧的位移数据污染新列表
	pixelAcc.value = 0;
	offset.value = 0;

	nextTick(() => {
		initLayout(); 	// 重新测量新数据的宽度和间距
	});
};

const tick = () => {
	if (!isDrawing.value || showResultState.value) return;

	const elapsed = Date.now() - startTime.value;
	const progress = Math.min(elapsed / (props.duration * 1000), 1);
	// 先快后慢缓动
	const eased = 1 - Math.pow(1 - progress, 4);
	// 计算当前的理想物理位置
	// 1. 【逻辑位移】：它依然在猛涨，比如涨到 5000px
	const virtualOffset = (startLogicIndex.value + (totalLogicDist.value * eased)) * itemStride.value;
	// 2. 【物理归位】：核心魔法
	const singleSetWidth = props.list.length * itemStride.value;
	/**
	 * 这里的公式很有讲究：
	 * (virtualOffset % singleSetWidth) -> 让位移永远在 [0, 1000] 之间跳变
	 * + singleSetWidth -> 强制让它定位到“第 2 组”副本的位置
	 * * 这样，无论 virtualOffset 是 5000 还是 50000，
	 * 我们的渲染 offset 永远在第 2 组奖品内打转。
	 */
	offset.value = ((virtualOffset % singleSetWidth) + singleSetWidth) % singleSetWidth + singleSetWidth;
	pixelAcc.value = offset.value;

	console.log(progress, offset.value);

	if (progress < 1) {
		rafId = requestAnimationFrame(tick);
	}
};
/**
 * 核心：开始抽奖
 * @param {Number} winIndex 目标中奖索引 (0 ~ list.length-1)
 */
const play = (winIndex: number) => {
	if (!_canScroll.value || isDrawing.value) return;
	// 2. 预准备：停止当前的慢跑动画和所有计时器
	stopAll();
	// 1. 强制安全检查：如果没测量出高度，重新测量一遍
	if (itemStride.value <= 0) {
		initLayout(); 
		console.warn('ItemStride was 0, re-initializing...');
		return; 
	}
	// 3. 核心状态初始化
	isDrawing.value = true;
	showResultState.value = false;
	finalWinIndex.value = winIndex;
	startTime.value = Date.now();
	/**
	 * 4. 【关键：物理接力】
	 * 慢跑停止时，this.offset 记录了当前的像素位置。
	 * 我们将其转换成逻辑索引，作为抽奖动画的起点。
	 * 这样抽奖加速瞬间，转盘位置是完全连续的。
	 */
	startLogicIndex.value = offset.value / itemStride.value;
	// 5. 计算视口居中偏移量
	// 我们需要计算：当目标卡片在视口正中央时，轨道应该位移多少像素
	const vWidth = viewportWidth.value;
	const iWidth = actualItemWidth.value;

	const trackEl = track.value;
	const firstItemEl = itemNode.value[0];
	
	if (!trackEl || !firstItemEl) return;
	// 获取第一个节点相对于轨道的初始物理偏移（兼容 margin/padding）
	const trackRect = trackEl.getBoundingClientRect();
	const firstItemRect = firstItemEl.getBoundingClientRect();
	const initialMarginOffset = firstItemRect.left - trackRect.left;
	// 计算使得卡片居中的像素偏移
	const centerPx = (vWidth - iWidth) / 2 - initialMarginOffset;
	/**
	 * 6. 计算目标逻辑位置
	 * winIndex 是目标索引，我们需要减去居中所需的偏移（换算成索引单位）
	 */
	const targetLogicPos = winIndex - (centerPx / itemStride.value);
	/**
	 * 7. 计算总行程（包含圈数）
	 * 我们希望转盘至少跑出 speed * duration 这么远的距离
	 * 这样可以保证动画有足够的“冲刺感”和“减速感”
	 */
	const minMoveCount = Math.max((props.speed * props.duration) / itemStride.value, props.list.length * 3);
	// 计算总圈数 laps：确保移动距离超过 minMoveCount，且最后落点在 targetLogicPos
	const listLen = props.list.length;
	const laps = Math.ceil((minMoveCount + startLogicIndex.value - targetLogicPos) / listLen);
	// 最终需要移动的总逻辑距离（单位：索引个数）
	totalLogicDist.value = (laps * listLen) + targetLogicPos - startLogicIndex.value;
	console.log(`[Lottery] Start: ${startLogicIndex.value}, Target Dist: ${totalLogicDist.value}`);
	// 8. 启动动画帧驱动
	tick();
	// 9. 业务轨道启动 (确保后台 5s 后能弹出结果)
	bizTimer = setTimeout(() => {
		executeResult();
	}, props.duration * 1000);
};
/**
 * 恢复无缝滚动：在抽奖结算展示完毕后调用
 */
const resume = () => {
	// 1. 拦截非法调用：必须是抽奖结束且正在展示结果的状态
	if (isDrawing.value || !showResultState.value) return;
	// 2. 清理中奖状态，恢复 UI 展示
	showResultState.value = false;
	finalWinIndex.value = -1;
	// 3. 恢复滚动模式
	if (_canScroll.value) {
		const singleWidth = props.list.length * itemStride.value;
		// 【关键：无缝交接】
		// 抽奖结束时，offset 通常停留在第二组克隆元素中（例如 1500px）。
		// 而 startIdle 是在第一组宽度内循环（0 ~ 1000px）。
		// 我们通过取模将坐标平滑映射回第一组，由于克隆元素长得完全一样，
		// 这一帧的物理突变在视觉上是绝对静止无缝的。
		offset.value = offset.value % singleWidth;
		pixelAcc.value = offset.value;
		// 4. 重新启动物理引擎的待机慢跑
		startIdle();
	}
};
const executeResult = () => {
	if (showResultState.value) return;
	// 1. 立即停止所有物理驱动
	stopAll();

	isDrawing.value = false;
	showResultState.value = true;
	// 2. 精准计算对齐位置
	// 我们需要把 finalWinIndex 对应的卡片，精准地挪到 viewport 的正中间
	const singleWidth = props.list.length * itemStride.value;
	const viewportEl = viewport.value;
	const trackEl = track.value;
	const firstItemEl = itemNode.value && itemNode.value[0];
	
	if (viewportEl && trackEl && firstItemEl) {
		const vRect = viewportEl.getBoundingClientRect();
		const iRect = firstItemEl.getBoundingClientRect();
		const tRect = trackEl.getBoundingClientRect();
		// 3.计算轨道开头的“死区”偏移（有些布局在第一个卡片前有 margin 或 gap）
		// initialMarginOffset = 第一个节点相对于轨道左侧的物理距离
		const initialMarginOffset = iRect.left - tRect.left;
		// 4.计算居中偏移量：视口中心点 - 卡片半宽 - 初始死区
		const centerPx = (vRect.width - iRect.width) / 2 - initialMarginOffset;
		
		const targetBasePos = (finalWinIndex.value * itemStride.value) - centerPx;
		// 5. 最终位置计算
		const targetOffset = Math.round((targetBasePos % singleWidth) + singleWidth);
		/**
		 * 【关键修正】停止位强制取整
		 * 动画过程中我们为了丝滑不取整，但停下来这一帧必须 Math.round。
		 * 这会消除因 scale(0.9999) 带来的极微小边缘虚化，让文字瞬间变清晰。
		 */
		offset.value = targetOffset;
	}
	
	const winner = props.list[finalWinIndex.value];
	emit('finish', winner);
	// clearTimeout(this.bizTimer);
	// 7. 打印结果（调试用）
	console.log(`[Lottery] 停于索引: ${finalWinIndex.value}, 奖品: ${winner?.goods_name}, 最终位移: ${offset.value}px`);
};
/**
 * 缩放处理：只需更新 itemWidth，tick 会在下一帧自动对齐新像素
 */
const handleResize = () => {
	initLayout();
};
/**
 * 切后台同步：切回来时如果时间已过，瞬间同步结果
 */
const handleVisibility = () => {
	if (!document.hidden && isDrawing.value) {
		const elapsed = Date.now() - startTime.value;
		if (elapsed >= props.duration * 1000) {
			executeResult();
		}
	}
};
/**查中奖 */
const checkIsWinner = (renderIndex: number) => {
	return showResultState.value && (renderIndex % props.list.length === finalWinIndex.value);
};

// 1. 引入 IntersectionObserver 的引用
const observer = ref<IntersectionObserver | null>(null);

// 2. 新增一个暂停状态控制
const isPausedByScroll = ref(false);
// 3. 修改 onMounted，加入可视区域监听
onMounted(() => {
	initLayout();
	window.addEventListener('resize', handleResize);
	document.addEventListener('visibilitychange', handleVisibility);

	// --- 新增：可视区域监听 ---
	if ('IntersectionObserver' in window && viewport.value) {
		observer.value = new IntersectionObserver((entries) => {
			const entry = entries[0];
			if (entry.isIntersecting) {
				// 组件进入视口：如果之前是被滚动暂停的，且不是在抽奖中，则恢复慢跑
				if (isPausedByScroll.value && !isDrawing.value) {
					isPausedByScroll.value = false;
					startIdle(); 
				}
			} else {
				// 组件滑出视口：暂停动画，节省手机电量和 CPU
				if (!isDrawing.value) {
					isPausedByScroll.value = true;
					stopAll(); // 停掉 RAF
				}
			}
		}, { threshold: 0.1 }); // 露出 10% 就视为可见
		
		observer.value.observe(viewport.value);
	}
});
onBeforeUnmount(() => {
	window.removeEventListener('resize', handleResize);
	document.removeEventListener('visibilitychange', handleVisibility);
	if (observer.value) {
		observer.value.disconnect();
	}
	stopAll();
});

// --- 暴露外部可调用的方法 ---
defineExpose({
	play,
	resume,
	updateList,
	stopAll
});
</script>

<style lang="scss" scoped>
.lottery-viewport {
	width: 100%;
	overflow: hidden;
	position: relative;
	/* 确保渲染层级正确 */
	transform: translateZ(0);
}

.lottery-track {
	display: flex;
	align-items: center;
	/* 确保子元素在 3D 空间内渲染 */
	transform-style: preserve-3d;
}

.lottery-item-wrapper {
	flex-shrink: 0;

	// /* --- 关键：抗抖动与防闪烁黑科技 --- */

	// /* [1] 强制开启独立层：防止重绘干扰 */
	// transform: translateZ(0);

	// /* 关键：Firefox 渲染补丁。微小透明度和透视能强制触发高质量亚像素合成 */
	// transform: translateZ(0) perspective(1px);

	// /* [3] 欺骗渲染引擎的 Alpha 混合：强制进入位图渲染模式，解决文字抖动 */
	// opacity: 0.999;

	// /* [4] 消除 3D 变换后的视觉闪烁和模糊 */
	// backface-visibility: hidden;
	// perspective: 1000px;

	// /* [5] 针对各家浏览器的字体平滑方案 */
	// -webkit-font-smoothing: antialiased; /* Chrome/Safari */
	// -moz-osx-font-smoothing: grayscale;   /* Firefox macOS */
	// text-rendering: geometricPrecision;   /* 强制火狐使用几何精度，不进行像素纠偏 */

	&.is-winner {
		/* 停止后给中奖卡片一个轻微的呼吸感，掩盖物理对齐的生硬感 */
		animation: prize-pop 0.4s ease-out forwards;
		// border-color: #ff4d4f;
		z-index: 10;
	}
}

@keyframes prize-pop {
	0% {
		transform: translateZ(0) scale(1);
	}

	50% {
		transform: translateZ(20px) scale(1.05); 
        /* 增加一点阴影提升浮起效果（可选） */
        filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.15));
	}

	/* 稍微浮起 */
	100% {
		transform: translateZ(0) scale(1);
	}
}
</style>