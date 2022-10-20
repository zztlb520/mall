<template>
  <van-space direction="vertical" fill>
    <van-divider class="!mb-0 text-14px text-[#666]">其他账户登录</van-divider>
    <div class="flex-y-center justify-around">
      <van-button
        v-for="item in accounts"
        :key="item.userName"
        type="primary"
        size="small"
        @click="login(item.userName, item.password)"
      >
        {{ item.label }}
      </van-button>
    </div>
  </van-space>
</template>

<script lang="ts" setup>
interface Emits {
  (e: 'login', param: { userName: string; password: string }): void;
}

const emit = defineEmits<Emits>();

const accounts = [
  {
    label: '普通用户',
    userName: 'zzt',
    password: 'zzt123'
  },
  {
    label: '游客用户',
    userName: 'tourists',
    password: 'tourists123'
  },
  {
    label: '试玩用户',
    userName: 'trial',
    password: 'trial123'
  }
];

function login(userName: string, password: string) {
  emit('login', { userName, password });
}
</script>

<style scoped></style>
