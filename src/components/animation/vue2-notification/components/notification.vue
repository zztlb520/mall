<template>
	<transition name="el-notification-fade">
	  <div :class="['notification-warper', customClass, horizontalClass]" @mouseenter="clearTimer()" @mouseleave="startTimer()" @click="click" role="alert">

		<i class="el-notification__icon" :class="[ typeClass, iconClass ]" v-if="type || iconClass"></i>

		<div class="el-notification__group" :class="{ 'is-with-icon': typeClass || iconClass }">
		  <h2 class="el-notification__title" v-text="title"></h2>
		  <div class="el-notification__content" v-show="message">
			<slot>
			  <p v-if="!dangerouslyUseHTMLString">{{ message }}</p>
			  <p v-else v-html="message"></p>
			</slot>
		  </div>
		  <div
			class="el-notification__closeBtn el-icon-close"
			v-if="showClose"
			@click.stop="close"></div>
		</div>
	  </div>
	</transition>
  </template>
  
  <script type="text/babel">
	let typeMap = {
	  success: 'success',
	  info: 'info',
	  warning: 'warning',
	  error: 'error'
	};
	
	export default {
		props:{
			/**通知 自定义配置 */
			config: {
				default: () => ({
					title: '',
					message: '',
					duration: 4500,
					type: '',
					showClose: true,
					customClass: '',
					iconClass: '',
					onClose: null,
					onClick: null,
					closed: false,
					dangerouslyUseHTMLString: false,
					position: 'top-right'
				}),
				type: Object
			},
		},
		data() {
			return {
				title: '',
				message: '',
				duration: 4500,
				type: '',
				showClose: true,
				customClass: '',
				iconClass: '',
				onClose: null,
				onClick: null,
				closed: false,
				timer: null,
				dangerouslyUseHTMLString: false,
				position: 'top-right'
			};
		},
  
	  computed: {
		typeClass() {
		  return this.type && typeMap[this.type] ? `el-icon-${ typeMap[this.type] }` : '';
		},
  
		horizontalClass() {
		  return this.position.indexOf('right') > -1 ? 'right' : 'left';
		},
  
		verticalProperty() {
		  return /^top-/.test(this.position) ? 'top' : 'bottom';
		}
	  },
	  created(){
		 this._data = Object.assign(this._data,this.config)
	  },
	  watch: {
		closed(newVal) {
		  if (newVal) {
			this.visible = false;
			this.$el.addEventListener('transitionend', this.destroyElement);
		  }
		}
	  },
  
	  methods: {
		destroyElement() {
		  this.$el.removeEventListener('transitionend', this.destroyElement);
		  this.$destroy(true);
		  this.$el.parentNode.removeChild(this.$el);
		},
  
		click() {
		  if (typeof this.onClick === 'function') {
			this.onClick();
		  }
		},
  
		close() {
		  this.closed = true;
		  if (typeof this.onClose === 'function') {
			this.onClose();
		  }
		},
  
		clearTimer() {
		  clearTimeout(this.timer);
		},
  
		startTimer() {
		  if (this.duration > 0) {
			this.timer = setTimeout(() => {
			  if (!this.closed) {
				this.close();
			  }
			}, this.duration);
		  }
		},
		keydown(e) {
		  if (e.keyCode === 46 || e.keyCode === 8) {
			this.clearTimer(); // detele 取消倒计时
		  } else if (e.keyCode === 27) { // esc关闭消息
			if (!this.closed) {
			  this.close();
			}
		  } else {
			this.startTimer(); // 恢复倒计时
		  }
		}
	  },
	  mounted() {
		if (this.duration > 0) {
		  this.timer = setTimeout(() => {
			if (!this.closed) {
			  this.close();
			}
		  }, this.duration);
		}
		document.addEventListener('keydown', this.keydown);
	  },
	  beforeDestroy() {
		document.removeEventListener('keydown', this.keydown);
	  }
	};
  </script>
  
  <style lang="less" scoped>
  .notification-warper{
	position: absolute;
	top: 0;
	width: 330px;
    padding: 14px 26px 14px 13px;
    border-radius: 8px;
    box-sizing: border-box;
    // border: 1px solid #ebeef5;
    background-color: #fff;
    // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
	box-shadow:  0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
	-webkit-transition:opacity .3s,left .3s,right .3s,top .4s,bottom .3s,-webkit-transform .3s;
	transition:opacity .3s,left .3s,right .3s,top .4s,bottom .3s,-webkit-transform .3s;
	transition:opacity .3s,transform .3s,left .3s,right .3s,top .4s,bottom .3s;
	transition:opacity .3s,transform .3s,left .3s,right .3s,top .4s,bottom .3s,-webkit-transform .3s;
	&.right{
		right: 56px;
	}
	&.left{
		left: 56px;
	}
	.el-notification__group{
		margin-left:13px
	}
	.el-notification__title{
		font-weight:700;
		font-size:16px;
		color:#303133;
		margin:0
	}
	.el-notification__content{
		font-size:14px;
		line-height:21px;
		margin:6px 0 0;
		color:#606266;
		text-align:justify
	}
	.el-notification__content p{
		margin:0
	}
	.el-notification__icon{
		height:24px;
		width:24px;
		font-size:24px
	}
	.el-notification__closeBtn{
		position:absolute;
		top:18px;
		right:15px;
		cursor:pointer;
		color:#909399;
		font-size:16px
	}
	.el-notification__closeBtn:hover{
		color:#606266
	}
	.el-icon-success{
		color:#67c23a
	}
	.el-icon-error{
		color:#f56c6c
	}
	.el-icon-info{
		color:#909399
	}
	.el-icon-warning{
		color:#e6a23c
	}
	&.el-notification-fade-enter.right {
		right: 0;
		-webkit-transform: translateX(100%) !important;
		transform: translateX(100%) !important;
	}

	&.el-notification-fade-enter.left {
		left: 0;
		-webkit-transform: translateX(-100%) !important;
		transform: translateX(-100%) !important;
	}

	&.el-notification-fade-leave-active {
		opacity: 0
	}
  }
  </style>