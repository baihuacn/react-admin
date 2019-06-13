import React, { Suspense, lazy } from 'react'
import _ from 'lodash'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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

function Router() {
  const routeList = getRoutes(routes)
  const BaseLayout = lazy(() => import('./layouts/BaseLayout'))
  return (
    <BrowserRouter>
      <Suspense fallback={null}>
        <Switch>
          {routeList.map(item => {
            const Component = lazy(() => import(`${item.component}`))
            return (
              <Route
                exact
                key={item.path}
                path={item.path}
                render={props => {
                  if (item.layout === 'BaseLayout') {
                    return (
                      <BaseLayout>
                        <Component {...props} />
                      </BaseLayout>
                    )
                  } else {
                    return <Component {...props} />
                  }
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

export default Router
