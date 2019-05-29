/**
 * @file 计算工具
 */
/**
 * @description 四舍五入，保留小数位
 */
export function toFixed(value, digit) {
  if (!value && value !== 0) {
    return value
  }
  try {
    const multiple = Math.pow(10, digit)
    const diffValue = value - 0 >= 0 ? 0.5 : -0.5
    const processedValue = parseInt(value * multiple + diffValue, 10) / multiple
    return processedValue.toFixed(digit)
  } catch (err) {
    console.error('value:', value, 'error:', err)
    return value
  }
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
