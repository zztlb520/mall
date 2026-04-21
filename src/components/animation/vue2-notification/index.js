import Vue from 'vue';
import Main from './components/notification.vue';
import { PopupManager } from 'element-ui/src/utils/popup';
import { isVNode } from 'element-ui/src/utils/vdom';
const NotificationConstructor = Vue.extend(Main);

let instance;
let instances = {
	'top-right': [],
	'top-left': [],
	'bottom-right': [],
	'bottom-left': [],
};
let seed = 1;
const GAP_SIZE = 16
const COLLAPS_GAP_SIZE = 8
const topRightDiv = document.createElement('div')

const Notification = function (options) {
	if (Vue.prototype.$isServer) return;
	options = options || {};
	const userOnClose = options.onClose;
	const id = 'notification_' + seed++;
	const position = options.position || 'top-right';

	options.onClose = function () {
		Notification.close(id, options.position, userOnClose);
	};

	instance = new NotificationConstructor({
		data: options
	});

	if (isVNode(options.message)) {
		instance.$slots.default = [options.message];
		options.message = 'REPLACED_BY_VNODE';
	}
	instance.id = id;
	instance.$mount();
	topRightDiv.appendChild(instance.$el)
	if (instances[position].length <= 0) document.body.appendChild(topRightDiv);
	instance.visible = true;
	instance.dom = instance.$el;
	instance.dom.style.zIndex = PopupManager.nextZIndex();
	let verticalOffset =  options.offset || 0;
	Vue.nextTick(() => {
		instances[position].forEach((item,index,arr) => {
			if(arr.length>5){
				verticalOffset += COLLAPS_GAP_SIZE;
				item.height = instance.dom.clientHeight;
				item.isMaxcount = true;
			}else{
				if(index==0){
					verticalOffset += instance.dom.offsetHeight + GAP_SIZE;
				}else{
					verticalOffset += arr[index-1].$el.offsetHeight + GAP_SIZE;
				}
			}
			item.verticalOffset = verticalOffset;
		});
		instances[position].unshift(instance);
		return instance;
	})
};

const render = (instance, verticalOffset, position)=>{
	
}

['success', 'warning', 'info', 'error'].forEach(type => {
	Notification[type] = options => {
		if (typeof options === 'string' || isVNode(options)) {
			options = {
				message: options
			};
		}
		options.type = type;
		return Notification(options);
	};
});

Notification.close = function (id, position, userOnClose) {
	let index = -1;
	const len = instances[position].length;
	const instance = instances[position].filter((instance, i) => {
		if (instance.id === id) {
			index = i;
			return true;
		}
		return false;
	})[0];
	if (!instance) return;

	if (typeof userOnClose === 'function') {
		userOnClose(instance);
	}
	instances[position].splice(index, 1);

	if (len <= 1) return;
	const removedHeight = instance.dom.offsetHeight;
	for (let i = index; i < len - 1; i++) {
		if(len>5){
			instances[position][i].verticalOffset = instances[position][i].verticalOffset - COLLAPS_GAP_SIZE
		}else{
			// instances[position][i].verticalOffset = instances[position][i].verticalOffset - removedHeight - GAP_SIZE
			instances[position][i].isMaxcount=false;
		}
		
	}
};

Notification.closeAll = function () {
	console.log(Object.entries(instances))
};

export default Notification;
