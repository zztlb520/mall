<template>
   <van-field left-icon="search" v-model="keyWord" clearable class="rounded-20px p-y-3px! " :border="false" placeholder="请输入关键词"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const keyWord = ref()
</script>
