/**
 * 登录组件
 */
import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import './login.scss';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
// connect方法的作用：将额外的props传递给组件，并返回新的组件，组件在该过程中不会受到影响
import { connect } from 'react-redux'
// 引入action
import { setMenulist } from '@store/actions.js'

const FormItem = Form.Item;

// 菜单
const menulist = [
  {
    name: 'purchaseList',
    path: '/purchaseList',
    icon: 'bars',
    text: '购买记录'
  },
  {
    name: 'user',
    path: '/user',
    icon: 'user',
    text: '管理员'
  },
  {
    name: 'learn',
    path: '/learn',
    icon: 'edit',
    text: '学习测试'
  }
]

class NormalLoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // 设置token就代表已经登录
        Cookies.set('token', 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')
        // 设置你的权限
        localStorage.setItem('auth', values.username)
        localStorage.setItem('menulist', JSON.stringify(menulist))
        // redux设置菜单
        this.props.setMenulist(menulist)
        this.props.history.push('/')
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
              {getFieldDecorator('username', {
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

NormalLoginForm.propTypes = {
  history: PropTypes.object.isRequired
}

const Login = Form.create()(NormalLoginForm);

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  return {
    menulist: state.menulist
  }
}
// mapDispatchToProps：将dispatch映射到组件的props中
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setMenulist (data) {
        dispatch(setMenulist(data))
    }
  }
}
export default connect (mapStateToProps, mapDispatchToProps)(Login) 
