import { mockRequest } from '../request';

/**
 * 获取首页配置
 * @returns - 返回HomeModel值首页的所有数据
 */
export function getHomeConfig() {
    return mockRequest.post<HomeModel>('/getHomeConfig');
}