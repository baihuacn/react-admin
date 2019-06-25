const routes = [
  {
    path: '/',
    redirect: '/dashboard/analysis',
  },
  {
    path: '/dashboard/analysis',
    name: '分析页',
    layout: './layouts/BaseLayout',
    component: './pages/Dashboard',
  },
  {
    path: '/login',
    component: './pages/Login',
  },
]

export default routes
