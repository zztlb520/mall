<template>
    <div class="flex-y-center justify-between h-56px fixed z-9 top-0 w-100% bg-primary-Gradient-herder">
        <search />
        <menu-collapse v-if="showMenuCollapse" />
        <dark-mode-switch :dark="theme.darkMode" class="text-20px" @update:dark="theme.setDarkMode"/>
    </div>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/store";
import { MenuCollapse, Search } from './components';
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

</script>