<template>
  <van-nav-bar left-arrow :border="false">
    <template #left>
        <menu-collapse v-if="showMenuCollapse" />
    </template>
    <template #right>
        <dark-mode-switch :dark="theme.darkMode" class="text-20px" @update:dark="theme.setDarkMode"/>
    </template>
  </van-nav-bar>
</template>

<script setup lang="ts">
import { useThemeStore } from "@/store";
import { MenuCollapse  } from './components';
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

<style lang="scss" scoped>
.van-nav-bar{
  background: transparent;
}

</style>