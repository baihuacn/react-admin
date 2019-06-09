import React, { PureComponent } from 'react'
import { Form, Input, Button, Tooltip, Icon } from 'antd'
import styles from './Login.module.less'

const { Item: FormItem } = Form

class Login extends PureComponent {
  handleSubmit = e => {
    const {
      form: { validateFields }
    } = this.props
    e.preventDefault()
    validateFields((err, values) => {
      if (!err) {
        console.log(values)
      }
    })
  }

  render() {
    const {
      form: { getFieldDecorator }
    } = this.props

    return (
      <>
        <div className={styles.background} />
        <Form onSubmit={this.handleSubmit} className={styles.root}>
          <div className={styles.title}>React Admin</div>
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '输入你的账号名称！' }]
            })(
              <Input
                className={styles.input}
                size="large"
                placeholder="账号名称"
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={
                  <Tooltip title="Extra information">
                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '输入你的账号密码！' }]
            })(
              <Input
                className={styles.input}
                size="large"
                placeholder="账号密码"
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                suffix={
                  <Tooltip title="Extra information">
                    <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                  </Tooltip>
                }
              />
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

export default Form.create({ name: 'login' })(Login)
