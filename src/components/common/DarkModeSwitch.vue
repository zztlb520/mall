<template>
  <div class="flex-center text-18px cursor-pointer" @click="handleSwitch">
    <icon-line-md-moon-filled-loop v-if="darkMode" />
    <icon-line-md-moon-filled-to-sunny-filled-loop-transition v-else />
  </div>
</template>

<script setup lang="ts">

import { computed } from 'vue';
import { useThemeStore } from "@/store";

defineOptions({ name: 'DarkModeSwitch' });

const theme = useThemeStore();

interface Props {
  /** 暗黑模式 */
  dark?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  dark: false
});

interface Emits {
  (e: 'update:dark', darkMode: boolean): void;
}

const emit = defineEmits<Emits>();

const darkMode = computed({
  get() {
    return props.dark;
  },
  set(newValue: boolean) {
    emit('update:dark', newValue);
  }
});

function handleSwitch() {
  darkMode.value = !darkMode.value;
  theme.cacheThemeSettings()
}
</script>

<style scoped></style>
