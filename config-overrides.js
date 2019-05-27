const reactAppRewirePostcss = require('react-app-rewire-postcss')
const postcssNormalize = require('postcss-normalize')

module.exports = function override(config, env) {
  config = reactAppRewirePostcss(config, {
    plugins: () => [postcssNormalize()]
  })
  return config
}
