/** 用户相关模块 */
declare namespace Auth {
    /**
     * 用户角色类型(前端静态路由用角色类型进行路由权限的控制)
     * - trial: 试玩用户
     * - tourists: 游客
     * - user: 用户
     */
    type RoleType = keyof typeof import('@/enum').EnumUserRole;

    /** 用户信息 */
    interface UserInfo {
        /** 用户id */
        userId: string;
		/**用户头像下标 */
		userAvatar: number;
        /** 用户名 */
        userName: string;
        /** 用户角色类型 */
        userRole: RoleType;
		/** 等级 */
		userLive: number
    }
}

declare namespace UserManagement {
    interface User extends ApiUserManagement.User {
        /** 序号 */
        index: number;
        /** 表格的key（id） */
        key: string;
    }

    /**
     * 用户性别
     * - 0: 女
     * - 1: 男
     */
    type GenderKey = NonNullable<User['gender']>;

    /**
     * 用户状态
     * - 1: 启用
     * - 2: 禁用
     * - 3: 冻结
     * - 4: 软删除
     */
    type UserStatusKey = NonNullable<User['userStatus']>;
}
