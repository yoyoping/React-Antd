import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css'
import Layout from '@pages/layout/Layout';
import Login from '@pages/login/Login';
import history from '@utils/history'

// Provider是react-redux两个核心工具之一，作用：将store传递到每个项目中的组件中
// 第二个工具是connect，稍后会作介绍
import { Provider } from 'react-redux'
// 引入创建好的store实例
import store from './store/index.js'

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Router history={history}>
          <div className="App">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/" component={Layout} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
