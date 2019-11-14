/**
 * @file 基础布局组件根文件
 */
import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Sider from './Sider'
import Header from './Header'
import styles from './BaseLayout.module.less'

class BaseLayout extends PureComponent {
  componentDidMount() {
    this.handleCheckToken()
  }
  componentDidUpdate() {
    this.handleCheckToken()
  }
  handleCheckToken = () => {
    const { token, history } = this.props
    if (!token) {
      history.push('/login')
    }
  }
  render() {
    const { collapsed, children } = this.props
    let siderStyle = {}
    let mainStyle = {}
    let headerStyle = {}
    if (collapsed) {
      siderStyle = { width: '80px' }
      mainStyle = { marginLeft: '80px' }
      headerStyle = { width: 'calc(100% - 80px)' }
    }
    return (
      <>
        <Sider className={styles.sider} style={siderStyle} />
        <div className={styles.main} style={mainStyle}>
          <Header className={styles.header} style={headerStyle} />
          <div className={styles.content}>{children}</div>
        </div>
      </>
    )
  }
}

export default withRouter(
  connect(state => {
    const {
      account: { token },
      baseLayout: { collapsed },
    } = state
    return { token, collapsed }
  })(BaseLayout),
)
