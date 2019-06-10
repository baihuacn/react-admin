/**
 * @description 通过customize-cra 配合react-app-rewired 覆盖create-react-app 的webpack 配置
 */
const { override, useBabelRc, useEslintRc, addWebpackAlias, addLessLoader } = require('customize-cra')
const path = require('path')

module.exports = override(
  useBabelRc(),
  useEslintRc(),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src')
  }),
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    localIdentName: '[name]__[local]--[hash:base64:5]'
  })
)
