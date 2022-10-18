<template>
    <van-form @submit="handleSubmit" @failed="onFailed" :show-error-message="false">
        <van-cell-group inset class="!m-0px !bg-[transparent]">
            <van-field
                v-model="form.phone" 
                clearable 
                name="phone" 
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
                v-model="form.imgCode" 
                name="imgCode" 
                class="rounded-8px mb-10px"
                :rules="getImgCodeRule(imgCode)"
                placeholder="验证码,点击图片刷新">
                <template #button>
                    <image-verify v-model:code="imgCode" />
                </template>
            </van-field>
            <van-space direction="vertical" fill size="10px" class="pt-10px pb-10px">
                <van-button type="primary" :block="true" :round="true" native-type="submit">确定</van-button>
                <van-button class="!border-none" :block="true" :round="true" @click="toLoginModule('pwd-login')">返回</van-button>
            </van-space>
        </van-cell-group>
    </van-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { FormInstance, showFailToast, showSuccessToast } from 'vant';
import { useRouterPush } from '@/composables';
import { useSmsCode } from '@/hooks';
import { formRules, getImgCodeRule } from '@/utils';

const { toLoginModule } = useRouterPush();
const { label, isCounting, loading: smsLoading, getSmsCode } = useSmsCode();

const formRef = ref<FormInstance>();

const form = reactive({
  phone: '',
  code: '',
  imgCode: ''
});

const imgCode = ref('');;

function handleSmsCode() {
  getSmsCode(form.phone);
}

const onFailed = (errorInfo:{values:object, errors: {name: string, message: string}[]}) => {
    showFailToast(errorInfo.errors[0].message);
};

async function handleSubmit() {
  showSuccessToast('验证成功!');
}
</script>

<style scoped></style>