import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Sider from './Sider'
import Header from './Header'
import styles from './BaseLayout.module.less'

function BaseLayout(props) {
  const { token, history } = props
  if (!token) {
    history.push('/login')
    return null
  }
  return (
    <>
      <Sider className={styles.sider} />
      <div className={styles.main}>
        <Header className={styles.header} />
        <div className={styles.content}>{props.children}</div>
      </div>
    </>
  )
}

export default withRouter(
  connect(state => {
    const {
      account: { token },
    } = state
    return { token }
  })(BaseLayout),
)
