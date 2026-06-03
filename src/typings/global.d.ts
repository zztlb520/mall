import {
	showToast,
	showSuccessToast,
	showFailToast,
	showLoadingToast,
	closeToast,
	// 引入 Dialog 相关方法
	showDialog,
	showConfirmDialog,
	closeDialog
} from 'vant';
import ElNotification from '@/hooks/notification/index';

// 定义一个混合类型：既是函数，又是包含属性的对象
type GlobalToast = typeof showToast & {
	success: typeof showSuccessToast;
	fail: typeof showFailToast;
	loading: typeof showLoadingToast;
	clear: typeof closeToast;
};

// Dialog 混合类型
type GlobalDialog = typeof showDialog & {
	confirm: typeof showConfirmDialog;
	close: typeof closeDialog;
};
declare global {
	interface Window {
		$dialog?: GlobalDialog;
		$toast?: GlobalToast;
		$notify?: typeof ElNotification;
	}
}
/** 通用类型 */
declare namespace Common {
	/**
	 * 策略模式
	 * [状态, 为true时执行的回调函数]
	 */
	type StrategyAction = [boolean, () => void];
	/** 选项数据 */
	type OptionWithKey<K> = { value: K; label: string };
}

/** 构建时间 */
declare const PROJECT_BUILD_TIME: string;
