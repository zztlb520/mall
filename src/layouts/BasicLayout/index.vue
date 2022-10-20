<template>
    <div> 
        <global-header v-bind="headerProps"/>
        <!-- <global-sider/> -->
        <global-content/>
        <global-footer/>
    </div>
    <!-- <global-back-top /> -->
    
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
} from '../common';

defineOptions({ name: 'BasicLayout' });

const app = useAppStore();
const theme = useThemeStore();

const { headerProps } = useBasicLayout();

const { bool: addMainOverflowHidden, setBool: setAddMainOverflowHidden } = useBoolean();
</script>

<style scoped></style>
