import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Icon, Avatar, Dropdown, Menu, Badge } from 'antd'
import Fullscreen from './Fullscreen'
import { fetchUserInfo, fetchLogout } from '@/apis/account'
import { updateAccountInfo } from '@/store/actions/account'
import { updateSiderCollapsed } from '@/store/actions/sider'
import styles from './Header.module.less'

const { Item: MenuItem, Divider: MenuDivider } = Menu

class Header extends PureComponent {
  async componentDidMount() {
    const { token, dispatch } = this.props
    const params = { token }
    const userInfo = await fetchUserInfo(params)
    dispatch(updateAccountInfo(userInfo))
  }

  handleLogout = async () => {
    const { token, dispatch } = this.props
    const params = { token }
    await fetchLogout(params)
    dispatch(updateAccountInfo({ token: '' }))
  }

  handleToggleCollapsed = () => {
    const { collapsed, dispatch } = this.props
    dispatch(updateSiderCollapsed(!collapsed))
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
        <Icon type={foldType} className={styles.fold} onClick={this.handleToggleCollapsed} />
        <div className={styles.userInfo}>
          <Badge count={0} title="未读消息" offset={[-8, 12]}>
            <Icon type="bell" className={styles.bell} />
          </Badge>
          <Dropdown overlay={dropDownMenu} placement="bottomRight">
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
    account: { token, name, avatar },
    sider: { collapsed },
  } = state
  return { token, name, avatar, collapsed }
})(Header)
