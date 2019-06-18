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
  'GET /api/userInfo': (req, res) => {
    const { token } = req.headers
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
  'POST /api/logout': (req, res) => {
    const { token } = req.headers
    if (token === 'token') {
      return res.send({
        status: 'ok',
        code: 1000,
      })
    } else {
      return res.send({ status: 'error', code: 4001 })
    }
  },
  'GET /api/menus': (req, res) => {
    const { token } = req.headers
    if (token === 'token') {
      return res.send({
        status: 'ok',
        code: 1000,
        data: [
          {
            id: 1,
            pid: -1,
            icon: 'dashboard',
            name: '工作台',
            path: '/',
          },
          {
            id: 2,
            pid: -1,
            icon: 'form',
            name: '表单页',
            path: '/form',
          },
          {
            id: 3,
            pid: 2,
            icon: '',
            name: '基础表单',
            path: '/form/basic-form',
          },
          {
            id: 4,
            pid: 2,
            icon: '',
            name: '分布表单',
            path: '/form/step-form',
          },
        ],
      })
    } else {
      return res.send({ status: 'error', code: 4001 })
    }
  },
}
module.exports = proxy
