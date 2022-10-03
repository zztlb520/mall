interface UserModel extends Auth.UserInfo {
    token: string;
    refreshToken: string;
    password: string;
}

export const userModel: UserModel[] = [
    {
        token: '__TOKEN_USER__',
        refreshToken: '__REFRESH_TOKEN_SOYBEAN__',
        userId: '0',
        userName: 'zzt',
        userRole: 'user',
        password: 'zzt123'
    },
    {
        token: '__TOKEN_tourists__',
        refreshToken: '__REFRESH_TOKEN_TOURISTS__',
        userId: '1',
        userName: 'tourists',
        userRole: 'tourists',
        password: 'tourists123'
    },
    {
        token: '__TOKEN_TRIAL__',
        refreshToken: '__REFRESH_TOKEN_TRIAL__',
        userId: '2',
        userName: 'trial',
        userRole: 'trial',
        password: 'trial123'
    }
];