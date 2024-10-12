import { computed, getCurrentInstance, inject, provide, ref, unref } from 'vue'
import type { App, InjectionKey, Ref } from 'vue'
import type { MaybeRef } from '@vueuse/core'
import type { ConfigProviderProps } from 'vant';
import { defaultNamespace, useNamespace } from '../use-namespace'
import { useZIndex, defaultInitialZIndex } from '../use-z-index'

type ConfigProviderContext = Partial<ConfigProviderProps>

export const keysOf = <T>(arr: T) => Object.keys(arr) as Array<keyof T>
// this is meant to fix global methods like `ElMessage(opts)`, this way we can inject current locale
// into the component as default injection value.
// refer to: https://github.com/element-plus/element-plus/issues/2610#issuecomment-887965266
const globalConfig = ref<ConfigProviderContext>()

export const configProviderContextKey: InjectionKey<
  Ref<ConfigProviderContext>
> = Symbol()

export function useGlobalConfig<
  K extends keyof ConfigProviderContext,
  D extends ConfigProviderContext[K]
>(
  key: K,
  defaultValue?: D
): Ref<Exclude<ConfigProviderContext[K], undefined> | D>
export function useGlobalConfig(): Ref<ConfigProviderContext>
export function useGlobalConfig(key?: keyof ConfigProviderContext, defaultValue = undefined) {
  const config = getCurrentInstance()
    ? inject(configProviderContextKey, globalConfig)
    : globalConfig
  if (key) {
    return computed(() => config.value?.[key] ?? defaultValue)
  } else {
    return config
  }
}
// for components like `ElMessage` `ElNotification` `ElMessageBox`.
export function useGlobalComponentSettings(
	block: string,
	sizeFallback?: MaybeRef<ConfigProviderContext['size']>
) {
	const config = useGlobalConfig()

	const ns = useNamespace(
		block,
		computed(() => config.value?.namespace || defaultNamespace)
	)

	const zIndex = useZIndex(
		computed(() => config.value?.zIndex || defaultInitialZIndex)
	)

	return {
		ns,
		zIndex,
	}
}
  