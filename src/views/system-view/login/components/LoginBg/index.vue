<template>
  <!-- <div class="absolute-lt z-1 wh-full overflow-hidden"> -->
    <!-- <div class="absolute">
      <corner-top :start-color="lightColor" :end-color="darkColor" :fillColor="fillColor"/>
    </div> -->
    <!-- <div class="absolute -left-200px -bottom-400px <sm:(-left-100px -bottom-760px)">
      <corner-bottom :start-color="darkColor" :end-color="lightColor" />
    </div> -->
    <div class="absolute inset-0px">
      <corner-all :start-color="lightColor" :end-color="darkColor" :fill-color="fillColor"/>
    </div>
  <!-- </div> -->
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { getColorPalette } from '@/utils';
import { CornerBottom, CornerTop, CornerAll } from './components';
interface Props {
  /** 主题颜色 */
  themeColor: string;
  /** 暗黑 */
  darkMode:boolean;
}

const props = defineProps<Props>();

const lightColor = computed(() => getColorPalette(props.themeColor, 3));
const darkColor = computed(() => getColorPalette(props.themeColor, 6));
const fillColor = computed(()=> props.darkMode ? darkColor.value : lightColor.value );
</script>

<style scoped></style>
