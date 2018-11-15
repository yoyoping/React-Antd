import React, { Component } from 'react';
import { Table } from 'antd';
import { toETH } from '@utils'

const columns = [{
  width: 60,
  align: 'center',
  dataIndex: 'id',
  render: (text, record, index) => <span>{index + 1}</span>
},
{
  title: '时间',
  dataIndex: 'date',
  render: text => <span>{text}</span>,
  align: 'center'
}, {
  title: '购买数量',
  align: 'center',
  dataIndex: 'number',
}, {
  title: '购买金额',
  dataIndex: 'amount',
  align: 'center',
  render: record => <span className="blue">{toETH(record)}</span>,
}];

const data = [
  {
    id: 1,
    date: '2012-12-12',
    user: 'zhangping',
    number: 2,
    amount: 3125424554554545555
  },
  {
    id: 2,
    date: '2012-12-12',
    user: 'zhangping',
    number: 2,
    amount: 3125424554554545555
  },
  {
    id: 3,
    date: '2012-12-12',
    user: 'zhangping',
    number: 2,
    amount: 3125424554554545555
  }
];

class UserDetail extends Component {

  componentDidMount () {
    console.log(this.props)
  }

  /**
   * 给偶数行设置样式
   * @memberof UserDetail
   */
  setClassName = (record, index) => {
    if (index % 2 === 0) {
      return 'table-even'
    }
  }

  render () {
    return (
      <div>
        <p>购买者： 阿斯顿发生过</p>
        <br/>
        <Table bordered={true} rowClassName={this.setClassName} columns={columns} dataSource={data} rowKey={record => record.id} />
      </div>
    )
  }
}

export default UserDetail
