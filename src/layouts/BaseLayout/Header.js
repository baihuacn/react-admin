import React, { PureComponent } from 'react'
import { Icon } from 'antd'

class Header extends PureComponent {
  render() {
    const { style } = this.props
    return (
      <div style={style}>
        <Icon type="menu-fold" />
        <div>
          <Icon type="search" />
        </div>
      </div>
    )
  }
}

export default Header
