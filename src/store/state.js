// 声明默认值
// 同步数据：pageTitle
// 异步数据：infoList（将来用异步接口获取）

let menulist = []
// 判断获取本地是否有存储menulist
let menuStorg = localStorage.menulist
if (menuStorg) {
  menulist = JSON.parse(menuStorg)
}

export default {
  pageTitle: '首页',
  infoList: [],
  menulist: menulist // 菜单列表
}
