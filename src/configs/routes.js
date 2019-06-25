import React from 'react'
const BaseLayout = React.lazy(() => import('@/layouts/BaseLayout'))

const routes = [
  {
    path: '/login',
    component: './pages/Login',
  },
  {
    path: '/dashboard/analysis',
    name: '分析页',
    layout: BaseLayout,
    component: './pages/Dashboard',
  },
  {
    path: '/dashboard/monitor',
    name: '监控台',
    layout: BaseLayout,
    component: './pages/Dashboard',
  },
  {
    path: '/dashboard/workplace',
    name: '工作台',
    layout: BaseLayout,
    component: './pages/Dashboard',
  },
  {
    path: '/',
    redirect: '/dashboard/analysis',
  },
]

export default routes
