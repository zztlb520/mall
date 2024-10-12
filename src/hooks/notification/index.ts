import type { AppContext, Plugin, App } from 'vue'

type SFCWithInstall<T> = T & Plugin

type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

const withInstallFunction = <T>(fn: T, name: string) => {
	;(fn as SFCWithInstall<T>).install = (app: App) => {
		;(fn as SFCInstallWithContext<T>)._context = app._context
		app.config.globalProperties[name] = fn
	}

	return fn as SFCInstallWithContext<T>
}

import Notify from './src/notify'

export const ElNotification = withInstallFunction(Notify, '$notify')
export default ElNotification

export * from './src/notification'
