/**
 * 常用函数工具
 */
import { notification  } from 'antd'

/**
 * Notification通知提醒框
 */
export const Notification = (type, msg, des) => {
  notification[type]({
    message: msg,
    description: des
  })
}

/**
 * 转为eth
 * @param {Number} value 要转为eth的值
 */
export const toETH = (value) => {
  const newValue = value / 1e18
  // 判断是否有超出小数，未超出就不截取，超出就截取
  if (newValue.toString().indexOf('.') !== -1) {
    if (newValue.toString().split('.')[1].length > 4) {
      return newValue.toFixed(4)
    } else {
      return newValue
    }
  } else {
    return newValue
  }
}

// 格式化时间 2018-05-19T08:04:52.000+0000 -> 2018-05-19 08:04:52
export const format = (time, type) => {
  const d = new Date(time);
  const newTime = {
    year: d.getFullYear(),
    month: (d.getMonth() + 1) < 10 ? `0${(d.getMonth() + 1)}` : (d.getMonth() + 1),
    day: d.getDate() < 10 ? `0${d.getDate()}` : d.getDate(),
    hour: d.getHours() < 10 ? `0${d.getHours()}` : d.getHours(),
    minutes: d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes(),
    second: d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds()
  }
  const { year, month, day, hour, minutes, second } = newTime
  if (type === 'all') {
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + second
  } else {
    return year + '-' + month + '-' + day
  }
}
