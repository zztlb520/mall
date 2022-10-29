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
  darkColor:"#18181c",
  lightColor:'#fff',
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
  themeColor: '#008080',
  themeColorList,
  otherColor: {
    info: '#2080f0',
    success: '#52c41a',
    warning: '#faad14',
    danger: '#f5222d'
  },
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
    height: 48
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
