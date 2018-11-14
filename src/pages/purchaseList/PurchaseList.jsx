import React, { Component } from 'react';
import { Form, Icon, Input, Button, DatePicker  } from 'antd';
import Table from './Table'

const FormItem = Form.Item;
const { RangePicker } = DatePicker;

class PurchaseList extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  /**
   * 时间改变
   * @memberof PurchaseList
   */
  onChange = (date, dateString) => {
    console.log(date, dateString);
  }

  render() {
    const { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const userNameError = isFieldTouched('date') && getFieldError('date');
    const passwordError = isFieldTouched('name') && getFieldError('name');
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSubmit}>
          <FormItem
            validateStatus={userNameError ? 'error' : ''}
            help={userNameError || ''}
          >
            {getFieldDecorator('date')(
              <RangePicker onChange={this.onChange} placeholder={["开始时间", "结束时间"]} />
            )}
          </FormItem>
          <FormItem
            validateStatus={passwordError ? 'error' : ''}
            help={passwordError || ''}
          >
            {getFieldDecorator('name')(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入购买者名称" />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              htmlType="submit"
            >
              查询
            </Button>
          </FormItem>
        </Form>
        <br/>
        <Table></Table>
      </div>
    );
  }
}

export default Form.create()(PurchaseList)
