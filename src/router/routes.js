const routes = [
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),

    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('pages/Login.vue'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('pages/Register.vue'),
      },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      {
        path: 'users',
        name: 'UsersList',
        component: () => import('pages/UsersList.vue'),
      },
      {
        path: 'horses',
        name: 'HorsesList',
        component: () => import('pages/HorsesList.vue'),
      },
      {
        path: 'activities',
        name: 'ActivitiesList',
        component: () => import('pages/ActivitiesList.vue'),
      },
      {
        path: 'addhorse',
        name: 'AddHorse',
        component: () => import('pages/AddHorse.vue'),
      },
      {
        path: 'test',
        name: 'Test',
        component: () => import('pages/Test.vue'),
      },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
