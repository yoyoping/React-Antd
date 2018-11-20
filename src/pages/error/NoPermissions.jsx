/**
 * 权限不足展示页面
 */
import React, { Component } from 'react';
import { Button } from 'antd'
import './error.scss'

class NoPermissions extends Component {
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
        <p className="pic noP"></p>
        <div className="action">
          <h2>403</h2>
          <p>抱歉，您无权访问该页面</p>
          <Button href="/">返回首页</Button>
          <Button type="primary" onClick={this.goback} className="goback">返回上一页</Button>
        </div>
      </div>
    )
  }
}

export default NoPermissions
