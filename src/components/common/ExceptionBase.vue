<template>
	<div class="flex-col flex-center wh-full">
		<div class="text-300px text-primary">
			<icon-local-no-permission v-if="type === '403'" />
			<icon-local-not-found v-if="type === '404'" />
			<icon-local-service-error v-if="type === '500'" />
		</div>
		<router-link :to="{ name: routeHomePath }">
			<van-button type="primary">回到首页</van-button>
		</router-link>
	</div>
</template>

<script lang="ts" setup>
import { routeName } from '@/router';

defineOptions({ name: 'ExceptionBase' });

type ExceptionType = '403' | '404' | '500';

interface Props {
	/** 异常类型 403 404 500 */
	type: ExceptionType;
}

defineProps<Props>();

const routeHomePath = routeName('root');
</script>

<style scoped></style>
