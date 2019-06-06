/**
 * @file 计算工具
 */
/**
 * @description 四舍五入，保留小数位
 */
export function toFixed(value, digit) {
  if (typeof value !== 'number') {
    throw new Error('数据类型错误：参数value应该是number')
  }
  if (typeof digit !== 'number') {
    throw new Error('数据类型错误：参数digit应该是number')
  }
  const multiple = Math.pow(10, digit)
  const diffValue = value >= 0 ? 0.5 : -0.5
  const processedValue = parseInt(value * multiple + diffValue, 10) / multiple
  return processedValue.toFixed(digit)
}
/**
 * @description 判断输入的字符串是数学数字，string is number
 */
export function isSiN(value) {
  const number = Number(value)
  if (typeof value === 'string' && (number || number === 0)) {
    return true
  }
  return false
}
