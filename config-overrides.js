/**
 * @description 通过customize-cra 配合react-app-rewired 覆盖create-react-app 的webpack 配置
 */
const path = require('path')
const {
  override,
  useBabelRc,
  useEslintRc,
  addWebpackAlias,
  addLessLoader,
  overrideDevServer,
} = require('customize-cra')
const apiMocker = require('mocker-api')

const addMocker = () => config => {
  config.before = app => {
    apiMocker(app, path.resolve(__dirname, 'mock/index.js'))
  }
  return config
}

module.exports = {
  webpack: override(
    useBabelRc(),
    useEslintRc(),
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
    }),
    addLessLoader({
      javascriptEnabled: true,
      localIdentName: '[local]--[hash:base64:5]',
      modifyVars: {
        'primary-color': '#2f54eb',
      },
    }),
  ),
  devServer: overrideDevServer(addMocker()),
}
