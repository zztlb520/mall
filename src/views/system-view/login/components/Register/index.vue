<template>
    <van-form @submit="handleSubmit" :show-error-message="false">
        <van-cell-group inset class="!m-0px !bg-[transparent]">
            <van-field v-model="form.phone" clearable name="phone" :rules="[{ required: true, message: '请填写用户名' }]" class="rounded-8px mb-10px" placeholder="手机号"/>
            <van-field v-model="form.code" name="code" required class="rounded-8px mb-10px" placeholder="请输入短信验证码">
                <template #button>
                    <a size="large" :disabled="isCounting" :loading="smsLoading" @click="handleSmsCode">{{ label }}</a>
                </template>
            </van-field>
            <van-field v-model="form.pwd" clearable name="pwd" class="rounded-8px mb-10px" type="password" placeholder="密码"/>
            <van-field v-model="form.confirmPwd" clearable name="confirmPwd" class="rounded-8px mb-10px" type="password" placeholder="确认密码"/>
            <van-space direction="vertical" fill size="10px" class="pt-10px pb-10px">
                <login-agreement v-model:value="agreement" />
                <van-button type="primary" :block="true" :round="true" native-type="handleSubmit">确定</van-button>
                <van-button class="!border-none" :block="true" :round="true" @click="toLoginModule('pwd-login')">返回</van-button>
            </van-space>
        </van-cell-group>
    </van-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import type { FormProps, FormInstance } from 'vant';
import { Toast } from 'vant';
import { EnumLoginModule } from '@/enum';
import { useSmsCode } from '@/hooks';
import { useRouterPush } from '@/composables';

const { toLoginModule } = useRouterPush();
const { label, isCounting, loading: smsLoading, start } = useSmsCode();

const form = reactive({
  phone: '',
  code: '',
  pwd: '',
  confirmPwd: ''
});

const agreement = ref(false);
const formRef = ref<FormInstance>();

function handleSmsCode() {
    if(!form.phone)
    start();
}

async function handleSubmit() {
  await formRef.value?.validate();
//   window.$message?.success('验证成功!');
}

</script>

<style>

</style>