<template>
    <van-form ref="formRef" @submit="handleSubmit" @failed="onFailed" :show-error-message="false">
        <van-cell-group inset class="!m-0px !bg-[transparent]">
            <van-field 
                v-model="form.userName" 
                clearable 
                name="userName" 
                class="rounded-8px mb-10px" 
                placeholder="用户名"/>
            <van-field 
                v-model="form.password" 
                name="password" 
                class="rounded-8px mb-10px" 
                type="password"
                :rules="formRules.pwd"
                placeholder="密码"/>
        </van-cell-group>
        <van-space direction="vertical" fill size="15px" class="pt-10px pb-10px">
            <div class="flex-y-center justify-between text-14px">
                <van-checkbox icon-size="14px" shape="square" v-model="rememberMe">记住我</van-checkbox>
                <a @click="toLoginModule('reset-pwd')">忘记密码？</a>
            </div>
            <van-button round block :loading="auth.loginLoading" type="primary" native-type="handleSubmit">确定</van-button>
            <div class="flex-y-center justify-between">
                <van-button class="flex-1 !border-none" block size="small" @click="toLoginModule('code-login')">
                    {{ EnumLoginModule['code-login'] }}
                </van-button>
                <div class="w-12px"></div>
                <van-button class="flex-1 !border-none" block size="small" @click="toLoginModule('register')">
                    {{ EnumLoginModule.register }}
                </van-button>
            </div>
        </van-space>
        <other-account @login="handleLoginOtherAccount" />
    </van-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import type { FormInstance } from 'vant';
import { showFailToast, showSuccessToast } from 'vant';
import { EnumLoginModule } from '@/enum';
import { useAuthStore } from '@/store';
import { useRouterPush } from '@/composables';
import { formRules } from '@/utils';
import { OtherAccount } from './components';
interface Props {
    /** 主题颜色 */
    bgColor: string;
}

const props = defineProps<Props>();
const { toLoginModule } = useRouterPush();

const { login } = useAuthStore();
const auth = useAuthStore();

const form = reactive({
    userName:'',
    password:'',
})

const formRef = ref<FormInstance>();
const rememberMe = ref<boolean>();

const onFailed = (errorInfo:{values:object, errors: {name: string, message: string}[]}) => {
    showFailToast(errorInfo.errors[0].message);
};


async function handleSubmit() {
    formRef.value?.validate('password').then(()=>{
        const { userName, password} = form
        login(userName, password);
    }).catch((message:string)=>{
        showFailToast(message)
    });
}

function handleLoginOtherAccount(param: { userName: string; password: string }) {
  const { userName, password } = param;
  login(userName, password);
}
</script>

<style>

</style>