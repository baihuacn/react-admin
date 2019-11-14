/**
 * @file 路由全局配置
 */
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
    layout: BaseLayout,
    component: Analysis,
  },
  {
    path: '/',
    redirect: '/dashboard/analysis',
  },
]

export default routes
