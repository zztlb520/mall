const shop: AuthRoute.Route = {
  name: 'shop',
  path: '/shop',
  component: 'self',
  meta: {
    title: '购物车',
    requiresAuth: true,
    singleLayout: 'basic',
    permissions: ['user']
  }
};

export default shop;
