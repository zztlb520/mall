import { defineStore } from 'pinia';
import { ROOT_ROUTE, constantRoutes, router, routes as staticRoutes } from '@/router';
import {
	filterAuthRoutesByUserPermission,
	getCacheRoutes,
	getConstantRouteNames,
	getUserInfo,
	transformAuthRouteToVueRoute,
	transformAuthRouteToVueRoutes,
	transformRouteNameToRoutePath,
	transformRoutePathToRouteName,
	sortRoutes
} from '@/utils';
import { useAuthStore } from '../auth';

interface RouteState {
	/**
	 * 权限路由模式:
	 * - static - 前端声明的静态
	 * - dynamic - 后端返回的动态
	 */
	authRouteMode: ImportMetaEnv['VITE_AUTH_ROUTE_MODE'];
	/** 是否初始化了权限路由 */
	isInitAuthRoute: boolean;
	/** 路由首页name(前端静态路由时生效，后端动态路由该值会被后端返回的值覆盖) */
	routeHomeName: AuthRoute.AllRouteKey;
	/** 缓存的路由名称 */
	cacheRoutes: string[];
}

export const useRouteStore = defineStore('route-store', {
	state: (): RouteState => ({
		authRouteMode: import.meta.env.VITE_AUTH_ROUTE_MODE,
		isInitAuthRoute: false,
		routeHomeName: transformRoutePathToRouteName(import.meta.env.VITE_ROUTE_HOME_PATH),
		cacheRoutes: []
	}),
	actions: {
		/** 重置路由的store */
		resetRouteStore() {
			this.resetRoutes();
			this.$reset();
		},
		/** 重置路由数据，保留固定路由 */
		resetRoutes() {
			const routes = router.getRoutes();
			routes.forEach(route => {
				const name: AuthRoute.RouteKey = (route.name || 'root') as AuthRoute.RouteKey;
				if (!this.isConstantRoute(name)) {
					router.removeRoute(name);
				}
			});
		},
		/**
		 * 是否是固定路由
		 * @param name 路由名称
		 */
		isConstantRoute(name: AuthRoute.RouteKey) {
			const constantRouteNames = getConstantRouteNames(constantRoutes);
			return constantRouteNames.includes(name);
		},
		/**
		 * 是否是有效的固定路由
		 * @param name 路由名称
		 */
		isValidConstantRoute(name: AuthRoute.RouteKey) {
			const NOT_FOUND_PAGE_NAME: AuthRoute.NotFoundRouteKey = 'not-found';
			const constantRouteNames = getConstantRouteNames(constantRoutes);
			return constantRouteNames.includes(name) && name !== NOT_FOUND_PAGE_NAME;
		},
		/**
		 * 处理权限路由
		 * @param routes - 权限路由
		 */
		handleAuthRoutes(routes: AuthRoute.Route[]) {
			const vueRoutes = transformAuthRouteToVueRoutes(routes);

			vueRoutes.forEach(route => {
				router.addRoute(route);
			});

			this.cacheRoutes = getCacheRoutes(vueRoutes);
		},
		/** 动态路由模式下：更新根路由的重定向 */
		handleUpdateRootRedirect(routeKey: AuthRoute.AllRouteKey) {
			if (routeKey === 'root' || routeKey === 'not-found') {
				throw new Error('routeKey的值不能为root或者not-found');
			}
			const rootRoute: AuthRoute.Route = { ...ROOT_ROUTE, redirect: transformRouteNameToRoutePath(routeKey) };
			const rootRouteName: AuthRoute.AllRouteKey = 'root';
			router.removeRoute(rootRouteName);
			const rootVueRoute = transformAuthRouteToVueRoute(rootRoute)[0];
			router.addRoute(rootVueRoute);
		},
		/** 初始化动态路由 */
		async initDynamicRoute() {
			//   const { userId } = getUserInfo();
			//   const { data } = await fetchUserRoutes(userId);
			//   if (data) {
			this.routeHomeName = 'root';
			this.handleUpdateRootRedirect('root');
			this.handleAuthRoutes(constantRoutes);
			//   }
		},
		/** 初始化静态路由 */
		async initStaticRoute() {
			const auth = useAuthStore();
			const routes = filterAuthRoutesByUserPermission(staticRoutes, auth.userInfo.userRole);
			this.handleAuthRoutes(routes);
			this.isInitAuthRoute = true;
		},
		/** 初始化权限路由 */
		async initAuthRoute() {
			const { userId } = getUserInfo();
			if (!userId) return;
			if (this.authRouteMode === 'dynamic') {
				await this.initDynamicRoute();
			} else {
				await this.initStaticRoute();
			}
		}
	}
});
