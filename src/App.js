import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css'
import Layout from '@pages/layout/Layout';
import Login from '@pages/login/Login';
import history from '@utils/history'
import NotFound from '@pages/error/NotFound'

// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
// 第二个工具是connect，稍后会作介绍
import { Provider } from 'react-redux'
// 引入创建好的store实例
import store from './store/index.js'
// import Cookies from 'js-cookie'
// 受保护页面拦截器，在本级页面进行拦截，如果发现未登录，则跳转到登录页面，否则允许进入隐私页面
// const ProtectPage = props => {
//   // 如果没有登录
//   if (!Cookies.get('token')) {
//       return <Redirect to="/login"></Redirect>
//   } else {
//       return <Layout {...props}/>
//   }
// }

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Router history={history}>
          <div className="App">
            <Switch>
              <Route path="/login" component={Login} />
              {/* 使用 component={ProtectPage} 将会拦截全部Layput下面的路由 */}
              {/* <Route path="/" component={ProtectPage} /> */} 
              <Route path="/" component={Layout} />
              {/* 404 页面未找到路由 */}
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
