import Axios from 'axios'
// action也是函数
export function setPageTitle (data) {
  return (dispatch, getState) => {
    console.log(getState)
    dispatch({ type: 'SET_PAGE_TITLE', data: data })
  }
}

// 异步action
export function setInfoList () {
  return (dispatch, getState) => { 
    Axios.get('http://120.78.128.49:9527/banner').then(res => {
      // return res.banners
      dispatch({ type: 'SET_INFO_LIST', data: res.data.banners })
    }).catch(err => {
      console.log(err)
    })
  }
}

// 修改菜单列表
export function setMenulist (data) {
  return (dispatch, getState) => {
    console.log(getState)
    dispatch({ type: 'SET_MENULIST', data: data})
  }
}