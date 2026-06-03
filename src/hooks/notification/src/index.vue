<template>
	<div class="notification-list"  :class="{'opacity-0':isMaxCount && !isHover}">
		<notification 
			v-for="(item,index) in reverseNotification" 
			:key="item.id"
			v-bind="item"
			:ref="'notificationRef'"
			class="notification-wrapper"
			:style="{'transform':`translate3d(0px, ${handelYAxis[index]}px, 0px) scaleX(${handelScaleX(index)})`, 'height': handelHeight}">
		</notification>
	</div>
</template>

<script setup lang="ts">
import { computed, nextTick, ref } from 'vue';
import type { NotificationProps} from './notification';
import notification from './notification.vue';
/**通知列表 */
const NotificationList = ref<NotificationProps[]>([])
/**不折叠通知列表Y 轴位置 */
const notificationYAxis = ref<number[]>([])
/**折叠通知列表Y轴位置 */
const collapseYAxiss = ref<number[]>([])
/**折叠缩放比例 */
const scaleX = ref(0.05)
/**是否达到了折叠数量 */
const isMaxCount = ref(false)
/**是否触摸折叠 */
const isHover = ref(0.05)
/**最后的通知高度 */
const lastHeight = ref('')
/**最大折叠数量 */
const maxCount = 3;
const reverseNotification = computed(()=>[...NotificationList.value].reverse());

// const handelYAxis = computed(()=>{
// 	return isMaxCount.value && !isHover.value ?  notificationYAxis.value : collapseYAxiss.value; 
// });

const handelHeight = computed(()=>{
	return isMaxCount.value && !isHover.value ?  lastHeight.value : null;
})
/**计算当前通知X 轴缩放 */
const handelScaleX = (index:number)=>{
	if(isMaxCount.value && !isHover.value) {
		if(index == NotificationList.value.length - 1){
			return null
		}else if(NotificationList.value.length - index >=4 ){
			return 0.85
		}else {
			return 1 - (NotificationList.value.length - index ) * scaleX.value
		}
	}
	return 1;
}
const notificationRef = ref(null);
const listRef = notificationRef.value;
const handelYAxis = computed(()=>{
	let currentYAxis = 0;
	let collapseYAxis = 0;
	notificationYAxis.value = [];
	collapseYAxiss.value = [];
	lastHeight.value = null;
	NotificationList.value.forEach((e,index) => {
		if(index==0){
			notificationYAxis.value.push(0);
			collapseYAxiss.value.push(0);
		}else{
			nextTick(()=>{
				const listRefReverse = [...listRef].reverse();
				currentYAxis += 8
				collapseYAxis += listRefReverse[index-1].$el.offsetHeight+16
				lastHeight.value = listRef[index].$el.offsetHeight+'px'
				isMaxCount.value = listRefReverse.length > maxCount;		
				notificationYAxis.value.unshift(currentYAxis)
				collapseYAxiss.value.unshift(collapseYAxis)
			})
		}
	})
	return isMaxCount.value && !isHover.value ?  notificationYAxis.value : collapseYAxiss.value; 
});
</script> 

<style lang="scss" scoped>

.notification-list{
	position: fixed;
	top: 24px;
	left: 0;
	right: 0;
	bottom: auto;
	&.opacity-0{
		.notification-wrapper::after{
			display: none;
		}
		.notification-wrapper:not(:nth-last-child(-n+3)){
			opacity: 0;
			overflow: hidden;
			color: transparent;
			pointer-events: none;
		}
		.notification-wrapper:nth-last-child(2),.notification-wrapper:nth-last-child(3){
			/deep/ .el-notification__content{
				visibility: hidden;
			}
			background-color: rgba(255,255,255,0.5);
			backdrop-filter: blur(10px);
			-webkit-backdrop-filter: blur(10px);
		}
	}
	.notification-wrapper{
		opacity: 1;
		&::after{
			content: "";
			position: absolute;
			height: 16px;
			width: 100%;
			inset-inline: 0;
			bottom: calc( 16px * -1);
			background: transparent;
			pointer-events: auto;
		}
	}
	
}
</style>