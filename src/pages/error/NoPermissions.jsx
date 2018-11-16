/**
 * 权限不足展示页面
 */
import React, { Component } from 'react';
import { Button } from 'antd'
import './error.scss'

class NoPermissions extends Component {
  render () {
    return (
      <div className="error">
        <p className="pic noP"></p>
        <div className="action">
          <h2>403</h2>
          <p>抱歉，您无权访问该页面</p>
          <Button type="primary" href="/">返回首页</Button>
        </div>
      </div>
    )
  }
}

export default NoPermissions
