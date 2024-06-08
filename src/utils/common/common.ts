/**
 * 
 * @param func 回调函数
 * @param ms 节流时长
 * @returns 
 */
export const debounce = <T extends Function>(func: T, ms:number=1000) => {
	let timeout: ReturnType<typeof setTimeout>;
	return function (this:unknown) {
		clearTimeout(timeout);
		timeout = setTimeout(() => func.apply(this, arguments), ms);
	};
}