const proxy = {
  'POST /api/login': (req, res) => {
    const { password, username } = req.body
    if (password === '888888' && username === 'admin') {
      return res.send({
        status: 'ok',
        code: 1000,
        data: { token: 'token' }
      })
    } else {
      return res.send({ status: 'error', code: 4001 })
    }
  },
  'POST /api/userInfo': (req, res) => {
    const { token } = req.body
    if (token === 'token') {
      return res.send({
        status: 'ok',
        code: 1000,
        data: {
          name: '白桦的账号',
          avatar:
            'http://image.baidu.com/search/detail?ct=503316480&z=0&ipn=false&word=%E5%A4%B4%E5%83%8F&hs=0&pn=5&spn=0&di=54890&pi=0&rn=1&tn=baiduimagedetail&is=0%2C0&ie=utf-8&oe=utf-8&cl=2&lm=-1&cs=2652953858%2C1039653315&os=946721835%2C2993728881&simid=0%2C0&adpicid=0&lpn=0&ln=30&fr=ala&fm=&sme=&cg=head&bdtype=0&oriquery=%E5%A4%B4%E5%83%8F&objurl=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201510%2F23%2F20151023111035_AcCun.thumb.700_0.jpeg&fromurl=ippr_z2C%24qAzdH3FAzdH3Fooo_z%26e3B17tpwg2_z%26e3Bv54AzdH3Fks52AzdH3F%3Ft1%3Dc08am99bc&gsm=0&islist=&querylist='
        }
      })
    } else {
      return res.send({ status: 'error', code: 4001 })
    }
  }
}
module.exports = proxy
