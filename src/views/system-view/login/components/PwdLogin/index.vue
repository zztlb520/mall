<template>
    <van-form @submit="onSubmit">
        <van-cell-group inset class="!m-0px !bg-[transparent]">
            <van-field v-model="form.userName" error clearable name="username" class="rounded-8px mb-10px" placeholder="用户名"/>
            <van-field v-model="form.passWord" error name="passWord" class="rounded-8px mb-10px" type="password" placeholder="密码"/>
        </van-cell-group>
        <van-space direction="vertical" fill size="15px" class="pt-10px pb-10px">
            <div class="flex-y-center justify-between text-14px">
                <van-checkbox icon-size="14px" shape="square" v-model="rememberMe">记住我</van-checkbox>
                <a @click="toLoginModule('reset-pwd')">忘记密码？</a>
            </div>
            <van-button round block type="primary" native-type="submit">提交</van-button>
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
    </van-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue';
import type { FormProps, FormInstance } from 'vant';
import { Toast } from 'vant';
import { EnumLoginModule } from '@/enum';
import { useRouterPush } from '@/composables';
// #E2E7F7
    interface Props {
        /** 主题颜色 */
        bgColor: string;
    }

    const props = defineProps<Props>();
    const { toLoginModule } = useRouterPush();

    const form = reactive({
        userName:'',
        passWord:'',
    })
    const rememberMe = ref<boolean>();
    const formRef = ref<FormInstance>();
    // formRef.value?.submit();

    const onSubmit = () => {

        const { userName, password } = form;
        // if(!userName) Toast.fail('请输入用户名')
        // login(userName, password);
    }
</script>

<style>

</style>