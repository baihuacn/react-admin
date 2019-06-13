const proxy = {
  'POST /api/login': (req, res) => {
    const { password, username } = req.body
    if (password === '888888' && username === 'admin') {
      return res.send({
        status: 'ok',
        code: 1000,
        data: { token: 'token' },
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
          id: 'id',
          name: '白桦的账号',
          avatar: 'https://img.52z.com/upload/news/image/20180108/20180108080908_15279.jpg',
        },
      })
    } else {
      return res.send({ status: 'error', code: 4001 })
    }
  },
}
module.exports = proxy
