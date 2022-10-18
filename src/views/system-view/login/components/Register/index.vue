<template>
    <van-form ref="formRef" @submit="handleSubmit" @failed="onFailed" :show-error-message="false">
        <van-cell-group inset class="!m-0px !bg-[transparent]">
            <van-field 
                v-model="form.phone" 
                clearable name="phone" 
                class="rounded-8px mb-10px" 
                :rules="formRules.phone"
                placeholder="手机号"/>
            <van-field 
                v-model="form.code" 
                name="code" 
                class="rounded-8px mb-10px" 
                :rules="formRules.code"
                placeholder="请输入短信验证码">
                <template #button>
                    <a size="large" :disabled="isCounting" :loading="smsLoading" @click="handleSmsCode">{{ label }}</a>
                </template>
            </van-field>
            <van-field 
                v-model="form.pwd" 
                clearable 
                name="pwd" 
                class="rounded-8px mb-10px"
                type="password"
                :rules="formRules.pwd"
                placeholder="密码"/>
            <van-field 
                v-model="form.confirmPwd" 
                clearable 
                name="confirmPwd" 
                class="rounded-8px mb-10px" 
                type="password" 
                :rules="getConfirmPwdRule(toRefs(form).pwd)"
                placeholder="确认密码"/>
            <van-space direction="vertical" fill size="10px" class="pt-10px pb-10px">
                <login-agreement v-model:value="agreement" />
                <van-button type="primary" :block="true" :round="true" :disabled="!agreement" native-type="handleSubmit">确定</van-button>
                <van-button class="!border-none" :block="true" :round="true" @click="toLoginModule('pwd-login')">返回</van-button>
            </van-space>
        </van-cell-group>
    </van-form>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs } from 'vue';
import type { FormProps, FormInstance } from 'vant';
import { showFailToast, showSuccessToast } from 'vant';
import { EnumLoginModule } from '@/enum';
import { useSmsCode } from '@/hooks';
import { useRouterPush } from '@/composables';
import { formRules, getConfirmPwdRule } from '@/utils';

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
    formRef.value?.validate('phone').then(()=>{
        start();
    }).catch((message:string)=>{
        showFailToast(message)
    });
}

const onFailed = (errorInfo:{values:object, errors: {name: string, message: string}[]}) => {
    showFailToast(errorInfo.errors[0].message);
};


async function handleSubmit() {
    showSuccessToast('验证成功!');
}

</script>

<style>

</style>