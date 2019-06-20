import React, { Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import _ from 'lodash'
import Exception from './pages/Exception'
import routes from './configs/routes'

function getRoutes(routeTrees = []) {
  let routeList = []
  routeTrees.forEach(item => {
    if (Array.isArray(item.routes)) {
      routeList.push(getRoutes(item.routes))
    }
    routeList.push(_.pick(item, ['path', 'component', 'layout']))
  })
  return routeList
}

function checkNotAllowed(menus, pathname) {
  let routerMenus = []
  menus.forEach(menu => {
    const isRouter = !menus.some(item => item.pid === menu.id)
    if (isRouter) {
      routerMenus.push(menu)
    }
  })
  const isAllowed = routerMenus.some(item => pathname.indexOf(item.path) === 0)
  return !isAllowed && pathname !== '/' && pathname !== '/login'
}

function Router(props) {
  const { menus } = props
  const routeList = getRoutes(routes)
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Switch>
          {routeList.map(item => {
            const Page = lazy(() => import(`${item.component}`))
            return (
              <Route
                exact
                key={item.path}
                path={item.path}
                render={props => {
                  const { pathname } = props.location
                  // 判断路由是否是可访问的菜单下的路由
                  const isNotAllowed = checkNotAllowed(menus, pathname)
                  if (isNotAllowed) {
                    return <Exception type="403" />
                  }
                  if (item.layout) {
                    const Layout = lazy(() => import(`${item.layout}`))
                    return (
                      <Layout>
                        <Page {...props} />
                      </Layout>
                    )
                  }
                  return <Page {...props} />
                }}
              />
            )
          })}
          <Route render={() => <Exception />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default connect(state => {
  const {
    account: { menus },
  } = state
  return { menus }
})(Router)
