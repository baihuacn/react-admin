import React, { PureComponent } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { Breadcrumb } from 'antd'
import routes from '@/configs/routes'

const { Item: BreadcrumbItem } = Breadcrumb

class BreadcrumbBar extends PureComponent {
  render() {
    const { menus, location } = this.props
    let breadcrumbNameMap = {}
    menus.forEach(item => {
      if (item.path && item.name) {
        breadcrumbNameMap[item.path] = { name: item.name }
      }
    })
    routes.forEach(item => {
      if (item.path && item.name) {
        if (breadcrumbNameMap[item.path]) {
          breadcrumbNameMap[item.path].isRouter = true
        } else {
          breadcrumbNameMap[item.path] = { name: item.name }
        }
      }
    })
    const pathSnippets = location.pathname.split('/').filter(i => i)
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
      if (!breadcrumbNameMap[url]) {
        return null
      }
      const isRouter = breadcrumbNameMap[url].isRouter
      const isCurrent = pathSnippets.length - 1 === index
      const breadcrumbName = breadcrumbNameMap[url].name
      return (
        <BreadcrumbItem key={url}>
          {isRouter && !isCurrent ? <Link to={url}>{breadcrumbName}</Link> : breadcrumbName}
        </BreadcrumbItem>
      )
    })
    const breadcrumbItems = [
      <BreadcrumbItem key="/">
        <Link to="/">首页</Link>
      </BreadcrumbItem>,
    ].concat(extraBreadcrumbItems)

    return <Breadcrumb>{breadcrumbItems}</Breadcrumb>
  }
}

export default withRouter(
  connect(state => {
    const {
      account: { menus },
    } = state
    return { menus }
  })(BreadcrumbBar),
)
