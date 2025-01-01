export const userModel: UserModel = {
	config: {
		/**浏览 商品记录 */
		recordConfig: [
			{ name: '商品收藏', count: 5 },
			{ name: '店铺内容', count: 10 },
			{ name: '我的喜欢', count: 0 },
			{ name: '浏览记录', count: 0 }
		],
		/**我的订单 */
		orderConfig: [
			{ icon: 'ali-awit-pay', name: '待付款', count: 5 },
			{ icon: 'ali-awit-receipt', name: '待收货', count: 10 },
			{ icon: 'ali-awit-comment', name: '待评价', count: 0 },
			{ icon: 'ali-after-sales', name: '退换/售后', count: 0 }
		],
		/**服务区 */
		serviceConfig: [
			{ icon: 'ali-coupons', name: '优惠卷' },
			{ icon: 'ali-delivery-address', name: '收货地址' },
			{ icon: 'ali-vip-benefits', name: '会员权益' },
			{ icon: 'ali-my-wallet', name: '我的钱包' },
			{ icon: 'ali-service', name: '在线客服' },
			{ icon: 'ali-feedback', name: '意见反馈' },
			{ icon: 'ali-skin-change', name: '换肤' },
		]
	}
}
