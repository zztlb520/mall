const about: AuthRoute.Route = {
    name: 'about',
    path: '/about',
    component: 'self',
    meta: {
      title: '关于',
      requiresAuth: true,
      singleLayout: 'basic',
      permissions: ['user','tourists','trial']
    }
  };
  
  export default about;
  