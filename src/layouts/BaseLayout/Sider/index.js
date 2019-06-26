import React, { PureComponent } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Icon } from 'antd'
import { updateBaseLayoutSelectedKeys, updateBaseLayoutOpenKeys } from '@/store/actions/baseLayout'
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
  componentDidMount() {
    const {
      menus,
      location: { pathname },
      dispatch,
    } = this.props
    const found = menus.find(item => item.path === pathname)
    if (found) {
      const selectedKeys = [pathname]
      dispatch(updateBaseLayoutSelectedKeys(selectedKeys))
    }
  }
  handleSelect = ({ selectedKeys }) => {
    const { dispatch } = this.props
    dispatch(updateBaseLayoutSelectedKeys(selectedKeys))
  }
  handleOpenChange = openKeys => {
    const { dispatch } = this.props
    dispatch(updateBaseLayoutOpenKeys(openKeys))
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
    const { style, className, collapsed, menus, openKeys, selectedKeys } = this.props
    const menuTrees = getMenuTrees(menus)
    const title = collapsed ? 'RA' : 'React Admin'
    return (
      <div className={className} style={style}>
        <div className={styles.logo}>{title}</div>
        <Menu
          openKeys={openKeys}
          selectedKeys={selectedKeys}
          onSelect={this.handleSelect}
          onOpenChange={this.handleOpenChange}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
        >
          {this.renderMenus(menuTrees)}
        </Menu>
      </div>
    )
  }
}

export default withRouter(
  connect(state => {
    const {
      account: { menus },
      baseLayout: { collapsed, openKeys, selectedKeys },
    } = state
    return { collapsed, menus, openKeys, selectedKeys }
  })(Sider),
)
