<template>
	<div class="h-full">
		
		
		<!-- <div v-for="(item, index) in allItems" :key="index" class="border border-$c-divider mb-2">
			Row {{ index }} <span opacity="70" m="l-1">({{ index }})</span>
			</div> -->
			<div v-bind="containerProps" class="h-500px bg-gray-500/5 rounded">
				<van-list
					v-model:loading="loading"
					v-model:error="error"
					v-model:finished="finished"
					:immediate-check="false"
					error-text="请求失败，点击重新加载"
					@load="onLoad"
					class="relative h-500px"
				>
					<van-pull-refresh v-model="refreshing" @refresh="onRefresh">
						<div v-bind="wrapperProps">
							<div v-for="(item, index) in list" :key="item.index" class="h-40px">
							Row {{item.index }} <span opacity="70" m="l-1">({{ item.index }})</span>
							</div>
						</div>
					</van-pull-refresh>
 
				</van-list>
			</div>
		</div>
		
</template>


<script lang="ts" setup>
import { useVirtualList, type UseVirtualListReturn } from '@vueuse/core'
import { ref, computed } from "vue";
import { vwToPx } from '@/utils/common'

console.log(vwToPx(10.666667))
const allItems = ref([])
type TestList = {
	index:number
}
const {list, wrapperProps, containerProps} = useVirtualList<TestList>(allItems.value,{itemHeight: vwToPx(10.666667),overscan: 10})
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
const error = ref(false)
const onLoad = () => {
	if(refreshing.value){
		refreshing.value = false;
	}
	setTimeout(() => {
		for (let i = 0; i < 20; i++) {
			allItems.value.push(allItems.value.length + 1);
			loading.value = false;
		}
		if (allItems.value.length >= 100) {
			finished.value = true;
			loading.value = false;
		}
	}, 1000);
};

const onRefresh = () => {
	allItems.value.splice(0)
	// refreshing.value = true;
	// 清空列表数据
	finished.value = false;
	// 将 loading 设置为 true，表示处于加载状态
	loading.value = true;
  	onLoad();
};
onRefresh()
// // onLoad()
</script>


<style lang="scss" scoped>
/* 自定义虚拟滚动列表高度 */
.scroll-container {
  height: 400px;
}
/* 自定义列表每一项的样式 */
.virtual-item {
//   height: 60px;
//   line-height: 60px;
//   box-sizing: border-box;
//   border-bottom: 1px solid #e1e1e1;
}
// .van-list__loading{
// 	position: absolute;
// 	bottom:	var(--van-list-text-line-height) ;
// }
</style>