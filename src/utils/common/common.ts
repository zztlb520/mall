/**
 * 
 * @param func 回调函数
 * @param ms 防抖时长
 * @returns 
 */
export const debounce = <T extends (...args: any[]) => any>(
	func: T,
	ms: number = 1000,
	immediate: boolean = false // 增加：是否立即执行
) => {
	let timeout: ReturnType<typeof setTimeout> | null = null;

	// 封装返回的函数，保持原函数的参数类型推导
	const debounced = function (this: ThisParameterType<T>, ...args: Parameters<T>) {
		const context = this;

		// 清除现有的定时器
		if (timeout) clearTimeout(timeout);

		if (immediate) {
			// 如果要求立即执行，且当前没有定时器在运行
			const callNow = !timeout;
			timeout = setTimeout(() => {
				timeout = null; // 倒计时结束后重置状态
			}, ms);
			if (callNow) func.apply(context, args);
		} else {
			// 常规防抖逻辑
			timeout = setTimeout(() => {
				func.apply(context, args);
			}, ms);
		}
	};

	// 增加：手动取消功能（在组件卸载时非常有用）
	debounced.cancel = () => {
		if (timeout) {
			clearTimeout(timeout);
			timeout = null;
		}
	};

	return debounced;
};
