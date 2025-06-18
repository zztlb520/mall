<template>
  <van-config-provider :theme="darkMode" :theme-vars="themeVars" class="h-full">
    <router-view />
  </van-config-provider>
</template>

<script setup lang="ts">
import  { type ConfigProviderThemeVars, Toast, showDialog, showNotify } from 'vant';
import ElNotification from '@/hooks/notification/index';
// import '@/hooks/notification/style';
import { subscribeStore, useThemeStore } from '@/store';
import { useGlobalEvents } from '@/composables';
import { computed } from '@vue/runtime-core';
const theme = useThemeStore();
const darkMode = computed(()=>theme.darkMode ? 'dark' : 'light') ;

// 挂载naive组件的方法至window, 以便在路由钩子函数和请求函数里面调用
function registerNaiveTools() {
	// window.$loadingBar = useLoadingBar();
	window.$dialog = showDialog;
	window.$toast = Toast;
	window.$notify = ElNotification;
}
const themeVars: ConfigProviderThemeVars = {
  navBarHeight: '46px',
  pullRefreshHeadTextColor:'#fff'
};
registerNaiveTools()
subscribeStore();
useGlobalEvents();
</script>
