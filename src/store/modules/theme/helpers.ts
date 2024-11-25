import type { ConfigProviderProps } from 'vant';
import { cloneDeep } from 'lodash-es';
import { themeSetting } from '@/settings';
import { EnumStorageKey } from '@/enum';
import { addColorAlpha, getColorPalette, getLocal, getThemeColor, removeLocal, setLocal } from '@/utils';

/** 初始化主题配置 */
export function initThemeSettings() {
	const isProd = import.meta.env.PROD;
	// 生产环境才缓存主题配置，本地开发实时调整配置更改配置的json
	const storageSettings = getThemeSettings();
	//   if (isProd && storageSettings) {
	//     return storageSettings;
	//   }
	if (storageSettings) {
		return storageSettings;
	}
	const themeColor = getThemeColor() || themeSetting.themeColor;

	const info = themeSetting.isCustomizeInfoColor ? themeSetting.otherColor.info : getColorPalette(themeColor, 7);
	const otherColor = { ...themeSetting.otherColor, info };
	const setting = cloneDeep({ ...themeSetting, themeColor, otherColor });
	return setting;
}

type ColorType = 'primary' | 'info' | 'success' | 'warning' | 'danger';
type ColorScene = '' | 'Dark' | 'Light' | 'Lightest' | 'Transparency';
type ColorKey = `--van-${ColorType}${ColorScene}-color`;
type ThemeColor = Partial<Record<ColorKey, string>>;

interface ColorAction {
	scene: ColorScene;
	handler: (color: string) => string;
}

/** 获取主题颜色的各种场景对应的颜色 */
function getThemeColors(colors: [ColorType, string][]) {
	const colorActions: ColorAction[] = [
		{ scene: '', handler: color => color },
		{ scene: 'Dark', handler: color => getColorPalette(color, 3) },
		{ scene: 'Light', handler: color => getColorPalette(color, 5) },
		{ scene: 'Lightest', handler: color => getColorPalette(color, 7) },
		{ scene: 'Transparency', handler: color => addColorAlpha(color, 0.1) }
	];

	const themeColor: ThemeColor = {};

	colors.forEach(color => {
		// const [colorType, colorValue] = color;
		// const colorKey: ColorKey = `--van-${colorType}-color`;
		// themeColor[colorKey] = colorValue;
		colorActions.forEach(action => {
			const [colorType, colorValue] = color;
			const colorKey: ColorKey = `--van-${colorType}${action.scene}-color`;
			themeColor[colorKey] = action.handler(colorValue);
		});
	});

	return themeColor;
}

/** 获取vant的主题颜色 */
export function getNaiveThemeOverrides(colors: Record<ColorType, string>) {
	const { primary, success, warning, danger } = colors;
	const info = themeSetting.isCustomizeInfoColor ? colors.info : getColorPalette(primary, 7);

	const themeColors = getThemeColors([
		['primary', primary],
		['info', info],
		['success', success],
		['warning', warning],
		['danger', danger]
	]);

	//   const colorLoading = primary;

	return {
		...themeColors
	};
}

/** 获取缓存中的主题配置 */
function getThemeSettings() {
	return getLocal<Theme.Setting>(EnumStorageKey['theme-settings']);
}

/** 获取缓存中的主题配置 */
export function setThemeSettings(settings: Theme.Setting) {
	return setLocal(EnumStorageKey['theme-settings'], settings);
}

/** 清除缓存配置 */
export function clearThemeSettings() {
	removeLocal(EnumStorageKey['theme-settings']);
}
