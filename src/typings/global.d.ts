// import type { DialogOptions, ToastOptions } from 'vant';
// import type { ComponentPublicInstance } from 'vue';
// export declare type ToastType = 'text' | 'loading' | 'success' | 'fail' | 'html';
// export declare type DialogReactive = {
//     readonly key: string;
//     readonly destroy: () => void;
// } & DialogOptions;

// export declare type ToastWrapperInstance = ComponentPublicInstance<{
//     message: number | string;
// }, {
//     clear: () => void;
//     /**
//      * @private
//      */
//     open: (props: Record<string, any>) => void;
// }>;


// // interface DialogProviderInst {
// //     destroyAll: () => void;
// //     create: (options: DialogOptions) => DialogReactive;
// //     success: (options: DialogOptions) => DialogReactive;
// //     warning: (options: DialogOptions) => DialogReactive;
// //     error: (options: DialogOptions) => DialogReactive;
// //     info: (options: DialogOptions) => DialogReactive;
// // }

// export interface ToastApiInjection {
//     loading: (options: string | ToastOptions) => ToastWrapperInstance;
//     success: (options: string | ToastOptions) => ToastWrapperInstance;
//     fail: (options: string | ToastOptions) => ToastWrapperInstance;
//     clear: (all?: boolean | undefined) => void;
//     setDefaultOptions: {
//         (options: ToastOptions): void;
//         (type: ToastType, options: ToastOptions): void;
//     };
//     resetDefaultOptions: (type?: ToastType | undefined) => void;
//     allowMultiple: (value?: boolean) => void;
// }

// export declare type ToastProviderInst = ToastApiInjection;

// interface Window {
//     // $dialog?: ToastProviderInst;
//     $toast?: ToastProviderInst;
//     $notification?: import('vant').NotifyOptions;
// }

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
