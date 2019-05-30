/**
 * @description 通过customize-cra 配合react-app-rewired 覆盖create-react-app 的webpack 配置
 */
const { override, useBabelRc, useEslintRc, addWebpackAlias } = require('customize-cra')
const path = require('path')

module.exports = override(
  useBabelRc(),
  useEslintRc(),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  })
)
