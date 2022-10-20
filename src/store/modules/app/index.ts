import { nextTick } from 'vue';
import { defineStore } from 'pinia';

interface AppState {
    /** 重载页面(控制页面的显示) */
    reloadFlag: boolean;
    /** 项目配置的抽屉可见状态 */
    settingDrawerVisible: boolean;
    /** 侧边栏折叠状态 */
    siderCollapse: boolean;
}

export const useAppStore = defineStore('app-store', {
    state: (): AppState => ({
        reloadFlag: true,
        settingDrawerVisible: false,
        siderCollapse: false
    }),
    actions: {
        /**
         * 重载页面
         * @param duration - 重载的延迟时间(ms)
         */
        async reloadPage(duration = 0) {
            this.reloadFlag = false;
            await nextTick();
            if (duration) {
                setTimeout(() => {
                    this.reloadFlag = true;
                }, duration);
            } else {
                this.reloadFlag = true;
            }
            setTimeout(() => {
                document.documentElement.scrollTo({ left: 0, top: 0 });
            }, 100);
        },
        /** 设置侧边栏折叠状态 */
        setSiderCollapse(collapse: boolean) {
            this.siderCollapse = collapse;
        },
        /** 折叠/展开 侧边栏折叠状态 */
        toggleSiderCollapse() {
            this.siderCollapse = !this.siderCollapse;
        },
        /** 打开设置抽屉 */
        openSettingDrawer() {
            this.settingDrawerVisible = true;
        },
        /** 关闭设置抽屉 */
        closeSettingDrawer() {
            this.settingDrawerVisible = false;
        },
        /** 切换抽屉可见状态 */
        toggleSettingDrawerVisible() {
            console.log(1)
            this.settingDrawerVisible = !this.settingDrawerVisible;
        }
    }
});
