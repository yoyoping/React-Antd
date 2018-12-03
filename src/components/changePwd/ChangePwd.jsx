/**
 * 修改密码弹窗组件
 */

import React, { Component } from 'react';
import { Modal, Form, Input, Icon } from 'antd';
import PropTypes from 'prop-types';
import { Notification } from '@utils';
import * as Valid from '@utils/valid.js';

const FormItem = Form.Item;

class ChangePwd extends Component {
  /**
   * 关闭弹窗
   * @memberof SetUser
   */
  handleCancel = (e) => {
    this.props.close(false)
  }

  /**
   * 提交
   * @memberof SetUser
   */
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        Notification('success', '成功提示', '密码修改成功！')
        this.handleCancel()
      }
    });
  }

  /**
   * 比较两次密码是否一样
   * @memberof ChangePwd
   */
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码输入不一致！');
    } else {
      callback();
    }
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { visible } = this.props
    return (
      <Modal
        title="修改密码"
        visible={visible}
        onOk={this.handleSubmit}
        onCancel={this.handleCancel}
        maskClosable={false}
        destroyOnClose={true}
        width={400}
      >
        <div style={{width: '80%',margin: '0 auto'}}>
          <Form>
            <FormItem>
              {getFieldDecorator('oldPassword', {
                rules: [{ required: true, message: '请输入你的旧密码！' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入你的旧密码" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [
                  { required: true, message: '请输入你的新密码！' },
                  { validator: Valid.isPwd }
                ],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入新密码" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('cfPassword', {
                rules: [
                  { required: true, message: '请再次输入你的新密码！' },
                  { validator: this.compareToFirstPassword }
                ],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请再次输入新密码" />
              )}
            </FormItem>
          </Form>
        </div>
      </Modal>
    );
  }
}

// props验证
ChangePwd.propTypes = {
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired
}

export default Form.create()(ChangePwd)
