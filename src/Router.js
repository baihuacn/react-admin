import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import _ from 'lodash'
import BaseLayout from '@/layouts/BaseLayout'
import routes from '@/config/routes'

function getRoutes(routeTrees = []) {
  let routeList = []
  routeTrees.forEach(item => {
    if (Array.isArray(item.routes)) {
      routeList.push(getRoutes(item.routes))
    }
    routeList.push(_.pick(item, ['path', 'component']))
  })
  return routeList
}

function Router() {
  const routeList = getRoutes(routes)
  const BaseLayout = lazy(() => import('@/layouts/BaseLayout'))
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {routeList.map(item => {
            const Component = lazy(() => import(item.component))
            return (
              <Route
                exact
                path={item.path}
                render={() => {
                  if (item.layout === 'BaseLayout') {
                    return (
                      <BaseLayout>
                        <Component />
                      </BaseLayout>
                    )
                  } else {
                    return <Component />
                  }
                }}
              />
            )
          })}
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Router
