import React, { PureComponent } from 'react'
import { Menu, Icon } from 'antd'
import styles from './Sider.module.less'

const { SubMenu, Item: MenuItem } = Menu

class Sider extends PureComponent {
  state = {
    collapsed: false,
    menus: [
      {
        icon: 'dashboard',
        name: '工作台',
        path: '/'
      },
      {
        icon: 'form',
        name: '表单页',
        path: '/form',
        subMenus: [
          {
            name: '基础表单',
            path: '/form/basic-form'
          },
          {
            name: '分布表单',
            path: '/form/step-form'
          }
        ]
      }
    ]
  }
  renderMenus = menus => {
    return menus.map(item => {
      if (Array.isArray(item.subMenus)) {
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
          {item.icon && <Icon type={item.icon} />}
          <span>{item.name}</span>
        </MenuItem>
      )
    })
  }
  render() {
    const { className } = this.props
    const { collapsed, menus } = this.state
    return (
      <div className={className}>
        <div className={styles.logo}>React Admin</div>
        <Menu mode="inline" theme="dark" inlineCollapsed={collapsed}>
          {this.renderMenus(menus)}
        </Menu>
      </div>
    )
  }
}

export default Sider