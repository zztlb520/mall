import { createApp } from 'vue';
import App from './App.vue';
import { Lazyload } from 'vant';
// import { setupDirectives } from './directives';
import { setupRouter } from './router';
import { setupAssets } from './plugins';
import { setupStore } from './store';

async function setupApp() {
	setupAssets();

	const app = createApp(App);

	// store plugin: pinia
	setupStore(app);

	// vue custom directives
	//   setupDirectives(app);

	// vue router
	await setupRouter(app);

	app.use(Lazyload, {
		lazyComponent: true,
	});
	// mount app
	app.mount('#app');
}

setupApp();
