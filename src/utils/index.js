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
 * 转eth
 * @param {Number} value 需要被转换的值
 * @param {Number} num 需要保留的小数位数，默认5位小数
 */
export const toETH = (value, num = 5) => {
  return Math.floor(value / 1e18 * Math.pow(10, num)) / Math.pow(10, num)
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
