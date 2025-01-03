import type { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import unocss from '@unocss/vite';
import progress from 'vite-plugin-progress';
import html from './html';
import unplugin from './unplugin';
import mock from './mock';
import visualizer from './visualizer';
import compress from './compress';
import pwa from './pwa';

/**
 * vite插件
 * @param viteEnv - 环境变量配置
 */
export function setupVitePlugins(viteEnv: ImportMetaEnv): (PluginOption | PluginOption[])[] {
	const plugins = [
		vue({
			script: {
				defineModel: true
			}
		}),
		vueJsx(),
		html(viteEnv),
		 ...unplugin(viteEnv),
		unocss(),
		mock(viteEnv),
		progress()
	];

	if (viteEnv.VITE_VISUALIZER === 'Y') {
		plugins.push(visualizer as PluginOption);
	}
	if (viteEnv.VITE_COMPRESS === 'Y') {
		plugins.push(compress(viteEnv));
	}
	if (viteEnv.VITE_PWA === 'Y' || viteEnv.VITE_VERCEL === 'Y') {
		plugins.push(pwa());
	}
	if (viteEnv.VITE_SOYBEAN_ROUTE_PLUGIN === 'Y') {
		plugins.push(pageRoute());
	}
	
	return plugins;
}
