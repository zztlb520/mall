<template>
	<div class="h-full inset-0">
		<router-view v-slot="{ Component, route }">
			<transition :name="theme.pageAnimateMode" mode="out-in"
				@after-leave="resetScroll"
				@before-leave="handleBeforeLeave"
				@after-enter="handleAfterEnter">
				<keep-alive :include="routeStore.cacheRoutes">
					<component :is="Component" v-if="app.reloadFlag" :key="route.fullPath" :id="EnumStorageKey['layout-scroll-el-id']" />
				</keep-alive>
			</transition>
		</router-view>
	</div>
</template>

<script setup lang="ts">
import { useAppStore, useRouteStore, useThemeStore } from '@/store';
import { EnumStorageKey } from '@/enum';

defineOptions({ name: 'GlobalContent' });

interface Props {
	/** 显示padding */
	showPadding?: boolean;
}

withDefaults(defineProps<Props>(), {
	showPadding: true
});

interface Emits {
	/** 禁止主体溢出 */
	(e: 'hide-main-overflow', hidden: boolean): void;
}

const emit = defineEmits<Emits>();

const app = useAppStore();
const theme = useThemeStore();
const routeStore = useRouteStore();

function handleBeforeLeave() {
	emit('hide-main-overflow', true);
}
function handleAfterEnter() {
	emit('hide-main-overflow', false);
}

function resetScroll() {
  const el = document.querySelector(`#${EnumStorageKey['layout-scroll-el-id']}`);

  el?.scrollTo({ left: 0, top: 0 });
}
</script>

<style scoped></style>
