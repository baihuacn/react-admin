import React, { PureComponent } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Icon } from 'antd'
import { fetchMenus } from '@/apis/baseLayout'
import { updateBaseLayoutMenus } from '@/store/actions/baseLayout'
import styles from './Sider.module.less'

const { SubMenu, Item: MenuItem } = Menu

function getMenuTrees(menus, pid = -1) {
  let targetMenus = []
  for (const index in menus) {
    const menu = menus[index]
    if (menu.pid === pid) {
      const remainingMenus = [...menus]
      remainingMenus.splice(index, 1)
      targetMenus.push({ ...menu, subMenus: getMenuTrees(remainingMenus, menu.id) })
    }
  }
  return targetMenus
}

class Sider extends PureComponent {
  async componentDidMount() {
    const { dispatch } = this.props
    const menus = await fetchMenus()
    // dispatch(updateBaseLayoutMenus(menus))
  }
  renderMenus = menuTrees => {
    return menuTrees.map(item => {
      if (item.subMenus.length > 0) {
        return (
          <SubMenu
            key={item.path}
            title={
              <span>
                {item.icon && <Icon type={item.icon} />}
                <span>{item.name}</span>
              </span>
            }
          >
            {this.renderMenus(item.subMenus)}
          </SubMenu>
        )
      }
      return (
        <MenuItem key={item.path}>
          <Link to={item.path}>
            {item.icon && <Icon type={item.icon} />}
            <span>{item.name}</span>
          </Link>
        </MenuItem>
      )
    })
  }

  render() {
    const { style, className, collapsed, menus, location } = this.props
    const menuTrees = getMenuTrees(menus)
    const title = collapsed ? 'RA' : 'React Admin'
    const selectedMenus = [location.pathname]
    return (
      <div className={className} style={style}>
        <div className={styles.logo}>{title}</div>
        <Menu selectedKeys={selectedMenus} mode="inline" theme="dark" inlineCollapsed={collapsed}>
          {this.renderMenus(menuTrees)}
        </Menu>
      </div>
    )
  }
}

export default withRouter(
  connect(state => {
    const {
      baseLayout: { collapsed, menus },
    } = state
    return { collapsed, menus }
  })(Sider),
)
