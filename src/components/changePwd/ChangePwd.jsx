/**
 * 修改密码弹窗组件
 */

import React, { Component } from 'react';
import { Modal, Form, Input, Icon } from 'antd';

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
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Modal
        title="修改密码"
        visible={this.props.visible}
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
                rules: [{ required: true, message: '请输入你的新密码！' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入新密码" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('cfPassword', {
                rules: [{ required: true, message: '请再次输入你的新密码！' }],
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

export default Form.create()(ChangePwd)
