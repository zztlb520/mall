import { showDialog, showNotify, showToast } from 'vant';
interface Window {
    $dialog?: typeof showDialog;
    $toast?: typeof showToast;
    $notify?: typeof showNotify;
}

/** 通用类型 */
declare namespace Common {
    /**
     * 策略模式
     * [状态, 为true时执行的回调函数]
     */
    type StrategyAction = [boolean, () => void];
}

/** 构建时间 */
declare const PROJECT_BUILD_TIME: string;
