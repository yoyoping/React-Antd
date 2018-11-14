// 工具函数，用于组织多个reducer,并返回reducer集合
import { combineReducers } from 'redux'
// 默认值
import defaultState from './state.js'

// 一个reducer就是一个函数

function pageTitle (state = defaultState.pageTitle, action) {
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return action.data
    default: 
      return state
  }
}

function infoList (state = defaultState.infoList, action) {
  switch (action.type) {
    case 'SET_INFO_LIST':
      return action.data
    default:
      return state
  }
}

export default combineReducers({
  pageTitle,
  infoList
})
