<template>
  <van-config-provider :theme="darkMode" class="h-full">
    <router-view />
  </van-config-provider>
</template>

<script setup lang="ts">
import { subscribeStore, useThemeStore } from '@/store';
import { useGlobalEvents } from '@/composables';
import { computed } from '@vue/runtime-core';
const theme = useThemeStore();
const darkMode = computed(()=>theme.darkMode ? 'dark' : 'light') ;
subscribeStore();
useGlobalEvents();
</script>

<style scoped></style>
