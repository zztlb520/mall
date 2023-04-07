const user: AuthRoute.Route = {
  name: 'chat',
  path: '/chat',
  component: 'self',
  meta: {
    title: '聊天室',
    requiresAuth: true,
    singleLayout: 'basic',
    permissions: ['user']
  }
};

export default user;
