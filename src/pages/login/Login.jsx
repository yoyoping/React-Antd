import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './login.scss';
const FormItem = Form.Item;

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.history.push('/purchaseList')
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="Login">
        <div className="login-form">
          <h1>登录</h1>
          <Form onSubmit={this.handleSubmit}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入你的账号！' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入你的密码！' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

const Login = Form.create()(NormalLoginForm);

export default Login 
