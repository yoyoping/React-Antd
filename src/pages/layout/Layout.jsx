/**
 * Layout组件，包含除开登录其他所有路由
*/
import React, { Component } from 'react';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import './layout.scss';
import Mine from '@components/mine/Mine';
import PrivateRoute from '@/components/privateRoute/PrivateRoute'
import { connect } from 'react-redux'

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
    return (
      <Layout className="layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">LOGO</div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state.currentMenu}>
            {
              this.props.menulist.map(item => (
                <Menu.Item key={item.name}>
                  <Link to={item.name}>
                    <Icon type={item.icon} />
                    <span>{item.text}</span>
                  </Link>
                </Menu.Item>
              ))
            }
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
                <Mine />
              </Col>
            </Row>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, position: 'relative' }}>
            {/* 路由动态生成 */}
            <PrivateRoute />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// mapStateToProps：将state映射到组件的props中
const mapStateToProps = (state) => {
  return {
    menulist: state.menulist
  }
}

export default connect(mapStateToProps)(Layout_)
