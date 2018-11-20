/**
 * 只针对于输入antd的form做的valide验证
 */
import * as verify from '@utils/check'
/**
   * 验证密码
   *
   * @memberof DailyIncome
   */
export const isPwd = (rule, value, callback) => {
  if (value && !verify.validsp_(value)) {
    callback('6-20个字符（数字、26个英文字母 . - _）')
  }
  // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
  callback()
}
