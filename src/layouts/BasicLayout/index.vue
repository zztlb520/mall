<template>
    <div class="h-100%">
        <global-header v-bind="headerProps" v-if="app.headerNavShow"/>
        <!-- <global-sider/> -->
        <global-content/>
        <global-footer/>
        <!-- <global-back-top /> -->
    </div>
</template>

<script setup lang="ts">
import { useAppStore, useThemeStore } from '@/store';
import { useBasicLayout } from '@/composables';
import { useBoolean } from '@/hooks';
import {
  GlobalBackTop,
  GlobalContent,
  GlobalFooter,
  GlobalHeader,
  GlobalSider,
  GlobalBg
} from '../common';

defineOptions({ name: 'BasicLayout' });

const app = useAppStore();
const theme = useThemeStore();


const { headerProps } = useBasicLayout();

const { bool: addMainOverflowHidden, setBool: setAddMainOverflowHidden } = useBoolean();
</script>

<style scoped></style>
