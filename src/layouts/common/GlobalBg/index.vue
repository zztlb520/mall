<template>
    <div class="absolute-lt wh-full overflow-hidden">
        <div class="absolute left-0 top-0 left: 0 right-0 bottom-0">
            <corner-all :start-color="lightColor" :end-color="darkColor" :fill-color="theme.vantTheme"/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { getColorPalette } from '@/utils';
import { CornerAll } from './components';
import { useThemeStore } from "@/store";

interface Props {
  /** 主题颜色 */
  themeColor: string;
  /** 暗黑 */
  darkMode:boolean;
}

const props = defineProps<Props>();
const theme = useThemeStore();
console.log(theme)
const lightColor = computed(() => getColorPalette(props.themeColor, 3));
const darkColor = computed(() => getColorPalette(props.themeColor, 6));
</script>

<style scoped></style>
