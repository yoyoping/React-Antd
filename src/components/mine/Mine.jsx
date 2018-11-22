/**
 * 个人信息操作的组件，头像、昵称、退出登录
 */
import React, { Component } from 'react';
import { Menu, Dropdown, Icon, Avatar, Modal } from 'antd';
import './mine.scss'
import ChangePwd from '@components/changePwd/ChangePwd'
import Cookies from 'js-cookie'
import PropTypes from 'prop-types';

const confirm = Modal.confirm;

class Mine extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }
  
  onClick = ({ key }) => {
    if(key === 'logout') {
      confirm({
        title: '退出提示',
        content: '您确定退出当前账号？',
        onOk: () => {
          localStorage.removeItem('auth')
          Cookies.remove('token')
          this.props.history.push('/login')
        }
      })
    } else if (key === 'changePwd') {
      this.action(true)
    }
  };

  action = (flag) => {
    this.setState({
      visible: flag
    })
  }

  render () {
    const menu = (
      <Menu onClick={this.onClick}>
        <Menu.Item key="changePwd">
          <span>修改密码</span>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
        <span>退出登录</span>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className="mine">
        <Dropdown overlay={menu} placement="bottomRight">
          <div className="ant-dropdown-link">
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className="avatar" />
            管理员 <Icon type="down" />
          </div>
        </Dropdown>
        <ChangePwd visible={this.state.visible} close={this.action}></ChangePwd>
      </div>
    )
  }
}

// props验证
Mine.propTypes = {
  history: PropTypes.object.isRequired
}

export default Mine
