<template>
  <div class="relative flex-center wh-full" :style="{ backgroundColor: bgColor }">
    <dark-mode-switch
      :dark="theme.darkMode"
      class="absolute left-48px top-24px z-3 text-20px"
      @update:dark="theme.setDarkMode"/>
    <div class="w-300px sm:w-360px;">
        <header class="flex-y-center justify-between relative">
            <div class="w-100px h-100px sm:w-360px absolute left-148px top--10px">

            </div>
            <svg class="Btn-svg" viewBox="0 0 750 98" fill="#fff">
                <defs>
                    <filter id="shadow" width="200%" height="200%" x="0" y="-100%">
                        <feFlood result="basic" flood-opacity="0.15" />
                        <feComposite operator="in" in="SourceAlpha" in2="basic" result="basic_color"/>
                        <feGaussianBlur in="basic_color" stdDeviation="10" result="blur"/>
                        <feOffset in="blur" dx="0" dy="0" result="offsetBlur"/>
                        <feMerge>
                            <feMergeNode in="offsetBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>
                <path d="M556,1296c33.1-.87,50.842-22.39,58-31,7.7-9.44,21.891-30.02,41.127-30,138.95,0.14,255.873,0,255.873,0a20,20,0,0,1,20,20v78H556m0,0H181v-78a20,20,0,0,1,20-20s116.923,0.14,255.873,0c19.236-.02,33.43,20.56,41.127,30,7.158,8.61,24.9,30.13,58,31" transform="translate(-181 -1235)" filter="url(#shadow)"/>
            </svg>
        </header>
        <main class="pt-24px">
          <h3 class="text-18px text-primary font-medium">{{ activeModule.label }}</h3>
          <div class="pt-24px">
            <transition name="fade-slide" mode="out-in" appear>
              <component :is="activeModule.component" />
            </transition>
          </div>
        </main>
    </div>
    <!-- <n-card :bordered="false" size="large" class="z-4 !w-auto rounded-20px shadow-sm">
      <div class="w-300px sm:w-360px">
        <header class="flex-y-center justify-between">
          <div class="w-70px h-70px rounded-35px overflow-hidden">
            <system-logo class="text-70px text-primary" :fill="true" />
          </div>
          <n-gradient-text type="primary" :size="28">{{ title }}</n-gradient-text>
        </header>
        <main class="pt-24px">
          <h3 class="text-18px text-primary font-medium">{{ activeModule.label }}</h3>
          <div class="pt-24px">
            <transition name="fade-slide" mode="out-in" appear>
              <component :is="activeModule.component" />
            </transition>
          </div>
        </main>
      </div>
    </n-card> -->
    <!-- <login-bg :theme-color="bgThemeColor" /> -->
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Component } from 'vue';
import { EnumLoginModule } from '@/enum';
import { useThemeStore } from '@/store';
// import { useAppInfo } from '@/composables';
import { getColorPalette, mixColor } from '@/utils';
import { BindWechat, CodeLogin, LoginBg, PwdLogin, Register, ResetPwd } from './components';

interface Props {
  /** 登录模块分类 */
  module: EnumType.LoginModuleKey;
}

const props = defineProps<Props>();

const theme = useThemeStore();
// const { title } = useAppInfo();

interface LoginModule {
  key: EnumType.LoginModuleKey;
  label: EnumLoginModule;
  component: Component;
}

const modules: LoginModule[] = [
  { key: 'pwd-login', label: EnumLoginModule['pwd-login'], component: PwdLogin },
  { key: 'code-login', label: EnumLoginModule['code-login'], component: CodeLogin },
  { key: 'register', label: EnumLoginModule.register, component: Register },
  { key: 'reset-pwd', label: EnumLoginModule['reset-pwd'], component: ResetPwd },
  { key: 'bind-wechat', label: EnumLoginModule['bind-wechat'], component: BindWechat }
];

const activeModule = computed(() => {
  const active: LoginModule = { ...modules[0] };
  const findItem = modules.find(item => item.key === props.module);
  if (findItem) {
    Object.assign(active, findItem);
  }
  return active;
});

const bgThemeColor = computed(() => (theme.darkMode ? getColorPalette(theme.themeColor, 7) : theme.themeColor));

const bgColor = computed(() => {
  const COLOR_WHITE = '#ffffff';
  const ratio = theme.darkMode ? 0.5 : 0.2;
  return mixColor(COLOR_WHITE, theme.themeColor, ratio);
});
</script>
