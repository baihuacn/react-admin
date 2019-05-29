/**
 * @description 通过react-app-rewired 覆盖create-react-app 的webpack 配置
 */

const path = require('path')
const rewirePostcss = require('react-app-rewire-postcss')
const postcssNormalize = require('postcss-normalize')

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, 'src')
  }

  config = rewirePostcss(config, {
    plugins: () => [postcssNormalize()]
  })

  if (env === 'production') {
    config.devtool = false
  }

  return config
}
