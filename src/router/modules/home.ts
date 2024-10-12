const home: AuthRoute.Route = {
    name: 'home',
    path: '/home',
    component: 'self',
    meta: {
		title: '首页',
		requiresAuth: true,
		keepAlive: true,
		singleLayout: 'basic',
		permissions: ['user','tourists','trial'],
		hederConfig:{
			showSearch:true,
			showGlobalBg:true
		}
    }
  };

  export default home;
