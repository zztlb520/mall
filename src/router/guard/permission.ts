import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { routeName } from '@/router';
import { useAuthStore } from '@/store';
import { exeStrategyActions, getToken } from '@/utils';
import { createDynamicRouteGuard } from './dynamic';
import { Common } from '~/src/typings/global';

/** 处理路由页面的权限 */
export async function createPermissionGuard(
	to: RouteLocationNormalized,
	from: RouteLocationNormalized,
	next: NavigationGuardNext
) {
	// 动态路由
	const permission = await createDynamicRouteGuard(to, from, next);
	if (!permission) return;

	const auth = useAuthStore();
	const isLogin = Boolean(getToken());
	const permissions = to.meta.permissions || [];
	const needLogin = Boolean(to.meta?.requiresAuth) || Boolean(permissions.length);
	const hasPermission = !permissions.length || permissions.includes(auth.userInfo.userRole);
	const actions: Common.StrategyAction[] = [
		// 已登录状态跳转登录页，跳转至首页
		[
			isLogin && to.name === routeName('login'),

			() => {
				next({ name: routeName('root') });
			}
		],
		// 不需要登录权限的页面直接通行
		[
			!needLogin,
			() => {
				next();
			}
		],
		// 未登录状态进入需要登录权限的页面
		[
			!isLogin && needLogin,
			() => {
				const redirect = to.fullPath;
				next({ name: routeName('login'), query: { redirect } });
			}
		],
		// 登录状态进入需要登录权限的页面，有权限直接通行
		[
			isLogin && needLogin && hasPermission,
			() => {
				next();
			}
		],
		[
			// 登录状态进入需要登录权限的页面，无权限，重定向到无权限页面
			isLogin && needLogin && !hasPermission,
			() => {
				next({ name: routeName('403') });
				console.log(403)
			}
		]
	];

	exeStrategyActions(actions);
}
