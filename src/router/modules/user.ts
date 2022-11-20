const user: AuthRoute.Route = {
  name: 'user',
  path: '/user',
  component: 'self',
  meta: {
    title: '我的',
    requiresAuth: true,
    singleLayout: 'basic',
    permissions: ['user','tourists','trial']
  }
};

export default user;