<template>
  <div class="w-full text-12px flex-y-center">
    <van-checkbox icon-size="12px" shape="square" v-model="checked">我已经阅读并接受</van-checkbox>
    <a class="text-primary" @click="handleClickProtocol">《用户协议》</a>
    <a class="text-primary" @click="handleClickPolicy">《隐私权政策》</a>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

defineOptions({ name: 'LoginAgreement' });

interface Props {
  /** 是否勾选 */
  value?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  value: true
});

interface Emits {
  (e: 'update:value', value: boolean): void;
  /** 点击协议 */
  (e: 'click-protocol'): void;
  /** 点击隐私政策 */
  (e: 'click-policy'): void;
}

const emit = defineEmits<Emits>();

const checked = computed({
  get() {
    return props.value;
  },
  set(newValue: boolean) {
    emit('update:value', newValue);
  }
});

function handleClickProtocol() {
  emit('click-protocol');
}
function handleClickPolicy() {
  emit('click-policy');
}
</script>

<style scoped></style>
