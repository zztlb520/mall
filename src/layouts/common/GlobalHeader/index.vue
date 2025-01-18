<template>
    <div class="flex-y-center z--1 justify-between fixed z-9 top-0 w-100% overflow-hidden p-x-15px" v-if="app.headerNavShow">
		<menu-collapse v-if="hederConfig.showMenuCollapse" class="z-2 m-r-10px"/>
		<search v-if="hederConfig.showSearch" class="z-2"/>
        <dark-mode-switch v-if="hederConfig.showDarkSwitch" :dark="theme.darkMode" class="text-20px z-2 m-l-10px" @update:dark="theme.setDarkMode"/>
        <global-bg v-if="hederConfig.showGlobalBg" class="h-667px absolute z-1" :themeColor="themeColor" :darkMode="theme.darkMode"/>
    </div>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore, useAppStore } from "@/store";
import { MenuCollapse, Search } from './components';
import GlobalBg from '../GlobalBg/index.vue';
import { getColorPalette } from '@/utils';
import { useRoute } from 'vue-router';

type Props = {
	/**显示切换暗黑模式 */
	showDarkSwitch?: boolean,
	/**显示搜索框 */
	showSearch?:boolean,
	/**显示菜单折叠按钮 */
	showMenuCollapse?: boolean,
	/** 自定义背景 */
	showGlobalBg?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	showSearch: false,
	showDarkSwitch: true,
	showMenuCollapse: true,
	showGlobalBg: false
})
const app = useAppStore();
const route = useRoute();

const hederConfig = computed(():AuthRoute.HederConfig=>{
	return {...props,...route.meta.hederConfig}
})

const theme = useThemeStore();

const themeColor = computed(() => theme.darkMode ? getColorPalette(theme.themeColor, 8) : theme.themeColor);
</script>
