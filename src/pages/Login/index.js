import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Form, Input, Button, Tooltip, Icon } from 'antd'
import { fetchLogin, fetchUserInfo, fetchMenus } from '@/apis/account'
import { updateAccountToken, updateAccountInfo, updateAccountMenus } from '@/store/actions/account'
import styles from './Login.module.less'

const { Item: FormItem } = Form

class Login extends PureComponent {
  handleSubmit = e => {
    const {
      form: { validateFields },
      dispatch,
      history,
    } = this.props
    e.preventDefault()
    validateFields(async (err, values) => {
      if (!err) {
        const { token } = await fetchLogin(values)
        dispatch(updateAccountToken(token))
        const [userInfo, menus] = await Promise.all([fetchUserInfo(), fetchMenus()])
        dispatch(updateAccountInfo(userInfo))
        dispatch(updateAccountMenus(menus))
        history.push('/')
      }
    })
  }

  render() {
    const {
      form: { getFieldDecorator },
    } = this.props

    return (
      <>
        <div className={styles.background} />
        <Form onSubmit={this.handleSubmit} className={styles.root}>
          <div className={styles.title}>React Admin</div>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '输入你的账号名称！' }],
            })(
              <Input
                size="large"
                placeholder="账号名称"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={
                  <Tooltip title="admin">
                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '输入你的账号密码！' }],
            })(
              <Input
                size="large"
                placeholder="账号密码"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={
                  <Tooltip title="888888">
                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />,
            )}
          </FormItem>
          <FormItem>
            <Button size="large" type="primary" htmlType="submit" className={styles.submit}>
              登录
            </Button>
          </FormItem>
        </Form>
      </>
    )
  }
}

export default withRouter(connect()(Form.create({ name: 'login' })(Login)))
