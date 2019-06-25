import React, { Suspense, lazy } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Exception from './pages/Exception'
import routes from './configs/routes'

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
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Switch>
          {routes.map(item => {
            if (!item.path) {
              return null
            }
            if (item.redirect) {
              return <Redirect exact key={item.path} from={item.path} to={item.redirect} />
            }
            return (
              <Route
                exact
                key={item.path}
                path={item.path}
                render={props => {
                  const Page = lazy(() => import(`${item.component}`))
                  if (!Page) {
                    return null
                  }
                  // 判断路由是否是可访问的菜单下的路由
                  const isNotAllowed = checkNotAllowed(menus, item.path)
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
