import React from 'react';
import { Table, Tag } from 'antd';
import { toETH } from '@utils'

const columns = [{
  width: 60,
  align: 'center',
  dataIndex: 'id',
  render: (text, record, index) => <span>{index + 1}</span>
},
{
  title: '管理员',
  dataIndex: 'user',
  align: 'center',
  render: (record) => <Tag color="blue">{record}</Tag>
}, {
  title: '起始日期',
  align: 'center',
  dataIndex: 'strDate',
}, {
  title: '结束日期',
  align: 'center',
  dataIndex: 'endDate',
}, {
  title: '应付金额差值',
  dataIndex: 'amount',
  align: 'center',
  render: record => <span className="blue">{toETH(record)}</span>,
}];

const data = [
  {
    id: 1,
    strDate: '2012-12-12',
    endDate: '2012-12-12',
    user: 'zhangping',
    amount: 3125424554554545555
  },
  {
    id: 2,
    strDate: '2012-12-12',
    endDate: '2012-12-12',
    user: 'zhangping',
    amount: 3125424554554545555
  },
  {
    id: 3,
    strDate: '2012-12-12',
    endDate: '2012-12-12',
    user: 'zhangping',
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

function Table_ ()  {
  return (
    <Table bordered={true} rowClassName={setClassName} columns={columns} dataSource={data} rowKey={record => record.id} />
  )
}

export default Table_