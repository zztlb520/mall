/** 用户角色 */
export enum EnumUserRole {
    user = '普通用户',
    tourists = '游客用户',
    trial = '试玩用户'
}

/** 登录模块 */
export enum EnumLoginModule {
    'pwd-login' = '账密登录',
    'code-login' = '手机验证码登录',
    'register' = '注册',
    'reset-pwd' = '重置密码',
    'bind-wechat' = '微信绑定'
}

export enum EnumGender {
    male = '男',
    female = '女',
    null = ''
}