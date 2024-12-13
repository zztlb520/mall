import { showDialog, showToast } from 'vant';
import ElNotification from '@/hooks/notification/index';
declare global {
	interface Window {
		$dialog?: typeof showDialog;
		$toast?: typeof showToast;
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
