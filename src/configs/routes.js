import React from 'react'
const BaseLayout = React.lazy(() => import(/* webpackChunkName: "BaseLayout" */ '@/layouts/BaseLayout'))
const Login = React.lazy(() => import(/* webpackChunkName: "Login" */ '@/pages/Login'))
const Analysis = React.lazy(() => import(/* webpackChunkName: "Analysis" */ '@/pages/Analysis'))

const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/dashboard/analysis',
    name: '分析页',
    layout: BaseLayout,
    component: Analysis,
  },
  {
    path: '/dashboard/monitor',
    name: '监控台',
    layout: BaseLayout,
    component: Analysis,
  },
  {
    path: '/dashboard/workplace',
    name: '工作台',
    layout: BaseLayout,
    component: Analysis,
  },
  {
    path: '/',
    redirect: '/dashboard/analysis',
  },
]

export default routes
