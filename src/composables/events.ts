import { useEventListener } from '@vueuse/core';
import { useThemeStore } from '@/store';

/** 全局事件 */
export function useGlobalEvents() {
  const theme = useThemeStore();

  /** 页面离开时缓存多页签数据 */
  useEventListener(window, 'beforeunload', () => {
	// theme.resetThemeStore();
    // theme.cacheThemeSettings();
  });
}
