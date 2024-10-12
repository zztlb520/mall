interface UserModel extends Auth.UserInfo {
    token: string;
    refreshToken: string;
    password: string;
}

export const userModel: UserModel[] = [
    {
        token: '__TOKEN_USER__',
        refreshToken: '__REFRESH_TOKEN_ZZT__',
        userId: '0',
		userAvatar: 1,
		userLive: 1,
        userName: 'zzt',
        userRole: 'user',
        password: 'zzt123'
    },
    {
        token: '__TOKEN_tourists__',
        refreshToken: '__REFRESH_TOKEN_TOURISTS__',
        userId: '1',
		userAvatar: 2,
		userLive: 2,
        userName: 'tourists',
        userRole: 'tourists',
        password: 'tourists123'
    },
    {
        token: '__TOKEN_TRIAL__',
        refreshToken: '__REFRESH_TOKEN_TRIAL__',
        userId: '2',
		userAvatar: 3,
		userLive: 5,
        userName: 'trial',
        userRole: 'trial',
        password: 'trial123'
    }
];
