const home: AuthRoute.Route = {
    name: 'home',
    path: '/home',
    component: 'self',
    meta: {
      title: '关于',
      requiresAuth: true,
      singleLayout: 'basic',
      permissions: ['user','tourists','trial']
    }
  };
  
  export default home;