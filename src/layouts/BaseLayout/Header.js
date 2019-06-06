import React, { PureComponent } from 'react'
import { Icon } from 'antd'

class Header extends PureComponent {
  render() {
    const { className } = this.props
    return (
      <div className={className}>
        <Icon type="menu-fold" />
        <div>
          <Icon type="search" />
        </div>
      </div>
    )
  }
}

export default Header
