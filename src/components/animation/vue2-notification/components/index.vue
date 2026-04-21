<template>
	<div class="notification-list" @mouseover="isHover=true" @mouseout="isHover=false" :class="{'opacity-0':isMaxCount && !isHover}">
		<notification 
			v-for="(item,index) in reverseNotification" 
			:key="item.id"
			:config="item.options"
			:ref="'notificationRef'"
			class="notification-wrapper"
			:style="{'transform':`translate3d(0px, ${handelYAxis[index]}px, 0px) scaleX(${handelScaleX(index)})`, 'height': handelHeight}">
		</notification>
	</div>
</template>

<script>
import notification from './notification.vue'
export default {
	components:{
		notification,
	},
	data(){
		return {
			NotificationList: [],
			scaleX: 0.05,
			maxCount: 3,
			isMaxCount: false,
			isHover: false,
			lastHeight:'',
			notificationYAxis: [],
			collapseYAxiss:[]
		}
	},
	computed:{
		reverseNotification(){
			return [...this.NotificationList].reverse()
		},
		handelYAxis(){
			return this.isMaxCount && !this.isHover ?  this.notificationYAxis : this.collapseYAxiss;
		},
		handelHeight(){
			return this.isMaxCount && !this.isHover ?  this.lastHeight : null;
		},
	},
	watch:{
		NotificationList(newVal){
			let currentYAxis = 0;

			let collapseYAxis = 0;

			this.notificationYAxis = [];

			this.collapseYAxiss = [];
			
			this.lastHeight = null;

			const listRef = this.$refs['notificationRef']
		
			newVal.forEach((e,index) => {
				if(index==0){
					this.notificationYAxis.push(0);
					this.collapseYAxiss.push(0);
				}else{
					this.$nextTick(()=>{
						const listRefReverse = [...listRef].reverse();

						currentYAxis += 8
						collapseYAxis += listRefReverse[index-1].$el.offsetHeight+16

						this.lastHeight = listRef[index].$el.offsetHeight+'px'

						this.isMaxCount = listRefReverse.length > this.maxCount;		

						this.notificationYAxis.unshift(currentYAxis)

						this.collapseYAxiss.unshift(collapseYAxis)

					})
				}
			})
		}
	},
	methods:{ 
		handelScaleX(index){
			if(this.isMaxCount && !this.isHover) {
				if(index == this.NotificationList.length - 1){
					return null
				}else if(this.NotificationList.length - index >=4 ){
					return 0.85
				}else {
					return 1 - (this.NotificationList.length - index ) * this.scaleX
				}
			}
		 	return 1;
		}
	},
}
</script>

<style lang="less" scoped>

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
		cursor: pointer;
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