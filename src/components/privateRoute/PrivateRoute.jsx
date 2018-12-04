/**
 * 通过判断登录、权限 动态生成Route
 */
import React, { Component } from 'react';
import Cookies from 'js-cookie'
import { Switch, Route, Redirect } from 'react-router-dom';
import RouterMap from '@/router/Router'
import NotFound from '@pages/error/NotFound'
import NoPermissions from '@pages/error/NoPermissions'

class PrivateRoute extends Component {
  constructor (props) {
    super(props)
    this.state = {
      token: Cookies.get('token'), // 获取当前是否登录
      auth: localStorage.getItem('auth') // 获取当前权限
    }
  }
  render () {
    return (
      <Switch>
        {
          // 动态生成路由
          RouterMap.map((item, index) => {
            return <Route
              key={index}
              path={item.path}
              exact
              render={props => { // 渲染route
                if (item.redirect) { // 如果设置了重定向那么重新跳转
                  return <Redirect
                    to={{
                      pathname: item.redirect,
                      state: { from: props.location }
                    }}
                  />
                }
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
        }
        {/* 未拥有权限路由 */}
        <Route path="/noPermissions" exact component={NoPermissions} />
        {/* 404 页面未找到路由 */}
        {
          // 判断没找到页面地址如果未登录就跳转到登录，如果已登录就404
          Cookies.get('token') ? <Route component={NotFound} /> : <Redirect to="/login" />
        }
      </Switch>
    )
  }
}

export default PrivateRoute
