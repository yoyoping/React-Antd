import Axios from 'axios'
// action也是函数
export function setPageTitle (data) {
  return (dispatch, getState) => {
    console.log(getState)
    dispatch({ type: 'SET_PAGE_TITLE', data: data })
  }
}

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
