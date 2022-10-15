<template>
    <van-form @submit="onSubmit">
        <van-cell-group inset class="!m-0px !bg-[transparent]">
            <van-field v-model="form.userName" name="username" class="rounded-8px mb-10px" placeholder="用户名"/>
            <van-field v-model="form.passWord" name="passWord" class="rounded-8px mb-10px" type="password" placeholder="密码"/>
        </van-cell-group>
        <div class="flex-y-center justify-between mt-10px">
            <van-button class="flex-1 !border-none" block size="small">
                {{ EnumLoginModule['code-login'] }}
            </van-button>
            <div class="w-12px"></div>
            <van-button class="flex-1 !border-none" block size="small">
                {{ EnumLoginModule.register }}
            </van-button>
        </div>
        <div style="margin:16px 0;">
            <van-button round block type="primary" native-type="submit">提交</van-button>
        </div>
    </van-form>
</template>

<script lang="ts" setup>
import { Toast } from 'vant';
import { EnumLoginModule } from '@/enum';
import type { FormProps, FormInstance } from 'vant';
import { ref, reactive } from 'vue';
// #E2E7F7
    interface Props {
        /** 主题颜色 */
        bgColor: string;
    }

const props = defineProps<Props>();
    const form = reactive({
        userName:'',
        passWord:''
    })
    const formRef = ref<FormInstance>();
    const rememberMe = ref(false);
    // formRef.value?.submit();
    
    const onSubmit = () => {

        const { userName, password } = form;
        // if(!userName) Toast.fail('请输入用户名')
        // login(userName, password);
    }
</script>

<style>

</style>