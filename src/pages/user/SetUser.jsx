import React, { Component } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class SetUser extends Component {

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

    // Only show error after a field is touched.
    return (
      <Modal
        title="管理员修改"
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        maskClosable={false}
        destroyOnClose={true}
        footer={null}
      >
        <br/>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('address', {
              rules: [{ required: true, message: '输入新管理员地址！' }],
            })(
              <Input style={{width: '350px'}} placeholder="输入新管理员地址" />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
            >
              修改
            </Button>
          </FormItem>
        </Form>
        <br/>
      </Modal>
    );
  }
}

export default Form.create()(SetUser)
