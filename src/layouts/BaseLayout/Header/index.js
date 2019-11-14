/**
 * @file 基础布局 > 顶部导航栏组件
 */
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Icon, Avatar, Dropdown, Menu, Badge } from 'antd'
import Fullscreen from './Fullscreen'
import BreadcrumbBar from './BreadcrumbBar'
import { fetchLogout } from '@/apis/account'
import { updateAccountToken } from '@/store/actions/account'
import { updateBaseLayoutCollapsed, updateBaseLayoutOpenKeys } from '@/store/actions/baseLayout'
import styles from './Header.module.less'

const { Item: MenuItem, Divider: MenuDivider } = Menu

class Header extends PureComponent {
  handleLogout = async () => {
    const { dispatch } = this.props
    await fetchLogout()
    const token = ''
    dispatch(updateAccountToken(token))
  }

  handleToggleCollapsed = () => {
    const { collapsed, dispatch } = this.props
    if (!collapsed) {
      dispatch(updateBaseLayoutOpenKeys([]))
    }
    dispatch(updateBaseLayoutCollapsed(!collapsed))
  }

  render() {
    const { className, style, avatar, name, collapsed } = this.props
    const dropDownMenu = (
      <Menu>
        <MenuItem>
          <Icon type="user" />
          个人中心
        </MenuItem>
        <MenuItem>
          <Icon type="setting" />
          个人设置
        </MenuItem>
        <MenuDivider />
        <MenuItem onClick={this.handleLogout}>
          <Icon type="logout" />
          退出登录
        </MenuItem>
      </Menu>
    )
    const foldType = collapsed ? 'menu-unfold' : 'menu-fold'
    return (
      <div className={className} style={style}>
        <div className={styles.breadcrumbBar}>
          <Icon type={foldType} className={styles.fold} onClick={this.handleToggleCollapsed} />
          <BreadcrumbBar />
        </div>
        <div className={styles.userInfo}>
          <Badge count={0} title="未读消息" offset={[-8, 12]}>
            <Icon type="bell" className={styles.bell} />
          </Badge>
          <Dropdown overlay={dropDownMenu} placement="bottomRight" trigger={['click']}>
            <div className={styles.avatar}>
              <Avatar icon="user" src={avatar} size="small" alt="头像" className={styles.img} />
              <span className={styles.name}>{name}</span>
            </div>
          </Dropdown>
          <Fullscreen className={styles.fullscreen} />
        </div>
      </div>
    )
  }
}

export default connect(state => {
  const {
    account: {
      userInfo: { name, avatar },
    },
    baseLayout: { collapsed },
  } = state
  return { name, avatar, collapsed }
})(Header)
