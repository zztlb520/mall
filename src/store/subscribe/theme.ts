import { onUnmounted, watch } from 'vue';
// import { useOsTheme } from 'naive-ui';
import type { ConfigProviderProps } from 'vant';
import { useElementSize } from '@vueuse/core';
import { kebabCase } from 'lodash-es';
import { setThemeColor } from '@/utils';
import { useThemeStore } from '../modules';

/** 订阅theme store */
export default function subscribeThemeStore() {
  const theme = useThemeStore();
//   const osTheme = useOsTheme();
  const { width } = useElementSize(document.documentElement);
  const { addDarkClass, removeDarkClass } = handleCssDarkMode();

  // 监听主题颜色
  const stopThemeColor = watch(
    () => theme.themeColor,
    newValue => {
      setThemeColor(newValue);
    },
    { immediate: true }
  );

  // 监听vant themeOverrides
  const stopThemeOverrides = watch(
    () => theme.vantThemeOverrides,
    newValue => {
      if (newValue) {
        addThemeCssVarsToHtml(newValue);
      }
    },
    { immediate: true }
  );

  // 监听暗黑模式
  const stopDarkMode = watch(
    () => theme.darkMode,
    newValue => {
      if (newValue) {
        addDarkClass();
      } else {
        removeDarkClass();
      }
    },
    {
      immediate: true
    }
  );

  // 监听操作系统主题模式
//   const stopOsTheme = watch(
//     osTheme,
//     newValue => {
//       const isDark = newValue === 'dark';
//       theme.setAutoFollowSystemMode(isDark);
//     },
//     { immediate: true }
//   );

  // 禁用横向滚动(页面切换时,过渡动画会产生水平方向的滚动条, 小于最小宽度时，不禁止)
  const stopWidth = watch(width, newValue => {
    if (newValue < theme.layout.minWidth) {
      document.documentElement.style.overflowX = 'auto';
    } else {
      document.documentElement.style.overflowX = 'hidden';
    }
  });

  onUnmounted(() => {
    stopThemeColor();
    stopThemeOverrides();
    stopDarkMode();
    // stopOsTheme();
    stopWidth();
  });
}

/** css 暗黑模式 */
function handleCssDarkMode() {
  const DARK_CLASS = 'dark';
  function addDarkClass() {
    document.documentElement.setAttribute('data-theme','dark')
    document.documentElement.classList.add(DARK_CLASS);
  }
  function removeDarkClass() {
    document.documentElement.setAttribute('data-theme','default')
    document.documentElement.classList.remove(DARK_CLASS);
  }
  return {
    addDarkClass,
    removeDarkClass
  };
}

type ThemeVars = Exclude<ConfigProviderProps['themeVars'], undefined>;
type ThemeVarsKeys = keyof ThemeVars;

/** 添加css vars至html */
function addThemeCssVarsToHtml(themeVars: ThemeVars) {
  const keys = Object.keys(themeVars) as ThemeVarsKeys[];
  const style: string[] = [];
  keys.forEach(key => {
    style.push(`--${kebabCase(key)}: ${themeVars[key]}`);
  });
  const styleStr = style.join(';');
  document.documentElement.style.cssText += styleStr;
}
