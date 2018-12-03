import React, { Component } from 'react';
import { Form, Icon, Input, Button, DatePicker  } from 'antd';
import Table from './Table'
import SetUser from './SetUser'

const FormItem = Form.Item;
const { RangePicker } = DatePicker;

class UserList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }

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

  /**
   * 关闭修改管理员弹窗
   * @memberof UserList
   */
  action = (flag) => {
    this.setState({
      visible: flag
    })
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
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入管理员名称" />
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
          <FormItem className="rg">
            <Button type="primary" onClick={() => this.action(true)}>管理员修改</Button>
          </FormItem>
        </Form>
        <br/>
        <Table />
        <SetUser visible={this.state.visible} close={this.action}></SetUser>
      </div>
    );
  }
}

export default Form.create()(UserList)
