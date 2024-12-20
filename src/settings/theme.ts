import { EnumThemeAnimateMode, EnumTemplate } from '@/enum';
import jsonSetting from './theme.json';

const themeColorList = [
	'#1890ff',
	'#409EFF',
	'#2d8cf0',
	'#007AFF',
	'#5ac8fa',
	'#5856D6',
	'#536dfe',
	'#9c27b0',
	'#AF52DE',
	'#0096c7',
	'#00C1D4',
	'#34C759',
	'#43a047',
	'#7cb342',
	'#c0ca33',
	'#78DEC7',
	'#e53935',
	'#d81b60',
	'#f4511e',
	'#fb8c00',
	'#ffb300',
	'#fdd835',
	'#6d4c41',
	'#546e7a'
];

const defaultThemeSetting: Theme.Setting = {
	darkMode: false,
	darkColor: "#18181c",
	lightColor: '#fff',
	followSystemTheme: true,
	layout: {
		minWidth: 900,
		mode: 'template-one',
		modeList: [
			{ value: 'template-one', label: EnumTemplate['template-one'] },
			{ value: 'template-two', label: EnumTemplate['template-two'] },
			{ value: 'template-three', label: EnumTemplate['template-three'] },
			{ value: 'template-four', label: EnumTemplate['template-four'] }
		]
	},
	themeColor: '#9D2933',
	themeColorList,
	otherColor: {
		info: '#2080f0',
		success: '#52c41a',
		warning: '#faad14',
		danger: '#f5222d'
	},
	vipColorList: [
		"radial-gradient(at 0.9% 49.2%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 69.9% 77.7%, #57686e 0%, #57686e00 100%), radial-gradient(at 46.1% 15.6%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 12.2% 32.4%, #57686e 0%, #57686e00 100%), radial-gradient(at 24% 95.4%, #f5f7fa 0%, #f5f7fa00 100%)",
		"radial-gradient(at 0.9% 49.2%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 69.9% 77.7%, #688e81 0%, #688e8100 100%), radial-gradient(at 46.1% 15.6%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 12.2% 32.4%, #688e81 0%, #688e8100 100%), radial-gradient(at 24% 95.4%, #f5f7fa 0%, #f5f7fa00 100%)",
		"radial-gradient(at 0.9% 49.2%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 69.9% 77.7%, #7ba2f2 0%, #7ba2f200 100%), radial-gradient(at 46.1% 15.6%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 12.2% 32.4%, #7ba2f2 0%, #7ba2f200 100%), radial-gradient(at 24% 95.4%, #f5f7fa 0%, #f5f7fa00 100%)",
		"radial-gradient(at 0.9% 49.2%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 69.9% 77.7%, #47ccf7 0%, #47ccf700 100%), radial-gradient(at 46.1% 15.6%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 12.2% 32.4%, #47ccf7 0%, #47ccf700 100%), radial-gradient(at 24% 95.4%, #f5f7fa 0%, #f5f7fa00 100%)",
		"radial-gradient(at 0.9% 49.2%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 69.9% 77.7%, #f9b049 0%, #f9b04900 100%), radial-gradient(at 46.1% 15.6%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 12.2% 32.4%, #f9b049 0%, #f9b04900 100%), radial-gradient(at 24% 95.4%, #f5f7fa 0%, #f5f7fa00 100%)",
		"radial-gradient(at 0.9% 49.2%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 69.9% 77.7%, #f39851 0%, #f3985100 100%), radial-gradient(at 46.1% 15.6%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 12.2% 32.4%, #f39851 0%, #f3985100 100%), radial-gradient(at 24% 95.4%, #f5f7fa 0%, #f5f7fa00 100%)",
		"radial-gradient(at 0.9% 49.2%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 69.9% 77.7%, #ed6965 0%, #ed696500 100%), radial-gradient(at 46.1% 15.6%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 12.2% 32.4%, #ed6965 0%, #ed696500 100%), radial-gradient(at 24% 95.4%, #f5f7fa 0%, #f5f7fa00 100%)",
		"radial-gradient(at 0.9% 49.2%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 69.9% 77.7%, #f8ce61 0%, #f8ce6100 100%), radial-gradient(at 46.1% 15.6%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 12.2% 32.4%, #f8ce61 0%, #f8ce6100 100%), radial-gradient(at 24% 95.4%, #f5f7fa 0%, #f5f7fa00 100%)",
		"radial-gradient(at 0.9% 49.2%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 69.9% 77.7%, #fbad0d 0%, #fbad0d00 100%), radial-gradient(at 46.1% 15.6%, #f5f7fa 0%, #f5f7fa00 100%), radial-gradient(at 12.2% 32.4%, #fbad0d 0%, #fbad0d00 100%), radial-gradient(at 24% 95.4%, #f5f7fa 0%, #f5f7fa00 100%)",
		"radial-gradient(at 0.9% 62%, #fcf659 0%, #fcf65900 100%), radial-gradient(at 62.9% 2.1%, #ffffff 0%, #ffffff00 100%), radial-gradient(at 96.6% 16.8%, #c4fd96 0%, #c4fd9600 100%), radial-gradient(at 98.5% 81.4%, #7bfff4 0%, #7bfff400 100%)",
		"radial-gradient(at 76.1% 31.5%, #67d1fd 0%, #67d1fd00 100%), radial-gradient(at 48.8% 83.4%, #ffffff 0%, #ffffff00 100%), radial-gradient(at 85.9% 91%, #c81bf3 0%, #c81bf300 100%), radial-gradient(at 7% 78%, #67d1fd 0%, #67d1fd00 100%)",
		"radial-gradient(at 63.1% 10.3%, #333333 0%, #33333300 100%), radial-gradient(at 0.7% 6.1%, hsla(36.3, 46.3%, 16%, 1) 0%, #3c2d1600 100%), radial-gradient(at 56.8% 80.3%, hsla(0, 0%, 20%, 1) 0%, #33333300 100%), radial-gradient(at 95.6% 86.1%, #3c2d16 0%, #3c2d1600 100%), radial-gradient(at 27% 27.1%, #333333 0%, #33333300 100%), radial-gradient(at 38.5% 87.5%, #3c2d16 0%, #3c2d1600 100%), radial-gradient(at 41.5% 87.3%, #333333 0%, #33333300 100%)"
	],
	isCustomizeInfoColor: false,
	fixedHeaderAndNav: true,
	showReload: true,
	header: {
		inverted: false,
		height: 56
	},
	sider: {
		inverted: false,
		width: 220,
		collapsedWidth: 64,
		mixWidth: 80,
		mixCollapsedWidth: 48,
		mixChildMenuWidth: 200
	},
	footer: {
		fixed: false,
		height: 64
	},
	page: {
		animate: true,
		animateMode: 'fade-slide',
		animateModeList: [
			{ value: 'fade-slide', label: EnumThemeAnimateMode['fade-slide'] },
			{ value: 'fade', label: EnumThemeAnimateMode.fade },
			{ value: 'fade-bottom', label: EnumThemeAnimateMode['fade-bottom'] },
			{ value: 'fade-scale', label: EnumThemeAnimateMode['fade-scale'] },
			{ value: 'zoom-fade', label: EnumThemeAnimateMode['zoom-fade'] },
			{ value: 'zoom-out', label: EnumThemeAnimateMode['zoom-out'] }
		]
	}
};

export const themeSetting = (jsonSetting as Theme.Setting) || defaultThemeSetting;
