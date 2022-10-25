<template>
   <van-field left-icon="search" v-model="keyWord" clearable class="search " placeholder="请输入关键词"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const keyWord = ref()
</script>

<style>
.search{
    border-radius: 20px;
    padding: 3px 10px;
    margin-left: 13px;
    width: 80%;
}
</style>