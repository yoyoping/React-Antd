import React from 'react';
import { Table, Tag, Button } from 'antd';
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
  title: '购买者',
  dataIndex: 'user',
  align: 'center',
  render: (record) => <Tag color="blue">{record}</Tag>
}, {
  title: '购买数量',
  align: 'center',
  dataIndex: 'number',
}, {
  title: '购买金额',
  dataIndex: 'amount',
  align: 'center',
  render: record => <span className="blue">{toETH(record)}</span>,
}, {
  title: '操作',
  key: 'action',
  align: 'center',
  render: () => (
    <span>
      <Button type="primary" size="small" href="/userDetail/1234">详情</Button>
    </span>
  ),
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

  /**
   * 给偶数行设置样式
   * @memberof UserDetail
   */
  const setClassName = (record, index) => {
    if (index % 2 === 0) {
      return 'table-even'
    }
  }

function Table_ () {
  return (
    <Table bordered={true} rowClassName={setClassName} columns={columns} dataSource={data} rowKey={record => record.id} />
  )
}

export default Table_