import React, { Component } from 'react';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import './layout.scss';
import Mine from '@components/mine/Mine';

// import PurchaseList from '@pages/purchaseList/PurchaseList'
// import UserList from '@pages/user/UserList'
// import UserDetail from '@pages/userDetail/UserDetail'
import NotFound from '@pages/error/NotFound'
import NoPermissions from '@pages/error/NoPermissions'

import RouterMap from '@/router/Router'
import Cookies from 'js-cookie'
import PrivateRoute from '@/components/privateRoute/PrivateRoute'

const { Header, Sider, Content } = Layout;


class Layout_ extends Component {
  constructor (props) {
    super(props)
    this.state = {
      collapsed: false,
      currentMenu: [''] // 当前选中菜单数组
    };
  }
  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  
  componentWillMount () {
    /**
     * 给当前菜单赋值当前选中要在渲染完成之前
     */
    this.setCurrentMenu()
  }

  /**
   * 设置当前选中菜单
   * @memberof Layout_
   */
  setCurrentMenu = () => {
    const NAME = this.props.location.pathname.split('/')
    let current = NAME[NAME.length - 1]
    if (NAME.includes('userDetail')) {
      current = 'purchaseList'
    }
    this.setState({
      currentMenu: [current]
    })
  }

  render() {
    const token = Cookies.get('token') // 获取当前是否登录
    const auth = localStorage.getItem('auth') // 获取当前是否登录

    return (
      <Layout className="layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">LOGO</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.currentMenu}>
            <Menu.Item key="purchaseList">
              <Link to='/purchaseList'>
                <Icon type="bars" />
                <span>购买记录</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="user">
              <Link to='/user'>
                <Icon type="user" />
                <span>管理员</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Row type="flex" justify="space-between">
              <Col span={2}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
              </Col>
              <Col span={2}>
                <Mine></Mine>
              </Col>
            </Row>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Switch>
              {
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
                        if (token) { // 已登录
                          if (!item.auth) { // 没有权限限制
                            return <item.component {...props} />
                          } else { // 有权限限制
                            if (item.auth.includes(auth)) { // 拥有权限
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
              {/* <PrivateRoute></PrivateRoute> */}
              {/* 未拥有权限路由 */}
              <Route path="/noPermissions" exact component={NoPermissions} />
              {/* 404 页面未找到路由 */}
              <Route component={NotFound} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Layout_
