<template>
  <hover-container class="w-40px h-full">
    <icon-line-md-menu-unfold-left v-if="app.siderCollapse" class="text-20px" />
    <icon-line-md-menu-fold-left v-else class="text-20px" />
  </hover-container>
</template>

<script lang="ts" setup>
import { useAppStore, useThemeStore } from '@/store';

defineOptions({ name: 'MenuCollapse' });

const app = useAppStore();
const theme = useThemeStore();
</script>

<style scoped></style>
