import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Sider from './Sider'
import Header from './Header'
import styles from './BaseLayout.module.less'

function BaseLayout(props) {
  const { token, collapsed, history } = props
  if (!token) {
    history.push('/login')
    return null
  }
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
        <div className={styles.content}>{props.children}</div>
      </div>
    </>
  )
}

export default withRouter(
  connect(state => {
    const {
      account: { token },
      sider: { collapsed },
    } = state
    return { token, collapsed }
  })(BaseLayout),
)
