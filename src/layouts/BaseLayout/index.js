import React from 'react'
import Sider from './Sider'
import Header from './Header'

const style = {
  sider: { position: 'fixed', width: '224px', height: '100vh', backgroundColor: '#001529' },
  main: { height: '100vh', marginLeft: '224px' },
  header: {
    position: 'fixed',
    height: '40px',
    width: 'calc(100% - 224px)',
    boxShadow: '0 1px 4px rgba(0,21,41,.08)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  content: { paddingTop: '40px' }
}

function BaseLayout(props) {
  return (
    <>
      <Sider style={style.sider} />
      <div style={style.main}>
        <Header style={style.header} />
        <div style={style.content}>{props.children}</div>
      </div>
    </>
  )
}

export default BaseLayout
