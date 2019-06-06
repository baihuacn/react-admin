import React from 'react'
import Sider from './Sider'
import Header from './Header'
import styles from './BaseLayout.module.less'

function BaseLayout(props) {
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

export default BaseLayout
