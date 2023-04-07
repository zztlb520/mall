<template>
    <div class="h-full">
        <!-- <global-sider/> -->
        <global-content/>
        <global-footer/>
        <!-- <global-back-top /> -->
    </div>
</template>

<script setup lang="ts">
import {
  GlobalBackTop,
  GlobalContent,
  GlobalFooter,
  GlobalSider
} from '../common';

defineOptions({ name: 'BasicLayout' });

</script>

<style scoped></style>
