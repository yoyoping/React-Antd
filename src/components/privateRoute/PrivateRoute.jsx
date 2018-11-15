import React, { Component } from 'react';
import Cookies from 'js-cookie'
import { Route, Redirect } from 'react-router-dom';
import RouterMap from '@/router/Router'

class PrivateRoute extends Component {
  constructor (props) {
    super(props)
    this.state = {
      token: Cookies.get('token'), // 获取当前是否登录
      auth: localStorage.getItem('auth') // 获取当前是否登录
    }
  }
  render () {
    return (
      // 动态生成路由
      RouterMap.map((item, index) => {
        return <Route
          key={index}
          path={item.path}
          exact
          render={props => { // 渲染route
            if (!item.needLogin) { // 不需要登录
              return <item.component {...props} />
            } else { // 需要登录
              if (this.state.token) { // 已登录
                if (!item.auth) { // 没有权限限制
                  return <item.component {...props} />
                } else { // 有权限限制
                  if (item.auth.includes(this.state.auth)) { // 拥有权限
                    return <item.component {...props} />
                  } else { // 未拥有权限
                    // 重定向到未拥有权限页
                    return <Redirect
                      to={{
                        pathname: '/noPermissions',
                        state: { from: props.location }
                      }}
                    />
                  }
                }
              } else { // 未登录
                // 重定向到登录页
                return <Redirect
                  to={{
                    pathname: '/login',
                    state: { from: props.location }
                  }}
                />
              }
            }
          }}
        />
      })
    )
  }
}

export default PrivateRoute
