import { Common } from "~/src/typings/global";

/**
 * 策略模式
 * @param actions 每一种可能执行的操作
 */
export function exeStrategyActions(actions: Common.StrategyAction[]) {
	actions.some(item => {
		const [flag, action] = item;
		if (flag) {
			action();
		}
		return flag;
	});
}

/**
 * 手动px转rem
 * @param px
 */
export const pxToVw = (px: number): number => {
	return px / 375
}

/**
 * 手动rem转px
 * @param rem
 * @constructor
 */
export const vwToPx = (vw: number): number => {
	return (document.documentElement.clientWidth / 100) * vw
}
