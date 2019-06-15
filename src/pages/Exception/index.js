import React, { PureComponent } from 'react'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'
import { Button } from 'antd'
import styles from './Exception.module.less'

class Exception extends PureComponent {
  state = {
    description: {
      '404': '抱歉，你访问的页面不存在',
      '403': '抱歉，你的账号权限不能访问此页面',
    },
  }

  handleBack = () => {
    const { history } = this.props
    history.goBack()
  }

  render() {
    const { type } = this.props
    const { description } = this.state
    return (
      <div className={styles.root}>
        <div className={styles.title}>{type}</div>
        <div className={styles.description}>{description[type]}</div>
        <Button type="primary" onClick={this.handleBack}>
          返回上页
        </Button>
      </div>
    )
  }
}

Exception.propTypes = {
  type: PropTypes.oneOf(['404', '403']),
}

Exception.defaultProps = {
  type: '404',
}

export default withRouter(Exception)
