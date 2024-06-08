<template>
  	<div class="user-page h-full">
		<head class="h-40px">
			<global-header v-bind="headerProps" v-if="app.headerNavShow"/>
			<global-bg :theme-color="themeColor" :darkMode="theme.darkMode"/>
		</head>
		<div class="h-full overflow-y-auto" >
			<VueVirtualList></VueVirtualList>
		</div>
	</div>
</template>

<script setup lang="ts">
import { GlobalBg, GlobalHeader } from '@/layouts/common';
import { onMounted, computed } from 'vue';
import { useAppStore, useHomeStore, useThemeStore } from '@/store';
import { getColorPalette } from '@/utils';
import { useBasicLayout } from '@/composables';

const store = useHomeStore();
const theme = useThemeStore();
const app = useAppStore();
const { headerProps } = useBasicLayout();

const themeColor = computed(() => theme.darkMode ? getColorPalette(theme.themeColor, 8) : theme.themeColor);
</script>

<style>
</style>
