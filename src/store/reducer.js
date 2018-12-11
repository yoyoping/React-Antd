// 工具函数，用于组织多个reducer,并返回reducer集合
import { combineReducers } from 'redux'
// 默认值
import defaultState from './state.js'

// 一个reducer就是一个函数

// reducer Api
const reducerslist = [
  { title: '修改标题（测试）', state: 'pageTitle', actionType: 'SET_PAGE_TITLE' },
  { title: '获取banner（测试）', state: 'infoList', actionType: 'SET_INFO_LIST' },
  { title: '设置菜单列表', state: 'menulist', actionType: 'SET_MENULIST' }
]

let reducers = {}
reducerslist.forEach(item => {
  reducers[item.state] = (state = defaultState[item.state], action) => {
    switch (action.type) {
      case item.actionType:
        return action.data
      default:
        return state
    }
  }
})

export default combineReducers({
  ...reducers
})
