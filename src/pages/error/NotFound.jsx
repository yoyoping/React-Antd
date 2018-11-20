/**
 * 404页面未找到展示页面
 */
import React, { Component } from 'react';
import { Button } from 'antd'

class NotFound extends Component {

  /**
   * 返回上一页
   * @memberof NoPermissions
   */
  goback = () => {
    window.history.back(-1)
  }

  render () {
    return (
      <div className="error">
        <p className="pic noF"></p>
        <div className="action">
          <h2>404</h2>
          <p>抱歉，您访问的页面不存在</p>
          <Button href="/">返回首页</Button>
          <Button type="primary" onClick={this.goback} className="goback">返回上一页</Button>
        </div>
      </div>
    )
  }
}

export default NotFound
