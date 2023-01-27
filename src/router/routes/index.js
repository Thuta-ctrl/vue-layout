const routes = [
  {
    path: '/', component: () => import('@/layouts/main.vue'),
    children: [
      { path: '', component: () => import('@/pages/index.vue') },
      { path: '/about', component: () => import('@/pages/about.vue') },
    ]
  }
]

export default routes