import type { App } from 'vue';
import vImgPlaceholder from './imgPlaceholder';
// import vFocus from './vFocus'; // 以后有新指令在这里引入

const directives: Record<string, any> = {
	'img-placeholder': vImgPlaceholder,
	// 'focus': vFocus,
};

export default {
	install(app: App) {
		Object.keys(directives).forEach((key) => {
			app.directive(key, directives[key]);
		});
	}
};
