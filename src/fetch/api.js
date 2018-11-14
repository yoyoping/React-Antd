// 集中管理请求地址，所有的接口地址：
// 1.整个应用用到了哪些接口一目了然
// 2.接口地址可能变化，方便管理

const Api = {
  'FFT01': { title: '管理员查询今天建议分红', url: '/sys/selectEsmatBonusPerDay' },
  'FFT02': { title: '管理员查询建议/真实分红历史记录', url: '/sys/selectEsmatBonusDays' }
}

export default Api;
