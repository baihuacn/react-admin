import React, { PureComponent } from 'react'
import { Icon } from 'antd'
import screenfull from 'screenfull'

class Fullscreen extends PureComponent {
  state = {
    isFullscreen: false
  }

  handleToggleFullscreen = () => {
    const { isFullscreen } = screenfull
    if (screenfull.enabled) {
      screenfull.toggle()
      this.setState({ isFullscreen: !isFullscreen })
    }
  }

  render() {
    const { className } = this.props
    const { isFullscreen } = this.state
    const iconType = isFullscreen ? 'fullscreen-exit' : 'fullscreen'
    return <Icon className={className} type={iconType} onClick={this.handleToggleFullscreen} />
  }
}

export default Fullscreen
