<template>
    <div class="flex-y-center z--1 justify-between h-56px fixed z-9 top-0 w-100% overflow-hidden p-x-13px">
        <search class="z-2"/>
        <!-- <menu-collapse v-if="showMenuCollapse" class="z-2"/> -->
        <dark-mode-switch :dark="theme.darkMode" class="text-20px z-2" @update:dark="theme.setDarkMode"/>
        <global-bg class="h-667px absolute z-1" :themeColor="themeColor" :darkMode="theme.darkMode"/>
    </div>

</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useThemeStore } from "@/store";
import { MenuCollapse, Search } from './components';
import GlobalBg from '../GlobalBg/index.vue';
import { getColorPalette } from '@/utils';

interface Props {
  /** 显示logo */
  showLogo: GlobalHeaderProps['showLogo'];
  /** 显示头部菜单 */
  showHeaderMenu: GlobalHeaderProps['showHeaderMenu'];
  /** 显示菜单折叠按钮 */
  showMenuCollapse: GlobalHeaderProps['showMenuCollapse'];
}

defineProps<Props>();

const theme = useThemeStore();

const themeColor = computed(() => theme.darkMode ? getColorPalette(theme.themeColor, 8) : theme.themeColor);
</script>
