import { mockRequest } from '../request';

/**
 * 获取验证码
 * @param phone - 手机号
 * @returns - 返回boolean值表示是否发送成功
 */
export function fetchSmsCode(phone: string) {
    return mockRequest.post<boolean>('/getSmsCode', { phone });
}
/**
 * 登录
 * @param userName - 用户名
 * @param password - 密码
 */
export function fetchLogin(userName: string, password: string) {
    return mockRequest.post<ApiAuth.Token>('/login', { userName, password });
}

/** 获取用户信息 */
export function fetchUserInfo() {
    return mockRequest.get<ApiAuth.UserInfo>('/getUserInfo');
}

/**
 * 刷新token
 * @param refreshToken
 */
export function fetchUpdateToken(refreshToken: string) {
    return mockRequest.post<ApiAuth.Token>('/updateToken', { refreshToken });
}