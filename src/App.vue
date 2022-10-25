<template>
  <van-config-provider :theme="darkMode" :theme-vars="themeVars" class="h-full">
    <router-view />
  </van-config-provider>
</template>

<script setup lang="ts">
import type { ConfigProviderThemeVars } from 'vant';
import { subscribeStore, useThemeStore } from '@/store';
import { useGlobalEvents } from '@/composables';
import { computed } from '@vue/runtime-core';
const theme = useThemeStore();
const darkMode = computed(()=>theme.darkMode ? 'dark' : 'light') ;

const themeVars: ConfigProviderThemeVars = {
  navBarHeight: '46px'
};

subscribeStore();
useGlobalEvents();
</script>

<style scoped></style>
