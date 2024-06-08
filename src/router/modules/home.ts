const home: AuthRoute.Route = {
    name: 'home',
    path: '/home',
    component: 'self',
    meta: {
      title: '首页',
      requiresAuth: true,
	  keepAlive: false,
      singleLayout: 'basic',
      permissions: ['user','tourists','trial']
    }
  };
  
  export default home;