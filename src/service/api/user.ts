import { mockRequest } from '../request';

/**
 * 获取个人中心配置
 * @returns - 返回HUserModel值个人中心配置的所有数据
 */
export function getUserConfig() {
    return mockRequest.post<UserModel>('/getUserConfig');
}
