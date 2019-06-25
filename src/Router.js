import React, { Suspense, lazy, PureComponent } from 'react'
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

class Router extends PureComponent {
  render() {
    const { menus } = this.props
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
              const Component = lazy(() => import(`${item.component}`))
              if (!Component) {
                return null
              }
              return (
                <Route
                  exact
                  key={item.path}
                  path={item.path}
                  render={props => {
                    // 判断路由是否是可访问的菜单下的路由
                    const isNotAllowed = checkNotAllowed(menus, item.path)
                    if (isNotAllowed) {
                      return <Exception type="403" />
                    }
                    if (item.layout) {
                      return (
                        <item.layout>
                          <Component {...props} />
                        </item.layout>
                      )
                    }
                    return <Component {...props} />
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
}

export default connect(state => {
  const {
    account: { menus },
  } = state
  return { menus }
})(Router)
