import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Breadcrumb } from 'antd'

const { Item: BreadcrumbItem } = Breadcrumb
const breadcrumbNameMap = {}

function BreadcrumbBar(props) {
  const { location } = props
  const pathSnippets = location.pathname.split('/').filter(i => i)
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return (
      <BreadcrumbItem key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </BreadcrumbItem>
    )
  })
  const breadcrumbItems = [
    <BreadcrumbItem key="/">
      <Link to="/">工作台</Link>
    </BreadcrumbItem>,
  ].concat(extraBreadcrumbItems)

  return <Breadcrumb>{breadcrumbItems}</Breadcrumb>
}

export default withRouter(BreadcrumbBar)
