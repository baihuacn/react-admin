import React, { PureComponent } from 'react'
import { Icon, Avatar, Dropdown, Menu, Badge } from 'antd'
import Fullscreen from './Fullscreen'
import styles from './Header.module.less'
import avatar from '@/assets/images/avatar.svg'

const { Item: MenuItem, Divider: MenuDivider } = Menu

class Header extends PureComponent {
  state = {
    avatar,
    name: '白桦'
  }

  render() {
    const { className } = this.props
    const { avatar, name } = this.state
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
        <MenuItem>
          <Icon type="logout" />
          退出登录
        </MenuItem>
      </Menu>
    )
    return (
      <div className={className}>
        <Icon type="menu-fold" className={styles.fold} />
        <div className={styles.userInfo}>
          <Badge count={0} title="未读消息" offset={[-8, 12]}>
            <Icon type="bell" className={styles.bell} />
          </Badge>
          <Dropdown overlay={dropDownMenu} placement="bottomRight">
            <div className={styles.avatar}>
              <Avatar src={avatar} size="small" alt="头像" className={styles.img} />
              <span className={styles.name}>{name}</span>
            </div>
          </Dropdown>
          <Fullscreen className={styles.fullscreen} />
        </div>
      </div>
    )
  }
}

export default Header
