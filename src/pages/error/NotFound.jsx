/**
 * 404页面未找到展示页面
 */
import React, { Component } from 'react';
import { Button } from 'antd'

class NotFound extends Component {
  render () {
    return (
      <div className="error">
        <p className="pic noF"></p>
        <div className="action">
          <h2>404</h2>
          <p>抱歉，您访问的页面不存在</p>
          <Button type="primary" href="/">返回首页</Button>
        </div>
      </div>
    )
  }
}

export default NotFound
