import Vue from 'vue';
import Main from './components/index.vue';
import { PopupManager } from 'element-ui/src/utils/popup';
import { isVNode } from 'element-ui/src/utils/vdom';
const NotificationConstructor = Vue.extend(Main);

let NotificationMap = {
	'top-right': [],
	'top-left': [],
	'bottom-right': [],
	'bottom-left': [],
};
let domMap = {
	'top-right': null,
	'top-left': null,
	'bottom-right': null,
	'bottom-left': null,
};
let seed = 1;

const Notification = function (options) {
	if (Vue.prototype.$isServer) return;

	options = options || {};

	const userOnClose = options.onClose;

	const id = 'notification_' + seed++;

	const position = options.position || 'top-right';

	const NotificationList = NotificationMap[position];

	options.onClose = function () {
		Notification.close(id, options.position, userOnClose);
	};

	if (isVNode(options.message)) {
		// instance.$slots.default = [options.message];
		options.message = 'REPLACED_BY_VNODE';
	}

	NotificationList.unshift({options, id})

	if (NotificationList.length <= 1) {
		domMap[position] = new NotificationConstructor({data:{NotificationList:[]}});
		domMap[position].$mount();
		document.body.appendChild(domMap[position].$el);
		domMap[position].$el.style.zIndex = PopupManager.nextZIndex();
		domMap[position].$el.id = 'notification_'+position;
	}
	domMap[position].NotificationList = [...NotificationList];
};

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
	const NotificationList = NotificationMap[position];
	
	const instance = NotificationList.filter((instance, i) => {
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
	NotificationMap[position].splice(index, 1);

	domMap[position].NotificationList = [...NotificationMap[position]];

	console.log(NotificationMap)
	if(NotificationMap[position].length<=0) {
		
		NotificationMap[position] = []
		domMap[position].$destroy()
		document.body.removeChild(document.getElementById('notification_top-right'))
		domMap[position] = null;
		console.log(domMap[position],NotificationMap)
	}
};

Notification.closeAll = function () {
	console.log(Object.entries(instances))
};

export default Notification;
