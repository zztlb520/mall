<template>
	<div>
		<global-sider/>
		<global-content/>
		<global-footer/>
	</div>
</template>

<script setup lang="ts">
import {
  GlobalContent,
  GlobalFooter,
  GlobalSider
} from '../common';

defineOptions({ name: 'BasicLayout' });


</script>

<style scoped></style>
