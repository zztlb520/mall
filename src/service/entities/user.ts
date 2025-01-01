interface UserModel {
    config:{
		/**浏览 商品记录 */
		recordConfig:{
			name: string
			count: number
		}[],

		/**我的订单 */
		orderConfig:{
			icon:string
			name:string
			count:number
		}[]
		/**服务区 */
		serviceConfig:{
			icon: string
			name:string
		} []
	}
}
